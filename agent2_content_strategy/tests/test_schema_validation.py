"""Tests for Pydantic schema validation."""
import pytest
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from pydantic import ValidationError
from src.utils.validators import (
    Agent1Payload, Agent2Input, BusinessContext, ContentBrief,
    ContentStrategy, SeoAeoRequirements,
)


VALID_BRIEF = {
    "brief_metadata": {
        "brief_id": "abc-123",
        "source_query_id": "query-456",
        "cluster_id": "supplier_compliance",
        "created_at": "2026-05-19T10:00:00Z",
        "priority": "high",
        "estimated_effort_hours": 3,
        "target_publish_date_days": 5,
    },
    "target_audience": {
        "persona": "procurement_manager_us",
        "decision_stage": "vendor_evaluation",
        "technical_level": "intermediate_to_advanced",
    },
    "content_strategy": {
        "primary_keyword": "verify gmp certification psyllium supplier india",
        "secondary_keywords": ["psyllium gmp documentation", "import psyllium usa compliance"],
        "content_format": "step_by_step_guide",
        "target_word_count": 1100,
        "outline_sections": [
            "What GMP Certification Means for Psyllium Imports",
            "5 Documents Every Buyer Must Request",
            "Red Flags: Non-Compliant Suppliers",
            "RM Psyllium Certification Status",
            "Next Steps and Checklist",
        ],
    },
    "seo_aeo_requirements": {
        "title_tag": "How to Verify GMP Certification for Psyllium Suppliers in India | RM Psyllium",
        "meta_description": "Use this 5-step GMP verification checklist to vet Indian psyllium suppliers. COA requirements and red flags included.",
        "url_slug": "/guides/verify-gmp-certification-psyllium-supplier-india",
        "schema_markup": ["HowTo", "FAQPage"],
        "ai_overview_target_snippet": (
            "To verify GMP certification for a psyllium supplier: request facility registration, "
            "review audit reports, cross-check FDA databases, review COA parameters, and confirm "
            "batch traceability. RM Psyllium provides pre-shipment COA with 40 years manufacturing experience."
        ),
    },
    "cta_conversion_strategy": {
        "primary_cta": "Book a 15-min call to receive our GMP Compliance Checklist",
        "secondary_cta": "Download Sample COA Template (PDF)",
        "placement_hooks": ["after_section_2", "end_of_article"],
        "qualification_filter": "Show to visitors who scroll past 40%",
    },
    "agent_3_generation_payload": {
        "tone_constraints": ["B2B professional", "data-first"],
        "required_elements": ["spec_table_placeholder", "compliance_footnote"],
        "citation_sources": ["FDA 21 CFR Part 117"],
        "avoid_phrases": ["best in class", "boost digestion"],
        "internal_link_targets": ["/products/", "/compliance/"],
        "generation_parameters": {
            "model_temperature": 0.3,
            "max_tokens": 1800,
            "output_format": "markdown_with_yaml_frontmatter",
            "include_table_placeholders": True,
        },
    },
    "human_review_notes": {
        "requires_founder_input": ["Confirm GMP audit status"],
        "legal_compliance_check": "Do not claim GMP certified",
    },
}


def test_valid_brief_passes():
    brief = ContentBrief.model_validate(VALID_BRIEF)
    assert brief.brief_metadata.priority == "high"


def test_invalid_priority_rejected():
    bad = dict(VALID_BRIEF)
    bad["brief_metadata"] = {**VALID_BRIEF["brief_metadata"], "priority": "urgent"}
    with pytest.raises(ValidationError):
        ContentBrief.model_validate(bad)


def test_too_few_sections_rejected():
    bad = dict(VALID_BRIEF)
    bad["content_strategy"] = {
        **VALID_BRIEF["content_strategy"],
        "outline_sections": ["Only one section"],
    }
    with pytest.raises(ValidationError):
        ContentBrief.model_validate(bad)


def test_too_many_sections_rejected():
    bad = dict(VALID_BRIEF)
    bad["content_strategy"] = {
        **VALID_BRIEF["content_strategy"],
        "outline_sections": [f"Section {i}" for i in range(7)],
    }
    with pytest.raises(ValidationError):
        ContentBrief.model_validate(bad)


def test_snippet_too_short_rejected():
    bad = dict(VALID_BRIEF)
    bad["seo_aeo_requirements"] = {
        **VALID_BRIEF["seo_aeo_requirements"],
        "ai_overview_target_snippet": "Too short.",
    }
    with pytest.raises(ValidationError):
        ContentBrief.model_validate(bad)


def test_agent1_payload_valid():
    payload = Agent1Payload(
        query_id="q1",
        query_text="buy psyllium husk bulk india",
        intent="transactional",
        region="US",
        aeo_score=7.5,
        cluster_id="bulk_sourcing",
    )
    assert payload.intent == "transactional"


def test_agent1_invalid_intent():
    with pytest.raises(ValidationError):
        Agent1Payload(
            query_id="q1",
            query_text="test",
            intent="unknown_intent",
            region="US",
            aeo_score=5.0,
            cluster_id="test",
        )
