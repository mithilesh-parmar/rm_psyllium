/* ════════════════════════════════════════════════════════════════
   store.js — persistence interface
   The ONLY place that talks to storage. Templates/app never touch
   localStorage directly. Swap this adapter for Supabase later; the
   interface (get/set/list/remove) stays identical.
   ════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var PREFIX = 'rmstudio:';

  // ── localStorage adapter (current) ──────────────────────────────
  // file:// localStorage can be flaky/shared, so JSON export/import in
  // master.js is the durable backup. This is the convenience layer.
  var localAdapter = {
    get: function (key, fallback) {
      try {
        var raw = global.localStorage.getItem(PREFIX + key);
        return raw == null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { global.localStorage.setItem(PREFIX + key, JSON.stringify(value)); return true; }
      catch (e) { return false; }
    },
    remove: function (key) {
      try { global.localStorage.removeItem(PREFIX + key); } catch (e) {}
    },
    list: function () {
      var out = [];
      try {
        for (var i = 0; i < global.localStorage.length; i++) {
          var k = global.localStorage.key(i);
          if (k && k.indexOf(PREFIX) === 0) out.push(k.slice(PREFIX.length));
        }
      } catch (e) {}
      return out;
    }
  };

  // Active adapter. Later: Store.use(supabaseAdapter).
  var adapter = localAdapter;

  global.RMStore = {
    use: function (a) { adapter = a; },
    get: function (k, f) { return adapter.get(k, f); },
    set: function (k, v) { return adapter.set(k, v); },
    remove: function (k) { return adapter.remove(k); },
    list: function () { return adapter.list(); }
  };
})(window);
