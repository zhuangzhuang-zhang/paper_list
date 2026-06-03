from __future__ import annotations

import datetime as dt
import json
import os
import re
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path


API_URL = "https://export.arxiv.org/api/query"
OUTPUT_FILE = Path(__file__).resolve().parents[1] / "data" / "site-data.js"
BOARD_ORDER = ["overall", "vla", "wam"]
BOARD_LABELS = {
    "overall": "总榜",
    "vla": "VLA 榜",
    "wam": "WAM 榜",
}
SCORE_DIMENSIONS = {
    "relevance": "与 VLA/WAM/机器人/自动驾驶核心主题的相关程度",
    "novelty": "是否包含新任务、新模型、新基准或新训练范式",
    "impact": "是否具备基础性、统一性或潜在高影响力",
    "practicality": "是否有真实场景、真实机器人/驾驶或较强落地信号",
    "coreAlignment": "是否属于你最关心的 VLA 或 WAM 主航道工作",
}
TARGET_COUNT = 10
BOARD_FOCUS_COUNT = 6
LOOKBACK_DAYS = 7
TREND_LOOKBACK_DAYS = 7
LLM_CANDIDATE_COUNT = 45
MAX_RESULTS_PER_QUERY = 90
MAX_ARCHIVE_DAYS = 45
BATCH_HOUR_BEIJING = 8
TZ_BEIJING = dt.timezone(dt.timedelta(hours=8))
ATOM_NS = {"atom": "http://www.w3.org/2005/Atom"}
USER_AGENT = "paper-list-bot/1.0 (+https://github.com/zhuangzhuang-zhang/paper_list)"
HTTP_RETRY_COUNT = 3
HTTP_RETRY_DELAY_SECONDS = 2

CATEGORY_SCORES = {
    "cs.RO": 6,
    "cs.AI": 3,
    "cs.CV": 3,
    "cs.LG": 2,
}

RECALL_QUERY_GROUPS = {
    "vla_core": [
        'all:"vision-language-action"',
        'all:"vision language action"',
        'all:"generalist robot policy"',
        'all:"language-conditioned policy"',
        'all:"robot foundation model"',
    ],
    "wam_core": [
        'all:"world action model"',
        'all:"video world model"',
        'all:"action-conditioned world model"',
        'all:"action-conditioned video prediction"',
        'all:"world model"',
    ],
    "robotics": [
        "all:robot",
        "all:robotics",
        "all:manipulation",
        "all:embodied",
        "all:navigation",
    ],
    "driving": [
        'all:"autonomous driving"',
        'all:"self-driving"',
        'all:"driving policy"',
        'all:"end-to-end driving"',
    ],
    "general": [
        'all:"foundation model"',
        'all:"unified policy"',
        'all:"multimodal planning"',
        'all:"embodied agent"',
    ],
}

KEYWORD_GROUPS = {
    "vla": {
        "vision-language-action": 12,
        "vision language action": 12,
        "vla": 8,
        "generalist robot policy": 9,
        "language-conditioned policy": 8,
        "robot foundation model": 8,
        "policy model": 4,
    },
    "wam": {
        "world action model": 12,
        "video world model": 10,
        "world model": 8,
        "action-conditioned world model": 9,
        "action-conditioned video prediction": 8,
        "latent dynamics": 6,
    },
    "robotics": {
        "robot": 9,
        "robotics": 9,
        "robotic": 9,
        "manipulation": 7,
        "embodied": 7,
        "navigation": 5,
        "locomotion": 5,
        "policy": 4,
    },
    "driving": {
        "autonomous driving": 10,
        "self-driving": 9,
        "driving": 6,
        "driving policy": 7,
        "trajectory planning": 4,
    },
    "novelty": {
        "benchmark": 5,
        "dataset": 5,
        "new task": 4,
        "training paradigm": 6,
        "pretraining": 5,
        "unified": 5,
        "foundation": 5,
        "generalization": 4,
    },
    "impact": {
        "real robot": 7,
        "real-world": 6,
        "large-scale": 5,
        "state-of-the-art": 5,
        "zero-shot": 5,
        "general-purpose": 5,
        "code": 3,
    },
    "practicality": {
        "real robot": 7,
        "real-driving": 7,
        "deployment": 5,
        "safe": 4,
        "efficient": 4,
        "robust": 4,
        "hardware": 4,
        "code": 3,
    },
}


