# RM Psyllium: B2B Content Strategy & Gamma.app Brief

This document serves as the master context hand-off brief for future AI agents, developers, or content managers working on the **RM Psyllium** social media, branding, and lead-generation systems. It outlines the business foundation, design system, file index, and the Gamma.app API automation framework.

---

## 🏢 1. Business Profile & Strategic Context

RM Psyllium is a direct-from-source manufacturer and exporter of high-purity Psyllium (Plantago ovata) products, located in the epicenter of the global psyllium growing belt in Siddhpur, Gujarat, India. 
-   **Pre-Launch Status**: The state-of-the-art 2,000 MT/year processing facility is currently under setup and will be fully operational in **July 2026**. 
-   **Operational Advantage**: The business is backed by unmatched hands-on expertise:
    *   The founder's family has **20 years of agricultural seed-processing experience**.
    *   Their business partner has **40 years of direct psyllium plant operations management** in Siddhpur's largest mills.
-   **Unique Value Propositions (UVPs)**:
    1.  *Direct Sourcing*: Processed completely in-house with direct-from-mill pricing (no middleman broker margins).
    2.  *Lot-Specific QA*: Lot-specific NABL-accredited Certificates of Analysis (COAs) provided digital-first, pre-shipment.
    3.  *No MOQ Policy*: Democratizing sourcing by serving emerging brands from 500 KG trial batches to full container loads (FCL), alongside free 100g–500g lab samples for R&D.

---

## 🎯 2. Target Ideal Customer Profiles (ICPs)

The content engine targets four primary commercial audiences, addressing their exact pain points:
1.  **Global Sourcing & Procurement Managers** (Supplement/Food Brands): Tired of failed swelling volume and microbial tests at destination ports. Resonate with: *Purity specifications, USP/EP compliance, and pre-shipment COAs.*
2.  **Product Formulation Chemists & R&D Labs**: Blocked by massive mill MOQs when trying to procure small trial batches. Resonate with: *Free lab samples, custom mesh sizes (40 to 100 mesh), and rapid dispatch.*
3.  **Domestic Indian Merchant Exporters (Trading Houses)**: Struggle to guarantee export-grade quality to international buyers when buying through brokers. Resonate with: *White-label OEM contract manufacturing, direct mill audits, and complete regulatory paperwork (APEDA, FSSAI, Spices Board, Active IEC).*
4.  **Growth-Stage B2B Brands (SMBs)**: Ignored by major mills due to volume restrictions. Resonate with: *The strict "No MOQ" policy and direct mill pricing.*

---

## 🎨 3. Design System & Brand Identity

To maintain perfect design consistency with [rmpsyllium.com](https://rmpsyllium.com), any generated slide deck, image, or social post must strictly enforce these brand tokens:

### Color Palette (Tailwind CSS Config)
*   **Ink (`#14213d`)**: Deep dark navy blue (used for primary dark backgrounds, headers, and body copy).
*   **Field (`#f6f8f4`)**: Soft warm off-white (used for light slide and page backgrounds).
*   **Leaf (`#2f6f4e`)**: Forest green (primary brand accent, used for buttons, links, and highlight tags).
*   **Harvest (`#c6842e`)**: Golden mustard yellow (secondary accent, used for caution blocks and call-outs).
*   **Mineral (`#54707e`)**: Slate blue-grey (used for secondary text, metadata labels, and subtle borders).
*   **Line (`#dfe6dc`)**: Soft grey-green border line color.

### Typography
*   **Font Family**: `Inter` (geometric, highly readable sans-serif). Headings must be bold and prominent; body text is clean and highly spaced on mobile.

### Illustration Style Rules
All generated graphics and slide illustrations must match the **Modern Botanical Line-Art / Outlined Flat Vector Illustration** style:
*   *Strokes*: Thin, clean, dark charcoal outlines.
*   *Fills*: Flat, solid colors using Leaf Green, Harvest Gold, and slate grey.
*   *Backgrounds*: Flat, solid warm off-white (`#f6f8f4`) with **zero gradients, drop shadows, or 3D effects**.

---

## 🗂️ 4. Workspace File Directory

The following files have been built and verified in the workspace for instant reference and execution:

### 📄 [docs/linkedin_strategy.md](file:///Users/mithileshparmar/Development/sancor_systems/rm_psyllium/docs/linkedin_strategy.md)
The strategic blueprint mapping the core B2B positioning, competitive differentiators (vs. Jyot, Satnam, Mantra), pre-launch "Building in Public" journal, and four key content pillars.

### 📄 [docs/linkedin_templates.md](file:///Users/mithileshparmar/Development/sancor_systems/rm_psyllium/docs/linkedin_templates.md)
The copy-paste B2B social content kit containing:
*   **12 Text Posts**: Complete LinkedIn updates covering technical QA parameters, shipping terms (FOB Mundra vs. CIF), HS Codes (`1211.90.32`), and contract processing.
*   **4 Carousel Scripts**: Detailed, slide-by-slide copy for PDF presentations.

### 📄 [scripts/generate_linkedin_carousel.py](file:///Users/mithileshparmar/Development/sancor_systems/rm_psyllium/scripts/generate_linkedin_carousel.py)
A self-contained Python script designed to automate B2B slide deck generation using the **Gamma.app API (v1.0)**:
*   *Endpoint used*: `POST https://public-api.gamma.app/v1.0/generations`
*   *API Settings*: Uses `"textMode": "preserve"` to guarantee the AI retains exact technical terms, meshes, and numbers instead of rewriting them.
*   *Branding*: Embeds strict inline image prompts for all slides in the botanical vector style.
*   *Execution*: Polls the generation status and downloads the finalized PDF directly into the workspace root as `QA_Audit_Checklist_Carousel.pdf`.
