
```markdown
# 🤖 Agent 3: AI Content Generation & Citation Optimization
## For rmpsyllium.com | Psyllium Export | Answer Engine Citation-Ready Content

> **Project Owner**: RM Psyllium (Asia Agro Exports)  
> **Website**: https://rmpsyllium.com  
> **Target Output**: Published markdown/HTML articles optimized for AI citation (Perplexity, Google AI Overviews, Claude)  
> **Predecessor**: Agent 2 (Content Strategy & Brief Generator)  
> **Successor**: Human review → Netlify deploy → CRM lead tracking  
> **Budget Constraint**: Frugal-first (<₹8k/month runtime)  

---

## 🎯 WHY WE ARE BUILDING THIS AGENT

### Business Problem
- Content briefs (Agent 2) are strategic plans. They need **execution** to become published assets.
- AI search engines (Perplexity, Google AI Overviews, Claude) prefer content that is:
  - **Structured**: Tables, lists, step-by-step, clear headings
  - **Factual**: Data-backed claims with source citations
  - **Answer-first**: Direct response in opening paragraph
  - **Schema-rich**: HowTo, FAQPage, Product, Organization markup
- Manual content writing is slow, inconsistent, and hard to scale for a solo founder.
- Competitors publish generic blogs; we can win by publishing **technical, citation-ready guides** that AI engines trust and surface.

### Strategic Goals
| Goal | Metric | Timeline |
|------|--------|----------|
| Generate publish-ready content from briefs | ≥90% schema validation pass rate | Week 3 |
| Optimize content for AI citation placement | ≥3 AI citations/month by Month 3 | Month 3 |
| Enforce B2B technical tone & compliance accuracy | Zero hallucinated claims in published content | Ongoing |
| Reduce content creation time from 4 hrs → 20 mins | Per article | Ongoing |
| Drive qualified inbound leads via published content | 5-10 inquiries/month from AI-referred traffic | Month 4 |

### Agent Positioning in Pipeline
```
Agent 1 (Query Discovery) 
   ↓ [Rich Context JSON]
Agent 2 (Strategy & Briefs)
   ↓ [Brief JSON + .md frontmatter + Agent 3 payload]
Agent 3 (Content Generation & Citation) ← YOU ARE HERE
   ↓ [Published .md/.html + Schema markup + AI citation hooks]
Human Review (Founder approves compliance claims)
   ↓
