# RM Psyllium Website Copy Claim-Risk Audit

Date: 2026-06-03
Scope: multilingual website copy, product data, blog content, translation JSON, schema markup, `llms.txt`, and current docs in this checkout.
Policy: evidence-first. Current proof is treated as incorporated firm/PAN plus lot-level COA/spec data availability. No company-level certifications are treated as active today.

## Executive Decision

Do not keep unsupported present-tense certification claims.

The site can still rank for certification and compliance searches by using buyer-education language:

- "what buyers should verify"
- "certificate review before PO"
- "available when current lot and certifying body support it"
- "third-party lab report available per lot"
- "COA can be aligned to buyer-specified parameters where test results support it"

Do not use "certifications in progress" as the public replacement copy. It is honest, but it weakens credibility on first impression. Public copy should lead with what RM can prove today: controlled facility, sample/spec review, lot-level COA support, origin records, buyer documentation checklists, and transparent pre-PO document review. Certification timelines should be kept for private buyer conversations only.

The credibility risk is not only legal. A serious procurement or QA buyer will ask for certificate numbers, scope, issue date, expiry, certifying body, and lot coverage. If the website sounds ahead of the documents, trust drops immediately.

## Risk Ratings

| Rating | Meaning | Default action |
| --- | --- | --- |
| Critical | Present-tense claim of certification, registration, active regulatory status, or controlled process that cannot be proven today. | Remove or rewrite before promotion/indexing. |
| High | Claim may be true only under conditions, by partner/lot, or after testing, but current wording sounds absolute. | Soften and add scope/condition. |
| Medium | Commercial, operational, or technical claim that needs internal evidence but is not a certification claim. | Keep only if backed by records; otherwise qualify. |
| Low | Educational or buyer-guide language that does not claim RM holds the status. | Keep, with careful wording. |

## Source Surfaces Audited

- Visible Astro pages and components: homepage, about, quality, compliance, products, product detail, contact, FAQ, regions, industries, blog.
- Copy/data source: `src/data/site.ts`.
- Localized generated/deep blog translations: `src/data/translations/*.json`.
- Structured data: `src/pages/index.astro`, `src/pages/[lang]/quality/index.astro`, `src/pages/[lang]/contact/index.astro`, blog/product/region schemas.
- AI/search surfaces: `public/llms.txt`, blog `aiSnapshot` fields, meta descriptions.
- Current docs and content drafts: `docs/*.md`, `docs/superpowers/specs/2026-05-17-homepage-redesign-design.md`.
- IDE-referenced files `docs/blog_cleanup_phase_tasks.md`, `docs/blog_cleanup_execution_plan.md`, `docs/blog_claim_risk_audit.md`, `docs/blog_multilingual_playbook.md`, and `src/data/blog/deepCompliancePosts.ts` are not present in this checkout and were not audited.

## Claim Inventory

### 1. Certifications and Registrations

| Claim pattern | Risk | Representative locations | Evidence needed to keep | Recommended action |
| --- | --- | --- | --- | --- |
| FSSAI facility registration, APEDA export clearance, Spices Board listing, active IEC | Critical | `src/data/site.ts:251`, `src/data/site.ts:713`, `src/data/site.ts:944`, `src/data/site.ts:1132`, `src/data/site.ts:1261`, `src/data/site.ts:1390`, `src/data/site.ts:1519`, `src/data/site.ts:1648`, `src/data/site.ts:1777` | Certificate/registration number, issue date, expiry, scope, legal entity name, facility address match. | Remove from public copy. Replace with "pre-PO document review: sample COA, product spec, origin, packing, and destination document checklist." |
| FSSAI credential in JSON-LD | Critical | `src/pages/[lang]/quality/index.astro:20`, `src/pages/[lang]/quality/index.astro:21` | Same as above. Search engines can read this even if the visible section is commented out. | Remove from schema until registration is active. |
| IEC number shown or implied active | Critical | `src/pages/[lang]/quality/index.astro:105`, `src/data/site.ts:251`, `src/components/Footer.astro:16` commented copy | IEC certificate tied to entity. | Remove from public copy until active. Do not replace with "pending." |
| GST / export registration status plus NABL COA claim | High | `public/llms.txt:4` | Actual GST/export registration documents if stated publicly; actual COA sample if claiming lot-level tests. | Remove registration-status language from public SEO surfaces. Keep only "documents reviewed before quote/PO" and avoid "all batches" unless operations have shipped lots. |
| "What certifications does RM Psyllium hold?" FAQ uses process-status language | Medium | `src/pages/index.astro:75`, `src/data/site.ts:3209`, localized FAQ variants | None beyond being accurate, but it is weak positioning. | Hide this question completely until active certificates exist. Do not replace it with a certification-status explanation. |
| Old strategy docs saying APEDA/FSSAI/Spices Board/IEC registrations | Medium if docs only, Critical if republished | `docs/linkedin_templates.md`, `docs/linkedin_templates_60.md`, `docs/linkedin_gamma_brief.md`, `docs/keyword_agent.md`, `docs/linkedin_strategy.md`, `docs/superpowers/specs/2026-05-17-homepage-redesign-design.md` | Same certificate set. | Remove these claims completely from strategy/source docs so they cannot be reused by future content generation. |

