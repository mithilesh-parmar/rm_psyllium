# 🤖 Agent 1: AEO Query Discovery Agent
## For rmpsyllium.com | B2B Psyllium Export | Answer Engine Optimization

> **Project Owner**: RM Psyllium (Asia Agro Exports)  
> **Website**: https://rmpsyllium.com  
> **Plant Location**: Gujarat, India (Operational July 2026)  
> **Founder**: Solo founder, software engineering background  
> **Budget**: ₹5 Lakhs Year 1 CAC (~$6,000)  
> **Success Metric**: Close 2 pilot orders (5-20 MT) by Q4 2026  

---

## 🎯 WHY WE ARE BUILDING THIS AGENT

### Business Problem
- B2B psyllium buyers (US/EU nutraceutical manufacturers, pharma 3PMs, exporter agents) increasingly use AI search (Perplexity, Google AI Overviews, Claude) to research suppliers
- Traditional SEO focuses on keywords; AEO focuses on **answer-ready, citation-worthy content**
- Competitors (Jyot Overseas, Satnam Psyllium, Mantra Psyllium) have generic content; opportunity to win via structured, technical, compliance-rich content
- As a solo founder, I need automation to discover high-intent queries at scale without manual research

### Strategic Goals
| Goal | Metric | Timeline |
|------|--------|----------|
| Discover 500+ AEO-optimized long-tail queries | Queries with AEO score ≥7.0 | Month 1 |
| Identify 3-5 high-opportunity query clusters | Clusters with low competition + high commercial intent | Month 1 |
| Feed structured queries to Agent 2 (content generator) | JSON output compatible with Agent 2 schema | Month 1 |
| Reduce manual keyword research time by 90% | From ~10 hrs/week to <1 hr/week review | Ongoing |
| Drive qualified inbound leads via AEO content | 15-40 qualified leads/month by Month 4 | Q3 2026 |

### Why AEO (Not Just SEO)?
1. **AI Search is Growing**: 40% of Google searches now trigger AI Overviews; Perplexity, Claude, Copilot are B2B research tools
2. **Citation = Credibility**: When AI cites your content as a source, you become the "trusted supplier" in the buyer's mental model
3. **Long-Tail = Less Competition**: Queries like "psyllium husk mesh size 80 vs 100 for capsule filling" have commercial intent but low SEO competition
4. **Structured Content = AI-Friendly**: AI prefers tables, specs, checklists, step-by-step guides — exactly what B2B buyers need

---

## 📋 AGENT 1 SPECIFICATION

### Agent Role
> "You are an AEO Query Discovery Agent for RM Psyllium. Your job is to continuously discover, validate, and structure long-tail search queries that global B2B buyers ask AI search engines about sourcing psyllium husk, powder, khakha, and industrial grades from India. Prioritize queries that are answerable, citation-worthy, and commercially relevant."

### Core Capabilities
1. **Multi-Source Query Harvesting**: Pull queries from SERP APIs, Q&A platforms, competitor sites, trend tools
2. **Conversational Expansion**: Use LLM to generate question-based variants (how/what/which/can/should)
3. **Intent & Region Tagging**: Classify queries by buyer intent + target geography + language
4. **AEO Readiness Scoring**: Score queries on answerability, citation potential, conversational match, commercial fit
5. **Semantic Deduplication**: Cluster similar queries; keep highest-scoring variant
6. **Structured Output**: Export JSON/CSV compatible with Agent 2 (content generator) and internal CRM

