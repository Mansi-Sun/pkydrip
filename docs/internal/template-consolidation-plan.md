# PKYDrip V2 Template Consolidation Guide

## Executive Summary

The current PKYDrip Hugo site has too many layout and template variants. The latest audit shows approximately 48 active template types across homepage, products, solutions, docs, tools, landing pages, partner pages, demo pages, and legacy/theme fallback pages.

This increases maintenance cost in three ways:

- Page styles can drift because similar pages use different templates.
- New pages are harder to create because it is unclear which template should be used.
- Future redesign work becomes risky because one change may affect only some pages while similar pages remain unchanged.

The V2 goal is not to delete templates immediately. The safer goal is to define stable template families first, then migrate gradually. Templates should consolidate toward six major families:

1. Home Template
2. System Template
3. Solution Template
4. Product Template
5. Resource Template
6. Landing Template

This document is the official working guide for future template consolidation. It does not change pages, layouts, navigation, content, or URLs by itself.

## Current Template Situation

The site currently uses many section-specific or one-off layouts. Some are necessary today, some are legacy fallbacks, and some are different implementations of nearly the same page pattern.

### Home / Root

| Current Template | Current Purpose | Usage Signal |
| --- | --- | ---: |
| `layouts/index.html` | Homepage | 1 English page |
| `themes/airspace-hugo/layouts/404.html` | 404 fallback | inactive in audit table |
| `themes/airspace-hugo/layouts/_default/list.html` | Generic list fallback | legacy / localized fallback |
| `themes/airspace-hugo/layouts/_default/single.html` | Generic single fallback | active legacy fallback |

### System-Like / Engineering

| Current Template | Current Purpose | Usage Signal |
| --- | --- | ---: |
| `layouts/system-architecture/list.html` | System architecture index | 1 English page |
| `layouts/_default/engineering-page.html` | General engineering page | 6 English pages |
| `layouts/product/engineering-page.html` | Product/system engineering pages | 9 English pages |
| `layouts/solution/engineering-page.html` | Solution engineering pages | 6 English pages |
| `layouts/docs/engineering-page.html` | Engineering docs pages | 3 English pages |
| `layouts/applications/engineering-page.html` | Application engineering pages | 2 English pages |
| `layouts/_default/integration-page.html` | Integration-style page | 2 English pages |

### Product

| Current Template | Current Purpose | Usage Signal |
| --- | --- | ---: |
| `themes/airspace-hugo/layouts/product/list.html` | Product index | 1 English page |
| `themes/airspace-hugo/layouts/product/single.html` | Product detail | 22 English pages |
| `themes/airspace-hugo/layouts/product/single-product.html` | Older product detail | 1 English page |
| `layouts/product/farm-irrigation-controller.html` | Custom product/solution page | 2 English pages |
| `layouts/product/pump-valve-control-system.html` | Custom pump/valve system page | 1 English page |
| `layouts/product-category/single.html` | Product category page | 3 English pages |
| `layouts/product-category/list.html` | Product category list | inactive |

### Solution / Application / Demo

| Current Template | Current Purpose | Usage Signal |
| --- | --- | ---: |
| `themes/airspace-hugo/layouts/solution/list.html` | Solution list / branch pages | 6 English pages |
| `layouts/solution/single.html` | Solution detail | 19 English pages |
| `layouts/solution/open-field-irrigation.html` | Custom open-field solution | inactive |
| `layouts/applications/list.html` | Application index | 1 English page |
| `layouts/applications/single.html` | Application detail | 2 English pages |
| `layouts/demo/list.html` | Demo index | 1 English page |
| `layouts/demo/single.html` | Demo detail | 4 English pages |

### Resource / Docs / Tools / Downloads

