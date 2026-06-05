# PKYDrip Legacy PDF Asset Restructure Plan

**Date:** 2026-05-20  
**Scope:** Planning only — no Hugo pages, layouts, images, or navigation changes in this pass.

## Source files (current vs target)

| Role | Current path (repo) | Target path (per site convention) |
|------|---------------------|-----------------------------------|
| Smart Agriculture Catalogue 2025 | `downloads/pdf/Pkydrip-Smart-Agriculture-Catalogue-2025.pdf` | `static/downloads/pdf/pkydrip-smart-agriculture-catalogue-2025.pdf` |
| Irrigation Solution Brochure | `downloads/pdf/Pkydrip-Irrigation-Solutions.pdf` | `static/downloads/pdf/pkydrip-irrigation-solution-brochure.pdf` |

**Metadata (extracted):**

| PDF | Title (metadata) | Pages | PDF bookmarks/TOC |
|-----|------------------|-------|-------------------|
| Catalogue | Smart Agriculture Catalogue 2025 | **22** | None (visual TOC on p.2 only) |
| Solutions brochure | Irrigation Solutions.pdf | **13** | None |

**Existing Hugo download entry:** `content/english/downloads/catalogue.md` already points to `/files/Pkydrip_Smart_Agriculture_Catalogue_2025.pdf` (legacy `static/files/` path). Consolidate to one canonical URL when links are approved.

---

## Positioning principle

These PDFs are **legacy marketing/catalogue assets**. The Hugo site should **not** mirror PDF layout, page order, or SKU catalogue density.

| Use PDF for | Do not use PDF for |
|-------------|-------------------|
| Engineering copy source (rewrite) | Direct page-to-URL conversion |
| Diagram/architecture reference (re-export, re-label) | Full product SKU catalog on web |
| Downloadable sales/technical PDFs | Homepage hero or blog-style articles |
| BOM/hydraulic vocabulary for docs | OEM WiFi garden controller as primary product story |

---

# PDF 1: Smart Agriculture Catalogue 2025

## Document summary

| Field | Value |
|-------|--------|
| **Filename (target)** | `pkydrip-smart-agriculture-catalogue-2025.pdf` |
| **Visual TOC (p.2)** | Company Overview (p.3); Smart Controller (p.4–8); Irrigation Controller OEM (p.9–10); Fertigation System (p.11–15); Intelligent Sensor (p.16–20); Solenoid Valve (p.21); Contact (p.22) |
| **Product content** | PKCB greenhouse controllers, PKC01/02, PKKZQ01 LoRa valve, 8-station WiFi OEM, PKFM01–07 fertigation SKUs, PKS019/020 sensors, PKSV solenoid valves |
| **Solution content** | Greenhouse/hydroponic/environmental control narrative (p.4); not field-scale open-field/orchard system pages |
| **Application content** | None (no case studies) |
| **Technical diagrams** | Smart controller component layout (p.5); mostly product photos + spec tables |
| **Discard / download-only** | Cover, contact, company overview boilerplate, per-SKU spec tables, OEM WiFi garden controller (off-positioning), PKC01/02 as standalone “smart controller” pages |

## Main sections → Hugo mapping (high level)

| PDF section | Pages | Primary Hugo targets |
|-------------|-------|----------------------|
| Company overview | 3 | `/about/` (rewrite) + `/downloads/` (download-only context) |
| Smart controller (greenhouse) | 4–8 | `/solution/greenhouse-irrigation/`, `/solution/hydroponic-irrigation/` (rewrite); PKKZQ01 → `/product/wireless-valve-controller/` (merge) |
| Irrigation controller OEM | 9–10 | `/docs/oem-manufacturing/` (partial rewrite); rest **discard** |
| Fertigation system | 11–15 | `/product/fertigation-system/` (rewrite); `/docs/fertigation-basics/` (concepts); SKU detail → download-only |
| Intelligent sensor | 16–20 | `/product/sensors-monitoring/` (rewrite family); individual SKUs → existing product pages or docs only if needed |
| Solenoid valve | 21 | `/product/filters-valves-accessories/` (rewrite valve sizes); not a separate catalogue page |
| Contact | 22 | `/contact/` — **discard** (site has contact) |

---

## PDF 1 — Page-by-page audit table

