/* =========================================================================
   SHELL  -  builds the header, navigation, library banner and footer, and
   fills every [data-s] element from the content file. Used on every page.
   ========================================================================= */
(function () {
  "use strict";
  var C = window.APP_CONTENT;
  var body = document.body;
  var base = body.getAttribute("data-base") || "";
  var page = body.getAttribute("data-page") || "home";

  function get(path) {
    return path.split(".").reduce(function (o, k) { return o && o[k]; }, C);
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function fill(root) {
    var nodes = (root || document).querySelectorAll("[data-s]");
    for (var i = 0; i < nodes.length; i++) {
      var v = get(nodes[i].getAttribute("data-s"));
      if (typeof v === "string") nodes[i].textContent = v;
    }
  }
  window.FV_fill = fill;

  var home = page === "home" ? "" : base + "index.html";
  var sections = C.library.sections;
  var order = ["learners", "instructors", "programme", "partnership", "ideas"];

  /* ----- header ----- */
  var subLinks = order.map(function (k) {
    var cur = page === k ? ' aria-current="page"' : "";
    return '<a data-library href="' + base + sections[k].href.replace(/^library\//, "library/") + '"' + cur + ">" + esc(sections[k].title) + "</a>";
  }).join("");

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="header-in">' +
        '<a class="brand" href="' + (home || "#play") + (home ? "#play" : "") + '">' + esc(C.site.title) + "</a>" +
        '<nav class="nav" id="nav" aria-label="Main">' +
          '<a href="' + home + '#library">' + esc(C.nav.insights) + "</a>" +
          '<span class="nav-sub">' + subLinks + "</span>" +
        "</nav>" +
      "</div>";
  }

  /* ----- library banner (home page) ----- */
  var lib = document.getElementById("library");
  if (lib) {
    lib.className = "library-banner";
    lib.setAttribute("aria-labelledby", "lib-title");
    lib.innerHTML =
      '<h2 id="lib-title">' + esc(C.library.title) + "</h2>" +
      "<p>" + esc(C.library.desc) + "</p>" +
      '<div class="lib-grid">' +
      order.map(function (k) {
        return '<a class="lib-tile" data-library href="' + sections[k].href + '"><strong>' + esc(sections[k].title) + "</strong><span>" + esc(sections[k].blurb) + "</span></a>";
      }).join("") +
      "</div>";
  }

  /* ----- library strip (stub pages) ----- */
  var strip = document.getElementById("lib-strip");
  if (strip) {
    strip.className = "lib-strip";
    strip.setAttribute("aria-label", C.library.title);
    strip.innerHTML = order.map(function (k) {
      var cur = page === k ? ' aria-current="page"' : "";
      return '<a data-library href="' + base + sections[k].href + '"' + cur + ">" + esc(sections[k].title) + "</a>";
    }).join("");
  }

  /* ----- footer ----- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = "<p>" + esc(C.site.footer) + "</p>";
  }

  fill(document);

  /* ----- preview mode (single-file build): library pages open as an overlay ----- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-library]");
    if (!a || !window.__PREVIEW__) return;
    e.preventDefault();
    var m = /library\/(\w+)\.html(?:#(.*))?$/.exec(a.getAttribute("href") || "");
    if (m && window.FV_openLibraryOverlay) window.FV_openLibraryOverlay(m[1], m[2] || "", a);
  });
})();
