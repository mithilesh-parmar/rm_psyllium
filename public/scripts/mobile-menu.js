document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav-toggle');
  var overlay = document.querySelector('.wp-overlay');
  if (!toggle || !overlay) return;

  var closeBtn = overlay.querySelector('.wp-close');
  var savedScrollY = 0;

  function openMenu() {
    savedScrollY = window.scrollY;
    document.body.style.cssText = 'position:fixed;top:-' + savedScrollY + 'px;left:0;right:0;overflow:hidden;';
    toggle.classList.add('is-open');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
  }

  function closeMenu() {
    document.body.style.cssText = '';
    window.scrollTo(0, savedScrollY);
    toggle.classList.remove('is-open');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }

  toggle.addEventListener('click', function() {
    overlay.classList.contains('open') ? closeMenu() : openMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  var links = overlay.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
  });

  // Desktop language dropdown
  var desktopTrigger = document.querySelector('.lang-trigger');
  var desktopMenu    = document.querySelector('.lang-menu');

  if (desktopTrigger && desktopMenu) {
    var openDL  = function() { desktopMenu.classList.add('open');    desktopTrigger.setAttribute('aria-expanded', 'true');  };
    var closeDL = function() { desktopMenu.classList.remove('open'); desktopTrigger.setAttribute('aria-expanded', 'false'); };

    desktopTrigger.addEventListener('click', function(e) {
      e.stopPropagation();
      desktopMenu.classList.contains('open') ? closeDL() : openDL();
    });
    document.addEventListener('click', function(e) {
      if (!desktopTrigger.contains(e.target) && !desktopMenu.contains(e.target)) closeDL();
    });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeDL(); });
  }

  // Mobile language dropdown
  var mobileTrigger = document.querySelector('.wp-lang-trigger');
  var mobileMenu    = document.querySelector('.wp-lang-menu');

  if (mobileTrigger && mobileMenu) {
    mobileTrigger.addEventListener('click', function() {
      var open = mobileMenu.classList.toggle('open');
      mobileTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
});