### Input Requirements
```json
{
  "business_profile": {
    "domain": "rmpsyllium.com",
    "core_products": [
      "psyllium_husk_85_99_purity",
      "psyllium_husk_powder_mesh_40_200",
      "psyllium_khakha_powder_feed_grade",
      "industrial_grade_psyllium",
      "organic_psyllium_usda_eu_nop",
      "psyllium_cattle_feed"
    ],
    "unique_value_props": [
      "40_years_manufacturing_experience_partner",
      "in_house_processing_not_trading_desk",
      "custom_spec_development_before_quote",
      "coa_full_documentation_pre_shipment",
      "fob_mundra_port_advantage",
      "moq_500kg_flexible_trials"
    ],
    "buyer_documents": ["sample_COA", "product_specification", "origin_records", "packing_details", "destination_document_checklist"],
    "capacity_mt_per_year": 2000,
    "lead_time_days": "14-21"
  },
  "target_regions": ["US", "DE", "FR", "NL", "BD", "UK", "CA"],
  "languages": ["en", "de", "bn"],
  "competitors": [
    {"domain": "jyotoverseas.net", "focus": "automation_claims"},
    {"domain": "satnampsyllium.com", "focus": "BRC_organic_certifications"},
    {"domain": "rmpsyllium.com", "focus": "cattle_feed_leader"},
    {"domain": "gayatripsyllium.com", "focus": "Unjha_location_purity_range"},
    {"domain": "apexherbex.com", "focus": "broad_herbal_portfolio"}
  ],
  "seed_query_clusters": {
    "supplier_qualification": ["how to verify GMP certification...", "..."],
    "technical_specs": ["psyllium husk mesh size 80 vs 100...", "..."],
    "pricing_logistics": ["bulk price per MT Gujarat...", "..."],
    "organic_sustainability": ["NOP vs EU-NOP difference...", "..."],
    "khakha_animal_feed": ["khakha powder fiber content cattle...", "..."],
    "industrial_specialty": ["industrial grade for paper manufacturing...", "..."],
    "competitor_targeting": ["Jyot Overseas vs RM Psyllium comparison...", "..."]
  },
  "aeo_scoring_weights": {
    "answerability": 0.4,
    "citation_potential": 0.3,
    "conversational_match": 0.2,
    "commercial_fit": 0.1
  },
  "output_filters": {
    "min_aeo_score": 7.0,
    "min_word_count": 3,
    "exclude_branded_queries": true,
    "require_question_format": true
  }
}
```

---

## 🏗️ TECHNICAL ARCHITECTURE

### Stack Selection (Frugal-First)
| Component | Tool | Reason | Cost |
|-----------|------|--------|------|
| Agent Framework | LangGraph (Python) | Stateful workflows, easy debugging, open-source | $0 |
| LLM Inference | Mix: GPT-4o-mini (critical) + Mistral-7B via Groq (bulk) | Balance quality + cost; Groq free tier generous | ~$15-30/mo |
| Query APIs | SERPAPI (free tier) + DataForSEO (pay-per-use) + Google Trends API | Start free; scale only on validated clusters | ~$10-25/mo |
| Storage | Supabase (free tier) | PostgreSQL + vector search; easy Netlify integration | $0 |
| Scheduling | GitHub Actions cron | Simple, reliable, free for private repos | $0 |
| Dashboard | Streamlit (self-hosted on Render free tier) | Quick preview of top queries; no frontend dev needed | $0 |
| Monitoring | Simple logging + Slack webhook (optional) | Alert on errors or high-value query discovery | $0 |

### System Diagram
```
┌─────────────────┐
│   CONFIG LOADER │
│ - Load seed JSON│
│ - Validate inputs│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   FETCH LAYER   │
│ • SERPAPI: "psyllium husk bulk supplier [region]"
│ • AnswerThePublic: question extraction
│ • Competitor scrape: public specs/FAQs
│ • Google Trends: rising queries by region
│ • Reddit/Quora/LinkedIn: B2B sourcing discussions
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   EXPAND LAYER  │
│ LLM Prompt:
│ "Generate 10 conversational, answer-ready variants 
│ of [query] that a procurement manager at a US 
│ nutraceutical company might ask an AI assistant 
│ about psyllium husk sourcing from India. 
│ Output format: question only, 3-12 words."
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   ENRICH LAYER  │
│ • Volume/Difficulty: DataForSEO API or heuristic estimate
│ • Intent: informational/commercial/transactional (LLM classifier)
│ • Region/Language: tag from seed config
│ • Regulatory tags: FDA, EFSA, organic, GMP, ISO 22000
│ • Citation potential: data-backed/spec-comparison/compliance
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   SCORE LAYER   │
│ AEO Score = 
│   (answerability × 0.4) + 
│   (citation_potential × 0.3) + 
│   (conversational_match × 0.2) + 
│   (commercial_fit × 0.1)
│ 
│ Threshold: ≥7.0 → pass to output
│ Deduplicate: semantic clustering (sentence-transformers)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   OUTPUT LAYER  │
│ • Format: JSON per schema below
│ • Store: Supabase table `aeo_queries`
│ • Trigger: webhook to Agent 2 queue (optional)
│ • Log: discovery_stats to `agent_runs` table
└─────────────────┘
```

---

## 📤 OUTPUT SCHEMA (JSON)

