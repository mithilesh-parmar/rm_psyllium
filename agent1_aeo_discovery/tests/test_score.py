"""Tests for AEO scoring logic — all deterministic, no LLM calls."""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))

import pytest
from src.nodes.score_aeo import (
    _score_answerability,
    _score_conversational_match,
    calculate_aeo_score,
    _derive_priority,
    _derive_citation_tags,
)

WEIGHTS = {"answerability": 0.4, "citation_potential": 0.3, "conversational_match": 0.2, "commercial_fit": 0.1}


def test_aeo_scoring_formula():
    factors = {"answerability": 9, "citation_potential": 8, "conversational_match": 7, "commercial_fit": 6}
    score = calculate_aeo_score(factors, WEIGHTS, question_format_bonus=0.0, is_question=False)
    assert score == 8.0  # (9*0.4)+(8*0.3)+(7*0.2)+(6*0.1) = 3.6+2.4+1.4+0.6


def test_question_format_bonus_applied():
    factors = {"answerability": 9, "citation_potential": 8, "conversational_match": 7, "commercial_fit": 6}
    without = calculate_aeo_score(factors, WEIGHTS, question_format_bonus=0.5, is_question=False)
    with_bonus = calculate_aeo_score(factors, WEIGHTS, question_format_bonus=0.5, is_question=True)
    assert with_bonus == without + 0.5


def test_score_capped_at_10():
    factors = {"answerability": 10, "citation_potential": 10, "conversational_match": 10, "commercial_fit": 10}
    score = calculate_aeo_score(factors, WEIGHTS, question_format_bonus=2.0, is_question=True)
    assert score <= 10.0


def test_answerability_high_for_how_to():
    score = _score_answerability("how to verify GMP certification for psyllium husk suppliers in India")
    assert score >= 8


def test_answerability_low_for_vague():
    score = _score_answerability("best psyllium")
    assert score <= 5


def test_answerability_spec_term_boost():
    with_spec = _score_answerability("psyllium husk mesh size 80 vs 100 difference")
    generic = _score_answerability("psyllium supplier option")
    assert with_spec > generic


def test_conversational_match_question_starter():
    score = _score_conversational_match("what documents are required to import psyllium husk from India")
    assert score >= 8


def test_conversational_match_declarative():
    score = _score_conversational_match("psyllium husk mesh size chart")
    # Should still get decent score even without question starter
    assert score >= 5


def test_priority_bands():
    assert _derive_priority(9.0) == "high"
    assert _derive_priority(8.0) == "medium"
    assert _derive_priority(7.0) == "low"


def test_citation_tags_compliance():
    tags = _derive_citation_tags("what documents are required to import psyllium husk from India to USA")
    assert "compliance_checklist" in tags


def test_citation_tags_step_by_step():
    tags = _derive_citation_tags("how to verify GMP certification for psyllium husk suppliers")
    assert "step_by_step" in tags


def test_citation_tags_spec_comparison():
    tags = _derive_citation_tags("psyllium husk 80 mesh vs 100 mesh difference")
    assert "spec_comparison" in tags
    assert "technical_spec" in tags


def test_threshold_filters_low_score():
    """Score below 7.0 should not appear in output."""
    factors = {"answerability": 3, "citation_potential": 3, "conversational_match": 3, "commercial_fit": 3}
    score = calculate_aeo_score(factors, WEIGHTS, question_format_bonus=0.0, is_question=False)
    assert score < 7.0
