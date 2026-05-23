"""Scan for RM Psyllium citations in AI engines. Weekly cron job.

Checks Perplexity, Google (via search API), and logs any domain mentions.
Usage:
  python scripts/track_citations.py [--dry-run]
"""
import argparse
import json
import os
import re
import sys
import time
from datetime import datetime
from pathlib import Path

import requests

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv

_ENV_PATH = Path(__file__).parent.parent.parent / "agent1_aeo_discovery" / "config" / "api_keys.env"
if _ENV_PATH.exists():
    load_dotenv(_ENV_PATH)

TARGET_DOMAIN = "rmpsyllium.com"
SEARCH_QUERIES = [
    "psyllium husk supplier India GMP",
    "buy psyllium husk bulk India export",
    "psyllium powder FOB Mundra supplier",
    "psyllium husk 99% purity India manufacturer",
    "verify psyllium supplier COA documentation",
]


def _search_perplexity(query: str) -> list[dict]:
    """Query Perplexity API and check for domain mention in response."""
    api_key = os.getenv("PERPLEXITY_API_KEY")
    if not api_key:
        return []

    try:
        resp = requests.post(
            "https://api.perplexity.ai/chat/completions",
            headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
            json={
                "model": "sonar",
                "messages": [{"role": "user", "content": query}],
                "max_tokens": 500,
            },
            timeout=15,
        )
        resp.raise_for_status()
        content = resp.json()["choices"][0]["message"]["content"]
        citations = []
        if TARGET_DOMAIN in content.lower():
            snippet = _extract_snippet(content, TARGET_DOMAIN)
            citations.append({
                "ai_engine": "perplexity",
                "query": query,
                "citation_snippet": snippet,
                "citation_url": f"https://{TARGET_DOMAIN}",
                "detected_at": datetime.utcnow().isoformat() + "Z",
                "verified": False,
            })
        return citations
    except Exception as e:
        print(f"  Perplexity search failed for '{query}': {e}")
        return []


def _search_google_cse(query: str) -> list[dict]:
    """Query Google Custom Search API for domain citations."""
    api_key = os.getenv("GOOGLE_CSE_API_KEY")
    cx = os.getenv("GOOGLE_CSE_ID")
    if not api_key or not cx:
        return []

    try:
        resp = requests.get(
            "https://www.googleapis.com/customsearch/v1",
            params={"key": api_key, "cx": cx, "q": query, "num": 5},
            timeout=10,
        )
        resp.raise_for_status()
        items = resp.json().get("items", [])
        citations = []
        for item in items:
            if TARGET_DOMAIN in item.get("link", "") or TARGET_DOMAIN in item.get("snippet", ""):
                citations.append({
                    "ai_engine": "google_ai_overview",
                    "query": query,
                    "citation_url": item.get("link", ""),
                    "citation_snippet": item.get("snippet", "")[:300],
                    "detected_at": datetime.utcnow().isoformat() + "Z",
                    "verified": False,
                })
        return citations
    except Exception as e:
        print(f"  Google CSE search failed for '{query}': {e}")
        return []


def _extract_snippet(text: str, domain: str, context_chars: int = 200) -> str:
    idx = text.lower().find(domain.lower())
    if idx == -1:
        return ""
    start = max(0, idx - context_chars // 2)
    end = min(len(text), idx + context_chars // 2)
    return text[start:end].strip()


def _match_citation_to_content(citation_url: str, published_content: list[dict]) -> str | None:
    """Try to match a citation URL to a known published content_id."""
    for item in published_content:
        meta = item.get("export_metadata", {})
        if isinstance(meta, str):
            try:
                meta = json.loads(meta)
            except Exception:
                continue
        filename = meta.get("filename", "")
        if filename and filename.replace(".md", "") in citation_url:
            return item.get("content_id")
    return None


def main():
    parser = argparse.ArgumentParser(description="Citation tracking scan — RM Psyllium Agent 3")
    parser.add_argument("--dry-run", action="store_true", help="Print findings without writing to Supabase")
    parser.add_argument("--queries", nargs="+", help="Override default search queries")
    args = parser.parse_args()

    from src.utils.logger import setup_logging, get_logger, notify_slack
    setup_logging("INFO")
    log = get_logger("citation_tracker")

    queries = args.queries or SEARCH_QUERIES
    all_citations = []

    published_content = []
    if not args.dry_run:
        try:
            from src.utils.supabase_client import fetch_published_content
            published_content = fetch_published_content()
        except Exception as e:
            log.warning("Could not fetch published content from Supabase: %s", e)

    print(f"Scanning {len(queries)} queries for {TARGET_DOMAIN} citations...\n")

    for query in queries:
        print(f"  Querying: {query}")
        cites = _search_perplexity(query)
        cites += _search_google_cse(query)
        all_citations.extend(cites)
        time.sleep(1)  # rate limit

    if not all_citations:
        print("\nNo citations found in this scan.")
        return

    print(f"\nFound {len(all_citations)} citation(s):")
    for c in all_citations:
        print(f"  [{c['ai_engine']}] {c.get('citation_url', 'N/A')}")
        print(f"    Query: {c['query']}")
        if c.get("citation_snippet"):
            print(f"    Snippet: {c['citation_snippet'][:100]}...")

    if not args.dry_run:
        from src.utils.supabase_client import log_citation
        logged = 0
        for c in all_citations:
            content_id = _match_citation_to_content(c.get("citation_url", ""), published_content)
            record = {
                "content_id": content_id,
                "ai_engine": c["ai_engine"],
                "citation_url": c.get("citation_url", ""),
                "citation_snippet": c.get("citation_snippet", ""),
                "detected_at": c["detected_at"],
                "verified": False,
            }
            try:
                log_citation(record)
                logged += 1
            except Exception as e:
                log.error("Failed to log citation: %s", e)

        print(f"\n{logged} citation(s) logged to Supabase citation_tracking table.")
        if all_citations:
            notify_slack(
                f"Agent 3 Citation Alert: Found {len(all_citations)} RM Psyllium mention(s) "
                f"in AI engines. Check Supabase citation_tracking table."
            )


if __name__ == "__main__":
    main()
