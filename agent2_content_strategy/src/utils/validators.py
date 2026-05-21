"""Pydantic v2 schemas for Agent 2 input/output validation."""
from __future__ import annotations
from datetime import date, datetime
from typing import Literal, Optional
from uuid import UUID

from pydantic import BaseModel, Field, field_validator


# ── Input: Agent 1 payload ────────────────────────────────────────────────────

class ContentRecommendation(BaseModel):
    format: str
    key_sections: list[str]
    cta_suggestion: str


class Agent1Payload(BaseModel):
    query_id: str
    query_text: str
    intent: Literal["commercial", "transactional", "informational", "navigational"]
    region: str
    language: str = "en"
    aeo_score: float
    product_tags: list[str] = Field(default_factory=list)
    citation_tags: list[str] = Field(default_factory=list)
    competitor_context: str = ""
    cluster_id: str
    content_recommendation: Optional[ContentRecommendation] = None


class BusinessContext(BaseModel):
    products_available: list[str]
    differentiators: list[str]
    certifications_current: list[str]
    certifications_pending: list[str]
    tone_guidelines: str


class Agent2Input(BaseModel):
    agent1_payload: Agent1Payload
    business_context: BusinessContext


# ── Output: Content Brief ─────────────────────────────────────────────────────

class BriefMetadata(BaseModel):
    brief_id: str
    source_query_id: str
    cluster_id: str
    created_at: str
    priority: Literal["high", "medium", "low"]
    estimated_effort_hours: int
    target_publish_date_days: int


class TargetAudience(BaseModel):
    persona: str
    decision_stage: str
    technical_level: str


class ContentStrategy(BaseModel):
    primary_keyword: str
    secondary_keywords: list[str]
    content_format: str
    target_word_count: int
    outline_sections: list[str]

    @field_validator("outline_sections")
    @classmethod
    def check_section_count(cls, v: list[str]) -> list[str]:
        if not (4 <= len(v) <= 6):
            raise ValueError(f"outline_sections must have 4–6 items, got {len(v)}")
        return v


class SeoAeoRequirements(BaseModel):
    title_tag: str
    meta_description: str
    url_slug: str
    schema_markup: list[str]
    ai_overview_target_snippet: str

    @field_validator("ai_overview_target_snippet")
    @classmethod
    def check_snippet_length(cls, v: str) -> str:
        word_count = len(v.split())
        if not (30 <= word_count <= 55):
            raise ValueError(f"AI snippet must be 30–55 words, got {word_count}")
        return v


class CtaConversionStrategy(BaseModel):
    primary_cta: str
    secondary_cta: str
    placement_hooks: list[str]
    qualification_filter: str


class GenerationParameters(BaseModel):
    model_temperature: float = 0.3
    max_tokens: int = 1800
    output_format: str = "markdown_with_yaml_frontmatter"
    include_table_placeholders: bool = True


class Agent3GenerationPayload(BaseModel):
    tone_constraints: list[str]
    required_elements: list[str]
    citation_sources: list[str]
    avoid_phrases: list[str]
    internal_link_targets: list[str]
    generation_parameters: GenerationParameters


class HumanReviewNotes(BaseModel):
    requires_founder_input: list[str] = Field(default_factory=list)
    legal_compliance_check: str = ""


class ContentBrief(BaseModel):
    brief_metadata: BriefMetadata
    target_audience: TargetAudience
    content_strategy: ContentStrategy
    seo_aeo_requirements: SeoAeoRequirements
    cta_conversion_strategy: CtaConversionStrategy
    agent_3_generation_payload: Agent3GenerationPayload
    human_review_notes: HumanReviewNotes
