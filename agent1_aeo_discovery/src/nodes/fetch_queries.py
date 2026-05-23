"""Fetch layer: collect seed queries from SERPAPI + manual sources."""
from src.utils.api_clients import fetch_serp_related_queries
from src.utils.logger import get_logger

log = get_logger("fetch")

PSYLLIUM_SEED_TEMPLATES = [
    "psyllium husk bulk supplier {region}",
    "psyllium husk exporter india {region}",
    "psyllium husk powder specification {region}",
    "psyllium husk certification {region}",
    "buy psyllium husk wholesale {region}",
]


def fetch_queries(state: dict) -> dict:
    """
    LangGraph node: fetch raw queries from SERP + manual seeds.
    Writes: state["raw_queries"] (list of {query_text, source, cluster_id, region})
    """
    config = state["config"]
    cluster_name = state["current_cluster"]
    region = state.get("current_region", "US")

    seed_queries = config["seed_query_clusters"].get(cluster_name, [])
    manual_competitor = config.get("manual_competitor_queries", [])

    raw: list[dict] = []

    # Add seed queries directly
    for q in seed_queries:
        raw.append({"query_text": q, "source": "seed", "cluster_id": cluster_name, "region": region})

    # Add manual competitor queries (only for competitor_targeting cluster)
    if cluster_name == "competitor_targeting":
        for q in manual_competitor:
            raw.append({"query_text": q, "source": "manual_competitor", "cluster_id": cluster_name, "region": region})

    # Fetch SERP related searches for each seed
    log.info("Fetching SERP expansions for cluster '%s', region '%s'", cluster_name, region)
    for seed in seed_queries[:5]:  # limit to first 5 seeds to conserve API credits
        related = fetch_serp_related_queries(seed, region)
        for q in related:
            raw.append({"query_text": q, "source": "serpapi", "cluster_id": cluster_name, "region": region})

    # Deduplicate by text at this early stage
    seen = set()
    unique_raw = []
    for item in raw:
        key = item["query_text"].lower().strip()
        if key and key not in seen:
            seen.add(key)
            unique_raw.append(item)

    log.info("Fetched %d unique raw queries for cluster '%s'", len(unique_raw), cluster_name)
    return {**state, "raw_queries": unique_raw}
