/* ==========================================================================
 * PKYDrip Online Demo Gateway V1 — front-end
 * --------------------------------------------------------------------------
 * Data: /live-api/pub/*  (Netlify rewrite → demonstration pub API)
 *   pub/preview  — public aggregate overview
 *   pub/snapshot — fuller read-only dashboard (unlocked after access form)
 *
 * Lead capture: Netlify Forms (name=demo-access-request)
 * Analytics:   gtag event "demo_access_request" on successful submit
 *              (distinct from CTA click hooks such as cta-online-demo)
 *
 * Polling (not SSE): Netlify proxy rewrite times out at ~26s.
 * ========================================================================== */
(function () {
  'use strict';

  var ACCESS_KEY = 'pkydrip_demo_access_v1';
  var PREVIEW_MS = 10000;
  var FULL_MS = 5000;

  // Local-dev only override. Never honour ?api= on production hosts.
  var API = '';
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    var qsApi = new URLSearchParams(location.search).get('api');
    if (qsApi) API = String(qsApi).replace(/\/$/, '');
  }

  var $ = function (id) { return document.getElementById(id); };
  var num = function (n, d) {
    if (n === null || n === undefined || isNaN(n)) return '—';
    return Number(n).toLocaleString(undefined, {
      maximumFractionDigits: d === undefined ? 0 : d
    });
  };

  var previewTimer = null;
  var fullTimer = null;

  function api(path) { return API + path; }

  function showError(msg) {
    var el = $('ld-preview-error');
    if (!el) return;
    el.style.display = 'block';
    el.textContent = msg;
  }
  function clearError() {
    var el = $('ld-preview-error');
    if (!el) return;
    el.style.display = 'none';
    el.textContent = '';
  }

  function esc(t) {
    return String(t === undefined || t === null ? '' : t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Attribution fields ─────────────────────────────────────────── */

  function fillAttribution() {
    var params = new URLSearchParams(location.search);
    var map = {
      'ld-utm-source': 'utm_source',
      'ld-utm-medium': 'utm_medium',
      'ld-utm-campaign': 'utm_campaign',
      'ld-utm-term': 'utm_term',
      'ld-utm-content': 'utm_content',
      'ld-gclid': 'gclid'
    };
    Object.keys(map).forEach(function (id) {
      var el = $(id);
      if (el) el.value = params.get(map[id]) || '';
    });
    var campaign = $('ld-campaign');
    if (campaign) campaign.value = params.get('utm_campaign') || '';
    var source = $('ld-source');
    if (source) {
      source.value = params.get('utm_source')
        ? ('ads:' + params.get('utm_source'))
        : 'website';
    }
    var landing = $('ld-landing');
    if (landing) landing.value = location.pathname || '/live-demo/';
  }

  /* ── Preview render ─────────────────────────────────────────────── */

  function renderPreview(d) {
    $('t-stations').textContent = num(d.stationsOnline);
    $('t-valves').textContent = num(d.valvesRegistered);
    $('t-open').textContent = num(d.valvesOpen);
    $('t-points').textContent = num(d.telemetryPoints);
    $('t-sensors').textContent = num(d.sensorsReporting);

    var u = $('ld-updated');
    if (u && d.updatedAt) {
      u.textContent = 'updated ' + new Date(d.updatedAt).toLocaleTimeString();
    }

    renderSensors($('ld-sensors'), d.sensors || []);
    drawSpark(d.trend || [], d.ranges || {});
  }

  function renderSensors(host, list) {
    if (!host) return;
    host.innerHTML = list.map(function (s) {
      var chip = s.connected
        ? '<span class="ld-chip ld-chip--on">ACTIVE</span>'
        : '<span class="ld-chip ld-chip--rs">RESERVED</span>';
      var body;
      if (s.connected && s.readings && s.readings.length) {
        body = s.readings.map(function (r) {
          return '<div class="rd"><span>' + esc(r.label) + '</span><b>' +
            num(r.value, 1) + ' ' + esc(r.unit || '') + '</b></div>';
        }).join('');
      } else {
        body = '<div class="ld-reserved">Interface reserved — sensor not connected on this demonstration system.</div>';
      }
      return '<div class="ld-sensor"><h4>' + esc(s.name) + ' ' + chip + '</h4>' + body + '</div>';
    }).join('');
  }

  function drawSpark(points) {
    var cv = $('ld-spark');
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    var W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);

    if (!points.length) {
      ctx.fillStyle = '#b6c2bb';
      ctx.font = '13px sans-serif';
      ctx.fillText('waiting for demonstration telemetry…', 14, H / 2);
      return;
    }

    var pad = { l: 8, r: 8, t: 10, b: 10 };
    var iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;

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
    }

    line('flow', '#22a05f');
    line('pressure', '#e0a13a');

    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#22a05f'; ctx.fillRect(pad.l, 2, 9, 3);
    ctx.fillStyle = '#6d7f74'; ctx.fillText('flow', pad.l + 13, 8);
    ctx.fillStyle = '#e0a13a'; ctx.fillRect(pad.l + 52, 2, 9, 3);
    ctx.fillStyle = '#6d7f74'; ctx.fillText('pressure', pad.l + 65, 8);
  }

  function fetchJson(path) {
    return fetch(api(path), { credentials: 'omit', cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
  }

  function tickPreview() {
    if (document.hidden) return;
    fetchJson('/live-api/pub/preview')
      .then(function (d) { clearError(); renderPreview(d); })
      .catch(function (e) {
        showError('Demonstration feed could not load (' + e.message + '). ' +
          'On local Hugo, the /live-api proxy is only available after Netlify deploy.');
      });
  }

  /* ── Full dashboard ─────────────────────────────────────────────── */

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
        '<div class="ld-meta"><span>Last report</span><b>' +
          (c.ageSec === null || c.ageSec === undefined ? '—' : c.ageSec + 's ago') + '</b></div>' +
        '<div class="ld-meta"><span>Flow</span><b>' + num(rt.flow, 2) + ' m³/h</b></div>' +
        '<div class="ld-meta"><span>Pressure</span><b>' + num(rt.pressure, 2) + ' bar</b></div>' +
        (valves.length ? '<div class="ld-valves">' + vHtml + '</div>' +
          '<div class="ld-note" style="margin-top:6px">' +
          valves.filter(Boolean).length + ' of ' + valves.length + ' valves open</div>' : '') +
        '</div>';
    }).join('');

    renderSensors($('ld-full-sensors'), (d.sensors || []).map(function (s) {
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
      .catch(function () { /* retry next tick */ });
  }

  function startFull(email) {
    var gate = $('ld-gate');
    var full = $('ld-full');
    if (gate) gate.style.display = 'none';
    if (full) full.style.display = 'block';
    var e = $('ld-email');
    if (e) e.textContent = email || 'your session';
    tickFull();
    if (fullTimer) clearInterval(fullTimer);
    fullTimer = setInterval(tickFull, FULL_MS);
  }

  function stopFull() {
    if (fullTimer) { clearInterval(fullTimer); fullTimer = null; }
    try { sessionStorage.removeItem(ACCESS_KEY); } catch (err) { /* ignore */ }
    var full = $('ld-full');
    var gate = $('ld-gate');
    if (full) full.style.display = 'none';
    if (gate) gate.style.display = 'block';
  }

  /* ── Analytics ──────────────────────────────────────────────────── */

  function trackDemoAccessRequest(payload) {
    try {
      if (typeof gtag === 'function') {
        gtag('event', 'demo_access_request', {
          event_category: 'demo',
          event_label: 'online_demo_v1',
          page_path: location.pathname,
          project_type: payload.project_type || '',
          country: payload.country || '',
          utm_source: payload.utm_source || '',
          utm_campaign: payload.utm_campaign || ''
        });
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'demo_access_request',
        demo_access: payload
      });
    } catch (err) { /* never block UX on analytics */ }
  }

  /* ── Form validation + Netlify submit ───────────────────────────── */

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '').trim());
  }

  function setFieldError(el, on) {
    if (!el) return;
    if (on) el.classList.add('field-error');
    else el.classList.remove('field-error');
  }

  function validateForm(form) {
    var name = form.elements.namedItem('name');
    var email = form.elements.namedItem('email');
    var country = form.elements.namedItem('country');
    var ok = true;

    setFieldError(name, !(name && name.value.trim()));
    if (!(name && name.value.trim())) ok = false;

    setFieldError(email, !(email && validEmail(email.value)));
    if (!(email && validEmail(email.value))) ok = false;

    setFieldError(country, !(country && country.value.trim()));
    if (!(country && country.value.trim())) ok = false;

    return ok;
  }

  function encodeForm(form) {
    var fd = new FormData(form);
    var params = new URLSearchParams();
    fd.forEach(function (value, key) {
      params.append(key, value);
    });
    return params.toString();
  }

  function showFormError(msg) {
    var el = $('ld-form-error');
    var ok = $('ld-form-success');
    if (ok) ok.style.display = 'none';
    if (!el) return;
    el.style.display = 'block';
    el.textContent = msg;
  }

  function showFormSuccess(msg) {
    var el = $('ld-form-success');
    var err = $('ld-form-error');
    if (err) err.style.display = 'none';
    if (!el) return;
    el.style.display = 'block';
    el.textContent = msg;
  }

  function persistAccess(email) {
    try {
      sessionStorage.setItem(ACCESS_KEY, JSON.stringify({
        email: email,
        at: Date.now()
      }));
    } catch (err) { /* private mode */ }
  }

  function restoreAccess() {
    try {
      var raw = sessionStorage.getItem(ACCESS_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (err) {
      return null;
    }
  }

  function wireForm() {
    var form = $('ld-access-form');
    if (!form) return;

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      fillAttribution();

      if (!validateForm(form)) {
        showFormError('Please complete Full Name, Business Email and Country.');
        return;
      }

      var submitBtn = $('ld-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting…';
      }

      var email = (form.elements.namedItem('email').value || '').trim();
      var payload = {
        name: (form.elements.namedItem('name').value || '').trim(),
        email: email,
        country: (form.elements.namedItem('country').value || '').trim(),
        organization: (form.elements.namedItem('organization').value || '').trim(),
        project_type: (form.elements.namedItem('project_type').value || '').trim(),
        whatsapp: (form.elements.namedItem('whatsapp').value || '').trim(),
        utm_source: (form.elements.namedItem('utm_source').value || '').trim(),
        utm_campaign: (form.elements.namedItem('utm_campaign').value || '').trim()
      };

      fetch(form.getAttribute('action') || '/live-demo/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(form)
      }).then(function (r) {
        if (!r.ok && r.status !== 200 && r.status !== 303) {
          throw new Error('HTTP ' + r.status);
        }
        trackDemoAccessRequest(payload);
        persistAccess(email);
        showFormSuccess(
          'Request received. The read-only demonstration dashboard is unlocked on this page. ' +
          'An acknowledgement email will be sent if outbound form notifications are enabled. ' +
          'If you need a guided walkthrough, use Book a Live Demo below.'
        );
        startFull(email);
      }).catch(function () {
        // Netlify AJAX can fail on local Hugo; still unlock for local UX testing,
        // but mark that the lead may not have been stored.
        if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
          trackDemoAccessRequest(payload);
          persistAccess(email);
          showFormSuccess(
            'Local preview: dashboard unlocked. Lead storage requires a Netlify deploy.'
          );
          startFull(email);
          return;
        }
        showFormError(
          'Submission failed. Please try again, or contact us via WhatsApp / Contact page.'
        );
      }).finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Access Online Demo';
        }
      });
    });
  }

  /* ── Boot ───────────────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    fillAttribution();
    tickPreview();
    previewTimer = setInterval(tickPreview, PREVIEW_MS);
    wireForm();

    var existing = restoreAccess();
    if (existing && existing.email) {
      startFull(existing.email);
    }

    var out = $('ld-signout');
    if (out) out.onclick = function () { stopFull(); };

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) return;
      tickPreview();
      if (fullTimer) tickFull();
    });
  });
})();
