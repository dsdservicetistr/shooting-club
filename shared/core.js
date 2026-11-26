// แกนกลาง: เรียก API, แคช, ตัวช่วยเล็ก ๆ
(function () {
  'use strict';
  var CFG = window.CLUB_CONFIG || {};
  var CACHE_MS = 5 * 60 * 1000;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function isDemo() {
    return /[?&]demo=1/.test(location.search) || !CFG.API_URL || CFG.API_URL.indexOf('PASTE') === 0;
  }

  function loadAll() {
    if (isDemo()) return Promise.resolve(window.CLUB_DEMO);
    var key = 'club:all';
    try {
      var c = JSON.parse(sessionStorage.getItem(key) || 'null');
      if (c && Date.now() - c.t < CACHE_MS) return Promise.resolve(c.d);
    } catch (e) { /* ไม่เป็นไร */ }
    return fetch(CFG.API_URL + '?action=all')
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j.ok) throw new Error(j.error || 'api error');
        try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d: j.data })); } catch (e) { }
        return j.data;
      });
  }

  function isOn(v) { return String(v) === '1' || String(v).toLowerCase() === 'true'; }

  function telHref(p) {
    var parts = String(p || '').split('ต่อ');
    var main = parts[0].replace(/[^\d+]/g, '');
    var ext = (parts[1] || '').replace(/\D/g, '');
    return 'tel:' + main + (ext ? ',' + ext : '');
  }

  function thaiDate(iso) {
    var m = String(iso || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return String(iso || '');
    var months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    return Number(m[3]) + ' ' + months[Number(m[2]) - 1] + ' ' + (Number(m[1]) + 543);
  }

  window.CLUB = { esc: esc, isDemo: isDemo, loadAll: loadAll, isOn: isOn, telHref: telHref, thaiDate: thaiDate };
})();