def main() -> None:
    now_utc = dt.datetime.now(dt.timezone.utc)
    batch = resolve_batch_window(now_utc)
    existing = load_existing_site_data()
    papers = fetch_recent_papers(batch["start_utc"], batch["end_utc"])
    ranked = rank_papers(papers)
    selection_bundle, selection_method, model_info = select_top_papers(ranked)
    archives = update_archives(existing, batch["date_key"], now_utc.isoformat(), selection_bundle)
    current_archive = archives[0] if archives else {}
    current_paper_sets = normalize_paper_sets(current_archive)
    daily_brief = current_archive.get("dailyBrief") or build_fallback_daily_brief(current_paper_sets)
    trend_brief = build_trend_brief(archives)

    payload = {
        "generatedAt": now_utc.isoformat(),
        "description": "按北京时间每天 08:00 的固定批次归档，基于宽召回与 DeepSeek 多维评分，输出总榜、VLA 榜和 WAM 榜。",
        "dateWindowDays": 1,
        "categories": list(CATEGORY_SCORES.keys()),
        "keywords": [
            "vision-language-action",
            "world action model",
            "robotics",
            "autonomous driving",
        ],
        "boardOrder": BOARD_ORDER,
        "boardLabels": BOARD_LABELS,
        "scoreDimensions": SCORE_DIMENSIONS,
        "selectionMethod": selection_method,
        "modelInfo": model_info,
        "batchWindow": {
            "start": batch["start_bj"].isoformat(),
            "end": batch["end_bj"].isoformat(),
        },
        "currentDateKey": current_archive.get("dateKey"),
        "papers": current_paper_sets["overall"],
        "paperSets": current_paper_sets,
        "dailyBrief": daily_brief,
        "trendBrief": trend_brief,
        "archives": archives,
    }
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(
        "window.PAPERS_SITE_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"Batch window: {batch['start_bj'].isoformat()} -> {batch['end_bj'].isoformat()}")
    print(f"Fetched {len(papers)} batch papers")
    print(f"Selection method: {selection_method}")
    print(f"Wrote {len(current_paper_sets['overall'])} overall papers to {OUTPUT_FILE}")


def resolve_batch_window(now_utc: dt.datetime) -> dict:
    now_bj = now_utc.astimezone(TZ_BEIJING)
    batch_end_bj = now_bj.replace(hour=BATCH_HOUR_BEIJING, minute=0, second=0, microsecond=0)
    if now_bj < batch_end_bj:
        batch_end_bj -= dt.timedelta(days=1)

    batch_start_bj = batch_end_bj - dt.timedelta(days=1)
    return {
        "date_key": batch_end_bj.strftime("%Y%m%d"),
        "start_bj": batch_start_bj,
        "end_bj": batch_end_bj,
        "start_utc": batch_start_bj.astimezone(dt.timezone.utc),
        "end_utc": batch_end_bj.astimezone(dt.timezone.utc),
    }


def load_existing_site_data() -> dict:
    if not OUTPUT_FILE.exists():
        return {}

    text = OUTPUT_FILE.read_text(encoding="utf-8").strip()
    prefix = "window.PAPERS_SITE_DATA = "
    if not text.startswith(prefix):
        return {}

    json_text = text[len(prefix):]
    if json_text.endswith(";"):
        json_text = json_text[:-1]

    try:
        return json.loads(json_text)
    except json.JSONDecodeError:
        return {}


def update_archives(existing: dict, date_key: str, generated_at: str, selection_bundle: dict) -> list[dict]:
    archive_map: dict[str, dict] = {}
    for archive in existing.get("archives", []):
        normalized = normalize_archive_structure(archive)
        if normalized.get("dateKey"):
            archive_map[normalized["dateKey"]] = normalized

    if selection_bundle.get("paperSets", {}).get("overall"):
        archive_map[date_key] = {
            "dateKey": date_key,
            "dateLabel": format_date_label(date_key),
            "generatedAt": generated_at,
            "paperCount": len(selection_bundle["paperSets"]["overall"]),
            "papers": selection_bundle["paperSets"]["overall"],
            "paperSets": selection_bundle["paperSets"],
            "dailyBrief": selection_bundle["dailyBrief"],
        }
    elif date_key in archive_map:
        archive_map[date_key]["generatedAt"] = generated_at

    ordered_keys = sorted(archive_map.keys(), reverse=True)
    archives = [normalize_archive_structure(archive_map[key]) for key in ordered_keys[:MAX_ARCHIVE_DAYS]]

    for archive in archives:
        archive["dateLabel"] = archive.get("dateLabel") or format_date_label(archive["dateKey"])
        archive["paperCount"] = len(normalize_paper_sets(archive)["overall"])

    return archives


def normalize_archive_structure(archive: dict) -> dict:
    normalized = dict(archive or {})
    paper_sets = normalize_paper_sets(normalized)
    normalized["paperSets"] = paper_sets
    normalized["papers"] = paper_sets["overall"]
    normalized["dailyBrief"] = normalized.get("dailyBrief") or build_fallback_daily_brief(paper_sets)
    return normalized


def normalize_paper_sets(container: dict) -> dict:
    source_sets = container.get("paperSets")
    if isinstance(source_sets, dict):
        overall = list(source_sets.get("overall") or container.get("papers") or [])
        vla = list(source_sets.get("vla") or derive_focus_board(overall, "vla", BOARD_FOCUS_COUNT))
        wam = list(source_sets.get("wam") or derive_focus_board(overall, "wam", BOARD_FOCUS_COUNT))
    else:
        overall = list(container.get("papers") or [])
        vla = derive_focus_board(overall, "vla", BOARD_FOCUS_COUNT)
        wam = derive_focus_board(overall, "wam", BOARD_FOCUS_COUNT)

    return {"overall": overall, "vla": vla, "wam": wam}


def format_date_label(date_key: str) -> str:
    return f"{date_key[:4]}-{date_key[4:6]}-{date_key[6:8]}"


def fetch_recent_papers(start_utc: dt.datetime, end_utc: dt.datetime) -> list[dict]:
    papers_by_id: dict[str, dict] = {}

    for category in CATEGORY_SCORES:
        query = f"cat:{category}"
        try:
            incoming = fetch_query_results(query, MAX_RESULTS_PER_QUERY)
            merge_papers(papers_by_id, incoming, start_utc, end_utc, f"category:{category}")
        except Exception as exc:
            print(f"Skipping category query {query}: {exc}")

    for group, queries in RECALL_QUERY_GROUPS.items():
        for query in queries:
            try:
                incoming = fetch_query_results(query, 40)
                merge_papers(papers_by_id, incoming, start_utc, end_utc, group)
            except Exception as exc:
                print(f"Skipping targeted query {query}: {exc}")

    return list(papers_by_id.values())


def fetch_query_results(search_query: str, max_results: int) -> list[dict]:
    params = {
        "search_query": search_query,
        "start": 0,
        "max_results": max_results,
        "sortBy": "submittedDate",
        "sortOrder": "descending",
    }
    url = f"{API_URL}?{urllib.parse.urlencode(params)}"
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    xml_payload = fetch_bytes(request, timeout=30)
    root = ET.fromstring(xml_payload)
    entries = root.findall("atom:entry", ATOM_NS)
    return [parse_entry(entry) for entry in entries]


def merge_papers(
    papers_by_id: dict[str, dict],
    incoming: list[dict],
    start_utc: dt.datetime,
    end_utc: dt.datetime,
    source_label: str,
) -> None:
    for paper in incoming:
        if paper["published_dt"] < start_utc or paper["published_dt"] >= end_utc:
            continue

        existing = papers_by_id.get(paper["id"])
        if existing is None:
            paper["retrievalLabels"] = [source_label]
            paper["retrievalGroups"] = [source_label.split(":", 1)[0]]
            papers_by_id[paper["id"]] = paper
            continue

        merged_categories = sorted(set(existing["categories"] + paper["categories"]))
        merged_authors = existing["authors"] or paper["authors"]
        merged_summary = existing["summary_raw"] if len(existing["summary_raw"]) >= len(paper["summary_raw"]) else paper["summary_raw"]
        retrieval_labels = sorted(set(existing.get("retrievalLabels", []) + [source_label]))
        retrieval_groups = sorted(set(existing.get("retrievalGroups", []) + [source_label.split(":", 1)[0]]))
        existing.update(
            {
                "summary_raw": merged_summary,
                "summary": build_short_summary(merged_summary),
                "categories": merged_categories,
                "authors": merged_authors[:8],
                "updated_dt": max(existing["updated_dt"], paper["updated_dt"]),
                "retrievalLabels": retrieval_labels,
                "retrievalGroups": retrieval_groups,
            }
        )


def parse_entry(entry: ET.Element) -> dict:
    title = clean_text(entry.findtext("atom:title", default="", namespaces=ATOM_NS))
    summary = clean_text(entry.findtext("atom:summary", default="", namespaces=ATOM_NS))
    paper_id = entry.findtext("atom:id", default="", namespaces=ATOM_NS).rsplit("/", 1)[-1]
    published_raw = entry.findtext("atom:published", default="", namespaces=ATOM_NS)
    updated_raw = entry.findtext("atom:updated", default="", namespaces=ATOM_NS)
    published_dt = dt.datetime.fromisoformat(published_raw.replace("Z", "+00:00"))
    updated_dt = dt.datetime.fromisoformat(updated_raw.replace("Z", "+00:00"))
    authors = [
        clean_text(author.findtext("atom:name", default="", namespaces=ATOM_NS))
        for author in entry.findall("atom:author", ATOM_NS)
    ]
    categories = [category.attrib.get("term", "") for category in entry.findall("atom:category", ATOM_NS)]

    return {
        "id": paper_id,
        "title": title,
        "summary_raw": summary,
        "summary": build_short_summary(summary),
        "link": f"https://arxiv.org/abs/{paper_id}",
        "pdfLink": f"https://arxiv.org/pdf/{paper_id}",
        "published": published_raw,
        "updated": updated_raw,
        "published_dt": published_dt,
        "updated_dt": updated_dt,
        "authors": authors[:8],
        "categories": categories,
    }


def rank_papers(papers: list[dict]) -> list[dict]:
    ranked = []
    for paper in papers:
        heuristic_profile = compute_heuristic_profile(paper)
        paper["heuristicProfile"] = heuristic_profile
        paper["heuristic_score"] = heuristic_profile["overall"]
        paper["lane"] = heuristic_profile["lane"]
        paper["mergedPaperIds"] = [paper["id"]]
        paper["mergedTitles"] = [paper["title"]]
        paper["mergedCount"] = 1
        ranked.append(paper)

    ranked = merge_similar_papers(ranked)

    ranked.sort(
        key=lambda paper: (
            paper["heuristic_score"],
            paper["heuristicProfile"]["core_alignment"],
            paper["published_dt"],
            paper["updated_dt"],
        ),
        reverse=True,
    )
    return ranked


def compute_heuristic_profile(paper: dict) -> dict:
    haystack = f"{paper['title']} {paper['summary_raw']}".lower()
    category_score = sum(CATEGORY_SCORES.get(category, 0) for category in paper["categories"])
    vla = count_keyword_hits(haystack, KEYWORD_GROUPS["vla"])
    wam = count_keyword_hits(haystack, KEYWORD_GROUPS["wam"])
    robotics = count_keyword_hits(haystack, KEYWORD_GROUPS["robotics"])
    driving = count_keyword_hits(haystack, KEYWORD_GROUPS["driving"])
    novelty = count_keyword_hits(haystack, KEYWORD_GROUPS["novelty"])
    impact = count_keyword_hits(haystack, KEYWORD_GROUPS["impact"])
    practicality = count_keyword_hits(haystack, KEYWORD_GROUPS["practicality"])
    freshness = max(0, LOOKBACK_DAYS - max((dt.datetime.now(dt.timezone.utc) - paper["published_dt"]).days, 0))
    core_alignment = max(vla, wam) + min(robotics, 8) + min(driving, 8) + category_score
    relevance = max(vla, wam) * 2 + robotics + driving + category_score
    overall = relevance + novelty + impact + practicality + freshness
    lane = infer_lane_from_profile(vla, wam, robotics, driving)

    return {
        "overall": overall,
        "relevance": relevance,
        "novelty": novelty + freshness,
        "impact": impact + category_score,
        "practicality": practicality,
        "core_alignment": core_alignment,
        "vla": vla,
        "wam": wam,
        "robotics": robotics,
        "driving": driving,
        "lane": lane,
    }


def count_keyword_hits(text: str, keyword_weights: dict[str, int]) -> int:
    score = 0
    for keyword, weight in keyword_weights.items():
        if keyword in text:
            score += weight
    return score


def infer_lane_from_profile(vla: int, wam: int, robotics: int, driving: int) -> str:
    if vla >= 10 and wam >= 10:
        return "Both"
    if vla >= max(wam, 9):
        return "VLA"
    if wam >= max(vla, 9):
        return "WAM"
    if robotics >= 12 or driving >= 12:
        return "Robotics"
    return "Peripheral"


def select_top_papers(papers: list[dict]) -> tuple[dict, str, dict | None]:
    if not papers:
        return {"paperSets": {"overall": [], "vla": [], "wam": []}, "dailyBrief": build_fallback_daily_brief({"overall": [], "vla": [], "wam": []})}, "empty", None

    llm_config = load_llm_config()
    candidates = dedupe_candidates(papers[:LLM_CANDIDATE_COUNT])
    if llm_config:
        try:
            bundle = build_assistant_bundle_with_llm(candidates, llm_config)
            if bundle["paperSets"]["overall"]:
                return bundle, "deepseek_research_assistant", {
                    "provider": llm_config["provider"],
                    "model": llm_config["model"],
                    "candidateCount": len(candidates),
                }
        except Exception as exc:
            print(f"DeepSeek research assistant failed, falling back to rules: {exc}")

    return fallback_build_bundle(papers), "rule_based", None


def dedupe_candidates(papers: list[dict]) -> list[dict]:
    selected: list[dict] = []
    seen_titles: set[str] = set()
    for paper in papers:
        key = normalize_title(paper["title"])
        if key in seen_titles:
            continue
        seen_titles.add(key)
        selected.append(paper)
    return selected


def build_assistant_bundle_with_llm(candidates: list[dict], llm_config: dict) -> dict:
    prompt_payload = []
    for paper in candidates:
        prompt_payload.append(
            {
                "id": paper["id"],
                "title": paper["title"],
                "summary": trim_text(paper["summary_raw"], 900),
                "categories": paper["categories"],
                "authors": paper["authors"][:5],
                "published": paper["published"],
                "retrieval_groups": paper.get("retrievalGroups", []),
                "merged_variant_count": paper.get("mergedCount", 1),
                "merged_titles": paper.get("mergedTitles", [])[:4],
                "heuristic_lane": paper.get("lane"),
                "heuristic_profile": paper.get("heuristicProfile"),
            }
        )

    system_prompt = (
        "You are an expert research assistant for VLA, WAM, robotics, and autonomous driving. "
        "You must prioritize the newest and most important papers. "
        "Use broad semantic understanding rather than exact keyword matching. "
        "Avoid redundant papers with overlapping contributions: if two papers are near-duplicates, keep the more foundational or impactful one."
    )
    user_prompt = (
        "Select papers from the candidate list and return strict JSON only.\n"
        f"Build three ranked lists: overall_top_ids (up to {TARGET_COUNT}), vla_top_ids (up to {BOARD_FOCUS_COUNT}), wam_top_ids (up to {BOARD_FOCUS_COUNT}).\n"
        "Definitions:\n"
        "- VLA: core papers about vision-language-action policies, generalist robot policy, language-conditioned robot action, or embodied policy learning.\n"
        "- WAM: core papers about world action models, video/world dynamics models tied to action prediction, control, planning, or action-conditioned simulation.\n"
        "- Avoid weakly related papers unless their impact is unusually high.\n"
        "For each selected paper analysis, return:\n"
        "- id\n"
        "- lane: one of VLA, WAM, Both, Robotics, Peripheral\n"
        "- importance_level: one of S, A, B\n"
        "- overall_score, relevance_score, novelty_score, impact_score, practicality_score, core_alignment_score: integers 0-100\n"
        "- one_sentence_summary_cn: concise Chinese sentence within 35 Chinese characters\n"
        "- concise_abstract_cn: concise Chinese abstract within 90 to 140 Chinese characters\n"
        "- why_important_cn: concise Chinese reason within 70 Chinese characters\n"
        "- reason_tags: 2 to 4 short Chinese tags\n"
        "- innovation_points: 1 to 3 concise Chinese points\n"
        "- novelty_verdict_cn: concise Chinese judgment about innovation level\n"
        "- duplicate_risk: one of low, medium, high\n"
        "- dedupe_note_cn: concise Chinese note about why it is not redundant or how it differs\n"
        "Also return a daily_brief object with overall_cn, vla_cn, wam_cn, retrieval_cn.\n"
        "JSON schema:\n"
        "{"
        '"daily_brief":{"overall_cn":"","vla_cn":"","wam_cn":"","retrieval_cn":""},'
        '"overall_top_ids":[""],'
        '"vla_top_ids":[""],'
        '"wam_top_ids":[""],'
        '"paper_analysis":[{"id":"","lane":"VLA","importance_level":"S","overall_score":95,"relevance_score":94,"novelty_score":93,"impact_score":90,"practicality_score":85,"core_alignment_score":96,"one_sentence_summary_cn":"","concise_abstract_cn":"","why_important_cn":"","reason_tags":[""],"innovation_points":[""],"novelty_verdict_cn":"","duplicate_risk":"low","dedupe_note_cn":""}]}'
        "}\n"
        "Candidate papers JSON:\n"
        f"{json.dumps(prompt_payload, ensure_ascii=False)}"
    )

    result = call_chat_completion(system_prompt, user_prompt, llm_config)
    candidate_map = {paper["id"]: paper for paper in candidates}
    analysis_map = normalize_analysis_map(result.get("paper_analysis", []), candidate_map)
    overall_ids = normalize_ranked_ids(result.get("overall_top_ids"), candidate_map, TARGET_COUNT)
    vla_ids = normalize_ranked_ids(result.get("vla_top_ids"), candidate_map, BOARD_FOCUS_COUNT)
    wam_ids = normalize_ranked_ids(result.get("wam_top_ids"), candidate_map, BOARD_FOCUS_COUNT)

    bundle = {
        "paperSets": {
            "overall": build_board_from_ids(overall_ids, candidates, analysis_map, "overall", TARGET_COUNT),
            "vla": build_board_from_ids(vla_ids, candidates, analysis_map, "vla", BOARD_FOCUS_COUNT),
            "wam": build_board_from_ids(wam_ids, candidates, analysis_map, "wam", BOARD_FOCUS_COUNT),
        },
        "dailyBrief": normalize_daily_brief(result.get("daily_brief")),
    }

    if not bundle["paperSets"]["overall"]:
        raise RuntimeError("No overall papers returned by LLM")

    bundle["papers"] = bundle["paperSets"]["overall"]
    bundle["dailyBrief"] = bundle["dailyBrief"] or build_fallback_daily_brief(bundle["paperSets"])
    return finalize_bundle(bundle, candidates)


def normalize_analysis_map(analysis_items: list[dict], candidate_map: dict[str, dict]) -> dict[str, dict]:
    analysis_map: dict[str, dict] = {}
    for item in analysis_items or []:
        paper_id = clean_text(str(item.get("id", "")))
        if not paper_id or paper_id not in candidate_map:
            continue
        candidate = candidate_map[paper_id]
        profile = candidate["heuristicProfile"]
        analysis_map[paper_id] = {
            "lane": normalize_lane(item.get("lane"), candidate.get("lane")),
            "importanceLevel": normalize_importance(item.get("importance_level"), profile["overall"]),
            "score": clamp_score(item.get("overall_score"), profile["overall"]),
            "dimensionScores": {
                "relevance": clamp_score(item.get("relevance_score"), profile["relevance"]),
                "novelty": clamp_score(item.get("novelty_score"), profile["novelty"]),
                "impact": clamp_score(item.get("impact_score"), profile["impact"]),
                "practicality": clamp_score(item.get("practicality_score"), profile["practicality"]),
                "coreAlignment": clamp_score(item.get("core_alignment_score"), profile["core_alignment"]),
            },
            "oneSentenceSummary": clean_text(item.get("one_sentence_summary_cn") or build_cn_fallback_summary(candidate)),
            "summaryCn": clean_text(item.get("concise_abstract_cn") or build_cn_fallback_abstract(candidate)),
            "whyImportant": clean_text(item.get("why_important_cn") or build_cn_fallback_reason(candidate)),
            "reasonTags": normalize_string_list(item.get("reason_tags"), build_reason_tags(candidate), 4),
            "innovationPoints": normalize_string_list(item.get("innovation_points"), build_fallback_innovation_points(candidate), 3),
            "noveltyVerdict": clean_text(item.get("novelty_verdict_cn") or build_fallback_novelty_verdict(candidate)),
            "duplicateRisk": normalize_duplicate_risk(item.get("duplicate_risk") or duplicate_risk_from_merged_count(candidate)),
            "dedupeNote": clean_text(item.get("dedupe_note_cn") or build_fallback_dedupe_note(candidate)),
        }
    return analysis_map


def normalize_ranked_ids(value: object, candidate_map: dict[str, dict], limit: int) -> list[str]:
    if not isinstance(value, list):
        return []
    result: list[str] = []
    seen_ids: set[str] = set()
    seen_titles: set[str] = set()
    for item in value:
        paper_id = clean_text(str(item))
        if not paper_id or paper_id in seen_ids or paper_id not in candidate_map:
            continue
        title_key = normalize_title(candidate_map[paper_id]["title"])
        if title_key in seen_titles:
            continue
        seen_ids.add(paper_id)
        seen_titles.add(title_key)
        result.append(paper_id)
        if len(result) == limit:
            break
    return result


def build_board_from_ids(
    ranked_ids: list[str],
    candidates: list[dict],
    analysis_map: dict[str, dict],
    board: str,
    limit: int,
) -> list[dict]:
    candidate_map = {paper["id"]: paper for paper in candidates}
    board_items = []
    seen_ids: set[str] = set()
    for paper_id in ranked_ids:
        if paper_id in candidate_map and paper_id not in seen_ids:
            board_items.append(build_selected_paper(candidate_map[paper_id], analysis_map.get(paper_id)))
            seen_ids.add(paper_id)

    if len(board_items) < limit:
        fallback = fallback_select_subset(candidates, limit, board)
        for paper in fallback:
            if paper["id"] in seen_ids:
                continue
            board_items.append(paper)
            seen_ids.add(paper["id"])
            if len(board_items) == limit:
                break

    return board_items[:limit]


def finalize_bundle(bundle: dict, ranked_candidates: list[dict]) -> dict:
    paper_sets = bundle["paperSets"]
    if not paper_sets["vla"]:
        paper_sets["vla"] = derive_focus_board(paper_sets["overall"] or ranked_candidates, "vla", BOARD_FOCUS_COUNT)
    if not paper_sets["wam"]:
        paper_sets["wam"] = derive_focus_board(paper_sets["overall"] or ranked_candidates, "wam", BOARD_FOCUS_COUNT)
    bundle["paperSets"] = paper_sets
    bundle["papers"] = paper_sets["overall"]
    bundle["dailyBrief"] = bundle.get("dailyBrief") or build_fallback_daily_brief(paper_sets)
    return bundle


def fallback_build_bundle(papers: list[dict]) -> dict:
    overall = fallback_select_subset(papers, TARGET_COUNT, "overall")
    vla = fallback_select_subset(papers, BOARD_FOCUS_COUNT, "vla")
    wam = fallback_select_subset(papers, BOARD_FOCUS_COUNT, "wam")
    paper_sets = {"overall": overall, "vla": vla, "wam": wam}
    return {
        "papers": overall,
        "paperSets": paper_sets,
        "dailyBrief": build_fallback_daily_brief(paper_sets),
    }


def fallback_select_subset(papers: list[dict], limit: int, board: str) -> list[dict]:
    scored = sorted(papers, key=lambda paper: fallback_board_score(paper, board), reverse=True)
    selected: list[dict] = []
    seen_titles: set[str] = set()
    for paper in scored:
        title_key = normalize_title(paper["title"])
        if title_key in seen_titles:
            continue
        if board == "vla" and paper["heuristicProfile"]["vla"] <= 0:
            continue
        if board == "wam" and paper["heuristicProfile"]["wam"] <= 0:
            continue
        seen_titles.add(title_key)
        selected.append(build_selected_paper(paper))
        if len(selected) == limit:
            break
    return selected


def fallback_board_score(paper: dict, board: str) -> int:
    profile = paper["heuristicProfile"]
    if board == "vla":
        return profile["vla"] * 3 + profile["relevance"] + profile["novelty"]
    if board == "wam":
        return profile["wam"] * 3 + profile["relevance"] + profile["novelty"]
    return profile["overall"] + profile["core_alignment"]


def derive_focus_board(papers: list[dict], board: str, limit: int) -> list[dict]:
    normalized = []
    for paper in papers:
        if "heuristicProfile" in paper:
            normalized.append(paper)
        else:
            clone = dict(paper)
            summary_raw = clone.get("summaryRaw") or clone.get("summary_raw") or clone.get("summary") or ""
            clone["summary_raw"] = summary_raw
            clone["published_dt"] = dt.datetime.fromisoformat(clone["published"].replace("Z", "+00:00")) if clone.get("published") else dt.datetime.now(dt.timezone.utc)
            clone["updated_dt"] = dt.datetime.fromisoformat(clone["updated"].replace("Z", "+00:00")) if clone.get("updated") else clone["published_dt"]
            clone["heuristicProfile"] = compute_heuristic_profile(clone)
            clone["heuristic_score"] = clone["heuristicProfile"]["overall"]
            normalized.append(clone)
    return fallback_select_subset(normalized, limit, board)


def load_llm_config() -> dict | None:
    api_key = os.getenv("DEEPSEEK_API_KEY", "").strip()
    if not api_key:
        return None

    return {
        "provider": "deepseek",
        "api_key": api_key,
        "base_url": os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com").strip().rstrip("/"),
        "model": os.getenv("DEEPSEEK_MODEL", "deepseek-chat").strip(),
    }


def call_chat_completion(system_prompt: str, user_prompt: str, llm_config: dict) -> dict:
    url = f"{llm_config['base_url']}/chat/completions"
    body = {
        "model": llm_config["model"],
        "temperature": 0.2,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        "response_format": {"type": "json_object"},
    }
    payload = json.dumps(body).encode("utf-8")
    request = urllib.request.Request(
        url,
        data=payload,
        method="POST",
        headers={
            "Authorization": f"Bearer {llm_config['api_key']}",
            "Content-Type": "application/json",
            "User-Agent": USER_AGENT,
        },
    )
    raw = json.loads(fetch_bytes(request, timeout=90).decode("utf-8"))
    content = raw["choices"][0]["message"]["content"]
    return parse_json_from_text(content)


def parse_json_from_text(text: str) -> dict:
    text = text.strip()
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```$", "", text)

    try:
        return json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r"\{[\s\S]*\}", text)
        if not match:
            raise
        return json.loads(match.group(0))


def fetch_bytes(request: urllib.request.Request, timeout: int) -> bytes:
    last_error: Exception | None = None
    for attempt in range(1, HTTP_RETRY_COUNT + 1):
        try:
            with urllib.request.urlopen(request, timeout=timeout) as response:
                return response.read()
        except Exception as exc:
            last_error = exc
            if attempt == HTTP_RETRY_COUNT:
                break
            time.sleep(HTTP_RETRY_DELAY_SECONDS * attempt)
    raise RuntimeError(f"HTTP request failed after {HTTP_RETRY_COUNT} attempts: {last_error}")


def build_selected_paper(paper: dict, analysis: dict | None = None) -> dict:
    profile = paper.get("heuristicProfile") or compute_heuristic_profile(paper)
    analysis = analysis or {
        "lane": normalize_lane(None, paper.get("lane") or profile["lane"]),
        "importanceLevel": importance_from_score(profile["overall"]),
        "score": min(profile["overall"], 100),
        "dimensionScores": {
            "relevance": min(profile["relevance"], 100),
            "novelty": min(profile["novelty"], 100),
            "impact": min(profile["impact"], 100),
            "practicality": min(profile["practicality"], 100),
            "coreAlignment": min(profile["core_alignment"], 100),
        },
        "oneSentenceSummary": build_cn_fallback_summary(paper),
        "summaryCn": build_cn_fallback_abstract(paper),
        "whyImportant": build_cn_fallback_reason(paper),
        "reasonTags": build_reason_tags(paper),
        "innovationPoints": build_fallback_innovation_points(paper),
        "noveltyVerdict": build_fallback_novelty_verdict(paper),
        "duplicateRisk": duplicate_risk_from_merged_count(paper),
        "dedupeNote": build_fallback_dedupe_note(paper),
    }
    return {
        "id": paper["id"],
        "title": paper["title"],
        "summary": paper["summary"],
        "summaryRaw": paper["summary_raw"],
        "link": paper["link"],
        "pdfLink": paper["pdfLink"],
        "published": paper["published"],
        "updated": paper["updated"],
        "authors": paper["authors"],
        "categories": [category for category in paper["categories"] if category in CATEGORY_SCORES][:4],
        "score": analysis["score"],
        "importanceLevel": analysis["importanceLevel"],
        "lane": analysis["lane"],
        "dimensionScores": analysis["dimensionScores"],
        "oneSentenceSummary": analysis["oneSentenceSummary"],
        "summaryCn": analysis["summaryCn"],
        "whyImportant": analysis["whyImportant"],
        "reasonTags": analysis["reasonTags"],
        "innovationPoints": analysis["innovationPoints"],
        "noveltyVerdict": analysis["noveltyVerdict"],
        "duplicateRisk": analysis["duplicateRisk"],
        "dedupeNote": analysis["dedupeNote"],
        "retrievalGroups": paper.get("retrievalGroups", []),
        "mergedCount": int(paper.get("mergedCount", 1) or 1),
        "mergedTitles": list(paper.get("mergedTitles", []))[:4],
    }


def importance_from_score(score: int) -> str:
    if score >= 75:
        return "S"
    if score >= 48:
        return "A"
    return "B"


def normalize_importance(value: str | None, fallback_score: int) -> str:
    normalized = clean_text(value or "").upper()
    if normalized in {"S", "A", "B"}:
        return normalized
    return importance_from_score(fallback_score)


def normalize_lane(value: str | None, fallback: str | None) -> str:
    normalized = clean_text(value or "").title()
    if normalized in {"Vla", "Wam"}:
        return normalized.upper()
    if normalized in {"Both", "Robotics", "Peripheral"}:
        return normalized
    return fallback or "Peripheral"


def normalize_duplicate_risk(value: object) -> str:
    normalized = clean_text(str(value or "")).lower()
    if normalized in {"low", "medium", "high"}:
        return normalized
    return "low"


def normalize_daily_brief(value: object) -> dict:
    if not isinstance(value, dict):
        return {}
    return {
        "overall": clean_text(value.get("overall_cn") or ""),
        "vla": clean_text(value.get("vla_cn") or ""),
        "wam": clean_text(value.get("wam_cn") or ""),
        "retrieval": clean_text(value.get("retrieval_cn") or ""),
    }


def clamp_score(value: object, fallback: int) -> int:
    try:
        score = int(value)
    except (TypeError, ValueError):
        score = int(fallback)
    return max(0, min(score, 100))


def build_reason_tags(paper: dict) -> list[str]:
    haystack = f"{paper['title']} {paper['summary_raw']}".lower()
    tags = []
    if any(keyword in haystack for keyword in KEYWORD_GROUPS["vla"]):
        tags.append("VLA")
    if any(keyword in haystack for keyword in KEYWORD_GROUPS["wam"]):
        tags.append("WAM")
    if any(keyword in haystack for keyword in KEYWORD_GROUPS["robotics"]):
        tags.append("机器人")
    if any(keyword in haystack for keyword in KEYWORD_GROUPS["driving"]):
        tags.append("自动驾驶")
    if any(keyword in haystack for keyword in ("benchmark", "dataset", "evaluation")):
        tags.append("新基准")
    if any(keyword in haystack for keyword in ("foundation", "unified", "general-purpose", "generalist")):
        tags.append("通用框架")
    if "real robot" in haystack or "real-world" in haystack:
        tags.append("真实实验")
    return tags[:4] or ["高相关"]


def build_cn_fallback_summary(paper: dict) -> str:
    lane = paper.get("lane") or paper.get("heuristicProfile", {}).get("lane") or "相关方向"
    lane_text = {"VLA": "VLA", "WAM": "WAM", "Both": "VLA/WAM", "Robotics": "机器人", "Peripheral": "相关方向"}.get(lane, "相关方向")
    return trim_text(f"该论文是偏{lane_text}的重点候选，值得优先阅读。", 35)


def build_cn_fallback_reason(paper: dict) -> str:
    tags = "、".join(build_reason_tags(paper))
    categories = " / ".join([category for category in paper["categories"] if category in CATEGORY_SCORES][:2])
    return trim_text(f"命中{tags}主题，分类覆盖{categories}，并体现较强的新颖性与影响潜力。", 70)


def build_cn_fallback_abstract(paper: dict) -> str:
    raw = clean_text(paper.get("summary_raw", ""))
    if not raw:
        return "这篇论文围绕目标方向提出新方法，并给出实验验证，具有进一步跟踪价值。"
    first_sentence = split_sentences(raw)[0] if split_sentences(raw) else raw
    return trim_text(f"论文核心内容是：{first_sentence}", 140)


def build_fallback_innovation_points(paper: dict) -> list[str]:
    haystack = f"{paper['title']} {paper['summary_raw']}".lower()
    points = []
    if "benchmark" in haystack or "dataset" in haystack:
        points.append("包含新基准或新数据评测")
    if "pretraining" in haystack or "training paradigm" in haystack:
        points.append("涉及新的训练或预训练范式")
    if "real robot" in haystack or "real-world" in haystack:
        points.append("提供真实场景实验验证")
    if not points:
        points.append("提出具有跟踪价值的方法设计")
    return points[:3]


def build_fallback_novelty_verdict(paper: dict) -> str:
    profile = paper.get("heuristicProfile") or {}
    novelty = profile.get("novelty", 0)
    if novelty >= 18:
        return "创新信号强，像是带新范式或新基准的工作。"
    if novelty >= 10:
        return "创新点清晰，属于值得重点跟进的增量改进。"
    return "更偏实用推进型工作，适合结合上下文继续判断。"


def build_fallback_dedupe_note(paper: dict) -> str:
    lane = paper.get("lane") or paper.get("heuristicProfile", {}).get("lane") or "相关方向"
    merged_count = int(paper.get("mergedCount", 1) or 1)
    if merged_count > 1:
        return trim_text(f"该论文已自动合并 {merged_count - 1} 篇近似工作，并保留为{lane}方向代表论文。", 70)
    return trim_text(f"该论文在{lane}方向上具备独立问题设置或代表性贡献，可作为当日候选保留。", 70)


def duplicate_risk_from_merged_count(paper: dict) -> str:
    merged_count = int(paper.get("mergedCount", 1) or 1)
    if merged_count >= 4:
        return "high"
    if merged_count >= 2:
        return "medium"
    return "low"


def build_fallback_daily_brief(paper_sets: dict) -> dict:
    overall = paper_sets.get("overall", [])
    vla = paper_sets.get("vla", [])
    wam = paper_sets.get("wam", [])
    return {
        "overall": trim_text(f"今日总榜优先覆盖最新且高影响潜力的 VLA/WAM/机器人论文，共筛出 {len(overall)} 篇。", 90),
        "vla": trim_text(f"VLA 榜更强调通用策略、语言条件动作与具身控制，当前聚焦 {len(vla)} 篇。", 90),
        "wam": trim_text(f"WAM 榜更强调世界模型、事件级建模与动作预测，当前聚焦 {len(wam)} 篇。", 90),
        "retrieval": "当前采用宽召回检索，再由多维评分进行重排与去重复判断。",
    }


def build_trend_brief(archives: list[dict]) -> dict:
    recent_archives = [normalize_archive_structure(archive) for archive in archives[:TREND_LOOKBACK_DAYS]]
    if not recent_archives:
        return {
            "windowDays": TREND_LOOKBACK_DAYS,
            "dateRange": "",
            "overview": "近期待跟踪数据仍在生成，下一次更新后会形成趋势晨报。",
            "hotspots": "正在汇总近几天的高频主题与主航道变化。",
            "vla": "正在统计 VLA 方向的连续关注热点。",
            "wam": "正在统计 WAM 方向的连续关注热点。",
            "watchlist": "正在生成值得持续跟踪的研究信号。",
        }

    overall_papers = [paper for archive in recent_archives for paper in normalize_paper_sets(archive)["overall"]]
    vla_papers = [paper for archive in recent_archives for paper in normalize_paper_sets(archive)["vla"]]
    wam_papers = [paper for archive in recent_archives for paper in normalize_paper_sets(archive)["wam"]]
    lane_counts = count_values((paper.get("lane") or "Peripheral") for paper in overall_papers)
    tag_counts = count_values(tag for paper in overall_papers for tag in (paper.get("reasonTags") or []))
    merged_groups = sum(max(int(paper.get("mergedCount", 1) or 1) - 1, 0) for paper in overall_papers)
    total_overall = len(overall_papers)
    main_lane = most_common_key(lane_counts, "VLA / WAM")
    top_tags = [tag for tag, _ in sorted(tag_counts.items(), key=lambda item: (-item[1], item[0]))[:3]]
    s_level_count = sum(1 for paper in overall_papers if clean_text(paper.get("importanceLevel")).upper() == "S")
    date_range = f"{recent_archives[-1]['dateLabel']} - {recent_archives[0]['dateLabel']}"

    vla_ratio = safe_ratio(len(vla_papers), total_overall)
    wam_ratio = safe_ratio(len(wam_papers), total_overall)
    hotspot_text = "、".join(top_tags) if top_tags else "VLA、WAM、机器人"

    return {
        "windowDays": len(recent_archives),
        "dateRange": date_range,
        "overview": trim_text(
            f"近 {len(recent_archives)} 天累计归档 {total_overall} 篇总榜论文，主航道重心偏向 {format_lane_text(main_lane)}，其中 S 级高优先级论文共 {s_level_count} 篇。",
            110,
        ),
        "hotspots": trim_text(
            f"高频主题主要集中在 {hotspot_text}，系统共自动合并 {merged_groups} 篇近似工作，减少了重复阅读负担。",
            110,
        ),
        "vla": trim_text(
            f"VLA 方向在近几天约占总榜的 {vla_ratio:.0%}，重点仍落在通用策略、语言条件动作与具身控制。",
            110,
        ),
        "wam": trim_text(
            f"WAM 方向在近几天约占总榜的 {wam_ratio:.0%}，更集中于世界模型、动作条件预测与规划建模。",
            110,
        ),
        "watchlist": trim_text(
            f"建议优先连续跟踪 {hotspot_text} 相关工作，尤其关注同时具备高新颖性与高落地性的代表论文。",
            110,
        ),
    }


def merge_similar_papers(papers: list[dict]) -> list[dict]:
    ordered = sorted(
        papers,
        key=lambda paper: (
            paper["heuristic_score"],
            paper["heuristicProfile"]["core_alignment"],
            paper["updated_dt"],
        ),
        reverse=True,
    )
    representatives: list[dict] = []
    for paper in ordered:
        match = next((candidate for candidate in representatives if is_probable_duplicate(candidate, paper)), None)
        if match is None:
            representatives.append(paper)
            continue
        merge_duplicate_into(match, paper)
    return representatives


def is_probable_duplicate(left: dict, right: dict) -> bool:
    if left["id"] == right["id"]:
        return True

    left_title = normalize_title(left["title"])
    right_title = normalize_title(right["title"])
    if left_title == right_title:
        return True

    title_overlap = token_overlap_ratio(tokenize_title(left["title"]), tokenize_title(right["title"]))
    shared_authors = len(set(left.get("authors", [])) & set(right.get("authors", [])))
    same_lane = (left.get("lane") or "") == (right.get("lane") or "")

    if title_overlap >= 0.86:
        return True
    if title_overlap >= 0.72 and (shared_authors > 0 or same_lane):
        return True
    if (left_title in right_title or right_title in left_title) and title_overlap >= 0.62:
        return True
    return False


def merge_duplicate_into(target: dict, duplicate: dict) -> None:
    target["categories"] = sorted(set(target["categories"] + duplicate["categories"]))
    target["authors"] = list(dict.fromkeys(target["authors"] + duplicate["authors"]))[:8]
    target["updated_dt"] = max(target["updated_dt"], duplicate["updated_dt"])
    target["published_dt"] = min(target["published_dt"], duplicate["published_dt"])
    if len(duplicate["summary_raw"]) > len(target["summary_raw"]):
        target["summary_raw"] = duplicate["summary_raw"]
        target["summary"] = build_short_summary(duplicate["summary_raw"])
    target["retrievalLabels"] = sorted(set(target.get("retrievalLabels", []) + duplicate.get("retrievalLabels", [])))
    target["retrievalGroups"] = sorted(set(target.get("retrievalGroups", []) + duplicate.get("retrievalGroups", [])))
    target["mergedPaperIds"] = list(dict.fromkeys(target.get("mergedPaperIds", []) + duplicate.get("mergedPaperIds", [duplicate["id"]])))
    target["mergedTitles"] = list(dict.fromkeys(target.get("mergedTitles", []) + duplicate.get("mergedTitles", [duplicate["title"]])))
    target["mergedCount"] = len(target["mergedPaperIds"])


def tokenize_title(title: str) -> set[str]:
    stop_words = {"for", "and", "with", "from", "into", "via", "using", "the", "a", "an", "to", "of", "in", "on"}
    tokens = re.findall(r"[a-z0-9]+", normalize_title(title))
    return {token for token in tokens if len(token) > 2 and token not in stop_words}


def token_overlap_ratio(left: set[str], right: set[str]) -> float:
    if not left or not right:
        return 0.0
    return len(left & right) / max(1, min(len(left), len(right)))


def count_values(values) -> dict[str, int]:
    counts: dict[str, int] = {}
    for value in values:
        key = clean_text(value)
        if not key:
            continue
        counts[key] = counts.get(key, 0) + 1
    return counts


def most_common_key(counts: dict[str, int], fallback: str) -> str:
    if not counts:
        return fallback
    return sorted(counts.items(), key=lambda item: (-item[1], item[0]))[0][0]


def safe_ratio(part: int, total: int) -> float:
    if total <= 0:
        return 0.0
    return part / total


def format_lane_text(lane: str) -> str:
    mapping = {
        "VLA": "VLA",
        "WAM": "WAM",
        "Both": "VLA / WAM",
        "Robotics": "机器人扩展",
        "Peripheral": "边界相关方向",
    }
    return mapping.get(lane, lane or "相关方向")


def normalize_string_list(value: object, fallback: list[str], limit: int) -> list[str]:
    if not isinstance(value, list):
        return fallback[:limit]
    items = [clean_text(str(item)) for item in value if clean_text(str(item))]
    return items[:limit] or fallback[:limit]


def normalize_title(title: str) -> str:
    return re.sub(r"\s+", " ", clean_text(title)).lower()


def build_short_summary(summary: str) -> str:
    summary = clean_text(summary)
    if len(summary) <= 320:
        return summary
    sentences = split_sentences(summary)
    if len(sentences) <= 2:
        return trim_text(summary, 320)
    concise = " ".join(sentences[:2])
    return trim_text(concise, 340)


def split_sentences(text: str) -> list[str]:
    return [part.strip() for part in re.split(r"(?<=[.!?])\s+", text) if part.strip()]


def clean_text(text: object) -> str:
    return re.sub(r"\s+", " ", str(text or "")).strip()


def trim_text(text: str, limit: int) -> str:
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


if __name__ == "__main__":
    main()
