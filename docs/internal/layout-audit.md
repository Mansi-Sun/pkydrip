# Layout Audit

Scope: Hugo project layout files in `/layouts` and theme fallback layouts in `/themes/airspace-hugo/layouts`. Usage counts are inferred from content front matter, section, page kind, and Hugo layout lookup rules.

## Layout Usage Table

| Layout File | Source | Section / Family | Usage Count | English Usage |
| --- | --- | --- | ---: | ---: |
| `404.html` | theme | home/root | 0 | 0 |
| `_default/about.html` | theme | _default | 4 | 1 |
| `_default/contact.html` | theme | _default | 4 | 1 |
| `_default/engineering-page.html` | project | _default | 6 | 6 |
| `_default/faq.html` | theme | _default | 4 | 1 |
| `_default/integration-page.html` | project | _default | 2 | 2 |
| `_default/landing.html` | project | _default | 6 | 6 |
| `_default/list.html` | theme | _default | 10 | 1 |
| `_default/message_sent.html` | theme | _default | 4 | 1 |
| `_default/pricing.html` | theme | _default | 4 | 1 |
| `_default/service.html` | theme | _default | 9 | 6 |
| `_default/single.html` | theme | _default | 47 | 7 |
| `_default/terms.html` | theme | _default | 0 | 0 |
| `applications/engineering-page.html` | project | applications | 2 | 2 |
| `applications/list.html` | project | applications | 1 | 1 |
| `applications/single.html` | project | applications | 2 | 2 |
| `author/single.html` | theme | author | 8 | 2 |
| `demo/list.html` | project | demo | 1 | 1 |
| `demo/single.html` | project | demo | 4 | 4 |
| `docs/engineering-page.html` | project | docs | 3 | 3 |
| `docs/list.html` | project | docs | 4 | 4 |
| `docs/single.html` | project | docs | 9 | 9 |
| `downloads/list.html` | theme | downloads | 1 | 1 |
| `guide/single.html` | project | guide | 6 | 6 |
| `guides/list.html` | project | guides | 1 | 1 |
| `guides/single.html` | project | guides | 0 | 0 |
| `index.html` | project | home/root | 1 | 1 |
| `irrigation-wizard/single.html` | project | irrigation-wizard | 1 | 1 |
| `landing/fertigation-upgrade.html` | project | landing | 1 | 1 |
| `landing/list.html` | project | landing | 1 | 1 |
| `landing/modular-fertigation-control.html` | project | landing | 1 | 1 |
| `landing/partner-program.html` | project | landing | 2 | 2 |
| `landing/single.html` | project | landing | 4 | 3 |
| `landing/solar-pump-tank-monitoring.html` | project | landing | 1 | 1 |
| `partner/list.html` | project | partner | 5 | 5 |
| `partner/single.html` | project | partner | 0 | 0 |
| `product-category/list.html` | project | product-category | 0 | 0 |
| `product-category/single.html` | project | product-category | 3 | 3 |
| `product/engineering-page.html` | project | product | 9 | 9 |
| `product/farm-irrigation-controller.html` | project | product | 2 | 2 |
| `product/list.html` | theme | product | 1 | 1 |
| `product/pump-valve-control-system.html` | project | product | 1 | 1 |
| `product/single-product.html` | theme | product | 1 | 1 |
| `product/single.html` | theme | product | 22 | 22 |
| `site-map/single.html` | project | site-map | 1 | 1 |
| `solution/engineering-page.html` | project | solution | 6 | 6 |
| `solution/list.html` | theme | solution | 6 | 6 |
| `solution/open-field-irrigation.html` | project | solution | 0 | 0 |
| `solution/single.html` | project | solution | 19 | 19 |
| `sv/list.html` | theme | sv | 1 | 1 |
| `sv/single.html` | theme | sv | 4 | 4 |
| `system-architecture/list.html` | project | system-architecture | 1 | 1 |
| `tools/list.html` | project | tools | 2 | 2 |
| `tools/single.html` | project | tools | 4 | 4 |

## Active Layouts

