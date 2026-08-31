(function () {
  var page = document.querySelector("[data-climate-page]");
  if (!page) return;

  var year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  var header = document.querySelector(".site-header");
  function updateHeaderShadow() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  updateHeaderShadow();

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      var target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.site-header nav:not(.lang-switcher) a[href^="#"]')
  );
  var observed = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if (observed.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];
        if (!visible) return;
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + visible.target.id);
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    observed.forEach(function (section) { observer.observe(section); });
  }

  function photoUrl(path) {
    if (!path) return "";
    if (/^https?:\/\//i.test(path) || path.charAt(0) === "/") return path;
    return "/" + path.replace(/^\.\//, "");
  }

  function applyPhoto(el, src) {
    el.classList.add("has-photo");
    el.style.backgroundImage = 'url("' + src + '")';
    el.setAttribute("role", "img");
  }

  document.querySelectorAll("[data-photo]").forEach(function (el) {
    var src = photoUrl(el.getAttribute("data-photo"));
    if (!src) return;
    var img = new Image();
    img.onload = function () { applyPhoto(el, src); };
    img.src = src;
  });
})();
