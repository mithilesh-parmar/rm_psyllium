# AI-Generated Image Reference Guide & Shooting Specifications

This document serves as a reference catalog for all **AI-generated WebP images** currently stored in `public/assets/generated/`. 

When your photographer takes real photos, they can use this guide to match the composition, perspective, subject matter, and grade distinctions of the current AI-generated representations.

---

## 🏭 Industrial & Facility Scenes

These images establish trust, industrial scale, hygiene, and GMP compliance.

### 1. `factory-walkthrough-gujarat.webp`
* **Current Usage**: Hero banner layout (`src/components/Hero.astro:L5`)
* **Visual Description**: Wide-angle, cinematic perspective of a clean, state-of-the-art psyllium processing and milling factory floor. Bright industrial lighting, stainless steel ducting, and polished epoxy green/grey floor coatings showing high GMP hygiene standards.
* **Photography Brief (Real Shot Replacement)**:
  * **Location**: Main milling/processing hall.
  * **Shot Type**: Wide-angle perspective shot.
  * **Subject**: Clean machinery lines, stainless steel elevators, dust-control systems, and clear pathways.
  * **Lighting**: Bright, uniform industrial illumination. Ensure the floor is highly polished or clean.

### 2. `milling-line-gujarat.webp`
* **Current Usage**: Homepage value proposition section (`src/components/HomePage.astro:L131`)
* **Visual Description**: An eye-level close-up of a modern automated milling line. Focuses on stainless steel processing machines, circular separator screens, and clean containment pipes.
* **Photography Brief (Real Shot Replacement)**:
  * **Location**: Sifting, sorting, or separation station.
  * **Shot Type**: Medium close-up with shallow depth-of-field.
  * **Subject**: Active vibrating sifter separators (rotary sieves) or sifting ductwork.
  * **Lighting**: Crisp side-lighting to highlight the clean stainless steel texture.

### 3. `facility-bags-gujarat.webp`
* **Current Usage**: 
  * Homepage section (`src/components/HomePage.astro:L41`)
  * Default Open Graph metadata preview (`src/components/Seo.astro:L15`)
  * Structured Schema fallback image for products (`src/pages/[lang]/products/[product].astro:L124`)
* **Visual Description**: Stacks of clean, branded bulk export packaging bags loaded on neat pallets in a spacious, organized warehouse bay.
* **Photography Brief (Real Shot Replacement)**:
  * **Location**: Finished goods warehouse / dispatch bay.
  * **Shot Type**: Pallet-level wide perspective.
  * **Subject**: Neatly stacked 25kg paper bags or bulk jumbo bags wrapped on pallets, ready for export. Branded labels should be clearly visible.
  * **Lighting**: Clean, natural warehouse lighting.

---

## 📦 Packaging & Product Exports

This image represents the bulk packaging standard that global B2B buyers receive.

### 4. `psyllium-husk-export-bag.webp`
* **Current Usage**: 
  * Hero secondary banner (`src/components/Hero.astro:L25`)
  * Main Product Schema fallback (`src/pages/[lang]/products/[product].astro`)
* **Visual Description**: A pristine 3D mockup of a heavy-duty multi-layer paper export bag containing RM Psyllium branding, standing upright.
* **Photography Brief (Real Shot Replacement)**:
  * **Location**: Studio setup or clean warehouse floor.
  * **Shot Type**: Clean studio portrait or high-angle product shot of a full bag.
  * **Subject**: A real 25 kg multi-layer kraft paper bag or PP bag with standard RM Psyllium branding.
  * **Lighting**: Softbox studio lighting to eliminate harsh shadows.

---

## 🌾 Product Grades (Purity Levels)

These images illustrate the gradual visual refinement of psyllium husk as the purity levels increase from 85% up to 99%. Mapped dynamically inside the `productSchema` in `[product].astro`.

```
Coarser / Darker (Feed/Industrial) ──────────────────────────► Fine / Bright White (Pharma)
[ 85% Grade ]   ===►   [ 95% Grade ]   ===►   [ 98% Grade ]   ===►   [ 99% Grade ]
```

### 5. `psyllium-husk-85-grade.webp`
* **Visual Description**: Coarser, darker-tan whole psyllium husk. Noticeable presence of seed coat fragments and natural dark flecks.
* **Photography Brief**: Macro studio close-up of a small mound of 85% purity husk on a clean white/beige background. Needs to show the larger particle size and natural variations.

### 6. `psyllium-husk-95-grade.webp`
* **Visual Description**: Standard light-tan whole husk. Fluffy texture with a much lower density of dark seed-coat particles.
* **Photography Brief**: Macro studio close-up of a small mound of 95% purity husk. Shows a lighter coloration and cleaner sift than the 85% grade.

### 7. `psyllium-husk-98-grade.webp`
* **Visual Description**: Off-white/cream colored fluffy whole husk with highly uniform, clean, and dust-free flakes.
* **Photography Brief**: Macro studio close-up of a small mound of 98% purity husk. Shows minimal dark specs and high fluffiness.

### 8. `psyllium-husk-99-grade.webp`
* **Visual Description**: Bright white, ultra-pure, premium fluffy whole husk flakes. Virtually zero dark particles or specs.
* **Photography Brief**: Macro studio close-up of a small mound of 99% purity husk. Demonstrates the absolute premium grade, maximum swell volume, and bright white purity.

---

## 📖 Marketing & Interactive Material

### 9. `import-playbook-preview.webp`
* **Current Usage**: Pre-generated for marketing preview.
* **Visual Description**: A stylish digital representation/mockup of the **RM Psyllium Import Playbook** PDF cover sitting on a minimalist desk surface.
* **Photography Brief (Real Shot Replacement)**:
  * **Shot Type**: Lifestyle mockup.
  * **Subject**: A real tablet/iPad displaying the PDF cover or a premium printed brochure copy sitting on a clean, professional desk.
