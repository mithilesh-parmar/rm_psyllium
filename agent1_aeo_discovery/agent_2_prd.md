# 🤖 Agent 2: B2B Content Strategy & Brief Generator
## For rmpsyllium.com | Psyllium Export | AEO-Optimized Content Planning

> **Project Owner**: RM Psyllium (Asia Agro Exports)  
> **Website**: https://rmpsyllium.com  
> **Target Audience**: US/EU nutraceutical manufacturers, pharma 3PMs, feed mills, industrial buyers  
> **Budget Constraint**: Frugal-first (<₹5k/month runtime)  
> **Predecessor**: Agent 1 (AEO Query Discovery)  
> **Successor**: Agent 3 (AI Content Generation & Citation Structuring)  

---

## 🎯 WHY WE ARE BUILDING THIS AGENT

### Business Problem
- Discovered queries (Agent 1) are raw data. They need **strategic framing** before content creation.
- B2B buyers don't want generic blogs. They want **spec-driven, compliance-ready, procurement-focused guides** that answer technical questions and build trust.
- Solo founders lack time to manually research outlines, SEO requirements, AEO formatting, and CTA placement for every query.
- Agent 3 will need **precise generation parameters** to produce citation-ready, on-brand content without hallucination or fluff.

### Strategic Goals
| Goal | Metric | Timeline |
|------|--------|----------|
| Convert high-AEO queries into structured briefs | ≥80% approval rate on first 20 briefs | Week 3 |
| Enforce B2B technical tone & compliance focus | Zero consumer/fluff language in output | Ongoing |
| Reduce brief creation time from 2 hrs → 5 mins | Per query | Ongoing |
| Output Agent 3-ready generation payloads | JSON schema validated 100% | Week 4 |
| Align content with sales pipeline | 3+ qualified inbound inquiries/month from published articles | Month 3 |

### Agent Positioning in Pipeline
```
Agent 1 (Query Discovery) 
   ↓ [Rich Context JSON]
Agent 2 (Strategy & Briefs) ← YOU ARE HERE
   ↓ [Brief JSON + .md frontmatter + Agent 3 payload]
Agent 3 (Content Generation & Citation Optimization)
   ↓ [Published .md/.html + Schema markup + AI citation hooks]
```

---

## 📋 AGENT 2 SPECIFICATION

### Agent Role
> "You are a B2B Content Strategy Agent for RM Psyllium. Your job is to transform high-AEO-score search queries into actionable, conversion-optimized content briefs. Every brief must be technically accurate, procurement-focused, AEO-ready, and structured for seamless handoff to Agent 3 (content generator). Prioritize clarity, compliance, and commercial intent over SEO fluff."

### Core Capabilities
1. **Intent-to-Format Mapping**: Classify query → recommend optimal content format (guide, comparison, checklist, spec sheet, FAQ)
2. **Technical Outline Generation**: Build logical, buyer-journey-aligned section structure
3. **SEO/AEO Optimization**: Auto-generate title, meta, schema markup, and AI snippet targeting
4. **CTA & Conversion Strategy**: Place context-aware CTAs aligned with buyer stage
5. **Agent 3 Handoff Preparation**: Structure generation parameters, tone constraints, citation requirements
6. **Frugal Token Routing**: Use deterministic templates for ~60% of output; reserve LLM only for strategic/variable sections

---

## 🔌 INPUT SCHEMA (From Agent 1 - Rich Context)

```json
{
  "agent1_payload": {
    "query_id": "uuid4",
    "query_text": "how to verify GMP certification for psyllium husk suppliers in India",
    "intent": "commercial",
    "region": "US",
    "language": "en",
    "aeo_score": 8.7,
    "product_tags": ["psyllium_husk", "supplier_qualification"],
    "citation_tags": ["compliance_checklist", "regulatory_links"],
    "competitor_context": "Jyot Overseas mentions GMP but lacks verification steps; Satnam has BRC but no import checklist",
    "cluster_id": "supplier_qualification_compliance",
    "content_recommendation": {
      "format": "step_by_step_guide",
      "key_sections": ["What is GMP?", "Documentation checklist", "Red flags"],
      "cta_suggestion": "Book a call to receive our GMP compliance checklist"
    }
  },
  "business_context": {
    "products_available": ["husk 85-99%", "powder 40-200 mesh", "khakha feed grade", "industrial", "organic USDA/EU"],
    "differentiators": ["40yrs manufacturing", "in-house processing", "custom spec dev", "pre-shipment COA", "FOB Mundra", "MOQ 500kg"],
    "certifications_current": ["FSSAI", "APEDA", "IEC"],
    "certifications_pending": ["GMP", "ISO 22000", "HACCP"],
    "tone_guidelines": "Professional, data-first, transparent about certification status, zero consumer language"
  }
}
```

