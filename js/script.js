(function () {
  var WHATSAPP_NUMBER = '5511974828434';

  // Build WhatsApp links from data-wa attributes
  document.querySelectorAll('[data-wa]').forEach(function (el) {
    var message = el.getAttribute('data-wa');
    el.setAttribute('href', 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  // Header scroll state
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Menu tabs
  var tabs = document.querySelectorAll('.menu-tab');
  var panels = document.querySelectorAll('.menu-panel');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
