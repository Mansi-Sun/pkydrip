# PKYDrip Website Changelog

## Version: v0.9.3
## Date: 2026-03-23
## Author: PKYDrip Engineering Team

---

## Update Goal

Integrate the LoRa wireless irrigation system into the existing website architecture  
without expanding top-level navigation, while maintaining an engineering-oriented structure.

---

## Structural Decisions

### 1. Solution Hierarchy

Defined LoRa Wireless Irrigation Control as a core system capability:

/solution/lora-wireless-irrigation-control/

Repositioned Off-grid Irrigation as a sub-scenario:

/solution/lora-off-grid-irrigation-system/

---

### 2. Architecture Logic

Wireless = HOW (system capability)  
Off-grid = WHERE (application scenario)

Structure:

Solution  
└── LoRa Wireless Irrigation Control  
    └── Off-grid Irrigation  

---

## Internal Linking Optimization

### Solution → Product

/product/pky-eg08/  
/product/pky-ic05/

### Product → Solution

→ /solution/lora-wireless-irrigation-control/

### Solution ↔ Scenario

Wireless → Off-grid  
Off-grid → Wireless  

### Solution → Application

/application/open-field-wireless-valve-control/

---

## Content Optimization

Rebuilt "Related Applications":

- From simple list → structured explanation  
- Added scenario grouping  
- Improved readability and SEO  

---

## Visual System (SVG)

### Compact Diagram

/images/solution/lora-wireless-architecture-compact.svg

Used in:
- Solution pages
- Entry explanations

---

### Full Diagram

/images/solution/lora-wireless-architecture-full.svg

Used in:
- Docs pages
- Technical explanation

---

### Asset Rule

All diagrams stored in:

/static/images/solution/

---

## UX / SEO Improvements

- Capability-first structure (instead of scenario-first)
- Clear system hierarchy
- Better scalability for future content
- Improved internal linking

---

## Constraints Maintained

- No new top-level menu
- No product-heavy structure
- Maintain engineering positioning

---

## Current Architecture

Solution (System Layer)  
→ Application (Scenario Layer)  
→ Product (Component Layer)  
→ Docs (Technical Layer)  

---

## Next Steps (Planned)

- Orchard wireless irrigation page  
- Docs: Reference Architecture  
- Multi-language sync  

---

## Status

Structure stabilized  
LoRa system integrated  
Ready for SEO / Ads
