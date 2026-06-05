/* Packing List — package & weight breakdown for a shipment */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h, e = h.esc;

  S.register({
    id: 'packing-list',
    label: 'Packing List',
    category: 'commercial',

    fields: [
      { key: 'buyer', label: 'Buyer / Consignee', type: 'buyer', group: 'Parties' },
      { key: 'docNo', label: 'Packing List No.', type: 'text', group: 'Reference', default: function () { return h.serial('RMP/PL', 1); } },
      { key: 'docDate', label: 'Date', type: 'text', group: 'Reference', default: function () { return h.today(); } },
      { key: 'invoiceRef', label: 'Invoice No. (ref)', type: 'text', group: 'Reference', default: '' },

      { key: 'items', label: 'Items (desc · packages · net wt/pkg kg)', type: 'items', group: 'Goods' },

      { key: 'packageType', label: 'Package Type', type: 'text', group: 'Packing', default: 'Multi-wall paper bags with PE liner' },
      { key: 'tarePerPkg', label: 'Tare per package (kg)', type: 'number', group: 'Packing', default: '0.3' },
      { key: 'pallets', label: 'No. of Pallets', type: 'text', group: 'Packing', default: '' },
      { key: 'containerNo', label: 'Container No.', type: 'text', group: 'Packing', default: '' },
      { key: 'sealNo', label: 'Seal No.', type: 'text', group: 'Packing', default: '' },

      { key: 'portLoading', label: 'Port of Loading', type: 'text', group: 'Shipment', default: 'Mundra, India' },
      { key: 'portDischarge', label: 'Port of Discharge', type: 'text', group: 'Shipment', default: '' }
    ],

    filename: function (ctx) {
      return 'RM-Psyllium-Packing-List-' + h.slug(ctx.form.docNo || '');
    },

    render: function (ctx) {
      var c = ctx.c, f = ctx.form, ex = ctx.exporter;
      var items = ctx.items || [];
      var tare = Number(f.tarePerPkg) || 0;

      var totPkgs = 0, totNet = 0, totGross = 0;
      var body = items.map(function (it, i) {
        var pkgs = Number(it.qty) || 0;          // qty column = packages
        var netPer = Number(it.price) || 0;      // price column = net wt per package (kg)
        var net = pkgs * netPer;
        var gross = net + pkgs * tare;
        totPkgs += pkgs; totNet += net; totGross += gross;
        return '<tr>' +
          '<td class="center">' + (i + 1) + '</td>' +
          '<td>' + e(it.desc) + '</td>' +
          '<td class="num">' + h.money(pkgs, 0) + '</td>' +
          '<td class="num">' + h.money(netPer) + ' kg</td>' +
          '<td class="num">' + h.money(net) + ' kg</td>' +
          '<td class="num">' + h.money(gross) + ' kg</td>' +
        '</tr>';
      }).join('');

      var table = '<table class="dt"><thead><tr>' +
        '<th class="center" style="width:6%">#</th><th>Description</th>' +
        '<th class="center" style="width:14%">Packages</th>' +
        '<th class="center" style="width:18%">Net / Pkg</th>' +
        '<th class="center" style="width:18%">Net Weight</th>' +
        '<th class="center" style="width:18%">Gross Weight</th></tr></thead><tbody>' + body +
        '<tr style="font-weight:700"><td></td><td>TOTAL</td>' +
        '<td class="num">' + h.money(totPkgs, 0) + '</td><td></td>' +
        '<td class="num">' + h.money(totNet) + ' kg</td>' +
        '<td class="num">' + h.money(totGross) + ' kg</td></tr>' +
        '</tbody></table>';

      var meta = c.metaBar([
        { label: 'Packing List No.', value: f.docNo },
        { label: 'Date', value: f.docDate },
        { label: 'Invoice Ref', value: f.invoiceRef || '—' },
        { label: 'Country of Origin', value: 'India' }
      ]);

      var b = ctx.buyer || { name: '—', address: 'Select a buyer', country: '', contact: '' };
      var parties = c.partyGrid([
        c.party('Exporter / Seller', { name: ex.name, address: ex.address, country: '', contact: ex.iec ? 'IEC: ' + e(ex.iec) : '' }),
        c.party('Buyer / Consignee', { name: b.name, address: b.address, country: b.country, contact: b.contact })
      ]);

      var packing = '<table class="dt"><tbody>' +
        prow('Package Type', f.packageType) +
        prow('Total Packages', h.money(totPkgs, 0)) +
        prow('Total Net Weight', h.money(totNet) + ' kg') +
        prow('Total Gross Weight', h.money(totGross) + ' kg') +
        prow('No. of Pallets', f.pallets || '—') +
        prow('Container No.', f.containerNo || '—') +
        prow('Seal No.', f.sealNo || '—') +
        prow('Port of Loading', f.portLoading || '—') +
        prow('Port of Discharge', f.portDischarge || '—') +
        '</tbody></table>';

      var inner = c.header(ex) + c.docTitle('Packing List') + meta + parties +
        c.secHead('Package Details') + table +
        c.secHead('Shipment Summary') + packing +
        c.signatures([{ role: 'For ' + ex.name, name: ex.signatory || '', title: ex.signatoryTitle || 'Authorized Signatory' }]);

      return c.page({ exporter: ex, inner: inner, docRef: 'Packing List · ' + (f.docNo || ''), pageOf: '' });

      function prow(l, v) { return '<tr><td class="lbl">' + e(l) + '</td><td>' + e(v) + '</td></tr>'; }
    }
  });
})();