Netlify Deploy → Live URL → CRM Lead Attribution
```

---

## 📋 AGENT 3 SPECIFICATION

### Agent Role
> "You are an AI Content Generation & Citation Optimization Agent for RM Psyllium. Your job is to transform approved content briefs into publish-ready, AEO-optimized articles. Every output must be technically accurate, schema-compliant, citation-ready, and aligned with RM Psyllium's B2B voice. Prioritize factual precision, structured data, and AI-engine readability over creative flourishes."

### Core Capabilities
1. **Brief-to-Content Expansion**: Generate full article from outline, enforcing tone, structure, and technical depth
2. **Spec Table & Data Insertion**: Auto-generate psyllium spec tables (purity, mesh, moisture) from business context
3. **Schema Markup Generation**: Output valid JSON-LD for HowTo, FAQPage, Product, Organization
4. **AI Citation Optimization**: Structure content for answer extraction, source attribution, and snippet targeting
5. **Compliance Guardrails**: Enforce "pending certification" language, avoid hallucinated claims, flag legal review items
6. **Frugal Token Routing**: Use cheaper models for drafting, reserve premium for final polish and schema validation

---

## 🔌 INPUT SCHEMA (From Agent 2 - Approved Brief)

```json
{
  "agent2_payload": {
    "brief_id": "uuid4",
    "source_query_id": "uuid4",
    "content_strategy": {
      "primary_keyword": "verify GMP certification psyllium supplier India",
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
      "meta_description": "Importing psyllium husk to the USA? Use this 5-step GMP verification checklist...",
      "url_slug": "/guides/verify-gmp-certification-psyllium-supplier-india",
      "schema_markup": ["HowTo", "FAQPage", "Organization"],
      "ai_overview_target_snippet": "To verify GMP certification for a psyllium supplier in India: 1) Request facility registration number, 2) Ask for recent audit reports..."
    },
    "agent_3_generation_payload": {
      "tone_constraints": ["B2B professional", "data-first", "no marketing fluff", "acknowledge pending certs transparently"],
      "required_elements": ["spec_table_placeholder", "compliance_footnote", "founder_signature_note"],
      "citation_sources": ["FDA 21 CFR Part 117", "WHO GMP Guidelines for Botanicals", "RM Psyllium internal COA template"],
      "avoid_phrases": ["best in class", "premium quality", "trusted by thousands"],
      "generation_parameters": {
        "model_temperature": 0.3,
        "max_tokens": 1800,
        "output_format": "markdown_with_yaml_frontmatter",
        "include_table_placeholders": true
      }
    }
  },
  "business_context": {
    "products": {
      "psyllium_husk": {"purity_range": "85-99%", "mesh_options": ["40", "60", "80", "100", "200"], "moisture_max": "10%"},
      "psyllium_powder": {"mesh_range": "40-200", "bulk_density_kg_m3": "350-450"},
      "khakha_powder": {"fiber_content_min": "25%", "grade": "feed_A_or_B"}
    },
    "certifications": {
      "current": ["FSSAI", "APEDA", "IEC"],
      "pending": ["GMP", "ISO 22000", "HACCP"],
      "pending_timeline": "Q3 2026 target completion"
    },
    "differentiators": ["40yrs manufacturing", "in-house processing", "custom spec dev", "pre-shipment COA", "FOB Mundra", "MOQ 500kg"],
    "founder_note_template": "— [Founder Name], Founder, RM Psyllium | 40 years psyllium manufacturing experience"
  }
}
```

---

## 📤 OUTPUT SCHEMA (Publish-Ready + Citation Hooks)

```json
{
  "generation_metadata": {
    "content_id": "uuid4",
    "source_brief_id": "uuid4",
    "generated_at": "ISO8601",
    "model_used": "mistral-7b-via-groq",
    "token_count": 1642,
    "schema_validation": "passed",
    "compliance_flags": ["pending_gmp_certification_noted"]
  },
  "published_content": {
    "frontmatter": {
      "title": "How to Verify GMP Certification for Psyllium Suppliers in India | RM Psyllium",
      "description": "Importing psyllium husk to the USA? Use this 5-step GMP verification checklist...",
      "slug": "/guides/verify-gmp-certification-psyllium-supplier-india",
      "date": "2026-05-20",
      "tags": ["compliance", "psyllium-husk", "usa-import", "GMP"],
      "draft": false
    },
    "body_markdown": "# How to Verify GMP Certification for Psyllium Suppliers in India\n\n[Direct 40-word answer for AI overview snippet]\n\n## What GMP Certification Means for Psyllium Imports\n\n[Content...]\n\n### Psyllium Husk Specifications Reference\n\n| Parameter | Standard Range | Test Method |\n|-----------|---------------|-------------|\n| Purity | 85-99% | USP <561> |\n| Mesh Size | 40-200 | Sieve Analysis |\n| Moisture Content | ≤10% | Loss on Drying |\n| Swelling Volume | ≥40 mL/g | USP Method |\n\n[Content continues...]\n\n> **Compliance Note**: RM Psyllium is finalizing GMP audit documentation in Q3 2026. All current shipments include full COA, phytosanitary certificate, and facility registration details. [Download sample COA](/resources/sample-coa.pdf)\n\n— [Founder Name], Founder, RM Psyllium | 40 years psyllium manufacturing experience",
    "word_count": 1087
  },
  "schema_markup": {
    "HowTo": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Verify GMP Certification for Psyllium Suppliers in India",
      "step": [
        {"@type": "HowToStep", "text": "Request the supplier's FDA facility registration number"},
        {"@type": "HowToStep", "text": "Ask for recent third-party audit reports (WHO GMP, ISO 22000)"},
        {"@type": "HowToStep", "text": "Cross-check documentation with FDA/WHO public databases"},
        {"@type": "HowToStep", "text": "Review Certificate of Analysis (COA) testing parameters"},
        {"@type": "HowToStep", "text": "Confirm batch-level traceability and pre-shipment documentation"}
      ]
    },
    "FAQPage": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does RM Psyllium have GMP certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RM Psyllium is finalizing GMP audit documentation in Q3 2026. All current shipments include full COA, phytosanitary certificate, and facility registration details aligned with GMP principles."
          }
        }
      ]
    },
    "Organization": {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "RM Psyllium",
      "url": "https://rmpsyllium.com",
      "address": {"@type": "PostalAddress", "addressRegion": "Gujarat", "addressCountry": "IN"},
      "sameAs": ["https://linkedin.com/company/rmpsyllium"]
    }
  },
  "citation_optimization": {
    "ai_snippet_target": "To verify GMP certification for a psyllium supplier in India: 1) Request facility registration number, 2) Ask for recent audit reports, 3) Cross-check with FDA/WHO databases, 4) Review COA testing parameters, 5) Confirm batch-level traceability. RM Psyllium provides pre-shipment documentation for transparency.",
    "structured_facts": [
      {"fact": "Psyllium husk purity range", "value": "85-99%", "source": "RM Psyllium product specs"},
      {"fact": "GMP verification step 1", "value": "Request FDA facility registration number", "source": "FDA 21 CFR Part 117"},
      {"fact": "Typical moisture content limit", "value": "≤10%", "source": "USP <561> testing method"}
    ],
    "backlink_targets": [
      {"anchor": "FDA facility registration guidance", "url": "https://www.fda.gov/food/facility-registration-food-cosmetics-and-medical-devices"},
      {"anchor": "WHO GMP guidelines for botanicals", "url": "https://www.who.int/publications/i/item/9789241506797"}
    ],
    "internal_link_insertions": [
      {"anchor": "psyllium husk specifications", "url": "/products/psyllium-husk"},
      {"anchor": "compliance documentation", "url": "/compliance/"}
    ]
  },
  "human_review_flags": {
    "requires_founder_approval": ["pending GMP certification language", "COA sample link validity"],
    "legal_compliance_check": "Ensure no claims of certified GMP until audit complete",
    "technical_review": "Verify spec table values match current production capabilities"
  },
  "export_ready": {
    "filename": "verify-gmp-certification-psyllium-supplier-india.md",
    "target_directory": "/content/guides/",
    "netlify_frontmatter_compatible": true,
    "schema_injected": true
  }
}
```

---

## 🏗️ TECHNICAL ARCHITECTURE

### Stack Selection (Frugal-First)
| Component | Tool | Reason | Cost |
|-----------|------|--------|------|
| Framework | LangGraph (Python) | Stateful generation pipeline, retry logic | $0 |
| LLM Routing | LiteLLM + Groq + OpenRouter | Mistral-7B for drafting, GPT-4o-mini for polish/schema | ~$12-20/mo |
| Schema Validation | `jsonschema` + `pydantic` | Ensure JSON-LD validity before export | $0 |
| Markdown Engine | `python-frontmatter` + custom templating | Netlify/Hugo/Next.js compatible output | $0 |
| Storage | Supabase | Track generation history, link to briefs/queries | $0 |
| Export | Atomic file writes + Netlify webhook | Safe deployment, rollback on error | $0 |

### Workflow Pipeline
```
┌─────────────────┐
│ 1. LOAD BRIEF   │
│ Agent 2 payload │
│ + business ctx  │
└────────┬────────┘
         ▼