| Current Template | Current Purpose | Usage Signal |
| --- | --- | ---: |
| `layouts/docs/list.html` | Docs index and branch pages | 4 English pages |
| `layouts/docs/single.html` | Docs detail | 9 English pages |
| `layouts/guide/single.html` | Guide detail | 6 English pages |
| `layouts/guides/list.html` | Guide branch page | 1 English page |
| `layouts/guides/single.html` | Guide detail alternate | inactive |
| `layouts/tools/list.html` | Tool index / branch pages | 2 English pages |
| `layouts/tools/single.html` | Tool detail | 4 English pages |
| `themes/airspace-hugo/layouts/downloads/list.html` | Downloads list | 1 English page |
| `layouts/irrigation-wizard/single.html` | Custom wizard page | 1 English page |
| `themes/airspace-hugo/layouts/_default/about.html` | About page | 1 English page |
| `themes/airspace-hugo/layouts/_default/faq.html` | FAQ page | 1 English page |
| `themes/airspace-hugo/layouts/_default/pricing.html` | Pricing page | 1 English page |
| `themes/airspace-hugo/layouts/_default/service.html` | Service / legacy marketing pages | 6 English pages |
| `themes/airspace-hugo/layouts/sv/list.html` | Legacy service list | 1 English page |
| `themes/airspace-hugo/layouts/sv/single.html` | Legacy service pages | 4 English pages |

### Landing / Partner

| Current Template | Current Purpose | Usage Signal |
| --- | --- | ---: |
| `layouts/landing/list.html` | Landing index | 1 English page |
| `layouts/landing/single.html` | Generic landing page | 3 English pages |
| `layouts/_default/landing.html` | Default landing page | 6 English pages |
| `layouts/landing/partner-program.html` | Partner recruitment pages | 2 English pages |
| `layouts/landing/fertigation-upgrade.html` | Campaign landing page | 1 English page |
| `layouts/landing/solar-pump-tank-monitoring.html` | Campaign landing page | 1 English page |
| `layouts/landing/modular-fertigation-control.html` | Campaign landing page | 1 English page |
| `layouts/partner/list.html` | Partner branch pages | 5 English pages |
| `layouts/partner/single.html` | Partner detail alternate | inactive |

### Other / Admin / Contact

| Current Template | Current Purpose | Usage Signal |
| --- | --- | ---: |
| `themes/airspace-hugo/layouts/_default/contact.html` | Contact page | 1 English page |
| `themes/airspace-hugo/layouts/_default/message_sent.html` | Form success page | 1 English page |
| `themes/airspace-hugo/layouts/author/single.html` | Author pages | 2 English pages |
| `layouts/site-map/single.html` | Internal site map | 1 English page |

## Future Template Family 1: Home Template

Purpose:

The Home Template is the top-level business entry point. It should explain who PKYDrip serves, what customers can build, which core systems exist, which applications are supported, and how to contact PKYDrip.

Typical Use:

- Homepage only
- Current example: `/`

Required Sections:

- Hero
- Who We Work With
- What We Help You Build
- Core Systems
- Applications
- Why PKYDrip
- Showroom
- Contact

Do Not Use For:

- Product lists
- System detail pages
- Advertising landing pages
- Documentation or technical guide pages
- Any page that is not the homepage

## Future Template Family 2: System Template

Purpose:

The System Template explains what the customer is trying to build. It should describe the engineering structure of an irrigation system, the control logic, the connected modules, the application contexts, and the next step for inquiry.

Typical Use:

- Irrigation Control System
- Fertigation System
- Solar Pump Irrigation System
- Wireless Irrigation System
- Pump and Valve Automation System

Monitoring & Sensors should be treated as a Supporting Module and Cross-System Capability, not as a primary System template target.

Required Sections:

- Overview
- System Architecture
- Control Logic
- Applications
- Recommended Products
- Related Resources
- Inquiry

Do Not Use For:

- A single SKU or module such as PKY-IC05 or PKY-EG08
- A pure crop/application page such as Orchard Irrigation
- A campaign page with one conversion goal
- A download page
- A cabinet-only page unless the cabinet is clearly explained as part of the larger system

## Future Template Family 3: Solution Template

Purpose:

The Solution Template explains a customer problem, crop scenario, farm type, or application context. It should help the customer understand what kind of system is suitable for their situation.

Typical Use:

- Open Field Irrigation
- Greenhouse Irrigation
- Orchard Irrigation
- Hydroponic Irrigation
- Landscape Irrigation
- Solar Irrigation
- Retrofit / Upgrade projects

Required Sections:

- Industry Challenge
- Typical System
- Recommended Architecture
- Recommended Products
- Example Scenario
- Inquiry