---

## 📤 OUTPUT SCHEMA (Agent 3 Ready + Human Review)

```json
{
  "brief_metadata": {
    "brief_id": "uuid4",
    "source_query_id": "uuid4",
    "cluster_id": "supplier_qualification_compliance",
    "created_at": "ISO8601",
    "priority": "high",
    "estimated_effort_hours": 3,
    "target_publish_date_days": 5
  },
  "target_audience": {
    "persona": "procurement_manager_us_nutraceutical",
    "decision_stage": "vendor_evaluation",
    "technical_level": "intermediate_to_advanced"
  },
  "content_strategy": {
    "primary_keyword": "verify GMP certification psyllium supplier India",
    "secondary_keywords": ["psyllium GMP documentation checklist", "import psyllium husk USA compliance", "psyllium supplier COA verification"],
    "content_format": "step_by_step_guide",
    "target_word_count": 1100,
    "outline_sections": [
      "What GMP Certification Means for Psyllium Imports",
      "5 Documents Every Buyer Must Request Before Shipping",
      "Red Flags: How to Spot Non-Compliant Suppliers",
      "How RM Psyllium Aligns with GMP Standards (Transparent Status Update)",
      "Downloadable Checklist & Next Steps"
    ]
  },
  "seo_aeo_requirements": {
    "title_tag": "How to Verify GMP Certification for Psyllium Suppliers in India | RM Psyllium",
    "meta_description": "Importing psyllium husk to the USA? Use this 5-step GMP verification checklist to vet Indian suppliers. Includes COA requirements & red flags.",
    "url_slug": "/guides/verify-gmp-certification-psyllium-supplier-india",
    "schema_markup": ["HowTo", "FAQPage", "Organization"],
    "ai_overview_target_snippet": "To verify GMP certification for a psyllium supplier in India: 1) Request facility registration number, 2) Ask for recent audit reports, 3) Cross-check with FDA/WHO databases, 4) Review COA testing parameters, 5) Confirm batch-level traceability. RM Psyllium provides pre-shipment documentation for transparency."
  },
  "cta_conversion_strategy": {
    "primary_cta": "Book a 15-min call to receive our GMP Compliance Checklist",
    "secondary_cta": "Download Sample COA Template (PDF)",
    "placement_hooks": ["after_section_2", "end_of_article"],
    "qualification_filter": "Only shown to visitors who scroll past 40% or click spec tables"
  },
  "agent_3_generation_payload": {
    "tone_constraints": ["B2B professional", "data-first", "no marketing fluff", "acknowledge pending certs transparently"],
    "required_elements": ["spec_table_placeholder", "compliance_footnote", "founder_signature_note"],
    "citation_sources": ["FDA 21 CFR Part 117", "WHO GMP Guidelines for Botanicals", "RM Psyllium internal COA template"],
    "avoid_phrases": ["best in class", "premium quality", "trusted by thousands", "boost digestion"],
    "internal_link_targets": ["/products/psyllium-husk", "/compliance/", "/contact/"],
    "generation_parameters": {
      "model_temperature": 0.3,
      "max_tokens": 1800,
      "output_format": "markdown_with_yaml_frontmatter",
      "include_table_placeholders": true
    }
  },
  "human_review_notes": {
    "requires_founder_input": ["Confirm current GMP audit status date", "Attach latest COA sample"],
    "legal_compliance_check": "Ensure no claims of certified GMP until audit complete"
  }
}
```

---

## 🏗️ TECHNICAL ARCHITECTURE

