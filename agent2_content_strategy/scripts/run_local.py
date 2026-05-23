#!/usr/bin/env python3
"""Local runner: process a single query or run in test mode with sample data."""
import argparse
import json
import sys
from pathlib import Path

# Allow running from project root
sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv
from src.main import run_single_query, _load_queries_from_file
from src.utils.logger import setup_logging

SAMPLE_PAYLOAD = {
    "query_id": "test-query-001",
    "query_text": "how to verify GMP certification for psyllium husk suppliers in India",
    "intent": "commercial",
    "region": "US",
    "language": "en",
    "aeo_score": 8.7,
    "product_tags": ["psyllium_husk", "supplier_qualification"],
    "citation_tags": ["compliance_checklist", "regulatory_links"],
    "competitor_context": "Jyot Overseas mentions GMP but lacks verification steps; Satnam has BRC but no import checklist",
    "cluster_id": "supplier_qualification_compliance",
    "content_recommendation": {
        "format": "step_by_step_guide",
        "key_sections": ["What is GMP?", "Documentation checklist", "Red flags"],
        "cta_suggestion": "Book a call to receive our GMP compliance checklist",
    },
}


def main():
    parser = argparse.ArgumentParser(description="Agent 2 Local Runner")
    parser.add_argument(
        "--query-file",
        help="Path to Agent 1 output file (run_xxx.json, agent2_handoff_xxx.json, or single query JSON)",
    )
    parser.add_argument("--test-mode", action="store_true", default=True, help="Skip Supabase (default: True)")
    parser.add_argument(
        "--env",
        default=str(Path(__file__).parent.parent.parent / "agent1_aeo_discovery" / "config" / "api_keys.env"),
        help="Path to .env file (defaults to Agent 1's config/api_keys.env)",
    )
    parser.add_argument("--log-level", default="INFO")
    args = parser.parse_args()

    setup_logging(args.log_level)
    env_path = Path(args.env)
    if env_path.exists():
        load_dotenv(env_path)
    else:
        load_dotenv()  # Try .env in current dir

    if args.query_file:
        queries = _load_queries_from_file(args.query_file)
        print(f"Loaded {len(queries)} queries from {args.query_file}\n")
    else:
        print("No --query-file provided. Using built-in sample payload.\n")
        queries = [SAMPLE_PAYLOAD]

    for i, payload in enumerate(queries, 1):
        print(f"[{i}/{len(queries)}] Processing: {payload.get('query_text', '?')}\n")
        output = run_single_query(payload, test_mode=args.test_mode)

        print("=" * 60)
        print(f"BRIEF {i} COMPLETE")
        print("=" * 60)

        brief = output.get("brief", {})
        if brief:
            print("OUTLINE SECTIONS:")
            for j, s in enumerate(brief.get("content_strategy", {}).get("outline_sections", []), 1):
                print(f"  {j}. {s}")
            print(f"\nTitle:    {brief.get('seo_aeo_requirements', {}).get('title_tag', '')}")
            print(f"Slug:     {brief.get('seo_aeo_requirements', {}).get('url_slug', '')}")
            print(f"Priority: {output.get('priority', '?')}")
            print(f"MD file:  {output.get('md_path', '')}")
        print()


if __name__ == "__main__":
    main()