| PDF filename | Page(s) | Source section title | Content type | Recommended Hugo target URL | Recommended action | Image/diagram value | Notes |
|--------------|---------|----------------------|--------------|----------------------------|--------------------|---------------------|-------|
| pkydrip-smart-agriculture-catalogue-2025.pdf | 1 | Cover — Smart Agriculture Catalogue 2025 | download-only | `/downloads/` | discard (web) | low | Keep PDF cover only; no web page |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 2 | Table of contents | download-only | `/downloads/` | discard | low | Reference for audit only |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 3 | Company Overview | download-only | `/about/` | rewrite | low | Extract mission/R&D facts; drop catalogue tone |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 4 | Smart Controller — control box / greenhouse PID | solution | `/solution/greenhouse-irrigation/`, `/solution/hydroponic-irrigation/` | rewrite | medium | Climate/PID story ≠ pump-valve platform; do not put on `/product/pump-valve-control-system/` |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 5 | Smart Controller — PKCB-04/08/16/32 components | product | `/product/pump-valve-control-system/` (cabinet lineage only) | merge | high | Component diagram useful for cabinet/BOM section after re-labeling for irrigation (not HVAC) |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 6 | PKC02-3 Temperature & Humidity Controller | product | `/product/sensors-monitoring/` | merge | medium | Legacy SKU; mention as environmental sensor family, not hero |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 7 | PKC01 Light Controller | product | `/product/sensors-monitoring/` | merge | low | Optional doc cross-link; low site priority |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 8 | PKKZQ01 LoRa Valve Controller | product | `/product/wireless-valve-controller/` | rewrite | high | Maps to wireless valve family; align copy with PKY-IC05, not “smart controller” |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 9 | 8-Station WiFi Irrigation Controller OEM | product | `/docs/oem-manufacturing/` | merge | medium | OEM capability only; not a product family page |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 10 | OEM Customization Options | docs | `/docs/oem-manufacturing/` | rewrite | low | PCB/enclosure/cloud white-label bullets |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 11 | Fertigation Machine — overview + IoT | product | `/product/fertigation-system/` | rewrite | medium | Hero/feature copy source; remove app-store marketing tone |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 12 | Single Channel — PKFM01-E / PKFM01-I | product | `/product/fertigation-system/` | merge | medium | Collapse to “single-channel” tier in family page; SKU tables download-only |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 13 | Three-channel — PKFM03-I / PKFM03-P | product | `/product/fertigation-system/` | merge | medium | Standard vs premium tier narrative |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 14 | Multi-channel — PKFM04-I / PKFM07-P | product | `/product/fertigation-system/`, `/solution/hydroponic-irrigation/` | merge | high | PKFM04-I = soilless/hydroponic angle; PKFM07-P = high-end reference only |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 15 | Optional Accessories — tanks/mixers | docs | `/docs/fertigation-basics/` | merge | low | Tank sizing note; “buy locally” stays in docs not product hero |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 16 | Intelligent Sensor — overview | product | `/product/sensors-monitoring/` | rewrite | low | Family intro only |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 17 | Environmental sensors PKS020-1/2/3, wind direction | product | `/product/sensors-monitoring/` | merge | medium | Photo/spec per model → optional deep pages later, not batch 1 |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 18 | Wind speed PKS020-4, CO₂ PKS020-5 | product | `/product/sensors-monitoring/` | merge | medium | Same as above |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 19 | Oxygen PKS020-9, Rain PKS020-10 | product | `/product/sensors-monitoring/` | merge | medium | Rain/oxygen = monitoring family bullets |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 20 | Soil sensors PKS019-2/6/7 | product | `/product/sensors-monitoring/` | merge | high | EC/pH/soil moisture core to architecture diagrams on solution pages |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 21 | Solenoid Valve PKSV050–300 | product | `/product/filters-valves-accessories/` | rewrite | medium | Valve sizes table → hydraulic accessories section |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 22 | Contact Us | discard | — | discard | low | Site `/contact/` supersedes |

---

# PDF 2: Irrigation Solution Brochure

## Document summary

| Field | Value |
|-------|--------|
| **Filename (target)** | `pkydrip-irrigation-solution-brochure.pdf` |
| **Structure** | Marketing cover → hydraulic sketch → drip program → overall design → key components (3 parts) → fertigation IoT → **apple orchard case study** → BOM/product photos → services → contact |
| **Product content** | Diesel pump, sand/disc filters, PKFM04-I, layflat/drip fittings (PKKG01, PKTP0117, etc.) — **commodity irrigation hardware**, not PKYDrip control platform |
| **Solution content** | Drip irrigation program, water supply/filtration, fertigation, distribution (p.3–6) |
| **Application content** | 1.5 acre apple orchard case study (p.7–8); BOM pages (p.9–11) |
| **Technical diagrams** | p.2 automatic drip system sketch (**high**); p.5 component montage (**high**); p.4 “Overall Design” likely full-bleed CAD (**high**, text not extracted) |
| **Discard / download-only** | Generic drip marketing (p.3), commodity fitting catalog pages (p.9–11), misplaced motor/filter ad copy on p.9, contact p.13 |

