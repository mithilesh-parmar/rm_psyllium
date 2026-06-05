/* Shipping Instructions — hand-off to freight forwarder */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h, e = h.esc;

  S.register({
    id: 'shipping-instructions',
    label: 'Shipping Instructions',
    category: 'statutory',

    fields: [
      { key: 'buyer', label: 'Consignee', type: 'buyer', group: 'Parties' },
      { key: 'notify', label: 'Notify Party', type: 'textarea', group: 'Parties', default: '' },
      { key: 'forwarder', label: 'Freight Forwarder', type: 'text', group: 'Parties', default: '' },

      { key: 'docNo', label: 'SI No.', type: 'text', group: 'Reference', default: function () { return h.serial('RMP/SI', 1); } },
      { key: 'docDate', label: 'Date', type: 'text', group: 'Reference', default: function () { return h.today(); } },
      { key: 'invoiceRef', label: 'Invoice No. (ref)', type: 'text', group: 'Reference', default: '' },

      { key: 'items', label: 'Goods (desc · qty · —)', type: 'items', group: 'Goods' },
      { key: 'marks', label: 'Shipping Marks', type: 'textarea', group: 'Goods', default: 'RM PSYLLIUM / lot no. / net & gross weight' },

      { key: 'incoterm', label: 'Incoterm', type: 'incoterm', group: 'Shipment', default: 'FOB' },
      { key: 'portLoading', label: 'Port of Loading', type: 'text', group: 'Shipment', default: 'Mundra, India' },
      { key: 'portDischarge', label: 'Port of Discharge', type: 'text', group: 'Shipment', default: '' },
      { key: 'finalDest', label: 'Final Destination', type: 'text', group: 'Shipment', default: '' },
      { key: 'containerType', label: 'Container Type', type: 'text', group: 'Shipment', default: "1 x 20' FCL" },
      { key: 'special', label: 'Special Instructions', type: 'textarea', group: 'Shipment', default: 'Telex release. Keep away from moisture.' }
    ],

    filename: function (ctx) { return 'RM-Psyllium-Shipping-Instructions-' + h.slug(ctx.form.docNo || ''); },

    render: function (ctx) {
      var c = ctx.c, f = ctx.form, ex = ctx.exporter;
      var b = ctx.buyer || { name: '—', address: 'Select a consignee', country: '', contact: '' };
      var items = ctx.items || [];

      var meta = c.metaBar([
        { label: 'SI No.', value: f.docNo },
        { label: 'Date', value: f.docDate },
        { label: 'Invoice Ref', value: f.invoiceRef || '—' },
        { label: 'Incoterm', value: f.incoterm }
      ]);

      var boxes = [
        c.party('Shipper', { name: ex.name, address: ex.address, country: '', contact: ex.iec ? 'IEC: ' + e(ex.iec) : '' }),
        c.party('Consignee', { name: b.name, address: b.address, country: b.country, contact: b.contact })
      ];
      var parties = c.partyGrid(boxes);
      var more = [];
      if (f.notify) more.push(c.party('Notify Party', { name: '', address: f.notify, country: '', contact: '' }));
      if (f.forwarder) more.push(c.party('Freight Forwarder', { name: f.forwarder, address: '', country: '', contact: '' }));
      if (more.length) parties += c.partyGrid(more);

      var body = items.map(function (it, i) {
        return '<tr><td class="center">' + (i + 1) + '</td><td>' + e(it.desc) + '</td>' +
          '<td class="num">' + h.money(Number(it.qty) || 0, (Number(it.qty) % 1) ? 2 : 0) + ' ' + e(it.unit || 'KG') + '</td></tr>';
      }).join('');
      var goods = '<table class="dt"><thead><tr><th class="center" style="width:6%">#</th><th>Description of Goods</th>' +
        '<th class="center" style="width:24%">Quantity</th></tr></thead><tbody>' + body + '</tbody></table>';

      var ship = '<table class="dt"><tbody>' +
        row('Port of Loading', f.portLoading) + row('Port of Discharge', f.portDischarge || '—') +
        row('Final Destination', f.finalDest || '—') + row('Container Type', f.containerType) +
        row('Shipping Marks', f.marks) + row('Special Instructions', f.special) +
        '</tbody></table>';

      var inner = c.header(ex) + c.docTitle('Shipping Instructions') + meta + parties +
        c.secHead('Cargo') + goods +
        c.secHead('Routing & Handling') + ship +
        c.signatures([{ role: 'For ' + ex.name, name: ex.signatory || '', title: ex.signatoryTitle || 'Authorized Signatory' }]);

      return c.page({ exporter: ex, inner: inner, docRef: 'Shipping Instructions · ' + (f.docNo || ''), pageOf: '' });

      function row(l, v) { return '<tr><td class="lbl">' + e(l) + '</td><td>' + e(v) + '</td></tr>'; }
    }
  });
})();
