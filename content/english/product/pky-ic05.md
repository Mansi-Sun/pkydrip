---
title: "PKYDrip LoRa Solar Valve Controller – Model PKY-IC05"
description: "PKY-IC05 is a LoRa-based solar valve controller designed as a dedicated field actuator for opening and closing irrigation valves in off-grid environments. Powered by an integrated solar panel and battery, it focuses on ultra-low power operation and reliable valve control."
type: "product"
layout: "product/single"

bg_image: ""
image: "/images/product/pky-ic05.webp"

categories:
  - irrigation-controller
  - valve-controller
  - lora-solar

# Internal identifiers (for tracking & WhatsApp)
product_code: "PKY-IC05"
page_code: "PC-0801-2-02-PROD-PKY-IC05-05"

product_role:
  - "LoRa Solar Valve Controller"
  - "Dedicated Valve Actuator"

highlights:
  - "Solar-powered valve controller for off-grid irrigation"
  - "Ultra-low power design, optimized only for valve operation"
  - "LoRa wireless communication via PKY-EG08 gateway"
  - "Designed for simple, reliable open/close valve control"

communication:
  - "LoRa (paired with PKY-EG08 Gateway)"

control_scope:
  function: "Open / close irrigation valves only"
  supported_valves: "Pulse-type solenoid valves (typical 1 valve per unit)"

power:
  supply: "Integrated solar panel + internal rechargeable battery"
  design_note: "Self-powered, no external electricity required"

control_methods:
  - "Scheduled valve operation (via system platform)"
  - "Remote open/close commands (via LoRa gateway)"
  - "Basic local execution without complex logic"

enclosure:
  protection: "IP66"
  note: "Designed for long-term outdoor field deployment"

operating_environment:
  temperature: "-20°C to +50°C"

cta:
  text: "Contact us for LoRa solar valve solutions, node quantity planning, or field deployment advice."
  button_label: "Chat on WhatsApp"
  button_url: "https://wa.me/8617395297329?text=Hi%20PKYDrip%2C%20Product%3A%20PKY-IC05%20%7C%20Page%3A%20PC-0801-2-02-PROD-PKY-IC05-05%20%7C%20Action%3A%20AC-WA-PKY-IC05-WEB-01%0AI%20need%20a%20solar-powered%20LoRa%20valve%20controller.%20Please%20advise%20suitable%20valves%20and%20gateway%20setup."

aliases:
  - "/product/pky-ic05/"
---

## Role in the Irrigation System

PKY-IC05 is a **LoRa solar valve controller** designed as a **dedicated field actuator**.

Its role is simple and clear:
- Open irrigation valves
- Close irrigation valves
- Execute commands reliably in remote, off-grid locations

PKY-IC05 does **not** handle irrigation logic, sensor analysis, or complex field decisions.

---

## Where PKY-IC05 Fits

In a modular irrigation system:

- **Main Controller (optional)**  
  Defines irrigation logic, schedules, and automation rules

- **PKY-EG08 (LoRa Gateway)**  
  Coordinates LoRa communication and manages wireless field devices

- **PKY-IC05 (Solar Valve Controller)**  
  Executes valve open/close actions in each irrigation zone

PKY-IC05 acts as the **final execution point** in the system.

---

## Core Design Philosophy

PKY-IC05 is intentionally designed to do **one job only**.

By focusing exclusively on valve control:
- Power consumption is minimized
- Solar panel size and battery capacity are optimized
- System reliability is increased
- Field maintenance requirements are reduced

This design makes PKY-IC05 ideal for large-scale deployments with many irrigation zones.

---

## Power & Deployment

- Integrated solar panel with internal rechargeable battery
- No external power supply required
- Suitable for long-term outdoor use
- Designed for unattended operation in remote fields

Once installed, the controller operates with minimal maintenance.

---

## Typical Applications

- Orchards and vineyards with distributed irrigation zones
- Open-field agriculture without access to electricity
- Remote irrigation projects where trenching cables is impractical
- Large farms requiring many independent valve zones

---

## Control & Operation

PKY-IC05 supports:
- Scheduled valve operation via the irrigation platform
- Remote open/close commands through the LoRa gateway
- Basic local execution for assigned tasks

It does not manage sensor logic or multi-condition decisions.

---

## Expandability & System Growth

**Start Simple. Upgrade Anytime.**

Projects can begin with a small number of solar valve controllers and expand gradually:
- Add more IC05 units for additional zones
- Extend LoRa coverage via gateway planning
- Integrate with main controllers for advanced scheduling

The valve controller remains a stable, low-maintenance execution node as the system grows.

---

## Integration Notes (For Engineers)

- Designed to pair with **PKY-EG08** LoRa gateway
- Optimized for pulse-type solenoid valves
- Not intended for multi-sensor or complex I/O expansion
- Best used as a dedicated valve execution device

---

### Choosing between IC03 and IC05?

If your project involves wireless valve control,  
this guide explains when to use each device:

👉 [PKY-IC03 vs PKY-IC05 – What’s the Difference?](/guides/ic03-vs-ic05/)

## Summary

- PKY-IC05 is a **LoRa solar-powered valve controller**
- Designed exclusively for valve open/close operations
- Ultra-low power, self-powered, and field-ready
- Ideal for large-scale, off-grid irrigation zoning

---

### Related Solution

- 👉 [LoRa Off-Grid Irrigation System](/solutions/lora-off-grid-irrigation-system/)