## Main sections → Hugo mapping (high level)

| PDF section | Pages | Primary Hugo targets |
|-------------|-------|----------------------|
| Cover / IoT tagline | 1 | `/downloads/` download-only |
| System diagram sketch | 2 | `/docs/drip-irrigation-system-components/` (planned), `/solution/open-field-irrigation/` (architecture) |
| Drip irrigation program | 3 | `/docs/drip-irrigation-system-components/` (planned) |
| Overall design | 4 | `/applications/orchard-irrigation/` or project docs — **diagram extract**, not page clone |
| Key components Part 1–3 | 5–6 | `/docs/irrigation-filter-selection/`, `/docs/fertigation-basics/`, `/product/filters-valves-accessories/` |
| Case study — apple orchard | 7–8 | `/applications/orchard-irrigation/`, `/solution/orchard-irrigation/` |
| Product/BOM for program | 9–11 | `/docs/irrigation-system-material-list/` (planned), `/downloads/` download-only tables |
| Our Services | 12 | `/service/` or `/docs/service-packages/` (rewrite) |
| Contact | 13 | discard |

---

## PDF 2 — Page-by-page audit table

| PDF filename | Page(s) | Source section title | Content type | Recommended Hugo target URL | Recommended action | Image/diagram value | Notes |
|--------------|---------|----------------------|--------------|----------------------------|--------------------|---------------------|-------|
| pkydrip-irrigation-solution-brochure.pdf | 1 | Cover — Irrigation Solution Brochure | download-only | `/downloads/` | discard (web) | low | “Cultivating Smarter Agriculture with IoT” — brochure only |
| pkydrip-irrigation-solution-brochure.pdf | 2 | Automatic Drip Irrigation System — Diagrammatic Sketch | solution | `/solution/open-field-irrigation/`, `/docs/drip-irrigation-system-components/` | reuse | **high** | Re-export labeled SVG/PNG; pump–filter–fertigation–field network |
| pkydrip-irrigation-solution-brochure.pdf | 3 | Drip Irrigation Program | solution | `/solution/open-field-irrigation/` | rewrite | low | One-stop services prose → engineering intro, not sales paragraph |
| pkydrip-irrigation-solution-brochure.pdf | 4 | Overall Design | application | `/applications/orchard-irrigation/` | reuse | **high** | Likely CAD layout; use for application hero/diagram after crop-neutral labels |
| pkydrip-irrigation-solution-brochure.pdf | 5 | Key Components — Part 1 Water Supply & Filtration | docs | `/docs/irrigation-filter-selection/`, `/product/filters-valves-accessories/` | rewrite | **high** | Sand/disc/backwash montage → filter selection doc figures |
| pkydrip-irrigation-solution-brochure.pdf | 6 | Part 2 Fertigation + Part 3 Distribution | product / docs | `/product/fertigation-system/`, `/docs/fertigation-basics/`, `/docs/drip-irrigation-system-components/` | rewrite | medium | Duplicates catalogue fertigation marketing; distribution → docs |
| pkydrip-irrigation-solution-brochure.pdf | 7 | Case Study — Site overview & zoning (apple, 1.5 ac) | application | `/applications/orchard-irrigation/` | rewrite | medium | 6,070 m² example → engineering scenario; metric layout reusable |
| pkydrip-irrigation-solution-brochure.pdf | 8 | Case Study — Supply, filtration, fertigation, drip network | application / solution | `/applications/orchard-irrigation/`, `/solution/orchard-irrigation/` | rewrite | medium | Venturi + pH/EC + solenoid zones → align with wireless/pump-valve story |
| pkydrip-irrigation-solution-brochure.pdf | 9 | Product required — pump, filters, PKFM04-I | docs | `/docs/irrigation-system-material-list/` | merge | medium | BOM table source; mixed unrelated product ads — clean on rewrite |
| pkydrip-irrigation-solution-brochure.pdf | 10 | BOM — valves, layflat, drip connectors | docs | `/docs/irrigation-system-material-list/` | merge | low | Commodity SKUs (PKKG01, PKTP0117…); not PKYDrip automation products |
| pkydrip-irrigation-solution-brochure.pdf | 11 | BOM — puncher, pressure meter, layflat emitter drip | docs | `/docs/irrigation-system-material-list/` | merge | low | Emitter tape specs → docs only |
| pkydrip-irrigation-solution-brochure.pdf | 12 | Our Services | docs | `/docs/service-packages/`, `/service/` | rewrite | low | Site assessment, CAD, integration testing — match existing service packages |
| pkydrip-irrigation-solution-brochure.pdf | 13 | Contact Us | discard | — | discard | low | Superseded by site contact |