Do Not Use For:

- A product module page
- A pure system architecture page
- A campaign landing page where the main goal is lead capture
- Technical documentation that answers one narrow question

## Future Template Family 4: Product Template

Purpose:

The Product Template explains a real product, module, controller, sensor, gateway, pump, dosing device, or accessory. It should clarify what the product does and how it fits into a system.

Typical Use:

- PKY-60W
- PKY-ECpH-301
- FG301
- FG401
- PKY-EG08
- PKY-IC05
- PKY-IC06-PUMP
- Sensors
- Gateways
- Valve controllers

Required Sections:

- Product Overview
- Applications
- How It Works
- System Integration
- Technical Specifications
- Downloads
- Inquiry

Do Not Use For:

- System families such as Irrigation Control System or Fertigation System
- Customer scenarios such as Greenhouse Irrigation
- Marketing landing pages
- General guides, tools, or downloads

## Future Template Family 5: Resource Template

Purpose:

The Resource Template supports evaluation, design, sizing, installation, education, documentation, and internal planning. It should answer a specific question or support a specific task.

Typical Use:

- Guides
- Docs
- Tools
- Engineering notes
- Technical notes
- Downloads
- FAQ
- Internal site map
- Demo resources when they are not campaign pages

Required Sections:

- Problem or Purpose
- Explanation
- Recommended System
- Related Products
- Related Solutions
- Next Step or Download

Do Not Use For:

- Homepage
- System hub pages
- Product detail pages
- Paid advertising landing pages
- Partner recruitment pages where conversion is the main goal

## Future Template Family 6: Landing Template

Purpose:

The Landing Template supports a focused conversion goal for a specific audience, market, campaign, partner program, OEM offer, distributor recruitment, or advertising flow.

Typical Use:

- Campaign pages
- OEM pages
- Distributor pages
- Partner recruitment pages
- Advertising landing pages
- Regional partner pages

Required Sections:

- Audience-Specific Hero
- Problem / Opportunity
- PKYDrip Offer
- Suitable Partners or Applications
- Proof / System Fit
- Clear CTA
- Contact Form or WhatsApp CTA

Do Not Use For:

- Main system architecture pages
- Product modules
- General documentation
- Homepage
- Long technical resources where search and education are the main goal

## Important Distinction: System Pages vs Product Pages

System pages explain what the customer is trying to build.

Product pages explain the modules used inside the system.

Examples of System pages:

- Irrigation Control System
- Fertigation System
- Solar Pump Irrigation System
- Wireless Irrigation System

Monitoring & Sensors is a supporting module/cross-system capability, not a fifth primary System page family.

Examples of Product pages:

- PKY-60W
- PKY-ECpH-301
- FG301
- FG401
- PKY-EG08
- PKY-IC05
- PKY-IC06-PUMP

Important rule:

Do not treat `Irrigation Control System` as a product page. It is a system page because it explains the full structure the customer wants to build.

Do not treat `Control Cabinet` as the main product. The cabinet is the physical control platform inside the irrigation control system. It can appear inside a System page and may also have a supporting Product page if needed, but it should not become the primary organizing concept for the website.

Practical decision test:

- If the page answers "What system should I build?", use the System Template.
- If the page answers "Which farm scenario does this solve?", use the Solution Template.
- If the page answers "What module is this and how does it work?", use the Product Template.
- If the page answers "How do I learn, size, install, compare, or download something?", use the Resource Template.
- If the page answers "Why should this specific audience contact us now?", use the Landing Template.

## Consolidation Recommendation