Decision rule: no public "registered", "active", "listed", "certified", or certificate logo unless a buyer could receive the document today.

### 2. Organic, Halal, Kosher, Gluten-Free

| Claim pattern | Risk | Representative locations | Evidence needed to keep | Recommended action |
| --- | --- | --- | --- | --- |
| Organic product labeled "NOP - EU-NOP certified" | Critical | `src/data/site.ts:2713`, `src/data/site.ts:2732`, `src/data/site.ts:2741`, `src/data/site.ts:6215`, `src/data/site.ts:6245` | Current organic certificate, certifier, scope, product, processing facility, farmer/handler coverage, TC/COI process. | Rewrite to "organic lots available only after certificate review" or remove product from active catalog until cert stock exists. |
| "We supply certified organic lots" in region pages | Critical | `src/data/site.ts:3025`, `src/data/site.ts:3094`, `src/data/site.ts:3113`, `src/data/site.ts:3116` | Same organic documentation plus destination-specific COI/TC. | Convert to buyer requirement language: "EU buyers should request..." not "we supply certified..." |
| Organic guide educational content | Low/Medium | `src/data/site.ts:3409`, `src/data/site.ts:3415`, `src/data/site.ts:4007`, `src/data/site.ts:4011`, translations such as `src/data/translations/de.json:268` | None if written generically; evidence required only if claiming RM stock/cert. | Keep educational SEO pages, remove RM present-tense supply claims. |
| Halal/Kosher certificates can be arranged or available | High | `src/data/site.ts:317`, `src/data/site.ts:3190`, `src/data/site.ts:3452`, `src/data/site.ts:4168`, `src/data/site.ts:4508`, `src/components/Hero.astro:20`, `src/components/Hero.astro:21` | Halal/Kosher cert or clear declaration template; process/authority who can issue; product/lot scope. | Use "plant-origin declaration available for review." Discuss formal certification privately only when the buyer asks. |
| Halal/Kosher educational guide | Low | `src/data/site.ts:3445`, `src/data/site.ts:3450`, localized equivalents | None if generic. | Keep buyer-guide framing, avoid "accepted by most authorities" unless sourced. |
| Certified gluten-free supplier / dedicated gluten-free facility | Critical | `public/llms.txt:86`, `src/data/translations/de.json:776`, `src/data/translations/fr.json:780`, `src/data/translations/zh.json:780`, `src/data/translations/ar.json:776` | Gluten-free certificate or facility declaration, allergen SOP, ELISA reports, scope, lot data. | Reframe to "what gluten-free bakery buyers should request" and avoid claiming certified status. |

Decision rule: organic/Halal/Kosher/gluten-free are certification claims, not marketing adjectives. Do not say certified unless the cert exists and covers the product/lot.

### 3. GMP, HACCP, ISO, Food Safety Systems

