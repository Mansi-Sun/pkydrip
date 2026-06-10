# PKYDrip Website Framework V2

This is the internal website structure standard for future PKYDrip content. It defines how new pages should be planned before writing or design work begins.

## Future Top-Level Structure

```text
Home
Systems
Solutions
Products
Resources
Contact
```

## Content Hierarchy

```text
Level 1: Systems
Level 2: Solutions
Level 3: Products
Level 4: Resources
```

Systems are the primary explanation layer. Solutions explain customer scenarios and industries. Products support systems. Resources help users understand problems, selection logic, and implementation details.

Products should support systems. Products should not become the main navigation focus.

## Homepage Framework

The homepage should follow this fixed structure:

1. Hero
2. Who We Work With
3. What We Help You Build
4. Core Systems
5. Applications
6. Why PKYDrip
7. Showroom
8. Contact

Homepage rules:

- Start from customer project goals, not SKU names.
- Use system and application visuals before product-only images.
- Keep the homepage stable; campaign-specific content belongs in landing pages.
- Core Systems should represent engineering logic, not every project variation.

## System Page Template

Every system page must follow:

1. Overview
2. System Architecture
3. Control Logic
4. Applications
5. Recommended Products
6. Related Resources
7. Inquiry

System page rules:

- Explain the complete control structure.
- Include a diagram whenever possible.
- Show how pumps, valves, fertigation, monitoring, field devices, and control cabinets connect.
- Treat solar pump irrigation as a project configuration unless it needs a dedicated campaign page.

## Solution Page Template

Every solution page must follow:

1. Industry Challenge
2. Typical System
3. Recommended Architecture
4. Recommended Products
5. Example Scenario
6. Inquiry

Solution page rules:

- Start from user situation: crop, farm type, water source, installation constraint, or upgrade problem.
- Recommend architecture before recommending product modules.
- Use application photos and system diagrams.

## Product Page Template

Every product page must follow:

1. Product Overview
2. Applications
3. How It Works
4. System Integration
5. Technical Specifications
6. Downloads
7. Inquiry

Product page rules:

- A product page must explain where the product fits in the system.
- Avoid isolated product-only pages that do not connect to Systems and Solutions.
- Downloads should be attached when there is a real datasheet, brochure, wiring note, or specification file.

## Resource Page Template

Every resource page must follow:

1. Problem
2. Explanation
3. Recommended System
4. Related Products
5. Related Solutions

Resource page rules:

- Resources should answer buyer, contractor, or engineer questions.
- Resources should link back to Systems and Solutions.
- Avoid creating resource pages that duplicate product pages.

## Section Standards

### Systems

Purpose: explain engineering architecture.

Recommended pages:

- Irrigation Control System
- Fertigation System
- Wireless Field Control System
- Monitoring & Sensor System

### Solutions

Purpose: explain use cases and customer scenarios.

Examples:

- Open field irrigation
- Greenhouse irrigation
- Orchard irrigation
- Irrigation retrofit upgrade
- Solar pump irrigation project configuration
- LoRa wireless irrigation project

### Products

Purpose: support system selection and quotation.

Examples:

- Controllers
- Gateways
- Wireless valve controllers
- Fertigation controllers
- EC/pH dosing controllers
- Sensors
- Control cabinets

### Resources

Purpose: educational and support material.

Examples:

- Guides
- Docs
- Downloads
- Tools
- Selection checklists
- Engineering notes

## URL Standards

Preferred URL patterns:

```text
/system-architecture/{system}/
/solution/{scenario}/
/product/{product-or-module}/
/resources/{guide-or-topic}/
/downloads/{file-or-brochure}/
/landing/{campaign}/
```

Do not create multiple URLs for the same topic unless there is a clear SEO or campaign reason.

## Internal Linking Standards

Each System page should link to:

- Related Solutions
- Recommended Products
- Related Resources
- Inquiry CTA

Each Solution page should link to:

- Recommended System Architecture
- Recommended Products
- Similar Solutions
- Inquiry CTA

Each Product page should link to:

- Parent System
- Related Solutions
- Downloads
- Inquiry CTA

## Governance

Before adding a new page, decide:

1. Is this a System, Solution, Product, Resource, Landing Page, or Partner/OEM page?
2. Does an existing page already cover this topic?
3. Which parent page should link to it?
4. Which pages should it link back to?
5. What image type does it need: diagram, application photo, installation photo, or product photo?

No redesign is implied by this framework. This document defines structure and standards only.
