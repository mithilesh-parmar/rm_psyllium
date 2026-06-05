/* Declarations — one document, selectable statement type */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h, e = h.esc;

  // standard statements (RM Psyllium boilerplate). {name} = product name.
  var TYPES = {
    'non-gmo': {
      label: 'Non-GMO Declaration', title: 'Non-GMO Declaration',
      body: function (n) {
        return [
          'We hereby declare that the product <strong>' + n + '</strong> supplied by us is <strong>Non-GMO</strong>.',
          'The product is derived from <em>Plantago ovata</em> grown by conventional, non-genetically-modified agricultural practice. It does not contain, and is not produced from, genetically modified organisms.',
          'No genetically modified raw materials or GMO-based auxiliary/processing agents are used at any stage of cultivation, processing or packing.',
          'The product is therefore not subject to GMO labelling requirements under Regulation (EC) No. 1829/2003 and No. 1830/2003.'
        ];
      }
    },
    'gluten-free': {
      label: 'Gluten-Free Declaration', title: 'Gluten-Free Declaration',
      body: function (n) {
        return [
          'We hereby declare that the product <strong>' + n + '</strong> is naturally <strong>gluten-free</strong>.',
          'The product is obtained solely from the seed husk of <em>Plantago ovata</em> and contains no wheat, rye, barley, oats, spelt, kamut or their hybridised strains.',
          'No gluten-containing materials are handled on the dedicated processing line used for this product, and finished goods conform to the gluten-free threshold of &lt; 20 ppm as per Codex Standard 118-1979 and Regulation (EU) No. 828/2014.'
        ];
      }
    },
    'allergen': {
      label: 'Allergen Statement', title: 'Allergen Statement',
      body: function (n) {
        return [
          'We hereby declare that the product <strong>' + n + '</strong> does not contain any of the allergens listed under Annex II of Regulation (EU) No. 1169/2011, and that none of these allergens are present in the product, processed on the same equipment, or used at the production site:',
          '<ul>' +
            '<li>Cereals containing gluten (wheat, rye, barley, oats, spelt, kamut)</li>' +
            '<li>Crustaceans, molluscs and fish</li>' +
            '<li>Eggs, milk and lactose</li>' +
            '<li>Peanuts, tree nuts, soybeans</li>' +
            '<li>Sesame seeds, mustard, celery, lupin</li>' +
            '<li>Sulphur dioxide and sulphites</li>' +
          '</ul>',
          'The product is a single-ingredient natural fibre and carries no allergen cross-contact risk.'
        ];
      }
    },
    'compliance': {
      label: 'Pesticide & Heavy-Metal Compliance', title: 'Compliance Declaration',
      body: function (n) {
        return [
          'We hereby declare that the product <strong>' + n + '</strong> complies with the applicable limits for pesticide residues and heavy metals.',
          'Pesticide residues meet the requirements of USP &lt;561&gt; and Regulation (EC) No. 396/2005 and subsequent amendments.',
          'Heavy metals are within the following limits: Lead (Pb) &lt; 1 ppm, Cadmium (Cd) &lt; 0.5 ppm, Arsenic (As) &lt; 0.5 ppm, Mercury (Hg) &lt; 0.1 ppm.',
          'The product is produced under a HACCP-based food safety system certified to ISO 22000 / FSSC 22000.'
        ];
      }
    },
    'bse-tse': {
      label: 'BSE / TSE-Free Declaration', title: 'BSE / TSE-Free Declaration',
      body: function (n) {
        return [
          'We hereby declare that the product <strong>' + n + '</strong> is of <strong>100% plant origin</strong> and is free from any risk of Bovine Spongiform Encephalopathy (BSE) or Transmissible Spongiform Encephalopathy (TSE).',
          'The product contains no animal-derived materials. No materials of animal origin are used in its cultivation, processing, or packing, in accordance with EMA/410/01 (rev.3).'
        ];
      }
    },
    'free-sale': {
      label: "Free-Sale / Manufacturer's Declaration", title: "Manufacturer's Declaration",
      body: function (n) {
        return [
          'We hereby declare that the product <strong>' + n + '</strong> is manufactured by us in compliance with applicable food-safety regulations and is freely sold and distributed in the domestic market.',
          'The product is produced under FSSAI licence and a food-safety management system certified to ISO 22000 / FSSC 22000, and is fit for human consumption.',
          'This declaration is issued to support registration and importation of the product in the destination market.'
        ];
      }
    }
  };

  var typeOptions = Object.keys(TYPES).map(function (k) { return { value: k, label: TYPES[k].label }; });

  S.register({
    id: 'declaration',
    label: 'Declaration',
    category: 'declaration',

    fields: [
      { key: 'declType', label: 'Declaration type', type: 'select', options: typeOptions, group: 'Declaration', default: 'non-gmo' },
      { key: 'product', label: 'Product', type: 'product', group: 'Declaration', default: 'husk95' },
      { key: 'titleNote', label: 'Product suffix', type: 'text', group: 'Declaration', default: 'Pure, Whole' },
      { key: 'refNo', label: 'Reference No.', type: 'text', group: 'Reference', default: function () { return h.serial('RMP/DEC', 1); } },
      { key: 'date', label: 'Date', type: 'text', group: 'Reference', default: function () { return h.today(); } },
      { key: 'recipient', label: 'Addressed to', type: 'text', group: 'Reference', default: 'To Whom It May Concern' }
    ],

    filename: function (ctx) {
      var t = TYPES[ctx.form.declType] || {};
      return 'RM-Psyllium-' + h.slug(ctx.product.name) + '-' + h.slug(t.label || 'Declaration');
    },

    render: function (ctx) {
      var c = ctx.c, f = ctx.form, ex = ctx.exporter, p = ctx.product;
      var t = TYPES[f.declType] || TYPES['non-gmo'];
      var pname = f.titleNote ? p.name + ' ' + f.titleNote : p.name;

      var meta = c.metaBar([
        { label: 'Reference No.', value: f.refNo },
        { label: 'Date', value: f.date },
        { label: 'Product', value: pname },
        { label: 'Country of Origin', value: 'India' }
      ]);

      var paras = t.body(e(pname)).map(function (x) { return '<p>' + x + '</p>'; }).join('');
      var prose = '<div class="prose"><p>' + e(f.recipient) + ',</p>' + paras +
        '<p>This declaration is issued on the basis of our knowledge and records and is valid until any change in product or process.</p></div>';

      var inner = c.header(ex) + c.docTitle(t.title) + meta +
        '<div style="height:6px"></div>' + prose +
        c.signatures([{ role: 'For ' + ex.name, name: ex.signatory || '', title: ex.signatoryTitle || 'Authorized Signatory' }]);

      return c.page({ exporter: ex, inner: inner, docRef: t.label + ' · ' + (f.refNo || ''), pageOf: '' });
    }
  });
})();
