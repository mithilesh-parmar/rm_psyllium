"""Entry point: load config → run graph for each cluster × region."""
import argparse
import json
import os
import uuid
from pathlib import Path

from dotenv import load_dotenv

from src.graph import build_graph
from src.utils.logger import setup_logging, get_logger, compute_cost_metrics, notify_slack

log = get_logger("main")


def load_config(config_path: str) -> dict:
    path = Path(config_path)
    if not path.exists():
        raise FileNotFoundError(f"Config not found: {config_path}")
    return json.loads(path.read_text())


def run_agent(
    config: dict,
    test_mode: bool = False,
    cluster_limit: int | None = None,
    region_limit: int | None = None,
    cluster_filter: str | None = None,
    region_filter: str | None = None,
) -> dict:
    graph = build_graph(use_checkpoints=True)
    run_id = str(uuid.uuid4())

    clusters = list(config["seed_query_clusters"].keys())
    if cluster_filter:
        clusters = [c for c in clusters if c == cluster_filter]
    if cluster_limit:
        clusters = clusters[:cluster_limit]

    regions = config.get("target_regions", ["US"])
    if region_filter:
        regions = [r for r in regions if r == region_filter]
    if region_limit:
        regions = regions[:region_limit]

    languages = config.get("languages", ["en"])

    all_outputs = []
    total_discovered = 0
    total_aeo_ready = 0

    for cluster in clusters:
        for region in regions:
            language = "de" if region == "DE" else "en"
            if language not in languages:
                language = "en"

            log.info("Running cluster='%s', region='%s', language='%s'", cluster, region, language)

            initial_state = {
                "config": config,
                "run_id": run_id,
                "current_cluster": cluster,
                "current_region": region,
                "current_language": language,
                "test_mode": test_mode,
                "raw_queries": [],
                "expanded_queries": [],
                "enriched_queries": [],
                "scored_queries": [],
                "deduped_queries": [],
            }

            thread_id = f"{run_id}:{cluster}:{region}"
            try:
                result = graph.invoke(
                    initial_state,
                    config={"configurable": {"thread_id": thread_id}},
                )
                output = result.get("output", {})
                all_outputs.append(output)
                total_discovered += output.get("run_metadata", {}).get("total_discovered", 0)
                total_aeo_ready += output.get("run_metadata", {}).get("aeo_ready_count", 0)
                log.info(
                    "Done: cluster='%s', region='%s' → %d AEO-ready queries",
                    cluster, region,
                    output.get("run_metadata", {}).get("aeo_ready_count", 0),
                )
            except Exception as e:
                log.error("Graph failed for cluster='%s', region='%s': %s", cluster, region, e)
                if not test_mode:
                    notify_slack(f"❌ AEO Agent error: cluster={cluster}, region={region}: {e}")

    summary = {
        "run_id": run_id,
        "clusters_processed": clusters,
        "regions_processed": regions,
        "total_discovered": total_discovered,
        "aeo_ready_count": total_aeo_ready,
        "test_mode": test_mode,
    }
    log.info("Run complete: %s", json.dumps(summary))
    return summary


def main():
    parser = argparse.ArgumentParser(description="AEO Query Discovery Agent — RM Psyllium")
    parser.add_argument("--config", default="config/seed_input.json")
    parser.add_argument("--env", default="config/api_keys.env")
    parser.add_argument("--cluster", help="Run a single cluster only")
    parser.add_argument("--region", help="Run a single region only")
    parser.add_argument("--test-mode", action="store_true", help="Skip Supabase writes")
    parser.add_argument("--cluster-limit", type=int, help="Max clusters to process")
    parser.add_argument("--log-level", default="INFO")
    args = parser.parse_args()

    setup_logging(args.log_level)
    env_path = Path(args.env)
    if env_path.exists():
        load_dotenv(env_path)

    config = load_config(args.config)
    summary = run_agent(
        config,
        test_mode=args.test_mode,
        cluster_limit=args.cluster_limit,
        cluster_filter=args.cluster,
        region_filter=args.region,
    )
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
