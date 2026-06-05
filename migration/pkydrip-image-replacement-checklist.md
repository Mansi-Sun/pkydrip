# PKYDrip First-Batch Visual Asset Replacement Checklist

**Audit date:** 2026-05-19  
**Scope:** 15 first-batch engineering pages (WordPress migration batch 1)  
**Action:** Audit only — do **not** replace images until assets are approved and paths updated in content front matter.

## Status legend

| Status | Meaning |
|--------|---------|
| **Acceptable** | Usable for now; on-brand enough to ship. Optional polish later. |
| **Weak** | Generic, wrong context, over-reused brochure stock, or mismatched section intent. |
| **Placeholder** | Temporary borrow, missing asset, or duplicate of another section. Replace when possible. |
| **Missing** | No image configured; section is text-only or would benefit from a new visual. |

## Visual style legend

- **Real engineering photo** — Pump room, field install, equipment in context; minimal staging.
- **AI-enhanced real scene** — Real photo base + light cleanup (exposure, sky, crop); avoid synthetic equipment.
- **Product studio photo** — PKYDrip cabinet/module on neutral or site background.
- **System architecture visual** — Labeled flow: source → pump → filter → valves → field (diagram or composite).
- **Technical diagram / BOM** — Wiring, panel layout, retrofit schematic (existing PNG acceptable if clear).
- **UI screenshot** — Actual HMI irrigation screen; match cabinet project where overlaid.
- **Optional hero** — Docs pages; simple header image or icon strip only.

## Summary counts

| Status | Image slots |
|--------|-------------|
| Acceptable | 6 |
| Weak | 38 |
| Placeholder | 8 |
| Missing (recommended add) | 12 |

**Highest priority pages:** `/solution/open-field-irrigation/`, `/product/fertigation-system/`, `/product/pump-valve-control-system/` (HMI), `/solution/greenhouse-irrigation/`, `/solution/solar-powered-irrigation/`

---

## 1. `/product/pump-valve-control-system/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/product/irrigation-control-cabinet/cabinet-product-photo.png` | Acceptable | Pump room install or cabinet + pumps/valves in one frame | Real engineering photo | `product/pump-valve-hero-cabinet-install.jpg` |
| What the System Controls (diagram) | `images/product/irrigation-control-cabinet/one-system-complete-control.png` | Acceptable | Keep or refresh labeled pump–valve–wireless diagram | Technical diagram | `product/pump-valve-system-diagram.png` |
| Wireless LoRa Expansion | `images/brochure/lora-valve-field.jpg` | Weak | PKY-IC05 at valve in orchard/open-field row | Real engineering photo | `product/pump-valve-wireless-field-node.jpg` |
| Simple Touchscreen Operation | `images/product/irrigation-control-cabinet/cabinet-product-photo.png` | Placeholder | **Duplicate of hero.** HMI screen close-up or cabinet+UI overlay | UI screenshot + product photo | `product/pump-valve-hmi-screen.jpg` + `product/pump-valve-hmi-cabinet.jpg` |
| Industrial Control Platform | `images/product/irrigation-control-cabinet/product-combination-retrofit-bom.png` | Acceptable | Retrofit BOM / panel layout; update if labels outdated | Technical diagram | `product/pump-valve-platform-bom.png` |
| Applications (cards) | *(none)* | Missing | Optional thumb per scenario (orchard, greenhouse, open field) | Real engineering photo | `product/pump-valve-app-orchard.jpg` etc. |

---

## 2. `/product/fertigation-system/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/pump-valve-automation.jpg` | Weak | Fertigation skid: tanks, dosing pumps, injectors at pump station | Real engineering photo | `product/fertigation-hero-skid.jpg` |
| Two Control Approaches | `images/brochure/applications-greenhouse.jpg` | Weak | Greenhouse fertigation room or FG machine in bay | Real engineering photo | `product/fertigation-control-approaches.jpg` |
| Applications — Greenhouse | `images/brochure/applications-greenhouse.jpg` | Weak | Same as above; use distinct crop | Real engineering photo | `product/fertigation-app-greenhouse.jpg` |
| Applications — Orchard | `images/brochure/applications-orchard.jpg` | Weak | Orchard pump station + tanks | Real engineering photo | `product/fertigation-app-orchard.jpg` |
| Applications — Open field | `images/brochure/applications-open-field.jpg` | Weak | Open-field mainline + fertigation at pump | Real engineering photo | `product/fertigation-app-open-field.jpg` |

