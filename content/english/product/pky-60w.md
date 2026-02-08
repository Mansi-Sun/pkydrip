---
title: "PKYDrip Wired Main Controller – PKY-60W"
description: "PKY-60W is a wired main irrigation controller designed as the logic core of modular irrigation systems. It manages zones, schedules, sensors, and system coordination, while working with independent pump controllers, valve controllers, and gateways to build scalable irrigation solutions."
type: "product"
layout: "product/single"

# Optional: keep empty to avoid wrong background
bg_image: ""
image: "images/product/smart-controllers.webp"

categories:
  - irrigation-controller
  - main-controller

# Internal identifiers (for WhatsApp + tracking)
product_code: "PKY-60W"
page_code: "0801-2-02-PKY-60W"

product_role:
  - "Main Controller"
  - "System Logic Core"

highlights:
  - "Main controller for modular irrigation systems"
  - "Expandable from small pilot projects to large-scale installations"
  - "Controls logic, zones, schedules, and sensors — not water volume"
  - "Works with independent pump controllers and wireless valve modules"

power:
  # Default configuration
  default_input: "AC 220–240V (AU plug)"
  # Optional configurations
  optional_input:
    - "AC 380–400V"
  # OEM customization
  oem_plug_customization:
    moq: "≥ 5 units"
    options:
      - "AU plug"
      - "UK plug"
      - "US plug"

valve_output:
  voltage_options:
    - "AC 24V"
    - "DC 24V"

communication:
  - "RS485 ×2 (Modbus, up to 25 devices per port)"

io_capability:
  base_outputs: 14
  expandable_outputs: 60
  analog_inputs: "2 × (4–20mA / 0–5V)"

interface:
  default_screen: "7-inch industrial MCGS capacitive touchscreen"
  optional_screen:
    - "10-inch touchscreen (optional)"

enclosure:
  protection: "IP65"
  material: "ABS"
  size: "240 × 300 × 120 mm"
  installation: "Wall-mounted or pole-mounted"
  optional:
    - "Waterproof protective cover (optional)"

operating_environment:
  temperature: "-20°C to +50°C"

integration_scope:
  - "Solenoid and motorized valves"
  - "Pump start signals and VFD coordination (logic-level)"
  - "Fertigation and dosing systems (via external modules)"
  - "Soil moisture, EC/pH, pressure, flow, rain sensors"

cta:
  text: "Contact us for technical drawings, system design support, or integration advice."
  button_label: "Chat on WhatsApp"
  # WhatsApp prefilled message includes product_code + page_code
  button_url: "https://wa.me/8617395297329?text=Hi%20PKYDrip%2C%20I%27m%20interested%20in%20PKY-60W.%20Page%3A%200801-2-02-PKY-60W.%20Please%20share%20datasheet%20and%20a%20quick%20recommendation."

aliases:
  - "/product/pky-60w/"
---
## Role in the Irrigation System

PKY-60W is a **wired main controller**.  
It serves as the **logic and coordination core** of a modular irrigation system.

The controller manages:
- Irrigation zones and schedules
- Automation logic (time-based or sensor-based)
- System coordination between valves, pumps, and fertigation equipment

It **does not define irrigation area or water volume**.

---

## Where PKY-60W Fits

In a complete system:

- **PKY-60W (Main Controller)**  
  Controls logic, zones, schedules, and sensor decisions

- **Pump Controller (separate module)**  
  Safely starts and protects pumps or VFDs

- **Valve Controllers (wired or LoRa)**  
  Independently control irrigation zones

- **Gateway (optional)**  
  Enables wireless expansion and cloud connectivity

Each block operates independently within an expandable irrigation control system.

---

## Typical Applications

PKY-60W is used as the main controller in:

- Greenhouse irrigation systems
- Open-field zoned irrigation projects
- Orchard and vineyard drip irrigation
- Landscape and municipal irrigation
- Fertigation and water–fertilizer integration systems

It supports both **small pilot installations** and **large multi-zone projects**.

---

## Core Capabilities

- Multi-zone irrigation logic (base + expansion)
- Time-based and sensor-based automation
- Sequential or grouped zone operation
- RS485 sensor integration (soil, EC/pH, pressure, flow)
- Coordination with external pump and fertigation controllers
- Manual and automatic operation modes

---

## Expandability & Upgrade Path

**Start Simple. Upgrade Anytime.**

Projects can begin with a small number of zones and expand over time without replacing the controller.

Each function — valves, pumps, wireless modules, fertigation — is added as an **independent control block**, allowing the system to grow with project needs.

---

## Integration Notes (For Engineers)

- RS485 (Modbus) for sensor and device integration
- Logic-level outputs for pump start and VFD coordination
- Compatible with wired and wireless valve control architectures
- Cloud connectivity available via external gateway modules

PKY-60W focuses on **control logic**, not hydraulic sizing.

---

## Coverage Area – Important Clarification

PKY-60W does **not** have a fixed coverage area.

Irrigation area depends on:
- Pump capacity and pressure
- Hydraulic design and pipe sizing
- Irrigation method (drip, sprinkler, pivot)
- Zoning strategy and irrigation schedule

The controller manages **when and how zones operate**, not how much water flows.

> “The PKY-60W does not limit area.  
> It controls valves and timing.  
> The real limit is your pump and irrigation design.”

---

## Typical Area Ranges (Reference Only)

| Application type | Typical area range |
|------------------|--------------------|
| Greenhouse drip irrigation | 0.3 – 5 hectares |
| Orchard / open-field drip | 5 – 50 hectares |
| Large sprinkler / pivot systems | 10 – 100+ hectares |

These ranges vary based on hydraulic design and operating hours.

---

## Summary

- PKY-60W is a **main irrigation controller**
- It defines **system logic**, not irrigation area
- Suitable for both small and large projects
- Designed for modular, expandable irrigation systems
