(function () {
  var currentScript = document.currentScript;
  var gaId = currentScript ? currentScript.getAttribute('data-ga-id') : '';
  var clarityId = currentScript ? currentScript.getAttribute('data-clarity-id') : '';

  // --- GA4 init ---
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  if (gaId) {
    window.gtag('js', new Date());
    window.gtag('config', gaId, {
      anonymize_ip: true,
      send_page_view: true
    });
  }

  // --- Clarity init ---
  if (clarityId) {
    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    var cs = document.createElement('script');
    cs.async = true;
    cs.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(clarityId);
    document.head.appendChild(cs);
  }

  // --- Unified event dispatcher ---
  window.rmTrack = function (name, params) {
    var payload = params || {};
    if (window.gtag && gaId) window.gtag('event', name, payload);
    if (window.clarity && clarityId) window.clarity('event', name);
  };

  // --- Click tracking via data-track attributes ---
  document.addEventListener('click', function (e) {
    var target = e.target.closest('[data-track]');
    if (!target) return;
    window.rmTrack(target.getAttribute('data-track'), {
      link_text: target.textContent.trim().slice(0, 100),
      link_url: target.href || target.getAttribute('href') || '',
      page_path: location.pathname
    });
  });

  // --- Scroll depth (25 / 50 / 75 / 100%) ---
  var scrollMilestones = { 25: false, 50: false, 75: false, 100: false };
  function onScroll() {
    var scrolled = window.scrollY + window.innerHeight;
    var total = document.documentElement.scrollHeight;
    var pct = Math.floor((scrolled / total) * 100);
    [25, 50, 75, 100].forEach(function (m) {
      if (!scrollMilestones[m] && pct >= m) {
        scrollMilestones[m] = true;
        window.rmTrack('scroll_depth', { depth: m, page_path: location.pathname });
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Time on page: fire at 30s and 60s ---
  var timeMarkers = [30, 60];
  timeMarkers.forEach(function (sec) {
    setTimeout(function () {
      window.rmTrack('time_on_page', { seconds: sec, page_path: location.pathname });
    }, sec * 1000);
  });

  // --- Exit intent (mouse leaves top of viewport on desktop) ---
  var exitFired = false;
  document.addEventListener('mouseleave', function (e) {
    if (exitFired || e.clientY > 20) return;
    exitFired = true;
    window.rmTrack('exit_intent', { page_path: location.pathname });
  });

  // --- Form drop-off tracking ---
  // Fires 'form_field_focus' when user enters a field, 'form_abandon' if they leave without submitting
  document.addEventListener('focusin', function (e) {
    var field = e.target.closest('input, textarea, select');
    if (!field) return;
    var form = field.closest('form');
    if (!form) return;
    if (!form._rmStarted) {
      form._rmStarted = true;
      form._rmFields = [];
      window.rmTrack('form_started', {
        form_id: form.id || form.className.split(' ')[0] || 'unknown',
        page_path: location.pathname
      });
    }
    var fieldName = field.name || field.id || field.placeholder || 'unknown';
    if (form._rmFields.indexOf(fieldName) === -1) form._rmFields.push(fieldName);
  });

  document.addEventListener('submit', function (e) {
    var form = e.target.closest('form');
    if (!form) return;
    form._rmSubmitted = true;
    window.rmTrack('form_submit', {
      form_id: form.id || form.className.split(' ')[0] || 'unknown',
      fields_filled: form._rmFields ? form._rmFields.length : 0,
      page_path: location.pathname
    });
  });

  // Abandon = page unload after form started but not submitted
  window.addEventListener('pagehide', function () {
    document.querySelectorAll('form').forEach(function (form) {
      if (form._rmStarted && !form._rmSubmitted) {
        var payload = JSON.stringify({
          name: 'form_abandon',
          params: {
            form_id: form.id || form.className.split(' ')[0] || 'unknown',
            last_field: form._rmFields ? form._rmFields[form._rmFields.length - 1] : 'unknown',
            page_path: location.pathname
          }
        });
        // Use sendBeacon so it fires even as the page closes
        if (navigator.sendBeacon && gaId) {
          navigator.sendBeacon(
            'https://www.google-analytics.com/collect',
            new Blob([payload], { type: 'application/json' })
          );
        }
        if (window.clarity && clarityId) window.clarity('event', 'form_abandon');
      }
    });
  });

  // --- Outbound link tracking ---
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.href;
    if (href && !href.startsWith(location.origin) && !href.startsWith('javascript')) {
      window.rmTrack('outbound_click', {
        link_url: href,
        link_text: link.textContent.trim().slice(0, 100),
        page_path: location.pathname
      });
    }
  });

  // --- WhatsApp / phone CTA clicks (critical for B2B lead tracking) ---
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me"], a[href*="whatsapp"]');
    if (!link) return;
    var type = link.href.startsWith('tel:') ? 'phone_click'
             : link.href.startsWith('mailto:') ? 'email_click'
             : 'whatsapp_click';
    window.rmTrack(type, {
      destination: link.href,
      page_path: location.pathname
    });
  });
})();