---

## 3. `/product/wireless-valve-controller/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/lora-valve-field.jpg` | Acceptable | PKY-IC05 + valve + solar panel; clear product | Product studio / field photo | `product/wireless-valve-hero-ic05.jpg` |
| Where Wireless Fits — Orchard | `images/brochure/applications-orchard.jpg` | Weak | Orchard row with visible valve/node | Real engineering photo | `product/wireless-valve-scene-orchard.jpg` |
| Where Wireless Fits — Field node | `images/brochure/lora-valve-field.jpg` | Placeholder | **Duplicate of hero.** Different angle/install | Real engineering photo | `product/wireless-valve-scene-field-install.jpg` |
| Where Wireless Fits — Remote | `images/brochure/lora-hero-remote-irrigation.webp` | Weak | Hillside/remote farm; show scale | AI-enhanced real scene | `product/wireless-valve-scene-remote-farm.webp` |

---

## 4. `/product/sensors-monitoring/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/lora-system-real-field.webp` | Weak | Sensor collage: soil probe, flow meter, weather station | Real engineering photo | `product/sensors-monitoring-hero.jpg` |
| How Sensors Fit the Architecture | `images/brochure/applications-greenhouse.jpg` | Weak | Sensors in greenhouse bay or pump room panel | Real engineering photo | `product/sensors-monitoring-architecture-context.jpg` |

---

## 5. `/product/filters-valves-accessories/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/solution/controller-valve-pump-combination.webp` | Weak | Sand filter + disc filter + valves at pump station | Real engineering photo | `product/filters-valves-hero-station.jpg` |
| Typical Hydraulic Stack | *(text steps only)* | Missing | Optional simple hydraulic stack diagram | System architecture visual | `product/filters-valves-hydraulic-stack.svg` |

---

## 6. `/solution/open-field-irrigation/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/applications-open-field.jpg` | Weak | **No pump station/control cabinet.** Open field + mainline + pump shed | Real engineering photo | `solution/open-field-irrigation/hero-pump-station-field.jpg` |
| System Architecture | `images/solution/open-field-irrigation-control-system-architecture.png` | Acceptable | Keep; refresh labels if product line changes | System architecture visual | `solution/open-field-irrigation/architecture-control-system.png` |
| One Pump Multiple Zones | *(text flow steps)* | Missing | Optional zone flow graphic (pump → main → valves → areas) | System architecture visual | `solution/open-field-irrigation/zone-flow-diagram.svg` |
| Wireless — Orchard | `images/brochure/applications-orchard.jpg` | Weak | Reused; orchard + wireless node visible | Real engineering photo | `solution/open-field-irrigation/wireless-orchard.jpg` |
| Wireless — LoRa valve | `images/brochure/lora-valve-field.jpg` | Weak | Reused across site | Real engineering photo | `solution/open-field-irrigation/wireless-lora-valve.jpg` |
| Wireless — Hillside | `images/brochure/lora-hero-remote-irrigation.webp` | Weak | Reused | AI-enhanced real scene | `solution/open-field-irrigation/wireless-hillside.webp` |
| Fertigation Integration | `images/solution/open-field-irrigation/fertigation-equipment.jpg` | Placeholder | **FG301 product shot, not pump-station fertigation.** Tanks + dosing at open-field skid | Real engineering photo | `solution/open-field-irrigation/fertigation-skid.jpg` |
| HMI — Equipment | `images/solution/open-field-irrigation/hmi-control-cabinet.png` | Placeholder | Open-field pump room cabinet (site install) | Real engineering photo | `solution/open-field-irrigation/hmi-cabinet.jpg` |
| HMI — Screen overlay | *(none — commented out)* | Missing | Irrigation UI screenshot matching cabinet | UI screenshot | `solution/open-field-irrigation/hmi-screen.jpg` |
| Applications — Orchard | `images/brochure/applications-orchard.jpg` | Weak | Duplicate | Real engineering photo | `solution/open-field-irrigation/app-card-orchard.jpg` |
| Applications — Open field | `images/brochure/applications-open-field.jpg` | Weak | Duplicate of hero | Real engineering photo | `solution/open-field-irrigation/app-card-open-field.jpg` |
| Applications — Hillside | `images/brochure/lora-hero-remote-irrigation.webp` | Weak | Duplicate | AI-enhanced real scene | `solution/open-field-irrigation/app-card-hillside.webp` |
| Applications — Water tank | `images/product/pump-control.webp` | Weak | **Pump icon/stock, not tank distribution.** Tank + pump + zones | Real engineering photo | `solution/open-field-irrigation/app-card-tank-system.jpg` |
| Applications — Greenhouse | `images/brochure/applications-greenhouse.jpg` | Weak | Duplicate | Real engineering photo | `solution/open-field-irrigation/app-card-greenhouse-expansion.jpg` |

