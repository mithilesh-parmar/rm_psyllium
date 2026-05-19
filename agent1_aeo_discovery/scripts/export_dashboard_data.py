#!/usr/bin/env python3
"""Export top queries to CSV for Streamlit dashboard or manual review."""
import csv
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv
load_dotenv("config/api_keys.env")

from src.utils.supabase_client import fetch_queries_for_review

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--min-score", type=float, default=7.0)
    parser.add_argument("--limit", type=int, default=100)
    parser.add_argument("--output", default="outputs/top_queries.csv")
    args = parser.parse_args()

    queries = fetch_queries_for_review(min_score=args.min_score, limit=args.limit)
    if not queries:
        print("No queries found.")
        sys.exit(0)

    out_path = Path(args.output)
    out_path.parent.mkdir(exist_ok=True)

    fields = ["query_id", "query_text", "aeo_score", "priority", "intent", "region",
              "cluster_id", "human_review_status", "estimated_monthly_volume"]

    with open(out_path, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(queries)

    print(f"Exported {len(queries)} queries to {out_path}")
