/**
 * PKYDrip greenhouse platform demo — browser-only playback of internal lab /
 * development-project values. No Cloud/MQTT/device requests.
 * No POST/PUT/PATCH/DELETE.
 */
(function () {
  'use strict';

  var root = document.querySelector('[data-gp-demo]');
  if (!root) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tickTimer = null;
  var toastTimer = null;

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function $(id) {
    return document.getElementById(id);
  }

  function el(tag, attrs, kids) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (key) {
      if (key === 'text') node.textContent = attrs[key];
      else if (key === 'html') node.textContent = attrs.html;
      else if (key === 'className') node.className = attrs[key];
      else if (key.slice(0, 2) === 'on') node.addEventListener(key.slice(2).toLowerCase(), attrs[key]);
      else node.setAttribute(key, attrs[key]);
    });
    (kids || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }

  function svg(tag, attrs) {
    var node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attrs || {}).forEach(function (key) {
      node.setAttribute(key, attrs[key]);
    });
    return node;
  }

  function fmt(n, d) {
    return Number(n).toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });
  }

  function series(seed, n, base, amp) {
    var out = [];
    var s = seed;
    var i;
    for (i = 0; i < n; i += 1) {
      s = (s * 16807) % 2147483647;
      out.push(+(base + ((s % 1000) / 1000 - 0.5) * 2 * amp).toFixed(2));
    }
    return out;
  }

  function polyline(values, color) {
    var max = Math.max.apply(null, values);
    var min = Math.min.apply(null, values);
    var span = max - min || 1;
    var pts = values.map(function (v, i) {
      var x = (i / (values.length - 1)) * 320;
      var y = 88 - ((v - min) / span) * 72;
      return x.toFixed(1) + ',' + y.toFixed(1);
    }).join(' ');
    var image = svg('svg', { viewBox: '0 0 320 100', role: 'presentation' });
    image.appendChild(svg('polyline', {
      fill: 'none',
      stroke: color,
      'stroke-width': '2',
      points: pts
    }));
    return image;
  }

  var INITIAL = {
    site: 'Greenhouse 01',
    crop: 'Tomato',
    todayWater: 126.4,
    plannedWater: 186.0,
    flow: 18.6,
    pressure: 2.4,
    tank: 72,
    activeZone: 3,
    zoneWater: [24.1, 22.8, 21.6, 20.4, 19.2, 18.3],
    irrigation: {
      name: 'Tomato Morning Irrigation',
      greenhouse: 'Greenhouse 01',
      zones: [true, true, true, true, true, true],
      startTrigger: '06:15 local time or soil moisture below 28%',
      targetType: 'volume',
      targetPerZone: 4.2,
      sequence: '1 → 2 → 3 → 4 → 5 → 6',
      allowedFlow: 22,
      allowedPressure: 2.8,
      minTank: 25,
      maxRuntime: 45,
      skipMoisture: 32,
      nextRun: 'Tomorrow 06:15',
      status: 'Published',
      version: 'v4'
    },
    recipes: [
      recipe('Tomato Fruiting Stage V3', 'Tomato', 'Fruiting', '2.3', '6.2', 'Published', 'v3', [40, 35, 15, 10]),
      recipe('Tomato Vegetative V5', 'Tomato', 'Vegetative', '1.8', '6.0', 'Published', 'v5', [35, 40, 18, 7]),
      recipe('Cucumber Production V2', 'Cucumber', 'Production', '2.0', '5.8', 'Published', 'v2', [38, 32, 20, 10]),
      recipe('Clear Water Flush V1', 'Any', 'Flush', '0.4', '6.5', 'Published', 'v1', [0, 0, 0, 0])
    ],
    selectedRecipe: 0,
    compare: null,
    fertigation: {
      stage: 1,
      progress: 42,
      running: true,
      paused: false,
      targetEC: 2.3,
      actualEC: 2.28,
      targetPH: 6.2,
      actualPH: 6.18,
      mixTank: 64,
      dosing: 12.4,
      waterDelivered: 8.7,
      fertUsed: 18.2,
      elapsedMin: 14
    },
    device: {
      manufacturer: 'DemoMet',
      model: 'WS-Compact 12',
      templateId: 'TMP-WS-001',
      version: '1.2',
      port: 'RS485-2',
      slaveId: 12,
      serial: '9600 8N1',
      poll: '10 s',
      valid: null,
      published: false,
      points: [
        point('air_temp', 'Air temperature', 3, 1, 'int16', 'AB', 0.1, 0, '°C', '-10 to 60', 214, 21.4),
        point('air_rh', 'Air humidity', 3, 3, 'uint16', 'AB', 0.1, 0, '%', '0 to 100', 612, 61.2),
        point('wind_speed', 'Wind speed', 3, 5, 'uint16', 'AB', 0.1, 0, 'm/s', '0 to 40', 18, 1.8),
        point('solar', 'Solar radiation', 3, 7, 'uint16', 'AB', 1, 0, 'W/m²', '0 to 1600', 486, 486),
        point('rain_today', 'Rainfall today', 3, 9, 'uint16', 'AB', 0.1, 0, 'mm', '0 to 200', 0, 0)
      ]
    },
    deploy: {
      version: 'CFG-14',
      target: 'MC-16 / Greenhouse 01',
      validFrom: '2026-10-07 18:00',
      expires: '2026-10-14 18:00',
      targetWater: 186,
      flowLimit: 22,
      pressureLimit: 2.8,
      hardPressure: 3.5,
      activate: 'Next safe idle state',
      rollback: 'CFG-13',
      status: 'Approved',
      result: ''
    },
    data: {
      flow: series(11, 24, 18.6, 1.4),
      pressure: series(23, 24, 2.4, 0.18),
      ec: series(41, 24, 2.28, 0.08),
      ph: series(59, 24, 6.18, 0.07),
      updated: 'Today 16:40'
    },
    alarms: [
      alarm('Today 06:22', 'No flow after pump start', 'Pump starter / flow meter', 'Cleared', 'Confirm flow meter pulse and filter before the next run.'),
      alarm('Today 09:14', 'Pressure outside expected range', 'Line pressure sensor', 'Acknowledged', 'Check zone valves and pressure setpoint before resume.'),
      alarm('Yesterday 17:08', 'Low mixing tank level', 'Mixing tank level', 'Open', 'Refill mixing tank above 30% before fertigation.'),
      alarm('Yesterday 14:51', 'Sensor stale', 'Weather station WS-Compact 12', 'Acknowledged', 'Validate Modbus profile and RS485 wiring.'),
      alarm('Yesterday 11:03', 'Configuration rejected', 'MC-16 local safety', 'Cleared', 'Publish a pressure limit below the controller hard limit.')
    ]
  };

  function recipe(name, crop, stage, ec, ph, status, version, ratios) {
    return {
      name: name,
      crop: crop,
      stage: stage,
      greenhouses: 'Greenhouse 01 / Zones 1–6',
      tanks: ['A', 'B', 'Micros', 'Acid'],
      ratios: ratios,
      ec: ec,
      ph: ph,
      ecRange: (Number(ec) - 0.2).toFixed(1) + '–' + (Number(ec) + 0.2).toFixed(1) + ' mS/cm',
      phRange: (Number(ph) - 0.3).toFixed(1) + '–' + (Number(ph) + 0.3).toFixed(1),
      mixMin: 30,
      pre: 1.2,
      fert: 3.8,
      flush: 0.6,
      status: status,
      version: version,
      modifiedBy: 'Demo Operator',
      modifiedAt: '2026-10-06 09:18'
    };
  }

  function point(key, label, fc, addr, type, order, scale, offset, unit, range, raw, eng) {
    return {
      key: key,
      label: label,
      fc: fc,
      addr: addr,
      type: type,
      order: order,
      scale: scale,
      offset: offset,
      unit: unit,
      range: range,
      raw: raw,
      eng: eng
    };
  }

  function alarm(time, name, device, status, action) {
    return { time: time, name: name, device: device, status: status, action: action };
  }

  var state = clone(INITIAL);

  function toast(message) {
    var box = $('gp-toast');
    if (!box) return;
    box.hidden = false;
    box.textContent = message;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      box.hidden = true;
    }, 4200);
  }

  function setPanel(id) {
    root.querySelectorAll('[data-gp-view]').forEach(function (panel) {
      panel.hidden = panel.getAttribute('data-gp-view') !== id;
    });
    root.querySelectorAll('[data-gp-panel]').forEach(function (btn) {
      var on = btn.getAttribute('data-gp-panel') === id;
      btn.classList.toggle('is-active', on);
      if (on) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    });
  }


  function icon(name) {
    var paths = {
      water: ['M12 3.2s-6.4 7.1-6.4 11.1A6.4 6.4 0 0012 20.8a6.4 6.4 0 006.4-6.5C18.4 10.3 12 3.2 12 3.2z'],
      flow: ['M3 8c2.2-2 4.3-2 6.5 0s4.3 2 6.5 0 4.3-2 6.5 0', 'M3 12c2.2-2 4.3-2 6.5 0s4.3 2 6.5 0 4.3-2 6.5 0', 'M3 16c2.2-2 4.3-2 6.5 0s4.3 2 6.5 0 4.3-2 6.5 0'],
      pressure: ['M12 20a8 8 0 110-16 8 8 0 010 16z', 'M12 12l4.2-4.2', 'M12 12v1.8'],
      tank: ['M7 8h10v12H7z', 'M7 12h10', 'M10 4h4', 'M12 4v4'],
      zone: ['M3.5 4.5h5v6.5h-5z', 'M9.5 4.5h5v6.5h-5z', 'M15.5 4.5h5v6.5h-5z', 'M3.5 13h5v6.5h-5z', 'M9.5 13h5v6.5h-5z', 'M15.5 13h5v6.5h-5z'],
      fert: ['M9 3h6', 'M10 3v4.2L6.4 16a4.2 4.2 0 007.2 0L10 7.2', 'M14 3v4.2l3.6 8.8'],
      ec: ['M7 5v14', 'M17 5v14', 'M7 12h10'],
      ph: ['M8 4h8', 'M9 4v5L6 18a4.2 4.2 0 008.4 0L12 9V4', 'M10.2 13.5h3.6'],
      mix: ['M8 4h8v3H8z', 'M9 7l-2 13h10l-2-13', 'M8 13h8'],
      time: ['M12 21a9 9 0 110-18 9 9 0 010 18z', 'M12 7v5.2l3.2 1.8'],
      recipe: ['M5 19c4-9 10-9 14 0', 'M12 4v7', 'M9 8h6'],
      strategy: ['M4 7h16', 'M4 12h16', 'M4 17h16', 'M8 7v10'],
      state: ['M8 6.5v11l9-5.5z']
    };
    var node = svg('svg', {
      class: 'gp-ico',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '1.75',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'aria-hidden': 'true'
    });
    (paths[name] || paths.water).forEach(function (d) {
      node.appendChild(svg('path', { d: d }));
    });
    return node;
  }

  function metric(label, value, extraClass, iconName) {
    return el('div', { className: 'gp-metric' + (extraClass ? ' ' + extraClass : '') }, [
      el('span', { className: 'gp-metric__icon', html: '' }, [icon(iconName || 'water')]),
      el('span', { className: 'gp-metric__copy' }, [
        el('span', { className: 'k', text: label }),
        el('span', { className: 'v', text: value })
      ])
    ]);
  }

  function glanceItem(iconName, label, value, extraClass) {
    return el('li', { className: 'gp-glance__item' + (extraClass ? ' ' + extraClass : '') }, [
      el('span', { className: 'gp-glance__icon' }, [icon(iconName)]),
      el('span', { className: 'k', text: label }),
      el('strong', { text: value })
    ]);
  }

  function kv(rows, target) {
    target.textContent = '';
    rows.forEach(function (row) {
      target.appendChild(el('li', {}, [
        el('span', { text: row[0] }),
        el('strong', { text: row[1] })
      ]));
    });
  }

  function renderOverview() {
    var box = $('gp-metrics');
    box.textContent = '';
    var glance = $('gp-glance');
    if (glance) {
      glance.textContent = '';
      glance.appendChild(glanceItem('water', 'Water use', fmt(state.todayWater, 1) + ' m³', 'is-water'));
      glance.appendChild(glanceItem('flow', 'Flow', fmt(state.flow, 1) + ' m³/h', 'is-flow'));
      glance.appendChild(glanceItem('pressure', 'Pressure', fmt(state.pressure, 1) + ' bar', 'is-pressure'));
      glance.appendChild(glanceItem('fert', 'Fertilizer', fmt(state.fertigation.fertUsed, 1) + ' L', 'is-fert'));
      glance.appendChild(glanceItem('zone', 'Active zone', 'Zone ' + state.activeZone, 'is-zone'));
    }
    box.appendChild(metric('Today water use', fmt(state.todayWater, 1) + ' m³', 'is-water', 'water'));
    box.appendChild(metric('Current flow', fmt(state.flow, 1) + ' m³/h', 'is-flow', 'flow'));
    box.appendChild(metric('Line pressure', fmt(state.pressure, 1) + ' bar', 'is-pressure', 'pressure'));
    box.appendChild(metric('Tank level', fmt(state.tank, 0) + '%', 'is-tank', 'tank'));
    box.appendChild(metric('Active zone', 'Zone ' + state.activeZone, 'is-zone', 'zone'));
    box.appendChild(metric('Planned water', fmt(state.plannedWater, 1) + ' m³', 'is-water', 'water'));
    box.appendChild(metric('Active strategy', state.irrigation.name, 'is-strategy', 'strategy'));
    box.appendChild(metric('Active recipe', state.recipes[state.selectedRecipe].name, 'is-recipe', 'recipe'));

    $('gp-water-summary').textContent =
      fmt(state.todayWater, 1) + ' m³ delivered of ' + fmt(state.plannedWater, 1) + ' m³ planned.';
    var chart = $('gp-water-chart');
    chart.textContent = '';
    var planned = [0, 40, 90, 140, 186];
    var delivered = [0, 28, 71, 108, state.todayWater];
    var image = svg('svg', { viewBox: '0 0 320 100', role: 'presentation' });
    function pts(arr) {
      return arr.map(function (v, i) {
        return ((i / 4) * 300 + 10).toFixed(1) + ',' + (90 - v / 186 * 70).toFixed(1);
      }).join(' ');
    }
    image.appendChild(svg('polyline', { fill: 'none', stroke: '#8aa4b8', 'stroke-width': '2', points: pts(planned) }));
    image.appendChild(svg('polyline', { fill: 'none', stroke: '#1d6fbf', 'stroke-width': '2', points: pts(delivered) }));
    chart.appendChild(image);

    var zones = $('gp-zones');
    zones.textContent = '';
    state.zoneWater.forEach(function (vol, i) {
      var pct = Math.round((vol / Math.max.apply(null, state.zoneWater)) * 100);
      var active = i + 1 === state.activeZone;
      var item = el('li', { className: 'gp-zone' + (active ? ' is-active' : '') }, [
        el('span', { className: 'gp-zone__icon' }, [icon('zone')]),
        el('div', { className: 'gp-zone__copy' }, [
          el('span', { text: 'Zone ' + (i + 1) + (active ? ' · irrigating' : '') }),
          el('strong', { text: fmt(vol, 1) + ' m³' })
        ])
      ]);
      var bar = el('span', { className: 'bar' }, [el('span')]);
      bar.firstChild.style.width = pct + '%';
      item.appendChild(bar);
      zones.appendChild(item);
    });

    kv([
      ['Local control', 'Online — MC-16'],
      ['Cloud sync', 'Synced 2 min ago'],
      ['EG100', 'Connected'],
      ['Safety boundary', 'Local hard limits active']
    ], $('gp-control-status'));

    kv([
      ['Water meter', 'Online · 126.4 m³ today'],
      ['Pressure sensor', 'Online · 2.4 bar'],
      ['Tank level sensor', 'Online · 72%'],
      ['Weather station', 'Online · profile TMP-WS-001']
    ], $('gp-sensors'));
  }

  function fillIrrigation() {
    var form = $('gp-irrigation-form');
    var irr = state.irrigation;
    form.name.value = irr.name;
    form.greenhouse.value = irr.greenhouse;
    form.startTrigger.value = irr.startTrigger;
    form.targetType.value = irr.targetType;
    form.targetPerZone.value = irr.targetPerZone;
    form.sequence.value = irr.sequence;
    form.allowedFlow.value = irr.allowedFlow;
    form.allowedPressure.value = irr.allowedPressure;
    form.minTank.value = irr.minTank;
    form.maxRuntime.value = irr.maxRuntime;
    form.skipMoisture.value = irr.skipMoisture;
    form.nextRun.value = irr.nextRun;
    $('gp-target-unit').textContent = irr.targetType === 'runtime' ? 'min' : 'm³';
    var checks = $('gp-zone-checks');
    checks.textContent = '';
    irr.zones.forEach(function (on, i) {
      var box = el('input', { type: 'checkbox', name: 'zone', value: String(i + 1) });
      box.checked = on;
      checks.appendChild(el('label', {}, [box, document.createTextNode(' Zone ' + (i + 1))]));
    });
    $('gp-irrigation-status').textContent = irr.status + ' · ' + irr.version;
    $('gp-irrigation-status').className = 'gp-status-line ' + (irr.status === 'Published' ? 'is-ok' : 'is-wait');
  }

  function readIrrigation(form) {
    var irr = state.irrigation;
    irr.name = form.name.value;
    irr.greenhouse = form.greenhouse.value;
    irr.startTrigger = form.startTrigger.value;
    irr.targetType = form.targetType.value;
    irr.targetPerZone = Number(form.targetPerZone.value);
    irr.sequence = form.sequence.value;
    irr.allowedFlow = Number(form.allowedFlow.value);
    irr.allowedPressure = Number(form.allowedPressure.value);
    irr.minTank = Number(form.minTank.value);
    irr.maxRuntime = Number(form.maxRuntime.value);
    irr.skipMoisture = Number(form.skipMoisture.value);
    irr.nextRun = form.nextRun.value;
    irr.zones = Array.prototype.map.call(form.querySelectorAll('input[name="zone"]'), function (box) {
      return box.checked;
    });
  }

  function renderFertigation() {
    var fert = state.fertigation;
    var stages = ['Pre-water', 'Fertigation', 'Stabilize', 'Flush'];
    var pipe = $('gp-pipeline');
    pipe.textContent = '';
    stages.forEach(function (name, i) {
      var item = el('li', {}, [
        el('strong', { text: name }),
        el('span', { text: i === fert.stage ? fert.progress + '% complete' : (i < fert.stage ? 'Done' : 'Queued') })
      ]);
      if (i === fert.stage) item.setAttribute('aria-current', 'step');
      pipe.appendChild(item);
    });
    var box = $('gp-fert-metrics');
    box.textContent = '';
    box.appendChild(metric('Target EC', fmt(fert.targetEC, 1) + ' mS/cm', 'is-ec', 'ec'));
    box.appendChild(metric('Actual EC', fmt(fert.actualEC, 2) + ' mS/cm', 'is-ec', 'ec'));
    box.appendChild(metric('Target pH', fmt(fert.targetPH, 1), 'is-ph', 'ph'));
    box.appendChild(metric('Actual pH', fmt(fert.actualPH, 2), 'is-ph', 'ph'));
    box.appendChild(metric('Mixing tank', fmt(fert.mixTank, 0) + '%', 'is-tank', 'mix'));
    box.appendChild(metric('Current flow', fmt(state.flow, 1) + ' m³/h', 'is-flow', 'flow'));
    box.appendChild(metric('Line pressure', fmt(state.pressure, 1) + ' bar', 'is-pressure', 'pressure'));
    box.appendChild(metric('Dosing rate', fmt(fert.dosing, 1) + ' L/h', 'is-fert', 'fert'));
    box.appendChild(metric('Water delivered', fmt(fert.waterDelivered, 1) + ' m³', 'is-water', 'water'));
    box.appendChild(metric('Fertilizer used', fmt(fert.fertUsed, 1) + ' L', 'is-fert', 'fert'));
    box.appendChild(metric('Elapsed time', fert.elapsedMin + ' min', 'is-time', 'time'));
    box.appendChild(metric('Task state', fert.paused ? 'Paused (demo)' : (fert.running ? 'Running (demo)' : 'Idle (demo)'), 'is-state', 'state'));
    kv([
      ['Flow interlock', 'OK'],
      ['Pressure interlock', 'OK'],
      ['Tank interlock', 'OK'],
      ['EC interlock', 'OK'],
      ['pH interlock', 'OK']
    ], $('gp-interlocks'));
    $('gp-fert-summary').textContent =
      'Greenhouse 01 is in ' + stages[fert.stage].toLowerCase() +
      ' using Tomato Fruiting Stage V3. ' +
      fmt(fert.waterDelivered, 1) + ' m³ water and ' +
      fmt(fert.fertUsed, 1) + ' L fertilizer have been used in this demo task.';
  }

  function renderRecipes() {
    var list = $('gp-recipe-list');
    list.textContent = '';
    state.recipes.forEach(function (item, i) {
      var btn = el('button', {
        type: 'button',
        className: i === state.selectedRecipe ? 'is-active' : '',
        text: item.name + ' · ' + item.status + ' ' + item.version
      });
      btn.addEventListener('click', function () {
        state.selectedRecipe = i;
        renderRecipes();
      });
      list.appendChild(el('li', {}, [btn]));
    });
    var rec = state.recipes[state.selectedRecipe];
    var detail = $('gp-recipe-detail');
    detail.textContent = '';
    detail.appendChild(el('h4', { text: rec.name }));
    var meta = el('div', { className: 'gp-recipe-meta' });
    [
      ['Crop', rec.crop],
      ['Growth stage', rec.stage],
      ['Applicable', rec.greenhouses],
      ['Tank A / B / Micros / Acid', rec.ratios.map(function (n) { return n + '%'; }).join(' / ')],
      ['Target EC', rec.ec + ' mS/cm'],
      ['Target pH', rec.ph],
      ['EC range', rec.ecRange],
      ['pH range', rec.phRange],
      ['Mixing tank minimum', rec.mixMin + '%'],
      ['Pre-irrigation volume', rec.pre + ' m³'],
      ['Fertigation volume', rec.fert + ' m³'],
      ['Flush volume', rec.flush + ' m³'],
      ['Status', rec.status + ' · ' + rec.version],
      ['Last modified', rec.modifiedBy + ' · ' + rec.modifiedAt]
    ].forEach(function (row) {
      meta.appendChild(el('div', {}, [el('span', { text: row[0] }), el('strong', { text: row[1] })]));
    });
    detail.appendChild(meta);

    var compare = $('gp-recipe-compare');
    if (!state.compare) {
      compare.hidden = true;
      compare.textContent = '';
      return;
    }
    compare.hidden = false;
    compare.textContent = '';
    compare.appendChild(el('h4', { text: 'Compare Versions' }));
    var grid = el('div', { className: 'gp-grid-2' });
    state.compare.forEach(function (item) {
      grid.appendChild(el('div', {}, [
        el('strong', { text: item.name + ' · ' + item.version }),
        el('p', { text: 'EC ' + item.ec + ' mS/cm · pH ' + item.ph + ' · ' + item.status })
      ]));
    });
    compare.appendChild(grid);
  }

  function renderDevice() {
    var d = state.device;
    var meta = $('gp-device-meta');
    meta.textContent = '';
    meta.appendChild(el('h4', { text: d.manufacturer + ' ' + d.model }));
    var wrap = el('div', { className: 'gp-recipe-meta' });
    [
      ['Template ID', d.templateId],
      ['Version', d.version],
      ['RS485 port', d.port],
      ['Slave ID', String(d.slaveId)],
      ['Baud / parity', d.serial],
      ['Poll interval', d.poll],
      ['Validation', d.valid === null ? 'Not tested' : d.valid],
      ['Publish', d.published ? 'Demo published' : 'Not published']
    ].forEach(function (row) {
      wrap.appendChild(el('div', {}, [el('span', { text: row[0] }), el('strong', { text: row[1] })]));
    });
    meta.appendChild(wrap);

    var body = $('gp-register-body');
    body.textContent = '';
    d.points.forEach(function (p) {
      var row = el('tr', {}, [
        el('td', { text: p.label + ' (' + p.key + ')' }),
        el('td', { text: String(p.fc) }),
        el('td', { text: String(p.addr) }),
        el('td', { text: p.type }),
        el('td', { text: p.order }),
        el('td', { text: p.scale + ' / ' + p.offset }),
        el('td', { text: p.unit }),
        el('td', { text: p.range }),
        el('td', { text: d.poll }),
        el('td', { text: p.raw === null ? '—' : String(p.raw) }),
        el('td', { text: p.eng === null ? '—' : p.eng + ' ' + p.unit })
      ]);
      body.appendChild(row);
    });
  }

  function renderDeploy() {
    var d = state.deploy;
    var pack = $('gp-deploy-pack');
    pack.textContent = '';
    pack.appendChild(el('h4', { text: 'Parameter package' }));
    var wrap = el('div', { className: 'gp-recipe-meta' });
    [
      ['Configuration version', d.version],
      ['Target controller', d.target],
      ['Valid from', d.validFrom],
      ['Expires', d.expires],
      ['Target water volume', d.targetWater + ' m³'],
      ['Flow limit', d.flowLimit + ' m³/h'],
      ['Pressure limit', d.pressureLimit + ' bar'],
      ['Local hard pressure limit', d.hardPressure + ' bar'],
      ['Activation', d.activate],
      ['Rollback version', d.rollback],
      ['Status', d.status]
    ].forEach(function (row) {
      wrap.appendChild(el('div', {}, [el('span', { text: row[0] }), el('strong', { text: row[1] })]));
    });
    pack.appendChild(wrap);
    var result = $('gp-deploy-result');
    result.textContent = d.result;
    result.className = 'gp-status-line ' + (d.status === 'Rejected' ? 'is-stop' : (d.status === 'Deployed' ? 'is-ok' : 'is-wait'));
  }

  function renderData() {
    var host = $('gp-data-charts');
    host.textContent = '';
    [
      ['Flow', 'm³/h', '#1d6fbf', state.data.flow],
      ['Pressure', 'bar', '#16351f', state.data.pressure],
      ['EC', 'mS/cm', '#1c7a44', state.data.ec],
      ['pH', '', '#b8860b', state.data.ph]
    ].forEach(function (item) {
      var card = el('div', { className: 'gp-card' }, [
        el('h4', { text: item[0] + (item[1] ? ' (' + item[1] + ')' : '') }),
        el('p', { className: 'gp-muted', text: 'Source: PKYDrip internal lab / development project · Greenhouse 01 · last update ' + state.data.updated })
      ]);
      card.appendChild(polyline(item[3], item[2]));
      host.appendChild(card);
    });
  }

  function renderAlarms() {
    var body = $('gp-alarm-body');
    body.textContent = '';
    state.alarms.forEach(function (item) {
      var statusClass = item.status === 'Open' ? 'gp-alarm-open' : (item.status === 'Cleared' ? 'gp-alarm-cleared' : 'gp-alarm-acked');
      body.appendChild(el('tr', {}, [
        el('td', { text: item.time }),
        el('td', { text: item.name }),
        el('td', { text: item.device }),
        el('td', { className: statusClass, text: item.status }),
        el('td', { text: item.action })
      ]));
    });
  }

  function render() {
    $('gp-site-name').textContent = state.site + ' — ' + state.crop;
    renderOverview();
    fillIrrigation();
    renderFertigation();
    renderRecipes();
    renderDevice();
    renderDeploy();
    renderData();
    renderAlarms();
  }

  function reset(silent) {
    state = clone(INITIAL);
    render();
    setPanel('overview');
    if (!silent) toast('Demo reset. Internal laboratory demonstration values restored.');
  }

  function downloadCsv() {
    var lines = ['hour,flow_m3h,pressure_bar,ec_mScm,ph'];
    state.data.flow.forEach(function (v, i) {
      lines.push([i, v, state.data.pressure[i], state.data.ec[i], state.data.ph[i]].join(','));
    });
    var blob = new Blob([lines.join('\n')], { type: 'text/csv' });
    var url = URL.createObjectURL(blob);
    var link = el('a', { href: url, download: 'greenhouse-01-demo-data.csv' });
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast('Demo CSV generated in this browser. No server upload.');
  }

  function bind() {
    root.querySelectorAll('[data-gp-reset]').forEach(function (btn) {
      btn.addEventListener('click', function () { reset(false); });
    });
    root.querySelectorAll('[data-gp-panel]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setPanel(btn.getAttribute('data-gp-panel'));
      });
    });
    $('gp-irrigation-form').addEventListener('submit', function (event) {
      event.preventDefault();
      var action = (event.submitter && event.submitter.value) || 'draft';
      readIrrigation(event.currentTarget);
      if (action === 'publish') {
        state.irrigation.status = 'Published';
        state.irrigation.version = 'v5';
        toast('Demo only — no command was sent to a controller.');
      } else {
        state.irrigation.status = 'Draft';
        toast('Irrigation draft saved in this browser only.');
      }
      fillIrrigation();
    });
    $('gp-irrigation-form').targetType.addEventListener('change', function () {
      $('gp-target-unit').textContent = this.value === 'runtime' ? 'min' : 'm³';
    });
    root.querySelectorAll('[data-gp-fert]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var act = btn.getAttribute('data-gp-fert');
        if (act === 'pause') {
          state.fertigation.paused = true;
          state.fertigation.running = false;
          toast('Fertigation demo paused. No pump or valve command was sent.');
        } else if (act === 'resume') {
          state.fertigation.paused = false;
          state.fertigation.running = true;
          toast('Fertigation demo resumed in the browser only.');
        } else {
          state.fertigation = clone(INITIAL.fertigation);
          toast('Fertigation demo task restored.');
        }
        renderFertigation();
      });
    });
    root.querySelectorAll('[data-gp-recipe]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var act = btn.getAttribute('data-gp-recipe');
        var current = state.recipes[state.selectedRecipe];
        if (act === 'duplicate') {
          var copy = clone(current);
          copy.name = 'Copy of ' + current.name;
          copy.status = 'Draft';
          copy.version = 'v1';
          copy.modifiedAt = 'Just now';
          state.recipes.push(copy);
          state.selectedRecipe = state.recipes.length - 1;
          toast('Recipe duplicated in demo memory.');
        } else if (act === 'version') {
          var next = clone(current);
          next.status = 'Draft';
          next.version = current.version + '.1';
          next.modifiedAt = 'Just now';
          state.recipes.push(next);
          state.selectedRecipe = state.recipes.length - 1;
          toast('Demo version created. Nothing was published to a controller.');
        } else {
          var same = state.recipes.filter(function (item) {
            return item.name.replace('Copy of ', '') === current.name.replace('Copy of ', '') ||
              item.name.indexOf(current.name) !== -1 ||
              current.name.indexOf(item.name.replace('Copy of ', '')) !== -1;
          });
          state.compare = same.slice(0, 2);
          if (state.compare.length < 2) state.compare = [current, state.recipes[0]];
          toast('Showing a demo version comparison.');
        }
        renderRecipes();
      });
    });
    root.querySelectorAll('[data-gp-device]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var act = btn.getAttribute('data-gp-device');
        if (act === 'read') {
          state.device.points.forEach(function (p) {
            p.raw = p.raw + Math.round((Math.random() - 0.5) * 4);
            p.eng = +(p.raw * p.scale + p.offset).toFixed(1);
          });
          toast('Demo read complete. Values are from PKYDrip internal lab systems, not a customer farm.');
        } else if (act === 'validate') {
          state.device.valid = 'Valid demo profile';
          toast('Profile validated in the browser. No device was contacted.');
        } else {
          state.device.published = true;
          toast('Demo only — no command was sent to a controller.');
        }
        renderDevice();
      });
    });
    root.querySelectorAll('[data-gp-deploy]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.getAttribute('data-gp-deploy') === 'legal') {
          state.deploy.pressureLimit = 2.8;
          state.deploy.status = 'Deployed';
          state.deploy.result = 'Legal package accepted by MC-16 at next safe idle state. Demo only — no command was sent to a controller.';
          toast('Demo publish succeeded inside the browser.');
        } else {
          state.deploy.pressureLimit = 4.2;
          state.deploy.status = 'Rejected';
          state.deploy.result = 'Rejected by local safety limit. The cloud cannot override the controller\'s hard limit.';
          toast('MC-16 rejected the over-limit demo package.');
        }
        renderDeploy();
      });
    });
    root.querySelector('[data-gp-csv]').addEventListener('click', downloadCsv);
  }

  function tick() {
    if (reduceMotion) return;
    if (state.fertigation.running && !state.fertigation.paused) {
      state.fertigation.progress = Math.min(99, state.fertigation.progress + 1);
      if (state.fertigation.progress >= 99 && state.fertigation.stage < 3) {
        state.fertigation.stage += 1;
        state.fertigation.progress = 8;
      }
      state.fertigation.elapsedMin += 1;
      state.fertigation.waterDelivered = +(state.fertigation.waterDelivered + 0.05).toFixed(2);
    }
    state.flow = +(18.6 + Math.sin(Date.now() / 18000) * 0.35).toFixed(2);
    state.pressure = +(2.4 + Math.cos(Date.now() / 22000) * 0.08).toFixed(2);
    state.tank = +(72 + Math.sin(Date.now() / 40000) * 0.8).toFixed(1);
    renderOverview();
    renderFertigation();
  }

  bind();
  reset(true);
  if (!reduceMotion) {
    tickTimer = window.setInterval(tick, 4000);
  }
})();