### Stack Selection (Frugal-First)
| Component | Tool | Reason | Cost |
|-----------|------|--------|------|
| Framework | LangGraph (Python) | Deterministic state machine, easy debugging | $0 |
| LLM Routing | LiteLLM + OpenRouter | Route cheap models for templates, GPT-4o-mini for strategy | ~$8-15/mo |
| Storage | Supabase | PostgreSQL + JSONB support, syncs with Agent 1 | $0 |
| Export | Markdown generator + YAML frontmatter | Netlify/Hugo/Next.js compatible | $0 |
| Scheduling | GitHub Actions cron | Weekly or on-demand trigger | $0 |
| Validation | `pydantic` + `jsonschema` | Strict schema enforcement before export | $0 |

### Workflow Pipeline
```
┌─────────────────┐
│ 1. LOAD INPUT   │
│ Agent 1 payload │
│ + business ctx  │
└────────┬────────┘
         ▼
┌─────────────────┐
│ 2. INTENT MAP   │
│ Rule-based:     │
│ commercial → guide/comparison
│ transactional → pricing/spec sheet
│ informational → FAQ/technical deep dive
└────────┬────────┘
         ▼
┌─────────────────┐
│ 3. LLM OUTLINE  │
│ Prompt: Generate logical B2B outline, enforce tone, 
│ add compliance notes, map to buyer journey stage
└────────┬────────┘
         ▼
┌─────────────────┐
│ 4. SEO/AEO FILL │
│ Deterministic:  │
│ - Title/meta templates
│ - Schema type selection
│ - AI snippet generation
└────────┬────────┘
         ▼
┌─────────────────┐
│ 5. CTA & AGENT3 │
│ Strategy engine:│
│ - Place CTAs by scroll depth
│ - Build Agent 3 payload with constraints
└────────┬────────┘
         ▼
┌─────────────────┐
│ 6. VALIDATE &   │
│ EXPORT          │
│ - Pydantic schema check
│ - Output: JSON + .md frontmatter
│ - Upsert to Supabase
│ - Webhook to Agent 3 queue
└─────────────────┘
```

---

## 🧠 SYSTEM PROMPT FOR LLM OUTLINE GENERATION

```text
You are a B2B Content Strategist for RM Psyllium, an Indian exporter of psyllium husk, powder, khakha feed, and industrial grades. Your task is to generate a structured content outline for a high-intent B2B search query.

RULES:
1. Output ONLY valid JSON matching the provided schema. No markdown, no extra text.
2. Outline must follow logical B2B buyer journey: Problem → Evaluation → Verification → Decision → Next Steps
3. Enforce tone: technical, transparent, procurement-focused. NO consumer language ("health benefits", "boost digestion").
4. If certifications are pending (GMP, ISO 22000), explicitly state "We are finalizing audit in Q3 2026" in relevant sections.
5. Include spec tables, compliance footnotes, and COA references where applicable.
6. Keep outline to 4-6 sections max. Each section must have a clear purpose for the buyer.
7. Add exact CTA placement hooks and qualification triggers.
8. Generate the AI overview target snippet as a direct 35-45 word answer.

INPUT CONTEXT:
{{agent1_payload_json}}
{{business_context_json}}

OUTPUT FORMAT:
{
  "outline_sections": ["...", "..."],
  "ai_overview_target_snippet": "...",
  "tone_constraints_applied": [...],
  "compliance_notes": ["..."]
}
```

---

## 🗄️ DATABASE SCHEMA (Supabase)

```sql
-- Table: content_briefs
CREATE TABLE content_briefs (
    brief_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_query_id UUID REFERENCES aeo_queries(query_id),
    cluster_id TEXT,
    priority TEXT CHECK (priority IN ('high', 'medium', 'low')),
    status TEXT CHECK (status IN ('draft', 'review', 'approved', 'published')),
    content_strategy JSONB,
    seo_aeo_requirements JSONB,
    cta_strategy JSONB,
    agent_3_payload JSONB,
    human_review_notes JSONB,
    estimated_effort_hours INTEGER,
    target_publish_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    INDEX idx_status ON content_briefs(status),
    INDEX idx_cluster_priority ON content_briefs(cluster_id, priority)
);

-- Table: content_templates (for deterministic SEO/meta filling)
CREATE TABLE content_templates (
    template_id SERIAL PRIMARY KEY,
    format_type TEXT,
    title_pattern TEXT,
    meta_pattern TEXT,
    schema_types TEXT[],
    cta_default TEXT
);

-- Seed deterministic templates
INSERT INTO content_templates (format_type, title_pattern, meta_pattern, schema_types, cta_default) VALUES
('step_by_step_guide', 'How to {{action}} {{topic}} | RM Psyllium', 'Learn {{benefit}} with this {{count}}-step guide. Includes {{resource}} for {{audience}}.', ARRAY['HowTo','FAQPage'], 'Book a call to receive our {{resource}}'),
('comparison', '{{Topic1}} vs {{Topic2}}: Which is Right for Your Application?', 'Compare {{topic1}} and {{topic2}} for {{use_case}}. Spec tables, purity data, and sourcing guidance inside.', ARRAY['Article','FAQPage'], 'Request custom spec development quote'),
('checklist', '{{Compliance}} Checklist for {{Region}} Psyllium Imports', 'Download our verified checklist for {{region}} psyllium imports. Includes COA, phytosanitary, and customs docs.', ARRAY['Checklist','Organization'], 'Download checklist (PDF) + schedule compliance call');
```

