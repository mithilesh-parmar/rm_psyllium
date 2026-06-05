/* Sales Contract / Order Confirmation */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h, e = h.esc;

  S.register({
    id: 'sales-contract',
    label: 'Sales Contract',
    category: 'commercial',

    fields: [
      { key: 'buyer', label: 'Buyer', type: 'buyer', group: 'Parties' },
      { key: 'docNo', label: 'Contract No.', type: 'text', group: 'Reference', default: function () { return h.serial('RMP/SC', 1); } },
      { key: 'docDate', label: 'Date', type: 'text', group: 'Reference', default: function () { return h.today(); } },

      { key: 'items', label: 'Goods (desc · qty · price)', type: 'items', group: 'Goods' },
      { key: 'currency', label: 'Currency', type: 'text', group: 'Goods', default: 'USD' },

      { key: 'incoterm', label: 'Incoterm', type: 'incoterm', group: 'Terms', default: 'FOB' },
      { key: 'incotermPlace', label: 'Incoterm place', type: 'text', group: 'Terms', default: 'Mundra, India' },
      { key: 'shipmentPeriod', label: 'Shipment Period', type: 'text', group: 'Terms', default: 'Within 30 days of advance receipt' },
      { key: 'paymentTerms', label: 'Payment Terms', type: 'textarea', group: 'Terms', default: '30% advance, balance against B/L copy' },
      { key: 'qualityBasis', label: 'Quality Basis', type: 'text', group: 'Terms', default: 'As per RM Psyllium specification & accepted pre-shipment sample' },
      { key: 'governingLaw', label: 'Governing Law / Arbitration', type: 'textarea', group: 'Terms', default: 'Subject to the laws of India. Disputes settled by arbitration under the Arbitration & Conciliation Act, 1996, seat at Ahmedabad, Gujarat.' }
    ],

    filename: function (ctx) {
      return 'RM-Psyllium-Sales-Contract-' + h.slug(ctx.form.docNo || '');
    },

    render: function (ctx) {
      var c = ctx.c, f = ctx.form, ex = ctx.exporter, cur = f.currency || '';
      var li = c.lineItems(ctx.items || [], { currency: cur });
      var b = ctx.buyer || { name: '—', address: 'Select a buyer', country: '', contact: '' };

      var meta = c.metaBar([
        { label: 'Contract No.', value: f.docNo },
        { label: 'Date', value: f.docDate },
        { label: 'Incoterm', value: (f.incoterm || '') + ' ' + (f.incotermPlace || '') },
        { label: 'Total Value', value: cur + ' ' + h.money(li.subtotal) }
      ]);

      var parties = c.partyGrid([
        c.party('Seller', { name: ex.name, address: ex.address, country: '', contact: ex.iec ? 'IEC: ' + e(ex.iec) : '' }),
        c.party('Buyer', { name: b.name, address: b.address, country: b.country, contact: b.contact })
      ]);

      var terms = '<table class="dt"><tbody>' +
        row('Shipment Period', f.shipmentPeriod) +
        row('Incoterms', (f.incoterm || '') + ' — ' + (f.incotermPlace || '') + ' (Incoterms® 2020)') +
        row('Payment Terms', f.paymentTerms) +
        row('Quality Basis', f.qualityBasis) +
        row('Country of Origin', 'India') +
        row('Governing Law / Arbitration', f.governingLaw) +
        '</tbody></table>';

      var preamble = '<div class="prose"><p>This Sales Contract is made on <strong>' + e(f.docDate) +
        '</strong> between <strong>' + e(ex.name) + '</strong> (the Seller) and <strong>' + e(b.name) +
        '</strong> (the Buyer) for the sale and purchase of the goods described below on the terms set out herein.</p></div>';

      var inner = c.header(ex) + c.docTitle('Sales Contract') + meta + parties +
        c.secHead('Agreement') + preamble +
        c.secHead('Goods') + li.html + c.amountWords(li.subtotal, cur) +
        c.secHead('Terms & Conditions') + terms +
        c.signatures([
          { role: 'For Seller — ' + ex.name, name: ex.signatory || '', title: ex.signatoryTitle || 'Authorized Signatory' },
          { role: 'For Buyer — ' + b.name, name: '', title: 'Authorized Signatory' }
        ]);

      return c.page({ exporter: ex, inner: inner, docRef: 'Sales Contract · ' + (f.docNo || ''), pageOf: '' });

      function row(l, v) { return '<tr><td class="lbl">' + e(l) + '</td><td>' + e(v) + '</td></tr>'; }
    }
  });
})();
