/* =========================================================================
   SCENES  -  vector illustrations drawn in code, plus hotspot positions.
   Everything here is an illustration. People are adults (learners about
   21-25, instructors about 23-27). Swap artwork later by replacing the
   functions below; hotspot positions are percentages of the scene.
   ========================================================================= */
(function () {
  "use strict";

  var SKIN = ["#8A5A3C", "#9C6644", "#B07A55", "#7B4B2F", "#A86F4A", "#6F4329"];
  var HAIR = ["#1B1412", "#241915", "#2A1D17"];
  var SHIRT_W = ["#3E7C74", "#D9A441", "#B5546B", "#5A4E8C", "#2F5F8F", "#8C3B3B", "#6E8B3D", "#4E7FA8"];
  var SHIRT_M = ["#E8EDF1", "#7FA3C7", "#4A5568", "#2F6F4F", "#B9B3A5", "#3F5E8C", "#C9D3DC", "#6B7F94"];

  function r(n) { return Math.round(n * 10) / 10; }
  var uidCounter = 0;
  function uid() { uidCounter += 1; return uidCounter; }

  /* --- a learner seen from behind, seated at a desk ---------------------- */
  function learnerBack(x, y, s, o) {
    var g = "";
    var skin = o.skin, hair = o.hair, shirt = o.shirt;
    // torso
    g += '<path d="M' + r(x - 38 * s) + ',' + r(y + 64 * s) +
      ' C' + r(x - 42 * s) + ',' + r(y + 12 * s) + ' ' + r(x - 28 * s) + ',' + r(y - 8 * s) + ' ' + x + ',' + r(y - 9 * s) +
      ' C' + r(x + 28 * s) + ',' + r(y - 8 * s) + ' ' + r(x + 42 * s) + ',' + r(y + 12 * s) + ' ' + r(x + 38 * s) + ',' + r(y + 64 * s) +
      ' Z" fill="' + shirt + '"/>';
    g += '<path d="M' + x + ',' + r(y - 6 * s) + ' L' + x + ',' + r(y + 60 * s) + '" stroke="#000" stroke-opacity=".10" stroke-width="' + r(1.6 * s) + '"/>';
    // neck
    g += '<rect x="' + r(x - 6.5 * s) + '" y="' + r(y - 24 * s) + '" width="' + r(13 * s) + '" height="' + r(20 * s) + '" rx="' + r(4 * s) + '" fill="' + skin + '"/>';
    if (o.female) {
      // long hair falling down the back, with a plait
      g += '<path d="M' + r(x - 19 * s) + ',' + r(y - 40 * s) +
        ' C' + r(x - 24 * s) + ',' + r(y - 18 * s) + ' ' + r(x - 18 * s) + ',' + r(y + 6 * s) + ' ' + r(x - 8 * s) + ',' + r(y + 18 * s) +
        ' L' + r(x + 8 * s) + ',' + r(y + 18 * s) +
        ' C' + r(x + 18 * s) + ',' + r(y + 6 * s) + ' ' + r(x + 24 * s) + ',' + r(y - 18 * s) + ' ' + r(x + 19 * s) + ',' + r(y - 40 * s) +
        ' C' + r(x + 14 * s) + ',' + r(y - 58 * s) + ' ' + r(x - 14 * s) + ',' + r(y - 58 * s) + ' ' + r(x - 19 * s) + ',' + r(y - 40 * s) + ' Z" fill="' + hair + '"/>';
      if (o.plait) {
        g += '<path d="M' + x + ',' + r(y + 10 * s) + ' C' + r(x + 3 * s) + ',' + r(y + 30 * s) + ' ' + r(x - 3 * s) + ',' + r(y + 44 * s) + ' ' + x + ',' + r(y + 58 * s) +
          '" stroke="' + hair + '" stroke-width="' + r(9 * s) + '" stroke-linecap="round" fill="none"/>';
        g += '<circle cx="' + x + '" cy="' + r(y + 58 * s) + '" r="' + r(3.4 * s) + '" fill="#D9A441"/>';
      }
    } else {
      // short hair
      g += '<ellipse cx="' + r(x - 18.5 * s) + '" cy="' + r(y - 38 * s) + '" rx="' + r(3.2 * s) + '" ry="' + r(5 * s) + '" fill="' + skin + '"/>';
      g += '<ellipse cx="' + r(x + 18.5 * s) + '" cy="' + r(y - 38 * s) + '" rx="' + r(3.2 * s) + '" ry="' + r(5 * s) + '" fill="' + skin + '"/>';
      g += '<ellipse cx="' + x + '" cy="' + r(y - 40 * s) + '" rx="' + r(18 * s) + '" ry="' + r(21 * s) + '" fill="' + hair + '"/>';
      g += '<path d="M' + r(x - 14 * s) + ',' + r(y - 24 * s) + ' Q' + x + ',' + r(y - 18 * s) + ' ' + r(x + 14 * s) + ',' + r(y - 24 * s) +
        '" stroke="' + skin + '" stroke-width="' + r(5 * s) + '" stroke-linecap="round" fill="none" opacity=".0"/>';
    }
    return g;
  }

  /* --- an instructor, front view, standing --------------------------------
     o: skin, hair, shirt, trousers, female, pointLeft                       */
  function instructorFront(x, y, s, o) {
    var g = "";
    var skin = o.skin, hair = o.hair || "#1B1412", shirt = o.shirt, trousers = o.trousers || "#2B3E49";
    // shadow
    g += '<ellipse cx="' + x + '" cy="' + r(y + 2 * s) + '" rx="' + r(46 * s) + '" ry="' + r(8 * s) + '" fill="#000" opacity=".12"/>';
    // legs
    g += '<rect x="' + r(x - 24 * s) + '" y="' + r(y - 78 * s) + '" width="' + r(21 * s) + '" height="' + r(74 * s) + '" rx="' + r(5 * s) + '" fill="' + trousers + '"/>';
    g += '<rect x="' + r(x + 3 * s) + '" y="' + r(y - 78 * s) + '" width="' + r(21 * s) + '" height="' + r(74 * s) + '" rx="' + r(5 * s) + '" fill="' + trousers + '"/>';
    // shoes
    g += '<ellipse cx="' + r(x - 15 * s) + '" cy="' + r(y - 2 * s) + '" rx="' + r(14 * s) + '" ry="' + r(6 * s) + '" fill="#1B1412"/>';
    g += '<ellipse cx="' + r(x + 15 * s) + '" cy="' + r(y - 2 * s) + '" rx="' + r(14 * s) + '" ry="' + r(6 * s) + '" fill="#1B1412"/>';
    // far arm (holding down)
    g += '<path d="M' + r(x + 30 * s) + ',' + r(y - 140 * s) + ' C' + r(x + 44 * s) + ',' + r(y - 120 * s) + ' ' + r(x + 44 * s) + ',' + r(y - 98 * s) + ' ' + r(x + 40 * s) + ',' + r(y - 82 * s) +
      '" stroke="' + shirt + '" stroke-width="' + r(15 * s) + '" stroke-linecap="round" fill="none"/>';
    g += '<circle cx="' + r(x + 40 * s) + '" cy="' + r(y - 76 * s) + '" r="' + r(7 * s) + '" fill="' + skin + '"/>';
    // torso
    if (o.female) {
      g += '<path d="M' + r(x - 32 * s) + ',' + r(y - 80 * s) + ' C' + r(x - 36 * s) + ',' + r(y - 120 * s) + ' ' + r(x - 30 * s) + ',' + r(y - 142 * s) + ' ' + x + ',' + r(y - 146 * s) +
        ' C' + r(x + 30 * s) + ',' + r(y - 142 * s) + ' ' + r(x + 36 * s) + ',' + r(y - 120 * s) + ' ' + r(x + 32 * s) + ',' + r(y - 80 * s) + ' Z" fill="' + shirt + '"/>';
    } else {
      g += '<path d="M' + r(x - 33 * s) + ',' + r(y - 76 * s) + ' C' + r(x - 37 * s) + ',' + r(y - 118 * s) + ' ' + r(x - 31 * s) + ',' + r(y - 142 * s) + ' ' + x + ',' + r(y - 146 * s) +
        ' C' + r(x + 31 * s) + ',' + r(y - 142 * s) + ' ' + r(x + 37 * s) + ',' + r(y - 118 * s) + ' ' + r(x + 33 * s) + ',' + r(y - 76 * s) + ' Z" fill="' + shirt + '"/>';
    }
    g += '<path d="M' + x + ',' + r(y - 142 * s) + ' L' + x + ',' + r(y - 80 * s) + '" stroke="#000" stroke-opacity=".12" stroke-width="' + r(1.5 * s) + '"/>';
    // collar
    g += '<path d="M' + r(x - 11 * s) + ',' + r(y - 147 * s) + ' L' + x + ',' + r(y - 132 * s) + ' L' + r(x + 11 * s) + ',' + r(y - 147 * s) + '" fill="#fff" fill-opacity=".55" stroke="#000" stroke-opacity=".12" stroke-width="' + r(1 * s) + '"/>';
    // near arm raised to the board
    var dir = o.pointLeft ? 1 : -1;
    g += '<path d="M' + r(x - dir * 30 * s) + ',' + r(y - 138 * s) + ' C' + r(x - dir * 52 * s) + ',' + r(y - 142 * s) + ' ' + r(x - dir * 66 * s) + ',' + r(y - 158 * s) + ' ' + r(x - dir * 76 * s) + ',' + r(y - 176 * s) +
      '" stroke="' + shirt + '" stroke-width="' + r(15 * s) + '" stroke-linecap="round" fill="none"/>';
    g += '<circle cx="' + r(x - dir * 78 * s) + '" cy="' + r(y - 180 * s) + '" r="' + r(7 * s) + '" fill="' + skin + '"/>';
    g += '<rect x="' + r(x - dir * 90 * s - 3 * s) + '" y="' + r(y - 196 * s) + '" width="' + r(6 * s) + '" height="' + r(20 * s) + '" rx="' + r(3 * s) + '" fill="#2B8BC5" transform="rotate(' + (dir * 28) + ' ' + r(x - dir * 80 * s) + ' ' + r(y - 182 * s) + ')"/>';
    // neck + head
    g += '<rect x="' + r(x - 7 * s) + '" y="' + r(y - 162 * s) + '" width="' + r(14 * s) + '" height="' + r(18 * s) + '" fill="' + skin + '"/>';
    g += '<ellipse cx="' + r(x - 20 * s) + '" cy="' + r(y - 176 * s) + '" rx="' + r(3.6 * s) + '" ry="' + r(6 * s) + '" fill="' + skin + '"/>';
    g += '<ellipse cx="' + r(x + 20 * s) + '" cy="' + r(y - 176 * s) + '" rx="' + r(3.6 * s) + '" ry="' + r(6 * s) + '" fill="' + skin + '"/>';
    if (o.female) {
      [-1, 1].forEach(function (d) {
        g += '<path d="M' + r(x + d * 20 * s) + ',' + r(y - 180 * s) + ' C' + r(x + d * 31 * s) + ',' + r(y - 156 * s) + ' ' + r(x + d * 33 * s) + ',' + r(y - 136 * s) + ' ' + r(x + d * 25 * s) + ',' + r(y - 122 * s) +
          ' L' + r(x + d * 14 * s) + ',' + r(y - 130 * s) + ' C' + r(x + d * 20 * s) + ',' + r(y - 146 * s) + ' ' + r(x + d * 18 * s) + ',' + r(y - 164 * s) + ' ' + r(x + d * 14 * s) + ',' + r(y - 178 * s) + ' Z" fill="' + hair + '"/>';
      });
    }
    g += '<ellipse cx="' + x + '" cy="' + r(y - 176 * s) + '" rx="' + r(20 * s) + '" ry="' + r(23 * s) + '" fill="' + skin + '"/>';
    // hair cap
    g += '<path d="M' + r(x - 21 * s) + ',' + r(y - 180 * s) + ' C' + r(x - 22 * s) + ',' + r(y - 206 * s) + ' ' + r(x + 22 * s) + ',' + r(y - 206 * s) + ' ' + r(x + 21 * s) + ',' + r(y - 180 * s) +
      ' C' + r(x + 12 * s) + ',' + r(y - 192 * s) + ' ' + r(x - 12 * s) + ',' + r(y - 192 * s) + ' ' + r(x - 21 * s) + ',' + r(y - 180 * s) + ' Z" fill="' + hair + '"/>';
    // face
    g += '<circle cx="' + r(x - 7.5 * s) + '" cy="' + r(y - 176 * s) + '" r="' + r(1.9 * s) + '" fill="#1B1412"/>';
    g += '<circle cx="' + r(x + 7.5 * s) + '" cy="' + r(y - 176 * s) + '" r="' + r(1.9 * s) + '" fill="#1B1412"/>';
    g += '<path d="M' + r(x - 11 * s) + ',' + r(y - 182 * s) + ' L' + r(x - 4 * s) + ',' + r(y - 183 * s) + ' M' + r(x + 4 * s) + ',' + r(y - 183 * s) + ' L' + r(x + 11 * s) + ',' + r(y - 182 * s) + '" stroke="' + hair + '" stroke-width="' + r(1.8 * s) + '" stroke-linecap="round"/>';
    g += '<path d="M' + x + ',' + r(y - 175 * s) + ' L' + r(x - 1.6 * s) + ',' + r(y - 168 * s) + ' L' + r(x + 1.4 * s) + ',' + r(y - 168 * s) + '" stroke="#000" stroke-opacity=".25" stroke-width="' + r(1.2 * s) + '" fill="none"/>';
    if (o.moustache) {
      g += '<path d="M' + r(x - 7 * s) + ',' + r(y - 164 * s) + ' Q' + x + ',' + r(y - 168 * s) + ' ' + r(x + 7 * s) + ',' + r(y - 164 * s) + ' Q' + x + ',' + r(y - 162 * s) + ' ' + r(x - 7 * s) + ',' + r(y - 164 * s) + ' Z" fill="' + hair + '"/>';
    }
    g += '<path d="M' + r(x - 5 * s) + ',' + r(y - 160 * s) + ' Q' + x + ',' + r(y - 157 * s) + ' ' + r(x + 5 * s) + ',' + r(y - 160 * s) + '" stroke="#5B2E22" stroke-width="' + r(1.6 * s) + '" stroke-linecap="round" fill="none"/>';
    return g;
  }

  /* --- portrait bust for cards ------------------------------------------- */
  function bust(o) {
    var skin = o.skin, hair = o.hair || "#1B1412", shirt = o.shirt, bg = o.bg || "#D0DFED";
    var g = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="' + (o.label || "Portrait") + '">';
    g += '<rect width="120" height="120" rx="14" fill="' + bg + '"/>';
    if (o.female) {
      // long hair sits behind the shoulders, so the shirt covers its lower end
      g += '<path d="M28,56 C24,92 36,98 44,98 L76,98 C84,98 96,92 92,56 C88,20 32,20 28,56 Z" fill="' + hair + '"/>';
    }
    g += '<path d="M14,120 C14,92 36,84 60,84 C84,84 106,92 106,120 Z" fill="' + shirt + '"/>';
    g += '<path d="M48,84 L60,100 L72,84" fill="#fff" fill-opacity=".55"/>';
    g += '<rect x="52" y="68" width="16" height="20" rx="5" fill="' + skin + '"/>';
    g += '<ellipse cx="60" cy="52" rx="23" ry="26" fill="' + skin + '"/>';
    g += '<ellipse cx="37" cy="54" rx="4" ry="7" fill="' + skin + '"/><ellipse cx="83" cy="54" rx="4" ry="7" fill="' + skin + '"/>';
    g += '<path d="M36,50 C32,8 88,8 84,50 C78,36 42,36 36,50 Z" fill="' + hair + '"/>';
    g += '<circle cx="51" cy="54" r="2.2" fill="#1B1412"/><circle cx="69" cy="54" r="2.2" fill="#1B1412"/>';
    g += '<path d="M45,47 L56,46 M64,46 L75,47" stroke="' + hair + '" stroke-width="2.2" stroke-linecap="round"/>';
    g += '<path d="M60,56 L58,64 L62,64" stroke="#000" stroke-opacity=".25" stroke-width="1.4" fill="none"/>';
    if (o.moustache) {
      g += '<path d="M52,69 Q60,64 68,69 Q60,71 52,69 Z" fill="' + hair + '"/>';
    }
    g += '<path d="M54,74 Q60,78 66,74" stroke="#5B2E22" stroke-width="2" stroke-linecap="round" fill="none"/>';
    g += '</svg>';
    return g;
  }

  /* ------------------------------------------------------------------------
     NAMAKKAL CLASSROOM  (viewBox 1200 x 700, viewer standing at the back)
     ------------------------------------------------------------------------ */
  var ROWS = [
    { s: 0.62, y: 418, left: 4, right: 3 },
    { s: 0.78, y: 484, left: 3, right: 3 },
    { s: 0.98, y: 574, left: 3, right: 3 },
    { s: 1.22, y: 690, left: 3, right: 3 }
  ];
  // empty seats: [row, side, index from aisle]  (3 on the left, 1 on the right = 4 of 25)
  var EMPTY = [[0, "L", 2], [2, "L", 1], [3, "L", 2], [1, "R", 2]];
  function isEmpty(row, side, i) {
    for (var k = 0; k < EMPTY.length; k++) {
      if (EMPTY[k][0] === row && EMPTY[k][1] === side && EMPTY[k][2] === i) return true;
    }
    return false;
  }
  function seatX(row, side, i) {
    var s = ROWS[row].s, gap = 70 * s, w = 110 * s;
    return side === "L" ? 600 - gap / 2 - w * (i + 0.5) : 600 + gap / 2 + w * (i + 0.5);
  }

  function namakkalClassroom() {
    var u = uid();
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A Namakkal classroom seen from the back, with benches facing a whiteboard">';
    svg += '<defs>' +
      '<linearGradient id="nkFloor' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D5CEC0"/><stop offset="1" stop-color="#E2DCCF"/></linearGradient>' +
      '<linearGradient id="nkCeil' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6F8FA"/><stop offset="1" stop-color="#E9EDF0"/></linearGradient>' +
      '</defs>';
    // ceiling, walls, floor
    svg += '<polygon points="0,0 1200,0 1050,60 150,60" fill="url(#nkCeil' + u + ')"/>';
    svg += '<polygon points="0,0 150,60 150,330 0,430" fill="#D5DCE2"/>';
    svg += '<polygon points="1200,0 1050,60 1050,330 1200,430" fill="#DBE2E7"/>';
    svg += '<rect x="150" y="60" width="900" height="270" fill="#E6EBEF"/>';
    svg += '<rect x="150" y="262" width="900" height="68" fill="#BDD0DD"/>';
    svg += '<polygon points="0,262 150,262 150,330 0,430" fill="#AFC4D3" opacity=".7"/>';
    svg += '<polygon points="1200,262 1050,262 1050,330 1200,430" fill="#B4C9D8" opacity=".7"/>';
    svg += '<polygon points="0,430 150,330 1050,330 1200,430 1200,700 0,700" fill="url(#nkFloor' + u + ')"/>';
    // floor tile lines converging to the front wall
    var i;
    for (i = -6; i <= 6; i++) {
      svg += '<line x1="' + (600 + i * 38) + '" y1="330" x2="' + (600 + i * 150) + '" y2="700" stroke="#BDB5A6" stroke-opacity=".5" stroke-width="1.2"/>';
    }
    var ys = [352, 380, 414, 456, 508, 572, 650];
    for (i = 0; i < ys.length; i++) {
      svg += '<line x1="0" y1="' + ys[i] + '" x2="1200" y2="' + ys[i] + '" stroke="#BDB5A6" stroke-opacity=".4" stroke-width="1.2"/>';
    }
    // tube lights and fans
    svg += '<rect x="300" y="64" width="150" height="9" rx="4" fill="#fff" opacity=".9"/>';
    svg += '<rect x="750" y="64" width="150" height="9" rx="4" fill="#fff" opacity=".9"/>';
    [[330, 40], [600, 30], [870, 40]].forEach(function (f) {
      var fx = f[0], fy = f[1];
      svg += '<line x1="' + fx + '" y1="0" x2="' + fx + '" y2="' + (fy - 6) + '" stroke="#5C6770" stroke-width="3"/>';
      svg += '<ellipse cx="' + fx + '" cy="' + fy + '" rx="9" ry="5" fill="#4A545C"/>';
      svg += '<ellipse cx="' + (fx - 52) + '" cy="' + (fy + 3) + '" rx="46" ry="6" fill="#6B7680"/>';
      svg += '<ellipse cx="' + (fx + 52) + '" cy="' + (fy + 3) + '" rx="46" ry="6" fill="#6B7680"/>';
      svg += '<ellipse cx="' + fx + '" cy="' + (fy + 14) + '" rx="20" ry="4" fill="#6B7680" opacity=".7"/>';
    });
    // whiteboard
    svg += '<rect x="262" y="96" width="560" height="154" rx="4" fill="#9AA5AE"/>';
    svg += '<rect x="270" y="104" width="544" height="138" rx="2" fill="#FFFFFF"/>';
    svg += '<rect x="262" y="246" width="560" height="9" fill="#7D8A94"/>';
    var lines = [[292, 128, 220], [292, 148, 300], [292, 168, 180], [292, 188, 260], [560, 128, 190], [560, 156, 120], [560, 184, 200], [560, 210, 90]];
    lines.forEach(function (l) {
      svg += '<rect x="' + l[0] + '" y="' + l[1] + '" width="' + l[2] + '" height="5" rx="2.5" fill="#2B3E49" opacity=".55"/>';
    });
    svg += '<rect x="292" y="212" width="80" height="14" rx="3" fill="none" stroke="#2B8BC5" stroke-width="2"/>';
    svg += '<path d="M390,219 L440,219" stroke="#2B8BC5" stroke-width="2" stroke-linecap="round"/>';
    svg += '<rect x="720" y="116" width="62" height="40" rx="3" fill="none" stroke="#1D8F35" stroke-width="2"/>';
    // door on the left wall
    svg += '<polygon points="20,150 112,186 112,330 20,402" fill="#7A5A3E"/>';
    svg += '<polygon points="30,162 100,190 100,324 30,384" fill="#F4E9D2" opacity=".95"/>';
    svg += '<polygon points="30,162 100,190 100,324 30,384" fill="#fff" opacity=".35"/>';
    svg += '<circle cx="92" cy="262" r="3.2" fill="#C9A75B"/>';
    // wall poster
    svg += '<rect x="940" y="110" width="80" height="100" rx="3" fill="#fff" stroke="#9AA5AE" stroke-width="2"/>';
    svg += '<rect x="952" y="124" width="56" height="8" rx="3" fill="#2B8BC5"/>';
    svg += '<rect x="952" y="142" width="56" height="5" rx="2" fill="#808B92"/><rect x="952" y="154" width="44" height="5" rx="2" fill="#808B92"/><rect x="952" y="166" width="50" height="5" rx="2" fill="#808B92"/>';

    // teacher's table (left front), manual stack and laptop
    svg += '<rect x="170" y="296" width="180" height="12" rx="3" fill="#B98A5A"/>';
    svg += '<rect x="176" y="308" width="8" height="54" fill="#8E6540"/><rect x="336" y="308" width="8" height="54" fill="#8E6540"/>';
    svg += '<rect x="176" y="320" width="168" height="6" fill="#8E6540" opacity=".5"/>';
    // manual: five thick volumes
    var books = [["#2B3E49", 0], ["#0074B9", 1], ["#1D8F35", 2], ["#00619A", 3], ["#808B92", 4]];
    books.forEach(function (b) {
      var by = 296 - (b[1] + 1) * 11;
      var off = b[1] === 2 ? 7 : 0;
      svg += '<rect x="' + (186 + off) + '" y="' + by + '" width="72" height="10" rx="2" fill="' + b[0] + '"/>';
      svg += '<rect x="' + (192 + off) + '" y="' + (by + 3) + '" width="58" height="2.4" fill="#fff" opacity=".6"/>';
    });
    // laptop
    svg += '<path d="M276,296 L338,296 L330,270 L284,270 Z" fill="#3A444C"/>';
    svg += '<path d="M287,274 L327,274 L331,290 L283,290 Z" fill="#7FB4D6"/>';
    svg += '<rect x="290" y="278" width="26" height="2.4" fill="#fff" opacity=".8"/><rect x="290" y="283" width="18" height="2.4" fill="#fff" opacity=".7"/>';

    // instructor
    svg += instructorFront(880, 352, 1.0, { skin: SKIN[2], hair: HAIR[0], shirt: "#7FA3C7", trousers: "#2B3E49", moustache: true, pointLeft: true });
    // speech bubble
    svg += '<path d="M940,120 h96 a14,14 0 0 1 14,14 v34 a14,14 0 0 1 -14,14 h-62 l-18,16 l4,-16 h-20 a14,14 0 0 1 -14,-14 v-34 a14,14 0 0 1 14,-14 z" fill="#fff" stroke="#2B8BC5" stroke-width="2.5"/>';
    svg += '<circle cx="968" cy="151" r="5" fill="#2B8BC5"/><circle cx="990" cy="151" r="5" fill="#2B8BC5"/><circle cx="1012" cy="151" r="5" fill="#2B8BC5"/>';

    // learner rows, far to near
    var seed = 0;
    for (var row = 0; row < ROWS.length; row++) {
      var R = ROWS[row], s = R.s, y = R.y;
      var sides = [["L", R.left], ["R", R.right]];
      // desk tops
      sides.forEach(function (sd) {
        var side = sd[0], n = sd[1];
        if (!n) return;
        var w = 110 * s, gap = 70 * s;
        var x0 = side === "L" ? 600 - gap / 2 - w * n : 600 + gap / 2;
        var width = w * n;
        svg += '<ellipse cx="' + r(x0 + width / 2) + '" cy="' + r(y + 70 * s) + '" rx="' + r(width / 2 + 8 * s) + '" ry="' + r(9 * s) + '" fill="#000" opacity=".08"/>';
        svg += '<rect x="' + r(x0 + 2 * s) + '" y="' + r(y - 74 * s) + '" width="' + r(width - 4 * s) + '" height="' + r(28 * s) + '" rx="' + r(3 * s) + '" fill="#C79B6A"/>';
        svg += '<rect x="' + r(x0 + 2 * s) + '" y="' + r(y - 46 * s) + '" width="' + r(width - 4 * s) + '" height="' + r(7 * s) + '" fill="#8E6540"/>';
      });
      // learners and seats
      sides.forEach(function (sd) {
        var side = sd[0], n = sd[1];
        for (var i = 0; i < n; i++) {
          var x = seatX(row, side, i);
          if (isEmpty(row, side, i)) {
            svg += '<rect x="' + r(x - 40 * s) + '" y="' + r(y + 8 * s) + '" width="' + r(80 * s) + '" height="' + r(12 * s) + '" rx="' + r(3 * s) + '" fill="#A5764A"/>';
            svg += '<rect x="' + r(x - 40 * s) + '" y="' + r(y + 20 * s) + '" width="' + r(80 * s) + '" height="' + r(4 * s) + '" fill="#7A5232" opacity=".6"/>';
            continue;
          }
          seed++;
          var female = side === "L";
          var skin = SKIN[(seed * 3 + row) % SKIN.length];
          var hair = HAIR[seed % HAIR.length];
          var shirt = female ? SHIRT_W[(seed * 5 + row) % SHIRT_W.length] : SHIRT_M[(seed * 3 + row) % SHIRT_M.length];
          // laptop open on the desk in front of most learners
          if (seed % 4 !== 0) {
            var lx = x, ly = y - 70 * s;
            svg += '<path d="M' + r(lx - 26 * s) + ',' + r(ly + 16 * s) + ' L' + r(lx + 26 * s) + ',' + r(ly + 16 * s) + ' L' + r(lx + 22 * s) + ',' + r(ly - 14 * s) + ' L' + r(lx - 22 * s) + ',' + r(ly - 14 * s) + ' Z" fill="#59636B"/>';
            svg += '<circle cx="' + lx + '" cy="' + r(ly + 1 * s) + '" r="' + r(2.4 * s) + '" fill="#fff" opacity=".35"/>';
          }
          svg += learnerBack(x, y, s, { skin: skin, hair: hair, shirt: shirt, female: female, plait: (seed % 2 === 0) });
        }
      });
      // a blank handout on the nearest left desk
      if (row === 3) {
        var hx = seatX(3, "L", 1), hy = y - 64 * s;
        svg += '<path d="M' + r(hx - 34 * s) + ',' + r(hy + 12 * s) + ' L' + r(hx + 34 * s) + ',' + r(hy + 12 * s) + ' L' + r(hx + 30 * s) + ',' + r(hy - 14 * s) + ' L' + r(hx - 30 * s) + ',' + r(hy - 14 * s) + ' Z" fill="#fff" stroke="#9AA5AE" stroke-width="1.6"/>';
        svg += '<line x1="' + hx + '" y1="' + r(hy - 14 * s) + '" x2="' + hx + '" y2="' + r(hy + 12 * s) + '" stroke="#9AA5AE" stroke-width="1.2"/>';
      }
    }
    svg += '</svg>';
    return svg;
  }

  /* ------------------------------------------------------------------------
     NAMAKKAL ARRIVAL  (viewBox 1200 x 700)
     ------------------------------------------------------------------------ */
  function palm(x, y, h, lean) {
    var g = '<path d="M' + x + ',' + y + ' Q' + (x + lean) + ',' + (y - h * 0.55) + ' ' + (x + lean * 1.6) + ',' + (y - h) + '" stroke="#6B5B45" stroke-width="9" fill="none" stroke-linecap="round"/>';
    var tx = x + lean * 1.6, ty = y - h;
    var fronds = [[-70, 6], [-50, -22], [-18, -34], [16, -34], [50, -22], [70, 6], [-60, 26], [60, 26]];
    fronds.forEach(function (f) {
      g += '<path d="M' + tx + ',' + ty + ' Q' + (tx + f[0] * 0.6) + ',' + (ty + f[1] - 20) + ' ' + (tx + f[0]) + ',' + (ty + f[1] + 14) + '" stroke="#3F7A3B" stroke-width="7" fill="none" stroke-linecap="round"/>';
    });
    return g;
  }

  function namakkalArrival() {
    var u = uid();
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A muddy road leading to a single, unfinished-looking building">';
    svg += '<defs>' +
      '<linearGradient id="arSky' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ECBE6"/><stop offset="1" stop-color="#F3E7CF"/></linearGradient>' +
      '<linearGradient id="arField' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9DBB72"/><stop offset="1" stop-color="#6E9A52"/></linearGradient>' +
      '<linearGradient id="arRoad' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9A7A55"/><stop offset="1" stop-color="#7A5C3E"/></linearGradient>' +
      '</defs>';
    svg += '<rect width="1200" height="700" fill="url(#arSky' + u + ')"/>';
    svg += '<ellipse cx="220" cy="120" rx="120" ry="26" fill="#fff" opacity=".7"/><ellipse cx="300" cy="104" rx="80" ry="20" fill="#fff" opacity=".7"/>';
    svg += '<ellipse cx="900" cy="170" rx="140" ry="24" fill="#fff" opacity=".6"/>';
    svg += '<path d="M0,330 Q150,270 300,310 T560,300 T820,312 T1200,290 L1200,360 L0,360 Z" fill="#A8C5B0" opacity=".75"/>';
    svg += '<path d="M0,350 Q200,320 420,342 T800,336 T1200,330 L1200,380 L0,380 Z" fill="#8FB59A"/>';
    svg += '<rect x="0" y="352" width="1200" height="348" fill="url(#arField' + u + ')"/>';
    // field stripes
    for (var i = 0; i < 9; i++) {
      svg += '<path d="M0,' + (372 + i * 20 + i * i * 1.6) + ' L1200,' + (366 + i * 18 + i * i * 1.4) + '" stroke="#5F8A47" stroke-opacity=".22" stroke-width="' + (2 + i * 0.6) + '"/>';
    }
    // road
    svg += '<polygon points="578,364 622,364 1010,700 190,700" fill="url(#arRoad' + u + ')"/>';
    svg += '<polygon points="578,364 586,364 340,700 190,700" fill="#B5936A" opacity=".55"/>';
    svg += '<polygon points="614,364 622,364 1010,700 860,700" fill="#B5936A" opacity=".45"/>';
    // ruts and puddles
    svg += '<path d="M596,368 L470,700" stroke="#5E4429" stroke-opacity=".5" stroke-width="10" stroke-linecap="round"/>';
    svg += '<path d="M606,368 L760,700" stroke="#5E4429" stroke-opacity=".5" stroke-width="10" stroke-linecap="round"/>';
    [[560, 560, 70, 14], [700, 620, 90, 18], [640, 470, 34, 6], [520, 650, 60, 12]].forEach(function (p) {
      svg += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + p[2] + '" ry="' + p[3] + '" fill="#A9C4CF" opacity=".75"/>';
      svg += '<ellipse cx="' + (p[0] - p[2] * 0.2) + '" cy="' + (p[1] - p[3] * 0.2) + '" rx="' + (p[2] * 0.55) + '" ry="' + (p[3] * 0.4) + '" fill="#fff" opacity=".35"/>';
    });
    // palms
    svg += palm(330, 372, 110, -10);
    svg += palm(880, 370, 128, 14);
    svg += palm(1010, 372, 96, 8);
    // building: single, unfinished
    svg += '<rect x="440" y="258" width="320" height="108" fill="#B9B5AC"/>';
    svg += '<rect x="440" y="258" width="320" height="10" fill="#9C998F"/>';
    // exposed brick patches
    var bx, by;
    for (by = 0; by < 5; by++) {
      for (bx = 0; bx < 7; bx++) {
        var ox = (by % 2) * 9;
        svg += '<rect x="' + (640 + bx * 18 + ox) + '" y="' + (280 + by * 11) + '" width="16" height="9" fill="#B5654A" stroke="#8E4A35" stroke-width=".8"/>';
      }
    }
    svg += '<rect x="470" y="300" width="60" height="64" fill="#2B3E49" opacity=".85"/>';
    svg += '<rect x="548" y="300" width="60" height="64" fill="#2B3E49" opacity=".85"/>';
    // half-built upper storey: columns with rebar
    [[452, 0], [540, 0], [640, 0], [740, 0]].forEach(function (c) {
      svg += '<rect x="' + c[0] + '" y="210" width="16" height="50" fill="#A9A59B"/>';
      [3, 8, 13].forEach(function (d) {
        svg += '<line x1="' + (c[0] + d) + '" y1="210" x2="' + (c[0] + d) + '" y2="176" stroke="#5A4F48" stroke-width="2"/>';
      });
      svg += '<line x1="' + (c[0] + 1) + '" y1="190" x2="' + (c[0] + 15) + '" y2="190" stroke="#5A4F48" stroke-width="1.6"/>';
    });
    svg += '<rect x="452" y="206" width="304" height="8" fill="#A09C92"/>';
    // doorway and step
    svg += '<rect x="596" y="304" width="62" height="62" fill="#1F2A31"/>';
    svg += '<rect x="580" y="362" width="94" height="10" fill="#8F8B82"/>';
    svg += '<rect x="568" y="372" width="118" height="8" fill="#A5A198"/>';
    // footwear left on the step
    [[588, "#2B3E49"], [618, "#7A5C3E"], [648, "#B5546B"], [676, "#3E7C74"], [572, "#6B7F94"], [700, "#D9A441"]].forEach(function (p, idx) {
      var yy = idx < 4 ? 374 : 386;
      svg += '<ellipse cx="' + p[0] + '" cy="' + yy + '" rx="8" ry="4" fill="' + p[1] + '"/><ellipse cx="' + (p[0] + 12) + '" cy="' + (yy + 1) + '" rx="8" ry="4" fill="' + p[1] + '"/>';
    });
    svg += '</svg>';
    return svg;
  }

  /* ------------------------------------------------------------------------
     HOTSPOTS (percent of the 1200 x 700 scene)
     ------------------------------------------------------------------------ */
  function pct(x, y) { return { x: r(x / 12), y: r(y / 7) }; }
  function hs(id, card, label, x, y, tab) {
    var p = pct(x, y);
    var o = { id: id, card: card, label: label, x: p.x, y: p.y };
    if (tab) o.tab = tab;
    return o;
  }

  function seatSpot(row, side, i) {
    return { x: seatX(row, side, i), y: ROWS[row].y + 4 };
  }

  var emptyHotspots = EMPTY.map(function (e, idx) {
    var sp = seatSpot(e[0], e[1], e[2]);
    return hs("seat" + idx, "seats", "Empty seat", sp.x, sp.y);
  });

  var NAMAKKAL = {
    arrival: namakkalArrival,
    room: namakkalClassroom,
    hotspots: [
      hs("bubble", "bubble", "Instructor explaining", 996, 150),
      hs("arun", "arun", "The instructor", 880, 250),
      hs("door", "door", "Door to the corridor", 66, 292),
      hs("laptop", "laptop", "A learner's laptop", seatX(1, "R", 0), ROWS[1].y - 74 * ROWS[1].s),
      hs("meena", "meena", "A learner", seatX(2, "L", 0), ROWS[2].y - 30 * ROWS[2].s),
      hs("memory", "memory", "A learner", seatX(0, "R", 1), ROWS[0].y - 34 * ROWS[0].s),
      hs("manual", "pair", "Session manual", 222, 262, "manual"),
      hs("screen", "screen", "Instructor's laptop", 308, 280),
      hs("handout", "pair", "A learner's handout", seatX(3, "L", 1), ROWS[3].y - 64 * ROWS[3].s, "handout"),
      hs("aisle", "aisle", "The seating", 600, 612)
    ].concat(emptyHotspots),
    portraits: {
      arun: { skin: SKIN[2], hair: HAIR[0], shirt: "#7FA3C7", moustache: true, label: "Illustration of Arun, an instructor" },
      meena: { skin: SKIN[1], hair: HAIR[1], shirt: "#3E7C74", female: true, label: "Illustration of Meena, a learner" }
    }
  };


  /* ------------------------------------------------------------------------
     CHENNAI ARRIVAL: stepping out of the lift onto the third floor
     ------------------------------------------------------------------------ */
  function chennaiArrival() {
    var u = uid();
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Stepping out of a lift onto the third floor, with a hallway of rooms and a window onto a busy city">';
    svg += '<defs>' +
      '<linearGradient id="chSky' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EC3E6"/><stop offset="1" stop-color="#F2E6CF"/></linearGradient>' +
      '<linearGradient id="chSteel' + u + '" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7C878F"/><stop offset=".5" stop-color="#A9B3BA"/><stop offset="1" stop-color="#6E7982"/></linearGradient>' +
      '<linearGradient id="chFloor' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D9D3C6"/><stop offset="1" stop-color="#EAE5D9"/></linearGradient>' +
      '<clipPath id="chWin' + u + '"><rect x="468" y="262" width="264" height="150"/></clipPath>' +
      '</defs>';
    // hallway shell
    svg += '<rect width="1200" height="700" fill="#2B3E49"/>';
    svg += '<polygon points="120,90 1080,90 750,250 450,250" fill="#F1F4F6"/>';
    svg += '<polygon points="120,90 450,250 450,420 120,700" fill="#DCE3E8"/>';
    svg += '<polygon points="1080,90 750,250 750,420 1080,700" fill="#E3E9ED"/>';
    svg += '<polygon points="120,700 450,420 750,420 1080,700" fill="url(#chFloor' + u + ')"/>';
    // floor tiles
    var i;
    for (i = -5; i <= 5; i++) {
      svg += '<line x1="' + (600 + i * 30) + '" y1="420" x2="' + (600 + i * 150) + '" y2="700" stroke="#BDB5A6" stroke-opacity=".5" stroke-width="1.2"/>';
    }
    [440, 470, 510, 560, 625, 700].forEach(function (y) {
      var f = (y - 420) / 280, xl = 450 - 330 * f, xr = 750 + 330 * f;
      svg += '<line x1="' + xl + '" y1="' + y + '" x2="' + xr + '" y2="' + y + '" stroke="#BDB5A6" stroke-opacity=".45" stroke-width="1.2"/>';
    });
    // window at the far end, with the city beyond
    svg += '<rect x="450" y="250" width="300" height="170" fill="#C6D0D7"/>';
    svg += '<g clip-path="url(#chWin' + u + ')">';
    svg += '<rect x="468" y="262" width="264" height="150" fill="url(#chSky' + u + ')"/>';
    [[468, 70, 60, "#8FA3B3"], [530, 50, 90, "#7B91A3"], [580, 80, 50, "#98ABB9"], [650, 60, 100, "#7F94A6"], [706, 40, 70, "#8CA0B0"]].forEach(function (b) {
      svg += '<rect x="' + b[0] + '" y="' + (412 - b[2] - 20) + '" width="' + b[1] + '" height="' + (b[2] + 20) + '" fill="' + b[3] + '"/>';
    });
    [[490, 330], [545, 322], [600, 350], [668, 318], [718, 338]].forEach(function (w) {
      svg += '<rect x="' + w[0] + '" y="' + w[1] + '" width="8" height="6" fill="#F6E7A8" opacity=".8"/><rect x="' + (w[0] + 14) + '" y="' + (w[1] + 14) + '" width="8" height="6" fill="#F6E7A8" opacity=".6"/>';
    });
    svg += '<rect x="468" y="398" width="264" height="14" fill="#5F6B73"/>';
    [[490, "#D9534F"], [540, "#F2C14E"], [610, "#FFFFFF"], [680, "#2B8BC5"]].forEach(function (c) {
      svg += '<rect x="' + c[0] + '" y="402" width="22" height="7" rx="2" fill="' + c[1] + '"/>';
    });
    svg += '</g>';
    svg += '<line x1="600" y1="262" x2="600" y2="412" stroke="#A9B3BA" stroke-width="4"/><rect x="468" y="262" width="264" height="150" fill="none" stroke="#A9B3BA" stroke-width="5"/>';
    // doors along both walls, following the perspective
    function wallPt(side, x) {
      var f = side === "L" ? (x - 120) / 330 : (1080 - x) / 330;
      return { top: 90 + f * 160, bot: 700 - f * 280 };
    }
    function door(side, xa, xb, colour, open) {
      var A = wallPt(side, xa), B = wallPt(side, xb);
      var ha = (A.bot - A.top) * 0.78, hb = (B.bot - B.top) * 0.78;
      var pts = xa + "," + (A.bot - ha) + " " + xb + "," + (B.bot - hb) + " " + xb + "," + B.bot + " " + xa + "," + A.bot;
      var g = '<polygon points="' + pts + '" fill="' + colour + '"/>';
      if (open) {
        g = '<polygon points="' + pts + '" fill="#FFF4D6"/>' +
            '<polygon points="' + pts + '" fill="#fff" opacity=".35"/>';
      } else {
        var mx = (xa + xb) / 2, M = wallPt(side, mx);
        g += '<rect x="' + (mx - 8) + '" y="' + (M.bot - (M.bot - M.top) * 0.52) + '" width="16" height="9" rx="2" fill="#F5F7F8" opacity=".9"/>';
      }
      return g;
    }
    svg += door("L", 150, 215, "#7A5A3E", false);
    svg += door("L", 250, 320, "#8A6A4A", false);
    svg += door("L", 350, 420, "#7A5A3E", false);
    svg += door("R", 1050, 985, "#8A6A4A", false);
    svg += door("R", 950, 880, "#7A5A3E", false);
    svg += door("R", 845, 780, "#FFF4D6", true);
    // ceiling lights
    [[560, 110, 80], [585, 175, 36], [595, 220, 16]].forEach(function (l) {
      svg += '<rect x="' + (l[0] - l[2] / 2 + 40) + '" y="' + l[1] + '" width="' + l[2] + '" height="' + Math.max(4, l[2] / 10) + '" rx="3" fill="#fff"/>';
    });
    // the lift: steel frame around the view, floor display above
    svg += '<rect x="0" y="0" width="120" height="700" fill="url(#chSteel' + u + ')"/>';
    svg += '<rect x="1080" y="0" width="120" height="700" fill="url(#chSteel' + u + ')"/>';
    svg += '<rect x="0" y="0" width="1200" height="90" fill="#59636B"/>';
    svg += '<rect x="0" y="86" width="1200" height="8" fill="#2B3E49"/>';
    svg += '<rect x="550" y="14" width="100" height="58" rx="6" fill="#0B1218"/>';
    svg += '<text x="600" y="58" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="700" font-size="44" fill="#FC8905">3</text>';
    [[60, "#8A949B"], [1140, "#8A949B"]].forEach(function (p) {
      svg += '<line x1="' + p[0] + '" y1="0" x2="' + p[0] + '" y2="700" stroke="' + p[1] + '" stroke-width="3" opacity=".6"/>';
    });
    svg += '</svg>';
    return svg;
  }

  /* ------------------------------------------------------------------------
     CHENNAI CLASSROOM: small room, learners in clusters, phones not laptops
     ------------------------------------------------------------------------ */
  var ROWS_C = [
    { s: 0.66, y: 430 },
    { s: 0.78, y: 490 },
    { s: 1.0, y: 614 },
    { s: 1.14, y: 690 }
  ];
  // [row, side, index from the middle aisle]
  var EMPTY_C = [[0, "R", 1], [1, "L", 0], [2, "R", 1], [3, "L", 1]];
  var FEMALE_C = [[0, "L", 0], [1, "R", 1], [2, "L", 1], [2, "R", 0], [3, "L", 0]];
  function inSeatList(list, row, side, i) {
    for (var k = 0; k < list.length; k++) if (list[k][0] === row && list[k][1] === side && list[k][2] === i) return true;
    return false;
  }
  function seatXC(row, side, i) {
    var s = ROWS_C[row].s, gap = 150 * s, w = 108 * s;
    return side === "L" ? 600 - gap / 2 - w * (i + 0.5) : 600 + gap / 2 + w * (i + 0.5);
  }

  function chennaiClassroom() {
    var u = uid();
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A small Chennai classroom seen from the back, with learners seated in clusters and a window onto the city">';
    svg += '<defs>' +
      '<linearGradient id="cqFloor' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D8D2C6"/><stop offset="1" stop-color="#E5E0D4"/></linearGradient>' +
      '<linearGradient id="cqCeil' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6F8FA"/><stop offset="1" stop-color="#E9EDF0"/></linearGradient>' +
      '<linearGradient id="cqSky' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EC3E6"/><stop offset="1" stop-color="#F2E6CF"/></linearGradient>' +
      '<clipPath id="cqWin' + u + '"><polygon points="1075,90 1175,50 1175,283 1075,217"/></clipPath>' +
      '</defs>';
    svg += '<polygon points="0,0 1200,0 1050,60 150,60" fill="url(#cqCeil' + u + ')"/>';
    svg += '<polygon points="0,0 150,60 150,330 0,430" fill="#D8DEE3"/>';
    svg += '<polygon points="1200,0 1050,60 1050,330 1200,430" fill="#DEE4E9"/>';
    svg += '<rect x="150" y="60" width="900" height="270" fill="#E7ECEF"/>';
    svg += '<rect x="150" y="262" width="900" height="68" fill="#C3D4E0"/>';
    svg += '<polygon points="0,262 150,262 150,330 0,430" fill="#B4C8D6" opacity=".7"/>';
    svg += '<polygon points="1200,262 1050,262 1050,330 1200,430" fill="#B9CCD9" opacity=".7"/>';
    svg += '<polygon points="0,430 150,330 1050,330 1200,430 1200,700 0,700" fill="url(#cqFloor' + u + ')"/>';
    var i;
    for (i = -6; i <= 6; i++) {
      svg += '<line x1="' + (600 + i * 38) + '" y1="330" x2="' + (600 + i * 150) + '" y2="700" stroke="#BDB5A6" stroke-opacity=".45" stroke-width="1.2"/>';
    }
    [352, 380, 414, 456, 508, 572, 650].forEach(function (y) {
      svg += '<line x1="0" y1="' + y + '" x2="1200" y2="' + y + '" stroke="#BDB5A6" stroke-opacity=".38" stroke-width="1.2"/>';
    });
    // window on the right wall: a busy city beyond
    svg += '<polygon points="1075,90 1175,50 1175,283 1075,217" fill="#C6D0D7"/>';
    svg += '<g clip-path="url(#cqWin' + u + ')">';
    svg += '<rect x="1070" y="40" width="110" height="250" fill="url(#cqSky' + u + ')"/>';
    [[1076, 28, 120, "#8FA3B3"], [1100, 24, 150, "#7B91A3"], [1124, 30, 105, "#98ABB9"], [1150, 28, 140, "#7F94A6"]].forEach(function (b) {
      svg += '<rect x="' + b[0] + '" y="' + (290 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="' + b[3] + '"/>';
    });
    svg += '<rect x="1070" y="246" width="110" height="40" fill="#5F6B73"/><rect x="1070" y="262" width="110" height="3" fill="#F2C14E" opacity=".8"/>';
    svg += '</g>';
    svg += '<polygon points="1075,90 1175,50 1175,283 1075,217" fill="none" stroke="#A9B3BA" stroke-width="5"/>';
    // lights and fans
    svg += '<rect x="300" y="64" width="150" height="9" rx="4" fill="#fff" opacity=".9"/><rect x="750" y="64" width="150" height="9" rx="4" fill="#fff" opacity=".9"/>';
    [[400, 40], [800, 40]].forEach(function (f) {
      var fx = f[0], fy = f[1];
      svg += '<line x1="' + fx + '" y1="0" x2="' + fx + '" y2="' + (fy - 6) + '" stroke="#5C6770" stroke-width="3"/>';
      svg += '<ellipse cx="' + fx + '" cy="' + fy + '" rx="9" ry="5" fill="#4A545C"/>';
      svg += '<ellipse cx="' + (fx - 52) + '" cy="' + (fy + 3) + '" rx="46" ry="6" fill="#6B7680"/><ellipse cx="' + (fx + 52) + '" cy="' + (fy + 3) + '" rx="46" ry="6" fill="#6B7680"/>';
    });
    // whiteboard with a simple two-person diagram
    svg += '<rect x="262" y="96" width="560" height="154" rx="4" fill="#9AA5AE"/><rect x="270" y="104" width="544" height="138" rx="2" fill="#FFFFFF"/><rect x="262" y="246" width="560" height="9" fill="#7D8A94"/>';
    svg += '<circle cx="330" cy="150" r="20" fill="none" stroke="#2B8BC5" stroke-width="3"/><circle cx="470" cy="150" r="20" fill="none" stroke="#1D8F35" stroke-width="3"/>';
    svg += '<path d="M354,142 L446,142 M446,158 L354,158" stroke="#2B3E49" stroke-width="3" stroke-linecap="round" opacity=".7"/><path d="M438,136 L448,142 L438,148 M362,152 L352,158 L362,164" fill="none" stroke="#2B3E49" stroke-width="3" stroke-linecap="round" opacity=".7"/>';
    [[292, 196, 220], [292, 216, 160], [560, 128, 190], [560, 154, 120], [560, 180, 200], [560, 206, 90]].forEach(function (l) {
      svg += '<rect x="' + l[0] + '" y="' + l[1] + '" width="' + l[2] + '" height="5" rx="2.5" fill="#2B3E49" opacity=".55"/>';
    });
    // door on the left wall
    svg += '<polygon points="20,150 112,186 112,330 20,402" fill="#7A5A3E"/><polygon points="30,162 100,190 100,324 30,384" fill="#F4E9D2" opacity=".95"/><polygon points="30,162 100,190 100,324 30,384" fill="#fff" opacity=".35"/><circle cx="92" cy="262" r="3.2" fill="#C9A75B"/>';
    // instructor's table: manual stack and laptop
    svg += '<rect x="170" y="296" width="180" height="12" rx="3" fill="#B98A5A"/><rect x="176" y="308" width="8" height="54" fill="#8E6540"/><rect x="336" y="308" width="8" height="54" fill="#8E6540"/><rect x="176" y="320" width="168" height="6" fill="#8E6540" opacity=".5"/>';
    [["#2B3E49", 0], ["#0074B9", 1], ["#1D8F35", 2], ["#00619A", 3], ["#808B92", 4]].forEach(function (b) {
      var by = 296 - (b[1] + 1) * 11, off = b[1] === 2 ? 7 : 0;
      svg += '<rect x="' + (186 + off) + '" y="' + by + '" width="72" height="10" rx="2" fill="' + b[0] + '"/><rect x="' + (192 + off) + '" y="' + (by + 3) + '" width="58" height="2.4" fill="#fff" opacity=".6"/>';
    });
    svg += '<path d="M276,296 L338,296 L330,270 L284,270 Z" fill="#3A444C"/><path d="M287,274 L327,274 L331,290 L283,290 Z" fill="#7FB4D6"/><rect x="290" y="278" width="26" height="2.4" fill="#fff" opacity=".8"/><rect x="290" y="283" width="18" height="2.4" fill="#fff" opacity=".7"/>';
    // instructor: a woman in her mid-to-late 20s
    svg += instructorFront(880, 352, 1.0, { skin: SKIN[1], hair: HAIR[0], shirt: "#5A4E8C", trousers: "#2B3E49", female: true, pointLeft: true });
    svg += '<path d="M940,120 h96 a14,14 0 0 1 14,14 v34 a14,14 0 0 1 -14,14 h-62 l-18,16 l4,-16 h-20 a14,14 0 0 1 -14,-14 v-34 a14,14 0 0 1 14,-14 z" fill="#fff" stroke="#2B8BC5" stroke-width="2.5"/>';
    svg += '<circle cx="968" cy="151" r="5" fill="#2B8BC5"/><circle cx="990" cy="151" r="5" fill="#2B8BC5"/><circle cx="1012" cy="151" r="5" fill="#2B8BC5"/>';

    // learner clusters, far to near
    var seed = 0;
    for (var row = 0; row < ROWS_C.length; row++) {
      var R = ROWS_C[row], s = R.s, y = R.y;
      ["L", "R"].forEach(function (side) {
        var w = 108 * s, gap = 150 * s;
        var x0 = side === "L" ? 600 - gap / 2 - w * 2 : 600 + gap / 2;
        svg += '<ellipse cx="' + r(x0 + w) + '" cy="' + r(y + 70 * s) + '" rx="' + r(w + 8 * s) + '" ry="' + r(9 * s) + '" fill="#000" opacity=".08"/>';
        svg += '<rect x="' + r(x0 + 2 * s) + '" y="' + r(y - 74 * s) + '" width="' + r(w * 2 - 4 * s) + '" height="' + r(28 * s) + '" rx="' + r(3 * s) + '" fill="#C79B6A"/>';
        svg += '<rect x="' + r(x0 + 2 * s) + '" y="' + r(y - 46 * s) + '" width="' + r(w * 2 - 4 * s) + '" height="' + r(7 * s) + '" fill="#8E6540"/>';
      });
      ["L", "R"].forEach(function (side) {
        for (var k = 0; k < 2; k++) {
          var x = seatXC(row, side, k);
          if (inSeatList(EMPTY_C, row, side, k)) {
            svg += '<rect x="' + r(x - 40 * s) + '" y="' + r(y + 8 * s) + '" width="' + r(80 * s) + '" height="' + r(12 * s) + '" rx="' + r(3 * s) + '" fill="#A5764A"/>';
            svg += '<rect x="' + r(x - 40 * s) + '" y="' + r(y + 20 * s) + '" width="' + r(80 * s) + '" height="' + r(4 * s) + '" fill="#7A5232" opacity=".6"/>';
            continue;
          }
          seed++;
          var female = inSeatList(FEMALE_C, row, side, k);
          var skin = SKIN[(seed * 3 + row) % SKIN.length];
          var hair = HAIR[seed % HAIR.length];
          var shirt = female ? SHIRT_W[(seed * 5 + row) % SHIRT_W.length] : SHIRT_M[(seed * 3 + row) % SHIRT_M.length];
          // a phone on the desk in front of most learners; no laptops here
          if (seed % 4 !== 0) {
            var px = x + 8 * s, py = y - 62 * s;
            svg += '<rect x="' + r(px - 8 * s) + '" y="' + r(py - 9 * s) + '" width="' + r(16 * s) + '" height="' + r(24 * s) + '" rx="' + r(3 * s) + '" fill="#1F2A31"/>';
            svg += '<rect x="' + r(px - 6 * s) + '" y="' + r(py - 6 * s) + '" width="' + r(12 * s) + '" height="' + r(18 * s) + '" rx="' + r(2 * s) + '" fill="#7FC4EA"/>';
          }
          svg += learnerBack(x, y, s, { skin: skin, hair: hair, shirt: shirt, female: female, plait: female && (seed % 2 === 0) });
        }
      });
      if (row === 3) {
        var hx = seatXC(3, "R", 0) - 26, hy = y - 64 * s;
        svg += '<path d="M' + r(hx - 34 * s) + ',' + r(hy + 12 * s) + ' L' + r(hx + 34 * s) + ',' + r(hy + 12 * s) + ' L' + r(hx + 30 * s) + ',' + r(hy - 14 * s) + ' L' + r(hx - 30 * s) + ',' + r(hy - 14 * s) + ' Z" fill="#fff" stroke="#9AA5AE" stroke-width="1.6"/>';
        svg += '<line x1="' + hx + '" y1="' + r(hy - 14 * s) + '" x2="' + hx + '" y2="' + r(hy + 12 * s) + '" stroke="#9AA5AE" stroke-width="1.2"/>';
      }
    }
    svg += '</svg>';
    return svg;
  }

  var emptyHotspotsC = EMPTY_C.map(function (e, idx) {
    return hs("seat" + idx, "seats", "Empty seat", seatXC(e[0], e[1], e[2]), ROWS_C[e[0]].y + 4);
  });

  var CHENNAI = {
    arrival: chennaiArrival,
    room: chennaiClassroom,
    hotspots: [
      hs("bubble", "bubble", "Instructor explaining", 996, 150),
      hs("kavitha", "kavitha", "The instructor", 880, 250),
      hs("door", "door", "Door to the corridor", 66, 292),
      hs("phone", "phone", "A learner's phone", seatXC(1, "R", 0) + 8 * ROWS_C[1].s, ROWS_C[1].y - 62 * ROWS_C[1].s),
      hs("vignesh", "vignesh", "A learner", seatXC(1, "L", 1), ROWS_C[1].y - 30 * ROWS_C[1].s),
      hs("memory", "memory", "A learner", seatXC(2, "L", 1), ROWS_C[2].y - 30 * ROWS_C[2].s),
      hs("manual", "pair", "Session manual", 222, 262, "manual"),
      hs("screen", "screen", "Instructor's laptop", 308, 280),
      hs("handout", "pair", "A learner's handout", seatXC(3, "R", 0) - 26, ROWS_C[3].y - 64 * ROWS_C[3].s, "handout"),
      hs("aisle", "aisle", "The seating", 600, 560)
    ].concat(emptyHotspotsC),
    portraits: {
      kavitha: { skin: SKIN[1], hair: HAIR[0], shirt: "#5A4E8C", female: true, label: "Illustration of Kavitha, an instructor" },
      vignesh: { skin: SKIN[4], hair: HAIR[1], shirt: "#4E7FA8", label: "Illustration of Vignesh, a learner" }
    }
  };

  window.FV_SCENES = { namakkal: NAMAKKAL, chennai: CHENNAI, bust: bust };
})();
