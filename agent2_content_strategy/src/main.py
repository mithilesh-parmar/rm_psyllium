"""Entry point: load Agent 1 queries → run graph per query → validate → export."""
import argparse
import json
import os
import uuid
from pathlib import Path

from dotenv import load_dotenv

from src.graph import build_graph
from src.utils.logger import setup_logging, get_logger, notify_slack
from src.utils.llm_router import get_cost_summary

log = get_logger("main")

_BUSINESS_CTX: dict | None = None


def _load_business_context() -> dict:
    global _BUSINESS_CTX
    if _BUSINESS_CTX is None:
        path = Path(__file__).parent.parent / "config" / "business_context.json"
        _BUSINESS_CTX = json.loads(path.read_text())
    return _BUSINESS_CTX


def _load_queries_from_file(query_file: str) -> list[dict]:
    """
    Accepts three Agent 1 output formats:
      1. Full run output:   {"run_metadata": {...}, "queries": [...]}
      2. Handoff list:      [{"query_id": ..., "query_text": ..., ...}, ...]
      3. Single query dict: {"query_id": ..., "query_text": ..., ...}
    """
    path = Path(query_file)
    if not path.exists():
        raise FileNotFoundError(f"Query file not found: {query_file}")
    data = json.loads(path.read_text())

    if isinstance(data, dict) and "queries" in data:
        return data["queries"]  # full run_xxx.json
    if isinstance(data, list):
        # Check for the lightweight agent2_handoff format (missing required fields)
        if data and "content_brief" in data[0] and "intent" not in data[0]:
            raise ValueError(
                "agent2_handoff_xxx.json is too lightweight for Agent 2 — "
                "use the full run_xxx.json file instead "
                "(it has intent, region, aeo_score, and all required fields)."
            )
        return data
    if isinstance(data, dict) and "query_text" in data:
        return [data]  # single query object
    raise ValueError(f"Unrecognised Agent 1 output format in {query_file}")


def run_single_query(agent1_payload: dict, test_mode: bool = False) -> dict:
    """Process one Agent 1 query through the full brief generation pipeline."""
    graph = build_graph(use_checkpoints=True)
    biz_ctx = _load_business_context()

    initial_state = {
        "agent1_payload": agent1_payload,
        "business_context": biz_ctx,
        "test_mode": test_mode,
    }

    thread_id = f"brief-{agent1_payload.get('query_id', uuid.uuid4())}"
    result = graph.invoke(
        initial_state,
        config={"configurable": {"thread_id": thread_id}},
    )
    return result.get("output", {})


def run_batch(min_score: float = 7.0, limit: int = 20, test_mode: bool = False) -> dict:
    """Fetch pending Agent 1 queries from Supabase and process each."""
    from src.utils.supabase_client import fetch_aeo_queries_for_briefs

    queries = fetch_aeo_queries_for_briefs(min_score=min_score, limit=limit)
    log.info("Fetched %d queries for brief generation (min_score=%.1f)", len(queries), min_score)

    results = []
    errors = 0

    for q in queries:
        try:
            output = run_single_query(q, test_mode=test_mode)
            results.append(output)
            log.info(
                "Brief generated: query_id=%s, priority=%s, brief_id=%s",
                q.get("query_id", "?"),
                output.get("priority", "?"),
                output.get("brief_id", "?"),
            )
        except Exception as e:
            errors += 1
            log.error("Failed for query_id=%s: %s", q.get("query_id", "?"), e)
            if not test_mode:
                notify_slack(f"Agent 2 error: query_id={q.get('query_id')}: {e}")

    cost = get_cost_summary()
    summary = {
        "briefs_generated": len(results),
        "errors": errors,
        "cost_summary": cost,
        "test_mode": test_mode,
    }
    log.info("Batch complete: %s", json.dumps(summary))
    return summary


def main():
    parser = argparse.ArgumentParser(description="Content Strategy Agent — RM Psyllium")
    parser.add_argument(
        "--env",
        default=str(Path(__file__).parent.parent.parent / "agent1_aeo_discovery" / "config" / "api_keys.env"),
        help="Path to .env file (defaults to Agent 1's config/api_keys.env)",
    )
    parser.add_argument("--query-file", help="Path to single Agent 1 JSON payload file")
    parser.add_argument("--batch-mode", action="store_true", help="Fetch and process multiple queries from Supabase")
    parser.add_argument("--min-score", type=float, default=7.0, help="Minimum AEO score for batch mode")
    parser.add_argument("--limit", type=int, default=20, help="Max queries to process in batch mode")
    parser.add_argument("--test-mode", action="store_true", help="Skip Supabase writes")
    parser.add_argument("--log-level", default="INFO")
    args = parser.parse_args()

    setup_logging(args.log_level)
    env_path = Path(args.env)
    if env_path.exists():
        load_dotenv(env_path)

    if args.query_file:
        queries = _load_queries_from_file(args.query_file)
        log.info("Loaded %d queries from %s", len(queries), args.query_file)
        results = []
        for q in queries:
            output = run_single_query(q, test_mode=args.test_mode)
            results.append(output)
        print(json.dumps(results if len(results) > 1 else results[0], indent=2, default=str))
    elif args.batch_mode:
        summary = run_batch(
            min_score=args.min_score,
            limit=args.limit,
            test_mode=args.test_mode,
        )
        print(json.dumps(summary, indent=2))
    else:
        parser.error("Provide --query-file or --batch-mode")


if __name__ == "__main__":
    main()
