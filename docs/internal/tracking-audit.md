# Tracking & Analytics Audit

Purpose: document current page identification, analytics, ad conversion, Meta Pixel, and WhatsApp tracking before any V2 navigation or homepage changes.

This is an audit only. No tracking code, page content, templates, navigation, or URLs were changed.

## Executive Summary

The current tracking stack is concentrated in the shared head partial:

- `layouts/partials/head.html`

That partial loads:

- GA4
- Google Ads global tag
- Google Ads WhatsApp click conversion
- Google Ads thank-you page conversion
- Meta Pixel via `layouts/partials/facebook-pixel.html`
- WhatsApp click tracking and attribution appending

The strongest V2 risk is accidentally replacing or bypassing the shared `head.html` partial while consolidating templates. If a new base template, landing template, or custom tool template does not call the shared head partial, pageview tracking, ad conversion tracking, Meta Pixel, and WhatsApp click attribution may stop on that page family.

## Page Identification

### ID Systems Currently In Use

| ID Field / Pattern | Example | Stored In | Purpose / Notes |
| --- | --- | --- | --- |
| `page_code` | `PC-0801-2-02-PROD-PKY-EG08-03` | Page front matter | Most common page identifier. Used across product, landing, partner, guide, docs, applications, and solution pages. |
| `page_code` legacy numeric pattern | `0801-2-02-PKY-60W` | Page front matter | Older product/page ID format without `PC-` prefix. |
| `product_code` | `PKY-IC05` | Product front matter | Product/module identifier. Often paired with `page_code`. |
| `solution_code` | `SOL-0801-2-02-FERTIGATION-01` | Solution front matter | Used on some solution pages instead of `page_code`. |
| Solution-style `page_code` | `SOL-0801-2-02-GREENHOUSE-01` | Solution front matter | Some solution pages use `page_code` with `SOL-` prefix rather than `solution_code`. |
| Application-style `page_code` | `APP-0801-2-02-ORCHARD-01` | Application front matter | Used on some application pages. |
| Landing-style `page_code` | `PC-LAND-PARTNER-AU-01` | Landing front matter | Used on landing and partner recruitment pages. |
| Strategy-style `page_code` | `STRATEGY-FARM-CONTROL-PLATFORM-01` | Strategy content front matter | Used on strategy/planning page content. |

### ID Field Counts

Current scan of `content/` found:

| Field | Count |
| --- | ---: |
| Files with any tracked ID field | 54 |
| `page_code` | 51 |
| `product_code` | 14 |
| `solution_code` | 3 |

### Where IDs Are Stored

IDs are primarily stored in content front matter:

- `content/english/product/...`
- `content/english/solution/...`
- `content/english/landing/...`
- `content/english/partner/...`
- `content/english/docs/...`
- `content/english/guides/...`
- `content/english/applications/...`
- `content/english/strategy/...`

Examples:

- `content/english/product/pky-60w.md`
- `content/english/product/pky-eg08.md`
- `content/english/landing/australia-irrigation-partner/index.md`
- `content/english/solution/open-field-irrigation/index.md`
- `content/english/docs/fertigation-basics/index.md`

### Whether IDs Appear In Templates

Yes. Several templates read `.Params.page_code`.

| Template | Public / Form Usage |
| --- | --- |
| `layouts/_default/engineering-page.html` | Displays `Reference: {{ .Params.page_code }}` publicly. |
| `layouts/product/engineering-page.html` | Displays `Reference: {{ .Params.page_code }}` publicly. |
| `layouts/docs/engineering-page.html` | Displays `Reference: {{ .Params.page_code }}` publicly. |
| `layouts/applications/engineering-page.html` | Displays `Reference: {{ .Params.page_code }}` publicly. |
| `layouts/product/farm-irrigation-controller.html` | Displays `Reference code: {{ .Params.page_code }}` publicly. |
| `layouts/product/pump-valve-control-system.html` | Displays `Reference code` and `Reference` publicly. |
| `layouts/landing/partner-program.html` | Includes `<input type="hidden" name="page_code" value="{{ .Params.page_code }}">` in the form. |

### Whether IDs Are Shown Publicly

Yes, in some templates.

Public display:

- Engineering page templates show `Reference: page_code`.
- Some custom product templates show `Reference code`.
- Many WhatsApp links include page code, product code, solution code, or `Page:` text inside the prefilled WhatsApp message.

Hidden / non-visual use:

- Partner landing forms include `page_code` as a hidden input.
- WhatsApp URL text is not displayed as normal page copy, but it is visible in page source and becomes visible to the user when opening WhatsApp.

Not standardized:

- Some pages use `page_code`.
- Some use `solution_code`.
- Some use `product_code`.
- Some older pages use IDs directly inside WhatsApp text but not as front matter.

## Google Analytics

### GA4 Measurement ID

