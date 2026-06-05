# PKYDrip Image Upload Checklist

Generated from `migration/pkydrip-image-replacement-checklist.csv`  
**Purpose:** Prepare image files with exact paths before updating Hugo content.  
**Do not** replace images in content until files exist under `static/images/`.

## Directory structure

```
static/images/home/          ← reserved (no first-batch filenames in CSV)
static/images/solution/      ← solution pages + nested slugs
static/images/product/       ← product family pages
static/images/applications/  ← application scenario pages
static/images/docs/          ← technical reference pages
```

**Note:** Paths below use `static/` + the `recommended_filename` from the audit CSV. Subfolders (e.g. `open-field-irrigation/`) match page slugs for easier asset management.

**Wildcard row expanded:** `pump-valve-app-{scenario}.jpg` → three concrete filenames (orchard, greenhouse, open-field).

**Total unique files to prepare:** 59 (57 CSV rows with filenames; `pump-valve-app-{scenario}` expanded to 3)

---

# Home

*No recommended filenames in first-batch CSV.*

Reserve for future homepage / platform hero (not part of migration batch 1 audit):

- `static/images/home/irrigation-system-platform-hero.jpg` *(suggested only — not in CSV)*

---

# Solution

## `static/images/solution/greenhouse-irrigation/`

- `static/images/solution/greenhouse-irrigation/hero-bay-drip.jpg`  
  **Used in:** `/solution/greenhouse-irrigation/`  
  **Section:** Hero

- `static/images/solution/greenhouse-irrigation/flow-diagram.svg`  
  **Used in:** `/solution/greenhouse-irrigation/`  
  **Section:** Typical Greenhouse Flow

- `static/images/solution/greenhouse-irrigation/system-overview.jpg`  
  **Used in:** `/solution/greenhouse-irrigation/`  
  **Section:** System overview (optional)

## `static/images/solution/hydroponic-irrigation/`

- `static/images/solution/hydroponic-irrigation/hero-nutrient-room.jpg`  
  **Used in:** `/solution/hydroponic-irrigation/`  
  **Section:** Hero

- `static/images/solution/hydroponic-irrigation/ecph-control.jpg`  
  **Used in:** `/solution/hydroponic-irrigation/`  
  **Section:** When EC/pH Control Is Required

## `static/images/solution/open-field-irrigation/`

- `static/images/solution/open-field-irrigation/hero-pump-station-field.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Hero

- `static/images/solution/open-field-irrigation/architecture-control-system.png`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** System Architecture

- `static/images/solution/open-field-irrigation/zone-flow-diagram.svg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** One Pump Multiple Zones

- `static/images/solution/open-field-irrigation/wireless-orchard.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Wireless Field — Orchard

- `static/images/solution/open-field-irrigation/wireless-lora-valve.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Wireless Field — LoRa valve

- `static/images/solution/open-field-irrigation/wireless-hillside.webp`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Wireless Field — Hillside

- `static/images/solution/open-field-irrigation/fertigation-skid.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Fertigation Integration

- `static/images/solution/open-field-irrigation/hmi-cabinet.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** HMI Touchscreen — Equipment

- `static/images/solution/open-field-irrigation/hmi-screen.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** HMI Touchscreen — UI overlay

- `static/images/solution/open-field-irrigation/app-card-orchard.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Applications — Orchard

- `static/images/solution/open-field-irrigation/app-card-open-field.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Applications — Open field

- `static/images/solution/open-field-irrigation/app-card-hillside.webp`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Applications — Hillside

- `static/images/solution/open-field-irrigation/app-card-tank-system.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Applications — Water tank

- `static/images/solution/open-field-irrigation/app-card-greenhouse-expansion.jpg`  
  **Used in:** `/solution/open-field-irrigation/`  
  **Section:** Applications — Greenhouse expansion

## `static/images/solution/orchard-irrigation/`

- `static/images/solution/orchard-irrigation/hero-rows-mainline.jpg`  
  **Used in:** `/solution/orchard-irrigation/`  
  **Section:** Hero

