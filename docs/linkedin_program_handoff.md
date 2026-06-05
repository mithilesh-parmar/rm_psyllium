# LinkedIn Article Program — Work Log & Handoff

A record of what was done, why, and what's left to verify or build. Written so the owner (Mithilesh) or another agent can pick it up, check the claims, and expand it.

Date started: 2026-06-03. Owner: Mithilesh Parmar (founder, RM Psyllium). Site: rmpsyllium.com (new domain, low authority).

---

## 1. The goal

Rank for the questions psyllium buyers actually type, and get cited by AI answer engines, while the new domain is still too weak to rank on its own. Method: publish one LinkedIn **article** every two weeks from Mithilesh's **personal profile**. Articles get their own indexable web page; a high-authority profile can rank for specific long-tail queries faster than a new domain can.

Hard rules from the owner:
- Plain, simple language. No hype, no filler, no "AI" voice, no over-confident words.
- Build only from fresh research and the site's own Search Console data. Do not reuse the older `docs/linkedin_templates.md` posts or earlier strategy drafts.
- Content must help both a new merchant exporter and a pharma procurement manager: simple enough for a first-time exporter, precise enough for a QA/procurement buyer.
- Every article should answer real buyer questions, include practical checks or examples, and include RM Psyllium website/contact details.

---

## 2. What was done

1. **Read the site's Search Console export** (the `ga/` folder — it's GSC, not GA). See findings below.
2. **Researched competitors and the search landscape** with web search and one page fetch. See findings below.
3. **Wrote the plan** → `docs/linkedin_articles_plan.md` (research summary, ranking notes, 10-topic pipeline, first 3 drafts).
4. **Wrote all 10 short drafts** → `docs/linkedin_articles_drafts.md`.
5. **Expanded all 10 into true LinkedIn article drafts** on 2026-06-03 after owner feedback. Each draft is now roughly 900-1,000 words, includes LinkedIn SEO metadata, one RM link, share-post copy, and RM contact details.
6. **Verified live target links** with HTTP checks. Use `https://rmpsyllium.com/compliance/` for compliance articles, not `/en/compliance/`. Use `/en/industries/food-beverage-bakery/`, not `/en/industries/food-beverage-and-bakery/`.
7. **Updated owner-specific sample/trial/private-label assumptions** in drafts 2 and 4.
8. **This handoff file.**

---

## 3. Search Console findings (real data, ~2 weeks, late May–early June 2026)

Tiny but directional: ~9 clicks, ~322 impressions total. The site shows up for commercial queries but ranks mostly position 40–90, so it gets almost no clicks.

Queries the site already appears for (these guided the topic choices):
- Private label / custom branded psyllium — appears many times. Biggest theme.
- psyllium exporter bulk (~pos 19), wholesale psyllium husk, psyllium husk suppliers india
- psyllium husk manufacturers in gujarat (~pos 47)
- industrial psyllium powder, industrial-grade khakha
- psyllium 25kg (~pos 22) — buyers wanting small/specific quantities
- psyllium husk powder for food industry
- "usp vs ip" — ~pos 5 already (best near-win)
- "flohsamenschalen blei" (German: psyllium husk lead) — ~pos 4

Audience by impressions: India highest, then US (~50 imp, ~pos 31), Canada, Germany. The buyers the owner wants (US/EU/Canada) currently see the site only at low positions.

---

## 4. Competitor findings

Owner's named competitors (big exporters): RC Enterprises, Jyot Overseas, Subh Psyllium, Sarvoday Sat Isabgol, Jyotindra, Kalpesh Corporation, Kamal & Sons, Satnam Psyllium, Laxmi Industrial Corporation, Rajganga Agro, Super Psyllium, Mantra Industries, Smilax, Akash Agro, Aatish Industries.

What the research showed:
- **Most publish little to no teaching content** — a product page plus IndiaMART / TradeIndia / ExportersIndia listings. This is the majority.
- **A few do content marketing** and are worth not fighting head-on:
  - **Kamal & Sons** — ranks for California Prop 65 / low-lead psyllium (so our heavy-metals article, draft 3, was written broader: US + EU, all four metals).
  - **Mantra** — blog on psyllium demand/production.
  - **Laxmi Sat-Isabgol (Giriraj Enterprise)** — private-label psyllium articles.
  - Non-listed players also publishing buyer guides: **Greenjeeva, Neo Natural, Riddhi Healthcare, Farmvale.**
- **Directories dominate** generic terms: IndiaMART, TradeIndia, Thomasnet (US/Canada), Volza (import/export data — buyers search "psyllium buyers in [country]" here).
- **No psyllium exporter publishes LinkedIn articles.** Some have company pages; none publish real articles. This is the open lane the program targets.

