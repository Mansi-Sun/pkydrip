const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_NOTIFY = [
  'sandy@pky-dripirrigation.com',
  'alice@pky-dripirrigation.com',
  'info@pky-dripirrigation.com'
];
const DEFAULT_FROM = 'PKYDrip <info@pky-dripirrigation.com>';

export function parseEmails(raw, fallback = DEFAULT_NOTIFY) {
  const list = String(raw || '')
    .split(/[,;\s]+/)
    .map((s) => s.trim().toLowerCase())
    .filter((s) => EMAIL_RE.test(s));
  return list.length ? [...new Set(list)] : fallback;
}

export function field(data, ...keys) {
  for (const key of keys) {
    const value = data?.[key];
    if (value == null || value === '') continue;
    if (Array.isArray(value)) {
      const text = value.map((item) => String(item).trim()).filter(Boolean).join(', ');
      if (text) return text;
      continue;
    }
    const text = String(value).trim();
    if (text) return text;
  }
  return '';
}

function fileLinks(payload, data) {
  const links = [];
  const files = payload.files || data.files || [];
  if (Array.isArray(files)) {
    for (const file of files) {
      const url = file.url || file.file || file;
      const name = file.filename || file.name || 'attachment';
      if (url) links.push(`${name}: ${url}`);
    }
  }
  for (const key of ['rfq_file', 'file', 'attachment', 'specification']) {
    const value = data?.[key];
    if (typeof value === 'string' && /^https?:\/\//.test(value) && !links.some((line) => line.includes(value))) {
      links.push(`${key}: ${value}`);
    }
  }
  return links.join('\n');
}

export function parseSubmission(body) {
  const root = typeof body === 'string' ? JSON.parse(body || '{}') : body || {};
  const payload = root.payload || root;
  const data = payload.data || {};
  const email = field(data, 'email', 'Email', 'work_email', 'contact_email') || field(payload, 'email');
  const name = field(data, 'name', 'Full name', 'full_name', 'contact_name') || field(payload, 'name') || 'there';
  return {
    formName: payload.form_name || data['form-name'] || 'website-form',
    name,
    email,
    data,
    files: fileLinks(payload, data),
    siteUrl: payload.site_url || 'https://smart.pky-dripirrigation.com'
  };
}

