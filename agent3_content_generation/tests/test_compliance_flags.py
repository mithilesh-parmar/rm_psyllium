"""Test: pending certification detection and prohibited phrase flagging."""
import pytest


CLEAN_DRAFT = """---
title: "Psyllium Husk Export from India | RM Psyllium"
description: "B2B psyllium husk and powder from Gujarat, India. MOQ 500 kg, FOB Mundra."
slug: "/guides/psyllium-husk-export-india"
date: "2026-05-20"
tags: ["psyllium-husk", "india-export"]
draft: false
schema_types: ["Organization"]
---

RM Psyllium exports psyllium husk from Gujarat, India. We are finalizing GMP audit documentation in Q3 2026.

### Psyllium Husk Specifications Reference
| Parameter | Standard Range | Test Method |
|-----------|---------------|-------------|
| Purity | 85-99% | USP <561> |
| Moisture Content | ≤10% | Loss on Drying |

> **Compliance Note**: We are finalizing GMP audit documentation in Q3 2026. [Download sample COA](/resources/sample-coa.pdf)

— Founder, RM Psyllium | 40 years psyllium manufacturing experience
"""

DIRTY_DRAFT_CERT_CLAIM = CLEAN_DRAFT.replace(
    "We are finalizing GMP audit documentation in Q3 2026.",
    "RM Psyllium is GMP-certified and ISO 22000 certified.",
)

DIRTY_DRAFT_PROHIBITED = CLEAN_DRAFT + "\nWe offer best in class psyllium trusted by thousands of customers."

BASE_STATE = {
    "agent2_payload": {
        "content_strategy": {"primary_keyword": "psyllium export"},
        "seo_aeo_requirements": {},
        "agent_3_generation_payload": {},
    },
    "business_context": {
        "certifications_current": ["FSSAI", "APEDA"],
        "certifications_pending": ["GMP", "ISO 22000"],
        "certifications_pending_eta": "Q3 2026",
        "internal_links": {},
    },
    "test_mode": True,
}


def test_clean_draft_no_violations():
    from src.nodes.compliance_flagger import compliance_flagger

    state = {**BASE_STATE, "raw_draft": CLEAN_DRAFT}
    result = compliance_flagger(state)
    flags = result["human_review_flags"]
    assert flags["cert_violations"] == [], f"Unexpected cert violations: {flags['cert_violations']}"
    assert flags["prohibited_phrases_found"] == [], f"Unexpected prohibited phrases: {flags['prohibited_phrases_found']}"


def test_cert_claim_detected():
    from src.nodes.compliance_flagger import compliance_flagger

    state = {**BASE_STATE, "raw_draft": DIRTY_DRAFT_CERT_CLAIM}
    result = compliance_flagger(state)
    flags = result["human_review_flags"]
    assert len(flags["cert_violations"]) > 0, "Should detect premature GMP/ISO claim"


def test_prohibited_phrase_detected():
    from src.nodes.compliance_flagger import compliance_flagger

    state = {**BASE_STATE, "raw_draft": DIRTY_DRAFT_PROHIBITED}
    result = compliance_flagger(state)
    flags = result["human_review_flags"]
    assert len(flags["prohibited_phrases_found"]) > 0, "Should detect 'best in class' / 'trusted by thousands'"


def test_compliance_flags_list_populated():
    from src.nodes.compliance_flagger import compliance_flagger

    state = {**BASE_STATE, "raw_draft": CLEAN_DRAFT}
    result = compliance_flagger(state)
    flags = result["compliance_flags"]
    assert isinstance(flags, list)
    # Clean draft mentioning GMP should flag pending cert noted
    pending_flags = [f for f in flags if "pending" in f]
    assert len(pending_flags) > 0, "Should flag pending_gmp_certification_noted"


def test_legal_check_populated_on_violation():
    from src.nodes.compliance_flagger import compliance_flagger

    state = {**BASE_STATE, "raw_draft": DIRTY_DRAFT_CERT_CLAIM}
    result = compliance_flagger(state)
    flags = result["human_review_flags"]
    assert flags["legal_compliance_check"] != "", "Legal check should be non-empty on violations"
    assert "VIOLATIONS" in flags["legal_compliance_check"]
