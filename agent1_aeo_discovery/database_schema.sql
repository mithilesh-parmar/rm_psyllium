-- AEO Query Discovery Agent — Supabase/PostgreSQL Schema
-- Run this in Supabase SQL Editor before first agent run

-- Table: query_clusters (reference table for human strategy)
CREATE TABLE IF NOT EXISTS query_clusters (
    cluster_id TEXT PRIMARY KEY,
    cluster_name TEXT NOT NULL,
    description TEXT,
    target_buyer_persona TEXT,
    content_priority TEXT CHECK (content_priority IN ('high', 'medium', 'low')) DEFAULT 'medium',
    assigned_to_agent2 BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO query_clusters (cluster_id, cluster_name, description, target_buyer_persona, content_priority) VALUES
  ('supplier_qualification', 'Supplier Qualification', 'Queries about verifying and auditing psyllium suppliers', 'Procurement Manager / QA Director', 'high'),
  ('technical_specs', 'Technical Specifications', 'Mesh size, purity, moisture, swelling volume specs', 'R&D Scientist / Formulation Chemist', 'high'),
  ('pricing_logistics', 'Pricing & Logistics', 'FOB pricing, MOQ, lead time, Incoterms', 'Procurement Manager', 'high'),
  ('organic_sustainability', 'Organic & Sustainability', 'NOP vs EU-NOP, organic certification queries', 'Sustainability / Quality Manager', 'medium'),
  ('khakha_animal_feed', 'Khakha & Animal Feed', 'Psyllium by-product for feed mills', 'Feed Mill Buyer', 'medium'),
  ('industrial_specialty', 'Industrial & Specialty', 'Paper, textile, and other industrial uses', 'Industrial Procurement', 'low'),
  ('compliance_documentation', 'Compliance & Documentation', 'FDA, EFSA, import docs, COA requirements', 'Compliance Officer / Regulatory Affairs', 'high'),
  ('competitor_targeting', 'Competitor Targeting', 'Comparison queries vs other Indian exporters', 'Procurement Manager', 'medium')
ON CONFLICT (cluster_id) DO NOTHING;

-- Table: aeo_queries (main data table)
CREATE TABLE IF NOT EXISTS aeo_queries (
    query_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    query_text TEXT NOT NULL,
    intent TEXT CHECK (intent IN ('informational', 'commercial', 'transactional')),
    region TEXT,
    language TEXT DEFAULT 'en',
    estimated_monthly_volume INTEGER,
    estimated_difficulty INTEGER,
    trend_direction TEXT CHECK (trend_direction IN ('rising', 'stable', 'declining')) DEFAULT 'stable',
    aeo_score NUMERIC(3,1) CHECK (aeo_score BETWEEN 0 AND 10),
    aeo_factors JSONB,
    citation_tags TEXT[],
    regulatory_keywords TEXT[],
    product_tags TEXT[],
    competitor_context TEXT,
    source TEXT,
    cluster_id TEXT REFERENCES query_clusters(cluster_id),
    priority TEXT CHECK (priority IN ('high', 'medium', 'low')) DEFAULT 'medium',
    content_recommendation JSONB,
    human_review_status TEXT CHECK (human_review_status IN ('pending', 'approved', 'rejected', 'edited')) DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_updated TIMESTAMPTZ DEFAULT NOW(),

    -- Enforce uniqueness per query text to allow clean upserts on weekly runs
    UNIQUE (query_text)
);

CREATE INDEX IF NOT EXISTS idx_cluster ON aeo_queries(cluster_id);
CREATE INDEX IF NOT EXISTS idx_aeo_score ON aeo_queries(aeo_score DESC);
CREATE INDEX IF NOT EXISTS idx_region_intent ON aeo_queries(region, intent);
CREATE INDEX IF NOT EXISTS idx_review_status ON aeo_queries(human_review_status);
CREATE INDEX IF NOT EXISTS idx_product_tags ON aeo_queries USING GIN(product_tags);

-- Table: agent_runs (audit + monitoring)
CREATE TABLE IF NOT EXISTS agent_runs (
    run_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    status TEXT CHECK (status IN ('running', 'completed', 'failed')) DEFAULT 'running',
    seed_version TEXT,
    cluster_processed TEXT,
    region_processed TEXT,
    total_discovered INTEGER,
    after_expansion INTEGER,
    after_scoring INTEGER,
    aeo_ready_count INTEGER,
    error_message TEXT,
    output_file_url TEXT
);

-- RLS: restrict service_role key to write-only on aeo_queries (anon cannot read/write)
ALTER TABLE aeo_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE query_clusters ENABLE ROW LEVEL SECURITY;

-- Service role bypasses RLS by default in Supabase — no additional policy needed for writes
-- Dashboard read access: create a dedicated read-only role or use service_role in dashboard
-- DO NOT expose anon key for writes; use SUPABASE_SERVICE_ROLE_KEY in GitHub Actions secrets