---

# Cross-PDF overlap (dedupe before writing web content)

| Topic | Catalogue | Solutions brochure | Single Hugo owner |
|-------|-----------|-------------------|-------------------|
| Fertigation IoT features | p.11–14 | p.6 | `/product/fertigation-system/` |
| LoRa / valve control | p.8 (PKKZQ01) | p.8–9 (zone valves) | `/product/wireless-valve-controller/` + orchard solution |
| Filtration | — (valves only p.21) | p.5, p.8 | `/docs/irrigation-filter-selection/` |
| Soil / EC / pH sensors | p.20 | p.8 | `/product/sensors-monitoring/` |
| Orchard scenario | — | p.7–8 | `/applications/orchard-irrigation/` + `/solution/orchard-irrigation/` |
| Hydraulic architecture | p.5 (cabinet) | p.2, p.5 | open-field + docs components (different diagrams) |

---

# Recommended Hugo target structure

## Existing pages — content to feed (rewrite/merge only)

### Product families

| URL | PDF sources | Planned use |
|-----|-------------|-------------|
| `/product/pump-valve-control-system/` | Catalogue p.5 (cabinet components) | BOM/diagram for cabinet platform; not greenhouse PID p.4 |
| `/product/fertigation-system/` | Catalogue p.11–14; Solutions p.6, p.9 | Tier narrative (single / 3-ch / 4-ch / 7-ch); strip SKU catalogue density |
| `/product/wireless-valve-controller/` | Catalogue p.8; Solutions p.8 | Field LoRa install photos; PKKZQ01 specs as reference only |
| `/product/sensors-monitoring/` | Catalogue p.16–20 | Family page; avoid 10 duplicate SKU pages |
| `/product/filters-valves-accessories/` | Catalogue p.21; Solutions p.5, p.10–11 | Valves + filtration + layflat as **accessories**, not hero automation |

### Solutions

| URL | PDF sources | Planned use |
|-----|-------------|-------------|
| `/solution/open-field-irrigation/` | Solutions p.2–3, p.5–6 | Architecture + zone/hydraulic vocabulary |
| `/solution/greenhouse-irrigation/` | Catalogue p.4–5 | Greenhouse control context (rewrite away from “plant factory” marketing) |
| `/solution/orchard-irrigation/` | Solutions p.7–8 | Zoning, mainline/sub-main, rotation groups |
| `/solution/hydroponic-irrigation/` | Catalogue p.4, p.14 (PKFM04-I) | Soilless + EC/pH; link existing `/product/hydroponic.md` only as deep SKU if needed |
| `/solution/solar-powered-irrigation/` | — | **No PDF content**; do not pull diesel pump brochure assets here |
| `/solution/irrigation-retrofit-upgrade/` | Catalogue p.5 (optional) | Retrofit BOM mindset; Solutions p.12 services angle |

### Applications

| URL | PDF sources | Planned use |
|-----|-------------|-------------|
| `/applications/orchard-irrigation/` | Solutions p.4, p.7–8 | 1.5 ac apple case → generic orchard engineering scenario |
| `/applications/tomato-drip-irrigation/` | Solutions p.6 (distribution) | Drip distribution concepts only; no tomato-specific PDF content |
| `/applications/hydroponic-growing-system/` | Catalogue p.14 | **Planned page** — PKFM04-I soilless tier; not in repo yet |

### Docs (existing + planned)

| URL | Status | PDF sources |
|-----|--------|-------------|
| `/docs/irrigation-filter-selection/` | exists | Solutions p.5, p.8 |
| `/docs/fertigation-basics/` | exists | Catalogue p.11–15; Solutions p.6 |
| `/docs/drip-irrigation-blockage/` | exists | Solutions p.11 (emitter maintenance angle) |
| `/docs/drip-irrigation-system-components/` | **planned** | Solutions p.2–6 |
| `/docs/irrigation-system-material-list/` | **planned** | Solutions p.9–11 |
| `/docs/oem-manufacturing/` | exists | Catalogue p.9–10 |
| `/docs/service-packages/` | exists | Solutions p.12 |