┌─────────────────┐
│ 2. DRAFT GEN    │
│ LLM: Expand outline → full markdown
│ Enforce: tone, structure, spec tables
│ Insert: placeholders for COA, founder note
└────────┬────────┘
         ▼
┌─────────────────┐
│ 3. SCHEMA BUILD │
│ Deterministic:  │
│ - Generate JSON-LD for HowTo/FAQPage/Organization
│ - Inject structured facts for AI citation
│ - Add backlink/internal link targets
└────────┬────────┘
         ▼
┌─────────────────┐
│ 4. CITATION OPT │
│ Extract: AI snippet target (first 40 words)
│ Tag: Structured facts with source attribution
│ Format: Schema-ready tables, lists, step-by-step
└────────┬────────┘
         ▼
┌─────────────────┐
│ 5. VALIDATE &   │
│ FLAG REVIEW     │
│ - Pydantic schema check
│ - Compliance flagger (pending certs)
│ - Technical accuracy spot-check (spec values)
└────────┬────────┘
         ▼
┌─────────────────┐
│ 6. EXPORT READY │
│ Output: .md file + JSON-LD + metadata
│ Atomic write to /content/guides/
│ Webhook to Netlify deploy (optional)
│ Log to Supabase: content_generations table
└─────────────────┘
```

---

## 🧠 SYSTEM PROMPT FOR CONTENT GENERATION

```text
You are a B2B Technical Content Writer for RM Psyllium, an Indian exporter of psyllium husk, powder, khakha feed, and industrial grades. Your task is to generate a publish-ready markdown article from an approved content brief.

