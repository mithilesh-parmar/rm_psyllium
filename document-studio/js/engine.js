/* ════════════════════════════════════════════════════════════════
   engine.js — RMStudio core
   Template registry, helpers (escape, money, words, FY serial, dates),
   and the print pipeline. Loaded before any template.
   ════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var templates = [];          // registration order
  var byId = {};

  // ── helpers ─────────────────────────────────────────────────────
  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function money(n, dp) {
    var v = Number(n) || 0;
    return v.toLocaleString('en-IN', { minimumFractionDigits: dp == null ? 2 : dp, maximumFractionDigits: dp == null ? 2 : dp });
  }

  // number → English words (handles up to billions; for invoice amounts)
  var ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  var TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function under1000(n) {
    var w = '';
    if (n >= 100) { w += ONES[Math.floor(n / 100)] + ' Hundred'; n %= 100; if (n) w += ' '; }
    if (n >= 20) { w += TENS[Math.floor(n / 10)]; n %= 10; if (n) w += ' ' + ONES[n]; }
    else if (n > 0) { w += ONES[n]; }
    return w;
  }

  function intToWords(n) {
    if (n === 0) return 'Zero';
    var scales = [['Billion', 1e9], ['Million', 1e6], ['Thousand', 1e3]];
    var w = '';
    for (var i = 0; i < scales.length; i++) {
      var unit = scales[i][1];
      if (n >= unit) { w += under1000(Math.floor(n / unit)) + ' ' + scales[i][0] + ' '; n %= unit; }
    }
    if (n > 0) w += under1000(n);
    return w.trim();
  }

  // "USD One Thousand Two Hundred and 50/100 Only"
  function amountInWords(amount, currency) {
    var v = Math.round((Number(amount) || 0) * 100) / 100;
    var whole = Math.floor(v);
    var cents = Math.round((v - whole) * 100);
    var w = (currency ? currency + ' ' : '') + intToWords(whole);
    w += cents ? ' and ' + (cents < 10 ? '0' + cents : cents) + '/100' : '';
    return w + ' Only';
  }

  // Indian financial year for a date → "26-27" (FY starts April)
  function financialYear(d) {
    d = d || new Date();
    var y = d.getFullYear(), m = d.getMonth(); // 0=Jan
    var start = (m >= 3) ? y : y - 1;          // Apr or later → this year
    return String(start % 100) + '-' + String((start + 1) % 100);
  }

  // serial like RMP/EXP/26-27/001
  function serial(prefix, seq, d) {
    var s = String(seq);
    while (s.length < 3) s = '0' + s;
    return prefix + '/' + financialYear(d) + '/' + s;
  }

  function today() {
    var d = new Date();
    function p(n) { return n < 10 ? '0' + n : '' + n; }
    return p(d.getDate()) + ' / ' + p(d.getMonth() + 1) + ' / ' + d.getFullYear();
  }

  function slug(s) {
    return String(s || '').trim().replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  // ── shared chrome fragments live in components.js (RMComp) ───────

  // ── registry ────────────────────────────────────────────────────
  function register(tpl) {
    if (!tpl || !tpl.id) throw new Error('template needs an id');
    if (byId[tpl.id]) return;            // ignore double-load
    byId[tpl.id] = tpl;
    templates.push(tpl);
  }

  // ── print: set filename then print ──────────────────────────────
  function printDoc(filename) {
    var prev = document.title;
    if (filename) document.title = filename;
    global.print();
    // restore shortly after (some browsers read title during print)
    setTimeout(function () { document.title = prev; }, 1000);
  }

  global.RMStudio = {
    register: register,
    templates: function () { return templates.slice(); },
    get: function (id) { return byId[id]; },
    // helpers exposed to templates
    h: {
      esc: esc, money: money, amountInWords: amountInWords,
      intToWords: intToWords, financialYear: financialYear,
      serial: serial, today: today, slug: slug
    },
    print: printDoc
  };
})(window);