| Claim pattern | Risk | Representative locations | Evidence needed to keep | Recommended action |
| --- | --- | --- | --- | --- |
| GMP-compliant facility | Critical | `src/data/site.ts:3483`, translations such as `src/data/translations/de.json:434`, `src/data/translations/de.json:438`, `src/data/translations/zh.json:524`, `src/data/translations/zh.json:528` | GMP certificate or audited compliance report, scope, issuing/auditing body, validity. | Convert to "GMP documentation checklist" and "controls buyers should verify." |
| HACCP-compliant facility | Critical | `src/data/site.ts:3630`, translations such as `src/data/translations/de.json:491`, `src/data/translations/de.json:495`, `src/data/translations/fr.json:665`, `src/data/translations/fr.json:669` | HACCP plan/certificate/audit report, scope, date, auditor. | Reframe as "food safety controls buyers should ask for" and avoid saying HACCP-style/HACCP-aligned unless a HACCP plan exists. |
| ISO 22000 / HACCP cards | Critical if uncommented | `src/pages/compliance/index.astro:60` inside commented certification section | Certificate(s). | Keep commented out; do not enable. |
| Fully FDA registered / strict FSMA controls in social docs | Critical | `docs/linkedin_templates_60.md:3558` | FDA facility registration, food facility registration number, responsible party, FSMA program evidence. | Do not publish. Rewrite as importer responsibility and document-support guide. |
| B2B preview says FSSAI/APEDA/IEC active and WHO GMP/ISO/HACCP scheduled Q3 2026 | Critical | `src/pages/b2b-preview.astro:23` | Active certs/registrations and scheduled audit evidence. | Treat preview as unsafe; noindex or rewrite before exposure. |

Decision rule: "compliant facility" reads like an audit result. Use "documentation we can prepare/share" only for what exists now.

### 4. NABL, COA, Lab, and 47 Parameters

| Claim pattern | Risk | Representative locations | Evidence needed to keep | Recommended action |
| --- | --- | --- | --- | --- |
| "NABL Lab Validation" / "our NABL-accredited lab" | High | `src/pages/[lang]/about/index.astro:65`, `src/data/site.ts:2469`, `src/data/site.ts:5842`, `src/data/site.ts:5858` | Actual third-party NABL lab report per sample/lot; do not imply RM owns accreditation. | Rewrite to "third-party NABL-accredited lab report available per lot/sample where requested." |
| "All batches include lot-specific NABL-accredited laboratory test COAs" | High | `public/llms.txt:4`, repeated in docs such as `docs/linkedin_templates_60.md:916` | Batch history and actual reports for every shipped lot. | Replace "all batches" with "lot-specific third-party lab testing can be arranged/shared before dispatch." |
| "47 test parameters" | High | `src/pages/[lang]/about/index.astro:66`, `src/pages/[lang]/quality/index.astro:49`, `src/pages/compliance/index.astro:20`, `src/pages/index.astro:71` | COA template showing 47 parameters and lab capability/turnaround. | Keep only if template exists. Otherwise use "key COA parameters: purity, swelling, moisture, ash, microbiology, heavy metals." |
| "Every batch undergoes rigorous screening before packing" | High | `src/pages/[lang]/about/index.astro:66`, translations across same file | SOPs, sampling plan, lab reports, production records. | Soften to "sample/lot testing available before dispatch." |
| "NABL-certified product" or "NABL-certified powders" in docs | Critical if published | `docs/linkedin_templates_60.md:1309`, `docs/linkedin_templates_60.md:1324`, many similar lines | Products are not NABL-certified; labs are accredited. | Never use "NABL-certified product." Use "tested by a third-party NABL-accredited lab." |

Approved wording:

> We can share a sample COA and, where required, arrange lot-specific testing through a third-party NABL-accredited laboratory before dispatch.

Avoid:

> Our NABL lab, NABL-certified product, all batches are NABL-certified, guaranteed NABL COA.

### 5. USP, EP, IP, NF, BP Pharmacopoeia Claims

| Claim pattern | Risk | Representative locations | Evidence needed to keep | Recommended action |
| --- | --- | --- | --- | --- |
| Product grades listed as USP/EP/IP compliant | High | `src/data/site.ts:2402`, `src/data/site.ts:2426`, `src/data/site.ts:2436`, `src/data/site.ts:2482`, `src/data/site.ts:2497`, `src/data/site.ts:2524`, `src/data/site.ts:2535` | Tested lot matching current monograph edition; COA annotated to buyer-required standard. | Replace blanket "compliant" with "target specification" or "COA can be annotated where test results support it." |
| FAQ answers say "Yes, meets USP/EP/IP" | High | `src/data/site.ts:2460`, `src/data/site.ts:2467`, `src/data/site.ts:2560`, `src/data/site.ts:2568`, Chinese product FAQ keys at `src/data/site.ts:5848`, `src/data/site.ts:5892`, `src/data/site.ts:5916` | Same lot-specific test evidence. | Rewrite as conditional: "For lots tested against the requested parameters, COA can be annotated..." |
| Product matrix/badges showing pharmacopoeia tiers | Medium/High | `src/pages/[lang]/products/index.astro:82`, `src/pages/[lang]/products/[product].astro:310` | Internal spec sheet and lab validation. | Rename from compliance badges to "typical target standard" or "buyer-spec alignment." |
| Educational pharmacopoeia guides | Low | `src/data/site.ts:3384`, `src/data/site.ts:3390`, `docs/linkedin_articles_drafts.md:22-95` | Sources for monograph details if precise limits are quoted. | Keep because it is valuable; avoid current unsupported RM supply guarantees. |
| Blog `aiSnapshot` says all shipments must include NABL COAs | High | `src/data/site.ts:3865`, translations `src/data/translations/zh.json:10`, `src/data/translations/ru.json:10`, `src/data/translations/pt.json:10` | Active shipment process and actual reports. | Rewrite to buyer requirement: "buyers should request..." |

