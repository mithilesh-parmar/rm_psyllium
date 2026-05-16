(function () {
  var currentScript = document.currentScript;
  var gaId = currentScript ? currentScript.getAttribute('data-ga-id') : '';
  var clarityId = currentScript ? currentScript.getAttribute('data-clarity-id') : '';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  if (gaId) {
    window.gtag('js', new Date());
    window.gtag('config', gaId, { anonymize_ip: true });
  }

  if (clarityId) {
    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(clarityId);
    document.head.appendChild(script);
  }

  window.rmTrack = function (name, params) {
    var payload = params || {};
    if (window.gtag && gaId) {
      window.gtag('event', name, payload);
    }
    if (window.clarity && clarityId) {
      window.clarity('event', name);
    }
  };

  document.addEventListener('click', function (event) {
    var target = event.target.closest('[data-track]');
    if (!target) return;
    window.rmTrack(target.getAttribute('data-track'), {
      link_text: target.textContent.trim(),
      link_url: target.href || ''
    });
  });
})();
