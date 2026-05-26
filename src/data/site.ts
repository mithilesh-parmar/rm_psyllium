import esTrans from './translations/es.json';
import deTrans from './translations/de.json';
import frTrans from './translations/fr.json';
import arTrans from './translations/ar.json';
import zhTrans from './translations/zh.json';
import ptTrans from './translations/pt.json';
import itTrans from './translations/it.json';
import nlTrans from './translations/nl.json';
import ruTrans from './translations/ru.json';

export const languages = [
  { code: 'en', label: 'English', market: 'Global' },
  { code: 'ar', label: 'العربية', market: 'MENA' },
  { code: 'zh', label: '中文', market: 'China' },
  { code: 'nl', label: 'Nederlands', market: 'Benelux' },
  { code: 'fr', label: 'Francais', market: 'EU' },
  { code: 'de', label: 'Deutsch', market: 'DACH' },
  { code: 'it', label: 'Italiano', market: 'Italy' },
  { code: 'pt', label: 'Português', market: 'Brazil' },
  { code: 'ru', label: 'Русский', market: 'CIS' },
  { code: 'es', label: 'Espanol', market: 'LATAM' },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];

export const copy: Record<LanguageCode, {
  // Nav
  navProducts: string; navRegions: string; navIndustries: string;
  navCompliance: string; navInsights: string; navFaq: string;
  navContact: string; navBlog: string; navQuality: string;
  cta: string;
  // Page meta
  homeTitle: string; homeSub: string;
  specTitle: string; requestQuoteCta: string; viewApplicationsCta: string;
  supplyFitLabel: string; requestQuoteBandTitle: string; requestQuoteBandLead: string;
  complianceTitle: string; complianceLead: string;
  complianceChecklist: string; complianceChecklistLead: string;
  insightsReadMore: string;
  faqTitle: string; faqLead: string;
  contactTitle: string; contactLead: string;
  productsListTitle: string; productsListLead: string;
  insightsListTitle: string; blogTitle: string; blogLead: string;
  // ── Hero ──
  heroBadge: string; heroTitle: string; heroBody: string;
  heroTrustCoa: string; heroLeadTimeLabel: string; heroSampleLabel: string;
  heroLeadTimeValue: string; heroSampleValue: string; heroCtaWhatsApp: string;
  // ── Stats bar ──
  statCapacityLabel: string; statHistoryLabel: string;
  statLeadLabel: string; statMoqLabel: string;
  // ── Homepage sections ──
  hpProductsTitle: string; hpProductsBody: string;
  hpWhyTitle: string;
  hpDiff1Title: string; hpDiff1Body: string;
  hpDiff2Title: string; hpDiff2Body: string;
  hpDiff3Title: string; hpDiff3Body: string;
  hpDiff4Title: string; hpDiff4Body: string;
  hpDiff5Title: string; hpDiff5Body: string;
  hpProcessTitle: string; hpProcessStepLabel: string;
  hpStep1Title: string; hpStep1Body: string;
  hpStep2Title: string; hpStep2Body: string;
  hpStep3Title: string; hpStep3Body: string;
  hpStep4Title: string; hpStep4Body: string;
  hpStep5Title: string; hpStep5Body: string;
  hpCredTitle: string; hpIecActive: string;
  hpFaqTitle: string; hpFaqBody: string;
  hpContactTitle: string; hpContactBody: string;
  hpContactEmailLabel: string; hpContactResponseLabel: string;
  hpContactResponseValue: string; hpGetQuote: string;
  // ── Section labels (shared) ──
  labelProducts: string; labelWhyUs: string; labelProcess: string;
  labelCredentials: string; labelStepsOne: string; labelContact: string;
  // ── Products page ──
  productsPageKicker: string; productsPageH1Suffix: string;
  productsPageCapacityLabel: string; productsPagePurityLabel: string; productsPageMoqLabel: string;
  productsPageGradeKicker: string; productsPageGradeTitle: string;
  productsPageTableNote: string; productsPageViewQuality: string;
  productsPageCtaTitle: string; productsPageCtaBody: string;
  // ── Quality page ──
  qualityCoaStatLabel: string; qualityFssaiStatLabel: string; qualityApedaStatLabel: string;
  qualityDocTypesLabel: string;
  qualityCredTitle: string; qualityCredLead: string;
  qualityBadgeRegistered: string; qualityBadgeActive: string;
  qualityFssaiDesc: string; qualityApedaDesc: string;
  qualitySpicesBoardDesc: string; qualityIecDesc: string;
  qualityCtaTitle: string; qualityCtaBody: string; qualityCtaEmailBtn: string;
  // ── Contact page ──
  contactResponseTimeLabel: string; contactMinOrderLabel: string;
  contactExportDeskLabel: string; contactFacilityLabel: string;
  contactCapacityLabel: string; contactLeadTimeLabel: string;
  contactPortsLabel: string; contactEmailBtn: string; contactWaBtn: string;
  // ── FAQ page ──
  faqPageAnswered: string; faqPageCommonTitle: string; faqPageCommonBody: string;
  faqPageStillHaveQ: string; faqPageTalkExport: string; faqPageTalkBody: string;
  faqPageWaBtn: string; faqPageEmailBtn: string;
  faqPageQuickFacts: string;
  faqPageMoqFact: string; faqPageCapacityFact: string; faqPageLeadFact: string;
  faqPagePortsFact: string; faqPageGradesFact: string; faqPageSampleFact: string;
  faqPageMinOrderLabel: string; faqPageLeadTimeLabel: string; faqPagePurityLabel: string;
  // ── Footer ──
  footerBrandDesc: string; footerApplications: string; footerResources: string;
  footerRequestQuote: string; footerSampleRequest: string;
  // ── Spec Builder form ──
  sbTitle: string; sbReplyTime: string;
  sbNameLabel: string; sbEmailLabel: string; sbEmailPlaceholder: string;
  sbProductLabel: string; sbSelectProduct: string;
  sbCountryLabel: string; sbCompanyLabel: string;
  sbMessageLabel: string; sbMessagePlaceholder: string;
  sbErrorContact: string; sbSubmitBtn: string;
  // ── Compliance Grid ──
  cgItem1Title: string; cgItem1Desc: string;
  cgItem2Title: string; cgItem2Desc: string;
  cgItem3Title: string; cgItem3Desc: string;
  cgItem4Title: string; cgItem4Desc: string;
  cgItem5Title: string; cgItem5Desc: string;
  cgItem6Title: string; cgItem6Desc: string;
  // ── Product detail page ──
  pdBreadcrumbHome: string; pdFromGujarat: string;
  pdAvailableGrades: string; pdPackagingOptions: string; pdApplicationsLabel: string;
  pdApplicationFit: string; pdWhichGrade: string;
  pdPrimary: string; pdConditional: string; pdNotSuitable: string; pdNotUsed: string;
  pdSpecifications: string; pdParameter: string; pdBestFor: string;
  pdGradeDetails: string; pdSelectGrade: string; pdByApplication: string;
  pdCommonQuestions: string; pdFaqIntro: string; pdFaqIntroSuffix: string; pdFaqDesc: string;
  pdRequestQuoteLabel: string; pdWithin24h: string;
  pdCompareGradesTitle: string; pdReadyToSource: string; pdCtaBody: string;
  pdFindMyGrade: string;
  pdLegendPrimary: string; pdLegendConditional: string;
  pdLegendNotSuitable: string; pdLegendNotApplicable: string;
  // ── Shared sidebar / page UI ──
  readyToSource: string; sampleCoaTitle: string; sampleCoaBody: string;
  moreResources: string; topicsCovered: string;
  sourcingQuestion: string; sourcingQuestionBody: string;
  insightsKicker: string; insightsTitleSuffix: string; insightsLead: string;
  insightsAudienceLabel: string; insightsPublishedLabel: string;
  insightsSourceLabel: string; insightsSourceValue: string; allBuyerGuides: string;
  blogTopicsLabel: string; blogAllLabel: string; blogTopicLabel: string;
  blogAuthorLabel: string; blogCategoryLabel: string;
  sourceLocation: string; relatedArticles: string;
  industryBuyerApp: string; industryRequestQuote: string; industryMatchGrade: string;
  industryUseCases: string; industryKeySpecs: string; industryDocuments: string; industryBuyerNote: string;
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
    requestQuoteBandLead: 'Share your grade, mesh, packing, destination port, and monthly volume. We\'ll reply with pricing and a sample COA within 24 hours.',
    complianceTitle: 'Every document your QA team will ask for.',
    complianceLead: 'COA parameters, lot origin, microbiology, heavy metals, and full export paperwork — shared before the sample ships, not after the PO is signed.',
    complianceChecklist: 'Buyer verification checklist',
    complianceChecklistLead: 'Ask for current documents by product, lot, and destination market before confirming a bulk order.',
    insightsReadMore: 'Read full guide',
    faqTitle: 'Questions we answer before every first order.',
    faqLead: 'MOQ, grade differences, pharmacopoeia compliance, documentation, lead times, and what happens between PO and shipment.',
    contactTitle: 'Talk to the export desk.',
    contactLead: 'Share your product, volume, destination, and grade. We respond within 24 hours.',
    productsListTitle: 'Six psyllium grades. All export-ready.',
    productsListLead: 'From 85% food-grade to 99% USP/EP/IP pharmaceutical. Custom mesh, packing, and full COA per shipment.',
    insightsListTitle: 'Buyer guides and market insights.',
    blogTitle: 'Sourcing guides for psyllium buyers.',
    blogLead: 'Grade selection, documentation requirements, and what to ask your supplier before the first order.',
    // Hero
    heroBadge: 'Psyllium manufacturer · Gujarat, India',
    heroTitle: 'Bulk psyllium husk & powder manufacturer in Gujarat',
    heroBody: 'Export-ready for food, nutraceutical & pharma brands worldwide. We source, mill, and ship psyllium husk, powder, and seed — matched to your purity spec, mesh, and documentation requirement. Order any quantity, from 1 KG samples to full containers. What we quote is what ships.',
    heroTrustCoa: 'COA per shipment',
    heroLeadTimeLabel: 'Lead time',
    heroSampleLabel: 'Sample',
    heroLeadTimeValue: '7 days from confirmation',
    heroSampleValue: '100–500 g with COA, shipped in 5 days',
    heroCtaWhatsApp: 'WhatsApp Us',
    // Stats bar
    statCapacityLabel: 'Annual processing capacity',
    statHistoryLabel: 'of manufacturing knowledge',
    statLeadLabel: 'Order to shipment',
    statMoqLabel: 'Minimum order quantity',
    // Homepage sections
    hpProductsTitle: 'Psyllium products for bulk buyers.',
    hpProductsBody: 'Seven product lines. 85% to 99% purity. Grade, mesh, and pharmacopoeia compliance matched to your formulation.',
    hpWhyTitle: 'What separates us from a trading-desk exporter.',
    hpDiff1Title: '40 years inside the manufacturing floor',
    hpDiff1Body: 'Over 40 years of psyllium manufacturing experience — from inside the processing facility, not on the trading side. That depth of operational knowledge translates directly into consistent quality and reliable specifications.',
    hpDiff2Title: 'Custom specs, not catalogue selections',
    hpDiff2Body: 'Grade, mesh, packing, and documentation requirements captured before we quote. Your specification is the brief — not a catalogue selection.',
    hpDiff3Title: 'Manufacturing knowledge, not trading margin',
    hpDiff3Body: 'We process in-house. We are not buying finished product and marking it up. The grade you specify is the grade produced for your lot — not repackaged from someone else\'s inventory.',
    hpDiff4Title: 'Full documentation before dispatch',
    hpDiff4Body: 'COA, origin certificate, phytosanitary, fumigation, MSDS, and allergen statement per shipment. All shared before dispatch — reviewed by your QA team before containers move.',
    hpDiff5Title: 'Order any quantity',
    hpDiff5Body: 'No minimum order. We supply 1 KG samples for lab testing, 5 KG trial batches, and full 20 MT containers alike. Order what you need — scale when you\'re ready.',
    hpProcessTitle: 'From seed to export-ready packing.',
    hpProcessStepLabel: '5 steps · one lot',
    hpStep1Title: 'Source',
    hpStep1Body: 'Psyllium seed sourced from contracted farms across Unjha and North Gujarat — the world\'s primary psyllium growing region. Origin records maintained per lot.',
    hpStep2Title: 'Clean',
    hpStep2Body: 'Seed cleaned and graded before milling. De-stoning, sieve separation, and magnetic inspection at each stage to reduce foreign matter.',
    hpStep3Title: 'Mill',
    hpStep3Body: 'Controlled milling separates husk from seed to buyer-specified purity and mesh. No chemical bleaching or acid treatment.',
    hpStep4Title: 'Test',
    hpStep4Body: 'Lab testing before packing — purity, swelling volume, moisture, ash, microbiology, and heavy metals. Results documented in COA shared before dispatch.',
    hpStep5Title: 'Pack & Ship',
    hpStep5Body: 'Food-grade packing in buyer-specified bag sizes. Export documents prepared and reviewed before shipment. FOB Mundra or CIF.',
    hpCredTitle: 'Registered with the bodies that matter to your QA team.',
    hpIecActive: 'Active · Import Export Code',
    hpFaqTitle: 'Questions we get before every first order.',
    hpFaqBody: 'MOQ, grade differences, pharmacopoeia compliance, documentation package — answered directly.',
    hpContactTitle: 'Share your spec. We respond in 24 hours.',
    hpContactBody: 'Grade, mesh, packing, destination port, monthly volume — send what you have. We\'ll come back with pricing, a sample COA, and sample dispatch options.',
    hpContactEmailLabel: 'Email',
    hpContactResponseLabel: 'Response time',
    hpContactResponseValue: 'Typically within 4 hours (IST business hours)',
    hpGetQuote: 'Get Quote',
    // Section labels
    labelProducts: 'Products',
    labelWhyUs: 'Why RM Psyllium',
    labelProcess: 'Process',
    labelCredentials: 'Credentials',
    labelStepsOne: '5 steps · one lot',
    labelContact: 'Contact',
    // Products page
    productsPageKicker: 'All products',
    productsPageH1Suffix: 'from Gujarat, India.',
    productsPageCapacityLabel: 'Annual capacity',
    productsPagePurityLabel: 'Purity grades',
    productsPageMoqLabel: 'Min. order · FOB Mundra',
    productsPageGradeKicker: 'Grade comparison',
    productsPageGradeTitle: 'Psyllium husk: grade summary',
    productsPageTableNote: 'Full COA parameters available per product and lot.',
    productsPageViewQuality: 'View quality documents →',
    productsPageCtaTitle: 'Share your spec. Get a quote.',
    productsPageCtaBody: 'Tell us your product, grade, mesh, packing, destination, and monthly volume. We respond within 24 hours with pricing and availability.',
    // Quality page
    qualityCoaStatLabel: 'COA test parameters',
    qualityFssaiStatLabel: 'Facility registered',
    qualityApedaStatLabel: 'Export clearance registered',
    qualityDocTypesLabel: 'Documentation types',
    qualityCredTitle: 'Credentials your procurement team will ask for.',
    qualityCredLead: 'FSSAI facility registration, APEDA export clearance, Spices Board listing, and active IEC. Current certificates available on request before sampling.',
    qualityBadgeRegistered: 'Registered',
    qualityBadgeActive: 'Active',
    qualityFssaiDesc: 'Food Safety & Standards Authority of India — facility registration',
    qualityApedaDesc: 'Agricultural & Processed Food Products Export Development Authority',
    qualitySpicesBoardDesc: 'Spices Board of India — export quality registration',
    qualityIecDesc: 'Import Export Code — active for all export shipments',
    qualityCtaTitle: 'Need documents before ordering?',
    qualityCtaBody: 'Email us with your product, lot requirements, and destination. We\'ll share current COA, certificate copies, and documentation status within 24 hours.',
    qualityCtaEmailBtn: 'Email export desk',
    // Contact page
    contactResponseTimeLabel: 'Response time',
    contactMinOrderLabel: 'Min. order',
    contactExportDeskLabel: 'Export desk',
    contactFacilityLabel: 'Facility address',
    contactCapacityLabel: 'Capacity',
    contactLeadTimeLabel: 'Lead time',
    contactPortsLabel: 'Ports',
    contactEmailBtn: 'Email us',
    contactWaBtn: 'WhatsApp',
    // FAQ page
    faqPageAnswered: 'answered.',
    faqPageCommonTitle: 'Common buyer questions.',
    faqPageCommonBody: 'Everything you need to know before placing your first order — grades, documentation, lead times, and compliance.',
    faqPageStillHaveQ: 'Still have questions?',
    faqPageTalkExport: 'Talk to the export desk',
    faqPageTalkBody: 'Share your product, grade, and destination. We respond within 24 hours.',
    faqPageWaBtn: 'WhatsApp Us',
    faqPageEmailBtn: 'Email export desk',
    faqPageQuickFacts: 'Quick facts',
    faqPageMoqFact: 'MOQ',
    faqPageCapacityFact: 'Capacity',
    faqPageLeadFact: 'Lead time',
    faqPagePortsFact: 'Ports',
    faqPageGradesFact: 'Grades',
    faqPageSampleFact: 'Sample',
    faqPageMinOrderLabel: 'Min. order',
    faqPageLeadTimeLabel: 'Lead time',
    faqPagePurityLabel: 'Purity grades',
    // Footer
    footerBrandDesc: 'RM Psyllium LLP is a direct-from-source manufacturer and bulk exporter of premium psyllium husk, powder, and seeds. Operating from Siddhpur, Gujarat, our facility has a 2,000 MT annual capacity supplying pharma (USP/EP), food, and feed grades globally. MOQ: 1 KG with NABL-accredited COA per shipment.',
    footerApplications: 'Applications',
    footerResources: 'Resources',
    footerRequestQuote: 'Request a Quote',
    footerSampleRequest: 'Sample Request',
    // Spec Builder
    sbTitle: 'Request a quote',
    sbReplyTime: 'We reply within 24 hours (IST business hours)',
    sbNameLabel: 'Name',
    sbEmailLabel: 'Email or Phone',
    sbEmailPlaceholder: 'email or WhatsApp number',
    sbProductLabel: 'Product interest',
    sbSelectProduct: 'Select a product',
    sbCountryLabel: 'Country',
    sbCompanyLabel: 'Company',
    sbMessageLabel: 'Message / specs',
    sbMessagePlaceholder: 'Grade, volume, certifications, delivery timeline…',
    sbErrorContact: 'Please enter your email or phone number.',
    sbSubmitBtn: 'Send Inquiry',
    // Compliance Grid
    cgItem1Title: 'COA Review',
    cgItem1Desc: 'Purity, mesh, moisture, ash, swelling volume, microbiology, and heavy-metal parameters shared for buyer review.',
    cgItem2Title: 'Food Safety',
    cgItem2Desc: 'Facility, allergen, microbiology, and handling documents available for food, supplement, and pharma buyers.',
    cgItem3Title: 'Halal & Kosher',
    cgItem3Desc: 'Halal and Kosher documents can be shared where the current lot and buyer market require them.',
    cgItem4Title: 'Traceability',
    cgItem4Desc: 'Lot-level origin, processing, packing, and shipment records aligned to export review.',
    cgItem5Title: 'Specification Control',
    cgItem5Desc: 'Grade, mesh, moisture, swell volume, and packing requirements confirmed before quote.',
    cgItem6Title: 'Export Documents',
    cgItem6Desc: 'Commercial invoice, packing list, COA, origin certificate, phyto, and fumigation support for export orders.',
    // Product detail page
    pdBreadcrumbHome: 'Home',
    pdFromGujarat: 'from Gujarat, India.',
    pdAvailableGrades: 'Available grades',
    pdPackagingOptions: 'Packaging options',
    pdApplicationsLabel: 'Applications',
    pdApplicationFit: 'Application Fit',
    pdWhichGrade: 'Which grade fits your use case?',
    pdPrimary: 'Primary',
    pdConditional: 'Conditional',
    pdNotSuitable: 'Not suitable',
    pdNotUsed: 'Not used',
    pdSpecifications: 'Specifications',
    pdParameter: 'Parameter',
    pdBestFor: 'Best for',
    pdGradeDetails: 'Grade Details',
    pdSelectGrade: 'Select your grade',
    pdByApplication: 'By application',
    pdCommonQuestions: 'Common Questions',
    pdFaqIntro: 'Frequently asked',
    pdFaqIntroSuffix: 'questions.',
    pdFaqDesc: 'Product-specific questions from buyers — grades, documentation, lead times, and compliance.',
    pdRequestQuoteLabel: 'Request Quote',
    pdWithin24h: 'within 24 hours.',
    pdCompareGradesTitle: 'Compare {name} grades',
    pdReadyToSource: 'Ready to source {name}?',
    pdCtaBody: 'Share your grade, mesh, packing, destination, and monthly volume. We reply with pricing and availability within 24 hours.',
    pdFindMyGrade: 'Find My Grade ↓',
    pdLegendPrimary: 'Primary fit',
    pdLegendConditional: 'Conditional — confirm with QA',
    pdLegendNotSuitable: 'Not suitable',
    pdLegendNotApplicable: 'Not applicable',
    readyToSource: 'Ready to source?', sampleCoaTitle: 'Get a sample with COA',
    sampleCoaBody: 'Share your spec — grade, mesh, monthly volume, and destination. We\'ll respond within 24 hours.',
    moreResources: 'More resources', topicsCovered: 'Topics covered',
    sourcingQuestion: 'Have a sourcing question?',
    sourcingQuestionBody: 'Our export team answers technical and commercial questions about psyllium grades, mesh, certifications, and export documentation.',
    insightsKicker: 'Buyer guides', insightsTitleSuffix: 'for procurement teams.',
    insightsLead: 'Practical guides on grades, mesh, compliance, and sourcing decisions — written for procurement and QA teams.',
    insightsAudienceLabel: 'Audience', insightsPublishedLabel: 'Published',
    insightsSourceLabel: 'Source', insightsSourceValue: 'RM Psyllium · Siddhpur, Gujarat', allBuyerGuides: 'All buyer guides →',
    blogTopicsLabel: 'Topics:', blogAllLabel: 'All', blogTopicLabel: 'Topic',
    blogAuthorLabel: 'Author', blogCategoryLabel: 'Category',
    sourceLocation: 'Siddhpur, Gujarat, India', relatedArticles: 'Related articles',
    industryBuyerApp: 'Buyer application', industryRequestQuote: 'Request application quote',
    industryMatchGrade: 'Match your application to the right grade, mesh, packing, and documents.',
    industryUseCases: 'Common applications', industryKeySpecs: 'Key specifications',
    industryDocuments: 'Documents you\'ll receive', industryBuyerNote: 'Ready to source?',
  },
  es: {
    navProducts: 'Productos',
    navRegions: 'Regiones',
    navIndustries: 'Industrias',
    navCompliance: 'Cumplimiento',
    navInsights: 'Guías',
    navFaq: 'FAQ',
    navContact: 'Contacto',
    navBlog: 'Blog',
    navQuality: 'Calidad',
    cta: 'Solicitar cotización',
    homeTitle: 'Psyllium premium para marcas globales.',
    homeSub: 'Ingredientes de psyllium limpios y trazables para alimentos, suplementos, pharma y nutrición animal.',
    specTitle: 'Solicitar cotización',
    requestQuoteCta: 'Solicitar cotización',
    viewApplicationsCta: 'Ver aplicaciones',
    supplyFitLabel: 'Adecuación de suministro',
    requestQuoteBandTitle: 'Obtenga precios, muestras y documentos para este producto.',
    requestQuoteBandLead: 'Envíe su grado, malla, empaque, destino y volumen mensual. Le responderemos con disponibilidad y próximos pasos.',
    complianceTitle: 'Documentos necesarios antes del envío.',
    complianceLead: 'Los equipos de compras y QA pueden revisar los parámetros del COA, trazabilidad de lotes y documentos de exportación antes de hacer pedidos.',
    complianceChecklist: 'Lista de verificación del comprador',
    complianceChecklistLead: 'Solicite los documentos actuales por producto, lote y mercado de destino antes de confirmar un pedido.',
    insightsReadMore: 'Solicitar cotización y muestras',
    faqTitle: 'Preguntas frecuentes.',
    faqLead: 'Preguntas comunes de equipos de compras y QA sobre grados, certificaciones, exportación y pedidos.',
    contactTitle: 'Hable con el equipo de exportación.',
    contactLead: 'Comparta su producto, volumen, destino y grado. Respondemos en 24 horas.',
    productsListTitle: 'Productos de psyllium de Siddhpur, Gujarat.',
    productsListLead: '7 líneas de productos. Grados 85%–99%. Embalaje de exportación. COA y documentos por pedido.',
    insightsListTitle: 'Guías para compradores e información del mercado.',
    blogTitle: 'Recursos de aprovisionamiento, cumplimiento y aplicación de psyllium.',
    blogLead: 'Orientación técnica y de compras para compradores mayoristas de psyllium en todo el mundo.',
    // Hero
    heroBadge: 'Fabricante de psyllium · Gujarat, India',
    heroTitle: 'Psyllium a granel para fabricantes de pharma, suplementos y alimentos.',
    heroBody: 'Abastecemos, molemos y enviamos cáscara de psyllium, polvo y semilla — adaptados a su especificación de pureza, malla y requisitos de documentación. Lo que cotizamos es lo que enviamos.',
    heroTrustCoa: 'COA por envío',
    heroLeadTimeLabel: 'Tiempo de entrega',
    heroSampleLabel: 'Muestra',
    heroLeadTimeValue: '7 días desde la confirmación',
    heroSampleValue: '100–500 g con COA, enviado en 5 días',
    heroCtaWhatsApp: 'WhatsApp',
    // Stats bar
    statCapacityLabel: 'Capacidad de procesamiento anual',
    statHistoryLabel: 'años de experiencia en fabricación',
    statLeadLabel: 'De pedido a envío',
    statMoqLabel: 'Cantidad mínima de pedido',
    // Homepage sections
    hpProductsTitle: 'Productos de psyllium para compradores mayoristas.',
    hpProductsBody: 'Siete líneas de productos. Del 85% al 99% de pureza. Grado, malla y cumplimiento de farmacopea adaptados a su formulación.',
    hpWhyTitle: 'Lo que nos diferencia de un exportador comercial.',
    hpDiff1Title: '40 años dentro de la planta de fabricación',
    hpDiff1Body: 'Más de 40 años de experiencia en fabricación de psyllium — desde dentro de la planta de procesamiento, no en el lado comercial. Ese conocimiento operativo profundo se traduce directamente en calidad constante y especificaciones confiables.',
    hpDiff2Title: 'Especificaciones personalizadas, no selecciones de catálogo',
    hpDiff2Body: 'Grado, malla, embalaje y requisitos de documentación capturados antes de cotizar. Su especificación es el criterio — no una selección de catálogo.',
    hpDiff3Title: 'Conocimiento de fabricación, no margen comercial',
    hpDiff3Body: 'Procesamos internamente. No compramos producto terminado y lo revendemos. El grado que especifica es el que se produce para su lote — no reempacado del inventario de otro.',
    hpDiff4Title: 'Documentación completa antes del despacho',
    hpDiff4Body: 'COA, certificado de origen, fitosanitario, fumigación, MSDS y declaración de alérgenos por envío. Todo compartido antes del despacho — revisado por su equipo de QA antes de que los contenedores se muevan.',
    hpDiff5Title: 'Pida cualquier cantidad',
    hpDiff5Body: 'Sin cantidad mínima de pedido. Suministramos muestras de 1 KG para pruebas de laboratorio, lotes de prueba de 5 KG y contenedores completos de 20 MT. Pida lo que necesite — amplíe cuando esté listo.',
    hpProcessTitle: 'De la semilla al embalaje listo para exportar.',
    hpProcessStepLabel: '5 pasos · un lote',
    hpStep1Title: 'Abastecer',
    hpStep1Body: 'Semilla de psyllium abastecida de granjas contratadas en Unjha y el norte de Gujarat — la principal región de cultivo de psyllium del mundo. Registros de origen mantenidos por lote.',
    hpStep2Title: 'Limpiar',
    hpStep2Body: 'Semilla limpiada y clasificada antes de moler. Despedradora, separación por tamiz e inspección magnética en cada etapa para reducir materia extraña.',
    hpStep3Title: 'Moler',
    hpStep3Body: 'Molienda controlada que separa la cáscara de la semilla según la pureza y malla especificadas por el comprador. Sin blanqueo químico ni tratamiento ácido.',
    hpStep4Title: 'Analizar',
    hpStep4Body: 'Análisis de laboratorio antes del empaque — pureza, volumen de hinchamiento, humedad, cenizas, microbiología y metales pesados. Resultados documentados en el COA compartido antes del despacho.',
    hpStep5Title: 'Empacar y enviar',
    hpStep5Body: 'Embalaje de grado alimenticio en tamaños de bolsa especificados por el comprador. Documentos de exportación preparados y revisados antes del envío. FOB Mundra o CIF.',
    hpCredTitle: 'Registrado ante los organismos que le importan a su equipo de QA.',
    hpIecActive: 'Activo · Código de importación y exportación',
    hpFaqTitle: 'Preguntas que respondemos antes de cada primer pedido.',
    hpFaqBody: 'MOQ, diferencias entre grados, cumplimiento de farmacopea, paquete de documentación — respondidas directamente.',
    hpContactTitle: 'Comparta su especificación. Respondemos en 24 horas.',
    hpContactBody: 'Grado, malla, embalaje, puerto de destino, volumen mensual — envíe lo que tenga. Le responderemos con precios, un COA de muestra y opciones de envío de muestras.',
    hpContactEmailLabel: 'Correo electrónico',
    hpContactResponseLabel: 'Tiempo de respuesta',
    hpContactResponseValue: 'Generalmente dentro de 4 horas (horario comercial IST)',
    hpGetQuote: 'Solicitar cotización',
    // Section labels
    labelProducts: 'Productos',
    labelWhyUs: 'Por qué RM Psyllium',
    labelProcess: 'Proceso',
    labelCredentials: 'Credenciales',
    labelStepsOne: '5 pasos · un lote',
    labelContact: 'Contacto',
    // Products page
    productsPageKicker: 'Todos los productos',
    productsPageH1Suffix: 'de Gujarat, India.',
    productsPageCapacityLabel: 'Capacidad anual',
    productsPagePurityLabel: 'Grados de pureza',
    productsPageMoqLabel: 'Pedido mín. · FOB Mundra',
    productsPageGradeKicker: 'Comparación de grados',
    productsPageGradeTitle: 'Cáscara de psyllium: resumen de grados',
    productsPageTableNote: 'Parámetros completos de COA disponibles por producto y lote.',
    productsPageViewQuality: 'Ver documentos de calidad →',
    productsPageCtaTitle: 'Comparta su especificación. Obtenga una cotización.',
    productsPageCtaBody: 'Indíquenos su producto, grado, malla, embalaje, destino y volumen mensual. Respondemos en 24 horas con precios y disponibilidad.',
    // Quality page
    qualityCoaStatLabel: 'Parámetros de análisis COA',
    qualityFssaiStatLabel: 'Instalación registrada',
    qualityApedaStatLabel: 'Autorización de exportación registrada',
    qualityDocTypesLabel: 'Tipos de documentación',
    qualityCredTitle: 'Credenciales que le pedirá su equipo de compras.',
    qualityCredLead: 'Registro FSSAI, autorización de exportación APEDA, registro en la Junta de Especias e IEC activo. Certificados actuales disponibles a petición antes del muestreo.',
    qualityBadgeRegistered: 'Registrado',
    qualityBadgeActive: 'Activo',
    qualityFssaiDesc: 'Autoridad de Seguridad y Normas Alimentarias de India — registro de instalaciones',
    qualityApedaDesc: 'Autoridad de Desarrollo de Exportaciones de Productos Agrícolas y Procesados',
    qualitySpicesBoardDesc: 'Junta de Especias de India — registro de calidad de exportación',
    qualityIecDesc: 'Código de importación y exportación — activo para todos los envíos de exportación',
    qualityCtaTitle: '¿Necesita documentos antes de ordenar?',
    qualityCtaBody: 'Escríbanos con su producto, requisitos de lote y destino. Compartiremos COA actualizado, copias de certificados y estado de documentación en 24 horas.',
    qualityCtaEmailBtn: 'Email al equipo de exportación',
    // Contact page
    contactResponseTimeLabel: 'Tiempo de respuesta',
    contactMinOrderLabel: 'Pedido mínimo',
    contactExportDeskLabel: 'Equipo de exportación',
    contactFacilityLabel: 'Dirección de instalaciones',
    contactCapacityLabel: 'Capacidad',
    contactLeadTimeLabel: 'Tiempo de entrega',
    contactPortsLabel: 'Puertos',
    contactEmailBtn: 'Enviar email',
    contactWaBtn: 'WhatsApp',
    // FAQ page
    faqPageAnswered: 'respondidas.',
    faqPageCommonTitle: 'Preguntas frecuentes de compradores.',
    faqPageCommonBody: 'Todo lo que necesita saber antes de hacer su primer pedido — grados, documentación, tiempos de entrega y cumplimiento.',
    faqPageStillHaveQ: '¿Tiene más preguntas?',
    faqPageTalkExport: 'Hable con el equipo de exportación',
    faqPageTalkBody: 'Comparta su producto, grado y destino. Respondemos en 24 horas.',
    faqPageWaBtn: 'WhatsApp',
    faqPageEmailBtn: 'Email al equipo de exportación',
    faqPageQuickFacts: 'Datos rápidos',
    faqPageMoqFact: 'MOQ',
    faqPageCapacityFact: 'Capacidad',
    faqPageLeadFact: 'Tiempo de entrega',
    faqPagePortsFact: 'Puertos',
    faqPageGradesFact: 'Grados',
    faqPageSampleFact: 'Muestra',
    faqPageMinOrderLabel: 'Pedido mínimo',
    faqPageLeadTimeLabel: 'Tiempo de entrega',
    faqPagePurityLabel: 'Grados de pureza',
    // Footer
    footerBrandDesc: 'RM Psyllium LLP es un fabricante directo y exportador a granel de cáscara, polvo y semillas de psyllium premium. Operando desde Siddhpur, Gujarat, nuestra instalación cuenta con una capacidad anual de 2.000 MT, suministrando grados farmacéutico (USP/EP), alimentario y forrajero a nivel global. MOQ: 1 KG con COA certificado por laboratorio NABL por envío.',
    footerApplications: 'Aplicaciones',
    footerResources: 'Recursos',
    footerRequestQuote: 'Solicitar cotización',
    footerSampleRequest: 'Solicitar muestra',
    // Spec Builder
    sbTitle: 'Solicitar cotización',
    sbReplyTime: 'Respondemos en 24 horas (horario comercial IST)',
    sbNameLabel: 'Nombre',
    sbEmailLabel: 'Email o teléfono',
    sbEmailPlaceholder: 'email o número de WhatsApp',
    sbProductLabel: 'Producto de interés',
    sbSelectProduct: 'Seleccione un producto',
    sbCountryLabel: 'País',
    sbCompanyLabel: 'Empresa',
    sbMessageLabel: 'Mensaje / especificaciones',
    sbMessagePlaceholder: 'Grado, volumen, certificaciones, plazo de entrega…',
    sbErrorContact: 'Por favor ingrese su email o número de teléfono.',
    sbSubmitBtn: 'Enviar consulta',
    // Compliance Grid
    cgItem1Title: 'Revisión de COA',
    cgItem1Desc: 'Parámetros de pureza, malla, humedad, cenizas, volumen de hinchamiento, microbiología y metales pesados compartidos para revisión del comprador.',
    cgItem2Title: 'Seguridad alimentaria',
    cgItem2Desc: 'Documentos de instalación, alérgenos, microbiología y manejo disponibles para compradores de alimentos, suplementos y pharma.',
    cgItem3Title: 'Halal y Kosher',
    cgItem3Desc: 'Los documentos halal y kosher pueden compartirse cuando el lote actual y el mercado del comprador así lo requieran.',
    cgItem4Title: 'Trazabilidad',
    cgItem4Desc: 'Registros de origen, procesamiento, empaque y envío a nivel de lote alineados a revisión de exportación.',
    cgItem5Title: 'Control de especificaciones',
    cgItem5Desc: 'Requisitos de grado, malla, humedad, volumen de hinchamiento y embalaje confirmados antes de cotizar.',
    cgItem6Title: 'Documentos de exportación',
    cgItem6Desc: 'Factura comercial, lista de empaque, COA, certificado de origen, fitosanitario y fumigación para pedidos de exportación.',
    // Product detail page
    pdBreadcrumbHome: 'Inicio',
    pdFromGujarat: 'de Gujarat, India.',
    pdAvailableGrades: 'Grados disponibles',
    pdPackagingOptions: 'Opciones de empaque',
    pdApplicationsLabel: 'Aplicaciones',
    pdApplicationFit: 'Adecuación de aplicación',
    pdWhichGrade: '¿Qué grado se adapta a su caso de uso?',
    pdPrimary: 'Principal',
    pdConditional: 'Condicional',
    pdNotSuitable: 'No adecuado',
    pdNotUsed: 'No utilizado',
    pdSpecifications: 'Especificaciones',
    pdParameter: 'Parámetro',
    pdBestFor: 'Mejor para',
    pdGradeDetails: 'Detalles de grado',
    pdSelectGrade: 'Seleccione su grado',
    pdByApplication: 'Por aplicación',
    pdCommonQuestions: 'Preguntas frecuentes',
    pdFaqIntro: 'Preguntas',
    pdFaqIntroSuffix: 'frecuentes.',
    pdFaqDesc: 'Preguntas específicas del producto de compradores — grados, documentación, tiempos de entrega y cumplimiento.',
    pdRequestQuoteLabel: 'Solicitar cotización',
    pdWithin24h: 'en 24 horas.',
    pdCompareGradesTitle: 'Comparar grados de {name}',
    pdReadyToSource: '¿Listo para abastecerse de {name}?',
    pdCtaBody: 'Comparta su grado, malla, embalaje, destino y volumen mensual. Respondemos con precios y disponibilidad en 24 horas.',
    pdFindMyGrade: 'Encontrar mi grado ↓',
    pdLegendPrimary: 'Uso principal',
    pdLegendConditional: 'Condicional — confirmar con QA',
    pdLegendNotSuitable: 'No adecuado',
    pdLegendNotApplicable: 'No aplica',
    readyToSource: '¿Listo para abastecerse?', sampleCoaTitle: 'Obtener una muestra con COA',
    sampleCoaBody: 'Comparta su especificación — grado, malla, volumen mensual y destino. Responderemos en 24 horas.',
    moreResources: 'Más recursos', topicsCovered: 'Temas cubiertos',
    sourcingQuestion: '¿Tiene alguna pregunta de abastecimiento?',
    sourcingQuestionBody: 'Nuestro equipo de exportación responde preguntas técnicas y comerciales sobre grados, malla, certificaciones y documentación.',
    insightsKicker: 'Guías para compradores', insightsTitleSuffix: 'para equipos de compras.',
    insightsLead: 'Guías prácticas sobre grados, malla, cumplimiento y decisiones de abastecimiento — para equipos de compras y QA.',
    insightsAudienceLabel: 'Audiencia', insightsPublishedLabel: 'Publicado',
    insightsSourceLabel: 'Fuente', insightsSourceValue: 'RM Psyllium · Siddhpur, Gujarat', allBuyerGuides: 'Todas las guías →',
    blogTopicsLabel: 'Temas:', blogAllLabel: 'Todos', blogTopicLabel: 'Tema',
    blogAuthorLabel: 'Autor', blogCategoryLabel: 'Categoría',
    sourceLocation: 'Siddhpur, Gujarat, India', relatedArticles: 'Artículos relacionados',
    industryBuyerApp: 'Aplicación del comprador', industryRequestQuote: 'Solicitar cotización de aplicación',
    industryMatchGrade: 'Encuentre el grado, malla, embalaje y documentos adecuados para su aplicación.',
    industryUseCases: 'Aplicaciones comunes', industryKeySpecs: 'Especificaciones clave',
    industryDocuments: 'Documentos que recibirá', industryBuyerNote: '¿Listo para comprar?',
  },
  fr: {
    navProducts: 'Produits',
    navRegions: 'Régions',
    navIndustries: 'Industries',
    navCompliance: 'Conformité',
    navInsights: 'Guides',
    navFaq: 'FAQ',
    navContact: 'Contact',
    navBlog: 'Blog',
    navQuality: 'Qualité',
    cta: 'Demander un devis',
    homeTitle: 'Psyllium premium pour marques mondiales.',
    homeSub: 'Ingrédients psyllium propres et traçables pour alimentation, compléments, pharma et nutrition animale.',
    specTitle: 'Demander un devis',
    requestQuoteCta: 'Demander un devis produit',
    viewApplicationsCta: 'Voir les applications',
    supplyFitLabel: "Adéquation d'approvisionnement",
    requestQuoteBandTitle: 'Obtenez tarifs, échantillons et documents pour ce produit.',
    requestQuoteBandLead: 'Envoyez votre grade, maille, conditionnement, destination et volume mensuel. Nous répondrons avec disponibilité et prochaines étapes.',
    complianceTitle: "Documents dont les acheteurs ont besoin avant l'expédition.",
    complianceLead: "Les équipes achats et QA peuvent examiner les paramètres COA, la traçabilité des lots et les documents d'exportation avant les commandes.",
    complianceChecklist: "Liste de vérification de l'acheteur",
    complianceChecklistLead: 'Demandez les documents actuels par produit, lot et marché de destination avant de confirmer une commande en gros.',
    insightsReadMore: 'Demander devis et échantillons',
    faqTitle: 'Questions fréquemment posées.',
    faqLead: "Questions courantes des équipes achats et QA sur les grades, certifications, exportation et commandes.",
    contactTitle: "Parlez au service export.",
    contactLead: 'Partagez votre produit, volume, destination et grade. Nous répondons dans les 24 heures.',
    productsListTitle: 'Produits psyllium de Siddhpur, Gujarat.',
    productsListLead: '7 gammes de produits. Grades 85%–99%. Emballage export. COA et documents par commande.',
    insightsListTitle: 'Guides acheteurs et informations marché.',
    blogTitle: "Ressources d'approvisionnement, conformité et application du psyllium.",
    blogLead: 'Conseils techniques et achats pour les acheteurs de psyllium en gros dans le monde entier.',
    // Hero
    heroBadge: 'Fabricant de psyllium · Gujarat, Inde',
    heroTitle: 'Psyllium en vrac pour fabricants pharma, compléments et alimentaire.',
    heroBody: 'Nous approvisionnons, moulinons et expédions cosse de psyllium, poudre et graine — adaptés à votre spécification de pureté, maille et exigences documentaires. Ce que nous proposons est ce qui est expédié.',
    heroTrustCoa: 'COA par expédition',
    heroLeadTimeLabel: 'Délai de livraison',
    heroSampleLabel: 'Échantillon',
    heroLeadTimeValue: '7 jours à partir de la confirmation',
    heroSampleValue: '100–500 g avec COA, expédié en 5 jours',
    heroCtaWhatsApp: 'WhatsApp',
    // Stats bar
    statCapacityLabel: 'Capacité de traitement annuelle',
    statHistoryLabel: 'ans d\'expérience en fabrication',
    statLeadLabel: 'De la commande à l\'expédition',
    statMoqLabel: 'Quantité minimale de commande',
    // Homepage sections
    hpProductsTitle: 'Produits psyllium pour acheteurs en gros.',
    hpProductsBody: 'Sept gammes de produits. 85% à 99% de pureté. Grade, maille et conformité pharmacopée adaptés à votre formulation.',
    hpWhyTitle: 'Ce qui nous distingue d\'un exportateur purement commercial.',
    hpDiff1Title: '40 ans au cœur de la production',
    hpDiff1Body: 'Plus de 40 ans d\'expérience dans la fabrication du psyllium — depuis l\'intérieur de l\'installation de traitement, pas du côté commercial. Cette profondeur de connaissance opérationnelle se traduit directement par une qualité constante et des spécifications fiables.',
    hpDiff2Title: 'Spécifications sur mesure, pas de sélection catalogue',
    hpDiff2Body: 'Grade, maille, conditionnement et exigences documentaires capturés avant de proposer un devis. Votre spécification est la référence — pas une sélection de catalogue.',
    hpDiff3Title: 'Savoir-faire industriel, pas marge commerciale',
    hpDiff3Body: 'Nous traitons en interne. Nous n\'achetons pas de produit fini pour le revendre. Le grade que vous spécifiez est le grade produit pour votre lot — pas reconditionné depuis l\'inventaire d\'un tiers.',
    hpDiff4Title: 'Documentation complète avant expédition',
    hpDiff4Body: 'COA, certificat d\'origine, phytosanitaire, fumigation, MSDS et déclaration allergènes par expédition. Tout partagé avant expédition — examiné par votre équipe QA avant que les conteneurs ne bougent.',
    hpDiff5Title: 'Commandez n\'importe quelle quantité',
    hpDiff5Body: 'Pas de minimum de commande. Nous livrons des échantillons de 1 KG pour tests en laboratoire, des lots d\'essai de 5 KG et des conteneurs complets de 20 MT. Commandez ce dont vous avez besoin — évoluez quand vous êtes prêt.',
    hpProcessTitle: 'De la graine à l\'emballage prêt à l\'export.',
    hpProcessStepLabel: '5 étapes · un lot',
    hpStep1Title: 'Approvisionner',
    hpStep1Body: 'Graine de psyllium approvisionnée auprès de fermes contractées à Unjha et dans le nord du Gujarat — la principale région de culture de psyllium au monde. Registres d\'origine tenus par lot.',
    hpStep2Title: 'Nettoyer',
    hpStep2Body: 'Graine nettoyée et triée avant mouture. Dépierrage, séparation par tamis et inspection magnétique à chaque étape pour réduire les matières étrangères.',
    hpStep3Title: 'Moudre',
    hpStep3Body: 'Mouture contrôlée séparant la cosse de la graine selon la pureté et la maille spécifiées par l\'acheteur. Sans blanchiment chimique ni traitement acide.',
    hpStep4Title: 'Analyser',
    hpStep4Body: 'Tests de laboratoire avant conditionnement — pureté, volume de gonflement, humidité, cendres, microbiologie et métaux lourds. Résultats documentés dans le COA partagé avant expédition.',
    hpStep5Title: 'Conditionner et expédier',
    hpStep5Body: 'Emballage alimentaire dans les tailles de sacs spécifiées par l\'acheteur. Documents d\'exportation préparés et vérifiés avant expédition. FOB Mundra ou CIF.',
    hpCredTitle: 'Enregistré auprès des organismes importants pour votre équipe QA.',
    hpIecActive: 'Actif · Code import-export',
    hpFaqTitle: 'Questions posées avant chaque première commande.',
    hpFaqBody: 'MOQ, différences de grades, conformité pharmacopée, dossier documentaire — répondues directement.',
    hpContactTitle: 'Partagez votre spécification. Nous répondons en 24 heures.',
    hpContactBody: 'Grade, maille, conditionnement, port de destination, volume mensuel — envoyez ce que vous avez. Nous reviendrons avec les tarifs, un COA d\'exemple et des options d\'envoi d\'échantillons.',
    hpContactEmailLabel: 'E-mail',
    hpContactResponseLabel: 'Délai de réponse',
    hpContactResponseValue: 'Généralement dans les 4 heures (heures ouvrables IST)',
    hpGetQuote: 'Demander un devis',
    // Section labels
    labelProducts: 'Produits',
    labelWhyUs: 'Pourquoi RM Psyllium',
    labelProcess: 'Processus',
    labelCredentials: 'Accréditations',
    labelStepsOne: '5 étapes · un lot',
    labelContact: 'Contact',
    // Products page
    productsPageKicker: 'Tous les produits',
    productsPageH1Suffix: 'de Gujarat, Inde.',
    productsPageCapacityLabel: 'Capacité annuelle',
    productsPagePurityLabel: 'Grades de pureté',
    productsPageMoqLabel: 'Cde min. · FOB Mundra',
    productsPageGradeKicker: 'Comparaison des grades',
    productsPageGradeTitle: 'Cosse de psyllium : résumé des grades',
    productsPageTableNote: 'Paramètres COA complets disponibles par produit et lot.',
    productsPageViewQuality: 'Voir les documents qualité →',
    productsPageCtaTitle: 'Partagez votre spécification. Obtenez un devis.',
    productsPageCtaBody: 'Indiquez-nous votre produit, grade, maille, conditionnement, destination et volume mensuel. Nous répondons dans les 24 heures avec tarifs et disponibilité.',
    // Quality page
    qualityCoaStatLabel: 'Paramètres d\'analyse COA',
    qualityFssaiStatLabel: 'Installation enregistrée',
    qualityApedaStatLabel: 'Autorisation d\'exportation enregistrée',
    qualityDocTypesLabel: 'Types de documentation',
    qualityCredTitle: 'Accréditations demandées par votre équipe achats.',
    qualityCredLead: 'Enregistrement FSSAI, autorisation d\'exportation APEDA, référencement Spices Board et IEC actif. Certificats actuels disponibles sur demande avant échantillonnage.',
    qualityBadgeRegistered: 'Enregistré',
    qualityBadgeActive: 'Actif',
    qualityFssaiDesc: 'Autorité de sécurité et de normes alimentaires de l\'Inde — enregistrement d\'installation',
    qualityApedaDesc: 'Autorité de développement des exportations de produits agricoles et transformés',
    qualitySpicesBoardDesc: 'Conseil des épices de l\'Inde — enregistrement qualité export',
    qualityIecDesc: 'Code import-export — actif pour toutes les expéditions d\'exportation',
    qualityCtaTitle: 'Besoin de documents avant de commander ?',
    qualityCtaBody: 'Écrivez-nous avec votre produit, exigences de lot et destination. Nous partagerons COA actuel, copies de certificats et statut documentaire dans les 24 heures.',
    qualityCtaEmailBtn: 'E-mail au service export',
    // Contact page
    contactResponseTimeLabel: 'Délai de réponse',
    contactMinOrderLabel: 'Commande min.',
    contactExportDeskLabel: 'Service export',
    contactFacilityLabel: 'Adresse de l\'installation',
    contactCapacityLabel: 'Capacité',
    contactLeadTimeLabel: 'Délai de livraison',
    contactPortsLabel: 'Ports',
    contactEmailBtn: 'Envoyer un e-mail',
    contactWaBtn: 'WhatsApp',
    // FAQ page
    faqPageAnswered: 'répondues.',
    faqPageCommonTitle: 'Questions fréquentes des acheteurs.',
    faqPageCommonBody: 'Tout ce que vous devez savoir avant de passer votre première commande — grades, documentation, délais et conformité.',
    faqPageStillHaveQ: 'D\'autres questions ?',
    faqPageTalkExport: 'Parlez au service export',
    faqPageTalkBody: 'Partagez votre produit, grade et destination. Nous répondons dans les 24 heures.',
    faqPageWaBtn: 'WhatsApp',
    faqPageEmailBtn: 'E-mail au service export',
    faqPageQuickFacts: 'Données clés',
    faqPageMoqFact: 'MOQ',
    faqPageCapacityFact: 'Capacité',
    faqPageLeadFact: 'Délai',
    faqPagePortsFact: 'Ports',
    faqPageGradesFact: 'Grades',
    faqPageSampleFact: 'Échantillon',
    faqPageMinOrderLabel: 'Commande min.',
    faqPageLeadTimeLabel: 'Délai de livraison',
    faqPagePurityLabel: 'Grades de pureté',
    // Footer
    footerBrandDesc: 'RM Psyllium LLP est un fabricant direct et exportateur en vrac de cosse, poudre et graines de psyllium de qualité supérieure. Depuis Siddhpur, Gujarat, notre usine dispose d\'une capacité annuelle de 2 000 MT pour fournir des grades pharmaceutique (USP/EP), alimentaire et fourrager dans le monde entier. MOQ : 1 KG avec COA certifié par laboratoire NABL pour chaque expédition.',
    footerApplications: 'Applications',
    footerResources: 'Ressources',
    footerRequestQuote: 'Demander un devis',
    footerSampleRequest: "Demande d'échantillon",
    // Spec Builder
    sbTitle: 'Demander un devis',
    sbReplyTime: 'Nous répondons dans les 24 heures (heures ouvrables IST)',
    sbNameLabel: 'Nom',
    sbEmailLabel: 'E-mail ou téléphone',
    sbEmailPlaceholder: 'e-mail ou numéro WhatsApp',
    sbProductLabel: 'Produit souhaité',
    sbSelectProduct: 'Sélectionner un produit',
    sbCountryLabel: 'Pays',
    sbCompanyLabel: 'Société',
    sbMessageLabel: 'Message / spécifications',
    sbMessagePlaceholder: 'Grade, volume, certifications, délai de livraison…',
    sbErrorContact: 'Veuillez saisir votre e-mail ou numéro de téléphone.',
    sbSubmitBtn: 'Envoyer la demande',
    // Compliance Grid
    cgItem1Title: 'Examen du COA',
    cgItem1Desc: "Paramètres de pureté, maille, humidité, cendres, volume de gonflement, microbiologie et métaux lourds partagés pour examen par l'acheteur.",
    cgItem2Title: 'Sécurité alimentaire',
    cgItem2Desc: "Documents d'installation, allergènes, microbiologie et manutention disponibles pour les acheteurs alimentaire, compléments et pharma.",
    cgItem3Title: 'Halal & Casher',
    cgItem3Desc: "Les documents Halal et Casher peuvent être partagés lorsque le lot actuel et le marché de l'acheteur le nécessitent.",
    cgItem4Title: 'Traçabilité',
    cgItem4Desc: "Registres d'origine, de traitement, de conditionnement et d'expédition au niveau du lot alignés sur la revue export.",
    cgItem5Title: 'Contrôle des spécifications',
    cgItem5Desc: 'Grade, maille, humidité, volume de gonflement et exigences de conditionnement confirmés avant devis.',
    cgItem6Title: "Documents d'exportation",
    cgItem6Desc: "Facture commerciale, liste de colisage, COA, certificat d'origine, phytosanitaire et fumigation pour les commandes export.",
    // Product detail page
    pdBreadcrumbHome: 'Accueil',
    pdFromGujarat: 'de Gujarat, Inde.',
    pdAvailableGrades: 'Grades disponibles',
    pdPackagingOptions: 'Options de conditionnement',
    pdApplicationsLabel: 'Applications',
    pdApplicationFit: "Adéquation d'application",
    pdWhichGrade: 'Quel grade convient à votre usage ?',
    pdPrimary: 'Principal',
    pdConditional: 'Conditionnel',
    pdNotSuitable: 'Non adapté',
    pdNotUsed: 'Non utilisé',
    pdSpecifications: 'Spécifications',
    pdParameter: 'Paramètre',
    pdBestFor: 'Idéal pour',
    pdGradeDetails: 'Détails des grades',
    pdSelectGrade: 'Sélectionnez votre grade',
    pdByApplication: 'Par application',
    pdCommonQuestions: 'Questions fréquentes',
    pdFaqIntro: 'Questions',
    pdFaqIntroSuffix: 'fréquentes.',
    pdFaqDesc: 'Questions spécifiques au produit des acheteurs — grades, documentation, délais et conformité.',
    pdRequestQuoteLabel: 'Demander un devis',
    pdWithin24h: 'sous 24 heures.',
    pdCompareGradesTitle: 'Comparer les grades de {name}',
    pdReadyToSource: 'Prêt à acheter {name} ?',
    pdCtaBody: 'Partagez votre grade, maille, conditionnement, destination et volume mensuel. Nous répondons avec les tarifs et la disponibilité dans les 24 heures.',
    pdFindMyGrade: 'Trouver mon grade ↓',
    pdLegendPrimary: 'Utilisation principale',
    pdLegendConditional: 'Conditionnel — à confirmer avec QA',
    pdLegendNotSuitable: 'Non adapté',
    pdLegendNotApplicable: 'Non applicable',
    readyToSource: 'Prêt à approvisionner ?', sampleCoaTitle: 'Obtenir un échantillon avec COA',
    sampleCoaBody: 'Partagez vos specs — grade, maille, volume mensuel et destination. Nous répondrons sous 24 heures.',
    moreResources: 'Plus de ressources', topicsCovered: 'Sujets couverts',
    sourcingQuestion: 'Une question sur l\'approvisionnement ?',
    sourcingQuestionBody: 'Notre équipe export répond aux questions techniques et commerciales sur les grades, mailles, certifications et documentation psyllium.',
    insightsKicker: 'Guides d\'achat', insightsTitleSuffix: 'pour les équipes d\'approvisionnement.',
    insightsLead: 'Guides pratiques sur les grades, mailles, conformité et décisions d\'approvisionnement — pour les équipes achats et QA.',
    insightsAudienceLabel: 'Audience', insightsPublishedLabel: 'Publié',
    insightsSourceLabel: 'Source', insightsSourceValue: 'RM Psyllium · Siddhpur, Gujarat', allBuyerGuides: 'Tous les guides →',
    blogTopicsLabel: 'Sujets :', blogAllLabel: 'Tous', blogTopicLabel: 'Sujet',
    blogAuthorLabel: 'Auteur', blogCategoryLabel: 'Catégorie',
    sourceLocation: 'Siddhpur, Gujarat, Inde', relatedArticles: 'Articles connexes',
    industryBuyerApp: 'Application acheteur', industryRequestQuote: 'Demande de devis application',
    industryMatchGrade: 'Trouvez le grade, la maille, l\'emballage et les documents adaptés à votre application.',
    industryUseCases: 'Applications courantes', industryKeySpecs: 'Spécifications clés',
    industryDocuments: 'Documents fournis', industryBuyerNote: 'Prêt à sourcer?',
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
    navQuality: 'Qualität',
    cta: 'Anfrage senden',
    homeTitle: 'Premium-Psyllium für globale Marken.',
    homeSub: 'Saubere, rückverfolgbare Psyllium-Zutaten für Food, Supplements, Pharma und Tiernahrung.',
    specTitle: 'Anfrage senden',
    requestQuoteCta: 'Produktangebot anfordern',
    viewApplicationsCta: 'Anwendungen ansehen',
    supplyFitLabel: 'Liefereignung',
    requestQuoteBandTitle: 'Erhalten Sie Preise, Muster und Dokumente für dieses Produkt.',
    requestQuoteBandLead: 'Senden Sie Ihren Reinheitsgrad, Mesh, Verpackung, Bestimmungsort und monatliches Volumen. Wir antworten mit Verfügbarkeit und nächsten Schritten.',
    complianceTitle: 'Dokumente, die Käufer vor dem Versand benötigen.',
    complianceLead: 'Einkaufs- und QA-Teams können COA-Parameter, Chargenrückverfolgbarkeit und Exportdokumente vor Bestellungen prüfen.',
    complianceChecklist: 'Käufer-Prüfliste',
    complianceChecklistLead: 'Fordern Sie aktuelle Dokumente nach Produkt, Charge und Zielmarkt an, bevor Sie eine Großbestellung bestätigen.',
    insightsReadMore: 'Angebot und Muster anfordern',
    faqTitle: 'Häufig gestellte Fragen.',
    faqLead: 'Häufige Fragen von Einkaufs- und QA-Teams zu Graden, Zertifizierungen, Export und Bestellungen.',
    contactTitle: 'Sprechen Sie mit dem Exportteam.',
    contactLead: 'Teilen Sie Ihr Produkt, Volumen, Ziel und Grad mit. Wir antworten innerhalb von 24 Stunden.',
    productsListTitle: 'Psyllium-Produkte aus Siddhpur, Gujarat.',
    productsListLead: '7 Produktlinien. Grade 85%–99%. Exportverpackung. COA und Dokumente pro Bestellung.',
    insightsListTitle: 'Käufer-Guides und Markteinblicke.',
    blogTitle: 'Ressourcen zu Psyllium-Beschaffung, Compliance und Anwendung.',
    blogLead: 'Technische und beschaffungsbezogene Orientierung für Bulk-Psyllium-Käufer weltweit.',
    // Hero
    heroBadge: 'Psyllium-Hersteller · Gujarat, Indien',
    heroTitle: 'Psyllium in Bulk für Pharma-, Supplement- und Lebensmittelhersteller.',
    heroBody: 'Wir beziehen, mahlen und versenden Psylliumschalen, Pulver und Samen — abgestimmt auf Ihre Reinheitsspezifikation, Mesh und Dokumentationsanforderungen. Was wir anbieten, wird geliefert.',
    heroTrustCoa: 'COA pro Sendung',
    heroLeadTimeLabel: 'Lieferzeit',
    heroSampleLabel: 'Muster',
    heroLeadTimeValue: '7 Tage ab Auftragsbestätigung',
    heroSampleValue: '100–500 g mit COA, Versand in 5 Tagen',
    heroCtaWhatsApp: 'WhatsApp',
    // Stats bar
    statCapacityLabel: 'Jährliche Verarbeitungskapazität',
    statHistoryLabel: 'Jahre Fertigungserfahrung',
    statLeadLabel: 'Auftragsabwicklung',
    statMoqLabel: 'Mindestbestellmenge',
    // Homepage sections
    hpProductsTitle: 'Psyllium-Produkte für Großabnehmer.',
    hpProductsBody: 'Sieben Produktlinien. 85% bis 99% Reinheit. Grad, Mesh und Pharmakopöe-Konformität auf Ihre Formulierung abgestimmt.',
    hpWhyTitle: 'Was uns von einem Handelsexporteur unterscheidet.',
    hpDiff1Title: '40 Jahre Erfahrung in der Fertigung',
    hpDiff1Body: 'Über 40 Jahre Erfahrung in der Psyllium-Herstellung — aus dem Inneren der Verarbeitungsanlage, nicht auf der Handelsseite. Diese operative Tiefenkenntnis schlägt sich direkt in gleichbleibender Qualität und verlässlichen Spezifikationen nieder.',
    hpDiff2Title: 'Individuelle Spezifikationen statt Katalogauswahl',
    hpDiff2Body: 'Grad, Mesh, Verpackung und Dokumentationsanforderungen werden vor der Angebotserstellung erfasst. Ihre Spezifikation ist die Vorgabe — keine Katalogauswahl.',
    hpDiff3Title: 'Produktionswissen statt Handelsmarge',
    hpDiff3Body: 'Wir verarbeiten intern. Wir kaufen kein fertiges Produkt und schlagen es auf. Der Reinheitsgrad, den Sie angeben, wird für Ihre Charge produziert — nicht aus dem Lager eines Dritten umverpackt.',
    hpDiff4Title: 'Vollständige Dokumentation vor dem Versand',
    hpDiff4Body: 'COA, Ursprungszeugnis, Pflanzengesundheitszeugnis, Begasungszeugnis, MSDS und Allergen-Erklärung pro Sendung. Alles vor dem Versand geteilt — von Ihrem QA-Team geprüft, bevor die Container bewegt werden.',
    hpDiff5Title: 'Jede Menge bestellen',
    hpDiff5Body: 'Keine Mindestbestellmenge. Wir liefern 1-KG-Muster für Labortests, 5-KG-Testchargen und volle 20-MT-Container gleichermaßen. Bestellen Sie, was Sie brauchen — skalieren Sie, wenn Sie bereit sind.',
    hpProcessTitle: 'Vom Samen zur exportfertigen Verpackung.',
    hpProcessStepLabel: '5 Schritte · eine Charge',
    hpStep1Title: 'Beschaffen',
    hpStep1Body: 'Psylliumsamen von Vertragsbetrieben in Unjha und Nordgujarat bezogen — der weltweiten Hauptanbauregion für Psyllium. Ursprungsaufzeichnungen werden pro Charge geführt.',
    hpStep2Title: 'Reinigen',
    hpStep2Body: 'Samen vor dem Mahlen gereinigt und sortiert. Entsteinung, Siebseparierung und Magnetinspektion in jeder Stufe zur Reduzierung von Fremdmaterial.',
    hpStep3Title: 'Mahlen',
    hpStep3Body: 'Kontrolliertes Mahlen trennt Schalen von den Samen auf käuferspezifischen Reinheits- und Meshstufen. Keine chemische Bleiche oder Säurebehandlung.',
    hpStep4Title: 'Testen',
    hpStep4Body: 'Laborprüfung vor der Verpackung — Reinheit, Quellvolumen, Feuchtigkeit, Asche, Mikrobiologie und Schwermetalle. Ergebnisse im COA dokumentiert, vor dem Versand geteilt.',
    hpStep5Title: 'Verpacken & Versenden',
    hpStep5Body: 'Lebensmittelechte Verpackung in käuferspezifischen Beutelgrößen. Exportdokumente vor dem Versand vorbereitet und geprüft. FOB Mundra oder CIF.',
    hpCredTitle: 'Registriert bei den Behörden, die Ihr QA-Team kennen möchte.',
    hpIecActive: 'Aktiv · Import-Export-Code',
    hpFaqTitle: 'Fragen, die wir vor jeder ersten Bestellung beantworten.',
    hpFaqBody: 'MOQ, Gradunterschiede, Pharmakopöe-Konformität, Dokumentationspaket — direkt beantwortet.',
    hpContactTitle: 'Senden Sie Ihre Spezifikation. Wir antworten in 24 Stunden.',
    hpContactBody: 'Grad, Mesh, Verpackung, Bestimmungshafen, monatliches Volumen — senden Sie, was Sie haben. Wir antworten mit Preisen, einem COA-Muster und Musterversandoptionen.',
    hpContactEmailLabel: 'E-Mail',
    hpContactResponseLabel: 'Antwortzeit',
    hpContactResponseValue: 'Typischerweise innerhalb von 4 Stunden (IST Geschäftszeiten)',
    hpGetQuote: 'Anfrage senden',
    // Section labels
    labelProducts: 'Produkte',
    labelWhyUs: 'Warum RM Psyllium',
    labelProcess: 'Prozess',
    labelCredentials: 'Zulassungen',
    labelStepsOne: '5 Schritte · eine Charge',
    labelContact: 'Kontakt',
    // Products page
    productsPageKicker: 'Alle Produkte',
    productsPageH1Suffix: 'aus Gujarat, Indien.',
    productsPageCapacityLabel: 'Jahreskapazität',
    productsPagePurityLabel: 'Reinheitsgrade',
    productsPageMoqLabel: 'Mindestbest. · FOB Mundra',
    productsPageGradeKicker: 'Gradvergleich',
    productsPageGradeTitle: 'Psylliumschalen: Gradübersicht',
    productsPageTableNote: 'Vollständige COA-Parameter per Produkt und Charge verfügbar.',
    productsPageViewQuality: 'Qualitätsdokumente ansehen →',
    productsPageCtaTitle: 'Senden Sie Ihre Spezifikation. Erhalten Sie ein Angebot.',
    productsPageCtaBody: 'Teilen Sie uns Ihr Produkt, Grad, Mesh, Verpackung, Bestimmungsort und monatliches Volumen mit. Wir antworten innerhalb von 24 Stunden mit Preisen und Verfügbarkeit.',
    // Quality page
    qualityCoaStatLabel: 'COA-Testparameter',
    qualityFssaiStatLabel: 'Anlage registriert',
    qualityApedaStatLabel: 'Exportgenehmigung registriert',
    qualityDocTypesLabel: 'Dokumentationsarten',
    qualityCredTitle: 'Zulassungen, die Ihr Einkaufsteam anfordern wird.',
    qualityCredLead: 'FSSAI-Anlageregistrierung, APEDA-Exportgenehmigung, Spices Board-Listung und aktiver IEC. Aktuelle Zertifikate auf Anfrage vor der Bemusterung verfügbar.',
    qualityBadgeRegistered: 'Registriert',
    qualityBadgeActive: 'Aktiv',
    qualityFssaiDesc: 'Behörde für Lebensmittelsicherheit und -standards Indiens — Anlageregistrierung',
    qualityApedaDesc: 'Behörde für Exportentwicklung landwirtschaftlicher und verarbeiteter Produkte',
    qualitySpicesBoardDesc: 'Gewürzrat Indiens — Exportqualitätsregistrierung',
    qualityIecDesc: 'Import-Export-Code — aktiv für alle Exportsendungen',
    qualityCtaTitle: 'Dokumente vor der Bestellung benötigt?',
    qualityCtaBody: 'Schreiben Sie uns mit Ihrem Produkt, Chargenanforderungen und Bestimmungsort. Wir teilen aktuellen COA, Zertifikatkopien und Dokumentationsstatus innerhalb von 24 Stunden.',
    qualityCtaEmailBtn: 'E-Mail an Exportteam',
    // Contact page
    contactResponseTimeLabel: 'Antwortzeit',
    contactMinOrderLabel: 'Mindestbestellung',
    contactExportDeskLabel: 'Exportteam',
    contactFacilityLabel: 'Werksadresse',
    contactCapacityLabel: 'Kapazität',
    contactLeadTimeLabel: 'Lieferzeit',
    contactPortsLabel: 'Häfen',
    contactEmailBtn: 'E-Mail senden',
    contactWaBtn: 'WhatsApp',
    // FAQ page
    faqPageAnswered: 'beantwortet.',
    faqPageCommonTitle: 'Häufige Käuferfragen.',
    faqPageCommonBody: 'Alles, was Sie vor Ihrer ersten Bestellung wissen müssen — Grade, Dokumentation, Lieferzeiten und Compliance.',
    faqPageStillHaveQ: 'Noch Fragen?',
    faqPageTalkExport: 'Sprechen Sie mit dem Exportteam',
    faqPageTalkBody: 'Teilen Sie Ihr Produkt, Grad und Bestimmungsort mit. Wir antworten innerhalb von 24 Stunden.',
    faqPageWaBtn: 'WhatsApp',
    faqPageEmailBtn: 'E-Mail an Exportteam',
    faqPageQuickFacts: 'Kurzübersicht',
    faqPageMoqFact: 'MOQ',
    faqPageCapacityFact: 'Kapazität',
    faqPageLeadFact: 'Lieferzeit',
    faqPagePortsFact: 'Häfen',
    faqPageGradesFact: 'Grade',
    faqPageSampleFact: 'Muster',
    faqPageMinOrderLabel: 'Mindestbestellung',
    faqPageLeadTimeLabel: 'Lieferzeit',
    faqPagePurityLabel: 'Reinheitsgrade',
    // Footer
    footerBrandDesc: 'RM Psyllium LLP ist ein Direkt-Hersteller und Bulk-Exporteur von Premium-Psylliumschalen, -pulver und -samen. Mit Sitz in Siddhpur, Gujarat, verfügt unsere Anlage über eine Jahreskapazität von 2.000 MT und liefert weltweit Pharma- (USP/EP), Lebensmittel- und Futtermittelqualitäten. Mindestbestellmenge (MOQ): 1 KG mit NABL-akkreditiertem COA pro Lieferung.',
    footerApplications: 'Anwendungen',
    footerResources: 'Ressourcen',
    footerRequestQuote: 'Anfrage senden',
    footerSampleRequest: 'Musterwunsch',
    // Spec Builder
    sbTitle: 'Angebot anfordern',
    sbReplyTime: 'Wir antworten innerhalb von 24 Stunden (IST Geschäftszeiten)',
    sbNameLabel: 'Name',
    sbEmailLabel: 'E-Mail oder Telefon',
    sbEmailPlaceholder: 'E-Mail oder WhatsApp-Nummer',
    sbProductLabel: 'Produktinteresse',
    sbSelectProduct: 'Produkt auswählen',
    sbCountryLabel: 'Land',
    sbCompanyLabel: 'Unternehmen',
    sbMessageLabel: 'Nachricht / Spezifikationen',
    sbMessagePlaceholder: 'Grad, Volumen, Zertifizierungen, Liefertermin…',
    sbErrorContact: 'Bitte geben Sie Ihre E-Mail oder Telefonnummer ein.',
    sbSubmitBtn: 'Anfrage senden',
    // Compliance Grid
    cgItem1Title: 'COA-Prüfung',
    cgItem1Desc: 'Reinheits-, Mesh-, Feuchtigkeits-, Asche-, Quellvolumen-, Mikrobiologie- und Schwermetallparameter zur Käuferprüfung bereitgestellt.',
    cgItem2Title: 'Lebensmittelsicherheit',
    cgItem2Desc: 'Anlagen-, Allergen-, Mikrobiologie- und Handlingdokumente für Lebensmittel-, Supplement- und Pharmakäufer verfügbar.',
    cgItem3Title: 'Halal & Koscher',
    cgItem3Desc: 'Halal- und Koscher-Dokumente werden bereitgestellt, wenn die aktuelle Charge und der Käufermarkt dies erfordern.',
    cgItem4Title: 'Rückverfolgbarkeit',
    cgItem4Desc: 'Chargenebene-Ursprungs-, Verarbeitungs-, Verpackungs- und Versandaufzeichnungen für die Exportprüfung.',
    cgItem5Title: 'Spezifikationskontrolle',
    cgItem5Desc: 'Grad-, Mesh-, Feuchtigkeits-, Quellvolumen- und Verpackungsanforderungen vor der Angebotserstellung bestätigt.',
    cgItem6Title: 'Exportdokumente',
    cgItem6Desc: 'Handelsrechnung, Packliste, COA, Ursprungszeugnis, Pflanzengesundheitszeugnis und Begasungsunterstützung für Exportaufträge.',
    // Product detail page
    pdBreadcrumbHome: 'Startseite',
    pdFromGujarat: 'aus Gujarat, Indien.',
    pdAvailableGrades: 'Verfügbare Grade',
    pdPackagingOptions: 'Verpackungsoptionen',
    pdApplicationsLabel: 'Anwendungen',
    pdApplicationFit: 'Anwendungseignung',
    pdWhichGrade: 'Welcher Grad passt zu Ihrem Anwendungsfall?',
    pdPrimary: 'Primär',
    pdConditional: 'Bedingt',
    pdNotSuitable: 'Nicht geeignet',
    pdNotUsed: 'Nicht verwendet',
    pdSpecifications: 'Spezifikationen',
    pdParameter: 'Parameter',
    pdBestFor: 'Ideal für',
    pdGradeDetails: 'Graddetails',
    pdSelectGrade: 'Wählen Sie Ihren Grad',
    pdByApplication: 'Nach Anwendung',
    pdCommonQuestions: 'Häufige Fragen',
    pdFaqIntro: 'Häufig gestellte',
    pdFaqIntroSuffix: 'Fragen.',
    pdFaqDesc: 'Produktspezifische Käuferfragen — Grade, Dokumentation, Lieferzeiten und Compliance.',
    pdRequestQuoteLabel: 'Angebot anfordern',
    pdWithin24h: 'innerhalb von 24 Stunden.',
    pdCompareGradesTitle: '{name}-Grade vergleichen',
    pdReadyToSource: 'Bereit, {name} zu beziehen?',
    pdCtaBody: 'Teilen Sie Ihren Grad, Mesh, Verpackung, Bestimmungsort und monatliches Volumen mit. Wir antworten innerhalb von 24 Stunden mit Preisen und Verfügbarkeit.',
    pdFindMyGrade: 'Meinen Grad finden ↓',
    pdLegendPrimary: 'Primäre Eignung',
    pdLegendConditional: 'Bedingt — mit QA bestätigen',
    pdLegendNotSuitable: 'Nicht geeignet',
    pdLegendNotApplicable: 'Nicht anwendbar',
    readyToSource: 'Bereit zur Beschaffung?', sampleCoaTitle: 'Muster mit COA anfordern',
    sampleCoaBody: 'Teilen Sie Ihre Spezifikation — Qualität, Mesh, Monatsvolumen und Zielort. Wir antworten innerhalb von 24 Stunden.',
    moreResources: 'Weitere Ressourcen', topicsCovered: 'Behandelte Themen',
    sourcingQuestion: 'Haben Sie eine Beschaffungsfrage?',
    sourcingQuestionBody: 'Unser Exportteam beantwortet technische und kommerzielle Fragen zu Psyllium-Qualitäten, Mesh, Zertifizierungen und Dokumentation.',
    insightsKicker: 'Einkaufsführer', insightsTitleSuffix: 'für Beschaffungsteams.',
    insightsLead: 'Praktische Leitfäden zu Qualitäten, Mesh, Compliance und Beschaffungsentscheidungen — für Einkaufs- und QA-Teams.',
    insightsAudienceLabel: 'Zielgruppe', insightsPublishedLabel: 'Veröffentlicht',
    insightsSourceLabel: 'Quelle', insightsSourceValue: 'RM Psyllium · Siddhpur, Gujarat', allBuyerGuides: 'Alle Leitfäden →',
    blogTopicsLabel: 'Themen:', blogAllLabel: 'Alle', blogTopicLabel: 'Thema',
    blogAuthorLabel: 'Autor', blogCategoryLabel: 'Kategorie',
    sourceLocation: 'Siddhpur, Gujarat, Indien', relatedArticles: 'Verwandte Artikel',
    industryBuyerApp: 'Käuferanwendung', industryRequestQuote: 'Anwendungsangebot anfordern',
    industryMatchGrade: 'Passen Sie Ihre Anwendung dem richtigen Grade, Mesh, Verpackung und Dokumenten an.',
    industryUseCases: 'Häufige Anwendungen', industryKeySpecs: 'Wichtige Spezifikationen',
    industryDocuments: 'Dokumente, die Sie erhalten', industryBuyerNote: 'Bereit zur Beschaffung?',
  },
  nl: {
    navProducts: 'Producten', navRegions: 'Regio\'s', navIndustries: 'Industrieën',
    navCompliance: 'Compliance', navInsights: 'Inkoopgidsen', navFaq: 'FAQ',
    navContact: 'Contact', navBlog: 'Blog', navQuality: 'Kwaliteit', cta: 'Offerte aanvragen',
    homeTitle: 'Bulk psyllium vanuit Gujarat, India.',
    homeSub: 'Psylliumvlozaad, vlozaadpoeder, zaden, khakha-poeder en veevoer met exportverpakking en koperdocumentatie.',
    specTitle: 'Bulk offerte aanvragen', requestQuoteCta: 'Productofferte aanvragen',
    viewApplicationsCta: 'Toepassingen bekijken', supplyFitLabel: 'Leveringsgeschiktheid',
    requestQuoteBandTitle: 'Ontvang prijzen, monsters en documenten voor dit product.',
    requestQuoteBandLead: 'Deel uw kwaliteit, mesh, verpakking, bestemmingshaven en maandelijks volume. Wij reageren binnen 24 uur met prijzen en een voorbeeld-COA.',
    complianceTitle: 'Elk document dat uw QA-team zal opvragen.',
    complianceLead: 'COA-parameters, lotherkomst, microbiologie, zware metalen en volledige exportdocumentatie — gedeeld voordat het monster verzonden wordt, niet nadat de inkooporder is getekend.',
    complianceChecklist: 'Verificatiechecklist voor kopers',
    complianceChecklistLead: 'Vraag om actuele documenten per product, lot en bestemmingsmarkt voordat u een bulkorder bevestigt.',
    insightsReadMore: 'Volledige gids lezen', faqTitle: 'Vragen die we beantwoorden vóór elke eerste bestelling.',
    faqLead: 'MOQ, graakverschillen, farmacopee-compliance, documentatie, levertijden en wat er gebeurt tussen de inkooporder en de verzending.',
    contactTitle: 'Praat met de exportafdeling.', contactLead: 'Deel uw product, volume, bestemming en kwaliteit. Wij reageren binnen 24 uur.',
    productsListTitle: 'Zes psyllium kwaliteitsgraden. Allemaal exportklaar.',
    productsListLead: 'Van 85% voedingskwaliteit tot 99% USP/EP/IP farmaceutisch. Aangepaste mesh, verpakking en volledig COA per zending.',
    insightsListTitle: 'Inkoopgidsen en marktinzichten.', blogTitle: 'Inkoopgidsen voor psylliumkopers.',
    blogLead: 'Graadselectie, documentatievereisten en wat u uw leverancier moet vragen vóór de eerste bestelling.',
    heroBadge: 'Psyllium fabrikant · Gujarat, India',
    heroTitle: 'Bulk psyllium voor farma-, supplement- en voedselproducenten.',
    heroBody: 'Wij sourcen, malen en verzenden psylliumvlozaad, poeder en zaad — afgestemd op uw zuiverheidsspecificatie, mesh en documentatievereiste. Wat wij offreren, wordt verzonden.',
    heroTrustCoa: 'COA per zending', heroLeadTimeLabel: 'Levertijd', heroSampleLabel: 'Monster',
    heroLeadTimeValue: '7 dagen na bevestiging', heroSampleValue: '100–500 g met COA, verzonden in 5 dagen',
    heroCtaWhatsApp: 'WhatsApp', statCapacityLabel: 'Jaarlijkse verwerkingscapaciteit',
    statHistoryLabel: 'jaar productiervaring', statLeadLabel: 'Bestelling tot verzending',
    statMoqLabel: 'Minimale bestelhoeveelheid', hpProductsTitle: 'Psylliumproducten voor groothandelkopers.',
    hpProductsBody: 'Zeven productlijnen. 85% tot 99% zuiverheid. Kwaliteit, mesh en farmacopee-compliance afgestemd op uw formulering.',
    hpWhyTitle: 'Wat ons onderscheidt van een handelsdeskexporteur.',
    hpDiff1Title: '40 jaar op de productieploesvloer',
    hpDiff1Body: 'Meer dan 40 jaar ervaring in psylliumproductie — vanuit de verwerkingsfaciliteit zelf, niet aan de handelskant. Die operationele dieptekennis vertaalt zich direct in consistente kwaliteit en betrouwbare specificaties.',
    hpDiff2Title: 'Aangepaste specificaties, geen catalogusselecties',
    hpDiff2Body: 'Kwaliteit, mesh, verpakking en documentatievereisten worden vastgelegd voordat wij offreren. Uw specificatie is de opdracht — geen catalogusselectie.',
    hpDiff3Title: 'Productiekennis, geen handelsmarge',
    hpDiff3Body: 'Wij verwerken intern. Wij kopen geen eindproduct en slaan het niet op. De kwaliteit die u specificeert, is de kwaliteit die voor uw lot wordt geproduceerd — niet herverpakt uit het voorraad van iemand anders.',
    hpDiff4Title: 'Volledige documentatie vóór verzending',
    hpDiff4Body: 'COA, oorsprongscertificaat, fytosanitair, fumigatie, MSDS en allergenenverklaring per zending. Alles gedeeld vóór verzending — beoordeeld door uw QA-team voordat containers bewegen.',
    hpDiff5Title: 'Bestel elke hoeveelheid',
    hpDiff5Body: 'Geen minimale bestelhoeveelheid. We leveren 1 KG monsters voor laboratoriumtests, proefpartijen van 5 KG en volledige containers van 20 MT. Bestel wat u nodig heeft — schaal op wanneer u klaar bent.',
    hpProcessTitle: 'Van zaad tot exportklare verpakking.', hpProcessStepLabel: '5 stappen · één lot',
    hpStep1Title: 'Sourcen', hpStep1Body: 'Psylliumzaad gesourcet van gecontracteerde boerderijen in Unjha en Noord-Gujarat — de belangrijkste psylliumteeltregio ter wereld. Herkomstregistraties per lot bijgehouden.',
    hpStep2Title: 'Reinigen', hpStep2Body: 'Zaad gereinigd en gesorteerd vóór maling. Steenverwijdering, zeefseparatie en magnetische inspectie in elke fase om vreemd materiaal te verminderen.',
    hpStep3Title: 'Malen', hpStep3Body: 'Gecontroleerde maling scheidt vlies van zaad tot door de koper gespecificeerde zuiverheid en mesh. Geen chemisch bleken of zuurbehandeling.',
    hpStep4Title: 'Testen', hpStep4Body: 'Laboratoriumtests vóór verpakking — zuiverheid, zwelvolume, vocht, as, microbiologie en zware metalen. Resultaten gedocumenteerd in COA gedeeld vóór verzending.',
    hpStep5Title: 'Verpakken & Verzenden', hpStep5Body: 'Levensmiddelengeschikte verpakking in door de koper gespecificeerde zakgroottes. Exportdocumenten voorbereid en beoordeeld vóór verzending. FOB Mundra of CIF.',
    hpCredTitle: 'Geregistreerd bij de instanties die uw QA-team kennen wil.', hpIecActive: 'Actief · Import Export Code',
    hpFaqTitle: 'Vragen die we bij elke eerste bestelling krijgen.',
    hpFaqBody: 'MOQ, graakverschillen, farmacopee-compliance, documentatiepakket — direct beantwoord.',
    hpContactTitle: 'Deel uw specificatie. Wij reageren binnen 24 uur.',
    hpContactBody: 'Kwaliteit, mesh, verpakking, bestemmingshaven, maandelijks volume — stuur wat u heeft. Wij reageren met prijzen, een voorbeeld-COA en monsterversendopties.',
    hpContactEmailLabel: 'E-mail', hpContactResponseLabel: 'Reactietijd',
    hpContactResponseValue: 'Normaal binnen 4 uur (IST kantooruren)', hpGetQuote: 'Offerte aanvragen',
    labelProducts: 'Producten', labelWhyUs: 'Waarom RM Psyllium', labelProcess: 'Proces',
    labelCredentials: 'Certificeringen', labelStepsOne: '5 stappen · één lot', labelContact: 'Contact',
    productsPageKicker: 'Alle producten', productsPageH1Suffix: 'vanuit Gujarat, India.',
    productsPageCapacityLabel: 'Jaarlijkse capaciteit', productsPagePurityLabel: 'Zuiverheidsgraden',
    productsPageMoqLabel: 'Min. bestelling · FOB Mundra', productsPageGradeKicker: 'Graakvergelijking',
    productsPageGradeTitle: 'Psylliumvlies: graadoverzicht', productsPageTableNote: 'Volledige COA-parameters beschikbaar per product en lot.',
    productsPageViewQuality: 'Kwaliteitsdocumenten bekijken →', productsPageCtaTitle: 'Deel uw specificatie. Ontvang een offerte.',
    productsPageCtaBody: 'Vertel ons uw product, kwaliteit, mesh, verpakking, bestemming en maandelijks volume. Wij reageren binnen 24 uur met prijzen en beschikbaarheid.',
    qualityCoaStatLabel: 'COA testparameters', qualityFssaiStatLabel: 'Fabriek geregistreerd',
    qualityApedaStatLabel: 'Exportgoedkeuring geregistreerd', qualityDocTypesLabel: 'Documentatietypes',
    qualityCredTitle: 'Certificeringen die uw inkoopteam zal opvragen.',
    qualityCredLead: 'FSSAI-fabrieksregistratie, APEDA-exportgoedkeuring, Spices Board-vermelding en actieve IEC. Actuele certificaten beschikbaar op aanvraag vóór bemonstering.',
    qualityBadgeRegistered: 'Geregistreerd', qualityBadgeActive: 'Actief',
    qualityFssaiDesc: 'Voedselveiligheid en -normen autoriteit van India — fabrieksregistratie',
    qualityApedaDesc: 'Exportontwikkelingsautoriteit voor landbouw- en verwerkte voedingsproducten',
    qualitySpicesBoardDesc: 'Kruidentraad van India — exportkwaliteitsregistratie',
    qualityIecDesc: 'Import Export Code — actief voor alle exportzendingen',
    qualityCtaTitle: 'Documenten nodig vóór bestelling?',
    qualityCtaBody: 'E-mail ons met uw product, lotvereisten en bestemming. Wij delen actuele COA, certificaatkopieën en documentatiestatus binnen 24 uur.',
    qualityCtaEmailBtn: 'E-mail exportafdeling', contactResponseTimeLabel: 'Reactietijd',
    contactMinOrderLabel: 'Minimale bestelling', contactExportDeskLabel: 'Exportafdeling',
    contactFacilityLabel: 'Fabrieksadres', contactCapacityLabel: 'Capaciteit',
    contactLeadTimeLabel: 'Levertijd', contactPortsLabel: 'Havens', contactEmailBtn: 'E-mail ons', contactWaBtn: 'WhatsApp',
    faqPageAnswered: 'beantwoord.', faqPageCommonTitle: 'Veelgestelde kopervragen.',
    faqPageCommonBody: 'Alles wat u moet weten voordat u uw eerste bestelling plaatst — kwaliteiten, documentatie, levertijden en compliance.',
    faqPageStillHaveQ: 'Nog vragen?', faqPageTalkExport: 'Praat met de exportafdeling',
    faqPageTalkBody: 'Deel uw product, kwaliteit en bestemming. Wij reageren binnen 24 uur.',
    faqPageWaBtn: 'WhatsApp', faqPageEmailBtn: 'E-mail exportafdeling', faqPageQuickFacts: 'Snelle feiten',
    faqPageMoqFact: 'MOQ', faqPageCapacityFact: 'Capaciteit', faqPageLeadFact: 'Levertijd',
    faqPagePortsFact: 'Havens', faqPageGradesFact: 'Kwaliteiten', faqPageSampleFact: 'Monster',
    faqPageMinOrderLabel: 'Minimale bestelling', faqPageLeadTimeLabel: 'Levertijd', faqPagePurityLabel: 'Zuiverheidsgraden',
    footerBrandDesc: 'RM Psyllium LLP is een rechtstreekse fabrikant en bulkexporteur van premium psylliumvliezen, -poeder en -zaden. Vanuit Siddhpur, Gujarat, heeft onze fabriek een jaarlijkse capaciteit van 2.000 MT voor de wereldwijde levering van farmaceutische (USP/EP), levensmiddelen- en diervoederkwaliteiten. MOQ: 1 KG met NABL-geaccrediteerd COA per zending.',
    footerApplications: 'Toepassingen', footerResources: 'Bronnen', footerRequestQuote: 'Offerte aanvragen', footerSampleRequest: 'Monsteraanvraag',
    sbTitle: 'Offerte aanvragen', sbReplyTime: 'Wij reageren binnen 24 uur (IST kantooruren)',
    sbNameLabel: 'Naam', sbEmailLabel: 'E-mail of telefoon', sbEmailPlaceholder: 'e-mail of WhatsApp-nummer',
    sbProductLabel: 'Productinteresse', sbSelectProduct: 'Selecteer een product', sbCountryLabel: 'Land',
    sbCompanyLabel: 'Bedrijf', sbMessageLabel: 'Bericht / specificaties', sbMessagePlaceholder: 'Kwaliteit, volume, certificeringen, levertijdlijn…',
    sbErrorContact: 'Voer uw e-mailadres of telefoonnummer in.', sbSubmitBtn: 'Aanvraag versturen',
    cgItem1Title: 'COA-beoordeling', cgItem1Desc: 'Zuiverheids-, mesh-, vocht-, as-, zwelvolume-, microbiologie- en zware metaalparameters gedeeld voor koperbeoordeling.',
    cgItem2Title: 'Voedselveiligheid', cgItem2Desc: 'Fabriek-, allergeen-, microbiologie- en verwerkingsdocumenten beschikbaar voor voedings-, supplement- en farmakopers.',
    cgItem3Title: 'Halal & Koosjer', cgItem3Desc: 'Halal- en koosjerdocumenten kunnen worden gedeeld wanneer het huidige lot en de kopersmarkt dit vereisen.',
    cgItem4Title: 'Traceerbaarheid', cgItem4Desc: 'Lotherkomst, verwerking, verpakking en verzendregistraties op lotniveau afgestemd op exportbeoordeling.',
    cgItem5Title: 'Specificatiecontrole', cgItem5Desc: 'Kwaliteit, mesh, vocht, zwelvolume en verpakkingsvereisten bevestigd vóór offerte.',
    cgItem6Title: 'Exportdocumenten', cgItem6Desc: 'Handelsfactuur, paklijst, COA, oorsprongscertificaat, fytosanitair en fumigatie-ondersteuning voor exportorders.',
    pdBreadcrumbHome: 'Startpagina', pdFromGujarat: 'vanuit Gujarat, India.', pdAvailableGrades: 'Beschikbare kwaliteiten',
    pdPackagingOptions: 'Verpakkingsopties', pdApplicationsLabel: 'Toepassingen', pdApplicationFit: 'Toepassingsgeschiktheid',
    pdWhichGrade: 'Welke kwaliteit past bij uw toepassing?', pdPrimary: 'Primair', pdConditional: 'Voorwaardelijk',
    pdNotSuitable: 'Niet geschikt', pdNotUsed: 'Niet gebruikt', pdSpecifications: 'Specificaties',
    pdParameter: 'Parameter', pdBestFor: 'Geschikt voor', pdGradeDetails: 'Kwaliteitsdetails',
    pdSelectGrade: 'Selecteer uw kwaliteit', pdByApplication: 'Op toepassing', pdCommonQuestions: 'Veelgestelde vragen',
    pdFaqIntro: 'Veelgestelde', pdFaqIntroSuffix: 'vragen.',
    pdFaqDesc: 'Productspecifieke vragen van kopers — kwaliteiten, documentatie, levertijden en compliance.',
    pdRequestQuoteLabel: 'Offerte aanvragen', pdWithin24h: 'binnen 24 uur.',
    pdCompareGradesTitle: '{name} kwaliteiten vergelijken', pdReadyToSource: 'Klaar om {name} te sourcen?',
    pdCtaBody: 'Deel uw kwaliteit, mesh, verpakking, bestemming en maandelijks volume. Wij reageren binnen 24 uur met prijzen en beschikbaarheid.',
    pdFindMyGrade: 'Mijn kwaliteit vinden ↓', pdLegendPrimary: 'Primaire geschiktheid',
    pdLegendConditional: 'Voorwaardelijk — bevestig met QA', pdLegendNotSuitable: 'Niet geschikt', pdLegendNotApplicable: 'Niet van toepassing',
    readyToSource: 'Klaar om in te kopen?', sampleCoaTitle: 'Monster met COA aanvragen',
    sampleCoaBody: 'Deel uw specificatie — kwaliteit, mesh, maandvolume en bestemming. Wij reageren binnen 24 uur.',
    moreResources: 'Meer resources', topicsCovered: 'Behandelde onderwerpen',
    sourcingQuestion: 'Heeft u een inkoopvraag?',
    sourcingQuestionBody: 'Ons exportteam beantwoordt technische en commerciële vragen over psyllium-kwaliteiten, mesh, certificeringen en documentatie.',
    insightsKicker: 'Inkoopgidsen', insightsTitleSuffix: 'voor inkoopteams.',
    insightsLead: 'Praktische gidsen over kwaliteiten, mesh, compliance en inkoopbeslissingen — voor inkoop- en QA-teams.',
    insightsAudienceLabel: 'Doelgroep', insightsPublishedLabel: 'Gepubliceerd',
    insightsSourceLabel: 'Bron', insightsSourceValue: 'RM Psyllium · Siddhpur, Gujarat', allBuyerGuides: 'Alle gidsen →',
    blogTopicsLabel: 'Onderwerpen:', blogAllLabel: 'Alle', blogTopicLabel: 'Onderwerp',
    blogAuthorLabel: 'Auteur', blogCategoryLabel: 'Categorie',
    sourceLocation: 'Siddhpur, Gujarat, India', relatedArticles: 'Gerelateerde artikelen',
    industryBuyerApp: 'Koper toepassing', industryRequestQuote: 'Toepassingsofferte aanvragen',
    industryMatchGrade: 'Koppel uw toepassing aan de juiste kwaliteit, mesh, verpakking en documenten.',
    industryUseCases: 'Veelvoorkomende toepassingen', industryKeySpecs: 'Belangrijke specificaties',
    industryDocuments: 'Documenten die u ontvangt', industryBuyerNote: 'Klaar om te sourcen?',
  },
  it: {
    navProducts: 'Prodotti', navRegions: 'Regioni', navIndustries: 'Settori',
    navCompliance: 'Conformità', navInsights: 'Guide Acquisti', navFaq: 'FAQ',
    navContact: 'Contatti', navBlog: 'Blog', navQuality: 'Qualità', cta: 'Richiedi Preventivo',
    homeTitle: 'Fornitura bulk di psyllium dal Gujarat, India.',
    homeSub: 'Buccia di psyllium, polvere di buccia, semi, polvere di khakha e mangimi con imballaggio export e documentazione.',
    specTitle: 'Richiedi preventivo bulk', requestQuoteCta: 'Richiedi Preventivo Prodotto',
    viewApplicationsCta: 'Visualizza Applicazioni', supplyFitLabel: 'Idoneità fornitura',
    requestQuoteBandTitle: 'Ottieni prezzi, campioni e documenti per questo prodotto.',
    requestQuoteBandLead: 'Condividi grado, mesh, imballaggio, porto di destinazione e volume mensile. Risponderemo entro 24 ore con prezzi e COA campione.',
    complianceTitle: 'Ogni documento che il tuo team QA richiederà.',
    complianceLead: 'Parametri COA, origine del lotto, microbiologia, metalli pesanti e documentazione export completa — condivisi prima della spedizione del campione, non dopo la firma dell\'ordine.',
    complianceChecklist: 'Checklist di verifica acquirente',
    complianceChecklistLead: 'Richiedi documenti aggiornati per prodotto, lotto e mercato di destinazione prima di confermare un ordine bulk.',
    insightsReadMore: 'Leggi la guida completa', faqTitle: 'Domande che rispondiamo prima di ogni primo ordine.',
    faqLead: 'MOQ, differenze di grado, conformità farmacopea, documentazione, tempi di consegna e cosa succede tra l\'ordine e la spedizione.',
    contactTitle: 'Parla con l\'ufficio export.', contactLead: 'Condividi prodotto, volume, destinazione e grado. Rispondiamo entro 24 ore.',
    productsListTitle: 'Sei gradi di psyllium. Tutti pronti per l\'export.',
    productsListLead: 'Dal 85% qualità alimentare al 99% USP/EP/IP farmaceutico. Mesh personalizzata, imballaggio e COA completo per spedizione.',
    insightsListTitle: 'Guide acquisti e approfondimenti di mercato.', blogTitle: 'Guide di approvvigionamento per acquirenti di psyllium.',
    blogLead: 'Selezione del grado, requisiti documentali e cosa chiedere al fornitore prima del primo ordine.',
    heroBadge: 'Produttore di psyllium · Gujarat, India',
    heroTitle: 'Psyllium bulk per produttori farmaceutici, integratori e alimentari.',
    heroBody: 'Reperiamo, maciniamo e spediamo buccia di psyllium, polvere e seme — corrispondente alle tue specifiche di purezza, mesh e documentazione. Quello che quotizziamo è quello che spediamo.',
    heroTrustCoa: 'COA per spedizione', heroLeadTimeLabel: 'Tempi di consegna', heroSampleLabel: 'Campione',
    heroLeadTimeValue: '7 giorni dalla conferma', heroSampleValue: '100–500 g con COA, spedito in 5 giorni',
    heroCtaWhatsApp: 'WhatsApp', statCapacityLabel: 'Capacità di elaborazione annuale',
    statHistoryLabel: 'anni di esperienza produttiva', statLeadLabel: 'Ordine alla spedizione', statMoqLabel: 'Quantità minima d\'ordine',
    hpProductsTitle: 'Prodotti di psyllium per acquirenti bulk.',
    hpProductsBody: 'Sette linee di prodotto. Purezza dall\'85% al 99%. Grado, mesh e conformità farmacopea adattati alla tua formulazione.',
    hpWhyTitle: 'Cosa ci distingue da un esportatore commerciale.',
    hpDiff1Title: '40 anni dentro la fabbrica',
    hpDiff1Body: 'Oltre 40 anni di esperienza nella produzione di psyllium — dall\'interno dell\'impianto di lavorazione, non dal lato commerciale. Questa profondità di conoscenza operativa si traduce direttamente in qualità costante e specifiche affidabili.',
    hpDiff2Title: 'Specifiche personalizzate, non selezioni da catalogo',
    hpDiff2Body: 'Grado, mesh, imballaggio e requisiti documentali acquisiti prima di quotare. La tua specifica è il brief — non una selezione da catalogo.',
    hpDiff3Title: 'Conoscenza produttiva, non margine commerciale',
    hpDiff3Body: 'Processiamo internamente. Non compriamo prodotto finito e lo rivediamo. Il grado che specifichi è il grado prodotto per il tuo lotto — non riconfezionato dall\'inventario di qualcun altro.',
    hpDiff4Title: 'Documentazione completa prima della spedizione',
    hpDiff4Body: 'COA, certificato di origine, fitosanitario, fumigazione, MSDS e dichiarazione allergeni per spedizione. Tutto condiviso prima della spedizione — revisionato dal tuo team QA prima che i container si muovano.',
    hpDiff5Title: 'Ordina qualsiasi quantità',
    hpDiff5Body: 'Nessun ordine minimo. Forniamo campioni da 1 KG per test di laboratorio, lotti di prova da 5 KG e container completi da 20 MT. Ordina ciò di cui hai bisogno — scala quando sei pronto.',
    hpProcessTitle: 'Dal seme all\'imballaggio pronto per l\'export.', hpProcessStepLabel: '5 fasi · un lotto',
    hpStep1Title: 'Approvvigionamento', hpStep1Body: 'Seme di psyllium approvvigionato da aziende agricole convenzionate in Unjha e nel Gujarat settentrionale — la principale regione di coltivazione di psyllium al mondo. Registrazioni di origine mantenute per lotto.',
    hpStep2Title: 'Pulitura', hpStep2Body: 'Seme pulito e classificato prima della macinazione. Disabbiatura, separazione a setaccio e ispezione magnetica in ogni fase per ridurre le impurità.',
    hpStep3Title: 'Macinazione', hpStep3Body: 'La macinazione controllata separa la buccia dal seme secondo purezza e mesh specificata dall\'acquirente. Nessun candeggio chimico o trattamento acido.',
    hpStep4Title: 'Test', hpStep4Body: 'Test di laboratorio prima dell\'imballaggio — purezza, volume di rigonfiamento, umidità, ceneri, microbiologia e metalli pesanti. Risultati documentati nel COA condiviso prima della spedizione.',
    hpStep5Title: 'Imballaggio & Spedizione', hpStep5Body: 'Imballaggio per uso alimentare nelle dimensioni del sacco specificate dall\'acquirente. Documenti export preparati e revisionati prima della spedizione. FOB Mundra o CIF.',
    hpCredTitle: 'Registrato presso gli enti che contano per il tuo team QA.', hpIecActive: 'Attivo · Codice Import Export',
    hpFaqTitle: 'Domande che riceviamo prima di ogni primo ordine.',
    hpFaqBody: 'MOQ, differenze di grado, conformità farmacopea, pacchetto documentale — risposto direttamente.',
    hpContactTitle: 'Condividi la tua specifica. Rispondiamo in 24 ore.',
    hpContactBody: 'Grado, mesh, imballaggio, porto di destinazione, volume mensile — invia quello che hai. Risponderemo con prezzi, un COA campione e opzioni di spedizione campione.',
    hpContactEmailLabel: 'Email', hpContactResponseLabel: 'Tempo di risposta',
    hpContactResponseValue: 'Tipicamente entro 4 ore (orario lavorativo IST)', hpGetQuote: 'Richiedi Preventivo',
    labelProducts: 'Prodotti', labelWhyUs: 'Perché RM Psyllium', labelProcess: 'Processo',
    labelCredentials: 'Certificazioni', labelStepsOne: '5 fasi · un lotto', labelContact: 'Contatti',
    productsPageKicker: 'Tutti i prodotti', productsPageH1Suffix: 'dal Gujarat, India.',
    productsPageCapacityLabel: 'Capacità annuale', productsPagePurityLabel: 'Gradi di purezza',
    productsPageMoqLabel: 'Min. ordine · FOB Mundra', productsPageGradeKicker: 'Confronto gradi',
    productsPageGradeTitle: 'Buccia di psyllium: riepilogo gradi', productsPageTableNote: 'Parametri COA completi disponibili per prodotto e lotto.',
    productsPageViewQuality: 'Visualizza documenti qualità →', productsPageCtaTitle: 'Condividi la tua specifica. Ottieni un preventivo.',
    productsPageCtaBody: 'Comunicaci prodotto, grado, mesh, imballaggio, destinazione e volume mensile. Risponderemo entro 24 ore con prezzi e disponibilità.',
    qualityCoaStatLabel: 'Parametri test COA', qualityFssaiStatLabel: 'Struttura registrata',
    qualityApedaStatLabel: 'Autorizzazione export registrata', qualityDocTypesLabel: 'Tipi di documentazione',
    qualityCredTitle: 'Certificazioni che il tuo team acquisti richiederà.',
    qualityCredLead: 'Registrazione struttura FSSAI, autorizzazione export APEDA, listing Spices Board e IEC attivo. Certificati aggiornati disponibili su richiesta prima del campionamento.',
    qualityBadgeRegistered: 'Registrato', qualityBadgeActive: 'Attivo',
    qualityFssaiDesc: 'Autorità per la sicurezza e gli standard alimentari dell\'India — registrazione struttura',
    qualityApedaDesc: 'Autorità per lo sviluppo dell\'export di prodotti agricoli e trasformati',
    qualitySpicesBoardDesc: 'Spices Board of India — registrazione qualità export',
    qualityIecDesc: 'Codice Import Export — attivo per tutte le spedizioni export',
    qualityCtaTitle: 'Hai bisogno di documenti prima di ordinare?',
    qualityCtaBody: 'Scrivici con il tuo prodotto, requisiti del lotto e destinazione. Condivideremo COA aggiornato, copie certificati e stato documentale entro 24 ore.',
    qualityCtaEmailBtn: 'Email ufficio export', contactResponseTimeLabel: 'Tempo di risposta',
    contactMinOrderLabel: 'Ordine minimo', contactExportDeskLabel: 'Ufficio export',
    contactFacilityLabel: 'Indirizzo struttura', contactCapacityLabel: 'Capacità',
    contactLeadTimeLabel: 'Tempi di consegna', contactPortsLabel: 'Porti', contactEmailBtn: 'Scrivici', contactWaBtn: 'WhatsApp',
    faqPageAnswered: 'risposto.', faqPageCommonTitle: 'Domande comuni degli acquirenti.',
    faqPageCommonBody: 'Tutto quello che devi sapere prima di effettuare il primo ordine — gradi, documentazione, tempi di consegna e conformità.',
    faqPageStillHaveQ: 'Hai ancora domande?', faqPageTalkExport: 'Parla con l\'ufficio export',
    faqPageTalkBody: 'Condividi prodotto, grado e destinazione. Rispondiamo entro 24 ore.',
    faqPageWaBtn: 'WhatsApp', faqPageEmailBtn: 'Email ufficio export', faqPageQuickFacts: 'Dati rapidi',
    faqPageMoqFact: 'MOQ', faqPageCapacityFact: 'Capacità', faqPageLeadFact: 'Consegna',
    faqPagePortsFact: 'Porti', faqPageGradesFact: 'Gradi', faqPageSampleFact: 'Campione',
    faqPageMinOrderLabel: 'Ordine minimo', faqPageLeadTimeLabel: 'Tempi di consegna', faqPagePurityLabel: 'Gradi di purezza',
    footerBrandDesc: 'RM Psyllium LLP è un produttore diretto ed esportatore all\'ingrosso di buccia, polvere e semi di psyllium di qualità premium. Con sede a Siddhpur, Gujarat, il nostro stabilimento ha una capacità annua di 2.000 MT e fornisce gradi farmaceutico (USP/EP), alimentare e zootecnico in tutto il mondo. MOQ: 1 KG con COA certificato da laboratorio NABL per ogni spedizione.',
    footerApplications: 'Applicazioni', footerResources: 'Risorse', footerRequestQuote: 'Richiedi un Preventivo', footerSampleRequest: 'Richiesta Campione',
    sbTitle: 'Richiedi un preventivo', sbReplyTime: 'Rispondiamo entro 24 ore (orario lavorativo IST)',
    sbNameLabel: 'Nome', sbEmailLabel: 'Email o Telefono', sbEmailPlaceholder: 'email o numero WhatsApp',
    sbProductLabel: 'Interesse prodotto', sbSelectProduct: 'Seleziona un prodotto', sbCountryLabel: 'Paese',
    sbCompanyLabel: 'Azienda', sbMessageLabel: 'Messaggio / specifiche', sbMessagePlaceholder: 'Grado, volume, certificazioni, tempistica di consegna…',
    sbErrorContact: 'Inserisci la tua email o numero di telefono.', sbSubmitBtn: 'Invia Richiesta',
    cgItem1Title: 'Revisione COA', cgItem1Desc: 'Parametri di purezza, mesh, umidità, ceneri, volume di rigonfiamento, microbiologia e metalli pesanti condivisi per revisione acquirente.',
    cgItem2Title: 'Sicurezza Alimentare', cgItem2Desc: 'Documenti di struttura, allergeni, microbiologia e gestione disponibili per acquirenti alimentari, integratori e farmaceutici.',
    cgItem3Title: 'Halal & Kosher', cgItem3Desc: 'Documenti Halal e Kosher disponibili quando il lotto corrente e il mercato dell\'acquirente li richiedono.',
    cgItem4Title: 'Tracciabilità', cgItem4Desc: 'Registrazioni di origine, lavorazione, imballaggio e spedizione a livello di lotto allineate alla revisione export.',
    cgItem5Title: 'Controllo Specifiche', cgItem5Desc: 'Grado, mesh, umidità, volume di rigonfiamento e requisiti di imballaggio confermati prima del preventivo.',
    cgItem6Title: 'Documenti Export', cgItem6Desc: 'Fattura commerciale, packing list, COA, certificato di origine, fitosanitario e supporto fumigazione per ordini export.',
    pdBreadcrumbHome: 'Home', pdFromGujarat: 'dal Gujarat, India.', pdAvailableGrades: 'Gradi disponibili',
    pdPackagingOptions: 'Opzioni di imballaggio', pdApplicationsLabel: 'Applicazioni', pdApplicationFit: 'Idoneità applicazione',
    pdWhichGrade: 'Quale grado si adatta al tuo caso d\'uso?', pdPrimary: 'Primario', pdConditional: 'Condizionale',
    pdNotSuitable: 'Non adatto', pdNotUsed: 'Non utilizzato', pdSpecifications: 'Specifiche',
    pdParameter: 'Parametro', pdBestFor: 'Ideale per', pdGradeDetails: 'Dettagli grado',
    pdSelectGrade: 'Seleziona il tuo grado', pdByApplication: 'Per applicazione', pdCommonQuestions: 'Domande frequenti',
    pdFaqIntro: 'Domande frequenti', pdFaqIntroSuffix: 'degli acquirenti.',
    pdFaqDesc: 'Domande specifiche del prodotto dagli acquirenti — gradi, documentazione, tempi di consegna e conformità.',
    pdRequestQuoteLabel: 'Richiedi Preventivo', pdWithin24h: 'entro 24 ore.',
    pdCompareGradesTitle: 'Confronta gradi {name}', pdReadyToSource: 'Pronto ad approvvigionare {name}?',
    pdCtaBody: 'Condividi grado, mesh, imballaggio, destinazione e volume mensile. Rispondiamo entro 24 ore con prezzi e disponibilità.',
    pdFindMyGrade: 'Trova il mio grado ↓', pdLegendPrimary: 'Idoneità primaria',
    pdLegendConditional: 'Condizionale — conferma con QA', pdLegendNotSuitable: 'Non adatto', pdLegendNotApplicable: 'Non applicabile',
    readyToSource: 'Pronto a comprare?', sampleCoaTitle: 'Richiedere un campione con COA',
    sampleCoaBody: 'Condividi le tue specifiche — grado, mesh, volume mensile e destinazione. Risponderemo entro 24 ore.',
    moreResources: 'Più risorse', topicsCovered: 'Argomenti trattati',
    sourcingQuestion: 'Hai domande sull\'approvvigionamento?',
    sourcingQuestionBody: 'Il nostro team export risponde a domande tecniche e commerciali su gradi, mesh, certificazioni e documentazione psyllium.',
    insightsKicker: 'Guide per acquirenti', insightsTitleSuffix: 'per i team di approvvigionamento.',
    insightsLead: 'Guide pratiche su gradi, mesh, conformità e decisioni di approvvigionamento — per i team acquisti e QA.',
    insightsAudienceLabel: 'Destinatari', insightsPublishedLabel: 'Pubblicato',
    insightsSourceLabel: 'Fonte', insightsSourceValue: 'RM Psyllium · Siddhpur, Gujarat', allBuyerGuides: 'Tutte le guide →',
    blogTopicsLabel: 'Argomenti:', blogAllLabel: 'Tutti', blogTopicLabel: 'Argomento',
    blogAuthorLabel: 'Autore', blogCategoryLabel: 'Categoria',
    sourceLocation: 'Siddhpur, Gujarat, India', relatedArticles: 'Articoli correlati',
    industryBuyerApp: 'Applicazione acquirente', industryRequestQuote: 'Richiedi preventivo applicazione',
    industryMatchGrade: 'Abbina la tua applicazione al grado, mesh, imballaggio e documenti giusti.',
    industryUseCases: 'Applicazioni comuni', industryKeySpecs: 'Specifiche chiave',
    industryDocuments: 'Documenti inclusi', industryBuyerNote: 'Pronto ad approvvigionarsi?',
  },
  pt: {
    navProducts: 'Produtos', navRegions: 'Regiões', navIndustries: 'Indústrias',
    navCompliance: 'Conformidade', navInsights: 'Guias de Compra', navFaq: 'FAQ',
    navContact: 'Contato', navBlog: 'Blog', navQuality: 'Qualidade', cta: 'Solicitar Cotação',
    homeTitle: 'Fornecimento bulk de psyllium do Gujarat, Índia.',
    homeSub: 'Casca de psyllium, pó de casca, sementes, pó de khakha e ração animal com embalagem de exportação e documentação.',
    specTitle: 'Solicitar cotação bulk', requestQuoteCta: 'Solicitar Cotação de Produto',
    viewApplicationsCta: 'Ver Aplicações', supplyFitLabel: 'Adequação de fornecimento',
    requestQuoteBandTitle: 'Obtenha preços, amostras e documentos para este produto.',
    requestQuoteBandLead: 'Compartilhe grau, mesh, embalagem, porto de destino e volume mensal. Responderemos em 24 horas com preços e COA de amostra.',
    complianceTitle: 'Cada documento que sua equipe de QA solicitará.',
    complianceLead: 'Parâmetros de COA, origem do lote, microbiologia, metais pesados e documentação completa de exportação — compartilhados antes do envio da amostra, não após a assinatura do pedido.',
    complianceChecklist: 'Lista de verificação do comprador',
    complianceChecklistLead: 'Solicite documentos atualizados por produto, lote e mercado de destino antes de confirmar um pedido bulk.',
    insightsReadMore: 'Ler guia completo', faqTitle: 'Perguntas que respondemos antes de cada primeiro pedido.',
    faqLead: 'MOQ, diferenças de grau, conformidade com farmacopeia, documentação, prazos e o que acontece entre o pedido e o envio.',
    contactTitle: 'Fale com o setor de exportação.', contactLead: 'Compartilhe produto, volume, destino e grau. Respondemos em 24 horas.',
    productsListTitle: 'Seis graus de psyllium. Todos prontos para exportação.',
    productsListLead: 'De 85% qualidade alimentar a 99% USP/EP/IP farmacêutico. Mesh personalizada, embalagem e COA completo por remessa.',
    insightsListTitle: 'Guias de compra e insights de mercado.', blogTitle: 'Guias de sourcing para compradores de psyllium.',
    blogLead: 'Seleção de grau, requisitos de documentação e o que perguntar ao seu fornecedor antes do primeiro pedido.',
    heroBadge: 'Fabricante de psyllium · Gujarat, Índia',
    heroTitle: 'Psyllium bulk para fabricantes farmacêuticos, de suplementos e alimentares.',
    heroBody: 'Obtemos, moemos e enviamos casca de psyllium, pó e semente — correspondente às suas especificações de pureza, mesh e documentação. O que cotamos é o que enviamos.',
    heroTrustCoa: 'COA por remessa', heroLeadTimeLabel: 'Prazo de entrega', heroSampleLabel: 'Amostra',
    heroLeadTimeValue: '7 dias após confirmação', heroSampleValue: '100–500 g com COA, enviado em 5 dias',
    heroCtaWhatsApp: 'WhatsApp', statCapacityLabel: 'Capacidade de processamento anual',
    statHistoryLabel: 'anos de experiência em fabricação', statLeadLabel: 'Pedido ao envio', statMoqLabel: 'Quantidade mínima do pedido',
    hpProductsTitle: 'Produtos de psyllium para compradores bulk.',
    hpProductsBody: 'Sete linhas de produto. 85% a 99% de pureza. Grau, mesh e conformidade farmacopeia adaptados à sua formulação.',
    hpWhyTitle: 'O que nos diferencia de um exportador comercial.',
    hpDiff1Title: '40 anos dentro da fábrica',
    hpDiff1Body: 'Mais de 40 anos de experiência em fabricação de psyllium — de dentro da instalação de processamento, não no lado comercial. Essa profundidade de conhecimento operacional se traduz diretamente em qualidade consistente e especificações confiáveis.',
    hpDiff2Title: 'Especificações personalizadas, não seleções de catálogo',
    hpDiff2Body: 'Grau, mesh, embalagem e requisitos de documentação capturados antes de cotarmos. Sua especificação é o briefing — não uma seleção de catálogo.',
    hpDiff3Title: 'Conhecimento de fabricação, não margem comercial',
    hpDiff3Body: 'Processamos internamente. Não compramos produto acabado e revendemos. O grau que você especifica é o grau produzido para o seu lote — não reembalado do estoque de outra pessoa.',
    hpDiff4Title: 'Documentação completa antes do despacho',
    hpDiff4Body: 'COA, certificado de origem, fitossanitário, fumigação, MSDS e declaração de alérgenos por remessa. Tudo compartilhado antes do despacho — revisado pela sua equipe de QA antes que os contêineres se movam.',
    hpDiff5Title: 'Peça qualquer quantidade',
    hpDiff5Body: 'Sem pedido mínimo. Fornecemos amostras de 1 KG para testes laboratoriais, lotes de teste de 5 KG e contêineres completos de 20 MT. Peça o que precisar — escale quando estiver pronto.',
    hpProcessTitle: 'Da semente à embalagem pronta para exportação.', hpProcessStepLabel: '5 etapas · um lote',
    hpStep1Title: 'Sourcing', hpStep1Body: 'Semente de psyllium obtida de fazendas contratadas em Unjha e Norte de Gujarat — a principal região de cultivo de psyllium do mundo. Registros de origem mantidos por lote.',
    hpStep2Title: 'Limpeza', hpStep2Body: 'Semente limpa e classificada antes da moagem. Remoção de pedras, separação por peneira e inspeção magnética em cada etapa para reduzir materiais estranhos.',
    hpStep3Title: 'Moagem', hpStep3Body: 'Moagem controlada separa a casca da semente conforme pureza e mesh especificadas pelo comprador. Sem branqueamento químico ou tratamento ácido.',
    hpStep4Title: 'Teste', hpStep4Body: 'Testes laboratoriais antes da embalagem — pureza, volume de intumescimento, umidade, cinzas, microbiologia e metais pesados. Resultados documentados no COA compartilhado antes do despacho.',
    hpStep5Title: 'Embalar & Enviar', hpStep5Body: 'Embalagem grau alimentar nos tamanhos de saco especificados pelo comprador. Documentos de exportação preparados e revisados antes do envio. FOB Mundra ou CIF.',
    hpCredTitle: 'Registrado nos órgãos que importam para sua equipe de QA.', hpIecActive: 'Ativo · Código de Importação e Exportação',
    hpFaqTitle: 'Perguntas que recebemos antes de cada primeiro pedido.',
    hpFaqBody: 'MOQ, diferenças de grau, conformidade farmacopeia, pacote de documentação — respondidas diretamente.',
    hpContactTitle: 'Compartilhe sua especificação. Respondemos em 24 horas.',
    hpContactBody: 'Grau, mesh, embalagem, porto de destino, volume mensal — envie o que você tem. Responderemos com preços, um COA de amostra e opções de envio de amostras.',
    hpContactEmailLabel: 'Email', hpContactResponseLabel: 'Tempo de resposta',
    hpContactResponseValue: 'Normalmente em 4 horas (horário comercial IST)', hpGetQuote: 'Solicitar Cotação',
    labelProducts: 'Produtos', labelWhyUs: 'Por que RM Psyllium', labelProcess: 'Processo',
    labelCredentials: 'Credenciais', labelStepsOne: '5 etapas · um lote', labelContact: 'Contato',
    productsPageKicker: 'Todos os produtos', productsPageH1Suffix: 'do Gujarat, Índia.',
    productsPageCapacityLabel: 'Capacidade anual', productsPagePurityLabel: 'Graus de pureza',
    productsPageMoqLabel: 'Ped. mínimo · FOB Mundra', productsPageGradeKicker: 'Comparação de graus',
    productsPageGradeTitle: 'Casca de psyllium: resumo de graus', productsPageTableNote: 'Parâmetros completos de COA disponíveis por produto e lote.',
    productsPageViewQuality: 'Ver documentos de qualidade →', productsPageCtaTitle: 'Compartilhe sua especificação. Obtenha uma cotação.',
    productsPageCtaBody: 'Informe produto, grau, mesh, embalagem, destino e volume mensal. Respondemos em 24 horas com preços e disponibilidade.',
    qualityCoaStatLabel: 'Parâmetros de teste COA', qualityFssaiStatLabel: 'Instalação registrada',
    qualityApedaStatLabel: 'Autorização de exportação registrada', qualityDocTypesLabel: 'Tipos de documentação',
    qualityCredTitle: 'Credenciais que sua equipe de compras solicitará.',
    qualityCredLead: 'Registro de instalação FSSAI, autorização de exportação APEDA, listagem Spices Board e IEC ativo. Certificados atuais disponíveis mediante solicitação antes da amostragem.',
    qualityBadgeRegistered: 'Registrado', qualityBadgeActive: 'Ativo',
    qualityFssaiDesc: 'Autoridade de Segurança e Padrões Alimentares da Índia — registro de instalação',
    qualityApedaDesc: 'Autoridade de Desenvolvimento de Exportação de Produtos Agrícolas e Processados',
    qualitySpicesBoardDesc: 'Conselho de Especiarias da Índia — registro de qualidade para exportação',
    qualityIecDesc: 'Código de Importação e Exportação — ativo para todos os envios de exportação',
    qualityCtaTitle: 'Precisa de documentos antes de pedir?',
    qualityCtaBody: 'Envie-nos email com seu produto, requisitos do lote e destino. Compartilharemos COA atual, cópias de certificados e status de documentação em 24 horas.',
    qualityCtaEmailBtn: 'Email setor de exportação', contactResponseTimeLabel: 'Tempo de resposta',
    contactMinOrderLabel: 'Pedido mínimo', contactExportDeskLabel: 'Setor de exportação',
    contactFacilityLabel: 'Endereço da instalação', contactCapacityLabel: 'Capacidade',
    contactLeadTimeLabel: 'Prazo de entrega', contactPortsLabel: 'Portos', contactEmailBtn: 'Nos envie um email', contactWaBtn: 'WhatsApp',
    faqPageAnswered: 'respondidas.', faqPageCommonTitle: 'Perguntas comuns dos compradores.',
    faqPageCommonBody: 'Tudo que você precisa saber antes de fazer seu primeiro pedido — graus, documentação, prazos e conformidade.',
    faqPageStillHaveQ: 'Ainda tem dúvidas?', faqPageTalkExport: 'Fale com o setor de exportação',
    faqPageTalkBody: 'Compartilhe produto, grau e destino. Respondemos em 24 horas.',
    faqPageWaBtn: 'WhatsApp', faqPageEmailBtn: 'Email setor de exportação', faqPageQuickFacts: 'Dados rápidos',
    faqPageMoqFact: 'MOQ', faqPageCapacityFact: 'Capacidade', faqPageLeadFact: 'Prazo',
    faqPagePortsFact: 'Portos', faqPageGradesFact: 'Graus', faqPageSampleFact: 'Amostra',
    faqPageMinOrderLabel: 'Pedido mínimo', faqPageLeadTimeLabel: 'Prazo de entrega', faqPagePurityLabel: 'Graus de pureza',
    footerBrandDesc: 'RM Psyllium LLP é um fabricante direto e exportador a granel de casca, pó e sementes de psyllium premium. Operando a partir de Siddhpur, Gujarat, nossa instalação possui capacidade anual de 2.000 MT, fornecendo graus farmacêutico (USP/EP), alimentício e forrageiro globalmente. MOQ: 1 KG com COA certificado pelo laboratório NABL por remessa.',
    footerApplications: 'Aplicações', footerResources: 'Recursos', footerRequestQuote: 'Solicitar Cotação', footerSampleRequest: 'Solicitar Amostra',
    sbTitle: 'Solicitar uma cotação', sbReplyTime: 'Respondemos em 24 horas (horário comercial IST)',
    sbNameLabel: 'Nome', sbEmailLabel: 'Email ou Telefone', sbEmailPlaceholder: 'email ou número WhatsApp',
    sbProductLabel: 'Interesse de produto', sbSelectProduct: 'Selecione um produto', sbCountryLabel: 'País',
    sbCompanyLabel: 'Empresa', sbMessageLabel: 'Mensagem / especificações', sbMessagePlaceholder: 'Grau, volume, certificações, prazo de entrega…',
    sbErrorContact: 'Por favor, insira seu email ou telefone.', sbSubmitBtn: 'Enviar Consulta',
    cgItem1Title: 'Revisão de COA', cgItem1Desc: 'Parâmetros de pureza, mesh, umidade, cinzas, volume de intumescimento, microbiologia e metais pesados compartilhados para revisão do comprador.',
    cgItem2Title: 'Segurança Alimentar', cgItem2Desc: 'Documentos de instalação, alérgenos, microbiologia e manuseio disponíveis para compradores de alimentos, suplementos e farmacêuticos.',
    cgItem3Title: 'Halal & Kosher', cgItem3Desc: 'Documentos Halal e Kosher podem ser compartilhados quando o lote atual e o mercado do comprador os exigem.',
    cgItem4Title: 'Rastreabilidade', cgItem4Desc: 'Registros de origem, processamento, embalagem e envio em nível de lote alinhados à revisão de exportação.',
    cgItem5Title: 'Controle de Especificação', cgItem5Desc: 'Grau, mesh, umidade, volume de intumescimento e requisitos de embalagem confirmados antes da cotação.',
    cgItem6Title: 'Documentos de Exportação', cgItem6Desc: 'Fatura comercial, lista de embalagem, COA, certificado de origem, fitossanitário e suporte de fumigação para pedidos de exportação.',
    pdBreadcrumbHome: 'Início', pdFromGujarat: 'do Gujarat, Índia.', pdAvailableGrades: 'Graus disponíveis',
    pdPackagingOptions: 'Opções de embalagem', pdApplicationsLabel: 'Aplicações', pdApplicationFit: 'Adequação de aplicação',
    pdWhichGrade: 'Qual grau se encaixa no seu caso de uso?', pdPrimary: 'Primário', pdConditional: 'Condicional',
    pdNotSuitable: 'Não adequado', pdNotUsed: 'Não utilizado', pdSpecifications: 'Especificações',
    pdParameter: 'Parâmetro', pdBestFor: 'Ideal para', pdGradeDetails: 'Detalhes do grau',
    pdSelectGrade: 'Selecione seu grau', pdByApplication: 'Por aplicação', pdCommonQuestions: 'Perguntas frequentes',
    pdFaqIntro: 'Perguntas frequentes', pdFaqIntroSuffix: 'dos compradores.',
    pdFaqDesc: 'Perguntas específicas do produto dos compradores — graus, documentação, prazos e conformidade.',
    pdRequestQuoteLabel: 'Solicitar Cotação', pdWithin24h: 'em 24 horas.',
    pdCompareGradesTitle: 'Comparar graus de {name}', pdReadyToSource: 'Pronto para comprar {name}?',
    pdCtaBody: 'Compartilhe grau, mesh, embalagem, destino e volume mensal. Respondemos em 24 horas com preços e disponibilidade.',
    pdFindMyGrade: 'Encontrar meu grau ↓', pdLegendPrimary: 'Adequação primária',
    pdLegendConditional: 'Condicional — confirme com QA', pdLegendNotSuitable: 'Não adequado', pdLegendNotApplicable: 'Não aplicável',
    readyToSource: 'Pronto para comprar?', sampleCoaTitle: 'Obter amostra com COA',
    sampleCoaBody: 'Compartilhe sua especificação — grau, malha, volume mensal e destino. Responderemos em 24 horas.',
    moreResources: 'Mais recursos', topicsCovered: 'Tópicos abordados',
    sourcingQuestion: 'Tem alguma pergunta sobre abastecimento?',
    sourcingQuestionBody: 'Nossa equipe de exportação responde perguntas técnicas e comerciais sobre graus, malha, certificações e documentação de psyllium.',
    insightsKicker: 'Guias para compradores', insightsTitleSuffix: 'para equipes de compras.',
    insightsLead: 'Guias práticos sobre graus, malha, conformidade e decisões de abastecimento — para equipes de compras e QA.',
    insightsAudienceLabel: 'Público', insightsPublishedLabel: 'Publicado',
    insightsSourceLabel: 'Fonte', insightsSourceValue: 'RM Psyllium · Siddhpur, Gujarat', allBuyerGuides: 'Todos os guias →',
    blogTopicsLabel: 'Tópicos:', blogAllLabel: 'Todos', blogTopicLabel: 'Tópico',
    blogAuthorLabel: 'Autor', blogCategoryLabel: 'Categoria',
    sourceLocation: 'Siddhpur, Gujarat, Índia', relatedArticles: 'Artigos relacionados',
    industryBuyerApp: 'Aplicação do comprador', industryRequestQuote: 'Solicitar cotação de aplicação',
    industryMatchGrade: 'Combine sua aplicação com o grau, malha, embalagem e documentos certos.',
    industryUseCases: 'Aplicações comuns', industryKeySpecs: 'Especificações principais',
    industryDocuments: 'Documentos incluídos', industryBuyerNote: 'Pronto para comprar?',
  },
  ru: {
    navProducts: 'Продукты', navRegions: 'Регионы', navIndustries: 'Отрасли',
    navCompliance: 'Соответствие', navInsights: 'Руководства', navFaq: 'FAQ',
    navContact: 'Контакт', navBlog: 'Блог', navQuality: 'Качество', cta: 'Запросить цену',
    homeTitle: 'Оптовые поставки псиллиума из Гуджарата, Индия.',
    homeSub: 'Шелуха псиллиума, порошок шелухи, семена, порошок кхакха и корм для скота с экспортной упаковкой и документацией.',
    specTitle: 'Запросить оптовое предложение', requestQuoteCta: 'Запросить цену на продукт',
    viewApplicationsCta: 'Просмотреть применение', supplyFitLabel: 'Соответствие поставки',
    requestQuoteBandTitle: 'Получите цены, образцы и документы для этого продукта.',
    requestQuoteBandLead: 'Укажите сорт, размол, упаковку, порт назначения и ежемесячный объём. Мы ответим в течение 24 часов с ценами и образцом COA.',
    complianceTitle: 'Каждый документ, который запросит ваш отдел QA.',
    complianceLead: 'Параметры COA, происхождение партии, микробиология, тяжёлые металлы и полный пакет экспортных документов — предоставляется до отправки образца, а не после подписания заказа.',
    complianceChecklist: 'Чек-лист верификации покупателя',
    complianceChecklistLead: 'Запрашивайте актуальные документы по продукту, партии и рынку назначения до подтверждения крупного заказа.',
    insightsReadMore: 'Читать полное руководство', faqTitle: 'Вопросы, на которые мы отвечаем перед каждым первым заказом.',
    faqLead: 'MOQ, различия между сортами, соответствие фармакопее, документация, сроки поставки и что происходит между заказом и отгрузкой.',
    contactTitle: 'Свяжитесь с экспортным отделом.', contactLead: 'Укажите продукт, объём, назначение и сорт. Отвечаем в течение 24 часов.',
    productsListTitle: 'Шесть сортов псиллиума. Все готовы к экспорту.',
    productsListLead: 'От 85% пищевого качества до 99% USP/EP/IP фармацевтического. Индивидуальный размол, упаковка и полный COA на каждую партию.',
    insightsListTitle: 'Руководства для покупателей и аналитика рынка.', blogTitle: 'Руководства по закупкам для покупателей псиллиума.',
    blogLead: 'Выбор сорта, требования к документации и что спрашивать у поставщика перед первым заказом.',
    heroBadge: 'Производитель псиллиума · Гуджарат, Индия',
    heroTitle: 'Оптовый псиллиум для фармацевтических, суплементных и пищевых производителей.',
    heroBody: 'Мы закупаем, перерабатываем и отгружаем шелуху псиллиума, порошок и семена — в соответствии с вашими требованиями к чистоте, размолу и документации. Что мы предлагаем — то и отгружаем.',
    heroTrustCoa: 'COA на каждую партию', heroLeadTimeLabel: 'Срок поставки', heroSampleLabel: 'Образец',
    heroLeadTimeValue: '7 дней после подтверждения', heroSampleValue: '100–500 г с COA, отправка в течение 5 дней',
    heroCtaWhatsApp: 'WhatsApp', statCapacityLabel: 'Годовая производственная мощность',
    statHistoryLabel: 'лет производственного опыта', statLeadLabel: 'От заказа до отгрузки', statMoqLabel: 'Минимальный объём заказа',
    hpProductsTitle: 'Продукты псиллиума для оптовых покупателей.',
    hpProductsBody: 'Семь продуктовых линеек. От 85% до 99% чистоты. Сорт, размол и соответствие фармакопее — под вашу рецептуру.',
    hpWhyTitle: 'Что отличает нас от торгового экспортёра.',
    hpDiff1Title: '40 лет на производстве',
    hpDiff1Body: 'Более 40 лет опыта в производстве псиллиума — изнутри перерабатывающего предприятия, а не на торговой стороне. Эта глубина операционных знаний напрямую отражается на стабильном качестве и надёжных спецификациях.',
    hpDiff2Title: 'Индивидуальные спецификации, не каталожные позиции',
    hpDiff2Body: 'Сорт, размол, упаковка и требования к документации фиксируются до выставления цены. Ваша спецификация — это задание, а не выбор из каталога.',
    hpDiff3Title: 'Производственная экспертиза, не торговая наценка',
    hpDiff3Body: 'Мы перерабатываем продукт самостоятельно. Мы не покупаем готовый продукт и не перепродаём его. Указанный вами сорт производится специально для вашей партии — не переупаковывается из чужого склада.',
    hpDiff4Title: 'Полная документация до отгрузки',
    hpDiff4Body: 'COA, сертификат происхождения, фитосанитарный, фумигационный, MSDS и декларация об аллергенах на каждую партию. Всё предоставляется до отгрузки — проверяется вашим отделом QA до движения контейнеров.',
    hpDiff5Title: 'Заказывайте любое количество',
    hpDiff5Body: 'Нет минимального объёма заказа. Поставляем образцы 1 кг для лабораторных испытаний, пробные партии 5 кг и полные контейнеры 20 МТ. Заказывайте столько, сколько нужно — наращивайте объёмы, когда будете готовы.',
    hpProcessTitle: 'От семени до экспортной упаковки.', hpProcessStepLabel: '5 этапов · одна партия',
    hpStep1Title: 'Закупка', hpStep1Body: 'Семена псиллиума закупаются на контрактных фермах в Унджхе и Северном Гуджарате — главном регионе выращивания псиллиума в мире. Записи о происхождении ведутся по партиям.',
    hpStep2Title: 'Очистка', hpStep2Body: 'Семена очищаются и сортируются перед помолом. Камнеотборники, ситовая сепарация и магнитный контроль на каждом этапе для снижения посторонних примесей.',
    hpStep3Title: 'Помол', hpStep3Body: 'Контролируемый помол отделяет шелуху от семени до указанной покупателем чистоты и размола. Без химического отбеливания или кислотной обработки.',
    hpStep4Title: 'Тестирование', hpStep4Body: 'Лабораторные испытания перед упаковкой — чистота, объём набухания, влажность, зольность, микробиология и тяжёлые металлы. Результаты задокументированы в COA, предоставляемом до отгрузки.',
    hpStep5Title: 'Упаковка и отгрузка', hpStep5Body: 'Пищевая упаковка в мешках размеров, указанных покупателем. Экспортные документы подготовлены и проверены до отгрузки. FOB Мундра или CIF.',
    hpCredTitle: 'Зарегистрированы в органах, значимых для вашего отдела QA.', hpIecActive: 'Активен · Код импорта и экспорта',
    hpFaqTitle: 'Вопросы, которые мы получаем перед каждым первым заказом.',
    hpFaqBody: 'MOQ, различия между сортами, соответствие фармакопее, пакет документов — ответы напрямую.',
    hpContactTitle: 'Пришлите спецификацию. Ответим в течение 24 часов.',
    hpContactBody: 'Сорт, размол, упаковка, порт назначения, ежемесячный объём — отправьте то, что у вас есть. Ответим с ценами, образцом COA и вариантами отправки образцов.',
    hpContactEmailLabel: 'Email', hpContactResponseLabel: 'Время ответа',
    hpContactResponseValue: 'Обычно в течение 4 часов (рабочие часы IST)', hpGetQuote: 'Запросить цену',
    labelProducts: 'Продукты', labelWhyUs: 'Почему RM Psyllium', labelProcess: 'Процесс',
    labelCredentials: 'Сертификаты', labelStepsOne: '5 этапов · одна партия', labelContact: 'Контакт',
    productsPageKicker: 'Все продукты', productsPageH1Suffix: 'из Гуджарата, Индия.',
    productsPageCapacityLabel: 'Годовая мощность', productsPagePurityLabel: 'Степени чистоты',
    productsPageMoqLabel: 'Мин. заказ · FOB Мундра', productsPageGradeKicker: 'Сравнение сортов',
    productsPageGradeTitle: 'Шелуха псиллиума: обзор сортов', productsPageTableNote: 'Полные параметры COA доступны по продукту и партии.',
    productsPageViewQuality: 'Просмотреть документы качества →', productsPageCtaTitle: 'Пришлите спецификацию. Получите предложение.',
    productsPageCtaBody: 'Укажите продукт, сорт, размол, упаковку, назначение и ежемесячный объём. Ответим в течение 24 часов с ценами и наличием.',
    qualityCoaStatLabel: 'Параметры испытаний COA', qualityFssaiStatLabel: 'Предприятие зарегистрировано',
    qualityApedaStatLabel: 'Экспортное разрешение получено', qualityDocTypesLabel: 'Виды документации',
    qualityCredTitle: 'Сертификаты, которые запросит ваш отдел закупок.',
    qualityCredLead: 'Регистрация FSSAI, экспортное разрешение APEDA, листинг Spices Board и активный IEC. Актуальные сертификаты предоставляются по запросу до отбора образцов.',
    qualityBadgeRegistered: 'Зарегистрировано', qualityBadgeActive: 'Активен',
    qualityFssaiDesc: 'Управление по безопасности пищевых продуктов и стандартам Индии — регистрация предприятия',
    qualityApedaDesc: 'Управление по развитию экспорта сельскохозяйственной и переработанной продукции',
    qualitySpicesBoardDesc: 'Совет по специям Индии — регистрация качества экспорта',
    qualityIecDesc: 'Код импорта и экспорта — активен для всех экспортных отгрузок',
    qualityCtaTitle: 'Нужны документы перед заказом?',
    qualityCtaBody: 'Напишите нам с указанием продукта, требований к партии и назначения. Мы предоставим актуальный COA, копии сертификатов и статус документации в течение 24 часов.',
    qualityCtaEmailBtn: 'Написать в экспортный отдел', contactResponseTimeLabel: 'Время ответа',
    contactMinOrderLabel: 'Минимальный заказ', contactExportDeskLabel: 'Экспортный отдел',
    contactFacilityLabel: 'Адрес предприятия', contactCapacityLabel: 'Мощность',
    contactLeadTimeLabel: 'Срок поставки', contactPortsLabel: 'Порты', contactEmailBtn: 'Написать нам', contactWaBtn: 'WhatsApp',
    faqPageAnswered: 'отвечено.', faqPageCommonTitle: 'Частые вопросы покупателей.',
    faqPageCommonBody: 'Всё, что нужно знать перед первым заказом — сорта, документация, сроки поставки и соответствие требованиям.',
    faqPageStillHaveQ: 'Остались вопросы?', faqPageTalkExport: 'Связаться с экспортным отделом',
    faqPageTalkBody: 'Укажите продукт, сорт и назначение. Отвечаем в течение 24 часов.',
    faqPageWaBtn: 'WhatsApp', faqPageEmailBtn: 'Написать в экспортный отдел', faqPageQuickFacts: 'Быстрые факты',
    faqPageMoqFact: 'MOQ', faqPageCapacityFact: 'Мощность', faqPageLeadFact: 'Срок поставки',
    faqPagePortsFact: 'Порты', faqPageGradesFact: 'Сорта', faqPageSampleFact: 'Образец',
    faqPageMinOrderLabel: 'Минимальный заказ', faqPageLeadTimeLabel: 'Срок поставки', faqPagePurityLabel: 'Степени чистоты',
    footerBrandDesc: 'RM Psyllium LLP — прямой производитель и оптовый экспортёр премиальной шелухи, порошка и семян псиллиума. Наше предприятие в Сиддхпуре (Гуджарат) имеет годовую мощность 2 000 тонн, поставляя продукцию фармацевтического (USP/EP), пищевого и кормового назначения по всему миру. Минимальный заказ (MOQ): 1 кг с сертификатом анализа NABL для каждой партии.',
    footerApplications: 'Применение', footerResources: 'Ресурсы', footerRequestQuote: 'Запросить цену', footerSampleRequest: 'Запрос образца',
    sbTitle: 'Запросить цену', sbReplyTime: 'Отвечаем в течение 24 часов (рабочие часы IST)',
    sbNameLabel: 'Имя', sbEmailLabel: 'Email или телефон', sbEmailPlaceholder: 'email или номер WhatsApp',
    sbProductLabel: 'Интересующий продукт', sbSelectProduct: 'Выберите продукт', sbCountryLabel: 'Страна',
    sbCompanyLabel: 'Компания', sbMessageLabel: 'Сообщение / спецификации', sbMessagePlaceholder: 'Сорт, объём, сертификации, срок поставки…',
    sbErrorContact: 'Пожалуйста, введите ваш email или телефон.', sbSubmitBtn: 'Отправить запрос',
    cgItem1Title: 'Проверка COA', cgItem1Desc: 'Параметры чистоты, размола, влажности, зольности, объёма набухания, микробиологии и тяжёлых металлов предоставляются для проверки покупателем.',
    cgItem2Title: 'Пищевая безопасность', cgItem2Desc: 'Документы предприятия, аллергенов, микробиологии и обращения доступны для пищевых, суплементных и фармацевтических покупателей.',
    cgItem3Title: 'Халяль и Кошер', cgItem3Desc: 'Документы халяль и кошер могут быть предоставлены при необходимости для текущей партии и рынка покупателя.',
    cgItem4Title: 'Прослеживаемость', cgItem4Desc: 'Записи о происхождении, переработке, упаковке и отгрузке на уровне партии, согласованные с экспортной проверкой.',
    cgItem5Title: 'Контроль спецификаций', cgItem5Desc: 'Сорт, размол, влажность, объём набухания и требования к упаковке подтверждаются до выставления цены.',
    cgItem6Title: 'Экспортные документы', cgItem6Desc: 'Коммерческий счёт, упаковочный лист, COA, сертификат происхождения, фитосанитарный и фумигационный сертификат для экспортных заказов.',
    pdBreadcrumbHome: 'Главная', pdFromGujarat: 'из Гуджарата, Индия.', pdAvailableGrades: 'Доступные сорта',
    pdPackagingOptions: 'Варианты упаковки', pdApplicationsLabel: 'Применение', pdApplicationFit: 'Соответствие применению',
    pdWhichGrade: 'Какой сорт подходит для вашего применения?', pdPrimary: 'Основной', pdConditional: 'Условный',
    pdNotSuitable: 'Не подходит', pdNotUsed: 'Не используется', pdSpecifications: 'Спецификации',
    pdParameter: 'Параметр', pdBestFor: 'Лучше всего для', pdGradeDetails: 'Детали сорта',
    pdSelectGrade: 'Выберите сорт', pdByApplication: 'По применению', pdCommonQuestions: 'Частые вопросы',
    pdFaqIntro: 'Часто задаваемые', pdFaqIntroSuffix: 'вопросы.',
    pdFaqDesc: 'Специфические вопросы покупателей о продукте — сорта, документация, сроки и соответствие.',
    pdRequestQuoteLabel: 'Запросить цену', pdWithin24h: 'в течение 24 часов.',
    pdCompareGradesTitle: 'Сравнить сорта {name}', pdReadyToSource: 'Готовы закупить {name}?',
    pdCtaBody: 'Укажите сорт, размол, упаковку, назначение и ежемесячный объём. Ответим в течение 24 часов с ценами и наличием.',
    pdFindMyGrade: 'Найти мой сорт ↓', pdLegendPrimary: 'Основное соответствие',
    pdLegendConditional: 'Условное — подтвердите с QA', pdLegendNotSuitable: 'Не подходит', pdLegendNotApplicable: 'Не применимо',
    readyToSource: 'Готовы к закупке?', sampleCoaTitle: 'Запросить образец с COA',
    sampleCoaBody: 'Поделитесь вашими спецификациями — сорт, сетка, ежемесячный объём и пункт назначения. Мы ответим в течение 24 часов.',
    moreResources: 'Больше ресурсов', topicsCovered: 'Охватываемые темы',
    sourcingQuestion: 'Есть вопрос по закупкам?',
    sourcingQuestionBody: 'Наша экспортная команда отвечает на технические и коммерческие вопросы о сортах псиллиума, сетке, сертификатах и документации.',
    insightsKicker: 'Руководства для покупателей', insightsTitleSuffix: 'для отделов закупок.',
    insightsLead: 'Практические руководства по сортам, сетке, соответствию и решениям о закупках — для специалистов по закупкам и QA.',
    insightsAudienceLabel: 'Аудитория', insightsPublishedLabel: 'Опубликовано',
    insightsSourceLabel: 'Источник', insightsSourceValue: 'RM Psyllium · Сидхпур, Гуджарат', allBuyerGuides: 'Все руководства →',
    blogTopicsLabel: 'Темы:', blogAllLabel: 'Все', blogTopicLabel: 'Тема',
    blogAuthorLabel: 'Автор', blogCategoryLabel: 'Категория',
    sourceLocation: 'Сидхпур, Гуджарат, Индия', relatedArticles: 'Похожие статьи',
    industryBuyerApp: 'Применение покупателем', industryRequestQuote: 'Запросить коммерческое предложение',
    industryMatchGrade: 'Подберите подходящий сорт, сетку, упаковку и документы для вашего применения.',
    industryUseCases: 'Типичные применения', industryKeySpecs: 'Ключевые характеристики',
    industryDocuments: 'Документы, которые вы получите', industryBuyerNote: 'Готовы к закупке?',
  },
  ar: {
    navProducts: 'المنتجات', navRegions: 'المناطق', navIndustries: 'الصناعات',
    navCompliance: 'الامتثال', navInsights: 'أدلة الشراء', navFaq: 'الأسئلة الشائعة',
    navContact: 'تواصل معنا', navBlog: 'المدونة', navQuality: 'الجودة', cta: 'طلب عرض سعر',
    homeTitle: 'توريد سيليوم بالجملة من غوجارات، الهند.',
    homeSub: 'قشور سيليوم، مسحوق القشور، البذور، مسحوق الخاخا وعلف الماشية مع تغليف التصدير والوثائق.',
    specTitle: 'طلب عرض سعر بالجملة', requestQuoteCta: 'طلب عرض سعر للمنتج',
    viewApplicationsCta: 'عرض التطبيقات', supplyFitLabel: 'ملاءمة التوريد',
    requestQuoteBandTitle: 'احصل على أسعار وعينات ووثائق لهذا المنتج.',
    requestQuoteBandLead: 'شارك الدرجة والمنخل والتغليف وميناء الوجهة والحجم الشهري. سنرد خلال 24 ساعة بالأسعار ونموذج COA.',
    complianceTitle: 'كل وثيقة سيطلبها فريق ضمان الجودة.',
    complianceLead: 'معاملات COA وأصل الدُفعة والميكروبيولوجيا والمعادن الثقيلة والأوراق التصديرية الكاملة — مشتركة قبل شحن العينة وليس بعد توقيع أمر الشراء.',
    complianceChecklist: 'قائمة تحقق المشتري',
    complianceChecklistLead: 'اطلب الوثائق الحالية حسب المنتج والدُفعة وسوق الوجهة قبل تأكيد طلب بالجملة.',
    insightsReadMore: 'قراءة الدليل الكامل', faqTitle: 'أسئلة نجيب عليها قبل كل طلب أول.',
    faqLead: 'الحد الأدنى للطلب، الفروق بين الدرجات، الامتثال للدساتير، التوثيق، مواعيد التسليم وما يحدث بين الطلب والشحن.',
    contactTitle: 'تحدث مع مكتب التصدير.', contactLead: 'شارك المنتج والحجم والوجهة والدرجة. نرد في 24 ساعة.',
    productsListTitle: 'ست درجات من السيليوم. جميعها جاهزة للتصدير.',
    productsListLead: 'من 85% جودة غذائية إلى 99% USP/EP/IP صيدلانية. منخل مخصص وتغليف وCOA كامل لكل شحنة.',
    insightsListTitle: 'أدلة الشراء وتحليلات السوق.', blogTitle: 'أدلة تحديد المصادر لمشتري السيليوم.',
    blogLead: 'اختيار الدرجة ومتطلبات التوثيق وما يجب سؤاله من المورد قبل الطلب الأول.',
    heroBadge: 'مصنّع سيليوم · غوجارات، الهند',
    heroTitle: 'سيليوم بالجملة لمصنعي الأدوية والمكملات الغذائية والأغذية.',
    heroBody: 'نحصل على قشور السيليوم والمسحوق والبذور ونطحنها ونشحنها — بما يتوافق مع مواصفات النقاء والمنخل والتوثيق. ما نعرضه هو ما يُشحن.',
    heroTrustCoa: 'COA لكل شحنة', heroLeadTimeLabel: 'مدة التسليم', heroSampleLabel: 'عينة',
    heroLeadTimeValue: '7 أيام من التأكيد', heroSampleValue: '100–500 غ مع COA، يُشحن في 5 أيام',
    heroCtaWhatsApp: 'واتساب', statCapacityLabel: 'الطاقة التصنيعية السنوية',
    statHistoryLabel: 'عامًا من الخبرة التصنيعية', statLeadLabel: 'من الطلب إلى الشحن', statMoqLabel: 'الحد الأدنى لكمية الطلب',
    hpProductsTitle: 'منتجات السيليوم للمشترين بالجملة.',
    hpProductsBody: 'سبعة خطوط منتجات. من 85% إلى 99% نقاء. درجة ومنخل وامتثال للدساتير مناسب لتركيبتك.',
    hpWhyTitle: 'ما يميزنا عن مصدّر تجاري.',
    hpDiff1Title: '40 عاماً داخل المصنع',
    hpDiff1Body: 'أكثر من 40 عامًا من الخبرة في تصنيع السيليوم — من داخل منشأة المعالجة، وليس من الجانب التجاري. هذا العمق من المعرفة التشغيلية ينعكس مباشرةً على الجودة المتسقة والمواصفات الموثوقة.',
    hpDiff2Title: 'مواصفات مخصصة لا اختيارات من كتالوج',
    hpDiff2Body: 'الدرجة والمنخل والتغليف ومتطلبات التوثيق تُسجَّل قبل تقديم العرض. مواصفاتك هي المتطلب وليست اختياراً من كتالوج.',
    hpDiff3Title: 'خبرة تصنيعية لا هامش تجاري',
    hpDiff3Body: 'نعالج داخلياً. لا نشتري منتجاً جاهزاً ونعيد بيعه. الدرجة التي تحددها هي الدرجة المُنتجة لدُفعتك وليست مُعاد تعبئتها من مخزون شخص آخر.',
    hpDiff4Title: 'توثيق كامل قبل الشحن',
    hpDiff4Body: 'COA وشهادة المنشأ وشهادة صحة النبات والتبخير وMSDS وبيان المواد المسببة للحساسية لكل شحنة. كل شيء يُشارك قبل الشحن — يراجعه فريق ضمان الجودة قبل تحريك الحاويات.',
    hpDiff5Title: 'اطلب أي كمية',
    hpDiff5Body: 'لا حد أدنى للطلب. نوفر عينات 1 كغ لاختبارات المختبر، ودُفعات تجريبية 5 كغ، وحاويات كاملة 20 طنًا. اطلب ما تحتاجه — وسّع طلبك عندما تكون جاهزًا.',
    hpProcessTitle: 'من البذرة إلى التغليف الجاهز للتصدير.', hpProcessStepLabel: '5 خطوات · دُفعة واحدة',
    hpStep1Title: 'التوريد', hpStep1Body: 'بذور السيليوم مُوردة من مزارع متعاقدة في أونجها وشمال غوجارات — المنطقة الرئيسية لزراعة السيليوم في العالم. سجلات المنشأ محفوظة لكل دُفعة.',
    hpStep2Title: 'التنظيف', hpStep2Body: 'البذور مُنظَّفة ومُصنَّفة قبل الطحن. إزالة الحجارة والفصل بالمنخل والفحص المغناطيسي في كل مرحلة لتقليل المواد الغريبة.',
    hpStep3Title: 'الطحن', hpStep3Body: 'طحن مُتحكم يفصل القشرة عن البذرة وفق النقاء والمنخل المحددين من المشتري. بدون تبييض كيميائي أو معالجة حمضية.',
    hpStep4Title: 'الاختبار', hpStep4Body: 'اختبارات مختبرية قبل التغليف — النقاء وحجم الانتفاخ والرطوبة والرماد والميكروبيولوجيا والمعادن الثقيلة. النتائج موثقة في COA يُشارك قبل الشحن.',
    hpStep5Title: 'التغليف والشحن', hpStep5Body: 'تغليف بدرجة غذائية في أحجام أكياس يحددها المشتري. وثائق التصدير جاهزة ومراجعة قبل الشحن. FOB موندرا أو CIF.',
    hpCredTitle: 'مسجل لدى الجهات التي يهتم بها فريق ضمان الجودة.', hpIecActive: 'نشط · كود الاستيراد والتصدير',
    hpFaqTitle: 'أسئلة نتلقاها قبل كل طلب أول.',
    hpFaqBody: 'الحد الأدنى للطلب، فروق الدرجات، امتثال الدساتير، حزمة التوثيق — إجابات مباشرة.',
    hpContactTitle: 'شارك مواصفاتك. نرد خلال 24 ساعة.',
    hpContactBody: 'الدرجة والمنخل والتغليف وميناء الوجهة والحجم الشهري — أرسل ما لديك. سنرد بالأسعار ونموذج COA وخيارات إرسال العينات.',
    hpContactEmailLabel: 'البريد الإلكتروني', hpContactResponseLabel: 'وقت الرد',
    hpContactResponseValue: 'عادةً خلال 4 ساعات (ساعات العمل IST)', hpGetQuote: 'طلب عرض سعر',
    labelProducts: 'المنتجات', labelWhyUs: 'لماذا RM Psyllium', labelProcess: 'العملية',
    labelCredentials: 'الاعتمادات', labelStepsOne: '5 خطوات · دُفعة واحدة', labelContact: 'تواصل معنا',
    productsPageKicker: 'جميع المنتجات', productsPageH1Suffix: 'من غوجارات، الهند.',
    productsPageCapacityLabel: 'الطاقة السنوية', productsPagePurityLabel: 'درجات النقاء',
    productsPageMoqLabel: 'الحد الأدنى · FOB موندرا', productsPageGradeKicker: 'مقارنة الدرجات',
    productsPageGradeTitle: 'قشور السيليوم: ملخص الدرجات', productsPageTableNote: 'معاملات COA الكاملة متاحة لكل منتج ودُفعة.',
    productsPageViewQuality: 'عرض وثائق الجودة →', productsPageCtaTitle: 'شارك مواصفاتك. احصل على عرض سعر.',
    productsPageCtaBody: 'أخبرنا بالمنتج والدرجة والمنخل والتغليف والوجهة والحجم الشهري. نرد خلال 24 ساعة بالأسعار والتوافر.',
    qualityCoaStatLabel: 'معاملات اختبار COA', qualityFssaiStatLabel: 'المنشأة مسجلة',
    qualityApedaStatLabel: 'تصريح التصدير مسجل', qualityDocTypesLabel: 'أنواع التوثيق',
    qualityCredTitle: 'الاعتمادات التي سيطلبها فريق المشتريات.',
    qualityCredLead: 'تسجيل منشأة FSSAI وتصريح تصدير APEDA وقيد Spices Board وIEC نشط. شهادات حالية متاحة بناءً على الطلب قبل أخذ العينات.',
    qualityBadgeRegistered: 'مسجل', qualityBadgeActive: 'نشط',
    qualityFssaiDesc: 'هيئة سلامة وجودة الغذاء في الهند — تسجيل المنشأة',
    qualityApedaDesc: 'هيئة تطوير تصدير المنتجات الزراعية والمصنعة',
    qualitySpicesBoardDesc: 'مجلس البهارات في الهند — تسجيل جودة التصدير',
    qualityIecDesc: 'كود الاستيراد والتصدير — نشط لجميع شحنات التصدير',
    qualityCtaTitle: 'هل تحتاج وثائق قبل الطلب?',
    qualityCtaBody: 'راسلنا بمنتجك ومتطلبات الدُفعة والوجهة. سنشارك COA الحالي ونسخ الشهادات وحالة التوثيق خلال 24 ساعة.',
    qualityCtaEmailBtn: 'مراسلة مكتب التصدير', contactResponseTimeLabel: 'وقت الرد',
    contactMinOrderLabel: 'الحد الأدنى للطلب', contactExportDeskLabel: 'مكتب التصدير',
    contactFacilityLabel: 'عنوان المنشأة', contactCapacityLabel: 'الطاقة الإنتاجية',
    contactLeadTimeLabel: 'مدة التسليم', contactPortsLabel: 'الموانئ', contactEmailBtn: 'مراسلتنا', contactWaBtn: 'واتساب',
    faqPageAnswered: 'تمت الإجابة.', faqPageCommonTitle: 'الأسئلة الشائعة للمشترين.',
    faqPageCommonBody: 'كل ما تحتاج معرفته قبل تقديم طلبك الأول — الدرجات والتوثيق ومواعيد التسليم والامتثال.',
    faqPageStillHaveQ: 'لا تزال لديك أسئلة?', faqPageTalkExport: 'تحدث مع مكتب التصدير',
    faqPageTalkBody: 'شارك المنتج والدرجة والوجهة. نرد خلال 24 ساعة.',
    faqPageWaBtn: 'واتساب', faqPageEmailBtn: 'مراسلة مكتب التصدير', faqPageQuickFacts: 'معلومات سريعة',
    faqPageMoqFact: 'الحد الأدنى', faqPageCapacityFact: 'الطاقة', faqPageLeadFact: 'التسليم',
    faqPagePortsFact: 'الموانئ', faqPageGradesFact: 'الدرجات', faqPageSampleFact: 'العينة',
    faqPageMinOrderLabel: 'الحد الأدنى للطلب', faqPageLeadTimeLabel: 'مدة التسليم', faqPagePurityLabel: 'درجات النقاء',
    footerBrandDesc: 'شركة RM Psyllium LLP هي مصنّع مباشر ومصدّر بالجملة لقشور ومسحوق وبذور السيليوم الممتازة. تعمل من سيدهبور، غوجارات، وتبلغ الطاقة السنوية لمنشأتنا 2000 طن متري لتزويد درجات الأدوية (USP/EP) والأغذية والأعلاف عالميًا. الحد الأدنى للطلب: 1 كجم مع شهادة تحليل معتمدة من مختبر NABL لكل شحنة.',
    footerApplications: 'التطبيقات', footerResources: 'الموارد', footerRequestQuote: 'طلب عرض سعر', footerSampleRequest: 'طلب عينة',
    sbTitle: 'طلب عرض سعر', sbReplyTime: 'نرد خلال 24 ساعة (ساعات العمل IST)',
    sbNameLabel: 'الاسم', sbEmailLabel: 'البريد الإلكتروني أو الهاتف', sbEmailPlaceholder: 'البريد الإلكتروني أو رقم واتساب',
    sbProductLabel: 'المنتج المهتم به', sbSelectProduct: 'اختر منتجاً', sbCountryLabel: 'الدولة',
    sbCompanyLabel: 'الشركة', sbMessageLabel: 'الرسالة / المواصفات', sbMessagePlaceholder: 'الدرجة، الحجم، الشهادات، جدول التسليم…',
    sbErrorContact: 'يرجى إدخال بريدك الإلكتروني أو رقم هاتفك.', sbSubmitBtn: 'إرسال الاستفسار',
    cgItem1Title: 'مراجعة COA', cgItem1Desc: 'معاملات النقاء والمنخل والرطوبة والرماد وحجم الانتفاخ والميكروبيولوجيا والمعادن الثقيلة مشتركة لمراجعة المشتري.',
    cgItem2Title: 'سلامة الغذاء', cgItem2Desc: 'وثائق المنشأة والمواد المسببة للحساسية والميكروبيولوجيا والتداول متاحة للمشترين في قطاع الغذاء والمكملات والأدوية.',
    cgItem3Title: 'حلال وكوشير', cgItem3Desc: 'يمكن مشاركة وثائق الحلال والكوشير عند الحاجة للدُفعة الحالية وسوق المشتري.',
    cgItem4Title: 'التتبعية', cgItem4Desc: 'سجلات المنشأ والمعالجة والتغليف والشحن على مستوى الدُفعة متوافقة مع مراجعة التصدير.',
    cgItem5Title: 'التحكم في المواصفات', cgItem5Desc: 'تأكيد الدرجة والمنخل والرطوبة وحجم الانتفاخ ومتطلبات التغليف قبل العرض.',
    cgItem6Title: 'وثائق التصدير', cgItem6Desc: 'فاتورة تجارية وقائمة شحن وCOA وشهادة منشأ وشهادة صحة نبات ودعم تبخير للطلبات التصديرية.',
    pdBreadcrumbHome: 'الرئيسية', pdFromGujarat: 'من غوجارات، الهند.', pdAvailableGrades: 'الدرجات المتاحة',
    pdPackagingOptions: 'خيارات التغليف', pdApplicationsLabel: 'التطبيقات', pdApplicationFit: 'ملاءمة التطبيق',
    pdWhichGrade: 'أي درجة تناسب حالة استخدامك?', pdPrimary: 'أساسي', pdConditional: 'مشروط',
    pdNotSuitable: 'غير مناسب', pdNotUsed: 'غير مستخدم', pdSpecifications: 'المواصفات',
    pdParameter: 'المعامل', pdBestFor: 'الأمثل لـ', pdGradeDetails: 'تفاصيل الدرجة',
    pdSelectGrade: 'اختر درجتك', pdByApplication: 'حسب التطبيق', pdCommonQuestions: 'الأسئلة الشائعة',
    pdFaqIntro: 'أسئلة متكررة', pdFaqIntroSuffix: 'من المشترين.',
    pdFaqDesc: 'أسئلة خاصة بالمنتج من المشترين — الدرجات والتوثيق ومواعيد التسليم والامتثال.',
    pdRequestQuoteLabel: 'طلب عرض سعر', pdWithin24h: 'خلال 24 ساعة.',
    pdCompareGradesTitle: 'مقارنة درجات {name}', pdReadyToSource: 'مستعد لاستيراد {name}?',
    pdCtaBody: 'شارك الدرجة والمنخل والتغليف والوجهة والحجم الشهري. نرد خلال 24 ساعة بالأسعار والتوافر.',
    pdFindMyGrade: 'ابحث عن درجتي ↓', pdLegendPrimary: 'الملاءمة الأساسية',
    pdLegendConditional: 'مشروط — تأكد مع ضمان الجودة', pdLegendNotSuitable: 'غير مناسب', pdLegendNotApplicable: 'غير قابل للتطبيق',
    readyToSource: 'مستعد للاستيراد؟', sampleCoaTitle: 'احصل على عينة مع COA',
    sampleCoaBody: 'شارك مواصفاتك — الدرجة والمنخل والحجم الشهري والوجهة. سنرد خلال 24 ساعة.',
    moreResources: 'موارد إضافية', topicsCovered: 'الموضوعات المشمولة',
    sourcingQuestion: 'هل لديك سؤال حول التوريد؟',
    sourcingQuestionBody: 'يجيب فريق التصدير لدينا على الأسئلة التقنية والتجارية حول درجات السيليوم والمنخل والشهادات والتوثيق.',
    insightsKicker: 'أدلة الشراء', insightsTitleSuffix: 'لفرق المشتريات.',
    insightsLead: 'أدلة عملية حول الدرجات والمنخل والامتثال وقرارات التوريد — لفرق المشتريات وضمان الجودة.',
    insightsAudienceLabel: 'الجمهور المستهدف', insightsPublishedLabel: 'تاريخ النشر',
    insightsSourceLabel: 'المصدر', insightsSourceValue: 'RM Psyllium · سيدهبور، غوجارات', allBuyerGuides: 'جميع الأدلة →',
    blogTopicsLabel: 'المواضيع:', blogAllLabel: 'الكل', blogTopicLabel: 'الموضوع',
    blogAuthorLabel: 'المؤلف', blogCategoryLabel: 'الفئة',
    sourceLocation: 'سيدهبور، غوجارات، الهند', relatedArticles: 'مقالات ذات صلة',
    industryBuyerApp: 'تطبيق المشتري', industryRequestQuote: 'طلب عرض سعر التطبيق',
    industryMatchGrade: 'طابق تطبيقك مع الدرجة والمنخل والتغليف والوثائق المناسبة.',
    industryUseCases: 'التطبيقات الشائعة', industryKeySpecs: 'المواصفات الرئيسية',
    industryDocuments: 'الوثائق التي ستتلقاها', industryBuyerNote: 'هل أنت مستعد للتوريد؟',
  },
  zh: {
    navProducts: '产品', navRegions: '地区', navIndustries: '行业',
    navCompliance: '合规', navInsights: '采购指南', navFaq: '常见问题',
    navContact: '联系我们', navBlog: '博客', navQuality: '质量', cta: '询价',
    homeTitle: '来自印度古吉拉特邦的车叶草批量供应。',
    homeSub: '车叶草皮、皮粉、种子、卡卡粉及牛饲料，提供出口包装和完整文件。',
    specTitle: '批量询价', requestQuoteCta: '产品询价',
    viewApplicationsCta: '查看应用', supplyFitLabel: '供应适配性',
    requestQuoteBandTitle: '获取本产品的报价、样品和文件。',
    requestQuoteBandLead: '提供规格、目数、包装、目的港和月度用量，我们将在24小时内回复报价和样品COA。',
    complianceTitle: '您的质量团队所需的每一份文件。',
    complianceLead: 'COA参数、批次来源、微生物学、重金属及完整出口文件——在样品发货前提供，而非在采购订单签署后。',
    complianceChecklist: '买方核查清单',
    complianceChecklistLead: '在确认批量订单前，请按产品、批次和目的市场索取当前文件。',
    insightsReadMore: '阅读完整指南', faqTitle: '我们在每次首单前回答的问题。',
    faqLead: '最低订量、规格差异、药典合规、文件要求、交货期及从下单到发货的全流程。',
    contactTitle: '联系出口部门。', contactLead: '提供产品、数量、目的地和规格，我们在24小时内回复。',
    productsListTitle: '六种车叶草规格，全部出口就绪。',
    productsListLead: '从85%食品级到99% USP/EP/IP制药级，提供定制目数、包装及每批次完整COA。',
    insightsListTitle: '采购指南与市场洞察。', blogTitle: '车叶草买家采购指南。',
    blogLead: '规格选择、文件要求，以及在首次订购前应向供应商提出的问题。',
    heroBadge: '车叶草制造商 · 印度古吉拉特邦',
    heroTitle: '为制药、保健品及食品制造商提供批量车叶草。',
    heroBody: '我们采购、研磨并发运车叶草皮、粉末和种子——匹配您的纯度规格、目数和文件要求。我们报价即所发。',
    heroTrustCoa: '每批COA', heroLeadTimeLabel: '交货期', heroSampleLabel: '样品',
    heroLeadTimeValue: '确认后7天', heroSampleValue: '100–500克含COA，5天内发出',
    heroCtaWhatsApp: 'WhatsApp', statCapacityLabel: '年加工产能',
    statHistoryLabel: '年生产制造经验', statLeadLabel: '下单到发货', statMoqLabel: '最低订量',
    hpProductsTitle: '面向批量买家的车叶草产品。',
    hpProductsBody: '七条产品线，纯度85%至99%，规格、目数和药典合规性均根据您的配方量身定制。',
    hpWhyTitle: '我们与贸易型出口商的区别。',
    hpDiff1Title: '40年深耕制造一线',
    hpDiff1Body: '40余年车叶草生产制造经验——来自加工设施内部，而非贸易端。这种深厚的运营知识直接体现在稳定的品质和可靠的规格参数上。',
    hpDiff2Title: '定制规格，非目录选项',
    hpDiff2Body: '在报价前记录规格、目数、包装和文件要求。您的规格是需求书——而非目录中的选项。',
    hpDiff3Title: '制造专业知识，非贸易差价',
    hpDiff3Body: '我们自主加工，不购买成品转卖。您指定的规格即为您的批次专门生产——不是从他人库存中重新包装。',
    hpDiff4Title: '发货前完整文件',
    hpDiff4Body: '每批次提供COA、原产地证、植物检疫证书、熏蒸证书、MSDS及过敏原声明。所有文件在发货前共享——在集装箱移动前由您的质量团队审核。',
    hpDiff5Title: '任意数量均可订购',
    hpDiff5Body: '无最低起订量。我们提供1公斤实验室检测样品、5公斤试用批次以及20吨整柜订单。按需订购，随时扩量。',
    hpProcessTitle: '从种子到出口就绪包装。', hpProcessStepLabel: '5个步骤 · 一批次',
    hpStep1Title: '采购', hpStep1Body: '车叶草种子来自西德普尔和北古吉拉特的合同农场——世界主要车叶草种植区域。每批次保留来源记录。',
    hpStep2Title: '清洁', hpStep2Body: '研磨前对种子进行清洁和分级。各阶段进行去石、筛分和磁力检测，以减少异物。',
    hpStep3Title: '研磨', hpStep3Body: '受控研磨按买家指定的纯度和目数将皮与种子分离。无化学漂白或酸处理。',
    hpStep4Title: '检测', hpStep4Body: '包装前进行实验室检测——纯度、膨胀体积、水分、灰分、微生物学和重金属。结果记录在发货前共享的COA中。',
    hpStep5Title: '包装与发货', hpStep5Body: '按买家指定袋规进行食品级包装。出口文件在发货前准备并审核。FOB蒙德拉或CIF。',
    hpCredTitle: '在质量团队所关注的机构完成注册。', hpIecActive: '有效 · 进出口代码',
    hpFaqTitle: '我们在每次首单前收到的问题。',
    hpFaqBody: '最低订量、规格差异、药典合规、文件套件——直接回答。',
    hpContactTitle: '发送您的规格，我们24小时内回复。',
    hpContactBody: '规格、目数、包装、目的港、月度用量——发送您已有的信息。我们将回复报价、样品COA及样品寄送选项。',
    hpContactEmailLabel: '电子邮件', hpContactResponseLabel: '响应时间',
    hpContactResponseValue: '通常在4小时内（IST工作时间）', hpGetQuote: '询价',
    labelProducts: '产品', labelWhyUs: '为何选择RM Psyllium', labelProcess: '流程',
    labelCredentials: '资质', labelStepsOne: '5个步骤 · 一批次', labelContact: '联系我们',
    productsPageKicker: '所有产品', productsPageH1Suffix: '来自印度古吉拉特邦。',
    productsPageCapacityLabel: '年产能', productsPagePurityLabel: '纯度规格',
    productsPageMoqLabel: '最低订量 · FOB蒙德拉', productsPageGradeKicker: '规格对比',
    productsPageGradeTitle: '车叶草皮：规格汇总', productsPageTableNote: '可按产品和批次提供完整COA参数。',
    productsPageViewQuality: '查看质量文件 →', productsPageCtaTitle: '分享您的规格，获取报价。',
    productsPageCtaBody: '告知我们产品、规格、目数、包装、目的地和月度用量，我们将在24小时内回复报价和供货情况。',
    qualityCoaStatLabel: 'COA检测参数', qualityFssaiStatLabel: '工厂已注册',
    qualityApedaStatLabel: '出口许可已注册', qualityDocTypesLabel: '文件类型',
    qualityCredTitle: '您的采购团队将要求提供的资质。',
    qualityCredLead: 'FSSAI工厂注册、APEDA出口许可、Spices Board登记及有效IEC。取样前可按需提供当前证书。',
    qualityBadgeRegistered: '已注册', qualityBadgeActive: '有效',
    qualityFssaiDesc: '印度食品安全和标准局——工厂注册',
    qualityApedaDesc: '农业和加工食品出口开发局',
    qualitySpicesBoardDesc: '印度香料局——出口质量注册',
    qualityIecDesc: '进出口代码——对所有出口货运有效',
    qualityCtaTitle: '下单前需要文件？',
    qualityCtaBody: '发送邮件告知您的产品、批次要求和目的地。我们将在24小时内提供当前COA、证书副本和文件状态。',
    qualityCtaEmailBtn: '发邮件给出口部', contactResponseTimeLabel: '响应时间',
    contactMinOrderLabel: '最低订量', contactExportDeskLabel: '出口部门',
    contactFacilityLabel: '工厂地址', contactCapacityLabel: '产能',
    contactLeadTimeLabel: '交货期', contactPortsLabel: '港口', contactEmailBtn: '发邮件', contactWaBtn: 'WhatsApp',
    faqPageAnswered: '已回答。', faqPageCommonTitle: '买家常见问题。',
    faqPageCommonBody: '首次下单前需要了解的所有信息——规格、文件、交货期和合规要求。',
    faqPageStillHaveQ: '仍有疑问？', faqPageTalkExport: '联系出口部门',
    faqPageTalkBody: '提供产品、规格和目的地，我们在24小时内回复。',
    faqPageWaBtn: 'WhatsApp', faqPageEmailBtn: '发邮件给出口部', faqPageQuickFacts: '快速概览',
    faqPageMoqFact: '最低订量', faqPageCapacityFact: '产能', faqPageLeadFact: '交货期',
    faqPagePortsFact: '港口', faqPageGradesFact: '规格', faqPageSampleFact: '样品',
    faqPageMinOrderLabel: '最低订量', faqPageLeadTimeLabel: '交货期', faqPagePurityLabel: '纯度规格',
    footerBrandDesc: 'RM Psyllium LLP 是优质洋车前子壳、粉及种子的源头制造商 and 散装出口商。总部位于印度古吉拉特邦西德普尔（Siddhpur），我们拥有年产2,000吨的加工厂，全球供应医药级（USP/EP）、食品级和饲料级产品。最低起订量（MOQ）：1 KG，每批次均附带NABL认可的实验室检测COA。',
    footerApplications: '应用领域', footerResources: '资源', footerRequestQuote: '询价', footerSampleRequest: '样品申请',
    sbTitle: '询价', sbReplyTime: '我们在24小时内回复（IST工作时间）',
    sbNameLabel: '姓名', sbEmailLabel: '电子邮件或电话', sbEmailPlaceholder: '电子邮件或WhatsApp号码',
    sbProductLabel: '感兴趣的产品', sbSelectProduct: '选择产品', sbCountryLabel: '国家',
    sbCompanyLabel: '公司', sbMessageLabel: '留言 / 规格', sbMessagePlaceholder: '规格、数量、认证、交货时间…',
    sbErrorContact: '请输入您的电子邮件或电话号码。', sbSubmitBtn: '发送询盘',
    cgItem1Title: 'COA审核', cgItem1Desc: '纯度、目数、水分、灰分、膨胀体积、微生物学和重金属参数供买方审核。',
    cgItem2Title: '食品安全', cgItem2Desc: '工厂、过敏原、微生物学和处理文件，供食品、保健品和制药买家使用。',
    cgItem3Title: '清真与犹太洁食', cgItem3Desc: '在当前批次和买方市场需要时可提供清真和犹太洁食文件。',
    cgItem4Title: '可追溯性', cgItem4Desc: '批次级别的来源、加工、包装和运输记录，与出口审核一致。',
    cgItem5Title: '规格控制', cgItem5Desc: '报价前确认规格、目数、水分、膨胀体积和包装要求。',
    cgItem6Title: '出口文件', cgItem6Desc: '出口订单提供商业发票、装箱单、COA、原产地证、植物检疫证书及熏蒸支持。',
    pdBreadcrumbHome: '首页', pdFromGujarat: '来自印度古吉拉特邦。', pdAvailableGrades: '可用规格',
    pdPackagingOptions: '包装选项', pdApplicationsLabel: '应用领域', pdApplicationFit: '应用适配性',
    pdWhichGrade: '哪种规格适合您的用途？', pdPrimary: '主要', pdConditional: '条件性',
    pdNotSuitable: '不适用', pdNotUsed: '未使用', pdSpecifications: '规格参数',
    pdParameter: '参数', pdBestFor: '最适合', pdGradeDetails: '规格详情',
    pdSelectGrade: '选择您的规格', pdByApplication: '按应用', pdCommonQuestions: '常见问题',
    pdFaqIntro: '常见', pdFaqIntroSuffix: '问题。',
    pdFaqDesc: '买家关于产品的专项问题——规格、文件、交货期和合规。',
    pdRequestQuoteLabel: '询价', pdWithin24h: '在24小时内。',
    pdCompareGradesTitle: '比较{name}规格', pdReadyToSource: '准备好采购{name}了吗？',
    pdCtaBody: '提供规格、目数、包装、目的地和月度用量，我们将在24小时内回复报价和供货情况。',
    pdFindMyGrade: '找到我的规格 ↓', pdLegendPrimary: '主要适配',
    pdLegendConditional: '条件性——请与质量团队确认', pdLegendNotSuitable: '不适用', pdLegendNotApplicable: '不适用',
    readyToSource: '准备好采购了吗？', sampleCoaTitle: '获取含COA的样品',
    sampleCoaBody: '分享您的规格——规格、目数、月用量和目的地。我们将在24小时内回复。',
    moreResources: '更多资源', topicsCovered: '涵盖主题',
    sourcingQuestion: '有采购方面的问题吗？',
    sourcingQuestionBody: '我们的出口团队回答关于车叶草规格、目数、认证和文件的技术和商业问题。',
    insightsKicker: '买家指南', insightsTitleSuffix: '面向采购团队。',
    insightsLead: '关于规格、目数、合规和采购决策的实用指南——专为采购和质量团队编写。',
    insightsAudienceLabel: '受众', insightsPublishedLabel: '发布',
    insightsSourceLabel: '来源', insightsSourceValue: 'RM Psyllium · 西德普尔，古吉拉特', allBuyerGuides: '所有买家指南 →',
    blogTopicsLabel: '主题：', blogAllLabel: '全部', blogTopicLabel: '主题',
    blogAuthorLabel: '作者', blogCategoryLabel: '分类',
    sourceLocation: '西德普尔，古吉拉特，印度', relatedArticles: '相关文章',
    industryBuyerApp: '买家应用', industryRequestQuote: '申请应用报价',
    industryMatchGrade: '将您的应用与正确的规格、目数、包装和文件匹配。',
    industryUseCases: '常见应用', industryKeySpecs: '关键规格',
    industryDocuments: '您将收到的文件', industryBuyerNote: '准备好采购了吗？',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Product content translation maps
// Keys are the English source strings stored in the products array.
// Fallback is always the original English string.
// ─────────────────────────────────────────────────────────────────────────────

type I18nMap = Record<string, string>;

export const specParamI18n: Partial<Record<LanguageCode, I18nMap>> = {
  ar: {
    'Purity': 'النقاء', 'Purity (Husk %)': 'النقاء (% القشور)', 'Purity (Husk Content)': 'محتوى القشور (%)',
    'Swell Volume (ml/g min)': 'حجم الانتفاخ (مل/غ)', 'Moisture (% max)': 'الرطوبة (% أقصى)',
    'Total Ash (% max)': 'الرماد الكلي (% أقصى)', 'Acid-insoluble Ash (% max)': 'رماد غير ذائب في الحمض (% أقصى)',
    'Pharmacopoeia': 'دستور الأدوية', 'Mesh (ASTM)': 'المنخل (ASTM)', 'Mesh Size (ASTM)': 'حجم المنخل (ASTM)',
    'Particle size (μm)': 'حجم الجسيمات (ميكرون)', 'Heavy Metals': 'المعادن الثقيلة',
    'Foreign Matter': 'المواد الغريبة', 'Germination (%)': 'الإنبات (%)',
    'Seed Count (per gram)': 'عدد البذور/غ', 'Crude Fibre (%)': 'الألياف الخام (%)',
    'Crude Fibre (% min)': 'الألياف الخام (% أدنى)', 'Crude Protein (%)': 'البروتين الخام (%)',
    'Crude Protein (% min)': 'البروتين الخام (% أدنى)', 'Ether Extract / Fat (%)': 'الدهون (%)',
    'Metabolisable Energy': 'الطاقة القابلة للأيض', 'Viscosity (1% sol, cP)': 'اللزوجة (محلول 1%)',
    'Psyllium Base': 'قاعدة السيليوم', 'Format': 'الشكل', 'Target animal': 'الحيوان المستهدف',
    'Typical application': 'التطبيق المعتاد', 'Typical use': 'الاستخدام المعتاد',
    'Primary benefit': 'الفائدة الأساسية', 'Certificate Review': 'مراجعة الشهادة', 'Certification': 'الشهادة',
  },
  zh: {
    'Purity': '纯度', 'Purity (Husk %)': '纯度（皮%）', 'Purity (Husk Content)': '皮含量(%)',
    'Swell Volume (ml/g min)': '膨胀体积（ml/g）', 'Moisture (% max)': '水分（%最大）',
    'Total Ash (% max)': '总灰分（%最大）', 'Acid-insoluble Ash (% max)': '酸不溶灰分（%最大）',
    'Pharmacopoeia': '药典', 'Mesh (ASTM)': '目数（ASTM）', 'Mesh Size (ASTM)': '目数（ASTM）',
    'Particle size (μm)': '粒径（μm）', 'Heavy Metals': '重金属',
    'Foreign Matter': '外来物质', 'Germination (%)': '发芽率（%）',
    'Seed Count (per gram)': '粒数/克', 'Crude Fibre (%)': '粗纤维（%）',
    'Crude Fibre (% min)': '粗纤维（%最低）', 'Crude Protein (%)': '粗蛋白（%）',
    'Crude Protein (% min)': '粗蛋白（%最低）', 'Ether Extract / Fat (%)': '脂肪（%）',
    'Metabolisable Energy': '代谢能', 'Viscosity (1% sol, cP)': '粘度（1%溶液）',
    'Psyllium Base': '车叶草基', 'Format': '形态', 'Target animal': '目标动物',
    'Typical application': '典型应用', 'Typical use': '典型用途',
    'Primary benefit': '主要效益', 'Certificate Review': '证书审核', 'Certification': '认证',
  },
  es: {
    'Purity': 'Pureza', 'Purity (Husk %)': 'Pureza (% cáscara)', 'Purity (Husk Content)': 'Contenido de cáscara (%)',
    'Swell Volume (ml/g min)': 'Volumen de hinchamiento (ml/g)', 'Moisture (% max)': 'Humedad (% máx)',
    'Total Ash (% max)': 'Cenizas totales (% máx)', 'Acid-insoluble Ash (% max)': 'Cenizas insolubles en ácido (% máx)',
    'Pharmacopoeia': 'Farmacopea', 'Mesh (ASTM)': 'Malla (ASTM)', 'Mesh Size (ASTM)': 'Tamaño de malla (ASTM)',
    'Particle size (μm)': 'Tamaño de partícula (μm)', 'Heavy Metals': 'Metales pesados',
    'Foreign Matter': 'Materia extraña', 'Germination (%)': 'Germinación (%)',
    'Seed Count (per gram)': 'Semillas por gramo', 'Crude Fibre (%)': 'Fibra bruta (%)',
    'Crude Fibre (% min)': 'Fibra bruta (% mín)', 'Crude Protein (%)': 'Proteína bruta (%)',
    'Crude Protein (% min)': 'Proteína bruta (% mín)', 'Ether Extract / Fat (%)': 'Grasa (%)',
    'Metabolisable Energy': 'Energía metabolizable', 'Viscosity (1% sol, cP)': 'Viscosidad (solución 1%)',
    'Psyllium Base': 'Base de psyllium', 'Format': 'Formato', 'Target animal': 'Animal objetivo',
    'Typical application': 'Aplicación típica', 'Typical use': 'Uso típico',
    'Primary benefit': 'Beneficio principal', 'Certificate Review': 'Revisión de certificado', 'Certification': 'Certificación',
  },
  fr: {
    'Purity': 'Pureté', 'Purity (Husk %)': 'Pureté (% cosse)', 'Purity (Husk Content)': 'Teneur en cosse (%)',
    'Swell Volume (ml/g min)': 'Volume de gonflement (ml/g)', 'Moisture (% max)': 'Humidité (% max)',
    'Total Ash (% max)': 'Cendres totales (% max)', 'Acid-insoluble Ash (% max)': 'Cendres insolubles (% max)',
    'Pharmacopoeia': 'Pharmacopée', 'Mesh (ASTM)': 'Maille (ASTM)', 'Mesh Size (ASTM)': 'Taille de maille (ASTM)',
    'Particle size (μm)': 'Granulométrie (μm)', 'Heavy Metals': 'Métaux lourds',
    'Foreign Matter': 'Matières étrangères', 'Germination (%)': 'Germination (%)',
    'Seed Count (per gram)': 'Graines par gramme', 'Crude Fibre (%)': 'Fibre brute (%)',
    'Crude Fibre (% min)': 'Fibre brute (% min)', 'Crude Protein (%)': 'Protéine brute (%)',
    'Crude Protein (% min)': 'Protéine brute (% min)', 'Ether Extract / Fat (%)': 'Matières grasses (%)',
    'Metabolisable Energy': 'Énergie métabolisable', 'Viscosity (1% sol, cP)': 'Viscosité (sol. 1%)',
    'Psyllium Base': 'Base psyllium', 'Format': 'Format', 'Target animal': 'Animal cible',
    'Typical application': 'Application typique', 'Typical use': 'Utilisation typique',
    'Primary benefit': 'Bénéfice principal', 'Certificate Review': 'Révision du certificat', 'Certification': 'Certification',
  },
  de: {
    'Purity': 'Reinheit', 'Purity (Husk %)': 'Reinheit (% Schale)', 'Purity (Husk Content)': 'Schalengehalt (%)',
    'Swell Volume (ml/g min)': 'Quellvolumen (ml/g)', 'Moisture (% max)': 'Feuchte (% max)',
    'Total Ash (% max)': 'Gesamtasche (% max)', 'Acid-insoluble Ash (% max)': 'Säureunlösliche Asche (% max)',
    'Pharmacopoeia': 'Pharmakopöe', 'Mesh (ASTM)': 'Maschengröße (ASTM)', 'Mesh Size (ASTM)': 'Maschengröße (ASTM)',
    'Particle size (μm)': 'Partikelgröße (μm)', 'Heavy Metals': 'Schwermetalle',
    'Foreign Matter': 'Fremdstoffe', 'Germination (%)': 'Keimfähigkeit (%)',
    'Seed Count (per gram)': 'Samen pro Gramm', 'Crude Fibre (%)': 'Rohfaser (%)',
    'Crude Fibre (% min)': 'Rohfaser (% min)', 'Crude Protein (%)': 'Rohprotein (%)',
    'Crude Protein (% min)': 'Rohprotein (% min)', 'Ether Extract / Fat (%)': 'Fett (%)',
    'Metabolisable Energy': 'Umsetzbare Energie', 'Viscosity (1% sol, cP)': 'Viskosität (1% Lsg.)',
    'Psyllium Base': 'Psyllium-Basis', 'Format': 'Format', 'Target animal': 'Zieltier',
    'Typical application': 'Typische Anwendung', 'Typical use': 'Typische Verwendung',
    'Primary benefit': 'Hauptvorteil', 'Certificate Review': 'Zertifikatsprüfung', 'Certification': 'Zertifizierung',
  },
  nl: {
    'Purity': 'Zuiverheid', 'Purity (Husk %)': 'Zuiverheid (% schil)', 'Purity (Husk Content)': 'Schilgehalte (%)',
    'Swell Volume (ml/g min)': 'Zwelvolume (ml/g)', 'Moisture (% max)': 'Vocht (% max)',
    'Total Ash (% max)': 'Totale as (% max)', 'Acid-insoluble Ash (% max)': 'Zuuronoplosbare as (% max)',
    'Pharmacopoeia': 'Farmacopee', 'Mesh (ASTM)': 'Mesh (ASTM)', 'Mesh Size (ASTM)': 'Meshgrootte (ASTM)',
    'Particle size (μm)': 'Deeltjesgrootte (μm)', 'Heavy Metals': 'Zware metalen',
    'Foreign Matter': 'Vreemd materiaal', 'Germination (%)': 'Kieming (%)',
    'Seed Count (per gram)': 'Zaden per gram', 'Crude Fibre (%)': 'Ruwe vezel (%)',
    'Crude Fibre (% min)': 'Ruwe vezel (% min)', 'Crude Protein (%)': 'Ruw eiwit (%)',
    'Crude Protein (% min)': 'Ruw eiwit (% min)', 'Ether Extract / Fat (%)': 'Vet (%)',
    'Metabolisable Energy': 'Metaboliseerbare energie', 'Viscosity (1% sol, cP)': 'Viscositeit (1% opl.)',
    'Psyllium Base': 'Psyllium-basis', 'Format': 'Formaat', 'Target animal': 'Doeldier',
    'Typical application': 'Typische toepassing', 'Typical use': 'Typisch gebruik',
    'Primary benefit': 'Primair voordeel', 'Certificate Review': 'Certificaatbeoordeling', 'Certification': 'Certificering',
  },
  it: {
    'Purity': 'Purezza', 'Purity (Husk %)': 'Purezza (% buccia)', 'Purity (Husk Content)': 'Contenuto buccia (%)',
    'Swell Volume (ml/g min)': 'Volume rigonfiamento (ml/g)', 'Moisture (% max)': 'Umidità (% max)',
    'Total Ash (% max)': 'Ceneri totali (% max)', 'Acid-insoluble Ash (% max)': 'Ceneri insolubili (% max)',
    'Pharmacopoeia': 'Farmacopea', 'Mesh (ASTM)': 'Mesh (ASTM)', 'Mesh Size (ASTM)': 'Dimensione mesh (ASTM)',
    'Particle size (μm)': 'Dimensione particelle (μm)', 'Heavy Metals': 'Metalli pesanti',
    'Foreign Matter': 'Materia estranea', 'Germination (%)': 'Germinazione (%)',
    'Seed Count (per gram)': 'Semi per grammo', 'Crude Fibre (%)': 'Fibra grezza (%)',
    'Crude Fibre (% min)': 'Fibra grezza (% min)', 'Crude Protein (%)': 'Proteina grezza (%)',
    'Crude Protein (% min)': 'Proteina grezza (% min)', 'Ether Extract / Fat (%)': 'Grassi (%)',
    'Metabolisable Energy': 'Energia metabolizzabile', 'Viscosity (1% sol, cP)': 'Viscosità (sol. 1%)',
    'Psyllium Base': 'Base psyllium', 'Format': 'Formato', 'Target animal': 'Animale target',
    'Typical application': 'Applicazione tipica', 'Typical use': 'Uso tipico',
    'Primary benefit': 'Beneficio principale', 'Certificate Review': 'Revisione certificato', 'Certification': 'Certificazione',
  },
  pt: {
    'Purity': 'Pureza', 'Purity (Husk %)': 'Pureza (% casca)', 'Purity (Husk Content)': 'Teor de casca (%)',
    'Swell Volume (ml/g min)': 'Volume de intumescimento (ml/g)', 'Moisture (% max)': 'Umidade (% máx)',
    'Total Ash (% max)': 'Cinzas totais (% máx)', 'Acid-insoluble Ash (% max)': 'Cinzas insolúveis (% máx)',
    'Pharmacopoeia': 'Farmacopeia', 'Mesh (ASTM)': 'Malha (ASTM)', 'Mesh Size (ASTM)': 'Tamanho de malha (ASTM)',
    'Particle size (μm)': 'Tamanho de partícula (μm)', 'Heavy Metals': 'Metais pesados',
    'Foreign Matter': 'Matéria estranha', 'Germination (%)': 'Germinação (%)',
    'Seed Count (per gram)': 'Sementes por grama', 'Crude Fibre (%)': 'Fibra bruta (%)',
    'Crude Fibre (% min)': 'Fibra bruta (% mín)', 'Crude Protein (%)': 'Proteína bruta (%)',
    'Crude Protein (% min)': 'Proteína bruta (% mín)', 'Ether Extract / Fat (%)': 'Gordura (%)',
    'Metabolisable Energy': 'Energia metabolizável', 'Viscosity (1% sol, cP)': 'Viscosidade (sol. 1%)',
    'Psyllium Base': 'Base de psyllium', 'Format': 'Formato', 'Target animal': 'Animal alvo',
    'Typical application': 'Aplicação típica', 'Typical use': 'Uso típico',
    'Primary benefit': 'Benefício principal', 'Certificate Review': 'Revisão de certificado', 'Certification': 'Certificação',
  },
  ru: {
    'Purity': 'Чистота', 'Purity (Husk %)': 'Чистота (% шелухи)', 'Purity (Husk Content)': 'Содержание шелухи (%)',
    'Swell Volume (ml/g min)': 'Объём набухания (мл/г)', 'Moisture (% max)': 'Влажность (% макс)',
    'Total Ash (% max)': 'Общая зола (% макс)', 'Acid-insoluble Ash (% max)': 'Кислотонераств. зола (% макс)',
    'Pharmacopoeia': 'Фармакопея', 'Mesh (ASTM)': 'Сетка (ASTM)', 'Mesh Size (ASTM)': 'Размер сетки (ASTM)',
    'Particle size (μm)': 'Размер частиц (мкм)', 'Heavy Metals': 'Тяжёлые металлы',
    'Foreign Matter': 'Посторонние примеси', 'Germination (%)': 'Всхожесть (%)',
    'Seed Count (per gram)': 'Семян на грамм', 'Crude Fibre (%)': 'Сырая клетчатка (%)',
    'Crude Fibre (% min)': 'Сырая клетчатка (% мин)', 'Crude Protein (%)': 'Сырой протеин (%)',
    'Crude Protein (% min)': 'Сырой протеин (% мин)', 'Ether Extract / Fat (%)': 'Жир (%)',
    'Metabolisable Energy': 'Обменная энергия', 'Viscosity (1% sol, cP)': 'Вязкость (р-р 1%)',
    'Psyllium Base': 'Основа псиллиума', 'Format': 'Форма', 'Target animal': 'Целевое животное',
    'Typical application': 'Типичное применение', 'Typical use': 'Типичное использование',
    'Primary benefit': 'Основное преимущество', 'Certificate Review': 'Проверка сертификата', 'Certification': 'Сертификация',
  },
};

export const appNameI18n: Partial<Record<LanguageCode, I18nMap>> = {
  ar: {
    'Pharma': 'دوائي', 'Food': 'غذائي', 'Nutraceutical': 'مكملات غذائية', 'Animal feed': 'علف حيواني',
    'Food and bakery': 'غذاء ومخبوزات', 'Capsule filling': 'حشو كبسولات',
    'Gluten-free bakery': 'مخبوزات خالية من الغلوتين', 'Health drinks & drink mixes': 'مشروبات صحية',
    'Paper & packaging': 'ورق وتغليف', 'Cosmetics & personal care': 'مستحضرات تجميل',
    'Textile sizing': 'طباعة منسوجات', 'Organic foods': 'أغذية عضوية', 'Supplements': 'مكملات',
    'Clean-label bakery': 'مخبوزات نظيفة', 'Dairy cattle': 'أبقار ألبان', 'Buffalo & ruminants': 'جاموس ومجترات',
    'Poultry feed': 'علف دواجن', 'Cattle & ruminant feed': 'علف أبقار ومجترات',
    'Compound feed manufacturing': 'تصنيع علف مركب', 'Functional food blends': 'مزيج أغذية وظيفية',
    'Pet food manufacturing': 'طعام الحيوانات الأليفة', 'Adhesives & binders': 'مواد لاصقة',
    'Soil amendment & agriculture': 'تحسين التربة', 'Veterinary nutrition': 'تغذية بيطرية',
    'Farm supply distributors': 'موزعو مستلزمات المزارع',
  },
  zh: {
    'Pharma': '制药', 'Food': '食品', 'Nutraceutical': '营养保健品', 'Animal feed': '动物饲料',
    'Food and bakery': '食品与烘焙', 'Capsule filling': '胶囊填充',
    'Gluten-free bakery': '无麸质烘焙', 'Health drinks & drink mixes': '健康饮品',
    'Paper & packaging': '纸张与包装', 'Cosmetics & personal care': '化妆品与个护',
    'Textile sizing': '纺织上浆', 'Organic foods': '有机食品', 'Supplements': '营养补剂',
    'Clean-label bakery': '清洁标签烘焙', 'Dairy cattle': '奶牛', 'Buffalo & ruminants': '水牛与反刍动物',
    'Poultry feed': '禽类饲料', 'Cattle & ruminant feed': '牛类饲料',
    'Compound feed manufacturing': '配合饲料生产', 'Functional food blends': '功能性食品混合',
    'Pet food manufacturing': '宠物食品生产', 'Adhesives & binders': '粘合剂',
    'Soil amendment & agriculture': '土壤改良', 'Veterinary nutrition': '兽医营养',
    'Farm supply distributors': '农业供应商',
  },
  es: {
    'Pharma': 'Farmacéutica', 'Food': 'Alimentaria', 'Nutraceutical': 'Nutracéutica', 'Animal feed': 'Pienso animal',
    'Food and bakery': 'Alimentos y panadería', 'Capsule filling': 'Relleno de cápsulas',
    'Gluten-free bakery': 'Panadería sin gluten', 'Health drinks & drink mixes': 'Bebidas saludables',
    'Paper & packaging': 'Papel y embalaje', 'Cosmetics & personal care': 'Cosméticos',
    'Textile sizing': 'Encolado textil', 'Organic foods': 'Alimentos ecológicos', 'Supplements': 'Suplementos',
    'Clean-label bakery': 'Panadería etiqueta limpia', 'Dairy cattle': 'Ganado lechero',
    'Buffalo & ruminants': 'Búfalo y rumiantes', 'Poultry feed': 'Pienso avícola',
    'Cattle & ruminant feed': 'Pienso bovino', 'Compound feed manufacturing': 'Fabricación de pienso compuesto',
    'Functional food blends': 'Mezclas funcionales', 'Pet food manufacturing': 'Fabricación de alimentos para mascotas',
    'Adhesives & binders': 'Adhesivos y aglutinantes', 'Soil amendment & agriculture': 'Enmienda del suelo',
    'Veterinary nutrition': 'Nutrición veterinaria', 'Farm supply distributors': 'Distribuidores agrícolas',
  },
  fr: {
    'Pharma': 'Pharmaceutique', 'Food': 'Alimentaire', 'Nutraceutical': 'Nutraceutique', 'Animal feed': 'Alimentation animale',
    'Food and bakery': 'Alimentation et boulangerie', 'Capsule filling': 'Remplissage de gélules',
    'Gluten-free bakery': 'Boulangerie sans gluten', 'Health drinks & drink mixes': 'Boissons santé',
    'Paper & packaging': 'Papier et emballage', 'Cosmetics & personal care': 'Cosmétiques',
    'Textile sizing': 'Encollage textile', 'Organic foods': 'Aliments bio', 'Supplements': 'Compléments',
    'Clean-label bakery': 'Boulangerie clean label', 'Dairy cattle': 'Bovins laitiers',
    'Buffalo & ruminants': 'Buffle et ruminants', 'Poultry feed': 'Alimentation volaille',
    'Cattle & ruminant feed': 'Alimentation bovine', 'Compound feed manufacturing': 'Fabrication d\'aliment composé',
    'Functional food blends': 'Mélanges alimentaires fonctionnels', 'Pet food manufacturing': 'Fabrication d\'aliments pour animaux',
    'Adhesives & binders': 'Adhésifs et liants', 'Soil amendment & agriculture': 'Amendement du sol',
    'Veterinary nutrition': 'Nutrition vétérinaire', 'Farm supply distributors': 'Distributeurs agricoles',
  },
  de: {
    'Pharma': 'Pharma', 'Food': 'Lebensmittel', 'Nutraceutical': 'Nutraceutika', 'Animal feed': 'Tierfutter',
    'Food and bakery': 'Lebensmittel & Backwaren', 'Capsule filling': 'Kapselfüllung',
    'Gluten-free bakery': 'Glutenfreie Backwaren', 'Health drinks & drink mixes': 'Gesundheitsgetränke',
    'Paper & packaging': 'Papier & Verpackung', 'Cosmetics & personal care': 'Kosmetik',
    'Textile sizing': 'Textilschlichte', 'Organic foods': 'Bio-Lebensmittel', 'Supplements': 'Nahrungsergänzung',
    'Clean-label bakery': 'Clean-Label-Backwaren', 'Dairy cattle': 'Milchvieh',
    'Buffalo & ruminants': 'Büffel & Wiederkäuer', 'Poultry feed': 'Geflügelfutter',
    'Cattle & ruminant feed': 'Rinderfutter', 'Compound feed manufacturing': 'Mischfutterherstellung',
    'Functional food blends': 'Funktionelle Lebensmittelmischungen', 'Pet food manufacturing': 'Heimtiernahrungsherstellung',
    'Adhesives & binders': 'Klebstoffe & Bindemittel', 'Soil amendment & agriculture': 'Bodenverbesserung',
    'Veterinary nutrition': 'Tierernährung', 'Farm supply distributors': 'Landwirtschaftliche Händler',
  },
  nl: {
    'Pharma': 'Farma', 'Food': 'Voeding', 'Nutraceutical': 'Nutraceutica', 'Animal feed': 'Diervoeder',
    'Food and bakery': 'Voeding en bakkerij', 'Capsule filling': 'Capsulevulling',
    'Gluten-free bakery': 'Glutenvrije bakkerij', 'Health drinks & drink mixes': 'Gezondheidsdrankjes',
    'Paper & packaging': 'Papier & verpakking', 'Cosmetics & personal care': 'Cosmetica',
    'Textile sizing': 'Textielbewerking', 'Organic foods': 'Biologische voeding', 'Supplements': 'Supplementen',
    'Clean-label bakery': 'Clean-label bakkerij', 'Dairy cattle': 'Melkvee',
    'Buffalo & ruminants': 'Buffel en herkauwers', 'Poultry feed': 'Pluimveevoer',
    'Cattle & ruminant feed': 'Rundveevoer', 'Compound feed manufacturing': 'Mengvoerproductie',
    'Functional food blends': 'Functionele voedingsmixen', 'Pet food manufacturing': 'Gezelschapsdierenvoer',
    'Adhesives & binders': 'Lijmen & bindmiddelen', 'Soil amendment & agriculture': 'Bodemverbetering',
    'Veterinary nutrition': 'Veterinaire voeding', 'Farm supply distributors': 'Agrarische distributeurs',
  },
  it: {
    'Pharma': 'Farmaceutico', 'Food': 'Alimentare', 'Nutraceutical': 'Nutraceutico', 'Animal feed': 'Mangimi',
    'Food and bakery': 'Alimenti e panificazione', 'Capsule filling': 'Riempimento capsule',
    'Gluten-free bakery': 'Panificazione senza glutine', 'Health drinks & drink mixes': 'Bevande salutari',
    'Paper & packaging': 'Carta e imballaggio', 'Cosmetics & personal care': 'Cosmetici',
    'Textile sizing': 'Imbozzimatura tessile', 'Organic foods': 'Alimenti biologici', 'Supplements': 'Integratori',
    'Clean-label bakery': 'Panificazione clean label', 'Dairy cattle': 'Bovini da latte',
    'Buffalo & ruminants': 'Bufalo e ruminanti', 'Poultry feed': 'Mangimi avicoli',
    'Cattle & ruminant feed': 'Mangimi bovini', 'Compound feed manufacturing': 'Produzione mangimi composti',
    'Functional food blends': 'Miscele alimentari funzionali', 'Pet food manufacturing': 'Produzione alimenti per animali',
    'Adhesives & binders': 'Adesivi e leganti', 'Soil amendment & agriculture': 'Ammendante del suolo',
    'Veterinary nutrition': 'Nutrizione veterinaria', 'Farm supply distributors': 'Distributori agricoli',
  },
  pt: {
    'Pharma': 'Farmacêutica', 'Food': 'Alimentar', 'Nutraceutical': 'Nutracêutica', 'Animal feed': 'Ração animal',
    'Food and bakery': 'Alimentos e padaria', 'Capsule filling': 'Enchimento de cápsulas',
    'Gluten-free bakery': 'Padaria sem glúten', 'Health drinks & drink mixes': 'Bebidas saudáveis',
    'Paper & packaging': 'Papel e embalagem', 'Cosmetics & personal care': 'Cosméticos',
    'Textile sizing': 'Engomagem têxtil', 'Organic foods': 'Alimentos orgânicos', 'Supplements': 'Suplementos',
    'Clean-label bakery': 'Padaria clean label', 'Dairy cattle': 'Bovinos leiteiros',
    'Buffalo & ruminants': 'Búfalo e ruminantes', 'Poultry feed': 'Ração avícola',
    'Cattle & ruminant feed': 'Ração bovina', 'Compound feed manufacturing': 'Fabricação de ração composta',
    'Functional food blends': 'Misturas alimentares funcionais', 'Pet food manufacturing': 'Fabricação de alimentos para pets',
    'Adhesives & binders': 'Adesivos e ligantes', 'Soil amendment & agriculture': 'Correção do solo',
    'Veterinary nutrition': 'Nutrição veterinária', 'Farm supply distributors': 'Distribuidores agrícolas',
  },
  ru: {
    'Pharma': 'Фармацевтика', 'Food': 'Продукты питания', 'Nutraceutical': 'Нутрицевтика', 'Animal feed': 'Корм для животных',
    'Food and bakery': 'Продукты и выпечка', 'Capsule filling': 'Наполнение капсул',
    'Gluten-free bakery': 'Безглютеновая выпечка', 'Health drinks & drink mixes': 'Полезные напитки',
    'Paper & packaging': 'Бумага и упаковка', 'Cosmetics & personal care': 'Косметика',
    'Textile sizing': 'Текстильный шлихт', 'Organic foods': 'Органические продукты', 'Supplements': 'Добавки',
    'Clean-label bakery': 'Чистая этикетка', 'Dairy cattle': 'Молочный скот',
    'Buffalo & ruminants': 'Буйволы и жвачные', 'Poultry feed': 'Корм для птицы',
    'Cattle & ruminant feed': 'Корм для КРС', 'Compound feed manufacturing': 'Производство комбикорма',
    'Functional food blends': 'Функциональные смеси', 'Pet food manufacturing': 'Производство кормов для животных',
    'Adhesives & binders': 'Клеи и связующие', 'Soil amendment & agriculture': 'Улучшение почвы',
    'Veterinary nutrition': 'Ветеринарное питание', 'Farm supply distributors': 'Сельхоздистрибьюторы',
  },
};

export const bestForI18n: Partial<Record<LanguageCode, I18nMap>> = {
  ar: {
    'Milling for husk and powder, feed manufacturing, ingredient processing': 'طحن للقشور والمسحوق، تصنيع علف، معالجة مكونات',
    'High-purity husk milling (98%+), pharma-grade husk processors': 'طحن قشور عالي النقاء (98%+)، مصنعو قشور دوائية',
    'Animal feed, industrial fibre, cost-sensitive food': 'علف حيواني، ألياف صناعية، أغذية حساسة للتكلفة',
    'Supplement sachets, NF food fibre, functional cereal': 'أكياس مكملات، ألياف غذائية NF، حبوب وظيفية',
    'Pharma capsule fills, USP/EP laxative sachets, OTC supplement': 'حشو كبسولات دوائية، أكياس ملينات USP/EP، مكملات OTC',
    'USP/EP/IP laxative monographs, branded OTC digestive supplements': 'دساتير ملينات USP/EP/IP، مكملات هضمية OTC',
    'Capsule filling, supplement sachets, functional food powder': 'حشو كبسولات، أكياس مكملات، مسحوق غذائي وظيفي',
    'Pharma capsule fill, drink mix powder, USP/EP applications': 'حشو كبسولات دوائية، مسحوق مشروبات، تطبيقات USP/EP',
    'USP/EP/IP pharma, cosmetics, premium supplement powders': 'أدوية USP/EP/IP، مستحضرات تجميل، مساحيق مكملات فاخرة',
    'Gluten-free artisan bakery, high-fibre cereal, animal feed blends': 'مخبوزات خالية من الغلوتين، حبوب عالية الألياف، مزيج علف',
    'Paper and packaging, textile sizing, absorbent products': 'ورق وتغليف، طباعة منسوجات، منتجات ماصة',
    'Cosmetics, personal care, fine-particle industrial applications': 'مستحضرات تجميل، رعاية شخصية، تطبيقات صناعية دقيقة',
    'Pet food fibre source and binder, animal nutrition manufacturing': 'مصدر ألياف طعام الحيوانات الأليفة، تصنيع تغذية حيوانية',
    'Pellet manufacturing, premix blending, poultry feed': 'تصنيع حبيبات، مزج خلطات مسبقة، علف دواجن',
    'Cattle feed, buffalo feed, coarse compound feed manufacturing': 'علف أبقار وجاموس، تصنيع علف مركب خشن',
    'Cattle, poultry, ruminant fibre supplement, compound feed blending': 'أبقار ودواجن ومجترات، مزج علف مركب',
    'Dairy cattle, buffalo, direct farm feeding': 'أبقار ألبان وجاموس، تغذية مزارع مباشرة',
    'US organic supplement and food brands, NOP-labeled products': 'ماركات مكملات وأغذية أمريكية عضوية، منتجات NOP',
    'EU organic food and supplement brands, EU import COI': 'ماركات أغذية ومكملات عضوية أوروبية، COI استيراد أوروبي',
  },
  zh: {
    'Milling for husk and powder, feed manufacturing, ingredient processing': '加工皮和粉、饲料生产、原料加工',
    'High-purity husk milling (98%+), pharma-grade husk processors': '高纯度皮加工（98%+）、制药级处理商',
    'Animal feed, industrial fibre, cost-sensitive food': '动物饲料、工业纤维、低成本食品',
    'Supplement sachets, NF food fibre, functional cereal': '补剂袋、NF食品纤维、功能性谷物',
    'Pharma capsule fills, USP/EP laxative sachets, OTC supplement': '药用胶囊填充、USP/EP泻药袋、OTC补剂',
    'USP/EP/IP laxative monographs, branded OTC digestive supplements': 'USP/EP/IP泻药标准、OTC消化补剂品牌',
    'Capsule filling, supplement sachets, functional food powder': '胶囊填充、补剂袋、功能性食品粉',
    'Pharma capsule fill, drink mix powder, USP/EP applications': '药用胶囊填充、饮料混合粉、USP/EP应用',
    'USP/EP/IP pharma, cosmetics, premium supplement powders': 'USP/EP/IP制药、化妆品、高端补剂粉',
    'Gluten-free artisan bakery, high-fibre cereal, animal feed blends': '无麸质工坊烘焙、高纤维谷物、饲料混合',
    'Paper and packaging, textile sizing, absorbent products': '纸张与包装、纺织上浆、吸收产品',
    'Cosmetics, personal care, fine-particle industrial applications': '化妆品、个人护理、细粒工业应用',
    'Pet food fibre source and binder, animal nutrition manufacturing': '宠物食品纤维源和粘合剂、动物营养生产',
    'Pellet manufacturing, premix blending, poultry feed': '颗粒生产、预混料、禽类饲料',
    'Cattle feed, buffalo feed, coarse compound feed manufacturing': '牛饲料、水牛饲料、粗粒配合饲料生产',
    'Cattle, poultry, ruminant fibre supplement, compound feed blending': '牛、禽、反刍动物纤维补充、配合饲料混合',
    'Dairy cattle, buffalo, direct farm feeding': '奶牛、水牛、农场直接饲喂',
    'US organic supplement and food brands, NOP-labeled products': '美国有机补剂和食品品牌、NOP标签产品',
    'EU organic food and supplement brands, EU import COI': '欧盟有机食品和补剂品牌、欧盟进口COI',
  },
  es: {
    'Milling for husk and powder, feed manufacturing, ingredient processing': 'Molienda para cáscara y polvo, fabricación de pienso, procesamiento de ingredientes',
    'High-purity husk milling (98%+), pharma-grade husk processors': 'Molienda de cáscara de alta pureza (98%+), procesadores farmacéuticos',
    'Animal feed, industrial fibre, cost-sensitive food': 'Pienso animal, fibra industrial, alimentos sensibles al coste',
    'Supplement sachets, NF food fibre, functional cereal': 'Sobres de suplemento, fibra NF, cereal funcional',
    'Pharma capsule fills, USP/EP laxative sachets, OTC supplement': 'Relleno de cápsulas, sobres laxantes USP/EP, suplemento OTC',
    'USP/EP/IP laxative monographs, branded OTC digestive supplements': 'Monografías laxantes USP/EP/IP, suplementos digestivos OTC',
    'Capsule filling, supplement sachets, functional food powder': 'Relleno de cápsulas, sobres de suplemento, polvo funcional',
    'Pharma capsule fill, drink mix powder, USP/EP applications': 'Relleno farmacéutico, polvo para bebidas, USP/EP',
    'USP/EP/IP pharma, cosmetics, premium supplement powders': 'Farma USP/EP/IP, cosméticos, polvos premium',
    'Gluten-free artisan bakery, high-fibre cereal, animal feed blends': 'Panadería sin gluten, cereal alto en fibra, mezclas de pienso',
    'Paper and packaging, textile sizing, absorbent products': 'Papel y embalaje, encolado textil, absorbentes',
    'Cosmetics, personal care, fine-particle industrial applications': 'Cosméticos, higiene personal, aplicaciones industriales',
    'Pet food fibre source and binder, animal nutrition manufacturing': 'Fuente de fibra para mascotas, fabricación de nutrición animal',
    'Pellet manufacturing, premix blending, poultry feed': 'Fabricación de pienso granulado, mezcla, avicultura',
    'Cattle feed, buffalo feed, coarse compound feed manufacturing': 'Pienso bovino y búfalo, fabricación de pienso compuesto grueso',
    'Cattle, poultry, ruminant fibre supplement, compound feed blending': 'Bovino, aves, rumiantes, mezcla de pienso compuesto',
    'Dairy cattle, buffalo, direct farm feeding': 'Ganado lechero, búfalo, alimentación directa en granja',
    'US organic supplement and food brands, NOP-labeled products': 'Marcas orgánicas EE.UU., productos con etiqueta NOP',
    'EU organic food and supplement brands, EU import COI': 'Marcas orgánicas UE, COI de importación UE',
  },
  fr: {
    'Milling for husk and powder, feed manufacturing, ingredient processing': 'Mouture pour cosse et poudre, fabrication d\'aliment, traitement d\'ingrédients',
    'High-purity husk milling (98%+), pharma-grade husk processors': 'Mouture haute pureté (98%+), transformateurs pharmaceutiques',
    'Animal feed, industrial fibre, cost-sensitive food': 'Aliment animal, fibre industrielle, alimentation économique',
    'Supplement sachets, NF food fibre, functional cereal': 'Sachets compléments, fibre NF, céréale fonctionnelle',
    'Pharma capsule fills, USP/EP laxative sachets, OTC supplement': 'Remplissage gélules, sachets laxatifs USP/EP, complément OTC',
    'USP/EP/IP laxative monographs, branded OTC digestive supplements': 'Monographies laxatives USP/EP/IP, compléments digestifs OTC',
    'Capsule filling, supplement sachets, functional food powder': 'Remplissage gélules, sachets, poudre alimentaire fonctionnelle',
    'Pharma capsule fill, drink mix powder, USP/EP applications': 'Remplissage pharmaceutique, poudre boisson, USP/EP',
    'USP/EP/IP pharma, cosmetics, premium supplement powders': 'Pharma USP/EP/IP, cosmétiques, poudres premium',
    'Gluten-free artisan bakery, high-fibre cereal, animal feed blends': 'Boulangerie sans gluten, céréale riche en fibres, mélanges pienso',
    'Paper and packaging, textile sizing, absorbent products': 'Papier et emballage, encollage textile, absorbants',
    'Cosmetics, personal care, fine-particle industrial applications': 'Cosmétiques, hygiène, applications industrielles fines',
    'Pet food fibre source and binder, animal nutrition manufacturing': 'Source de fibres animaux de compagnie, fabrication nutrition',
    'Pellet manufacturing, premix blending, poultry feed': 'Granulés, mélange prémix, volailles',
    'Cattle feed, buffalo feed, coarse compound feed manufacturing': 'Aliment bovin et buffle, fabrication aliment composé grossier',
    'Cattle, poultry, ruminant fibre supplement, compound feed blending': 'Bovins, volailles, ruminants, mélange aliment composé',
    'Dairy cattle, buffalo, direct farm feeding': 'Bovins laitiers, buffle, alimentation directe à la ferme',
    'US organic supplement and food brands, NOP-labeled products': 'Marques bio US, produits labellisés NOP',
    'EU organic food and supplement brands, EU import COI': 'Marques bio UE, COI import UE',
  },
  de: {
    'Milling for husk and powder, feed manufacturing, ingredient processing': 'Mahlung für Schale und Pulver, Futtermittelherstellung, Zutatenverarbeitung',
    'High-purity husk milling (98%+), pharma-grade husk processors': 'Hochreine Schalenmahlung (98%+), pharmazeutische Verarbeitung',
    'Animal feed, industrial fibre, cost-sensitive food': 'Tierfutter, industrielle Faser, kostensensible Lebensmittel',
    'Supplement sachets, NF food fibre, functional cereal': 'Nahrungsergänzungsbeutel, NF-Ballaststoff, funktionelles Getreide',
    'Pharma capsule fills, USP/EP laxative sachets, OTC supplement': 'Kapselabfüllung, USP/EP-Laxativbeutel, OTC-Ergänzung',
    'USP/EP/IP laxative monographs, branded OTC digestive supplements': 'USP/EP/IP-Monographien, OTC-Verdauungsergänzungen',
    'Capsule filling, supplement sachets, functional food powder': 'Kapselabfüllung, Ergänzungsbeutel, Funktionspulver',
    'Pharma capsule fill, drink mix powder, USP/EP applications': 'Pharmafüllung, Getränkepulver, USP/EP',
    'USP/EP/IP pharma, cosmetics, premium supplement powders': 'Pharma USP/EP/IP, Kosmetik, Premium-Ergänzungspulver',
    'Gluten-free artisan bakery, high-fibre cereal, animal feed blends': 'Glutenfreies Handwerk, ballaststoffreiches Getreide, Futtermischungen',
    'Paper and packaging, textile sizing, absorbent products': 'Papier und Verpackung, Textilschlichte, Absorptionsmittel',
    'Cosmetics, personal care, fine-particle industrial applications': 'Kosmetik, Körperpflege, Feinpartikelanwendungen',
    'Pet food fibre source and binder, animal nutrition manufacturing': 'Faserzusatz für Heimtierfutter, Tierernährungsherstellung',
    'Pellet manufacturing, premix blending, poultry feed': 'Pelletherstellung, Vormischung, Geflügelfutter',
    'Cattle feed, buffalo feed, coarse compound feed manufacturing': 'Rindergrob- und Büffelfutter, Mischfutterherstellung',
    'Cattle, poultry, ruminant fibre supplement, compound feed blending': 'Rinder, Geflügel, Wiederkäuer, Mischfutterblending',
    'Dairy cattle, buffalo, direct farm feeding': 'Milchvieh, Büffel, Direktfütterung',
    'US organic supplement and food brands, NOP-labeled products': 'US-Bio-Marken, NOP-gekennzeichnete Produkte',
    'EU organic food and supplement brands, EU import COI': 'EU-Bio-Marken, EU-Import-COI',
  },
  nl: {
    'Milling for husk and powder, feed manufacturing, ingredient processing': 'Malen voor schil en poeder, voederproductie, ingrediëntenverwerking',
    'High-purity husk milling (98%+), pharma-grade husk processors': 'Hoge-zuiverheid schilmalen (98%+), farmaceutische verwerkers',
    'Animal feed, industrial fibre, cost-sensitive food': 'Diervoeder, industriële vezel, kostenbesparende voeding',
    'Supplement sachets, NF food fibre, functional cereal': 'Supplementzakjes, NF-voedingsvezel, functioneel graan',
    'Pharma capsule fills, USP/EP laxative sachets, OTC supplement': 'Capsulevulling, USP/EP-laxatiezakjes, OTC-supplement',
    'USP/EP/IP laxative monographs, branded OTC digestive supplements': 'USP/EP/IP-monografieën, OTC-spijsverteringssupplementen',
    'Capsule filling, supplement sachets, functional food powder': 'Capsulevulling, supplementzakjes, functioneel poeder',
    'Pharma capsule fill, drink mix powder, USP/EP applications': 'Farmavulling, drankpoeder, USP/EP',
    'USP/EP/IP pharma, cosmetics, premium supplement powders': 'Farma USP/EP/IP, cosmetica, premium poeders',
    'Gluten-free artisan bakery, high-fibre cereal, animal feed blends': 'Glutenvrije ambachtelijke bakkerij, vezelrijke granen, voedermixen',
    'Paper and packaging, textile sizing, absorbent products': 'Papier en verpakking, textielbewerking, absorberende producten',
    'Cosmetics, personal care, fine-particle industrial applications': 'Cosmetica, persoonlijke verzorging, fijndeeltjestoepassingen',
    'Pet food fibre source and binder, animal nutrition manufacturing': 'Vezeltoevoeging huisdierenvoer, diervoederproductie',
    'Pellet manufacturing, premix blending, poultry feed': 'Pelletproductie, premixmenging, pluimveevoer',
    'Cattle feed, buffalo feed, coarse compound feed manufacturing': 'Runder- en buffelvoer, grof mengvoer',
    'Cattle, poultry, ruminant fibre supplement, compound feed blending': 'Runderen, pluimvee, herkauwers, mengvoer',
    'Dairy cattle, buffalo, direct farm feeding': 'Melkvee, buffel, directe boerderijvoedering',
    'US organic supplement and food brands, NOP-labeled products': 'Amerikaanse bio-merken, NOP-gelabelde producten',
    'EU organic food and supplement brands, EU import COI': 'EU bio-merken, EU-import COI',
  },
  it: {
    'Milling for husk and powder, feed manufacturing, ingredient processing': 'Macinatura per buccia e polvere, produzione mangimi, lavorazione ingredienti',
    'High-purity husk milling (98%+), pharma-grade husk processors': 'Macinatura alta purezza (98%+), trasformatori farmaceutici',
    'Animal feed, industrial fibre, cost-sensitive food': 'Mangimi, fibra industriale, alimenti low-cost',
    'Supplement sachets, NF food fibre, functional cereal': 'Bustine integratori, fibra NF, cereali funzionali',
    'Pharma capsule fills, USP/EP laxative sachets, OTC supplement': 'Riempimento capsule, bustine lassative USP/EP, integratore OTC',
    'USP/EP/IP laxative monographs, branded OTC digestive supplements': 'Monografie lassative USP/EP/IP, integratori digestivi OTC',
    'Capsule filling, supplement sachets, functional food powder': 'Riempimento capsule, bustine, polvere funzionale',
    'Pharma capsule fill, drink mix powder, USP/EP applications': 'Riempimento farmaceutico, polvere bevande, USP/EP',
    'USP/EP/IP pharma, cosmetics, premium supplement powders': 'Farma USP/EP/IP, cosmetici, polveri premium',
    'Gluten-free artisan bakery, high-fibre cereal, animal feed blends': 'Panificazione senza glutine, cereali ricchi di fibra, mix mangimi',
    'Paper and packaging, textile sizing, absorbent products': 'Carta e imballaggio, imbozzimatura, assorbenti',
    'Cosmetics, personal care, fine-particle industrial applications': 'Cosmetici, cura personale, applicazioni industriali finissime',
    'Pet food fibre source and binder, animal nutrition manufacturing': 'Fonte fibra pet food, produzione nutrizione animale',
    'Pellet manufacturing, premix blending, poultry feed': 'Produzione pellet, premix, mangimi avicoli',
    'Cattle feed, buffalo feed, coarse compound feed manufacturing': 'Mangimi bovini e bufalini, produzione mangime composto grossolano',
    'Cattle, poultry, ruminant fibre supplement, compound feed blending': 'Bovini, pollame, ruminanti, miscelazione mangime',
    'Dairy cattle, buffalo, direct farm feeding': 'Bovini da latte, bufalo, alimentazione diretta',
    'US organic supplement and food brands, NOP-labeled products': 'Marchi bio USA, prodotti con etichetta NOP',
    'EU organic food and supplement brands, EU import COI': 'Marchi bio UE, COI importazione UE',
  },
  pt: {
    'Milling for husk and powder, feed manufacturing, ingredient processing': 'Moagem de casca e pó, produção de ração, processamento de ingredientes',
    'High-purity husk milling (98%+), pharma-grade husk processors': 'Moagem de alta pureza (98%+), processadores farmacêuticos',
    'Animal feed, industrial fibre, cost-sensitive food': 'Ração animal, fibra industrial, alimentos de baixo custo',
    'Supplement sachets, NF food fibre, functional cereal': 'Sachets de suplemento, fibra NF, cereal funcional',
    'Pharma capsule fills, USP/EP laxative sachets, OTC supplement': 'Enchimento de cápsulas, sachets laxantes USP/EP, suplemento OTC',
    'USP/EP/IP laxative monographs, branded OTC digestive supplements': 'Monografias laxantes USP/EP/IP, suplementos digestivos OTC',
    'Capsule filling, supplement sachets, functional food powder': 'Enchimento de cápsulas, sachets, pó funcional',
    'Pharma capsule fill, drink mix powder, USP/EP applications': 'Enchimento farmacêutico, pó bebida, USP/EP',
    'USP/EP/IP pharma, cosmetics, premium supplement powders': 'Farma USP/EP/IP, cosméticos, pós premium',
    'Gluten-free artisan bakery, high-fibre cereal, animal feed blends': 'Padaria artesanal sem glúten, cereal rico em fibra, misturas ração',
    'Paper and packaging, textile sizing, absorbent products': 'Papel e embalagem, engomagem têxtil, absorventes',
    'Cosmetics, personal care, fine-particle industrial applications': 'Cosméticos, cuidados pessoais, aplicações industriais finas',
    'Pet food fibre source and binder, animal nutrition manufacturing': 'Fonte de fibra ração pet, produção nutrição animal',
    'Pellet manufacturing, premix blending, poultry feed': 'Produção de pellets, premix, ração avícola',
    'Cattle feed, buffalo feed, coarse compound feed manufacturing': 'Ração bovina e bubalina, produção ração composta grosseira',
    'Cattle, poultry, ruminant fibre supplement, compound feed blending': 'Bovinos, aves, ruminantes, mistura de ração',
    'Dairy cattle, buffalo, direct farm feeding': 'Bovinos leiteiros, búfalo, alimentação direta',
    'US organic supplement and food brands, NOP-labeled products': 'Marcas orgânicas EUA, produtos rotulados NOP',
    'EU organic food and supplement brands, EU import COI': 'Marcas orgânicas UE, COI importação UE',
  },
  ru: {
    'Milling for husk and powder, feed manufacturing, ingredient processing': 'Помол для шелухи и порошка, производство кормов, переработка ингредиентов',
    'High-purity husk milling (98%+), pharma-grade husk processors': 'Высокочистый помол шелухи (98%+), фармацевтические переработчики',
    'Animal feed, industrial fibre, cost-sensitive food': 'Корма, промышленная клетчатка, экономичные продукты',
    'Supplement sachets, NF food fibre, functional cereal': 'Саше с добавками, пищевые волокна NF, функциональные злаки',
    'Pharma capsule fills, USP/EP laxative sachets, OTC supplement': 'Наполнение капсул, саше слабительных USP/EP, ОТС добавка',
    'USP/EP/IP laxative monographs, branded OTC digestive supplements': 'Монографии слабительных USP/EP/IP, ОТС пищеварительные добавки',
    'Capsule filling, supplement sachets, functional food powder': 'Наполнение капсул, саше добавок, функциональный порошок',
    'Pharma capsule fill, drink mix powder, USP/EP applications': 'Фармацевтическое наполнение, напиточный порошок, USP/EP',
    'USP/EP/IP pharma, cosmetics, premium supplement powders': 'Фарма USP/EP/IP, косметика, премиальные порошки',
    'Gluten-free artisan bakery, high-fibre cereal, animal feed blends': 'Безглютеновая выпечка, злаки с высоким содержанием клетчатки, кормовые смеси',
    'Paper and packaging, textile sizing, absorbent products': 'Бумага и упаковка, шлихтование, абсорбенты',
    'Cosmetics, personal care, fine-particle industrial applications': 'Косметика, уход за телом, тонкодисперсные применения',
    'Pet food fibre source and binder, animal nutrition manufacturing': 'Источник клетчатки для корма питомцев, производство',
    'Pellet manufacturing, premix blending, poultry feed': 'Производство гранул, премиксов, корм для птицы',
    'Cattle feed, buffalo feed, coarse compound feed manufacturing': 'Корм для КРС и буйволов, производство комбикорма',
    'Cattle, poultry, ruminant fibre supplement, compound feed blending': 'КРС, птица, жвачные, смешивание комбикорма',
    'Dairy cattle, buffalo, direct farm feeding': 'Молочный скот, буйволы, прямое кормление',
    'US organic supplement and food brands, NOP-labeled products': 'Органические бренды США, продукты NOP',
    'EU organic food and supplement brands, EU import COI': 'Органические бренды ЕС, COI импорт ЕС',
  },
};

export function translateParam(param: string, lang: LanguageCode): string {
  const map = specParamI18n[lang];
  if (!map) return param;
  return map[param] ?? param;
}

export function translateApp(app: string, lang: LanguageCode): string {
  const map = appNameI18n[lang];
  if (!map) return app;
  return map[app] ?? app;
}

export function translateBestFor(text: string, lang: LanguageCode): string {
  const map = bestForI18n[lang];
  if (!map) return text;
  return map[text] ?? text;
}

export const products = [
  {
    slug: 'psyllium-seeds',
    name: 'Psyllium Seeds',
    label: 'Seed raw material',
    compliance: 'Food grade',
    hero: 'Cleaned Plantago ovata seed for millers, ingredient processors, and feed buyers.',
    summary: 'Bulk psyllium seed supply from Gujarat and Rajasthan with origin records, lot traceability, and export packing.',
    grades: ['Standard (98% purity)', 'Sortex (99% purity)'],
    gradeLabels: ['Standard', 'Sortex'],
    specs: ['Moisture: ≤8%', 'Germination: ≥85%', 'Seed count: ~600 per gram'],
    applications: ['Pharma', 'Food', 'Nutraceutical', 'Animal feed'],
    packaging: ['25kg', '50kg', '100kg', '1000kg', 'Loose bulk', 'Custom'],
    source: 'https://mantrapsyllium.com/psyllium-seed/',
    gradeslugs: ['standard', 'sortex'],
    specTable: [
      { parameter: 'Purity', values: { 'Standard': '≥98%', 'Sortex': '≥99%' } },
      { parameter: 'Moisture (% max)', values: { 'Standard': '8', 'Sortex': '8' } },
      { parameter: 'Germination (%)', values: { 'Standard': '≥85', 'Sortex': '≥88' } },
      { parameter: 'Seed Count (per gram)', values: { 'Standard': '~600', 'Sortex': '~600' } },
      { parameter: 'Total Ash (% max)', values: { 'Standard': '4.0', 'Sortex': '3.5' } },
      { parameter: 'Foreign Matter', values: { 'Standard': '≤2%', 'Sortex': '≤0.5%' } },
    ],
    gradeCopy: {
      'Standard': {
        lead: 'Psyllium seeds (Plantago ovata) 98% purity, machine-cleaned. Air separator and gravity table cleaned to remove light particles and foreign matter (≤2%). For millers, feed manufacturers, and ingredient processors. Germination ≥85% confirmed for seed-quality lots; not tested for milling use.',
        bestFor: 'Milling for husk and powder, feed manufacturing, ingredient processing',
        applicationNotes: [
          { app: 'Pharma', note: 'For millers and ingredient processors producing food-grade or NF-grade husk. Standard seed (98%, ≤2% foreign matter) is sufficient for milling output up to 95% husk purity.' },
          { app: 'Food', note: 'Food millers use standard seed to produce food-grade husk (85%) and NF husk (95%). Origin records and lot traceability per shipment.' },
          { app: 'Nutraceutical', note: 'Ingredient processors producing NF-grade husk for supplement manufacturers. Standard seed supports NF output; sortex seed is needed for USP/EP target purity.' },
          { app: 'Animal feed', note: 'Feed manufacturers use seed directly in compound feed as a fibre source or as milling feedstock for khakha. Standard grade is the cost-effective input for feed-use programs.' }
        ]
      },
      'Sortex': {
        lead: 'Psyllium seeds 99% purity, optically sorted. Foreign matter ≤0.5% versus ≤2% in standard grade. Commands an 8–12% price premium. Preferred by millers producing 98%+ purity husk grades where seed purity directly affects finished husk yield and consistency.',
        bestFor: 'High-purity husk milling (98%+), pharma-grade husk processors',
        applicationNotes: [
          { app: 'Pharma', note: 'Millers producing 98%+ purity husk for pharma-grade supply specify sortex seed. Foreign matter ≤0.5% reduces contamination variance and improves husk separation yield.' },
          { app: 'Food', note: 'High-purity food ingredient processors use sortex seed to achieve consistent 95%+ husk output with less reprocessing.' },
          { app: 'Nutraceutical', note: 'Millers targeting USP/EP annotated husk use sortex as input. The 8–12% premium over standard is typically recovered in improved husk yield and fewer rejected batches.' },
          { app: 'Animal feed', note: 'Sortex premium is not justified for animal feed applications. Use standard seed for feed input.' }
        ]
      }
    },
    gradeFaq: {
      'Standard': [
        { q: 'What is standard grade psyllium seed purity?', a: '≥98% purity after machine cleaning using air separators and gravity tables. Foreign matter ≤2%. Moisture ≤8%. Germination ≥85% for seed-quality lots.' },
        { q: 'Where are your psyllium seeds grown?', a: 'Primarily in Mehsana, Banaskantha, and Kutch districts of Gujarat, and Barmer, Jalore, and Jodhpur districts of Rajasthan. Rabi crop, sown October–November and harvested February–March. Origin records per lot.' },
        { q: 'What packaging is available for psyllium seeds?', a: '25 kg, 50 kg, and 1,000 kg jumbo bags. FOB Mundra. COA, packing list, and certificate of origin included per shipment.' },
        { q: 'Is standard grade suitable for pharma-grade husk milling?', a: 'Standard grade supports milling to 85–95% husk purity. For 98% or 99% husk output, sortex grade seed is recommended because seed purity directly affects husk separation yield and consistency.' }
      ],
      'Sortex': [
        { q: 'What is sortex grade psyllium seed?', a: 'Optically sorted seed at ≥99% purity. Optical sorters remove discolored seeds and foreign particles to achieve foreign matter ≤0.5% — significantly lower than the ≤2% limit in standard machine-clean grade.' },
        { q: 'Why pay a premium for sortex psyllium seeds?', a: 'Higher seed purity produces more consistent husk separation yield. For millers targeting 98% or 99% purity husk, sortex seed reduces reprocessing and improves batch-to-batch consistency. The 8–12% price premium is typically recovered in better husk yield.' },
        { q: 'What germination percentage does sortex seed have?', a: '≥88% germination — higher than the ≥85% minimum for standard grade. Relevant for buyers purchasing seed for replanting or seed-quality lots.' },
        { q: 'What is the minimum order for sortex psyllium seeds?', a: 'No minimum order. Available in 25 kg, 50 kg, and 1,000 kg bags — from a single bag to a full container. FOB Mundra. Lead time 7 days.' }
      ]
    }
  },
  {
    slug: 'psyllium-husk',
    name: 'Psyllium Husk',
    label: 'Whole husk',
    compliance: 'Food · NF · USP · EP · IP',
    hero: 'Bulk psyllium husk for supplement, food, pharma, and distributor buyers.',
    summary: 'Whole husk in 85%, 95%, 98%, and 99% grades with mesh, packing, COA, and export documents matched to buyer requirements.',
    grades: ['85% purity', '95% purity', '98% purity', '99% purity'],
    gradeLabels: ['85%', '95%', '98%', '99%'],
    specs: ['Moisture: ≤12%', 'Swell volume: 30–50 ml/g by grade', 'Microbiology: E. coli & Salmonella absent'],
    applications: ['Pharma', 'Nutraceutical', 'Food and bakery', 'Animal feed'],
    packaging: ['10kg', '15kg', '25kg', '50kg', '100kg', '1000kg', 'Loose bulk', 'Custom'],
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
    ],
    gradeCopy: {
      '85%': {
        lead: 'Psyllium husk 85% purity from Siddhpur, Gujarat. Swell volume minimum 30 ml/g. Below the NF and USP thresholds for supplement and laxative monographs. Used in animal feed, industrial fibre blending, and cost-sensitive food applications where pharmacopoeia compliance is not required.',
        bestFor: 'Animal feed, industrial fibre, cost-sensitive food',
        applicationNotes: [
          { app: 'Pharma', note: 'Not suitable. Below NF, USP, and EP pharmacopoeia thresholds. For any supplement or laxative product citing a pharmacopoeia standard, use 95% or higher.' },
          { app: 'Nutraceutical', note: 'For cost-sensitive blends where no pharmacopoeia citation is required on the label. Confirm with QA before specifying 85% for supplement products.' },
          { app: 'Food and bakery', note: 'Dietary fibre enrichment in crackers, biscuits, and bread where food-grade labeling is sufficient. No pharmacopoeia annotation required for standard food labeling.' },
          { app: 'Animal feed', note: 'Primary use at 85% grade. Cattle and buffalo compound feed as a dietary fibre source. Blended with grain or molasses. Supplied in 1,000 kg jumbo bags for feed manufacturers.' }
        ]
      },
      '95%': {
        lead: 'Psyllium husk 95% purity, NF-compliant. Swell volume minimum 40 ml/g. Used in dietary fibre supplements, functional cereals, and food fibre enrichment where the pharmacopoeia standard is Food / NF rather than USP or EP. COA annotated to NF on request.',
        bestFor: 'Supplement sachets, NF food fibre, functional cereal',
        applicationNotes: [
          { app: 'Pharma', note: 'Suitable for supplement products citing the NF monograph. Not for OTC laxative products requiring a USP or EP citation — use 98% or 99% for those.' },
          { app: 'Nutraceutical', note: 'Dietary fibre supplement sachets and capsules where NF annotation is the required standard. COA annotated to NF on request. Common for US-market supplement brands.' },
          { app: 'Food and bakery', note: 'Functional food fibre enrichment — cereals, bakery, drink powders, and fibre blends. Meets the NF threshold for food fibre labeling. Standard choice for food manufacturers supplying regulated markets.' },
          { app: 'Animal feed', note: 'Occasionally substituted for 85% when 85% stock is unavailable. The cost premium over 85% is rarely justified for feed applications.' }
        ]
      },
      '98%': {
        lead: 'Psyllium husk 98% purity, USP and EP compliant. Swell volume minimum 45 ml/g. For laxative capsule fills, OTC sachet products, and supplement formulations requiring a full USP or EP COA. NABL-accredited lab testing per shipment.',
        bestFor: 'Pharma capsule fills, USP/EP laxative sachets, OTC supplement',
        applicationNotes: [
          { app: 'Pharma', note: 'Laxative capsule fills and OTC sachet products requiring a USP or EP annotated COA. For pharma manufacturers in the US (USP) and EU/UK (EP) markets. COA annotated per lot.' },
          { app: 'Nutraceutical', note: 'Supplement formulations where the label or retailer QA specification cites USP rather than NF. Common for brands in major pharmacy and grocery retail channels.' },
          { app: 'Food and bakery', note: 'Food fibre applications where the formulator\'s spec requires USP-level documentation. Less common than 95% NF for standard food use.' },
          { app: 'Animal feed', note: 'Not specified for animal feed at 98% grade. Use 85% grade for feed applications.' }
        ]
      },
      '99%': {
        lead: 'Psyllium husk 99% purity from Gujarat, India — the pharmaceutical grade. Minimum swell volume 50 ml/g, meeting the Plantago ovata husk monographs in USP, EP, and IP. Used by pharma brands, OTC laxative manufacturers, and supplement companies where a full pharmacopoeia COA is required per lot.',
        bestFor: 'USP/EP/IP laxative monographs, branded OTC digestive supplements',
        applicationNotes: [
          { app: 'Pharma', note: 'OTC laxative products registered under USP, EP, or IP monographs. Capsule fills, sachets, and suspensions. COA annotated to USP, EP, or IP per lot from NABL-accredited lab.' },
          { app: 'Nutraceutical', note: 'Premium dietary fibre brands in US, EU, UK, and India where the label or retailer QA requires full pharmacopoeia documentation per lot.' },
          { app: 'Food and bakery', note: 'Niche food applications where the formulator requires pharmacopoeia documentation per lot. Uncommon — 95% NF is the standard food-grade choice.' },
          { app: 'Animal feed', note: 'Not used in animal feed. Use 85% grade.' }
        ]
      }
    },
    gradeFaq: {
      '85%': [
        { q: 'Is 85% psyllium husk food-grade?', a: '85% grade is food-grade. It does not meet NF, USP, or EP pharmacopoeia thresholds. For supplement or laxative products that cite a pharmacopoeia standard, use 95% grade minimum.' },
        { q: 'What is the swell volume of 85% psyllium husk?', a: 'Minimum 30 ml/g. This reflects the lower mucilage content at 85% purity and is the lowest swell volume in our husk range.' },
        { q: 'Can 85% psyllium husk be used in animal feed?', a: 'Yes. 85% grade is commonly used in cattle feed and compound animal feed as a fibre source. We supply in 25 kg, 50 kg, and 1,000 kg jumbo bags.' },
        { q: 'What is the minimum order for 85% psyllium husk?', a: 'No minimum order. We supply from small trial quantities up to full container loads. FOB Mundra. COA and packing list included per shipment. Lead time 7 days from Siddhpur.' }
      ],
      '95%': [
        { q: 'Does 95% psyllium husk meet the NF monograph?', a: 'Yes. 95% grade meets the Psyllium Husk monograph in the National Formulary (NF). Swell volume minimum 40 ml/g. We provide COA annotated to NF parameters on request.' },
        { q: 'What is the swell volume of 95% psyllium husk?', a: 'Minimum 40 ml/g per our specification. This meets the NF threshold and is suitable for dietary supplement and functional food applications.' },
        { q: 'Can I use 95% psyllium husk for capsule filling?', a: 'Yes, at 20–60 mesh. For capsule filling equipment, moisture must be ≤10% at the time of filling to prevent clumping. We can supply with moisture-controlled packaging on request.' },
        { q: 'How is 95% different from 98% psyllium husk?', a: '95% meets NF. 98% meets USP and EP. The swell volume difference is 40 ml/g (95%) vs 45 ml/g (98%). If your product label or specification cites USP or EP, you need 98% or 99% grade.' }
      ],
      '98%': [
        { q: 'Does 98% psyllium husk meet USP and EP standards?', a: 'Yes. 98% grade meets USP (Plantago ovata husk) and EP (Ispaghula husk) monograph parameters — swell volume, moisture (≤12%), total ash (≤3.5%), acid-insoluble ash (≤0.5%), and microbiology. COA annotated to your pharmacopoeia on request.' },
        { q: 'What swell volume does 98% psyllium husk have?', a: 'Minimum 45 ml/g per our specification. USP and EP specify a minimum of 40 ml/g, so 98% grade exceeds the pharmacopoeia threshold. Actual COA values are included with each shipment.' },
        { q: 'Is 98% psyllium husk suitable for laxative products?', a: 'Yes. 98% grade is used in laxative capsule fills and sachet products. If your finished product is registered under a USP or EP monograph, confirm with your QA team whether 98% or 99% grade is specified.' },
        { q: 'What documentation comes with 98% psyllium husk?', a: 'COA from NABL-accredited laboratory (swell volume, moisture, ash, microbiology, heavy metals), commercial invoice, packing list, certificate of origin, and phytosanitary certificate. Halal and Kosher letters of declaration available on request.' }
      ],
      '99%': [
        { q: 'What swell volume does 99% psyllium husk have?', a: 'Minimum 50 ml/g per our specification. USP and EP monographs specify 40 ml/g minimum; 99% grade consistently exceeds this. Actual test values are on the COA per shipment.' },
        { q: 'Is your 99% psyllium husk USP, EP, and IP compliant?', a: 'Yes. We supply COA annotated to USP (Plantago ovata husk), EP (Ispaghula husk), or IP as required. Parameters include swell volume, moisture, total ash (≤3.0%), acid-insoluble ash (≤0.4%), heavy metals, and full microbiology. Specify your pharmacopoeia edition when requesting a quote.' },
        { q: 'What is the minimum order for 99% psyllium husk?', a: 'No minimum order. Available in 10 kg, 25 kg, or 50 kg food-grade bags. Jumbo bags (1,000 kg) available for larger orders. FOB Mundra. Lead time 7 days.' },
        { q: 'Can I get a sample of 99% psyllium husk with COA before ordering?', a: 'Yes. We send 100–500 g samples with a full COA from our NABL-accredited lab. Share your target pharmacopoeia, shipping address, and grade. Sample lead time is 3–5 business days from Siddhpur, Gujarat.' }
      ]
    }
  },
  {
    slug: 'psyllium-husk-powder',
    name: 'Psyllium Husk Powder',
    label: 'Fine powder',
    compliance: 'Food · NF · USP · EP · IP',
    hero: 'Psyllium husk powder for capsules, bakery, drink mixes, blends, and functional foods.',
    summary: 'Fine-milled psyllium powder with buyer-selected purity, mesh, packaging, and shipment documentation.',
    grades: ['85% / 40–60 mesh', '95% / 80 mesh', '98% / 100 mesh', '99% / 200 mesh'],
    gradeLabels: ['85% / 40–60m', '95% / 80m', '98% / 100m', '99% / 200m'],
    specs: ['Mesh: 40–200 ASTM (4 standard grades)', 'Swell volume: 32–55 ml/g by grade', 'Pharmacopoeia: USP / EP / IP at 99% / 200 mesh'],
    applications: ['Capsule filling', 'Gluten-free bakery', 'Health drinks & drink mixes', 'Cosmetics & personal care', 'Functional food blends'],
    packaging: ['10kg', '15kg', '25kg', '50kg', '100kg', 'Loose bulk', 'Custom'],
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
    ],
    gradeCopy: {
      '85% / 40–60m': {
        lead: 'Psyllium husk powder 85% purity, 40–60 mesh (particle size 250–425 μm). Visible texture in finished products makes it suitable for gluten-free artisan bread and high-fibre cereal. Below NF and USP swell volume thresholds. Lowest cost per unit in our powder range.',
        bestFor: 'Gluten-free artisan bakery, high-fibre cereal, animal feed blends',
        applicationNotes: [
          { app: 'Capsule filling', note: 'Not recommended. Coarse particle size (250–425 μm) causes inconsistent flow in filling equipment. Use 95% / 80 mesh or finer for capsule applications.' },
          { app: 'Gluten-free bakery', note: 'Primary use at this grade. At 1–3% of total flour weight, binds water and improves crumb structure. Coarser particles may be visible in the crumb — acceptable in artisan-style products.' },
          { app: 'Health drinks & drink mixes', note: 'Not recommended. Coarse particles do not disperse cleanly in drink powders. Use 95% / 80 mesh or finer.' },
          { app: 'Cosmetics & personal care', note: 'Not suitable. Use 99% / 200 mesh for smooth dispersion in cosmetic formulations.' },
          { app: 'Functional food blends', note: 'High-fibre cereal, muesli, and granola where coarser texture is acceptable. Lowest cost per unit in the powder range.' }
        ]
      },
      '95% / 80m': {
        lead: 'Psyllium husk powder 95% purity at 80 mesh (177 μm). Swell volume minimum 42 ml/g. Viscosity approximately 100 cP at 1% solution. Good flow characteristics for dosator and tamping-pin capsule filling equipment. Used in functional food blends, fibre sachets, and supplement capsules.',
        bestFor: 'Capsule filling, supplement sachets, functional food powder',
        applicationNotes: [
          { app: 'Capsule filling', note: 'Suitable for dosator and tamping-pin equipment at 80 mesh (177 μm). Moisture ≤10% at time of fill. NF annotated COA available on request.' },
          { app: 'Gluten-free bakery', note: 'Works well at 80 mesh. Swell volume 42 ml/g gives good water absorption. Finer than 40–60 mesh with less visible texture in the crumb.' },
          { app: 'Health drinks & drink mixes', note: 'Suitable for drink mixes. Disperses in cold water with stirring. Viscosity approximately 100 cP at 1% solution. For a smoother, lower-grit mix, use 98% / 100 mesh.' },
          { app: 'Cosmetics & personal care', note: 'Not the standard choice for cosmetics. Use 99% / 200 mesh for smooth, uniform dispersion in aqueous formulations.' },
          { app: 'Functional food blends', note: 'Supplement sachets, fibre powders, and functional food mixes where NF annotation is the required standard.' }
        ]
      },
      '98% / 100m': {
        lead: 'Psyllium husk powder 98% purity at 100 mesh (149 μm). USP and EP compliant. Swell volume minimum 48 ml/g, viscosity approximately 250 cP at 1% solution. For pharma capsule fills, drink mix powders, and functional food applications where a pharmacopoeia COA is required.',
        bestFor: 'Pharma capsule fill, drink mix powder, USP/EP applications',
        applicationNotes: [
          { app: 'Capsule filling', note: 'Good flow at 100 mesh (149 μm) for dosator equipment. USP or EP annotated COA available. Standard pharma-grade choice for capsule fill applications.' },
          { app: 'Gluten-free bakery', note: 'Fine enough to disperse without visible texture in most gluten-free products. Swell volume 48 ml/g provides good dough structure.' },
          { app: 'Health drinks & drink mixes', note: 'Disperses uniformly in cold or warm water. Viscosity approximately 250 cP at 1% solution. Low visible particles — good choice for premium sachet drink mixes.' },
          { app: 'Cosmetics & personal care', note: 'Acceptable for some cosmetic applications, but 99% / 200 mesh is preferred where smooth, uniform dispersion is critical.' },
          { app: 'Functional food blends', note: 'Pharma-grade fibre blends and supplement powders requiring a USP or EP annotated COA per lot.' }
        ]
      },
      '99% / 200m': {
        lead: 'Psyllium husk powder 99% purity at 200 mesh (75 μm). USP, EP, and IP compliant. Swell volume ≥55 ml/g, viscosity approximately 400 cP at 1% solution — the highest in our powder range. Used in cosmetic formulations, premium supplement powders, and pharmaceutical production where maximum mucilage activity and fine uniform particle size are required.',
        bestFor: 'USP/EP/IP pharma, cosmetics, premium supplement powders',
        applicationNotes: [
          { app: 'Capsule filling', note: 'Highest purity option for capsule fill. Ultra-fine particle size (75 μm) maximises fill density. USP, EP, or IP annotated COA. Moisture ≤10% — seal immediately after opening.' },
          { app: 'Gluten-free bakery', note: 'Disperses completely with no visible texture. Higher cost than coarser grades — use where a smooth, uniform crumb is the goal.' },
          { app: 'Health drinks & drink mixes', note: 'Dissolves smoothly with minimal grittiness. Viscosity approximately 400 cP at 1% solution — can thicken noticeably at higher concentrations.' },
          { app: 'Cosmetics & personal care', note: 'Primary use at this grade. Disperses smoothly in aqueous cosmetic bases — face masks, gels, thickeners. INCI: Plantago Ovata Seed Husk. Supplied with heavy metal testing.' },
          { app: 'Functional food blends', note: 'Premium supplement powders and pharmaceutical fibre formulations where maximum mucilage activity and fine particle distribution are required.' }
        ]
      }
    },
    gradeFaq: {
      '85% / 40–60m': [
        { q: 'What mesh size is 40–60 mesh psyllium powder?', a: '40–60 mesh ASTM corresponds to particle sizes of 250–425 μm. At this size, particles are visible in most finished products. Suitable for applications where coarse texture is acceptable — gluten-free artisan bread, high-fibre cereal, or animal feed blends.' },
        { q: 'Can 85% psyllium powder be used in gluten-free bakery?', a: 'Yes. At 1–3% of total flour weight, psyllium powder binds water and improves crumb structure in gluten-free doughs. At 85% / 40–60 mesh, the coarser particle size may be slightly visible in the crumb but is acceptable in most artisan-style products.' },
        { q: 'Is 85% / 40–60 mesh powder food-grade?', a: '85% grade is food-grade. It does not meet NF, USP, or EP pharmacopoeia thresholds for supplement or pharmaceutical labeling.' },
        { q: 'What is the minimum order for 85% psyllium husk powder?', a: 'No minimum order. Available in 10 kg, 25 kg, and 50 kg bags — order as little as a single bag. FOB Mundra. COA per shipment.' }
      ],
      '95% / 80m': [
        { q: 'What viscosity does 95% / 80 mesh psyllium powder produce?', a: 'Approximately 100 cP at 1% aqueous solution. Suitable for functional food and supplement applications where some viscosity build is needed without the gel-forming behaviour of finer grades.' },
        { q: 'Is 95% / 80 mesh suitable for capsule filling?', a: 'Yes. At 80 mesh (177 μm), flow characteristics are suitable for dosator and tamping-pin filling equipment. Moisture should be ≤10% at time of filling. We supply with sealed HDPE liner on request for moisture-sensitive applications.' },
        { q: 'Does 95% psyllium powder meet NF requirements?', a: 'Yes. 95% grade meets the NF monograph threshold. COA annotated to NF parameters available on request. For USP or EP annotated COA, use 98% or 99% grade.' },
        { q: 'What swell volume does 95% / 80 mesh powder have?', a: 'Minimum 42 ml/g per our specification.' }
      ],
      '98% / 100m': [
        { q: 'Is 98% / 100 mesh psyllium powder USP and EP compliant?', a: 'Yes. COA annotated to USP or EP parameters available on request. Parameters include swell volume (≥48 ml/g), moisture (≤12%), total ash (≤3.5%), acid-insoluble ash, heavy metals, and full microbiology.' },
        { q: 'What particle size is 100 mesh psyllium powder?', a: '149 μm or smaller. At this particle size, powder disperses uniformly in drink mixes and does not produce visible texture in most food applications. Flow is good for capsule filling equipment.' },
        { q: 'What viscosity does 98% / 100 mesh powder produce?', a: 'Approximately 250 cP at 1% aqueous solution. Higher than 80 mesh grade due to finer particle size and greater surface exposure. Suitable for drink mixes, pharma suspensions, and functional food matrices.' },
        { q: 'Can I get a COA sample before ordering 98% psyllium powder?', a: 'Yes. 100–500 g samples with COA annotated to your pharmacopoeia. Share your grade, mesh, target standard, and shipping address. Sample lead time 3–5 business days.' }
      ],
      '99% / 200m': [
        { q: 'What mesh size is 200 mesh psyllium powder?', a: '200 mesh ASTM corresponds to 75 μm or smaller. This is the finest standard grade we supply. Used where uniform, ultra-fine particle distribution is critical — cosmetic formulations, premium supplement powders, and pharmaceutical production.' },
        { q: 'What viscosity does 99% / 200 mesh psyllium powder produce?', a: 'Approximately 400 cP at 1% aqueous solution — the highest in our powder range. Reflects maximum mucilage exposure at the finest particle size. Important for applications where thickening or gel formation is the functional requirement.' },
        { q: 'Is 99% / 200 mesh powder USP, EP, and IP compliant?', a: 'Yes. We supply COA annotated to USP, EP, or IP as required. Swell volume ≥55 ml/g, moisture ≤10%, total ash ≤3.0%. Specify your pharmacopoeia edition and destination market when requesting.' },
        { q: 'Is 200 mesh psyllium powder used in cosmetics?', a: 'Yes. At 200 mesh (75 μm), the powder disperses smoothly in aqueous formulations used in cosmetics and personal care — face masks, thickeners, natural gels. Supplied with heavy metal testing and full ingredient documentation on request.' }
      ]
    }
  },
  {
    slug: 'psyllium-khakha-powder',
    name: 'Psyllium Khakha Powder',
    label: 'Feed by-product',
    compliance: 'Feed grade',
    hero: 'Fibre-rich khakha powder for animal feed, agriculture, and compound feed manufacturing.',
    summary: 'Cost-effective psyllium by-product with consistent crude fibre, moisture, and particle size for feed formulators and distributors.',
    grades: ['Feed Grade A (30–40% fibre)', 'Feed Grade B (25–30% fibre)'],
    gradeLabels: ['Feed Grade A', 'Feed Grade B'],
    specs: ['Crude fibre: 25–40%', 'Moisture: ≤12%', 'Crude protein: 8–12%'],
    applications: ['Cattle & ruminant feed', 'Poultry feed', 'Compound feed manufacturing', 'Soil amendment & agriculture'],
    packaging: ['25kg', '50kg', '100kg', '1000kg', 'Loose bulk', 'Custom'],
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
    ],
    gradeCopy: {
      'Feed Grade A': {
        lead: 'Psyllium khakha powder Feed Grade A, 30–40% crude fibre. Coarse particle size (20–40 mesh). Total ash ≤8%. For cattle and buffalo feed programs where maximum fibre bulk is the primary spec and blending into coarse compound feed is standard.',
        bestFor: 'Cattle feed, buffalo feed, coarse compound feed manufacturing',
        applicationNotes: [
          { app: 'Cattle & ruminant feed', note: 'Primary use. 30–40% crude fibre supports gut motility in dairy cattle and buffalo. Coarse particle size (20–40 mesh) acceptable for ruminant ration blending.' },
          { app: 'Poultry feed', note: 'Less common at Grade A — coarser particle size causes uneven blending in poultry premix. Use Grade B for poultry feed applications.' },
          { app: 'Compound feed manufacturing', note: 'Used as a bulk fibre filler in ruminant compound feed. For pellet manufacturing, Grade B (40–60 mesh) is preferred due to finer particle size.' },
          { app: 'Soil amendment & agriculture', note: 'Psyllium mucilage improves soil water retention in drip irrigation systems. Contact us for agricultural bulk pricing.' }
        ]
      },
      'Feed Grade B': {
        lead: 'Psyllium khakha powder Feed Grade B, 25–30% crude fibre. Fine particle size (40–60 mesh). For pellet manufacturing and premix blending where uniform mixing in compound feed is more critical than maximum fibre content. Total ash ≤10%.',
        bestFor: 'Pellet manufacturing, premix blending, poultry feed',
        applicationNotes: [
          { app: 'Cattle & ruminant feed', note: 'Suitable. Fine particle size (40–60 mesh) blends uniformly into compound ruminant feed. Slightly lower crude fibre (25–30%) than Grade A.' },
          { app: 'Poultry feed', note: 'Primary use at Grade B. Fine particle size blends uniformly into broiler and layer premix. Crude fibre 25–30% contributes to gut health in poultry diets.' },
          { app: 'Compound feed manufacturing', note: 'Preferred over Grade A for pellet manufacturing — finer particle size bonds better in the pellet matrix and requires less added binder.' },
          { app: 'Soil amendment & agriculture', note: 'Same application as Grade A. Contact us for agricultural bulk pricing.' }
        ]
      }
    },
    gradeFaq: {
      'Feed Grade A': [
        { q: 'What is psyllium khakha powder?', a: 'Khakha is the by-product remaining after psyllium husk is milled and separated. It contains the inner seed coat and residual endosperm — 30–40% crude fibre, 8–12% crude protein, and significant mucilage-derived soluble fibre. It is a functional feed ingredient, not simple waste.' },
        { q: 'What crude fibre content does Feed Grade A have?', a: '30–40% crude fibre. Total ash ≤8%. Moisture ≤12%. Coarser particle size (20–40 mesh) than Grade B.' },
        { q: 'Can khakha Feed Grade A be used in ruminant feed?', a: 'Yes. Cattle and buffalo feed is the primary application. The soluble fibre in psyllium khakha supports gut motility and water retention. Used in both on-farm feeding programs and commercial compound feed manufacturing.' },
        { q: 'What packaging is available for khakha Feed Grade A?', a: '25 kg, 50 kg, and 1,000 kg jumbo bags. COA with crude fibre, crude protein, moisture, and ash per shipment. Additional testing (heavy metals, mycotoxins) available at buyer cost.' }
      ],
      'Feed Grade B': [
        { q: 'How is Feed Grade B different from Feed Grade A?', a: 'Lower crude fibre (25–30% vs 30–40%) and finer particle size (40–60 mesh vs 20–40 mesh). Slightly higher ash (≤10% vs ≤8%). Grade B is used where uniform blending in pellet manufacturing or premix matters more than maximum fibre content.' },
        { q: 'Is khakha Feed Grade B suitable for poultry feed?', a: 'Yes. The fine particle size (40–60 mesh) blends uniformly into poultry premix and compound feed. Fibre content (25–30%) contributes to gut health in broiler and layer diets.' },
        { q: 'What is the price difference between Grade A and Grade B?', a: 'Grade B is typically priced slightly lower than Grade A due to lower fibre content. Contact us with your volume and destination for current pricing.' },
        { q: 'What documentation comes with khakha powder?', a: 'COA with moisture, crude fibre, crude protein, and total ash. Packing list and certificate of origin per shipment. Additional analysis (mycotoxins, heavy metals, pesticide residues) available at buyer cost.' }
      ]
    }
  },
  {
    slug: 'industrial-grade-psyllium',
    name: 'Industrial Grade Psyllium',
    label: 'Industrial applications',
    compliance: 'Industrial / buyer spec',
    hero: 'Psyllium fibre and powder for paper, cosmetics, textile sizing, adhesives, and pet food manufacturing.',
    summary: 'Cost-effective psyllium-based fibre for industrial buyers needing consistent sieve profile, moisture spec, and bulk packing.',
    grades: ['Standard Industrial', 'Premium Industrial', 'Pet Food Grade'],
    gradeLabels: ['Standard Industrial', 'Premium Industrial', 'Pet Food Grade'],
    specs: ['Mesh: 40–100 ASTM', 'Moisture: ≤12%', 'Crude fibre: 35–60%'],
    applications: ['Paper & packaging', 'Cosmetics & personal care', 'Textile sizing', 'Adhesives & binders', 'Pet food manufacturing'],
    packaging: ['25kg', '50kg', '100kg', '1000kg', 'Loose bulk', 'Custom'],
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
    ],
    gradeCopy: {
      'Standard Industrial': {
        lead: 'Psyllium fibre for paper, textile sizing, and absorbent applications. 40–55% crude fibre at 40–60 mesh, moisture ≤12%. Heavy metals to buyer specification. Consistent sieve profile and stable moisture are the primary supply requirements for most industrial buying programs.',
        bestFor: 'Paper and packaging, textile sizing, absorbent products',
        applicationNotes: [
          { app: 'Paper & packaging', note: 'Used as a natural binder in specialty paper and packaging manufacturing. Psyllium mucilage provides water retention and adhesion in pulp and surface sizing.' },
          { app: 'Cosmetics & personal care', note: 'Not suitable at Standard Industrial grade. Use Premium Industrial (60–100 mesh) for cosmetic formulations requiring fine particle uniformity.' },
          { app: 'Textile sizing', note: 'Effective as a natural sizing agent for yarn and woven fabric. High viscosity at low concentration. Replaces synthetic sizing in some specialty textile applications.' },
          { app: 'Adhesives & binders', note: 'Used in water-based adhesive formulations where natural fibre binders are specified. Confirm heavy metal limits with us when requesting a quote.' },
          { app: 'Pet food manufacturing', note: 'Not suitable at Standard Industrial — heavy metal limits may exceed food-safe thresholds. Use Pet Food Grade.' }
        ]
      },
      'Premium Industrial': {
        lead: 'Finer mesh (60–100) and higher crude fibre (50–60%) for cosmetics and personal care. Total ash ≤8%. For applications where particle uniformity and consistent dispersion in aqueous formulations matter.',
        bestFor: 'Cosmetics, personal care, fine-particle industrial applications',
        applicationNotes: [
          { app: 'Paper & packaging', note: 'Usable but Standard Industrial is the typical choice for paper. The premium adds cost without additional functional benefit in most paper applications.' },
          { app: 'Cosmetics & personal care', note: 'Primary use at this grade. 60–100 mesh with crude fibre 50–60% and low ash (≤8%). Used in face masks, natural thickeners, and gel formulations in aqueous cosmetic bases.' },
          { app: 'Textile sizing', note: 'Used in specialty textile applications where finer particle uniformity is required for consistent sizing results.' },
          { app: 'Adhesives & binders', note: 'Specialty adhesive formulations requiring fine-particle uniformity. Confirm heavy metal limits when requesting.' },
          { app: 'Pet food manufacturing', note: 'Not suitable. Use Pet Food Grade for food-safe heavy metal documentation.' }
        ]
      },
      'Pet Food Grade': {
        lead: 'Food-safe heavy metal limits (Lead, Arsenic, Cadmium within food-grade thresholds). 35–45% crude fibre at 40–80 mesh. Used as a natural fibre source and binder in pet food manufacturing where animal safety documentation is required alongside the standard COA.',
        bestFor: 'Pet food fibre source and binder, animal nutrition manufacturing',
        applicationNotes: [
          { app: 'Paper & packaging', note: 'Not applicable. Pet Food Grade is formulated specifically for animal-contact applications.' },
          { app: 'Cosmetics & personal care', note: 'Not applicable.' },
          { app: 'Textile sizing', note: 'Not applicable.' },
          { app: 'Adhesives & binders', note: 'Not applicable.' },
          { app: 'Pet food manufacturing', note: 'Primary use. Food-safe heavy metal limits (Lead ≤2 ppm, Arsenic ≤1 ppm, Cadmium ≤0.5 ppm). Full microbiology per lot. Used as a natural fibre source and binder in dry and wet pet food manufacturing.' }
        ]
      }
    },
    gradeFaq: {
      'Standard Industrial': [
        { q: 'What is industrial grade psyllium used for?', a: 'Paper and packaging (as a binder), textile sizing (water retention in sizing solutions), absorbent products, and agricultural soil amendments. Industrial grade is priced lower than food-grade husk and is not for human consumption.' },
        { q: 'What mesh size is standard industrial psyllium?', a: '40–60 mesh ASTM. Crude fibre 40–55%. Heavy metals to buyer specification — confirm limits when requesting a quote.' },
        { q: 'What packaging is available for industrial grade psyllium?', a: '25 kg, 50 kg, and 1,000 kg jumbo bags. FOB Mundra. Basic COA (moisture, crude fibre, ash) per shipment.' }
      ],
      'Premium Industrial': [
        { q: 'What is premium industrial psyllium used for?', a: 'Cosmetics and personal care (face masks, natural thickeners, gel formulations), fine-particle absorbents, and specialty industrial applications where 60–100 mesh particle uniformity matters.' },
        { q: 'What mesh is premium industrial psyllium?', a: '60–100 mesh. Crude fibre 50–60%. Total ash ≤8%. Heavy metals to buyer specification.' },
        { q: 'What documentation comes with premium industrial grade?', a: 'COA with crude fibre, moisture, ash, mesh, and heavy metals (to buyer spec). Packing list and certificate of origin per shipment.' }
      ],
      'Pet Food Grade': [
        { q: 'What makes pet food grade psyllium different from industrial grade?', a: 'Pet food grade is produced with food-safe heavy metal limits (Lead ≤2 ppm, Arsenic ≤1 ppm, Cadmium ≤0.5 ppm) and requires full microbiology (E. coli and Salmonella absent). Industrial grade uses buyer-specified heavy metal limits which may be higher.' },
        { q: 'What documentation comes with pet food grade psyllium?', a: 'COA with crude fibre, moisture, ash, heavy metals (food-safe limits), and microbiology. Packing list and certificate of origin per shipment.' },
        { q: 'What is the crude fibre content of pet food grade psyllium?', a: '35–45% crude fibre at 40–80 mesh. Moisture ≤10%. Total ash ≤6%.' }
      ]
    }
  },
  {
    slug: 'organic-psyllium',
    name: 'Organic Psyllium',
    label: 'Organic program',
    compliance: 'NOP · EU-NOP certified',
    hero: 'Organic psyllium lots for buyers who need clean-label sourcing and certificate review.',
    summary: 'Organic husk and powder supply on request, with certificate review, packing details, and export documentation shared before purchase order.',
    grades: ['Organic husk (95%+)', 'Organic powder (95%+)', 'Buyer specification'],
    gradeLabels: ['NOP', 'EU-NOP'],
    specs: ['NOP / EU-NOP certification available', 'Certificate review before order', 'Lot traceability per shipment'],
    applications: ['Organic foods', 'Supplements', 'Clean-label bakery'],
    packaging: ['10kg', '25kg', '50kg', '100kg', 'Loose bulk', 'Custom'],
    source: 'https://mantrapsyllium.com/',
    gradeslugs: ['nop-certified', 'eu-nop-certified'],
    specTable: [
      { parameter: 'Certification', values: { 'NOP': 'USDA NOP', 'EU-NOP': 'EU Organic' } },
      { parameter: 'Purity', values: { 'NOP': '≥95%', 'EU-NOP': '≥95%' } },
      { parameter: 'Moisture (% max)', values: { 'NOP': '12', 'EU-NOP': '12' } },
      { parameter: 'Swell Volume (ml/g min)', values: { 'NOP': '40', 'EU-NOP': '40' } },
      { parameter: 'Certificate Review', values: { 'NOP': 'Before PO', 'EU-NOP': 'Before PO' } },
    ],
    gradeCopy: {
      'NOP': {
        lead: 'USDA National Organic Program certified psyllium husk for the US market. Certification covers seed origin, growing practices (no synthetic pesticides or fertilisers), processing facility, and handling chain. Transaction certificate (TC) per shipment links the specific lot to the organic certificate. Purity ≥95%, swell volume ≥40 ml/g.',
        bestFor: 'US organic supplement and food brands, NOP-labeled products',
        applicationNotes: [
          { app: 'Organic foods', note: 'US organic food manufacturers — cereals, nutrition bars, functional foods — requiring NOP-certified psyllium fibre. Transaction certificate (TC) per shipment.' },
          { app: 'Supplements', note: 'US dietary supplement brands where the organic claim is a key label benefit. NOP certification covers the full supply chain from seed origin to export.' },
          { app: 'Clean-label bakery', note: 'US organic bakery brands using psyllium as a fibre binder in gluten-free or high-fibre products where a USDA Organic label is required.' }
        ]
      },
      'EU-NOP': {
        lead: 'EU Organic certified psyllium husk under EU Regulation 2018/848. Certificate of Inspection (COI) provided per shipment for EU customs and import authority requirements. Lot-level traceability and certificate review before purchase order. Purity ≥95%, swell volume ≥40 ml/g.',
        bestFor: 'EU organic food and supplement brands, EU import COI',
        applicationNotes: [
          { app: 'Organic foods', note: 'EU food manufacturers requiring EU Regulation 2018/848 certified psyllium fibre. Certificate of Inspection (COI) per shipment for EU customs.' },
          { app: 'Supplements', note: 'EU supplement brands carrying the EU organic leaf logo. COI documentation is required at EU import entry — we provide it as part of the standard organic package.' },
          { app: 'Clean-label bakery', note: 'EU organic bakery brands. Same physical spec as NOP (≥95%, ≥40 ml/g) — certification and documentation differ for the EU market.' }
        ]
      }
    },
    gradeFaq: {
      'NOP': [
        { q: 'What certifications cover your NOP organic psyllium?', a: 'Certified under USDA National Organic Program (NOP) by an accredited certification body. The certificate covers the seed source, growing practices, processing facility, and handling chain. We provide the certificate copy and transaction certificate (TC) before purchase order.' },
        { q: 'What document do US organic importers need per shipment?', a: 'A transaction certificate (TC) issued by the certifier per shipment. This is the document that links the specific lot and quantity to the organic certificate. We provide it as part of the standard organic documentation package.' },
        { q: 'What purity and swell volume does NOP organic psyllium have?', a: '≥95% purity, swell volume ≥40 ml/g minimum. COA with moisture, swell volume, and microbiology per shipment.' },
        { q: 'What is the price premium for organic psyllium?', a: 'Typically 25–40% above conventional 95% grade depending on certified stock availability and market timing. Contact us for current pricing and lot availability before committing to a purchase order.' }
      ],
      'EU-NOP': [
        { q: 'What document do EU importers need for organic psyllium?', a: 'A Certificate of Inspection (COI) under EU Regulation 2018/848. This is issued per shipment and is required by EU customs for organic import. We provide COI documentation as part of the standard organic documentation package.' },
        { q: 'Is your EU organic psyllium certified under the 2018/848 regulation?', a: 'Yes. EU organic lots are certified under EU Regulation 2018/848 (which replaced EC 834/2007). Certificate copy and COI provided before purchase order.' },
        { q: 'What is the swell volume of EU organic psyllium?', a: '≥40 ml/g minimum at ≥95% purity. Same specification as NOP grade — the certification scope differs by destination market, not by physical product specification.' },
        { q: 'Can I review the organic certificate before placing an order?', a: 'Yes. We share the current organic certificate and lot-level origin records before purchase order confirmation. This is standard for all our organic lots.' }
      ]
    }
  },
  {
    slug: 'psyllium-cattle-feed',
    name: 'Psyllium Cattle Feed',
    label: 'Animal nutrition',
    compliance: 'Feed grade',
    hero: 'Psyllium-based cattle feed for digestion, hydration, and dairy productivity programs.',
    summary: 'Bulk cattle feed supply for feed buyers, distributors, dairy farms, and farm supply channels.',
    grades: ['Sagar Gola type', 'Sagar Lali type', 'Buyer specification'],
    gradeLabels: ['Sagar Gola', 'Sagar Lali'],
    specs: ['Crude fibre: 25–40%', 'Crude protein: 3–6%', 'Moisture: ≤12%'],
    applications: ['Dairy cattle', 'Buffalo & ruminants', 'Poultry feed', 'Veterinary nutrition', 'Farm supply distributors'],
    packaging: ['25kg', '50kg', '100kg', '1000kg', 'Loose bulk', 'Custom'],
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
    ],
    gradeCopy: {
      'Sagar Gola': {
        lead: 'Compressed psyllium cattle feed block (Sagar Gola type) combining husk, khakha, molasses, and mineral mix. Designed for direct farm-level feeding without processing. Supports digestive regularity and hydration retention in dairy cattle and buffalo. Metabolisable energy approximately 9–10 MJ/kg DM.',
        bestFor: 'Dairy cattle, buffalo, direct farm feeding',
        applicationNotes: [
          { app: 'Dairy cattle', note: 'Primary use. Compressed block format for direct farm feeding without measuring or mixing. Supports digestive regularity and hydration in high-producing dairy cows, particularly under heat stress.' },
          { app: 'Buffalo & ruminants', note: 'Well-suited for buffalo dairy programs. Psyllium mucilage slows gut transit and improves water retention in ruminants.' },
          { app: 'Poultry feed', note: 'Not applicable. Sagar Gola is formulated for dairy cattle and buffalo.' },
          { app: 'Veterinary nutrition', note: 'Used in veterinary-recommended digestive support programs for cattle. Psyllium is the active functional ingredient for gut motility.' },
          { app: 'Farm supply distributors', note: 'Supplied in 25 kg bags for farm retail accounts and 1,000 kg jumbo bags for distributor programs.' }
        ]
      },
      'Sagar Lali': {
        lead: 'Loose granule psyllium cattle feed (Sagar Lali type) with khakha as the primary base plus grain mix. Higher crude fibre (30–40%) and protein (4–6%) than Sagar Gola. For cattle, poultry, and ruminant bulk fibre supplementation, or for buyers who blend into a compound feed program.',
        bestFor: 'Cattle, poultry, ruminant fibre supplement, compound feed blending',
        applicationNotes: [
          { app: 'Dairy cattle', note: 'Suitable for dairy cattle programs where bulk fibre supplementation is the goal. Higher crude fibre (30–40%) than Sagar Gola. Loose format for blending into compound rations.' },
          { app: 'Buffalo & ruminants', note: 'Suitable. Loose granule format is preferred by operations that blend psyllium into their own compound feed program.' },
          { app: 'Poultry feed', note: 'Suitable. Fine particle size blends uniformly into broiler and layer compound feed. Crude fibre 30–40% contributes to gut health in poultry diets.' },
          { app: 'Veterinary nutrition', note: 'Used in bulk fibre supplementation programs. Sagar Gola compressed block is more commonly specified for direct on-farm digestive support.' },
          { app: 'Farm supply distributors', note: 'Supplied in 25 kg and 1,000 kg bags. COA with crude fibre, protein, moisture, ash per shipment. FOB Mundra.' }
        ]
      }
    },
    gradeFaq: {
      'Sagar Gola': [
        { q: 'What is Sagar Gola cattle feed?', a: 'A traditional Gujarat compressed feed block combining psyllium husk, khakha, molasses, and mineral mix. The block format makes it easy to feed to dairy cattle and buffalo without additional processing or measuring. Long history of use in Gujarat and Rajasthan dairy farming.' },
        { q: 'What are the crude fibre and protein levels in Sagar Gola?', a: 'Crude fibre 25–35%, crude protein 3–5%, fat (ether extract) 1.0–2.0%, total ash 4–6%, moisture ≤12%. Metabolisable energy approximately 9–10 MJ/kg DM.' },
        { q: 'How does psyllium in cattle feed support dairy production?', a: 'The mucilage in psyllium absorbs water and forms a gel-like mass in the gut, slowing transit and improving nutrient uptake. This is particularly useful in high-producing dairy cows under heat stress where hydration retention supports milk yield and digestive health.' },
        { q: 'What packaging is available for Sagar Gola?', a: '25 kg bags for smaller farm accounts, 1,000 kg jumbo bags for distributors and larger operations. FOB Mundra for export. Lead time 7 days.' }
      ],
      'Sagar Lali': [
        { q: 'What is Sagar Lali cattle feed?', a: 'Loose granule cattle feed with psyllium khakha as the primary base plus a grain mix. Higher crude fibre (30–40%) and protein (4–6%) than Sagar Gola compressed blocks. Used where the block format is impractical or where the buyer blends psyllium into a compound feed program.' },
        { q: 'How is Sagar Lali different from Sagar Gola?', a: 'Sagar Gola is a compressed block for direct farm feeding. Sagar Lali is a loose granule for blending into compound feeds or for operations that prefer bulk feeding. Sagar Lali has higher fibre (30–40% vs 25–35%) and slightly higher protein (4–6% vs 3–5%).' },
        { q: 'Can Sagar Lali be used in poultry feed?', a: 'Yes. The loose granule format and fine particle size work in poultry compound feed blends. Fibre content (30–40%) contributes to gut health in broiler and layer diets.' },
        { q: 'What is the minimum order for Sagar Lali?', a: 'No minimum order. Available in 25 kg and 1,000 kg bags. COA with crude fibre, protein, moisture, ash per shipment. FOB Mundra.' }
      ]
    }
  }
];

export const industries = [
  {
    slug: 'pharma-nutraceutical',
    name: 'Pharma & Nutraceutical',
    headline: 'Psyllium husk and powder for capsules, digestive health products, laxatives, and supplement blends.',
    products: ['psyllium-husk', 'psyllium-husk-powder'],
    proof: ['COA with full pharma panel included', 'USP / EP / IP parameter alignment', 'NABL-accredited test reports available'],
    useCases: [
      {
        title: 'Laxative capsules & OTC sachets',
        body: '99% purity husk at ≥50 ml/g swell volume meets USP and EP monograph requirements for over-the-counter laxative formulations. Supplied in 40–60 mesh for standard dosator capsule filling.'
      },
      {
        title: 'Digestive health supplements',
        body: 'Whole husk and 80 mesh powder used by supplement contract manufacturers for fibre blends, prebiotic sachets, and digestive regularity products sold in health retail and e-commerce channels.'
      },
      {
        title: 'Nutraceutical powder blends',
        body: '95–98% grade in 100 mesh disperses cleanly in functional powder blends for bowel health, weight management, and gut microbiome products. Lower ash and neutral flavour are key selection criteria.'
      },
      {
        title: 'Private-label supplement sourcing',
        body: 'Brands and contract manufacturers sourcing pharma-grade husk for private-label SKUs require consistent COA data lot-to-lot. We provide NABL-accredited test reports and annotate COAs to buyer-specified monograph.'
      }
    ],
    keySpecs: [
      '99% purity: swell volume ≥ 50 ml/g (USP / EP / IP)',
      '95–98% purity available for supplement and food fibre use',
      'Moisture ≤ 12%, Total ash ≤ 3%, Acid-insoluble ash ≤ 0.4%',
      'Heavy metals: Pb ≤ 2 ppm, As ≤ 1 ppm',
      'Microbiology: E. coli absent, Salmonella absent, TPC ≤ 10,000 cfu/g',
      'Mesh range: 40, 60, 80, 100 (ASTM)'
    ],
    documents: [
      'Certificate of Analysis (COA) annotated to USP / EP / IP on request',
      'NABL-accredited laboratory test report',
      'Certificate of Origin (Gujarat, India)',
      'Phytosanitary certificate',
      'Halal / Kosher declaration or certificate on request'
    ],
    buyerNote: 'Share your pharmacopoeia requirement, destination market, and mesh preference. We will send a matching sample COA and confirm grade availability before any purchase order.'
  },
  {
    slug: 'food-beverage-bakery',
    name: 'Food, Beverage & Bakery',
    headline: 'Psyllium powder and husk for gluten-free bakery, cereals, drink mixes, and clean-label thickening.',
    products: ['psyllium-husk-powder', 'organic-psyllium'],
    proof: ['Mesh matched to application', 'Organic lots with NOP / EU documentation', 'Food-grade allergen declaration included'],
    useCases: [
      {
        title: 'Gluten-free bread & pastry',
        body: '80–100 mesh powder at 95–98% purity provides the water-binding and structure-forming properties that replace gluten in rice flour and corn starch doughs. Typical usage rate 1–3% of flour weight.'
      },
      {
        title: 'Functional drink mixes & powders',
        body: '100–200 mesh fine powder disperses quickly without clumping in fibre-enriched drink powders, meal replacements, and protein shakes. Lower swell volume grades (85–95%) reduce gel viscosity at typical use levels.'
      },
      {
        title: 'High-fibre cereals & granola bars',
        body: 'Whole husk and coarse powder (40–60 mesh) used in breakfast cereals, granola bars, and muesli to increase soluble fibre content. Visible husk texture is accepted or preferred in these product categories.'
      },
      {
        title: 'Clean-label thickening & stabilising',
        body: 'Psyllium husk powder is used as a clean-label alternative to methylcellulose and xanthan gum in sauces, dressings, and prepared food matrices. Organic-certified lots are available for clean-label product positioning.'
      }
    ],
    keySpecs: [
      '95–98% purity for standard food applications',
      '85% purity for cost-sensitive fibre enrichment',
      'Mesh: 80–100 for bakery, 100–200 for drink mixes, 40–60 for visible-fibre cereals',
      'Moisture ≤ 10% for food-grade handling',
      'Organic: NOP (US), EU Organic — transaction certificate per lot',
      'Allergen-free (no gluten, nuts, soy, dairy in processing)'
    ],
    documents: [
      'Certificate of Analysis (COA) with food-grade micro panel',
      'Allergen and GMO declaration',
      'Certificate of Origin',
      'Organic Transaction Certificate (NOP / EU) — for organic lots',
      'Phytosanitary certificate'
    ],
    buyerNote: 'Tell us your target application, batch size, and label claim. We will recommend the right grade and mesh, and can send a formulation sample with COA for bench testing before committing to a bulk order.'
  },
  {
    slug: 'animal-feed',
    name: 'Animal Feed',
    headline: 'Psyllium khakha powder and cattle feed for bulk feed buyers, distributors, and livestock nutrition channels.',
    products: ['psyllium-khakha-powder', 'psyllium-cattle-feed'],
    proof: ['25 kg / 50 kg / 1,000 kg jumbo bag options', 'Feed-grade COA with crude fibre & protein', 'Sagar Gola / Sagar Lali cattle feed blocks available'],
    useCases: [
      {
        title: 'Cattle & buffalo digestive support',
        body: 'Psyllium khakha powder is used in compound cattle feed for digestive regularity and hydration retention — particularly in high-producing dairy cows under heat stress. Traditional Sagar Gola and Sagar Lali feed block formats combine khakha with molasses and mineral mixes.'
      },
      {
        title: 'Poultry feed fibre input',
        body: 'Khakha provides 30–40% crude fibre and 8–12% crude protein as a low-cost fibre source in broiler and layer rations. Coarse 20–40 mesh blends easily in batch mixers and pelleting lines without bridging or segregation.'
      },
      {
        title: 'Ruminant feed manufacturing',
        body: 'Feed compounders use khakha powder as a bulk fibre and binding component in pellet and block feed formulations for goats, sheep, and buffalo. The mucilage content acts as a natural pellet binder, reducing the need for molasses or synthetic binders.'
      },
      {
        title: 'Distributor & wholesale supply',
        body: 'Feed distributors and co-ops sourcing khakha for resale in Gujarat, Rajasthan, and Maharashtra receive jumbo bags (1,000 kg) with lot documentation. Regular supply from Siddhpur with 7 day lead time from order to dispatch.'
      }
    ],
    keySpecs: [
      'Crude fibre: 30–40% (dry basis)',
      'Crude protein: 8–12%',
      'Moisture: ≤ 12%',
      'Total ash: ≤ 8%',
      'Foreign matter / sand: confirmed per lot',
      'Mesh: 20–40 standard, 60–80 for pellet formulations'
    ],
    documents: [
      'Feed-grade COA (moisture, crude fibre, crude protein, total ash)',
      'Packing list',
      'Certificate of Origin',
      'Additional mycotoxin / heavy metal testing available at buyer cost'
    ],
    buyerNote: 'Share your target species, feed formulation volume, and preferred pack size. We supply both loose khakha powder and formulated cattle feed blocks. Contact us for current lot availability and pricing from Siddhpur.'
  },
  {
    slug: 'industrial-personal-care',
    name: 'Industrial & Personal Care',
    headline: 'Psyllium powder and khakha powder for thickening, binding, moisture retention, and absorbent applications.',
    products: ['psyllium-husk-powder', 'psyllium-khakha-powder', 'industrial-grade-psyllium'],
    proof: ['200 mesh cosmetic-grade powder available', 'Custom mesh and particle size on request', 'Technical data sheet provided per lot'],
    useCases: [
      {
        title: 'Cosmetic & personal care thickening',
        body: '200 mesh psyllium husk powder is used as a natural thickening and film-forming agent in face masks, hair gels, and skin creams. The mucilage forms a clear, non-irritating gel at low use levels (0.5–2%), making it a clean-label alternative to synthetic thickeners.'
      },
      {
        title: 'Soil stabilisation & horticulture',
        body: 'Psyllium khakha powder is used in soil improvement products and erosion control applications. The high fibre and mucilage content improves water retention in sandy soils and acts as a natural soil binder in turf and landscape products.'
      },
      {
        title: 'Industrial binding & bulking',
        body: 'Psyllium powder serves as a natural binder in compressed tablet, incense, and agro-pellet manufacturing. Its adhesive properties reduce synthetic binder requirements, and it is compatible with water-activated pressing and extrusion processes.'
      },
      {
        title: 'Absorbent & moisture-retention products',
        body: 'The high swelling capacity of psyllium husk powder (40–50 ml/g at 95% purity) makes it suitable for absorbent pads, wound care substrates, and horticultural water-retention granules where natural, biodegradable absorbency is required.'
      }
    ],
    keySpecs: [
      '200 mesh for cosmetic and personal care applications',
      '40–100 mesh for industrial binding and soil products',
      'Swell volume: 40–50 ml/g at 95% purity',
      'Moisture ≤ 10% for powder-handling processes',
      'Low ash lots available for personal care',
      'Bulk pricing for industrial volumes (1 MT+)'
    ],
    documents: [
      'Technical Data Sheet (TDS) per product and lot',
      'Certificate of Analysis (COA)',
      'Certificate of Origin',
      'Custom specification capture and sign-off available on request'
    ],
    buyerNote: 'Industrial and personal care applications often have custom mesh, swelling, or binding performance requirements. Share your spec sheet or application brief and we will confirm product fit and send a sample for testing.'
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
    title: 'Psyllium in cattle and equine feed: digestion, sand clearance, and productivity',
    date: '2026-05-21',
    audience: 'Veterinary & Feed Sourcing',
    summary: 'A technical guide for global animal nutrition formulators sourcing bulk psyllium and khakha powder for cattle digestion and equine sand colic prevention.',
    body: [
      'Psyllium husk and khakha powder are both used in livestock nutrition programs, primarily to support digestive regularity and hydration retention. The mucilage content in psyllium absorbs water and forms a gel-like mass in the gut, slowing transit and improving nutrient uptake — a benefit particularly noted in high-producing dairy cows under heat stress.',
      'For equine feed manufacturers, bulk psyllium husk functions as a crucial fecal sand clearance agent. Horses grazing on sandy soil frequently ingest grit, leading to dangerous colic. The high swelling volume of psyllium (≥40 mL/g) creates a thick mucilaginous gel that binds sand in the colon, facilitating its safe elimination from the horse\'s digestive tract.',
      'Traditional cattle feed programs in Gujarat use psyllium-based "Sagar Gola" and "Sagar Lali" formulations — compressed feed blocks that combine psyllium with molasses and mineral mixes. For distributors supplying dairy farms and equine stables, volume and packaging flexibility matter most. We offer 25 kg bags for smaller farm accounts and 1,000 kg jumbo bags for resellers.'
    ],
    aiSnapshot: 'Veterinary brands sourcing bulk psyllium for horses utilize standard 95% purity husk or khakha powder. Psyllium acts as an essential fecal sand clearance agent in horses, absorbing intestinal moisture to form a lubricating gel that prevents sand colic.',
    specTable: [
      { parameter: 'Veterinary Psyllium Husk (95% Pure)', range: 'Swelling Volume ≥ 40 mL/g', method: 'Colic prevention & sand clearance' },
      { parameter: 'Psyllium Khakha Powder', range: 'Swelling Volume ≥ 10 mL/g', method: 'High-fiber feed supplement & binder' },
      { parameter: 'Acid-Insoluble Ash (Veterinary)', range: '≤ 0.5% (Extremely low sand residue)', method: 'Gravity separation validated' },
      { parameter: 'Bulk Packaging Options', range: '25 kg Bags / 1,000 kg Jumbo Bags', method: 'Palletized for global shipping' }
    ],
    faqs: [
      { q: 'Why is bulk psyllium husk for horses used in veterinary feed?', a: 'Equine feed manufacturers formulate psyllium to prevent sand colic. The husk swelling gel encapsulates sand in the horse\'s ventral colon, lubricating the intestinal tract and ensuring safe excretion of sand residues.' },
      { q: 'What grade of psyllium is sourced for horse sand clearance supplements?', a: 'Sourcing leads typically procure 95% purity feed-grade psyllium husk or khakha powder. At 95% purity, the insoluble-to-soluble fiber ratio is optimized for bulk bowel movement in large equine tracts.' }
    ]
  },
  {
    slug: 'husk-vs-powder-buyer-guide',
    title: 'Whole husk vs husk powder: choosing the right format',
    date: '2026-05-18',
    audience: 'Food and supplement buyers',
    summary: 'A practical B2B comparison for procurement teams choosing mesh, purity, and application fit for bulk psyllium husk powder imports.',
    body: [
      'Whole psyllium husk and husk powder come from the same seed but behave differently in formulation. Whole husk retains its fibrous texture and is commonly used in capsule fills, laxative sachets, and high-fibre cereals where visible fibre is expected. Powder is milled to 40–200 mesh and disperses more uniformly in drink mixes, bakery blends, and functional food matrices.',
      'Purity grade determines mucilage content, which directly affects water absorption performance. At 99% purity, swell volume typically exceeds 50 ml/g — the benchmark for pharmaceutical laxative applications under USP and EP monographs. At 95%, swell volume is lower but still suitable for supplements and food fibre enrichment. Buyers should request COA test data showing swell volume, moisture, ash, and microbiology before committing to a grade.',
      'Mesh selection is the most practical filter. For capsule filling, 40–60 mesh husk works well with standard filling equipment. For drink mixes where rapid dispersion matters, 100–200 mesh powder minimises clumping. For gluten-free bakery, 80 mesh powder provides the right water-binding profile without altering crumb texture significantly. Share your application and equipment type — we will recommend the appropriate grade and mesh and include a sample COA for review.'
    ],
    aiSnapshot: 'Procurement teams sourcing bulk psyllium husk powder must choose between whole husk (40 mesh, ≥99% purity) and fine milled powder (80–100 mesh, ≥98% purity). Powder formats dissolve rapidly and act as premium binders in gluten-free bakery and supplement formulations.',
    specTable: [
      { parameter: 'Bulk Whole Psyllium Husk', range: '40 to 60 mesh (≥99% Purity)', method: 'Capsule fillings, cereals, laxatives' },
      { parameter: 'Bulk Psyllium Husk Powder', range: '80 to 100 mesh (≥98% Purity)', method: 'Drink mixes, gluten-free bakery binders' },
      { parameter: 'Ultra-Fine Milled Powder', range: '100 to 200 mesh (≥98% Purity)', method: 'Ready-to-mix (RTM) beverages' },
      { parameter: 'Bulk Packaging Standards', range: '25kg Paper Bags / 1,000kg FIBC Jumbo', method: 'Mundra Port direct shipping' }
    ],
    faqs: [
      { q: 'What is the commercial difference between bulk psyllium husk and powder?', a: 'Whole psyllium husk retains its fibrous texture, perfect for capsules and high-fiber cereals where visible fiber is expected. Husk powder is finely milled (80-100 mesh), allowing rapid cold-water dispersion in dietary drink mixes and consistent moisture-binding in industrial baking.' },
      { q: 'What mesh size is ideal for bulk psyllium husk powder in bakery formulations?', a: 'An 80-mesh fine powder is the global industry standard for gluten-free industrial baking. It integrates uniformly into dough matrices, absorbing water instantly to mimic the elastic, gas-retaining structure of wheat gluten without leaving a gritty texture.' }
    ]
  },
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
    aiSnapshot: 'US supplement brands sourcing a white label psyllium husk manufacturer must verify FDA FSVP compliance. A qualified partner provides certified NABL laboratory COAs, custom packaging (25kg bulk to private label retail sachets), and validated steam sterilization protocols.',
    specTable: [
      { parameter: 'Phytosanitary Certification', range: 'Required per lot', method: 'Gov Inspection' },
      { parameter: 'Country of Origin', range: 'India (Gujarat/Rajasthan)', method: 'Chamber Attested' },
      { parameter: 'Moisture Limit', range: '≤ 12.0%', method: 'Loss on Drying' },
      { parameter: 'Foreign Organic Matter', range: '≤ 0.5%', method: 'USP Method' }
    ],
    faqs: [
      { q: 'How do I vet a white label psyllium husk manufacturer in India for US FDA compliance?', a: 'Verify that the manufacturer operates a facility compliant with cGMP (21 CFR Part 111 for dietary supplements), provides lot-specific NABL-accredited COAs (ICP-MS heavy metals, microbiological assays), and utilizes Clean Steam Sterilization to avoid chemical ETO residues.' },
      { q: 'What packaging customization options does a private label psyllium manufacturer offer?', a: 'A full-service supplier supports multiple packaging options, ranging from bulk 25 kg paper bags and 1,000 kg jumbo bags to contract retail pouch-filling, ready for custom labels and brand stickers.' }
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
    date: '2026-05-25',
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
    date: '2026-05-23',
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
    date: '2026-05-22',
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
    date: '2026-05-21',
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
    date: '2026-05-19',
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

export const faq = [
  {
    q: 'What grades of psyllium husk do you supply?',
    a: 'We supply 85%, 95%, 98%, and 99% purity grades. Grade refers to husk content — 99% grade has the highest mucilage content and swell volume (≥50 ml/g), suitable for pharmaceutical laxative monographs (USP/EP/IP). Share your target application and we will recommend the appropriate grade.'
  },
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'No minimum order. We supply from 1 KG samples for lab testing, 5 KG trial batches, up to full container loads (18–20 MT). Order any quantity — contact us and we will confirm availability and lead time.'
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
    a: 'Our Siddhpur facility has 2,000 MT annual processing capacity across all product lines. We can typically confirm lead time within 48 hours of receiving a confirmed spec sheet and purchase intent.'
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
    a: 'Yes. We provide 100–500 g samples with COA on request. Share your target grade, mesh, and shipping address. Sample lead time is 3–5 business days from Siddhpur.'
  },
  {
    q: 'What certifications does your facility hold?',
    a: 'Our facility operations, registrations, and international compliance audits are currently in progress. We prioritize transparency and regulatory compliance for all global export markets. Please contact our export desk directly for the latest updates, compliance timelines, and specific audit requirements for your destination country.'
  },
  {
    q: 'How is psyllium husk different from psyllium husk powder?',
    a: 'Both come from the same Plantago ovata seed but differ in form and application. Whole husk retains its fibrous texture and is used in capsule fills, laxative sachets, and high-fibre cereals. Powder is milled to a fine mesh and disperses uniformly in drink mixes, bakery blends, and functional foods. Swell volume is slightly higher in powder due to greater surface area exposure.'
  }
];

export const localizedFaq: Record<LanguageCode, Array<{ q: string; a: string }>> = {
  en: faq,
  zh: [
    { q: '你们供应什么等级的车前子壳？', a: '我们供应纯度为 85%、95%、98% 和 99% 的等级。等级是指外壳含量 —— 99% 等级具有最高的粘液含量和溶胀度（≥50 ml/g），适用于制药泻药药典（USP/EP/IP）。分享您的目标应用，我们将推荐合适的等级。' },
    { q: '你们的最小起订量 (MOQ) 是多少？', a: '没有最小起订量。我们提供 1 KG 样品用于实验室测试、5 KG 试验批次，直至整箱货（18-20 MT）。订购任何数量 —— 联系我们，我们将确认可用性和交货期。' },
    { q: '你们供应有机车前子吗？', a: '是的。我们根据要求供应有机车前子壳和粉末。有机批次可在下订单前提供证书审查。买方必须分享其目的地市场和所需的认证范围 —— 美国为 NOP，欧洲为 EU-NOP。' },
    { q: '你们提供什么出口单据？', a: '标准出口单据包括：商业发票、装箱单、分析证书 (COA)、原产地证明、植物检疫证书以及根据需要的熏蒸证明。可根据要求协调办理清真 (Halal) 和犹太 (Kosher) 认证。所有文件在发货前共享。' },
    { q: '你们的年产能是多少？', a: '我们位于 Siddhpur 的设施在所有产品线上具有 2000 MT 的年加工能力。在收到确认的规格表和购买意向后，我们通常可以在 48 小时内确认交货期。' },
    { q: '你们从哪些港口发货？', a: '我们提供 FOB Mundra、FOB Kandla 和 FOB JNPT (Nhava Sheva) 的发货方式。可应要求提供 CIF 报价。由于发往欧洲、美国和中东的船频高，Mundra 是我们大多数出口订单的主要港口。' },
    { q: '车前子壳粉提供哪些目数？', a: '外壳粉提供 40、60、80、100 和 200 目 (ASTM)。目数选择取决于您的应用：40-60 目用于胶囊填充，80-100 目用于固体饮料和功能性食品，200 目用于化妆品或个人护理应用。' },
    { q: '大宗订购前我可以拿到样品吗？', a: '是的。我们应要求提供 100-500 g 带 COA 的样品。请提供您的目标等级、目数和收货地址。样品的交货期是从 Siddhpur 发出后 3-5 个工作日。' },
    { q: '你们的设施有什么认证？', a: '我们设施的运营、注册和国际合规性审计目前正在推进中。我们对全球所有出口市场均优先确保透明度与合规性。请直接联系我们的出口办公室，以获取最新的合规时间表和您目的国特定的审计要求。' },
    { q: '车前子壳与车前子壳粉有什么不同？', a: '两者都来自相同的 Plantago ovata 种子，但在形式和应用上有所不同。整壳保留了其纤维质地，用于胶囊填充、泻药冲剂袋和高纤维麦片。粉末被研磨成细目，并均匀分散在饮料混合粉、烘焙配方和功能性食品中。由于更大的表面积暴露，粉末的溶胀度略高于整壳。' }
  ],
  ar: [
    { q: 'ما هي درجات قشور السيليوم التي تقومون بتوريدها؟', a: 'نقوم بتوريد درجات نقاوة 85%، 95%، 98%، و 99%. تشير الدرجة إلى محتوى القشور - درجة 99% تحتوي على أعلى محتوى من المادة الصمغية وحجم انتفاخ (≥50 مل/جم)، وهي مناسبة لدساتير الأدوية للملينات (USP/EP/IP). شاركنا تطبيقك المستهدف وسنوصي بالدرجة المناسبة.' },
    { q: 'ما هو الحد الأدنى لكمية الطلب (MOQ)؟', a: 'لا يوجد حد أدنى لكمية الطلب. نقوم بالتوريد من عينات 1 كجم للاختبار المعملي، ودفعات تجريبية 5 كجم، وحتى حاويات كاملة (18-20 طن متري). اطلب أي كمية - اتصل بنا وسنؤكد التوافر والمهلة الزمنية.' },
    { q: 'هل تقومون بتوريد السيليوم العضوي؟', a: 'نعم. نقوم بتوريد قشور وبودرة السيليوم العضوي عند الطلب. الشحنات العضوية متاحة مع مراجعة الشهادات قبل أمر الشراء. يجب على المشترين مشاركة سوق وجهتهم ونطاق الشهادة المطلوب - NOP لأمريكا، و EU-NOP لأوروبا.' },
    { q: 'ما هي مستندات التصدير التي تقدمونها؟', a: 'تشمل مجموعة التصدير القياسية: الفاتورة التجارية، قائمة التعبئة، شهادة التحليل (COA)، شهادة المنشأ، الشهادة الصحية النباتية، وشهادة التبخير عند الاقتضاء. يمكن ترتيب شهادات حلال وكوشر عند الطلب. يتم مشاركة جميع المستندات قبل الشحن.' },
    { q: 'ما هي قدرتكم الإنتاجية السنوية؟', a: 'تبلغ الطاقة الإنتاجية السنوية لمنشأتنا في سيدهبور 2000 طن متري عبر جميع خطوط المنتجات. يمكننا عادةً تأكيد المهلة الزمنية في غضون 48 ساعة من تلقي ورقة المواصفات المؤكدة وخطاب النية للشراء.' },
    { q: 'من أي الموانئ تقومون بالشحن؟', a: 'نشحن FOB Mundra و FOB Kandla و FOB JNPT (Nhava Sheva). أسعار CIF متاحة عند الطلب. ميناء موندرا هو مينائنا الرئيسي لمعظم طلبات التصدير نظرًا لتكرار رحلات السفن إلى أوروبا والولايات المتحدة والشرق الأوسط.' },
    { q: 'ما هي أحجام المش المتاحة لبودرة قشور السيليوم؟', a: 'تتوفر بودرة القشور بمقاسات 40، 60، 80، 100، و 200 مش (ASTM). يعتمد اختيار المش على تطبيقك: 40-60 مش لملء الكبسولات، 80-100 مش لخلطات المشروبات والأغذية الوظيفية، 200 مش لتطبيقات التجميل أو العناية الشخصية.' },
    { q: 'هل يمكنني الحصول على عينة قبل تقديم طلب بالجملة؟', a: 'نعم. نحن نقدم عينات من 100-500 جرام مع شهادة التحليل (COA) عند الطلب. شاركنا درجتك المستهدفة، والمش، وعنوان الشحن. المهلة الزمنية للعينات هي 3-5 أيام عمل من سيدهبور.' },
    { q: 'ما هي الشهادات التي تحملها منشأتكم؟', a: 'عمليات منشأتنا وتسجيلاتها وعمليات تدقيق الامتثال الدولي قيد التنفيذ حاليًا. نحن نعطي الأولوية للشفافية والامتثال التنظيمي لجميع أسواق التصدير العالمية. يرجى الاتصال بمكتب التصدير لدينا مباشرة للحصول على آخر التحديثات وجداول الامتثال ومتطلبات التدقيق الخاصة ببلد وجهتكم.' },
    { q: 'ما الفرق بين قشور السيليوم وبودرة قشور السيليوم؟', a: 'كلاهما يأتي من نفس بذور Plantago ovata ولكنهما يختلفان في الشكل والتطبيق. تحتفظ القشور الكاملة بقوامها الليفي وتستخدم في حشو الكبسولات وأكياس الملينات وحبوب الإفطار الغنية بالألياف. يتم طحن البودرة إلى مش ناعم وتتوزع بشكل موحد في خلطات المشروبات والمخبوزات والأطعمة الوظيفية. حجم الانتفاخ أعلى قليلاً في البودرة بسبب زيادة تعرض مساحة السطح.' }
  ],
  nl: [
    { q: 'Welke kwaliteiten psylliumvezels levert u?', a: 'Wij leveren zuiverheidsgraden van 85%, 95%, 98% en 99%. Kwaliteit verwijst naar het gehalte aan vezels — kwaliteit 99% heeft het hoogste mucilagegehalte en zwelvolume (≥50 ml/g), geschikt voor farmaceutische laxeermiddelmonografieën (USP/EP/IP). Deel uw doeltoepassing en wij adviseren de juiste kwaliteit.' },
    { q: 'Wat is uw minimale bestelhoeveelheid (MOQ)?', a: 'Geen minimale bestelhoeveelheid. Wij leveren van 1 KG monsters voor laboratoriumtesten en 5 KG proefbatches tot complete containerladingen (18–20 MT). Bestel elke gewenste hoeveelheid — neem contact met ons op en we bevestigen de beschikbaarheid en levertijd.' },
    { q: 'Levert u biologische psyllium?', a: 'Ja. Wij leveren biologische psylliumvezels en -poeder op aanvraag. Biologische batches zijn beschikbaar met certificaatbeoordeling vóór de bestelling. Kopers moeten hun bestemmingsmarkt en de vereiste certificeringsscope delen — NOP voor de VS, EU-NOP voor Europa.' },
    { q: 'Welke exportdocumenten levert u?', a: 'De standaard exportset bevat: commerciële factuur, paklijst, COA, certificaat van oorsprong, fytosanitair certificaat en begassingscertificaat indien vereist. Halal- en Kosher-certificaten kunnen op aanvraag worden geregeld. Alle documenten worden vóór verzending gedeeld.' },
    { q: 'Wat is uw jaarlijkse productiecapaciteit?', a: 'Onze faciliteit in Siddhpur heeft een jaarlijkse verwerkingscapaciteit van 2.000 MT over alle productlijnen. We kunnen de levertijd doorgaans binnen 48 uur na ontvangst van een bevestigd specificatieblad en koopintentie bevestigen.' },
    { q: 'Vanuit welke havens verzendt u?', a: 'Wij verzenden FOB Mundra, FOB Kandla en FOB JNPT (Nhava Sheva). CIF-prijzen zijn op aanvraag beschikbaar. Mundra is onze primaire haven voor de meeste exportbestellingen vanwege de hoge frequentie van scheepsafvaarten naar Europa, de VS en het Midden-Oosten.' },
    { q: 'Welke mesh-groottes zijn beschikbaar voor psylliumvezelpoeder?', a: 'Vezelpoeder is beschikbaar in 40, 60, 80, 100 en 200 mesh (ASTM). Mesh-selectie hangt af van uw toepassing: 40-60 mesh voor het vullen van capsules, 80-100 mesh for drankmengsels en functionele voeding, 200 mesh voor cosmetische of persoonlijke verzorgingstoepassingen.' },
    { q: 'Kan ik een monster krijgen voordat ik een bulkbestelling plaats?', a: 'Ja. Wij leveren op aanvraag monsters van 100-500 g met COA. Deel uw doelkwaliteit, mesh en verzendadres. De levertijd van monsters is 3-5 werkdagen vanuit Siddhpur.' },
    { q: 'Welke certificeringen heeft uw faciliteit?', a: 'Onze faciliteitsactiviteiten, registraties en internationale compliance-audits zijn momenteel in uitvoering. We geven prioriteit aan transparantie en regelgeving voor alle wereldwijde exportmarkten. Neem rechtstreeks contact op met onze exportdesk voor de nieuwste updates, compliance-tijdlijnen en specifieke auditvereisten voor uw bestemmingsland.' },
    { q: 'Wat is het verschil tussen psylliumvezels en psylliumvezelpoeder?', a: 'Beide zijn afkomstig van hetzelfde Plantago ovata-zaad, maar verschillen in vorm en toepassing. Hele vezels behouden hun vezelige textuur en worden gebruikt in capsules, laxeerzakjes en vezelrijke ontbijtgranen. Poeder wordt fijngemalen en dispergeert gelijkmatig in drankmengsels, bakkerijproducten en functionele voeding. Het zwelvolume is iets hoger bij poeder door de grotere blootstelling van het oppervlak.' }
  ],
  es: [
    { q: '¿Qué grados de cáscara de psyllium suministran?', a: 'Suministramos grados de pureza del 85%, 95%, 98% y 99%. El grado se refiere al contenido de cáscara — el grado 99% tiene el mayor contenido de mucílago y volumen de hinchamiento (≥50 ml/g), adecuado para monografías de laxantes farmacéuticos (USP/EP/IP). Comparta su aplicación objetivo y le recomendaremos el grado apropiado.' },
    { q: '¿Cuál es la cantidad mínima de pedido (MOQ)?', a: 'Sin cantidad mínima de pedido. Suministramos desde muestras de 1 KG para pruebas de laboratorio y lotes de 5 KG, hasta contenedores completos de 18–20 MT. Pida la cantidad que necesite — contáctenos y confirmaremos disponibilidad y plazo de entrega.' },
    { q: '¿Suministran psyllium orgánico?', a: 'Sí. Suministramos cáscara y polvo de psyllium orgánico a petición. Los lotes orgánicos están disponibles con revisión de certificados antes de la orden de compra. Los compradores deben indicar su mercado de destino y el alcance de certificación requerido — NOP para EE. UU., EU-NOP para Europa.' },
    { q: '¿Qué documentos de exportación proporcionan?', a: 'El conjunto estándar de exportación incluye: factura comercial, lista de empaque, COA, certificado de origen, certificado fitosanitario y certificado de fumigación cuando se requiera. Los certificados Halal y Kosher pueden tramitarse a petición. Todos los documentos se comparten antes del envío.' },
    { q: '¿Cuál es su capacidad de producción anual?', a: 'Nuestra instalación en Siddhpur tiene una capacidad de procesamiento anual de 2.000 MT en todas las líneas de productos. Generalmente podemos confirmar el tiempo de entrega dentro de las 48 horas de recibir una hoja de especificaciones confirmada e intención de compra.' },
    { q: '¿Desde qué puertos realizan los envíos?', a: 'Realizamos envíos FOB Mundra, FOB Kandla y FOB JNPT (Nhava Sheva). El precio CIF está disponible a petición. Mundra es nuestro puerto principal para la mayoría de pedidos de exportación debido a la frecuencia de buques hacia Europa, EE. UU. y Oriente Medio.' },
    { q: '¿Qué tamaños de malla están disponibles para el polvo de cáscara de psyllium?', a: 'El polvo de cáscara está disponible en mallas 40, 60, 80, 100 y 200 (ASTM). La selección de malla depende de su aplicación: malla 40–60 para llenado de cápsulas, malla 80–100 para bebidas en polvo y alimentos funcionales, malla 200 para aplicaciones cosméticas o de cuidado personal.' },
    { q: '¿Puedo obtener una muestra antes de hacer un pedido a granel?', a: 'Sí. Proporcionamos muestras de 100–500 g con COA a petición. Comparta su grado objetivo, malla y dirección de envío. El tiempo de entrega de muestras es de 3 a 5 días hábiles desde Siddhpur.' },
    { q: '¿Qué certificaciones tiene su instalación?', a: 'Las operaciones, registros y auditorías de cumplimiento internacional de nuestra instalación están actualmente en proceso. Priorizamos la transparencia y el cumplimiento regulatorio para todos los mercados de exportación globales. Póngase en contacto directamente con nuestra oficina de exportación para conocer las últimas actualizaciones, plazos y requisitos de auditoría específicos para su país de destino.' },
    { q: '¿En qué se diferencia la cáscara de psyllium del polvo de cáscara de psyllium?', a: 'Ambos provienen de la misma semilla de Plantago ovata pero difieren en forma y aplicación. La cáscara entera conserva su textura fibrosa y se usa en cápsulas, sobres laxantes y cereales de alto contenido en fibra. El polvo se muele a una malla fina y se dispersa uniformemente en bebidas en polvo, mezclas para panadería y alimentos funcionales. El volumen de hinchamiento es ligeramente mayor en el polvo debido a la mayor exposición de la superficie.' },
  ],
  fr: [
    { q: 'Quels grades de cosse de psyllium fournissez-vous ?', a: 'Nous fournissons des grades de pureté de 85%, 95%, 98% et 99%. Le grade correspond à la teneur en cosse — le grade 99% a la teneur en mucilage et le volume de gonflement les plus élevés (≥50 ml/g), adapté aux monographies de laxatifs pharmaceutiques (USP/EP/IP). Partagez votre application cible et nous recommanderons le grade approprié.' },
    { q: 'Quelle est votre quantité minimale de commande (MOQ) ?', a: 'Pas de minimum de commande. Nous livrons depuis des échantillons de 1 KG pour tests en laboratoire et des lots de 5 KG, jusqu\'à des conteneurs complets de 18–20 MT. Commandez la quantité dont vous avez besoin — contactez-nous et nous confirmerons la disponibilité.' },
    { q: 'Fournissez-vous du psyllium biologique ?', a: 'Oui. Nous fournissons de la cosse et de la poudre de psyllium biologique sur demande. Les lots biologiques sont disponibles avec examen des certificats avant l\'ordre d\'achat. Les acheteurs doivent indiquer leur marché de destination et la portée de certification requise — NOP pour les USA, EU-NOP pour l\'Europe.' },
    { q: 'Quels documents d\'exportation fournissez-vous ?', a: 'Le set d\'exportation standard comprend : facture commerciale, liste de colisage, COA, certificat d\'origine, certificat phytosanitaire et certificat de fumigation si requis. Les certificats Halal et Kosher peuvent être obtenus sur demande. Tous les documents sont partagés avant l\'expédition.' },
    { q: 'Quelle est votre capacité de production annuelle ?', a: 'Notre installation à Siddhpur a une capacité de traitement annuelle de 2 000 MT sur toutes les gammes de produits. Nous pouvons généralement confirmer le délai de livraison dans les 48 heures suivant la réception d\'une fiche de spécifications confirmée et d\'une intention d\'achat.' },
    { q: 'De quels ports expédiez-vous ?', a: 'Nous expédions FOB Mundra, FOB Kandla et FOB JNPT (Nhava Sheva). Le prix CIF est disponible sur demande. Mundra est notre port principal pour la plupart des commandes d\'exportation en raison de la fréquence des navires vers l\'Europe, les USA et le Moyen-Orient.' },
    { q: 'Quelles tailles de maille sont disponibles pour la poudre de cosse de psyllium ?', a: 'La poudre de cosse est disponible en maille 40, 60, 80, 100 et 200 (ASTM). Le choix de maille dépend de votre application : maille 40–60 pour le remplissage de gélules, maille 80–100 pour les boissons en poudre et aliments fonctionnels, maille 200 pour les applications cosmétiques ou de soin personnel.' },
    { q: 'Puis-je obtenir un échantillon avant de passer une commande en gros ?', a: 'Oui. Nous fournissons des échantillons de 100–500 g avec COA sur demande. Partagez votre grade cible, maille et adresse d\'expédition. Le délai d\'échantillon est de 3 à 5 jours ouvrables depuis Siddhpur.' },
    { q: 'Quelles certifications votre installation possède-t-elle ?', a: 'Les opérations, enregistrements et audits de conformité internationale de notre usine sont actuellement en cours. Nous accordons la priorité à la transparence et à la conformité réglementaire pour tous les marchés d\'exportation mondiaux. Veuillez contacter directement notre bureau d\'exportation pour obtenir les dernières mises à jour, les calendriers de conformité et les exigences d\'audit spécifiques à votre pays de destination.' },
    { q: 'Quelle est la différence entre la cosse de psyllium et la poudre de cosse de psyllium ?', a: 'Les deux proviennent de la même graine de Plantago ovata mais diffèrent par leur forme et application. La cosse entière conserve sa texture fibreuse et est utilisée dans les gélules, sachets laxatifs et céréales riches en fibres. La poudre est moulue à une maille fine et se disperse uniformément dans les boissons en poudre, mélanges de boulangerie et aliments fonctionnels. Le volume de gonflement est légèrement plus élevé dans la poudre en raison d\'une plus grande exposition de surface.' },
  ],
  nl: [
    { q: 'Welke zuiverheidsgraden voor psylliumvlies levert u?', a: 'Wij leveren zuiverheidsgraden van 85%, 95%, 98% en 99%. De graad verwijst naar het vliesgehalte — 99%-graad heeft het hoogste mucilagehalt en zwelvolume (≥50 ml/g), geschikt voor farmaceutische laxatiefmonografieën (USP/EP/IP). Deel uw doeltoepassing en wij adviseren de juiste graad.' },
    { q: 'Wat is uw minimale bestelhoeveelheid (MOQ)?', a: 'Geen minimale bestelhoeveelheid. We leveren van 1 KG monsters voor laboratoriumtests en proefpartijen van 5 KG tot volledige containers van 18–20 MT. Bestel elke gewenste hoeveelheid — neem contact op en wij bevestigen beschikbaarheid en levertijd.' },
    { q: 'Leveren jullie biologisch psyllium?', a: 'Ja. Wij leveren biologisch psylliumvlies en -poeder op aanvraag. Biologische loten zijn beschikbaar met certificaatbeoordeling vóór de inkooporder. Kopers moeten hun bestemmingsmarkt en vereiste certificeringsomvang opgeven — NOP voor de VS, EU-NOP voor Europa.' },
    { q: 'Welke exportdocumenten verstrekt u?', a: 'Het standaard exportpakket omvat: handelsfactuur, paklijst, COA, oorsprongscertificaat, fytosanitair certificaat en fumigatieverklaring waar vereist. Halal- en kosjercertificaten kunnen op aanvraag worden geregeld. Alle documenten worden vóór verzending gedeeld.' },
    { q: 'Wat is uw jaarlijkse productiecapaciteit?', a: 'Onze fabriek in Siddhpur heeft een jaarlijkse verwerkingscapaciteit van 2.000 MT over alle productlijnen. Wij kunnen de levertijd doorgaans bevestigen binnen 48 uur na ontvangst van een bevestigde specificatieblad en koopintentie.' },
    { q: 'Vanuit welke havens verscheept u?', a: 'Wij verschepen FOB Mundra, FOB Kandla en FOB JNPT (Nhava Sheva). CIF-prijzen zijn op aanvraag beschikbaar. Mundra is onze primaire haven voor de meeste exportorders vanwege de scheepsfrequentie naar Europa, de VS en het Midden-Oosten.' },
    { q: 'Welke meshgroottes zijn beschikbaar voor psylliumvliespoeder?', a: 'Vliespoeder is beschikbaar in mesh 40, 60, 80, 100 en 200 (ASTM). De meshkeuze hangt af van uw toepassing: mesh 40–60 voor capsulevulling, mesh 80–100 voor drankpoeders en functionele voedingsmiddelen, mesh 200 voor cosmetische of persoonlijke verzorgingstoepassingen.' },
    { q: 'Kan ik een monster ontvangen voordat ik een bulkbestelling plaatst?', a: 'Ja. Wij verstrekken monsters van 100–500 g met COA op aanvraag. Deel uw doelgraad, mesh en verzendadres. De levertijd voor monsters is 3 tot 5 werkdagen vanuit Siddhpur.' },
    { q: 'Welke certificeringen bezit uw fabriek?', a: 'De activiteiten, registraties en internationale conformiteitsaudits van onze fabriek zijn momenteel in behandeling. Wij geven prioriteit aan transparantie en naleving van de regelgeving voor alle wereldwijde exportmarkten. Neem rechtstreeks contact op met onze exportafdeling voor de laatste updates, planningen en specifieke auditvereisten voor uw bestemmingsland.' },
    { q: 'Wat is het verschil tussen psylliumvlies en psylliumvliespoeder?', a: 'Beide zijn afkomstig van hetzelfde Plantago ovata-zaad maar verschillen in vorm en toepassing. Heel vlies behoudt zijn vezelige textuur en wordt gebruikt in capsulevullingen, laxatiezakjes en vezelrijke granen. Poeder wordt tot een fijne meshgrootte gemalen en verdeelt zich gelijkmatig in drankpoeders, bakkerijblends en functionele voedingsmiddelen. Het zwelvolume is iets hoger in poeder door grotere oppervlakte-exposure.' },
  ],
  it: [
    { q: 'Quali gradi di purezza di buccia di psyllium fornite?', a: 'Forniamo gradi di purezza dell\'85%, 95%, 98% e 99%. Il grado si riferisce al contenuto di buccia — il grado 99% ha il più alto contenuto di mucillagine e volume di rigonfiamento (≥50 ml/g), adatto alle monografie di lassativi farmaceutici (USP/EP/IP). Condividi la tua applicazione target e consigliamo il grado appropriato.' },
    { q: 'Qual è la vostra quantità minima d\'ordine (MOQ)?', a: 'Nessun ordine minimo. Forniamo da campioni da 1 KG per test di laboratorio e lotti di prova da 5 KG fino a container completi da 18–20 MT. Ordina la quantità di cui hai bisogno — contattaci e confermeremo disponibilità e tempi di consegna.' },
    { q: 'Fornite psyllium biologico?', a: 'Sì. Forniamo buccia e polvere di psyllium biologico su richiesta. I lotti biologici sono disponibili con revisione dei certificati prima dell\'ordine. Gli acquirenti devono indicare il mercato di destinazione e l\'ambito di certificazione richiesto — NOP per gli USA, EU-NOP per l\'Europa.' },
    { q: 'Quali documenti di esportazione fornite?', a: 'Il set standard di esportazione include: fattura commerciale, packing list, COA, certificato di origine, certificato fitosanitario e certificato di fumigazione dove richiesto. I certificati Halal e Kosher possono essere ottenuti su richiesta. Tutti i documenti sono condivisi prima della spedizione.' },
    { q: 'Qual è la vostra capacità di produzione annuale?', a: 'Il nostro stabilimento a Siddhpur ha una capacità di lavorazione annuale di 2.000 MT su tutte le linee di prodotto. Di solito possiamo confermare i tempi di consegna entro 48 ore dal ricevimento di una scheda tecnica confermata e di un\'intenzione d\'acquisto.' },
    { q: 'Da quali porti spedite?', a: 'Spediamo FOB Mundra, FOB Kandla e FOB JNPT (Nhava Sheva). I prezzi CIF sono disponibili su richiesta. Mundra è il nostro porto principale per la maggior parte degli ordini export per via della frequenza delle navi verso Europa, USA e Medio Oriente.' },
    { q: 'Quali dimensioni di mesh sono disponibili per la polvere di buccia di psyllium?', a: 'La polvere di buccia è disponibile in mesh 40, 60, 80, 100 e 200 (ASTM). La scelta del mesh dipende dalla tua applicazione: mesh 40–60 per il riempimento di capsule, mesh 80–100 per bevande in polvere e alimenti funzionali, mesh 200 per applicazioni cosmetiche o per la cura personale.' },
    { q: 'Posso ottenere un campione prima di effettuare un ordine bulk?', a: 'Sì. Forniamo campioni da 100–500 g con COA su richiesta. Condividi il tuo grado target, mesh e indirizzo di spedizione. Il tempo di consegna dei campioni è di 3–5 giorni lavorativi da Siddhpur.' },
    { q: 'Quali certificazioni possiede il vostro stabilimento?', a: 'Le operazioni, le registrazioni e gli audit di conformità internazionale della nostra struttura sono attualmente in corso. Diamo priorità alla trasparenza e alla conformità normativa per tutti i mercati di esportazione globali. Si prega di contattare direttamente il nostro ufficio export per gli ultimi aggiornamenti, le tempistiche e i requisiti di audit specifici per il proprio paese di destinazione.' },
    { q: 'Qual è la differenza tra buccia di psyllium e polvere di buccia di psyllium?', a: 'Entrambi provengono dallo stesso seme di Plantago ovata ma differiscono per forma e applicazione. La buccia intera mantiene la sua texture fibrosa e viene utilizzata in capsule, bustine lassative e cereali ad alto contenuto di fibre. La polvere viene macinata a una mesh fine e si disperde uniformemente in bevande in polvere, miscele per panificazione e alimenti funzionali. Il volume di rigonfiamento è leggermente più alto nella polvere per via della maggiore esposizione superficiale.' },
  ],
  pt: [
    { q: 'Quais graus de pureza de casca de psyllium vocês fornecem?', a: 'Fornecemos graus de pureza de 85%, 95%, 98% e 99%. O grau refere-se ao teor de casca — o grau 99% tem o maior teor de mucilagem e volume de intumescimento (≥50 ml/g), adequado para monografias de laxantes farmacêuticos (USP/EP/IP). Compartilhe sua aplicação alvo e recomendaremos o grau apropriado.' },
    { q: 'Qual é a quantidade mínima de pedido (MOQ)?', a: 'Sem pedido mínimo. Fornecemos desde amostras de 1 KG para testes laboratoriais e lotes de 5 KG até contêineres completos de 18–20 MT. Peça a quantidade que precisar — entre em contato e confirmaremos disponibilidade e prazo de entrega.' },
    { q: 'Vocês fornecem psyllium orgânico?', a: 'Sim. Fornecemos casca e pó de psyllium orgânico sob pedido. Lotes orgânicos estão disponíveis com revisão de certificados antes do pedido de compra. Os compradores devem indicar seu mercado de destino e o escopo de certificação necessário — NOP para os EUA, EU-NOP para a Europa.' },
    { q: 'Quais documentos de exportação vocês fornecem?', a: 'O conjunto padrão de exportação inclui: fatura comercial, lista de embalagem, COA, certificado de origem, certificado fitossanitário e certificado de fumigação quando necessário. Certificados Halal e Kosher podem ser providenciados sob pedido. Todos os documentos são compartilhados antes do envio.' },
    { q: 'Qual é a capacidade de produção anual de vocês?', a: 'Nossa instalação em Siddhpur tem capacidade de processamento anual de 2.000 MT em todas as linhas de produto. Geralmente podemos confirmar o prazo de entrega em 48 horas após receber uma ficha de especificações confirmada e intenção de compra.' },
    { q: 'De quais portos vocês fazem envios?', a: 'Enviamos FOB Mundra, FOB Kandla e FOB JNPT (Nhava Sheva). Preços CIF estão disponíveis sob pedido. Mundra é nosso porto principal para a maioria dos pedidos de exportação pela frequência de navios para Europa, EUA e Oriente Médio.' },
    { q: 'Quais tamanhos de mesh estão disponíveis para pó de casca de psyllium?', a: 'O pó de casca está disponível em mesh 40, 60, 80, 100 e 200 (ASTM). A escolha do mesh depende da sua aplicação: mesh 40–60 para preenchimento de cápsulas, mesh 80–100 para bebidas em pó e alimentos funcionais, mesh 200 para aplicações cosméticas ou de cuidados pessoais.' },
    { q: 'Posso obter uma amostra antes de fazer um pedido bulk?', a: 'Sim. Fornecemos amostras de 100–500 g com COA sob pedido. Compartilhe seu grau alvo, mesh e endereço de envio. O prazo de entrega de amostras é de 3 a 5 dias úteis a partir de Siddhpur.' },
    { q: 'Quais certificações sua instalação possui?', a: 'As operações, registros e auditorias de conformidade internacional de nossa instalação estão atualmente em andamento. Priorizamos a transparência e a conformidade regulatória para todos os mercados globais de exportação. Entre em contato diretamente com o nosso setor de exportação para obter as atualizações mais recentes, cronogramas de conformidade e requisitos de auditoria específicos para o seu país de destino.' },
    { q: 'Qual é a diferença entre casca de psyllium e pó de casca de psyllium?', a: 'Ambos vêm da mesma semente de Plantago ovata, mas diferem em forma e aplicação. A casca inteira mantém sua textura fibrosa e é usada em cápsulas, sachês laxantes e cereais ricos em fibras. O pó é moído em uma mesh fina e se dispersa uniformemente em bebidas em pó, misturas para panificação e alimentos funcionais. O volume de intumescimento é ligeiramente maior no pó devido à maior exposição superficial.' },
  ],
  ru: [
    { q: 'Какие степени чистоты шелухи псиллиума вы поставляете?', a: 'Мы поставляем степени чистоты 85%, 95%, 98% и 99%. Степень относится к содержанию шелухи — сорт 99% имеет наибольшее содержание муцилагина и объём набухания (≥50 мл/г), подходящий для фармацевтических монографий слабительных средств (USP/EP/IP). Сообщите целевое применение, и мы порекомендуем подходящий сорт.' },
    { q: 'Какой минимальный объём заказа (MOQ)?', a: 'Нет минимального объёма заказа. Поставляем от образцов 1 кг для лабораторных испытаний и пробных партий 5 кг до полных контейнеров 18–20 МТ. Заказывайте нужное количество — свяжитесь с нами, и мы подтвердим наличие и сроки.' },
    { q: 'Вы поставляете органический псиллиум?', a: 'Да. Мы поставляем органическую шелуху и порошок псиллиума по запросу. Органические партии доступны с проверкой сертификатов до оформления заказа. Покупатели должны указать целевой рынок и требуемый охват сертификации — NOP для США, EU-NOP для Европы.' },
    { q: 'Какие экспортные документы вы предоставляете?', a: 'Стандартный пакет экспортных документов включает: коммерческий счёт, упаковочный лист, COA, сертификат происхождения, фитосанитарный сертификат и сертификат фумигации при необходимости. Сертификаты халяль и кошер могут быть оформлены по запросу. Все документы предоставляются до отгрузки.' },
    { q: 'Какова ваша годовая производственная мощность?', a: 'Наше предприятие в Унджхе имеет годовую перерабатывающую мощность 2 000 МТ по всем продуктовым линейкам. Как правило, мы можем подтвердить срок поставки в течение 48 часов после получения подтверждённой спецификации и намерения о покупке.' },
    { q: 'Из каких портов вы отгружаете?', a: 'Мы отгружаем FOB Мундра, FOB Кандла и FOB JNPT (Nhava Sheva). Цены CIF доступны по запросу. Мундра — наш основной порт для большинства экспортных заказов из-за частоты судов в Европу, США и на Ближний Восток.' },
    { q: 'Какие размеры помола доступны для порошка шелухи псиллиума?', a: 'Порошок шелухи доступен в помоле 40, 60, 80, 100 и 200 меш (ASTM). Выбор помола зависит от вашего применения: 40–60 меш для наполнения капсул, 80–100 меш для порошковых напитков и функциональных продуктов, 200 меш для косметических и средств личной гигиены.' },
    { q: 'Можно ли получить образец перед оформлением крупного заказа?', a: 'Да. Мы предоставляем образцы 100–500 г с COA по запросу. Укажите целевой сорт, помол и адрес доставки. Срок доставки образцов составляет 3–5 рабочих дней из Унджхи.' },
    { q: 'Какие сертификаты имеет ваше предприятие?', a: 'В настоящее время на нашем предприятии ведутся работы по регистрации, организации операционной деятельности и прохождению международных аудитов соответствия. Мы уделяем приоритетное внимание прозрачности и соблюдению нормативных требований для всех мировых экспортных рынков. Пожалуйста, свяжитесь с нашим экспортным отделом напрямую для получения последней информации, графиков сертификации и конкретных требований к аудиту для вашей страны назначения.' },
    { q: 'В чём разница между шелухой псиллиума и порошком шелухи псиллиума?', a: 'Оба продукта получают из одного и того же семени Plantago ovata, но различаются по форме и применению. Цельная шелуха сохраняет волокнистую текстуру и используется в наполнителях капсул, пакетиках слабительных и злаках с высоким содержанием клетчатки. Порошок измельчается до мелкого помола и равномерно диспергируется в порошковых напитках, хлебопекарных смесях и функциональных продуктах. Объём набухания в порошке несколько выше из-за большей площади контакта.' },
  ],
  ar: [
    { q: 'ما درجات نقاء قشور السيليوم التي تورّدونها?', a: 'نورّد درجات نقاء 85% و95% و98% و99%. تشير الدرجة إلى محتوى القشرة — درجة 99% لها أعلى محتوى من المخاط وحجم انتفاخ (≥50 مل/غ)، مناسبة لمونوغرافات المسهّلات الصيدلانية (USP/EP/IP). شارك تطبيقك المستهدف وسنوصي بالدرجة المناسبة.' },
    { q: 'ما الحد الأدنى لكمية الطلب (MOQ)?', a: 'لا حد أدنى للطلب. نورّد من عينات 1 كغ لاختبارات المختبر ودُفعات تجريبية 5 كغ، حتى حاويات كاملة 18–20 طنًا. اطلب الكمية التي تحتاجها — تواصل معنا وسنؤكد التوافر وموعد التسليم.' },
    { q: 'هل تورّدون سيليوم عضوي?', a: 'نعم. نورّد قشور ومسحوق سيليوم عضوي بناءً على الطلب. الدُفعات العضوية متاحة مع مراجعة الشهادات قبل أمر الشراء. يجب على المشترين تحديد سوق وجهتهم ونطاق الشهادات المطلوبة — NOP للولايات المتحدة، وEU-NOP لأوروبا.' },
    { q: 'ما وثائق التصدير التي تقدمونها?', a: 'تشمل حزمة التصدير القياسية: فاتورة تجارية، وقائمة شحن، وCOA، وشهادة منشأ، وشهادة صحة نبات، وشهادة تبخير عند الحاجة. يمكن ترتيب شهادات الحلال والكوشير بناءً على الطلب. تُشارك جميع الوثائق قبل الشحن.' },
    { q: 'ما طاقتكم الإنتاجية السنوية?', a: 'يمتلك مصنعنا في أونجها طاقة تصنيعية سنوية تبلغ 2,000 طن متري عبر جميع خطوط المنتجات. يمكننا عادةً تأكيد موعد التسليم خلال 48 ساعة من استلام مواصفات مؤكدة ونية شراء.' },
    { q: 'من أي موانئ تشحنون?', a: 'نشحن FOB موندرا وFOB كاندلا وFOB JNPT (نهافا شيفا). أسعار CIF متاحة بناءً على الطلب. موندرا هو ميناؤنا الرئيسي لمعظم طلبات التصدير بسبب تواتر السفن نحو أوروبا والولايات المتحدة والشرق الأوسط.' },
    { q: 'ما أحجام المنخل المتاحة لمسحوق قشور السيليوم?', a: 'مسحوق القشور متاح بمناخل 40 و60 و80 و100 و200 (ASTM). يعتمد اختيار المنخل على تطبيقك: 40–60 لتعبئة الكبسولات، 80–100 لمساحيق المشروبات والأغذية الوظيفية، 200 للتطبيقات التجميلية والعناية الشخصية.' },
    { q: 'هل يمكنني الحصول على عينة قبل تقديم طلب بالجملة?', a: 'نعم. نوفر عينات 100–500 غ مع COA بناءً على الطلب. شارك درجتك المستهدفة والمنخل وعنوان الشحن. مدة تسليم العينات 3 إلى 5 أيام عمل من أونجها.' },
    { q: 'ما الشهادات التي يمتلكها مصنعكم?', a: 'عمليات منشأتنا وتسجيلاتها وعمليات تدقيق الامتثال الدولية قيد التنفيذ حاليًا. نحن نولي الأولوية للشفافية والامتثال التنظيمي لجميع أسواق التصدير العالمية. يرجى الاتصال بمكتب التصدير لدينا مباشرة للحصول على آخر التحديثات والجداول الزمنية للامتثال ومتطلبات التدقيق المحددة لبلد وجهتك.' },
    { q: 'ما الفرق بين قشور السيليوم ومسحوق قشور السيليوم?', a: 'كلاهما مصدره نفس بذرة Plantago ovata لكنهما يختلفان في الشكل والتطبيق. القشرة الكاملة تحتفظ بقوامها الليفي وتُستخدم في حشو الكبسولات وأكياس المسهّلات والحبوب الغنية بالألياف. المسحوق يُطحن بمنخل ناعم وينتشر بشكل منتظم في مساحيق المشروبات ومخاليط المخبوزات والأغذية الوظيفية. حجم الانتفاخ أعلى قليلاً في المسحوق بسبب زيادة مساحة السطح.' },
  ],
  zh: [
    { q: '你们提供哪些纯度规格的车叶草皮？', a: '我们提供85%、95%、98%和99%纯度规格。规格指的是皮的含量——99%规格具有最高的粘液质含量和膨胀体积（≥50毫升/克），适用于制药泻药专论（USP/EP/IP）。请告知您的目标应用，我们将推荐适合的规格。' },
    { q: '最低订量（MOQ）是多少？', a: '无最低起订量。我们提供从1公斤实验室检测样品、5公斤试用批次到18–20吨整柜订单的全规格服务。按需订购——联系我们确认供货情况和交货期。' },
    { q: '你们供应有机车叶草吗？', a: '是的。我们按需供应有机车叶草皮和粉末。有机批次在下采购订单前可进行证书审查。买家需注明目标市场及所需认证范围——美国为NOP，欧洲为EU-NOP。' },
    { q: '你们提供哪些出口文件？', a: '标准出口文件包括：商业发票、装箱单、COA、原产地证、植物检疫证书及所需的熏蒸证书。清真和犹太洁食证书可按需提供。所有文件在发货前共享。' },
    { q: '你们的年产能是多少？', a: '我们位于昂杰哈的工厂所有产品线年加工产能为2,000吨。收到确认的规格书和采购意向后，我们通常可在48小时内确认交货期。' },
    { q: '你们从哪些港口发货？', a: '我们从FOB蒙德拉、FOB坎德拉和FOB JNPT（纳哈瓦·谢瓦）发货。CIF价格可按需提供。由于蒙德拉前往欧洲、美国和中东的船期频繁，它是我们大多数出口订单的主要港口。' },
    { q: '车叶草皮粉有哪些目数可选？', a: '皮粉提供40、60、80、100和200目（ASTM）。目数的选择取决于您的应用：40–60目用于胶囊填充，80–100目用于粉末饮料和功能性食品，200目用于化妆品或个人护理应用。' },
    { q: '在下批量订单前能否获取样品？', a: '是的。我们按需提供100–500克含COA的样品。请提供您的目标规格、目数和收货地址。从昂杰哈发出的样品交货期为3至5个工作日。' },
    { q: '你们的工厂持有哪些认证？', a: '我们工厂的运营准备、相关注册和国际合规性审计目前正在积极推进中。我们始终把全球出口市场的透明度与合规性放在首位。请直接联系我们的出口部门，以获取最新的合规进程、时间表以及针对您特定目的国家的审计与资质要求。' },
    { q: '车叶草皮与车叶草皮粉有何区别？', a: '两者均来自同一种Plantago ovata种子，但形态和应用不同。整皮保留其纤维质地，用于胶囊填充、泻药袋和高纤维谷物。粉末研磨至细目数，均匀分散于粉末饮料、烘焙混合物和功能性食品中。由于表面积更大，粉末的膨胀体积略高。' },
  ],
  de: [
    { q: 'Welche Reinheitsgrade für Psylliumschalen liefern Sie?', a: 'Wir liefern Reinheitsgrade von 85%, 95%, 98% und 99%. Der Grad bezieht sich auf den Schalengehalt — 99%-Grad hat den höchsten Mucilagehalt und das höchste Quellvolumen (≥50 ml/g), geeignet für pharmazeutische Laxativmonographien (USP/EP/IP). Teilen Sie Ihre Zielanwendung mit und wir empfehlen den geeigneten Grad.' },
    { q: 'Was ist Ihre Mindestbestellmenge (MOQ)?', a: 'Keine Mindestbestellmenge. Wir liefern von 1-KG-Mustern für Labortests und 5-KG-Testchargen bis zu vollen Containern mit 18–20 MT. Bestellen Sie, was Sie benötigen — kontaktieren Sie uns und wir bestätigen Verfügbarkeit und Lieferzeit.' },
    { q: 'Liefern Sie Bio-Psyllium?', a: 'Ja. Wir liefern Bio-Psylliumschalen und -pulver auf Anfrage. Bio-Chargen sind mit Zertifikatsprüfung vor der Bestellung verfügbar. Käufer müssen ihren Zielmarkt und den erforderlichen Zertifizierungsumfang angeben — NOP für die USA, EU-NOP für Europa.' },
    { q: 'Welche Exportdokumente stellen Sie bereit?', a: 'Das Standard-Exportpaket umfasst: Handelsrechnung, Packliste, COA, Ursprungszeugnis, Pflanzengesundheitszeugnis und Begasungszeugnis wo erforderlich. Halal- und Kosher-Zertifikate können auf Anfrage arrangiert werden. Alle Dokumente werden vor dem Versand geteilt.' },
    { q: 'Wie hoch ist Ihre jährliche Produktionskapazität?', a: 'Unsere Anlage in Siddhpur hat eine jährliche Verarbeitungskapazität von 2.000 MT über alle Produktlinien. Wir können die Lieferzeit in der Regel innerhalb von 48 Stunden nach Eingang einer bestätigten Spezifikationsblatt und Kaufabsicht bestätigen.' },
    { q: 'Von welchen Häfen versenden Sie?', a: 'Wir versenden FOB Mundra, FOB Kandla und FOB JNPT (Nhava Sheva). CIF-Preise sind auf Anfrage erhältlich. Mundra ist unser Haupthafen für die meisten Exportaufträge aufgrund der Schiffsfrequenz nach Europa, in die USA und in den Nahen Osten.' },
    { q: 'Welche Meshgrößen sind für Psylliumschalenpulver verfügbar?', a: 'Schalenpulver ist in Mesh 40, 60, 80, 100 und 200 (ASTM) erhältlich. Die Mesh-Auswahl hängt von Ihrer Anwendung ab: Mesh 40–60 für Kapselbefüllung, Mesh 80–100 für Getränkepulver und funktionelle Lebensmittel, Mesh 200 für kosmetische oder Körperpflegeanwendungen.' },
    { q: 'Kann ich ein Muster erhalten, bevor ich eine Großbestellung aufgebe?', a: 'Ja. Wir stellen 100–500 g Muster mit COA auf Anfrage bereit. Teilen Sie Ihren Zielgrad, Mesh und Versandadresse mit. Die Lieferzeit für Muster beträgt 3–5 Werktage ab Siddhpur.' },
    { q: 'Welche Zertifizierungen besitzt Ihre Anlage?', a: 'Unsere Betriebsabläufe, Registrierungen und internationalen Compliance-Audits befinden sich derzeit im Prozess. Wir legen großen Wert auf absolute Transparenz und die Einhaltung regulatorischer Vorgaben für alle weltweiten Exportmärkte. Bitte wenden Sie sich direkt an unsere Exportabteilung, um aktuelle Informationen, Compliance-Zeitpläne und spezifische Audit-Anforderungen für Ihr Zielland zu erhalten.' },
    { q: 'Was ist der Unterschied zwischen Psylliumschalen und Psylliumschalenpulver?', a: 'Beide stammen aus derselben Plantago ovata-Samen, unterscheiden sich aber in Form und Anwendung. Ganze Schalen behalten ihre faserige Textur und werden in Kapselfüllungen, Laxativbeuteln und ballaststoffreichen Cerealien verwendet. Pulver wird auf eine feine Meshgröße gemahlen und verteilt sich gleichmäßig in Getränkepulvern, Backwarenblends und funktionellen Lebensmitteln. Das Quellvolumen ist im Pulver aufgrund der größeren Oberflächenexponierung leicht höher.' },
  ],
};

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
      'India exports psyllium through three primary ports: Mundra (Gujarat), Kandla (Gujarat), and JNPT/Nhava Sheva (Maharashtra). For psyllium buyers, port selection affects freight cost, transit time to destination, and container availability. Most Gujarat-based processors, including RM Psyllium, use Mundra as their primary port due to its proximity (approximately 220 km from our Siddhpur facility) and high vessel frequency to Europe, the US East Coast, the Middle East, and Australia.',
      'Mundra Port (MUND) is operated by Adani Ports and handles the highest volume of container traffic in India. Vessel frequency to major destination ports (Rotterdam, Felixstowe, New York, Jeddah, Colombo) is typically 2–4 sailings per week. Transit time to Rotterdam is approximately 20–23 days; to New York approximately 25–28 days; to Jeddah approximately 8–10 days. Kandla (INKLA) is an alternative with slightly lower port charges but less frequent services. JNPT is used primarily for buyers in southern India or where specific shipping lines offer better rates.',
      'For CIF orders, we select the port based on your destination and the shipping line with the best rate at the time of booking. For FOB orders, you nominate the freight forwarder and we coordinate with them directly. Export documentation — commercial invoice, packing list, COA, certificate of origin, phytosanitary certificate — is prepared at our facility and submitted 3–5 days before vessel loading. Share your destination port and we will provide an indicative freight quote alongside the product price.'
    ]
  },
  {
    slug: 'psyllium-husk-usp-ep-pharmacopoeia',
    title: 'USP vs EP vs IP: Psyllium Husk Pharmacopoeia Standards Explained',
    category: 'Compliance',
    date: '2026-05-24',
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
    date: '2026-05-22',
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
    date: '2026-05-21',
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
    date: '2026-05-18',
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
export interface UseCase {
  title: string;
  body: string;
}

export interface IndustryTranslation {
  name: string;
  headline: string;
  proof: string[];
  useCases: UseCase[];
  keySpecs: string[];
  documents: string[];
  buyerNote: string;
}

export const industryTranslations: Record<string, Record<string, IndustryTranslation>> = {
  zh: {
    'pharma-nutraceutical': {
      name: '制药与保健品',
      headline: '专为胶囊、消化健康产品、泻药和膳食补充剂混合物设计的优质车前子壳与车前子粉。',
      proof: [
        '包含完整制药级检测的分析证书 (COA)',
        '符合 USP / EP / IP 药典标准参数',
        '可提供 NABL 认可的实验室检测报告'
      ],
      useCases: [
        {
          title: '泻药胶囊与非处方药 (OTC) 冲剂袋',
          body: '纯度为 99% 且溶胀度 ≥50 ml/g 的车前子壳，完全符合 USP 和 EP 药典关于非处方泻药制剂的标准。提供 40-60 目规格，适用于标准胶囊的填充生产。'
        },
        {
          title: '消化系统健康补充剂',
          body: '提供整壳与 80 目的精细粉末，供合同制造商品牌用于膳食纤维混合粉、益生元冲剂以及通过电商或健康零售渠道销售的肠道调节产品。'
        },
        {
          title: '保健营养粉剂混合物',
          body: '95-98% 纯度的 100 目超细粉末，能极佳地分散于肠道健康、体重管理及微生态调节等功能性配方粉中。低灰分与中性风味是其核心优势。'
        },
        {
          title: 'OEM/白标补充剂采购',
          body: '品牌商和合同制造商在采购医药级车前子壳用于白标或代工生产时，需要确保批次之间 COA 数据的高度一致性。我们提供经 NABL 认可的报告并出具完全符合买方指定药典的证明。'
        }
      ],
      keySpecs: [
        '99% 纯度：溶胀度 ≥ 50 ml/g (符合 USP / EP / IP)',
        '可提供 95-98% 纯度（用于膳食补充剂 and 膳食纤维食品）',
        '水分 ≤ 12%，总灰分 ≤ 3%，酸不溶性灰分 ≤ 0.4%',
        '重金属控制：铅 ≤ 2 ppm，砷 ≤ 1 ppm',
        '微生物控制：无大肠杆菌，无沙门氏菌，菌落总数 (TPC) ≤ 10,000 cfu/g',
        '目数范围：40, 60, 80, 100 目 (ASTM 标准)'
      ],
      documents: [
        '应买方要求出具符合 USP / EP / IP 的分析证书 (COA)',
        'NABL 认可的第三方实验室检测报告',
        '产地来源证（印度古吉拉特邦）',
        '植物检疫证书',
        '可根据要求提供清真 (Halal) / 犹太 (Kosher) 认证或声明'
      ],
      buyerNote: '请告知您的药典要求、目标出口市场以及目数偏好。我们将在您下单前为您发送契合标准的样品 COA 并确认产能等级。'
    },
    'food-beverage-bakery': {
      name: '食品、饮料与烘焙',
      headline: '专用于无麸质烘焙、谷物食品、固体饮料混合物及清洁标签增稠的优质车前子粉与整壳。',
      proof: [
        '目数大小可根据客户具体应用进行定制',
        '有机批次均随附 NOP / EU 有机认证文件',
        '包含食品级过敏原声明'
      ],
      useCases: [
        {
          title: '无麸质面包与西点',
          body: '80-100 目的 95-98% 纯度车前子粉，能在米粉和玉米淀粉面团中替代麸质提供极佳的持水力与网络结构搭建。典型添加量为面粉重量的 1-3%。'
        },
        {
          title: '功能性固体饮料与混合粉',
          body: '100-200 目的超细粉末，在富含膳食纤维的代餐粉、营养粉和蛋白奶昔中能快速分散，绝无结块。低溶胀度（85-95%）可有效降低成胶粘度。'
        },
        {
          title: '高纤谷物食品与坚果能量棒',
          body: '整壳或粗粉（40-60 目）被广泛应用于早餐麦片、能量棒和穆斯里（Muesli）中，以显著提升配方中的可溶性膳食纤维含量。'
        },
        {
          title: '清洁标签增稠与稳定剂',
          body: '车前子粉是酱汁、调味汁和方便食品中替代甲基纤维素及黄原胶的完美清洁标签天然原料，可提供批次稳定的增稠与保水特性。'
        }
      ],
      keySpecs: [
        '95-98% 纯度：标准食品行业应用首选',
        '85% 纯度：兼顾成本效益的高纤添加方案',
        '目数选择：烘焙用 80-100 目，固体饮料用 100-200 目，谷物食品用 40-60 目',
        '水分 ≤ 10%，利于食品加工安全与长期储存',
        '有机认证：NOP (美国) 和 EU (欧盟) 有机双认证，提供逐批交易证书',
        '无过敏原（加工车间完全无麸质、无坚果、无大豆、无乳制品）'
      ],
      documents: [
        '随附食品级微生物检测指标的分析证书 (COA)',
        '无过敏原及非转基因 (Non-GMO) 声明',
        '原产地证书',
        '有机交易证书 (NOP / EU) —— 仅限有机采购批次',
        '植物检疫证书'
      ],
      buyerNote: '请与我们分享您的具体应用、批次规模和标签声明诉求。我们将为您推荐最合适的纯度和目数。在订单确认前，我们非常乐意为您邮寄配方测试样品和 COA 文件。'
    },
    'animal-feed': {
      name: '动物营养与饲料',
      headline: '为大宗采购商、批发商及牧业饲料渠道量身定制的车前子 Khakha 粉与家畜饲料原料。',
      proof: [
        '提供 25 公斤 / 50 公斤 / 1,000 公斤吨袋等多种包装规格',
        '提供明确标注粗纤维与粗蛋白含量的饲料级 COA',
        '备有 Sagar Gola / Sagar Lali 压榨牛饲料块'
      ],
      useCases: [
        {
          title: '配合饲料配方增效',
          body: '车前子 Khakha 粉是反刍动物、家禽及马匹颗粒饲料配方中极具性价比的高可溶性纤维来源及天然颗粒黏合剂。'
        },
        {
          title: '马匹肠道排沙与保健',
          body: '在马匹的日常膳食补充剂中混入粗车前子壳和粉末，能强力黏附并排出马匹肠道内积聚的沙粒，有效预防沙结肠绞痛。'
        },
        {
          title: '奶牛营养补充与改良',
          body: '我们的 Sagar Gola 压榨饲料块 and Sagar Lali 散装饲料直接供应给当地及出口奶牛场，有助于显著改善牛只乳脂率并促进反刍消化。'
        },
        {
          title: '宠物食品膳食纤维添加',
          body: '经过物理清理的优质车前子粉可直接添加到猫粮和狗粮配方中，辅助宠物肠道蠕动、预防毛球症并稳定便形。'
        }
      ],
      keySpecs: [
        '粗纤维：30-40% (标准 Khakha 级)',
        '粗蛋白：8-12% (提供基础营养支持)',
        '水分 ≤ 12%，便于饲料筒仓的安全长期储存',
        '100% 纯天然植物来源，绝无任何化学添加剂或防腐剂',
        '包装方式：50 公斤编织袋或 1,000 公斤集装吨袋'
      ],
      documents: [
        '针对动物饲料检测指标出具的分析证书 (COA)',
        '原产地证书（印度古吉拉特邦 Siddhpur）',
        '印度官方出具的植物检疫证书',
        '熏蒸证明及装港监装报告'
      ],
      buyerNote: '请告知您倾向的产品形态（牛饲料块或散装粉末）、卸货目的港以及预期的年采购量。我们将在第一时间为您提供极具竞争力的 FOB Mundra 或 CIF 报价。'
    },
    'industrial-personal-care': {
      name: '工业与个人护理',
      headline: '用于增稠、黏合、锁水保墒和生物降解吸水材料的车前子工业粉与 Khakha 粉。',
      proof: [
        '可提供 200 目超细个人护理/化妆品级粉末',
        '目数和粒径分布可根据客户工艺流程进行定制',
        '每批次均随附详细的技术数据表 (TDS)'
      ],
      useCases: [
        {
          title: '化妆品天然增稠剂',
          body: '200 目的超细车前子粉在面霜、面膜等化妆品中用作天然凝胶剂及成膜剂。车前子黏胶只需极低添加量（0.5-2%）即可形成水润、透明、无刺激的凝胶基质。'
        },
        {
          title: '土壤保水与绿化工程',
          body: '车前子 Khakha 粉在大面积边坡绿化、防沙固沙及土壤水土流失控制中发挥关键作用。其超强的黏性和吸水特性可成倍提升沙质土壤的保水墒情。'
        },
        {
          title: '工业黏合与农药造粒',
          body: '在蚊香、线香、环保板材以及农业复合肥造粒中，车前子粉作为高效的天然生物黏合剂，能显著减少合成胶粘剂的用量并增强颗粒硬度。'
        },
        {
          title: '生物降解吸水材料',
          body: '车前子壳粉卓越的膨胀和吸水性能使其成为可生物降解的医用敷料、吸水垫芯层及园艺缓释保水剂的理想天然改性材料。'
        }
      ],
      keySpecs: [
        '200 目：适用于化妆品与个人护理配方',
        '40-100 目：适用于工业黏合剂、土壤改良及生态绿化',
        '溶胀度：95% 纯度下可达 40-50 ml/g',
        '水分 ≤ 10%，防止运输与存储中结块，保证流畅喂料',
        '大宗采购优惠：最低起订量 1 吨 (MT) 起'
      ],
      documents: [
        '包含批次指标范围与检测限的技术数据表 (TDS)',
        '分析证书 (COA)',
        '原产地证书',
        '买方定制技术规范确认书'
      ],
      buyerNote: '工业与个人护理应用往往对黏度曲线或粒径有特定需求。请提供您的技术参数要求或应用场景说明，我们将为您调配定制的样品批次供您测试。'
    }
  },
  ar: {
    'pharma-nutraceutical': {
      name: 'الأدوية والمكملات الغذائية',
      headline: 'قشور وبودرة السيليوم عالية الجودة للكبسولات، منتجات صحة الجهاز الهضمي، المسهلات، وتركيبات المكملات الغذائية.',
      proof: [
        'شهادة تحليل (COA) مع فحص صيدلاني كامل',
        'مطابقة لمعايير دستور الأدوية الأمريكي والأوروبي والهنّدي',
        'تقارير اختبار معتمدة من مختبرات NABL متوفرة'
      ],
      useCases: [
        {
          title: 'كبسولات الملينات وأكياس الأدوية اللاوصفية (OTC)',
          body: 'قشور نقية بنسبة 99% مع حجم انتفاخ ≥50 مل/جم تلبي متطلبات دساتير الأدوية الأمريكية والأوروبية لتركيبات الملينات. متوفرة بحجم 40-60 مش لملء الكبسولات القياسي.'
        },
        {
          title: 'مكملات صحة الجهاز الهضمي',
          body: 'قشور كاملة وبودرة 80 مش تستخدم من قبل مصنعي التعاقد لخلطات الألياف، أكياس البريبايوتك، ومنتجات تنظيم الهضم عبر قنوات التجزئة والتجارة الإلكترونية.'
        },
        {
          title: 'خلطات البودرة للمكملات الغذائية',
          body: 'درجة نقاوة 95-98% بنعومة 100 مش تمتزج بنقاء في خلطات البودرة الوظيفية لصحة الأمعاء، إدارة الوزن، ومنتجات الميكروبيوم. الرماد المنخفض والمذاق المحايد هما الميزتان الأساسيتان.'
        },
        {
          title: 'توريد المكملات للعلامات الخاصة (OEM/White Label)',
          body: 'تتطلب العلامات التجارية ومصانع التعاقد التي تبحث عن قشور سيليوم صيدلانية لمنتجاتها بيانات COA متسقة من دفعة لأخرى. نحن نوفر تقارير NABL المعتمدة ونطابق الشهادات حسب طلب المشتري.'
        }
      ],
      keySpecs: [
        'نقاء 99%: حجم الانتفاخ ≥ 50 مل/جم (USP / EP / IP)',
        'يتوفر نقاء 95-98% للمكملات والألياف الغذائية',
        'الرطوبة ≤ 12%، الرماد الكلي ≤ 3%، الرماد غير القابل للذوبان في الحمض ≤ 0.4%',
        'المعادن الثقيلة: الرصاص ≤ 2 جزء في المليون، الزرنيخ ≤ 1 جزء في المليون',
        'الميكروبيولوجي: خالي من الإي كولاي والسالمونيلا، عدد البكتيريا الكلي ≤ 10,000 cfu/g',
        'نطاق المش: 40، 60، 80، 100 (ASTM)'
      ],
      documents: [
        'شهادة تحليل (COA) مطابقة لدساتير الأدوية (USP / EP / IP) عند الطلب',
        'تقرير اختبار معتمد من مختبر NABL التابع لطرف ثالث',
        'شهادة منشأ (ولاية غوجارات، الهند)',
        'شهادة صحة نباتية',
        'شهادة أو إعلان حلال / كوشر متوفر عند الطلب'
      ],
      buyerNote: 'يرجى إعلامنا بمتعلبات دستور الأدوية الخاص بكم، السوق المستهدف، وحجم المش المفضل. سنرسل لكم شهادة COA نموذجية مطابقة ونؤكد توافر الدرجة المطلوبة قبل الطلب.'
    },
    'food-beverage-bakery': {
      name: 'الأغذية والمشروبات والمخبوزات',
      headline: 'بودرة وقشور السيليوم للمخبوزات الخالية من الغلوتين، حبوب الإفطار، خلطات المشروبات، والتكثيف النظيف.',
      proof: [
        'حجم المش مخصص ومطابق للتطبيق المطلوب',
        'شحنات عضوية متوفرة مع مستندات NOP / EU العضوية',
        'إعلان مسببات الحساسية من الدرجة الغذائية متضمن'
      ],
      useCases: [
        {
          title: 'الخبز والمعجنات الخالية من الغلوتين',
          body: 'بودرة 80-100 مش بنقاء 95-98% توفر خصائص ربط الماء وبناء قوام العجين كبديل للغلوتين في دقيق الأرز ونشا الذرة. نسبة الاستخدام المعتادة 1-3% من وزن الدقيق.'
        },
        {
          title: 'خلطات وبودرة المشروبات الوظيفية',
          body: 'بودرة ناعمة 100-200 مش سريعة الذوبان بدون تكتل في بودرة المشروبات المدعمة بالألياف، بدائل الوجبات، ومخفوق البروتين. الدرجات ذات حجم الانتفاخ الأقل (85-95%) تقلل اللزوجة.'
        },
        {
          title: 'حبوب الإفطار وألواح الجرانولا الغنية بالألياف',
          body: 'تستخدم القشور الكاملة والبودرة الخشنة (40-60 مش) في حبوب الإفطار، ألواح الجرانولا، والموسلي لزيادة محتوى الألياف القابلة للذوبان بشكل ملحوظ.'
        },
        {
          title: 'التكثيف والتثبيت النظيف (Clean Label)',
          body: 'تعتبر بودرة قشور السيليوم بديلاً طبيعيًا نظيفًا للميثيل سليلوز وصمغ الزانثان في الصلصات، التتبيلات، والوجبات الجاهزة لتوفير قوام متسق.'
        }
      ],
      keySpecs: [
        'نقاء 95-98% للتطبيقات الغذائية القياسية',
        'نقاء 85% لتدعيم الألياف بأسعار اقتصادية كفؤة',
        'المش: 80-100 للمخبوزات، 100-200 للمشروبات، 40-60 لحبوب الإفطار',
        'الرطوبة ≤ 10% لضمان سلامة الأغذية وسهولة التداول والاستقرار',
        'عضوي معتمد: NOP (أمريكا) و EU (أوروبا)، مع توفير شهادة المعاملة لكل شحنة',
        'خالي من مسببات الحساسية (صناعة خالية تماماً من الغلوتين، المكسرات، الصويا، ومنتجات الألبان)'
      ],
      documents: [
        'شهادة تحليل (COA) متضمنة الفحص الميكروبيولوجي الغذائي الكامل',
        'إعلان خالي من مسببات الحساسية والمعدلات الوراثية (Non-GMO)',
        'شهادة منشأ',
        'شهادة معاملة عضوية (NOP / EU) للشحنات العضوية فقط',
        'شهادة صحة نباتية'
      ],
      buyerNote: 'شاركونا تطبيقكم المستهدف، حجم الطلب، ومتطلبات الملصق الغذائي. سنوصي بالدرجة والمش المناسبين، ويسعدنا إرسال عينة اختبار مجانية مع شهادة COA قبل تأكيد الطلب التجاري.'
    },
    'animal-feed': {
      name: 'تغذية الحيوانات والأعلاف',
      headline: 'بودرة الكخا كخا وأعلاف الماشية لمصانع الأعلاف، الموزعين، وقنوات الثروة الحيوانية.',
      proof: [
        'خيارات التعبئة: أكياس 25 كجم / 50 كجم أو أكياس جامبو 1000 كجم',
        'شهادة COA مخصصة للأعلاف توضح نسب الألياف الخام والبروتين',
        'قوالب أعلاف الماشية المضغوطة Sagar Gola / Sagar Lali متوفرة'
      ],
      useCases: [
        {
          title: 'تركيبات الأعلاف المركبة',
          body: 'تعتبر بودرة كخا كخا السيليوم مصدرًا غنيًا واقتصاديًا للألياف القابلة للذوبان ورابطًا طبيعيًا في حبيبات أعلاف المجترات، الدواجن، والخيول.'
        },
        {
          title: 'الوقاية من مغص الرمل للخيول',
          body: 'تضاف القشور الخشنة والبودرة في مكملات الخيول للمساعدة في ربط وإخراج الرمال المتراكمة في الجهاز الهضمي لمنع المغص الرملي.'
        },
        {
          title: 'تغذية وتدعيم الماشية المدرة للحليب',
          body: 'توريد قوالب أعلاف Sagar Gola المضغوطة وأعلاف Sagar Lali مباشرة للمزارع لتحسين جودة ونسبة دسم الحليب وتدعيم الهضم.'
        },
        {
          title: 'الألياف الغذائية في أطعمة الحيوانات الأليفة (Pet Food)',
          body: 'تدمج بودرة السيليوم النظيفة ميكانيكياً في تركيبات طعام القطط والكلاب للمساعدة في التخلص من كرات الشعر وتنظيم قوام البراز.'
        }
      ],
      keySpecs: [
        'ألياف خام: 30-40% (درجة كخا كخا القياسية)',
        'بروتين خام: 8-12% لدعم القيمة الغذائية للأعلاف',
        'الرطوبة ≤ 12% لضمان التخزين الطويل والآمن في الصوامع',
        'أصل نباتي 100% بدون أي إضافات كيميائية أو مواد حافظة',
        'التعبئة: أكياس منسوجة 50 كجم أو أكياس جامبو طن واحد (1,000 كجم)'
      ],
      documents: [
        'شهادة تحليل (COA) مطابقة لمعايير فحص أعلاف الحيوان',
        'شهادة منشأ (منطقة سيدهبور، ولاية غوجارات، الهند)',
        'شهادة صحة نباتية رسمية من الحكومة الهندية',
        'شهادة تبخير وتقارير مراقبة الشحن والتحميل'
      ],
      buyerNote: 'يرجى إعلامنا بالشكل المفضل للأعلاف (قوالب مضغوطة أو بودرة سائبة)، ميناء الوصول، وحجم السحب السنوي. وسنقدم لكم أسعاراً تنافسية للغاية FOB أو CIF.'
    },
    'industrial-personal-care': {
      name: 'التطبيقات الصناعية والعناية الشخصية',
      headline: 'بودرة السيليوم الصناعية وبودرة الكخا للتكثيف، الربط، حفظ الرطوبة، والتطبيقات الماصة.',
      proof: [
        'بودرة درجة مستحضرات التجميل 200 مش متوفرة',
        'أحجام وتوزيعات مش مخصصة حسب الطلب',
        'ورقة البيانات الفنية (TDS) متضمنة مع كل دفعة'
      ],
      useCases: [
        {
          title: 'عامل تكثيف طبيعي لمستحضرات التجميل',
          body: 'تستخدم بودرة السيليوم 200 مش كعامل جل وتشكيل طبقة واقية في أقنعة الوجه والكريمات. تشكل لزوجة واضحة وخالية من التهيج بنسب استخدام منخفضة (0.5-2%).'
        },
        {
          title: 'تثبيت التربة والمشاريع الزراعية',
          body: 'تستخدم بودرة كخا كخا السيليوم في مشاريع مكافحة التعرية، تثبيت التربة، وحفظ رطوبة الأراضي الرملية بشكل مضاعف بفضل أليافها الماصة.'
        },
        {
          title: 'الربط الحيوي والتكتيل الصناعي',
          body: 'تعمل البودرة كرابط طبيعي فعال في صناعة البخور، الفحم، حبيبات الأسمدة الزراعية، والمنتجات المضغوطة لتقليل استخدام الغراء الصناعي.'
        },
        {
          title: 'المواد الامتصاصية الحيوية',
          body: 'القدرة الفائقة لقشور السيليوم على الامتصاص تجعل البودرة خياراً ممتازاً للمنسوجات الماصة، ضمادات الجروح القابلة للتحلل، وحبيبات حفظ رطوبة البساتين.'
        }
      ],
      keySpecs: [
        '200 مش: مناسب لتركيبات مستحضرات التجميل والعناية الشخصية',
        '40-100 مش: مناسب للمواد الرابطة الصناعية ومكافحة التعرية والزراعة',
        'حجم الانتفاخ: 40-50 مل/جم بنقاء 95%',
        'الرطوبة ≤ 10% لمنع التكتل وضمان تدفق المواد بسلاسة في التصنيع',
        'أسعار تجارية مخصصة للطلبيات الكبيرة تبدأ من 1 طن (MT)'
      ],
      documents: [
        'ورقة البيانات الفنية (TDS) توضح نطاقات المواصفات لكل دفعة',
        'شهادة تحليل (COA)',
        'شهادة منشأ',
        'ورقة مواصفات فنية موقعة ومعتمدة حسب متطلبات المشتري'
      ],
      buyerNote: 'تتطلب التطبيقات الصناعية والعناية الشخصية في كثير من الأحيان لزوجة أو حجم مش مخصص. شاركونا ورقة مواصفاتكم الفنية وسنقوم بتوفير عينات اختبار مناسبة لكم.'
    }
  },
  nl: {
    'pharma-nutraceutical': {
      name: 'Farmacie & Nutraceuticals',
      headline: 'Premium psylliumvezels en -poeder voor capsules, spijsverteringsproducten, laxeermiddelen en supplementen.',
      proof: [
        'COA met volledig farmaceutisch analysepaneel inbegrepen',
        'Afgestemd op USP / EP / IP farmacopee-parameters',
        'NABL-geaccrediteerde laboratoriumrapporten beschikbaar'
      ],
      useCases: [
        {
          title: 'Laxeercapsules & OTC-zakjes',
          body: '99% pure psylliumvezels met een zwelvolume van ≥50 ml/g voldoen aan de USP- en EP-monografie-eisen voor vrij verkrijgbare laxeermiddelen. Geleverd in 40-60 mesh voor standaard capsulevulling.'
        },
        {
          title: 'Supplementen voor spijsvertering',
          body: 'Hele vezels en 80-mesh poeder gebruikt door loonproducenten voor vezelmengsels, prebiotische zakjes en darmregulerende producten verkocht via apotheken en e-commerce.'
        },
        {
          title: 'Nutraceutische poedermengsels',
          body: '95-98% zuiverheid in 100-mesh kwaliteit dispergeert perfect in functionele poedermengsels voor darmgezondheid, gewichtsbeheersing en microbioomproducten. Laag asgehalte en neutrale smaak zijn cruciaal.'
        },
        {
          title: 'Private label supplementen sourcing',
          body: 'Merken en loonfabrikanten die psyllium van farmaceutische kwaliteit inkopen voor private label referenties vereisen consistente COA-gegevens per batch. Wij leveren NABL-geaccrediteerde rapporten.'
        }
      ],
      keySpecs: [
        '99% zuiverheid: zwelvolume ≥ 50 ml/g (USP / EP / IP)',
        '95-98% zuiverheid beschikbaar voor voedingssupplementen en vezelverrijking',
        'Vocht ≤ 12%, Totaal as ≤ 3%, Zuuronoplosbare as ≤ 0,4%',
        'Zware metalen: Pb ≤ 2 ppm, As ≤ 1 ppm',
        'Microbiologie: E. coli afwezig, Salmonella afwezig, TPC ≤ 10.000 kve/g',
        'Mesh-bereik: 40, 60, 80, 100 (ASTM)'
      ],
      documents: [
        'Certificaat van Analyse (COA) afgestemd op USP / EP / IP op aanvraag',
        'NABL-geaccrediteerd laboratoriumtestrapport',
        'Certificaat van Oorsprong (Gujarat, India)',
        'Fytosanitair certificaat',
        'Halal / Kosher verklaring of certificaat op aanvraag'
      ],
      buyerNote: 'Laat ons weten welke farmacopee-norm, doelmarkt en mesh-grootte u vereist. Wij sturen u een passend voorbeeld-COA en bevestigen de beschikbaarheid van de kwaliteit voor uw bestelling.'
    },
    'food-beverage-bakery': {
      name: 'Voeding, Dranken & Bakkerij',
      headline: 'Psylliumpoeder en -vezels voor glutenvrije bakkerij, granen, drankmengsels en clean-label verdikking.',
      proof: [
        'Mesh-grootte aangepast aan uw toepassing',
        'Biologische batches met NOP- / EU-documentatie',
        'Allergenenverklaring van voedingskwaliteit inbegrepen'
      ],
      useCases: [
        {
          title: 'Glutenvrij brood & banket',
          body: '80-100 mesh poeder met 95-98% zuiverheid biedt de waterbindende en structuurvormende eigenschappen die gluten vervangen in rijstmeel- en maïszetmeeldegen. Typische dosering is 1-3% van het meelgewicht.'
        },
        {
          title: 'Functionele drankmengsels & poeders',
          body: '100-200 mesh fijn poeder dispergeert snel en klontervrij in vezelverrijkte drankpoeders, maaltijdvervangers en eiwitshakes. Lagere zwelkwaliteiten (85-95%) verminderen de viscositeit.'
        },
        {
          title: 'Vezelrijke granen & müslirepen',
          body: 'Hele vezels en grof poeder (40-60 mesh) worden gebruikt in ontbijtgranen en mueslirepen om het gehalte aan oplosbare voedingsvezels te verhogen.'
        },
        {
          title: 'Clean-label verdikking & stabilisatie',
          body: 'Psylliumpoeder is een clean-label alternatief voor methylcellulose en xanthaangom in sauzen, dressings en kant-en-klaarmaaltijden voor stabiele verdikking.'
        }
      ],
      keySpecs: [
        '95-98% zuiverheid voor standaard levensmiddelentoepassingen',
        '85% zuiverheid voor kostenefficiënte vezelverrijking',
        'Mesh: 80-100 voor bakkerij, 100-200 voor dranken, 40-60 voor granen',
        'Vocht ≤ 10% voor voedselveilige verwerking en stabiliteit',
        'Biologisch gecertificeerd: NOP (VS) en EU Biologisch — transactiecertificaat per batch',
        'Allergenenvrij (geen gluten, noten, soja, zuivel in de verwerkingsfaciliteit)'
      ],
      documents: [
        'Certificaat van Analyse (COA) met microbiologisch voedingspaneel',
        'Allergenen- en GGO-vrij verklaring',
        'Certificaat van Oorsprong',
        'Biologisch transactiecertificaat (NOP / EU) — voor biologische batches',
        'Fytosanitair certificaat'
      ],
      buyerNote: 'Laat ons uw toepassing, batchgrootte en etiketteringsclaims weten. Wij adviseren de juiste kwaliteit en mesh-grootte, en sturen graag een monster met COA voor laboratoriumtesten.'
    },
    'animal-feed': {
      name: 'Diervoeding & Veevoer',
      headline: 'Psyllium khakha-poeder en veevoer voor grootverbruikers, distributeurs en veehouderijkanalen.',
      proof: [
        'Verpakkingsopties van 25 kg / 50 kg / 1.000 kg big bags',
        'Feed-grade COA met ruwe celstof en eiwitgehalte',
        'Sagar Gola / Sagar Lali geperste veevoerblokken beschikbaar'
      ],
      useCases: [
        {
          title: 'Formulering van mengvoeder',
          body: 'Psyllium khakha-poeder dient als een kostenefficiënte oplosbare vezelbron en natuurlijk bindmiddel in gepelleteerd voeder voor herkauwers, pluimvee en paarden.'
        },
        {
          title: 'Zandkoliek preventie bij paarden',
          body: 'Grof gemalen vezels en poeder worden toegevoegd aan paardenvoedingssupplementen om de uitscheiding van opgehoopt zand in de darmen te ondersteunen.'
        },
        {
          title: 'Aanvulling voor melkvee',
          body: 'Geperste Sagar Gola blokken en losse Sagar Lali mengsels worden rechtstreeks geleverd aan melkveebedrijven ter verbetering van het melkvetgehalte en de vertering.'
        },
        {
          title: 'Voedingsvezels in diervoeding (petfood)',
          body: 'Mechanisch gereinigd psylliumpoeder wordt opgenomen in droge honden- en kattenvoerformuleringen voor haarbalbeheersing en stevige ontlasting.'
        }
      ],
      keySpecs: [
        'Ruwe celstof: 30-40% (khakha-kwaliteit)',
        'Ruw eiwit: 8-12% ter ondersteuning van het voerrantsoen',
        'Vocht ≤ 12% voor veilige langdurige opslag in silo\'s',
        '100% plantaardige oorsprong, vrij van chemische additieven',
        'Verpakking in 50 kg PP-zakken of 1.000 kg jumbo big bags'
      ],
      documents: [
        'Certificaat van Analyse (COA) gericht op diervoederparameters',
        'Certificaat van Oorsprong (Siddhpur, Gujarat)',
        'Fytosanitair certificaat van het exportland',
        'Begassings- en laadsupervisierapporten'
      ],
      buyerNote: 'Laat ons weten welk formaat u verkiest (blokken of los poeder), de bestemmingshaven en uw afnamehoeveelheid. Wij maken graag een FOB of CIF offerte op maat.'
    },
    'industrial-personal-care': {
      name: 'Industrie & Persoonlijke Verzorging',
      headline: 'Psylliumpoeder en -khakha voor verdikking, binding, vochtretentie en absorberende toepappen.',
      proof: [
        'Cosmetische kwaliteit 200-mesh poeder beschikbaar',
        'Specifieke mesh-grootten op aanvraag',
        'Technical Data Sheet (TDS) meegeleverd per batch'
      ],
      useCases: [
        {
          title: 'Natuurlijk verdikkingsmiddel in cosmetica',
          body: '200-mesh poeder dient als een natuurlijk geleer- en filmvormend middel in gezichtsmaskers en crèmes. Het vormt een heldere, niet-irriterende gel bij lage doseringen (0,5-2%).'
        },
        {
          title: 'Bodemstabilisatie & horticultuur',
          body: 'Psyllium khakha-poeder wordt gebruikt voor erosiebestrijding en bodemverbetering, omdat het de waterretentiecapaciteit van zandgronden massaal verhoogt.'
        },
        {
          title: 'Industriële bindmiddelen',
          body: 'Psylliumpoeder fungeert als een natuurlijke binder bij het persen van tabletten, wierookstokjes en pellets, wat de behoefte aan synthetische lijm vermindert.'
        },
        {
          title: 'Biologisch afbreekbare absorberende materialen',
          body: 'De hoge zwelcapaciteit van het vezelpoeder maakt het ideaal voor biologisch afbreekbare wondverbanden, absorberende matten en waterabsorberende hortigranulen.'
        }
      ],
      keySpecs: [
        '200 mesh voor cosmetische en persoonlijke verzorgingsformuleringen',
        '40-100 mesh voor industriële bindmiddelen en grondwerken',
        'Zwelvolume: 40-50 ml/g bij 95% zuiverheid',
        'Vocht ≤ 10% om klonteren te voorkomen en soepel te verwerken',
        'Volumeprijzen vanaf 1 ton (1 MT)'
      ],
      documents: [
        'Technical Data Sheet (TDS) met specificatiegrenzen per batch',
        'Certificaat van Analyse (COA)',
        'Certificaat van Oorsprong',
        'Specificatiebevestiging op aanvraag'
      ],
      buyerNote: 'Industriële toepassingen vereisen vaak klantspecifieke zwel- of mesh-profielen. Deel uw specificaties of applicatiedoelen en wij stellen een testbatch samen.'
    }
  },
  de: {
    'pharma-nutraceutical': {
      name: 'Pharma & Nutrazeutika',
      headline: 'Flohsamenschalen und -pulver für Kapseln, Verdauungsgesundheitsprodukte, Abführmittel und Nahrungsergänzungsmittelmischungen.',
      proof: [
        'COA mit vollständigem Pharma-Panel enthalten',
        'Anpassung an USP / EP / IP-Parameter',
        'NABL-akkreditierte Testberichte verfügbar'
      ],
      useCases: [
        {
          title: 'Abführmittelkapseln & OTC-Beutel',
          body: '99% reine Schalen mit einem Quellvolumen von ≥50 ml/g erfüllen die USP- und EP-Monographieanforderungen für rezeptfreie Abführmittelformulierungen. Geliefert in 40–60 Mesh für Standard-Dosierkapselabfüllung.'
        },
        {
          title: 'Nahrungsergänzungsmittel für die Verdauung',
          body: 'Ganze Schalen und 80-Mesh-Pulver, verwendet von Lohnherstellern für Ballaststoffmischungen, präbiotische Beutel und Produkte zur Regulierung der Verdauung.'
        },
        {
          title: 'Nutrazeutische Pulvermischungen',
          body: '95–98% Reinheit in 100-Mesh-Qualität lässt sich sauber in funktionellen Pulvermischungen für die Darmgesundheit, Gewichtsmanagement und Mikrobiomprodukte dispergieren. Niedriger Aschegehalt und neutraler Geschmack sind Hauptkriterien.'
        },
        {
          title: 'Private-Label-Zukauf von Nahrungsergänzungsmitteln',
          body: 'Marken und Lohnhersteller, die Schalen in Pharmaqualität für Private-Label-Produkte beziehen, benötigen konsistente COA-Daten von Charge zu Charge. Wir liefern NABL-akkreditierte Laborberichte.'
        }
      ],
      keySpecs: [
        '99% Reinheit: Quellvolumen ≥ 50 ml/g (USP / EP / IP)',
        '95–98% Reinheit für Nahrungsergänzungsmittel und Lebensmittelballaststoffe verfügbar',
        'Feuchtigkeit ≤ 12%, Gesamtasche ≤ 3%, säureunlösliche Asche ≤ 0,4%',
        'Schwermetalle: Pb ≤ 2 ppm, As ≤ 1 ppm',
        'Mikrobiologie: E. coli abwesend, Salmonellen abwesend, TPC ≤ 10.000 KbE/g',
        'Mesh-Bereich: 40, 60, 80, 100 (ASTM)'
      ],
      documents: [
        'Analysenzertifikat (COA) auf Anfrage nach USP / EP / IP ausgewiesen',
        'NABL-akkreditierter Labortestbericht',
        'Ursprungszeugnis (Gujarat, Indien)',
        'Phytosanitäres Zertifikat',
        'Halal- / Koscher-Erklärung oder -Zertifikat auf Anfrage'
      ],
      buyerNote: 'Teilen Sie uns Ihre Pharmakopöe-Anforderung, Ihren Zielmarkt und Ihre Mesh-Präferenz mit. Wir senden Ihnen vor jeder Bestellung ein passendes Muster-COA und bestätigen die Verfügbarkeit der Qualität.'
    },
    'food-beverage-bakery': {
      name: 'Lebensmittel, Getränke & Backwaren',
      headline: 'Flohsamenpulver und -schalen für glutenfreie Backwaren, Cerealien, Getränkemischungen und Clean-Label-Verdickung.',
      proof: [
        'Maschengröße an Anwendung angepasst',
        'Bio-Chargen mit NOP- / EU-Dokumentation',
        'Lebensmittel-Allergenerklärung enthalten'
      ],
      useCases: [
        {
          title: 'Glutenfreies Brot & Gebäck',
          body: '80–100 Mesh-Pulver mit 95–98% Reinheit bietet die wasserbindenden und strukturbildenden Eigenschaften, die Gluten in Reismehl- und Maisstärketeigen ersetzen. Typische Einsatzmenge 1–3% des Mehlgewichts.'
        },
        {
          title: 'Funktionelle Getränkemischungen & Pulver',
          body: '100–200 Mesh feines Pulver dispergiert schnell und klumpenfrei in ballaststoffangereicherten Getränkepulvern, Mahlzeitenersatz und Proteinshakes.'
        },
        {
          title: 'Ballaststoffreiche Cerealien & Müsliriegel',
          body: 'Ganze Schalen und grobes Pulver (40–60 Mesh) werden in Frühstückscerealien, Müsliriegeln und Müsli verwendet, um den Gehalt an löslichen Ballaststoffen zu erhöhen.'
        },
        {
          title: 'Clean-Label-Verdickung & Stabilisierung',
          body: 'Flohsamenpulver wird als Clean-Label-Alternative zu Methylcellulose und Xanthan in Saucen, Dressings und Fertiggerichten verwendet. Bio-zertifizierte Chargen sind verfügbar.'
        }
      ],
      keySpecs: [
        '95–98% Reinheit für Standard-Lebensmittelanwendungen',
        '85% Reinheit für kostensensible Ballaststoffanreicherung',
        'Mesh: 80–100 für Backwaren, 100–200 für Getränke, 40–60 für Cerealien',
        'Feuchtigkeit ≤ 10% für lebensmittelechte Handhabung',
        'Bio: NOP (USA), EU-Bio — Transaktionszertifikat pro Charge',
        'Allergenfrei (kein Gluten, Nüsse, Soja, Milchprodukte in der Verarbeitung)'
      ],
      documents: [
        'Analysenzertifikat (COA) mit mikrobiologischem Lebensmittel-Panel',
        'Allergen- und GVO-Erklärung',
        'Ursprungszeugnis',
        'Bio-Transaktionszertifikat (NOP / EU) — für Bio-Chargen',
        'Phytosanitäres Zertifikat'
      ],
      buyerNote: 'Nennen Sie uns Ihre Zielanwendung, Chargengröße und Etikettierungsansprüche. Wir empfehlen die richtige Qualität und Maschenweite und senden Ihnen gerne ein Formulierungsmuster mit COA für Labortests vor einer Großbestellung.'
    },
    'animal-feed': {
      name: 'Tiernahrung & Futtermittel',
      headline: 'Flohsamen-Khakha-Pulver und Rinderfutter für Großabnehmer, Händler und Kanäle für Nutztiernahrung.',
      proof: [
        '25 kg / 50 kg / 1.000 kg Verpackungsoptionen',
        'Futtermittel-COA mit Rohfaser- und Proteingehalt',
        'Sagar Gola / Sagar Lali Rinderfutterblöcke verfügbar'
      ],
      useCases: [
        {
          title: 'Formulierung von Mischfutter',
          body: 'Flohsamen-Khakha-Pulver dient als nährstoffreicher Ballaststofflieferant und natürliches Bindemittel in pelletierten Futtermitteln für Wiederkäuer und Geflügel.'
        },
        {
          title: 'Verdauung & Sandkolik-Prävention',
          body: 'Grob gemahlene Schalen werden Pferdefuttermischungen zugesetzt, um die Ausscheidung von aufgenommenem Sand im Darmtrakt zu unterstützen.'
        },
        {
          title: 'Traditionelle Fütterung (Milchvieh)',
          body: 'Komprimierte Futterblöcke (Sagar Gola) und lose Mischungen (Sagar Lali) werden direkt an Milchkühe und Büffel zur Förderung der Milchfettproduktion verfüttert.'
        },
        {
          title: 'Heimtiernahrung & Diätetik',
          body: 'Feines Flohsamenpulver wird in Premium-Hunde- und Katzenfutter zur Regulierung der Verdauung und Stuhlkonstanz eingesetzt.'
        }
      ],
      keySpecs: [
        'Rohfaser: 30–40% (Khakha-Qualität)',
        'Rohprotein: 8–12% zur Unterstützung der Futterration',
        'Feuchtigkeit ≤ 12% für sichere Silolagerung',
        'Frei von chemischen Zusätzen, 100% pflanzlicher Ursprung',
        'Verpackung in 50 kg PP-Säcken oder 1.000 kg Big Bags'
      ],
      documents: [
        'Analysenzertifikat (COA) für Futtermittel',
        'Ursprungszeugnis (Siddhpur, Gujarat)',
        'Phytosanitäres Zertifikat des Exportlandes',
        'Begasungs- und Ladeüberwachungsberichte'
      ],
      buyerNote: 'Teilen Sie uns Ihre gewünschte Lieferform (lose oder gepresst), den Bestimmungshafen und Ihre Abnahmemenge mit. Wir erstellen Ihnen gerne ein passendes FOB- oder CIF-Angebot.'
    },
    'industrial-personal-care': {
      name: 'Industrie & Körperpflege',
      headline: 'Flohsamenpulver und -khakha-Pulver für Verdickung, Bindung, Feuchtigkeitsspeicherung und absorbierende Anwendungen.',
      proof: [
        '200-Mesh-Körperpflegepulver verfügbar',
        'Spezifische Maschenweiten auf Anfrage',
        'Technisches Datenblatt (TDS) pro Charge'
      ],
      useCases: [
        {
          title: 'Verdickungsmittel für Kosmetik',
          body: '200-Mesh-Pulver dient als natürliches Geliermittel und Filmbildner in Gesichtsmasken und Cremes. Es bildet ein klares, reizfreies Gel bei niedrigen Einsatzmengen (0,5–2%).'
        },
        {
          title: 'Bodenstabilisierung & Gartenbau',
          body: 'Flohsamen-Khakha-Pulver wird zur Erosionskontrolle und Bodenverbesserung eingesetzt, da es die Wasserspeicherkapazität sandiger Böden massiv erhöht.'
        },
        {
          title: 'Industrielle Bindemittel',
          body: 'Flohsamenpulver fungiert als natürlicher Binder bei der Herstellung von Tabletten, Räucherstäbchen und Pellets, was den Bedarf an synthetischen Klebstoffen senkt.'
        },
        {
          title: 'Absorbierende Produkte',
          body: 'Dank seines hohen Quellvolumens eignet sich das Pulver hervorragend für biologisch abbaubare Wundauflagen und absorbierende Vliesstoffe.'
        }
      ],
      keySpecs: [
        '200 Mesh für kosmetische Formulierungen',
        '40–100 Mesh für industrielle Bindemittel und Erdarbeiten',
        'Quellvolumen: 40–50 ml/g bei 95% Reinheit',
        'Feuchtigkeit ≤ 10% zur klumpenfreien Verarbeitung',
        'Großabnehmerpreise ab 1 MT'
      ],
      documents: [
        'Technisches Datenblatt (TDS) mit Spezifikationsgrenzen',
        'Analysenzertifikat (COA)',
        'Ursprungszeugnis',
        'Spezifikationsfreigabe vor Versand'
      ],
      buyerNote: 'Industrielle Anwendungen erfordern oft kundenspezifische Quell- oder Maschenprofile. Senden Sie uns Ihr Anforderungsprofil, und wir stellen Ihnen eine passende Testcharge zur Verfügung.'
    }
  },
  es: {
    'pharma-nutraceutical': {
      name: 'Farmacéutica y Nutracéutica',
      headline: 'Cáscara y polvo de psyllium para cápsulas, productos de salud digestiva, laxantes y mezclas de suplementos.',
      proof: [
        'COA con panel farmacéutico completo incluido',
        'Alineación con parámetros USP / EP / IP',
        'Informes de prueba acreditados por NABL disponibles'
      ],
      useCases: [
        {
          title: 'Cápsulas laxantes y sobres OTC',
          body: 'La cáscara de pureza del 99% con un volumen de hinchamiento de ≥50 ml/g cumple con los requisitos de las monografías USP y EP para formulaciones laxantes de venta libre. Suministrado en malla 40–60 para llenado de cápsulas dosificadoras estándar.'
        },
        {
          title: 'Suplementos de salud digestiva',
          body: 'Cáscara entera y polvo de malla 80 utilizados por fabricantes contratados de suplementos para mezclas de fibra, sobres prebióticos y productos de regularidad digestiva vendidos en canales minoristas de salud y comercio electrónico.'
        },
        {
          title: 'Mezclas de polvo nutracéutico',
          body: 'El grado del 95–98% en malla 100 se dispersa limpiamente en mezclas de polvo funcional para la salud intestinal, el control del peso y productos para el microbioma intestinal. El menor contenido de ceniza y el sabor neutro son criterios clave de selección.'
        },
        {
          title: 'Abastecimiento de suplementos de marca blanca',
          body: 'Las marcas y fabricantes contratados que buscan cáscara de grado farmacéutico para referencias de marca blanca requieren datos de COA consistentes lote a lote. Proporcionamos informes de prueba acreditados por NABL y anotamos los COA según la monografía especificada por el comprador.'
        }
      ],
      keySpecs: [
        'Pureza del 99%: volumen de hinchamiento ≥ 50 ml/g (USP / EP / IP)',
        'Pureza del 95–98% disponible para uso como suplemento y fibra alimentaria',
        'Humedad ≤ 12%, Cenizas totales ≤ 3%, Cenizas insolubles en ácido ≤ 0.4%',
        'Metales pesados: Pb ≤ 2 ppm, As ≤ 1 ppm',
        'Microbiología: E. coli ausente, Salmonella ausente, TPC ≤ 10,000 ufc/g',
        'Rango de malla: 40, 60, 80, 100 (ASTM)'
      ],
      documents: [
        'Certificado de análisis (COA) anotado según USP / EP / IP a solicitud',
        'Informe de prueba de laboratorio acreditado por NABL',
        'Certificado de origen (Gujarat, India)',
        'Certificado fitosanitario',
        'Declaración o certificado Halal / Kosher bajo solicitud'
      ],
      buyerNote: 'Comparta su requisito de farmacopea, mercado de destino y preferencia de malla. Le enviaremos un COA de muestra correspondiente y confirmaremos la disponibilidad del grado antes de cualquier pedido de compra.'
    },
    'food-beverage-bakery': {
      name: 'Alimentos, Bebidas y Panadería',
      headline: 'Polvo y cáscara de psyllium para panadería sin gluten, cereales, mezclas de bebidas y espesamiento de etiqueta limpia.',
      proof: [
        'Malla adaptada a la aplicación',
        'Lotes orgánicos con documentación NOP / UE',
        'Declaración de alérgenos de grado alimenticio incluida'
      ],
      useCases: [
        {
          title: 'Pan y pastelería sin gluten',
          body: 'El polvo de malla 80–100 con 95–98% de pureza proporciona las propiedades de unión de agua y formación de estructura que reemplazan al gluten en las masas de harina de arroz y almidón de maíz. Tasa de uso típica de 1–3% del peso de la harina.'
        },
        {
          title: 'Mezclas y polvos para bebidas funcionales',
          body: 'El polvo fino de malla 100–200 se dispersa rápidamente sin formar grumos en polvos de bebidas enriquecidas con fibra, reemplazos de comidas y batidos de proteínas. Los grados de menor volumen de hinchamiento (85–95%) reducen la viscosidad del gel.'
        },
        {
          title: 'Cereales y barras de granola con alto contenido de fibra',
          body: 'Cáscara entera y polvo grueso (malla 40–60) utilizados en cereales para el desayuno, barras de granola y muesli para aumentar el contenido de fibra soluble.'
        },
        {
          title: 'Espesamiento y estabilización de etiqueta limpia',
          body: 'El polvo de cáscara de psyllium se utiliza como una alternativa de etiqueta limpia a la metilcelulosa y la goma xantana en salsas, aderezos y matrices de alimentos preparados.'
        }
      ],
      keySpecs: [
        '95–98% de pureza para aplicaciones alimentarias estándar',
        '85% de pureza para enriquecimiento de fibra sensible al costo',
        'Malla: 80–100 para panadería, 100–200 para mezclas de bebidas, 40–60 para cereales',
        'Humedad ≤ 10% para manejo seguro de alimentos',
        'Orgánico: NOP (EE. UU.), UE Orgánico — certificado de transacción por lote',
        'Libre de alérgenos (sin gluten, nueces, soya, lácteos en el procesamiento)'
      ],
      documents: [
        'Certificado de análisis (COA) con panel microbiológico de grado alimenticio',
        'Declaración de alérgenos y libre de OGM',
        'Certificado de origen',
        'Certificado de transacción orgánica (NOP / UE) — para lotes orgánicos',
        'Certificado fitosanitario'
      ],
      buyerNote: 'Cuéntenos su aplicación objetivo, tamaño de lote y declaración de etiqueta. Le recomendaremos el grado y la malla adecuados, y podemos enviarle una muestra de formulación con COA para pruebas de laboratorio antes de comprometerse con un pedido a granel.'
    },
    'animal-feed': {
      name: 'Nutrición Animal',
      headline: 'Polvo de khakha de psyllium y alimento para ganado para compradores a granel, distribuidores y canales de nutrición ganadera.',
      proof: [
        'Opciones de embalaje de 25 kg / 50 kg / 1,000 kg',
        'COA de grado alimenticio con fibra cruda y proteína',
        'Bloques de alimento para ganado Sagar Gola / Sagar Lali disponibles'
      ],
      useCases: [
        {
          title: 'Formulación de piensos compuestos',
          body: 'El polvo de khakha de psyllium sirve como una fuente rentable de fibra soluble y aglutinante de pellets de pienso para rumiantes, aves de corral y caballos.'
        },
        {
          title: 'Salud digestiva equina',
          body: 'La cáscara de psyllium gruesa y el polvo se utilizan en suplementos equinos para ayudar a eliminar la arena acumulada en el tracto intestinal, previniendo cólicos por arena.'
        },
        {
          title: 'Suplementación de ganado lechero',
          body: 'Los bloques comprimidos de Sagar Gola y las mezclas sueltas de Sagar Lali se suministran directamente a las granjas lecheras de la región para mejorar el rendimiento de la grasa láctea y la salud digestiva del ganado.'
        },
        {
          title: 'Fibra dietética en alimentos para mascotas',
          body: 'El polvo de psyllium limpiado mecánicamente se incorpora a formulaciones secas de alimentos para perros y gatos para el manejo de bolas de pelo y la consistencia de las heces.'
        }
      ],
      keySpecs: [
        'Fibra cruda: 30–40% (grado khakha)',
        'Proteína cruda: 8–12% para soporte nutricional básico',
        'Humedad ≤ 12% para un almacenamiento prolongado en silo',
        'Origen 100% vegetal, sin aditivos químicos ni conservantes',
        'Embalaje en sacos tejidos de 50 kg o bolsas gigantes de 1,000 kg'
      ],
      documents: [
        'Certificado de análisis (COA) enfocado en parámetros de alimentación animal',
        'Certificado de origen (Siddhpur, Gujarat)',
        'Certificado fitosanitario del gobierno de India',
        'Certificado de fumigación y supervisión de carga'
      ],
      buyerNote: 'Indíquenos su formato preferido (bloques comprimidos o polvo suelto), el puerto de destino y su volumen anual esperado. Proporcionaremos cotizaciones competitivas FOB Mundra o CIF.'
    },
    'industrial-personal-care': {
      name: 'Aplicaciones Industriales y Cuidado Personal',
      headline: 'Polvo de psyllium y polvo de khakha para espesar, aglutinar, retener humedad y aplicaciones absorbentes.',
      proof: [
        'Polvo de grado cosmético de malla 200 disponible',
        'Malla y tamaño de partícula personalizados a solicitud',
        'Hoja de datos técnicos (TDS) provista por lote'
      ],
      useCases: [
        {
          title: 'Espesante cosmético y cuidado personal',
          body: 'El polvo de cáscara de psyllium de malla 200 se utiliza como un agente espesante y formador de película natural en mascarillas faciales y cremas. El mucílago forma un gel transparente a bajos niveles de uso (0.5–2%).'
        },
        {
          title: 'Estabilización del suelo y horticultura',
          body: 'El polvo de khakha de psyllium se utiliza en productos de mejora del suelo y control de la erosión. El alto contenido de fibra y mucílago mejora la retención de agua en suelos arenosos.'
        },
        {
          title: 'Aglutinante industrial y aglomeración',
          body: 'El polvo de psyllium sirve como un aglutinante natural en la fabricación de tabletas comprimidas, incienso y pellets agrícolas, reduciendo los requerimientos de aglutinantes sintéticos.'
        },
        {
          title: 'Productos absorbentes y retención de humedad',
          body: 'La alta capacidad de hinchamiento del polvo de cáscara de psyllium lo hace adecuado para almohadillas absorbentes, sustratos para el cuidado de heridas y gránulos hortícolas biodegradables.'
        }
      ],
      keySpecs: [
        'Malla 200 para aplicaciones cosméticas y de cuidado personal',
        'Malla 40–100 para aglutinantes industriales y productos de suelo',
        'Volumen de hinchamiento: 40–50 ml/g con un 95% de pureza',
        'Humedad ≤ 10% para procesos de manejo de polvo limpios',
        'Precios por volumen para pedidos industriales (1 TM+)'
      ],
      documents: [
        'Ficha técnica (TDS) con rangos y límites analíticos por lote',
        'Certificado de análisis (COA)',
        'Certificado de origen',
        'Especificación firmada y validada disponible bajo solicitud'
      ],
      buyerNote: 'Las aplicaciones industriales y de cuidado personal suelen requerir perfiles de malla o viscosidad personalizados. Comparta su hoja de especificaciones o resumen de aplicación y validaremos el ajuste del producto.'
    }
  },
  fr: {
    'pharma-nutraceutical': {
      name: 'Pharmaceutique & Nutraceutique',
      headline: 'Tégument et poudre de psyllium pour gélules, produits de santé digestive, laxatifs et mélanges de suppléments.',
      proof: [
        'COA avec panel pharmaceutique complet inclus',
        'Alignement sur les spécifications USP / EP / IP',
        'Rapports d\'essais accrédités par la NABL disponibles'
      ],
      useCases: [
        {
          title: 'Gélules laxatives & sachets OTC',
          body: 'Le tégument d\'une pureté de 99% avec un volume de gonflement de ≥50 ml/g répond aux exigences des monographies USP et EP pour les formulations de laxatifs en vente libre. Fourni en maille 40–60 pour le remplissage standard de gélules.'
        },
        {
          title: 'Compléments de santé digestive',
          body: 'Tégument entier et poudre de maille 80 utilisés par les façonniers de suppléments pour les mélanges de fibres, les sachets de prébiotiques et les produits de régularité digestive vendus en pharmacie.'
        },
        {
          title: 'Mélanges de poudres nutraceutiques',
          body: 'La qualité 95–98% en maille 100 se disperse proprement dans les mélanges de poudres fonctionnels pour la santé intestinale, la gestion du poids et le microbiote. Une faible teneur en cendres et un goût neutre sont des critères clés.'
        },
        {
          title: 'Sourcing de suppléments en marque blanche',
          body: 'Les marques et fabricants à façon qui sourcent du psyllium de qualité pharmaceutique exigent des données COA constantes d\'un lot à l\'autre. Nous fournissons des rapports accrédités et annotons les COA selon la monographie de l\'acheteur.'
        }
      ],
      keySpecs: [
        'Pureté 99% : volume de gonflement ≥ 50 ml/g (USP / EP / IP)',
        'Pureté 95–98% disponible pour les suppléments et la fibre alimentaire',
        'Humidité ≤ 12%, Cendres totales ≤ 3%, Cendres insolubles dans l\'acide ≤ 0,4%',
        'Métaux lourds : Pb ≤ 2 ppm, As ≤ 1 ppm',
        'Microbiologie : E. coli absent, Salmonelle absente, TPC ≤ 10 000 ufc/g',
        'Gamme de mailles : 40, 60, 80, 100 (ASTM)'
      ],
      documents: [
        'Certificat d\'analyse (COA) annoté USP / EP / IP sur demande',
        'Rapport d\'essai de laboratoire accrédité par la NABL',
        'Certificat d\'origine (Gujarat, Inde)',
        'Certificat phytosanitaire',
        'Déclaration ou certificat Halal / Kosher sur demande'
      ],
      buyerNote: 'Partagez vos exigences de pharmacopée, votre marché cible et votre préférence de maille. Nous vous enverrons un modèle de COA correspondant et confirmerons la disponibilité de la qualité avant toute commande.'
    },
    'food-beverage-bakery': {
      name: 'Alimentation, Boissons & Boulangerie',
      headline: 'Poudre et tégument de psyllium pour la boulangerie sans gluten, les céréales, les mélanges pour boissons et l\'épaississement clean-label.',
      proof: [
        'Maille adaptée à l\'application',
        'Lots biologiques avec documentation NOP / UE',
        'Déclaration d\'allergènes de qualité alimentaire incluse'
      ],
      useCases: [
        {
          title: 'Pain & pâtisserie sans gluten',
          body: 'La poudre de maille 80–100 à une pureté de 95–98% offre les propriétés de liaison de l\'eau et de formation de structure qui remplacent le gluten dans les pâtes à base de farine de riz et d\'amidon de maïs. Utilisation typique de 1–3% du poids de la farine.'
        },
        {
          title: 'Mélanges pour boissons fonctionnelles',
          body: 'La poudre fine de maille 100–200 se disperse rapidement sans grumeaux dans les boissons enrichies en fibres, les substituts de repas et les shakes protéinés.'
        },
        {
          title: 'Céréales & barres de granola riches en fibres',
          body: 'Tégument entier et poudre grossière (maille 40–60) utilisés dans les céréales de petit-déjeuner et les barres de granola pour augmenter la teneur en fibres solubles.'
        },
        {
          title: 'Épaississement & stabilisation clean-label',
          body: 'La poudre de psyllium est utilisée comme alternative clean-label à la méthylcellulose et à la gomme xanthane dans les sauces, vinaigrettes et préparations alimentaires.'
        }
      ],
      keySpecs: [
        'Pureté 95–98% pour les applications alimentaires standard',
        'Pureté 85% pour l\'enrichissement en fibres à coût sensible',
        'Maille : 80–100 pour la boulangerie, 100–200 pour les boissons, 40–60 pour les céréales',
        'Humidité ≤ 10% pour une manipulation alimentaire sûre',
        'Biologique : NOP (USA), UE Bio — certificat de transaction par lot',
        'Sans allergènes (sans gluten, fruits à coque, soja, produits laitiers dans l\'usine)'
      ],
      documents: [
        'Certificat d\'analyse (COA) avec panel microbiologique de qualité alimentaire',
        'Déclaration d\'allergènes et sans OGM',
        'Certificat d\'origine',
        'Certificat de transaction biologique (NOP / UE) — pour les lots bio',
        'Certificat phytosanitaire'
      ],
      buyerNote: 'Décrivez-nous votre application cible, la taille de vos lots et vos allégations d\'étiquetage. Nous vous recommanderons la qualité et la maille optimales, et enverrons un échantillon de formulation avec COA pour vos tests.'
    },
    'animal-feed': {
      name: 'Nutrition Animale',
      headline: 'Poudre de khakha de psyllium et aliments pour bétail pour les acheteurs en vrac, les distributeurs et les canaux de nutrition animale.',
      proof: [
        'Options d\'emballage de 25 kg / 50 kg / 1 000 kg',
        'COA de qualité alimentation animale avec fibres et protéines brutes',
        'Blocs d\'aliments pour bétail Sagar Gola / Sagar Lali disponibles'
      ],
      useCases: [
        {
          title: 'Formulation d\'aliments composés',
          body: 'La poudre de khakha de psyllium sert de source de fibres solubles et de liant naturel dans les granulés d\'aliments pour ruminants, volailles et chevaux.'
        },
        {
          title: 'Prévention des coliques de sable',
          body: 'Le tégument grossier et la poudre sont intégrés dans les suppléments équins pour aider à l\'évacuation du sable accumulé dans l\'intestin des chevaux.'
        },
        {
          title: 'Complémentation des vaches laitières',
          body: 'Les blocs compressés Sagar Gola et les mélanges en vrac Sagar Lali sont fournis aux fermes laitières pour améliorer le taux de matière grasse du lait.'
        },
        {
          title: 'Fibre diététique pour petfood',
          body: 'La poudre de psyllium nettoyée mécaniquement est incorporée dans les aliments pour chiens et chats pour la gestion des boules de poils.'
        }
      ],
      keySpecs: [
        'Fibres brutes : 30–40% (qualité khakha)',
        'Protéines brutes : 8–12% pour le support nutritionnel de base',
        'Humidité ≤ 12% pour un stockage sûr en silo',
        'Origine 100% végétale, sans additifs chimiques',
        'Emballage en sacs de 50 kg ou big bags de 1 000 kg'
      ],
      documents: [
        'Certificat d\'analyse (COA) axé sur les paramètres d\'alimentation animale',
        'Certificat d\'origine (Siddhpur, Gujarat)',
        'Certificat phytosanitaire officiel indien',
        'Certificat de fumigation et rapports de chargement'
      ],
      buyerNote: 'Faites-nous part de votre format préféré (bloques ou poudre en vrac), du port de destination et de votre volume d\'achat. Nous vous ferons une offre FOB ou CIF sur mesure.'
    },
    'industrial-personal-care': {
      name: 'Applications Industrielles & Soins Personnels',
      headline: 'Poudre de psyllium et poudre de khakha pour l\'épaississement, le liage, la rétention d\'humidité et les applications absorbantes.',
      proof: [
        'Poudre de qualité cosmétique maille 200 disponible',
        'Maille et granulométrie sur mesure sur demande',
        'Fiche de données techniques (TDS) fournie par lot'
      ],
      useCases: [
        {
          title: 'Épaississant cosmétique & soins corporels',
          body: 'La poudre de psyllium de maille 200 est utilisée comme agent gélifiant et filmogène naturel dans les masques de soin et les crèmes. Le mucilage forme un gel transparent à faible dose (0,5–2%).'
        },
        {
          title: 'Stabilisation des sols & horticulture',
          body: 'La poudre de khakha de psyllium est utilisée pour le contrôle de l\'érosion et l\'amendement des sols, car elle améliore fortement la rétention d\'eau.'
        },
        {
          title: 'Agglomérants & liants industriels',
          body: 'Le psyllium sert de liant naturel dans la fabrication de tablettes compressées, d\'encens et de granulés agricoles, réduisant l\'usage de colles synthétiques.'
        },
        {
          title: 'Matériaux absorbants biodégradables',
          body: 'Le fort pouvoir gonflant de la poudre permet son utilisation dans les pansements et compresses absorbants ainsi que pour les granules horticoles.'
        }
      ],
      keySpecs: [
        'Maille 200 pour les applications cosmétiques',
        'Maille 40–100 pour les liants industriels et amendements de sols',
        'Volume de gonflement : 40–50 ml/g à une pureté de 95%',
        'Humidité ≤ 10% pour éviter la formation de grumeaux',
        'Tarifs dégressifs à partir d\'une tonne (1 MT)'
      ],
      documents: [
        'Fiche technique (TDS) avec limites de spécifications par lot',
        'Certificat d\'analyse (COA)',
        'Certificat d\'origine',
        'Validation de spécifications personnalisées disponible sur demande'
      ],
      buyerNote: 'Les applications industrielles requièrent souvent des profils de granulométrie ou de viscosité sur mesure. Partagez votre cahier des charges et nous validerons l\'adéquation du produit.'
    }
  },
  it: {
    'pharma-nutraceutical': {
      name: 'Farmaceutico e Nutraceutico',
      headline: 'Cuticola e polvere di psillio per capsule, prodotti per la salute digestiva, lassativi e miscele di integratori.',
      proof: [
        'COA con pannello farmaceutico completo incluso',
        'Allineamento con parametri USP / EP / IP',
        'Rapporti di prova accreditati da NABL disponibili'
      ],
      useCases: [
        {
          title: 'Capsule lassative e bustine OTC',
          body: 'La cuticola pura al 99% con un volume di rigonfiamento ≥50 ml/g soddisfa i requisiti USP ed EP per le formulazioni lassative da banco. Fornita in mesh 40–60 per il riempimento standard delle capsule.'
        },
        {
          title: 'Integratori per il benessere digestivo',
          body: 'Cuticola intera e polvere a 80 mesh utilizzate dai produttori di integratori per miscele di fibre, bustine prebiotiche e prodotti per la regolarità intestinale venduti in farmacia ed e-commerce.'
        },
        {
          title: 'Miscele di polveri nutraceutiche',
          body: 'Il grado al 95–98% in mesh 100 si disperde in modo pulito in miscele di polveri per la salute intestinale, il controllo del peso e il microbioma. Basso contenuto di ceneri e sapore neutro.'
        },
        {
          title: 'Fornitura di integratori a marchio privato',
          body: 'I marchi e i produttori che acquistano psillio di grado farmaceutico per prodotti private-label richiedono dati COA costanti. Forniamo rapporti NABL e annotiamo i COA in base alle monografie richieste.'
        }
      ],
      keySpecs: [
        'Purezza 99%: volume di rigonfiamento ≥ 50 ml/g (USP / EP / IP)',
        'Purezza 95–98% disponibile per integratori e fibre alimentari',
        'Umidità ≤ 12%, Ceneri totali ≤ 3%, Ceneri insolubili in acido ≤ 0,4%',
        'Metalli pesanti: Pb ≤ 2 ppm, As ≤ 1 ppm',
        'Microbiologia: E. coli assente, Salmonella assente, TPC ≤ 10.000 ufc/g',
        'Gamma mesh: 40, 60, 80, 100 (ASTM)'
      ],
      documents: [
        'Certificato di analisi (COA) annotato USP / EP / IP su richiesta',
        'Rapporto di prova di laboratorio accreditato NABL',
        'Certificato di origine (Gujarat, India)',
        'Certificato fitosanitario',
        'Dichiarazione o certificato Halal / Kosher su richiesta'
      ],
      buyerNote: 'Condividi il tuo requisito farmacopeico, il mercato di destinazione e la preferenza di mesh. Ti invieremo un COA di esempio e confermeremo la disponibilità del grado prima di qualsiasi ordine.'
    },
    'food-beverage-bakery': {
      name: 'Alimentare, Bevande & Panificazione',
      headline: 'Polvere e cuticola di psillio per panificazione senza glutine, cereali, preparati per bevande e addensamento clean-label.',
      proof: [
        'Mesh adatto all\'applicazione',
        'Lotti biologici con documentazione NOP / UE',
        'Dichiarazione allergeni alimentare inclusa'
      ],
      useCases: [
        {
          title: 'Pane e pasticceria senza glutine',
          body: 'La polvere a 80–100 mesh con purezza al 95–98% fornisce le proprietà leganti e strutturanti dell\'acqua che sostituiscono il glutine negli impasti di riso e mais. Tasso d\'uso tipico 1–3% del peso.'
        },
        {
          title: 'Preparati per bevande funzionali',
          body: 'La polvere fine a 100–200 mesh si disperde rapidamente senza grumi in polveri per bevande arricchite con fibre, pasti sostitutivi e frullati proteici.'
        },
        {
          title: 'Cereali & barrette di granola ricchi di fibre',
          body: 'Cuticola intera e polvere grossolana (mesh 40–60) utilizzate nei cereali per la colazione e nelle barrette per aumentare il contenuto di fibre solubili.'
        },
        {
          title: 'Addensamento & stabilizzazione clean-label',
          body: 'La polvere di psillio è utilizzata come alternativa pulita a metilcellulosa e gomma xantana in salse, condimenti e preparazioni pronte.'
        }
      ],
      keySpecs: [
        'Purezza 95–98% per applicazioni alimentari standard',
        'Purezza 85% per arricchimento in fibre economico',
        'Mesh: 80–100 per panificazione, 100–200 per bevande, 40–60 per cereali',
        'Umidità ≤ 10% per un\'ottimale conservabilità alimentare',
        'Biologico: NOP (USA), UE Biologico — certificato di transazione per lotto',
        'Allergen-free (senza glutine, frutta a guscio, soia o latticini nello stabilimento)'
      ],
      documents: [
        'Certificato di analisi (COA) con pannello microbiologico alimentare',
        'Dichiarazione allergeni e NO OGM',
        'Certificato di origine',
        'Certificato di transazione biologica (NOP / UE) — per lotti bio',
        'Certificato fitosanitario'
      ],
      buyerNote: 'Indicaci l\'applicazione, la dimensione del lotto e le diciture in etichetta. Ti consiglieremo il grado e il mesh ideali e invieremo un campione di formulazione con COA per i test.'
    },
    'animal-feed': {
      name: 'Alimentazione Animale',
      headline: 'Polvere di khakha di psillio e mangime per bestiame per acquirenti all\'ingrosso, distributori e canali di nutrizione zootecnica.',
      proof: [
        'Opzioni di confezionamento da 25 kg / 50 kg / 1.000 kg',
        'COA per mangimi con fibre grezze e proteine',
        'Blocchi di mangime Sagar Gola / Sagar Lali disponibili'
      ],
      useCases: [
        {
          title: 'Formulazione di mangimi composti',
          body: 'La polvere di khakha di psillio funge da fonte di fibre solubili e da legante naturale nei pellet per bovini, polli e cavalli.'
        },
        {
          title: 'Salute gastrointestinale equina',
          body: 'Lo psillio a mesh grossolana viene aggiunto ai mangimi dei cavalli per facilitare l\'eliminazione della sabbia accumulata nell\'intestino.'
        },
        {
          title: 'Integrazione per vacche da latte',
          body: 'I blocchi pressati Sagar Gola e le miscele sfuse Sagar Lali vengono forniti direttamente agli allevamenti per migliorare la resa del grasso nel latte.'
        },
        {
          title: 'Alimenti per animali domestici (petfood)',
          body: 'La polvere di psillio purificata viene inserita nelle ricette di crocchette per cani e gatti per facilitare il transito delle palle di pelo.'
        }
      ],
      keySpecs: [
        'Fibre grezze: 30–40% (qualità khakha)',
        'Proteine grezze: 8–12% a supporto del razionamento',
        'Umidità ≤ 12% per una conservazione sicura nei silos',
        'Origine 100% vegetale, senza additivi chimici',
        'Confezionamento in sacchi da 50 kg o big bag da 1.000 kg'
      ],
      documents: [
        'Certificato di analisi (COA) specifico per alimentazione animale',
        'Certificato di origine (Siddhpur, Gujarat)',
        'Certificato fitosanitario ufficiale indiano',
        'Certificato di fumigazione e rapporti di stivaggio'
      ],
      buyerNote: 'Condividi il formato desiderato (blocchi pressati o polvere sfusa), il porto di destinazione e il volume d\'acquisto. Elaboreremo un\'offerta FOB o CIF personalizzata.'
    },
    'industrial-personal-care': {
      name: 'Applicazioni Industriali & Cura della Persona',
      headline: 'Polvere di psillio e polvere di khakha per addensamento, legante, ritenzione di umidità e applicazioni assorbenti.',
      proof: [
        'Polvere di grado cosmetico mesh 200 disponibile',
        'Mesh e granulometrie personalizzate su richiesta',
        'Scheda tecnica (TDS) fornita per ogni lotto'
      ],
      useCases: [
        {
          title: 'Addensante cosmetico e cura personale',
          body: 'La polvere a 200 mesh è usata come agente gelificante e filmogeno naturale in maschere viso e creme. Il mucillagine forma un gel trasparente a basse dosi (0,5–2%).'
        },
        {
          title: 'Stabilizzazione dei suoli & orticoltura',
          body: 'La polvere di khakha è impiegata per il controllo dell\'erosione e l\'ammendamento dei suoli arenosi, aumentandone notevolmente la ritenzione idrica.'
        },
        {
          title: 'Leganti e collanti industriali',
          body: 'Lo psillio funge da legante naturale nella pressatura di tavolette, incensi e pellet agricoli, riducendo l\'uso di colle sintetiche.'
        },
        {
          title: 'Materiali assorbenti biodegradabili',
          body: 'L\'alto potere rigonfiante rende la polvere ideale per medicazioni e garze assorbenti, nonché per granuli horticoli a rilascio d\'acqua.'
        }
      ],
      keySpecs: [
        'Mesh 200 per formulazioni cosmetiche',
        'Mesh 40–100 per leganti industriali e opere stradali/agricole',
        'Volume di rigonfiamento: 40–50 ml/g a purezza 95%',
        'Umidità ≤ 10% per evitare la formazione di grumi',
        'Tariffe all\'ingrosso a partire da 1 tonnellata (1 MT)'
      ],
      documents: [
        'Scheda tecnica (TDS) con limiti di specifica per lotto',
        'Certificato di analisi (COA)',
        'Certificato di origine',
        'Approvazione di specifiche custom su richiesta'
      ],
      buyerNote: 'Le applicazioni industriali richiedono spesso mesh o profili di viscosità su misura. Condividi il tuo capitolato tecnico e provvederemo a preparare un campione di test.'
    }
  },
  pt: {
    'pharma-nutraceutical': {
      name: 'Farmacêutico e Nutracêutico',
      headline: 'Casca e pó de psyllium para cápsulas, produtos de saúde digestiva, laxantes e misturas de suplementos.',
      proof: [
        'COA com painel farmacêutico completo incluído',
        'Alinhamento com parâmetros USP / EP / IP',
        'Relatórios de teste credenciados pela NABL disponíveis'
      ],
      useCases: [
        {
          title: 'Cápsulas laxantes e saquetas OTC',
          body: 'A casca de pureza de 99% com um volume de expansão de ≥50 ml/g atende aos requisitos das monografias USP e EP para formulações laxativas de venda livre. Fornecido em malha 40–60 para enchimento de cápsulas.'
        },
        {
          title: 'Suplementos de saúde digestiva',
          body: 'Casca inteira e pó de malha 80 usados por fabricantes contratados de suplementos para misturas de fibras, saquetas prebióticas e produtos de regularidade digestiva.'
        },
        {
          title: 'Misturas de pós nutracêuticos',
          body: 'A qualidade de 95–98% em malha 100 dispersa-se de forma limpa em misturas de pós funcionais para a saúde intestinal, gestão de peso e microbioma. Baixo teor de cinzas e sabor neutro.'
        },
        {
          title: 'Sourcing de suplementos em marca própria',
          body: 'Marcas e fabricantes contratados que buscam casca de grau farmacêutico para private-label exigem dados de COA consistentes lote a lote. Fornecemos relatórios NABL e anotamos os COAs conforme a monografia.'
        }
      ],
      keySpecs: [
        'Pureza de 99%: volume de expansão ≥ 50 ml/g (USP / EP / IP)',
        'Pureza de 95–98% disponível para uso como suplemento e fibra alimentar',
        'Umidade ≤ 12%, Cinzas totais ≤ 3%, Cinzas insolúveis em ácido ≤ 0,4%',
        'Metais pesados: Pb ≤ 2 ppm, As ≤ 1 ppm',
        'Microbiologia: E. coli ausente, Salmonella ausente, TPC ≤ 10.000 ufc/g',
        'Gama de malhas: 40, 60, 80, 100 (ASTM)'
      ],
      documents: [
        'Certificado de análise (COA) anotado USP / EP / IP sob solicitação',
        'Relatório de teste de laboratório credenciado pela NABL',
        'Certificado de origem (Gujarat, Índia)',
        'Certificado fitossanitário',
        'Declaração ou certificado Halal / Kosher sob solicitação'
      ],
      buyerNote: 'Compartilhe seus requisitos de farmacopeia, mercado de destino e preferência de malha. Enviaremos um COA de amostra correspondente e confirmaremos a disponibilidade do grau antes de qualquer pedido.'
    },
    'food-beverage-bakery': {
      name: 'Alimentos, Bebidas e Panificação',
      headline: 'Pó e casca de psyllium para panificação sem glúten, cereais, misturas de bebidas e espessamento clean-label.',
      proof: [
        'Malha adaptada à aplicação',
        'Lotes orgânicos com documentação NOP / UE',
        'Declaração de alérgenos de grau alimentício incluída'
      ],
      useCases: [
        {
          title: 'Pão e pastelaria sem glúten',
          body: 'O pó de malha 80–100 com 95–98% de pureza fornece as propriedades de retenção de água e formação de estrutura que substituem o glúten em massas de farinha de arroz. Uso típico de 1–3% do peso da farinha.'
        },
        {
          title: 'Misturas e pós para bebidas funcionais',
          body: 'O pó fino de malha 100–200 dispersa-se rapidamente sem formar grumos em pós para bebidas enriquecidas com fibras, substitutos de refeição e batidos de proteínas.'
        },
        {
          title: 'Cereais e barras de granola ricos em fibras',
          body: 'Casca inteira e pó grosso (malha 40–60) usados em cereais de pequeno-almoço e barras para aumentar o teor de fibra solúvel.'
        },
        {
          title: 'Espessamento e estabilização clean-label',
          body: 'O pó de casca de psyllium é usado como alternativa clean-label à metilcelulose e goma xantana em molhos, temperos e alimentos preparados.'
        }
      ],
      keySpecs: [
        '95–98% de pureza para aplicações alimentares padrão',
        '85% de pureza para enriquecimento de fibras sensível ao custo',
        'Malha: 80–100 para panificação, 100–200 para misturas de bebidas, 40–60 para cereais',
        'Umidade ≤ 10% para manuseio seguro de alimentos',
        'Orgânico: NOP (EUA), UE Orgânico — certificado de transação por lote',
        'Livre de alérgenos (sem glúten, nozes, soja ou laticínios no processamento)'
      ],
      documents: [
        'Certificado de análise (COA) com painel microbiológico de grau alimentício',
        'Declaração de alérgenos e livre de OGMs',
        'Certificado de origem',
        'Certificado de transação orgânica (NOP / UE) — para lotes orgânicos',
        'Certificado fitossanitário'
      ],
      buyerNote: 'Diga-nos a sua aplicação, tamanho de lote e declaração de rótulo. Recomendaremos o grau e a malha adequados, e podemos enviar uma amostra de formulação com COA para testes antes de encomendar a granel.'
    },
    'animal-feed': {
      name: 'Nutrição Animal',
      headline: 'Pó de khakha de psyllium e ração animal para compradores a granel, distribuidores e canais de nutrição animal.',
      proof: [
        'Opções de embalagem de 25 kg / 50 kg / 1.000 kg',
        'COA de grau feed com fibra bruta e proteína',
        'Bloques de ração Sagar Gola / Sagar Lali disponíveis'
      ],
      useCases: [
        {
          title: 'Formulação de rações compostas',
          body: 'O pó de khakha de psyllium serve como uma fonte de fibra solúvel e aglutinante natural em pellets de ração para ruminantes, aves e cavalos.'
        },
        {
          title: 'Saúde digestiva equina',
          body: 'A casca de psyllium grossa é usada em suplementos equinos para ajudar a remover a areia acumulada no trato intestinal dos animais.'
        },
        {
          title: 'Suplementação de gado leiteiro',
          body: 'Os blocos comprimidos Sagar Gola e misturas Sagar Lali são fornecidos diretamente às fazendas para melhorar o teor de gordura no leite.'
        },
        {
          title: 'Fibra dietética para petfood',
          body: 'O pó de psyllium limpo mecanicamente é incorporado em rações para cães e gatos para a gestão de bolas de pelo.'
        }
      ],
      keySpecs: [
        'Fibra bruta: 30–40% (grau khakha)',
        'Proteína bruta: 8–12% para suporte nutricional básico',
        'Umidade ≤ 12% para armazenamento seguro em silos',
        'Origem 100% vegetal, sem aditivos químicos',
        'Embalagem em sacos de 50 kg ou big bags de 1.000 kg'
      ],
      documents: [
        'Certificado de análise (COA) focado em nutrição animal',
        'Certificado de origem (Siddhpur, Gujarat)',
        'Certificado fitossanitário oficial do governo indiano',
        'Certificado de fumigação e relatórios de carregamento'
      ],
      buyerNote: 'Informe-nos sobre o formato preferido (blocos ou pó solto), o porto de destino e o volume de compra. Faremos uma proposta FOB ou CIF personalizada.'
    },
    'industrial-personal-care': {
      name: 'Aplicações Industriais e Cuidados Pessoais',
      headline: 'Pó de psyllium e pó de khakha para espessamento, aglutinação, retenção de umidade e aplicações absorventes.',
      proof: [
        'Pó de grau cosmético de malha 200 disponível',
        'Malhas e tamanhos de partículas sob encomenda',
        'Ficha de dados técnicos (TDS) fornecida por lote'
      ],
      useCases: [
        {
          title: 'Espessante cosmético e cuidados corporais',
          body: 'O pó de psyllium de malha 200 é usado como agente gelficante e filmógeno natural em máscaras faciais e cremes, formando um gel transparente a baixas dosagens (0,5–2%).'
        },
        {
          title: 'Estabilização de solos & horticultura',
          body: 'O pó de khakha de psyllium é usado em produtos para controle de erosão e melhoria de solos, elevando a retenção de água em solos arenosos.'
        },
        {
          title: 'Aglutinante industrial e peletização',
          body: 'O psyllium atua como ligante natural no fabrico de pastilhas, incensos e pellets agrícolas, reduzindo o uso de colas sintéticas.'
        },
        {
          title: 'Materiais absorventes biodegradáveis',
          body: 'A alta capacidade de expansão do pó torna-o ideal para curativos cirúrgicos e granulados agrícolas de liberação de água.'
        }
      ],
      keySpecs: [
        'Malha 200 para formulações cosméticas',
        'Malha 40–100 para aglutinantes industriais e obras de terra',
        'Volume de expansão: 40–50 ml/g a 95% de pureza',
        'Umidade ≤ 10% para evitar a formação de grumos',
        'Preços por atacado a partir de 1 tonelada (1 MT)'
      ],
      documents: [
        'Ficha técnica (TDS) com limites analíticos por lote',
        'Certificado de análise (COA)',
        'Certificado de origem',
        'Aprovação de especificações customizadas sob solicitação'
      ],
      buyerNote: 'As aplicações industriais requerem frequentemente malhas ou perfis de viscosidade personalizados. Envie-nos a sua especificação e providenciaremos amostras para testes.'
    }
  },
  ru: {
    'pharma-nutraceutical': {
      name: 'Фармацевтика и нутрицевтика',
      headline: 'Шелуха и порошок подорожника для капсул, средств для улучшения пищеварения, слабительных средств и смесей биологически активных добавок.',
      proof: [
        'Сертификат анализа (COA) с полным фармацевтическим профилем включен',
        'Соответствие спецификациям USP / EP / IP',
        'Доступны протоколы испытаний аккредитованной NABL лаборатории'
      ],
      useCases: [
        {
          title: 'Капсулы со слабительным и саше без рецепта',
          body: 'Шелуха чистотой 99% с объемом набухания ≥50 мл/г соответствует требованиям монографий USP и EP для безрецептурных слабительных препаратов. Поставляется фракцией 40–60 меш для стандартного наполнения капсул.'
        },
        {
          title: 'Добавки для здоровья пищеварительной системы',
          body: 'Цельная шелуха и порошок 80 меш, используемые контрактными производителями добавок для смесей клетчатки, пребиотических саше и продуктов регулярности.'
        },
        {
          title: 'Нутрицевтические порошковые смеси',
          body: 'Сорт 95–98% чистоты фракции 100 меш чисто диспергируется в функциональных смесях для здоровья кишечника, контроля веса и продуктов микробиома кишечника. Меньшая зольность и нейтральный вкус являются ключевыми критериями.'
        },
        {
          title: 'Поставки пищевых добавок под собственной торговой маркой (Private Label)',
          body: 'Брендам и производителям, закупающим шелуху фарма-класса для линеек СТМ, требуются стабильные данные COA от партии к партии. Мы предоставляем отчеты NABL и оформляем COA в соответствии со спецификацией.'
        }
      ],
      keySpecs: [
        'Чистота 99%: объем набухания ≥ 50 мл/г (USP / EP / IP)',
        'Доступна чистота 95–98% для добавок и пищевых волокон',
        'Влажность ≤ 12%, Общая зола ≤ 3%, Кислотонеосаждаемая зола ≤ 0,4%',
        'Тяжелые металлы: Pb ≤ 2 ppm, As ≤ 1 ppm',
        'Микробиология: E. coli отсутствует, сальмонелла отсутствует, TPC ≤ 10 000 КОЕ/г',
        'Диапазон меш: 40, 60, 80, 100 (ASTM)'
      ],
      documents: [
        'Сертификат анализа (COA) с аннотацией под монографии USP / EP / IP на заказ',
        'Протокол испытаний аккредитованной NABL лаборатории',
        'Сертификат происхождения (Гуджарат, Индия)',
        'Фитосанитарный сертификат',
        'Декларация или сертификат Халяль / Кошер по запросу'
      ],
      buyerNote: 'Поделитесь вашими требованиями фармакопеи, целевым рынком и предпочтениями по мешу. Мы вышлем соответствующий образец COA и подтвердим наличие сорта перед заказом.'
    },
    'food-beverage-bakery': {
      name: 'Пищевая промышленность и выпечка',
      headline: 'Порошок и шелуха подорожника для безглютеновой выпечки, сухих завтраков, смесей для напитков и чистой маркировки.',
      proof: [
        'Размер меш адаптирован под ваше применение',
        'Органические партии с документацией NOP / EU',
        'Декларация аллергенов пищевого качества включена'
      ],
      useCases: [
        {
          title: 'Безглютеновый хлеб и выпечка',
          body: 'Порошок 80–100 меш чистотой 95–98% обеспечивает водосвязывающие и структурообразующие свойства, заменяющие глютен в тесте из рисовой муки. Типичная норма ввода 1–3% от веса муки.'
        },
        {
          title: 'Функциональные смеси и порошки для напитков',
          body: 'Тонкий порошок фракции 100–200 меш быстро диспергируется без комков в обогащенных клетчаткой напитках, заменителях пищи и протеиновых коктейлях.'
        },
        {
          title: 'Сухие завтраки и батончики с высоким содержанием клетчатки',
          body: 'Цельная шелуха и грубый порошок (40–60 меш) используются в хлопьях и батончиках-мюсли для повышения содержания растворимых пищевых волокон.'
        },
        {
          title: 'Загустители для чистой маркировки (Clean Label)',
          body: 'Порошок подорожника используется в качестве натуральной альтернативы метилцеллюлозе и ксантановой камеди в соусах, заправках и готовых блюдах.'
        }
      ],
      keySpecs: [
        'Чистота 95–98% для стандартных пищевых применений',
        'Чистота 85% для экономически эффективного обогащения клетчаткой',
        'Меш: 80–100 для выпечки, 100–200 для напитков, 40–60 для хлопьев',
        'Влажность ≤ 10% для безопасной пищевой обработки',
        'Органика: NOP (США), EU Organic — сертификат транзакции на партию',
        'Без аллергенов (в производстве не используются глютен, орехи, соя, молоко)'
      ],
      documents: [
        'Сертификат анализа (COA) с пищевым микробиологическим профилем',
        'Декларация об отсутствии аллергенов и ГМО',
        'Сертификат происхождения',
        'Органический сертификат транзакции (NOP / EU) — для органических лотов',
        'Фитосанитарный сертификат'
      ],
      buyerNote: 'Сообщите нам сферу применения, объем партии и требования к этикетке. Мы порекомендуем сорт и меш, а также вышлем тестовый образец с COA перед оптовым заказом.'
    },
    'animal-feed': {
      name: 'Животноводство и корма',
      headline: 'Порошок кхакха подорожника и корма для скота для оптовых покупателей, дистрибьюторов и каналов животноводства.',
      proof: [
        'Варианты упаковки по 25 кг / 50 кг / 1000 кг',
        'Кормовой COA с показателями сырой клетчатки и протеина',
        'Доступны спрессованные блоки Sagar Gola и смеси Sagar Lali'
      ],
      useCases: [
        {
          title: 'Рецептуры комбикормов',
          body: 'Порошок кхакха подорожника служит питательным источником растворимой клетчатки и натуральным связующим в гранулированных кормах для птицы, КРС и лошадей.'
        },
        {
          title: 'Профилактика песчаных колик',
          body: 'Грубая шелуха и порошок добавляются в корма для лошадей для облегчения выведения песка из кишечника.'
        },
        {
          title: 'Кормление молочного скота',
          body: 'Компрессированные блоки Sagar Gola и сухие смеси Sagar Lali поставляются на фермы для повышения жирности молока и поддержания пищеварения коров.'
        },
        {
          title: 'Клетчатка для кормов домашних животных (Petfood)',
          body: 'Механически очищенный порошок подорожника вводится в рационы кошек и собак для выведения шерсти и нормализации стула.'
        }
      ],
      keySpecs: [
        'Сырая клетчатка: 30–40% (сорт кхакха)',
        'Сырой протеин: 8–12% для балансирования рациона',
        'Влажность ≤ 12% для надежного хранения в силосах',
        '100% растительный продукт без химических добавок',
        'Упаковка в мешки по 50 кг или биг-бэги по 1000 кг'
      ],
      documents: [
        'Сертификат анализа (COA) кормового качества',
        'Сертификат происхождения (Сиддхпур, Гуджарат)',
        'Официальный фитосанитарный сертификат Индии',
        'Сертификат фумигации и отчеты о погрузке'
      ],
      buyerNote: 'Укажите желаемую форму (блоки или порошок), порт назначения и годовой объем. Мы предоставим оптимальные условия FOB Mundra или CIF.'
    },
    'industrial-personal-care': {
      name: 'Промышленность и личная гигиена',
      headline: 'Порошок подорожника и порошок кхакха для загущения, связывания, удержания влаги и абсорбирующих применений.',
      proof: [
        'Доступен порошок косметического класса 200 меш',
        'Помол по спецификации заказчика по запросу',
        'Технический паспорт (TDS) предоставляется на партию'
      ],
      useCases: [
        {
          title: 'Загуститель для косметики и гигиены',
          body: 'Порошок подорожника 200 меш используется как натуральный гелеобразователь в масках и кремах, формируя прозрачный гель при вводе 0,5–2%.'
        },
        {
          title: 'Стабилизация почв и садоводство',
          body: 'Порошок кхакха подорожника применяется для борьбы с эрозией почв, значительно повышая удержание влаги песчаными грунтами.'
        },
        {
          title: 'Промышленное связывание и прессование',
          body: 'Порошок служит связующим в производстве прессованных таблеток, благовоний и агрогранул, снижая потребность в синтетических клеях.'
        },
        {
          title: 'Абсорбирующие биоразлагаемые материалы',
          body: 'Высокая набухаемость делает порошок идеальным для абсорбирующих салфеток, раневых повязок и влагоудерживающих гранул.'
        }
      ],
      keySpecs: [
        '200 меш для косметических и гигиенических рецептур',
        '40–100 меш для промышленных связующих и почвенных смесей',
        'Объем набухания: 40–50 мл/г при чистоте 95%',
        'Влажность ≤ 10% для исключения комкования',
        'Оптовые цены на промышленные объемы от 1 тонны (1 MT)'
      ],
      documents: [
        'Технический паспорт (TDS) с аналитическими диапазонами на партию',
        'Сертификат анализа (COA)',
        'Сертификат происхождения',
        'Согласование индивидуальных спецификаций по запросу'
      ],
      buyerNote: 'Промышленные применения часто требуют особого меша или профиля вязкости. Направьте ваше техническое задание, и мы подготовим тестовую партию.'
    }
  }
};

// ── PRODUCT DETAIL LOCALIZATION SYSTEM ──
export const productI18n: Record<string, {
  leads?: Record<string, string>;
  faqs?: Record<string, { q: string; a: string }>;
  notes?: Record<string, string>;
}> = {
  zh: {
    leads: {
      'Psyllium seeds (Plantago ovata) 98% purity, machine-cleaned. Air separator and gravity table cleaned to remove light particles and foreign matter (≤2%). For millers, feed manufacturers, and ingredient processors. Germination ≥85% confirmed for seed-quality lots; not tested for milling use.':
        '机器清洗的 98% 纯度车前子。通过风选机和重力选机清洗，去除轻杂质和异物（≤2%）。适用于磨粉商、饲料制造商和原料加工商。发芽率经确认为 ≥85%。',
      'Psyllium seeds 99% purity, optically sorted. Foreign matter ≤0.5% versus ≤2% in standard grade. Commands an 8–12% price premium. Preferred by millers producing 98%+ purity husk grades where seed purity directly affects finished husk yield and consistency.':
        '色选的 99% 纯度车前子。异物 ≤0.5%，而标准级为 ≤2%。适用于生产 98% 以上纯度车前子壳的磨粉商，种子纯度直接影响成品壳的得率和一致性。',
      'Psyllium husk 85% purity from Siddhpur, Gujarat. Swell volume minimum 30 ml/g. Below the NF and USP thresholds for supplement and laxative monographs. Used in animal feed, industrial fibre blending, and cost-sensitive food applications where pharmacopoeia compliance is not required.':
        '来自古吉拉特邦 Siddhpur 的 85% 纯度车前子壳。溶胀度最低 30 ml/g。低于补剂和泻药药典的 NF 和 USP 门槛。用于动物饲料、工业纤维混合和对成本敏感的食品应用。',
      'Psyllium husk 95% purity, NF-compliant. Swell volume minimum 40 ml/g. Used in dietary fibre supplements, functional cereals, and food fibre enrichment where the pharmacopoeia standard is Food / NF rather than USP or EP. COA annotated to NF on request.':
        '符合 NF 标准的 95% 纯度车前子壳。溶胀度最低 40 ml/g。用于膳食纤维补充剂、功能性谷物和食品纤维强化，药典标准为食品级/NF 级，而非 USP 或 EP。',
      'Psyllium husk 98% purity, USP and EP compliant. Swell volume minimum 45 ml/g. For laxative capsule fills, OTC sachet products, and supplement formulations requiring a full USP or EP COA. NABL-accredited lab testing per shipment.':
        '符合 USP 和 EP 标准的 98% 纯度车前子壳。溶胀度最低 45 ml/g。用于泻药胶囊填充、非处方药袋装产品以及需要完整 USP 或 EP 分析证书 (COA) 的补剂配方。',
      'Psyllium husk 99% purity from Gujarat, India — the pharmaceutical grade. Minimum swell volume 50 ml/g, meeting the Plantago ovata husk monographs in USP, EP, and IP. Used by pharma brands, OTC laxative manufacturers, and supplement companies where a full pharmacopoeia COA is required per lot.':
        '来自印度古吉拉特邦的 99% 纯度车前子壳 —— 制药级。最低溶胀度 50 ml/g，符合 USP、EP 和 IP 中的车前子壳药典。用于需要批次完整药典 COA 的制药品牌 and 补剂公司。',
      'Psyllium husk powder 85% purity, 40–60 mesh (particle size 250–425 μm). Visible texture in finished products makes it suitable for gluten-free artisan bread and high-fibre cereal. Below NF and USP swell volume thresholds. Lowest cost per unit in our powder range.':
        '85% 纯度车前子壳粉，40-60 目（粒径 250-425 微米）。在成品中可见的质地使其适用于手工无麸质面包和高纤维谷物。低于 NF 和 USP 溶胀度门槛。最低价位粉末。',
      'Psyllium husk powder 95% purity at 80 mesh (177 μm). Swell volume minimum 42 ml/g. Viscosity approximately 100 cP at 1% solution. Good flow characteristics for dosator and tamping-pin capsule filling equipment. Used in functional food blends, fibre sachets, and supplement capsules.':
        '80 目（177 微米）的 95% 纯度车前子壳粉。最低溶胀度 42 ml/g。1% 溶液粘度约为 100 cP。流速性能好，适用于胶囊填充设备。用于功能性食品混合粉和补剂胶囊。',
      'Psyllium husk powder 98% purity at 100 mesh (149 μm). USP and EP compliant. Swell volume minimum 48 ml/g, viscosity approximately 250 cP at 1% solution. For pharma capsule fills, drink mix powders, and functional food applications where a pharmacopoeia COA is required.':
        '100 目（149 微米）的 98% 纯度车前子壳粉。符合 USP 和 EP 标准。最低溶胀度 48 ml/g，1% 溶液粘度约为 250 cP。用于制药胶囊填充、固体饮料混合粉和功能性食品。',
      'Psyllium husk powder 99% purity at 200 mesh (75 μm). USP, EP, and IP compliant. Swell volume ≥55 ml/g, viscosity approximately 400 cP at 1% solution — the highest in our powder range. Used in cosmetic formulations, premium supplement powders, and pharmaceutical production where maximum mucilage activity and fine uniform particle size are required.':
        '200 目（75 微米）的 99% 纯度车前子壳粉。符合 USP、EP 和 IP 标准。溶胀度 ≥55 ml/g，1% 溶液粘度约为 400 cP —— 我们粉末系列中粘度最高的产品。用于化妆品配方和高端补剂粉末。',
      'Psyllium khakha powder Feed Grade A, 30–40% crude fibre. Coarse particle size (20–40 mesh). Total ash ≤8%. For cattle and buffalo feed programs where maximum fibre bulk is the primary spec and blending into coarse compound feed is standard.':
        '车前子 Khakha 粉饲料 A 级，30-40% 粗纤维。粗粒径（20-40 目）。总灰分 ≤8%。适用于需要最大纤维体积作为主要规格的牛和水牛饲料计划。',
      'Psyllium khakha powder Feed Grade B, 25–30% crude fibre. Fine particle size (40–60 mesh). For pellet manufacturing and premix blending where uniform mixing in compound feed is more critical than maximum fibre content. Total ash ≤10%.':
        '车前子 Khakha 粉饲料 B 级，25-30% 粗纤维。细粒径（40-60 目）。总灰分 ≤10%。用于需要均匀混合的颗粒饲料制造和预混料混合。',
      'Psyllium fibre for paper, textile sizing, and absorbent applications. 40–55% crude fibre at 40–60 mesh, moisture ≤12%. Heavy metals to buyer specification. Consistent sieve profile and stable moisture are the primary supply requirements for most industrial buying programs.':
        '用于造纸、纺织上浆和吸收性应用的工业车前子纤维。40-60 目下 40-55% 粗纤维，水分 ≤12%。重金属可按买方要求定制。',
      'Finer mesh (60–100) and higher crude fibre (50–60%) for cosmetics and personal care. Total ash ≤8%. For applications where particle uniformity and consistent dispersion in aqueous formulations matter.':
        '更细目数（60-100 目）和更高粗纤维（50-60%）的车前子工业粉，适用于化妆品和个人护理。总灰分 ≤8%。适用于要求颗粒均匀和水相配方分散稳定性的应用。',
      'Food-safe heavy metal limits (Lead, Arsenic, Cadmium within food-grade thresholds). 35–45% crude fibre at 40–80 mesh. Used as a natural fibre source and binder in pet food manufacturing where animal safety documentation is required alongside the standard COA.':
        '食品级安全重金属限量（铅、砷、镉在食品级门槛内）。40-80 目下 35-45% 粗纤维。用作宠物食品制造中的天然纤维源和黏合剂，需随附动物安全文件和标准 COA。',
      'USDA National Organic Program certified psyllium husk for the US market. Certification covers seed origin, growing practices (no synthetic pesticides or fertilisers), processing facility, and handling chain. Transaction certificate (TC) per shipment links the specific lot to the organic certificate. Purity ≥95%, swell volume ≥40 ml/g.':
        '针对美国市场的美国国家有机计划 (NOP) 认证车前子壳。认证涵盖种子来源、种植过程（无合成农药或化肥）、加工设施和流通链。每批货物均随附交易证书 (TC)。纯度 ≥95%，溶胀度 ≥40 ml/g。',
      'EU Organic certified psyllium husk under EU Regulation 2018/848. Certificate of Inspection (COI) provided per shipment for EU customs and import authority requirements. Lot-level traceability and certificate review before purchase order. Purity ≥95%, swell volume ≥40 ml/g.':
        '符合欧盟法规 2018/848 的欧盟有机认证车前子壳。每批货物均随附检查证书 (COI)，以满足欧盟海关和进口机构的要求。在下订单前可提供批次级追溯和证书审查。纯度 ≥95%，溶胀度 ≥40 ml/g。',
      'Compressed psyllium cattle feed block (Sagar Gola type) combining husk, khakha, molasses, and mineral mix. Designed for direct farm-level feeding without processing. Supports digestive regularity and hydration retention in dairy cattle and buffalo. Metabolisable energy approximately 9–10 MJ/kg DM.':
        '压榨车前子牛饲料块（Sagar Gola 型），结合了外壳、Khakha、糖蜜和矿物质混合料。专为农场直接饲喂设计。支持奶牛和水牛的消化规律和水分保持。代谢能约为 9-10 MJ/kg 干物质。',
      'Loose granule psyllium cattle feed (Sagar Lali type) with khakha as the primary base plus grain mix. Higher crude fibre (30–40%) and protein (4–6%) than Sagar Gola. For cattle, poultry, and ruminant bulk fibre supplementation, or for buyers who blend into a compound feed program.':
        '散装颗粒车前子牛饲料（Sagar Lali 型），以 Khakha 为主要基底，外加谷物混合料。比 Sagar Gola 具有更高的粗纤维（30-40%）和蛋白质（4-6%）。适用于牛、禽和反刍动物的大宗纤维补充。'
    },
    faqs: {
      'What certifications cover your NOP organic psyllium?': {
        q: '哪些认证涵盖了您的 NOP 有机车前子？',
        a: '通过了美国国家有机计划 (NOP) 的有机认证。该认证涵盖了整个监管链：从种子来源、种植过程、加工设施到流通链。我们在下订单前提供证书副本和交易证书 (TC)。'
      },
      'What document do US organic importers need per shipment?': {
        q: '美国有机进口商每批货物需要什么文件？',
        a: '由认可认证机构为每批货物颁发的交易证书 (TC)。该证书将您的发票与有机批次直接关联，我们会在标准有机单据包中提供。'
      },
      'What purity and swell volume does NOP organic psyllium have?': {
        q: 'NOP 有机车前子的纯度和溶胀度是多少？',
        a: '纯度 ≥95%，溶胀度最低 40 ml/g。每批货物随附包含水分和微生物指标的 COA（分析证书）。'
      },
      'What is the price premium for organic psyllium?': {
        q: '有机车前子的溢价是多少？',
        a: '通常比常规 95% 等级高 25-40%，具体取决于认证库存和市场行情。请在下单前联系我们确认最新价格。'
      },
      'What document do EU importers need for organic psyllium?': {
        q: '欧盟进口商对有机车前子需要什么文件？',
        a: '符合欧盟法规 2018/848 的检查证书 (COI)。每批货物均通过欧盟 TRACES 系统提供以用于清关。'
      },
      'Is your EU organic psyllium certified under the 2018/848 regulation?': {
        q: '您的欧盟有机车前子是否符合 2018/848 法规认证？',
        a: '是的。欧盟有机批次符合欧盟法规 2018/848。在下单前可提供证书副本和 COI。'
      },
      'What is the swell volume of EU organic psyllium?': {
        q: '欧盟有机车前子的溶胀度是多少？',
        a: '纯度 ≥95% 时最低为 40 ml/g。与 NOP 等级物理规格相同 —— 仅因目的地市场所需认证不同。'
      },
      'Can I review the organic certificate before placing an order?': {
        q: '我可以在下订单前审查有机证书吗？',
        a: '是的。我们会在确认订单前分享当前的有机证书和批次级产地记录，这是我们的标准流程。'
      },
      'Is NOP psyllium husk fully organic certified?': {
        q: 'NOP车前子壳是完全有机认证的吗？',
        a: '是的。通过了美国国家有机计划 (NOP) 的有机认证。该认证涵盖了整个监管链：有机种植田、专用有机加工设施、包装材料和出口处理。每批次货物都会开具交易证书 (TC) 以核实有机身份。'
      },
      'What purity is NOP organic psyllium husk?': {
        q: 'NOP有机车前子壳的纯度是多少？',
        a: '纯度为 ≥95%，最低溶胀度为 40 ml/g。重金属控制在 USP 限制范围内：铅 ≤ 2 ppm，砷 ≤ 1 ppm。'
      },
      'Is a Transaction Certificate (TC) provided?': {
        q: '是否提供交易证书 (TC)？',
        a: '是的。每批货物都提供由认可的认证机构颁发的交易证书 (TC)，将您的发票直接与有机批次关联。'
      },
      'What regulation governs your EU organic psyllium?': {
        q: '什么法规监管您的欧盟有机车前子？',
        a: '欧盟法规 2018/848。我们根据经审计的有机协定进行加工和包装，并通过欧盟 TRACES 系统提供检查证书 (COI) 以供海关清关。'
      },
      'Do you provide a COI for EU imports?': {
        q: '您是否为欧盟进口提供 COI？',
        a: '是的。在船舶起航前，通过欧盟 TRACES 系统生成并由出口控制机构批准检查证书 (COI)，确保顺利进口到任何欧盟成员国。'
      },
      'What is the lead time for organic psyllium?': {
        q: '有机车前子的交货期是多久？',
        a: '来自古吉拉特邦 Siddhpur 的交货期为 7 天。有机批次需要出运前审计和交易证书协调，因此最终出运文件的发布需要额外 3-5 天。'
      },
      'What is standard grade psyllium seed purity?': {
        q: '标准级车前子种子的纯度是多少？',
        a: '使用风选机和重力分选机进行机械清洗后，纯度 ≥98%。异物 ≤2%。水分 ≤8%。发芽率 ≥85%。'
      },
      'Where are your psyllium seeds grown?': {
        q: '你们的车前子种子是在哪里种植的？',
        a: '主要种植在古吉拉特邦的 Mehsana、Banaskantha 和 Kutch 地区，以及拉贾斯坦邦的 Barmer、Jalore 和 Jodhpur 地区。冬播作物，10-11 月播种，2-3 月收获。每批货物都有原产地记录。'
      },
      'What packaging is available for psyllium seeds?': {
        q: '车前子种子提供什么包装？',
        a: '25公斤、50公斤和1000公斤的吨袋包装。FOB Mundra 交付。每批货物都包含 COA、装箱单和原产地证明。'
      },
      'Is standard grade suitable for pharma-grade husk milling?': {
        q: '标准级适合制药级车前子壳的碾磨吗？',
        a: '标准级种子适合碾磨 85-95% 纯度的车前子壳。如果要达到 98% 或 99% 的外壳纯度，建议使用色选级种子，因为种子纯度直接影响外壳的分离得率和一致性。'
      },
      'What is sortex grade psyllium seed?': {
        q: '什么是色选级车前子种子？',
        a: '纯度 ≥99% 的光学色选种子。光学色选机清除变色种子和外来杂质，使异物 ≤0.5% —— 显著低于标准机械清洗级的 ≤2% 限制。'
      },
      'Why pay a premium for sortex psyllium seeds?': {
        q: '为什么要为色选车前子种子支付溢价？',
        a: '更高的种子纯度会产生更稳定的外壳分离得率。对于以 98% 或 99% 纯度外壳为目标的磨粉商，色选级种子可以减少二次加工并提高批次间的一致性。8-12% 的价格溢价通常可以从更高的外壳得率中收回。'
      },
      'What germination percentage does sortex seed have?': {
        q: '色选级种子发芽率是多少？',
        a: '发芽率 ≥88% —— 高于标准级的 ≥85% 最低门槛。适用于购买种子用于重新种植或需要种子级批次的买家。'
      },
      'What is the minimum order for sortex psyllium seeds?': {
        q: '色选车前子种子的起订量是多少？',
        a: '没有起订量。提供 25 公斤、50 公斤 and 1000 公斤包装 —— 从单袋到整箱均可。FOB Mundra 交付。交货期 7 天。'
      },
      'Is 85% psyllium husk food-grade?': {
        q: '85%纯度车前子壳是食品级吗？',
        a: '85%等级是食品级的。但它不符合 NF、USP 或 EP 药典标准。对于指定了药典标准的补剂或泻药产品，请至少使用 95% 等级。'
      },
      'What is the swell volume of 85% psyllium husk?': {
        q: '85%车前子壳的溶胀度是多少？',
        a: '最低为 30 ml/g。这反映了 85% 纯度下较低的粘液含量，是我们的外壳系列中最低的溶胀度。'
      },
      'Can 85% psyllium husk be used in animal feed?': {
        q: '85%纯度车前子壳可用于动物饲料吗？',
        a: '可以。85%等级通常用于牛饲料和配合动物饲料中作为纤维源。我们提供 25公斤、50公斤和1000公斤的吨袋包装。'
      },
      'What is the minimum order for 85% psyllium husk?': {
        q: '85%纯度车前子壳的最小起订量是多少？',
        a: '没有最小起订量。我们供应从小批量样品测试到整箱货。FOB Mundra 交付。每批货物包含 COA 和装箱单。来自 Siddhpur 的交货期为 7 天。'
      },
      'Does 95% psyllium husk meet the NF monograph?': {
        q: '95%纯度车前子壳符合 NF 标准吗？',
        a: '是的。95%等级符合国家处方集 (NF) 中的车前子壳标准。最低溶胀度为 40 ml/g。我们可以根据要求提供符合 NF 参数标注的 COA。'
      },
      'What is the swell volume of 95% psyllium husk?': {
        q: '95%车前子壳的溶胀度是多少？',
        a: '根据我们的规格，最低为 40 ml/g。这满足了 NF 的门槛，适用于膳食补充剂和功能性食品应用。'
      },
      'Can I use 95% psyllium husk for capsule filling?': {
        q: '我可以将 95% 纯度车前子壳用于胶囊填充吗？',
        a: '可以，规格为 20-60 目。对于胶囊填充设备，填充时的水分必须 ≤10% 以防结块。我们可以根据要求提供水分控制包装。'
      },
      'How is 95% different from 98% psyllium husk?': {
        q: '95%纯度与98%纯度车前子壳有什么不同？',
        a: '95%符合 NF 标准。98%符合 USP 和 EP 标准。溶胀度差异为 40 ml/g (95%) 对 45 ml/g (98%)。如果您的产品标签或规格指定了 USP 或 EP，您需要使用 98% 或 99% 等级。'
      },
      'Does 98% psyllium husk meet USP and EP standards?': {
        q: '98%纯度车前子壳符合 USP 和 EP 标准吗？',
        a: '是的。98%等级符合 USP 和 EP 的标准参数 —— 溶胀度、水分 (≤12%)、总灰分 (≤3.5%)、酸不溶性灰分 (≤0.5%) 和微生物指标。我们可以根据要求提供标注相应药典的 COA。'
      },
      'What swell volume does 98% psyllium husk have?': {
        q: '98%车前子壳的溶胀度是多少？',
        a: '根据我们的规格，最低为 45 ml/g。USP 和 EP 规定的最低要求为 40 ml/g，因此 98% 等级超过了药典门槛。每批货物都包含实际的 COA 值。'
      },
      'Is 98% psyllium husk suitable for laxative products?': {
        q: '98%纯度车前子壳适合泻药产品吗？',
        a: '适合。98%等级常用于泻药胶囊填充和袋装冲剂产品。如果您的成品在 USP 或 EP 下注册，请与您的 QA 团队确认规格指定的是 98% 还是 99% 等级。'
      },
      'What documentation comes with 98% psyllium husk?': {
        q: '98%纯度车前子壳随附什么文件？',
        a: '经 NABL 认可的实验室 COA（溶胀度、水分、灰分、微生物、重金属）、商业发票、装箱单、原产地证明和植物检疫证书。我们可以根据要求提供清真和犹太认证声明。'
      },
      'What swell volume does 99% psyllium husk have?': {
        q: '99%车前子壳的溶胀度是多少？',
        a: '根据我们的规格，最低为 50 ml/g。USP 和 EP 标准规定最低为 40 ml/g，99%等级持续超出此范围。每批货物的 COA 均有实际测试值。'
      },
      'Is your 99% psyllium husk USP, EP, and IP compliant?': {
        q: '你们的 99% 车前子壳符合 USP、EP 和 IP 标准吗？',
        a: '是的。我们可以根据要求提供符合 USP、EP 或 IP 标准的 COA。参数包括溶胀度、水分、总灰分 (≤3.0%)、酸不溶性灰分 (≤0.4%)、重金属和完整的微生物指标。询价时请说明您的药典版本。'
      },
      'What is the minimum order for 99% psyllium husk?': {
        q: '99%纯度车前子壳的最小起订量是多少？',
        a: '没有最小起订量。提供 10 公斤、25 公斤或 50 公斤的食品级包装袋。大额订单可提供 1000 公斤的吨袋包装。FOB Mundra 交付。交货期 7 天。'
      },
      'Can I get a sample of 99% psyllium husk with COA before ordering?': {
        q: '下单前我可以获得 99% 车前子壳带 COA 的样品吗？',
        a: '可以。我们免费发送 100-500 克样品，并附带由经 NABL 认可的实验室出具的完整 COA。请提供您的目标药典、邮寄地址和级别。来自古吉拉特邦 Siddhpur 的样品交货期为 3-5 个工作日。'
      },
      'What mesh size is 40–60 mesh psyllium powder?': {
        q: '40–60目的车前子粉筛网尺寸是多少？',
        a: '40–60 目 ASTM 相当于 250–425 微米的粒径。在这种粒径下，颗粒在大多数成品中都是可见的。适用于可以接受粗糙质地的应用 —— 无麸质手工面包、高纤维谷物或动物饲料混合粉。'
      },
      'Can 85% psyllium powder be used in gluten-free bakery?': {
        q: '85%纯度的车前子粉可以用于无麸质烘焙吗？',
        a: '可以。车前子粉占面粉总重量 of 1-3% 时，可以锁水并改善无麸质面团的组织结构。85% / 40-60 目的较粗粒径在成品组织中可能略微可见，但在大多数手工艺风格的面包中都是可接受的。'
      },
      'Is 85% / 40–60 mesh powder food-grade?': {
        q: '85% / 40-60 目的粉末是食品级吗？',
        a: '85%等级是食品级的。但它不符合 NF、USP 或 EP 药典对补剂或药物标签的溶胀度门槛要求。'
      },
      'What is the minimum order for 85% psyllium husk powder?': {
        q: '85%纯度车前子壳粉的起订量是多少？',
        a: '没有起订量。提供 10 公斤、25 公斤和 50 公斤包装袋 —— 可以只订购一袋。FOB Mundra 交付。每批货物均提供 COA。'
      },
      'What viscosity does 95% / 80 mesh psyllium powder produce?': {
        q: '95% / 80目的车前子粉产生什么粘度？',
        a: '在 1% 水溶液中粘度约为 100 cP。适用于需要建立一定粘度但不需要更细等级那种强凝胶行为的功能性食品和补剂应用。'
      },
      'Is 95% / 80 mesh suitable for capsule filling?': {
        q: '95% / 80目适合胶囊填充吗？',
        a: '适合。在 80 目（177 微米）下，流动性适合剂量器和夯锤型胶囊填充设备。填充时水分应 ≤10%。我们可以根据要求为水分敏感型应用提供带密封内衬的 HDPE 包装。'
      },
      'Does 95% psyllium powder meet NF requirements?': {
        q: '95%纯度的车前子粉符合 NF 要求吗？',
        a: '是的。95%等级符合 NF 国家处方集标准。我们可以根据要求提供符合 NF 参数的 COA。对于标有 USP 或 EP 的 COA，请使用 98% 或 99% 等级。'
      },
      'What swell volume does 95% / 80 mesh powder have?': {
        q: '95% / 80目的车前子粉溶胀度是多少？',
        a: '根据我们的规格，最低为 42 ml/g。'
      },
      'Is 98% / 100 mesh psyllium powder USP and EP compliant?': {
        q: '98% / 100目的车前子粉符合 USP 和 EP 标准吗？',
        a: '是的。我们可以根据要求提供标注符合 USP 或 EP 参数的 COA。参数包括溶胀度 (≥48 ml/g)、水分 (≤12%)、总灰分 (≤3.5%)、酸不溶性灰分、重金属和完整的微生物指标。'
      },
      'What particle size is 100 mesh psyllium powder?': {
        q: '100目的车前子粉粒径是多少？',
        a: '149微米或更小。在这种粒径下，粉末能够均匀分散在固体冲剂饮料中，并且在大多数食品应用中不会产生可见的颗粒质地。对于胶囊填充设备，流动性良好。'
      },
      'What viscosity does 98% / 100 mesh powder produce?': {
        q: '98% / 100目的粉末产生什么粘度？',
        a: '在 1% 水溶液中粘度约为 250 cP。由于更细的粒径和更大的表面积暴露，比 80 目等级的粘度更高。适用于固体饮料混合粉、药物悬浮液和功能性食品基质。'
      },
      'Can I get a COA sample before ordering 98% psyllium powder?': {
        q: '下单前我可以获得 98% 车前子粉带 COA 的样品吗？',
        a: '可以。我们免费发送 100-500 克样品，并附带标注符合您指定药典的 COA。请提供您的级别、目数、目标标准和邮寄地址。样品交货期为 3-5 个工作日。'
      },
      'What mesh size is 200 mesh psyllium powder?': {
        q: '200目的车前子粉筛网尺寸是多少？',
        a: '200 目 ASTM 相当于 75 微米或更小。这是我们供应的最细的标准等级。用于需要均匀、超细颗粒分布的领域 —— 化妆品配方、高端膳食补充剂粉末和药物生产。'
      },
      'What viscosity does 99% / 200 mesh psyllium powder produce?': {
        q: '99% / 200目的车前子粉产生什么粘度？',
        a: '在 1% 水溶液中粘度约为 400 cP —— 是我们粉末系列中最高的。这反映了在最细粒径下的最大粘液暴露。这对于需要增稠或形成凝胶的功能性应用至关重要。'
      },
      'Is 99% / 200 mesh powder USP, EP, and IP compliant?': {
        q: '99% / 200目的粉末符合 USP、EP 和 IP 标准吗？',
        a: '是的。我们可以根据要求提供符合 USP、EP 或 IP 标准 of COA。溶胀度 ≥55 ml/g，水分 ≤10%，总灰分 ≤3.0%。请说明您的药典版本和目的地市场要求。'
      },
      'Is 200 mesh psyllium powder used in cosmetics?': {
        q: '200目的车前子粉可以用于化妆品吗？',
        a: '可以。在 200 目（75 微米）下，粉末在用于面霜、面膜等化妆品和个人护理品的液体配方中可以平滑分散。我们可以根据要求提供重金属检测和完整的原料证明文件。'
      },
      'What is psyllium khakha powder?': {
        q: '什么是车前子 Khakha 粉？',
        a: 'Khakha 是车前子壳经过碾磨和分离后留下的副产品。它包含内种皮和残留的胚乳 —— 30-40% 粗纤维，8-12% 粗蛋白和高粘液质的可溶性纤维。这是一种高价值饲料原料，而非简单废物。'
      },
      'What crude fibre content does Feed Grade A have?': {
        q: '饲料 A 级具有什么粗纤维含量？',
        a: '30-40% 粗纤维。总灰分 ≤8%。水分 ≤12%。比起 Grade B，它的粒径更粗（20-40 目）。'
      },
      'Can khakha Feed Grade A be used in ruminant feed?': {
        q: '饲料 A 级 Khakha 可以用于反刍动物饲料吗？',
        a: '可以。牛和水牛饲料是其主要应用。车前子 Khakha 中的可溶性纤维有助于肠道蠕动和水分保持。既适用于农场直接喂养计划，也适用于商业复合饲料制造。'
      },
      'What packaging is available for khakha Feed Grade A?': {
        q: '饲料 A 级 Khakha 提供什么包装？',
        a: '25公斤、50公斤和1000公斤的吨袋包装。每批货物均提供包含粗纤维、粗蛋白、水分和灰分参数的 COA。买方可自费进行其他测试（重金属、霉菌毒素）。'
      },
      'How is Feed Grade B different from Feed Grade A?': {
        q: '饲料 B 级与饲料 A 级有什么不同？',
        a: '具有较低的粗纤维（25-30% 对 30-40%）和更细的粒径（40-60目 对 20-40目）。灰分略高（≤10% 对 ≤8%）。Grade B 适用于颗粒饲料制造或预混料混合中对均匀混合要求高、但对最大纤维含量要求次之的领域。'
      },
      'Is khakha Feed Grade B suitable for poultry feed?': {
        q: '饲料 B 级 Khakha 适合用于家禽饲料吗？',
        a: '适合。细粒径（40-60目）在禽类预混料和复合饲料中能均匀混合。25-30% 的纤维含量有助于肉鸡和蛋鸡日粮的肠道健康。'
      },
      'What is the price difference between Grade A and Grade B?': {
        q: 'Grade A 与 Grade B 之间的价格差异是多少？',
        a: '由于粗纤维含量较低，Grade B 的价格通常略低于 Grade A。请将您的需求量和目的地告知我们，以获得最新的即期报价。'
      },
      'What documentation comes with khakha powder?': {
        q: '车前子 Khakha 粉随附什么文件？',
        a: '包含水分、粗纤维、粗蛋白和总灰分参数的 COA。每批货物均提供装箱单和原产地证明。买方可自费进行其他分析（霉菌毒素、重金属、农残）。'
      },
      'What is industrial grade psyllium used for?': {
        q: '工业级车前子有什么用途？',
        a: '用于造纸和包装（作为黏合剂）、纺织上浆（作为上浆液中的锁水剂）、吸收性产品和农业土壤改良。工业级价格低于食品级外壳，不可供人类食用。'
      },
      'What mesh size is standard industrial psyllium?': {
        q: '标准工业级车前子的目数是多少？',
        a: '40–60 目 ASTM。粗纤维 40-55%。重金属参数可按照买方规格定制 —— 请在询价时确认限量。'
      }
    },
    notes: {
      'Pharma and OTC brands targeting NOP certification for US-market dietary supplement powders or capsule fills. Complies with 95% purity monograph requirement.':
        '针对美国市场膳食补充剂粉末或胶囊填充寻找 NOP 认证的医药和非处方药品牌。完全符合 95% 纯度药典标准。',
      'US food brands require NOP certification for USDA Organic labelling on cereals, bread mixes, and powder blends. Meets standard food parameters.':
        '美国食品品牌在麦片、面包粉和混合粉上使用 USDA 有机标签时需要 NOP 认证。符合标准食品参数要求。',
      'Supplement brands launching certified organic fiber products. Single-origin lot documentation and transaction certificate (TC) per shipment.':
        '推出认证有机纤维产品的膳食补充剂品牌。每批货物均随附单一产地批次文件和交易证书 (TC)。',
      'Not specified for animal feed. While NOP certified, pricing makes it uneconomical for livestock compound feed.':
        '未指定用于动物饲料。虽然通过了 NOP 认证，但在价格上对于牲畜配合饲料来说并不经济。',
      'European pharma and supplement manufacturers requiring EU organic status and a TRACES COI import certificate. Complies with basic pharmacopoeia purity.':
        '需要欧盟有机身份和 TRACES COI 进口证书的欧洲制药和补剂制造商。符合基本药典纯度标准。',
      'European food brands requiring the EU organic leaf logo. Standard food-grade microbiology and purity ≥95%.':
        '需要欧盟有机绿叶标志的欧洲食品品牌。符合标准食品级微生物指标，纯度 ≥95%。',
      'EU dietary supplement brands. Batch-specific TRACES COI provided to support organic import validation.':
        '欧盟膳食补充剂品牌。提供批次专属的 TRACES COI 以支持有机进口核验。',
      'Not justified for animal feed. Use standard feed-grade husk.':
        '对于动物饲料不合理。请使用标准饲料级车前子壳。',
      'For millers and ingredient processors producing food-grade or NF-grade husk. Standard seed (98%, ≤2% foreign matter) is sufficient for milling output up to 95% husk purity.':
        '适用于生产食品级或 NF 级车前子壳的磨粉商和原料加工商。标准级种子（98%，异物 ≤2%）足以支持磨出高达 95% 纯度的外壳。',
      'Food millers use standard seed to produce food-grade husk (85%) and NF husk (95%). Origin records and lot traceability per shipment.':
        '食品加工商使用标准级种子来磨制食品级外壳 (85%) 和 NF 外壳 (95%)。每批货物均随附产地记录和批次追溯。',
      'Ingredient processors producing NF-grade husk for supplement manufacturers. Standard seed supports NF output; sortex seed is needed for USP/EP target purity.':
        '为补剂制造商生产 NF 级外壳的原料加工商。标准级种子支持磨出符合 NF 标准的外壳；如果目标是 USP/EP 纯度，则需要使用色选级种子。',
      'Feed manufacturers use seed directly in compound feed as a fibre source or as milling feedstock for khakha. Standard grade is the cost-effective input for feed-use programs.':
        '饲料制造商在配合饲料中直接使用种子作为纤维源，或将其作为磨制 Khakha 的原料。标准级是饲料应用计划中最具成本效益的投入原料。',
      'Millers producing 98%+ purity husk for pharma-grade supply specify sortex seed. Foreign matter ≤0.5% reduces contamination variance and improves husk separation yield.':
        '为制药级供应生产 98% 以上纯度车前子壳的磨粉商指定使用色选级种子。异物 ≤0.5% 可以减少污染波动并提高外壳的分离得率。',
      'High-purity food ingredient processors use sortex seed to achieve consistent 95%+ husk output with less reprocessing.':
        '高纯度食品原料加工商使用色选级种子，以实现稳定的 95% 以上外壳产出，减少二次加工。',
      'Millers targeting USP/EP annotated husk use sortex as input. The 8–12% premium over standard is typically recovered in improved husk yield and fewer rejected batches.':
        '以 USP/EP 标注外壳为目标的磨粉商使用色选级作为原料。相比标准级种子 8-12% 的溢价通常可以通过提高外壳得率和减少退单批次来收回。',
      'Sortex premium is not justified for animal feed applications. Use standard seed for feed input.':
        '色选溢价在动物饲料应用中并不合理。请使用标准级种子作为饲料投入。'
    }
  },
  ar: {
    leads: {
      'Psyllium seeds (Plantago ovata) 98% purity, machine-cleaned. Air separator and gravity table cleaned to remove light particles and foreign matter (≤2%). For millers, feed manufacturers, and ingredient processors. Germination ≥85% confirmed for seed-quality lots; not tested for milling use.':
        'بذور السيليوم (بلانتاجو أوفاتا) نقاوة 98%، منظفة آلياً. منظفة بالفاصل الهوائي وطاولة الجاذبية لإزالة الجسيمات الخفيفة والمواد الغريبة (≤2%). لمنتجي ومصنعي الأعلاف والمكونات.发芽率经确认为 ≥85%.',
      'Psyllium seeds 99% purity, optically sorted. Foreign matter ≤0.5% versus ≤2% in standard grade. Commands an 8–12% price premium. Preferred by millers producing 98%+ purity husk grades where seed purity directly affects finished husk yield and consistency.':
        'بذور السيليوم نقاوة 99%، مفروزة بصرياً. المواد الغريبة ≤0.5% مقارنة بـ ≤2% في الدرجة القياسية. تزيد السعر بنسبة 8–12%. مفضلة للمطاحن التي تنتج نقاوة +98%.',
      'Psyllium husk 85% purity from Siddhpur, Gujarat. Swell volume minimum 30 ml/g. Below the NF and USP thresholds for supplement and laxative monographs. Used in animal feed, industrial fibre blending, and cost-sensitive food applications where pharmacopoeia compliance is not required.':
        'قشور السيليوم نقاوة 85% من سيدهبور، غوجارات. حجم الانتفاخ الأدنى 30 مل/جم. تستخدم في أعلاف الحيوانات والأغذية الحساسة للتكلفة حيث لا يشترط مطابقة دستور الأدوية.',
      'Psyllium husk 95% purity, NF-compliant. Swell volume minimum 40 ml/g. Used in dietary fibre supplements, functional cereals, and food fibre enrichment where the pharmacopoeia standard is Food / NF rather than USP or EP. COA annotated to NF on request.':
        'قشور السيليوم نقاوة 95%، متوافقة مع دساتير الأدوية الوطنية (NF). حجم الانتفاخ الأدنى 40 مل/جم. تستخدم في المكملات والأغذية.',
      'Psyllium husk 98% purity, USP and EP compliant. Swell volume minimum 45 ml/g. For laxative capsule fills, OTC sachet products, and supplement formulations requiring a full USP or EP COA. NABL-accredited lab testing per shipment.':
        'قشور السيليوم نقاوة 98%، متوافقة مع دستور الأدوية الأمريكي (USP) والأوروبي (EP). حجم الانتفاخ الأدنى 45 مل/جم. لتعبئة الكبسولات المسهلة.',
      'Psyllium husk 99% purity from Gujarat, India — the pharmaceutical grade. Minimum swell volume 50 ml/g, meeting the Plantago ovata husk monographs in USP, EP, and IP. Used by pharma brands, OTC laxative manufacturers, and supplement companies where a full pharmacopoeia COA is required per lot.':
        'قشور السيليوم نقاوة 99% من غوجارات، الهند - الدرجة الدوائية. حجم الانتفاخ الأدنى 50 مل/جم. meeting monographs in USP, EP, and IP.',
      'Psyllium husk powder 85% purity, 40–60 mesh (particle size 250–425 μm). Visible texture in finished products makes it suitable for gluten-free artisan bread and high-fibre cereal. Below NF and USP swell volume thresholds. Lowest cost per unit in our powder range.':
        'بودرة قشور السيليوم نقاوة 85%، بمقاس 40–60 مش. مناسبة للخبز الخالي من الغلوتين وحبوب الألياف. التكلفة الأقل في البودرة.',
      'Psyllium husk powder 95% purity at 80 mesh (177 μm). Swell volume minimum 42 ml/g. Viscosity approximately 100 cP at 1% solution. Good flow characteristics for dosator and tamping-pin capsule filling equipment. Used in functional food blends, fibre sachets, and supplement capsules.':
        'بودرة قشور السيليوم نقاوة 95% بمقاس 80 مش. حجم الانتفاخ الأدنى 42 مل/جم. اللزوجة 100 cP في محلول 1%. مناسب للكبسولات.',
      'Psyllium husk powder 98% purity at 100 mesh (149 μm). USP and EP compliant. Swell volume minimum 48 ml/g, viscosity approximately 250 cP at 1% solution. For pharma capsule fills, drink mix powders, and functional food applications where a pharmacopoeia COA is required.':
        'بودرة قشور السيليوم نقاوة 98% بمقاس 100 مش. متوافقة مع دستور الأدوية الأمريكي والأوروبي. لزوجة 250 cP.',
      'Psyllium husk powder 99% purity at 200 mesh (75 μm). USP, EP, and IP compliant. Swell volume ≥55 ml/g, viscosity approximately 400 cP at 1% solution — the highest in our powder range. Used in cosmetic formulations, premium supplement powders, and pharmaceutical production where maximum mucilage activity and fine uniform particle size are required.':
        'بودرة قشور السيليوم نقاوة 99% بمقاس 200 مش. متوافقة مع دساتير الأدوية للمستحضرات الفاخرة والأدوية. لزوجة 400 cP.',
      'Psyllium khakha powder Feed Grade A, 30–40% crude fibre. Coarse particle size (20–40 mesh). Total ash ≤8%. For cattle and buffalo feed programs where maximum fibre bulk is the primary spec and blending into coarse compound feed is standard.':
        'بودرة كاكا السيليوم درجة أعلاف أ، ألياف خام 30-40%. حجم حبيبات خشن. إجمالي الرماد ≤8%. لبرامج أعلاف الماشية.',
      'Psyllium khakha powder Feed Grade B, 25–30% crude fibre. Fine particle size (40–60 mesh). For pellet manufacturing and premix blending where uniform mixing in compound feed is more critical than maximum fibre content. Total ash ≤10%.':
        'بودرة كاكا السيليوم درجة أعلاف ب، ألياف خام 25-30%. حجم حبيبات ناعم. لتصنيع الكريات والخلطات الجاهزة. رماد ≤10%.',
      'Psyllium fibre for paper, textile sizing, and absorbent applications. 40–55% crude fibre at 40–60 mesh, moisture ≤12%. Heavy metals to buyer specification. Consistent sieve profile and stable moisture are the primary supply requirements for most industrial buying programs.':
        'ألياف السيليوم للتطبيقات الصناعية مثل الورق وتغرية المنسوجات والامتصاص. ألياف خام 40-55%. رطوبة ≤12%.',
      'Finer mesh (60–100) and higher crude fibre (50–60%) for cosmetics and personal care. Total ash ≤8%. For applications where particle uniformity and consistent dispersion in aqueous formulations matter.':
        'مش أنعم (60-100) وألياف خام أعلى (50-60%) لمستحضرات التجميل والعناية الشخصية. رماد ≤8%.',
      'Food-safe heavy metal limits (Lead, Arsenic, Cadmium within food-grade thresholds). 35–45% crude fibre at 40–80 mesh. Used as a natural fibre source and binder in pet food manufacturing where animal safety documentation is required alongside the standard COA.':
        'حدود المعادن الثقيلة آمنة للأغذية. تستخدم كألياف طبيعية ورابط في تصنيع أغذية الحيوانات الأليفة مع شهادات الأمان.',
      'USDA National Organic Program certified psyllium husk for the US market. Certification covers seed origin, growing practices (no synthetic pesticides or fertilisers), processing facility, and handling chain. Transaction certificate (TC) per shipment links the specific lot to the organic certificate. Purity ≥95%, swell volume ≥40 ml/g.':
        'قشور السيليوم معتمدة من البرنامج العضوي الوطني الأمريكي (USDA NOP) للسوق الأمريكية. شهادة TC لكل شحنة. نقاوة ≥95%.',
      'EU Organic certified psyllium husk under EU Regulation 2018/848. Certificate of Inspection (COI) provided per shipment for EU customs and import authority requirements. Lot-level traceability and certificate review before purchase order. Purity ≥95%, swell volume ≥40 ml/g.':
        'قشور السيليوم معتمدة عضويًا في الاتحاد الأوروبي بموجب لائحة الاتحاد الأوروبي 2018/848. شهادة COI لكل شحنة.',
      'Compressed psyllium cattle feed block (Sagar Gola type) combining husk, khakha, molasses, and mineral mix. Designed for direct farm-level feeding without processing. Supports digestive regularity and hydration retention in dairy cattle and buffalo. Metabolisable energy approximately 9–10 MJ/kg DM.':
        'قالب علف كبس الماشية من السيليوم (نوع ساغار غولا) يجمع القشور والكاكا والدبس والمعادن. للتغذية المباشرة.',
      'Loose granule psyllium cattle feed (Sagar Lali type) with khakha as the primary base plus grain mix. Higher crude fibre (30–40%) and protein (4–6%) than Sagar Gola. For cattle, poultry, and ruminant bulk fibre supplementation, or for buyers who blend into a compound feed program.':
        'علف حبيبي سائب للماشية من السيليوم (نوع ساغار لالي) مع الكاكا كقاعدة أساسية زائد خلطة حبوب.'
    },
    faqs: {
      'What certifications cover your NOP organic psyllium?': {
        q: 'ما هي الشهادات التي تغطي السيليوم العضوي NOP الخاص بكم؟',
        a: 'معتمد بموجب البرنامج العضوي الوطني الأمريكي (NOP). تغطي الشهادة مصدر البذور، وممارسات الزراعة، ومنشأة المعالجة، وسلسلة التداول. نقوم بتقديم نسخة الشهادة وشهادة المعاملة (TC) قبل أمر الشراء.'
      },
      'What document do US organic importers need per shipment?': {
        q: 'ما هي المستندات التي يحتاجها مستوردو المنتجات العضوية في أمريكا لكل شحنة؟',
        a: 'شهادة معاملة (TC) صادرة عن جهة التصديق لكل شحنة. يربط هذا المستند الشحنة المحددة بالشهادة العضوية، ونقدمها كجزء من حزمة مستندات التصدير القياسية.'
      },
      'What purity and swell volume does NOP organic psyllium have?': {
        q: 'ما هي نقاوة وحجم انتفاخ السيليوم العضوي NOP؟',
        a: 'نقاوة ≥95%، وحجم انتفاخ ≥40 مل/جم كحد أدنى. يتم توفير شهادة تحليل COA مع الرطوبة والميكروبيولوجيا لكل شحنة.'
      },
      'What is the price premium for organic psyllium?': {
        q: 'ما هي زيادة السعر (الأوفر) للسيليوم العضوي؟',
        a: 'عادة ما تكون بين 25-40% أعلى من الدرجة التقليدية 95% اعتمادًا على توافر المخزون المعتمد وتوقيت السوق. اتصل بنا لمعرفة الأسعار الحالية.'
      },
      'What document do EU importers need for organic psyllium?': {
        q: 'ما هي المستندات التي يحتاجها مستوردو الاتحاد الأوروبي للسيليوم العضوي؟',
        a: 'شهادة تفتيش (COI) بموجب لائحة الاتحاد الأوروبي 2018/848. يتم إصدارها لكل شحنة وهي مطلوبة من قبل جمارك الاتحاد الأوروبي للاستيراد العضوي.'
      },
      'Is your EU organic psyllium certified under the 2018/848 regulation?': {
        q: 'هل السيليوم العضوي للاتحاد الأوروبي معتمد بموجب لائحة 2018/848؟',
        a: 'نعم. الدفعات العضوية للاتحاد الأوروبي معتمدة بموجب لائحة الاتحاد الأوروبي 2018/848. يتم توفير نسخة الشهادة و COI قبل أمر الشراء.'
      },
      'What is the swell volume of EU organic psyllium?': {
        q: 'ما هو حجم انتفاخ السيليوم العضوي للاتحاد الأوروبي؟',
        a: 'حجم انتفاخ ≥40 مل/جم كحد أدنى بنقاوة ≥95%. نفس المواصفات المادية لدرجة NOP - يختلف نطاق الشهادة حسب سوق الوجهة.'
      },
      'Can I review the organic certificate before placing an order?': {
        q: 'هل يمكنني مراجعة الشهادة العضوية قبل تقديم الطلب؟',
        a: 'نعم. نحن نشارك الشهادة العضوية الحالية وسجلات المنشأ على مستوى الدفعة قبل تأكيد أمر الشراء. هذا أمر قياسي لجميع دفعاتنا العضوية.'
      }
    }
  },
  nl: {
    leads: {
      'Psyllium seeds (Plantago ovata) 98% purity, machine-cleaned. Air separator and gravity table cleaned to remove light particles and foreign matter (≤2%). For millers, feed manufacturers, and ingredient processors. Germination ≥85% confirmed for seed-quality lots; not tested for milling use.':
        'Psylliumzaden (Plantago ovata) 98% zuiverheid, machine-gereinigd. Luchtafscheider en zwaartekrachttabel gereinigd om lichte deeltjes en vreemde stoffen te verwijderen (≤2%).',
      'Psyllium seeds 99% purity, optically sorted. Foreign matter ≤0.5% versus ≤2% in standard grade. Commands an 8–12% price premium. Preferred by millers producing 98%+ purity husk grades where seed purity directly affects finished husk yield and consistency.':
        'Psylliumzaden 99% zuiverheid, optisch gesorteerd. Vreemde stoffen ≤0,5% versus ≤2% in standaardkwaliteit. 8–12% prijspremie.',
      'Psyllium husk 85% purity from Siddhpur, Gujarat. Swell volume minimum 30 ml/g. Below the NF and USP thresholds for supplement and laxative monographs. Used in animal feed, industrial fibre blending, and cost-sensitive food applications where pharmacopoeia compliance is not required.':
        'Psylliumvezels 85% zuiverheid uit Siddhpur, Gujarat. Zwelvolume minimaal 30 ml/g. Gebruikt in diervoeder en kostengevoelige levensmiddelen.',
      'Psyllium husk 95% purity, NF-compliant. Swell volume minimum 40 ml/g. Used in dietary fibre supplements, functional cereals, and food fibre enrichment where the pharmacopoeia standard is Food / NF rather than USP or EP. COA annotated to NF on request.':
        'Psylliumvezels 95% zuiverheid, NF-conform. Zwelvolume minimaal 40 ml/g. Voor voedingsvezelsupplementen en verrijking.',
      'Psyllium husk 98% purity, USP and EP compliant. Swell volume minimum 45 ml/g. For laxative capsule fills, OTC sachet products, and supplement formulations requiring a full USP or EP COA. NABL-accredited lab testing per shipment.':
        'Psylliumvezels 98% zuiverheid, USP- en EP-conform. Zwelvolume minimaal 45 ml/g. Voor laxeercapsules en OTC-sachets.',
      'Psyllium husk 99% purity from Gujarat, India — the pharmaceutical grade. Minimum swell volume 50 ml/g, meeting the Plantago ovata husk monographs in USP, EP, and IP. Used by pharma brands, OTC laxative manufacturers, and supplement companies where a full pharmacopoeia COA is required per lot.':
        'Psylliumvezels 99% zuiverheid uit Gujarat, India — de farmaceutische kwaliteit. Minimaal zwelvolume 50 ml/g.',
      'Psyllium husk powder 85% purity, 40–60 mesh (particle size 250–425 μm). Visible texture in finished products makes it suitable for gluten-free artisan bread and high-fibre cereal. Below NF and USP swell volume thresholds. Lowest cost per unit in our powder range.':
        'Psylliumvezelpoeder 85% zuiverheid, 40–60 mesh. Geschikt voor glutenvrij ambachtelijk brood. Laagste prijs per eenheid.',
      'Psyllium husk powder 95% purity at 80 mesh (177 μm). Swell volume minimum 42 ml/g. Viscosity approximately 100 cP at 1% solution. Good flow characteristics for dosator and tamping-pin capsule filling equipment. Used in functional food blends, fibre sachets, and supplement capsules.':
        'Psylliumvezelpoeder 95% zuiverheid bij 80 mesh. Zwelvolume minimaal 42 ml/g. Viscositeit 100 cP in 1% oplossing.',
      'Psyllium husk powder 98% purity at 100 mesh (149 μm). USP and EP compliant. Swell volume minimum 48 ml/g, viscosity approximately 250 cP at 1% solution. For pharma capsule fills, drink mix powders, and functional food applications where a pharmacopoeia COA is required.':
        'Psylliumvezelpoeder 98% zuiverheid bij 100 mesh. USP- en EP-conform. Viscositeit 250 cP.',
      'Psyllium husk powder 99% purity at 200 mesh (75 μm). USP, EP, and IP compliant. Swell volume ≥55 ml/g, viscosity approximately 400 cP at 1% solution — the highest in our powder range. Used in cosmetic formulations, premium supplement powders, and pharmaceutical production where maximum mucilage activity and fine uniform particle size are required.':
        'Psylliumvezelpoeder 99% zuiverheid bij 200 mesh. USP-, EP- en IP-conform. Viscositeit 400 cP.',
      'Psyllium khakha powder Feed Grade A, 30–40% crude fibre. Coarse particle size (20–40 mesh). Total ash ≤8%. For cattle and buffalo feed programs where maximum fibre bulk is the primary spec and blending into coarse compound feed is standard.':
        'Psyllium khakhapoeder Diervoederkwaliteit A, 30–40% ruwe celstof. Grof mesh. Totale as ≤8%. Voor rundvee- en buffelvoer.',
      'Psyllium khakha powder Feed Grade B, 25–30% crude fibre. Fine particle size (40–60 mesh). For pellet manufacturing and premix blending where uniform mixing in compound feed is more critical than maximum fibre content. Total ash ≤10%.':
        'Psyllium khakhapoeder Diervoederkwaliteit B, 25–30% ruwe celstof. Fijn mesh. Voor pelletfabricage en premixen. Totale as ≤10%.',
      'Psyllium fibre for paper, textile sizing, and absorbent applications. 40–55% crude fibre at 40–60 mesh, moisture ≤12%. Heavy metals to buyer specification. Consistent sieve profile and stable moisture are the primary supply requirements for most industrial buying programs.':
        'Psylliumvezels voor papier-, textiel- en absorberende toepassingen. 40-55% ruwe celstof bij 40-60 mesh, vocht ≤12%.',
      'Finer mesh (60–100) and higher crude fibre (50–60%) for cosmetics and personal care. Total ash ≤8%. For applications where particle uniformity and consistent dispersion in aqueous formulations matter.':
        'Fijnere mesh (60-100) en hogere ruwe celstof (50-60%) voor cosmetica en persoonlijke verzorging. Totale as ≤8%.',
      'Food-safe heavy metal limits (Lead, Arsenic, Cadmium within food-grade thresholds). 35–45% crude fibre at 40–80 mesh. Used as a natural fibre source and binder in pet food manufacturing where animal safety documentation is required alongside the standard COA.':
        'Voedselveilige limieten voor zware metalen. Natuurlijke vezelbron en bindmiddel voor de productie van diervoeding.',
      'USDA National Organic Program certified psyllium husk for the US market. Certification covers seed origin, growing practices (no synthetic pesticides or fertilisers), processing facility, and handling chain. Transaction certificate (TC) per shipment links the specific lot to the organic certificate. Purity ≥95%, swell volume ≥40 ml/g.':
        'USDA National Organic Program gecertificeerde psylliumvezels voor de Amerikaanse markt. TC per zending. Zuiverheid ≥95%.',
      'EU Organic certified psyllium husk under EU Regulation 2018/848. Certificate of Inspection (COI) provided per shipment for EU customs and import authority requirements. Lot-level traceability and certificate review before purchase order. Purity ≥95%, swell volume ≥40 ml/g.':
        'EU Biologisch gecertificeerde psylliumvezels onder EU-verordening 2018/848. COI verstrekt per zending.',
      'Compressed psyllium cattle feed block (Sagar Gola type) combining husk, khakha, molasses, and mineral mix. Designed for direct farm-level feeding without processing. Supports digestive regularity and hydration retention in dairy cattle and buffalo. Metabolisable energy approximately 9–10 MJ/kg DM.':
        'Geperst psyllium veevoederblok (type Sagar Gola) met vezels, khakha, melasse en mineralen. Voor directe voeding.',
      'Loose granule psyllium cattle feed (Sagar Lali type) with khakha as the primary base plus grain mix. Higher crude fibre (30–40%) and protein (4–6%) than Sagar Gola. For cattle, poultry, and ruminant bulk fibre supplementation, or for buyers who blend into a compound feed program.':
        'Los psyllium veevoer in korrelvorm (type Sagar Lali) met khakha als primaire basis en graanmix. Hoger in celstof.'
    },
    faqs: {
      'What certifications cover your NOP organic psyllium?': {
        q: 'Welke certificeringen dekken uw NOP biologische psyllium?',
        a: 'Gecertificeerd onder het USDA National Organic Program (NOP). De certificering dekt de zaadbron, teeltpraktijken, verwerkingsfaciliteit en distributieketen. We delen het certificaat en de Transaction Certificate (TC) voorafgaand aan de bestelling.'
      },
      'What document do US organic importers need per shipment?': {
        q: 'Welk document hebben Amerikaanse importeurs van biologische producten per zending nodig?',
        a: 'Een Transaction Certificate (TC) uitgegeven door de certificeerder per zending. Dit document koppelt de specifieke partij aan het biologische certificaat. We leveren dit standaard mee.'
      },
      'What purity and swell volume does NOP organic psyllium have?': {
        q: 'Welke zuiverheid en zwelvolume heeft NOP biologische psyllium?',
        a: 'Minimaal ≥95% zuiverheid, zwelvolume ≥40 ml/g. Analyse-certificaat (COA) met vocht en microbiologie per zending meegeleverd.'
      },
      'What is the price premium for organic psyllium?': {
        q: 'Wat is de meerprijs voor biologische psyllium?',
        a: 'Meestal 25-40% boven de conventionele 95% kwaliteit, afhankelijk van gecertificeerde voorraden en marktomstandigheden. Neem contact op voor actuele prijzen.'
      },
      'What document do EU importers need for organic psyllium?': {
        q: 'Welk document hebben EU-importeurs nodig voor biologische psyllium?',
        a: 'Een Certificate of Inspection (COI) onder EU-verordening 2018/848. Dit wordt per zending uitgegeven en is vereist door de EU-douane voor biologische import.'
      },
      'Is your EU organic psyllium certified under the 2018/848 regulation?': {
        q: 'Is uw EU biologische psyllium gecertificeerd onder verordening 2018/848?',
        a: 'Ja. Biologische batches voor de EU zijn gecertificeerd onder EU-verordening 2018/848. Kopie van het certificaat en COI worden voorafgaand aan de bestelling gedeeld.'
      },
      'What is the swell volume of EU organic psyllium?': {
        q: 'Wat is het zwelvolume van EU biologische psyllium?',
        a: 'Minimaal ≥40 ml/g bij ≥95% zuiverheid. Fysisch identiek aan de NOP-kwaliteit — alleen de certificering verschilt per bestemmingsmarkt.'
      },
      'Can I review the organic certificate before placing an order?': {
        q: 'Kan ik het biologische certificaat inzien voordat ik een bestelling plaats?',
        a: 'Ja. Wij delen het actuele biologische certificaat en de herkomstgegevens voorafgaand aan de bestelbevestiging. Dit is standaard voor al onze biologische partijen.'
      }
    }
  }
};

export function translateLead(lead: string, lang: LanguageCode): string {
  const map = productI18n[lang]?.leads;
  if (!map) return lead;
  return map[lead] ?? lead;
}

export function translateFaqQ(q: string, lang: LanguageCode): string {
  const map = productI18n[lang]?.faqs;
  if (!map) return q;
  return map[q]?.q ?? q;
}

export function translateFaqA(q: string, a: string, lang: LanguageCode): string {
  const map = productI18n[lang]?.faqs;
  if (!map) return a;
  return map[q]?.a ?? a;
}

export function translateNote(note: string, lang: LanguageCode): string {
  const map = productI18n[lang]?.notes;
  if (!map) return note;
  return map[note] ?? note;
}

export const productNameI18n: Partial<Record<LanguageCode, Record<string, string>>> = {
  zh: {
    'Psyllium Seeds': '车前子种子',
    'Psyllium Husk': '车前子壳',
    'Psyllium Husk Powder': '车前子壳粉',
    'Psyllium Khakha Powder': '车前子 Khakha 粉',
    'Industrial Grade Psyllium': '工业级车前子',
    'Organic Psyllium': '有机车前子',
    'Psyllium Cattle Feed': '车前子牛饲料'
  },
  ar: {
    'Psyllium Seeds': 'بذور السيليوم',
    'Psyllium Husk': 'قشور السيليوم',
    'Psyllium Husk Powder': 'بودرة قشور السيليوم',
    'Psyllium Khakha Powder': 'بودرة كاكا السيليوم',
    'Industrial Grade Psyllium': 'سيليوم الدرجة الصناعية',
    'Organic Psyllium': 'سيليوم عضوي',
    'Psyllium Cattle Feed': 'علف الماشية من السيليوم'
  },
  nl: {
    'Psyllium Seeds': 'Psylliumzaden',
    'Psyllium Husk': 'Psylliumvezels',
    'Psyllium Husk Powder': 'Psylliumvezelpoeder',
    'Psyllium Khakha Powder': 'Psyllium khakhapoeder',
    'Industrial Grade Psyllium': 'Industriële kwaliteit psyllium',
    'Organic Psyllium': 'Biologische psyllium',
    'Psyllium Cattle Feed': 'Psyllium veevoer'
  }
};

export const productLabelI18n: Partial<Record<LanguageCode, Record<string, string>>> = {
  zh: {
    'Seed raw material': '种子原料',
    'High-purity fibre': '高纯度纤维',
    'Standard & ultra-fine powders': '标准与超细粉末',
    'Feed by-product': '饲料副产品',
    'Industrial fibre & binder': '工业纤维与粘合剂',
    'NOP & EU certified organic': 'NOP & 欧盟认证有机',
    'Processed animal feed': '加工动物饲料'
  },
  ar: {
    'Seed raw material': 'مادة خام بذور',
    'High-purity fibre': 'ألياف عالية النقاوة',
    'Standard & ultra-fine powders': 'بودرة قياسية وفائقة النعومة',
    'Feed by-product': 'منتج ثانوي للأعلاف',
    'Industrial fibre & binder': 'ألياف ورابط صناعي',
    'NOP & EU certified organic': 'عضوي معتمد من NOP والاتحاد الأوروبي',
    'Processed animal feed': 'علف حيواني مصنع'
  },
  nl: {
    'Seed raw material': 'Zaadgrondstof',
    'High-purity fibre': 'Hoogwaardige vezels',
    'Standard & ultra-fine powders': 'Standaard & ultrafijne poeders',
    'Feed by-product': 'Bijproduct voor diervoeder',
    'Industrial fibre & binder': 'Industriële vezel & bindmiddel',
    'NOP & EU certified organic': 'NOP & EU gecertificeerd biologisch',
    'Processed animal feed': 'Verwerkt diervoeder'
  }
};

export const productHeroI18n: Partial<Record<LanguageCode, Record<string, string>>> = {
  zh: {
    'Cleaned Plantago ovata seed for millers, ingredient processors, and feed buyers.': '为磨粉商、原料加工商和饲料买家提供清洁的卵叶车前草种子。',
    'Bulk psyllium husk from Siddhpur, Gujarat — the export processing hub.': '来自出口加工中心古吉拉特邦 Siddhpur 的散装车前子壳。',
    'Premium psyllium husk powder in 40 to 200 mesh for global food and pharma buyers.': '为全球食品和制药买家提供 40 至 200 目的优质车前子壳粉。',
    'Fibre-rich khakha powder for animal feed, agriculture, and compound feed manufacturing.': '富含纤维的 Khakha 粉，适用于动物饲料、农业和配合饲料制造。',
    'Psyllium powder and husk for industrial binding, sizing, and absorbent applications.': '用于工业粘合、上浆和吸水应用的车前子粉和外壳。',
    'Certified organic psyllium husk and powder under USDA NOP and EU regulations.': '根据美国 USDA NOP 和欧盟法规认证的有机车前子壳和粉末。',
    'High-fibre cattle feed pellets and blocks with psyllium, khakha, and mineral mix.': '含有车前子、Khakha 和矿物质混合料的高纤维牛饲料颗粒和饲料块。'
  },
  ar: {
    'Cleaned Plantago ovata seed for millers, ingredient processors, and feed buyers.': 'بذور بلانتاجو أوفاتا منظفة للمطاحن ومصنعي المكونات ومشتري الأعلاف.',
    'Bulk psyllium husk from Siddhpur, Gujarat — the export processing hub.': 'قشور السيليوم بالجملة من سيدهبور، غوجارات - مركز معالجة التصدير.',
    'Premium psyllium husk powder in 40 to 200 mesh for global food and pharma buyers.': 'بودرة قشور السيليوم الفاخرة من 40 إلى 200 مش لمشتري الأغذية والأدوية عالميًا.',
    'Fibre-rich khakha powder for animal feed, agriculture, and compound feed manufacturing.': 'بودرة كاكا غنية بالألياف لعلف الحيوانات والزراعة وتصنيع الأعلاف المركبة.',
    'Psyllium powder and husk for industrial binding, sizing, and absorbent applications.': 'بودرة وقشور السيليوم للتطبيقات الصناعية كالربط والتغرية والامتصاص.',
    'Certified organic psyllium husk and powder under USDA NOP and EU regulations.': 'قشور وبودرة السيليوم معتمدة عضويًا بموجب لوائح NOP الأمريكية والاتحاد الأوروبي.',
    'High-fibre cattle feed pellets and blocks with psyllium, khakha, and mineral mix.': 'قوالب وحبيبات علف الماشية عالية الألياف مع السيليوم والكاكا والخلطة المعدنية.'
  },
  nl: {
    'Cleaned Plantago ovata seed for millers, ingredient processors, and feed buyers.': 'Gereinigd Plantago ovata zaad voor molenaars, ingrediëntenverwerkers en voederkopers.',
    'Bulk psyllium husk from Siddhpur, Gujarat — the export processing hub.': 'Bulk psylliumvezels uit Siddhpur, Gujarat — de exportverwerkingshub.',
    'Premium psyllium husk powder in 40 to 200 mesh for global food and pharma buyers.': 'Premium psylliumvezelpoeder in 40 tot 200 mesh voor wereldwijde levensmiddelen- en farmaceutische kopers.',
    'Fibre-rich khakha powder for animal feed, agriculture, and compound feed manufacturing.': 'Vezelrijk khakhapoeder voor diervoeder, landbouw en de productie van mengvoeder.',
    'Psyllium powder and husk for industrial binding, sizing, and absorbent applications.': 'Psylliumpoeder en -vezels voor industriële binding, verstijving en absorberende toepassingen.',
    'Certified organic psyllium husk and powder under USDA NOP and EU regulations.': 'Gecertificeerde biologische psylliumvezels en -poeder onder USDA NOP en EU-regelgeving.',
    'High-fibre cattle feed pellets and blocks with psyllium, khakha, and mineral mix.': 'Vezelrijke veevoederpellets en -blokken met psyllium, khakha en mineralenmix.'
  }
};

export const productSummaryI18n: Partial<Record<LanguageCode, Record<string, string>>> = {
  zh: {
    'Bulk psyllium seed supply from Gujarat and Rajasthan with origin records, lot traceability, and export packing.': '来自古吉拉特邦和拉贾斯坦邦的大宗车前子种子供应，具有产地记录、批次可追溯性和出口包装。',
    'High-mucilage Plantago ovata husk in 85%, 95%, 98%, and 99% purity. Sourced directly from our Siddhpur facility with lot COA.': '纯度为 85%、95%、98% 和 99% 的高粘液卵叶车前草壳。直接从我们的 Siddhpur 工厂采购，附带批次 COA。',
    'High-viscosity Plantago ovata powder milled from selected husk lots. Custom mesh sizes, USP/EP/NF compliant grades, and bulk packing.': '由精选外壳批次磨制的高粘度卵叶车前子粉。定制目数、符合 USP/EP/NF 标准的等级以及大宗包装。',
    'Cost-effective psyllium by-product with consistent crude fibre, moisture, and particle size for feed formulators and distributors.': '具有稳定粗纤维、水分和粒径的高性价比车前子副产品，适用于饲料配方商和分销商。',
    'Natural, high-mucilage binders for green binding, soil control, and cosmetic formulations. Consistent mesh and moisture.': '用于绿色粘合、土壤控制和化妆品配方的天然高粘液粘合剂。目数和水分稳定。',
    'Traceable organic psyllium supply from certified growers in Gujarat and Rajasthan. Transaction Certificate (TC) per shipment.': '来自古吉拉特邦和拉贾斯坦邦认证种植户的可追溯有机车前子供应。每批货物随附交易证书 (TC)。',
    'Premium veterinary-use feed designed for dairy cattle, buffalo, and horses. Promotes digestive health and hydration.': '专为奶牛、水牛和马设计的优质兽用饲料。促进消化健康和水分保持。'
  },
  ar: {
    'Bulk psyllium seed supply from Gujarat and Rajasthan with origin records, lot traceability, and export packing.': 'توريد بذور السيليوم بالجملة من غوجارات وراجستان مع سجلات المنشأ وتتبع الشحنات وتعبئة التصدير.',
    'High-mucilage Plantago ovata husk in 85%, 95%, 98%, and 99% purity. Sourced directly from our Siddhpur facility with lot COA.': 'قشور بلانتاجو أوفاتا عالية الصمغ بنقاوة 85% و 95% و 98% و 99%. مصنعة مباشرة بمصنعنا مع شهادة COA.',
    'High-viscosity Plantago ovata powder milled from selected husk lots. Custom mesh sizes, USP/EP/NF compliant grades, and bulk packing.': 'بودرة بلانتاجو أوفاتا عالية اللزوجة مطحونة من قشور مختارة. مقاسات مش مخصصة وتوافق دستوري وتعبئة بالجملة.',
    'Cost-effective psyllium by-product with consistent crude fibre, moisture, and particle size for feed formulators and distributors.': 'منتج ثانوي للسيليوم فعال التكلفة مع ألياف خام ورطوبة وحبيبات متسقة لمركبي وموزعي الأعلاف.',
    'Natural, high-mucilage binders for green binding, soil control, and cosmetic formulations. Consistent mesh and moisture.': 'روابط طبيعية عالية الصمغ للربط الأخضر ومكافحة التربة وتركيبات مستحضرات التجميل. مش ورطوبة ثابتة.',
    'Traceable organic psyllium supply from certified growers in Gujarat and Rajasthan. Transaction Certificate (TC) per shipment.': 'إمدادات سيليوم عضوي يمكن تتبعها من مزارعين معتمدين في غوجارات وراجستان. شهادة TC مع كل شحنة.',
    'Premium veterinary-use feed designed for dairy cattle, buffalo, and horses. Promotes digestive health and hydration.': 'علف ممتاز للاستخدام البيطري مصمم لأبقار الحليب والجاموس والخيول. يعزز الهضم والترطيب.'
  },
  nl: {
    'Bulk psyllium seed supply from Gujarat and Rajasthan with origin records, lot traceability, and export packing.': 'Levering van bulk psylliumzaden uit Gujarat en Rajasthan met herkomstgegevens, traceerbaarheid en exportverpakking.',
    'High-mucilage Plantago ovata husk in 85%, 95%, 98%, and 99% purity. Sourced directly from our Siddhpur facility with lot COA.': 'Hoogwaardige Plantago ovata vezels in 85%, 95%, 98% en 99% zuiverheid. Rechtstreeks uit onze Siddhpur-faciliteit met COA.',
    'High-viscosity Plantago ovata powder milled from selected husk lots. Custom mesh sizes, USP/EP/NF compliant grades, and bulk packing.': 'Hoogvisceus Plantago ovata poeder gemalen uit geselecteerde vezelpartijen. Aangepaste mesh-groottes, USP/EP/NF-conforme graden en bulkverpakking.',
    'Cost-effective psyllium by-product with consistent crude fibre, moisture, and particle size for feed formulators and distributors.': 'Kosteneffectief psylliumbijproduct met consistente ruwe celstof, vochtgehalte en deeltjesgrootte voor mengvoerformuleerders.',
    'Natural, high-mucilage binders for green binding, soil control, and cosmetic formulations. Consistent mesh and moisture.': 'Natuurlijke bindmiddelen met hoog slijmgehalte voor ecologische binding, bodembeheer en cosmetische formuleringen.',
    'Traceable organic psyllium supply from certified growers in Gujarat and Rajasthan. Transaction Certificate (TC) per shipment.': 'Traceerbare levering van biologische psyllium van gecertificeerde telers in Gujarat en Rajasthan. TC per zending.',
    'Premium veterinary-use feed designed for dairy cattle, buffalo, and horses. Promotes digestive health and hydration.': 'Premium voeder voor veterinair gebruik, ontworpen voor melkvee, buffels en paarden. Bevordert spijsvertering en hydratatie.'
  }
};

export const productGradeLabelI18n: Partial<Record<LanguageCode, Record<string, string>>> = {
  zh: {
    'Standard': '标准级',
    'Sortex': '色选级',
    'Husk 85%': '85% 纯度整壳',
    'Husk 95% (NF)': '95% 纯度整壳 (NF)',
    'Husk 98% (USP/EP)': '98% 纯度整壳 (USP/EP)',
    'Husk 99% (Pharma)': '99% 纯度整壳 (制药级)',
    'Powder 85% / 40-60m': '85% 纯度粉末 / 40-60 目',
    'Powder 95% / 80m': '95% 纯度粉末 / 80 目',
    'Powder 98% / 100m (USP)': '98% 纯度粉末 / 100 目 (USP)',
    'Powder 99% / 200m (Pharma)': '99% 纯度粉末 / 200 目 (制药级)',
    'Feed Grade A': '饲料 A 级',
    'Feed Grade B': '饲料 B 级',
    'Industrial Fibre 40-60m': '工业纤维 40-60 目',
    'Cosmetics Powder 60-100m': '化妆品粉末 60-100 目',
    'Pet Food Binder 40-80m': '宠物食品粘合剂 40-80 目',
    'Organic Husk 95% (NOP)': '有机整壳 95% (NOP)',
    'Organic Husk 95% (EU)': '有机整壳 95% (欧盟)',
    'Cattle Feed Block (Gola)': '压缩牛饲料块 (Gola)',
    'Granule Feed (Lali)': '散装颗粒饲料 (Lali)',
    'Feed Grade A (30–40% fibre)': '饲料 A 级 (30–40% 纤维)',
    'Feed Grade B (25–30% fibre)': '饲料 B 级 (25–30% 纤维)'
  },
  ar: {
    'Standard': 'قياسي',
    'Sortex': 'سورتكس (مفروز)',
    'Husk 85%': 'قشور 85%',
    'Husk 95% (NF)': 'قشور 95% (NF)',
    'Husk 98% (USP/EP)': 'قشور 98% (USP/EP)',
    'Husk 99% (Pharma)': 'قشور 99% (دوائي)',
    'Powder 85% / 40-60m': 'بودرة 85% / 40-60 مش',
    'Powder 95% / 80m': 'بودرة 95% / 80 مش',
    'Powder 98% / 100m (USP)': 'بودرة 98% / 100 مش (USP)',
    'Powder 99% / 200m (Pharma)': 'بودرة 99% / 200 مش (دوائي)',
    'Feed Grade A': 'درجة أعلاف أ',
    'Feed Grade B': 'درجة أعلاف ب',
    'Industrial Fibre 40-60m': 'ألياف صناعية 40-60 مش',
    'Cosmetics Powder 60-100m': 'بودرة مستحضرات تجميل 60-100 مش',
    'Pet Food Binder 40-80m': 'رابط طعام حيوانات أليفة 40-80 مش',
    'Organic Husk 95% (NOP)': 'قشور عضوية 95% (NOP)',
    'Organic Husk 95% (EU)': 'قشور عضوية 95% (الاتحاد الأوروبي)',
    'Cattle Feed Block (Gola)': 'قالب علف الماشية (جولا)',
    'Granule Feed (Lali)': 'علف حبيبي (لالي)',
    'Feed Grade A (30–40% fibre)': 'درجة أعلاف أ (30-40% ألياف)',
    'Feed Grade B (25–30% fibre)': 'درجة أعلاف ب (25-30% ألياف)'
  },
  nl: {
    'Standard': 'Standaard',
    'Sortex': 'Sortex',
    'Husk 85%': 'Vezels 85%',
    'Husk 95% (NF)': 'Vezels 95% (NF)',
    'Husk 98% (USP/EP)': 'Vezels 98% (USP/EP)',
    'Husk 99% (Pharma)': 'Vezels 99% (Pharma)',
    'Powder 85% / 40-60m': 'Poeder 85% / 40-60m',
    'Powder 95% / 80m': 'Poeder 95% / 80m',
    'Powder 98% / 100m (USP)': 'Poeder 98% / 100m (USP)',
    'Powder 99% / 200m (Pharma)': 'Poeder 99% / 200m (Pharma)',
    'Feed Grade A': 'Diervoederkwaliteit A',
    'Feed Grade B': 'Diervoederkwaliteit B',
    'Industrial Fibre 40-60m': 'Industriële vezel 40-60m',
    'Cosmetics Powder 60-100m': 'Cosmeticapoeder 60-100m',
    'Pet Food Binder 40-80m': 'Petfood bindmiddel 40-80m',
    'Organic Husk 95% (NOP)': 'Biologische vezels 95% (NOP)',
    'Organic Husk 95% (EU)': 'Biologische vezels 95% (EU)',
    'Cattle Feed Block (Gola)': 'Geperst veevoerblok (Gola)',
    'Granule Feed (Lali)': 'Veevoer in korrels (Lali)',
    'Feed Grade A (30–40% fibre)': 'Diervoederkwaliteit A (30–40% celstof)',
    'Feed Grade B (25–30% fibre)': 'Diervoederkwaliteit B (25–30% celstof)'
  }
};

export function translateProductName(name: string, lang: LanguageCode): string {
  const map = productNameI18n[lang];
  if (!map) return name;
  return map[name] ?? name;
}

export function translateProductLabel(label: string, lang: LanguageCode): string {
  const map = productLabelI18n[lang];
  if (!map) return label;
  return map[label] ?? label;
}

export function translateProductHero(hero: string, lang: LanguageCode): string {
  const map = productHeroI18n[lang];
  if (!map) return hero;
  return map[hero] ?? hero;
}

export function translateProductSummary(summary: string, lang: LanguageCode): string {
  const map = productSummaryI18n[lang];
  if (!map) return summary;
  return map[summary] ?? summary;
}

export function translateProductGradeLabel(gradeLabel: string, lang: LanguageCode): string {
  const map = productGradeLabelI18n[lang];
  if (!map) return gradeLabel;
  return map[gradeLabel] ?? gradeLabel;
}

export const insightTranslations: Record<string, Record<string, any>> = {
  es: esTrans,
  de: deTrans,
  fr: frTrans,
  ar: arTrans,
  zh: zhTrans,
  pt: ptTrans,
  it: itTrans,
  nl: nlTrans,
  ru: ruTrans
};