---

## 7. `/solution/greenhouse-irrigation/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/applications-greenhouse.jpg` | Weak | Greenhouse interior: drip lines, manifolds, pump room door | Real engineering photo | `solution/greenhouse-irrigation/hero-bay-drip.jpg` |
| Typical Greenhouse Flow | *(text steps)* | Missing | Greenhouse hydraulic diagram (pump room → zones) | System architecture visual | `solution/greenhouse-irrigation/flow-diagram.svg` |
| Product Modules | *(text links only)* | Missing | Optional single greenhouse system photo | Real engineering photo | `solution/greenhouse-irrigation/system-overview.jpg` |

---

## 8. `/solution/orchard-irrigation/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/applications-orchard.jpg` | Weak | Orchard rows + mainline; pump station in distance optional | Real engineering photo | `solution/orchard-irrigation/hero-rows-mainline.jpg` |
| Wireless — Tree blocks | `images/brochure/applications-orchard.jpg` | Placeholder | **Same file 2×.** Different block/valve view | Real engineering photo | `solution/orchard-irrigation/wireless-tree-blocks.jpg` |
| Wireless — Field node | `images/brochure/lora-valve-field.jpg` | Weak | Site-wide reuse | Real engineering photo | `solution/orchard-irrigation/wireless-field-node.jpg` |
| Wireless — LoRa network | `images/brochure/lora-wireless-irrigation.jpg` | Weak | Gateway + field context | Real engineering photo | `solution/orchard-irrigation/wireless-lora-network.jpg` |

---

## 9. `/solution/hydroponic-irrigation/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/applications-greenhouse.jpg` | Weak | NFT/DWC channels or nutrient room—not generic greenhouse exterior | Real engineering photo | `solution/hydroponic-irrigation/hero-nutrient-room.jpg` |
| When EC/pH Control Is Required | `images/brochure/hmi-touchscreen-interface.jpg` | Weak | **Brochure UI mock; not hydroponic EC/pH context.** FG401 + screen or nutrient tanks | UI screenshot / product photo | `solution/hydroponic-irrigation/ecph-control.jpg` |

---

## 10. `/solution/solar-powered-irrigation/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/lora-hero-remote-irrigation.webp` | Weak | **Not solar-specific.** Solar pump array + panel + field | Real engineering photo | `solution/solar-powered-irrigation/hero-solar-pump-field.jpg` |
| Off-Grid Layout | *(text steps)* | Missing | Solar pump → tank → gateway → valves diagram | System architecture visual | `solution/solar-powered-irrigation/off-grid-flow.svg` |
| Related visual (optional) | *(none)* | Missing | PKY-IC06-PUMP at bore/tank | Product studio / field photo | `solution/solar-powered-irrigation/ic06-pump-install.jpg` |

---