```json
{
  "run_metadata": {
    "run_id": "uuid4",
    "timestamp": "ISO8601",
    "seed_version": "v1.0",
    "total_discovered": 847,
    "after_dedup": 142,
    "aeo_ready_count": 63,
    "regions_processed": ["US", "DE", "BD"],
    "api_credits_used": 234
  },
  "queries": [
    {
      "query_id": "uuid4",
      "query_text": "how to verify GMP certification for psyllium husk suppliers in India",
      "intent": "commercial",
      "region": "US",
      "language": "en",
      "estimated_monthly_volume": 120,
      "estimated_difficulty": 28,
      "trend_direction": "stable",
      "aeo_score": 8.7,
      "aeo_factors": {
        "answerability": 9,
        "citation_potential": 9,
        "conversational_match": 8,
        "commercial_fit": 8
      },
      "citation_tags": ["compliance_checklist", "regulatory_links", "verification_steps"],
      "regulatory_keywords": ["GMP", "FDA", "21 CFR", "facility registration"],
      "product_tags": ["psyllium_husk", "supplier_qualification"],
      "competitor_context": null,
      "source": "serpapi_expansion",
      "cluster_id": "supplier_qualification_compliance",
      "priority": "high",
      "content_recommendation": {
        "format": "step_by_step_guide",
        "key_sections": ["What is GMP?", "How to request documentation", "Red flags to watch for"],
        "cta_suggestion": "Book a call to receive our GMP compliance checklist"
      },
      "created_at": "ISO8601",
      "last_updated": "ISO8601"
    }
  ]
}
```

---

## 🧠 SYSTEM PROMPT FOR LLM EXPANSION

```text
You are an AEO Query Expansion Specialist for RM Psyllium, a B2B exporter of psyllium husk, powder, khakha powder, and industrial grades from Gujarat, India.

YOUR TASK:
Given a seed query like "psyllium husk bulk supplier", generate 10 conversational, answer-ready question variants that a procurement manager, R&D scientist, or compliance officer at a US/EU nutraceutical or pharma company might ask an AI assistant when researching suppliers.

RULES:
1. Output ONLY the question text, one per line, no numbering or bullets
2. Questions must be 3-12 words, natural/conversational phrasing
3. Prioritize question starters: how, what, which, can, should, where, when, why
4. Include spec-specific language: mesh size, purity %, moisture content, COA, GMP, FDA, etc.
5. Include regional modifiers when relevant: "to USA", "for EU import", "from Gujarat"
6. Avoid branded queries (no competitor names unless in competitor-targeting cluster)
7. Focus on B2B intent: bulk, MOQ, certification, documentation, logistics, specs
8. Generate variants that are ANSWERABLE with factual, structured content (tables, checklists, step-by-step)

EXAMPLE INPUT:
"psyllium husk mesh size comparison"

EXAMPLE OUTPUT:
how does mesh size affect psyllium husk solubility
what mesh size is best for capsule filling psyllium
psyllium husk 80 mesh vs 100 mesh difference
which psyllium powder mesh works for gluten free baking
can I request custom mesh size from psyllium supplier
what is the standard mesh specification for pharmaceutical psyllium
how to choose psyllium husk particle size for beverage applications
does finer mesh psyllium powder clump more in storage
what mesh size do EU nutraceutical manufacturers prefer for psyllium
psyllium husk powder bulk density by mesh size chart

SEED CONTEXT:
- Products: psyllium husk (85-99% purity), husk powder (mesh 40-200), khakha powder (feed grade), industrial grade, buyer-specified documentation review
- Buyers: US/EU nutraceutical contract manufacturers, pharma 3PMs, exporter agents, feed mills
- Differentiators: 40 years manufacturing experience, in-house processing (not trading), custom spec development, pre-shipment COA, FOB Mundra
- Compliance: buyer document review, sample COA, product specification, origin records, packing details, destination document checklist

CLUSTER FOCUS: {{cluster_name}}
REGION FOCUS: {{region}}
LANGUAGE: {{language}}

BEGIN EXPANSION:
```

---

## 🗄️ DATABASE SCHEMA (Supabase/PostgreSQL)

