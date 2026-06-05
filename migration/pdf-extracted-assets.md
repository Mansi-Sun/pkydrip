# PDF Extracted Assets — Phase 2 Report

**Date:** 2026-05-20  
**Source PDFs:** `static/downloads/pdf/pkydrip-smart-agriculture-catalogue-2025.pdf`, `static/downloads/pdf/pkydrip-irrigation-solution-brochure.pdf`  
**Method:** Embedded-image extraction via PyMuPDF (`extract_image`); page render used only where noted. No Hugo content or layout changes.

---

## Summary

| # | Export path | Quality | Ready for web? |
|---|-------------|---------|----------------|
| 1 | `static/images/docs/drip-system-architecture-sketch.png` | **good** | Yes (diagram); re-label in Hugo later |
| 2 | `static/images/applications/orchard-irrigation/layout-1-5ac-example.png` | **good** | Yes; optimize file size before production |
| 3 | `static/images/docs/irrigation-filter-station-components.jpg` | **acceptable** | Yes with caption; busy montage |
| 4 | `static/images/docs/fertigation-distribution-components.jpg` | **acceptable** | Yes; composite of page 6 visuals |
| 5 | `static/images/product/pump-valve-cabinet-components.png` | **good** | Yes; align labels to pump-valve SKUs later |
| 6 | `static/images/product/wireless-valve-hero-ic05.jpg` | **good** | Yes; PKKZQ01 catalogue photo |

**Not extracted (per scope):** covers, contact pages, SKU tables, full-page screenshots except where embedded raster was the only viable source.

---

## Asset inventory

| Source PDF | Page | Section (PDF) | Exported file | Type | Target usage (later) | Quality | Notes |
|--------------|------|---------------|---------------|------|----------------------|---------|-------|
| pkydrip-irrigation-solution-brochure.pdf | 2 | Automatic Drip Irrigation System — Diagrammatic Sketch | `static/images/docs/drip-system-architecture-sketch.png` | diagram | `/solution/open-field-irrigation/`, `/docs/drip-irrigation-system-components/` | **good** | Embedded raster xref 381 (1894×638). Hydraulic sketch only; **callout labels on PDF page are separate text** — add labels in Hugo or redraw for EN engineering style |
| pkydrip-irrigation-solution-brochure.pdf | 4 | Overall Design | `static/images/applications/orchard-irrigation/layout-1-5ac-example.png` | layout | `/applications/orchard-irrigation/` | **good** | Largest layout raster xref 40 (3718×3295, ~1.7 MB). Clean CAD-style plan; **compress for production** (e.g. max width 2400px WebP/PNG) |
| pkydrip-irrigation-solution-brochure.pdf | 5 | Key Components — Part 1 Water Supply & Filtration | `static/images/docs/irrigation-filter-station-components.jpg` | montage | `/docs/irrigation-filter-selection/`, `/product/filters-valves-accessories/` | **acceptable** | Single embedded montage xref 46 (1922×782). Useful reference; marketing layout — optional cleaner redraw |
| pkydrip-irrigation-solution-brochure.pdf | 6 | Part 2 Fertigation + Part 3 Distribution | `static/images/docs/fertigation-distribution-components.jpg` | montage | `/docs/fertigation-basics/`, `/product/fertigation-system/` | **acceptable** | **Composite** of three embedded images (fertigation UI + distribution icons). Page render failed (`display list` error); composite preserves top-of-page visuals only |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 5 | Smart Controller — Components (PKCB series) | `static/images/product/pump-valve-cabinet-components.png` | diagram | `/product/pump-valve-control-system/` | **good** | Upper component layout xref 51 (960×540). Excludes bottom product strip (xref 50). Re-label for irrigation cabinet, not greenhouse HVAC |
| pkydrip-smart-agriculture-catalogue-2025.pdf | 8 | LoRa Valve Controller PKKZQ01 | `static/images/product/wireless-valve-hero-ic05.jpg` | product visual | `/product/wireless-valve-controller/` | **good** | Product photo xref 64 (485×433). Catalogue hardware; map copy to PKY-IC05 family naming on site |

---

## Files exported

```
static/images/docs/drip-system-architecture-sketch.png       (~38 KB,  1894×638)
static/images/docs/irrigation-filter-station-components.jpg  (~60 KB,  1922×782)
static/images/docs/fertigation-distribution-components.jpg   (~314 KB, 2080×1659)
static/images/applications/orchard-irrigation/layout-1-5ac-example.png (~1.7 MB, 3718×3295)
static/images/product/pump-valve-cabinet-components.png      (~111 KB, 960×540)
static/images/product/wireless-valve-hero-ic05.jpg             (~12 KB,  485×433)
```

---

## Clean and usable now

1. **drip-system-architecture-sketch.png** — Core open-field hydraulic diagram; best candidate for open-field architecture section after English re-labeling.
2. **layout-1-5ac-example.png** — Orchard zone/layout CAD; strong application page figure (resize for deploy).
3. **pump-valve-cabinet-components.png** — Cabinet BOM-style layout; fits pump-valve “system components” block.
4. **wireless-valve-hero-ic05.jpg** — Clear product shot; usable as wireless valve family hero/reference.

---

## Needs manual redraw or AI-enhanced replacement (optional)

| Asset | Why |
|-------|-----|
| drip-system-architecture-sketch.png | PDF text labels not in raster; engineering site may want PKYDrip naming + zone IDs |
| irrigation-filter-station-components.jpg | Busy brochure montage; docs page may deserve simplified filter stack diagram |
| fertigation-distribution-components.jpg | Composite spacing not pixel-perfect; separate clean fertigation + distribution figures later |
| layout-1-5ac-example.png | Apple 1.5 ac case-specific; crop neutral labels / metric legend for generic orchard page |
| pump-valve-cabinet-components.png | PKCB greenhouse controller parts list — relabel for pump/valve platform |

**wireless-valve-hero-ic05.jpg** — Usable as-is; optional field-install photo upgrade per `migration/image-upload-checklist.md`.

---

## Pages that could not be rendered cleanly

| PDF | Page | Issue | Fallback used |
|-----|------|-------|----------------|
| Irrigation Solution Brochure | 5, 6 | `RuntimeError: Private data too large to pack into display list node` at clip/full-page render | **Embedded image extract** (p.5); **composite of embeds** (p.6) |
| Irrigation Solution Brochure | 2 | Full-page render possible but noisy | **Preferred:** embedded diagram strip xref 381 |
| Smart Agriculture Catalogue | 5, 8 | Page render not required | Direct **extract_image** |

No full-page fallback PNGs were kept in `static/images/` (per “no full-page screenshots unless cropping impossible”).

---

## Technical notes

- **Extraction tool:** Python 3.7 + PyMuPDF 1.22.5 + Pillow.
- **Orchard layout size:** Native CAD raster is very large; recommend build-time or one-time resize (~2400px wide) before Netlify deploy — **not done in this phase**.
- **Markdown:** No `content/english/**` image paths updated (Phase 3).
- **Duplicates:** Legacy copies under `downloads/pdf/` unchanged; canonical PDFs remain in `static/downloads/pdf/`.

---

## Suggested next phase (Phase 3 — not started)

1. Wire paths in target Hugo pages (front matter / engineering layout fields).
2. Optimize `layout-1-5ac-example.png` for web weight.
3. Add English labels to drip architecture (or replace with `open-field-irrigation-control-system-architecture.png` where overlap exists).
4. Field photography pass per `migration/image-upload-checklist.md` for heroes not covered by catalogue PDF.
