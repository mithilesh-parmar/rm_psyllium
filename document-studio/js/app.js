/* ════════════════════════════════════════════════════════════════
   app.js — studio controller
   Builds the doc selector + form, runs the live render loop, edits
   master data, handles print and JSON backup. Loaded last.
   ════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var h = global.RMStudio.h;
  var M = global.RMMaster;

  var state = { tplId: null, form: {}, mode: 'doc' };

  var els = {};
  function $(sel) { return document.querySelector(sel); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  // ── category labels ─────────────────────────────────────────────
  var CATS = [
    ['quality', 'Quality'],
    ['commercial', 'Commercial'],
    ['declaration', 'Declarations'],
    ['statutory', 'Statutory / Shipping']
  ];

  // ── doc selector ────────────────────────────────────────────────
  function buildSelector() {
    var wrap = els.selector;
    wrap.innerHTML = '';
    var tpls = global.RMStudio.templates();
    CATS.forEach(function (cat) {
      var inCat = tpls.filter(function (t) { return t.category === cat[0]; });
      if (!inCat.length) return;
      wrap.appendChild(el('div', 'doc-cat', cat[1]));
      var sel = el('select');
      inCat.forEach(function (t) {
        var o = el('option'); o.value = t.id; o.textContent = t.label; sel.appendChild(o);
      });
      sel.value = '';
      sel.addEventListener('change', function () { selectDoc(sel.value); });
      // a button-list feels better than many selects; use buttons
      wrap.removeChild(wrap.lastChild);
      var list = el('div');
      inCat.forEach(function (t) {
        var b = el('button', 'btn btn-ghost', t.label);
        b.style.width = '100%'; b.style.justifyContent = 'flex-start'; b.style.marginBottom = '6px';
        b.dataset.id = t.id;
        b.addEventListener('click', function () { selectDoc(t.id); });
        list.appendChild(b);
      });
      wrap.appendChild(list);
    });
  }

  function selectDoc(id) {
    state.tplId = id;
    state.mode = 'doc';
    var tpl = global.RMStudio.get(id);
    // seed defaults
    state.form = {};
    (tpl.fields || []).forEach(function (f) {
      state.form[f.key] = typeof f.default === 'function' ? f.default() : (f.default != null ? f.default : (f.type === 'items' ? [] : ''));
    });
    highlightActive();
    buildForm();
    render();
  }

  function highlightActive() {
    els.selector.querySelectorAll('button[data-id]').forEach(function (b) {
      b.classList.toggle('btn-gold', b.dataset.id === state.tplId);
      b.classList.toggle('btn-ghost', b.dataset.id !== state.tplId);
    });
  }

  // ── form builder ────────────────────────────────────────────────
  function buildForm() {
    var tpl = global.RMStudio.get(state.tplId);
    var f = els.form;
    f.innerHTML = '';
    if (!tpl) { f.appendChild(el('div', 'empty', 'Pick a document to begin.')); return; }

    f.appendChild(el('h3', null, tpl.label));

    var groups = {};
    (tpl.fields || []).forEach(function (fld) {
      var g = fld.group || 'Details';
      (groups[g] = groups[g] || []).push(fld);
    });

    Object.keys(groups).forEach(function (g) {
      f.appendChild(el('div', 'grp-title', g));
      groups[g].forEach(function (fld) { f.appendChild(fieldEl(fld)); });
    });
  }

  function fieldEl(fld) {
    var wrap = el('div', 'fld');
    if (fld.type !== 'items') wrap.appendChild(el('label', null, fld.label));
    var input;

    if (fld.type === 'textarea') {
      input = el('textarea'); input.value = state.form[fld.key] || '';
    } else if (fld.type === 'select' || fld.type === 'incoterm') {
      input = el('select');
      var opts = fld.type === 'incoterm' ? ['EXW', 'FOB', 'FCA', 'CFR', 'CIF', 'CPT', 'CIP', 'DAP', 'DDP'] : (fld.options || []);
      opts.forEach(function (o) {
        var v = typeof o === 'object' ? o.value : o, t = typeof o === 'object' ? o.label : o;
        var oe = el('option'); oe.value = v; oe.textContent = t; input.appendChild(oe);
      });
      input.value = state.form[fld.key] || '';
    } else if (fld.type === 'buyer') {
      input = el('select');
      var blank = el('option'); blank.value = ''; blank.textContent = '— select buyer —'; input.appendChild(blank);
      M.buyers().forEach(function (b) { var o = el('option'); o.value = b.id; o.textContent = b.name; input.appendChild(o); });
      input.value = state.form[fld.key] || '';
    } else if (fld.type === 'product') {
      input = el('select');
      M.products().forEach(function (p) { var o = el('option'); o.value = p.id; o.textContent = p.name; input.appendChild(o); });
      input.value = state.form[fld.key] || M.products()[0].id;
    } else if (fld.type === 'items') {
      return itemsEditor(fld);
    } else {
      input = el('input');
      input.type = fld.type === 'number' ? 'number' : 'text';
      input.value = state.form[fld.key] || '';
    }

    input.addEventListener('input', function () { state.form[fld.key] = input.value; render(); });
    input.addEventListener('change', function () { state.form[fld.key] = input.value; render(); });
    wrap.appendChild(input);
    if (fld.hint) wrap.appendChild(el('div', 'hint', fld.hint));
    return wrap;
  }

  // line-items editor
  function itemsEditor(fld) {
    var wrap = el('div', 'fld');
    wrap.appendChild(el('label', null, fld.label));
    var rows = state.form[fld.key] || [];
    var box = el('div');

    function draw() {
      box.innerHTML = '';
      rows.forEach(function (r, i) {
        var row = el('div', 'li-row');
        var d = el('input'); d.placeholder = 'Description'; d.value = r.desc || '';
        var q = el('input'); q.placeholder = 'Qty'; q.value = r.qty || '';
        var p = el('input'); p.placeholder = 'Price'; p.value = r.price || '';
        var x = el('button', null, '×');
        d.addEventListener('input', function () { r.desc = d.value; render(); });
        q.addEventListener('input', function () { r.qty = q.value; render(); });
        p.addEventListener('input', function () { r.price = p.value; render(); });
        x.addEventListener('click', function () { rows.splice(i, 1); draw(); render(); });
        row.appendChild(d); row.appendChild(q); row.appendChild(p); row.appendChild(x);
        box.appendChild(row);
      });
      var add = el('button', 'li-add', '+ Add line');
      add.addEventListener('click', function () { rows.push({ desc: '', qty: '', price: '', hs: '', unit: 'KG' }); draw(); render(); });
      box.appendChild(add);
    }
    state.form[fld.key] = rows;
    draw();
    wrap.appendChild(box);
    return wrap;
  }

  // ── ctx + render ────────────────────────────────────────────────
  function buildCtx(tpl) {
    var ctx = { exporter: M.exporter(), products: M.products(), form: state.form, h: h, c: global.RMComp };
    (tpl.fields || []).forEach(function (f) {
      if (f.type === 'buyer') ctx.buyer = M.buyer(state.form[f.key]);
      if (f.type === 'product') ctx.product = M.product(state.form[f.key]) || M.products()[0];
      if (f.type === 'items') ctx.items = state.form[f.key] || [];
    });
    return ctx;
  }

  function render() {
    var tpl = global.RMStudio.get(state.tplId);
    if (!tpl) { els.stage.innerHTML = '<div class="empty">Pick a document to begin.</div>'; return; }
    var ctx = buildCtx(tpl);
    try {
      els.stage.innerHTML = '<div class="rm-doc">' + tpl.render(ctx) + '</div>';
      fitPreview();
    } catch (e) {
      els.stage.innerHTML = '<div class="empty">Render error: ' + h.esc(e.message) + '</div>';
      if (global.console) console.error(e);
    }
  }

  // scale A4 preview to fit stage width
  function fitPreview() {
    var doc = els.stage.querySelector('.rm-doc');
    if (!doc) return;
    var avail = els.stage.clientWidth - 48;
    var pageW = 210 * 3.7795; // mm→px @96dpi
    var scale = Math.min(1, avail / pageW);
    doc.style.transform = 'scale(' + scale + ')';
    doc.style.width = pageW + 'px';
  }

  // ── master data editor ──────────────────────────────────────────
  function openMaster() {
    state.mode = 'master';
    var f = els.form;
    f.innerHTML = '';
    f.appendChild(el('h3', null, 'Master Data'));

    var ex = M.exporter();
    f.appendChild(el('div', 'grp-title', 'Exporter Profile'));
    [
      ['name', 'Company Name'], ['tagline', 'Tagline'], ['address', 'Address'],
      ['phone', 'Phone'], ['email', 'Email'], ['web', 'Website'],
      ['iec', 'IEC Code'], ['gstin', 'GSTIN'], ['fssai', 'FSSAI No.'],
      ['pan', 'PAN'], ['adCode', 'AD Code'],
      ['signatory', 'Authorized Signatory'], ['signatoryTitle', 'Signatory Title']
    ].forEach(function (p) { f.appendChild(masterField('exporter.' + p[0], p[1], ex[p[0]])); });

    f.appendChild(el('div', 'grp-title', 'Bank Details (for invoices)'));
    [
      ['bankName', 'Bank Name'], ['bankBranch', 'Branch'], ['bankAccount', 'Account No.'],
      ['bankSwift', 'SWIFT'], ['bankIfsc', 'IFSC'], ['bankAdCode', 'Bank AD Code']
    ].forEach(function (p) { f.appendChild(masterField('exporter.' + p[0], p[1], ex[p[0]])); });

    // buyers
    f.appendChild(el('div', 'grp-title', 'Buyer Directory'));
    M.buyers().forEach(function (b, i) {
      var card = el('div', 'fld');
      card.style.borderTop = '1px solid rgba(255,255,255,0.08)';
      card.style.paddingTop = '8px';
      card.appendChild(el('label', null, b.name || 'Buyer ' + (i + 1)));
      ['name', 'address', 'country', 'contact'].forEach(function (k) {
        var inp = el('input'); inp.placeholder = k; inp.value = b[k] || '';
        inp.style.marginBottom = '4px';
        inp.addEventListener('input', function () { b[k] = inp.value; if (k === 'name') b.id = h.slug(inp.value) || b.id; M.set(M.all()); });
        card.appendChild(inp);
      });
      var del = el('button', 'btn btn-ghost', 'Remove buyer'); del.style.width = '100%';
      del.addEventListener('click', function () { M.buyers().splice(i, 1); M.set(M.all()); openMaster(); });
      card.appendChild(del);
      f.appendChild(card);
    });
    var addB = el('button', 'li-add', '+ Add buyer');
    addB.addEventListener('click', function () {
      M.buyers().push({ id: 'buyer' + Date.now(), name: '', address: '', country: '', contact: '' });
      M.set(M.all()); openMaster();
    });
    f.appendChild(addB);

    els.stage.innerHTML = '<div class="empty">Master data is shared across every document.<br>Fill it once — pickers in each form use it.</div>';
  }

  function masterField(path, label, val) {
    var wrap = el('div', 'fld');
    wrap.appendChild(el('label', null, label));
    var inp = el('input'); inp.value = val || '';
    inp.addEventListener('input', function () { M.update(path, inp.value); });
    wrap.appendChild(inp);
    return wrap;
  }

  // ── backup ──────────────────────────────────────────────────────
  function exportJSON() {
    var blob = new Blob([M.exportJSON()], { type: 'application/json' });
    var a = el('a'); a.href = URL.createObjectURL(blob);
    a.download = 'RM-Psyllium-Studio-Master-Data.json'; a.click();
    toast('Master data exported');
  }
  function importJSON() {
    var inp = el('input'); inp.type = 'file'; inp.accept = 'application/json';
    inp.addEventListener('change', function () {
      var file = inp.files[0]; if (!file) return;
      var r = new FileReader();
      r.onload = function () { try { M.importJSON(r.result); toast('Master data imported'); if (state.mode === 'master') openMaster(); else { buildForm(); render(); } } catch (e) { toast('Import failed: ' + e.message); } };
      r.readAsText(file);
    });
    inp.click();
  }

  function toast(msg) {
    var t = els.toast; t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 1800);
  }

  function doPrint() {
    var tpl = global.RMStudio.get(state.tplId);
    if (!tpl) { toast('Pick a document first'); return; }
    var ctx = buildCtx(tpl);
    var name = tpl.filename ? tpl.filename(ctx) : 'RM-Psyllium-Document';
    global.RMStudio.print(name);
  }

  // ── boot ────────────────────────────────────────────────────────
  function boot() {
    els.selector = $('#selector');
    els.form = $('#form');
    els.stage = $('#stage');
    els.toast = $('#toast');

    $('#btn-master').addEventListener('click', function () { state.mode === 'master' ? (state.tplId ? (buildForm(), render()) : (els.form.innerHTML = '', els.stage.innerHTML = '<div class="empty">Pick a document to begin.</div>'), state.mode = 'doc') : openMaster(); });
    $('#btn-print').addEventListener('click', doPrint);
    $('#btn-export').addEventListener('click', exportJSON);
    $('#btn-import').addEventListener('click', importJSON);
    window.addEventListener('resize', fitPreview);

    buildSelector();
    var tpls = global.RMStudio.templates();
    var want = (location.hash.match(/doc=([\w-]+)/) || [])[1];
    if (want && global.RMStudio.get(want)) selectDoc(want);
    else if (tpls.length) selectDoc(tpls[0].id);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window);
