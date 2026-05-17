export const languages = [
  { code: 'en', label: 'English', market: 'Global' },
  { code: 'es', label: 'Espanol', market: 'LATAM' },
  { code: 'fr', label: 'Francais', market: 'EU' },
  { code: 'de', label: 'Deutsch', market: 'DACH' }
] as const;

export type LanguageCode = (typeof languages)[number]['code'];

export const copy: Record<LanguageCode, {
  navProducts: string;
  navRegions: string;
  navIndustries: string;
  navCompliance: string;
  navInsights: string;
  navFaq: string;
  navContact: string;
  navBlog: string;
  navQuality: string;
  cta: string;
  homeTitle: string;
  homeSub: string;
  specTitle: string;
  requestQuoteCta: string;
  viewApplicationsCta: string;
  supplyFitLabel: string;
  requestQuoteBandTitle: string;
  requestQuoteBandLead: string;
  complianceTitle: string;
  complianceLead: string;
  complianceChecklist: string;
  complianceChecklistLead: string;
  insightsReadMore: string;
  faqTitle: string;
  faqLead: string;
  contactTitle: string;
  contactLead: string;
  productsListTitle: string;
  productsListLead: string;
  insightsListTitle: string;
  blogTitle: string;
  blogLead: string;
}> = {
  en: {
    navProducts: 'Products',
    navRegions: 'Regions',
    navIndustries: 'Industries',
    navCompliance: 'Compliance',
    navInsights: 'Buyer Guides',
    navFaq: 'FAQ',
    navContact: 'Contact',
    navBlog: 'Blog',
    navQuality: 'Quality',
    cta: 'Get Quote',
    homeTitle: 'Bulk psyllium supply from Gujarat, India.',
    homeSub: 'Psyllium husk, husk powder, seeds, khakha powder, and cattle feed with export packing and buyer documentation.',
    specTitle: 'Request bulk quote',
    requestQuoteCta: 'Request Product Quote',
    viewApplicationsCta: 'View Applications',
    supplyFitLabel: 'Supply fit',
    requestQuoteBandTitle: 'Get pricing, samples, and documents for this product.',
    requestQuoteBandLead: 'Send your grade, mesh, packing, destination, and monthly volume. We will reply with availability and next steps.',
    complianceTitle: 'Documents buyers need before shipment.',
    complianceLead: 'Procurement and QA teams can review COA parameters, lot traceability, food safety records, and export paperwork before samples or purchase orders.',
    complianceChecklist: 'Buyer verification checklist',
    complianceChecklistLead: 'Ask for current documents by product, lot, and destination market before confirming a bulk order.',
    insightsReadMore: 'Request Quote & Sample Options',
    faqTitle: 'Frequently asked questions.',
    faqLead: 'Common questions from procurement and QA teams about grades, certifications, export, and ordering.',
    contactTitle: 'Talk to the export desk.',
    contactLead: 'Share your product, volume, destination, and grade. We respond within 24 hours.',
    productsListTitle: 'Psyllium products from Unjha, Gujarat.',
    productsListLead: '7 product lines. 85%–99% grades. Bulk export packing. COA and documents per order.',
    insightsListTitle: 'Buyer guides and market insights.',
    blogTitle: 'Psyllium sourcing, compliance, and application resources.',
    blogLead: 'Technical and procurement guidance for bulk psyllium buyers worldwide.',
  },
  es: {
    navProducts: 'Productos',
    navRegions: 'Regiones',
    navIndustries: 'Industrias',
    navCompliance: 'Cumplimiento',
    navInsights: 'Guias',
    navFaq: 'FAQ',
    navContact: 'Contacto',
    navBlog: 'Blog',
    navQuality: 'Calidad',
    cta: 'Solicitar cotizacion',
    homeTitle: 'Psyllium premium para marcas globales.',
    homeSub: 'Ingredientes de psyllium limpios y trazables para alimentos, suplementos, pharma y nutricion animal.',
    specTitle: 'Solicitar cotizacion',
    requestQuoteCta: 'Solicitar cotizacion',
    viewApplicationsCta: 'Ver aplicaciones',
    supplyFitLabel: 'Adecuacion de suministro',
    requestQuoteBandTitle: 'Obtenga precios, muestras y documentos para este producto.',
    requestQuoteBandLead: 'Envie su grado, malla, empaque, destino y volumen mensual. Le responderemos con disponibilidad y proximos pasos.',
    complianceTitle: 'Documentos necesarios antes del envio.',
    complianceLead: 'Los equipos de compras y QA pueden revisar los parametros del COA, trazabilidad de lotes y documentos de exportacion antes de hacer pedidos.',
    complianceChecklist: 'Lista de verificacion del comprador',
    complianceChecklistLead: 'Solicite los documentos actuales por producto, lote y mercado de destino antes de confirmar un pedido.',
    insightsReadMore: 'Solicitar cotizacion y muestras',
    faqTitle: 'Preguntas frecuentes.',
    faqLead: 'Preguntas comunes de equipos de compras y QA sobre grados, certificaciones, exportacion y pedidos.',
    contactTitle: 'Hable con el equipo de exportacion.',
    contactLead: 'Comparta su producto, volumen, destino y grado. Respondemos en 24 horas.',
    productsListTitle: 'Productos de psyllium de Unjha, Gujarat.',
    productsListLead: '7 lineas de productos. Grados 85%–99%. Embalaje de exportacion. COA y documentos por pedido.',
    insightsListTitle: 'Guias para compradores e informacion del mercado.',
    blogTitle: 'Recursos de aprovisionamiento, cumplimiento y aplicacion de psyllium.',
    blogLead: 'Orientacion tecnica y de compras para compradores mayoristas de psyllium en todo el mundo.',
  },
  fr: {
    navProducts: 'Produits',
    navRegions: 'Regions',
    navIndustries: 'Industries',
    navCompliance: 'Conformite',
    navInsights: 'Guides',
    navFaq: 'FAQ',
    navContact: 'Contact',
    navBlog: 'Blog',
    navQuality: 'Qualite',
    cta: 'Demander un devis',
    homeTitle: 'Psyllium premium pour marques mondiales.',
    homeSub: 'Ingredients psyllium propres et tracables pour alimentation, complements, pharma et nutrition animale.',
    specTitle: 'Demander un devis',
    requestQuoteCta: 'Demander un devis produit',
    viewApplicationsCta: 'Voir les applications',
    supplyFitLabel: "Adequation d'approvisionnement",
    requestQuoteBandTitle: 'Obtenez tarifs, echantillons et documents pour ce produit.',
    requestQuoteBandLead: 'Envoyez votre grade, maille, conditionnement, destination et volume mensuel. Nous repondrons avec disponibilite et prochaines etapes.',
    complianceTitle: "Documents dont les acheteurs ont besoin avant l'expedition.",
    complianceLead: "Les equipes achats et QA peuvent examiner les parametres COA, la tracabilite des lots et les documents d'exportation avant les commandes.",
    complianceChecklist: "Liste de verification de l'acheteur",
    complianceChecklistLead: 'Demandez les documents actuels par produit, lot et marche de destination avant de confirmer une commande en gros.',
    insightsReadMore: 'Demander devis et echantillons',
    faqTitle: 'Questions frequemment posees.',
    faqLead: "Questions courantes des equipes achats et QA sur les grades, certifications, exportation et commandes.",
    contactTitle: "Parlez au service export.",
    contactLead: 'Partagez votre produit, volume, destination et grade. Nous repondons dans les 24 heures.',
    productsListTitle: 'Produits psyllium de Unjha, Gujarat.',
    productsListLead: '7 gammes de produits. Grades 85%–99%. Emballage export. COA et documents par commande.',
    insightsListTitle: 'Guides acheteurs et informations marche.',
    blogTitle: "Ressources d'approvisionnement, conformite et application du psyllium.",
    blogLead: 'Conseils techniques et achats pour les acheteurs de psyllium en gros dans le monde entier.',
  },
  de: {
    navProducts: 'Produkte',
    navRegions: 'Regionen',
    navIndustries: 'Branchen',
    navCompliance: 'Compliance',
    navInsights: 'Wissen',
    navFaq: 'FAQ',
    navContact: 'Kontakt',
    navBlog: 'Blog',
    navQuality: 'Qualitat',
    cta: 'Anfrage senden',
    homeTitle: 'Premium-Psyllium fuer globale Marken.',
    homeSub: 'Saubere, rueckverfolgbare Psyllium-Zutaten fuer Food, Supplements, Pharma und Tiernahrung.',
    specTitle: 'Anfrage senden',
    requestQuoteCta: 'Produktangebot anfordern',
    viewApplicationsCta: 'Anwendungen ansehen',
    supplyFitLabel: 'Liefereignung',
    requestQuoteBandTitle: 'Erhalten Sie Preise, Muster und Dokumente fuer dieses Produkt.',
    requestQuoteBandLead: 'Senden Sie Ihren Reinheitsgrad, Mesh, Verpackung, Bestimmungsort und monatliches Volumen. Wir antworten mit Verfuegbarkeit und naechsten Schritten.',
    complianceTitle: 'Dokumente, die Kaeufer vor dem Versand benoetigen.',
    complianceLead: 'Einkaufs- und QA-Teams koennen COA-Parameter, Chargenrueckverfolgbarkeit und Exportdokumente vor Bestellungen pruefen.',
    complianceChecklist: 'Kaeufer-Prueckliste',
    complianceChecklistLead: 'Fordern Sie aktuelle Dokumente nach Produkt, Charge und Zielmarkt an, bevor Sie eine Grossbestellung bestaetigen.',
    insightsReadMore: 'Angebot und Muster anfordern',
    faqTitle: 'Haeufig gestellte Fragen.',
    faqLead: 'Haeufige Fragen von Einkaufs- und QA-Teams zu Graden, Zertifizierungen, Export und Bestellungen.',
    contactTitle: 'Sprechen Sie mit dem Exportteam.',
    contactLead: 'Teilen Sie Ihr Produkt, Volumen, Ziel und Grad mit. Wir antworten innerhalb von 24 Stunden.',
    productsListTitle: 'Psyllium-Produkte aus Unjha, Gujarat.',
    productsListLead: '7 Produktlinien. Grade 85%–99%. Exportverpackung. COA und Dokumente pro Bestellung.',
    insightsListTitle: 'Kaeufer-Guides und Markteinblicke.',
    blogTitle: 'Ressourcen zu Psyllium-Beschaffung, Compliance und Anwendung.',
    blogLead: 'Technische und beschaffungsbezogene Orientierung fuer Bulk-Psyllium-Kaeufer weltweit.',
  }
};