```sql
-- Table: aeo_queries
CREATE TABLE aeo_queries (
    query_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    query_text TEXT NOT NULL,
    intent TEXT CHECK (intent IN ('informational', 'commercial', 'transactional')),
    region TEXT,
    language TEXT DEFAULT 'en',
    estimated_monthly_volume INTEGER,
    estimated_difficulty INTEGER,
    trend_direction TEXT CHECK (trend_direction IN ('rising', 'stable', 'declining')),
    aeo_score NUMERIC(3,1) CHECK (aeo_score BETWEEN 0 AND 10),
    aeo_factors JSONB, -- {answerability, citation_potential, conversational_match, commercial_fit}
    citation_tags TEXT[], -- e.g., ['compliance_checklist', 'spec_comparison']
    regulatory_keywords TEXT[],
    product_tags TEXT[],
    competitor_context TEXT,
    source TEXT,
    cluster_id TEXT,
    priority TEXT CHECK (priority IN ('high', 'medium', 'low')),
    content_recommendation JSONB, -- {format, key_sections, cta_suggestion}
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    
    -- Indexes for performance
    INDEX idx_cluster ON aeo_queries(cluster_id),
    INDEX idx_aeo_score ON aeo_queries(aeo_score DESC),
    INDEX idx_region_intent ON aeo_queries(region, intent),
    INDEX idx_product_tags ON aeo_queries USING GIN(product_tags)
);

-- Table: agent_runs (for monitoring)
CREATE TABLE agent_runs (
    run_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    status TEXT CHECK (status IN ('running', 'completed', 'failed')),
    seed_version TEXT,
    total_discovered INTEGER,
    after_dedup INTEGER,
    aeo_ready_count INTEGER,
    regions_processed TEXT[],
    api_credits_used INTEGER,
    error_message TEXT,
    output_file_url TEXT
);

-- Table: query_clusters (for human review & strategy)
CREATE TABLE query_clusters (
    cluster_id TEXT PRIMARY KEY,
    cluster_name TEXT NOT NULL,
    description TEXT,
    target_buyer_persona TEXT,
    content_priority TEXT CHECK (content_priority IN ('high', 'medium', 'low')),
    assigned_to_agent2 BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 🐍 CORE CODE STRUCTURE (Python/LangGraph)

```
agent1_aeo_discovery/
├── config/
│   ├── seed_input.json          # Your business profile + competitors + clusters
│   ├── aeo_scoring_config.yaml  # Weights, thresholds, filters
│   └── api_keys.env.example     # Template for env vars (never commit real keys)
├── src/
│   ├── __init__.py
│   ├── main.py                  # Entry point: load config → run graph → output
│   ├── graph.py                 # LangGraph state machine definition
│   ├── nodes/
│   │   ├── fetch_queries.py     # SERPAPI, Trends, competitor scrape logic
│   │   ├── expand_variants.py   # LLM prompt + parsing + error handling
│   │   ├── enrich_metrics.py    # Volume/difficulty/regulatory tagging
│   │   ├── score_aeo.py         # Scoring model + threshold filtering
│   │   ├── deduplicate.py       # Semantic clustering + variant selection
│   │   └── output_export.py     # JSON formatting + Supabase upsert
│   ├── utils/
│   │   ├── llm_client.py        # Unified interface for GPT-4o-mini + Mistral/Groq
│   │   ├── api_clients.py       # SERPAPI, DataForSEO, Trends wrappers
│   │   ├── supabase_client.py   # DB connection + batch upsert
│   │   └── logging.py           # Structured logging + Slack webhook (optional)
│   └── prompts/
│       ├── expansion_prompt.txt # The system prompt above (loaded as template)
│       └── scoring_rubric.txt   # Detailed scoring criteria for LLM evaluator
├── tests/
│   ├── test_fetch.py
│   ├── test_expand.py
│   ├── test_score.py
│   └── fixtures/
│       └── sample_seed.json
├── scripts/
│   ├── run_local.py             # For testing without cron
│   ├── refresh_cluster.py       # Manual trigger for specific cluster
│   └── export_dashboard_data.py # For Streamlit preview
├── dashboard/
│   ├── app.py                   # Streamlit app: filter/view top queries
│   └── requirements.txt
├── .github/
│   └── workflows/
│       └── run_agent_weekly.yml # GitHub Actions cron schedule
├── requirements.txt             # Python deps (langgraph, openai, supabase, etc.)
├── README.md                    # Setup + deployment instructions
└── LICENSE                      # MIT (open internal tool)
```

---

## ⚙️ DEPLOYMENT INSTRUCTIONS

### Step 1: Local Setup (Development)
```bash
# Clone repo (you'll create this after Claude Code generates it)
git clone <your-repo>
cd agent1_aeo_discovery