Approved wording:

> For pharma or supplement buyers, specify the required standard (USP, EP, IP, BP, NF, or in-house). We will match the requested COA wording to the tested lot where the results support it.

Avoid:

> 98% is USP/EP compliant. 99% is USP/EP/IP compliant.

### 6. Manufacturing, Facility, and Supply Chain Control

| Claim pattern | Risk | Representative locations | Evidence needed to keep | Recommended action |
| --- | --- | --- | --- | --- |
| Manufacturer / owned facility | Medium | `src/data/site.ts:176`, `src/data/site.ts:177`, `src/pages/index.astro:40`, `src/pages/[lang]/contact/index.astro:19` | Facility ownership/control proof, address, utilities, equipment list, production photos, invoices, lease/title. | Keep because founder confirmed owned/controlled facility, but make copy factual rather than overconfident. |
| Direct-from-source manufacturer and bulk exporter | Medium/High | `src/data/site.ts:291`, `src/pages/[lang]/about/index.astro:50`, `docs/linkedin_gamma_brief.md:9` | Same facility evidence plus export registration once active. | Use "manufacturer in Siddhpur" now; avoid "exporter" until IEC/GST/export docs are active. |
| "We process in-house" and "not trading desk" | Medium/High | `src/data/site.ts:199`, `src/pages/[lang]/about/index.astro:51`, localized variants | Production control records and inventory/lot records. | Keep only with precise scope: "we control cleaning/milling/packing for RM lots." |
| "Absolute control over entire supply chain" | High | `src/pages/[lang]/about/index.astro:51`, localized variants | Farm contracts, procurement traceability, production SOPs, logistics records. | Rewrite. No agricultural supplier has absolute control over the whole chain. |
| Contracted farms/growers | High | `src/data/site.ts:207`, `src/pages/index.astro:84`, about value descriptions such as `src/pages/[lang]/about/index.astro:68` | Signed farmer/grower contracts or procurement agreements. | Use "seed sourced from Gujarat/Rajasthan growing regions with origin records" unless contracts exist. |
| Older 12,000 MT / 38 markets / 1,200 farmers claims | Critical if reused | `docs/superpowers/specs/2026-05-17-homepage-redesign-design.md:50`, `docs/superpowers/specs/2026-05-17-homepage-redesign-design.md:53`, `docs/superpowers/specs/2026-05-17-homepage-redesign-design.md:69` | Hard proof. Current site mostly says 2,000 MT. | Mark old spec as stale; never reuse those numbers. |

Approved wording:

> RM Psyllium operates from Siddhpur, Gujarat, with controlled cleaning, milling, packing, and lot documentation for buyer-specified psyllium grades.

Avoid:

> Absolute control over the entire supply chain. Zero broker blend-ins. Every lot from contracted farms.

### 7. Commercial and Logistics Claims