export const products = [
  {
    slug: 'psyllium-seeds',
    name: 'Psyllium Seeds',
    label: 'Seed raw material',
    hero: 'Cleaned Plantago ovata seed for millers, ingredient processors, and feed buyers.',
    summary: 'Bulk psyllium seed supply from Gujarat and Rajasthan with origin records, lot traceability, and export packing.',
    grades: ['Standard (98% purity)', 'Sortex (99% purity)'],
    specs: ['Moisture: ≤8%', 'Germination: ≥85%', 'Seed count: ~600 per gram'],
    applications: ['Pharma', 'Food', 'Nutraceutical', 'Animal feed'],
    packaging: ['25kg', '50kg', '1000kg'],
    source: 'https://mantrapsyllium.com/psyllium-seed/',
    gradeslugs: ['standard', 'sortex'],
    specTable: [
      { parameter: 'Purity', values: { 'Standard': '≥98%', 'Sortex': '≥99%' } },
      { parameter: 'Moisture (% max)', values: { 'Standard': '8', 'Sortex': '8' } },
      { parameter: 'Germination (%)', values: { 'Standard': '≥85', 'Sortex': '≥88' } },
      { parameter: 'Seed Count (per gram)', values: { 'Standard': '~600', 'Sortex': '~600' } },
      { parameter: 'Total Ash (% max)', values: { 'Standard': '4.0', 'Sortex': '3.5' } },
      { parameter: 'Foreign Matter', values: { 'Standard': '≤2%', 'Sortex': '≤0.5%' } },
    ]
  },
  {
    slug: 'psyllium-husk',
    name: 'Psyllium Husk',
    label: 'Whole husk',
    hero: 'Bulk psyllium husk for supplement, food, pharma, and distributor buyers.',
    summary: 'Whole husk in 85%, 95%, 98%, and 99% grades with mesh, packing, COA, and export documents matched to buyer requirements.',
    grades: ['85% purity', '95% purity', '98% purity', '99% purity'],
    specs: ['Moisture: ≤12%', 'Swell volume: 30–50 ml/g by grade', 'Microbiology: E. coli & Salmonella absent'],
    applications: ['Pharma', 'Nutraceutical', 'Food and bakery', 'Animal feed'],
    packaging: ['10kg', '15kg', '25kg', '50kg', '1000kg'],
    source: 'https://mantrapsyllium.com/psyllium-husk/',
    gradeslugs: ['grade-85', 'grade-95', 'grade-98', 'grade-99'],
    specTable: [
      { parameter: 'Purity (Husk Content)', values: { '85%': '≥85%', '95%': '≥95%', '98%': '≥98%', '99%': '≥99%' } },
      { parameter: 'Swell Volume (ml/g min)', values: { '85%': '30', '95%': '40', '98%': '45', '99%': '50' } },
      { parameter: 'Moisture (% max)', values: { '85%': '12', '95%': '12', '98%': '12', '99%': '12' } },
      { parameter: 'Total Ash (% max)', values: { '85%': '4.0', '95%': '4.0', '98%': '3.5', '99%': '3.0' } },
      { parameter: 'Acid-insoluble Ash (% max)', values: { '85%': '1.0', '95%': '0.8', '98%': '0.5', '99%': '0.4' } },
      { parameter: 'Mesh Size (ASTM)', values: { '85%': '20–40', '95%': '20–60', '98%': '20–60', '99%': '20–60' } },
      { parameter: 'E. coli', values: { '85%': 'Absent', '95%': 'Absent', '98%': 'Absent', '99%': 'Absent' } },
      { parameter: 'Salmonella', values: { '85%': 'Absent', '95%': 'Absent', '98%': 'Absent', '99%': 'Absent' } },
      { parameter: 'Pharmacopoeia', values: { '85%': 'Food grade', '95%': 'Food / NF', '98%': 'USP / EP', '99%': 'USP / EP / IP' } },
    ]
  },
  {
    slug: 'psyllium-husk-powder',
    name: 'Psyllium Husk Powder',
    label: 'Fine powder',
    hero: 'Psyllium husk powder for capsules, bakery, drink mixes, blends, and functional foods.',
    summary: 'Fine-milled psyllium powder with buyer-selected purity, mesh, packaging, and shipment documentation.',
    grades: ['85% / 40–60 mesh', '95% / 80 mesh', '98% / 100 mesh', '99% / 200 mesh'],
    specs: ['Mesh: 40–200 ASTM (4 standard grades)', 'Swell volume: 32–55 ml/g by grade', 'Pharmacopoeia: USP / EP / IP at 99% / 200 mesh'],
    applications: ['Capsule filling', 'Gluten-free bakery', 'Health drinks & drink mixes', 'Cosmetics & personal care', 'Functional food blends'],
    packaging: ['10kg', '15kg', '25kg', '50kg'],
    source: 'https://mantrapsyllium.com/psyllium-husk-powder/',
    gradeslugs: ['grade-85-40m', 'grade-95-80m', 'grade-98-100m', 'grade-99-200m'],
    specTable: [
      { parameter: 'Purity (Husk %)',        values: { '85% / 40–60m': '≥85%',    '95% / 80m': '≥95%',    '98% / 100m': '≥98%',    '99% / 200m': '≥99%'    } },
      { parameter: 'Mesh (ASTM)',             values: { '85% / 40–60m': '40–60',   '95% / 80m': '80',      '98% / 100m': '100',     '99% / 200m': '200'     } },
      { parameter: 'Particle size (μm)',      values: { '85% / 40–60m': '250–425', '95% / 80m': '177',     '98% / 100m': '149',     '99% / 200m': '75'      } },
      { parameter: 'Swell Volume (ml/g min)', values: { '85% / 40–60m': '32',      '95% / 80m': '42',      '98% / 100m': '48',      '99% / 200m': '55'      } },
      { parameter: 'Moisture (% max)',        values: { '85% / 40–60m': '12',      '95% / 80m': '12',      '98% / 100m': '12',      '99% / 200m': '10'      } },
      { parameter: 'Total Ash (% max)',       values: { '85% / 40–60m': '4.0',     '95% / 80m': '4.0',     '98% / 100m': '3.5',     '99% / 200m': '3.0'     } },
      { parameter: 'Viscosity (1% sol, cP)',  values: { '85% / 40–60m': '—',       '95% / 80m': '~100',    '98% / 100m': '~250',    '99% / 200m': '~400'    } },
      { parameter: 'E. coli',                values: { '85% / 40–60m': 'Absent',  '95% / 80m': 'Absent',  '98% / 100m': 'Absent',  '99% / 200m': 'Absent'  } },
      { parameter: 'Salmonella',             values: { '85% / 40–60m': 'Absent',  '95% / 80m': 'Absent',  '98% / 100m': 'Absent',  '99% / 200m': 'Absent'  } },
      { parameter: 'Pharmacopoeia',          values: { '85% / 40–60m': 'Food grade', '95% / 80m': 'Food / NF', '98% / 100m': 'USP / EP', '99% / 200m': 'USP / EP / IP' } },
      { parameter: 'Typical use',            values: { '85% / 40–60m': 'Bakery, coarse capsule fill', '95% / 80m': 'Supplement, functional food', '98% / 100m': 'Pharma capsule, drink mix', '99% / 200m': 'USP/EP pharma, cosmetics' } },
    ]
  },
  {
    slug: 'psyllium-khakha-powder',
    name: 'Psyllium Khakha Powder',
    label: 'Feed by-product',
    hero: 'Fibre-rich khakha powder for animal feed, agriculture, and compound feed manufacturing.',
    summary: 'Cost-effective psyllium by-product with consistent crude fibre, moisture, and particle size for feed formulators and distributors.',
    grades: ['Feed Grade A (30–40% fibre)', 'Feed Grade B (25–30% fibre)'],
    specs: ['Crude fibre: 25–40%', 'Moisture: ≤12%', 'Crude protein: 8–12%'],
    applications: ['Cattle & ruminant feed', 'Poultry feed', 'Compound feed manufacturing', 'Soil amendment & agriculture'],
    packaging: ['25kg', '50kg', '1000kg'],
    source: 'https://mantrapsyllium.com/psyllium-khakha-powder/',
    gradeslugs: ['feed-grade-a', 'feed-grade-b'],
    specTable: [
      { parameter: 'Crude Fibre (%)',    values: { 'Feed Grade A': '30–40',        'Feed Grade B': '25–30'        } },
      { parameter: 'Crude Protein (%)',  values: { 'Feed Grade A': '8–12',         'Feed Grade B': '6–10'         } },
      { parameter: 'Moisture (% max)',   values: { 'Feed Grade A': '12',           'Feed Grade B': '12'           } },
      { parameter: 'Total Ash (% max)', values: { 'Feed Grade A': '8',            'Feed Grade B': '10'           } },
      { parameter: 'Mesh (ASTM)',        values: { 'Feed Grade A': 'Coarse (20–40)', 'Feed Grade B': 'Fine (40–60)' } },
      { parameter: 'E. coli',           values: { 'Feed Grade A': 'Absent',       'Feed Grade B': 'Absent'       } },
      { parameter: 'Salmonella',        values: { 'Feed Grade A': 'Absent',       'Feed Grade B': 'Absent'       } },
    ]
  },
  {
    slug: 'industrial-grade-psyllium',
    name: 'Industrial Grade Psyllium',
    label: 'Industrial applications',
    hero: 'Psyllium fibre and powder for paper, cosmetics, textile sizing, adhesives, and pet food manufacturing.',
    summary: 'Cost-effective psyllium-based fibre for industrial buyers needing consistent sieve profile, moisture spec, and bulk packing.',
    grades: ['Standard Industrial', 'Premium Industrial', 'Pet Food Grade'],
    specs: ['Mesh: 40–100 ASTM', 'Moisture: ≤12%', 'Crude fibre: 35–60%'],
    applications: ['Paper & packaging', 'Cosmetics & personal care', 'Textile sizing', 'Adhesives & binders', 'Pet food manufacturing'],
    packaging: ['25kg', '50kg', '1000kg'],
    source: '',
    gradeslugs: ['standard-industrial', 'premium-industrial', 'pet-food-grade'],
    specTable: [
      { parameter: 'Crude Fibre (%)',      values: { 'Standard Industrial': '40–55',               'Premium Industrial': '50–60',               'Pet Food Grade': '35–45'              } },
      { parameter: 'Moisture (% max)',     values: { 'Standard Industrial': '12',                  'Premium Industrial': '10',                  'Pet Food Grade': '10'                 } },
      { parameter: 'Total Ash (% max)',    values: { 'Standard Industrial': '10',                  'Premium Industrial': '8',                   'Pet Food Grade': '6'                  } },
      { parameter: 'Mesh (ASTM)',          values: { 'Standard Industrial': '40–60',               'Premium Industrial': '60–100',              'Pet Food Grade': '40–80'              } },
      { parameter: 'Heavy Metals',         values: { 'Standard Industrial': 'As per buyer spec',   'Premium Industrial': 'As per buyer spec',   'Pet Food Grade': 'Food-safe limits'   } },
      { parameter: 'E. coli',             values: { 'Standard Industrial': 'Absent',              'Premium Industrial': 'Absent',              'Pet Food Grade': 'Absent'             } },
      { parameter: 'Typical application', values: { 'Standard Industrial': 'Paper / textile / absorbents', 'Premium Industrial': 'Cosmetics / personal care', 'Pet Food Grade': 'Pet food binder / fibre source' } },
    ]
  },
  {
    slug: 'organic-psyllium',
    name: 'Organic Psyllium',
    label: 'Organic program',
    hero: 'Organic psyllium lots for buyers who need clean-label sourcing and certificate review.',
    summary: 'Organic husk and powder supply on request, with certificate review, packing details, and export documentation shared before purchase order.',
    grades: ['Organic husk (95%+)', 'Organic powder (95%+)', 'Buyer specification'],
    specs: ['NOP / EU-NOP certification available', 'Certificate review before order', 'Lot traceability per shipment'],
    applications: ['Organic foods', 'Supplements', 'Clean-label bakery'],
    packaging: ['10kg', '25kg', '50kg'],
    source: 'https://mantrapsyllium.com/',
    gradeslugs: ['nop-certified', 'eu-nop-certified'],
    specTable: [
      { parameter: 'Certification', values: { 'NOP': 'USDA NOP', 'EU-NOP': 'EU Organic' } },
      { parameter: 'Purity', values: { 'NOP': '≥95%', 'EU-NOP': '≥95%' } },
      { parameter: 'Moisture (% max)', values: { 'NOP': '12', 'EU-NOP': '12' } },
      { parameter: 'Swell Volume (ml/g min)', values: { 'NOP': '40', 'EU-NOP': '40' } },
      { parameter: 'Certificate Review', values: { 'NOP': 'Before PO', 'EU-NOP': 'Before PO' } },
    ]
  },
  {
    slug: 'psyllium-cattle-feed',
    name: 'Psyllium Cattle Feed',
    label: 'Animal nutrition',
    hero: 'Psyllium-based cattle feed for digestion, hydration, and dairy productivity programs.',
    summary: 'Bulk cattle feed supply for feed buyers, distributors, dairy farms, and farm supply channels.',
    grades: ['Sagar Gola type', 'Sagar Lali type', 'Buyer specification'],
    specs: ['Crude fibre: 25–40%', 'Crude protein: 3–6%', 'Moisture: ≤12%'],
    applications: ['Dairy cattle', 'Buffalo & ruminants', 'Poultry feed', 'Veterinary nutrition', 'Farm supply distributors'],
    packaging: ['25kg', '50kg', '1000kg'],
    source: 'https://mantrapsyllium.com/cattle-feed/',
    gradeslugs: ['sagar-gola', 'sagar-lali'],
    specTable: [
      { parameter: 'Format',                  values: { 'Sagar Gola': 'Compressed block',                     'Sagar Lali': 'Loose / granule'              } },
      { parameter: 'Psyllium Base',            values: { 'Sagar Gola': 'Husk + khakha + molasses + minerals',  'Sagar Lali': 'Khakha primary + grain mix'   } },
      { parameter: 'Crude Protein (% min)',    values: { 'Sagar Gola': '3–5',                                  'Sagar Lali': '4–6'                          } },
      { parameter: 'Crude Fibre (% min)',      values: { 'Sagar Gola': '25–35',                                'Sagar Lali': '30–40'                        } },
      { parameter: 'Ether Extract / Fat (%)', values: { 'Sagar Gola': '1.0–2.0',                              'Sagar Lali': '0.5–1.5'                      } },
      { parameter: 'Total Ash (% max)',        values: { 'Sagar Gola': '4–6',                                  'Sagar Lali': '5–7'                          } },
      { parameter: 'Moisture (% max)',         values: { 'Sagar Gola': '12',                                   'Sagar Lali': '12'                           } },
      { parameter: 'Metabolisable Energy',     values: { 'Sagar Gola': '~9–10 MJ/kg DM',                      'Sagar Lali': '~8–9 MJ/kg DM'               } },
      { parameter: 'Primary benefit',         values: { 'Sagar Gola': 'Digestive support + hydration',        'Sagar Lali': 'Bulk fibre supplement'        } },
      { parameter: 'Target animal',           values: { 'Sagar Gola': 'Dairy cattle, buffalo',                'Sagar Lali': 'Cattle, poultry, ruminants'  } },
    ]
  }
];