| Item | Value |
| --- | --- |
| GA4 Measurement ID | `G-Y5HHC5PQ2D` |
| Loaded From | `layouts/partials/head.html` |
| Script Source | `https://www.googletagmanager.com/gtag/js?id=G-Y5HHC5PQ2D` |
| Config Call | `gtag('config', 'G-Y5HHC5PQ2D')` |

### Where Loaded

The GA4 tag is loaded in:

- `layouts/partials/head.html`

The project base template loads that partial:

- `layouts/_default/baseof.html`

The theme base template also calls `partial "head.html"`:

- `themes/airspace-hugo/layouts/_default/baseof.html`

Because the project has a local `layouts/partials/head.html`, Hugo should resolve `partial "head.html"` to the local project partial first.

### Whether It Is Global

Mostly yes for Hugo-rendered pages that use a base template calling `partial "head.html"`.

Important exception:

- Static standalone files under `static/` are served directly and do not automatically receive Hugo head partial tracking.
- Downloaded PDFs and static HTML brochures should not be assumed to have GA4 tracking unless manually embedded.

## Google Ads

### Google Ads Global Tag

| Item | Value |
| --- | --- |
| Google Ads ID | `AW-16640554458` |
| Loaded From | `layouts/partials/head.html` |
| Config Call | `gtag('config', 'AW-16640554458')` |

### Conversion Tags

| Conversion | Trigger | Location | Send To |
| --- | --- | --- | --- |
| WhatsApp click conversion | First `wa.me` click after DOMContentLoaded | `layouts/partials/head.html` | `AW-16640554458/LZQ5CLWU1aEcENrr6v49` |
| Thank-you page conversion | Page URL contains `/message_sent` on window load | `layouts/partials/head.html` | `AW-16640554458/EylDCILU9IEbENrr6v49` |

### Remarketing Tag

No separate explicit Google Ads remarketing snippet was found.

However, the global Google Ads config is present:

- `gtag('config', 'AW-16640554458')`

Depending on Google Ads account configuration, remarketing features may be supported through the global tag. The codebase itself does not contain a distinct remarketing event or remarketing-only snippet.

## Meta Pixel

### Pixel ID

| Item | Value |
| --- | --- |
| Meta Pixel ID | `1261846228680902` |
| Loaded From | `layouts/partials/facebook-pixel.html` |
| Included By | `layouts/partials/head.html` |

### Where Loaded

`layouts/partials/head.html` includes:

```go-html-template
{{ partial "facebook-pixel.html" . }}
```

The pixel partial:

- Loads `https://connect.facebook.net/en_US/fbevents.js`
- Runs `fbq('init', '1261846228680902')`
- Runs `fbq('track', 'PageView')`
- Includes a noscript PageView image fallback

### WhatsApp Contact Event

`layouts/partials/facebook-pixel.html` also listens for clicks on links containing:

- `wa.me`
- `whatsapp.com`

When such a link is clicked, it triggers:

```js
fbq('track', 'Contact');
```

## WhatsApp Tracking

### Global WhatsApp Click Tracking

Global WhatsApp click tracking is implemented in:

- `layouts/partials/head.html`

It tracks WhatsApp clicks using Google Analytics / gtag:

```js
gtag('event', 'Whatsapp_Click20250917');
```

It also fires a Google Ads conversion event on the first `wa.me` click:

- `AW-16640554458/LZQ5CLWU1aEcENrr6v49`

Meta Pixel also tracks WhatsApp clicks as:

- `fbq('track', 'Contact')`

### UTM / Page Source Tracking

The global WhatsApp script appends attribution text to WhatsApp links at click time.

It reads from the current page URL:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `gclid`
- current page pathname

It appends these lines into the WhatsApp prefilled text:

- `Page: /current/path/`
- `Source: ...`
- `Medium: ...`
- `Campaign: ...`
- `gclid: ...`

This is useful because users arriving from ads can carry campaign parameters into the WhatsApp conversation.

### Page-Specific WhatsApp Prefill

Many content pages and templates also include page-specific WhatsApp text manually.

Examples include:

- `Page: PC-0801-2-02-LAND-SUPPLIER-FARM-CTRL-01`
- `Code: SOL-0801-2-02-FERTIGATION-01`
- `Source: tools/pump-sizing-request-form`
- `Source: https://smart.pky-dripirrigation.com/...`
- Product inquiry text such as `Product: PKY-IC05`

### Custom WhatsApp Logic

Several tools and guides build WhatsApp links dynamically:

