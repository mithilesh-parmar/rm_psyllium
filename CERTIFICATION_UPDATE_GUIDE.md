# RM Psyllium: Certification Activation & Update Guide (GST Pending)

Per your instructions, **ALL registrations and certifications whatsoever** (FSSAI facility registration, APEDA export clearance, active Import Export Code (IEC), Spices Board listing, WHO GMP, ISO 22000, HACCP, Halal, and Kosher) are **hidden or commented out** from all 100 localized B2B pages. 

To ensure absolute legal safety while you wait for your GST registration to come through, our dynamic content and generated guides are strictly **spec-driven, origin-driven, and relationship-driven** (focusing on raw material quality, mesh sizes, swelling volumes, and custom packing capability sourced from the premium growing belts of **Gujarat and Rajasthan**).

Once your GST is live and you receive your registrations/certificates, use this 2-minute checklist to toggle them active across all translated pages in one single go!

---

## 🗺️ Step-by-Step Activation Checklist

Our multi-lingual architecture loads certification content dynamically. You only need to update the configuration file in one place:
Open: `src/data/site.ts`

### 1. Activating FSSAI, APEDA, IEC, and Spices Board
1. **Locate the specific registration strings** under the `copy` records (e.g. `copy.en.qualityCredTitle` or `copy.en.qualityFssaiDesc`).
2. **Remove the comment tags or change the status text** from "pending" or hidden to "active".
3. Add the registration numbers to the dynamic variables inside `src/data/site.ts` so they propagate across all 10 regional domains instantly.

### 2. Activating WHO GMP, ISO 22000, and HACCP Audits
1. Open the QA/Sourcing guides inside the dynamic `insightTranslations` dictionary in `src/data/site.ts`.
2. Locate the commented-out compliance sections and simply remove the comment wrapper tags to display active audit statements on the page layout.

---

## 📂 Visual Directory of Sourcing & AEO Files

If you ever need to manually review where core sourcing details are located in code, here is the list:

### 1. Root-Level AI/LLM Crawler File
* **File**: [public/llms.txt](file:///Users/mithileshparmar/Development/sancor_systems/rm_psyllium/public/llms.txt)
* **Usage**: Provides a high-density, context-rich markdown digest of our product specifications, sourcing geographies (Gujarat & Rajasthan), and guides for AI engines (Perplexity, ChatGPT, Gemini).

### 2. Quality and Credentials Page Layout
* **File**: [quality.astro](file:///Users/mithileshparmar/Development/sancor_systems/rm_psyllium/src/pages/%5Blang%5D/quality/index.astro)
* **Usage**: The central dashboard for credentials. Currently, all credential cards are wrapped in comment blocks (`<!-- -->`) or conditionally hidden.

### 3. Sourcing Guides Sitemaps & Data
* **File**: [site.ts](file:///Users/mithileshparmar/Development/sancor_systems/rm_psyllium/src/data/site.ts)
* **Usage**: The central data engine holding our 10 dynamic guides and all translations.

---

## 🛠️ Automated Terminal Reminder
To ensure this remains top-of-mind without cluttering your live site, we have integrated a custom Node script:
`scripts/certification-check.js`

Whenever you run `npm run dev` in your terminal, the script scans your source files and displays a high-contrast warning box reminding you of hidden credentials and linking to this file for easy reference.
