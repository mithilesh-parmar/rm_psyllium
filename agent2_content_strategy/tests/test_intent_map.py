"""Tests for rule-based intent → format mapping."""
import pytest
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from src.nodes.intent_mapper import intent_mapper


def _make_state(intent: str, format_hint: str = "") -> dict:
    return {
        "agent1_payload": {
            "query_id": "test-001",
            "query_text": "test query",
            "intent": intent,
            "region": "US",
            "language": "en",
            "aeo_score": 8.0,
            "product_tags": ["psyllium_husk"],
            "citation_tags": [],
            "competitor_context": "",
            "cluster_id": "test_cluster",
            "content_recommendation": {"format": format_hint, "key_sections": [], "cta_suggestion": ""},
        },
        "business_context": {
            "products_available": ["psyllium husk 99%"],
            "differentiators": ["40yrs manufacturing"],
            "certifications_current": ["FSSAI"],
            "certifications_pending": ["GMP"],
            "tone_guidelines": "Professional",
        },
    }


def test_commercial_maps_to_guide():
    state = _make_state("commercial")
    result = intent_mapper(state)
    assert result["content_format"] in ("step_by_step_guide", "comparison", "checklist")
    assert result["buyer_stage"] == "vendor_evaluation"


def test_transactional_maps_to_spec_or_checklist():
    state = _make_state("transactional")
    result = intent_mapper(state)
    assert result["content_format"] in ("spec_sheet", "pricing_guide", "checklist")
    assert result["buyer_stage"] == "rfq_ready"


def test_informational_maps_to_faq():
    state = _make_state("informational")
    result = intent_mapper(state)
    assert result["content_format"] in ("faq", "technical_deep_dive", "glossary")
    assert result["buyer_stage"] == "awareness"


def test_agent1_format_hint_respected():
    state = _make_state("commercial", format_hint="comparison")
    result = intent_mapper(state)
    assert result["content_format"] == "comparison"


def test_unknown_format_hint_ignored():
    state = _make_state("commercial", format_hint="blog_post")
    result = intent_mapper(state)
    # Falls back to first in the commercial list
    assert result["content_format"] in ("step_by_step_guide", "comparison", "checklist")


def test_template_config_populated():
    state = _make_state("commercial")
    result = intent_mapper(state)
    assert isinstance(result["template_config"], dict)
    assert "section_template" in result["template_config"]
    assert "target_word_count" in result["template_config"]


def test_state_keys_preserved():
    state = _make_state("commercial")
    state["extra_key"] = "preserve_me"
    result = intent_mapper(state)
    assert result["extra_key"] == "preserve_me"