| Area | File / Template | Logic |
| --- | --- | --- |
| Irrigation wizard | `layouts/irrigation-wizard/single.html` | Builds a WhatsApp link from user project inputs. |
| Pump sizing calculator | `content/english/tools/pump-sizing/pump-sizing-calculator-v2.html` | Builds `wa.me` URL with generated pump sizing message. |
| Pump sizing request form | `content/english/tools/pump-sizing/pump-sizing-request-form.html` | Hidden `source_page` field and dynamic WhatsApp link for photos/details. |
| Sprinkler gun pump chart | `content/english/tools/pump-sizing/sprinkler-gun-pump-sizing-chart/index.html` | Adds `Source:` into generated WhatsApp text. |
| Guide ACT01 | `content/english/guide/guide-act01.html` | Builds WhatsApp summary from guide inputs. |

## Other Analytics Configuration

The config file contains disabled/empty analytics settings:

- `config/_default/params.toml`

| System | Status |
| --- | --- |
| Matomo | `enable = false`, empty URL and ID |
| Baidu analytics | `enable = false`, empty analytics ID |
| Plausible | `enable = false`, empty domain |
| Counter.dev | `enable = false`, empty ID |
| reCAPTCHA | `use_recaptcha = false` |

These are not active tracking systems in the current code path.

## Risk Assessment

### What Could Accidentally Break Tracking

| Risk | Impact |
| --- | --- |
| Replacing `layouts/partials/head.html` or removing analytics code from it | Breaks GA4, Google Ads, Meta Pixel include, WhatsApp click tracking, and attribution appending. |
| Creating a new base template that does not call `partial "head.html"` | New page family may have no analytics or ad conversion tracking. |
| Creating custom landing/tool templates that bypass the normal Hugo base template | Campaign traffic may lose pageview and conversion tracking. |
| Removing `layouts/partials/facebook-pixel.html` include from `head.html` | Breaks Meta PageView and WhatsApp Contact event. |
| Changing WhatsApp links from `wa.me` / `whatsapp.com` to another format | Existing click selectors may stop firing. |
| Replacing WhatsApp links after page load without preserving click handlers | Google Ads and gtag click tracking may miss those links unless event delegation catches them. |
| Removing or renaming `page_code`, `product_code`, or `solution_code` front matter | Breaks reference codes in templates, hidden partner forms, and page-specific WhatsApp context. |
| Removing visible `Reference` output without replacing it intentionally | Sales/support may lose public reference code context. |
| Removing `/message_sent` or changing the success URL | Thank-you page conversion may stop firing. |
| Serving important campaign pages from `static/` instead of Hugo content/templates | Static pages will not automatically inherit global head tracking. |

### Templates / Partials That Must Preserve Tracking

These files are critical:

- `layouts/partials/head.html`
- `layouts/partials/facebook-pixel.html`
- `layouts/_default/baseof.html`
- `themes/airspace-hugo/layouts/_default/baseof.html`

These template families should be checked during V2 changes because they rely on the base/head chain:

- Home template
- System templates
- Solution templates
- Product templates
- Resource/docs/tools templates
- Landing templates
- Partner templates
- Custom tool templates

### Partials Containing Analytics Code

| Partial | Tracking Role |
| --- | --- |
| `layouts/partials/head.html` | GA4, Google Ads global tag, Google Ads conversion events, Meta Pixel include, WhatsApp gtag event, WhatsApp UTM/gclid attribution appending. |
| `layouts/partials/facebook-pixel.html` | Meta Pixel PageView, noscript fallback, WhatsApp Contact event. |
| `themes/airspace-hugo/layouts/partials/style.html` | Preconnect/dns-prefetch for Google Tag Manager, Google Analytics, and Facebook. Not a tracker itself, but supports loading performance. |

## V2 Safety Rules

Before any V2 navigation, homepage, or template restructuring:

1. Keep `partial "head.html"` in every base template.
2. Do not split or replace `head.html` without copying GA4, Google Ads, Meta Pixel include, and WhatsApp tracking intentionally.
3. Do not remove `facebook-pixel.html` unless Meta tracking is intentionally retired.
4. Do not change `/message_sent` conversion behavior without updating the Google Ads thank-you conversion trigger.
5. Do not rename `page_code`, `product_code`, or `solution_code` until a replacement ID standard exists.
6. For any new Landing template, confirm that WhatsApp links use `wa.me` or `whatsapp.com` so existing click tracking works.
7. For any new tool that creates WhatsApp links dynamically, include source/page context in the generated message.
8. After template changes, test at least one page from each major family and click a WhatsApp link in preview to confirm the final URL receives page/source attribution.

## Open Questions For Future Tracking Standardization

- Should `page_code`, `product_code`, and `solution_code` be unified into one standard ID model?
- Should `solution_code` remain separate or become a type of `page_code`?
- Should public `Reference:` codes remain visible on V2 pages?
- Should static brochure pages be converted into Hugo-rendered pages if campaign tracking is required?
- Should WhatsApp click event naming be updated from `Whatsapp_Click20250917` to a more durable naming standard?
- Should Google Ads conversions be centralized through Google Tag Manager in the future, or remain direct `gtag` calls?

