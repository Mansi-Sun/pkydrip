/* ==========================================================================
 * PKYDrip Online Demo — Google landing (/live-demo/)
 * --------------------------------------------------------------------------
 * Data: GET /live-api/demo  (Netlify rewrite → cloud GET /api/public/live-demo)
 *   English-only payload from device_programs / program_runs / device_metrics.
 *   Does NOT use http://47.238.197.93/live
 *
 * No login, no password, no access form gate.
 * Polling (not SSE): Netlify proxy times out at ~26s.
 * ========================================================================== */
(function () {
  'use strict';

  var POLL_MS = 15000;
  var ENV_KEYS = [
    'airTemperature',
    'airHumidity',
    'soilTemperature',
    'soilHumidity',
    'soilMoisture',
    'light'
  ];

  var $ = function (id) { return document.getElementById(id); };

  function esc(t) {
    return String(t === undefined || t === null ? '' : t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function num(n, d) {
    if (n === null || n === undefined || isNaN(Number(n))) return '—';
    return Number(n).toLocaleString(undefined, {
      maximumFractionDigits: d === undefined ? 1 : d
    });
  }

  function fmtTime(t) {
    if (!t) return '—';
    var dt = new Date(t);
    if (isNaN(dt.getTime())) return String(t).replace('T', ' ').slice(0, 16);
    return dt.toLocaleString('en-GB', {
      hour12: false,
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function resultLabel(r) {
    if (r === 'running') return 'Running';
    if (r === 'done' || r === 'success') return 'Completed';
    if (r === 'aborted' || r === 'stopped') return 'Stopped';
    if (r === 'failed') return 'Failed';
    return r || '—';
  }

  function duration(run) {
    if (!run) return '—';
    if (run.actualMin != null) return run.actualMin + ' min';
    if (run.plannedMin != null) return run.plannedMin + ' min planned';
    return '—';
  }

  function zoneText(p) {
    var zones = p.zones || [];
    if (!zones.length) return '—';
    return zones.map(function (z) {
      return 'Z' + z.zone + ' ' + z.minutes + ' min' + (z.active ? '' : ' (off)');
    }).join(' · ');
  }

  function showError(msg) {
    var el = $('ld-error');
    if (!el) return;
    el.style.display = 'block';
    el.textContent = msg;
  }

  function clearError() {
    var el = $('ld-error');
    if (!el) return;
    el.style.display = 'none';
    el.textContent = '';
  }

  function renderEnv(board) {
    var host = $('ld-env');
    if (!host) return;
    host.innerHTML = ENV_KEYS.map(function (key) {
      var row = board && board[key];
      var label = (row && row.label) || key.replace(/([A-Z])/g, ' $1');
      if (!row) {
        return '<div class="ld-tile"><div class="k">' + esc(label) +
          '</div><div class="v">—</div></div>';
      }
      var digits = key === 'light' ? 0 : 1;
      return '<div class="ld-tile"><div class="k">' + esc(row.label || label) +
        '</div><div class="v">' + num(row.value, digits) +
        ' <small>' + esc(row.unit || '') + '</small></div>' +
        (row.sourceId ? '<div class="ld-src">' + esc(row.sourceId) + '</div>' : '') +
        '</div>';
    }).join('');
  }

  function renderControllers(list) {
    var host = $('ld-controllers');
    if (!host) return;
    if (!list || !list.length) {
      host.innerHTML = '<p class="ld-note">No irrigation controllers in the demonstration set.</p>';
      return;
    }
    host.innerHTML = list.map(function (c) {
      var running = c.running
        ? '<div class="ld-running">Program ' + esc(c.running.programKey || '—') +
          (c.running.zone ? ' · zone ' + esc(c.running.zone) : '') +
          ' · runtime ' + esc(duration(c.running)) + '</div>'
        : '';
      var plans = (c.programs || []);
      var planHtml = plans.length
        ? '<table class="ld-table"><thead><tr><th>Program</th><th>Status</th><th>Start</th>' +
          '<th>Repeat</th><th>Zone runtime</th><th>Total</th></tr></thead><tbody>' +
          plans.map(function (p) {
            return '<tr><td>' + esc(p.programKey) + '</td><td>' +
              (p.enabled ? 'Enabled' : 'Disabled') + '</td><td>' +
              esc(p.startTime || '—') + '</td><td>' + esc(p.repeatMode || '—') +
              '</td><td>' + esc(zoneText(p)) + '</td><td>' +
              (p.totalRuntimeMin != null ? p.totalRuntimeMin + ' min' : '—') +
              '</td></tr>';
          }).join('') + '</tbody></table>'
        : '<p class="ld-note">No irrigation plan uploaded from this controller yet.</p>';

      var runs = c.recentRuns || [];
      var runHtml = runs.length
        ? '<table class="ld-table"><thead><tr><th>Program</th><th>Zone</th><th>Started</th>' +
          '<th>Ended</th><th>Result</th><th>Runtime</th></tr></thead><tbody>' +
          runs.map(function (r) {
            return '<tr><td>' + esc(r.programKey || '—') + '</td><td>' +
              esc(r.zone == null ? '—' : r.zone) + '</td><td>' +
              esc(fmtTime(r.startedAt)) + '</td><td>' + esc(fmtTime(r.endedAt)) +
              '</td><td>' + esc(resultLabel(r.result)) + '</td><td>' +
              esc(duration(r)) + '</td></tr>';
          }).join('') + '</tbody></table>'
        : '<p class="ld-note">No irrigation runs recorded yet.</p>';

      return '<div class="ld-card">' +
        '<h4>' + esc(c.label) + ' ' +
        (c.online
          ? '<span class="ld-chip ld-chip--on">ONLINE</span>'
          : '<span class="ld-chip ld-chip--rs">OFFLINE</span>') +
        '</h4>' +
        '<div class="ld-meta"><span>Type</span><b>' + esc(c.type) + '</b></div>' +
        '<div class="ld-meta"><span>ID</span><b>' + esc(c.id) + '</b></div>' +
        running +
        '<h5 class="ld-h5">Irrigation plan</h5>' + planHtml +
        '<h5 class="ld-h5">Recent runtimes</h5>' + runHtml +
        '</div>';
    }).join('');
  }

  function renderSensors(list) {
    var host = $('ld-sensors');
    if (!host) return;
    if (!list || !list.length) {
      host.innerHTML = '<p class="ld-note">No air / soil / light readings in the demonstration set.</p>';
      return;
    }
    host.innerHTML = list.map(function (s) {
      var readings = s.readings || {};
      var keys = Object.keys(readings);
      var body = keys.length
        ? keys.map(function (key) {
          var r = readings[key];
          var digits = (key === 'light' || key === 'par') ? 0 : 1;
          return '<div class="rd"><span>' + esc(r.label) + '</span><b>' +
            num(r.value, digits) + ' ' + esc(r.unit || '') + '</b></div>';
        }).join('')
        : '<div class="ld-reserved">No readings yet.</div>';
      return '<div class="ld-sensor"><h4>' + esc(s.label) + ' ' +
        (s.online
          ? '<span class="ld-chip ld-chip--on">ONLINE</span>'
          : '<span class="ld-chip ld-chip--rs">OFFLINE</span>') +
        '</h4>' + body + '</div>';
    }).join('');
  }

  function render(d) {
    var u = $('ld-updated');
    if (u && d.generatedAt) {
      u.textContent = 'updated ' + fmtTime(d.generatedAt);
    }
    var title = $('ld-site-name');
    if (title && d.site && d.site.name) title.textContent = d.site.name;
    renderEnv(d.environment || {});
    renderControllers(d.controllers || []);
    renderSensors(d.sensors || []);
  }

  function tick() {
    if (document.hidden) return;
    fetch('/live-api/demo', { credentials: 'omit', cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (d) {
        clearError();
        render(d);
      })
      .catch(function (e) {
        showError(
          'Demonstration feed could not load (' + e.message + '). ' +
          'The page stays open — retrying automatically.'
        );
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    tick();
    setInterval(tick, POLL_MS);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) tick();
    });
  });
})();
