/* Certificate of Origin (draft) — declares goods originate in India */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h, e = h.esc;

  S.register({
    id: 'certificate-of-origin',
    label: 'Certificate of Origin',
    category: 'statutory',

    fields: [
      { key: 'buyer', label: 'Consignee', type: 'buyer', group: 'Parties' },
      { key: 'docNo', label: 'Certificate No.', type: 'text', group: 'Reference', default: function () { return h.serial('RMP/COO', 1); } },
      { key: 'docDate', label: 'Date', type: 'text', group: 'Reference', default: function () { return h.today(); } },
      { key: 'invoiceRef', label: 'Invoice No. (ref)', type: 'text', group: 'Reference', default: '' },

      { key: 'items', label: 'Goods (desc · qty · —)', type: 'items', group: 'Goods' },

      { key: 'transport', label: 'Means of Transport', type: 'text', group: 'Shipment', default: 'By Sea' },
      { key: 'vessel', label: 'Vessel / Voyage', type: 'text', group: 'Shipment', default: '' },
      { key: 'portLoading', label: 'Port of Loading', type: 'text', group: 'Shipment', default: 'Mundra, India' },
      { key: 'portDischarge', label: 'Port of Discharge', type: 'text', group: 'Shipment', default: '' },
      { key: 'origin', label: 'Country of Origin', type: 'text', group: 'Shipment', default: 'India' }
    ],

    filename: function (ctx) { return 'RM-Psyllium-Certificate-of-Origin-' + h.slug(ctx.form.docNo || ''); },

    render: function (ctx) {
      var c = ctx.c, f = ctx.form, ex = ctx.exporter, e2 = e;
      var b = ctx.buyer || { name: '—', address: 'Select a consignee', country: '', contact: '' };
      var items = ctx.items || [];

      var meta = c.metaBar([
        { label: 'Certificate No.', value: f.docNo },
        { label: 'Date', value: f.docDate },
        { label: 'Invoice Ref', value: f.invoiceRef || '—' },
        { label: 'Country of Origin', value: f.origin }
      ]);

      var parties = c.partyGrid([
        c.party('Exporter / Consignor', { name: ex.name, address: ex.address, country: '', contact: ex.iec ? 'IEC: ' + e2(ex.iec) : '' }),
        c.party('Consignee', { name: b.name, address: b.address, country: b.country, contact: b.contact })
      ]);

      var body = items.map(function (it, i) {
        return '<tr><td class="center">' + (i + 1) + '</td><td>' + e2(it.desc) + '</td>' +
          '<td class="center">' + e2(it.hs || '12119032') + '</td>' +
          '<td class="num">' + h.money(Number(it.qty) || 0, (Number(it.qty) % 1) ? 2 : 0) + ' ' + e2(it.unit || 'KG') + '</td></tr>';
      }).join('');
      var goods = '<table class="dt"><thead><tr><th class="center" style="width:6%">#</th><th>Description of Goods</th>' +
        '<th class="center" style="width:16%">HS Code</th><th class="center" style="width:20%">Quantity</th></tr></thead><tbody>' +
        body + '</tbody></table>';

      var ship = '<table class="dt"><tbody>' +
        row('Means of Transport', f.transport) + row('Vessel / Voyage', f.vessel || '—') +
        row('Port of Loading', f.portLoading) + row('Port of Discharge', f.portDischarge || '—') +
        '</tbody></table>';

      var declare = '<div class="conforms"><span class="seal">Declaration</span>' +
        '<span>It is hereby certified that the goods described above are of <strong>' + e2(f.origin) +
        '</strong> origin, wholly produced and manufactured in ' + e2(f.origin) + ' by ' + e2(ex.name) + '.</span></div>';

      var inner = c.header(ex) + c.docTitle('Certificate of Origin') + meta + parties +
        c.secHead('Description of Goods') + goods +
        c.secHead('Shipment Details') + ship + declare +
        c.signatures([{ role: 'For ' + ex.name, name: ex.signatory || '', title: ex.signatoryTitle || 'Authorized Signatory' }]);

      return c.page({ exporter: ex, inner: inner, docRef: 'Certificate of Origin · ' + (f.docNo || ''), pageOf: '' });

      function row(l, v) { return '<tr><td class="lbl">' + e2(l) + '</td><td>' + e2(v) + '</td></tr>'; }
    }
  });
})();
