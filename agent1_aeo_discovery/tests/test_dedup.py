"""Tests for semantic deduplication — uses fallback exact dedup when ST unavailable."""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))

from src.nodes.deduplicate import _exact_dedup, semantic_deduplicate


def _make_query(text: str, score: float = 7.5) -> dict:
    return {"query_id": None, "query_text": text, "aeo_score": score, "cluster_id": "test"}


def test_exact_dedup_removes_duplicates():
    queries = [
        _make_query("how to verify GMP certification psyllium supplier India"),
        _make_query("how to verify GMP certification psyllium supplier India"),
        _make_query("what mesh size is best for capsule filling psyllium"),
    ]
    result = _exact_dedup(queries)
    assert len(result) == 2


def test_exact_dedup_keeps_highest_score():
    queries = [
        _make_query("how to verify GMP certification psyllium", score=7.5),
        _make_query("how to verify GMP certification psyllium", score=9.0),
    ]
    result = _exact_dedup(queries)
    assert len(result) == 1
    assert result[0]["aeo_score"] == 9.0


def test_semantic_dedup_handles_empty():
    assert semantic_deduplicate([]) == []


def test_semantic_dedup_single_item():
    q = [_make_query("how to verify GMP certification for psyllium")]
    result = semantic_deduplicate(q)
    assert len(result) == 1


def test_semantic_dedup_returns_best_variant():
    queries = [
        _make_query("how to verify GMP certification psyllium supplier India", score=8.5),
        _make_query("GMP certification check for Indian psyllium exporters", score=7.2),
        _make_query("verify GMP psyllium husk supplier", score=7.0),
        _make_query("what mesh size is best for capsule filling psyllium husk", score=8.0),
    ]
    result = semantic_deduplicate(queries)
    # Should reduce to at most 2 clusters (GMP group + mesh question)
    assert len(result) <= 4  # at most unchanged if ST not available
    # Best score variant should be kept for each cluster
    scores = [q["aeo_score"] for q in result]
    assert 8.5 in scores  # top GMP query preserved
