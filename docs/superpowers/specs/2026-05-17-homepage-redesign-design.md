# RM Psyllium Homepage Redesign — Conversion-First Spec

**Date:** 2026-05-17  
**Scope:** Homepage + Product Pages (Phase 1)  
**Goal:** Every element serves one purpose — converting visitors into qualified leads.  
**Timeline:** 1-2 weeks full redesign

---

## 1. Strategic Foundation

### Single Conversion Goal
Every page funnels to ONE primary action: **Submit a buying inquiry** (simplified form).

Secondary actions exist only to nurture visitors not ready to convert:
- Download product spec PDF (email-gated)
- WhatsApp quick message (mobile)
- Email fallback

### Buyer Personas (all equal priority)
- Procurement manager at pharma/nutra company
- Food/beverage brand product developer
- Trading company / distributor
- Animal feed buyer

### Differentiators to Lead With
1. Vertical integration — farm to container, no middlemen
2. Spec flexibility — custom grades/mesh/packing per buyer
3. Speed — smaller team = faster decisions and shipments
4. Price advantage — direct sourcing cuts broker margins

### Tone
Professional but direct. Confident without being stiff. Like a trusted supplier who knows their product cold and respects the buyer's time. No literary storytelling, no magazine editorial structure. Clear, factual, fast.

---

## 2. Homepage Structure (New)

The current 13-section homepage becomes a focused 7-section page. Total scroll depth target: ~4,500px on desktop (down from ~8,000px).

### Section 1: Hero (above the fold)

**Purpose:** Immediately communicate what you do, for whom, and how to start.

**Layout:** Full-width, split grid (60/40). Left: copy + CTA. Right: real facility photo (not stock, not SVG).

**Content:**
- Badge: `Psyllium manufacturer & exporter · Unjha, Gujarat`
- H1: `Bulk psyllium husk, powder, and seed. Farm to container.`
- Subhead: `Custom grade, mesh, and packing for pharma, food, feed, and industrial buyers. 12,000 MT/year capacity. FOB Mundra or CIF.`
- Primary CTA: `Get a Quote` (scrolls to form)
- Secondary CTA: `WhatsApp Us` (mobile-prominent, links to wa.me)
- Trust row: `Sample COA review · Product specs · Origin records · Packing options`

**Right side:** Real photo of facility/warehouse/product bags. Overlaid card showing:
- `MOQ: 1 container (18-20 MT)`
- `Lead time: 14-21 days from order confirmation`
- `Sample: 250g + COA available`

**Why this works:** Buyer knows within 5 seconds: what you sell, your scale, your location, MOQ, and how to start. No scrolling required to take action.

### Section 2: Social Proof Bar

**Purpose:** Build instant credibility for a new brand.

**Layout:** Horizontal strip, cream background.

**Content:**
- `38 export markets · 12,000 MT annual capacity · 1,200+ contracted farmers · 4,500 acres`
- Below stats: 2-3 short testimonials from domestic buyers (rotating or static)
  - Format: "Quote text" — Name, Company, Country
  - Even 1 testimonial is better than zero

**Why:** Numbers + human validation. Procurement people trust volume and track record.

### Section 3: Products (compact)

**Purpose:** Let buyers self-identify their product need and see you have it.

**Layout:** Grid of 6 product cards (not 13 rows). Group by category:
- Psyllium Husk (85% / 95% / 98% / 99%)
- Husk Powder (85% / 95% / 98%)
- Seeds / Khakha / Cattle Feed / Organic

**Each card shows:**
- Product name + purity
- Key application (1 line)
- Available mesh sizes
- `Get Quote →` link (scrolls to form with product pre-selected)

**Why:** Buyers scan for their product. Cards are faster than a 13-row table. Each card is a conversion path.

### Section 4: Why RM Psyllium (differentiators)

**Purpose:** Answer "why you vs. the 50 other Indian psyllium exporters?"

**Layout:** 4-column grid (icons optional, not required).

**Content:**
1. **Farm to Container** — Own farmer contracts, own mill, own lab, own export desk. No brokers.
2. **Custom Specs** — Grade, mesh, packing, and documents tailored per buyer. Not one-size-fits-all.
3. **Fast Turnaround** — 14-21 day lead time. Small team = faster decisions. Sample timing confirmed after spec review.
4. **Full Documentation** — COA, origin, phyto, fumigation, MSDS, allergen statement per shipment.

**Below grid:** Single CTA: `Tell us what you need →`

**Why:** This section doesn't exist on the current site. It's the most important section for differentiation. Every competitor says "quality psyllium from India." You need to say WHY you specifically.

### Section 5: Process (compressed)

**Purpose:** Show operational credibility without overwhelming.

**Layout:** Single visual timeline (horizontal on desktop, vertical on mobile). NOT 8 machine cards.

