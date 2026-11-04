/* =========================================================================
   LIBRARY RENDERER
   Every page uses one template:
     hero > at a glance > (filters and tag legend) > grouped cards > menu
   Used by the five library pages, and by the single-file preview as an
   overlay.
   ========================================================================= */
(function () {
  "use strict";
  var C = window.APP_CONTENT, L = window.FV_LIB, U = C.library.ui;
  var ORDER = L.order;
  var TONE = { learners: "tone-learners", instructors: "tone-instructors", programme: "tone-programme", partnership: "tone-partnership", ideas: "tone-ideas" };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(s, v) { return String(s).replace(/\{(\w+)\}/g, function (m, k) { return v && v[k] !== undefined ? v[k] : m; }); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function base() { return document.body.getAttribute("data-base") || ""; }

  /* ------------------------------------------------------------------ icons */
  var P = {
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"/><path d="M22 9v6"/>',
    speech: '<path d="M4 5h16v11H10l-5 4v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
    spark: '<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/><path d="M19 3v4M17 5h4"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    tap: '<path d="M9 11V5.5a1.8 1.8 0 013.6 0V10l3 .8a2.5 2.5 0 011.9 2.4V16c0 3-2 5-5 5h-1.5c-1.8 0-3-.8-4-2.2L5 15.2a1.7 1.7 0 012.6-2.1L9 14.5"/>',
    people: '<circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.6 2.9-5.8 6.5-5.8s6.5 2.2 6.5 5.8"/><circle cx="17.5" cy="9" r="2.6"/><path d="M17.5 14.4c2.6 0 4.5 1.6 4.5 4.2"/>',
    book: '<path d="M12 6c-1.5-1.3-3.7-2-7-2v14c3.3 0 5.5.7 7 2 1.5-1.3 3.7-2 7-2V4c-3.3 0-5.5.7-7 2z"/><path d="M12 6v14"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 5v2"/><path d="M3 13h18"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="M8 14h3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/>',
    warning: '<path d="M12 3.5l9.5 16.5h-19z"/><path d="M12 10v4.5M12 17.2v.3"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4.5h12l-2.2 4 2.2 4H5"/>',
    building: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M10.5 21v-4h3v4"/>'
  };
  function icon(name) {
    return '<svg class="ico-svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (P[name] || "") + "</svg>";
  }

  function evChip(t) { return '<span class="chip ev ev-' + t + '">' + esc(C.tags[t]) + "</span>"; }
  function ceChip(c) { return '<span class="chip ce">' + esc(U.centres[c]) + "</span>"; }

  /* ------------------------------------------------------------------ cards */
  function extraHtml(x) {
    if (x.type === "chatbot") {
      return '<p>' + esc(x.context) + '</p><div class="cols4">' + x.columns.map(function (c, i) {
        return '<div class="tcol tcol-' + i + '"><h4>' + esc(c.title) + "</h4><ul>" + c.items.map(function (i2) { return "<li>" + esc(i2) + "</li>"; }).join("") + "</ul></div>";
      }).join("") + "</div>";
    }
    if (x.type === "video") {
      return '<div class="two"><div><h4>' + esc(U.questionsTitle) + "</h4><ul>" + x.questions.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></div>" +
        "<div><h4>" + esc(U.findingsTitle) + "</h4><ul>" + x.findings.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></div></div>" +
        '<h4 class="cmp-title">' + esc(U.compareTitle) + '</h4><div class="table-wrap"><table class="cmp"><thead><tr>' +
        x.table.cols.map(function (c) { return '<th scope="col">' + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        x.table.rows.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + "</th><td>" + esc(r[1]) + "</td><td>" + esc(r[2]) + "</td></tr>"; }).join("") + "</tbody></table></div>" +
        '<div class="conditions"><b>' + esc(U.barriersTitle) + "</b><p>" + esc(x.barriers) + "</p></div>";
    }
    return "";
  }

  function cardHtml(c) {
    var chips = c.tags.map(evChip).join("") + c.centres.map(ceChip).join("") + (c.welcomed ? '<span class="chip welcomed">' + esc(U.welcomed) + "</span>" : "");
    var hasMore = c.points.length || c.extra || c.reading;
    var more = "";
    if (hasMore) {
      more = '<details class="more"><summary><span class="rm-open">' + esc(U.readMore) + '</span><span class="rm-close">' + esc(U.showLess) + "</span></summary><div class=\"more-body\">" +
        (c.points.length ? '<ul class="points">' + c.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") +
        (c.reading ? '<div class="reading"><b>' + esc(U.reading) + "</b><p>" + esc(c.reading) + "</p></div>" : "") +
        (c.extra ? extraHtml(c.extra) : "") + "</div></details>";
    }
    return '<article class="insight" id="' + c.id + '" data-ev="' + c.tags.join(" ") + '" data-ce="' + c.centres.join(" ") + '">' +
      (chips ? '<div class="chips">' + chips + "</div>" : "") +
      "<h3>" + esc(c.title) + '</h3><p class="summary">' + esc(c.summary) + "</p>" + more + "</article>";
  }

  /* ------------------------------------------------------------ at a glance */
  function personaHtml(g) {
    var faces = g.faces.map(function (f) { return '<span class="face">' + window.FV_SCENES.bust(f) + "</span>"; }).join("");
    var tiles = g.tiles.map(function (t) {
      return '<li class="tile"><span class="ico">' + icon(t.icon) + '</span><span class="tx"><b>' + esc(t.k) + "</b><span>" + esc(t.v) + "</span></span></li>";
    }).join("");
    var facets = g.facets.map(function (f) { return '<div class="facet"><dt>' + esc(f.k) + "</dt><dd>" + esc(f.v) + "</dd></div>"; }).join("");
    return '<section class="persona" aria-labelledby="gl-title">' +
      '<div class="persona-side"><div class="faces">' + faces + '</div><h2 id="gl-title">' + esc(g.title) + "</h2><p>" + esc(g.note) + "</p></div>" +
      '<div class="persona-main"><ul class="tiles">' + tiles + "</ul>" +
      '<details class="glance-more"><summary><span class="rm-open">' + esc(g.fullTitle) + '</span><span class="rm-close">' + esc(U.hideProfile) + "</span></summary><dl class=\"facets\">" + facets + "</dl></details></div></section>";
  }

  function allCards(page) {
    var a = [];
    page.groups.forEach(function (g) { a = a.concat(g.cards); });
    return a;
  }

  function boardHtml(page) {
    var map = {};
    allCards(page).forEach(function (c) { map[c.id] = c; });
    function list(ids) { return "<ul>" + ids.map(function (id) { return '<li><a href="#' + id + '">' + esc(map[id].short) + "</a></li>"; }).join("") + "</ul>"; }
    return '<section class="band" aria-labelledby="gl-title"><h2 id="gl-title">' + esc(page.board.title) + "</h2>" +
      '<div class="board">' +
      '<div class="col col-ok"><h3>' + esc(U.working) + "</h3>" + list(page.board.working) + "</div>" +
      '<div class="col col-watch"><h3>' + esc(U.attention) + "</h3>" + list(page.board.attention) + "</div>" +
      '<div class="col col-ideas"><h3>' + esc(page.board.ideasLabel) + "</h3><p>" + esc(page.board.ideasNote) + '</p><a class="btn btn-ghost" data-library href="' + base() + 'library/ideas.html">' + esc(L.pages.ideas.title) + "</a></div></div></section>";
  }

  function partnershipHtml(page) {
    var roles = page.roles.map(function (r, i) {
      return '<div class="role role-' + i + '"><span class="ico">' + icon(r.icon) + "</span><h3>" + esc(r.who) + "</h3><ul>" + r.does.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
    var steps = page.path.steps.map(function (s) { return "<li><b>" + esc(s.t) + "</b><span>" + esc(s.d) + "</span></li>"; }).join("");
    return '<section class="band" aria-labelledby="gl-title"><h2 id="gl-title">' + esc(page.glanceTitle) + "</h2>" +
      '<div class="role-grid">' + roles + "</div>" +
      '<h3 class="path-title">' + esc(page.path.title) + '</h3><ol class="steps-path">' + steps + "</ol></section>";
  }

  function ideasGlance(page) {
    return '<section class="band" aria-labelledby="gl-title"><h2 id="gl-title">' + esc(page.glanceTitle) + "</h2>" +
      '<p class="summary-line">' + esc(page.summary) + '</p><div class="conditions"><b>' + esc(U.conditions) + "</b><p>" + esc(page.conditions) + "</p></div></section>";
  }

  /* ----------------------------------------------------------- the menu */
  function menuHtml(key, homeHref) {
    var tiles = ORDER.map(function (k) {
      var s = C.library.sections[k], cur = k === key;
      return '<a class="lib-tile' + (cur ? " current" : "") + '" data-library href="' + base() + s.href + '"' + (cur ? ' aria-current="page"' : "") + "><strong>" + esc(s.title) + "</strong><span>" + esc(s.blurb) + "</span>" + (cur ? "<em>" + esc(U.youAreHere) + "</em>" : "") + "</a>";
    }).join("");
    return '<section class="library-banner lib-menu" aria-labelledby="menu-title"><div class="lib-menu-in"><h2 id="menu-title">' + esc(U.menuTitle) + "</h2><p>" + esc(U.menuNote) + '</p><div class="lib-grid">' + tiles + "</div>" +
      '<p class="menu-back"><a class="btn btn-green" data-library-home href="' + homeHref + '#play">' + esc(U.backToVisit) + "</a></p></div></section>";
  }

  /* ---------------------------------------------------------------- render */
  function render(key, root, opts) {
    opts = opts || {};
    var page = L.pages[key];
    var cards = allCards(page);
    var homeHref = opts.overlay ? "#" : base() + "index.html";

    var h = '<div class="lib ' + TONE[key] + '">';
    h += '<header class="lib-hero"><div class="lib-hero-in"><h1>' + esc(page.title) + "</h1></div></header>";
    h += '<div class="lib-body">';

    // 1. at a glance
    if (page.glance) h += personaHtml(page.glance);
    else if (page.board) h += boardHtml(page);
    else if (key === "partnership") h += partnershipHtml(page);
    else if (key === "ideas") h += ideasGlance(page);

    // 2. filters and the tag legend, only where they mean something
    var evSet = {}, ceSet = {};
    cards.forEach(function (c) { c.tags.forEach(function (t) { evSet[t] = 1; }); c.centres.forEach(function (x) { ceSet[x] = 1; }); });
    var evs = ["observed", "said", "reported", "interpretation"].filter(function (t) { return evSet[t]; });
    var ces = ["namakkal", "chennai", "other"].filter(function (c) { return ceSet[c]; });
    var showEv = evs.length > 1, showCe = ces.length > 0, hasTags = evs.length > 0;
    var expandable = cards.filter(function (c) { return c.points.length || c.extra || c.reading; }).length;
    var showAll = expandable >= 3;
    var allCtl = showAll ? '<div class="fgroup right"><button type="button" class="linkish" id="exp-all">' + esc(U.expandAll) + '</button><button type="button" class="linkish" id="col-all">' + esc(U.collapseAll) + "</button></div>" : "";
    if (showEv || showCe || hasTags || showAll) {
      h += '<div class="toolbar">';
      if (showEv || showCe) {
        h += '<div class="filters" role="group" aria-label="Filters">';
        if (showCe) h += '<div class="fgroup" data-f="ce"><span class="tool-label">' + esc(U.centreLabel) + "</span>" +
          ["all"].concat(ces).map(function (c, i) { return '<button type="button" class="fchip" aria-pressed="' + (i === 0) + '" data-v="' + c + '">' + esc(c === "all" ? U.all : U.centres[c]) + "</button>"; }).join("") + "</div>";
        if (showEv) h += '<div class="fgroup" data-f="ev"><span class="tool-label">' + esc(U.evidenceLabel) + "</span>" +
          ["all"].concat(evs).map(function (e, i) { return '<button type="button" class="fchip" aria-pressed="' + (i === 0) + '" data-v="' + e + '">' + esc(e === "all" ? U.all : C.tags[e]) + "</button>"; }).join("") + "</div>";
        h += "</div>";
      }
      if (hasTags) h += '<details class="legend"><summary>' + esc(U.legendTitle) + "</summary><ul>" + ["observed", "said", "reported", "interpretation"].map(function (t) { return "<li>" + evChip(t) + " " + esc(U.legend[t]) + "</li>"; }).join("") + "</ul></details>";
      h += allCtl + "</div>";
      if (showEv || showCe) h += '<p class="showing" id="showing" role="status" aria-live="polite"></p>';
    }

    // 3. grouped cards, always the same anatomy
    page.groups.forEach(function (g) {
      h += '<section class="group group-' + g.key + '" data-group aria-labelledby="g-' + g.key + '"><h2 id="g-' + g.key + '">' + esc(g.title) + '</h2><div class="cards">' + g.cards.map(cardHtml).join("") + "</div></section>";
    });
    h += '<p class="empty" id="empty" hidden>' + esc(U.empty) + ' <button type="button" class="linkish" id="reset">' + esc(U.reset) + "</button></p>";
    h += "</div>";

    // 4. the whole library menu
    h += menuHtml(key, homeHref) + "</div>";
    root.innerHTML = h;

    wire(root, cards.length);
    openFromHash(root, opts.hash || (opts.overlay ? "" : location.hash));
    if (!opts.overlay) window.addEventListener("hashchange", function () { openFromHash(root, location.hash); });
  }

  /* -------------------------------------------------------------- behaviour */
  function setOpen(card, open) {
    var d = $("details.more", card);
    if (!d) return;
    d.open = open;
    card.classList.toggle("open", open);
  }

  function wire(root, total) {
    $$(".insight", root).forEach(function (card) {
      var d = $("details.more", card);
      if (d) d.addEventListener("toggle", function () { card.classList.toggle("open", d.open); });
    });
    var state = { ce: "all", ev: "all" };
    function apply() {
      var n = 0;
      $$(".insight", root).forEach(function (el) {
        var ce = el.getAttribute("data-ce").split(" "), ev = el.getAttribute("data-ev").split(" ");
        var okCe = state.ce === "all" || ce.indexOf(state.ce) > -1 || (ce.indexOf("across") > -1 && state.ce !== "other");
        var okEv = state.ev === "all" || ev.indexOf(state.ev) > -1;
        el.hidden = !(okCe && okEv);
        if (!el.hidden) n++;
      });
      $$("[data-group]", root).forEach(function (g) { g.hidden = !$$(".insight:not([hidden])", g).length; });
      var sh = $("#showing", root);
      if (sh) sh.textContent = state.ce === "all" && state.ev === "all" ? "" : fmt(U.showing, { n: n, m: total });
      var em = $("#empty", root); if (em) em.hidden = n > 0;
    }
    $$(".fgroup[data-f]", root).forEach(function (g) {
      var f = g.getAttribute("data-f");
      $$(".fchip", g).forEach(function (b) {
        b.addEventListener("click", function () {
          state[f] = b.getAttribute("data-v");
          $$(".fchip", g).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
          apply();
        });
      });
    });
    var rs = $("#reset", root);
    if (rs) rs.addEventListener("click", function () {
      state.ce = "all"; state.ev = "all";
      $$(".fgroup[data-f]", root).forEach(function (g) { $$(".fchip", g).forEach(function (x, i) { x.setAttribute("aria-pressed", i === 0 ? "true" : "false"); }); });
      apply();
    });
    var ea = $("#exp-all", root), ca = $("#col-all", root);
    if (ea) ea.addEventListener("click", function () { $$(".insight:not([hidden])", root).forEach(function (c) { setOpen(c, true); }); });
    if (ca) ca.addEventListener("click", function () { $$(".insight", root).forEach(function (c) { setOpen(c, false); }); });
  }

  function openFromHash(root, hash) {
    var id = (hash || "").replace(/^#/, "");
    if (!id) return;
    var el = $("#" + id, root);
    if (!el) return;
    if (el.hidden) el.hidden = false;
    setOpen(el, true);
    $$(".insight.hit", root).forEach(function (x) { x.classList.remove("hit"); });
    el.classList.add("hit");
    if (el.scrollIntoView) el.scrollIntoView({ block: "center", behavior: "auto" });
    var h3 = $("h3", el);
    if (h3) { h3.setAttribute("tabindex", "-1"); h3.focus({ preventScroll: true }); }
  }

  /* ------------------------------------------- overlay (single-file preview) */
  var overlay = null, opener = null;
  function closeOverlay() {
    if (!overlay) return;
    document.body.removeChild(overlay);
    overlay = null;
    document.body.style.overflow = "";
    if (opener && document.contains(opener)) opener.focus();
  }
  function openOverlay(key, hash, from) {
    opener = from || document.activeElement;
    if (overlay) document.body.removeChild(overlay);
    overlay = document.createElement("div");
    overlay.className = "lib-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", U.crumb);
    overlay.innerHTML = '<div class="lib-bar"><span class="lib-bar-title">' + esc(U.crumb) + '</span><button type="button" class="btn btn-primary lib-close">' + esc(U.close) + '</button></div><div class="lib-scroll" id="lib-scroll"></div>';
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
    var scroll = $("#lib-scroll", overlay);
    render(key, scroll, { overlay: true, hash: hash });
    $(".lib-close", overlay).addEventListener("click", closeOverlay);
    overlay.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (!a) return;
      if (a.hasAttribute("data-library-home")) { e.preventDefault(); closeOverlay(); return; }
      var m = /library\/(\w+)\.html(?:#(.*))?$/.exec(a.getAttribute("href") || "");
      if (m) { e.preventDefault(); openOverlay(m[1], m[2] || "", opener); return; }
      var href = a.getAttribute("href") || "";
      if (href.charAt(0) === "#" && href.length > 1) {
        e.preventDefault();
        var tgt = $(href, overlay);
        if (tgt) { if (tgt.hidden) tgt.hidden = false; setOpen(tgt, true); tgt.scrollIntoView({ block: "center" }); }
      }
    });
    var first = $("h1", overlay); if (first) { first.setAttribute("tabindex", "-1"); if (!hash) first.focus({ preventScroll: true }); }
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && overlay) { e.stopPropagation(); closeOverlay(); } }, true);

  window.FV_openLibraryOverlay = openOverlay;
  window.FV_renderLibrary = render;

  /* a real library page: render into #lib-root */
  var root = document.getElementById("lib-root");
  if (root) render(document.body.getAttribute("data-page"), root, {});
})();
