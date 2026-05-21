"""Test generation with a sample brief. Usage: python scripts/run_local.py [--brief-id UUID]"""
import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv

_ENV_PATH = Path(__file__).parent.parent.parent / "agent1_aeo_discovery" / "config" / "api_keys.env"
if _ENV_PATH.exists():
    load_dotenv(_ENV_PATH)

SAMPLE_BRIEF = {
    "brief_metadata": {
        "brief_id": "sample-brief-001",
        "source_query_id": "sample-query-001",
        "priority": "high",
    },
    "content_strategy": {
        "primary_keyword": "verify GMP certification psyllium supplier India",
        "secondary_keywords": ["psyllium husk COA", "India botanical GMP audit", "FDA 21 CFR psyllium"],
        "content_format": "step_by_step_guide",
        "target_word_count": 1100,
        "outline_sections": [
            "What GMP Certification Means for Psyllium Imports",
            "5 Documents Every Buyer Must Request Before Shipping",
            "Red Flags: How to Spot Non-Compliant Suppliers",
            "How RM Psyllium Aligns with GMP Standards",
            "Next Steps: Request Documentation from RM Psyllium",
        ],
    },
    "seo_aeo_requirements": {
        "title_tag": "How to Verify GMP Certification for Psyllium Suppliers in India | RM Psyllium",
        "meta_description": "Importing psyllium husk to the USA? Use this 5-step GMP verification checklist to evaluate Indian psyllium suppliers and protect your supply chain.",
        "url_slug": "/guides/verify-gmp-certification-psyllium-supplier-india",
        "schema_markup": ["HowTo", "FAQPage", "Organization"],
        "ai_overview_target_snippet": "To verify GMP certification for a psyllium supplier in India: 1) Request facility registration number, 2) Ask for recent audit reports, 3) Cross-check with FDA/WHO databases, 4) Review COA testing parameters, 5) Confirm batch-level traceability.",
    },
    "agent_3_generation_payload": {
        "tone_constraints": [
            "B2B professional — no consumer language",
            "data-first — cite specific specs, numbers, and regulatory references",
            "transparent about pending certifications (GMP/ISO 22000 — Q3 2026)",
        ],
        "required_elements": ["spec_table_placeholder", "compliance_footnote", "founder_signature_note"],
        "citation_sources": [
            "FDA 21 CFR Part 117 — Current Good Manufacturing Practice",
            "WHO GMP Guidelines for Botanicals",
            "RM Psyllium internal COA template",
        ],
        "avoid_phrases": ["best in class", "premium quality", "trusted by thousands"],
        "generation_parameters": {
            "model_temperature": 0.3,
            "max_tokens": 1800,
            "output_format": "markdown_with_yaml_frontmatter",
            "include_table_placeholders": True,
        },
    },
}


def main():
    parser = argparse.ArgumentParser(description="Run Agent 3 locally with sample or real brief")
    parser.add_argument("--brief-id", help="Load brief from Supabase by brief_id (requires DB credentials)")
    parser.add_argument("--brief-file", help="Path to Agent 2 brief JSON file")
    parser.add_argument("--test-mode", action="store_true", default=True, help="Skip Supabase writes (default: on)")
    parser.add_argument("--no-test-mode", dest="test_mode", action="store_false")
    args = parser.parse_args()

    from src.utils.logger import setup_logging
    setup_logging("INFO")

    if args.brief_file:
        brief_path = Path(args.brief_file)
        brief = json.loads(brief_path.read_text())
        if isinstance(brief, list):
            brief = brief[0]
    elif args.brief_id:
        from src.utils.supabase_client import fetch_approved_briefs
        briefs = fetch_approved_briefs(limit=1)
        matching = [b for b in briefs if b.get("brief_id") == args.brief_id]
        if not matching:
            print(f"ERROR: brief_id={args.brief_id} not found in approved briefs")
            sys.exit(1)
        from src.main import _flatten_to_payload
        brief = _flatten_to_payload(matching[0])
    else:
        print("No --brief-file or --brief-id provided — using built-in sample brief")
        brief = SAMPLE_BRIEF

    from src.main import run_single_brief
    output = run_single_brief(brief, test_mode=args.test_mode)

    print("\n" + "=" * 60)
    print("GENERATION COMPLETE")
    print("=" * 60)
    print(f"Content ID:        {output.get('content_id', 'N/A')}")
    print(f"File:              {output.get('md_path', 'N/A')}")
    print(f"Word count:        {output.get('word_count', 0)}")
    print(f"Schema validation: {output.get('schema_validation', 'N/A')}")
    print(f"Compliance flags:  {len(output.get('compliance_flags', []))}")

    review = output.get("human_review_flags", {})
    if review.get("cert_violations"):
        print(f"\n⚠️  CERT VIOLATIONS: {review['cert_violations']}")
    if review.get("prohibited_phrases_found"):
        print(f"⚠️  PROHIBITED PHRASES: {review['prohibited_phrases_found']}")
    if review.get("requires_founder_approval"):
        print(f"\n📋 FOUNDER REVIEW NEEDED:")
        for item in review["requires_founder_approval"]:
            print(f"   - {item}")

    print(f"\nFull output JSON:\n{json.dumps(output, indent=2, default=str)}")


if __name__ == "__main__":
    main()