**Content:** 
- 5 steps only: `Source → Clean → Mill → Test → Ship`
- Each step: 1-line description
- One real facility photo alongside (your actual machines/lab)
- Optional: link to "See full facility details" for buyers who want depth

**Why:** The current 8-machine breakdown is impressive but belongs on a dedicated facility page, not the homepage. Homepage buyers need confidence you have a real operation, not a spec sheet.

### Section 6: FAQ (NEW — critical for SEO + AI citations)

**Purpose:** Answer buyer objections, capture long-tail search traffic, feed AI citation engines.

**Layout:** Accordion/expandable, with FAQ schema markup (JSON-LD).

**Questions to include (8-10):**
1. What is the minimum order quantity for psyllium husk exports?
2. What purity grades do you offer for psyllium husk?
3. What mesh sizes are available?
4. Do you provide COA and export documentation?
5. What is the lead time from order to shipment?
6. Can you do private-label or custom packaging?
7. Do you have Halal/Kosher/Organic certification?
8. What ports do you ship from?
9. Can I get a sample before placing a bulk order?
10. What industries do you supply psyllium to?

**Why:** 
- Google featured snippets pull from FAQ sections
- AI models (ChatGPT, Perplexity, Gemini) cite pages that directly answer questions
- Addresses buyer objections before they bounce
- Each question is a long-tail keyword opportunity

### Section 7: Contact / Quote Form (THE conversion point)

**Purpose:** Capture the lead. Period.

**Layout:** Split grid. Left: copy + alternative contact methods. Right: the form.

**Left side:**
- H2: `Get a bulk quote`
- Subtext: `Tell us what you need. We'll respond after spec review with availability, pricing, and sample options.`
- Alternative channels:
  - Email: export@rmpsyllium.com
  - WhatsApp: +91 2767 333 444
  - Response time: "Typically within 4 hours during business hours (IST)"

**Right side — Simplified form (4 required fields + 2 optional):**
- Name (required)
- Email (required)
- Product interest (dropdown — required): Husk / Powder / Seeds / Cattle Feed / Other
- Country (required)
- Company (optional)
- Message / specs (optional textarea)
- Submit: `Send Inquiry →`

**Why:** Current form has 8 fields. Research consistently shows each additional form field reduces conversion by 5-10%. We keep 4 required fields that give you enough to respond intelligently, and qualify deeper on the follow-up call.

---

## 3. Sticky/Fixed Elements

### Desktop: Sticky header CTA
- Header already has a CTA button. Keep it. Make sure it says `Get Quote` (not "Request Bulk Quote" — too long).

### Mobile: Sticky bottom bar (NEW)
- Fixed bar at bottom of screen on mobile
- Two buttons side by side: `Get Quote` | `WhatsApp`
- Appears after scrolling past the hero
- This is the single highest-impact mobile conversion addition

---

## 4. Elements to REMOVE from Homepage

| Current Element | Why Remove |
|---|---|
| 4 "chapters" (Seed, Land, Mill, World) | Literary storytelling doesn't convert. Key facts moved to stats bar + differentiators. |
| 8 machine cards with specs | Belongs on a /facility page, not homepage. One photo + 5-step process is enough. |
| 9-step process timeline | Compressed to 5 steps. |
| 6 buyer guide cards | Move to /resources or /insights. Homepage shouldn't link away from conversion. |
| Founder story + history timeline | Move to /about page. Homepage is for the buyer, not the founder. |
| Trust marquee (scrolling text) | Replace with static stats bar. Scrolling text is hard to read and feels dated. |
| "How it works" overlay card | Integrated into hero section directly. |

---

## 5. Product Pages (Redesign)

Each product page (e.g., /en/products/psyllium-husk/) should follow this structure:

1. **Hero:** Product name, 1-line description, key specs (purity, mesh, applications), real product photo, `Get Quote for [Product]` CTA
2. **Specs table:** Purity, mesh options, swelling volume, moisture, packaging options, MOQ
3. **Applications:** Which industries use this product and why
4. **Sample COA:** Show actual test parameters (already exists — keep it)
5. **Related products:** 2-3 cards linking to adjacent products
6. **Quote form:** Same simplified form, pre-filled with this product

