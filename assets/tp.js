// Dracid's Lists: the title pages' script (the sidebar, What's new and the page). Written by every export.
var _TPK="7c040edb9c2673bc9faf6701dca8f35c";
(function(){var s=document.getElementById("sbx");if(!s)return;var t=document.createElement("div");t.innerHTML="<div class=\"sb-topbar\"><a href=\"./\" class=\"sb-tb-brand\">Dracid's Lists</a></div><button class=\"sb-toggle\" id=\"sb-toggle\" onclick=\"toggleSidebar()\" aria-label=\"Menu\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 7h16M4 12h16M4 17h16\"/></svg></button><div class=\"sb-overlay\" id=\"sb-overlay\" onclick=\"closeSidebar()\"></div><nav class=\"sidebar\" id=\"sidebar\"><a href=\"./\" class=\"logo\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#79b8ff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8 4h11v16H8zM5 7v13h11\"/><path d=\"M11 9h5M11 13h5\"/></svg>Dracid's Lists</a><a href=\"./\"><svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11l9-7 9 7\"/><path d=\"M5 10v10h14V10\"/></svg>Home</a><a href=\"calendar\"><svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/></svg>Calendar</a><a href=\"search\"><svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M20 20l-3.5-3.5\"/></svg>Search all lists</a><a href=\"#\" onclick=\"openStremio();return false;\"><svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3l9 9-9 9-9-9z\"/></svg>Add to Stremio</a><a href=\"#\" onclick=\"openWhatsNew();return false;\"><svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10 21h4\"/></svg>What's new<span class=\"sb-wn-dot\" id=\"sb-wn-dot\"></span></a><a href=\"#\" class=\"sb-app\" data-pwa=\"item\" hidden onclick=\"return dlInstall()\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"7\" y=\"2.5\" width=\"10\" height=\"19\" rx=\"2.2\"/><path d=\"M11 18h2\"/></svg>Install the app</a><div class=\"sb-divider\"></div><a href=\"upcoming-movies\"><span class=\"sb-name\">Upcoming Movies</span><span class=\"sb-new\" data-nl=\"upcoming-movies\"></span><span class=\"sb-count\" data-lid=\"upcoming-movies\"></span></a><a href=\"upcoming-series\"><span class=\"sb-name\">Upcoming Series</span><span class=\"sb-new\" data-nl=\"upcoming-series\"></span><span class=\"sb-count\" data-lid=\"upcoming-series\"></span></a><a href=\"released-movies\"><span class=\"sb-name\">2026 Released Movies</span><span class=\"sb-new\" data-nl=\"released-movies\"></span><span class=\"sb-count\" data-lid=\"released-movies\"></span></a><a href=\"released-series\"><span class=\"sb-name\">2026 Released Series</span><span class=\"sb-new\" data-nl=\"released-series\"></span><span class=\"sb-count\" data-lid=\"released-series\"></span></a><a href=\"mrgyy2j771tu\"><span class=\"sb-name\">2025 Released Movies</span><span class=\"sb-new\" data-nl=\"mrgyy2j771tu\"></span><span class=\"sb-count\" data-lid=\"mrgyy2j771tu\"></span></a><a href=\"mrgf83ntklo4\"><span class=\"sb-name\">2025 Released Series</span><span class=\"sb-new\" data-nl=\"mrgf83ntklo4\"></span><span class=\"sb-count\" data-lid=\"mrgf83ntklo4\"></span></a><a href=\"mrqie5t83la0\"><span class=\"sb-name\">2024 Released Movies</span><span class=\"sb-new\" data-nl=\"mrqie5t83la0\"></span><span class=\"sb-count\" data-lid=\"mrqie5t83la0\"></span></a><a href=\"mrqf9exnrpn6\"><span class=\"sb-name\">2024 Released Series</span><span class=\"sb-new\" data-nl=\"mrqf9exnrpn6\"></span><span class=\"sb-count\" data-lid=\"mrqf9exnrpn6\"></span></a><div class=\"sb-nwln\" id=\"sb-nwln\"></div><div class=\"sb-coming\" id=\"sb-coming\"></div><div class=\"sb-fresh\" id=\"sb-fresh\"></div><button class=\"sb-feedback-btn\" id=\"sb-feedback-btn\" onclick=\"openFeedback()\"><svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/></svg>Feedback</button></nav><div class=\"sb-fb-overlay\" id=\"sb-fb-overlay\" onclick=\"if(event.target===this)closeFeedback()\"><div class=\"sb-fb-modal\"><div class=\"sb-fb-hdr\"><span>💬 Feedback</span><span class=\"sb-fb-close\" onclick=\"closeFeedback()\">✕</span></div><form id=\"feedback-form\" action=\"https://formspree.io/f/mqeopybq\" method=\"POST\"><textarea name=\"message\" placeholder=\"Leave a comment, suggestion or question…\" required class=\"feedback-textarea\"></textarea><div class=\"feedback-row\"><input type=\"email\" name=\"email\" placeholder=\"Your email (optional, needed only for replying purposes)\" class=\"feedback-email\"><button type=\"submit\" class=\"feedback-btn\">Send</button></div><input type=\"hidden\" name=\"_subject\" value=\"Feedback on: Dracid's Lists\"></form><div id=\"feedback-thanks\" style=\"display:none;color:#4caf50;font-size:13px;padding:10px 0;\">✓ Thanks for your feedback!</div></div></div><div class=\"sb-fb-overlay\" id=\"sb-stremio-overlay\" onclick=\"if(event.target===this)closeStremio()\"><div class=\"sb-fb-modal\"><div class=\"sb-fb-hdr\"><span><svg width=\"20\" height=\"20\" viewBox=\"0 0 48 48\" style=\"vertical-align:-4px;margin-right:5px;\"><defs><linearGradient id=\"stGh\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#1d4ed8\"/><stop offset=\"1\" stop-color=\"#7c5cff\"/></linearGradient></defs><rect x=\"10\" y=\"10\" width=\"28\" height=\"28\" rx=\"6\" transform=\"rotate(45 24 24)\" fill=\"url(#stGh)\"/><path d=\"M20 17L32 24L20 31Z\" fill=\"#fff\"/></svg>Add to Stremio</span><span class=\"sb-fb-close\" onclick=\"closeStremio()\">✕</span></div><div style=\"font-size:13px;color:#8b949e;line-height:1.55;margin-bottom:14px;\">Add my released movie &amp; series lists to Stremio as catalogs that stay in sync. Install everything, or pick just the lists you want. No account needed.</div><div class=\"sb-stremio-actions\"><a class=\"sb-stremio-install\" href=\"stremio://dracid77.github.io/lists/addon/manifest.json\">▶ Install all lists</a><a class=\"sb-stremio-config\" href=\"https://dracid-lists-addon.dracid.workers.dev/configure\" target=\"_blank\" rel=\"noopener\">⚙️ Choose which lists →</a></div><input class=\"sb-stremio-url\" readonly value=\"https://dracid77.github.io/lists/addon/manifest.json\" onclick=\"this.select()\" title=\"Click to select, then copy\"><ol class=\"sb-stremio-steps\"><li><b>Install all lists</b> — one click, everything included (or copy the link above for web Stremio).</li><li><b>Choose which lists</b> — tick the lists you want and set their order, then install from there.</li><li>In Stremio, open <b>Discover</b> — the lists appear as catalogs.</li></ol></div></div><div class=\"wn-ov\" id=\"sb-wn-overlay\" onclick=\"if(event.target===this)closeWhatsNew()\"><aside class=\"wn-dr\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"wn-h\"><div class=\"wn-top\"><div class=\"wn-hd\"><span class=\"wn-bell\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10 21h4\"/></svg></span><div class=\"wn-ht\"><h2 id=\"wn-h\">What's new</h2><span class=\"wn-sub\" id=\"wn-sub\">Changes to the lists over the last three weeks</span></div><button type=\"button\" class=\"wn-x\" id=\"wn-x\" onclick=\"closeWhatsNew()\" aria-label=\"Close What's new\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"/></svg></button></div><div class=\"wn-tiles\" id=\"sb-wn-chips\" role=\"group\" aria-label=\"Show\"></div><button type=\"button\" class=\"wn-nb\" id=\"wn-nb\" hidden aria-pressed=\"false\"></button></div><div class=\"wn-body\" id=\"sb-wn-body\"></div></aside></div>";while(t.firstChild)s.parentNode.insertBefore(t.firstChild,s);s.parentNode.removeChild(s);})();
function _tpSlug(t) {
            var s = String(t == null ? '' : t).replace(/\s+AKA\s+[\s\S]*$/i, '');
            try { s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); } catch (e) {}
            s = s.toLowerCase().replace(/&/g, ' and ').replace(/['\u2018\u2019`]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            if (s.length > 60) { s = s.slice(0, 60); var c = s.lastIndexOf('-'); if (c > 20) s = s.slice(0, c); }
            return s;
        }
function _tpPath(ty, id, t, s) {
            var tv = ty === 'tv' || ty === 1 || ty === true, g = _tpSlug(t);
            return (tv ? 'tv' : 'movie') + '/' + id + (g ? '-' + g : '') + (tv && s ? '-s' + s : '');
        }
var WNURL="/lists/whatsnew.json";var CMURL="/lists/coming.json";function _cmIso(d) { var z = new Date(d); z.setMinutes(z.getMinutes() - z.getTimezoneOffset()); return z.toISOString().slice(0, 10); }
function _cmEsc(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
function _cmDayLabel(iso) {
  var t = new Date(); t.setHours(0, 0, 0, 0);
  var d = new Date(iso + "T00:00:00"), diff = Math.round((d - t) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}
function _cmRenderFresh(d) {
  var el = document.getElementById("sb-fresh");
  if (!el || !d || !d.updated) return;
  var t = new Date(); t.setHours(0, 0, 0, 0);
  var u = new Date(d.updated), ud = new Date(d.updated); ud.setHours(0, 0, 0, 0);
  var days = Math.round((t - ud) / 86400000);
  var when = days <= 0 ? "today" : days === 1 ? "yesterday" : days < 7 ? days + " days ago" : u.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  el.innerHTML = "<span class=\"sb-fresh-dot\"></span>Updated " + when + (d.total ? " &middot; " + Number(d.total).toLocaleString("en-GB") + " titles" : "");
}
function _cmRender(d) {
  var box = document.getElementById("sb-coming");
  if (!box || !d || !d.items) return;
  var today = _cmIso(new Date()), end = _cmIso(new Date(Date.now() + 7 * 86400000));
  var items = d.items.filter(function (e) { return e.d >= today && e.d <= end; })
    .sort(function (a, b) { return a.d.localeCompare(b.d) || String(a.ti).localeCompare(String(b.ti)); });
  if (!items.length) return;
  var html = "", last = "";
  items.forEach(function (e) {
    if (e.d !== last) { html += "<div class=\"cm-day\">" + _cmDayLabel(e.d) + "</div>"; last = e.d; }
    var type = e.ty === "tv"
      ? "<span class=\"cm-type cm-tv\">Series" + (e.s ? " &middot; S" + e.s : "") + "</span>"
      : "<span class=\"cm-type cm-mv\">Movie</span>";
    html += "<a class=\"cm-row\" href=\"" + _cmEsc(_tpPath(e.ty, e.id, e.ti, e.s)) + "\" title=\"" + _cmEsc(e.ti) + "\">"
      + (e.p ? "<img src=\"" + _cmEsc(e.p) + "\" alt=\"\" loading=\"lazy\">" : "<span class=\"cm-noimg\"></span>")
      + (function () {
          var m = String(e.ti || "").split(/\s+AKA\s+/i);
          return "<span class=\"cm-info\"><span class=\"cm-ti\">" + _cmEsc(m[0]) + "</span>"
            + (m[1] ? "<span class=\"cm-aka\">" + _cmEsc(m.slice(1).join(" AKA ")) + "</span>" : "");
        })()
      + "<span class=\"cm-meta\">" + type + (e.pl ? "<span class=\"cm-pl\">" + _cmEsc(e.pl) + "</span>" : "") + "</span></span></a>";
  });
  box.innerHTML = "<div class=\"cm-hdr\">Next 7 days</div>"
    + "<div class=\"cm-view\" id=\"cm-view\"><div class=\"cm-track\" id=\"cm-track\">" + html + "</div></div>"
    + "<a class=\"cm-all\" href=\"calendar\">Full calendar &rarr;</a>";
  box.classList.add("on");
  var view = document.getElementById("cm-view"), track = document.getElementById("cm-track");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function setup() {
    track.classList.remove("roll"); track.style.animationDuration = "";
    track.innerHTML = html;
    view.classList.remove("static");
    if (reduce) { view.classList.add("static"); return; }
    var h = track.scrollHeight;
    if (h <= view.clientHeight + 4) { view.classList.add("fits"); return; }   // fits → no need to move
    view.classList.remove("fits");
    // two identical copies (each followed by the same gap) → -50% loops seamlessly
    track.innerHTML = html + "<div class=\"cm-gap\"></div><div aria-hidden=\"true\">" + html + "</div><div class=\"cm-gap\"></div>";
    track.style.animationDuration = Math.max(20, Math.round((h + 40) / 16)) + "s";   // ~16 px per second
    track.classList.add("roll");
  }
  setup();
  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(setup, 250); });
  // touch devices: tap the empty area to pause/resume (links still work)
  view.addEventListener("touchstart", function (ev) { if (!ev.target.closest("a")) view.classList.toggle("paused"); }, { passive: true });
}
fetch(CMURL, { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (d) { _cmRenderFresh(d); _cmRender(d); }).catch(function () {});
var _wnData = null, _wnFilter = 'all', _wnSeenAtOpen = 0, _wnOnlyNew = false, _wnAll = false, _wnPlay = '', _wnBack = null;
var _wnMS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var _wnDS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var _wnDL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var _wnIc = function (d, w, sw, fill) { return '<svg width="' + w + '" height="' + w + '" viewBox="0 0 24 24" fill="' + (fill || 'none') + '" stroke="' + (fill ? 'none' : 'currentColor') + '" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>'; };
var _wnPlayIc = _wnIc('<path d="M7 4.5v15l12.5-7.5z"/>', 11, 0, 'currentColor');
function _wnSeen() { try { return parseInt(localStorage.getItem('dl_wn_seen') || '0', 10) || 0; } catch (e) { return 0; } }
function _wnEsc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function _wnP2(n) { return (n < 10 ? '0' : '') + n; }
function _wnDayKey(ts) { var d = new Date(ts); return d.getFullYear() + '-' + _wnP2(d.getMonth() + 1) + '-' + _wnP2(d.getDate()); }
function _wnOf(iso) { var a = String(iso).split('-'); return new Date(+a[0], +a[1] - 1, +a[2]); }
function _wnDate(iso) {
if (!iso) return 'TBA';
var d = _wnOf(iso);
return _wnDS[d.getDay()] + ' ' + d.getDate() + ' ' + _wnMS[d.getMonth()] + (d.getFullYear() !== new Date().getFullYear() ? ' ' + d.getFullYear() : '');
}
function _wnHead(ts) {
var t = new Date(); t.setHours(0, 0, 0, 0);
var d = new Date(ts), a = new Date(ts); a.setHours(0, 0, 0, 0);
var n = Math.round((t - a) / 86400000), dm = d.getDate() + ' ' + _wnMS[d.getMonth()];
if (n <= 0) return ['Today', _wnDS[d.getDay()] + ' ' + dm];
if (n === 1) return ['Yesterday', _wnDS[d.getDay()] + ' ' + dm];
if (n < 7) return [_wnDL[d.getDay()], dm];
return [_wnDS[d.getDay()] + ' ' + dm + (d.getFullYear() !== new Date().getFullYear() ? ' ' + d.getFullYear() : ''), ''];
}
function _wnTags(e) {
var tg = (e.tags || []).filter(function (t) { return t && t.k && !(t.k === 'date' && t.from === t.to); });
if (tg.some(function (t) { return t.k === 'added'; })) tg = tg.filter(function (t) { return t.k !== 'date'; });
return tg;
}
function _wnHas(e, k) { return e.tags.some(function (t) { return t.k === k; }); }
function _wnKind(e) { return _wnFilter !== 'all' ? _wnFilter : _wnHas(e, 'released') ? 'released' : _wnHas(e, 'added') ? 'added' : _wnHas(e, 'date') ? 'date' : 'trailer'; }
function _wnImg(p, w) { return !p ? '' : p.charAt(0) === '/' ? 'https://image.tmdb.org/t/p/' + w + p : String(p).replace(/\/t\/p\/w\d+\//, '/t/p/' + w + '/'); }
function _wnHref(e) { return _tpPath(e.ty, e.id, e.ti, e.s); }
function _wnList(id) {
var ls = (_wnData && _wnData.lists) || [];
for (var i = 0; i < ls.length; i++) if (ls[i].id === id) return { i: i, n: ls[i].n, c: ls[i].c || '#58a6ff' };
return { i: 99, n: '', c: '#58a6ff' };
}
function _wnName(e) {
var m = String(e.ti || '').split(/\s+AKA\s+/i);
return { t: m[0], aka: m.slice(1).join(' AKA ') };
}
function _wnLn(e) { var l = _wnList(e.l); return '<span class="wn-ln"><i style="background:' + _wnEsc(l.c) + '"></i>' + _wnEsc(e.ln || l.n) + '</span>'; }
function _wnSn(e) { return e.ty === 'tv' && e.s ? '<span class="wn-sn">S' + _wnP2(+e.s) + '</span>' : ''; }
function _wnWhen(e) {
var up = /upcoming/i.test(e.l || ''), pl = e.pl || (!up && e.ty !== 'tv' && e.d && (new Date() - _wnOf(e.d)) / 86400000 <= 31 ? 'VOD' : '');
return (up ? 'Coming ' : 'Out ') + _wnDate(e.d) + (pl ? ' · <em>' + _wnEsc(pl) + '</em>' : '');
}
function _wnMove(t) {
if (!t.from) return { a: '', b: _wnDate(t.to), s: 'Date set' };
if (!t.to) return { a: _wnDate(t.from), b: 'TBA', s: 'Date pulled' };
var n = Math.round((_wnOf(t.to) - _wnOf(t.from)) / 86400000), m = Math.abs(n), w = n > 0 ? 'later' : 'earlier';
var s = m === 1 ? 'a day ' + w : m % 7 === 0 && m <= 28 ? (m === 7 ? 'a week ' : m / 7 + ' weeks ') + w : m < 60 ? m + ' days ' + w : m < 330 ? 'about ' + Math.round(m / 30.4) + ' months ' + w : 'about a year ' + w;
if (_wnOf(t.from).getFullYear() !== _wnOf(t.to).getFullYear()) {
var f = _wnOf(t.from), g = _wnOf(t.to);
return { a: _wnDS[f.getDay()] + ' ' + f.getDate() + ' ' + _wnMS[f.getMonth()] + ' ' + f.getFullYear(), b: _wnDS[g.getDay()] + ' ' + g.getDate() + ' ' + _wnMS[g.getMonth()] + ' ' + g.getFullYear(), s: s };
}
return { a: _wnDate(t.from), b: _wnDate(t.to), s: s };
}
function _wnGl(cls, label, n) {
var ic = cls === 'rel' ? _wnIc('<path d="M7 4.5v15l12.5-7.5z"/>', 12, 0, 'currentColor')
: cls === 'add' ? _wnIc('<path d="M12 5v14M5 12h14"/>', 12, 3)
: cls === 'date' ? _wnIc('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>', 12, 2.6)
: _wnIc('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>', 12, 2.4);
return '<div class="wn-gl"><span class="wn-gi ' + cls + '">' + ic + '</span>' + label + '<small>' + n + '</small></div>';
}
function _wnRel(e, nw) {
var nm = _wnName(e), h = _wnEsc(_wnHref(e)), key = _wnEsc(e.key || '');
return '<div class="wn-row wn-rel" data-key="' + key + '">' + (nw ? '<i class="wn-nd" title="New since your last visit"></i>' : '')
+ '<a class="wn-po" href="' + h + '" tabindex="-1" aria-hidden="true">' + (e.p ? '<img src="' + _wnEsc(_wnImg(e.p, 'w185')) + '" alt="" loading="lazy">' : '') + '</a>'
+ '<div class="wn-tx"><a class="wn-ti" href="' + h + '">' + _wnEsc(nm.t) + _wnSn(e) + '</a>' + (nm.aka ? '<span class="wn-aka">AKA ' + _wnEsc(nm.aka) + '</span>' : '')
+ _wnLn(e) + '<span class="wn-mt">' + _wnWhen(e) + (_wnFilter === 'all' && _wnHas(e, 'trailer') ? ' · <b>new trailer</b>' : '') + '</span></div>'
+ '<div class="wn-rs">' + (e.sc ? '<span class="wn-sc" style="color:' + _wnEsc(e.cl || '#e6edf3') + '">&#9733; ' + Number(e.sc).toFixed(1) + '</span>' : '<span class="wn-nosc">no score yet</span>')
+ (e.k ? '<button type="button" class="wn-tb" data-play="' + key + '" data-k="' + _wnEsc(e.k) + '" aria-expanded="false">' + _wnPlayIc + 'Trailer</button>' : '') + '</div></div>';
}
function _wnPc(e, nw) {
var nm = _wnName(e);
return '<a class="wn-pc" href="' + _wnEsc(_wnHref(e)) + '" title="' + _wnEsc(e.ti) + '"><span class="wn-pp">' + (e.p ? '<img src="' + _wnEsc(_wnImg(e.p, 'w185')) + '" alt="" loading="lazy">' : '')
+ (nw ? '<i class="wn-nd2" title="New since your last visit"></i>' : '') + (e.ty === 'tv' && e.s ? '<span class="wn-ss">S' + _wnP2(+e.s) + '</span>' : '')
+ (e.sc ? '<span class="wn-sb" style="color:' + _wnEsc(e.cl || '#e6edf3') + '">&#9733; ' + Number(e.sc).toFixed(1) + '</span>' : '') + '</span>'
+ '<b>' + _wnEsc(nm.t) + '</b><span class="wn-d">' + _wnDate(e.d) + '</span>' + (e.pl ? '<span class="wn-pl">' + _wnEsc(e.pl) + '</span>' : '') + '</a>';
}
function _wnDt(e, nw) {
var nm = _wnName(e), h = _wnEsc(_wnHref(e)), t = e.tags.filter(function (x) { return x.k === 'date'; })[0] || {}, mv = _wnMove(t);
return '<div class="wn-row wn-dt">' + (nw ? '<i class="wn-nd" title="New since your last visit"></i>' : '')
+ '<a class="wn-po" href="' + h + '" tabindex="-1" aria-hidden="true">' + (e.p ? '<img src="' + _wnEsc(_wnImg(e.p, 'w185')) + '" alt="" loading="lazy">' : '') + '</a>'
+ '<div class="wn-tx"><a class="wn-ti" href="' + h + '">' + _wnEsc(nm.t) + _wnSn(e) + '</a>' + _wnLn(e) + '</div>'
+ '<div class="wn-chg">' + (mv.a ? '<s>' + _wnEsc(mv.a) + '</s>' + _wnIc('<path d="M5 12h14M13 6l6 6-6 6"/>', 14, 2.4) : '') + '<b>' + _wnEsc(mv.b) + '</b><small>' + _wnEsc(mv.s) + '</small></div></div>';
}
function _wnTr(e, nw) {
var nm = _wnName(e), h = _wnEsc(_wnHref(e)), key = _wnEsc(e.key || ''), th = e.b ? 'https://image.tmdb.org/t/p/w300' + e.b : _wnImg(e.p, 'w185');
return '<div class="wn-row wn-trr" data-key="' + key + '">' + (nw ? '<i class="wn-nd" title="New since your last visit"></i>' : '')
+ (e.k ? '<button type="button" class="wn-th" data-play="' + key + '" data-k="' + _wnEsc(e.k) + '" aria-expanded="false" aria-label="Play the trailer: ' + _wnEsc(nm.t) + '"' + (th ? ' style="background-image:url(\'' + _wnEsc(th) + '\')"' : '') + '><span>' + _wnIc('<path d="M7 4.5v15l12.5-7.5z"/>', 13, 0, '#fff') + '</span></button>'
: '<a class="wn-th" href="' + h + '"' + (th ? ' style="background-image:url(\'' + _wnEsc(th) + '\')"' : '') + ' aria-hidden="true" tabindex="-1"></a>')
+ '<div class="wn-tx"><a class="wn-ti" href="' + h + '">' + _wnEsc(nm.t) + _wnSn(e) + '</a>' + _wnLn(e) + '<span class="wn-mt">' + _wnWhen(e) + '</span></div></div>';
}
function _wnDay(d, isNew) {
var hd = _wnHead(d.ts), rel = [], adds = {}, ao = [], dates = [], trs = [];
d.items.forEach(function (e) {
var k = _wnKind(e);
if (k === 'released') rel.push(e);
else if (k === 'added') { if (!adds[e.l]) { adds[e.l] = []; ao.push(e.l); } adds[e.l].push(e); }
else if (k === 'date') dates.push(e);
else trs.push(e);
});
var h = '<section class="wn-day"><div class="wn-dh"><b>' + _wnEsc(hd[0]) + '</b>' + (hd[1] ? '<span>' + _wnEsc(hd[1]) + '</span>' : '') + '<i></i><small>' + d.items.length + (d.items.length === 1 ? ' change' : ' changes') + '</small></div>';
if (rel.length) h += _wnGl('rel', 'Out now', rel.length) + rel.map(function (e) { return _wnRel(e, isNew(e)); }).join('');
ao.sort(function (a, b) { return _wnList(a).i - _wnList(b).i; }).forEach(function (l) {
var its = adds[l].slice().sort(function (a, b) { return (a.d || '9999') < (b.d || '9999') ? -1 : (a.d || '9999') > (b.d || '9999') ? 1 : 0; });
var li = _wnList(l);
h += _wnGl('add', 'Added to <span style="color:' + _wnEsc(li.c) + '">' + _wnEsc(its[0].ln || li.n) + '</span>', its.length)
+ '<div class="wn-strip">' + its.map(function (e) { return _wnPc(e, isNew(e)); }).join('') + '</div>';
});
if (dates.length) h += _wnGl('date', 'New dates', dates.length) + dates.map(function (e) { return _wnDt(e, isNew(e)); }).join('');
if (trs.length) h += _wnGl('tr', 'New trailers', trs.length) + trs.map(function (e) { return _wnTr(e, isNew(e)); }).join('');
return h + '</section>';
}
function _wnRender() {
var box = document.getElementById('sb-wn-body'), tiles = document.getElementById('sb-wn-chips'), nb = document.getElementById('wn-nb');
if (!box) return;
_wnPlay = '';
var all = ((_wnData && _wnData.items) || []).map(function (e) { var x = {}; for (var k in e) x[k] = e[k]; x.tags = _wnTags(e); return x; })
.filter(function (e) { return e.tags.length; });
if (!all.length) {
box.innerHTML = '<div class="wn-empty">' + (_wnData ? 'Nothing new in the last few weeks.' : 'Loading…') + '</div>';
if (tiles) tiles.innerHTML = '';
if (nb) nb.hidden = true;
return;
}
var cnt = { all: all.length };
all.forEach(function (e) { e.tags.forEach(function (t) { cnt[t.k] = (cnt[t.k] || 0) + 1; }); });
var kinds = [['all', 'All', '#e6edf3'], ['added', 'Added', '#3fb950'], ['released', 'Released', '#58a6ff'], ['date', 'Dates', '#e3b341'], ['trailer', 'Trailers', '#f778ba']];
if (!cnt[_wnFilter]) _wnFilter = 'all';
if (tiles) tiles.innerHTML = kinds.filter(function (k) { return k[0] === 'all' || cnt[k[0]]; }).map(function (k) {
var on = _wnFilter === k[0];
return '<button type="button" class="wn-tile' + (on ? ' on' : '') + '" data-k="' + k[0] + '" aria-pressed="' + on + '" style="--c:' + k[2] + '"><b>' + cnt[k[0]] + '</b><span>' + k[1] + '</span></button>';
}).join('');
var isNew = function (e) { return !!_wnSeenAtOpen && e.ts > _wnSeenAtOpen; };
var nNew = all.filter(isNew).length;
if (nb) {
if (nNew) {
var sd = new Date(_wnSeenAtOpen);
nb.hidden = false;
nb.classList.toggle('on', _wnOnlyNew);
nb.setAttribute('aria-pressed', _wnOnlyNew ? 'true' : 'false');
nb.innerHTML = '<i></i><span><b>' + nNew + ' new</b> since your last visit, ' + _wnDS[sd.getDay()] + ' ' + sd.getDate() + ' ' + _wnMS[sd.getMonth()] + '</span><em>' + (_wnOnlyNew ? 'Show everything' : 'Show only these') + '</em>';
} else { nb.hidden = true; _wnOnlyNew = false; }
}
var list = all.filter(function (e) { return (!_wnOnlyNew || isNew(e)) && (_wnFilter === 'all' || _wnHas(e, _wnFilter)); });
var days = [], by = {};
list.forEach(function (e) {
var k = _wnDayKey(e.ts);
if (!by[k]) { by[k] = { ts: e.ts, items: [] }; days.push(by[k]); }
by[k].items.push(e);
});
var shown = days, rest = 0, restTs = 0;
if (!_wnAll && days.length > 1) {
var lim = Date.now() - 7 * 86400000, n = 0, cut = days.length;
for (var i = 0; i < days.length; i++) {
if (i > 0 && (days[i].ts < lim || n >= 40)) { cut = i; break; }
n += days[i].items.length;
}
shown = days.slice(0, cut);
days.slice(cut).forEach(function (d) { rest += d.items.length; restTs = d.ts; });
}
var h = list.length ? shown.map(function (d) { return _wnDay(d, isNew); }).join('')
: '<div class="wn-empty">' + (_wnOnlyNew ? 'Nothing like that since your last visit.' : 'Nothing like that in the last three weeks.') + '</div>';
if (rest) {
var rd = new Date(restTs);
h += '<button type="button" class="wn-more" data-act="more">' + _wnIc('<path d="M6 9l6 6 6-6"/>', 14, 2.4) + 'Show earlier: ' + rest + ' more, back to ' + _wnDS[rd.getDay()] + ' ' + rd.getDate() + ' ' + _wnMS[rd.getMonth()] + '</button>';
}
h += '<div class="wn-rss">' + _wnIc('<path d="M5 5a14 14 0 0 1 14 14M5 11a8 8 0 0 1 8 8"/><circle cx="6" cy="18" r="1.5"/>', 14, 2.2) + '<span>The same changes come in the <a href="feed.xml">RSS feed</a>, for a feed reader.</span></div>';
box.innerHTML = h;
}
function _wnStop() {
var b = document.getElementById('sb-wn-body');
if (b) {
b.querySelectorAll('.wn-vid').forEach(function (v) { v.parentNode.removeChild(v); });
b.querySelectorAll('[data-play]').forEach(function (x) { x.setAttribute('aria-expanded', 'false'); x.classList.remove('on'); });
}
_wnPlay = '';
}
function _wnToggle(btn) {
var key = btn.getAttribute('data-play'), k = btn.getAttribute('data-k'), was = _wnPlay === key;
_wnStop();
if (was || !k) return;
var row = btn.closest('.wn-row'); if (!row) return;
var v = document.createElement('div');
v.className = 'wn-vid';
v.innerHTML = '<iframe src="https://www.youtube.com/embed/' + encodeURIComponent(k) + '?autoplay=1&rel=0" title="Trailer" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe><button type="button" class="wn-vx" aria-label="Close the trailer">&#10005;</button>';
row.parentNode.insertBefore(v, row.nextSibling);
btn.setAttribute('aria-expanded', 'true'); btn.classList.add('on');
_wnPlay = key;
}
function openWhatsNew() {
var o = document.getElementById('sb-wn-overlay');
if (!o) return;
_wnSeenAtOpen = _wnSeen(); _wnOnlyNew = false; _wnAll = false;
_wnBack = document.activeElement;
_wnRender();
var b = document.getElementById('sb-wn-body'); if (b) b.scrollTop = 0;
o.classList.add('open');
document.documentElement.classList.add('wn-lock');
if (typeof closeSidebar === 'function') closeSidebar();
try { if (_wnData && _wnData.latest) localStorage.setItem('dl_wn_seen', String(_wnData.latest)); } catch (e) {}
var dot = document.getElementById('sb-wn-dot'); if (dot) dot.style.display = 'none';
setTimeout(function () { var x = document.getElementById('wn-x'); if (x) try { x.focus({ preventScroll: true }); } catch (e) { x.focus(); } }, 40);
}
function closeWhatsNew() {
var o = document.getElementById('sb-wn-overlay');
if (!o || !o.classList.contains('open')) return;
_wnStop();
o.classList.remove('open');
document.documentElement.classList.remove('wn-lock');
if (_wnBack && _wnBack.focus && document.contains(_wnBack)) try { _wnBack.focus({ preventScroll: true }); } catch (e) {}
_wnBack = null;
}
fetch(WNURL, { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (d) {
_wnData = d;
(window._wnHooks || []).forEach(function (f) { try { f(d); } catch (e) {} });
var dot = document.getElementById('sb-wn-dot');
if (dot && d && d.latest && d.latest > _wnSeen()) dot.style.display = 'inline-block';
var o = document.getElementById('sb-wn-overlay');
if (o && o.classList.contains('open')) _wnRender();
}).catch(function () {});
(function () {
var o = document.getElementById('sb-wn-overlay');
if (!o) return;
o.addEventListener('click', function (ev) {
var t = ev.target;
if (!t || !t.closest) return;
var b = t.closest('.wn-tile');
if (b) { _wnFilter = b.getAttribute('data-k') || 'all'; _wnAll = false; _wnRender(); return; }
if (t.closest('#wn-nb')) { _wnOnlyNew = !_wnOnlyNew; _wnAll = false; _wnRender(); return; }
if (t.closest('[data-act="more"]')) { _wnAll = true; var y = document.getElementById('sb-wn-body').scrollTop; _wnRender(); document.getElementById('sb-wn-body').scrollTop = y; return; }
if (t.closest('.wn-vx')) { _wnStop(); return; }
b = t.closest('[data-play]');
if (b) { ev.preventDefault(); _wnToggle(b); return; }
var a = t.closest('a[href]');
if (a && !ev.defaultPrevented && !ev.ctrlKey && !ev.metaKey && !ev.shiftKey && !ev.altKey && !ev.button) _wnStop();
});
})();
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeWhatsNew(); });
fetch("/lists/counts.json",{cache:"no-store"}).then(function(r){return r.json();}).then(function(c){document.querySelectorAll(".sb-count[data-lid]").forEach(function(el){var v=c[el.dataset.lid];if(v!==undefined)el.textContent=v;});}).catch(function(){});var _isMobileNav=function(){return window.innerWidth<=768;};function toggleSidebar(){if(_isMobileNav()){var s=document.getElementById("sidebar");var o=document.getElementById("sb-overlay");if(s)s.classList.toggle("open");if(o)o.classList.toggle("open");}else{var pl=document.querySelector(".page-layout");if(pl)pl.classList.toggle("sb-collapsed");}}function closeSidebar(){if(!_isMobileNav())return;var s=document.getElementById("sidebar");var o=document.getElementById("sb-overlay");if(s)s.classList.remove("open");if(o)o.classList.remove("open");}document.querySelectorAll(".sidebar a").forEach(function(a){a.addEventListener("click",closeSidebar);});function openFeedback(){var o=document.getElementById("sb-fb-overlay");if(o)o.classList.add("open");closeSidebar();}function closeFeedback(){var o=document.getElementById("sb-fb-overlay");if(o)o.classList.remove("open");}function openStremio(){var o=document.getElementById("sb-stremio-overlay");if(o)o.classList.add("open");closeSidebar();}function closeStremio(){var o=document.getElementById("sb-stremio-overlay");if(o)o.classList.remove("open");}document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeFeedback();closeStremio();}});var ff=document.getElementById("feedback-form");if(ff){ff.addEventListener("submit",function(e){e.preventDefault();var fd=new FormData(ff);fetch(ff.action,{method:"POST",body:fd,headers:{"Accept":"application/json"}}).then(function(r){if(r.ok){ff.style.display="none";document.getElementById("feedback-thanks").style.display="block";setTimeout(closeFeedback,2500);}else{alert("Sorry, sending failed.");}}).catch(function(){alert("Sorry, sending failed.");});});}(function(){
var K = 'dl_last_visit', now = Date.now(), v = null, base = 0, seen = {};
try { v = JSON.parse(localStorage.getItem(K) || 'null'); } catch (e) {}
if (v && v.at) { base = now - v.at > 1800000 ? v.at : (v.base || 0); seen = v.seen || {}; }
var cur = document.querySelector('.sidebar a.active [data-lid]');
if (cur) seen[cur.getAttribute('data-lid')] = now;
Object.keys(seen).forEach(function(k) { if (now - seen[k] > 60 * 86400000) delete seen[k]; });
try { localStorage.setItem(K, JSON.stringify({ at: now, base: base, seen: seen })); } catch (e) {}
if (!base) return;
window._wnHooks = (window._wnHooks || []).concat(function(d) {
var n = {}, tot = 0;
((d && d.items) || []).forEach(function(e) {
if (!e || !(e.tags || []).some(function(t) { return t.k === 'added' || t.k === 'released'; })) return;
if (!(e.ts > base) || e.ts <= (seen[e.l] || 0)) return;
n[e.l] = (n[e.l] || 0) + 1; tot++;
});
document.querySelectorAll('.sb-new[data-nl]').forEach(function(el) {
var c = n[el.getAttribute('data-nl')];
if (!c) return;
el.textContent = '+' + c;
el.title = c + ' new since your last visit';
el.classList.add('on');
});
var ln = document.getElementById('sb-nwln');
if (ln && tot) {
var b = new Date(base);
ln.innerHTML = '<i>+' + tot + '</i>new since your last visit, ' + ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][b.getDay()] + ' ' + b.getDate() + ' '
+ ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][b.getMonth()];
ln.classList.add('on');
}
});
})();
(function(){
var ua = navigator.userAgent || '', de = document.documentElement, KB = 'dl_app_banner';
var mm = function(q) { try { return window.matchMedia(q).matches; } catch (e) { return false; } };
var standalone = mm('(display-mode: standalone)') || mm('(display-mode: fullscreen)') || navigator.standalone === true;
var ios = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
var android = /android/i.test(ua);
var preview = !!window.DL_PREVIEW, deferred = null, installed = false;
if (standalone) de.classList.add('dl-app');
try {
if (!preview && 'serviceWorker' in navigator && window.isSecureContext && /^https?:$/.test(location.protocol)) {
var base = new URL('./', document.baseURI).pathname;   // v79: a title page's <base> is the site's folder
navigator.serviceWorker.register(base + 'sw.js', { scope: base }).catch(function() {});
}
} catch (e) {}
function seenBanner() { try { return !!localStorage.getItem(KB); } catch (e) { return false; } }
function paint() {
var can = !standalone && !installed && !!(deferred || ios || android || preview);
document.querySelectorAll('[data-pwa]').forEach(function(el) {
el.hidden = !can || (el.getAttribute('data-pwa') === 'banner' && (seenBanner() || !mm('(max-width: 768px)')));
});
document.querySelectorAll('[data-pwa-go]').forEach(function(b) {
var t = ios && !deferred ? b.getAttribute('data-ios') : b.getAttribute('data-go');
if (t) b.textContent = t;
});
}
window.addEventListener('beforeinstallprompt', function(e) { e.preventDefault(); deferred = e; paint(); });
window.addEventListener('appinstalled', function() { installed = true; deferred = null; paint(); closeSheet(); });
var IC = '<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="7" fill="#13284a"/><g transform="translate(5 5) scale(.917)" fill="none" stroke="#a8d1ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h11v16H8zM5 7v13h11"/><path d="M11 9h5M11 13h5"/></g></svg>';
var SHARE = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M7 11H5v10h14V11h-2"/></svg>';
var DOTS = '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>';
var sheet = null, lastFocus = null;
function onKey(e) { if (e.key === 'Escape') { e.stopPropagation(); closeSheet(); } }
function closeSheet() {
if (!sheet) return;
sheet.remove(); sheet = null;
document.removeEventListener('keydown', onKey, true);
try { if (lastFocus && lastFocus.focus) lastFocus.focus(); } catch (e) {}
}
function steps() {
var iS = '<li><span>Tap ' + SHARE + ' <b>Share</b>: at the bottom in Safari, at the top on an iPad</span></li><li><span>Choose <b>Add to Home Screen</b></span></li><li><span>Tap <b>Add</b>. It opens full screen, like an app</span></li>';
var aS = '<li><span>Open the browser\'s menu ' + DOTS + '</span></li><li><span>Choose <b>Install app</b> or <b>Add to Home screen</b></span></li><li><span>Tap <b>Install</b>. It opens full screen, like an app</span></li>';
if (preview) return '<p class="dl-sh-k">iPhone and iPad</p><ol>' + iS + '</ol><p class="dl-sh-k">Android</p><ol>' + aS + '</ol>';
return '<ol>' + (ios ? iS : aS) + '</ol>';
}
function openSheet() {
if (sheet) return;
lastFocus = document.activeElement;
sheet = document.createElement('div');
sheet.className = 'dl-sheet';
sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-modal', 'true'); sheet.setAttribute('aria-labelledby', 'dl-sh-t');
sheet.innerHTML = '<div class="dl-sh-in"><button type="button" class="dl-sh-x" aria-label="Close">×</button>'
+ '<div class="dl-sh-hd">' + IC + '<div><b id="dl-sh-t">Dracid\'s Lists on your home screen</b><span>Opens full screen like an app, and keeps the lists you looked at for when there\'s no signal.</span></div></div>'
+ steps()
+ '<p class="dl-sh-note">In an app\'s own browser (Discord, Messenger, Instagram…), open the page in ' + (ios ? 'Safari' : preview ? 'Safari or Chrome' : 'Chrome or Samsung Internet') + ' first.</p></div>';
sheet.addEventListener('click', function(e) { if (e.target === sheet || (e.target.closest && e.target.closest('.dl-sh-x'))) closeSheet(); });
document.body.appendChild(sheet);
document.addEventListener('keydown', onKey, true);
var x = sheet.querySelector('.dl-sh-x');
if (x) x.focus();
}
window.dlInstall = function() {
if (deferred) {
var d = deferred; deferred = null;
try {
d.prompt();
Promise.resolve(d.userChoice).then(function(c) { if (c && c.outcome === 'accepted') installed = true; paint(); }, function() { paint(); });
} catch (e) { openSheet(); }
} else openSheet();
return false;
};
document.addEventListener('click', function(e) {
var x = e.target && e.target.closest ? e.target.closest('[data-pwa-x]') : null;
if (!x) return;
e.preventDefault();
try { localStorage.setItem(KB, String(Date.now())); } catch (z) {}
paint();
});
var copy = !!window.DL_COPY;
function net() {
var down = navigator.onLine === false, b = document.getElementById('dl-off');
var txt = down ? 'Offline: the lists as they were when you last opened them'
: !copy ? ''
: net.back ? 'Back online: tap for the latest'
: 'Offline: the lists as they were when you last opened them · tap to try again';
if (txt && !b) {
b = document.createElement('button'); b.type = 'button'; b.id = 'dl-off'; b.className = 'dl-off'; b.setAttribute('role', 'status');
b.addEventListener('click', function() { if (navigator.onLine !== false) location.reload(); });
document.body.appendChild(b);
}
if (b) { b.hidden = !txt; if (txt) b.textContent = txt; }
}
window.addEventListener('online', function() { net.back = true; net(); });
window.addEventListener('offline', function() { net.back = false; net(); });
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function() { paint(); net(); });
else { paint(); net(); }
try { window.matchMedia('(max-width: 768px)').addEventListener('change', paint); } catch (e) {}
})();
(function(){
var TP = window._TP, $ = function (id) { return document.getElementById(id); };
var MS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], DS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function p2(n) { return (n < 10 ? '0' : '') + n; }
function dOf(iso) { var a = String(iso).split('-'); return new Date(+a[0], +a[1] - 1, +a[2]); }
function today() { var t = new Date(); t.setHours(0, 0, 0, 0); return t; }
if (window._NF) {
var m = /\/(movie|tv)\/(\d+)(?:-([a-z0-9-]*?))?(?:-s(\d+))?(?:\.html)?\/?$/.exec(location.pathname), nt = $('nf-t'), ns = $('nf-s');
if (!m) return;
var words = (m[3] || '').replace(/-/g, ' ').trim(), tv = m[1] === 'tv';
if (nt) nt.textContent = 'Looking for it on the lists…';
fetch('search.json').then(function (r) { return r.json(); }).then(function (d) {
var hit = null;
(d.I || []).forEach(function (it) { if (!hit && String(it.tid) === m[2] && !!it.tv === tv && (!tv || !m[4] || String(it.s || '') === m[4])) hit = it; });
if (hit) {
var p = _tpPath(hit.tv ? 'tv' : 'movie', hit.tid, hit.t, hit.s), cur = location.pathname.replace(/\.html$/, '').replace(/\/$/, '');
if (cur.slice(-p.length - 1) !== '/' + p) { location.replace(p); return; }
}
if (nt) nt.textContent = (words ? '“' + words + '”' : 'This title') + ' isn’t on the lists anymore. Search all lists for it, or see what’s new.';
if (ns && words) ns.href = 'search?q=' + encodeURIComponent(words);
}).catch(function () { if (nt) nt.textContent = 'This page isn’t here.'; });
return;
}
if (!TP) return;
document.querySelectorAll('.sidebar a[href="' + TP.l + '"]').forEach(function (a) { a.classList.add('active'); });
(function () {
if (!TP.d) return;
var n = Math.round((dOf(TP.d) - today()) / 86400000), el = $('tp-rel'), b = $('tp-stb');
if (TP.up) {
if (el) el.textContent = n > 1 ? 'in ' + n + ' days' : n === 1 ? 'tomorrow' : n === 0 ? 'today' : 'out now';
var cd = $('tp-cd'), cn = $('tp-cdn'), cl = $('tp-cdl');
if (cd && cn) {
var span = dOf(TP.d) - (TP.add || 0), pct = TP.add && span > 0 ? Math.max(0, Math.min(100, Math.round((Date.now() - TP.add) / span * 100))) : 0;
cn.textContent = n > 0 ? String(n) : '0';
if (cl) cl.textContent = n > 1 ? 'days to go' : n === 1 ? 'day to go' : n === 0 ? 'today' : 'out now';
cd.style.background = 'conic-gradient(#58a6ff 0 ' + pct + '%,rgba(255,255,255,.1) ' + pct + '% 100%)';
}
} else {
if (el) el.textContent = n === 0 ? 'today' : n === -1 ? 'yesterday' : n < 0 && n >= -60 ? -n + ' days ago' : '';
if (b && !TP.pl && TP.ty === 'movie' && n <= 0 && n >= -31) { b.textContent = 'Out on VOD'; b.title = 'Video on demand: to rent or buy from the digital stores'; }
}
})();
function trailer(on) {
var ov = $('trailer-overlay'), fr = $('trailer-frame');
if (!ov || !fr) return;
if (!on) { fr.innerHTML = ''; ov.classList.remove('open'); return; }
var w = Math.min(960, Math.round(window.innerWidth * 0.95)), h = Math.round(w * 9 / 16);
fr.innerHTML = '<iframe width="' + w + '" height="' + h + '" src="https://www.youtube.com/embed/' + encodeURIComponent(TP.k) + '?autoplay=1&rel=0" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe>';
var tt = $('trailer-title'); if (tt) tt.textContent = TP.t + ' · Trailer';
ov.classList.add('open');
}
var tov = $('trailer-overlay'); if (tov) tov.addEventListener('click', function (e) { if (e.target === tov) trailer(false); });
var tcl = $('trailer-close'); if (tcl) tcl.addEventListener('click', function () { trailer(false); });
var open = null;
function menu(id, btn) {
var was = open;
if (open) { open.m.hidden = true; open.b.setAttribute('aria-expanded', 'false'); open = null; }
if (!id || (was && was.m.id === id)) return;
var mm = $(id); if (!mm) return;
mm.hidden = false; btn.setAttribute('aria-expanded', 'true');
open = { m: mm, b: btn };
}
function ok(t) {
var o = $('tp-ok'); if (!o) return;
o.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3fb950" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>' + esc(t);
o.hidden = false;
var rl = $('tp-rml'); if (rl) { rl.textContent = 'Reminder set'; rl.parentNode.classList.add('set'); }
}
function share(btn) {
var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
if (coarse && navigator.share) { navigator.share({ title: TP.t, text: TP.t + ' · Dracid’s Lists', url: TP.u }).catch(function () {}); return; }
menu('tp-sh', btn);
}
function copy(btn) {
var done = function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy link'; }, 2500); };
try { navigator.clipboard.writeText(TP.u).then(done, function () { window.prompt('Copy this link:', TP.u); }); } catch (e) { window.prompt('Copy this link:', TP.u); }
}
function icsEsc(s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); }
function ics(forWhat) {
if (!TP.d) return;
var nx = new Date(dOf(TP.d).getTime() + 36 * 3600000), b = nx.getFullYear() + p2(nx.getMonth() + 1) + p2(nx.getDate());
var sum = TP.t + (TP.s ? ' S' + p2(TP.s) : '') + (TP.pl ? ' (' + TP.pl + ')' : '');
var stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
var body = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Dracid\'s Lists//title page//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
'UID:' + TP.ty + '-' + TP.id + (TP.s ? '-s' + TP.s : '') + '@dracids-lists', 'DTSTAMP:' + stamp,
'DTSTART;VALUE=DATE:' + TP.d.replace(/-/g, ''), 'DTEND;VALUE=DATE:' + b,
'SUMMARY:' + icsEsc(sum), 'DESCRIPTION:' + icsEsc((TP.up ? 'Coming' : 'Out') + (TP.pl ? ' on ' + TP.pl : '') + '. ' + TP.u), 'URL:' + TP.u,
'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + icsEsc(sum), 'TRIGGER:PT9H', 'END:VALARM', 'TRANSP:TRANSPARENT', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n') + '\r\n';
var file = (TP.p.split('/').pop() || 'title').replace(/^\d+-/, '') + '.ics';
var u = URL.createObjectURL(new Blob([body], { type: 'text/calendar;charset=utf-8' }));
var ios = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if (ios && forWhat === 'Apple Calendar') location.href = u;
else { var a = document.createElement('a'); a.href = u; a.download = file; document.body.appendChild(a); a.click(); a.parentNode.removeChild(a); }
setTimeout(function () { URL.revokeObjectURL(u); }, 60000);
var dd = dOf(TP.d), when = DS[dd.getDay()] + ' ' + dd.getDate() + ' ' + MS[dd.getMonth()];
ok(forWhat === 'Apple Calendar' ? 'Opened for Apple Calendar: ' + TP.t + ', ' + when + ' (just this title)' : 'Downloaded ' + file + ': open it to add ' + when + ' to any calendar');
}
document.addEventListener('click', function (ev) {
var t = ev.target, b = t && t.closest ? t.closest('[data-tp]') : null;
if (b) {
var a = b.getAttribute('data-tp');
if (a === 'trailer') { menu(null); trailer(true); return; }
if (a === 'share') { share(b); return; }
if (a === 'copy') { copy(b); return; }
if (a === 'rm') { menu('tp-rm', b); return; }
if (a === 'ics') { menu(null); ics(b.getAttribute('data-for')); return; }
if (a === 'cal') { menu(null); ok(b.getAttribute('data-for') + ' opened in a new tab: save the event there (' + TP.t + ', just this title)'); return; }
if (a === 'follow') { menu(null); return; }
}
if (open && t && t.closest && !t.closest('.tp-dd')) menu(null);
});
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { trailer(false); menu(null); } });
(function () {
var box = $('tp-src');
if (!box || TP.ch == null) return;
var fv = function (v) { return v >= 1e6 ? (Math.round(v / 1e5) / 10) + 'M' : v >= 1000 ? Math.round(v / 1000) + 'K' : String(v); };
fetch('scores/' + TP.ch + '.json').then(function (r) { return r.json(); }).then(function (o) {
var d = o && o[TP.sk];
if (!d || !d.sources) { box.innerHTML = '<span class="tp-wait">The sources aren’t in this export.</span>'; return; }
var h = d.sources.map(function (s) {
var c = s.excluded ? '#6e7681' : s.val >= 75 ? '#4caf50' : s.val >= 55 ? '#f5c518' : '#ff5722';
return '<div class="tp-sr' + (s.excluded ? ' ex' : '') + '"><span>' + esc(s.name) + '</span><i><u style="width:' + Math.max(0, Math.min(100, s.val)) + '%;background:' + c + '"></u></i>'
+ '<b style="color:' + c + '">' + (s.val / 10).toFixed(1) + '</b><small>' + (s.votes ? fv(s.votes) + ' votes' : '') + '</small></div>';
}).join('');
h += '<div class="tp-sf"><span>Composite</span><b style="color:' + esc(d.color) + '">' + Number(d.score).toFixed(1) + ' / 10</b></div>';
if (d.droprate != null) h += '<div class="tp-sx">Drop rate <b style="color:' + (d.droprate < 5 ? '#4caf50' : d.droprate < 15 ? '#f5c518' : '#e53935') + '">' + d.droprate + '%</b> stopped watching</div>';
if (d.excluded > 0) h += '<div class="tp-sx w">⚠ ' + d.excluded + (d.excluded === 1 ? ' source' : ' sources') + ' left out, too few votes</div>';
box.innerHTML = h;
}).catch(function () { box.innerHTML = '<span class="tp-wait">The sources couldn’t load.</span>'; });
})();
(function () {
var ppl = document.querySelectorAll('.tp-pp[data-n]');
if (!ppl.length || !window._TPK) return;
var u = TP.ty === 'tv' ? 'https://api.themoviedb.org/3/tv/' + TP.id + '?api_key=' + _TPK + '&append_to_response=aggregate_credits'
: 'https://api.themoviedb.org/3/movie/' + TP.id + '/credits?api_key=' + _TPK;
fetch(u).then(function (r) { return r.json(); }).then(function (d) {
var by = {};
var add = function (n, ph, ch) { var k = String(n || '').toLowerCase(); if (k && !by[k]) by[k] = { ph: ph, ch: ch }; };
if (TP.ty === 'tv') {
(d.created_by || []).forEach(function (c) { add(c.name, c.profile_path, ''); });
((d.aggregate_credits && d.aggregate_credits.cast) || []).forEach(function (c) { add(c.name, c.profile_path, (c.roles && c.roles[0] && c.roles[0].character) || ''); });
} else {
(d.crew || []).forEach(function (c) { if (c.job === 'Director') add(c.name, c.profile_path, ''); });
(d.cast || []).forEach(function (c) { add(c.name, c.profile_path, c.character || ''); });
}
ppl.forEach(function (a) {
var x = by[String(a.getAttribute('data-n')).toLowerCase()];
if (!x) return;
if (x.ph) { var av = a.querySelector('.tp-av'); if (av) av.innerHTML = '<img src="https://image.tmdb.org/t/p/w185' + esc(x.ph) + '" alt="" loading="lazy" onerror="this.remove()">'; }
if (x.ch && a.getAttribute('data-r') === 'cast') { var sm = a.querySelector('small'); if (sm) sm.textContent = x.ch; }
});
}).catch(function () {});
})();
})();
