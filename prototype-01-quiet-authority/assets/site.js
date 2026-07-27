/* Quiet Authority — prototype 1
   Two small behaviours only: the mobile navigation panel, and a single
   gentle scroll reveal. Nothing animates on a loop, nothing autoplays. */

(function () {
  "use strict";

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var panel = document.getElementById("mobile-nav");

  if (toggle && panel) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      panel.hidden = !open;
      toggle.querySelector("[data-nav-label]").textContent = open ? "Close" : "Menu";
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---- Scroll reveal ---- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var items = document.querySelectorAll(".reveal");

  if (reduced.matches || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(items, function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var delay = parseInt(entry.target.getAttribute("data-reveal-delay") || "0", 10);
          window.setTimeout(function () {
            entry.target.classList.add("is-visible");
          }, delay);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    Array.prototype.forEach.call(items, function (el) {
      observer.observe(el);
    });
  }

  /* ---- Illustrative enquiry form (submits nothing) ---- */
  var form = document.querySelector("[data-enquiry-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("enquiry-status");
      if (note) {
        note.textContent =
          "This prototype does not send enquiries. On the live site, this form would reach the chambers by email.";
        note.hidden = false;
      }
    });
  }
})();