| Claim pattern | Risk | Representative locations | Evidence needed to keep | Recommended action |
| --- | --- | --- | --- | --- |
| No MOQ / order any quantity | Medium | `src/data/site.ts:178`, `src/data/site.ts:203`, `src/pages/index.astro:68`, `src/components/ProductDirectory.astro:51`, `src/pages/[lang]/contact/index.astro:117` | Pricing policy, sample stock, courier/export feasibility, and margin guardrails for small orders. | Keep if operational; pair with "grade, packing, testing, and destination reviewed before quote." |
| 1 kg samples | Medium | `src/data/site.ts:183`, `src/pages/index.astro:73`, `src/pages/[lang]/faq/index.astro:91`, translations and docs | Sample inventory, courier process, sample COA template, cost policy. | Keep if operational; make sample dispatch conditional on grade, mesh, and destination review. |
| 7-day lead time | Medium/High | `src/data/site.ts:181`, `src/pages/index.astro:72`, `src/pages/[lang]/contact/index.astro:121`, `src/components/ProductDirectory.astro:51` | Production schedule, packing stock, lab turnaround, logistics buffer. | Rewrite to "typical lead time confirmed after grade, packing, test, and document review." |
| 2,000 MT annual capacity | Medium/High | `src/data/site.ts:291`, `src/pages/[lang]/about/index.astro:53`, `src/pages/[lang]/faq/index.astro:92`, `src/pages/[lang]/contact/index.astro:113`, `src/pages/[lang]/products/index.astro:48` | Equipment capacity calculation, monthly throughput, operational readiness. | Keep only if real and operating; otherwise "planned/installed capacity" with date. |
| FOB Mundra/CIF and ports | Medium | `src/pages/index.astro:88`, `src/pages/index.astro:106`, `src/pages/[lang]/contact/index.astro:63`, `src/pages/compliance/index.astro:30`, `src/data/site.ts:3190` | Freight forwarder/export readiness, IEC/GST when required. | Keep as target commercial terms, but avoid promising shipment before export registration is active. |
| 24-hour response / document sharing | Low/Medium | `src/pages/compliance/index.astro:108`, `src/pages/[lang]/regions/[region].astro:145` | Internal SLA. | Keep if operational; no certification risk. |

Decision rule: commercial flexibility is useful for leads, but should not create impossible procurement expectations.

### 8. Regulatory and Market Claims

| Claim pattern | Risk | Representative locations | Evidence needed to keep | Recommended action |
| --- | --- | --- | --- | --- |
| FDA/FSMA/FSVP buyer guides | Low/Medium | `src/data/site.ts:3463`, `src/data/site.ts:3911`, translations such as `src/data/translations/de.json:97-104` | Official source citations if exact rule statements are quoted. | Keep as educational, but clarify importer responsibility and avoid claiming RM compliance. |
| "Qualified partner provides certified NABL COAs, custom packaging, validated steam sterilization" | High | `src/data/site.ts:3915`, `src/data/site.ts:3923` | Validated sterilization process, cGMP evidence, lab reports. | Rewrite as vetting checklist, not RM capability. |
| ANVISA/TGA/JAKIM/ESMA/GSO/BP regional claims | Medium/High | `src/data/site.ts:3033`, `src/data/site.ts:3065`, `src/data/site.ts:3121`, `src/data/site.ts:3156`, `src/data/site.ts:3111`, translations | Local regulatory source and product-specific document capability. | Keep market-intent pages, but shift to "buyers commonly request" and "share requirements for review." |
| GRAS/FDA food status | Medium | `src/data/site.ts:3004`, `src/data/site.ts:3463`, translation references | Regulatory source and correct scope of psyllium use. | Cite sources in content or soften to "buyers often evaluate..." |
| Medical/veterinary effect claims for cattle/equine | Medium/High | `src/data/site.ts:2793`, `src/data/site.ts:3814`, `src/data/site.ts:3825`, translations | Scientific support and feed/regulatory review. | Reframe as functional feed-use language; avoid disease prevention or treatment claims. |

Decision rule: regulatory pages should be "buyer checklist and requirement mapping", not "RM guarantees compliance in every market."

### 9. AI/SEO Surfaces

| Surface | Risk | Locations | Recommended action |
| --- | --- | --- | --- |
| `public/llms.txt` | High | `public/llms.txt:4`, `public/llms.txt:53-87` | Rewrite because AI engines may quote it directly. Remove registration-status disclosure, remove "all batches", and remove title claims like GMP-compliant/HACCP-compliant/certified gluten-free unless page content is clearly educational. |
| Blog `aiSnapshot` | High | `src/data/site.ts:3865`, `src/data/site.ts:3890`, `src/data/site.ts:3915`, `src/data/site.ts:3939`, translations `src/data/translations/*.json` | Make every snapshot buyer-oriented: "buyers should request/verify", not "all shipments include" or "qualified partner provides." |
| Schema JSON-LD | Critical/High | `src/pages/[lang]/quality/index.astro:20-21`, `src/pages/index.astro:66-88`, `src/pages/[lang]/contact/index.astro:17-19` | Remove unsupported credential schema. Audit FAQ schema because it exposes "no MOQ", "47 parameters", and certification answers to Google. |
| Meta descriptions | Medium/High | `src/pages/index.astro:106`, `src/pages/[lang]/products/index.astro:20`, region descriptions | Ensure snippets do not claim certifications or impossible lead times. |
| Old docs that may feed future content | High if reused | `docs/linkedin_templates_60.md`, `docs/linkedin_templates.md`, `docs/superpowers/specs/...` | Mark as pre-audit/stale or add a warning header before reuse. |

