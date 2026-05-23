"""Tests for LLM expansion output parsing — no real API calls."""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))

from src.nodes.expand_variants import _parse_questions


def test_parse_clean_output():
    raw = """how to verify GMP certification for psyllium husk suppliers in India
what documents to request from psyllium exporter
which certifications matter for FDA compliance psyllium"""
    result = _parse_questions(raw)
    assert len(result) == 3
    assert all(len(q.split()) >= 3 for q in result)


def test_parse_strips_numbering():
    raw = """1. how to verify GMP certification
2. what documents to request
3. which certifications matter"""
    result = _parse_questions(raw)
    assert not any(q[0].isdigit() for q in result)


def test_parse_strips_bullets():
    raw = """- how to verify GMP certification
- what documents to request"""
    result = _parse_questions(raw)
    assert not any(q.startswith("-") for q in result)


def test_parse_filters_too_short():
    raw = """how to verify GMP certification for psyllium husk
ok
hi"""
    result = _parse_questions(raw)
    assert all(len(q.split()) >= 3 for q in result)


def test_parse_limits_to_10():
    raw = "\n".join([f"how to do thing number {i} with psyllium" for i in range(20)])
    result = _parse_questions(raw)
    assert len(result) <= 10