RULES:
1. Output ONLY valid markdown with YAML frontmatter. No extra commentary.
2. First paragraph must contain a direct 35-45 word answer to the target query (for AI overview snippet).
3. Enforce tone: professional, data-first, procurement-focused. ZERO consumer language ("health benefits", "boost digestion").
4. Insert spec tables using the business context values (purity, mesh, moisture). Use markdown table format.
5. If certifications are pending (GMP, ISO 22000), explicitly state "We are finalizing audit in Q3 2026" — never claim certified status prematurely.
6. Include compliance footnote with COA sample link placeholder: [Download sample COA](/resources/sample-coa.pdf)
7. End with founder signature note using template: "— [Founder Name], Founder, RM Psyllium | 40 years psyllium manufacturing experience"
8. Keep total word count within ±10% of target.
9. Use exact section headings from the brief outline.
10. Insert internal link placeholders: [psyllium husk specifications](/products/psyllium-husk)

INPUT CONTEXT:
{{agent2_payload_json}}
{{business_context_json}}

OUTPUT FORMAT:
---
title: "{{title_tag}}"
description: "{{meta_description}}"
slug: "{{url_slug}}"
date: "{{today}}"
tags: [{{comma_separated_tags}}]
draft: false
---

{{ai_snippet_target_paragraph}}

{{section_1_heading}}
{{section_1_content}}

### Psyllium Husk Specifications Reference
| Parameter | Standard Range | Test Method |
|-----------|---------------|-------------|
| Purity | {{purity_range}} | USP <561> |
| Mesh Size | {{mesh_options}} | Sieve Analysis |
| Moisture Content | ≤{{moisture_max}}% | Loss on Drying |
| Swelling Volume | ≥40 mL/g | USP Method |

{{remaining_sections}}

> **Compliance Note**: {{pending_certification_language}}. All current shipments include full COA, phytosanitary certificate, and facility registration details. [Download sample COA](/resources/sample-coa.pdf)

— {{founder_signature_template}}
```

---

## 🗄️ DATABASE SCHEMA ADDITIONS (Supabase)

```sql
-- Table: content_generations (tracks Agent 3 output)
CREATE TABLE content_generations (
    content_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_brief_id UUID REFERENCES content_briefs(brief_id),
    status TEXT CHECK (status IN ('generated', 'under_review', 'approved', 'published', 'archived')),
    generated_markdown TEXT,
    schema_markup JSONB,
    citation_optimization JSONB,
    human_review_flags JSONB,
    export_metadata JSONB, -- {filename, target_directory, netlify_compatible}
    token_count INTEGER,
    model_used TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    published_at TIMESTAMPTZ,
    
    INDEX idx_status ON content_generations(status),
    INDEX idx_brief_link ON content_generations(source_brief_id)
);