## Multilingual Consistency Requirements

The same claim policy must be applied in all locales. Do not fix English only.

### Terms to replace across locales

| English concept | Replace with safer pattern |
| --- | --- |
| certified organic / NOP certified / EU Organic certified | organic lots available only after certificate review; buyers should request certificate and TC/COI |
| FSSAI registered / APEDA registered / Spices Board listed / IEC active | documents available for pre-PO review: sample COA, product spec, origin, packing, and destination checklist |
| GMP-compliant facility | GMP documentation checklist; controls buyers should verify |
| HACCP-compliant facility | HACCP-style hazard-control documentation; food safety controls buyers should request |
| NABL-certified product / our NABL lab | third-party NABL-accredited lab report available per lot/sample where requested |
| USP/EP/IP compliant | target specification; COA can be annotated to buyer-specified standard where test results support it |
| Halal/Kosher certificate available | plant-origin declaration available for review; formal certification discussed only when buyer asks |
| certified gluten-free supplier | gluten-free documentation/testing checklist; ELISA test can be arranged if required |
| no MOQ / order any quantity | 1 kg sample and small-order review available; quote depends on grade, packing, testing, and destination |
| 7-day lead time | lead time confirmed after grade, packing, lab testing, and document requirements |

### Translation files requiring special attention

- `src/data/translations/de.json`: GMP/HACCP sections at `433-548`, gluten-free at `776`, FDA/FSMA sections at `97-104`.
- `src/data/translations/zh.json`: GMP/HACCP sections at `524-529` and `665-726`, certified organic/gluten-free snapshots around `268-314`, FDA sections at `97-104`.
- `src/data/translations/fr.json`: HACCP and NABL claims around `665-726`, gluten-free around `780`, NABL package claims around `529`.
- `src/data/translations/nl.json`: GMP/HACCP sections at `524-529` and `665-726`, broad NABL package claims at `529`, `584`, `726`.
- `src/data/translations/ar.json`, `es.json`, `it.json`, `pt.json`, `ru.json`: same generated claim families exist and should be changed with the English source pattern.

## Example Replacement Copy

### Certification FAQ

Current unsafe pattern:

> FSSAI facility registration, APEDA export clearance, Spices Board listing, and active IEC. Current certificates available on request before sampling.

Recommended action:

> Hide the certification FAQ completely until active certificates exist. Do not replace it with "certifications in progress" or a defensive explanation of missing certificates.

Safer public pattern for nearby trust copy:

> Review the documents behind your lot before PO: sample COA, product specification, origin details, packing options, and destination document checklist.

### Organic

Current unsafe pattern:

> USDA National Organic Program certified psyllium husk for the US market.

Safer pattern:

> Organic psyllium supply is handled only after certificate review. Share your destination market and required certification scope (USDA NOP, EU Organic, or buyer-specific), and we will confirm whether a current certified lot and transaction documentation are available before quotation.

### NABL / COA

Current unsafe pattern:

> Every batch includes NABL-accredited COA.

Safer pattern:

> We can share a sample COA and arrange lot-specific testing through a third-party NABL-accredited laboratory when required by the buyer's specification.

### USP/EP/IP

Current unsafe pattern:

> 99% psyllium husk is USP, EP, and IP compliant.

Safer pattern:

> 99% psyllium husk is typically requested for USP, EP, or IP documentation. Confirm the destination market and pharmacopoeia edition; COA wording should be matched to tested lot results.

### Halal/Kosher

Current unsafe pattern:

> Halal and Kosher certificates can be arranged on request.

Safer pattern:

> Psyllium is plant-derived. A plant-origin declaration can be shared for buyer review with the sample/specification pack.

### Manufacturer and facility

Current unsafe pattern:

> We maintain absolute control over the entire supply chain.

Safer pattern:

> We control RM lots through cleaning, milling, packing, and dispatch documentation at our Siddhpur facility. Seed origin and external documents are recorded per lot.

### MOQ and lead time

Current unsafe pattern:

> No minimum order. 7 days from confirmation.

Safer pattern:

