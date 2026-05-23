"""Dedup layer: semantic clustering with sentence-transformers, keep best variant per cluster."""
from typing import Optional
from src.utils.logger import get_logger

log = get_logger("dedup")

try:
    from sentence_transformers import SentenceTransformer
    import numpy as np
    _ST_AVAILABLE = True
except ImportError:
    _ST_AVAILABLE = False
    log.warning("sentence-transformers not installed — falling back to exact dedup")

_model: Optional[object] = None


def _get_model():
    global _model
    if _model is None:
        _model = SentenceTransformer("all-MiniLM-L6-v2")
    return _model


def _cosine_similarity(a, b) -> float:
    import numpy as np
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b) + 1e-9))


def semantic_deduplicate(queries: list[dict], threshold: float = 0.88) -> list[dict]:
    """
    Cluster semantically similar queries. Keep the highest AEO-scoring variant per cluster.
    Falls back to exact string dedup if sentence-transformers unavailable.
    """
    if not queries:
        return []

    if not _ST_AVAILABLE:
        return _exact_dedup(queries)

    import numpy as np
    model = _get_model()
    texts = [q["query_text"] for q in queries]
    embeddings = model.encode(texts, normalize_embeddings=True, show_progress_bar=False)

    n = len(queries)
    cluster_id = list(range(n))

    for i in range(n):
        if cluster_id[i] != i:
            continue
        for j in range(i + 1, n):
            if cluster_id[j] != j:
                continue
            sim = _cosine_similarity(embeddings[i], embeddings[j])
            if sim >= threshold:
                # Merge j into i's cluster
                cluster_id[j] = i

    # Group by cluster
    clusters: dict[int, list[dict]] = {}
    for idx, cid in enumerate(cluster_id):
        root = cid
        while cluster_id[root] != root:
            root = cluster_id[root]
        clusters.setdefault(root, []).append(queries[idx])

    # From each cluster, keep the query with highest AEO score
    result = []
    for members in clusters.values():
        best = max(members, key=lambda q: q.get("aeo_score", 0))
        result.append(best)

    log.info("Dedup: %d → %d queries (%.0f%% reduction)", n, len(result), (1 - len(result) / n) * 100)
    return result


def _exact_dedup(queries: list[dict]) -> list[dict]:
    seen = set()
    result = []
    for q in sorted(queries, key=lambda x: -x.get("aeo_score", 0)):
        key = q["query_text"].lower().strip()
        if key not in seen:
            seen.add(key)
            result.append(q)
    return result


def deduplicate(state: dict) -> dict:
    """LangGraph node: semantic dedup of scored queries."""
    scored = state["scored_queries"]
    deduped = semantic_deduplicate(scored)
    return {**state, "deduped_queries": deduped}
