/* =========================================================================
   GAME ENGINE
   Flow: setup > brief > arrival > play (7:00) > reveal > [revisit] >
         consolidate > reflect > end.
   Everything lives in memory. Nothing is saved or sent anywhere.
   Scoring: Spot = 10, Get = 10, bonus Spot = 10. No penalties.
   ========================================================================= */
(function () {
  "use strict";

  var C = window.APP_CONTENT;
  var SC = window.FV_SCENES;

  var TOTAL_MS = 7 * 60 * 1000;
  var CLUE_AFTER_MS = 20 * 1000;
  var POINTS = { spot: 10, get: 10 };

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function fmt(str, vars) {
    return String(str).replace(/\{(\w+)\}/g, function (m, k) { return vars && vars[k] !== undefined ? vars[k] : m; });
  }
  function now() { return typeof window.__fvNow === "function" ? window.__fvNow() : Date.now(); }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function reducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  var SCREENS = ["setup", "brief", "arrival", "play", "reveal", "consolidate", "reflect", "end"];
  var run = null;
  var timer = null;
  var clueTimer = null;
  var modal = null;     // { root, opener, onClose }
  var drawer = null;

  /* ---------------------------------------------------------------- helpers */
  function centreOf(key) { return C.centres[key]; }
  function itemById(id) {
    var items = run.centre.items;
    for (var i = 0; i < items.length; i++) if (items[i].id === id) return items[i];
    return null;
  }
  function lensChip(lens) {
    return '<span class="chip chip-' + lens + '">' + esc(C.lenses[lens].short) + "</span>";
  }
  function tagChip(tag) {
    return '<span class="chip chip-tag">' + esc(C.tags[tag]) + "</span>";
  }
  function announce(msg) {
    var live = $("#live");
    if (!live) return;
    live.textContent = "";
    setTimeout(function () { live.textContent = msg; }, 30);
  }
  function showScreen(name, focusHeading, noScroll) {
    SCREENS.forEach(function (s) {
      var el = $("#screen-" + s);
      if (el) el.hidden = s !== name;
    });
    var game = $("#play");
    if (game && game.scrollIntoView && name !== "play" && !noScroll) {
      game.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
    }
    if (focusHeading !== false) {
      var h = $("#screen-" + name + " h2");
      if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    }
  }
  function libraryHref(lens, itemId) {
    var page = { learner: "learners", instructor: "instructors", programme: "programme" }[lens];
    var it = itemById(itemId);
    return C.library.sections[page].href + "#" + ((it && it.lib) || itemId);
  }

  /* ------------------------------------------------------------------ setup */
  function renderSetup() {
    var root = $("#screen-setup");
    var S = C.setup;
    function card(key) {
      var c = C.centres[key];
      return '<article class="centre-card">' +
        '<div class="centre-art">' +
          '<div class="art-svg" aria-hidden="true">' + SC[key].arrival() + "</div>" +
          '<div class="centre-overlay"><h3>' + esc(c.name) + '</h3><p class="prog">' + esc(c.programme) + '</p><p class="place">' + esc(c.place) + "</p></div>" +
        "</div>" +
        '<div class="centre-body"><button class="btn btn-primary" type="button" data-centre="' + key + '">' + esc(fmt(S.start + " {c}", { c: c.name })) + "</button></div>" +
      "</article>";
    }
    root.innerHTML =
      '<h2 class="visually-hidden">' + esc(S.chooseLabel) + "</h2>" +
      '<div class="centre-grid">' + card("namakkal") + card("chennai") + "</div>";
    $$("[data-centre]", root).forEach(function (b) {
      b.addEventListener("click", function () { startRun(b.getAttribute("data-centre")); });
    });
  }

  function startRun(key) {
    var centre = centreOf(key);
    run = {
      key: key, centre: centre, scene: SC[key],
      phase: "brief", score: 0, startAt: 0, endAt: 0, lastAction: 0,
      prog: {}, viewed: {}, pairSeen: {}, tabsSeen: {}, notes: [],
      pendingReveal: false, reflection: "", optionOrder: {}
    };
    centre.items.forEach(function (it) {
      run.prog[it.id] = { spot: false, get: null, spotPts: 0, getPts: 0, later: false };
    });
    renderBrief();
    showScreen("brief");
  }

  /* ------------------------------------------------------------------ brief */
  function renderBrief() {
    var B = C.brief, c = run.centre;
    var root = $("#screen-brief");
    root.innerHTML =
      '<div class="brief">' +
        '<div class="brief-hero">' +
          '<span class="brief-place">' + esc(c.name) + "</span>" +
          "<h2>" + esc(B.title) + "</h2>" +
          '<p class="brief-lead">' + esc(fmt(B.lead, { place: c.name })) + "</p>" +
          '<p class="brief-goal">' + esc(B.goal) + "</p>" +
          '<p class="brief-prog">' + esc(fmt(B.programme, { programme: c.programme })) + "</p>" +
        "</div>" +
        '<div class="brief-body">' +
          "<h3>" + esc(B.lookTitle) + "</h3>" +
          '<ul class="lens-cards">' +
            ["learner", "instructor", "programme"].map(function (l) {
              return "<li>" + lensChip(l) + "<span>" + esc(B.lensLines[l]) + "</span></li>";
            }).join("") +
          "</ul>" +
          "<h3>" + esc(B.howTitle) + "</h3>" +
          '<ol class="steps">' + B.steps.map(function (s) { return "<li><b>" + esc(s.t) + "</b><span>" + esc(s.d) + "</span></li>"; }).join("") + "</ol>" +
          '<p class="fine">' + esc(B.stuck) + "</p>" +
          '<button class="btn btn-primary" type="button" id="brief-go">' + esc(B.go) + "</button>" +
        "</div>" +
      "</div>";
    $("#brief-go").addEventListener("click", function () { renderArrival(); showScreen("arrival"); });
  }

  /* ---------------------------------------------------------------- arrival */
  function renderArrival() {
    var A = run.centre.arrival, root = $("#screen-arrival");
    root.innerHTML =
      '<div class="arrival">' +
        '<div class="arrival-art" role="img" aria-label="' + esc(A.title) + '">' + run.scene.arrival() + "</div>" +
        '<div class="arrival-text"><h2>' + esc(A.title) + "</h2>" +
          A.lines.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") +
          '<p class="fine">' + esc(C.arrival.note) + "</p>" +
          '<button class="btn btn-primary" type="button" id="arrival-go">' + esc(C.arrival.start) + "</button>" +
        "</div>" +
      "</div>";
    $("#arrival-go").addEventListener("click", startPlay);
  }

  /* ------------------------------------------------------------------- play */
  function startPlay() {
    run.phase = "play";
    run.startAt = now();
    run.endAt = run.startAt + TOTAL_MS;
    run.lastAction = now();
    buildPlayScreen();
    showScreen("play", false);
    var game = $("#play");
    if (game && game.scrollIntoView) game.scrollIntoView({ behavior: "auto", block: "start" });
    var wrap = $(".scene-wrap");
    if (wrap && wrap.scrollWidth > wrap.clientWidth) wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) / 2;
    clearInterval(timer);
    timer = setInterval(tick, 250);
    updateClock(TOTAL_MS);
    announce(fmt(C.play.timeLeft + ": 7:00", {}));
  }

  function buildPlayScreen() {
    var P = C.play;
    var root = $("#screen-play");
    root.innerHTML =
      '<h2 class="visually-hidden">' + esc(run.centre.name) + "</h2>" +
      '<div class="topbar">' +
        '<div class="clock" id="clock"><div class="clock-row"><span>' + esc(P.timeLeft) + '</span><span id="clock-text">7:00</span></div>' +
          '<div class="clock-bar" role="progressbar" aria-label="' + esc(P.timeLeft) + '" aria-valuemin="0" aria-valuemax="420" aria-valuenow="420" id="clock-bar"><i id="clock-fill"></i></div></div>' +
        '<div class="score"><b id="score-num">0</b><span>' + esc(P.score) + "</span></div>" +
        '<button class="btn btn-ghost nb-toggle" type="button" id="nb-toggle" aria-expanded="false" aria-controls="notebook">' + esc(P.notebookOpen) + ' (<span id="nb-toggle-n">0</span>)</button>' +
      "</div>" +
      '<div id="revisit-slot"></div>' +
      '<div class="stage">' +
        "<div>" +
          '<div class="scene-box"><div class="scene-wrap"><div class="scene" id="scene"></div></div>' +
          '<div class="toast" id="toast" hidden role="status"></div></div>' +
          '<p class="play-hint">' + esc(P.playHint) + "</p>" +
          '<p class="pan-hint">' + esc(P.panHint) + "</p>" +
        "</div>" +
        '<aside class="notebook" id="notebook" aria-label="' + esc(P.notebook) + '">' +
          '<div class="nb-head"><h2>' + esc(P.notebook) + '</h2><span class="nb-count">' + esc(P.notes) + ': <span id="nb-n">0</span></span>' +
          '<button class="btn btn-ghost nb-close" type="button" id="nb-close">' + esc(P.notebookClose) + "</button></div>" +
          '<div id="nb-body"></div>' +
        "</aside>" +
      "</div>";

    var scene = $("#scene");
    scene.insertAdjacentHTML("afterbegin", run.scene.room());
    run.scene.hotspots.forEach(function (h) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "hs";
      b.id = "hs-" + h.id;
      b.setAttribute("data-hs", h.id);
      b.style.left = h.x + "%";
      b.style.top = h.y + "%";
      b.setAttribute("aria-label", h.label);
      b.innerHTML = '<span class="hs-label" aria-hidden="true">' + esc(h.label) + "</span>";
      b.addEventListener("click", function () { openCard(h, b); });
      scene.appendChild(b);
    });

    $("#nb-toggle").addEventListener("click", function () { toggleNotebook(true); });
    $("#nb-close").addEventListener("click", function () { toggleNotebook(false); });
    renderNotebook();
    refreshHotspots();
  }

  function toggleNotebook(open) {
    var nb = $("#notebook"), tg = $("#nb-toggle");
    nb.classList.toggle("open", open);
    tg.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) $("#nb-close").focus();
    else tg.focus();
  }

  function updateClock(remainMs) {
    var secs = Math.max(0, Math.ceil(remainMs / 1000));
    var m = Math.floor(secs / 60), s = secs % 60;
    var txt = m + ":" + (s < 10 ? "0" : "") + s;
    var t = $("#clock-text"), f = $("#clock-fill"), c = $("#clock"), bar = $("#clock-bar");
    if (!t) return;
    t.textContent = txt;
    f.style.width = Math.max(0, Math.min(100, (remainMs / TOTAL_MS) * 100)) + "%";
    bar.setAttribute("aria-valuenow", String(secs));
    c.classList.toggle("low", secs <= 60 && secs > 0);
  }

  function tick() {
    if (!run || run.phase !== "play") return;
    var remain = run.endAt - now();
    updateClock(remain);
    if (remain <= 0) {
      if (modal) {
        if (!run.pendingReveal) {
          run.pendingReveal = true;
          var note = $(".timeup-note", modal.root);
          if (note) note.hidden = false;
        }
      } else {
        goReveal();
      }
      return;
    }
    if (!modal && now() - run.lastAction >= CLUE_AFTER_MS) giveClue();
  }

  function touch() { if (run) run.lastAction = now(); }

  /* the visit ends by itself once every observation is noted and every inference is made */
  function isComplete() {
    return run.centre.items.every(function (it) {
      var p = run.prog[it.id];
      return p.spot && (it.kind === "bonus" || p.get !== null);
    });
  }
  function clockText(ms) {
    var secs = Math.max(0, Math.ceil(ms / 1000));
    return Math.floor(secs / 60) + ":" + (secs % 60 < 10 ? "0" : "") + (secs % 60);
  }

  /* ---------------------------------------------------------------- hotspots */
  function hotspotsForItem(itemId) {
    return run.scene.hotspots.filter(function (h) { return run.centre.cards[h.card].item === itemId; });
  }
  function refreshHotspots() {
    if (!run) return;
    run.scene.hotspots.forEach(function (h) {
      var b = $("#hs-" + h.id);
      if (!b) return;
      var itemId = run.centre.cards[h.card].item;
      var it = itemById(itemId), pr = run.prog[itemId];
      var cd = run.centre.cards[h.card];
      var todo = pr.spot && it.kind === "core" && pr.get === null;
      var partial = false;
      if (!pr.spot) {
        if (cd.visual === "pair") partial = ((run.pairSeen.manual ? 1 : 0) + (run.pairSeen.handout ? 1 : 0)) === 1;
        else if (cd.visual === "screen") partial = ((run.tabsSeen.canvas ? 1 : 0) + (run.tabsSeen.data ? 1 : 0)) === 1;
      }
      var done = !todo && !partial && (pr.spot || run.viewed[h.id]);
      b.classList.toggle("todo", !!todo);
      b.classList.toggle("half", !!partial);
      b.classList.toggle("done", !!done);
      b.setAttribute("aria-label", h.label + (todo ? ", noted, infer what it tells us" : partial ? ", one of two parts seen" : done ? ", seen" : ""));
    });
  }
  function clearClues() {
    $$(".hs.clue").forEach(function (b) { b.classList.remove("clue"); });
    var t = $("#toast");
    if (t) t.hidden = true;
    clearTimeout(clueTimer);
  }
  function giveClue() {
    var items = run.centre.items;
    var target = null;
    for (var i = 0; i < items.length; i++) {
      if (!run.prog[items[i].id].spot) { target = items[i]; break; }
    }
    run.lastAction = now();
    if (!target) return;
    clearClues();
    var hs = hotspotsForItem(target.id);
    var unseen = hs.filter(function (h) { return h.tab ? !run.pairSeen[h.tab] : !run.viewed[h.id]; });
    (unseen.length ? unseen : hs).forEach(function (h) {
      var b = $("#hs-" + h.id);
      if (b) b.classList.add("clue");
    });
    var toast = $("#toast");
    if (toast) {
      toast.innerHTML = "<b>" + esc(C.play.clue) + ":</b> <span>" + esc(target.clue) + "</span>";
      toast.hidden = false;
      clearTimeout(clueTimer);
      clueTimer = setTimeout(function () { if (toast) toast.hidden = true; }, 9000);
    }
    announce(C.play.clue + ": " + target.clue);
  }

  /* ------------------------------------------------------------ notebook list */
  function renderNotebook(scrollToEnd) {
    var body = $("#nb-body");
    if (!body) return;
    var keep = body.scrollTop;
    if (!run.notes.length) {
      body.innerHTML = '<p class="nb-empty">' + esc(C.play.notebookEmpty) + "</p>";
    } else {
      body.innerHTML = '<ul class="nb-list">' + run.notes.map(function (id) {
        var it = itemById(id), p = run.prog[id];
        var pts = p.spotPts + p.getPts;
        return '<li class="nb-item"><div class="row">' + lensChip(it.lens) +
          it.tags.map(tagChip).join("") + "</div>" +
          "<h3>" + esc(it.title) + "</h3>" +
          '<p class="nb-note">' + esc(it.note) + "</p>" +
          (p.later ? '<span class="nb-pts">' + esc(C.play.capturedLater) + "</span>" : '<span class="nb-pts">' + esc(fmt(C.play.pointsPop, { n: pts })) + "</span>") +
          (!p.later && it.kind === "core" && p.get === null ? '<span class="nb-todo">' + esc(C.play.nextInfer) + "</span>" : "") +
          "</li>";
      }).join("") + "</ul>";
    }
    body.scrollTop = scrollToEnd ? body.scrollHeight : keep;
    var n = String(run.notes.length);
    var a = $("#nb-n"), b = $("#nb-toggle-n");
    if (a) a.textContent = n;
    if (b) b.textContent = n;
  }

  function addScore(n) {
    run.score += n;
    var num = $("#score-num");
    if (num) num.textContent = String(run.score);
    var wrap = num && num.parentNode;
    if (wrap) {
      var pop = document.createElement("span");
      pop.className = "pop";
      pop.textContent = "+" + n;
      wrap.appendChild(pop);
      setTimeout(function () { if (pop.parentNode) pop.parentNode.removeChild(pop); }, 1400);
    }
    announce(fmt(C.play.pointsPop, { n: n }) + ". " + C.play.score + " " + run.score);
  }

  /* ------------------------------------------------------------------ modal */
  function focusables(root) {
    return $$('button:not([disabled]), [href], input, textarea, [tabindex]:not([tabindex="-1"])', root).filter(function (e) { return !e.hidden && e.offsetParent !== null || e.tagName === "BUTTON"; });
  }
  function openModal(html, opener, onClose) {
    closeModal(true);
    var root = document.createElement("div");
    root.className = "modal";
    root.innerHTML = '<div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">' +
      '<button class="modal-x" type="button" aria-label="' + esc(C.play.closeCard) + '">&times;</button>' + html + "</div>";
    document.body.appendChild(root);
    modal = { root: root, opener: opener, onClose: onClose };
    var card = $(".modal-card", root);
    var x = $(".modal-x", root);
    x.addEventListener("click", function () { closeModal(); });
    root.addEventListener("mousedown", function (e) { if (e.target === root) closeModal(); });
    var title = $("#modal-title", root);
    if (title) { title.setAttribute("tabindex", "-1"); title.focus({ preventScroll: true }); }
    card.scrollTop = 0;
    document.body.style.overflow = "hidden";
    return root;
  }
  function closeModal(silent) {
    if (!modal) return;
    var m = modal;
    modal = null;
    if (m.root.parentNode) m.root.parentNode.removeChild(m.root);
    document.body.style.overflow = "";
    if (!silent) {
      touch();
      if (m.opener && document.contains(m.opener)) m.opener.focus();
      if (m.onClose) m.onClose();
      if (run && run.phase === "play") {
        if (run.pendingReveal) goReveal();
        else if (isComplete()) goReveal();
      }
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (drawer) { closeDrawer(); return; }
      if (modal) { closeModal(); return; }
      var nb = $("#notebook");
      if (nb && nb.classList.contains("open")) toggleNotebook(false);
    }
    if (e.key === "Tab" && (modal || drawer)) {
      var root = drawer ? drawer.root : modal.root;
      var f = focusables(root);
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------------------------------------------------------------- visuals */
  function manualSvg() {
    var cols = ["#2B3E49", "#0074B9", "#1D8F35", "#00619A", "#808B92"];
    var s = '<svg viewBox="0 0 360 200" role="img" aria-label="' + esc(C.visuals.manualCaption) + '">';
    s += '<rect x="0" y="170" width="360" height="14" rx="4" fill="#B98A5A"/>';
    for (var i = 0; i < 5; i++) {
      var y = 160 - i * 28, off = i === 2 ? 34 : 0;
      s += '<rect x="' + (50 + off) + '" y="' + y + '" width="230" height="24" rx="4" fill="' + cols[i] + '"/>';
      s += '<rect x="' + (58 + off) + '" y="' + (y + 9) + '" width="200" height="6" rx="2" fill="#fff" opacity=".55"/>';
      s += '<text x="' + (268 + off) + '" y="' + (y + 18) + '" font-family="Poppins, sans-serif" font-weight="700" font-size="15" fill="#fff" text-anchor="middle">' + (i + 1) + "</text>";
    }
    s += "</svg>";
    return s;
  }
  function handoutSvg() {
    return '<svg viewBox="0 0 360 200" role="img" aria-label="' + esc(C.visuals.handoutCaption) + '">' +
      '<rect x="20" y="22" width="150" height="160" rx="4" fill="#fff" stroke="#9AA5AE" stroke-width="3"/>' +
      '<rect x="190" y="22" width="150" height="160" rx="4" fill="#fff" stroke="#9AA5AE" stroke-width="3"/>' +
      '<line x1="180" y1="18" x2="180" y2="186" stroke="#9AA5AE" stroke-width="3"/></svg>';
  }
  function portraitHtml(visual) {
    var key = visual.split(":")[1];
    return '<div class="portrait">' + SC.bust(run.scene.portraits[key]) + "</div>";
  }
  function screenHtml(card) {
    var S = card.screen;
    var u = S.units.map(function (unit, idx) {
      var rows = unit.rows.map(function (r) {
        return '<li' + (r.found ? ' class="found" data-found="1"' : "") + "><span>" + esc(r.t) + "</span><span>" + esc(r.s) + "</span></li>";
      }).join("");
      return '<div class="unit"><button type="button" aria-expanded="false" aria-controls="unit-' + idx + '"><span>' + esc(unit.name) + '</span><span aria-hidden="true">+</span></button>' +
        '<ul id="unit-' + idx + '" hidden>' + rows + "</ul></div>";
    }).join("");
    function rowsFor(arr, kind) {
      return arr.map(function (v, i) {
        var label = S.colLearner + " " + (i + 1);
        if (kind === "score") return "<tr><td>" + esc(label) + "</td><td>" + S.score + "</td></tr>";
        return "<tr><td>" + esc(label) + "</td><td>" + (v ? esc(S.yes) : esc(S.no)) + "</td><td>" + (S.graded[i] ? esc(S.yes) : esc(S.no)) + "</td></tr>";
      }).join("");
    }
    return '<div class="screen-mock">' +
      '<div class="screen-tabs" role="tablist">' +
        '<button type="button" role="tab" id="tab-canvas" aria-selected="true" aria-controls="pane-canvas">' + esc(S.tabCanvas) + "</button>" +
        '<button type="button" role="tab" id="tab-data" aria-selected="false" aria-controls="pane-data">' + esc(S.tabData) + "</button>" +
      "</div>" +
      '<div class="screen-pane" id="pane-canvas" role="tabpanel" aria-labelledby="tab-canvas">' +
        "<p><b>" + esc(S.canvasTask) + "</b> " + esc(S.canvasNote) + "</p>" + u +
        '<div class="empty-row"><span>' + esc(S.classContent) + "</span><span>" + esc(S.classContentState) + "</span></div>" +
        '<p class="found-msg" id="found-msg" hidden>' + esc(S.foundMsg) + "</p>" +
      "</div>" +
      '<div class="screen-pane" id="pane-data" role="tabpanel" aria-labelledby="tab-data" hidden><div class="data-wrap">' +
        '<table class="data"><caption>' + esc(S.dataTitleA) + "</caption><thead><tr><th>" + esc(S.colLearner) + "</th><th>" + esc(S.colSubmitted) + "</th><th>" + esc(S.colGraded) + "</th></tr></thead><tbody>" + rowsFor(S.submitted, "sub") + "</tbody></table>" +
        '<table class="data"><caption>' + esc(S.dataTitleB) + "</caption><thead><tr><th>" + esc(S.colLearner) + "</th><th>" + esc(S.colScore) + "</th></tr></thead><tbody>" + rowsFor(S.submitted, "score") + "</tbody></table>" +
        "<p>" + esc(S.dataNote) + "</p></div>" +
      "</div></div>";
  }
  function datasheetHtml(card) {
    var D = card.datasheet, rows = "";
    for (var i = 1; i <= D.count; i++) rows += "<tr><td>" + esc(D.colLearner + " " + i) + "</td><td>" + D.score + "</td></tr>";
    return '<div class="screen-mock"><div class="screen-pane"><div class="data-wrap">' +
      '<table class="data"><caption>' + esc(D.title) + "</caption><thead><tr><th>" + esc(D.colLearner) + "</th><th>" + esc(D.colScore) + "</th></tr></thead><tbody>" + rows + "</tbody></table>" +
      "<p>" + esc(D.note) + "</p></div></div></div>";
  }

  function pairHtml(card) {
    var btns = card.tabs.map(function (tb) {
      return '<button type="button" role="tab" id="ptab-' + tb.id + '" aria-selected="false" aria-controls="ppane-' + tb.id + '">' + esc(tb.label) + "</button>";
    }).join("");
    var panes = card.tabs.map(function (tb) {
      return '<div class="screen-pane" id="ppane-' + tb.id + '" role="tabpanel" aria-labelledby="ptab-' + tb.id + '" hidden>' +
        '<p class="eyebrow">' + esc(tb.where) + "</p>" +
        (tb.id === "manual" ? '<div class="manual-visual">' + manualSvg() + "</div>" : '<div class="handout-visual">' + handoutSvg() + "</div>") +
        tb.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>";
    }).join("");
    return '<div class="screen-mock"><div class="screen-tabs" role="tablist">' + btns + "</div>" + panes + "</div>" +
      '<div class="compare" id="compare" hidden>' +
        "<figure>" + manualSvg() + "<figcaption>" + esc(card.compare.a) + "</figcaption></figure>" +
        "<figure>" + handoutSvg() + "<figcaption>" + esc(card.compare.b) + "</figcaption></figure>" +
      "</div>";
  }
  function wirePair(root, startTab, onChange) {
    function show(id, notify) {
      ["manual", "handout"].forEach(function (k) {
        var on = k === id;
        $("#ptab-" + k, root).setAttribute("aria-selected", on ? "true" : "false");
        $("#ppane-" + k, root).hidden = !on;
      });
      run.pairSeen[id] = true;
      if (run.pairSeen.manual && run.pairSeen.handout) $("#compare", root).hidden = false;
      if (notify && onChange) onChange();
    }
    root.__selTab = function (id) { show(id, true); };
    root.__other = function () { return run.pairSeen.manual ? "handout" : "manual"; };
    ["manual", "handout"].forEach(function (k) {
      $("#ptab-" + k, root).addEventListener("click", function () { show(k, true); });
    });
    show(startTab, false);
  }

  function wireScreen(root, onChange) {
    var tabC = $("#tab-canvas", root), tabD = $("#tab-data", root);
    if (!tabC) return;
    function sel(which) {
      var c = which === "canvas";
      tabC.setAttribute("aria-selected", c ? "true" : "false");
      tabD.setAttribute("aria-selected", c ? "false" : "true");
      $("#pane-canvas", root).hidden = !c;
      $("#pane-data", root).hidden = c;
      run.tabsSeen[which] = true;
      if (onChange) onChange();
    }
    root.__selTab = sel;
    root.__other = function () { return run.tabsSeen.data ? "canvas" : "data"; };
    tabC.addEventListener("click", function () { sel("canvas"); });
    tabD.addEventListener("click", function () { sel("data"); });
    run.tabsSeen.canvas = true;
    $$(".unit > button", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var open = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", open ? "false" : "true");
        $("#" + b.getAttribute("aria-controls"), root).hidden = open;
        b.lastChild.textContent = open ? "+" : "\u2212";
        if (!open && $(".found", $("#" + b.getAttribute("aria-controls"), root))) $("#found-msg", root).hidden = false;
      });
    });
  }

  /* ----------------------------------------------------------------- cards */
  function spotComplete(card) {
    var id = card.item;
    if (card.visual === "pair") return !!(run.pairSeen.manual && run.pairSeen.handout);
    if (id === "tools_data" && card.visual === "screen") return !!(run.tabsSeen.canvas && run.tabsSeen.data);
    return true;
  }

  function cardHtml(card, item) {
    var chips = lensChip(item.lens) + item.tags.map(tagChip).join("");
    if (card.composite) chips += '<span class="chip chip-illus">' + esc(C.tags.composite) + "</span>";
    if (card.illustrative) chips += '<span class="chip chip-illus">' + esc(C.tags.illustrative) + "</span>";
    var inner = "";
    if (card.paragraphs && !card.speaks) inner += card.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    if (card.visual === "language") {
      inner += '<div class="lang-visual">' + card.language.map(function (l) { return "<div><span>" + esc(l.k) + "</span><b>" + esc(l.v) + "</b></div>"; }).join("") + "</div>";
    }
    if (card.visual === "chat") {
      inner += '<div class="chat"><p class="bubble you">' + esc(card.chat.you) + '</p><p class="bubble ai">' + esc(card.chat.ai) + "</p></div>";
    }
    if (card.visual === "manual") inner += '<div class="manual-visual">' + manualSvg() + "</div>";
    if (card.visual === "handout") inner += '<div class="handout-visual">' + handoutSvg() + "</div>";
    if (card.visual === "screen") inner += screenHtml(card);
    if (card.visual === "pair") inner += pairHtml(card);
    if (card.visual === "datasheet") inner += datasheetHtml(card);
    if (card.bullets) inner += '<ul class="card-list">' + card.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>";
    if (card.speaks) {
      inner += '<div class="says"><h3>' + esc(card.speakerLabel) + "</h3>" + card.speaks.map(function (s) { return "<p>" + esc(s) + "</p>"; }).join("") + "</div>";
    }
    if (card.observed) inner += '<div class="seen"><h3>' + esc(card.observedLabel) + "</h3><p>" + esc(card.observed) + "</p></div>";
    if (card.said) inner += '<div class="says"><h3>' + esc(card.saidLabel) + "</h3><p>" + esc(card.said) + "</p></div>";
    var head = '<p class="eyebrow">' + esc(card.eyebrow) + '</p><h2 id="modal-title">' + esc(card.title) + '</h2><div class="card-chips">' + chips + '</div><p class="noted" id="noted" role="status" hidden></p>';
    var body = card.visual && card.visual.indexOf("portrait:") === 0
      ? '<div class="card-grid">' + portraitHtml(card.visual) + "<div>" + inner + "</div></div>"
      : inner;
    return head + body +
      '<p class="fine timeup-note" hidden>' + esc(C.play.timeUpNote) + "</p>" +
      '<div class="card-actions"><button class="btn btn-primary" type="button" id="card-done"></button></div>';
  }

  function maybeAward(card, item) {
    var p = run.prog[item.id];
    if (run.phase === "play" && !p.spot && spotComplete(card)) awardSpot(item);
  }

  /* what the banner and the button say depends on where the player is */
  function syncCard(root, card, item) {
    var p = run.prog[item.id];
    var banner = $("#noted", root), btn = $("#card-done", root);
    if (!banner || !btn) return;
    var complete = spotComplete(card);
    if (run.phase === "revisit") {
      banner.hidden = true;
      btn.textContent = C.play.seeInsight;
      return;
    }
    banner.hidden = false;
    banner.className = "noted" + (complete ? " ok" : "");
    if (!complete) {
      banner.textContent = card.incomplete || C.play.morePieces;
      if (card.visual === "pair") btn.textContent = card.nextTab[root.__other()];
      else btn.textContent = card.visual === "screen" ? (card.nextTab || C.play.keepLooking) : C.play.keepLooking;
    } else if (item.kind === "core" && p.get === null) {
      banner.textContent = C.play.notedCore;
      btn.textContent = C.play.infer;
    } else if (item.kind === "core") {
      banner.textContent = C.play.notedAlready;
      btn.textContent = C.play.next;
    } else {
      banner.textContent = p.spotPts ? C.play.notedBonus : C.play.notedAlready;
      btn.textContent = C.play.next;
    }
    if (btn.textContent === C.play.next && isComplete()) btn.textContent = C.play.finish;
  }

  function openCard(h, opener) {
    if (!run || (run.phase !== "play" && run.phase !== "revisit")) return;
    touch();
    clearClues();
    var card = run.centre.cards[h.card];
    var item = itemById(card.item);
    run.viewed[h.id] = true;
    var root = openModal(cardHtml(card, item), opener);
    var changed = function () { maybeAward(card, item); syncCard(root, card, item); refreshHotspots(); };
    wireScreen(root, changed);
    if (card.visual === "pair") wirePair(root, h.tab || "manual", changed);
    maybeAward(card, item);
    refreshHotspots();
    syncCard(root, card, item);
    if (run.pendingReveal) { var tn = $(".timeup-note", root); if (tn) tn.hidden = false; }
    $("#card-done", root).addEventListener("click", function () { afterCard(card, item, root); });
  }

  function awardSpot(item) {
    var p = run.prog[item.id];
    p.spot = true;
    p.spotPts = POINTS.spot;
    run.notes.push(item.id);
    addScore(POINTS.spot);
    renderNotebook(true);
    refreshHotspots();
  }

  function afterCard(card, item, root) {
    var p = run.prog[item.id];
    if (!spotComplete(card)) {
      // on the screen card, the button takes you to the tab you have not seen yet
      if (root.__selTab && root.__other) root.__selTab(root.__other());
      else closeModal();
      return;
    }
    if (run.phase === "revisit") {
      if (!p.spot) {
        p.spot = true; p.later = true;
        run.notes.push(item.id);
        renderNotebook();
        refreshHotspots();
      }
      showInsightInModal(item, root, p.later);
      checkRevisitDone();
      return;
    }
    if (item.kind === "core" && p.get === null) showQuestion(item, root);
    else closeModal();
  }

  /* --------------------------------------------------------------- question */
  function showQuestion(item, root) {
    var q = item.question;
    if (!run.optionOrder[item.id]) run.optionOrder[item.id] = shuffle(q.options.map(function (o, i) { return i; }));
    var order = run.optionOrder[item.id];
    var card = $(".modal-card", root);
    var keep = $(".modal-x", root).outerHTML;
    card.innerHTML = keep +
      '<p class="eyebrow">' + esc(item.title) + "</p>" +
      '<div class="question"><h2 id="modal-title">' + esc(q.prompt) + "</h2><p class=\"fine\">" + esc(C.play.chooseBest) + "</p>" +
      '<ul class="options">' + order.map(function (idx) {
        return '<li><button class="option" type="button" data-opt="' + idx + '">' + esc(q.options[idx].text) + "</button></li>";
      }).join("") + '</ul><div id="verdict" aria-live="polite"></div>' +
      '<p class="fine timeup-note" hidden>' + esc(C.play.timeUpNote) + "</p></div>";
    $(".modal-x", root).addEventListener("click", function () { closeModal(); });
    var title = $("#modal-title", root);
    title.setAttribute("tabindex", "-1"); title.focus({ preventScroll: true });
    if (run.pendingReveal) { var tn = $(".timeup-note", root); if (tn) tn.hidden = false; }
    touch();
    $$(".option", root).forEach(function (b) {
      b.addEventListener("click", function () { answer(item, parseInt(b.getAttribute("data-opt"), 10), root); });
    });
  }

  function answer(item, idx, root) {
    var p = run.prog[item.id], q = item.question;
    if (p.get !== null) return;
    var opt = q.options[idx];
    var correctIdx = 0;
    q.options.forEach(function (o, i) { if (o.correct) correctIdx = i; });
    $$(".option", root).forEach(function (b) {
      var i = parseInt(b.getAttribute("data-opt"), 10);
      b.disabled = true;
      if (i === correctIdx) {
        b.classList.add("right");
        b.insertAdjacentHTML("afterbegin", '<span class="opt-mark">' + esc(C.play.badgeCorrect) + "</span>");
      } else if (i === idx) {
        b.classList.add("wrong");
        b.insertAdjacentHTML("afterbegin", '<span class="opt-mark">' + esc(C.play.badgeYours) + "</span>");
      }
    });
    var head;
    if (opt.correct) {
      p.get = true; p.getPts = POINTS.get;
      addScore(POINTS.get);
      head = C.play.correct;
    } else {
      p.get = false;
      head = C.play.notQuite;
    }
    renderNotebook();
    refreshHotspots();
    var v = $("#verdict", root);
    v.innerHTML = '<div class="verdict' + (opt.correct ? "" : " no") + '">' +
      '<p class="verdict-head">' + esc(head) + "</p>" +
      "<h3>" + esc(item.insight.title) + "</h3>" +
      "<p>" + esc(item.insight.body) + "</p></div>" +
      '<div class="card-actions"><button class="btn btn-primary" type="button" id="q-next">' + esc(C.play.next) + "</button></div>";
    announce(head);
    var next = $("#q-next", root);
    if (isComplete()) next.textContent = C.play.finish;
    next.focus();
    next.addEventListener("click", function () { closeModal(); });
    touch();
  }

  function showInsightInModal(item, root, later) {
    var card = $(".modal-card", root);
    var keep = $(".modal-x", root).outerHTML;
    card.innerHTML = keep +
      '<p class="eyebrow">' + esc(item.title) + '</p><h2 id="modal-title">' + esc(item.insight.title) + "</h2>" +
      '<div class="card-chips">' + lensChip(item.lens) + "</div>" +
      "<p>" + esc(item.insight.body) + "</p>" +
      (later ? '<p class="fine">' + esc(C.play.capturedLater) + "</p>" : "") +
      '<div class="card-actions"><button class="btn btn-primary" type="button" id="ins-ok">' + esc(C.play.closeCard) + "</button></div>";
    $(".modal-x", root).addEventListener("click", function () { closeModal(); });
    var t = $("#modal-title", root); t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true });
    $("#ins-ok", root).addEventListener("click", function () { closeModal(); });
  }

  /* ----------------------------------------------------------------- reveal */
  function itemPoints(id) { var p = run.prog[id]; return p.spotPts + p.getPts; }
  function allCaptured() {
    return run.centre.items.every(function (it) { return run.prog[it.id].spot; });
  }

  function goReveal() {
    if (!run) return;
    clearInterval(timer);
    closeModal(true);
    clearClues();
    var remain = run.endAt - now();
    run.early = remain > 0 && isComplete();
    run.timeLeftText = clockText(remain);
    run.phase = "reveal";
    run.pendingReveal = false;
    renderReveal();
    showScreen("reveal");
    announce(run.early ? C.reveal.titleEarly : C.reveal.title);
  }

  function renderReveal() {
    var R = C.reveal, root = $("#screen-reveal");
    var rows = run.centre.items.map(function (it) {
      var p = run.prog[it.id], status, cls = "", nudge = "";
      if (p.spot && p.later) status = R.seenLater;
      else if (p.spot && it.kind === "bonus") status = R.bonusSpot;
      else if (p.spot && p.get === true) status = R.full;
      else if (p.spot) status = R.spotOnly;
      else { status = R.missed; cls = " miss"; nudge = '<p class="nudge">' + esc(R.clueLead) + " " + esc(it.clue) + "</p>"; }
      return '<li class="rv-row" data-item="' + it.id + '">' +
        "<div>" + lensChip(it.lens) + "</div>" +
        "<div><h3>" + esc(it.title) + '</h3><p class="rv-status' + cls + '">' + esc(status) + "</p>" + nudge + "</div>" +
        '<div class="rv-actions">' +
          '<button class="btn btn-ghost" type="button" data-insight="' + it.id + '">' + esc(R.readInsight) + "</button>" +
        "</div></li>";
    }).join("");
    var done = allCaptured();
    root.innerHTML =
      "<h2>" + esc(run.early ? R.titleEarly : R.title) + "</h2>" +
      (run.early ? '<p class="rv-sub">' + esc(fmt(R.introEarly, { time: run.timeLeftText })) + "</p>" : R.intro ? "<p>" + esc(R.intro) + "</p>" : "") +
      '<ul class="reveal-list">' + rows + "</ul>" +
      '<p class="rv-total">' + esc(R.total) + ": " + run.score + "</p>" +
      (done ? "<p>" + esc(R.allDone) + "</p>" : "") +
      '<div class="end-actions">' +
        (done ? "" : '<button class="btn btn-ghost" type="button" id="rv-back">' + esc(R.goBack) + "</button>") +
        '<button class="btn btn-primary" type="button" id="rv-next">' + esc(R.cont) + "</button>" +
      "</div>";
    $$("[data-insight]", root).forEach(function (b) {
      b.addEventListener("click", function () { openInsight(b.getAttribute("data-insight"), b); });
    });
    var back = $("#rv-back", root);
    if (back) back.addEventListener("click", startRevisit);
    $("#rv-next", root).addEventListener("click", function () { renderConsolidate(); showScreen("consolidate"); });
  }

  /* ---------------------------------------------------------------- revisit */
  function startRevisit() {
    run.phase = "revisit";
    showScreen("play", false);
    var slot = $("#revisit-slot");
    slot.innerHTML = '<div class="revisit-banner"><p>' + esc(C.play.revisitBanner) + '</p><button class="btn btn-primary" type="button" id="revisit-back">' + esc(C.play.revisitFinish) + "</button></div>";
    $("#revisit-back").addEventListener("click", backToResults);
    var clock = $("#clock");
    if (clock) clock.style.visibility = "hidden";
    clearClues();
    run.centre.items.forEach(function (it) {
      if (run.prog[it.id].spot) return;
      hotspotsForItem(it.id).forEach(function (h) { var b = $("#hs-" + h.id); if (b) b.classList.add("clue"); });
    });
    var game = $("#play");
    if (game && game.scrollIntoView) game.scrollIntoView({ block: "start" });
    var h2 = $("#screen-play h2");
    if (h2) { h2.setAttribute("tabindex", "-1"); h2.focus({ preventScroll: true }); }
  }
  function checkRevisitDone() {
    if (allCaptured()) {
      var slot = $("#revisit-slot");
      var p = $(".revisit-banner p", slot);
      if (p) p.textContent = C.play.revisitDone;
    }
  }
  function backToResults() {
    clearClues();
    run.phase = "reveal";
    renderReveal();
    showScreen("reveal");
  }

  /* ----------------------------------------------------------------- drawer */
  function openInsight(itemId, opener) {
    var it = itemById(itemId);
    closeDrawer(true);
    var bg = document.createElement("div");
    bg.className = "drawer-bg";
    var d = document.createElement("aside");
    d.className = "drawer";
    d.setAttribute("role", "dialog");
    d.setAttribute("aria-modal", "true");
    d.setAttribute("aria-labelledby", "drawer-title");
    d.innerHTML = '<button class="modal-x" type="button" aria-label="' + esc(C.panel.close) + '">&times;</button>' +
      '<p class="eyebrow">' + esc(it.title) + '</p><h2 id="drawer-title">' + esc(it.insight.title) + "</h2>" +
      '<div class="card-chips">' + lensChip(it.lens) + it.tags.map(tagChip).join("") + "</div>" +
      "<p>" + esc(it.insight.body) + "</p>" +
      '<p><a data-library href="' + libraryHref(it.lens, it.id) + '" target="_blank" rel="noopener">' + esc(C.panel.learnMore) + "</a> <span class=\"fine\">" + esc(C.panel.newTab) + "</span></p>";
    document.body.appendChild(bg);
    document.body.appendChild(d);
    drawer = { root: d, bg: bg, opener: opener };
    $(".modal-x", d).addEventListener("click", function () { closeDrawer(); });
    bg.addEventListener("click", function () { closeDrawer(); });
    var t = $("#drawer-title", d); t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true });
  }
  function closeDrawer(silent) {
    if (!drawer) return;
    var dr = drawer;
    drawer = null;
    if (dr.root.parentNode) dr.root.parentNode.removeChild(dr.root);
    if (dr.bg.parentNode) dr.bg.parentNode.removeChild(dr.bg);
    if (!silent && dr.opener && document.contains(dr.opener)) dr.opener.focus();
  }

  /* ------------------------------------------------------------ consolidate */
  function renderConsolidate() {
    var K = C.consolidate, root = $("#screen-consolidate");
    root.innerHTML =
      "<h2>" + esc(K.title) + "</h2>" + (K.intro ? "<p>" + esc(K.intro) + "</p>" : "") +
      '<div class="lens-cols">' +
        ["learner", "instructor", "programme"].map(function (l) {
          return '<section class="lens-col ' + l + '"><h3>' + esc(C.lenses[l].label) + "</h3><p>" + esc(run.centre.consolidate[l]) + "</p></section>";
        }).join("") +
      "</div>" +
      '<button class="btn btn-primary" type="button" id="cons-next">' + esc(K.cont) + "</button>";
    $("#cons-next").addEventListener("click", function () { renderReflect(); showScreen("reflect"); });
  }

  /* ---------------------------------------------------------------- reflect */
  function renderReflect() {
    var F = C.reflect, root = $("#screen-reflect");
    root.className = "screen reflect";
    root.innerHTML =
      "<h2>" + esc(F.title) + "</h2>" +
      '<div class="field"><label for="reflection">' + esc(F.prompt) + "</label>" +
      '<textarea id="reflection" maxlength="600" placeholder="' + esc(F.placeholder) + '"></textarea></div>' +
      '<p class="fine">' + esc(F.note) + "</p>" +
      '<button class="btn btn-primary" type="button" id="reflect-next">' + esc(F.cont) + "</button>";
    $("#reflect-next").addEventListener("click", function () {
      run.reflection = ($("#reflection").value || "").trim();
      renderEnd();
      showScreen("end");
    });
  }

  /* -------------------------------------------------------------------- end */
  function identifiedCount() {
    return run.centre.items.filter(function (it) { return itemPoints(it.id) > 0; }).length;
  }
  function renderEnd() {
    var E = C.end, root = $("#screen-end"), c = run.centre;
    var n = identifiedCount();
    var line = n === 1 ? E.identifiedOne : E.identified;
    var other = run.key === "namakkal" ? C.centres.chennai : C.centres.namakkal;
    var otherOpen = !other.status;
    root.innerHTML =
      "<h2>" + esc(fmt(E.title, { centre: c.name })) + "</h2>" +
      '<p class="end-score" id="end-score">' + run.score + "</p>" +
      '<p class="end-label">' + esc(E.scoreLabel) + "</p>" +
      '<p class="end-identified">' + esc(fmt(line, { n: n, centre: c.name })) + "</p>" +
      (run.reflection ? '<div class="your-reflection"><h3>' + esc(C.reflect.yours) + "</h3><p>" + esc(run.reflection) + "</p></div>" : "") +
      "<p>" + esc(E.goDeeper) + "</p>" +
      '<div class="end-actions">' +
        '<a class="btn btn-green" href="#library" id="end-explore">' + esc(E.explore) + "</a>" +
        (otherOpen
          ? '<button class="btn btn-primary" type="button" id="end-other">' + esc(fmt(E.other, { centre: other.name })) + "</button>"
          : '<button class="btn" type="button" disabled>' + esc(fmt(E.otherSoon, { centre: other.name })) + "</button>") +
        '<button class="btn btn-ghost" type="button" id="end-again">' + esc(fmt(E.again, { centre: c.name })) + "</button>" +
      "</div>";
    $("#end-again").addEventListener("click", function () { startRun(run.key); });
    var o = $("#end-other");
    if (o) o.addEventListener("click", function () { startRun(run.key === "namakkal" ? "chennai" : "namakkal"); });
  }

  /* ------------------------------------------------------------------- init */
  function init() {
    renderSetup();
    showScreen("setup", false, true);
    document.addEventListener("pointerdown", touch);
    document.addEventListener("keydown", touch);
    window.__fvTest = {
      state: function () { return run; },
      tick: tick
    };
  }
  init();
})();
