"""Output layer: format JSON, upsert to Supabase, generate Agent 2 handoff payloads."""
import json
import uuid
from datetime import datetime, timezone
from pathlib import Path

from src.utils.logger import get_logger, notify_slack

log = get_logger("export")


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def _assign_query_ids(queries: list[dict]) -> list[dict]:
    result = []
    for q in queries:
        result.append({
            "query_id": str(uuid.uuid4()),
            "created_at": _now_iso(),
            "last_updated": _now_iso(),
            **q,
        })
    return result


def _build_run_metadata(state: dict, queries: list[dict]) -> dict:
    return {
        "run_id": state.get("run_id", str(uuid.uuid4())),
        "timestamp": _now_iso(),
        "seed_version": "v1.0",
        "cluster_processed": state.get("current_cluster"),
        "region_processed": state.get("current_region"),
        "total_discovered": len(state.get("raw_queries", [])),
        "after_expansion": len(state.get("expanded_queries", [])),
        "after_scoring": len(state.get("scored_queries", [])),
        "aeo_ready_count": len(queries),
    }


def _generate_agent2_handoff(query: dict) -> dict:
    rec = query.get("content_recommendation", {})
    return {
        "query_id": query["query_id"],
        "query_text": query["query_text"],
        "content_brief": {
            "format": rec.get("format", "faq_article"),
            "target_word_count": 1200,
            "key_sections": rec.get("key_sections", []),
            "primary_cta": rec.get("cta_suggestion", "Contact our export team"),
            "schema_markup": "FAQPage",
            "citation_sources": ["FDA guidance", "EFSA guidelines", "RM Psyllium COA template"],
        },
        "priority": query.get("priority", "medium"),
        "deadline_days": 3 if query.get("priority") == "high" else 7,
    }


def output_export(state: dict) -> dict:
    """
    LangGraph node: write JSON output, upsert to Supabase, save Agent 2 handoff file.
    """
    queries = _assign_query_ids(state["deduped_queries"])
    run_meta = _build_run_metadata(state, queries)

    output = {"run_metadata": run_meta, "queries": queries}

    # Write JSON output file
    output_dir = Path("outputs")
    output_dir.mkdir(exist_ok=True)
    run_id = run_meta["run_id"][:8]
    cluster = state.get("current_cluster", "unknown")
    out_path = output_dir / f"run_{run_id}_{cluster}.json"
    out_path.write_text(json.dumps(output, indent=2))
    log.info("Output written to %s", out_path)

    # Generate Agent 2 handoff for high-priority queries
    high_priority = [q for q in queries if q.get("priority") == "high"]
    if high_priority:
        handoff = [_generate_agent2_handoff(q) for q in high_priority]
        handoff_path = output_dir / f"agent2_handoff_{run_id}_{cluster}.json"
        handoff_path.write_text(json.dumps(handoff, indent=2))
        log.info("Agent 2 handoff: %d high-priority queries → %s", len(handoff), handoff_path)

    # Upsert to Supabase (skip in test mode)
    if not state.get("test_mode"):
        try:
            from src.utils.supabase_client import upsert_queries, upsert_run
            count = upsert_queries(queries)
            upsert_run({**run_meta, "status": "completed"})
            log.info("Upserted %d queries to Supabase", count)
            notify_slack(f"✅ AEO Agent run complete: {len(queries)} queries discovered for cluster `{cluster}`")
        except Exception as e:
            log.error("Supabase upsert failed: %s", e)
            notify_slack(f"⚠️ AEO Agent Supabase error: {e}")
    else:
        log.info("[test_mode] Skipping Supabase upsert")

    return {**state, "output": output, "output_path": str(out_path)}
