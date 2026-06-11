# Content Consolidation Plan

Purpose: classify the current website into the future PKYDrip Website V2 framework before any content movement begins.

This document does not move pages, rename URLs, rewrite content, or change navigation. It is a migration plan only.

Future content structure:

- Systems
- Solutions
- Products
- Resources
- Landing
- Demo

## System Pages

System pages explain irrigation engineering architecture and should become the backbone of V2.

| Current URL | Current Section | Recommended Future Role | Notes |
| --- | --- | --- | --- |
| `/system-architecture/` | system-architecture | Systems index | Newer system hub direction. |
| `/system-architecture/irrigation-control-system/` | system-architecture | System | Keep as system architecture page. |
| `/system-architecture/fertigation-system/` | system-architecture | System | Keep as system architecture page. |
| `/system-architecture/wireless-irrigation-system/` | system-architecture | System | Keep as system architecture page. |
| `/system-architecture/solar-pump-irrigation/` | system-architecture | System | Keep as system architecture page. |
| `/system-architecture/irrigation-monitoring-system/` | system-architecture | Supporting Module | Keep accessible for now; future role is Monitoring & Sensors as a cross-system capability, not a primary System. |
| `/product/irrigation-control-system/` | product | System | Currently stored under Products; should be treated as a system page. |
| `/product/fertigation-system/` | product | System | Currently stored under Products; should be treated as a system page. |
| `/product/wireless-field-control-system/` | product | System | Currently stored under Products; should be treated as a system page. |
| `/product/solar-pump-irrigation-system/` | product | System | Currently stored under Products; should be treated as a system page. |
| `/product/monitoring-sensor-system/` | product | Product / Supporting Module | Keep under Product / Module area; classify as Monitoring & Sensors support, not a primary System. |
| `/product/pump-valve-control-system/` | product | System | Product-like URL, but system-level content. |
| `/solution/fertigation-system/` | solution | System or Solution bridge | Overlaps with fertigation system pages. |
| `/solution/solar-irrigation-system/` | solution | System or Solution bridge | Overlaps with solar system pages. |
| `/solution/dc-solar-irrigation-tank-system/` | solution | System or Solution bridge | Solar pump + tank architecture. |
| `/solution/water-fertilizer-integration-system/` | solution | System | Fertigation/water-fertilizer system topic. |
| `/fertigation-system/` | product-category | System | Legacy/category URL that behaves like a system page. |
| `/fertigation-irrigation-solution/` | sv | System | Legacy service URL; should be mapped carefully. |
| `/lora-irrigation-system/` | sv | System | Legacy service URL; overlaps wireless system. |
| `/lora-wireless-irrigation-system/` | root | System | Legacy root-level wireless system page. |
| `/landing/pump-valve-control-system/` | landing | Landing or System support | Campaign URL, but system topic. |

## Solution Pages

Solution pages should represent customer applications, crops, project scenarios, and installation contexts.

