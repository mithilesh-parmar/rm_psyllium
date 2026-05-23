"""Test: JSON-LD schema.org compliance for HowTo, FAQPage, Organization."""
import pytest
from src.utils.validators import validate_jsonld

VALID_HOWTO = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Verify GMP Certification",
    "description": "Steps to verify a psyllium supplier's GMP documentation.",
    "step": [
        {"@type": "HowToStep", "text": "Request FDA facility registration number"},
        {"@type": "HowToStep", "text": "Ask for third-party audit reports"},
        {"@type": "HowToStep", "text": "Review Certificate of Analysis"},
    ],
}

VALID_FAQPAGE = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Does RM Psyllium have GMP certification?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "RM Psyllium is finalizing GMP audit documentation in Q3 2026.",
            },
        }
    ],
}

VALID_ORGANIZATION = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RM Psyllium",
    "url": "https://rmpsyllium.com",
}

INVALID_HOWTO_MISSING_STEPS = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Missing steps",
}


def test_valid_howto_passes():
    is_valid, errors = validate_jsonld({"HowTo": VALID_HOWTO})
    assert is_valid, f"Expected valid HowTo, got errors: {errors}"


def test_valid_faqpage_passes():
    is_valid, errors = validate_jsonld({"FAQPage": VALID_FAQPAGE})
    assert is_valid, f"Expected valid FAQPage, got errors: {errors}"


def test_organization_passes_base_schema():
    is_valid, errors = validate_jsonld({"Organization": VALID_ORGANIZATION})
    assert is_valid, f"Expected valid Organization, got errors: {errors}"


def test_invalid_howto_fails():
    is_valid, errors = validate_jsonld({"HowTo": INVALID_HOWTO_MISSING_STEPS})
    assert not is_valid, "Expected invalid HowTo to fail validation"
    assert len(errors) > 0


def test_combined_schema_all_pass():
    markup = {
        "HowTo": VALID_HOWTO,
        "FAQPage": VALID_FAQPAGE,
        "Organization": VALID_ORGANIZATION,
    }
    is_valid, errors = validate_jsonld(markup)
    assert is_valid, f"Expected all schemas valid, got: {errors}"


def test_schema_builder_output_valid():
    """Integration: schema_builder node produces valid JSON-LD."""
    from src.nodes.schema_builder import schema_builder

    state = {
        "agent2_payload": {
            "content_strategy": {
                "primary_keyword": "psyllium husk supplier India",
                "outline_sections": ["Step 1", "Step 2", "Step 3"],
            },
            "seo_aeo_requirements": {
                "title_tag": "Psyllium Husk Supplier India | RM Psyllium",
                "meta_description": "B2B psyllium husk export from Gujarat, India.",
                "url_slug": "/guides/psyllium-husk-supplier-india",
                "schema_markup": ["HowTo", "FAQPage", "Organization"],
                "ai_overview_target_snippet": "RM Psyllium supplies psyllium husk from India.",
            },
        },
        "business_context": {
            "website": "https://rmpsyllium.com",
            "contact_email": "info@rmpsyllium.com",
            "certifications_current": ["FSSAI", "APEDA", "IEC"],
            "certifications_pending": ["GMP", "ISO 22000"],
            "certifications_pending_eta": "Q3 2026",
            "min_order_qty_kg": 500,
            "shipping_port": "FOB Mundra",
            "internal_links": {},
        },
    }

    result = schema_builder(state)
    markup = result["schema_markup"]
    assert "HowTo" in markup
    assert "FAQPage" in markup
    assert "Organization" in markup
    is_valid, errors = validate_jsonld(markup)
    assert is_valid, f"schema_builder output failed validation: {errors}"