function escape(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function lines(pairs) {
  return pairs
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');
}

export function buildVisitorMail(sub) {
  const first = sub.name === 'there' ? 'Hello' : `Hello ${sub.name}`;
  const oem = sub.formName === 'oem_rfq';
  const body = oem
    ? 'Thank you for your OEM / private-label RFQ. We have received it and will first match it to the closest existing PKYDrip platform, then reply within one business day with what can be used directly, what needs customization, and what should be developed separately.'
    : 'Thank you for contacting PKYDrip. We have received your inquiry and will reply within one business day with catalog, pricing direction, and a recommended configuration.';
  const text = [
    `${first},`,
    '',
    body,
    '',
    'If your request is urgent, message us on WhatsApp: +86 173 9529 7329',
    'https://wa.me/8617395297329',
    '',
    '— PKYDrip',
    'https://smart.pky-dripirrigation.com/'
  ].join('\n');
  return {
    to: sub.email,
    subject: oem ? 'We received your OEM RFQ — PKYDrip' : 'We received your inquiry — PKYDrip',
    text,
    html: `<p>${escape(first)},</p><p>${escape(body)}</p><p>If your request is urgent, message us on WhatsApp: <a href="https://wa.me/8617395297329">+86 173 9529 7329</a></p><p>— PKYDrip<br><a href="https://smart.pky-dripirrigation.com/">smart.pky-dripirrigation.com</a></p>`
  };
}

const STAFF_ORDER = [
  ['Name', ['name', 'Full name', 'full_name', 'contact_name']],
  ['Email', ['email', 'Email', 'contact_email', 'work_email']],
  ['Phone / WhatsApp', ['phone', 'whatsapp', 'contact_phone', 'Phone / WhatsApp']],
  ['Company', ['company', 'Company / Farm Name']],
  ['Website', ['website']],
  ['Country / market', ['market', 'country', 'Country / market']],
  ['Business type', ['business_type', 'Business type']],
  ['Product type', ['product_type', 'product_interest', 'Product interest']],
  ['Zones', ['zones']],
  ['Valve type', ['valve_type']],
  ['Connectivity', ['connectivity']],
  ['Software / Cloud', ['software_cloud']],
  ['Customization', ['customization']],
  ['Quantity', ['quantity', 'order_type', 'Estimated order type']],
  ['Message', ['project_description', 'message', 'Project details', 'Message', 'notes']],
  ['RFQ file', ['rfq_file']],
  ['Page code', ['page_code']],
  ['Lead source', ['lead_source']],
  ['Entry', ['entry_src']],
  ['First landing', ['first_landing']],
  ['UTM source', ['utm_source']],
  ['UTM medium', ['utm_medium']],
  ['UTM campaign', ['utm_campaign']],
  ['gclid', ['gclid']],
  ['Page', ['page_url', 'last_page']],
  ['Referrer', ['referrer']]
];

export function buildStaffMail(sub, notifyTo) {
  const pairs = STAFF_ORDER.map(([label, keys]) => [label, field(sub.data, ...keys)]);
  if (!pairs[0][1] && sub.name && sub.name !== 'there') pairs[0][1] = sub.name;
  if (!pairs[1][1] && sub.email) pairs[1][1] = sub.email;
  const filePair = pairs.find(([label]) => label === 'RFQ file');
  if (filePair && !filePair[1] && sub.files) filePair[1] = sub.files;
  const product = field(sub.data, 'product_type', 'product_interest', 'Product interest') || sub.formName;
  const source = field(sub.data, 'lead_source') || 'website';
  const tag = sub.formName === 'oem_rfq' ? 'OEM RFQ' : 'inquiry';
  const text = [
    `New ${tag} from ${sub.siteUrl}`,
    `Form: ${sub.formName}`,
    '',
    lines(pairs),
    '',
    'Reply directly to this email to reach the visitor.'
  ].join('\n');
  const rows = pairs
    .filter(([, value]) => value)
    .map(([label, value]) => `<tr><th align="left" style="padding:4px 12px 4px 0;color:#5b7268;white-space:nowrap">${escape(label)}</th><td style="padding:4px 0">${escape(value).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');
  return {
    to: notifyTo,
    replyTo: EMAIL_RE.test(sub.email) ? sub.email : undefined,
    subject: `[PKYDrip ${tag}] ${sub.name === 'there' ? product : sub.name} — ${source}`,
    text,
    html: `<p>New inquiry from <a href="${escape(sub.siteUrl)}">${escape(sub.siteUrl)}</a><br>Form: <code>${escape(sub.formName)}</code></p><table>${rows}</table><p>Reply directly to this email to reach the visitor.</p>`
  };
}

export async function sendMail(mail, env = process.env) {
  const from = env.MAIL_FROM || DEFAULT_FROM;
  const payload = { from, ...mail };
  if (env.RESEND_API_KEY) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: payload.from,
        to: Array.isArray(payload.to) ? payload.to : [payload.to],
        reply_to: payload.replyTo,
        subject: payload.subject,
        text: payload.text,
        html: payload.html
      })
    });
    const body = await res.text();
    if (!res.ok) throw new Error(`Resend ${res.status}: ${body.slice(0, 240)}`);
    return { ok: true, via: 'resend' };
  }
  if (env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS) {
    const nodemailer = await import('nodemailer');
    const port = Number(env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: payload.from,
      to: payload.to,
      replyTo: payload.replyTo,
      subject: payload.subject,
      text: payload.text,
      html: payload.html
    });
    return { ok: true, via: 'smtp' };
  }
  return { ok: false, via: 'none', skipped: true };
}

export async function handleSubmission(rawBody, env = process.env) {
  const sub = parseSubmission(rawBody);
  const notify = parseEmails(env.LEAD_NOTIFY_EMAILS);
  const result = { formName: sub.formName, visitor: null, staff: null };

  if (EMAIL_RE.test(sub.email) && env.MAIL_AUTOREPLY !== '0') {
    result.visitor = await sendMail(buildVisitorMail(sub), env);
  }
  result.staff = await sendMail(buildStaffMail(sub, notify), env);
  return result;
}
