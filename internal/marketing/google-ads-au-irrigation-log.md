# Google Ads AU / Online Demo — Internal Log

## 2026-09-21 — Online Demo Gateway V1

**Branch:** `feat/online-demo-gateway-v1` (from `live-demo-gateway`)  
**URL:** `/live-demo/`  
**Related Ads LP branch (do not merge until demo ready):** `feat/google-ads-au-farm-irrigation-lp`

### Existing implementation reused

From `live-demo-gateway`:

- `/live-demo/` page shell + read-only dashboard UI
- `static/js/live-demo.js` polling of `/live-api/pub/preview` and `/live-api/pub/snapshot`
- `netlify.toml` reverse proxy: `/live-api/pub/*` → demonstration pub API (read-only)
- Netlify Forms pattern already used site-wide (`data-netlify`, honeypot)

### V1 changes

- Replaced Netlify Identity registration as the primary unlock path (no user accounts / password reset in V1)
- Primary path: short B2B **Access Online Demo** form → Netlify Forms lead → unlock read-only full view in-session
- Kept **Book a Live Demo** / Contact as a separate human consultation path
- Softened “live customer farm” wording to demonstration / historical monitoring data
- Added `demo_access_request` analytics event (distinct from `cta-online-demo` clicks)
- Restricted `?api=` override to localhost only

### Lead storage

Netlify Forms form name: `demo-access-request`

Fields: timestamp (Netlify), name, email, country, organization, project_type, whatsapp, source, campaign, landing_page, page_code, utm_*, gclid

### Email

No transactional email provider is configured in-repo.

Use Netlify Form notifications (Site settings → Forms):

1. Notify site owners on new `demo-access-request`
2. Optional outgoing auto-reply to submitter:
   - Subject: `PKYDrip Online Demo Access`
   - Body: confirm receipt + note that the read-only dashboard unlocks on `/live-demo/` after submit; guided demos remain via `/book-a-demo/`

### Demo Cloud access method (V1)

- Public aggregate preview always visible via `/live-api/pub/preview`
- Fuller read-only view via `/live-api/pub/snapshot` after successful form submit (sessionStorage gate in UI)
- **No shared passwords, API keys, MQTT secrets, or control endpoints are exposed in frontend source**
- Netlify proxy must continue to allow **only** `/live-api/pub/*` (never `/api/control`)

### Required manual configuration (Netlify)

- Confirm Identity is **not required** for V1 (optional to leave disabled)
- Enable form notifications for `demo-access-request`
- Optional: outbound acknowledgement email template
- Confirm `/live-api/pub/*` proxy reaches the demonstration host after deploy
- Verify GA4 receives `demo_access_request` (DebugView)

### Environment variables / secrets

None required in the Hugo repo for V1.

If a future transactional email provider is added, do **not** hardcode keys. Document placeholders only, e.g.:

- `DEMO_NOTIFY_FROM`
- `DEMO_NOTIFY_PROVIDER_API_KEY` (Netlify env only)

### Security notes

- Frontend contains no production credentials
- Control / write APIs must remain unproxied
- UI unlock is lead-gated, not cryptographic; security relies on desensitised pub API + proxy allowlist
- Do not publish real customer farm credentials or private tenant data on the demonstration feed

### Recommendation

See agent report: merge readiness depends on confirming the pub proxy + form notifications on a Netlify preview deploy.
