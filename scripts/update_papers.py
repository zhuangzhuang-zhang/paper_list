from __future__ import annotations

import datetime as dt
import json
import os
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path


API_URL = "https://export.arxiv.org/api/query"
OUTPUT_FILE = Path(__file__).resolve().parents[1] / "data" / "site-data.js"
TARGET_COUNT = 10
LOOKBACK_DAYS = 7
LLM_CANDIDATE_COUNT = 30
MAX_RESULTS_PER_QUERY = 80
MAX_ARCHIVE_DAYS = 45
BATCH_HOUR_BEIJING = 8
TZ_BEIJING = dt.timezone(dt.timedelta(hours=8))
ATOM_NS = {"atom": "http://www.w3.org/2005/Atom"}
USER_AGENT = "paper-list-bot/1.0 (+https://github.com/zhuangzhuang-zhang/paper_list)"

CATEGORY_SCORES = {
    "cs.RO": 5,
    "cs.AI": 3,
    "cs.CV": 3,
    "cs.LG": 2,
}

KEYWORD_WEIGHTS = {
    "vision-language-action": 12,
    "vision language action": 12,
    "vla": 8,
    "world action model": 12,
    "world model": 8,
    "action model": 5,
    "robot": 9,
    "robotics": 9,
    "robotic": 9,
    "manipulation": 7,
    "embodied": 7,
    "navigation": 5,
    "autonomous driving": 10,
    "self-driving": 9,
    "driving": 6,
    "planning": 4,
    "policy": 4,
}

TARGETED_QUERIES = [
    'all:"vision-language-action"',
    'all:"vision language action"',
    'all:"world action model"',
    'all:"autonomous driving"',
    "all:robot",
    "all:robotics",
    "all:manipulation",
    "all:embodied",
]