**Schema markup per product page:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Psyllium Husk 99% Purity",
  "description": "Pharmaceutical-grade psyllium husk with 99% purity, available in 30/40 mesh. USP/EP compliant.",
  "brand": { "@type": "Brand", "name": "RM Psyllium" },
  "manufacturer": { "@type": "Organization", "name": "RM Psyllium" },
  "category": "Psyllium Husk",
  "material": "Plantago ovata seed husk",
  "countryOfOrigin": "India",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "referenceQuantity": { "@type": "QuantitativeValue", "value": "1", "unitCode": "MTR" }
    }
  }
}
```

---

## 6. SEO & AI Citation Strategy

### Structured Data (JSON-LD) to Add

1. **Organization** (enhanced — add address, geo, founding date, number of employees)
2. **Product** (per product page — see above)
3. **FAQPage** (homepage FAQ section)
4. **HowTo** (process section — "How to source psyllium from India")
5. **BreadcrumbList** (all pages)
6. **LocalBusiness** (with geo coordinates of Unjha facility)

### On-Page SEO Fixes

- H1 per page must include primary keyword (e.g., "Psyllium Husk Manufacturer India" not just "Bulk psyllium husk")
- Meta descriptions must include: product + location + differentiator + CTA language
- Alt text on all images must be descriptive and keyword-rich
- Internal linking: every product page links to related products and back to homepage
- URL structure is already clean (/en/products/psyllium-husk/) — keep it

### AI Citation Optimization

AI models cite pages that:
1. **Directly answer specific questions** → FAQ section handles this
2. **Provide structured, factual data** → Specs tables, COA data, process steps
3. **Have clear entity relationships** → Schema markup connects products to manufacturer to location
4. **Are authoritative sources** → E-E-A-T signals: real facility, real team, real certifications, real data
5. **Use clear, unambiguous language** → No marketing fluff, just facts

**Content to create for AI discoverability:**
- Dedicated page: "Psyllium Husk Supplier India — Grades, Specs, and Export Documentation"
- Dedicated page: "How to Import Psyllium Husk — Complete Buyer Guide"
- These become the pages AI models will cite when someone asks "who are the best psyllium suppliers in India?"

---

## 7. Technical Implementation Notes

### Form handling
- Keep Netlify Forms (already configured)
- Add hidden field for page source (which page/product triggered the form)
- Add UTM parameter capture (for tracking which channel drove the lead)
- Redirect to thank-you page with clear next-step messaging

### Analytics events to track
- Form submission (primary conversion)
- WhatsApp click (secondary conversion)
- Email click (secondary conversion)
- PDF download (micro-conversion)
- Product card click (engagement)
- FAQ expansion (engagement)
- Scroll depth (25%, 50%, 75%, 100%)

### Performance
- Replace Unsplash stock photo with optimized real photos (WebP, max 200KB)
- Keep SVG for icons/diagrams only
- Lazy load everything below the fold
- Target: LCP < 2.5s, CLS < 0.1, FID < 100ms

### Mobile-first
- Sticky bottom CTA bar (appears after hero scroll)
- Click-to-call on phone number
- WhatsApp deep link
- Form fields sized for thumb input
- No horizontal scroll on any element

---

## 8. Content You Need to Provide

Before implementation can start, you need to supply:

| Asset | Priority | Notes |
|---|---|---|
| 3-5 facility photos | Critical | Mill, lab, warehouse, packing line, raw material |
| 1 facility video (30-60s) | High | Can be phone-shot walkthrough |
| 2-3 buyer testimonials | Critical | Even domestic. Name + company + country + 1-2 sentences |
| MOQ confirmation | Critical | "1 container (18-20 MT)" — confirm this is accurate |
| Lead time confirmation | Critical | "14-21 days" — confirm |
| Sample policy | High | "1 kg sample packs for matched grades; COA/document review before PO" — confirm |
| Team/founder photo | Medium | For about page (not homepage) |
| Certification status | Medium | Which certs are in-process vs. obtained? |

---

## 9. What This Spec Does NOT Cover (Phase 2+)

- Region-specific landing pages (/en/regions/*)
- Industry-specific landing pages (/en/industries/*)
- Blog/insights content strategy
- Email nurture sequence post-form-fill
- Retargeting/remarketing setup
- A/B testing framework
- Chatbot/live chat
- Multi-language copy rewrite (Phase 1 focuses on English, then propagates)

---

## 10. Success Metrics

| Metric | Current (estimated) | Target (30 days post-launch) |
|---|---|---|
| Form submissions / month | ~0 (site is new) | 15-30 |
| Form conversion rate | Unknown | 3-5% of visitors |
| Avg. time on homepage | Unknown | > 45 seconds |
| Bounce rate | Unknown | < 55% |
| WhatsApp clicks / month | Unknown | 10-20 |
| Google indexed pages | ~73 | 80+ (with new content) |

---

## Summary of Changes

**Structure:** 13 sections → 7 sections. Focused, fast, conversion-oriented.  
**Form:** 8 fields → 4 required + 2 optional. Maximize submissions.  
**Imagery:** Stock/SVG placeholders → Real facility photos.  
**Social proof:** None → Stats bar + testimonials.  
**Differentiation:** Implicit → Explicit "Why RM Psyllium" section.  
**FAQ:** Non-existent → 10 questions with schema markup.  
**Mobile:** No sticky CTA → Sticky bottom bar with Get Quote + WhatsApp.  
**SEO:** Minimal schema → Product, FAQ, HowTo, LocalBusiness, Breadcrumb schemas.  
**AI citations:** No optimization → FAQ + structured data + authoritative content pages.
