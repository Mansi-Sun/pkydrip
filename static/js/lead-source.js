/* First-touch attribution for Netlify forms. Capture on every page, fill hidden fields on submit. */
(function () {
  var KEY = 'pky_lead_source';
  var UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'];

  function readStore() {
    try {
      return JSON.parse(sessionStorage.getItem(KEY) || '{}') || {};
    } catch (e) {
      return {};
    }
  }

  function writeStore(data) {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) { /* private mode */ }
  }

  function capture() {
    var query = new URLSearchParams(window.location.search);
    var data = readStore();
    var href = (window.location.pathname || '/') + (window.location.search || '');
    if (!data.first_landing) {
      data.first_landing = href;
      data.first_at = new Date().toISOString();
    }
    data.last_page = href;
    UTM.forEach(function (key) {
      var value = (query.get(key) || '').trim();
      if (value && !data[key]) data[key] = value;
    });
    var src = (query.get('src') || query.get('source') || '').trim();
    if (src) {
      if (!data.entry_src) data.entry_src = src;
      data.last_src = src;
    }
    writeStore(data);
    return data;
  }

  function leadLabel(data) {
    if (data.utm_source) {
      return [data.utm_source, data.utm_medium, data.utm_campaign].filter(Boolean).join('/');
    }
    if (data.last_src) return data.last_src;
    if (data.entry_src) return data.entry_src;
    var first = (data.first_landing || '').split('?')[0];
    if (first && first !== '/' && first !== '/contact/' && first !== '/contact') return first;
    return 'direct';
  }

  function fieldsFrom(data) {
    return {
      lead_source: leadLabel(data),
      first_landing: data.first_landing || '',
      last_page: data.last_page || '',
      page_url: window.location.href,
      referrer: document.referrer || '',
      utm_source: data.utm_source || '',
      utm_medium: data.utm_medium || '',
      utm_campaign: data.utm_campaign || '',
      utm_content: data.utm_content || '',
      utm_term: data.utm_term || '',
      gclid: data.gclid || '',
      entry_src: data.last_src || data.entry_src || ''
    };
  }

  function fillForms() {
    var values = fieldsFrom(capture());
    var forms = document.querySelectorAll('form[data-netlify="true"], form[netlify], form.c2-form, form.partner-form, form.mena-lp__form, form.oem-ic-form');
    forms.forEach(function (form) {
      Object.keys(values).forEach(function (name) {
        var input = form.querySelector('input[name="' + name + '"]');
        if (input) input.value = values[name];
      });
    });
  }

  window.pkyLeadSource = {
    capture: capture,
    fields: function () { return fieldsFrom(capture()); }
  };

  capture();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fillForms);
  } else {
    fillForms();
  }
})();
