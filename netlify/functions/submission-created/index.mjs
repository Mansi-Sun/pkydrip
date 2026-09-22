/**
 * Netlify Forms event: every successful form on smart.pky-dripirrigation.com
 * (contact, partner, landing, tools) triggers this after submit.
 *
 * 1) Auto-reply to the visitor
 * 2) Notify business inboxes (sandy / alice / info by default)
 *
 * Netlify → Site configuration → Environment variables:
 *   RESEND_API_KEY          preferred (verified domain pky-dripirrigation.com)
 *   or SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS
 *   MAIL_FROM               default: PKYDrip <info@pky-dripirrigation.com>
 *   LEAD_NOTIFY_EMAILS      default: sandy@, alice@, info@
 *   MAIL_AUTOREPLY=0        to disable visitor confirmation only
 */
import { handleSubmission } from './form-mail.mjs';

export async function handler(event) {
  if (!event.body) return { statusCode: 204, body: '' };
  try {
    const result = await handleSubmission(event.body, process.env);
    if (result.staff?.skipped && result.visitor?.skipped !== false) {
      console.warn('[form-mail] no RESEND_API_KEY or SMTP_* — emails not sent');
    }
    console.log('[form-mail]', JSON.stringify(result));
    return { statusCode: 200, body: JSON.stringify({ ok: true, result }) };
  } catch (err) {
    console.error('[form-mail] failed', err);
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(err.message || err) }) };
  }
}
