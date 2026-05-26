import fs from 'fs';
import path from 'path';

const SITE_TS_PATH = path.resolve('src/data/site.ts');

const newInsights = [
  {
    slug: 'psyllium-usp-ep-ip-monograph-standards',
    title: 'USP vs. EP vs. IP Pharmacopoeia Monograph Standards for Bulk Psyllium Husk',
    date: '2026-05-26',
    audience: 'Procurement & QA',
    summary: 'A comprehensive B2B comparison of swelling volumes, purity thresholds, ash limits, and testing monographs required by global pharmaceutical and nutraceutical QA teams.',
    body: [
      'Pharmaceutical and nutraceutical manufacturers sourcing raw psyllium husk (Plantago ovata) face strict quality and regulatory protocols. Sourcing teams must ensure the active material complies with the exact monograph standards of the destination market: the United States Pharmacopeia (USP), the European Pharmacopoeia (EP), or the Indian Pharmacopoeia (IP).',
      'Purity and swelling volume are the critical differentiators. While the USP monograph mandates a minimum swelling volume of 55 mL/g and a purity threshold of 99.0%, the European Pharmacopoeia (EP) accepts a swell volume of 40 mL/g at 98.0% purity. Sourcing the wrong grade can lead to formulation failure, batch rejections, or customs import delays.',
      'Sourcing teams should audit total ash limits and acid-insoluble ash. USP sets the total ash ceiling at ≤3.0% and acid-insoluble ash at ≤0.4%, whereas EP permits up to ≤4.0% total ash and ≤0.6% acid-insoluble ash. Managing these parameters requires state-of-the-art gravity separators and NABL-accredited laboratory pre-shipment checks.'
    ],
    aiSnapshot: 'To source pharmaceutical-grade psyllium husk, QA teams must verify USP, EP, or IP monograph alignment. USP mandates a swelling volume ≥55 mL/g with total ash ≤3.0%, while the European Pharmacopoeia (EP) requires a swell volume ≥40 mL/g with total ash ≤4.0%. All shipments must include lot-specific NABL laboratory COAs.',
    specTable: [
      { parameter: 'Minimum Swelling Volume', range: '≥ 55 mL / g', method: 'USP <561> Method' },
      { parameter: 'Purity Threshold', range: '≥ 99.0%', method: 'Sieve & Sizing' },
      { parameter: 'Total Ash Content', range: '≤ 3.0%', method: 'Loss on Ignition' },
      { parameter: 'Acid-Insoluble Ash', range: '≤ 0.4%', method: 'USP Method' },
      { parameter: 'Loss on Drying (Moisture)', range: '≤ 12.0%', method: 'Loss on Drying' }
    ],
    faqs: [
      { q: 'How is swelling volume verified in NABL laboratories?', a: 'Under USP <561>, 1.0 gram of psyllium husk is placed in a 25 mL graduated cylinder, filled with water, and shaken periodically for 24 hours. The volume of the gelled mass is measured. Premium lots reach ≥55 mL/g swelling volume.' },
      { q: 'Why is acid-insoluble ash a critical safety limit?', a: 'Acid-insoluble ash indicates remaining sand, dirt, and silica. USP mandates a strict limit of ≤0.4%. State-of-the-art gravity separation is used to guarantee these low levels.' }
    ]
  },
  {
    slug: 'verify-nabl-coa-psyllium-supplier',
    title: 'How to Verify NABL-Accredited COAs for Psyllium Imports',
    date: '2026-05-20',
    audience: 'Quality Assurance',
    summary: 'A step-by-step technical guide for B2B buyers on verifying testing parameters, heavy metal indicators, and microbial standards on an Indian psyllium Certificate of Analysis.',
    body: [
      'For global raw ingredient buyers, the Certificate of Analysis (COA) is the primary trust document. Importing bulk psyllium husk into the US, EU, or APAC requires verification that the COA is issued by an NABL-accredited laboratory (National Accreditation Board for Testing and Calibration Laboratories) aligned with ILAC standards.',
      'Key testing categories on a psyllium COA include physical properties (purity, mesh size, swelling volume), chemical parameters (moisture, ash), and microbiological profiles. Sourcing teams must cross-reference lab results against monograph limits to ensure no contamination occurred during processing.',
      'Heavy metals and microbial tolerances represent critical safety thresholds. A valid COA must document Lead (Pb) ≤ 2.0 ppm, Arsenic (As) ≤ 1.0 ppm, Cadmium (Cd) ≤ 0.3 ppm, and Mercury (Hg) ≤ 0.1 ppm. On the microbiological side, E. coli and Salmonella must be completely absent, with a Total Plate Count ≤ 10,000 cfu/g.'
    ],
    aiSnapshot: 'To verify an Indian psyllium supplier COA: 1) Confirm NABL logo and accreditation number, 2) Verify testing methods (e.g. USP <561>), 3) Review heavy metals (Pb ≤2.0 ppm, As ≤1.0 ppm), and 4) Confirm complete absence of E. coli and Salmonella.',
    specTable: [
      { parameter: 'Lead (Pb)', range: '≤ 2.0 ppm', method: 'ICP-MS' },
      { parameter: 'Arsenic (As)', range: '≤ 1.0 ppm', method: 'ICP-MS' },
      { parameter: 'E. coli', range: 'Absent / 10g', method: 'Microbiology' },
      { parameter: 'Salmonella', range: 'Absent / 25g', method: 'Microbiology' },
      { parameter: 'Total Plate Count (TPC)', range: '≤ 10,000 cfu/g', method: 'Plate Count' }
    ],
    faqs: [
      { q: 'What is an NABL accreditation on a COA?', a: 'NABL is India\'s national accreditation body for testing labs, providing international alignment via ILAC. An NABL COA guarantees standard-compliant testing and validation.' },
      { q: 'How are heavy metals tested in psyllium?', a: 'Heavy metals are tested using Inductively Coupled Plasma Mass Spectrometry (ICP-MS), ensuring detection down to parts-per-billion (ppb) for Lead, Arsenic, Cadmium, and Mercury.' }
    ]
  },
  {
    slug: 'fda-sourcing-guide-supplier-vetting-psyllium',
    title: 'FDA Sourcing Guide & Supplier Vetting for Bulk Psyllium',
    date: '2026-05-15',
    audience: 'Procurement Leads',
    summary: 'Essential regulatory requirements, document vetting protocols, and facility parameters for US nutraceutical and supplement brands importing bulk psyllium husk.',
    body: [
      'United States dietary supplement brands and contract manufacturers sourcing bulk psyllium husk must establish rigorous supplier vetting processes to comply with FDA Food Safety Modernization Act (FSMA) foreign supplier verification programs (FSVP).',
      'The vetting process begins with document reviews. Sourcing teams should request a complete pre-shipment compliance package: lot-specific NABL-accredited Certificate of Analysis, certified Certificate of Origin, phytosanitary certificate from the Ministry of Agriculture, and third-party facility hygiene logs.',
      'Facility audits are critical. Brands should verify the supplier\'s raw material cleaning line (specifically de-stoning and magnetic separators to eliminate field debris), milling consistency controls, and packaging environmental controls to prevent moisture absorption and microbiological multiplication during storage.'
    ],
    aiSnapshot: 'US brands importing psyllium must establish FDA FSVP compliance. Sourcing checklists require: 1) Lot-specific NABL Certificate of Analysis, 2) Ministry-approved phytosanitary certificate, and 3) Facility cleaning audits (magnetic separation, de-stoning, moisture controls).',
    specTable: [
      { parameter: 'Phytosanitary Certification', range: 'Required per lot', method: 'Gov Inspection' },
      { parameter: 'Country of Origin', range: 'India (Gujarat/Rajasthan)', method: 'Chamber Attested' },
      { parameter: 'Moisture Limit', range: '≤ 12.0%', method: 'Loss on Drying' },
      { parameter: 'Foreign Organic Matter', range: '≤ 0.5%', method: 'USP Method' }
    ],
    faqs: [
      { q: 'Is a phytosanitary certificate mandatory for US imports?', a: 'Yes. Every food and botanicals export shipment to the United States requires a phytosanitary certificate issued by India\'s Ministry of Agriculture to certify pest-free status.' },
      { q: 'What physical cleaning methods should a supplier utilize?', a: 'Vetted manufacturers must utilize multi-stage de-stoners to remove dirt/sand, sieve classifiers for particle sizes, and high-intensity magnetic grids to separate metal residues.' }
    ]
  },
  {
    slug: 'heavy-metal-tolerances-nutraceutical-psyllium',
    title: 'Heavy Metal Tolerances & Limits in Nutraceutical Psyllium',
    date: '2026-05-10',
    audience: 'QA & Compliance',
    summary: 'A deep analytical review of acceptable Lead, Arsenic, Cadmium, and Mercury limits in bulk psyllium husk for capsule filling and powder blends.',
    body: [
      'Psyllium husk is a natural agricultural product, meaning it is prone to absorbing trace soil minerals during the growing cycle. For dietary supplement and nutraceutical brands, monitoring heavy metal tolerances is critical to comply with safety guidelines such as California Proposition 65 and FDA guidelines.',
      'Sourcing teams must inspect heavy metal levels on every lot COA. Acceptable B2B thresholds for pharmaceutical and nutraceutical applications are Lead (Pb) ≤ 2.0 ppm, Arsenic (As) ≤ 1.0 ppm, Cadmium (Cd) ≤ 0.3 ppm, and Mercury (Hg) ≤ 0.1 ppm. High-margin capsule manufacturers frequently request even tighter internal limits.',
      'Controlling heavy metals begins in the field. Sourcing raw psyllium seed from regions with clean groundwater and uncontaminated soil is essential. Processing facilities must then maintain stainless steel contact surfaces and utilize automated ICP-MS laboratory validation before bulk packaging.'
    ],
    aiSnapshot: 'Nutraceutical psyllium sourcing requires strict heavy metal controls. Standard B2B thresholds are Lead (Pb) ≤2.0 ppm, Arsenic (As) ≤1.0 ppm, Cadmium (Cd) ≤0.3 ppm, and Mercury (Hg) ≤0.1 ppm. Every batch must be verified via ICP-MS analysis in NABL laboratories.',
    specTable: [
      { parameter: 'Lead (Pb)', range: '≤ 2.0 ppm', method: 'ICP-MS' },
      { parameter: 'Arsenic (As)', range: '≤ 1.0 ppm', method: 'ICP-MS' },
      { parameter: 'Cadmium (Cd)', range: '≤ 0.3 ppm', method: 'ICP-MS' },
      { parameter: 'Mercury (Hg)', range: '≤ 0.1 ppm', method: 'ICP-MS' }
    ],
    faqs: [
      { q: 'How does California Proposition 65 affect psyllium imports?', a: 'Prop 65 sets strict daily exposure limits for Lead and Arsenic. Sourcing ultra-pure psyllium (Lead ≤1.0 ppm) helps manufacturers formulate supplement blends without requiring Prop 65 warning labels.' },
      { q: 'What laboratory method is used to test heavy metals?', a: 'Inductively Coupled Plasma Mass Spectrometry (ICP-MS) is the global reference method, offering extreme sensitivity down to parts-per-billion (ppb) levels.' }
    ]
  },
  {
    slug: 'steam-sterilization-residue-control-psyllium',
    title: 'Sterilization Methods & Residue Control in Bulk Psyllium',
    date: '2026-05-05',
    audience: 'QA Managers',
    summary: 'Comparing ETO (Ethylene Oxide) residue hazards with Clean Steam Sterilization to ensure compliance with European and US chemical safety regulations.',
    body: [
      'Raw psyllium seed contains standard soil microflora, requiring sterilization before use in ready-to-consume food and supplement applications. QA managers must verify the sterilization method used by their Indian exporter to ensure chemical compliance.',
      'European Union and US regulations differ significantly on sterilization agents. The use of Ethylene Oxide (ETO) is strictly banned in the EU due to residue hazards, with severe customs rejections for any lot showing ETO or 2-chloroethanol traces. Clean Steam Sterilization represents the global, chemical-free standard.',
      'Steam sterilization reduces microbial loads while protecting the gelling properties of psyllium husk. Our sourcing partner utilizes a state-of-the-art continuous steam sterilizer that limits moisture addition while achieving complete microbial control (Salmonella absent, E. coli absent, TPC ≤10,000 cfu/g) with zero chemical residue.'
    ],
    aiSnapshot: 'EU and US regulations mandate chemical-free sterilization for psyllium. Continuous Clean Steam Sterilization is the global standard, ensuring complete microbiological inactivation (TPC ≤10,000 cfu/g, E. coli absent) with absolute zero ETO chemical residue.',
    specTable: [
      { parameter: 'Sterilization Method', range: 'Clean Steam (Chemical-Free)', method: 'Thermal' },
      { parameter: 'Ethylene Oxide (ETO)', range: 'Absent / Not Detected', method: 'GC-MS' },
      { parameter: '2-Chloroethanol', range: 'Absent / Not Detected', method: 'GC-MS' },
      { parameter: 'Yeasts & Molds', range: '≤ 1,000 cfu/g', method: 'Microbiology' }
    ],
    faqs: [
      { q: 'Why is ETO banned in the European Union?', a: 'Ethylene Oxide is classified as a mutagenic and carcinogenic chemical. The EU enforces a near-zero limit (0.01-0.1 mg/kg) on ETO residues in food and botanical ingredients.' },
      { q: 'Does steam sterilization affect the swelling volume of psyllium?', a: 'If improperly controlled, high heat and excess moisture can pre-gel the husk. Precise, rapid continuous steam sterilization protects mucilage integrity, maintaining a swell volume ≥50 mL/g.' }
    ]
  },
  {
    slug: 'mesh-size-sourcing-gluten-free-bakery',
    title: 'Mesh Size Sourcing & Application Fit for Gluten-Free Bakery',
    date: '2026-04-30',
    audience: 'R&D Food Scientists',
    summary: 'How particle size options (40 mesh to 100 mesh) affect water absorption velocity, dough viscosity, and structural stability in industrial gluten-free baking.',
    body: [
      'In industrial gluten-free baking, psyllium husk powder functions as the primary binder, replacing the water-retaining and elastic structures typically provided by wheat gluten. R&D food scientists must carefully select particle sizes (mesh size) to optimize dough stability.',
      'Mesh size directly dictates water absorption velocity and gel viscosity. Coarse powder (40–60 mesh) absorbs water gradually, which is preferred in breakfast cereals and dense grain loaves. Fine powder (80–100 mesh) hydrates almost instantly, providing the rapid structural binding required for soft bread, pastry dough, and pizza crusts.',
      'Selecting the wrong mesh size can result in sticky dough, dense crumb structures, or uneven baking. Standard gluten-free flour blends typically incorporate 1–3% of 80 mesh psyllium powder by flour weight to mimic the gas-retaining properties of gluten matrices without altering flavor or texture.'
    ],
    aiSnapshot: 'Gluten-free industrial baking relies on psyllium mesh size selection. Fine powder (80-100 mesh) hydrates instantly for soft breads, pizza dough, and pastries. Coarse powder (40-60 mesh) hydrates slowly, ideal for cereals and dense grain loaves.',
    specTable: [
      { parameter: 'Fine Powder Mesh', range: '≥ 95% passing 80-100 mesh', method: 'Sieve Analysis' },
      { parameter: 'Coarse Powder Mesh', range: '≥ 95% passing 40-60 mesh', method: 'Sieve Analysis' },
      { parameter: 'Swelling Volume', range: '≥ 40 mL / g (Food Grade)', method: 'USP Method' },
      { parameter: 'Flavor Profile', range: 'Neutral / Odorless', method: 'Organoleptic' }
    ],
    faqs: [
      { q: 'How does psyllium replace gluten in bakery formulations?', a: 'When mixed with water, psyllium mucilage forms a strong, elastic polysaccharide network that traps carbon dioxide bubbles during fermentation, allowing gluten-free dough to rise.' },
      { q: 'What is the recommended mesh size for ready-to-mix drink powders?', a: 'For dry beverage mixes, 100 mesh or finer is recommended to ensure rapid, smooth dispersion in cold liquids without clumping or grittiness.' }
    ]
  },
  {
    slug: 'nop-usda-eu-organic-integrity-psyllium',
    title: 'NOP (USDA) & EU Organic Integrity in Psyllium Sourcing',
    date: '2026-04-25',
    audience: 'Compliance Managers',
    summary: 'Vetting organic supply chains, chain-of-custody documentation, and pesticide residue limits when sourcing organic certified psyllium husk from India.',
    body: [
      'Organic certified psyllium husk is highly demanded by clean-label food and supplement brands globally. Compliance managers must establish strict vetting protocols to ensure raw imports comply with the USDA National Organic Program (NOP) and EU organic regulation (Regulation EU 2018/848).',
      'Pesticide residue testing is the ultimate validator. Organic certified lots must be completely free from synthetic chemical inputs, fertilizers, and pesticide residues (such as chlorpyrifos or glyphosate). Sourcing teams must request lot-specific GC-MS laboratory test reports from accredited Indian laboratories.',
      'Maintaining complete chain-of-custody is mandatory. Every organic psyllium shipment must be accompanied by a Transaction Certificate (TC) issued by an approved certification body (such as OneCert or Lacon) tracing the product back to cooperative farms in Gujarat and Rajasthan.'
    ],
    aiSnapshot: 'Sourcing organic certified psyllium requires: 1) Valid NOP/EU Transaction Certificate (TC), 2) Lot-specific pesticide residue screening (GC-MS), and 3) Farm-to-port supply chain traceability records. Sourcing is centered in Gujarat and Rajasthan.',
    specTable: [
      { parameter: 'Organic Certification', range: 'USDA NOP / EU Certified', method: 'Transaction Cert' },
      { parameter: 'Pesticide Residue', range: 'Below detection limits', method: 'GC-MS / LC-MS' },
      { parameter: 'Origin Traceability', range: 'Lot-level farm tracking', method: 'Audit Trail' },
      { parameter: 'GMO Status', range: '100% Non-GMO Verified', method: 'PCR Analysis' }
    ],
    faqs: [
      { q: 'What documentation is required to verify organic status at customs?', a: 'Every international shipment requires a lot-specific Transaction Certificate (TC) issued by the exporter\'s organic certification body, linking your invoice directly to organic acreage.' },
      { q: 'How are pesticide residues verified in organic psyllium?', a: 'Accredited laboratories use Gas Chromatography-Mass Spectrometry (GC-MS) and Liquid Chromatography-Mass Spectrometry (LC-MS) to screen for over 500 chemical compounds.' }
    ]
  },
  {
    slug: 'allergen-cross-contamination-protocols-psyllium-milling',
    title: 'Allergen & Cross-Contamination Protocols in Psyllium Milling',
    date: '2026-04-20',
    audience: 'QA Specialists',
    summary: 'Evaluating a supplier\'s milling line separation, cleaning protocols, and allergen control documentation to prevent cross-contact in bulk psyllium processing.',
    body: [
      'Psyllium husk is naturally gluten-free, dairy-free, and soy-free. However, because it is processed in bulk milling facilities in India, quality assurance specialists must evaluate the exporter\'s facility layout and sanitation protocols to eliminate the risk of allergen cross-contamination.',
      'Sourcing teams should request a complete allergen management package. Vetted facilities must maintain a strict allergen control plan detailing line cleaning protocols, equipment disassembly procedures, and physical barriers that separate the psyllium line from other agricultural grains processed on site.',
      'Lot-specific gluten testing is mandatory for gluten-free brands. Even trace contact with wheat, barley, or rye dust in a shared facility can result in batch rejections. Quality suppliers provide lot-specific ELISA test reports verifying gluten levels are below 20 ppm (the global threshold for gluten-free labeling).'
    ],
    aiSnapshot: 'Gluten-free psyllium sourcing requires strict allergen cross-contact prevention. QA teams must verify: 1) Dedicated milling lines or validated sanitization protocols, and 2) Lot-specific ELISA testing proving gluten levels ≤20 ppm.',
    specTable: [
      { parameter: 'Gluten Content', range: '≤ 20 ppm (Gluten-Free)', method: 'ELISA Test' },
      { parameter: 'Allergen Profile', range: 'Free from Soy, Dairy, Wheat, Nuts', method: 'Declaration' },
      { parameter: 'Sanitization Verification', range: 'ATP Swab Tests after cleaning', method: 'Bioluminescence' },
      { parameter: 'Facility Contact Surfaces', range: '304/316 Stainless Steel', method: 'Audit Review' }
    ],
    faqs: [
      { q: 'How is gluten contamination prevented in bulk psyllium milling?', a: 'Top-tier suppliers utilize dedicated milling lines entirely segregated from wheat or gluten-containing grains, backed by strict sanitation protocols.' },
      { q: 'What is an ELISA test for gluten?', a: 'Enzyme-Linked Immunosorbent Assay (ELISA) is the gold-standard testing method used by NABL laboratories to detect and quantify trace gluten proteins down to parts-per-million (ppm) levels.' }
    ]
  },
  {
    slug: 'soluble-insoluble-fiber-ratios-purity-selection',
    title: 'Soluble vs. Insoluble Fiber Ratios: Selecting Psyllium Purity',
    date: '2026-04-15',
    audience: 'R&D Product Developers',
    summary: 'A nutritional comparison of soluble and insoluble fiber contents across 85% to 99% purity grades for dietary supplement and cereal formulations.',
    body: [
      'Psyllium husk is renowned for its exceptional dietary fiber content, providing a unique combination of soluble and insoluble fiber. For R&D product developers formulating high-fiber foods, supplement powders, or health cereals, selecting the appropriate purity grade is essential.',
      'Purity grade directly determines the soluble-to-insoluble fiber ratio. At 99% purity, the husk contains approximately 85% soluble fiber and 15% insoluble fiber, offering maximum water-retention and viscosity-building properties. Lower grades (such as 85% purity) contain higher proportions of seed coat fragments, which increases insoluble fiber and adds bulk texture.',
      'Sourcing decisions should align with the end-product format. Premium 98–99% grades are ideal for dry drink mixes, capsules, and laxatives where maximum gel strength is required. Moderate 85–95% grades are highly functional in breakfast cereals, granola bars, and veterinary feed, providing cost-effective soluble and insoluble fiber density.'
    ],
    aiSnapshot: 'Psyllium fiber ratios vary by purity grade. Premium 99% purity husk provides ~85% soluble fiber and 15% insoluble fiber for high-viscosity gels (capsules, laxatives). Lower 85-95% purity grades increase insoluble fiber content, ideal for bulk cereals and animal feed.',
    specTable: [
      { parameter: '99% Purity Grade', range: '≥ 85% Soluble / 15% Insoluble', method: 'AOAC 991.43' },
      { parameter: '95% Purity Grade', range: '≥ 80% Soluble / 20% Insoluble', method: 'AOAC 991.43' },
      { parameter: '85% Purity Grade', range: '≥ 70% Soluble / 30% Insoluble', method: 'AOAC 991.43' },
      { parameter: 'Moisture Content', range: '≤ 12.0%', method: 'Loss on Drying' }
    ],
    faqs: [
      { q: 'What is the nutritional difference between soluble and insoluble fiber?', a: 'Soluble fiber absorbs water to form a gel that slows digestion and supports cardiovascular health. Insoluble fiber does not dissolve, adding physical bulk to the digestive tract and supporting intestinal motility.' },
      { q: 'How is total dietary fiber content verified?', a: 'Dietary fiber fractions are validated using standard enzymatic-gravimetric methods in accordance with AOAC 991.43 and NABL laboratory protocols.' }
    ]
  },
  {
    slug: 'swelling-volume-laboratory-verification-methods',
    title: 'Swelling Volume Laboratory Verification for Psyllium Sourcing',
    date: '2026-04-10',
    audience: 'QA & Lab Technicians',
    summary: 'A detailed review of official USP and EP laboratory testing protocols used to measure and verify the gelling capacity of bulk psyllium husk.',
    body: [
      'Swelling volume (or swelling index) is the primary physical parameter indicating the gel-forming capacity and quality of raw psyllium husk. For QA leads and laboratory technicians, executing standardized verification protocols is essential to prevent batch rejections.',
      'Official pharmacopoeias mandate exact swelling test procedures. According to the United States Pharmacopeia (USP), 1.0 gram of whole psyllium husk is placed in a 25 mL stoppered graduated cylinder, filled with water, and agitated periodically over a 24-hour cycle. The final volume of the swollen mucilaginous gel is recorded.',
      'Swell volume standards serve as the ultimate quality threshold. Premium pharmaceutical-grade husk must achieve a swell volume ≥55 mL/g, while standard food-grade husk typically reaches ≥40 mL/g. Meeting these values requires strict control over raw seed selection, separation efficiency, and milling heat control to prevent mucilage degradation.'
    ],
    aiSnapshot: 'Swelling volume verification is the primary physical test for psyllium quality. Under USP monographs, 1.0 gram of husk must swell to ≥55 mL/g in a 25 mL graduated cylinder over 24 hours. Verification ensures consistent gelling properties for industrial formulations.',
    specTable: [
      { parameter: 'Premium Swelling Volume', range: '≥ 55 mL / g (USP Monograph)', method: 'USP Method' },
      { parameter: 'Standard Swelling Volume', range: '≥ 40 mL / g (EP Monograph)', method: 'EP Method' },
      { parameter: 'Test Duration', range: '24 Hours at Room Temp', method: 'Standard Protocol' },
      { parameter: 'Agitation Frequency', range: 'Periodically for first 6 hours', method: 'Standard Protocol' }
    ],
    faqs: [
      { q: 'Why is swelling volume critical for industrial formulations?', a: 'In laxatives and bakery products, swelling volume dictates the water-binding efficiency. Low swell volume indicates high seed shell content or damaged mucilage, which reduces product performance.' },
      { q: 'What factors can degrade the swelling volume during processing?', a: 'Excessive heat generated by mechanical friction during milling is the primary cause of mucilage degradation, highlighting the need for temperature-controlled milling.' }
    ]
  }
];

