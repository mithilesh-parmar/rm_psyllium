-- Agent 2: Content Strategy & Brief Generator
-- Run this in Supabase SQL editor to set up required tables

-- Table: content_briefs
CREATE TABLE IF NOT EXISTS content_briefs (
    brief_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_query_id UUID REFERENCES aeo_queries(query_id) ON DELETE SET NULL,
    cluster_id TEXT NOT NULL,
    priority TEXT NOT NULL CHECK (priority IN ('high', 'medium', 'low')),
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'approved', 'rejected', 'published')),
    content_strategy JSONB,
    seo_aeo_requirements JSONB,
    cta_strategy JSONB,
    agent_3_payload JSONB,
    human_review_notes JSONB,
    estimated_effort_hours INTEGER DEFAULT 3,
    target_publish_date DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_briefs_status ON content_briefs(status);
CREATE INDEX IF NOT EXISTS idx_briefs_cluster_priority ON content_briefs(cluster_id, priority);
CREATE INDEX IF NOT EXISTS idx_briefs_created ON content_briefs(created_at DESC);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_content_briefs_updated_at
    BEFORE UPDATE ON content_briefs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Table: content_templates (deterministic SEO/meta filling)
CREATE TABLE IF NOT EXISTS content_templates (
    template_id SERIAL PRIMARY KEY,
    format_type TEXT NOT NULL UNIQUE,
    title_pattern TEXT NOT NULL,
    meta_pattern TEXT NOT NULL,
    schema_types TEXT[] NOT NULL DEFAULT '{}',
    cta_default TEXT NOT NULL,
    section_template TEXT[] NOT NULL DEFAULT '{}',
    target_word_count INTEGER DEFAULT 1000,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed deterministic templates
INSERT INTO content_templates (format_type, title_pattern, meta_pattern, schema_types, cta_default, section_template, target_word_count) VALUES
(
    'step_by_step_guide',
    'How to {action} {topic} | RM Psyllium',
    'Learn {benefit} with this {count}-step guide. Includes {resource} for {audience}.',
    ARRAY['HowTo', 'FAQPage'],
    'Book a 15-min call to receive our {resource}',
    ARRAY['Problem/Context', 'Step-by-Step Process', 'Documentation Checklist', 'Red Flags / Watch-Outs', 'RM Psyllium Alignment', 'Next Steps & CTA'],
    1100
),
(
    'comparison',
    '{topic1} vs {topic2}: Which Grade Fits Your Application? | RM Psyllium',
    'Compare {topic1} and {topic2} for {use_case}. Spec tables, purity data, and sourcing guidance inside.',
    ARRAY['Article', 'FAQPage'],
    'Request custom spec development quote',
    ARRAY['Overview & Use Cases', 'Spec Comparison Table', 'Regulatory Considerations', 'Cost & MOQ Guidance', 'RM Psyllium Offerings', 'Get a Sample / Quote'],
    1200
),
(
    'checklist',
    '{compliance} Checklist for {region} Psyllium Imports | RM Psyllium',
    'Download our verified checklist for {region} psyllium imports. Includes COA, phytosanitary, and customs docs.',
    ARRAY['HowTo', 'Organization'],
    'Download checklist (PDF) + schedule compliance call',
    ARRAY['Why This Checklist Matters', 'Pre-Order Documentation', 'Shipment & Customs Requirements', 'Quality Verification Steps', 'Post-Delivery Compliance', 'Download & Next Steps'],
    900
),
(
    'spec_sheet',
    'Psyllium {product} Technical Specifications — {grade} Grade | RM Psyllium',
    'Full technical spec sheet for psyllium {product} {grade} grade. Purity %, mesh size, COA parameters, MOQ, and FOB pricing.',
    ARRAY['Product', 'Organization'],
    'Request COA + Pricing Sheet for {product}',
    ARRAY['Product Overview', 'Technical Specifications Table', 'Testing Parameters & COA Structure', 'Regulatory & Certification Status', 'Packaging & Logistics', 'Request Samples or Quote'],
    700
),
(
    'faq',
    '{topic}: {count} Questions B2B Buyers Ask | RM Psyllium',
    'Answers to {count} common questions about {topic} from procurement and QA teams. Technical, compliance-focused.',
    ARRAY['FAQPage', 'Organization'],
    'Send us your technical question — we''ll respond within 24 hrs',
    ARRAY['Introduction', 'Specification Questions', 'Compliance & Regulatory Questions', 'Sourcing & Logistics Questions', 'RM Psyllium-Specific FAQs', 'Contact for Custom Queries'],
    1000
)
ON CONFLICT (format_type) DO NOTHING;

-- Useful view: brief dashboard
CREATE OR REPLACE VIEW brief_dashboard AS
SELECT
    brief_id,
    cluster_id,
    priority,
    status,
    content_strategy->>'content_format' AS content_format,
    content_strategy->>'primary_keyword' AS primary_keyword,
    seo_aeo_requirements->>'title_tag' AS title_tag,
    estimated_effort_hours,
    target_publish_date,
    created_at
FROM content_briefs
ORDER BY
    CASE priority WHEN 'high' THEN 1 WHEN 'medium' THEN 2 ELSE 3 END,
    created_at DESC;