Content quality bar (checked Greenjeeva's buyer guide, the strongest one): ~1,500–2,500 words, covers quality basics, but leaves gaps — no pricing guidance, weak on USP/EP/IP standards, little on small-order buying, light on logistics. Our drafts aim at those gaps.

---

## 5. The plan (summary)

Pipeline, in publish order (easiest-to-rank first). Full text in `docs/linkedin_articles_drafts.md`.

1. USP vs EP vs IP — already ~pos 5; no clear explainer exists anywhere.
2. Private label psyllium — biggest impression theme.
3. Lead & heavy metals — hot; ~pos 4 in Germany; go broader than Kamal & Sons' Prop 65.
4. Buying small quantities / MOQ & samples — real pain, ignored by big mills.
5. How to read a COA — asked for, rarely explained.
6. Psyllium for the food industry.
7. Industrial-grade / khakha powder.
8. Psyllium manufacturers in Gujarat — origin + how to vet.
9. Swelling volume explained.
10. Husk vs powder.

Publishing mechanics: article not post; put search words at the front of the title; use LinkedIn's **Manage > Settings** fields for article URL slug, SEO title, and SEO description; 900-1,400 words; one link back to the site; share as a same-day post with the link in the first comment.

Owner inputs added on 2026-06-03:
- Samples: RM Psyllium can provide samples from 100 g upward, depending on what the buyer needs to test.
- Trial orders: quantity depends on the buyer and application; examples can range from 500 kg to 5 MT or whatever is practical for the buyer's validation and shipping economics.
- Private label MOQ: not finalized yet. Draft 2 now says MOQ depends on packaging, printing, artwork, pack size, and whether the buyer wants finished retail units or bulk material to pack locally.
- Voice: simplified for new merchant exporters while still useful to pharma procurement and QA readers.

Live link verification on 2026-06-03:
- `https://rmpsyllium.com/compliance/` → 200
- `https://rmpsyllium.com/en/compliance/` → 404, do not use in LinkedIn articles unless the site adds a redirect/page later
- `https://rmpsyllium.com/en/products/psyllium-husk-powder/` → 200
- `https://rmpsyllium.com/en/products/` → 200
- `https://rmpsyllium.com/en/industries/food-beverage-bakery/` → 200
- `https://rmpsyllium.com/en/industries/food-beverage-and-bakery/` → 404, do not use
- `https://rmpsyllium.com/en/products/psyllium-khakha-powder/` → 200
- `https://rmpsyllium.com/en/about/` → 200
- `https://rmpsyllium.com/en/quality/` → 200

---

## 6. Open questions / things to verify (for the owner or another agent)

These were kept deliberately conservative in the drafts. Verify before treating as fact, and tighten the drafts if you confirm hard numbers:

- **USP vs EP vs IP exact figures (draft 1).** The drafts avoid quoting precise monograph limits. If you want hard numbers, pull the actual USP "Psyllium Husk", EP "Ispaghula husk", and IP monographs (swelling index/volume method and value, ash, moisture, heavy metals) and add them. Source of truth: the monographs themselves.
- **Heavy-metal limits (draft 3).** The expanded draft avoids stating hard EU or Prop 65 limits as raw-material legal limits. If you want exact numbers, confirm current EU category limits, the buyer's product category, serving size, and Prop 65 exposure calculation before publishing numbers.
- **Private-label MOQs (draft 2).** Current language says MOQ is not finalized and depends on packaging/artwork/format. Replace once RM Psyllium sets actual private-label MOQ by pack type.
- **Claims on RM product pages.** Some site pages contain stronger claims such as pharmacopoeia limits, GMP, organic, or lab accreditation language. Before making those claims in LinkedIn, verify the certificate/document status and current monograph or regulation.
- **Keyword demand.** Topics were chosen from real GSC impressions + SERP gaps, not from a volume tool. If you have Ahrefs/Semrush/Keyword Planner, confirm volume and re-order the pipeline if something is bigger than expected.

Sources used for the expanded compliance guardrails:
- LinkedIn Help: article publishing and SEO settings, including custom article URL, SEO title, and SEO description.
- FDA dietary supplement pages: dietary supplement firms are responsible for safety, quality, and labeling; supplement cGMP sits under 21 CFR Part 111.
- European Commission contaminants pages: EU contaminant controls include metals such as lead, cadmium, mercury, and arsenic and are governed by Regulation (EU) 2023/915.
- OEHHA lead page: Prop 65 lead safe harbor values are exposure-based, so draft 3 avoids turning them into a generic psyllium ppm claim.

---

## 7. Ideas to expand or brainstorm (not yet done)

- **Match each article to a site page.** For every article, make sure there's a strong matching page on rmpsyllium.com to link to (the article teaches; the page converts). Some links above may need a page built first.
- **Repurpose into the site blog** with a different angle, so the article and the site page don't compete for the same words.
- **Track results in GSC monthly.** Watch whether "usp vs ip", "private label psyllium", and the German lead query move up, and whether the LinkedIn article URLs start appearing.
- **AI-citation check.** Once a month, ask Perplexity/ChatGPT a buyer question ("how do I check psyllium for lead", "what's the difference between USP and EP psyllium") and see if the answer reflects these articles or links the site.
- **Comparison / origin pieces later.** "Buying psyllium from India vs other origins", "how to qualify a psyllium supplier" — bigger, more competitive, save for when the profile has traction.
- **Second language.** German buyers already find the site (the lead query). A German version of draft 3 could be worth testing.

---

## 8. Files in this program

- `docs/linkedin_articles_plan.md` — the plan: research summary, ranking notes, pipeline, first 3 drafts.
- `docs/linkedin_articles_drafts.md` — all 10 full drafts, ready to publish.
- `docs/linkedin_program_handoff.md` — this file.
- `ga/` — the Google Search Console export the topics were built from.
- (Do **not** reuse `docs/linkedin_templates.md` — older posts the owner asked to set aside.)