export const industries = [
  {
    slug: 'pharma-nutraceutical',
    name: 'Pharma & Nutraceutical',
    headline: 'Psyllium husk and powder for capsules, digestive health products, laxatives, and supplement blends.',
    products: ['psyllium-husk', 'psyllium-husk-powder'],
    proof: ['COA review', 'Microbiology checks', 'USP / EP parameter support']
  },
  {
    slug: 'food-beverage-bakery',
    name: 'Food, Beverage & Bakery',
    headline: 'Psyllium powder and husk for gluten-free bakery, cereals, drink mixes, and clean-label thickening.',
    products: ['psyllium-husk-powder', 'organic-psyllium'],
    proof: ['Mesh selection', 'Water binding performance', 'Packaging for food-grade handling']
  },
  {
    slug: 'animal-feed',
    name: 'Animal Feed',
    headline: 'Psyllium khakha powder and cattle feed for bulk feed buyers, distributors, and livestock nutrition channels.',
    products: ['psyllium-khakha-powder', 'psyllium-cattle-feed'],
    proof: ['Cost-effective bulk formats', 'Fibre-rich feed input', 'Distributor-ready packaging']
  },
  {
    slug: 'industrial-personal-care',
    name: 'Industrial & Personal Care',
    headline: 'Psyllium powder and khakha powder for thickening, binding, moisture retention, and absorbent applications.',
    products: ['psyllium-husk-powder', 'psyllium-khakha-powder', 'industrial-grade-psyllium'],
    proof: ['Binder use cases', 'Soil and absorbent applications', 'Custom spec capture']
  }
];