| Current URL | Current Section | Recommended Future Role | Notes |
| --- | --- | --- | --- |
| `/solution/` | solution | Solutions index | Main solution hub. |
| `/solution/open-field-irrigation/` | solution | Solution | Core application page. |
| `/solution/open-field-irrigation-system/` | solution | Solution | Possible merge with open-field irrigation. |
| `/solution/greenhouse-irrigation/` | solution | Solution | Core application page. |
| `/solution/greenhouse-fertigation-climate-control/` | solution | Solution | Greenhouse/fertigation sub-solution. |
| `/solution/orchard-irrigation/` | solution | Solution | Core application page. |
| `/solution/hydroponic-irrigation/` | solution | Solution | Core application page. |
| `/solution/solar-powered-irrigation/` | solution | Solution | Solar application scenario. |
| `/solution/solar-smart-irrigation-farm/` | solution | Solution | Farm scenario. |
| `/solution/solar-smart-irrigation-engineer/` | solution | Solution | Engineering/integrator scenario. |
| `/solution/irrigation-retrofit-upgrade/` | solution | Solution | Retrofit solution. |
| `/solution/irrigation-automation-control/` | solution | Solution | Automation solution. |
| `/solution/lora-wireless-irrigation-control/` | solution | Solution | Wireless application page; connect to Wireless System. |
| `/solution/lora-off-grid-irrigation-system/` | solution | Solution | Off-grid scenario. |
| `/solution/wireless-irrigation/` | solution | Solution | Wireless solution; overlaps LoRa pages. |
| `/solution/integration-connectivity/` | solution | Solution | Integration/connectivity solution. |
| `/solution/smart-farm-control-platform/` | solution | Solution | Platform solution. |
| `/solution/10-acres-irrigation-solution/` | solution | Solution | Project-size scenario. |
| `/solution/10-acres-typical-configurations/` | solution | Solution | Project-size guide/scenario. |
| `/solution/10-acres-zoned-irrigation-benefits/` | solution | Solution | Project-size education; could be Resource later. |
| `/solution/10-hectares-of-coconut-tree-drip-irrigation/` | solution | Solution | Crop/project scenario. |
| `/solution/21-hectares-of-rice-flood-irrigation/` | solution | Solution | Crop/project scenario. |
| `/solution/design-agriculture-greenhouses/` | solution | Solution | Greenhouse design scenario. |
| `/solution/drip-tape-irrigation-for-1-hectare-of-tomatos/` | solution | Solution | Crop/project scenario. |
| `/solution/rain-pipe-irrigation-for-4-hectare-of-corn-field/` | solution | Solution | Crop/project scenario. |
| `/solution/sprinkler-irrigation-plan-for-3-hectares-of-banana/` | solution | Solution | Crop/project scenario. |
| `/solution/how-to-choose-irrigation-controller-for-5-10-hectare-farm/` | solution | Solution or Resource | Buyer education tied to farm size. |
| `/applications/open-field-wireless-valve-control/` | applications | Solution | Application page should map into Solutions. |
| `/applications/greenhouse-lora-irrigation-expansion/` | applications | Solution | Application page should map into Solutions. |
| `/applications/orchard-irrigation/` | applications | Solution | Application page should map into Solutions. |
| `/applications/tomato-drip-irrigation/` | applications | Solution | Application page should map into Solutions. |
| `/demo/greenhouse-demo-system/` | demo | Solution or Demo | Could support greenhouse solution as proof/demo. |
| `/product/farm-irrigation-controller/` | product | Solution | Product URL, but content appears solution-oriented. |
| `/product/hydroponic/` | product | Solution | Product URL, but application-oriented. |
| `/product/irrigation-control-cabinet/` | product | Solution or Product | Could become product module if specs are strengthened. |
| `/product/irrigation-control-panel/` | product | Solution or Product | Could become product module if specs are strengthened. |
| `/strategy/pkydrip-farm-control-platform/` | strategy | Solution | Platform/strategy solution content. |
| `/tools/irrigation-design-wizard/` | tools | Resource or Solution support | Tool supports solution discovery. |

## Product Pages

True product/module pages should remain under Products and support Systems.

| Current URL | Current Section | Recommended Future Role | Notes |
| --- | --- | --- | --- |
| `/product/` | product | Products index | Should list real modules and connect to Systems. |
| `/product/pky-60w/` | product | Product | Pump product/module. |
| `/product/pky-60w-standard-system/` | product | Product or system package | Clarify whether module or packaged system. |
| `/product/pky60w-pump/` | product | Product | Pump product/module. |
| `/product/pky-fg301/` | product | Product | Fertigation controller. |
| `/product/pky-fg401-ecph/` | product | Product | EC/pH fertigation controller. |
| `/product/ec-ph-controller/` | product | Product | Product family/module. |
| `/product/fertigation-controller/` | product | Product | Product family/module. |
| `/product/pky-ic03/` | product | Product | Controller product. |
| `/product/pky-ic05/` | product | Product | LoRa solar valve controller. |
| `/product/pky-ic05-plus/` | product | Product | Controller product. |
| `/product/pky-ic06-pump/` | product | Product | Pump controller. |
| `/product/pky-eg08/` | product | Product | LoRa gateway. |
| `/product/pky-evc01/` | product | Product | Valve controller. |
| `/product/lora-valve-controller/` | product | Product | Valve controller family. |
| `/product/wireless-valve-controller/` | product | Product | Valve controller family. |
| `/product/pky-dat01/` | product | Product | Data acquisition module. |
| `/product/sensors-monitoring/` | product | Product | Sensor/monitoring product family. |
| `/product/co2-sensor/` | product | Product | Sensor. |
| `/product/oxygen-sensor/` | product | Product | Sensor. |
| `/product/rain-sensor/` | product | Product | Sensor. |
| `/product/soil-env/` | product | Product | Sensor. |
| `/product/soil-npk/` | product | Product | Sensor. |
| `/product/tem-hum-lux/` | product | Product | Sensor. |
| `/product/wind-direction/` | product | Product | Sensor. |
| `/product/wind-speed/` | product | Product | Sensor. |
| `/product/filters-valves-accessories/` | product | Product | Accessories group. |
| `/irrigation-controller/` | product-category | Product category | Category page. |
| `/sensors-weather-stations/` | product-category | Product category | Category page. |
| `/downloads/ecph_nutrient_control_system/` | downloads | Product-support download | Should remain Resource if it is a downloadable file page. |
| `/downloads/fertigation_machine/` | downloads | Product-support download | Should remain Resource if it is a downloadable file page. |
| `/guides/ic03-vs-ic05/` | guides | Product-support resource | Product comparison; likely Resource, not Product page. |
| `/guides/when-do-you-really-need-ecph-control/` | guides | Product-support resource | Buyer education; likely Resource, not Product page. |

