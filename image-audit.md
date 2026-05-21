# Image Audit & Nano Banana Prompt Sheet — RM Psyllium

## Context
Complete map of every image slot in the live website, followed by optimized generation prompts for each one. Business: RM Psyllium — B2B psyllium husk exporter, Unjha, Gujarat, India. Ships to 38 countries. Pharma/food/feed grade. Port: Mundra.

---

## Part 1 — Image Slot Map

### Active Images (currently real WebPs — user wants to replace all)

| #   | File to Replace                                      | Used In                                            | Section                                | Dimensions             |
| --- | ---------------------------------------------------- | -------------------------------------------------- | -------------------------------------- | ---------------------- |
| 1   | `/assets/generated/facility-bags-gujarat.webp`       | `HomePage.astro:66`, `Seo.astro:15` (default OG)   | HP hero + social share card            | 1122×1402 (4:5 tall)   |
| 2   | `/assets/generated/factory-walkthrough-gujarat.webp` | `Hero.astro:5`, `about/index.astro:17`             | Hero bg (22% opacity) + About hero     | 1536×1024 (3:2 wide)   |
| 3   | `/assets/generated/milling-line-gujarat.webp`        | `HomePage.astro:157`                               | Process section (Step 5 — Pack & Ship) | 1086×1448 (3:4 tall)   |
| 4   | `/assets/generated/psyllium-husk-export-bag.webp`    | `Hero.astro:25`, `products/psyllium-husk.astro:19` | Hero product card + Product page hero  | 1254×1254 (1:1 square) |
| 5   | `/assets/generated/import-playbook-preview.webp`     | `resources/playbook.astro:17`                      | Playbook hero (document preview)       | 1619×971 (16:10 wide)  |

### CSS Placeholder (no image at all — div box)

| #   | Location                                      | Section                                 | Slot Style                                             |
| --- | --------------------------------------------- | --------------------------------------- | ------------------------------------------------------ |
| 6   | `[lang]/products/[product]/[grade].astro:145` | Product grade hero (85%, 95%, 98%, 99%) | Sage-green box, 4:5 aspect ratio, shows "RM" text only |

### Unused / Not Live (no action needed unless pages go live)

- `HomePage11.astro:134` — Unsplash "golden grain fields" stock photo. Component is NOT rendered anywhere. Skip.
- 5 SVG files in `/public/assets/` (`hero-processing.svg`, `factory-walkthrough.svg`, `product-bag.svg`, `compliance-lab.svg`, `playbook-preview.svg`) — none referenced in any active page. Skip.

---

## Part 2 — Nano Banana Generation Prompts

**Style anchor for all prompts:** Professional B2B product photography, natural industrial lighting, warm Gujarat daylight. No people, no text overlays, no HDR tonemapping. Shot on medium-format camera. Clean backgrounds. Color palette: warm off-white, ochre, dusty sage, kraft brown.

---

### Image 1 — Facility Bags Hero
**File:** `facility-bags-gujarat.webp`  
**Ratio:** 4:5 tall (portrait)  
**Used as:** Homepage hero + default social OG image

```
Stack of 25 kg food-grade HDPE export sacks filled with psyllium husk, neatly palletized inside a large dry warehouse in Unjha, Gujarat, India. Warm afternoon light filters through high industrial windows casting long shadows across the pale ochre bags. Bags printed with RM PSYLLIUM branding and export codes. Clean concrete floor. Dust motes in the air. Shot from low angle looking slightly up to make stack feel monumental. Medium-format documentary photography. No people.
```

---

### Image 2A — Factory Walkthrough (wide, for Hero bg + About hero)
**File:** `factory-walkthrough-gujarat.webp`  
**Ratio:** 3:2 wide (landscape)  
**Used as:** Semi-transparent hero backdrop + About page header

```
Interior of a modern psyllium husk processing facility in Gujarat, India. Clean industrial space with stainless steel roller milling equipment along the right wall, overhead conveyor belts, and stacked export sacks at the far end. Fluorescent overhead lighting mixed with natural daylight from clerestory windows. Polished concrete floor slightly dusty with fine pale husk residue. Perspective shot looking down the length of the factory floor. Calm, ordered, no workers. Documentary editorial photography style.
```

---

### Image 2B — About Page Hero (alternative if separate image wanted later)
> Re-use Image 2A initially. If a distinct image is needed later, prompt:
```
Wide-angle interior shot of a psyllium processing plant in Unjha, Gujarat. View from the entrance looking inward across processing bays. Quality lab window visible on the left behind glass. Export documentation pinned to a corkboard on the wall. Natural light from open loading dock at far end illuminates fine airborne husk dust. No people. Warm neutral tones. Editorial product photography.
```