> 1 kg samples and small-order review are available. Quote and lead time depend on grade, packing, lab testing, documents, and destination.

## Senior Content Writer Audit of Proposed Rephrases

Verdict: the replacement direction is right, but the copy must sound useful, not defensive. Avoid making the absence of certificates the main story. The buyer-facing story should be: "we help you verify the lot before you buy."

### Strong enough to use

| Pattern | Writer verdict | Use where |
| --- | --- | --- |
| "Review the documents behind your lot before PO" | Strong. It is concrete, buyer-first, and does not apologize for missing certificates. | Homepage trust block, RFQ page, compliance page. |
| "sample COA, product specification, origin details, packing options, and destination document checklist" | Strong if formatted as a list. Too dense as one long sentence. | Document-review block, RFQ form helper text. |
| "third-party NABL-accredited laboratory" | Strong and precise. Must never become "our NABL lab" or "NABL-certified product." | COA sections, product pages, FAQs. |
| "plant-origin declaration" | Acceptable. It is factual without pretending Halal/Kosher status. | Halal/Kosher buyer guide, sample/spec pack copy. |

### Needs tightening before live use

| Proposed phrase | Issue | Better version |
| --- | --- | --- |
| "We do not list a certification unless the certificate is active and shareable" | Honest but defensive; it spotlights the missing credential. | Hide the certification FAQ. Use only in one private/sales-facing answer if a buyer directly asks. |
| "certificate review before PO" | Slightly vague; could sound like certificates exist. | "document review before PO" or "certificate review where a certificate is part of the requested lot." |
| "COA can be aligned or annotated" | Can sound like editing paperwork to fit a buyer request. | "COA wording can reference the requested standard only where the tested lot results support it." |
| "controlled facility" | Good, but needs operational detail nearby. | "Siddhpur facility with controlled cleaning, milling, packing, and lot documentation." |
| "1 kg samples are available" | Good lead-gen copy, but needs operational guardrails. | "1 kg samples are available after grade, mesh, and destination review." |

### Final Copy Principles

- Do not write a public certification-status FAQ until certificates are active.
- Do not use "pending", "in progress", "under process", "coming soon", or "timeline" for public credibility copy.
- Use document names, not abstract credibility words.
- Make every claim auditable: what document, for which lot, before which commercial step.
- Keep SEO by writing buyer education: "what to verify", "documents to request", "how to compare COA wording", and "destination checklist."

## Implementation Tasks

### Done in this pass

- [x] Hide homepage FAQ schema question: "What certifications does RM Psyllium hold?"
- [x] Hide source FAQ question: "What certifications does your facility hold?"
- [x] Remove APEDA/FSSAI/Spices Board/IEC registration claims from old LinkedIn, keyword, Gamma brief, strategy, and homepage redesign planning docs found in this pass.
- [x] Update the audit recommendation so certification FAQs are hidden, not rewritten as process-status copy.
- [x] Rewrite multilingual quality-page certification copy into buyer document-review language across `en`, `es`, `fr`, `de`, `nl`, `it`, `pt`, `ru`, `ar`, and `zh`.
- [x] Remove unsupported FSSAI credential JSON-LD from `src/pages/[lang]/quality/index.astro`.
- [x] Rewrite and noindex `src/pages/b2b-preview.astro`.
- [x] Rewrite `public/llms.txt` into buyer-document-review positioning.
- [x] Remove inactive certification-logo/trust-card surfaces from homepage, quality, contact, footer, compliance, and hero components.

### Critical next tasks

- [x] Rewrite multilingual `qualityCredLead` copy in `src/data/site.ts` to remove FSSAI/APEDA/Spices Board/IEC claims across `en`, `es`, `fr`, `de`, `nl`, `it`, `pt`, `ru`, `ar`, and `zh`.
- [x] Remove unsupported FSSAI credential JSON-LD from `src/pages/[lang]/quality/index.astro`.
- [x] Rewrite or noindex `src/pages/b2b-preview.astro` because it claims active FSSAI/APEDA/IEC and future WHO GMP/ISO/HACCP approval.
- [x] Rewrite `public/llms.txt` so AI/search systems cannot quote unsupported "all batches", GMP, HACCP, certified gluten-free, organic, or registration claims.
- [x] Remove certification-logo trust signals from homepage/quality surfaces unless the certificate is active and shareable.

### High-priority content tasks