## 11. `/applications/orchard-irrigation/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/applications-orchard.jpg` | Weak | 20 ha class orchard: blocks, laterals, valve pits | Real engineering photo | `applications/orchard-irrigation/hero-20ha-blocks.jpg` |
| 20 Hectare Class Projects | `images/brochure/applications-orchard.jpg` | Placeholder | **Duplicate of hero.** Aerial or block manifold | AI-enhanced real scene | `applications/orchard-irrigation/scenario-large-orchard.jpg` |
| Crops Covered | `images/solution/open-field-irrigation-control-system-architecture.png` | Weak | **Architecture diagram on application page—abstract.** Crop-specific row photo (citrus/ apple) | Real engineering photo | `applications/orchard-irrigation/scenario-crops-row.jpg` |

---

## 12. `/applications/tomato-drip-irrigation/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | `images/brochure/applications-greenhouse.jpg` | Weak | Tomato greenhouse drip: bays, dripline, manifold | Real engineering photo | `applications/tomato-drip-irrigation/hero-greenhouse-tomato.jpg` |
| Planning table / sections | *(none)* | Missing | Optional 1 ha bay layout photo or schematic | Real engineering photo | `applications/tomato-drip-irrigation/greenhouse-1ha-layout.jpg` |

---

## 13. `/docs/irrigation-filter-selection/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | *(none)* | Missing | Sand + disc filters in line at pump station | Real engineering photo | `docs/irrigation-filter-selection/hero-filters-inline.jpg` |
| Filter Stage Guide | *(table only)* | Missing | Optional filter stage photo strip | Real engineering photo | `docs/irrigation-filter-selection/filter-stages.jpg` |

---

## 14. `/docs/drip-irrigation-blockage/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | *(none)* | Missing | Clogged vs clean emitter comparison or flush operation | Real engineering photo | `docs/drip-irrigation-blockage/hero-emitter-maintenance.jpg` |
| Prevention / causes | *(text only)* | Missing | Optional: disc filter backwash or line flush | Real engineering photo | `docs/drip-irrigation-blockage/maintenance-flush.jpg` |

---

## 15. `/docs/fertigation-basics/`

| Section | Current file | Status | Replacement direction | Style | Recommended filename |
|---------|--------------|--------|----------------------|-------|----------------------|
| Hero | *(none)* | Missing | Fertigation tanks + dosing schematic at pump | Real engineering photo | `docs/fertigation-basics/hero-tanks-dosing.jpg` |
| Compatibility table | *(table only)* | Missing | Optional stock tank A/B/acid labeled photo | Real engineering photo | `docs/fertigation-basics/tank-stock-lines.jpg` |

---

## Cross-page reuse map (replace to reduce fatigue)

These files appear on **multiple pages** — replacing once helps several URLs:

| Shared current file | Used on (count) | Priority |
|-------------------|-----------------|----------|
| `images/brochure/applications-greenhouse.jpg` | 8+ | High |
| `images/brochure/applications-orchard.jpg` | 8+ | High |
| `images/brochure/applications-open-field.jpg` | 4+ | High |
| `images/brochure/lora-valve-field.jpg` | 6+ | High |
| `images/brochure/lora-hero-remote-irrigation.webp` | 5+ | Medium |
| `images/brochure/pump-valve-automation.jpg` | 2+ | Medium |
| `images/brochure/hmi-touchscreen-interface.jpg` | 2+ | Medium |
| `images/product/irrigation-control-cabinet/cabinet-product-photo.png` | 3+ | Medium |

---

## Recommended replacement workflow

1. **Shoot or collect** assets per `recommended_filename` folders under `static/images/{product|solution|applications|docs}/…`
2. **Update** only `content/english/.../index.md` image paths (no layout changes).
3. **Re-run** this audit or diff CSV after each batch of uploads.
4. **Do not** commit large unoptimized PNGs; target JPG/WebP ~1200px wide, &lt;500 KB where possible.

## Files to update when replacing

Content paths only — example for open-field fertigation:

```yaml
# content/english/solution/open-field-irrigation/index.md
fertigation:
  image: "images/solution/open-field-irrigation/fertigation-skid.jpg"
hmi_section:
  equipment_image: "images/solution/open-field-irrigation/hmi-cabinet.jpg"
  ui_image: "images/solution/open-field-irrigation/hmi-screen.jpg"
```

---

*Generated from live front matter in `content/english/` — no images were modified during this audit.*