### Downloads

| URL | Role |
|-----|------|
| `/downloads/` | Canonical listing for both PDFs + legacy per-product PDFs |

---

# Content to discard or keep PDF-only

| Content | Reason |
|---------|--------|
| PDF covers & contact pages | Site branding and `/contact/` |
| Company overview marketing block | Rewrite into `/about/` |
| 8-station WiFi garden OEM (p.9–10 catalogue) | Off-positioning for engineering automation site |
| Per-SKU spec tables (PKFM*, PKS*, PKSV*) | Too dense for family pages; keep in PDF or future datasheet downloads |
| Solutions p.9–11 commodity BOM photos | Material list doc only; not product family heroes |
| Duplicate fertigation “Get our APP” blocks | Single rewritten feature list |
| Mis-pasted industrial ads on Solutions p.9 | Discard text; do not import |

---

# Image & diagram extraction plan (manual — not automated)

| Asset (from PDF) | Suggested export path | Priority | Target page |
|------------------|----------------------|----------|-------------|
| Drip system diagrammatic sketch (Solutions p.2) | `static/images/docs/drip-system-architecture-sketch.png` | high | docs + open-field architecture |
| Key components montage (Solutions p.5) | `static/images/docs/irrigation-filter-station-components.jpg` | high | filter selection doc |
| Overall design CAD (Solutions p.4) | `static/images/applications/orchard-irrigation/layout-1-5ac-example.png` | high | orchard application |
| PKCB component layout (Catalogue p.5) | `static/images/product/pump-valve-cabinet-components.png` | high | pump-valve family (re-labeled) |
| Fertigation machine photos (Catalogue p.12–14) | `static/images/product/fertigation-*.jpg` | medium | fertigation family (see `migration/image-upload-checklist.md`) |
| LoRa valve photo (Catalogue p.8) | `static/images/product/wireless-valve-hero-ic05.jpg` | high | wireless valve family |
| Product grid pages (Solutions p.9–11) | — | low | Do not use as web heroes; OCR for BOM doc only |

---

# PDF download link placement (recommend only — pending your confirmation)

Do **not** add links until approved. Recommended placements:

| Label | File (target) | Suggested link locations |
|-------|---------------|-------------------------|
| **Download Smart Agriculture Catalogue 2025** | `/downloads/pdf/pkydrip-smart-agriculture-catalogue-2025.pdf` | `/downloads/` (primary); `/product/_index/` footer/secondary CTA; optional `/docs/oem-manufacturing/` |
| **Download Irrigation Solution Brochure** | `/downloads/pdf/pkydrip-irrigation-solution-brochure.pdf` | `/downloads/` (primary); `/solution/_index/`; `/applications/orchard-irrigation/` (related PDF) |

**Hugo implementation (later):**

1. Copy/rename PDFs into `static/downloads/pdf/` (kebab-case filenames above).
2. Add or update `content/english/downloads/*.md` front matter (`file:` field) — mirror pattern of `downloads/catalogue.md`.
3. Optionally 301 from `/files/Pkydrip_Smart_Agriculture_Catalogue_2025.pdf` → new path for SEO continuity.
4. No global nav changes required if links live only on `/downloads/` and contextual CTAs.

---

# Suggested implementation phases (after approval)

| Phase | Work | Touches site? |
|-------|------|----------------|
| **0** (this document) | Audit + mapping | No |
| **1** | Place PDFs in `static/downloads/pdf/`; update download center entries | Downloads only |
| **2** | Manual diagram export + `image-upload-checklist` alignment | `static/images/` only |
| **3** | Rewrite product/solution/application front matter from tables above | `content/english/**` |
| **4** | Create planned docs pages (components, material list, hydroponic application) | New content pages |
| **5** | Add PDF CTAs per table in previous section | Links only |

---

# Quick reference — page counts by disposition

| Disposition | Catalogue (22 pp) | Solutions (13 pp) |
|-------------|-------------------|-------------------|
| rewrite / merge to Hugo | 16 | 9 |
| download-only (PDF kept, no web mirror) | 2 | 1 |
| discard on web | 4 | 3 |

---

*Generated from PDF text extraction (PyPDF2). Visual-only pages (e.g. Solutions p.4) inferred from layout and filenames; confirm diagrams manually before export.*
