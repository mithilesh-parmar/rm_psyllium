"""Test: markdown structure and frontmatter validity."""
import pytest


SAMPLE_DRAFT = """---
title: "How to Verify GMP Certification for Psyllium Suppliers in India | RM Psyllium"
description: "Importing psyllium husk to the USA? Use this 5-step GMP verification checklist to evaluate Indian suppliers."
slug: "/guides/verify-gmp-certification-psyllium-supplier-india"
date: "2026-05-20"
tags: ["compliance", "psyllium-husk", "usa-import", "GMP"]
draft: false
schema_types: ["HowTo", "FAQPage", "Organization"]
---

To verify GMP certification for a psyllium supplier in India, request the facility registration number, review third-party audit reports, cross-check WHO/FDA databases, and examine the Certificate of Analysis for testing parameters.

## What GMP Certification Means for Psyllium Imports

GMP (Good Manufacturing Practice) is the baseline quality standard for psyllium husk suppliers serving pharmaceutical and nutraceutical markets.

### Psyllium Husk Specifications Reference

| Parameter | Standard Range | Test Method |
|-----------|---------------|-------------|
| Purity | 85-99% | USP <561> |
| Mesh Size | 40-200 | Sieve Analysis |
| Moisture Content | ≤10% | Loss on Drying |
| Swelling Volume | ≥40 mL/g | USP Method |

> **Compliance Note**: We are finalizing GMP audit documentation in Q3 2026. All current shipments include full COA, phytosanitary certificate, and facility registration details. [Download sample COA](/resources/sample-coa.pdf)

— Founder, RM Psyllium | 40 years psyllium manufacturing experience
"""


def test_has_yaml_frontmatter():
    assert SAMPLE_DRAFT.strip().startswith("---")
    parts = SAMPLE_DRAFT.split("---", 2)
    assert len(parts) == 3


def test_frontmatter_has_required_fields():
    parts = SAMPLE_DRAFT.split("---", 2)
    fm = parts[1]
    for field in ("title", "description", "slug", "date", "tags", "draft"):
        assert field in fm, f"Missing frontmatter field: {field}"


def test_slug_starts_with_slash():
    parts = SAMPLE_DRAFT.split("---", 2)
    fm = parts[1]
    for line in fm.split("\n"):
        if line.startswith("slug:"):
            slug_val = line.split(":", 1)[1].strip().strip('"').strip("'")
            assert slug_val.startswith("/"), f"Slug must start with /: {slug_val}"


def test_has_spec_table():
    assert "| Parameter | Standard Range | Test Method |" in SAMPLE_DRAFT
    assert "| Purity" in SAMPLE_DRAFT
    assert "| Moisture Content" in SAMPLE_DRAFT


def test_has_compliance_note():
    assert "Compliance Note" in SAMPLE_DRAFT
    assert "COA" in SAMPLE_DRAFT


def test_has_founder_signature():
    assert "RM Psyllium" in SAMPLE_DRAFT
    assert "40 years" in SAMPLE_DRAFT


def test_no_consumer_language():
    prohibited = ["boosts digestion", "gut health", "natural remedy", "weight loss", "detox", "wellness"]
    draft_lower = SAMPLE_DRAFT.lower()
    for phrase in prohibited:
        assert phrase not in draft_lower, f"Consumer language detected: '{phrase}'"


def test_word_count_reasonable():
    from src.utils.validators import count_words
    body = SAMPLE_DRAFT.split("---", 2)[2] if "---" in SAMPLE_DRAFT else SAMPLE_DRAFT
    wc = count_words(body)
    assert 100 <= wc <= 3000, f"Word count out of range: {wc}"
