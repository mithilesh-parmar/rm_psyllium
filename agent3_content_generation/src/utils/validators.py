"""Pydantic models and JSON-LD schema validation for Agent 3 outputs."""
import json
from typing import Any, Optional

import jsonschema
from pydantic import BaseModel, Field, field_validator

JSONLD_BASE_SCHEMA = {
    "type": "object",
    "required": ["@context", "@type"],
    "properties": {
        "@context": {"type": "string"},
        "@type": {"type": "string"},
    },
}

HOWTO_SCHEMA = {
    **JSONLD_BASE_SCHEMA,
    "required": ["@context", "@type", "name", "step"],
    "properties": {
        **JSONLD_BASE_SCHEMA["properties"],
        "name": {"type": "string"},
        "step": {
            "type": "array",
            "items": {
                "type": "object",
                "required": ["@type", "text"],
                "properties": {
                    "@type": {"const": "HowToStep"},
                    "text": {"type": "string"},
                },
            },
            "minItems": 1,
        },
    },
}

FAQPAGE_SCHEMA = {
    **JSONLD_BASE_SCHEMA,
    "required": ["@context", "@type", "mainEntity"],
    "properties": {
        **JSONLD_BASE_SCHEMA["properties"],
        "mainEntity": {
            "type": "array",
            "items": {
                "type": "object",
                "required": ["@type", "name", "acceptedAnswer"],
            },
            "minItems": 1,
        },
    },
}


class FrontmatterModel(BaseModel):
    title: str = Field(min_length=10, max_length=100)
    description: str = Field(min_length=50, max_length=200)
    slug: str
    date: str
    tags: list[str] = Field(min_length=1)
    draft: bool
    schema_types: list[str] = Field(default_factory=list)

    @field_validator("slug")
    @classmethod
    def slug_format(cls, v: str) -> str:
        if not v.startswith("/"):
            raise ValueError("slug must start with /")
        return v


class CitationOptimizationModel(BaseModel):
    ai_snippet_target: str = Field(min_length=30)
    structured_facts: list[dict]
    backlink_targets: list[dict] = Field(default_factory=list)
    internal_link_insertions: list[dict] = Field(default_factory=list)


class HumanReviewFlagsModel(BaseModel):
    requires_founder_approval: list[str]
    legal_compliance_check: str
    technical_review: str


class GeneratedContent(BaseModel):
    content_id: str
    source_brief_id: str
    generated_at: str
    model_used: str
    token_count: int
    schema_validation: str
    compliance_flags: list[str]
    frontmatter: FrontmatterModel
    body_markdown: str
    word_count: int
    schema_markup: dict[str, Any]
    citation_optimization: CitationOptimizationModel
    human_review_flags: HumanReviewFlagsModel


def validate_jsonld(schema_markup: dict[str, Any]) -> tuple[bool, list[str]]:
    """Validate JSON-LD blocks. Returns (is_valid, list_of_errors)."""
    errors = []
    schema_validators = {
        "HowTo": HOWTO_SCHEMA,
        "FAQPage": FAQPAGE_SCHEMA,
    }

    for schema_type, block in schema_markup.items():
        validator_schema = schema_validators.get(schema_type, JSONLD_BASE_SCHEMA)
        try:
            jsonschema.validate(instance=block, schema=validator_schema)
        except jsonschema.ValidationError as e:
            errors.append(f"{schema_type}: {e.message}")

    return len(errors) == 0, errors


def count_words(text: str) -> int:
    return len(text.split())
