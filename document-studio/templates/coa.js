/* Certificate of Analysis — per-batch quality document */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h;

  S.register({
    id: 'coa',
    label: 'Certificate of Analysis',
    category: 'quality',

    fields: [
      { key: 'product', label: 'Product', type: 'product', group: 'Product', default: 'husk95' },
      { key: 'titleNote', label: 'Title suffix', type: 'text', group: 'Product', default: 'Whole (Premium Quality)' },

      { key: 'batchNo', label: 'Batch No.', type: 'text', group: 'Batch', default: 'RM/PH95/2605/148' },
      { key: 'mfgDate', label: 'Mfg. Date', type: 'text', group: 'Batch', default: '05 / 2026' },
      { key: 'expDate', label: 'Exp. Date', type: 'text', group: 'Batch', default: '05 / 2028' },
      { key: 'releaseDate', label: 'Release Date', type: 'text', group: 'Batch', default: '26 / 05 / 2026' },

      { key: 'botanical', label: 'Botanical Name', type: 'text', group: 'Results', default: 'Plantago Ovata' },
      { key: 'purity', label: 'Purity result', type: 'text', group: 'Results', default: '95.37%' },
      { key: 'colour', label: 'Colour (L*) result', type: 'text', group: 'Results', default: '70.83' },
      { key: 'appearance', label: 'Appearance result', type: 'text', group: 'Results', default: 'Pass' },
      { key: 'identification', label: 'Identification result', type: 'text', group: 'Results', default: 'Pass' },
      { key: 'totalAsh', label: 'Total Ash result', type: 'text', group: 'Results', default: '2.34%' },
      { key: 'acidAsh', label: 'Acid Insoluble Ash result', type: 'text', group: 'Results', default: '0.30%' },
      { key: 'swell', label: 'Swell Volume result', type: 'text', group: 'Results', default: '48.00 ml/gm' },
      { key: 'moisture', label: 'Moisture result', type: 'text', group: 'Results', default: '8.29%' },
      { key: 'lightMatter', label: 'Light Extraneous Matter result', type: 'text', group: 'Results', default: '4.63%' },

      { key: 'standard', label: 'Conforms to', type: 'text', group: 'Conformance', default: 'USP-41' },

      { key: 'analysedTitle', label: 'Analysed-by title', type: 'text', group: 'Signatories', default: 'Quality Control Chemist' },
      { key: 'approvedTitle', label: 'Approved-by title', type: 'text', group: 'Signatories', default: 'Quality Assurance Manager' }
    ],

    filename: function (ctx) {
      return 'RM-Psyllium-' + h.slug(ctx.product.name) + '-Certificate-of-Analysis-COA';
    },

    render: function (ctx) {
      var c = ctx.c, f = ctx.form, p = ctx.product, ex = ctx.exporter, e = h.esc;
      var title = f.titleNote ? p.name + ', ' + f.titleNote : p.name;

      function row(name, spec, res) {
        return '<tr><td class="lbl col27">' + e(name) + '</td><td class="spec">' + spec + '</td><td class="res">' + e(res) + '</td></tr>';
      }

      var inner =
        c.header(ex) +
        c.docTitle('Certificate of Analysis') +
        '<div class="coa-product"><span class="cp-label">Name of Product</span>' +
          '<span class="cp-value">' + e(title) + '</span></div>' +
        '<div class="coa-batch">' +
          item('Batch No.', f.batchNo) + item('Mfg. Date', f.mfgDate) +
          item('Exp. Date', f.expDate) + item('Release Date', f.releaseDate) +
        '</div>' +
        '<table class="dt"><thead><tr><th>Name of Test</th><th>Specification</th><th>Result</th></tr></thead><tbody>' +
          row('Botanical Name', '….', f.botanical) +
          row('Purity', e(p.purity).replace('Not less than', 'NLT'), f.purity) +
          row('Colour (L*)', '70 – 71', f.colour) +
          row('Appearance', 'Pale to medium buff coloured husk having a slight pinkish tinge, a weak characteristic odor and a very mucilaginous taste.', f.appearance) +
          row('Identification',
            '<strong>A:</strong> Mounted in cresol-cells, viewed microscopically, are composed of polygonal prismatic cells having 4 to 6 straight or slightly wavy walls. ' +
            '<strong>B:</strong> Mounted in alcohol and irrigated with water, viewed microscopically, the mucilage in the outer part of the epidermal cells swells rapidly and goes into solution.',
            f.identification) +
          row('Total Ash', 'NMT 4.0%', f.totalAsh) +
          row('Acid Insoluble Ash', 'NMT 1.0%', f.acidAsh) +
          row('Swell Volume', e(p.swell).replace('Not less than', 'NLT'), f.swell) +
          row('Moisture', 'NMT 12%', f.moisture) +
          row('Light Extraneous Matter', 'NMT 5%', f.lightMatter) +
        '</tbody></table>' +
        '<div class="conforms"><span class="seal">Remarks</span>' +
          '<span>From the above results, we certify that sample conforms to <strong>' + e(f.standard) + '</strong> in above respects.</span></div>' +
        '<p class="note">This Certificate of Analysis is issued for the batch / lot referenced above and is valid only for the consignment supplied against it. Results are based on representative samples drawn at the time of dispatch.</p>' +
        c.signatures([
          { role: 'Analysed by', name: '', title: f.analysedTitle },
          { role: 'Approved by', name: ex.signatory || '', title: f.approvedTitle }
        ]);

      return c.page({ exporter: ex, inner: inner, docRef: 'Certificate of Analysis', pageOf: 'Page 1 of 1' });

      function item(label, val) {
        return '<div class="cb-item"><span class="cb-label">' + e(label) + '</span><span class="cb-value">' + e(val) + '</span></div>';
      }
    }
  });
})();