## Resource Pages

Resources should include docs, guides, tools, downloads, engineering articles, support pages, and internal references.

| Current URL | Current Section | Recommended Future Role | Notes |
| --- | --- | --- | --- |
| `/docs/` | docs | Resources index | Documentation hub. |
| `/docs/changelog-v0.9.3/` | docs | Resource | Changelog. |
| `/docs/drip-irrigation-blockage/` | docs | Resource | Technical guide. |
| `/docs/fertigation-basics/` | docs | Resource | Technical guide. |
| `/docs/irrigation-controller-selection-guide/` | docs | Resource | Selection guide. |
| `/docs/irrigation-filter-selection/` | docs | Resource | Selection guide. |
| `/docs/lora-wireless-control/deployment-guide/` | docs | Resource | Deployment guide. |
| `/docs/oem-manufacturing/` | docs | Resource or Landing support | OEM documentation hub. |
| `/docs/pkydrip-page-system/` | docs | Internal Resource | Page system reference. |
| `/docs/service-packages/` | docs | Resource | Service package documentation. |
| `/docs/tools/` | docs | Resource | Legacy tools index under docs. |
| `/docs/tools/irrigation-design-wizard/` | docs | Resource | Tool documentation. |
| `/docs/tools/pump-sizing-request-form/` | docs | Resource | Tool documentation. |
| `/docs/tools/pump-sizing-wizard/` | docs | Resource | Tool documentation. |
| `/docs/tools/sprinkler-gun-pump-chart/` | docs | Resource | Tool/engineering reference. |
| `/tools/` | tools | Resources / Tools index | Active tool hub. |
| `/tools/pump-sizing/` | tools | Resource | Pump sizing tool hub. |
| `/tools/pump-sizing/guided-wizard/` | tools | Resource | Tool page. |
| `/tools/pump-sizing/pump-sizing-calculator-v2/` | tools | Resource | Tool page. |
| `/tools/pump-sizing/pump-sizing-request-form/` | tools | Resource | Tool page. |
| `/tools/pump-sizing/sprinkler-gun-pump-sizing-chart/` | tools | Resource | Tool page. |
| `/downloads/` | downloads | Resources / Downloads index | Download hub. |
| `/downloads/catalogue/` | downloads | Resource | Download page. |
| `/downloads/irrigation-solution-brochure/` | downloads | Resource | Download page. |
| `/downloads/irrigation_controller/` | downloads | Resource | Download page. |
| `/downloads/LoRa_Wireless_Irrigation_System/` | downloads | Resource | Download page. |
| `/downloads/Weather_Station/` | downloads | Resource | Download page. |
| `/guide/guide-act01/` | guide | Resource | Legacy guide. |
| `/guide/guide-act02/` | guide | Resource | Legacy guide. |
| `/guides/pump-valve-automation/` | guides | Resource or Solution support | Guide hub. |
| `/guides/sensor-integration-in-pkydrip-systems/` | guides | Resource | Technical guide. |
| `/guides/why-flow-verification-matters-in-remote-pump-control/` | guides | Resource | Technical guide. |
| `/about/` | about | Resource | Company/about page. |
| `/faq/` | faq | Resource | FAQ. |
| `/service/` | service | Resource | Service overview. |
| `/pricing/` | pricing | Resource | Pricing/service information. |
| `/blog/` | blog | Resource | Blog hub. |
| `/internal/engineering-assets-preview/` | internal | Internal Resource | Internal preview page. |
| `/site-map/` | site-map | Internal Resource | Admin-oriented site map. |

## Landing Pages

Landing pages should remain campaign-focused and generally stay outside main navigation.