- `_default/single.html` (theme) — 47 pages total, 7 English pages.
- `product/single.html` (theme) — 22 pages total, 22 English pages.
- `solution/single.html` (project) — 19 pages total, 19 English pages.
- `_default/list.html` (theme) — 10 pages total, 1 English pages.
- `_default/service.html` (theme) — 9 pages total, 6 English pages.
- `docs/single.html` (project) — 9 pages total, 9 English pages.
- `product/engineering-page.html` (project) — 9 pages total, 9 English pages.
- `author/single.html` (theme) — 8 pages total, 2 English pages.
- `_default/engineering-page.html` (project) — 6 pages total, 6 English pages.
- `_default/landing.html` (project) — 6 pages total, 6 English pages.
- `guide/single.html` (project) — 6 pages total, 6 English pages.
- `solution/engineering-page.html` (project) — 6 pages total, 6 English pages.
- `solution/list.html` (theme) — 6 pages total, 6 English pages.
- `partner/list.html` (project) — 5 pages total, 5 English pages.
- `_default/about.html` (theme) — 4 pages total, 1 English pages.
- `_default/contact.html` (theme) — 4 pages total, 1 English pages.
- `_default/faq.html` (theme) — 4 pages total, 1 English pages.
- `_default/message_sent.html` (theme) — 4 pages total, 1 English pages.
- `_default/pricing.html` (theme) — 4 pages total, 1 English pages.
- `demo/single.html` (project) — 4 pages total, 4 English pages.
- `docs/list.html` (project) — 4 pages total, 4 English pages.
- `landing/single.html` (project) — 4 pages total, 3 English pages.
- `sv/single.html` (theme) — 4 pages total, 4 English pages.
- `tools/single.html` (project) — 4 pages total, 4 English pages.
- `docs/engineering-page.html` (project) — 3 pages total, 3 English pages.
- `product-category/single.html` (project) — 3 pages total, 3 English pages.
- `_default/integration-page.html` (project) — 2 pages total, 2 English pages.
- `applications/engineering-page.html` (project) — 2 pages total, 2 English pages.
- `applications/single.html` (project) — 2 pages total, 2 English pages.
- `landing/partner-program.html` (project) — 2 pages total, 2 English pages.
- `product/farm-irrigation-controller.html` (project) — 2 pages total, 2 English pages.
- `tools/list.html` (project) — 2 pages total, 2 English pages.
- `applications/list.html` (project) — 1 pages total, 1 English pages.
- `demo/list.html` (project) — 1 pages total, 1 English pages.
- `downloads/list.html` (theme) — 1 pages total, 1 English pages.
- `guides/list.html` (project) — 1 pages total, 1 English pages.
- `index.html` (project) — 1 pages total, 1 English pages.
- `irrigation-wizard/single.html` (project) — 1 pages total, 1 English pages.
- `landing/fertigation-upgrade.html` (project) — 1 pages total, 1 English pages.
- `landing/list.html` (project) — 1 pages total, 1 English pages.
- `landing/modular-fertigation-control.html` (project) — 1 pages total, 1 English pages.
- `landing/solar-pump-tank-monitoring.html` (project) — 1 pages total, 1 English pages.
- `product/list.html` (theme) — 1 pages total, 1 English pages.
- `product/pump-valve-control-system.html` (project) — 1 pages total, 1 English pages.
- `product/single-product.html` (theme) — 1 pages total, 1 English pages.
- `site-map/single.html` (project) — 1 pages total, 1 English pages.
- `sv/list.html` (theme) — 1 pages total, 1 English pages.
- `system-architecture/list.html` (project) — 1 pages total, 1 English pages.

## Unused Layouts

- `404.html` (theme)
- `_default/terms.html` (theme)
- `guides/single.html` (project)
- `partner/single.html` (project)
- `product-category/list.html` (project)
- `solution/open-field-irrigation.html` (project)

## Duplicate / Overlapping Layouts

- `product/engineering-page.html`, `solution/engineering-page.html`, `docs/engineering-page.html`, `applications/engineering-page.html`, and `_default/engineering-page.html` appear to serve the same engineering page pattern with section-specific variations.
- `landing/single.html`, `_default/landing.html`, `landing/partner-program.html`, and the custom landing templates (`fertigation-upgrade`, `solar-pump-tank-monitoring`, `modular-fertigation-control`) are one landing family split across multiple files.
- List templates exist for many sections (`solution`, `docs`, `tools`, `demo`, `applications`, `product-category`, `partner`, `system-architecture`), but most perform directory/index presentation and could eventually be standardized by family.
- Theme fallback templates (`_default/single.html`, `_default/list.html`, `product/single.html`, `product/single-product.html`) still support legacy and localized starter content.

## Layout Family Count

Current practical layout families: Home, Default/Legacy, System Architecture, Solution, Product, Resource/Docs/Tools/Downloads, Landing, Demo/Application, Partner, Product Category, SV/Service legacy. This is more than the V2 target of six major families.

Target family model for V2: Home, System, Solution, Product, Resource, Landing.