export const regions = [
  {
    slug: 'united-states',
    name: 'United States',
    headline: 'Bulk psyllium supply for US supplement, food, pharma, and distributor buyers.',
    focus: ['COA review', 'Microbiology checks', '25kg / 50kg import formats']
  },
  {
    slug: 'european-union',
    name: 'European Union',
    headline: 'Psyllium husk and powder supply for European food, supplement, organic, and distributor buyers.',
    focus: ['Organic documentation', 'Food safety review', 'DACH and France support']
  },
  {
    slug: 'canada',
    name: 'Canada',
    headline: 'Bulk psyllium supply for Canadian supplement, bakery, food, and distributor buyers.',
    focus: ['Food and supplement applications', 'Bulk import packaging', 'Traceability review']
  },
  {
    slug: 'middle-east',
    name: 'Middle East',
    headline: 'Bulk psyllium supply for Middle East distributors, food brands, and wellness companies.',
    focus: ['Halal documentation', 'Distributor pack sizes', 'Food and wellness applications']
  },
  {
    slug: 'australia',
    name: 'Australia',
    headline: 'Psyllium husk, powder, and feed supply for Australian wellness, food, and livestock buyers.',
    focus: ['Organic and clean-label lots', 'Powder and husk specs', 'Animal nutrition opportunities']
  }
];