| Current Template | Future Template | Migration Difficulty |
| --- | --- | --- |
| `layouts/index.html` | Home Template | Low |
| `layouts/system-architecture/list.html` | System Template | Medium |
| `layouts/_default/engineering-page.html` | System / Resource Template | Medium |
| `layouts/product/engineering-page.html` | System Template for system-family pages; Product Template for module pages | High |
| `layouts/solution/engineering-page.html` | Solution Template | Medium |
| `layouts/docs/engineering-page.html` | Resource Template | Medium |
| `layouts/applications/engineering-page.html` | Solution Template | Medium |
| `layouts/_default/integration-page.html` | System or Solution Template | Medium |
| `themes/airspace-hugo/layouts/product/list.html` | Product Template | Low |
| `themes/airspace-hugo/layouts/product/single.html` | Product Template | Medium |
| `themes/airspace-hugo/layouts/product/single-product.html` | Product Template | Medium |
| `layouts/product/farm-irrigation-controller.html` | Solution Template or Product Template after page classification | High |
| `layouts/product/pump-valve-control-system.html` | System Template | Medium |
| `layouts/product-category/single.html` | Product Template or System Template depending on page role | High |
| `layouts/product-category/list.html` | Product Template | Low |
| `themes/airspace-hugo/layouts/solution/list.html` | Solution Template | Medium |
| `layouts/solution/single.html` | Solution Template | Medium |
| `layouts/solution/open-field-irrigation.html` | Solution Template | Low |
| `layouts/applications/list.html` | Solution / Demo Template | Medium |
| `layouts/applications/single.html` | Solution Template | Medium |
| `layouts/demo/list.html` | Resource Template or Demo subtype | Low |
| `layouts/demo/single.html` | Resource Template or Demo subtype | Medium |
| `layouts/docs/list.html` | Resource Template | Medium |
| `layouts/docs/single.html` | Resource Template | Medium |
| `layouts/guide/single.html` | Resource Template | Medium |
| `layouts/guides/list.html` | Resource Template | Low |
| `layouts/guides/single.html` | Resource Template | Low |
| `layouts/tools/list.html` | Resource Template | Medium |
| `layouts/tools/single.html` | Resource Template | Medium |
| `themes/airspace-hugo/layouts/downloads/list.html` | Resource Template | Low |
| `layouts/irrigation-wizard/single.html` | Resource Template | High |
| `_default/about.html`, `_default/faq.html`, `_default/pricing.html`, `_default/service.html` | Resource Template | Medium |
| `themes/airspace-hugo/layouts/sv/list.html` | Resource or Landing Template after legacy cleanup | Medium |
| `themes/airspace-hugo/layouts/sv/single.html` | System / Resource / Landing after page classification | High |
| `layouts/landing/list.html` | Landing Template | Low |
| `layouts/landing/single.html` | Landing Template | Medium |
| `layouts/_default/landing.html` | Landing Template | Medium |
| `layouts/landing/partner-program.html` | Landing Template | Medium |
| `layouts/landing/fertigation-upgrade.html` | Landing Template | Medium |
| `layouts/landing/solar-pump-tank-monitoring.html` | Landing Template | Medium |
| `layouts/landing/modular-fertigation-control.html` | Landing Template | Medium |
| `layouts/partner/list.html` | Landing Template | Medium |
| `layouts/partner/single.html` | Landing Template | Low |
| `themes/airspace-hugo/layouts/_default/contact.html` | Resource Template or Contact variant | Low |
| `themes/airspace-hugo/layouts/_default/message_sent.html` | Resource Template or Contact variant | Low |
| `themes/airspace-hugo/layouts/author/single.html` | Resource / Legacy Template | Low |
| `layouts/site-map/single.html` | Resource / Internal Template | Low |
| `themes/airspace-hugo/layouts/_default/single.html` | Resource fallback only | Medium |
| `themes/airspace-hugo/layouts/_default/list.html` | Resource fallback only | Medium |

## Migration Priority

### Priority 1: Stop Creating New Custom Templates

Any new page must use one of the six future template families unless there is a strong reason.

Acceptable reasons for a new custom template:

- A tool requires custom interaction logic.
- A campaign has a proven conversion need that cannot be handled by the Landing Template.
- A future reusable template family requirement has been approved.

Not acceptable:

- Creating a new template because one section needs slightly different spacing.
- Creating a new template because one page has a different CTA.
- Creating a new template before checking whether an existing family can support the page.

### Priority 2: Consolidate Engineering-Page Variants

These currently exist in multiple sections:

- `product/engineering-page`
- `solution/engineering-page`
- `docs/engineering-page`
- `applications/engineering-page`
- `_default/engineering-page`

Recommendation:

Turn the shared engineering structure into reusable partials or one shared template pattern. Typical reusable blocks should include:

