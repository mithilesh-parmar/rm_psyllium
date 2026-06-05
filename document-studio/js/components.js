/* ════════════════════════════════════════════════════════════════
   components.js — shared HTML fragment builders (RMComp)
   Every template composes these so branding stays identical.
   ════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var h = global.RMStudio.h;
  var esc = h.esc;

  // contact-block header (logo + contact lines)
  function header(ex) {
    return '' +
      '<div class="header">' +
        '<img src="./assets/logo.png" class="logo-img" alt="' + esc(ex.name) + '">' +
        '<div class="contact-block">' +
          '<div class="tagline">' + esc(ex.tagline) + '</div>' +
          '<div class="contact-line"><span class="ci">☎</span>' + esc(ex.phone) + '</div>' +
          '<div class="contact-line"><span class="ci">✉</span>' + esc(ex.email) + '</div>' +
          '<div class="contact-line"><span class="ci">\u{1F310}</span>' + esc(ex.web) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="header-rule"></div>';
  }

  function watermark() {
    return '<img src="./assets/logo.png" class="watermark" alt="">';
  }

  function docTitle(title) {
    return '<div class="doc-title-row"><div class="doc-title-rule"></div>' +
      '<div class="doc-title">' + esc(title) + '</div>' +
      '<div class="doc-title-rule"></div></div>';
  }

  function secHead(text) {
    return '<div class="sec-head"><div class="sec-head-bar"></div>' +
      '<div class="sec-head-text">' + esc(text) + '</div><div class="sec-head-line"></div></div>';
  }

  // green meta bar from [{label,value}]
  function metaBar(items) {
    return '<div class="spec-meta">' + items.map(function (it) {
      return '<div class="spec-meta-item"><span class="meta-label">' + esc(it.label) +
        '</span><span class="meta-value">' + esc(it.value) + '</span></div>';
    }).join('') + '</div>';
  }

  // one party box (exporter / consignee / notify)
  function party(label, p, opts) {
    opts = opts || {};
    var lines = [];
    if (p.address) lines.push(esc(p.address));
    if (p.country) lines.push(esc(p.country));
    if (p.contact) lines.push(esc(p.contact));
    if (opts.extra) lines = lines.concat(opts.extra);
    return '<div class="party' + (opts.full ? ' full' : '') + '">' +
      '<div class="p-label">' + esc(label) + '</div>' +
      '<div class="p-name">' + esc(p.name || '') + '</div>' +
      '<div class="p-body">' + lines.join('<br>') + '</div></div>';
  }

  function partyGrid(boxes) {
    return '<div class="party-grid">' + boxes.join('') + '</div>';
  }

  // line-item table → {rows:[{desc,hs,qty,unit,price}], currency}
  // returns { html, subtotal }
  function lineItems(items, opts) {
    opts = opts || {};
    var cur = opts.currency || '';
    var subtotal = 0;
    var body = items.map(function (it, i) {
      var qty = Number(it.qty) || 0, price = Number(it.price) || 0, amt = qty * price;
      subtotal += amt;
      return '<tr>' +
        '<td class="center">' + (i + 1) + '</td>' +
        '<td>' + esc(it.desc) + '</td>' +
        '<td class="center">' + esc(it.hs || '') + '</td>' +
        '<td class="num">' + h.money(qty, qty % 1 ? 2 : 0) + ' ' + esc(it.unit || '') + '</td>' +
        '<td class="num">' + (price ? cur + ' ' + h.money(price) : '') + '</td>' +
        '<td class="num">' + (amt ? cur + ' ' + h.money(amt) : '') + '</td>' +
      '</tr>';
    }).join('');
    var html = '<table class="dt"><thead><tr>' +
      '<th class="center" style="width:6%">#</th>' +
      '<th>Description of Goods</th>' +
      '<th class="center" style="width:13%">HS Code</th>' +
      '<th class="center" style="width:16%">Quantity</th>' +
      '<th class="center" style="width:16%">Unit Price</th>' +
      '<th class="center" style="width:18%">Amount</th>' +
      '</tr></thead><tbody>' + body + '</tbody></table>';
    return { html: html, subtotal: subtotal };
  }

  // totals block → rows:[{label,value,grand}]
  function totals(rows) {
    return '<table class="totals">' + rows.map(function (r) {
      return '<tr' + (r.grand ? ' class="grand"' : '') + '><td class="t-label">' + esc(r.label) +
        '</td><td class="t-val">' + esc(r.value) + '</td></tr>';
    }).join('') + '</table>';
  }

  function amountWords(amount, currency) {
    return '<div class="amount-words"><strong>Amount in words:</strong> ' +
      esc(h.amountInWords(amount, currency)) + '</div>';
  }

  // two-column signature row
  function signatures(cells) {
    return '<div class="sign-grid">' + cells.map(function (c) {
      return '<div class="sign-cell">' +
        '<div class="sign-role">' + esc(c.role) + '</div>' +
        '<div class="sign-line"></div>' +
        '<div class="sign-name">' + esc(c.name || '_________________________') + '</div>' +
        '<div class="sign-title">' + esc(c.title || '') + '</div></div>';
    }).join('') + '</div>';
  }

  function footer(ex, docRef, pageOf) {
    return '<div class="page-footer">' +
      '<div class="footer-num-row"><span class="doc-ref">' + esc(docRef || '') + '</span>' +
      '<span>' + esc(pageOf || '') + '</span></div>' +
      '<div class="footer-bar">' + esc(ex.name) + ', ' + esc(ex.address) + '</div></div>';
  }

  // wrap inner markup in a watermarked A4 page + footer
  function page(opts) {
    return '<div class="page">' + watermark() +
      '<div class="page-inner">' + opts.inner + '</div>' +
      footer(opts.exporter, opts.docRef, opts.pageOf) + '</div>';
  }

  global.RMComp = {
    header: header, watermark: watermark, docTitle: docTitle, secHead: secHead,
    metaBar: metaBar, party: party, partyGrid: partyGrid, lineItems: lineItems,
    totals: totals, amountWords: amountWords, signatures: signatures,
    footer: footer, page: page
  };
})(window);
