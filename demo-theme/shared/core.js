// Shared behaviour for the demo pages: dark/light theme, the field picker, kind filters, helpers.
(function () {
  'use strict';
  var D = window.OB_DATA, root = document.documentElement;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // Theme: saved choice, else the page's own default. Set before first paint.
  var saved = null;
  try { saved = localStorage.getItem('ob2-theme'); } catch (e) {}
  root.setAttribute('data-theme', saved || root.dataset.default || 'dark');

  var P = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
    play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 5 .5c0 1.7-2.5 2-2.5 3.5M12 17h.01"/>',
    gear: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    bot: '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/>',
    chip: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    cog: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    book: '<path d="M2 5.5C4 4 8 4 12 6c4-2 8-2 10-.5V19c-2-1.5-6-1.5-10 .5-4-2-8-2-10-.5z"/><path d="M12 6v13.5"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    chev: '<path d="m15 18-6-6 6-6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    fit: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'
  };
  function icon(n, c) { return '<svg class="ic ' + (c || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (P[n] || '') + '</svg>'; }

  function hue(name) { var h = 0; for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360; return h; }
  function av(name, size) { return '<span class="av" style="--h:' + hue(name) + (size ? ';--s:' + size : '') + '" title="' + name + '">' + name.charAt(0) + '</span>'; }
  function field(id) { return D.fields.filter(function (f) { return f.id === id; })[0]; }
  function cover(item, cls) { var f = field(item.f); return '<div class="cover ' + (cls || '') + '" style="--h:' + item.h + '">' + icon(f.icon) + '</div>'; }

  function threads(f, k) { return D.threads.filter(function (t) { return (f === 'all' || t.f === f) && (k === 'all' || k === 'p' || k === 'c' || t.k === k); }); }
  function projects(f) { return D.projects.filter(function (p) { return f === 'all' || p.f === f; }); }
  function courses(f) { return D.courses.filter(function (c) { return f === 'all' || c.f === f; }); }
  function unanswered(n) { return D.threads.filter(function (t) { return t.k === 'q' && t.r === 0; }).slice(0, n || 99); }
  function kindTags(t) {
    var s = '<span class="kind kind-' + t.k + '">' + D.kinds[t.k] + '</span>';
    if (t.s) s += ' <span class="kind kind-s">محلول</span>';
    if (t.k === 'q' && t.r === 0) s += ' <span class="kind kind-u">بلا إجابة</span>';
    return s;
  }

  var KINDS = [['all', 'الكل'], ['q', 'أسئلة'], ['t', 'شروحات'], ['d', 'نقاشات']];
  var KINDS_X = KINDS.concat([['p', 'مشاريع'], ['c', 'دورات']]);
  function kindBar(cur, extra) {
    return '<div class="chips" role="group" aria-label="نوع المشاركات">' + (extra ? KINDS_X : KINDS).map(function (k) {
      return '<button type="button" class="chip' + (k[0] === cur ? ' is-on' : '') + '" data-kind="' + k[0] + '" aria-pressed="' + (k[0] === cur) + '">' + k[1] + '</button>';
    }).join('') + '</div>';
  }

  var NAV = ['الرئيسية', 'المنتديات', 'الجديد', 'المشاريع', 'الدورات', 'الأسئلة', 'الأعضاء'];
  function nav(cur) { return NAV.map(function (n, i) { return '<a href="#"' + (i === (cur || 0) ? ' aria-current="page"' : '') + '>' + n + '</a>'; }).join(''); }

  // State: current field + kind, kept in the URL hash and localStorage.
  var ids = D.fields.map(function (f) { return f.id; });
  var state = { field: root.hasAttribute('data-all') ? 'all' : (root.dataset.field || ids[0]), kind: 'all' };
  try { var sv = localStorage.getItem('ob2-field'); if (sv && ids.indexOf(sv) > -1 && !root.hasAttribute('data-all')) state.field = sv; } catch (e) {}
  var hp = new URLSearchParams(location.hash.slice(1));
  if (hp.get('f') && (ids.indexOf(hp.get('f')) > -1 || (hp.get('f') === 'all' && root.hasAttribute('data-all')))) state.field = hp.get('f');
  if (hp.get('k') && ['all', 'q', 't', 'd', 'p', 'c'].indexOf(hp.get('k')) > -1) state.kind = hp.get('k');

  var subs = [], syncs = [];
  function set(p) {
    Object.keys(p).forEach(function (k) { state[k] = p[k]; });
    try { localStorage.setItem('ob2-field', state.field); } catch (e) {}
    try { history.replaceState(null, '', '#f=' + state.field + '&k=' + state.kind); } catch (e) {}
    syncs.forEach(function (f) { f(); });
    subs.forEach(function (f) { f(state); });
  }
  function on(fn) { subs.push(fn); fn(state); }

  // Bind a group of elements carrying `attr` (e.g. data-field) to state[key].
  // role=tab gets arrow-key roving (RTL: left = next); elements with aria-expanded behave as accordion headers.
  function group(box, attr, key, pick) {
    function els() { return $$('[' + attr + ']', box); }
    function go(v) { if (pick) pick(v); else { var o = {}; o[key] = v; set(o); } }
    function sync() {
      els().forEach(function (el) {
        var onn = el.getAttribute(attr) === state[key];
        el.classList.toggle('is-on', onn);
        if (el.getAttribute('role') === 'tab') { el.setAttribute('aria-selected', onn); el.tabIndex = onn ? 0 : -1; }
        else if (el.hasAttribute('aria-expanded')) el.setAttribute('aria-expanded', onn);
        else el.setAttribute('aria-pressed', onn);
      });
    }
    box.addEventListener('click', function (e) {
      var el = e.target.closest('[' + attr + ']');
      if (el && box.contains(el)) go(el.getAttribute(attr));
    });
    box.addEventListener('keydown', function (e) {
      var el = e.target.closest('[role=tab][' + attr + ']');
      if (!el) return;
      var tabs = els().filter(function (x) { return x.getAttribute('role') === 'tab'; });
      var i = tabs.indexOf(el), d = { ArrowLeft: 1, ArrowDown: 1, ArrowRight: -1, ArrowUp: -1 }[e.key];
      if (e.key === 'Home') i = 0; else if (e.key === 'End') i = tabs.length - 1; else if (d) i = (i + d + tabs.length) % tabs.length; else return;
      e.preventDefault(); tabs[i].focus(); go(tabs[i].getAttribute(attr));
    });
    syncs.push(sync); sync();
  }

  // Kind chips are re-rendered with their list, so use delegation and restore focus.
  function bindKinds(box) {
    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-kind]');
      if (!b || !box.contains(b)) return;
      var k = b.getAttribute('data-kind');
      set({ kind: k });
      var n = box.querySelector('[data-kind="' + k + '"]'); if (n) n.focus({ preventScroll: true });
    });
  }

  function ready(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
  ready(function () {
    $$('[data-theme-toggle]').forEach(function (b) {
      b.innerHTML = icon('moon', 'i-moon') + icon('sun', 'i-sun');
      b.setAttribute('aria-label', 'تبديل الوضع الليلي والنهاري');
      b.addEventListener('click', function () {
        var n = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', n);
        try { localStorage.setItem('ob2-theme', n); } catch (e) {}
      });
    });
  });

  window.OB = { D: D, $: $, $$: $$, icon: icon, av: av, hue: hue, field: field, cover: cover, threads: threads, projects: projects, courses: courses,
    unanswered: unanswered, kindTags: kindTags, kindBar: kindBar, bindKinds: bindKinds, nav: nav, state: state, set: set, on: on, group: group, ready: ready };
})();
