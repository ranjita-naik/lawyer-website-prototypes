/* Human-Centered Advocate — prototype 03
   Two small behaviours only: the mobile navigation toggle and a gentle
   scroll reveal. Both degrade safely and both respect reduced-motion. */
(function () {
  'use strict';

  /* ---- mobile navigation ---- */
  var toggle = document.getElementById('navToggle');
  var panel = document.getElementById('mobileNav');

  if (toggle && panel) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
      panel.hidden = !open;
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // If the viewport grows past the mobile breakpoint, reset the panel.
    var mq = window.matchMedia('(min-width: 768px)');
    var onChange = function (e) { if (e.matches) { setOpen(false); } };
    if (mq.addEventListener) { mq.addEventListener('change', onChange); }
    else if (mq.addListener) { mq.addListener(onChange); }
  }

  /* ---- gentle scroll reveal ---- */
  var items = document.querySelectorAll('.reveal');
  if (!items.length) { return; }

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    for (var i = 0; i < items.length; i++) { items[i].classList.add('is-visible'); }
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

  items.forEach(function (el) { observer.observe(el); });
})();
