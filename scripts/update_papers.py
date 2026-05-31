from __future__ import annotations

import datetime as dt
import json
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path


API_URL = "https://export.arxiv.org/api/query"
OUTPUT_FILE = Path(__file__).resolve().parents[1] / "data" / "site-data.js"
TARGET_COUNT = 20
LOOKBACK_DAYS = 7
MAX_RESULTS = 120
TZ_BEIJING = dt.timezone(dt.timedelta(hours=8))
ATOM_NS = {"atom": "http://www.w3.org/2005/Atom"}

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


def main() -> None:
    papers = fetch_recent_papers()
    selected = select_top_papers(papers)
    payload = {
        "generatedAt": dt.datetime.now(dt.timezone.utc).isoformat(),
        "description": "每天北京时间 08:00 自动更新，按关键词相关性与目标分类筛选近 7 天 arXiv 最新论文。",
        "dateWindowDays": LOOKBACK_DAYS,
        "categories": list(CATEGORY_SCORES.keys()),
        "keywords": [
            "vision-language-action",
            "world action model",
            "robotics",
            "autonomous driving",
        ],
        "papers": selected,
    }
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(
        "window.PAPERS_SITE_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(selected)} papers to {OUTPUT_FILE}")


def fetch_recent_papers() -> list[dict]:
    category_query = "+OR+".join(f"cat:{category}" for category in CATEGORY_SCORES)
    params = {
        "search_query": category_query,
        "start": 0,
        "max_results": MAX_RESULTS,
        "sortBy": "submittedDate",
        "sortOrder": "descending",
    }
    url = f"{API_URL}?{urllib.parse.urlencode(params)}"
    with urllib.request.urlopen(url, timeout=30) as response:
        xml_payload = response.read()

    root = ET.fromstring(xml_payload)
    entries = root.findall("atom:entry", ATOM_NS)
    threshold = dt.datetime.now(dt.timezone.utc) - dt.timedelta(days=LOOKBACK_DAYS)

    papers = []
    for entry in entries:
        parsed = parse_entry(entry)
        if parsed["published_dt"] < threshold:
            continue
        papers.append(parsed)
    return papers


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


def select_top_papers(papers: list[dict]) -> list[dict]:
    scored = []
    for paper in papers:
        score = score_paper(paper)
        if score <= 0:
            continue
        paper["score"] = score
        scored.append(paper)

    scored.sort(
        key=lambda paper: (
            paper["score"],
            paper["published_dt"],
            paper["updated_dt"],
        ),
        reverse=True,
    )

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
                "link": paper["link"],
                "pdfLink": paper["pdfLink"],
                "published": paper["published"],
                "updated": paper["updated"],
                "authors": paper["authors"],
                "categories": [category for category in paper["categories"] if category in CATEGORY_SCORES][:4],
                "score": paper["score"],
            }
        )
        if len(selected) == TARGET_COUNT:
            break

    return selected


def score_paper(paper: dict) -> int:
    haystack = f"{paper['title']} {paper['summary_raw']}".lower()
    score = 0

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