-- Table: citation_tracking (measure AI citation success)
CREATE TABLE citation_tracking (
    tracking_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_id UUID REFERENCES content_generations(content_id),
    ai_engine TEXT CHECK (ai_engine IN ('perplexity', 'google_ai_overview', 'claude', 'copilot')),
    citation_url TEXT,
    citation_snippet TEXT,
    detected_at TIMESTAMPTZ DEFAULT NOW(),
    verified BOOLEAN DEFAULT FALSE,
    
    INDEX idx_content ON citation_tracking(content_id),
    INDEX idx_engine ON citation_tracking(ai_engine)
);

-- Seed: psyllium spec templates for deterministic table generation
CREATE TABLE spec_templates (
    template_id SERIAL PRIMARY KEY,
    product_type TEXT,
    parameter_name TEXT,
    standard_range TEXT,
    test_method TEXT,
    unit TEXT
);

INSERT INTO spec_templates (product_type, parameter_name, standard_range, test_method, unit) VALUES
('psyllium_husk', 'Purity', '85-99%', 'USP <561>', '%'),
('psyllium_husk', 'Mesh Size', '40-200', 'Sieve Analysis', 'mesh'),
('psyllium_husk', 'Moisture Content', '≤10', 'Loss on Drying', '%'),
('psyllium_husk', 'Swelling Volume', '≥40', 'USP Method', 'mL/g'),
('psyllium_powder', 'Bulk Density', '350-450', 'ASTM D1895', 'kg/m³'),
('khakha_powder', 'Fiber Content', '≥25', 'AOAC 985.29', '%');
```

---

## 🐍 CORE CODE STRUCTURE

```
agent3_content_generation/
├── config/
│   ├── business_context.json
│   ├── compliance_rules.yaml      # pending cert language, avoid phrases
│   └── spec_templates.json        # psyllium spec table defaults
├── src/
│   ├── __init__.py
│   ├── main.py                    # Entry point: load brief → run graph → export
│   ├── graph.py                   # LangGraph state machine
│   ├── nodes/
│   │   ├── draft_generator.py     # LLM prompt + markdown output
│   │   ├── schema_builder.py      # Deterministic JSON-LD generation
│   │   ├── citation_optimizer.py  # AI snippet extraction + fact tagging
│   │   ├── compliance_flagger.py  # Flag pending certs, legal review items
│   │   ├── exporter.py            # .md file write + Netlify webhook
│   │   └── logger.py              # Supabase upsert + cost tracking
│   ├── utils/
│   │   ├── llm_router.py          # LiteLLM config + model fallback
│   │   ├── validators.py          # Pydantic + jsonschema enforcement
│   │   ├── markdown_templater.py  # YAML frontmatter + table injection
│   │   └── netlify_client.py      # Atomic writes + deploy trigger
│   └── prompts/
│       └── generation_system.txt
├── tests/
│   ├── test_draft_format.py       # Markdown structure validation
│   ├── test_schema_valid.py       # JSON-LD schema.org compliance
│   ├── test_compliance_flags.py   # Pending cert language detection
│   └── test_export_atomic.py      # File write + rollback on error
├── scripts/
│   ├── run_local.py               # Test generation with sample brief
│   ├── approve_for_publish.py     # CLI: change status 'generated' → 'approved'
│   ├── trigger_netlify_deploy.py  # Webhook to rebuild site
│   └── track_citations.py         # Scan AI engines for RM Psyllium mentions
├── .github/workflows/run_agent3.yml
├── requirements.txt
└── README.md
```

---

## ⚙️ DEPLOYMENT INSTRUCTIONS

### Step 1: Local Setup
```bash
mkdir agent3_content_generation && cd agent3_content_generation
python -m venv venv && source venv/bin/activate
pip install langgraph pydantic supabase-client litellm python-frontmatter jsonschema
# Add keys to .env (OPENAI_API_KEY, GROQ_API_KEY, SUPABASE_URL, NETLIFY_TOKEN)
python scripts/run_local.py --brief-id <uuid_from_agent2>
```

### Step 2: Supabase Integration
Run the provided SQL schema additions. Ensure foreign keys link `content_generations` → `content_briefs` → `aeo_queries`.

### Step 3: Netlify Integration
```bash
# In Netlify dashboard:
# 1. Enable "Build hook" for manual trigger
# 2. Copy hook URL to .env as NETLIFY_BUILD_HOOK
# 3. Test: python scripts/trigger_netlify_deploy.py --content-id <uuid>
```

### Step 4: Human Review Workflow
```bash
# List generated content awaiting review
python scripts/list_pending_review.py