---

## 🐍 CORE CODE STRUCTURE

```
agent2_content_strategy/
├── config/
│   ├── business_context.json
│   ├── tone_rules.yaml
│   └── template_mappings.json
├── src/
│   ├── __init__.py
│   ├── main.py                  # Entry point: load → run graph → validate → export
│   ├── graph.py                 # LangGraph state machine
│   ├── nodes/
│   │   ├── intent_mapper.py     # Rule-based format selection
│   │   ├── outline_generator.py # LLM prompt + JSON parsing
│   │   ├── seo_aeo_engine.py    # Deterministic template filling
│   │   ├── cta_planner.py       # Conversion strategy logic
│   │   ├── agent3_builder.py    # Construct generation payload
│   │   └── exporter.py          # JSON + .md frontmatter + Supabase upsert
│   ├── utils/
│   │   ├── llm_router.py        # LiteLLM config + cost tracking
│   │   ├── validators.py        # Pydantic schema enforcement
│   │   └── markdown_gen.py      # YAML frontmatter + section placeholders
│   └── prompts/
│       └── outline_system.txt
├── tests/
│   ├── test_intent_map.py
│   ├── test_schema_validation.py
│   └── test_export_format.py
├── scripts/
│   ├── run_local.py
│   ├── approve_brief.py         # CLI to change status 'draft' → 'approved'
│   └── export_to_netlify.py     # Copies approved briefs to /content/briefs/
├── .github/workflows/run_agent2.yml
├── requirements.txt
└── README.md
```

---

## ⚙️ DEPLOYMENT INSTRUCTIONS

### Step 1: Local Setup
```bash
mkdir agent2_content_strategy && cd agent2_content_strategy
python -m venv venv && source venv/bin/activate
pip install langgraph pydantic supabase-client litellm openrouter
# Add keys to .env (OPENAI_API_KEY, SUPABASE_URL, SUPABASE_KEY)
python scripts/run_local.py --query-id <uuid_from_agent1>
```

### Step 2: Supabase Integration
Run the provided SQL schema. Ensure `content_briefs` table links to `aeo_queries` via `source_query_id`.

### Step 3: GitHub Actions
```yaml
name: Run Content Strategy Agent
on:
  schedule:
    - cron: '0 4 * * 2'  # Tuesdays 4 AM UTC
  workflow_dispatch:
jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: '3.11' }
      - run: pip install -r requirements.txt
      - env: { ... }
        run: python src/main.py --batch-mode --status-draft
```

### Step 4: Human Review Workflow
```bash
# List pending briefs
python scripts/list_drafts.py

# Approve & trigger Agent 3 queue
python scripts/approve_brief.py --brief-id <uuid>

# Export to Netlify content folder
python scripts/export_to_netlify.py --status approved
```

---

## 🔄 INTEGRATION WITH AGENT 1 & 3

### Agent 1 → Agent 2 Handoff
- Agent 2 queries Supabase: `SELECT * FROM aeo_queries WHERE aeo_score >= 7.0 AND cluster_id NOT IN (SELECT cluster_id FROM content_briefs WHERE status != 'published')`
- Rich context injected via JSON payload before graph execution

### Agent 2 → Agent 3 Handoff
- `agent_3_generation_payload` contains exact model parameters, tone constraints, citation sources, and output format
- Webhook triggers Agent 3 queue with brief JSON
- Agent 3 reads `.md` file, expands placeholders, inserts real COA/spec data, publishes

