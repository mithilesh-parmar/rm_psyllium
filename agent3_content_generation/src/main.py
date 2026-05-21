"""Entry point: load Agent 2 brief → run graph → validate → export."""
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


def _load_brief_from_file(brief_file: str) -> list[dict]:
    """
    Accepts three Agent 2 output formats:
      1. Single brief dict:  {"brief_metadata": {...}, "content_strategy": {...}, ...}
      2. List of briefs:     [{"brief_metadata": {...}, ...}, ...]
      3. Agent 2 run output: {"briefs_generated": N, "results": [...]}
    """
    path = Path(brief_file)
    if not path.exists():
        raise FileNotFoundError(f"Brief file not found: {brief_file}")
    data = json.loads(path.read_text())

    if isinstance(data, list):
        return data
    if isinstance(data, dict) and "content_strategy" in data:
        return [data]
    if isinstance(data, dict) and "results" in data:
        return data["results"]
    raise ValueError(f"Unrecognised Agent 2 output format in {brief_file}")


def run_single_brief(agent2_payload: dict, test_mode: bool = False) -> dict:
    """Process one Agent 2 approved brief through the full content generation pipeline."""
    graph = build_graph(use_checkpoints=True)
    biz_ctx = _load_business_context()

    initial_state = {
        "agent2_payload": agent2_payload,
        "business_context": biz_ctx,
        "test_mode": test_mode,
    }

    brief_id = (
        agent2_payload.get("brief_metadata", {}).get("brief_id")
        or agent2_payload.get("brief_id")
        or str(uuid.uuid4())
    )
    thread_id = f"content-{brief_id}"
    result = graph.invoke(
        initial_state,
        config={"configurable": {"thread_id": thread_id}},
    )
    return result.get("output", {})


def run_batch(limit: int = 10, test_mode: bool = False) -> dict:
    """Fetch approved Agent 2 briefs from Supabase and generate content for each."""
    from src.utils.supabase_client import fetch_approved_briefs

    briefs = fetch_approved_briefs(limit=limit)
    log.info("Fetched %d approved briefs for content generation", len(briefs))

    results = []
    errors = 0

    for brief in briefs:
        try:
            # Reconstruct agent2_payload shape from flat Supabase record
            payload = _flatten_to_payload(brief)
            output = run_single_brief(payload, test_mode=test_mode)
            results.append(output)
            log.info(
                "Content generated: brief_id=%s, content_id=%s, words=%d",
                brief.get("brief_id", "?"),
                output.get("content_id", "?"),
                output.get("word_count", 0),
            )
        except Exception as e:
            errors += 1
            log.error("Failed for brief_id=%s: %s", brief.get("brief_id", "?"), e)
            if not test_mode:
                notify_slack(f"Agent 3 error: brief_id={brief.get('brief_id')}: {e}")

    cost = get_cost_summary()
    summary = {
        "content_generated": len(results),
        "errors": errors,
        "cost_summary": cost,
        "test_mode": test_mode,
    }
    log.info("Batch complete: %s", json.dumps(summary))
    return summary


def _flatten_to_payload(brief_record: dict) -> dict:
    """Convert flat Supabase brief record back to nested agent2_payload shape."""
    def _parse(v):
        if isinstance(v, str):
            try:
                return json.loads(v)
            except (json.JSONDecodeError, TypeError):
                return v
        return v

    return {
        "brief_metadata": {
            "brief_id": brief_record.get("brief_id", ""),
            "source_query_id": brief_record.get("source_query_id", ""),
            "priority": brief_record.get("priority", "medium"),
        },
        "content_strategy": _parse(brief_record.get("content_strategy", {})),
        "seo_aeo_requirements": _parse(brief_record.get("seo_aeo_requirements", {})),
        "cta_conversion_strategy": _parse(brief_record.get("cta_strategy", {})),
        "agent_3_generation_payload": _parse(brief_record.get("agent_3_payload", {})),
    }


def main():
    parser = argparse.ArgumentParser(description="Content Generation Agent — RM Psyllium")
    parser.add_argument(
        "--env",
        default=str(Path(__file__).parent.parent.parent / "agent1_aeo_discovery" / "config" / "api_keys.env"),
        help="Path to .env file (defaults to Agent 1's config/api_keys.env)",
    )
    parser.add_argument("--brief-file", help="Path to Agent 2 brief JSON file")
    parser.add_argument("--batch-mode", action="store_true", help="Fetch and process approved briefs from Supabase")
    parser.add_argument("--limit", type=int, default=10, help="Max briefs to process in batch mode")
    parser.add_argument("--test-mode", action="store_true", help="Skip Supabase writes and Netlify triggers")
    parser.add_argument("--log-level", default="INFO")
    args = parser.parse_args()

    setup_logging(args.log_level)
    env_path = Path(args.env)
    if env_path.exists():
        load_dotenv(env_path)

    if args.brief_file:
        briefs = _load_brief_from_file(args.brief_file)
        log.info("Loaded %d briefs from %s", len(briefs), args.brief_file)
        results = []
        for brief in briefs:
            output = run_single_brief(brief, test_mode=args.test_mode)
            results.append(output)
        print(json.dumps(results if len(results) > 1 else results[0], indent=2, default=str))
    elif args.batch_mode:
        summary = run_batch(limit=args.limit, test_mode=args.test_mode)
        print(json.dumps(summary, indent=2))
    else:
        parser.error("Provide --brief-file or --batch-mode")


if __name__ == "__main__":
    main()
