"""Tests for Markdown/YAML frontmatter export."""
import pytest
import sys
import yaml
from pathlib import Path
import tempfile

sys.path.insert(0, str(Path(__file__).parent.parent))

from src.utils.markdown_gen import generate_frontmatter, generate_brief_markdown, write_brief_file

SAMPLE_BRIEF = {
    "brief_metadata": {
        "brief_id": "test-brief-001",
        "source_query_id": "query-001",
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
        "primary_keyword": "verify gmp certification psyllium india",
        "secondary_keywords": ["psyllium gmp documentation"],
        "content_format": "step_by_step_guide",
        "target_word_count": 1100,
        "outline_sections": [
            "What GMP Means for Psyllium",
            "5 Documents to Request",
            "Red Flags in Supplier Selection",
            "RM Psyllium Certification Status",
            "Next Steps",
        ],
    },
    "seo_aeo_requirements": {
        "title_tag": "How to Verify GMP Certification | RM Psyllium",
        "meta_description": "Verify GMP for psyllium suppliers with this checklist.",
        "url_slug": "/guides/verify-gmp-psyllium-india",
        "schema_markup": ["HowTo", "FAQPage"],
        "ai_overview_target_snippet": "Verify GMP by requesting documentation and cross-checking with regulatory databases.",
    },
    "cta_conversion_strategy": {
        "primary_cta": "Book a 15-min call",
        "secondary_cta": "Download COA template",
        "placement_hooks": ["after_section_2", "end_of_article"],
        "qualification_filter": "Show after 40% scroll",
    },
    "agent_3_generation_payload": {
        "tone_constraints": ["B2B professional", "data-first"],
        "required_elements": ["spec_table_placeholder"],
        "citation_sources": ["FDA 21 CFR Part 117"],
        "avoid_phrases": ["best in class"],
        "internal_link_targets": ["/products/"],
        "generation_parameters": {
            "model_temperature": 0.3,
            "max_tokens": 1800,
            "output_format": "markdown_with_yaml_frontmatter",
            "include_table_placeholders": True,
        },
    },
    "human_review_notes": {
        "requires_founder_input": ["Confirm GMP audit date"],
        "legal_compliance_check": "Do not claim GMP certified",
    },
}


def test_frontmatter_is_valid_yaml():
    fm = generate_frontmatter(SAMPLE_BRIEF)
    assert fm.startswith("---\n")
    assert fm.strip().endswith("---")
    inner = fm.strip()[4:-3].strip()
    parsed = yaml.safe_load(inner)
    assert isinstance(parsed, dict)


def test_frontmatter_has_required_keys():
    fm = generate_frontmatter(SAMPLE_BRIEF)
    inner = fm.strip()[4:-3].strip()
    parsed = yaml.safe_load(inner)
    for key in ("title", "description", "slug", "date", "status", "brief_id", "priority"):
        assert key in parsed, f"Missing frontmatter key: {key}"


def test_frontmatter_status_is_draft():
    fm = generate_frontmatter(SAMPLE_BRIEF)
    parsed = yaml.safe_load(fm.strip()[4:-3].strip())
    assert parsed["status"] == "draft"


def test_markdown_contains_all_sections():
    md = generate_brief_markdown(SAMPLE_BRIEF)
    for section in SAMPLE_BRIEF["content_strategy"]["outline_sections"]:
        assert section in md, f"Section missing from markdown: {section}"


def test_markdown_contains_cta():
    md = generate_brief_markdown(SAMPLE_BRIEF)
    assert "Book a 15-min call" in md


def test_markdown_contains_avoid_phrases():
    md = generate_brief_markdown(SAMPLE_BRIEF)
    assert "best in class" in md  # listed in avoid_phrases section


def test_write_brief_file_creates_md():
    with tempfile.TemporaryDirectory() as tmpdir:
        path = write_brief_file(SAMPLE_BRIEF, Path(tmpdir))
        assert path.exists()
        assert path.suffix == ".md"
        content = path.read_text()
        assert "---" in content
        assert "What GMP Means for Psyllium" in content


def test_write_brief_file_slug_in_filename():
    with tempfile.TemporaryDirectory() as tmpdir:
        path = write_brief_file(SAMPLE_BRIEF, Path(tmpdir))
        assert "guides" in path.name or "verify" in path.name
