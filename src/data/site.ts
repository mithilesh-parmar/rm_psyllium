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
  cta: string;
  homeTitle: string;
  homeSub: string;
  specTitle: string;
}> = {
  en: {
    navProducts: 'Products',
    navRegions: 'Regions',
    navIndustries: 'Industries',
    navCompliance: 'Compliance',
    navInsights: 'Insights',
    cta: 'Request Quote',
    homeTitle: 'Premium psyllium supply for global brands.',
    homeSub: 'Clean, traceable psyllium ingredients for food, nutraceutical, pharma, and animal nutrition buyers.',
    specTitle: 'Request a quote'
  },
  es: {
    navProducts: 'Productos',
    navRegions: 'Regiones',
    navIndustries: 'Industrias',
    navCompliance: 'Cumplimiento',
    navInsights: 'Guias',
    cta: 'Solicitar cotizacion',
    homeTitle: 'Psyllium premium para marcas globales.',
    homeSub: 'Ingredientes de psyllium limpios y trazables para alimentos, suplementos, pharma y nutricion animal.',
    specTitle: 'Solicitar cotizacion'
  },
  fr: {
    navProducts: 'Produits',
    navRegions: 'Regions',
    navIndustries: 'Industries',
    navCompliance: 'Conformite',
    navInsights: 'Guides',
    cta: 'Demander un devis',
    homeTitle: 'Psyllium premium pour marques mondiales.',
    homeSub: 'Ingredients psyllium propres et tracables pour alimentation, complements, pharma et nutrition animale.',
    specTitle: 'Demander un devis'
  },
  de: {
    navProducts: 'Produkte',
    navRegions: 'Regionen',
    navIndustries: 'Branchen',
    navCompliance: 'Compliance',
    navInsights: 'Wissen',
    cta: 'Anfrage senden',
    homeTitle: 'Premium-Psyllium fuer globale Marken.',
    homeSub: 'Saubere, rueckverfolgbare Psyllium-Zutaten fuer Food, Supplements, Pharma und Tiernahrung.',
    specTitle: 'Anfrage senden'
  }
};

export const products = [
  {
    slug: 'psyllium-seeds',
    name: 'Psyllium Seeds',
    label: 'Seed raw material',
    hero: 'Farm-origin Plantago ovata seed for processors and ingredient buyers.',
    summary: 'Seed supply for husk extraction, food ingredients, nutraceutical blends, and animal nutrition.',
    grades: ['Cleaned seed', 'Sortex grade', 'Buyer specification'],
    specs: ['Origin: Gujarat / Rajasthan supply chain', 'Use: milling, extraction, fiber blends', 'Documentation: origin, lot traceability'],
    applications: ['Pharma', 'Food', 'Nutraceutical', 'Animal feed'],
    packaging: ['25kg', '50kg', '1000kg'],
    source: 'https://mantrapsyllium.com/psyllium-seed/'
  },
  {
    slug: 'psyllium-husk',
    name: 'Psyllium Husk',
    label: 'Whole husk',
    hero: 'Export-grade whole husk for fiber supplements, food, and pharma buyers.',
    summary: 'Whole husk positioned for high water absorption, soluble fiber performance, and buyer-specific purity.',
    grades: ['85%', '95%', '98%', '99%'],
    specs: ['Moisture: 12% max', 'Swell volume: 35-50 ml/gm min', 'Micro: E. coli and salmonella absent'],
    applications: ['Pharma', 'Nutraceutical', 'Food and bakery', 'Animal feed'],
    packaging: ['10kg', '15kg', '25kg', '50kg', '1000kg'],
    source: 'https://mantrapsyllium.com/psyllium-husk/'
  },
  {
    slug: 'psyllium-husk-powder',
    name: 'Psyllium Husk Powder',
    label: 'Fine powder',
    hero: 'Fine-milled psyllium powder for capsules, bakery systems, blends, and functional foods.',
    summary: 'Powder supply with mesh flexibility for supplement, food, nutraceutical, cosmetic, and industrial buyers.',
    grades: ['85%', '95%', '98%', '99%'],
    specs: ['Mesh: 20-100 ASTM', 'Moisture: 12% max', 'Swell volume: 40-55 ml/gm min'],
    applications: ['Capsules', 'Gluten-free bakery', 'Health drinks', 'Personal care'],
    packaging: ['10kg', '15kg', '25kg', '50kg'],
    source: 'https://mantrapsyllium.com/psyllium-husk-powder/'
  },
  {
    slug: 'psyllium-khakha-powder',
    name: 'Psyllium Khakha Powder',
    label: 'Industrial by-product',
    hero: 'Fiber-rich khakha powder for feed, agriculture, absorbents, and industrial binders.',
    summary: 'Cost-effective psyllium by-product for animal feed, soil conditioning, biodegradable products, and absorbent use cases.',
    grades: ['Feed grade', 'Industrial grade', 'Buyer specification'],
    specs: ['Use: feed and industrial', 'Format: powder', 'Positioning: natural absorbent and binder'],
    applications: ['Animal feed', 'Agriculture', 'Biodegradable products', 'Industrial absorbents'],
    packaging: ['25kg', '50kg', '1000kg'],
    source: 'https://mantrapsyllium.com/psyllium-khakha-powder/'
  },
  {
    slug: 'organic-psyllium',
    name: 'Organic Psyllium',
    label: 'Organic program',
    hero: 'Organic psyllium program for buyers who need certified sourcing and clean-label positioning.',
    summary: 'A dedicated route for organic, clean-label, kosher, halal, and non-GMO procurement conversations.',
    grades: ['Organic husk', 'Organic powder', 'Buyer specification'],
    specs: ['Certification proof required before launch', 'Clean-label buyer positioning', 'Organic documentation workflow'],
    applications: ['Organic foods', 'Supplements', 'Clean-label bakery'],
    packaging: ['10kg', '25kg', '50kg'],
    source: 'https://mantrapsyllium.com/'
  },
  {
    slug: 'psyllium-cattle-feed',
    name: 'Psyllium Cattle Feed',
    label: 'Animal nutrition',
    hero: 'Psyllium-based cattle feed for digestion, hydration, and dairy productivity programs.',
    summary: 'Animal nutrition microsite for cattle feed buyers, distributors, and farm supply channels.',
    grades: ['Sagar Gola type', 'Sagar Lali type', 'Buyer specification'],
    specs: ['Use: digestion support', 'Positioning: plant-based feed input', 'Channel: farms and distributors'],
    applications: ['Cattle feed', 'Veterinary nutrition', 'Dairy support'],
    packaging: ['25kg', '50kg', '1000kg'],
    source: 'https://mantrapsyllium.com/cattle-feed/'
  }
];