# Create virtual env
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install deps
pip install -r requirements.txt

# Copy env template and add your keys
cp config/api_keys.env.example config/api_keys.env
# Edit config/api_keys.env with:
#   OPENAI_API_KEY=sk-...
#   SERPAPI_KEY=...
#   DATAFORSEO_LOGIN=...
#   DATAFORSEO_PASSWORD=...
#   SUPABASE_URL=...
#   SUPABASE_ANON_KEY=...

# Run locally for testing
python scripts/run_local.py --cluster supplier_qualification --region US
```

### Step 2: Supabase Setup
1. Create free project at https://supabase.com
2. Run SQL schema from `database_schema.sql` in SQL Editor
3. Get `SUPABASE_URL` and `SUPABASE_ANON_KEY` from Project Settings → API
4. Add to `config/api_keys.env`

### Step 3: GitHub Actions (Weekly Cron)
```yaml
# .github/workflows/run_agent_weekly.yml
name: Run AEO Query Agent Weekly

on:
  schedule:
    - cron: '0 2 * * 1'  # Every Monday at 2 AM UTC
  workflow_dispatch:     # Allow manual trigger

jobs:
  run-agent:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
          
      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          
      - name: Run Agent 1
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          SERPAPI_KEY: ${{ secrets.SERPAPI_KEY }}
          DATAFORSEO_LOGIN: ${{ secrets.DATAFORSEO_LOGIN }}
          DATAFORSEO_PASSWORD: ${{ secrets.DATAFORSEO_PASSWORD }}
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
        run: |
          python src/main.py --config config/seed_input.json
          
      - name: Notify on completion (optional)
        if: always()
        run: |
          # Slack webhook or email notification logic here
```

### Step 4: Dashboard Preview (Optional but Recommended)
```bash
# Install dashboard deps
cd dashboard
pip install -r requirements.txt

# Run locally
streamlit run app.py

# Deploy to Render free tier:
# 1. Connect GitHub repo
# 2. Set build command: pip install -r dashboard/requirements.txt
# 3. Set start command: streamlit run dashboard/app.py --server.port $PORT --server.address 0.0.0.0
```

---

## 🧪 TESTING & VALIDATION

### Unit Tests to Implement
```python
# tests/test_expand.py
def test_expansion_output_format():
    """Ensure LLM output is clean question list, no extra text"""
    result = expand_variants("psyllium husk purity", cluster="technical_specs")
    assert all(q.strip().endswith('?') or not q.strip().endswith('.') for q in result)
    assert all(3 <= len(q.split()) <= 12 for q in result)

# tests/test_score.py
def test_aeo_scoring_threshold():
    """Verify scoring logic filters correctly"""
    query = {"answerability": 9, "citation_potential": 8, "conversational_match": 7, "commercial_fit": 6}
    score = calculate_aeo_score(query)
    assert score == 8.0  # (9*0.4)+(8*0.3)+(7*0.2)+(6*0.1)
    assert score >= 7.0  # passes threshold

# tests/test_dedup.py
def test_semantic_clustering():
    """Ensure similar queries are grouped, best variant kept"""
    variants = [
        "how to verify GMP certification psyllium supplier India",
        "GMP certification check for Indian psyllium exporters",
        "verify GMP psyllium husk supplier"
    ]
    clustered = semantic_deduplicate(variants)
    assert len(clustered) == 1  # all map to one cluster
    assert "verify GMP certification" in clustered[0]  # highest-scoring variant kept
