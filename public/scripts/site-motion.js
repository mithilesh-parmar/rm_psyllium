(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var value = max > 0 ? window.scrollY / max : 0;
    document.documentElement.style.setProperty('--scroll-progress', String(value));
  }

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  if (reduce || !('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    'main section, .product-link, .industry-row a, .insight-card, .standards-grid article, .facility-grid figure, .number-grid div, .story-image, .product-stage, .panel'
  );

  document.body.classList.add('motion-ready');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (target, index) {
    target.setAttribute('data-reveal', target.classList.contains('story-image') ? 'image' : 'up');
    target.style.transitionDelay = Math.min(index % 6, 5) * 45 + 'ms';
    observer.observe(target);
  });
})();
