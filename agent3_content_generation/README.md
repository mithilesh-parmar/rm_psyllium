# Agent 3: AI Content Generation & Citation Optimization

Transforms approved Agent 2 briefs into publish-ready, AEO-optimized markdown articles for [rmpsyllium.com](https://rmpsyllium.com).

## Pipeline Position

```
Agent 1 (Query Discovery) → Agent 2 (Strategy & Briefs) → Agent 3 (Content) → Netlify Deploy
```

## Quick Start

```bash
cd agent3_content_generation
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt

# Test with built-in sample brief (no API keys needed for structure test)
python scripts/run_local.py --test-mode

# Run with a real Agent 2 brief file
python scripts/run_local.py --brief-file ../agent2_content_strategy/output/briefs/brief_xxx.md

# Batch mode: fetch approved briefs from Supabase
python -m src.main --batch-mode --limit 5
```

## Environment Variables

Copy from Agent 1's `config/api_keys.env` (shared across agents):

```
GROQ_API_KEY=        # Free tier — used for draft generation
OPENAI_API_KEY=      # GPT-4o-mini — used for schema validation polish
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
NETLIFY_BUILD_HOOK=  # From Netlify dashboard → Site → Build hooks
SLACK_WEBHOOK_URL=   # Optional — for citation alerts
PERPLEXITY_API_KEY=  # Optional — for citation tracking
GOOGLE_CSE_API_KEY=  # Optional — for citation tracking
GOOGLE_CSE_ID=       # Optional — for citation tracking
```

## Supabase Setup

```bash
# Run schema additions (requires content_briefs table from Agent 2 to exist first)
psql $SUPABASE_DB_URL < supabase_schema.sql
```

## Human Review Workflow

```bash
# List content awaiting review
python scripts/approve_for_publish.py --list-pending

# Approve and optionally deploy
python scripts/approve_for_publish.py --content-id <uuid> --notes "Spec table verified" --deploy

# Reject
python scripts/approve_for_publish.py --content-id <uuid> --reject
```

## Citation Tracking

```bash
# Weekly scan for RM Psyllium mentions in AI engines
python scripts/track_citations.py

# Dry run (no DB writes)
python scripts/track_citations.py --dry-run
```

## Run Tests

```bash
pytest tests/ -v
```

## Architecture

| Node | Model | Purpose |
|------|-------|---------|
| `draft_generator` | Groq llama-3.3-70b (free) | Expand brief → full markdown |
| `schema_builder` | Deterministic | Build HowTo/FAQPage/Organization JSON-LD |
| `citation_optimizer` | Deterministic | Extract AI snippet, tag structured facts |
| `compliance_flagger` | Rule-based | Detect cert violations, prohibited phrases |
| `exporter` | Pydantic | Validate, atomic write, Supabase log |

## Cost Target

≤ ₹8,000/month (~$95) at weekly batch runs of 5-10 articles.