```

### Human-in-the-Loop Review Process
1. After first run, export top 50 queries (`aeo_score >= 8.0`)
2. Review in spreadsheet or Streamlit dashboard:
   - ✅ Keep: Commercial intent + answerable + aligns with product specs
   - ✏️ Edit: Minor rephrase for clarity or regional specificity
   - ❌ Reject: Off-topic, too generic, or low commercial fit
3. Feed approved queries to Agent 2 (content generator) with priority tags
4. Track which query clusters drive real inquiries (UTM + CRM tagging)

---

## 💰 COST OPTIMIZATION STRATEGIES

### Keep Monthly Cost < ₹7,000 (~$85)
| Tactic | Implementation | Savings |
|--------|---------------|---------|
| **LLM Caching** | Cache responses for identical seed+cluster+region combos | ~40% reduction in token usage |
| **Model Routing** | Use Mistral-7B via Groq (free tier) for expansion; reserve GPT-4o-mini for scoring | ~60% inference cost reduction |
| **API Throttling** | Limit SERPAPI to 100 calls/run; use heuristic volume estimates for low-priority queries | Stay in free tier longer |
| **Weekly Runs** | B2B search trends shift slowly; no need for daily discovery | 7x reduction in compute/API costs |
| **Free Tier First** | Supabase, Render, GitHub Actions all have generous free tiers | $0 infrastructure cost at start |
| **Sample-First Validation** | Run agent on 1 cluster (e.g., `supplier_qualification`) before scaling | Avoid wasted spend on low-value clusters |

### Monitor These Metrics
```python
# In logging.py
log_metrics = {
    "cost_per_discovered_query": total_api_cost / total_discovered,
    "cost_per_aeo_ready_query": total_api_cost / aeo_ready_count,
    "dedup_ratio": after_dedup / total_discovered,  # Target: <30%
    "human_review_time_minutes": time_spent_reviewing_top_50
}
# Alert if cost_per_aeo_ready_query > ₹100
```

---

## 🔄 INTEGRATION WITH AGENT 2 & 3

### Handoff to Agent 2 (Content Generator)
```json
// When query is approved for content creation
{
  "trigger_agent2": {
    "query_id": "uuid4",
    "query_text": "how to verify GMP certification for psyllium husk suppliers in India",
    "content_brief": {
      "format": "step_by_step_guide",
      "target_word_count": 1200,
      "key_sections": ["What is GMP?", "Documentation checklist", "Red flags", "How RM Psyllium complies"],
      "primary_cta": "Book a call to receive our GMP compliance checklist",
      "schema_markup": "HowTo + FAQPage",
      "citation_sources": ["FDA guidance docs", "WHO GMP guidelines", "RM Psyllium COA template"]
    },
    "priority": "high",
    "deadline_days": 3
  }
}
```

### Future Handoff to Agent 3 (Citation Structuring)
```json
// After content is published, prepare for AI citation
{
  "trigger_agent3": {
    "url": "https://rmpsyllium.com/guides/gmp-verification-psyllium-suppliers",
    "citation_optimization": {
      "extract_key_facts": ["GMP verification steps", "Required documents", "RM Psyllium compliance status"],
      "generate_structured_snippets": ["table: GMP checklist", "list: red flags", "definition: GMP"],
      "schema_markup": ["HowTo", "FAQPage", "Product", "Organization"],
      "backlink_targets": ["industry associations", "regulatory bodies", "trade publications"]
    }
  }
}
```

---

## 📅 PROJECT TIMELINE

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| **Week 1** | Setup & Seed | • Repo initialized with config<br>• Supabase schema deployed<br>• Local test run on 1 cluster |
| **Week 2** | Core Logic | • All LangGraph nodes implemented<br>• LLM prompting tuned for psyllium B2B<br>• Unit tests passing |
| **Week 3** | Integration & Test | • GitHub Actions cron working<br>• Streamlit dashboard preview<br>• First full run: 500+ queries discovered |
| **Week 4** | Review & Refine | • Human review of top 50 queries<br>• AEO scoring weights tuned<br>• Handoff format validated with Agent 2 spec |
| **Week 5+** | Scale & Optimize | • Add remaining clusters/regions<br>• Cost monitoring alerts active<br>• Track lead attribution from AEO content |

---

## 🚨 RISK MITIGATION

| Risk | Mitigation |
|------|-----------|
| **API costs overrun** | Hard cap in code: stop if `api_credits_used > budget_threshold`; alert via Slack |
| **Low-quality query expansion** | Human review of first 3 runs; refine prompt with negative examples |
| **Duplicate/low-value queries** | Aggressive semantic dedup + commercial-fit filter; cluster-level pruning |
| **LLM hallucination in scoring** | Use deterministic scoring for 80% of factors; LLM only for nuanced citation potential |
| **Supabase rate limits** | Batch upserts (100 records/request); retry logic with exponential backoff |
| **Competitor query backlash** | Avoid direct brand bashing; focus on "comparison" and "verification" framing |

---

## ✅ ACCEPTANCE CRITERIA

Agent 1 is "done" when:
- [ ] Runs end-to-end locally with seed config
- [ ] Discovers ≥100 unique queries with `aeo_score >= 7.0` in first test run
- [ ] Output JSON validates against schema (use `jsonschema` library)
- [ ] Successfully upserts to Supabase without errors
- [ ] GitHub Actions workflow triggers manually and on schedule
- [ ] Streamlit dashboard displays top 20 queries with filters
- [ ] Cost per AEO-ready query < ₹100 in test run
- [ ] Human reviewer can approve/reject queries in <30 minutes for top 50
- [ ] Handoff payload to Agent 2 is generated for approved queries

---

## 📎 APPENDIX: REFERENCE MATERIALS

### Psyllium Industry Keywords Glossary
```yaml
technical_specs:
  - purity: ["85%", "95%", "98%", "99%"]
  - mesh_size: ["40 mesh", "60 mesh", "80 mesh", "100 mesh", "200 mesh"]
  - moisture_content: ["<8%", "<10%", "<12%"]
  - swelling_volume: ["USP method", "EP method", "in-house test"]
  - particle_size_distribution: ["D10", "D50", "D90"]