---

### Image 3 — Milling Line (tall portrait, process section)
**File:** `milling-line-gujarat.webp`  
**Ratio:** 3:4 tall (portrait)  
**Used as:** Process section illustration (Step 5 — Pack & Ship)

```
Close-up of an industrial roller mill inside a Gujarat psyllium husk processing plant. Stainless steel cylindrical rollers with fine mesh screens visible. Pale cream-coloured husk powder cascading from discharge chute into a receiving hopper below. Warm overhead light catches the fine particle dust in the air. Tight three-quarter composition showing machine from waist to mid-height. Clean mechanical detail. No people. Food-industry manufacturing photography.
```

---

### Image 4 — Psyllium Husk Export Bag (square, product hero)
**File:** `psyllium-husk-export-bag.webp`  
**Ratio:** 1:1 square  
**Used as:** Homepage hero product card + Psyllium Husk product page hero

```
Open 25 kg kraft-and-HDPE export bag of high-purity psyllium husk, top folded back to reveal a generous mound of pale golden-white husk flakes. Bag sits on a clean white sweep in a light studio setup. A small loose scatter of husk flakes rests beside the bag for texture. Bag has clean black printed label reading "PSYLLIUM HUSK" and purity grade. Soft diffused box lighting with a single warm fill from camera-right. No shadows on background. Hero product shot for B2B catalogue.
```

---

### Image 5 — Import Playbook Preview (wide, document feel)
**File:** `import-playbook-preview.webp`  
**Ratio:** 16:10 wide  
**Used as:** Playbook resource page hero

```
Flat-lay on a clean light wood desk: a printed multi-page export checklist document titled "Bulk Psyllium Import Playbook" beside a small sealed kraft sample pouch labelled "Psyllium Husk 99% — RM Psyllium". Also on the desk: a pen, a Certificate of Analysis printout with test parameters table visible, and a small glass vial of pale husk. Natural window light from the left casting soft shadows. Editorial business photography. Overhead shot, slightly angled (15 degrees off vertical).
```

---

### Image 6 — Product Grade Hero (4:5, per grade variant)
**File:** New file per grade — e.g. `psyllium-husk-85-grade.webp`, `psyllium-husk-99-grade.webp`  
**Ratio:** 4:5 tall portrait  
**Used as:** Grade-specific product pages (85%, 95%, 98%, 99%)

**For 85% Grade (feed/industrial):**
```
Half-open HDPE bag of psyllium husk 85% purity on a rough wood pallet inside a Gujarat warehouse. Husk is coarser and slightly golden-tan. A small handful of husk spills onto the pallet surface. Warm side-lighting. No people. Industrial B2B product photography.
```

**For 95% Grade (food grade):**
```
Sealed 10 kg food-grade poly bag of psyllium husk 95% purity on a clean stainless steel surface. Clear window panel in the bag shows pale golden-white husk inside. Printed label with grade and lot number. Studio lighting, slight warm tone. No people. Food industry product photography.
```

**For 98% Grade (USP/pharma):**
```
Small lab-grade amber glass jar and a 1 kg resealable pouch of ultra-fine psyllium husk 98% purity side by side on a white marble surface. Husk is fine and nearly off-white. A teaspoon of husk poured beside the jar shows texture and particle size. Clean overhead lighting. Pharmaceutical product photography aesthetic.
```

**For 99% Grade (pharmaceutical USP/EP):**
```
Premium sealed 1 kg foil-laminated pharmaceutical pouch of psyllium husk 99% purity on a clinical white surface. Certificate of Analysis document visible in soft focus behind. A glass beaker of water with swollen psyllium gel visible nearby shows viscosity. Crisp studio lighting, very clean and clinical. Pharma-grade product photography. No people.
```

---

## Implementation Notes (for when executing)

1. Generate images at native max resolution from nano banana; downscale to target dimensions after.
2. Save final files to `/public/assets/generated/` matching the exact filenames listed above.
3. Grade images: add `<img>` tag in `[lang]/products/[product]/[grade].astro:144` replacing the `.gr-placeholder` div. Use `src="/assets/generated/psyllium-husk-{grade}-grade.webp"` pattern.
4. No code changes needed for images 1–5 — drop-in replacement, filenames stay the same.