def main() -> None:
    now_utc = dt.datetime.now(dt.timezone.utc)
    batch = resolve_batch_window(now_utc)
    papers = fetch_recent_papers(batch["start_utc"], batch["end_utc"])
    ranked = rank_papers(papers)
    selected, selection_method, model_info = select_top_papers(ranked)
    date_key = batch["date_key"]
    existing = load_existing_site_data()
    archives = update_archives(existing, date_key, now_utc.isoformat(), selected)
    current_archive = archives[0] if archives else None

    payload = {
        "generatedAt": now_utc.isoformat(),
        "description": "按北京时间每天 08:00 的固定批次归档，展示上一批次 24 小时内新发布的高相关论文。",
        "dateWindowDays": 1,
        "categories": list(CATEGORY_SCORES.keys()),
        "keywords": [
            "vision-language-action",
            "world action model",
            "robotics",
            "autonomous driving",
        ],
        "selectionMethod": selection_method,
        "modelInfo": model_info,
        "batchWindow": {
            "start": batch["start_bj"].isoformat(),
            "end": batch["end_bj"].isoformat(),
        },
        "currentDateKey": current_archive["dateKey"] if current_archive else None,
        "papers": current_archive["papers"] if current_archive else [],
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
    print(f"Wrote {len(selected)} papers to {OUTPUT_FILE}")


def resolve_batch_window(now_utc: dt.datetime) -> dict:
    now_bj = now_utc.astimezone(TZ_BEIJING)
    batch_end_bj = now_bj.replace(
        hour=BATCH_HOUR_BEIJING,
        minute=0,
        second=0,
        microsecond=0,
    )
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
    suffix = ";"
    if not text.startswith(prefix):
        return {}

    json_text = text[len(prefix):]
    if json_text.endswith(suffix):
        json_text = json_text[:-1]

    try:
        return json.loads(json_text)
    except json.JSONDecodeError:
        return {}


def update_archives(existing: dict, date_key: str, generated_at: str, papers: list[dict]) -> list[dict]:
    archive_map = {}
    for archive in existing.get("archives", []):
        if archive.get("dateKey"):
            archive_map[archive["dateKey"]] = archive

    if papers:
        archive_map[date_key] = {
            "dateKey": date_key,
            "dateLabel": format_date_label(date_key),
            "generatedAt": generated_at,
            "paperCount": len(papers),
            "papers": papers,
        }
    elif date_key in archive_map:
        existing_archive = archive_map[date_key]
        existing_archive["generatedAt"] = generated_at
        archive_map[date_key] = existing_archive

    ordered_keys = sorted(archive_map.keys(), reverse=True)
    archives = [archive_map[key] for key in ordered_keys[:MAX_ARCHIVE_DAYS]]

    for archive in archives:
        archive["dateLabel"] = archive.get("dateLabel") or format_date_label(archive["dateKey"])
        archive["paperCount"] = len(archive.get("papers", []))

    return archives


def format_date_label(date_key: str) -> str:
    return f"{date_key[:4]}-{date_key[4:6]}-{date_key[6:8]}"


def fetch_recent_papers(start_utc: dt.datetime, end_utc: dt.datetime) -> list[dict]:
    papers_by_id: dict[str, dict] = {}

    for category in CATEGORY_SCORES:
        query = f"cat:{category}"
        merge_papers(papers_by_id, fetch_query_results(query, MAX_RESULTS_PER_QUERY), start_utc, end_utc)

    for query in TARGETED_QUERIES:
        merge_papers(papers_by_id, fetch_query_results(query, 30), start_utc, end_utc)

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

    with urllib.request.urlopen(request, timeout=30) as response:
        xml_payload = response.read()

    root = ET.fromstring(xml_payload)
    entries = root.findall("atom:entry", ATOM_NS)
    return [parse_entry(entry) for entry in entries]


def merge_papers(
    papers_by_id: dict[str, dict],
    incoming: list[dict],
    start_utc: dt.datetime,
    end_utc: dt.datetime,
) -> None:
    for paper in incoming:
        if paper["published_dt"] < start_utc or paper["published_dt"] >= end_utc:
            continue

        existing = papers_by_id.get(paper["id"])
        if existing is None:
            papers_by_id[paper["id"]] = paper
            continue

        merged_categories = sorted(set(existing["categories"] + paper["categories"]))
        merged_authors = existing["authors"] or paper["authors"]
        merged_summary = existing["summary_raw"] if len(existing["summary_raw"]) >= len(paper["summary_raw"]) else paper["summary_raw"]
        existing.update(
            {
                "summary_raw": merged_summary,
                "summary": build_short_summary(merged_summary),
                "categories": merged_categories,
                "authors": merged_authors[:8],
                "updated_dt": max(existing["updated_dt"], paper["updated_dt"]),
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
    pdf_link = f"https://arxiv.org/pdf/{paper_id}"

    return {
        "id": paper_id,
        "title": title,
        "summary_raw": summary,
        "summary": build_short_summary(summary),
        "link": f"https://arxiv.org/abs/{paper_id}",
        "pdfLink": pdf_link,
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
        heuristic_score = score_paper(paper)
        paper["heuristic_score"] = heuristic_score
        ranked.append(paper)

    ranked.sort(
        key=lambda paper: (
            paper["heuristic_score"],
            paper["published_dt"],
            paper["updated_dt"],
        ),
        reverse=True,
    )
    return ranked


def select_top_papers(papers: list[dict]) -> tuple[list[dict], str, dict | None]:
    if not papers:
        return [], "empty", None

    llm_config = load_llm_config()
    candidates = papers[:LLM_CANDIDATE_COUNT]
    if llm_config:
        try:
            selected = rerank_with_llm(candidates, llm_config)
            if selected:
                return selected, "deepseek_rerank", {
                    "provider": llm_config["provider"],
                    "model": llm_config["model"],
                    "candidateCount": len(candidates),
                }
        except Exception as exc:
            print(f"DeepSeek rerank failed, falling back to rules: {exc}")

    return fallback_select_top_papers(papers), "rule_based", None


def fallback_select_top_papers(papers: list[dict]) -> list[dict]:
    scored = papers[:]

    if not scored:
        return []

    selected = []
    seen_titles = set()
    for paper in scored:
        normalized_title = re.sub(r"\s+", " ", paper["title"]).strip().lower()
        if normalized_title in seen_titles:
          continue
        seen_titles.add(normalized_title)
        selected.append(
            {
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
                "score": paper["heuristic_score"],
                "importanceLevel": importance_from_score(paper["heuristic_score"]),
                "oneSentenceSummary": build_cn_fallback_summary(paper),
                "whyImportant": build_cn_fallback_reason(paper),
                "reasonTags": build_reason_tags(paper),
            }
        )
        if len(selected) == TARGET_COUNT:
            break

    if len(selected) < TARGET_COUNT:
        for paper in papers:
            if len(selected) == TARGET_COUNT:
                break
            normalized_title = re.sub(r"\s+", " ", paper["title"]).strip().lower()
            if normalized_title in seen_titles:
                continue
            seen_titles.add(normalized_title)
            selected.append(
                {
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
                    "score": paper.get("heuristic_score", 0),
                    "importanceLevel": importance_from_score(paper.get("heuristic_score", 0)),
                    "oneSentenceSummary": build_cn_fallback_summary(paper),
                    "whyImportant": build_cn_fallback_reason(paper),
                    "reasonTags": build_reason_tags(paper),
                }
            )

    return selected


def load_llm_config() -> dict | None:
    api_key = os.getenv("DEEPSEEK_API_KEY", "").strip()
    if not api_key:
        return None

    base_url = os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com").strip().rstrip("/")
    model = os.getenv("DEEPSEEK_MODEL", "deepseek-chat").strip()
    return {
        "provider": "deepseek",
        "api_key": api_key,
        "base_url": base_url,
        "model": model,
    }


def rerank_with_llm(candidates: list[dict], llm_config: dict) -> list[dict]:
    prompt_payload = []
    for paper in candidates:
        prompt_payload.append(
            {
                "id": paper["id"],
                "title": paper["title"],
                "summary": paper["summary_raw"],
                "categories": paper["categories"],
                "authors": paper["authors"][:5],
                "published": paper["published"],
                "link": paper["link"],
                "heuristic_score": paper["heuristic_score"],
            }
        )

    system_prompt = (
        "You are an expert research scout for robotics, VLA, world action models, and autonomous driving. "
        "Select the top 10 papers from the provided candidates. Focus on: "
        "1) strong relevance to VLA, WAM, robotics, or autonomous driving; "
        "2) genuine novelty such as new models, tasks, benchmarks, or training paradigms; "
        "3) practical value such as real-robot or real-driving experiments and code availability if visible; "
        "4) high impact potential such as foundation models, unified frameworks, or general methods. "
        "Return strict JSON only."
    )
    user_prompt = (
        "Choose exactly 10 papers or fewer if the candidate pool is smaller.\n"
        "For each selected paper, return:\n"
        "- id\n"
        "- importance_level: one of S, A, B\n"
        "- score: integer 0-100\n"
        "- one_sentence_summary_cn: concise Chinese summary within 35 Chinese characters\n"
        "- why_important_cn: concise Chinese reason within 70 Chinese characters\n"
        "- reason_tags: 2 to 4 short Chinese tags\n"
        "- innovation_points: 1 to 3 concise Chinese points\n"
        "Use this JSON schema:\n"
        "{"
        '"top_papers":[{"id":"","importance_level":"S","score":92,"one_sentence_summary_cn":"","why_important_cn":"","reason_tags":[""],"innovation_points":[""]}]'
        "}\n"
        "Candidate papers JSON:\n"
        f"{json.dumps(prompt_payload, ensure_ascii=False)}"
    )

    result = call_chat_completion(system_prompt, user_prompt, llm_config)
    selected_by_id = {paper["id"]: paper for paper in candidates}
    normalized = []
    seen_ids = set()
    for item in result.get("top_papers", []):
        paper_id = str(item.get("id", "")).strip()
        if not paper_id or paper_id in seen_ids or paper_id not in selected_by_id:
            continue

        paper = selected_by_id[paper_id]
        seen_ids.add(paper_id)
        normalized.append(
            build_selected_paper(
                paper,
                score=coerce_int(item.get("score"), paper["heuristic_score"]),
                importance_level=normalize_importance(item.get("importance_level"), paper["heuristic_score"]),
                one_sentence_summary=clean_text(item.get("one_sentence_summary_cn") or build_cn_fallback_summary(paper)),
                why_important=clean_text(item.get("why_important_cn") or build_cn_fallback_reason(paper)),
                reason_tags=normalize_string_list(item.get("reason_tags"), build_reason_tags(paper), 4),
                innovation_points=normalize_string_list(item.get("innovation_points"), [], 3),
            )
        )
        if len(normalized) == TARGET_COUNT:
            break

    if len(normalized) < TARGET_COUNT:
        fallback = fallback_select_top_papers(candidates)
        existing_ids = {paper["id"] for paper in normalized}
        for paper in fallback:
            if paper["id"] in existing_ids:
                continue
            normalized.append(paper)
            if len(normalized) == TARGET_COUNT:
                break

    return normalized


def call_chat_completion(system_prompt: str, user_prompt: str, llm_config: dict) -> dict:
    url = f"{llm_config['base_url']}/chat/completions"
    body = {
        "model": llm_config["model"],
        "temperature": 0.2,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
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
    with urllib.request.urlopen(request, timeout=90) as response:
        raw = json.loads(response.read().decode("utf-8"))

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


def build_selected_paper(
    paper: dict,
    score: int,
    importance_level: str,
    one_sentence_summary: str,
    why_important: str,
    reason_tags: list[str],
    innovation_points: list[str],
) -> dict:
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
        "score": score,
        "importanceLevel": importance_level,
        "oneSentenceSummary": one_sentence_summary,
        "whyImportant": why_important,
        "reasonTags": reason_tags,
        "innovationPoints": innovation_points,
    }


def score_paper(paper: dict) -> int:
    haystack = f"{paper['title']} {paper['summary_raw']}".lower()
    score = 1

    for category in paper["categories"]:
        score += CATEGORY_SCORES.get(category, 0)

    for keyword, weight in KEYWORD_WEIGHTS.items():
        if keyword in haystack:
            score += weight

    title_lower = paper["title"].lower()
    if "vision-language-action" in title_lower or "world action model" in title_lower:
        score += 8

    if "robot" in title_lower or "driving" in title_lower:
        score += 4

    days_old = max((dt.datetime.now(dt.timezone.utc) - paper["published_dt"]).days, 0)
    freshness_bonus = max(0, LOOKBACK_DAYS - days_old)
    score += freshness_bonus
    return score


def importance_from_score(score: int) -> str:
    if score >= 40:
        return "S"
    if score >= 26:
        return "A"
    return "B"


def normalize_importance(value: str | None, fallback_score: int) -> str:
    normalized = clean_text(value or "").upper()
    if normalized in {"S", "A", "B"}:
        return normalized
    return importance_from_score(fallback_score)


def build_reason_tags(paper: dict) -> list[str]:
    haystack = f"{paper['title']} {paper['summary_raw']}".lower()
    tags = []
    if any(keyword in haystack for keyword in ("vision-language-action", "vision language action", "vla")):
        tags.append("VLA")
    if "world action model" in haystack or "world model" in haystack:
        tags.append("WAM")
    if any(keyword in haystack for keyword in ("robot", "robotics", "manipulation", "embodied")):
        tags.append("机器人")
    if any(keyword in haystack for keyword in ("autonomous driving", "self-driving", "driving")):
        tags.append("自动驾驶")
    if any(keyword in haystack for keyword in ("benchmark", "dataset", "evaluation")):
        tags.append("新基准")
    if any(keyword in haystack for keyword in ("framework", "foundation", "generalist", "unified")):
        tags.append("通用框架")
    return tags[:4] or ["高相关"]


def build_cn_fallback_summary(paper: dict) -> str:
    tags = "、".join(build_reason_tags(paper)[:2])
    if not tags:
        tags = "相关方向"
    return trim_text(f"该论文聚焦{tags}，适合纳入今日重点关注。", 34)


def build_cn_fallback_reason(paper: dict) -> str:
    tags = "、".join(build_reason_tags(paper))
    categories = " / ".join([category for category in paper["categories"] if category in CATEGORY_SCORES][:2])
    return trim_text(f"命中{tags}主题，分类覆盖{categories}，且发布时间较新。", 70)


def normalize_string_list(value: object, fallback: list[str], limit: int) -> list[str]:
    if not isinstance(value, list):
        return fallback[:limit]
    items = [clean_text(str(item)) for item in value if clean_text(str(item))]
    return items[:limit] or fallback[:limit]


def coerce_int(value: object, fallback: int) -> int:
    try:
        return int(value)
    except (TypeError, ValueError):
        return fallback


def build_short_summary(summary: str) -> str:
    summary = clean_text(summary)
    if len(summary) <= 320:
        return summary

    sentences = split_sentences(summary)
    if len(sentences) <= 2:
        return trim_text(summary, 320)

    scored_sentences = []
    for index, sentence in enumerate(sentences):
        sentence_lower = sentence.lower()
        sentence_score = 0
        for keyword, weight in KEYWORD_WEIGHTS.items():
            if keyword in sentence_lower:
                sentence_score += weight
        if 60 <= len(sentence) <= 220:
            sentence_score += 2
        scored_sentences.append((sentence_score, index, sentence))

    scored_sentences.sort(key=lambda item: (item[0], -item[1]), reverse=True)
    selected = sorted(scored_sentences[:2], key=lambda item: item[1])
    concise = " ".join(sentence for _, _, sentence in selected)
    return trim_text(concise, 340)


def split_sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", text)
    return [part.strip() for part in parts if part.strip()]


def clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def trim_text(text: str, limit: int) -> str:
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


if __name__ == "__main__":
    main()