| Current URL | Current Section | Recommended Future Role | Notes |
| --- | --- | --- | --- |
| `/landing/` | landing | Landing index | Internal/campaign hub. |
| `/landing/australia-irrigation-partner/` | landing | Landing | Partner recruitment. |
| `/landing/uae-middle-east-irrigation-project-partner/` | landing | Landing | Partner recruitment. |
| `/landing/fertigation-upgrade/` | landing | Landing | Campaign. |
| `/landing/modular-fertigation-control/` | landing | Landing | Campaign. |
| `/landing/solar-pump-tank-monitoring/` | landing | Landing | Campaign. |
| `/landing/oem-irrigation-controller/` | landing | Landing | OEM campaign. |
| `/landing/remote-irrigation/` | landing | Landing | Campaign. |
| `/landing/australia-irrigation/` | landing | Landing or Solution campaign | Advertising page with solution topic. |
| `/landing/farm-irrigation-upgrade/` | landing | Landing or Solution campaign | Advertising page with retrofit topic. |
| `/landing/irrigation-controller-supplier/` | landing | Landing | Supplier campaign. |
| `/landing/irrigation-project-start/` | landing | Landing | Project-start campaign. |
| `/distributor-welcome/` | root | Landing | Distributor page. |
| `/partner/australia-contractor-demo/` | partner | Landing | Partner/demo recruitment page. |
| `/partner/brisbane/` | partner | Landing | Regional partner page. |
| `/partner/pkydrip-demonstration-system/` | partner | Landing | Demo/partner landing. |
| `/partner/saudi-demonstration-distribution/` | partner | Landing | Distributor/partner landing. |
| `/partner/usa/` | partner | Landing | Regional partner page. |

## Demo Pages

Demo pages should support proof, showroom, training, and demonstration systems. They can remain a subtype of Resources unless the site needs a visible Demo section.

| Current URL | Current Section | Recommended Future Role | Notes |
| --- | --- | --- | --- |
| `/demo/` | demo | Demo index | Resource/demo hub. |
| `/demo/irrigation-controller-demo/` | demo | Demo | Product/system demo. |
| `/demo/showroom-demo-rack/` | demo | Demo | Showroom/demo rack. |
| `/demo/solar-irrigation-demo/` | demo | Demo | Solar irrigation demo. |
| `/demo/greenhouse-demo-system/` | demo | Demo or Solution proof | Can support greenhouse solution. |
| `/applications/` | applications | Demo/Application index | Could be merged into Solutions or Demo. |

## Duplicate Pages

| Topic | Pages | Recommendation |
| --- | --- | --- |
| Fertigation system | `/fertigation-system/`, `/product/fertigation-system/`, `/solution/fertigation-system/`, `/system-architecture/fertigation-system/` | Keep one System hub, keep one Solution page if needed, keep product modules separate. |
| Irrigation control system | `/product/irrigation-control-system/`, `/system-architecture/irrigation-control-system/` | Decide one canonical System page and make the other support/redirect later. |
| Wireless / LoRa irrigation | `/lora-irrigation-system/`, `/lora-wireless-irrigation-system/`, `/solution/lora-wireless-irrigation-control/`, `/product/wireless-field-control-system/`, `/system-architecture/wireless-irrigation-system/` | Build one Wireless Irrigation System hub and connect solution/product pages beneath it. |
| Solar irrigation | `/solution/solar-irrigation-system/`, `/solution/solar-powered-irrigation/`, `/product/solar-pump-irrigation-system/`, `/system-architecture/solar-pump-irrigation/`, `/landing/solar-pump-tank-monitoring/`, `/demo/solar-irrigation-demo/` | Separate System, Solution, Landing, and Demo roles. |
| Pump/valve automation | `/product/pump-valve-control-system/`, `/landing/pump-valve-control-system/`, `/guides/pump-valve-automation/`, `/solution/irrigation-automation-control/` | One System hub, one Solution page, resources as support. |

## Overlapping Pages

- Product pages currently include both true products and system-family pages.
- Solution pages include both application scenarios and system architecture topics.
- Landing pages sometimes describe full solutions and should be linked back to canonical System or Solution pages.
- Downloads include pages that are product-specific but should remain Resources if their primary job is file delivery.
- Guides include product comparison and buying logic; these should support Product pages but remain Resources.

## Pages In The Wrong Category

Priority pages to reclassify later:

- `/product/fertigation-system/`
- `/product/irrigation-control-system/`
- `/product/wireless-field-control-system/`
- `/product/solar-pump-irrigation-system/`
- `/product/monitoring-sensor-system/` (reclassify as Monitoring & Sensors supporting module, not a primary System)
- `/product/pump-valve-control-system/`
- `/solution/fertigation-system/`
- `/solution/solar-irrigation-system/`
- `/solution/dc-solar-irrigation-tank-system/`
- `/solution/water-fertilizer-integration-system/`
- `/fertigation-system/`
- `/lora-irrigation-system/`
- `/lora-wireless-irrigation-system/`

## Migration Principle

Do not move URLs first. First decide canonical roles:

1. One canonical System page per system family.
2. One canonical Solution page per customer/application scenario.
3. Product pages only for real modules or product families.
4. Resources support evaluation, sizing, design, installation, and documentation.
5. Landing pages stay campaign-specific and point users toward the canonical System/Solution/Product pages.

## Canonical System Principle

Purpose: prevent duplicate System pages from appearing in multiple locations.

The current site already has overlapping System pages. For example:

- `/system-architecture/irrigation-control-system/`
- `/product/irrigation-control-system/`

Both pages describe the same system family. Similar overlap exists for fertigation, wireless irrigation, solar pump irrigation, and pump/valve automation.

Future rule:

Each system family should have one canonical system page.

Examples of system families:

- Irrigation Control System
- Fertigation System
- Wireless Irrigation System
- Solar Pump Irrigation System

Monitoring & Sensors is not a primary System family in V2. It should be treated as a Supporting Module and Cross-System Capability that can support irrigation control, fertigation, wireless irrigation, and solar pump irrigation.

Supporting pages may still exist. For example, a product page, solution page, landing page, guide, or demo page can support the same system topic. However, supporting pages should point back to the canonical system page instead of becoming another competing system hub.

This document does not decide canonical URLs yet. The principle is only that one canonical System page should exist for each system family before V2 restructuring begins.

## Applications and Solutions Consolidation

The current site contains both Applications and Solutions. These categories overlap heavily.

Examples:

- Open Field Irrigation
- Orchard Irrigation
- Greenhouse Irrigation
- Tomato Drip Irrigation

Future recommendation:

Applications should gradually become part of Solutions.

Use one unified concept:

- Solutions

Reason:

Customers think about problems, crops, project types, and use cases. They usually do not care whether the website calls a page an application or a solution. A unified Solutions structure will make navigation clearer and reduce duplicate page types.

This does not require immediate URL changes. Existing application pages can remain in place until a migration plan is approved.

## Demonstration Systems Strategy

Demo pages should be reviewed before V2 restructuring decides whether Demo remains a standalone content category.

Current examples:

- Showroom Demo Rack
- Solar Irrigation Demo
- Greenhouse Demo System
- Irrigation Controller Demo

Observation:

Demo pages are proof and validation assets rather than a primary content category. They help customers, integrators, distributors, and OEM partners see that PKYDrip systems can be demonstrated, tested, and explained.

Future options:

Option A: Demo content becomes part of Resources.

This works if demo pages mainly support education, proof, training, and technical explanation.

Option B: Demo content becomes a Showroom / Demonstration Systems area.

This works if PKYDrip wants a visible area for showroom systems, demo racks, partner demo kits, and project demonstration pages.

No decision is made in this document. The important rule is that demo content should support Systems, Solutions, Products, or partner trust. It should not compete with Systems or Solutions as a parallel top-level structure unless that decision is made intentionally.

## Customer Entry Mapping

Purpose: ensure the future site structure follows customer thinking, not engineering categories alone.

### Farm Owner

Typical goal:

Improve irrigation operations.

Suggested path:

Home
-> Solutions
-> Systems
-> Contact

### Greenhouse Grower

Typical goal:

Control irrigation and fertigation.

Suggested path:

Home
-> Solutions
-> Systems
-> Products
-> Contact

### System Integrator

Typical goal:

Build irrigation projects.

Suggested path:

Home
-> Systems
-> Products
-> Resources
-> Contact

### Distributor

Typical goal:

Expand product portfolio.

Suggested path:

Home
-> Landing
-> Products
-> Contact

### OEM Partner

Typical goal:

Develop customized products.

Suggested path:

Home
-> Landing
-> Products
-> Contact

Future homepage design should be influenced by customer entry paths rather than engineering categories alone. Systems remain the engineering backbone, but the homepage should help different customer groups find the correct starting point quickly.