export const insights = [
  {
    slug: 'psyllium-khakha-animal-feed-demand',
    title: 'Why psyllium khakha powder is gaining demand in animal feed',
    date: '2026-05-14',
    audience: 'Feed buyers',
    summary: 'Position khakha powder as a fiber-rich, cost-effective input for digestive support and feed manufacturing.',
    body: [
      'Psyllium khakha is the by-product of husk milling — the seed coat residue left after the husk is separated. It carries a significant portion of the mucilage and dietary fibre from the original seed, making it a functional feed ingredient rather than simple waste.',
      'For feed formulators, khakha powder offers two advantages: fibre density and cost. Compared to whole husk, khakha is priced lower while still contributing soluble fibre that supports gut motility and water retention in livestock. Poultry, pig, and ruminant feed applications have all been reported by buyers across South Asia and the Middle East.',
      'Sourcing khakha in bulk requires knowing the lot origin and moisture specification. Feed-grade khakha should be below 12% moisture with low foreign matter and consistent granule size for blending. We supply in 25 kg, 50 kg, and 1,000 kg jumbo bags with origin documents and packing list per shipment.'
    ]
  },
  {
    slug: 'psyllium-cattle-feed-digestion',
    title: 'Psyllium in cattle feed: digestion, hydration, and productivity',
    date: '2026-04-15',
    audience: 'Dairy and livestock',
    summary: 'A buyer-facing explainer for cattle feed distributors and farm supply channels.',
    body: [
      'Psyllium husk and khakha powder are both used in cattle nutrition programs, primarily to support digestive regularity and hydration retention. The mucilage content in psyllium absorbs water and forms a gel-like mass in the gut, slowing transit and improving nutrient uptake — a benefit particularly noted in high-producing dairy cows under heat stress.',
      'Traditional cattle feed programs in Gujarat use psyllium-based "Sagar Gola" and "Sagar Lali" formulations — compressed feed blocks that combine psyllium with molasses and mineral mixes. These formats are designed for ease of feeding and have a long history in Gujarat and Rajasthan dairy farming. We supply both the raw ingredient and the formulated block on request.',
      'For distributors supplying dairy farms, volume and packaging flexibility matter most. We offer 25 kg bags for smaller farm accounts and 1,000 kg jumbo bags for larger operations and resellers. Lead time from order to dispatch is 14–21 days, with export documentation available for cross-border shipments.'
    ]
  },
  {
    slug: 'husk-vs-powder-buyer-guide',
    title: 'Whole husk vs husk powder: choosing the right format',
    date: '2026-04-08',
    audience: 'Food and supplement buyers',
    summary: 'A practical comparison for procurement teams choosing mesh, purity, and application fit.',
    body: [
      'Whole psyllium husk and husk powder come from the same seed but behave differently in formulation. Whole husk retains its fibrous texture and is commonly used in capsule fills, laxative sachets, and high-fibre cereals where visible fibre is expected. Powder is milled to 40–200 mesh and disperses more uniformly in drink mixes, bakery blends, and functional food matrices.',
      'Purity grade determines mucilage content, which directly affects water absorption performance. At 99% purity, swell volume typically exceeds 50 ml/g — the benchmark for pharmaceutical laxative applications under USP and EP monographs. At 95%, swell volume is lower but still suitable for supplements and food fibre enrichment. Buyers should request COA test data showing swell volume, moisture, ash, and microbiology before committing to a grade.',
      'Mesh selection is the most practical filter. For capsule filling, 40–60 mesh husk works well with standard filling equipment. For drink mixes where rapid dispersion matters, 100–200 mesh powder minimises clumping. For gluten-free bakery, 80 mesh powder provides the right water-binding profile without altering crumb texture significantly. Share your application and equipment type — we will recommend the appropriate grade and mesh and include a sample COA for review.'
    ]
  }
];

