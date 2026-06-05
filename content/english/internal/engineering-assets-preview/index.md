---
title: "Engineering Assets Preview (Internal)"
description: "Internal review page for PDF-extracted engineering diagrams and product visuals. Not linked in site navigation."
type: docs
draft: true
url: /internal/engineering-assets-preview/
sitemap:
  disable: true
---

<div class="eng-assets-preview">

<p class="eng-banner"><strong>Internal archive only.</strong> PDF extraction quality is incorrect — do <strong>not</strong> use these files on product, solution, application, or docs pages. Files kept under <code>static/images/_archive/pdf-extract/</code> for reference only.</p>

## Summary

| Metric | Count |
|--------|------:|
| Total extracted assets on this page | 6 |
| Usable now | 4 |
| Acceptable (usable with caption) | 2 |
| Needs redraw / AI enhancement (optional) | 5 |

### High-priority assets (usable now)

1. `drip-system-architecture-sketch.png` — open-field / docs hydraulic diagram  
2. `layout-1-5ac-example.png` — orchard application layout  
3. `pump-valve-cabinet-components.png` — pump-valve cabinet BOM layout  
4. `wireless-valve-hero-ic05.jpg` — wireless valve product visual  

### Assets flagged for future redraw (optional)

- Drip sketch — PDF text labels not embedded in raster; add engineering labels in Hugo or redraw  
- Orchard layout — 1.5 ac apple case; neutralize labels; compress ~1.7 MB file before deploy  
- Filter station montage — busy brochure collage; simplified filter-stack diagram later  
- Fertigation distribution composite — page 6 composite; separate clean figures later  
- Cabinet components — PKCB greenhouse naming; relabel for pump-valve platform  

---

<div class="eng-asset-card">

### 1. Drip system architecture sketch

<figure class="eng-figure">
<img src="/images/_archive/pdf-extract/drip-system-architecture-sketch.png" alt="Open-field drip irrigation system architecture sketch" loading="lazy" />
<figcaption>Automatic drip irrigation system — diagrammatic sketch</figcaption>
</figure>

| Field | Value |
|-------|-------|
| **Filename** | `static/images/_archive/pdf-extract/drip-system-architecture-sketch.png` |
| **Source PDF** | `pkydrip-irrigation-solution-brochure.pdf` |
| **Source page** | 2 — Automatic Drip Irrigation System Diagrammatic Sketch |
| **Planned targets** | `/solution/open-field-irrigation/`, `/docs/drip-irrigation-system-components/` (planned) |
| **Status** | **Usable now** |
| **Notes** | Embedded diagram strip (1894×638). Callout labels on PDF are separate text — re-label in Hugo or optional redraw. |

</div>

<div class="eng-asset-card">

### 2. Orchard irrigation overall layout

<figure class="eng-figure">
<img src="/images/_archive/pdf-extract/layout-1-5ac-example.png" alt="Orchard irrigation overall design layout example" loading="lazy" />
<figcaption>Overall design — 1.5 acre apple orchard case (example layout)</figcaption>
</figure>

| Field | Value |
|-------|-------|
| **Filename** | `static/images/_archive/pdf-extract/layout-1-5ac-example.png` |
| **Source PDF** | `pkydrip-irrigation-solution-brochure.pdf` |
| **Source page** | 4 — Overall Design |
| **Planned targets** | `/applications/orchard-irrigation/` |
| **Status** | **Usable now** |
| **Notes** | Large CAD raster (3718×3295, ~1.7 MB). Compress before production deploy; genericize case-specific labels. |

</div>

<div class="eng-asset-card">

### 3. Filtration station components

<figure class="eng-figure">
<img src="/images/_archive/pdf-extract/irrigation-filter-station-components.jpg" alt="Irrigation filter station components montage" loading="lazy" />
<figcaption>Key components — Part 1 Water Supply &amp; Filtration</figcaption>
</figure>

