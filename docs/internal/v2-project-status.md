# PKYDrip Website V2 Project Status

## Current Stage

Website V2 restructuring is in progress.

Planning phase is completed.
Execution phase has started.

## Current V2 Foundation

The following governance documents are the current V2 foundation:

- `template-consolidation-plan.md`
- `content-consolidation-plan.md`
- `website-roadmap-v2.md`
- `customer-journey-map.md`

Do not replace these documents without review.

## Protected Assets

Do not modify unless explicitly requested:

- `layouts/partials/head.html`
- `layouts/partials/facebook-pixel.html`
- GA4 code
- Google Ads code
- Meta Pixel code
- WhatsApp attribution code
- Page ID system
- UTM tracking logic
- gclid tracking logic

Confirmed tracking:

- GA4: `G-Y5HHC5PQ2D`
- Google Ads: `AW-16640554458`
- Meta Pixel: `1261846228680902`

## Navigation V2.1

Current top-level navigation:

- Home
- Systems dropdown
- Solutions dropdown
- Products
- Resources dropdown
- Contact

Systems is a dropdown with four core Systems:

- Irrigation Control System
- Fertigation System
- Wireless Irrigation System
- Solar Pump Irrigation System

Solutions is a dropdown with five core customer scenarios:

- Greenhouse Irrigation
- Orchard Irrigation
- Open Field Irrigation
- Hydroponic / Soilless Cultivation
- Irrigation Retrofit

Solutions are customer/application/crop/project scenario pages.

System topics should not be used as primary Solution entries. Fertigation, wireless irrigation, and solar pump irrigation belong under Systems.

Controller selection and design guides belong under Resources.

Resources is a dropdown with:

- Docs
- Tools
- Downloads

## Systems Classification

PKYDrip Website V2 uses four core Systems:

1. Irrigation Control System
2. Fertigation System
3. Wireless Irrigation System
4. Solar Pump Irrigation System

Monitoring & Sensors is not a fifth primary System.

Monitoring & Sensors should be treated as:

- Supporting Module
- Cross-System Capability
- Product / Module area when stored under Product URLs

Do not delete or rename existing monitoring URLs yet.

## Current Priority

System Page Upgrade is the current priority.

The first prototype page is:

- `/system-architecture/irrigation-control-system/`

Future System pages should reuse this customer-oriented structure.
