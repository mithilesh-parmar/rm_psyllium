/* Commercial Invoice — for customs clearance & payment */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h, INV = window.RMInvoice;

  var fields = INV.commonFields('RMP/EXP').concat([
    { key: 'blNo', label: 'B/L No.', type: 'text', group: 'Shipment', default: '' },
    { key: 'vessel', label: 'Vessel / Voyage', type: 'text', group: 'Shipment', default: '' },
    { key: 'containerNo', label: 'Container No.', type: 'text', group: 'Shipment', default: '' }
  ]);

  S.register({
    id: 'commercial-invoice',
    label: 'Commercial Invoice',
    category: 'commercial',
    fields: fields,
    filename: function (ctx) {
      return 'RM-Psyllium-Commercial-Invoice-' + h.slug(ctx.form.docNo || '');
    },
    render: function (ctx) {
      return INV.core(ctx, {
        title: 'Commercial Invoice',
        numberLabel: 'Invoice No.',
        showBank: true,
        buyerSign: false
      });
    }
  });
})();