- `static/images/solution/orchard-irrigation/wireless-tree-blocks.jpg`  
  **Used in:** `/solution/orchard-irrigation/`  
  **Section:** Wireless — Tree blocks

- `static/images/solution/orchard-irrigation/wireless-field-node.jpg`  
  **Used in:** `/solution/orchard-irrigation/`  
  **Section:** Wireless — Field node

- `static/images/solution/orchard-irrigation/wireless-lora-network.jpg`  
  **Used in:** `/solution/orchard-irrigation/`  
  **Section:** Wireless — LoRa network

## `static/images/solution/solar-powered-irrigation/`

- `static/images/solution/solar-powered-irrigation/hero-solar-pump-field.jpg`  
  **Used in:** `/solution/solar-powered-irrigation/`  
  **Section:** Hero

- `static/images/solution/solar-powered-irrigation/off-grid-flow.svg`  
  **Used in:** `/solution/solar-powered-irrigation/`  
  **Section:** Off-Grid Layout

- `static/images/solution/solar-powered-irrigation/ic06-pump-install.jpg`  
  **Used in:** `/solution/solar-powered-irrigation/`  
  **Section:** IC06 pump install (optional)

---

# Product

## `static/images/product/` (root-level product family assets)

- `static/images/product/pump-valve-hero-cabinet-install.jpg`  
  **Used in:** `/product/pump-valve-control-system/`  
  **Section:** Hero

- `static/images/product/pump-valve-system-diagram.png`  
  **Used in:** `/product/pump-valve-control-system/`  
  **Section:** What the System Controls

- `static/images/product/pump-valve-wireless-field-node.jpg`  
  **Used in:** `/product/pump-valve-control-system/`  
  **Section:** Wireless LoRa Expansion

- `static/images/product/pump-valve-hmi-screen.jpg`  
  **Used in:** `/product/pump-valve-control-system/`  
  **Section:** Simple Touchscreen Operation

- `static/images/product/pump-valve-platform-bom.png`  
  **Used in:** `/product/pump-valve-control-system/`  
  **Section:** Industrial Control Platform

- `static/images/product/pump-valve-app-orchard.jpg`  
  **Used in:** `/product/pump-valve-control-system/`  
  **Section:** Applications (cards) — orchard *(expanded from `{scenario}` template)*

- `static/images/product/pump-valve-app-greenhouse.jpg`  
  **Used in:** `/product/pump-valve-control-system/`  
  **Section:** Applications (cards) — greenhouse *(expanded from `{scenario}` template)*

- `static/images/product/pump-valve-app-open-field.jpg`  
  **Used in:** `/product/pump-valve-control-system/`  
  **Section:** Applications (cards) — open field *(expanded from `{scenario}` template)*

- `static/images/product/fertigation-hero-skid.jpg`  
  **Used in:** `/product/fertigation-system/`  
  **Section:** Hero

- `static/images/product/fertigation-control-approaches.jpg`  
  **Used in:** `/product/fertigation-system/`  
  **Section:** Two Control Approaches

- `static/images/product/fertigation-app-greenhouse.jpg`  
  **Used in:** `/product/fertigation-system/`  
  **Section:** Applications — Greenhouse

- `static/images/product/fertigation-app-orchard.jpg`  
  **Used in:** `/product/fertigation-system/`  
  **Section:** Applications — Orchard

- `static/images/product/fertigation-app-open-field.jpg`  
  **Used in:** `/product/fertigation-system/`  
  **Section:** Applications — Open field

- `static/images/product/wireless-valve-hero-ic05.jpg`  
  **Used in:** `/product/wireless-valve-controller/`  
  **Section:** Hero

- `static/images/product/wireless-valve-scene-orchard.jpg`  
  **Used in:** `/product/wireless-valve-controller/`  
  **Section:** Where Wireless Fits — Orchard

