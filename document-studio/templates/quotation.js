/* Quotation / Price Offer — first commercial contact */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h, INV = window.RMInvoice;

  var fields = INV.commonFields('RMP/QT').concat([
    { key: 'validity', label: 'Offer validity', type: 'text', group: 'Terms', default: '15 days from date of issue' }
  ]);

  S.register({
    id: 'quotation',
    label: 'Quotation',
    category: 'commercial',
    fields: fields,
    filename: function (ctx) {
      return 'RM-Psyllium-Quotation-' + h.slug(ctx.form.docNo || '');
    },
    render: function (ctx) {
      return INV.core(ctx, {
        title: 'Quotation',
        numberLabel: 'Quotation No.',
        showBank: false,
        validity: '15 days from date of issue',
        buyerSign: false
      });
    }
  });
})();
