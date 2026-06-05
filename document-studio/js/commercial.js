/* ════════════════════════════════════════════════════════════════
   commercial.js — shared core for invoice-style documents
   (Proforma, Commercial Invoice, Quotation). RMInvoice.
   ════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';
  var h = global.RMStudio.h, e = h.esc;

  // shared field set for invoice-like docs
  function commonFields(prefix) {
    return [
      { key: 'buyer', label: 'Buyer / Consignee', type: 'buyer', group: 'Parties' },
      { key: 'notify', label: 'Notify party (optional)', type: 'textarea', group: 'Parties', default: '' },

      { key: 'docNo', label: 'Document No.', type: 'text', group: 'Reference', default: function () { return h.serial(prefix || 'RMP/EXP', 1); } },
      { key: 'docDate', label: 'Date', type: 'text', group: 'Reference', default: function () { return h.today(); } },
      { key: 'buyerRef', label: "Buyer's Ref / PO", type: 'text', group: 'Reference', default: '' },

      { key: 'incoterm', label: 'Incoterm', type: 'incoterm', group: 'Shipment', default: 'FOB' },
      { key: 'incotermPlace', label: 'Incoterm place', type: 'text', group: 'Shipment', default: 'Mundra, India' },
      { key: 'portLoading', label: 'Port of Loading', type: 'text', group: 'Shipment', default: 'Mundra, India' },
      { key: 'portDischarge', label: 'Port of Discharge', type: 'text', group: 'Shipment', default: '' },
      { key: 'currency', label: 'Currency', type: 'text', group: 'Shipment', default: 'USD' },

      { key: 'items', label: 'Line items (desc · qty · price)', type: 'items', group: 'Goods' },
      { key: 'freight', label: 'Freight (optional)', type: 'number', group: 'Charges', default: '' },
      { key: 'insurance', label: 'Insurance (optional)', type: 'number', group: 'Charges', default: '' },

      { key: 'paymentTerms', label: 'Payment Terms', type: 'textarea', group: 'Terms', default: '30% advance, balance against B/L copy' },
      { key: 'notes', label: 'Notes', type: 'textarea', group: 'Terms', default: '' }
    ];
  }

  function exporterParty(ex) {
    var extra = [];
    if (ex.iec) extra.push('IEC: ' + e(ex.iec));
    if (ex.gstin) extra.push('GSTIN: ' + e(ex.gstin));
    return { name: ex.name, address: ex.address, country: '', contact: extra.join(' &nbsp; ') };
  }

  function buyerParty(ctx) {
    var b = ctx.buyer;
    if (!b) return { name: '—', address: 'Select a buyer in the form (or add one under Master).', country: '', contact: '' };
    return { name: b.name, address: b.address, country: b.country, contact: b.contact };
  }

  // returns full page html
  function core(ctx, opts) {
    var c = ctx.c, f = ctx.form, ex = ctx.exporter, cur = f.currency || '';
    var li = c.lineItems(ctx.items || [], { currency: cur });
    var freight = Number(f.freight) || 0, insurance = Number(f.insurance) || 0;
    var grand = li.subtotal + freight + insurance;

    // meta bar
    var meta = c.metaBar([
      { label: opts.numberLabel || 'Invoice No.', value: f.docNo },
      { label: 'Date', value: f.docDate },
      { label: 'Incoterm', value: (f.incoterm || '') + (f.incotermPlace ? ' ' + f.incotermPlace : '') },
      { label: "Buyer's Ref", value: f.buyerRef || '—' }
    ]);

    // parties
    var notifyExtra = f.notify ? { name: 'Notify Party', address: f.notify, country: '', contact: '' } : null;
    var parties = c.partyGrid([
      c.party('Exporter / Seller', exporterParty(ex)),
      c.party(opts.buyerLabel || 'Buyer / Consignee', buyerParty(ctx))
    ]);
    if (notifyExtra) parties += c.partyGrid([c.party('Notify Party', notifyExtra, { full: true })]);

    // shipment strip
    var ship = c.metaBar([
      { label: 'Port of Loading', value: f.portLoading || '—' },
      { label: 'Port of Discharge', value: f.portDischarge || '—' },
      { label: 'Currency', value: f.currency || '—' },
      { label: 'Country of Origin', value: 'India' }
    ]);

    // totals
    var trows = [{ label: 'Subtotal', value: cur + ' ' + h.money(li.subtotal) }];
    if (freight) trows.push({ label: opts.incotermFreightLabel || 'Freight', value: cur + ' ' + h.money(freight) });
    if (insurance) trows.push({ label: 'Insurance', value: cur + ' ' + h.money(insurance) });
    trows.push({ label: 'Total ' + (f.incoterm || ''), value: cur + ' ' + h.money(grand), grand: true });

    // bank block (optional)
    var bank = '';
    if (opts.showBank) {
      bank = c.secHead('Bank Details (for remittance)') +
        '<table class="dt"><tbody>' +
        bankRow('Beneficiary', ex.name) +
        bankRow('Bank', ex.bankName) + bankRow('Branch', ex.bankBranch) +
        bankRow('Account No.', ex.bankAccount) + bankRow('SWIFT', ex.bankSwift) +
        bankRow('IFSC', ex.bankIfsc) + bankRow('AD Code', ex.bankAdCode) +
        '</tbody></table>';
    }

    var inner =
      c.header(ex) + c.docTitle(opts.title) + meta + parties + ship +
      c.secHead('Description of Goods') + li.html +
      c.totals(trows) + c.amountWords(grand, cur) +
      bank +
      c.secHead('Terms & Conditions') +
      '<table class="dt"><tbody>' +
        row('Payment Terms', f.paymentTerms) +
        row('Incoterms', (f.incoterm || '') + (f.incotermPlace ? ' — ' + f.incotermPlace : '') + ' (Incoterms® 2020)') +
        (opts.validity ? row('Validity', f.validity || opts.validity) : '') +
        (f.notes ? row('Notes', f.notes) : '') +
      '</tbody></table>' +
      c.signatures([{ role: 'For ' + ex.name, name: ex.signatory || '', title: ex.signatoryTitle || 'Authorized Signatory' }].concat(
        opts.buyerSign ? [{ role: 'Accepted by (Buyer)', name: '', title: '' }] : []
      ));

    return c.page({ exporter: ex, inner: inner, docRef: opts.title + ' · ' + (f.docNo || ''), pageOf: '' });

    function row(l, v) { return '<tr><td class="lbl">' + e(l) + '</td><td>' + e(v) + '</td></tr>'; }
    function bankRow(l, v) { return '<tr><td class="lbl">' + e(l) + '</td><td>' + (v ? e(v) : '<span style="color:#b04">— set under Master —</span>') + '</td></tr>'; }
  }

  global.RMInvoice = { commonFields: commonFields, core: core };
})(window);