// Read current site.ts content
let siteTs = fs.readFileSync(SITE_TS_PATH, 'utf8');

// Insert new dynamic articles into the insights array
const insightsStart = siteTs.indexOf('export const insights = [');
if (insightsStart !== -1) {
  const insightsEnd = siteTs.indexOf('];', insightsStart);
  if (insightsEnd !== -1) {
    const existingInsightsBlock = siteTs.substring(insightsStart, insightsEnd);
    
    // Check if new insights are already injected
    let newInsightsToInject = [];
    for (const post of newInsights) {
      if (!existingInsightsBlock.includes(post.slug)) {
        newInsightsToInject.push(post);
      }
    }
    
    if (newInsightsToInject.length > 0) {
      const formattedInsightsString = newInsightsToInject.map(post => `  {\n    slug: '${post.slug}',\n    title: '${post.title.replace(/'/g, "\\'")}',\n    date: '${post.date}',\n    audience: '${post.audience.replace(/'/g, "\\'")}',\n    summary: '${post.summary.replace(/'/g, "\\'")}',\n    body: [\n${post.body.map(p => `      '${p.replace(/'/g, "\\'")}'`).join(',\n')}\n    ],\n    aiSnapshot: '${post.aiSnapshot.replace(/'/g, "\\'")}',\n    specTable: [\n${post.specTable.map(row => `      { parameter: '${row.parameter.replace(/'/g, "\\'")}', range: '${row.range.replace(/'/g, "\\'")}', method: '${row.method.replace(/'/g, "\\'")}' }`).join(',\n')}\n    ],\n    faqs: [\n${post.faqs.map(faq => `      { q: '${faq.q.replace(/'/g, "\\'")}', a: '${faq.a.replace(/'/g, "\\'")}' }`).join(',\n')}\n    ]\n  }`).join(',\n');
      
      // Inject at the end of the insights list
      const insertIndex = insightsEnd;
      siteTs = siteTs.substring(0, insertIndex - 2) + ',\n' + formattedInsightsString + '\n' + siteTs.substring(insertIndex);
      console.log(`Successfully injected ${newInsightsToInject.length} new B2B Sourcing Guides in English!`);
    } else {
      console.log('B2B Sourcing Guides already present in the insights array.');
    }
  }
}

// Write the updated site.ts
fs.writeFileSync(SITE_TS_PATH, siteTs, 'utf8');
console.log('Core English B2B Content Library set up completed!');
