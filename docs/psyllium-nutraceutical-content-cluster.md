# Psyllium-for-Nutraceuticals Content Cluster — Phases & Task Tracker

> Living working copy of the approved content-cluster plan. Source of truth for *why* lives in the
> plan; this file is the trackable checklist. Update checkboxes as each article ships.

## Goal

Make RM Psyllium **the answer source** — the page Google ranks and the page LLMs quote — when
nutraceutical brands search around *fiber supplement formulation, psyllium, soluble fiber,
nutraceuticals*. Strategy = one **pillar** + linked **spokes** (a topic cluster) in a new
**brand/formulator-facing lane** (existing 27 posts are compliance/sourcing-angled).

Scope: USA-first, EU as deliberate #2 (EFSA claims help there), India D2C formalized. Partner
narrative is layered (spec-enablement → claims/regulatory support → co-development).

## How articles are published (no new infra needed)

- Append a typed object to `blogPosts` in `src/data/site.ts` (array ~line 3352). Routing, list
  page, category filter are automatic.
- SEO + AEO auto-wired by `src/components/Seo.astro` from the data fields:
  `aiSnapshot` (AI Overviews), `faqs` (FAQPage JSON-LD), `specTable` / section `table`,
  `references`, `internalLinks`; plus BlogPosting + BreadcrumbList schema, hreflang (10 langs),
  OG/canonical.
- Reuse existing categories only: `Product, Compliance, Application, Logistics, Markets, Sourcing`.
- English-first; missing translations fall back to English. Translations later in
  `src/data/translations/{lang}.json`.

## Claim-safety rules (every article)

1. **No RM-specific viscosity/gel-strength numbers.** RM stands behind purity %, swell volume,
   heavy metals, microbial, ash, LOD, mesh only. Viscosity taught educationally; pharmacopeial
   swell volume cited generically.
2. **Mechanism, not outcome; finished-brand owns every claim.** FDA (21 CFR 101.81) and EFSA
   claims cited as category/regulatory pedigree that *enables a brand's claim*, never as RM
   curing/treating anything.