export const faq = [
  {
    q: 'What grades of psyllium husk do you supply?',
    a: 'We supply 85%, 95%, 98%, and 99% purity grades. Grade refers to husk content — 99% grade has the highest mucilage content and swell volume (≥50 ml/g), suitable for pharmaceutical laxative monographs (USP/EP/IP). Share your target application and we will recommend the appropriate grade.'
  },
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'MOQ is 500 kg for standard grades in 25 kg bags. Jumbo bags (1,000 kg) are available for orders above 1 MT. For organic lots, MOQ may vary based on current certified stock. Contact us with your volume and we will confirm availability.'
  },
  {
    q: 'Do you supply organic psyllium?',
    a: 'Yes. We supply organic psyllium husk and powder on request. Organic lots are available with certificate review before purchase order. Buyers must share their destination market and certification scope required — NOP for USA, EU-NOP for Europe.'
  },
  {
    q: 'What export documents do you provide?',
    a: 'Standard export set includes: commercial invoice, packing list, COA, certificate of origin, phytosanitary certificate, and fumigation certificate where required. Halal and Kosher certificates can be arranged on request. All documents are shared before shipment.'
  },
  {
    q: 'What is your annual production capacity?',
    a: 'Our Unjha facility has 2,000 MT annual processing capacity across all product lines. We can typically confirm lead time within 48 hours of receiving a confirmed spec sheet and purchase intent.'
  },
  {
    q: 'Which ports do you ship from?',
    a: 'We ship FOB Mundra, FOB Kandla, and FOB JNPT (Nhava Sheva). CIF pricing is available on request. Mundra is our primary port for most export orders due to frequency of vessel calls to Europe, the US, and the Middle East.'
  },
  {
    q: 'What mesh sizes are available for psyllium husk powder?',
    a: 'Husk powder is available in 40, 60, 80, 100, and 200 mesh (ASTM). Mesh selection depends on your application: 40–60 mesh for capsule filling, 80–100 mesh for drink mixes and functional food, 200 mesh for cosmetic or personal care applications.'
  },
  {
    q: 'Can I get a sample before placing a bulk order?',
    a: 'Yes. We provide 100–500 g samples with COA on request. Share your target grade, mesh, and shipping address. Sample lead time is 3–5 business days from Unjha.'
  },
  {
    q: 'What certifications does your facility hold?',
    a: 'Our facility is FSSAI registered (IEC 0124007841). ISO 22000/HACCP, Halal, and Kosher certifications are in progress. Contact us for current certificate status for your specific destination and buyer audit requirements.'
  },
  {
    q: 'How is psyllium husk different from psyllium husk powder?',
    a: 'Both come from the same Plantago ovata seed but differ in form and application. Whole husk retains its fibrous texture and is used in capsule fills, laxative sachets, and high-fibre cereals. Powder is milled to a fine mesh and disperses uniformly in drink mixes, bakery blends, and functional foods. Swell volume is slightly higher in powder due to greater surface area exposure.'
  }
];

