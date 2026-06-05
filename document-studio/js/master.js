/* ════════════════════════════════════════════════════════════════
   master.js — shared master data (enter once, reuse everywhere)
   Seeded with known RM Psyllium details; blanks are filled by the
   user once. Persisted via RMStore; JSON export/import is the backup
   and the future Supabase-migration payload.
   ════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var KEY = 'master';

  // ── factory defaults ────────────────────────────────────────────
  var DEFAULTS = {
    exporter: {
      name: 'RM Psyllium',
      tagline: 'Manufacturer of Psyllium Products',
      address: 'Patan Road, Khali, Char Rasta, Nedra, Siddhpur, Gujarat 384151, India',
      phone: '8949817791, 8000008381',
      email: 'export@rmpsyllium.com',
      web: 'rmpsyllium.com',
      // fill once:
      iec: '',
      gstin: '',
      fssai: '',
      adCode: '',
      pan: '',
      signatory: '',
      signatoryTitle: 'Authorized Signatory',
      bankName: '',
      bankBranch: '',
      bankAccount: '',
      bankSwift: '',
      bankIfsc: '',
      bankAdCode: ''
    },
    // product catalog — HS code shared across psyllium grades
    products: [
      { id: 'husk97', name: 'Psyllium Husk 97% Pure', grade: '97', hs: '12119032', purity: 'Not less than 97%', swell: 'Not less than 45 ml/gm', colour: 'Creamy / off white', unit: 'KG' },
      { id: 'husk95', name: 'Psyllium Husk 95% Pure', grade: '95', hs: '12119032', purity: 'Not less than 95%', swell: 'Not less than 40 ml/gm', colour: 'Pale buff white', unit: 'KG' },
      { id: 'husk85', name: 'Psyllium Husk 85% Pure', grade: '85', hs: '12119032', purity: 'Not less than 85%', swell: 'Not less than 30 ml/gm', colour: 'Buff / light brown', unit: 'KG' },
      { id: 'seed',   name: 'Psyllium Seed',          grade: 'seed', hs: '12119031', purity: 'Not less than 95%', swell: 'Not less than 20 ml/gm', colour: 'Pale white to light brown', unit: 'KG' }
    ],
    // buyer directory
    buyers: [
      // example shape; user adds their own
      // { id:'acme', name:'Acme Foods GmbH', address:'...', country:'Germany', contact:'', notify:'' }
    ],
    // defaults reused across shipments
    shipmentDefaults: {
      incoterm: 'FOB',
      portLoading: 'Mundra, India',
      portDischarge: '',
      currency: 'USD',
      paymentTerms: '30% advance, balance against B/L copy',
      originCountry: 'India'
    },
    // running serials (manual override always allowed in the form)
    serials: { invoice: 1, quotation: 1, proforma: 1 }
  };

  function deepMerge(base, over) {
    if (Array.isArray(base)) return over != null ? over : base;
    if (typeof base === 'object' && base) {
      var out = {};
      for (var k in base) out[k] = deepMerge(base[k], over ? over[k] : undefined);
      if (over) for (var j in over) if (!(j in base)) out[j] = over[j];
      return out;
    }
    return over !== undefined ? over : base;
  }

  var data = deepMerge(DEFAULTS, global.RMStore.get(KEY, null));

  function save() { global.RMStore.set(KEY, data); }

  global.RMMaster = {
    all: function () { return data; },
    exporter: function () { return data.exporter; },
    products: function () { return data.products; },
    product: function (id) { return data.products.filter(function (p) { return p.id === id; })[0] || null; },
    buyers: function () { return data.buyers; },
    buyer: function (id) { return data.buyers.filter(function (b) { return b.id === id; })[0] || null; },
    shipmentDefaults: function () { return data.shipmentDefaults; },
    serials: function () { return data.serials; },

    update: function (path, value) {
      var parts = path.split('.'), o = data;
      for (var i = 0; i < parts.length - 1; i++) o = o[parts[i]];
      o[parts[parts.length - 1]] = value;
      save();
    },
    set: function (next) { data = deepMerge(DEFAULTS, next); save(); },
    reset: function () { data = deepMerge(DEFAULTS, null); global.RMStore.remove(KEY); },

    exportJSON: function () {
      return JSON.stringify({ _type: 'rmstudio-master', _version: 1, data: data }, null, 2);
    },
    importJSON: function (text) {
      var parsed = JSON.parse(text);
      var payload = parsed && parsed.data ? parsed.data : parsed;
      data = deepMerge(DEFAULTS, payload);
      save();
      return data;
    }
  };
})(window);