- [x] Replace organic present-tense product claims with certificate-review language or remove active organic SKUs until certified lots exist.
- [x] Normalize NABL copy everywhere to "third-party NABL-accredited lab report available per lot/sample where requested."
- [x] Replace USP/EP/IP blanket compliance with lot-tested, buyer-standard wording in main product/region/blog source copy.
- [x] Rewrite GMP/HACCP/ISO sections into buyer checklists instead of RM facility claims.
- [x] Rewrite commercial promises such as "no MOQ", "7 days", and "every shipment includes 47 parameters" into conditional sample/trial/document-review language.

### Multilingual QA tasks

- [x] Re-run term searches in every locale after English source changes.
- [x] Check translated copy for stronger-than-English claims.
- [ ] Keep the same trust architecture in every language: document review first, certification claims only when active and shareable.

## Recommended Implementation Sequence

1. Critical hotfix pass:
   - Remove FSSAI credential schema from `src/pages/[lang]/quality/index.astro`.
   - Rewrite `public/llms.txt` to remove unsupported "all batches", GMP-compliant, HACCP-compliant, certified gluten-free, and present-tense organic signals.
   - Rewrite organic product present-tense certification claims in `src/data/site.ts`.
   - Rewrite GMP/HACCP generated blog and translation claims from RM capability to buyer checklist.

2. High-risk commercial copy pass:
   - Normalize NABL wording across product pages, about page, footer, blog snapshots, and translations.
   - Normalize USP/EP/IP wording across product tables, FAQs, and region pages.
   - Replace "no MOQ" and "7 days" with conditional sample/trial language unless operations can support it immediately.

3. Multilingual pass:
   - Apply the same replacement patterns to all translation JSON files.
   - Check Arabic, Chinese, Dutch, German, French, Italian, Portuguese, Russian, and Spanish for stronger-than-English wording.

4. Trust-building replacement pass:
   - Add a "Buyer document review" block instead of a certification-status block.
   - List only what can be shared today: sample COA, product specification, origin details, packing options, test parameters, and destination document checklist.
   - Add sample COA/spec sheet language instead of certification badges.

## Founder / Cofounder Decision Memo

The strongest long-term position is not "pretend certified until ranking catches up." It is also not "advertise that certifications are in progress." The strongest position is "be the buyer's most useful technical source and show exactly what documents can be reviewed today."

Keep:

- Manufacturer in Siddhpur, Gujarat, if facility control is real.
- Lot-level COA/spec discussion, if sample COAs can be shared.
- Buyer guides for USP/EP/IP, FDA/FSVP, organic, Halal/Kosher, gluten-free, HACCP/GMP.
- Product grade, mesh, packing, and documentation education.
- Private certification timelines only in sales conversations when the buyer asks directly.

Delay until documents exist:

- FSSAI registered, APEDA registered, Spices Board listed, IEC active, GST active.
- USDA NOP / EU Organic certified product.
- Halal/Kosher certified.
- GMP/HACCP/ISO compliant facility.
- Certified gluten-free.
- FDA registered or fully FSMA compliant.

Use for lead generation now:

- "Send your required standard and we will map the document checklist."
- "Request sample COA/spec review before PO."
- "Buyer verification checklist for psyllium imports."
- "How to compare USP, EP, IP, BP, NF, and buyer-specific COA wording."
- "What documents to ask a new Indian psyllium supplier for before paying advance."

Hard challenge:

If a buyer catches one unsupported certificate claim, every true claim becomes suspect. Search rankings are reversible. Lost buyer trust is not. The SEO strategy should rank for the topics, not impersonate the finished compliance state.

## Validation Checklist

Searches performed:

- Certification/registration terms across `src`, `public`, and `docs`.
- Organic, Halal, Kosher, gluten-free, GMP, HACCP, ISO terms.
- NABL, COA, lab, 47 parameter terms.
- USP, EP, IP, NF, BP, pharmacopoeia terms.
- Manufacturer, in-house, direct-from-source, capacity, contracted farm terms.
- No MOQ, sample size, lead time, FOB/CIF, port terms.
- Schema and metadata surfaces.
- Blog `aiSnapshot` and translation JSON surfaces.

Coverage confirmation:

- Visible page copy: covered.
- Product data and product FAQs: covered.
- Blog posts and generated translation JSON: covered.
- Region and industry data: covered.
- Schema/JSON-LD: covered separately.
- `public/llms.txt`: covered separately.
- Current docs that may feed future content: covered as reuse risk.

No live website copy was changed as part of this audit report.