- `static/images/product/wireless-valve-scene-field-install.jpg`  
  **Used in:** `/product/wireless-valve-controller/`  
  **Section:** Where Wireless Fits — Field node

- `static/images/product/wireless-valve-scene-remote-farm.webp`  
  **Used in:** `/product/wireless-valve-controller/`  
  **Section:** Where Wireless Fits — Remote

- `static/images/product/sensors-monitoring-hero.jpg`  
  **Used in:** `/product/sensors-monitoring/`  
  **Section:** Hero

- `static/images/product/sensors-monitoring-architecture-context.jpg`  
  **Used in:** `/product/sensors-monitoring/`  
  **Section:** How Sensors Fit the Architecture

- `static/images/product/filters-valves-hero-station.jpg`  
  **Used in:** `/product/filters-valves-accessories/`  
  **Section:** Hero

- `static/images/product/filters-valves-hydraulic-stack.svg`  
  **Used in:** `/product/filters-valves-accessories/`  
  **Section:** Typical Hydraulic Stack

---

# Applications

## `static/images/applications/orchard-irrigation/`

- `static/images/applications/orchard-irrigation/hero-20ha-blocks.jpg`  
  **Used in:** `/applications/orchard-irrigation/`  
  **Section:** Hero

- `static/images/applications/orchard-irrigation/scenario-large-orchard.jpg`  
  **Used in:** `/applications/orchard-irrigation/`  
  **Section:** 20 Hectare Class Projects

- `static/images/applications/orchard-irrigation/scenario-crops-row.jpg`  
  **Used in:** `/applications/orchard-irrigation/`  
  **Section:** Crops Covered

## `static/images/applications/tomato-drip-irrigation/`

- `static/images/applications/tomato-drip-irrigation/hero-greenhouse-tomato.jpg`  
  **Used in:** `/applications/tomato-drip-irrigation/`  
  **Section:** Hero

- `static/images/applications/tomato-drip-irrigation/greenhouse-1ha-layout.jpg`  
  **Used in:** `/applications/tomato-drip-irrigation/`  
  **Section:** 1 ha layout (optional)

---

# Docs

## `static/images/docs/irrigation-filter-selection/`

- `static/images/docs/irrigation-filter-selection/hero-filters-inline.jpg`  
  **Used in:** `/docs/irrigation-filter-selection/`  
  **Section:** Hero

- `static/images/docs/irrigation-filter-selection/filter-stages.jpg`  
  **Used in:** `/docs/irrigation-filter-selection/`  
  **Section:** Filter stages (optional)

## `static/images/docs/drip-irrigation-blockage/`

- `static/images/docs/drip-irrigation-blockage/hero-emitter-maintenance.jpg`  
  **Used in:** `/docs/drip-irrigation-blockage/`  
  **Section:** Hero

- `static/images/docs/drip-irrigation-blockage/maintenance-flush.jpg`  
  **Used in:** `/docs/drip-irrigation-blockage/`  
  **Section:** Maintenance (optional)

## `static/images/docs/fertigation-basics/`

- `static/images/docs/fertigation-basics/hero-tanks-dosing.jpg`  
  **Used in:** `/docs/fertigation-basics/`  
  **Section:** Hero

- `static/images/docs/fertigation-basics/tank-stock-lines.jpg`  
  **Used in:** `/docs/fertigation-basics/`  
  **Section:** Tank lines (optional)

---

# Quick upload summary (flat list by directory)

## Solution — 26 files

