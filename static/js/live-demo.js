/* ==========================================================================
 * PKYDrip Live Demo — 前端交互
 * --------------------------------------------------------------------------
 * 数据来源：/live-api/pub/*  ← 由 netlify.toml 反代到中国香港实时服务
 *   仅两个只读接口：pub/preview（脱敏聚合，公开）与 pub/snapshot（脱敏全量，登录后）
 *
 * 为什么是轮询而不是 SSE：
 *   Netlify 的代理 rewrite 有 26 秒超时（官方明确限制），长连接会被掐断，
 *   所以这里用「页面可见时才轮询」的方式。页面切到后台就停，省流量也省 Netlify 带宽。
 * ========================================================================== */
(function () {
  'use strict';

  // 允许本地调试时指向真实服务器： /live-demo/?api=http://47.238.197.93/live
  var qs = new URLSearchParams(location.search);
  var API = (qs.get('api') || window.LD_API_BASE || '').replace(/\/$/, '');

  var PREVIEW_MS = 10000; // 公开预览：10 秒一跳
  var FULL_MS = 5000;     // 已登录完整视图：5 秒一跳

  var $ = function (id) { return document.getElementById(id); };
  var num = function (n, d) {
    if (n === null || n === undefined || isNaN(n)) return '—';
    return Number(n).toLocaleString(undefined, { maximumFractionDigits: d === undefined ? 0 : d });
  };

  var previewTimer = null;
  var fullTimer = null;
  var lastPreview = null;

  function api(path) { return API + path; }

  function showError(msg) {
    var el = $('ld-preview-error');
    if (!el) return;
    el.style.display = 'block';
    el.textContent = msg;
  }
  function clearError() {
    var el = $('ld-preview-error');
    if (el) el.style.display = 'none';
  }

  /* ── 渲染：公开预览 ───────────────────────────────────────────── */

  function renderPreview(d) {
    lastPreview = d;
    var s = d.summary || {};
    $('t-stations').innerHTML = num(s.stationsOnline) +
      ' <small>/ ' + num(s.stationsTotal) + '</small>';
    $('t-valves').textContent = num(s.valvesTotal);
    $('t-open').textContent = num(s.valvesOpen);
    $('t-points').textContent = num(s.telemetryPoints);
    $('t-sensors').innerHTML = num(s.sensorsConnected) +
      ' <small>/ ' + num(s.sensorsTotal) + '</small>';

    var u = $('ld-updated');
    if (u) u.textContent = 'updated ' + new Date(d.updatedAt).toLocaleTimeString();

    renderSensors($('ld-sensors'), d.sensors || []);
    drawSpark(d.trend || [], d.ranges || {});

    if (d.gated && d.gated.locked) {
      $('ld-locked').innerHTML = d.gated.locked
        .map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    }
  }

  function renderSensors(host, list) {
    if (!host) return;
    host.innerHTML = list.map(function (s) {
      var chip = s.connected
        ? '<span class="ld-chip ld-chip--on">LIVE</span>'
        : '<span class="ld-chip ld-chip--rs">RESERVED</span>';
      var body;
      if (s.connected && s.readings && s.readings.length) {
        body = s.readings.map(function (r) {
          return '<div class="rd"><span>' + esc(r.label) + '</span><b>' +
            num(r.value, 1) + ' ' + esc(r.unit || '') + '</b></div>';
        }).join('');
      } else {
        body = '<div class="ld-reserved">Interface reserved — sensor not connected yet.</div>';
      }
      return '<div class="ld-sensor"><h4>' + esc(s.name) + ' ' + chip + '</h4>' + body + '</div>';
    }).join('');
  }

  function esc(t) {
    return String(t === undefined || t === null ? '' : t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── 迷你折线图（原生 canvas，无第三方库）───────────────────────── */

  function drawSpark(points, ranges) {
    var cv = $('ld-spark');
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    var W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);

    if (!points.length) {
      ctx.fillStyle = '#b6c2bb';
      ctx.font = '13px sans-serif';
      ctx.fillText('waiting for telemetry…', 14, H / 2);
      return;
    }

    var pad = { l: 8, r: 8, t: 10, b: 10 };
    var iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;

    // 两条独立的归一化曲线：流量（绿）与压力（琥珀）
    function line(key, color) {
      var vals = points.map(function (p) { return Number(p[key]); })
        .filter(function (v) { return isFinite(v); });
      if (!vals.length) return;
      var mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals);
      if (mx === mn) { mx = mn + 1; }
      ctx.beginPath();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = color;
      points.forEach(function (p, i) {
        var v = Number(p[key]);
        if (!isFinite(v)) return;
        var x = pad.l + (points.length === 1 ? iw / 2 : (i / (points.length - 1)) * iw);
        var y = pad.t + ih - ((v - mn) / (mx - mn)) * ih;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // 末点标记
      var last = points[points.length - 1];
      var lv = Number(last[key]);
      if (isFinite(lv)) {
        var lx = pad.l + iw;
        var ly = pad.t + ih - ((lv - mn) / (mx - mn)) * ih;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(lx, ly, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    line('flow', '#22a05f');
    line('pressure', '#e0a13a');

    // 图例
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#22a05f'; ctx.fillRect(pad.l, 2, 9, 3);
    ctx.fillStyle = '#6d7f74'; ctx.fillText('flow', pad.l + 13, 8);
    ctx.fillStyle = '#e0a13a'; ctx.fillRect(pad.l + 52, 2, 9, 3);
    ctx.fillStyle = '#6d7f74'; ctx.fillText('pressure', pad.l + 65, 8);

    var r = ranges.flow;
    if (r) {
      ctx.fillStyle = '#b6c2bb';
      ctx.textAlign = 'right';
      ctx.fillText('flow ' + r.min + '–' + r.max + ' m³/h', W - pad.r, H - 2);
      ctx.textAlign = 'left';
    }
  }

  /* ── 拉取 ─────────────────────────────────────────────────────── */

  function fetchJson(path) {
    return fetch(api(path), { credentials: 'omit', cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
  }

  function tickPreview() {
    if (document.hidden) return;             // 后台不拉，省带宽
    fetchJson('/live-api/pub/preview')
      .then(function (d) { clearError(); renderPreview(d); })
      .catch(function (e) {
        showError('Live preview could not load (' + e.message + '). ' +
          'If you are viewing this on a local dev server, the API proxy is only ' +
          'available on the deployed site.');
      });
  }

  /* ── 完整视图（登录后）────────────────────────────────────────── */

  function renderFull(d) {
    var u = $('ld-full-updated');
    if (u) u.textContent = 'updated ' + new Date(d.updatedAt).toLocaleTimeString();

    $('ld-full-cards').innerHTML = (d.cards || []).map(function (c, i) {
      var rt = c.runtime || {};
      var valves = Array.isArray(rt.valves) ? rt.valves : [];
      var vHtml = valves.map(function (v) {
        return '<div class="ld-v' + (v ? ' ld-v--on' : '') + '"></div>';
      }).join('');
      return '<div class="ld-card">' +
        '<h4>Controller ' + (i + 1) +
        (c.online ? ' <span class="ld-chip ld-chip--on">ONLINE</span>'
                  : ' <span class="ld-chip ld-chip--rs">OFFLINE</span>') + '</h4>' +
        '<div class="ld-meta"><span>Mode</span><b>' + esc(c.mode || '—') + '</b></div>' +
        '<div class="ld-meta"><span>Status</span><b>' + esc(c.workStatus || '—') + '</b></div>' +
        '<div class="ld-meta"><span>Last report</span><b>' + (c.ageSec === null || c.ageSec === undefined ? '—' : c.ageSec + 's ago') + '</b></div>' +
        '<div class="ld-meta"><span>Flow</span><b>' + num(rt.flow, 2) + ' m³/h</b></div>' +
        '<div class="ld-meta"><span>Pressure</span><b>' + num(rt.pressure, 2) + ' bar</b></div>' +
        (valves.length ? '<div class="ld-valves">' + vHtml + '</div>' +
          '<div class="ld-note" style="margin-top:6px">' +
          valves.filter(Boolean).length + ' of ' + valves.length + ' valves open</div>' : '') +
        '</div>';
    }).join('');

    renderSensors($('ld-full-sensors'), (d.sensors || []).map(function (s) {
      // 完整快照里的传感器结构与预览不同：这里用 points + latest 自行展开
      var vals = (s.latest && s.latest.values) || {};
      var readings = (s.points || []).filter(function (p) {
        return vals[p.key] && isFinite(vals[p.key].v);
      }).map(function (p) {
        return { label: p.label, value: vals[p.key].v, unit: p.unit };
      });
      return { name: s.name, connected: s.connected, readings: readings };
    }));
  }

  function tickFull() {
    if (document.hidden) return;
    fetchJson('/live-api/pub/snapshot')
      .then(renderFull)
      .catch(function () { /* 单次失败不打扰用户，下一跳会重试 */ });
  }

  function startFull() {
    $('ld-gate').style.display = 'none';
    $('ld-full').style.display = 'block';
    tickFull();
    if (fullTimer) clearInterval(fullTimer);
    fullTimer = setInterval(tickFull, FULL_MS);
  }

  function stopFull() {
    if (fullTimer) { clearInterval(fullTimer); fullTimer = null; }
    $('ld-full').style.display = 'none';
    $('ld-gate').style.display = 'block';
  }

  /* ── Netlify Identity 接入 ────────────────────────────────────── */

  function identityReady() {
    return typeof window.netlifyIdentity !== 'undefined';
  }

  /* widget.js 是 identity.netlify.com 上的静态文件，**无论站点有没有在后台开启
   * Identity，它都会注入 window.netlifyIdentity**。只看这个全局变量会得到一个
   * 「能点、点开就报错」的注册按钮 —— 正是刚上线、Identity 还没开的那段时间。
   * 所以再用 /.netlify/identity/settings 确认一次：未启用时该端点返回 404。 */
  function identityEnabled() {
    return fetch('/.netlify/identity/settings', { method: 'GET' })
      .then(function (r) { return r.ok; })
      .catch(function () { return false; });
  }

  function showIdentityFallback() {
    var st = $('ld-identity-state');
    if (st) {
      st.style.display = 'block';
      st.innerHTML = '⚙️ Registration is being activated. Meanwhile, use the form below ' +
        'or <a href="https://wa.me/8617395297329" target="_blank" rel="noopener">WhatsApp</a> ' +
        'and we will send you access.';
    }
    var b = $('ld-signup');
    if (b) {
      b.textContent = 'Get access by email';
      b.onclick = function () {
        document.getElementById('ld-book').scrollIntoView({ behavior: 'smooth' });
      };
    }
  }

  function wireIdentity() {
    if (!identityReady()) { showIdentityFallback(); return; }
    identityEnabled().then(function (ok) {
      if (ok) wireRealIdentity();
      else showIdentityFallback();
    });
  }

  function wireRealIdentity() {
    window.netlifyIdentity.on('init', function (user) {
      if (user) { afterLogin(user); }
    });
    window.netlifyIdentity.on('login', function (user) {
      window.netlifyIdentity.close();
      afterLogin(user);
    });
    window.netlifyIdentity.on('logout', function () { stopFull(); });

    var b = $('ld-signup');
    if (b) b.onclick = function () { window.netlifyIdentity.open('signup'); };

    var out = $('ld-signout');
    if (out) out.onclick = function () { window.netlifyIdentity.logout(); };

    var cta = $('ld-contact-cta');
    if (cta) cta.onclick = function () {
      document.getElementById('ld-book').scrollIntoView({ behavior: 'smooth' });
    };

    window.netlifyIdentity.init();
  }

  function afterLogin(user) {
    var e = $('ld-email');
    if (e) e.textContent = (user && user.email) || 'your account';
    startFull();
  }

  /* ── 启动 ─────────────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    tickPreview();
    previewTimer = setInterval(tickPreview, PREVIEW_MS);
    wireIdentity();

    // 页面重新可见时立刻补一次，避免用户回到页面看到过期数字
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) return;
      tickPreview();
      if (fullTimer) tickFull();
    });
  });
})();