- Hero
- Architecture / diagram section
- Control logic
- Application cards
- Related products
- Related resources
- Inquiry CTA

The final page family should still be clear. A System page and a Resource page can share blocks, but they should not have the same content role.

### Priority 3: Separate System Pages From Product Pages

System-like pages currently stored under `product` should be reviewed and later moved, aliased, redirected, or clearly linked under Systems after approval.

Priority review list:

- `/product/irrigation-control-system/`
- `/product/fertigation-system/`
- `/product/wireless-field-control-system/`
- `/product/solar-pump-irrigation-system/`
- `/product/monitoring-sensor-system/` (supporting module; do not migrate as a primary System)
- `/product/pump-valve-control-system/`

Do not move these pages during template consolidation unless the URL migration has been approved separately.

### Priority 4: Consolidate Landing Templates

Landing pages should keep conversion flexibility, but avoid one-off layouts unless necessary.

Recommended approach:

- Keep a shared Landing Template.
- Use front matter blocks for audience, offer, CTA, form fields, proof points, and market-specific text.
- Keep custom landing templates only when a page has a genuine campaign structure that cannot be represented by the shared template.

### Priority 5: Remove Unused Templates Only After Successful Build Checks

Do not delete templates immediately.

Before removing a template:

- Confirm it has zero current usage.
- Confirm there are no aliases or older localized pages relying on it.
- Run a full Hugo build.
- Review representative URLs in local preview.
- Remove the template in a small, isolated commit.

## Implementation Rules

- Do not change URLs during template consolidation unless approved.
- Do not delete templates before confirming usage.
- Do not change page content during layout consolidation.
- Do not combine restructuring, copywriting, and visual redesign in one commit.
- Each commit should handle one small category of templates.
- Run Hugo build after each template change.
- Keep legacy/theme fallback templates until active pages have a clear V2 family.
- When unsure, classify the page role before touching the template.
- Landing pages can be flexible, but their flexibility should come from reusable blocks and front matter, not endless one-off templates.
- Product pages should always link back to the System they support after V2 internal linking begins.

## Final Target Table

| Current Template Group | Future Template Family | Priority | Notes |
| --- | --- | --- | --- |
| Home / Root | Home Template | Medium | Keep homepage separate. Do not redesign it during template consolidation. |
| System-like / Engineering | System Template | High | Highest-value consolidation area. Turn engineering variants into shared blocks or one shared pattern. |
| Product | Product Template | High | Separate real product modules from system-family pages before major product template work. |
| Solution / Application / Demo | Solution Template and Resource Template | Medium | Application pages should usually become Solutions; demo pages may become Resources or Demo subtype. |
| Resource / Docs / Tools / Downloads | Resource Template | Medium | Consolidate docs, guides, tools, downloads, and engineering notes into one resource pattern with optional blocks. |
| Landing / Partner | Landing Template | Medium | Keep conversion flexibility, but reduce one-off campaign layouts where possible. |
| Other / Admin / Contact | Resource Template or lightweight utility templates | Low | Do not spend early V2 effort here unless a template blocks build or navigation work. |

## Practical Decision Guide

Use the Home Template when:

- The page is the homepage.

Use the System Template when:

- The page describes a complete irrigation, fertigation, wireless, solar, monitoring, or automation system.
- The customer is choosing what to build.

Use the Solution Template when:

- The page describes a farm type, crop, greenhouse, orchard, open field, hydroponic, solar application, or retrofit scenario.
- The customer is matching PKYDrip capabilities to their use case.

Use the Product Template when:

- The page describes a controller, gateway, sensor, pump, dosing device, valve controller, cabinet module, or accessory.
- The customer is evaluating a specific module inside a system.

Use the Resource Template when:

- The page teaches, compares, sizes, documents, supports, or provides downloads.

Use the Landing Template when:

- The page is built for campaign traffic, paid ads, partner recruitment, distributor outreach, OEM inquiry, or a focused conversion path.

Avoid:

- Creating new custom templates for minor visual differences.
- Treating system names as product pages.
- Treating product cabinets as the main information architecture.
- Removing templates before the migration path is confirmed.
- Mixing URL restructuring, template consolidation, copywriting, and visual redesign in one step.