```
static/images/solution/greenhouse-irrigation/hero-bay-drip.jpg
static/images/solution/greenhouse-irrigation/flow-diagram.svg
static/images/solution/greenhouse-irrigation/system-overview.jpg
static/images/solution/hydroponic-irrigation/hero-nutrient-room.jpg
static/images/solution/hydroponic-irrigation/ecph-control.jpg
static/images/solution/open-field-irrigation/hero-pump-station-field.jpg
static/images/solution/open-field-irrigation/architecture-control-system.png
static/images/solution/open-field-irrigation/zone-flow-diagram.svg
static/images/solution/open-field-irrigation/wireless-orchard.jpg
static/images/solution/open-field-irrigation/wireless-lora-valve.jpg
static/images/solution/open-field-irrigation/wireless-hillside.webp
static/images/solution/open-field-irrigation/fertigation-skid.jpg
static/images/solution/open-field-irrigation/hmi-cabinet.jpg
static/images/solution/open-field-irrigation/hmi-screen.jpg
static/images/solution/open-field-irrigation/app-card-orchard.jpg
static/images/solution/open-field-irrigation/app-card-open-field.jpg
static/images/solution/open-field-irrigation/app-card-hillside.webp
static/images/solution/open-field-irrigation/app-card-tank-system.jpg
static/images/solution/open-field-irrigation/app-card-greenhouse-expansion.jpg
static/images/solution/orchard-irrigation/hero-rows-mainline.jpg
static/images/solution/orchard-irrigation/wireless-tree-blocks.jpg
static/images/solution/orchard-irrigation/wireless-field-node.jpg
static/images/solution/orchard-irrigation/wireless-lora-network.jpg
static/images/solution/solar-powered-irrigation/hero-solar-pump-field.jpg
static/images/solution/solar-powered-irrigation/off-grid-flow.svg
static/images/solution/solar-powered-irrigation/ic06-pump-install.jpg
```

## Product — 21 files

```
static/images/product/pump-valve-hero-cabinet-install.jpg
static/images/product/pump-valve-system-diagram.png
static/images/product/pump-valve-wireless-field-node.jpg
static/images/product/pump-valve-hmi-screen.jpg
static/images/product/pump-valve-platform-bom.png
static/images/product/pump-valve-app-orchard.jpg
static/images/product/pump-valve-app-greenhouse.jpg
static/images/product/pump-valve-app-open-field.jpg
static/images/product/fertigation-hero-skid.jpg
static/images/product/fertigation-control-approaches.jpg
static/images/product/fertigation-app-greenhouse.jpg
static/images/product/fertigation-app-orchard.jpg
static/images/product/fertigation-app-open-field.jpg
static/images/product/wireless-valve-hero-ic05.jpg
static/images/product/wireless-valve-scene-orchard.jpg
static/images/product/wireless-valve-scene-field-install.jpg
static/images/product/wireless-valve-scene-remote-farm.webp
static/images/product/sensors-monitoring-hero.jpg
static/images/product/sensors-monitoring-architecture-context.jpg
static/images/product/filters-valves-hero-station.jpg
static/images/product/filters-valves-hydraulic-stack.svg
```

## Applications — 5 files

```
static/images/applications/orchard-irrigation/hero-20ha-blocks.jpg
static/images/applications/orchard-irrigation/scenario-large-orchard.jpg
static/images/applications/orchard-irrigation/scenario-crops-row.jpg
static/images/applications/tomato-drip-irrigation/hero-greenhouse-tomato.jpg
static/images/applications/tomato-drip-irrigation/greenhouse-1ha-layout.jpg
```

## Docs — 6 files

```
static/images/docs/irrigation-filter-selection/hero-filters-inline.jpg
static/images/docs/irrigation-filter-selection/filter-stages.jpg
static/images/docs/drip-irrigation-blockage/hero-emitter-maintenance.jpg
static/images/docs/drip-irrigation-blockage/maintenance-flush.jpg
static/images/docs/fertigation-basics/hero-tanks-dosing.jpg
static/images/docs/fertigation-basics/tank-stock-lines.jpg
```

---

# Existing asset (already on site — replace or keep)

| Current path | Action |
|--------------|--------|
| `static/images/solution/open-field-irrigation-control-system-architecture.png` | Superseded by `static/images/solution/open-field-irrigation/architecture-control-system.png` when new file uploaded; update content path later |

---

*After upload: update `recommended_filename` paths in `content/english/**/index.md` only — no layout changes.*