### Netlify Static Site Flow
```
Supabase (draft) → Human Approval → export_to_netlify.py → /content/briefs/ 
→ Hugo/Next.js build → Netlify deploy → Live URL tracked in CRM
```

---

## 💰 COST OPTIMIZATION STRATEGIES

| Tactic | Implementation | Savings |
|--------|---------------|---------|
| **Template-Driven SEO/Meta** | Deterministic rules for 60% of output | ~50% LLM token reduction |
| **LiteLLM Routing** | Mistral-7B for outline, GPT-4o-mini for validation | ~40% inference cost drop |
| **Batch Processing** | Process 10-20 queries/run, cache templates | Eliminates redundant API calls |
| **Schema Validation First** | Pydantic catches errors before LLM retry | Reduces failed runs & wasted tokens |
| **Weekly Runs** | B2B content strategy doesn't need daily updates | 7x lower compute cost |

**Target Runtime Cost**: ₹3,000-5,000/month (~$35-60)

---

## 🧪 TESTING & ACCEPTANCE CRITERIA

Agent 2 is "done" when:
- [ ] Accepts Agent 1 rich context payload without error
- [ ] Outputs valid JSON matching output schema (100% pydantic validation)
- [ ] Generates 4-6 section outlines aligned with B2B buyer journey
- [ ] Enforces tone rules (zero consumer/fluff language in tests)
- [ ] Produces `.md` frontmatter compatible with Netlify static site
- [ ] `agent_3_generation_payload` contains all required constraints
- [ ] Human review takes <10 mins per brief (approve/edit/reject)
- [ ] Supabase upsert succeeds with proper foreign key links
- [ ] Cost per brief generated < ₹50

---

## 📅 PROJECT TIMELINE

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| **1** | Setup & Schema | Supabase tables, Pydantic models, local env |
| **2** | Core Nodes | Intent mapper, LLM outline, SEO engine, CTA planner |
| **3** | Integration & Export | Agent 1 handoff, .md generator, Supabase sync |
| **4** | Testing & Handoff | Schema validation, Netlify export, Agent 3 payload ready |
| **5+** | Scale & Review | Batch processing, approval workflow, CRM tracking |

---

## 🚨 RISK MITIGATION

| Risk | Mitigation |
|------|-----------|
| **LLM outputs non-JSON** | Strict system prompt + pydantic validation + retry with error context |
| **Tone drift to consumer language** | Hardcoded negative phrase list + automated regex filter before export |
| **Over-promising pending certs** | Business context enforces "pending" status; legal compliance note flagged |
| **Schema mismatch breaks Agent 3** | Versioned payload schema + backward compatibility layer |
| **Netlify export conflicts** | UUID-based filenames, atomic writes, rollback on error |

---

> **Final Note to Builder (Claude Code)**:  
> Agent 2 is the strategic bridge between discovery and execution. Prioritize:  
> 1. **Deterministic structure** over creative generation (templates > LLM where possible)  
> 2. **B2B precision** (specs, compliance, procurement language) over SEO volume  
> 3. **Agent 3 readiness** (every field must be actionable for the next agent)  
> 4. **Founder time protection** (10-min review max, clear approve/reject workflow)  
>   
> When in doubt, ask: *"Would this brief help a procurement manager evaluate RM Psyllium as a technical supplier, not a commodity vendor?"* If yes → ship. If no → refine.  
>   
> 🌾 Build with precision. Validate rigorously. Hand off cleanly.
```

---

## 📥 HOW TO USE THIS FILE

1. **Copy** all content between the `---` markers
2. **Save** as `AGENT2_CONTENT_STRATEGY_BRIEF.md`
3. **Feed to Claude Code** with:
   > "Use this markdown file as the complete specification to build Agent 2: B2B Content Strategy & Brief Generator for rmpsyllium.com. Generate the full Python/LangGraph codebase, Supabase schema, validation logic, markdown export, and GitHub Actions workflow. Follow all frugal-cost, Agent 3 handoff, and B2B compliance guidelines."

4. **After generation**, run:
   ```bash
   python scripts/run_local.py --test-mode
   # Verify schema validation passes, .md exports cleanly, cost < ₹50/run
   ```
