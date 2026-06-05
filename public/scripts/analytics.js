(function () {
  // Capture synchronously — document.currentScript is null inside any async callback
  var _s = document.currentScript;
  var _gaId = _s ? _s.getAttribute('data-ga-id') : '';
  var _clarityId = _s ? _s.getAttribute('data-clarity-id') : '';

  // Master telemetry setup deferred to idle cycles to protect LCP & INP
  const initTelemetry = () => {
    var gaId = _gaId;
    var clarityId = _clarityId;

    // --- GA4 Core Configuration ---
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    if (gaId) {
      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        anonymize_ip: true,
        send_page_view: true
      });
    }

    // --- Layer 2: Microsoft Clarity Idle Gating ---
    if (clarityId) {
      const loadClarity = () => {
        window.clarity = window.clarity || function () {
          (window.clarity.q = window.clarity.q || []).push(arguments);
        };
        var cs = document.createElement('script');
        cs.async = true;
        // Direct script loading (remains main-thread but heavily delayed post-render)
        cs.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(clarityId);
        document.head.appendChild(cs);
      };
      
      // Postpone session recording initialization until LCP is complete
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(loadClarity, 2000));
      } else {
        setTimeout(loadClarity, 3000);
      }
    }

    // --- Unified event dispatcher ---
    window.rmTrack = function (name, params) {
      var payload = params || {};
      if (window.gtag && gaId) window.gtag('event', name, payload);
      if (window.clarity && clarityId) window.clarity('event', name);
    };

    // --- Event Delegation: Global Passive Click & CTA Tracker ---
    document.addEventListener('click', function (e) {
      var target = e.target.closest('[data-track]');
      if (target) {
        window.rmTrack(target.getAttribute('data-track'), {
          link_text: target.textContent.trim().slice(0, 100),
          link_url: target.href || target.getAttribute('href') || '',
          page_path: location.pathname
        });
      }

      // Track B2B procurement communication triggers (WhatsApp, phone, mailto)
      var link = e.target.closest('a[href]');
      if (!link) return;
      var href = link.href;

      if (href.startsWith('tel:') || href.startsWith('mailto:') || href.includes('wa.me') || href.includes('whatsapp')) {
        var type = href.startsWith('tel:') ? 'phone_click'
                 : href.startsWith('mailto:') ? 'email_click'
                 : 'whatsapp_click';
        window.rmTrack(type, {
          destination: href,
          page_path: location.pathname
        });
      }

      // Outbound external links
      if (href && !href.startsWith(location.origin) && !href.startsWith('javascript')) {
        window.rmTrack('outbound_click', {
          link_url: href,
          link_text: link.textContent.trim().slice(0, 100),
          page_path: location.pathname
        });
      }
    }, { passive: true });

    // --- Layer 3: Compositor-Native Section View Tracking (Intersection Observer) ---
    // Eliminates raw scroll CPU tax. Tracks real buyer intent based on content zones.
    if ('IntersectionObserver' in window) {
      var trackedSections = new Set();
      var observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            var sectionId = entry.target.id || entry.target.className.split(' ')[0] || 'section';
            if (!trackedSections.has(sectionId)) {
              trackedSections.add(sectionId);
              window.rmTrack('section_view', { section: sectionId, page_path: location.pathname });
            }
          }
        });
      }, { threshold: 0.25 }); // Fires when 25% of the section is in viewport

      // Track B2B structural landmarks
      document.querySelectorAll('section, footer, form').forEach((el) => {
        observer.observe(el);
      });
    }

    // --- Deferred Time-on-Page triggers ---
    var timeMarkers = [30, 60];
    timeMarkers.forEach(function (sec) {
      setTimeout(function () {
        window.rmTrack('time_on_page', { seconds: sec, page_path: location.pathname });
      }, sec * 1000);
    });

    // --- Desktop Exit Intent (Passive) ---
    var exitFired = false;
    document.addEventListener('mouseleave', function (e) {
      if (exitFired || e.clientY > 20) return;
      exitFired = true;
      window.rmTrack('exit_intent', { page_path: location.pathname });
    }, { passive: true });

    // --- Form Interaction & Abandonment Telemetry ---
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

    // Core B2B Form Abandonment logic sent via non-blocking Beacon API
    var handleAbandonment = function () {
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
          
          if (navigator.sendBeacon && gaId) {
            navigator.sendBeacon(
              'https://www.google-analytics.com/collect',
              new Blob([payload], { type: 'application/json' })
            );
          }
          if (window.clarity && clarityId) window.clarity('event', 'form_abandon');
          form._rmSubmitted = true; // Mark sent
        }
      });
    };

    // Listen to modern visibility changes (perfect for mobile browsers switching apps)
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        handleAbandonment();
      }
    });

    // Fallback for older web views
    window.addEventListener('pagehide', handleAbandonment);
  };

  // Schedule initialization to fire ONLY when browser main thread is idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => initTelemetry());
  } else {
    if (document.readyState === 'complete') {
      initTelemetry();
    } else {
      window.addEventListener('load', initTelemetry);
    }
  }
})();
