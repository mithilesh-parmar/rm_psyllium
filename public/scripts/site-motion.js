(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    '[data-reveal], main section, .product-link, .industry-row a, .insight-card, .standards-grid article, .facility-grid figure, .number-grid div, .story-image, .product-stage, .panel'
  );

  // Exclude homepage (.hp) sections — they handle their own visibility
  targets = Array.from(targets).filter(function(el) {
    return !el.closest('.hp');
  });

  document.body.classList.add('motion-ready');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (target, index) {
    if (!target.hasAttribute('data-reveal')) {
      target.setAttribute('data-reveal', target.classList.contains('story-image') ? 'image' : 'up');
    }
    target.style.transitionDelay = Math.min(index % 6, 5) * 45 + 'ms';
    observer.observe(target);
  });
})();