| Field | Value |
|-------|-------|
| **Filename** | `static/images/_archive/pdf-extract/irrigation-filter-station-components.jpg` |
| **Source PDF** | `pkydrip-irrigation-solution-brochure.pdf` |
| **Source page** | 5 — Key Components (Part 1) |
| **Planned targets** | `/docs/irrigation-filter-selection/`, `/product/filters-valves-accessories/` |
| **Status** | **Acceptable** |
| **Notes** | Brochure montage (1922×782). Useful reference with caption; optional simplified filter-stack redraw. |

</div>

<div class="eng-asset-card">

### 4. Fertigation & distribution components

<figure class="eng-figure">
<img src="/images/_archive/pdf-extract/fertigation-distribution-components.jpg" alt="Fertigation and water distribution components composite" loading="lazy" />
<figcaption>Part 2 Fertigation + Part 3 Distribution (composite)</figcaption>
</figure>

| Field | Value |
|-------|-------|
| **Filename** | `static/images/_archive/pdf-extract/fertigation-distribution-components.jpg` |
| **Source PDF** | `pkydrip-irrigation-solution-brochure.pdf` |
| **Source page** | 6 — Fertigation + Water Distribution |
| **Planned targets** | `/docs/fertigation-basics/`, `/product/fertigation-system/` |
| **Status** | **Acceptable** |
| **Notes** | Composite of three embedded images; page render failed in extractor. Consider separate fertigation + distribution figures later. |

</div>

<div class="eng-asset-card">

### 5. Pump & valve cabinet component layout

<figure class="eng-figure">
<img src="/images/_archive/pdf-extract/pump-valve-cabinet-components.png" alt="Pump and valve control cabinet component layout" loading="lazy" />
<figcaption>Smart Controller — Components (PKCB series layout)</figcaption>
</figure>

| Field | Value |
|-------|-------|
| **Filename** | `static/images/_archive/pdf-extract/pump-valve-cabinet-components.png` |
| **Source PDF** | `pkydrip-smart-agriculture-catalogue-2025.pdf` |
| **Source page** | 5 — Smart Controller Components |
| **Planned targets** | `/product/pump-valve-control-system/` |
| **Status** | **Usable now** |
| **Notes** | Upper component diagram only (960×540). Relabel for irrigation pump-valve cabinet, not greenhouse HVAC. |

</div>

<div class="eng-asset-card">

### 6. Wireless valve controller visual

<figure class="eng-figure">
<img src="/images/_archive/pdf-extract/wireless-valve-hero-ic05.jpg" alt="LoRa wireless valve controller PKKZQ01 product photo" loading="lazy" />
<figcaption>LoRa Valve Controller PKKZQ01 (catalogue photo)</figcaption>
</figure>

| Field | Value |
|-------|-------|
| **Filename** | `static/images/_archive/pdf-extract/wireless-valve-hero-ic05.jpg` |
| **Source PDF** | `pkydrip-smart-agriculture-catalogue-2025.pdf` |
| **Source page** | 8 — LoRa Valve Controller PKKZQ01 |
| **Planned targets** | `/product/wireless-valve-controller/` |
| **Status** | **Usable now** |
| **Notes** | Catalogue product shot (485×433). Map site copy to PKY-IC05 family; optional field-install photo upgrade later. |

</div>

</div>

<style>
.eng-assets-preview { max-width: 1100px; }
.eng-banner {
  background: #fff8e6;
  border: 1px solid #e6c200;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 28px;
  font-size: 15px;
  line-height: 1.6;
}
.eng-asset-card {
  background: #fafafa;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin: 32px 0;
}
.eng-asset-card h3 { margin-top: 0; font-size: 1.25rem; }
.eng-figure {
  margin: 16px 0 20px;
  text-align: center;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
}
.eng-figure img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.eng-figure figcaption {
  margin-top: 12px;
  font-size: 14px;
  color: #555;
  line-height: 1.5;
}
.eng-asset-card table {
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
  margin-top: 8px;
}
.eng-asset-card table td {
  padding: 8px 10px;
  border-bottom: 1px solid #e8e8e8;
  vertical-align: top;
}
.eng-asset-card table td:first-child {
  font-weight: 600;
  width: 28%;
  color: #333;
}
</style>