# Approve and publish
python scripts/approve_for_publish.py --content-id <uuid> --notes "Spec table verified"

# Trigger deploy (optional auto-deploy after approval)
python scripts/trigger_netlify_deploy.py --content-id <uuid>
```

---

## 🔄 INTEGRATION WITH AGENTS 1, 2 & NETLIFY

### Full Pipeline Data Flow
```
Agent 1 Query (aeo_queries)
   ↓ query_id
Agent 2 Brief (content_briefs.source_query_id)
   ↓ brief_id
Agent 3 Generation (content_generations.source_brief_id)
   ↓ content_id + published markdown
Netlify: /content/guides/{{slug}}.md → Hugo/Next.js build → Live URL
   ↓
CRM: Track inbound lead source URL → attribute to original query/cluster
```

### Citation Tracking Loop
```
Published content → Weekly citation scan (scripts/track_citations.py)
   ↓
If AI engine mentions rmpsyllium.com:
   → Log to citation_tracking table
   → Alert founder via Slack webhook
   → Prioritize similar queries for next content batch
```

---

## 💰 COST OPTIMIZATION STRATEGIES

| Tactic | Implementation | Savings |
|--------|---------------|---------|
| **Model Tiering** | Mistral-7B via Groq (free tier) for drafting; GPT-4o-mini only for schema polish | ~60% inference cost reduction |
| **Template-Driven Tables** | Deterministic spec table injection from business context | Eliminates LLM tokens for repetitive data |
| **Batch Generation** | Process 5-10 approved briefs/run; cache common sections | Reduces API overhead |
| **Schema Validation First** | Catch errors before LLM retry; avoid wasted generations | ~15% cost reduction |
| **Weekly Runs** | Content generation doesn't need daily execution | 7x lower compute cost |

**Target Runtime Cost**: ₹6,000-8,000/month (~$70-95)

---

## 🧪 TESTING & ACCEPTANCE CRITERIA

Agent 3 is "done" when:
- [ ] Accepts Agent 2 brief payload without error
- [ ] Outputs valid markdown with YAML frontmatter (Netlify-compatible)
- [ ] Generates schema.org JSON-LD that passes https://validator.schema.org/
- [ ] Enforces tone rules (zero consumer/fluff language in tests)
- [ ] Flags pending certifications correctly (no premature claims)
- [ ] Inserts spec tables with values from business context
- [ ] Exports atomic .md file to target directory with rollback on error
- [ ] Human review takes <15 mins per article (approve/edit/reject)
- [ ] Cost per generated article < ₹100
- [ ] Citation tracking script detects at least 1 test mention in sandbox

---

## 📅 PROJECT TIMELINE

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| **1** | Setup & Schema | Supabase tables, Pydantic models, local env |
| **2** | Core Nodes | Draft generator, schema builder, citation optimizer |
| **3** | Compliance & Export | Compliance flagger, Netlify atomic writes, webhook |
| **4** | Integration & Testing | Full pipeline test: Agent 1 → 2 → 3 → Netlify |
| **5+** | Scale & Citation Tracking | Batch processing, citation scan automation, CRM attribution |

---

## 🚨 RISK MITIGATION

| Risk | Mitigation |
|------|-----------|
| **LLM hallucinates certification status** | Hardcoded compliance rules + regex filter + human review flag |
| **Schema markup invalid** | jsonschema validation before export; fallback to minimal schema |
| **Spec table values outdated** | Business context loaded from single source of truth; versioned |
| **Netlify deploy conflicts** | Atomic file writes + UUID filenames + rollback on error |
| **Citation tracking false positives** | Require exact domain match + manual verification flag |
| **Cost overrun** | Hard cap in code: stop if `monthly_cost > budget_threshold`; alert via Slack |

---

## 🎯 PSYLLIUM-SPECIFIC CONTENT RULES (ENFORCED BY AGENT 3)

### ✅ Must-Include Elements
```yaml
spec_tables:
  - Always include purity, mesh size, moisture content for husk/powder products
  - Use USP/EP/IP test method references where applicable
  - Format as markdown table with Parameter | Range | Method columns

