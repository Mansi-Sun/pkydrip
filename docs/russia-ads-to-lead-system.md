# Russia Ads-to-Lead System

Strategic routing layer for PKYDrip `/ru/` section. **Not content** — keyword → landing → contact conversion architecture.

Machine-readable source of truth: [`data/russia/ads-routing.yaml`](../data/russia/ads-routing.yaml)

---

## Keyword Clusters → Landing Pages

### 1. Irrigation Control

| Keywords (EN) | Keywords (RU) | Landing |
|---------------|---------------|---------|
| irrigation system Russia | система орошения фермы | `/ru/irrigation-control-system/` |
| farm irrigation control system | автоматизация полива поля | |
| large field irrigation automation | | |

### 2. Wireless Irrigation (LoRa)

| Keywords (EN) | Keywords (RU) | Landing |
|---------------|---------------|---------|
| wireless irrigation system Russia | беспроводная система полива | `/ru/wireless-irrigation-system/` |
| LoRa irrigation system | LoRa сельское хозяйство | `/ru/landing-wireless-farm/` |
| remote farm irrigation control | | |

### 3. Farm Upgrade (High Conversion ⭐)

| Keywords (EN) | Keywords (RU) | Landing |
|---------------|---------------|---------|
| upgrade irrigation system | модернизация системы орошения | `/ru/landing-irrigation-upgrade/` |
| modernize farm irrigation Russia | автоматизация старого полива | |
| replace manual irrigation system | | |

### 4. Fertigation (Lower Priority)

| Keywords (EN) | Keywords (RU) | Landing |
|---------------|---------------|---------|
| fertigation system Russia | система внесения удобрений | `/ru/fertigation-system/` |
| fertilizer injection system | | |
| EC pH control system | | |

---

## Landing Page Priority (Conversion Order)

| Tier | Page | Priority |
|------|------|----------|
| HIGH ⭐ | `/ru/landing-irrigation-upgrade/` | 1 |
| HIGH ⭐ | `/ru/landing-wireless-farm/` | 2 |
| MID | `/ru/irrigation-control-system/` | 3 |
| MID | `/ru/wireless-irrigation-system/` | 4 |
| LOW | `/ru/fertigation-system/` | 5 |

**Default paid traffic:** route to HIGH tier landing pages first.

---

## Traffic Routing Logic

```
Traffic Source (Google / Yandex / Ads)
        ↓
Keyword matched to cluster
        ↓
Primary landing page assigned
        ↓
User reads system context (1 system link on page)
        ↓
Funnel link to related landing
        ↓
Get System Recommendation CTA
        ↓
Telegram / WhatsApp inquiry
```

### Example Flows

| Source | Query | Route | Conversion |
|--------|-------|-------|------------|
| Google | upgrade irrigation system Russia | `/ru/landing-irrigation-upgrade/` | Telegram / WhatsApp |
| Google | wireless irrigation system Russia | `/ru/wireless-irrigation-system/` | Telegram / WhatsApp |
| Yandex | система орошения фермы | `/ru/irrigation-control-system/` | Telegram / WhatsApp |
| Google | LoRa irrigation system | `/ru/landing-wireless-farm/` | Telegram / WhatsApp |

---

## Internal Linking Rule

Every `/ru/` page must link to:

1. **1 System page**
2. **1 Landing page**
3. **Contact CTA** (Telegram / WhatsApp)

Enforced via `layouts/partials/ru-funnel-links.html` reading `data/russia/ads-routing.yaml`.

No isolated pages allowed.

---

## Contact Strategy (Russia)

| Channel | Priority |
|---------|----------|
| Telegram | Primary (Russia) |
| WhatsApp | Primary (Global) |
| Email | Secondary only |

Standard CTA: **Get System Recommendation** — injected on all pages via `layouts/partials/ru-lead-flow.html`.

Required lead fields:

- Farm size (hectares)
- Crop type
- Irrigation method
- Pump power
- Number of zones

---

## Implementation Files

| File | Role |
|------|------|
| `data/russia/ads-routing.yaml` | Keyword clusters, landing map, page routing |
| `layouts/partials/ru-funnel-links.html` | System + landing + contact links per page |
| `layouts/partials/ru-lead-flow.html` | Standardized CTA block |
| `docs/russia-ads-to-lead-system.md` | This strategy document |

**Not modified:** English site, existing `/ru/` page markdown content, site navigation structure.