export const industries = [
  {
    slug: 'pharma-nutraceutical',
    name: 'Pharma & Nutraceutical',
    headline: 'Fiber inputs for capsules, laxatives, digestive health, and supplement blends.',
    products: ['psyllium-husk', 'psyllium-husk-powder'],
    proof: ['COA-led review', 'Microbiological controls', 'USP/BP/EP-ready discussion']
  },
  {
    slug: 'food-beverage-bakery',
    name: 'Food, Beverage & Bakery',
    headline: 'Functional fiber for gluten-free bakery, cereals, drinks, and clean-label thickening.',
    products: ['psyllium-husk-powder', 'organic-psyllium'],
    proof: ['Mesh selection', 'Water binding performance', 'Packaging for food-grade handling']
  },
  {
    slug: 'animal-feed',
    name: 'Animal Feed',
    headline: 'Digestive support inputs for cattle, pet, and livestock nutrition channels.',
    products: ['psyllium-khakha-powder', 'psyllium-cattle-feed'],
    proof: ['Cost-effective bulk formats', 'Fiber-rich positioning', 'Distributor-ready packaging']
  },
  {
    slug: 'industrial-personal-care',
    name: 'Industrial & Personal Care',
    headline: 'Natural thickening, binding, moisture retention, and absorbent use cases.',
    products: ['psyllium-husk-powder', 'psyllium-khakha-powder'],
    proof: ['Binder use cases', 'Soil and absorbent applications', 'Custom spec capture']
  }
];

export const regions = [
  {
    slug: 'united-states',
    name: 'United States',
    headline: 'FDA-aware supply conversations for supplement, food, and distributor buyers.',
    focus: ['COA review', 'Microbiology checks', '25kg / 50kg import formats']
  },
  {
    slug: 'european-union',
    name: 'European Union',
    headline: 'Organic, food safety, and allergen-ready sourcing for European buyers.',
    focus: ['Organic documentation', 'Food safety review', 'DACH and France support']
  },
  {
    slug: 'canada',
    name: 'Canada',
    headline: 'Supplement, bakery, and distributor supply options for Canadian buyers.',
    focus: ['Food and supplement applications', 'Bulk import packaging', 'Traceability review']
  },
  {
    slug: 'middle-east',
    name: 'Middle East',
    headline: 'Halal-led procurement for distributors, food brands, and wellness companies.',
    focus: ['Halal documentation', 'Distributor pack sizes', 'Food and wellness applications']
  },
  {
    slug: 'australia',
    name: 'Australia',
    headline: 'Clean-label psyllium supply for wellness, food, and livestock nutrition channels.',
    focus: ['Organic and clean-label positioning', 'Powder and husk specs', 'Animal nutrition opportunities']
  }
];

export const insights = [
  {
    slug: 'psyllium-khakha-animal-feed-demand',
    title: 'Why psyllium khakha powder is gaining demand in animal feed',
    date: '2026-05-14',
    audience: 'Feed buyers',
    summary: 'Position khakha powder as a fiber-rich, cost-effective input for digestive support and feed manufacturing.'
  },
  {
    slug: 'psyllium-cattle-feed-digestion',
    title: 'Psyllium in cattle feed: digestion, hydration, and productivity',
    date: '2026-04-15',
    audience: 'Dairy and livestock',
    summary: 'A buyer-facing explainer for cattle feed distributors and farm supply channels.'
  },
  {
    slug: 'husk-vs-powder-buyer-guide',
    title: 'Whole husk vs husk powder: choosing the right format',
    date: '2026-04-08',
    audience: 'Food and supplement buyers',
    summary: 'A practical comparison for procurement teams choosing mesh, purity, and application fit.'
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