compliance:
  - buyer_documents: ["COA", "product specification", "origin records", "packing details", "destination document checklist"]
  - regulatory: ["FDA 21 CFR", "EFSA", "USP-NF", "EP", "IP", "NOP", "EU Organic"]
  - documentation: ["COA", "MSDS", "Phytosanitary Certificate", "Certificate of Origin", "buyer document checklist"]

commercial:
  - terms: ["FOB Mundra", "CIF Hamburg", "LC at sight", "TT 30% advance", "MOQ 500kg"]
  - logistics: ["lead time 14-21 days", "25kg bags", "500kg jumbo bags", "container load 20MT"]
  - pricing: ["price per MT", "volume discount", "sample fee credited to first order"]
```

### Sample High-Value Query (Gold Standard)
```json
{
  "query_text": "what documents are required to import psyllium husk from India to USA",
  "intent": "commercial",
  "region": "US",
  "aeo_score": 9.2,
  "citation_potential": ["checklist", "regulatory_links", "step_by_step"],
  "content_recommendation": {
    "format": "compliance_checklist",
    "key_sections": [
      "FDA Facility Registration",
      "Prior Notice Submission",
      "Certificate of Analysis Requirements",
      "Customs Documentation Checklist",
      "How RM Psyllium Prepares Your Shipment"
    ],
    "cta_suggestion": "Download our USA Import Compliance Checklist (PDF)"
  }
}
```

### Quick Start Command for Claude Code
```bash
# After Claude Code generates the repo, run this to validate setup:
python -c "
import json, os
from src.main import run_agent
config = json.load(open('config/seed_input.json'))
result = run_agent(config, test_mode=True, cluster_limit=1)
print(f'✅ Test run complete: {result[\"aeo_ready_count\"]} high-quality queries discovered')
"
```

---

> **Final Note to Builder (Claude Code)**:  
> This agent is the foundation of a digital-first, AI-citation-optimized content strategy for a B2B agricultural ingredients exporter. Prioritize:  
> 1. **Accuracy** over volume (better 50 high-AEO queries than 500 generic ones)  
> 2. **Frugality** (stay under ₹7k/month; use free tiers first)  
> 3. **Extensibility** (clean interfaces for Agent 2/3 handoff)  
> 4. **Human-in-the-loop** (make review easy; this is a solo founder's tool)  
>   
> When in doubt, ask: *"Would this query help a procurement manager at a US nutraceutical company decide to book a call with RM Psyllium?"* If yes → keep. If no → filter.  
>   
> 🌾 Build with purpose. Ship fast. Iterate with data.
```

---

## 📥 HOW TO USE THIS FILE

1. **Copy** all content between the `---` markers above
2. **Paste** into a new file named `AGENT1_AEO_QUERY_DISCOVERY.md`
3. **Save** to your project directory
4. **Provide to Claude Code** with prompt:
   > "Use this markdown file as the complete specification to build Agent 1: AEO Query Discovery for rmpsyllium.com. Generate the full codebase with Python/LangGraph, Supabase schema, GitHub Actions workflow, and Streamlit dashboard. Follow all architecture, prompts, and frugal-cost guidelines."

5. **Review generated code**, then:
   ```bash
   # Setup env
   cp config/api_keys.env.example config/api_keys.env
   # Add your API keys, then:
   python scripts/run_local.py --cluster supplier_qualification --region US
   ```

---
