/**
 * PKYDrip marketing tags and CTA conversion helpers.
 * gtag.js is requested once (GA4 G-Y5HHC5PQ2D). Ads AW-16640554458 is configured
 * on that same instance. Libraries load on first interaction or a 10s fallback
 * so they stay off the Lighthouse TBT window.
 */
(function () {
  var GA_ID = 'G-Y5HHC5PQ2D';
  var PIXEL_SRC = 'https://connect.facebook.net/en_US/fbevents.js';
  var GTAG_SRC = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  var FALLBACK_MS = 10000;
  var WA_CONVERSION = 'AW-16640554458/LZQ5CLWU1aEcENrr6v49';
  var FORM_CONVERSION = 'AW-16640554458/EylDCILU9IEbENrr6v49';

  function injectScript(flag, src) {
    if (window[flag]) return;
    window[flag] = true;
    var script = document.createElement('script');
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function loadMarketing() {
    injectScript('__pkyGtagRequested', GTAG_SRC);
    injectScript('__pkyPixelRequested', PIXEL_SRC);
  }

  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(function (eventName) {
    window.addEventListener(eventName, loadMarketing, { once: true, passive: true });
  });
  window.setTimeout(loadMarketing, FALLBACK_MS);

  if (window.location.href.indexOf('/message_sent') !== -1 && typeof gtag === 'function') {
    gtag('event', 'conversion', { send_to: FORM_CONVERSION });
  }

  var whatsappConversionFired = false;

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (href.indexOf('wa.me') === -1 && href.indexOf('whatsapp.com') === -1) return;

    loadMarketing();

    if (!whatsappConversionFired) {
      whatsappConversionFired = true;
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', { send_to: WA_CONVERSION });
      }
    }
    if (typeof gtag === 'function') {
      gtag('event', 'Whatsapp_Click20250917');
    }
    if (typeof fbq === 'function') {
      fbq('track', 'Contact');
    }

    if (!link.dataset.waHrefBase) {
      link.dataset.waHrefBase = href;
    }
    var base = link.dataset.waHrefBase;
    if (!base) return;
    try {
      var url = new URL(base, window.location.href);
      var stored = (window.pkyLeadSource && window.pkyLeadSource.fields()) || {};
      var pageParams = new URLSearchParams(window.location.search);
      var utmSource = stored.utm_source || pageParams.get('utm_source') || '';
      var utmMedium = stored.utm_medium || pageParams.get('utm_medium') || '';
      var utmCampaign = stored.utm_campaign || pageParams.get('utm_campaign') || '';
      var gclid = stored.gclid || pageParams.get('gclid') || '';
      var pathname = stored.first_landing || window.location.pathname || '';
      var lines = ['Page: ' + pathname];
      if (stored.lead_source) lines.push('Lead: ' + stored.lead_source);
      if (utmSource) lines.push('Source: ' + utmSource);
      if (utmMedium) lines.push('Medium: ' + utmMedium);
      if (utmCampaign) lines.push('Campaign: ' + utmCampaign);
      if (gclid) lines.push('gclid: ' + gclid);
      var existing = url.searchParams.get('text') || '';
      var combined = existing ? (existing + '\n\n' + lines.join('\n')) : lines.join('\n');
      url.searchParams.set('text', combined);
      link.setAttribute('href', url.toString());
    } catch (err) {
      /* invalid base URL: leave href unchanged */
    }
  }, true);
})();
