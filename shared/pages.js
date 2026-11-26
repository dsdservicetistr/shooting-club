// ตัวสร้างหน้า 3 หน้า (หน้าแรก / สมาชิก / ผลแข่งและภาพ)
// ใช้ร่วมกันทั้ง 2 เว็บ ต่างกันที่ข้อความ (strings.js) และสไตล์ (theme.css)
(function () {
  'use strict';
  var C = window.CLUB, esc = C.esc;
  var T, D, Q = '';

  /* ---------- กราฟิกเป้ายิง (วงคะแนน 1-10) ---------- */
  function targetSvg() {
    var cx = 200, cy = 200, rings = '', nums = '';
    for (var i = 1; i <= 10; i++) { // วาดวงนอกสุด (1) เข้าหาวงใน (10)
      var r = 20 * (11 - i);
      rings += '<circle class="tg-ring' + (i >= 7 ? ' tg-dark' : '') + '" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>';
      if (i <= 9) nums += '<text class="tg-num' + (i >= 7 ? ' tg-num-on-dark' : '') + '" x="' + (cx + 20 * (10.5 - i)) + '" y="' + (cy + 4) + '">' + i + '</text>';
    }
    var holes = [[205, 193], [194, 207], [212, 214], [183, 188], [226, 180], [171, 222]]
      .map(function (h) { return '<circle class="tg-hole" cx="' + h[0] + '" cy="' + h[1] + '" r="4.5"/>'; }).join('');
    return '<svg class="target" viewBox="0 0 400 400" role="img" aria-label="เป้ายิงปืนที่มีวงคะแนน 1 ถึง 10">' +
      rings + '<circle class="tg-ten" cx="200" cy="200" r="8"/>' + nums + holes + '</svg>';
  }

  /* ---------- โครงหน้า: หัว / ท้าย ---------- */
  function pageFile() { return document.body.getAttribute('data-page') + '.html'; }

  function header(cfg) {
    var logo = cfg.logo ? '<img class="brand-logo" src="' + esc(cfg.logo) + '" alt="">' : '';
    var pages = [['index', T.nav.home], ['members', T.nav.members], ['results', T.nav.results]];
    var cur = document.body.getAttribute('data-page');
    var links = pages.map(function (p) {
      return '<a href="' + p[0] + '.html' + Q + '"' + (p[0] === cur ? ' aria-current="page"' : '') + '>' + esc(p[1]) + '</a>';
    }).join('');
    return '<div class="wrap bar"><a class="brand" href="index.html' + Q + '">' + logo +
      '<span class="brand-name">' + esc(cfg.club_name) + '</span></a><nav class="nav" aria-label="เมนูหลัก">' + links + '</nav></div>';
  }

  function footer(cfg) {
    var other = T.other;
    return '<div class="wrap foot">' +
      '<p class="foot-name">' + esc(cfg.club_name) + '</p>' +
      '<div class="switcher" role="group" aria-label="' + esc(T.switcherLabel) + '">' +
      '<span class="switcher-label">' + esc(T.switcherLabel) + '</span>' +
      '<span class="seg-wrap">' +
      '<a class="seg' + (T.theme === 'formal' ? ' is-on' : '') + '" href="' + (T.theme === 'formal' ? '#' : '../formal/' + pageFile() + Q) + '"' + (T.theme === 'formal' ? ' aria-current="true"' : '') + '>' + esc(T.segFormal) + '</a>' +
      '<a class="seg' + (T.theme === 'casual' ? ' is-on' : '') + '" href="' + (T.theme === 'casual' ? '#' : '../casual/' + pageFile() + Q) + '"' + (T.theme === 'casual' ? ' aria-current="true"' : '') + '>' + esc(T.segCasual) + '</a>' +
      '</span></div>' +
      (C.isDemo() ? '<p class="demo-note">กำลังแสดงข้อมูลตัวอย่าง</p>' : '') +
      '</div>';
  }

  /* ---------- หน้าแรก ---------- */
  // การ์ด "เร็ว ๆ นี้" (เช่น ให้ลอง Beretta T1) — รูปมาจาก Config: perk_image
  function featureCard(cfg) {
    if (cfg.perk_show !== undefined && cfg.perk_show !== '' && !C.isOn(cfg.perk_show)) return '';
    var media = cfg.perk_image
      ? '<img src="' + esc(cfg.perk_image) + '" alt="' + esc(cfg.perk_caption || T.perks.featureTitle) + '" loading="lazy">'
      : '<div class="feature-ph" aria-hidden="true">' + targetSvg() + '</div>';
    return '<article class="perk perk-feature"><div class="feature-media">' + media +
      '<span class="ribbon">' + esc(cfg.perk_ribbon || T.perks.ribbon) + '</span></div>' +
      '<div class="feature-text"><h3>' + esc(cfg.perk_caption || T.perks.featureTitle) + '</h3><p>' + esc(T.perks.featureBody) + '</p></div></article>';
  }

  function renderHome(cfg) {
    var h = '';
    if (C.isOn(cfg.banner_show) && cfg.banner_text) {
      h += '<div class="banner"><div class="wrap banner-in">' +
        (cfg.banner_image ? '<img class="banner-img" src="' + esc(cfg.banner_image) + '" alt="">' : '') +
        '<span>' + esc(cfg.banner_text) + '</span></div></div>';
    }

    var founded = cfg.founded_year ? '<p class="hero-meta">' + esc(T.foundedPrefix) + esc(cfg.founded_year) + '</p>' : '';
    h += '<section class="hero"><div class="wrap hero-in">' +
      '<div class="hero-text"><h1>' + esc(cfg.club_name) + '</h1>' +
      '<p class="hero-slogan">' + esc(cfg[T.sloganKey] || '') + '</p>' + founded +
      '<p class="hero-lead">' + esc(T.heroLead) + '</p>' +
      '<div class="hero-cta"><a class="btn btn-primary" href="#join">' + esc(T.ctaJoin) + '</a>' +
      '<a class="btn btn-quiet" href="members.html' + Q + '">' + esc(T.ctaMembers) + '</a></div></div>' +
      '<div class="hero-art" aria-hidden="false">' + targetSvg() + '</div></div></section>';

    h += '<section class="block"><div class="wrap narrow"><h2>' + esc(T.about.title) + '</h2>' +
      T.about.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div></section>';

    // สวัสดิการ
    var trial = cfg.trial_rounds || '10';
    var box = [];
    if (cfg.full_box_rounds) box.push('เต็มกล่อง ' + cfg.full_box_rounds + ' นัด');
    if (cfg.full_box_price) box.push(Number(cfg.full_box_price).toLocaleString('th-TH') + ' บาท');
    var boxLine = box.length ? '<p class="perk-fact">' + esc(box.join(' · ')) + '</p>' : '';
    h += '<section class="block block-tint"><div class="wrap"><h2>' + esc(T.perks.title) + '</h2><div class="perks">' +
      '<article class="perk perk-main"><p class="perk-big"><span>' + esc(trial) + '</span> นัด</p>' +
      '<div><h3>' + esc(T.perks.trialTitle) + '</h3><p>' + esc(T.perks.trialBody) + '</p></div></article>' +
      '<article class="perk"><h3>' + esc(T.perks.boxTitle) + '</h3><p>' + esc(T.perks.boxBody) + '</p>' + boxLine + '</article>' +
      '<article class="perk"><h3>' + esc(T.perks.coachTitle) + '</h3><p>' + esc(T.perks.coachBody) + '</p></article>' +
      '<article class="perk"><h3>' + esc(T.perks.welcomeTitle) + '</h3><p>' + esc(T.perks.welcomeBody) + '</p></article>' +
      featureCard(cfg) +
      '</div>' +
      (cfg.venue ? '<p class="venue">' + esc(T.venuePrefix) + esc(cfg.venue) + '</p>' : '') +
      '</div></section>';

    // ความปลอดภัย
    h += '<section class="block"><div class="wrap narrow"><h2>' + esc(T.safety.title) + '</h2><p>' + esc(T.safety.body) + '</p></div></section>';

    // เข้าร่วม
    h += '<section class="block join" id="join"><div class="wrap narrow"><h2>' + esc(T.join.title) + '</h2><p>' + esc(T.join.body) + '</p>' +
      '<p class="join-phone"><a href="' + esc(C.telHref(cfg.contact_phone)) + '">' + esc(cfg.contact_phone) + '</a></p>' +
      '<p class="join-who">' + esc(T.join.contactPrefix) + esc(cfg.contact_name || '') + '</p></div></section>';
    return h;
  }

  /* ---------- สมาชิก ---------- */
  function genLabel(g) {
    g = String(g || '').trim();
    if (!g) return T.members.noGen;
    if (/^\d+$/.test(g)) return 'รุ่นที่ ' + g;
    return 'รุ่น' + g;
  }
  function genOrder(g) {
    g = String(g || '').trim();
    if (!g) return 9999;
    if (/^\d+$/.test(g)) return Number(g);
    return 0; // รุ่นก่อตั้งและรุ่นพิเศษขึ้นก่อน
  }

  function photoHtml(m) {
    var ch = esc((m.full_name || '?').charAt(0));
    return m.photo
      ? '<img src="' + esc(m.photo) + '" alt="' + esc(m.full_name) + '" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'ph-empty\',textContent:\'' + ch + '\'}))">'
      : '<span class="ph-empty">' + ch + '</span>';
  }

  function memberCard(m) {
    return '<li class="member" data-name="' + esc(m.full_name) + '"><div class="member-photo">' + photoHtml(m) + '</div><p class="member-name">' + esc(m.full_name) + '</p></li>';
  }

  // ประธาน (role มีคำว่า "ประธาน") แสดงเป็นการ์ดใหญ่ไว้บนสุด พร้อมตำแหน่งและคำโปรย
  function isLeader(m) { return /ประธาน/.test(String(m.role || '')); }
  function leaderCard(m) {
    return '<li class="member member-leader" data-name="' + esc(m.full_name) + '"><div class="member-photo">' + photoHtml(m) + '</div>' +
      '<div class="leader-text"><p class="leader-role">' + esc(m.role) + '</p><p class="member-name">' + esc(m.full_name) + '</p>' +
      (m.tagline ? '<p class="leader-tagline">' + esc(m.tagline) + '</p>' : '') + '</div></li>';
  }

  function renderMembers() {
    var list = D.members || [];
    var h = '<section class="block page-head"><div class="wrap"><h1>' + esc(T.members.title) + '</h1><p>' + esc(T.members.lead) + '</p>' +
      '<label class="search"><span class="sr">' + esc(T.members.searchLabel) + '</span>' +
      '<input id="q" type="search" placeholder="' + esc(T.members.searchPlaceholder) + '" autocomplete="off"></label>' +
      '<p id="q-result" class="q-result" role="status"></p></div></section>';
    if (!list.length) return h + '<section class="block"><div class="wrap"><p class="empty">' + esc(T.members.empty) + '</p></div></section>';

    var leaders = list.filter(isLeader), rest = list.filter(function (m) { return !isLeader(m); });
    if (leaders.length) {
      h += '<section class="block member-group member-leaders"><div class="wrap"><h2>' + esc(T.members.leadersTitle) + '</h2>' +
        '<ul class="leader-grid">' + leaders.map(leaderCard).join('') + '</ul></div></section>';
    }
    var groups = {};
    rest.forEach(function (m) { var k = genLabel(m.generation); (groups[k] = groups[k] || { o: genOrder(m.generation), items: [] }).items.push(m); });
    Object.keys(groups).sort(function (a, b) { return groups[a].o - groups[b].o; }).forEach(function (k) {
      h += '<section class="block member-group"><div class="wrap"><h2>' + esc(k) + ' <small>' + groups[k].items.length + ' ท่าน</small></h2>' +
        '<ul class="member-grid">' + groups[k].items.map(memberCard).join('') + '</ul></div></section>';
    });
    return h;
  }

  function wireSearch() {
    var q = document.getElementById('q');
    if (!q) return;
    var out = document.getElementById('q-result');
    q.addEventListener('input', function () {
      var v = q.value.trim().toLowerCase(), n = 0;
      document.querySelectorAll('.member').forEach(function (li) {
        var hit = !v || li.getAttribute('data-name').toLowerCase().indexOf(v) >= 0;
        li.hidden = !hit; if (hit) n++;
      });
      document.querySelectorAll('.member-group').forEach(function (g) {
        g.hidden = !g.querySelector('.member:not([hidden])');
      });
      out.textContent = v ? (n ? T.members.found.replace('{n}', n) : T.members.notFound) : '';
    });
  }

  /* ---------- ผลแข่งและภาพ ---------- */
  function ytThumb(id) { return 'https://i.ytimg.com/vi/' + encodeURIComponent(id) + '/hqdefault.jpg'; }

  function resultTable(rows) {
    if (!rows.length) return '';
    rows = rows.slice().sort(function (a, b) { return (Number(a.rank) || 999) - (Number(b.rank) || 999); });
    var hasScore = rows.some(function (r) { return r.score !== '' && r.score != null; });
    var hasAward = rows.some(function (r) { return r.award; });
    var h = '<table class="scores"><thead><tr><th scope="col">' + esc(T.results.rank) + '</th><th scope="col">' + esc(T.results.name) + '</th>' +
      (hasScore ? '<th scope="col" class="num">' + esc(T.results.score) + '</th>' : '') +
      (hasAward ? '<th scope="col">' + esc(T.results.award) + '</th>' : '') + '</tr></thead><tbody>';
    rows.forEach(function (r) {
      h += '<tr><td class="rank">' + esc(r.rank) + '</td><td>' + esc(r.member_name) + '</td>' +
        (hasScore ? '<td class="num">' + esc(r.score) + '</td>' : '') +
        (hasAward ? '<td>' + esc(r.award) + '</td>' : '') + '</tr>';
    });
    return h + '</tbody></table>';
  }

  function yearContent(year) {
    var comps = (D.competitions || []).filter(function (c) { return String(c.year) === String(year); });
    var h = '';
    if (!comps.length) h += '<p class="empty">' + esc(T.results.noComp) + '</p>';
    comps.forEach(function (c) {
      var rows = (D.results || []).filter(function (r) { return r.competition_id === c.id; });
      var meta = [C.thaiDate(c.date), c.venue, c.category].filter(Boolean).join(' · ');
      h += '<article class="comp"><h3>' + esc(c.name) + '</h3>' + (meta ? '<p class="comp-meta">' + esc(meta) + '</p>' : '') +
        (c.summary ? '<p class="comp-sum">' + esc(c.summary) + '</p>' : '') + resultTable(rows) + '</article>';
    });

    var g = (D.gallery || []).filter(function (x) { return String(x.year) === String(year); });
    var photos = g.filter(function (x) { return x.type === 'photo' && x.thumb; });
    var vids = g.filter(function (x) { return x.type === 'video' && x.youtube; });
    h += '<h2 class="gal-h">' + esc(T.results.galleryTitle) + '</h2>';
    if (!photos.length && !vids.length) h += '<p class="empty">' + esc(T.results.noGallery) + '</p>';
    if (photos.length) {
      h += '<ul class="photo-grid">' + photos.map(function (p, i) {
        return '<li><button type="button" class="photo" data-i="' + i + '" aria-label="' + esc(T.results.openPhoto) + '"><img src="' + esc(p.thumb) + '" alt="' + esc(p.caption || '') + '" loading="lazy"></button>' +
          (p.caption ? '<p class="cap">' + esc(p.caption) + '</p>' : '') + '</li>';
      }).join('') + '</ul>';
    }
    if (vids.length) {
      h += '<ul class="video-grid">' + vids.map(function (v) {
        return '<li><button type="button" class="video" data-yt="' + esc(v.youtube) + '" aria-label="' + esc(T.results.playVideo) + '"><img src="' + esc(ytThumb(v.youtube)) + '" alt="" loading="lazy"><span class="play" aria-hidden="true"></span></button>' +
          (v.caption ? '<p class="cap">' + esc(v.caption) + '</p>' : '') + '</li>';
      }).join('') + '</ul>';
    }
    return { html: h, photos: photos };
  }

  function renderResults() {
    var years = {};
    (D.competitions || []).forEach(function (c) { years[c.year] = 1; });
    (D.gallery || []).forEach(function (x) { years[x.year] = 1; });
    var ys = Object.keys(years).filter(Boolean).sort(function (a, b) { return b - a; });
    var h = '<section class="block page-head"><div class="wrap"><h1>' + esc(T.results.title) + '</h1><p>' + esc(T.results.lead) + '</p></div></section>';
    if (!ys.length) return h + '<section class="block"><div class="wrap"><p class="empty">' + esc(T.results.empty) + '</p></div></section>';
    h += '<section class="block"><div class="wrap"><div class="tabs" role="tablist" aria-label="เลือกปี">' +
      ys.map(function (y) { return '<button type="button" role="tab" class="tab" data-y="' + y + '">' + esc(T.results.yearPrefix) + y + '</button>'; }).join('') +
      '</div><div id="year-body" class="year-body" role="tabpanel"></div></div></section>' +
      '<dialog id="lb" class="lightbox"><button type="button" class="lb-close" aria-label="ปิด">&times;</button><button type="button" class="lb-nav lb-prev" aria-label="ภาพก่อนหน้า">&lsaquo;</button><img id="lb-img" alt=""><button type="button" class="lb-nav lb-next" aria-label="ภาพถัดไป">&rsaquo;</button><p id="lb-cap" class="lb-cap"></p></dialog>';
    return { html: h, years: ys };
  }

  function wireResults(ys) {
    var body = document.getElementById('year-body');
    var tabs = document.querySelectorAll('.tab');
    var lb = document.getElementById('lb'), lbImg = document.getElementById('lb-img'), lbCap = document.getElementById('lb-cap');
    var photos = [], idx = 0;

    function show(year) {
      var c = yearContent(year);
      body.innerHTML = c.html; photos = c.photos;
      tabs.forEach(function (t) { var on = t.getAttribute('data-y') === String(year); t.classList.toggle('is-on', on); t.setAttribute('aria-selected', on); });
      history.replaceState(null, '', '#' + year);
    }
    function open(i) {
      idx = (i + photos.length) % photos.length;
      lbImg.src = photos[idx].full || photos[idx].thumb; lbCap.textContent = photos[idx].caption || '';
      if (!lb.open) lb.showModal();
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.getAttribute('data-y')); }); });
    body.addEventListener('click', function (e) {
      var p = e.target.closest('.photo'); if (p) return open(Number(p.getAttribute('data-i')));
      var v = e.target.closest('.video');
      if (v) {
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.getAttribute('data-yt')) + '?autoplay=1';
        f.title = 'วิดีโอ'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
        f.className = 'video-frame'; v.replaceWith(f);
      }
    });
    lb.querySelector('.lb-close').addEventListener('click', function () { lb.close(); });
    lb.querySelector('.lb-prev').addEventListener('click', function () { open(idx - 1); });
    lb.querySelector('.lb-next').addEventListener('click', function () { open(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });

    var want = location.hash.replace('#', '');
    show(ys.indexOf(want) >= 0 ? want : ys[0]);
  }

  /* ---------- เริ่มทำงาน ---------- */
  function fail(msg) {
    document.getElementById('app').innerHTML = '<section class="block"><div class="wrap narrow"><p class="empty">' + esc(msg) + '</p></div></section>';
  }

  function start(strings) {
    T = strings;
    Q = /[?&]demo=1/.test(location.search) ? '?demo=1' : '';
    var page = document.body.getAttribute('data-page');
    C.loadAll().then(function (data) {
      D = data;
      var cfg = D.config || {};
      document.title = (page === 'index' ? '' : T.nav[{ members: 'members', results: 'results' }[page]] + ' | ') + (cfg.club_name || '');
      document.getElementById('site-header').innerHTML = header(cfg);
      document.getElementById('site-footer').innerHTML = footer(cfg);
      var app = document.getElementById('app');
      if (page === 'index') app.innerHTML = renderHome(cfg);
      else if (page === 'members') { app.innerHTML = renderMembers(); wireSearch(); }
      else if (page === 'results') {
        var r = renderResults();
        if (typeof r === 'string') app.innerHTML = r;
        else { app.innerHTML = r.html; wireResults(r.years); }
      }
    }).catch(function () { fail(T.loadError); });
  }

  window.CLUB.start = start;
})();