export const blogPosts = [
  {
    slug: 'psyllium-husk-99-purity-supplier-india',
    title: 'Psyllium Husk 99% Purity: Supplier Guide for Pharma Buyers',
    category: 'Product',
    date: '2026-05-10',
    summary: 'What 99% purity means, which pharmacopoeias it meets, and how to source it from Gujarat.',
    body: [
      'Psyllium husk at 99% purity represents the pharmaceutical grade of the product — the highest husk content available from Indian processing facilities. At this grade, the husk content (the seed coat of Plantago ovata) is at least 99% by weight, with a minimum swell volume of 50 ml/g. This swell volume is the primary functional specification for laxative monographs under USP, European Pharmacopoeia (EP), and Indian Pharmacopoeia (IP).',
      'For pharmaceutical buyers, 99% grade must be accompanied by a full COA showing swell volume, moisture (≤12%), total ash (≤3%), acid-insoluble ash (≤0.4%), heavy metals (Lead ≤2 ppm, Arsenic ≤1 ppm), and microbiology (E. coli absent, Salmonella absent, TPC ≤10,000 cfu/g). These parameters map directly to the Plantago ovata husk monographs in USP and EP. Buyers should request test reports from an NABL-accredited laboratory in India.',
      'Sourcing 99% grade from Gujarat requires confirming that the processing facility has the milling and separation capacity to consistently achieve this purity. Unjha district in Gujarat is the primary psyllium processing hub in India, accounting for over 80% of global supply. We supply 99% grade husk in 10 kg, 25 kg, and 50 kg food-grade bags with full documentation. Share your pharmacopoeia requirement and destination market — we will provide a sample COA for review before any purchase order.'
    ]
  },
  {
    slug: 'psyllium-export-india-fob-mundra',
    title: 'Exporting Psyllium from India: FOB Mundra vs Kandla vs JNPT',
    category: 'Logistics',
    date: '2026-05-05',
    summary: 'Port comparison for bulk psyllium buyers — freight, transit times, and vessel frequency.',
    body: [
      'India exports psyllium through three primary ports: Mundra (Gujarat), Kandla (Gujarat), and JNPT/Nhava Sheva (Maharashtra). For psyllium buyers, port selection affects freight cost, transit time to destination, and container availability. Most Unjha-based processors, including RM Psyllium, use Mundra as their primary port due to its proximity (approximately 220 km from Unjha) and high vessel frequency to Europe, the US East Coast, the Middle East, and Australia.',
      'Mundra Port (MUND) is operated by Adani Ports and handles the highest volume of container traffic in India. Vessel frequency to major destination ports (Rotterdam, Felixstowe, New York, Jeddah, Colombo) is typically 2–4 sailings per week. Transit time to Rotterdam is approximately 20–23 days; to New York approximately 25–28 days; to Jeddah approximately 8–10 days. Kandla (INKLA) is an alternative with slightly lower port charges but less frequent services. JNPT is used primarily for buyers in southern India or where specific shipping lines offer better rates.',
      'For CIF orders, we select the port based on your destination and the shipping line with the best rate at the time of booking. For FOB orders, you nominate the freight forwarder and we coordinate with them directly. Export documentation — commercial invoice, packing list, COA, certificate of origin, phytosanitary certificate — is prepared in Unjha and submitted 3–5 days before vessel loading. Share your destination port and we will provide an indicative freight quote alongside the product price.'
    ]
  },
  {
    slug: 'psyllium-husk-usp-ep-pharmacopoeia',
    title: 'USP vs EP vs IP: Psyllium Husk Pharmacopoeia Standards Explained',
    category: 'Compliance',
    date: '2026-04-28',
    summary: 'How swell volume, ash, and purity standards differ across US, European, and Indian pharmacopoeias.',
    body: [
      'Psyllium husk is monographed in three major pharmacopoeias: the United States Pharmacopeia (USP), the European Pharmacopoeia (EP), and the Indian Pharmacopoeia (IP). While all three describe Plantago ovata husk, the specific test parameters and acceptance criteria differ in ways that matter for buyers importing psyllium for pharmaceutical use. Understanding these differences helps procurement teams specify the correct grade and request the right COA parameters.',
      'The USP monograph for Psyllium Husk requires a minimum swell volume of 40 ml/g (some editions specify higher for specific dosage forms), moisture not more than 12%, and total ash not more than 4%. The EP monograph (Ispaghula Husk) specifies a minimum swell index of 40 and has specific identification tests including microscopy and chemical reactions. The IP monograph is largely aligned with USP but may have minor differences in test methodology. For export to the US, buyers should request a COA with parameters cross-referenced to the current USP edition.',
      'For export to Europe, the EP monograph term is "Ispaghula Husk" — which is the same product (Plantago ovata seed husk). European buyers typically request a COA annotated against EP parameters including swell index, foreign matter, microbiology, and pesticide residue limits under EU regulations. We supply with COA annotated to buyer-specified pharmacopoeia on request. Share your destination market and pharmacopoeia edition and we will prepare the COA accordingly.'
    ]
  },
  {
    slug: 'psyllium-seed-supplier-gujarat-rajasthan',
    title: 'Psyllium Seed Supply from Gujarat and Rajasthan',
    category: 'Sourcing',
    date: '2026-04-20',
    summary: 'Crop origins, sortex vs machine-clean grades, and bulk seed sourcing for millers and processors.',
    body: [
      'Plantago ovata (psyllium) seeds are cultivated primarily in Gujarat and Rajasthan, with Mehsana, Banaskantha, and Kutch districts in Gujarat and Barmer, Jalore, and Jodhpur districts in Rajasthan being the main growing areas. The crop is a rabi (winter) crop, sown in October–November and harvested in February–March. Annual production in India is estimated at 100,000–150,000 MT of seed, of which approximately 85% is exported in processed form (husk and powder).',
      'Seeds are available in two main grades based on cleaning method. Machine-clean (standard) grade is cleaned using air separators and gravity tables to remove light particles and foreign matter — purity typically 98% or above. Sortex grade uses optical sorting to remove discolored seeds and foreign matter, achieving 99%+ purity with significantly lower foreign matter (≤0.5%). Sortex grade commands a price premium of 8–12% but is preferred by millers who need consistent husk yield and by pharma-grade husk processors.',
      'Seed specifications buyers should confirm before purchasing include: purity (98% or 99%), moisture (≤8%), germination percentage (≥85% for seed-quality lots; not required for milling use), and lot origin documentation. We supply seeds in 25 kg, 50 kg, and 1,000 kg jumbo bags. Origin documentation, lot traceability, and a sample for pre-shipment testing are provided with each order. Share your intended use (milling, extraction, or feed) and we will recommend the appropriate grade.'
    ]
  },
  {
    slug: 'organic-psyllium-nop-eu-certification',
    title: 'Organic Psyllium: NOP vs EU-NOP Certification for Export',
    category: 'Compliance',
    date: '2026-04-15',
    summary: 'Certificate scope, lot traceability requirements, and how to request organic documentation from Indian exporters.',
    body: [
      'Organic psyllium from India is certified under two main frameworks: USDA National Organic Program (NOP) for the US market and EU Organic (formerly EU-NOP equivalence) for the European market. Indian organic processors are certified by accredited certification bodies — including Control Union, ECOCERT India, Lacon, and SGS — under these frameworks. Buyers importing organic psyllium must confirm that the certificate covers the specific product (husk, husk powder, or seed), the lot dates, and the destination market.',
      'NOP certification for psyllium requires that the seed source, growing practices (no synthetic pesticides or fertilisers), processing facility, and handling chain all be certified organic. The certificate of conformity or transaction certificate (TC) issued per shipment is the document that links the specific lot to the organic certification. For US imports, the TC is issued by the certifier and must accompany the shipment or be provided in the documentation package. EU buyers require a Certificate of Inspection (COI) under EU Regulation 2018/848.',
      'At RM Psyllium, organic lots are supplied on request based on current certified stock availability. We provide the organic certificate copy, lot-level origin records, and transaction certificate documentation before purchase order confirmation. Organic psyllium commands a 25–40% price premium over conventional depending on grade, certification scope, and market timing. If you need organic documentation for a specific destination market and certification body, share your requirements and we will confirm current availability and pricing.'
    ]
  },
  {
    slug: 'psyllium-husk-gluten-free-bakery',
    title: 'Psyllium Husk in Gluten-Free Bakery: Grade and Mesh Selection',
    category: 'Application',
    date: '2026-04-08',
    summary: 'How mesh size and purity affect water binding, crumb texture, and gluten-free bread performance.',
    body: [
      'Psyllium husk is used in gluten-free bakery as a structural and water-binding agent — it replaces some of the gluten network functions that allow bread dough to trap gas and hold shape during baking. The mucilage in psyllium forms a gel when hydrated, providing viscosity and elasticity to gluten-free doughs made from rice flour, corn starch, tapioca, and similar bases. The result is improved crumb structure, moisture retention, and shelf life compared to psyllium-free gluten-free formulations.',
      'For bakery applications, 95% or 98% purity grade in 80–100 mesh is the most commonly specified. Finer mesh (100+) disperses more quickly and produces a smoother crumb. Coarser mesh (40–60) may be visible in the finished product and can create a slightly grainy texture — acceptable in some artisan products but not in industrial bakery. 85% grade is used in cost-sensitive formulations where slightly lower water-binding performance is acceptable.',
      'Typical usage rates in gluten-free bread formulations are 1–3% of total flour weight. Above 3%, psyllium can produce a dense, gummy crumb due to over-hydration. Buyers should request a 100–200 g sample with COA and run bench-top formulation tests before committing to a bulk order. We can provide product data on swell volume and moisture for each grade to support formulation work. Share your target formulation, batch size, and application and we will recommend the appropriate grade and mesh combination.'
    ]
  },
  {
    slug: 'psyllium-supplement-capsule-filling',
    title: 'Psyllium for Capsule Filling: Mesh, Flow, and Grade Guide',
    category: 'Application',
    date: '2026-03-30',
    summary: 'Practical guide for supplement manufacturers on selecting the right husk mesh for capsule filling equipment.',
    body: [
      'Psyllium husk is one of the most commonly encapsulated dietary fibres, used in laxative and digestive health supplements sold in gelatin and vegetarian (HPMC) capsules. The key challenge in capsule filling is flowability — psyllium husk is fibrous and hygroscopic, which means it can clump and bridge in filling equipment hoppers, causing inconsistent fill weights. Mesh selection and moisture control are the two primary variables that determine filling performance.',
      'For standard capsule filling equipment (dosator or tamping pin type), 40–60 mesh whole husk is the preferred specification. At this mesh, particles are large enough to flow without bridging but small enough to pack uniformly in the capsule body. Below 40 mesh (coarser), husk may not pack efficiently, leading to low fill weights. Above 60 mesh (finer), the powder becomes more hygroscopic and tends to clump. For powder-in-capsule formats using husk powder rather than whole husk, 60–80 mesh is standard.',
      'Moisture control is critical: husk above 10% moisture will clump in the hopper and cause fill weight variation. Suppliers should provide a COA with moisture tested close to the shipment date. We test moisture at dispatch and can provide moisture-controlled packing (sealed HDPE liner with desiccant) on request for sensitive shipments. Share your capsule size, target fill weight, and filling equipment type — we will recommend the grade, mesh, and moisture specification that matches your production setup.'
    ]
  },
  {
    slug: 'psyllium-halal-kosher-documentation',
    title: 'Halal and Kosher Psyllium: What Documents Buyers Need',
    category: 'Compliance',
    date: '2026-03-22',
    summary: 'Which markets require Halal or Kosher certificates, what the certification process covers, and current status for RM Psyllium.',
    body: [
      'Psyllium husk, being a plant-derived product with no animal inputs in processing, is generally considered acceptable under both Halal and Kosher dietary requirements. However, many buyers — particularly in the Middle East, Southeast Asia, and for US kosher supplement markets — require formal certification from a recognized body. Halal certification for psyllium confirms that processing equipment, facility practices, and any processing aids (anti-caking agents, flow agents if used) meet Islamic dietary standards. Kosher certification confirms compliance with Jewish dietary laws under rabbinical supervision.',
      'For Halal certification, recognized bodies in India include Halal India, Jamiat Ulama-i-Hind Halal Trust, and international bodies such as IFANCA. The certificate covers the facility, the specific products, and the certification period (typically one year). A Halal certificate copy per shipment, along with a lot-level endorsement, is what most Middle East import authorities and food safety agencies require. For Kosher certification, bodies such as OU (Orthodox Union) or KSA are recognized in the US and internationally.',
      'At RM Psyllium, Halal and Kosher certifications are currently in progress. In the interim, we can provide a letter of declaration confirming that psyllium husk is a pure plant product with no animal-derived inputs, which is accepted by some buyers pending formal certification. Contact us with your buyer or import authority requirement and we will advise on the current certification status and available documentation. Expected Halal certification completion: Q3 2026.'
    ]
  },
  {
    slug: 'bulk-psyllium-import-usa-fda',
    title: 'Importing Psyllium into the USA: FDA, Labelling, and COA Requirements',
    category: 'Markets',
    date: '2026-03-15',
    summary: 'What US supplement and food brands need before importing bulk psyllium from India.',
    body: [
      'Bulk psyllium husk imported into the United States falls under FDA jurisdiction as either a dietary supplement ingredient or a food ingredient, depending on the intended use. The FDA does not require pre-approval for bulk psyllium imports, but shipments are subject to FDA import screening, and facilities exporting to the US are subject to FSMA (Food Safety Modernization Act) supplier verification requirements. US importers are responsible for verifying that their foreign suppliers meet FSMA preventive controls standards.',
      'For dietary supplement applications, psyllium husk must meet USP monograph specifications (or buyer-specified in-house specifications). The COA provided with each shipment should include: identification (botanical), swell volume, moisture, ash, microbiology (TPC, yeast, mold, E. coli, Salmonella), and heavy metals (Lead, Arsenic, Cadmium, Mercury). For food applications, psyllium husk has GRAS (Generally Recognized as Safe) status in the US for use as a source of soluble dietary fibre in specific food categories.',
      'FDA Prior Notice is required for all food and dietary supplement shipments entering the US. This is submitted electronically through the FDA Prior Notice System Interface (PNSI) before the shipment arrives. US importers typically handle this, but we can provide all required product details (product name, description, HS code, manufacturer details, country of origin) for the prior notice filing. We ship to US ports via Mundra or JNPT, with typical transit time of 25–30 days to East Coast ports. Contact us with your import agent details and we will coordinate documentation accordingly.'
    ]
  },
  {
    slug: 'psyllium-khakha-animal-feed-specifications',
    title: 'Psyllium Khakha Powder for Animal Feed: Specifications and Use Cases',
    category: 'Product',
    date: '2026-03-08',
    summary: 'Crude fibre content, moisture specs, and feed formulation use cases for khakha powder buyers.',
    body: [
      'Psyllium khakha powder is the by-product remaining after psyllium husk is milled and separated from the seed. It consists primarily of the inner seed coat and residual endosperm, and contains a significant amount of mucilage-derived soluble fibre — typically 30–40% crude fibre by weight. This fibre content, combined with 8–12% crude protein and a low-cost price point relative to whole husk, makes it a useful feed ingredient for ruminant and poultry feed formulators.',
      'Feed-grade khakha is specified primarily on moisture (≤12%), crude fibre (30–40%), crude protein (8–12%), and total ash (≤8%). Foreign matter and sand content should be confirmed — excess sand or silica can elevate ash and reduce digestibility. Mesh or particle size affects blending behavior in compound feed manufacturing: coarser particles (20–40 mesh) are standard for most feed applications, while finer mesh (60–80) is used in pellet formulations or where homogeneity in the premix is critical.',
      'Use cases for khakha in animal feed include: cattle and buffalo feed (digestive support, hydration retention), poultry feed as a fibre source, and fish and aquaculture feed as a natural binder. We supply khakha in 25 kg, 50 kg, and 1,000 kg jumbo bags. Feed-grade lots are supplied with a basic analysis COA (moisture, crude fibre, crude protein, ash) and packing list. For buyers requiring more detailed analysis (heavy metals, mycotoxins, pesticide residues), additional testing can be arranged at buyer cost. Share your formulation target and we will confirm current lot availability and pricing.'
    ]
  }
];

export function getLanguage(code?: string): LanguageCode {
  return languages.some((language) => language.code === code) ? (code as LanguageCode) : 'en';
}

export function productBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function industryProducts(slugs: string[]) {
  return products.filter((product) => slugs.includes(product.slug));
}

export function blogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