compliance_footnotes:
  - If certification pending: "We are finalizing [CERT] audit in [QUARTER] [YEAR]"
  - Always link to sample COA: [Download sample COA](/resources/sample-coa.pdf)
  - Include founder signature note with experience credential

regional_references:
  - USA: FDA 21 CFR, DSHEA, GRAS status
  - EU: EFSA, Novel Food Regulation, EU Organic 2018/848
  - India: FSSAI, APEDA, Spices Board guidelines
```

### ❌ Strictly Avoid
```yaml
prohibited_phrases:
  - "best in class", "premium quality", "trusted by thousands"
  - "boosts digestion", "improves gut health", "natural remedy"
  - Any health claim not backed by regulatory approval

prohibited_claims:
  - Claiming GMP/ISO 22000 certification before audit completion
  - Stating "FDA approved" (FDA does not approve ingredients)
  - Guaranteeing shipment timelines beyond standard 14-21 days
```

### 🎨 Tone Enforcement Patterns
```python
tone_rules = {
    "preferred_voice": "third_person_professional",
    "sentence_structure": "subject_verb_object_clear",
    "data_presentation": "lead_with_spec_then_explanation",
    "cta_placement": "after_value_delivery_not_before",
    "founder_voice": "transparent_about_limitations_proud_of_capabilities"
}
```

---

> **Final Note to Builder (Claude Code)**:  
> Agent 3 is the execution engine that turns strategy into citation-worthy assets. Prioritize:  
> 1. **Factual precision** over creative writing (specs > prose)  
> 2. **Schema compliance** over visual flair (AI engines read code, not CSS)  
> 3. **Compliance safety** over marketing ambition (never claim pending certs)  
> 4. **Founder time protection** (15-min review max, clear approve/reject workflow)  
>   
> When in doubt, ask: *"Would this article help a procurement manager at a US nutraceutical company feel confident specifying RM Psyllium in their formulation?"* If yes → publish. If no → refine.  
>   
> 🌾 Build with integrity. Validate rigorously. Ship with confidence.
```

---

## 📥 HOW TO USE THIS FILE

1. **Copy** all content between the `---` markers
2. **Save** as `AGENT3_CONTENT_GENERATION_CITATION.md`
3. **Feed to Claude Code** with:
   > "Use this markdown file as the complete specification to build Agent 3: AI Content Generation & Citation Optimization for rmpsyllium.com. Generate the full Python/LangGraph codebase, Supabase schema additions, markdown export logic, Netlify integration, and citation tracking workflow. Follow all frugal-cost, compliance-safety, and B2B technical guidelines."

4. **After generation**, run:
   ```bash
   python scripts/run_local.py --test-mode --brief-id <sample_uuid>
   # Verify: markdown exports cleanly, schema validates, compliance flags work, cost < ₹100/run
   ```

---

✅ **You now have a production-ready, Claude Code-ready spec for Agent 3** — designed to generate publish-ready, AI-citation-optimized content from Agent 2 briefs, with strict B2B technical framing, compliance guardrails, and seamless Netlify deployment.

---

## 🔄 FULL AGENT SUITE SUMMARY

| Agent | Role | Input | Output | Cost/Mo | Success Metric |
|-------|------|-------|--------|---------|---------------|
| **Agent 1** | AEO Query Discovery | Seed keywords + competitors | Structured queries + AEO scores | ₹3-7k | 500+ high-AEO queries discovered |
| **Agent 2** | Content Strategy | Agent 1 queries + business context | Content briefs + Agent 3 payload | ₹3-5k | 80% brief approval rate |
| **Agent 3** | Content Generation + Citation | Agent 2 approved briefs | Publish-ready .md + schema + citation hooks | ₹6-8k | 3+ AI citations/month |
