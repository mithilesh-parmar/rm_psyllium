-- Agent 3: Supabase schema additions
-- Run after Agent 2 schema (content_briefs table must exist)

-- Table: content_generations
CREATE TABLE IF NOT EXISTS content_generations (
    content_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_brief_id UUID REFERENCES content_briefs(brief_id) ON DELETE SET NULL,
    status TEXT NOT NULL DEFAULT 'generated'
        CHECK (status IN ('generated', 'under_review', 'approved', 'published', 'archived', 'rejected')),
    generated_markdown TEXT,
    schema_markup JSONB,
    citation_optimization JSONB,
    human_review_flags JSONB,
    export_metadata JSONB,
    token_count INTEGER DEFAULT 0,
    model_used TEXT,
    schema_validation TEXT,
    compliance_flags JSONB,
    human_review_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    published_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_cg_status ON content_generations(status);
CREATE INDEX IF NOT EXISTS idx_cg_brief ON content_generations(source_brief_id);
CREATE INDEX IF NOT EXISTS idx_cg_created ON content_generations(created_at DESC);

-- Table: citation_tracking
CREATE TABLE IF NOT EXISTS citation_tracking (
    tracking_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_id UUID REFERENCES content_generations(content_id) ON DELETE SET NULL,
    ai_engine TEXT NOT NULL
        CHECK (ai_engine IN ('perplexity', 'google_ai_overview', 'claude', 'copilot', 'bing', 'other')),
    citation_url TEXT,
    citation_snippet TEXT,
    detected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    verified BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE INDEX IF NOT EXISTS idx_ct_content ON citation_tracking(content_id);
CREATE INDEX IF NOT EXISTS idx_ct_engine ON citation_tracking(ai_engine);
CREATE INDEX IF NOT EXISTS idx_ct_detected ON citation_tracking(detected_at DESC);

-- Table: spec_templates (deterministic spec table data — avoids LLM token spend)
CREATE TABLE IF NOT EXISTS spec_templates (
    template_id SERIAL PRIMARY KEY,
    product_type TEXT NOT NULL,
    parameter_name TEXT NOT NULL,
    standard_range TEXT NOT NULL,
    test_method TEXT NOT NULL,
    unit TEXT,
    notes TEXT
);

-- Seed psyllium spec data
INSERT INTO spec_templates (product_type, parameter_name, standard_range, test_method, unit, notes)
VALUES
    ('psyllium_husk', 'Purity', '85-99%', 'USP <561>', '%', 'Grade-dependent: 85%, 95%, 99% available'),
    ('psyllium_husk', 'Mesh Size', '40-200', 'Sieve Analysis', 'mesh', 'Custom mesh on request'),
    ('psyllium_husk', 'Moisture Content', '≤10%', 'Loss on Drying', '%', 'Controlled storage'),
    ('psyllium_husk', 'Swelling Volume', '≥40 mL/g', 'USP Method', 'mL/g', 'Key functional parameter'),
    ('psyllium_husk', 'Ash Content', '≤4%', 'USP <561>', '%', NULL),
    ('psyllium_husk', 'Acid-Insoluble Ash', '≤0.5%', 'BP/IP Method', '%', NULL),
    ('psyllium_powder', 'Mesh Size', '40-200', 'Sieve Analysis', 'mesh', NULL),
    ('psyllium_powder', 'Bulk Density', '350-450 kg/m³', 'ASTM D1895', 'kg/m³', 'Critical for capsule fill'),
    ('psyllium_powder', 'Moisture Content', '≤10%', 'Loss on Drying', '%', NULL),
    ('khakha_powder', 'Crude Fiber', '≥25%', 'AOAC 985.29', '%', 'Primary value driver for feed'),
    ('khakha_powder', 'Moisture Content', '≤12%', 'Loss on Drying', '%', NULL)
ON CONFLICT DO NOTHING;
