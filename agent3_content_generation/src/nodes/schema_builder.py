"""Node 2: Deterministic JSON-LD generation for HowTo, FAQPage, Organization."""
from src.utils.logger import get_logger

log = get_logger("schema_builder")


def _build_howto_schema(brief: dict) -> dict:
    strategy = brief.get("content_strategy", {})
    seo = brief.get("seo_aeo_requirements", {})
    sections = strategy.get("outline_sections", [])

    steps = []
    for i, section in enumerate(sections, 1):
        steps.append({"@type": "HowToStep", "position": i, "text": section})

    # If ai_overview snippet has numbered steps, parse them as HowTo steps
    snippet = seo.get("ai_overview_target_snippet", "")
    if snippet and not steps:
        for line in snippet.split("."):
            line = line.strip()
            if line and len(line) > 10:
                steps.append({"@type": "HowToStep", "text": line})

    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": seo.get("title_tag", strategy.get("primary_keyword", "")),
        "description": seo.get("meta_description", ""),
        "step": steps or [{"@type": "HowToStep", "text": "Contact RM Psyllium for specifications"}],
    }


def _build_faqpage_schema(brief: dict, business_context: dict) -> dict:
    seo = brief.get("seo_aeo_requirements", {})
    certs_current = business_context.get("certifications_current", [])
    certs_pending = business_context.get("certifications_pending", [])
    pending_eta = business_context.get("certifications_pending_eta", "Q3 2026")
    moq = business_context.get("min_order_qty_kg", 500)
    port = business_context.get("shipping_port", "FOB Mundra")

    primary_kw = brief.get("content_strategy", {}).get("primary_keyword", "psyllium")

    faqs = [
        {
            "@type": "Question",
            "name": f"Does RM Psyllium have GMP certification?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": (
                    f"RM Psyllium is finalizing GMP audit documentation (target: {pending_eta}). "
                    f"All current shipments include full COA, phytosanitary certificate, and facility "
                    f"registration details. Current certifications: {', '.join(certs_current)}."
                ),
            },
        },
        {
            "@type": "Question",
            "name": "What is the minimum order quantity for psyllium husk from RM Psyllium?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": (
                    f"RM Psyllium accepts orders from {moq} kg MOQ, shipped {port}. "
                    "Custom specifications available on request."
                ),
            },
        },
        {
            "@type": "Question",
            "name": "What purity grades of psyllium husk are available?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": (
                    "RM Psyllium supplies psyllium husk in 85%, 95%, and 99% purity grades, "
                    "available in mesh sizes 40 to 200. Custom specifications developed on request."
                ),
            },
        },
    ]

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs,
    }


def _build_organization_schema(business_context: dict) -> dict:
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RM Psyllium",
        "alternateName": "Asia Agro Exports",
        "url": business_context.get("website", "https://rmpsyllium.com"),
        "email": business_context.get("contact_email", "info@rmpsyllium.com"),
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Gujarat",
            "addressCountry": "IN",
        },
        "sameAs": ["https://linkedin.com/company/rmpsyllium"],
        "description": (
            "Indian exporter of psyllium husk, psyllium powder, and psyllium khakha "
            "with 40 years of manufacturing experience. MOQ 500 kg, FOB Mundra."
        ),
    }


def _build_product_schema(business_context: dict, brief: dict) -> dict:
    seo = brief.get("seo_aeo_requirements", {})
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Psyllium Husk — B2B Export Grade",
        "brand": {"@type": "Brand", "name": "RM Psyllium"},
        "manufacturer": {
            "@type": "Organization",
            "name": "RM Psyllium (Asia Agro Exports)",
            "address": {"@type": "PostalAddress", "addressRegion": "Gujarat", "addressCountry": "IN"},
        },
        "description": seo.get("meta_description", ""),
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "seller": {"@type": "Organization", "name": "RM Psyllium"},
        },
    }


def schema_builder(state: dict) -> dict:
    """
    Input: agent2_payload, business_context
    Output: state + schema_markup dict
    """
    brief = state["agent2_payload"]
    biz_ctx = state["business_context"]
    requested_schemas = (
        brief.get("seo_aeo_requirements", {}).get("schema_markup", ["HowTo", "FAQPage", "Organization"])
    )

    schema_markup = {}
    builder_map = {
        "HowTo": lambda: _build_howto_schema(brief),
        "FAQPage": lambda: _build_faqpage_schema(brief, biz_ctx),
        "Organization": lambda: _build_organization_schema(biz_ctx),
        "Product": lambda: _build_product_schema(biz_ctx, brief),
    }

    for schema_type in requested_schemas:
        if schema_type in builder_map:
            schema_markup[schema_type] = builder_map[schema_type]()
            log.debug("Built %s schema", schema_type)
        else:
            log.warning("Unknown schema type requested: %s — skipping", schema_type)

    log.info("Schema markup built: %s", list(schema_markup.keys()))
    return {**state, "schema_markup": schema_markup}
