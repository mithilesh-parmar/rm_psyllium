/* Proforma Invoice — for buyer advance payment / LC opening */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h, INV = window.RMInvoice;

  var fields = INV.commonFields('RMP/PI').concat([
    { key: 'validity', label: 'Offer validity', type: 'text', group: 'Terms', default: '30 days from date of issue' }
  ]);

  S.register({
    id: 'proforma-invoice',
    label: 'Proforma Invoice',
    category: 'commercial',
    fields: fields,
    filename: function (ctx) {
      return 'RM-Psyllium-Proforma-Invoice-' + h.slug(ctx.form.docNo || '');
    },
    render: function (ctx) {
      return INV.core(ctx, {
        title: 'Proforma Invoice',
        numberLabel: 'Proforma No.',
        showBank: true,
        validity: '30 days from date of issue',
        buyerSign: false
      });
    }
  });
})();