3. **No certification claims at all — present OR future.** Never say RM holds or will hold a cert.
   Compliance handled only as generic buyer-side guidance ("ask any supplier for a lot-specific
   COA…"). No certified-organic implication. No fabricated stats/clients/volumes.
4. **Comparisons: factual, sourced, interpreted, not disparaging.** Explain the "so what" — why a
   property is an advantage or drawback and in which context. No fiber is "bad"; every functional
   statement is referenced.
5. **Verify every external citation at write time** before publishing.

## Writing style (every article)

Education first — a new brand owner or curious non-expert can follow it, a formulator still
respects it. Plain language, jargon defined on first use, short sentences, ~grade 8–10. Warm,
authoritative, concise — no hype. Skimmable: one-line answer up top, question-style headings,
tables over text. Keywords woven naturally into headings + first paragraph + FAQs; FAQ answers are
2–4 liftable sentences.

## The cluster

| # | Working title | Slug | Category |
|---|---------------|------|----------|
| Pillar | Psyllium for Fiber Supplements: Formats, Applications & Selection Guide for Nutraceutical Brands | `psyllium-fiber-supplements-nutraceutical-brands-guide` | Application |
| S1 | Psyllium vs Inulin, Sunfiber (PHGG), Fenugreek & Acacia: Choosing a Fiber for Supplements | `psyllium-vs-inulin-sunfiber-fenugreek-fiber-comparison` | Application |
| S2 | Why Psyllium Works: Viscous Gel-Forming Fiber, Low Fermentation & Its Authorized Health Claims | `why-psyllium-viscous-fiber-health-claims-explained` | Product |
| S3 | Choosing Psyllium by Format & Application: Capsules, Stick Packs, Drink Mixes, Gummies + Novel Formats | `psyllium-formats-applications-supplement-formulation` | Application |
| S4 | The Fiber Supplement Boom: The Fiber Gap, Gut Health & the GLP-1 Companion Opportunity | `fiber-supplement-trend-psyllium-glp1-opportunity` | Markets |

Cross-link: pillar ↔ every spoke; each spoke → pillar + 1–2 siblings + relevant existing posts
(`husk-vs-powder-buyer-guide`, `psyllium-supplement-capsule-filling`,
`soluble-insoluble-fiber-ratios-purity-selection`,
`psyllium-husk-soluble-fiber-food-fortification`,
`psyllium-husk-private-label-supplement-india`) + `/products` + sample/spec-sheet CTA.

## Phases & per-article checklist

Each article: [ ] drafted (style) · [ ] citations verified · [ ] claim-safety pass · [ ] appended
to blogPosts + internalLinks/cta · [ ] built + JSON-LD validated · [ ] translated

### Phase 0 — Tracker
- [x] Create this tracker file

### Phase 1 — Hub & magnet
- [x] Pillar — drafted · citations · claim-safety · appended · built (translated: pending)
- [x] S1 (comparison) — drafted · citations · claim-safety · appended · built (translated: pending)
- [x] Build + validate JSON-LD for Phase 1 (616 pages, FAQPage+BlogPosting+BreadcrumbList confirmed)

### Phase 2 — Authority spokes
- [x] S2 (science/claims) — drafted · citations · claim-safety · appended · built (translated: pending)
- [x] S3 (formats/applications/novel/flavors) — drafted · citations · claim-safety · appended · built (translated: pending)

### Phase 3 — Trend & reach
- [x] S4 (trend/GLP-1) — drafted · citations · claim-safety · appended · built (translated: pending)

### Phase 4 — i18n (MEANINGFUL localization, not MT) — ✅ COMPLETE
Approach: native, idiomatic, keyword-localized per locale (local search terms, not literal). All 9
locales, all 5 articles, full standard. Each build-validated (646 pages) and committed separately.
- [x] de — German (5/5) — **Flohsamenschalen** (commit 0a3477e)
- [x] es — Spanish (5/5) — psyllium / cáscara de psyllium + ispágula / zaragatona (commit 1f8c6b3)
- [x] fr — French (5/5) — psyllium / téguments de psyllium / ispaghul (commit 70a59cf)
- [x] it — Italian (5/5) — psillio (commit e8be8e0)
- [x] pt — Portuguese (5/5) — psyllium / casca de psyllium / psílio (commit 84ba0d1)
- [x] nl — Dutch (5/5) — psyllium / vlozaad (commit 68ac441)
- [x] ru — Russian (5/5) — псиллиум / шелуха псиллиума (commit ede5616)
- [x] zh — Chinese (5/5) — 车前子壳 / 洋车前 (commit 4821272)
- [x] ar — Arabic (5/5) — قشور السيليوم / بذور القطونا / الإسبغول (commit 0b10d1c)

**Final state:** 50 pages (5 articles × 10 locales incl. English), all with localized titles +
FAQPage/BlogPosting JSON-LD + hreflang. On branch `content/psyllium-nutraceutical-cluster`.
Recommended (per regulated content): native/regulatory review of claim wording per locale before
heavy promotion.

### Phase 5 — indexing (remaining)
- [ ] Merge `content/psyllium-nutraceutical-cluster` → main and deploy
- [ ] `npm run build:submit` (live IndexNow) + optional GSC submit of the cluster URLs on deploy

---

## ▶ RESUME HERE (handoff for a new chat)

**State (2026-06-11):** English (5 articles) + German `de` (5 articles) are written, localized, and
build-validated (646 pages, JSON-LD + hreflang auto-generated). **7 locales remain:** es, fr, it,
pt, nl, ru, zh, ar — each needs all 5 articles localized.

**The 5 slugs (English source = `src/data/site.ts` `blogPosts`, dated 2026-06-11):**
1. `psyllium-fiber-supplements-nutraceutical-brands-guide` (pillar, category Application)
2. `psyllium-vs-inulin-sunfiber-fenugreek-fiber-comparison` (S1, Application)
3. `why-psyllium-viscous-fiber-health-claims-explained` (S2, Product)
4. `psyllium-formats-applications-supplement-formulation` (S3, Application)
5. `fiber-supplement-trend-psyllium-glp1-opportunity` (S4, Markets)

**How to add a locale (repeat per language):**
- Edit `src/data/translations/{lang}.json`. Add the 5 slugs as keys **inside the top-level
  `"blogPosts": { ... }` object** (see `de.json` — it now contains all 5 as the working template).
- Translate ONLY these fields per article: `title`, `summary`, `aiSnapshot`, `body[]`,
  `sections[]` (each `heading`, `body`, and `table.headers[]` / `table.rows[][]`), `specTable[]`
  (`parameter`/`range`/`method`), `faqs[]` (`q`/`a`).
- Do **NOT** include `slug`, `category`, `date`, `references`, `internalLinks`, `cta`, `audience` —
  they auto-fall-back to English via the merge in `site.ts` (`mergePostTrans`).
- **Meaningful localization, not literal MT:** idiomatic, and lead with the local search term:

  | Locale | Lead term(s) to use |
  |---|---|
  | es | psyllium / cáscara de psyllium (+ ispágula, Plantago ovata, zaragatona) |
  | fr | psyllium / téguments de psyllium (+ ispaghul, psyllium blond) |
  | it | psillio |
  | pt | psílio / casca de psyllium |
  | nl | psyllium(vezels) / vlozaad |
  | ru | псиллиум / шелуха подорожника (Plantago ovata) |
  | zh | 车前子壳 (洋车前) |
  | ar | قشور سيلليوم / بذور القطونا (إيسبغول) |

- Keep these tokens unchanged in every language (they're searched/needed as-is): `Sunfiber`,
  `PHGG`, `GLP-1`, `FODMAP`, `21 CFR 101.81`, `COA`, `Plantago ovata`, mesh numbers, `7 g/day`.
- **Claim safety (unchanged):** keep the hedge ("may reduce the risk…"), finished-brand owns every
  claim, no certification claims (present or future), no RM viscosity numbers.

**Validate each locale before moving on:**
```
node -e "JSON.parse(require('fs').readFileSync('src/data/translations/<lang>.json','utf8'));console.log('ok')"
npm run build    # expect "Complete!", 646 pages
# spot-check: dist/<lang>/blog/<slug>/index.html — title localized + '"@type":"FAQPage"' present
```

**When all locales done:** `npm run build:submit` (live IndexNow) and submit the cluster URLs in
Google Search Console.

**Paste-into-new-chat prompt:**
> Continue the psyllium nutraceutical content cluster. English + German are done. Read
> `docs/psyllium-nutraceutical-content-cluster.md` (see "RESUME HERE") and localize the next
> pending locale's 5 articles into `src/data/translations/<lang>.json`, using `de.json` as the
> structural template and the meaningful-localization + claim-safety rules. Build-validate, then
> continue to the next locale. Order: es, fr, it, pt, nl, ru, zh, ar.

## References to use (verify exact citation at write time)

- FDA authorized health claim — soluble fiber from psyllium husk & coronary heart disease,
  **21 CFR 101.81** (7 g/day soluble fiber model).
- EFSA scientific opinions — *Plantago ovata* husk: blood cholesterol maintenance; normal bowel
  function; post-prandial glycaemic response.
- USP / EP (Ispaghula Husk) / IP monographs — swell volume/index spec.
- Peer-reviewed review distinguishing gel-forming/viscous vs non-viscous/fermentable fibers
  (e.g., McRorie & McKeown, *J Acad Nutr Diet* 2017) — confirm before citing.
