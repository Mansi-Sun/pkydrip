---
title: "PKYDrip Pump Controller – PKY-60W (Pump Version)"
description: "PKY-60W (Pump Version) is a pump-focused controller designed for safe pump start/stop, VFD coordination, and protection logic in irrigation systems. It works as an independent control block and can be integrated with a main irrigation controller, wireless valve modules, and sensors to build reliable pump-driven irrigation solutions."
type: "product"
layout: "product/single"

bg_image: ""
image: "/images/product/pky60w-pump.jpg"

categories:
  - irrigation-controller
  - pump-controller

# Internal identifiers (for WhatsApp + tracking)
product_code: "PKY-60W-PUMP"
page_code: "0801-2-02-PKY-60W-PUMP"

product_role:
  - "Pump Controller"
  - "Pump & VFD Coordination Module"

highlights:
  - "Independent pump control block for irrigation systems"
  - "Safe pump start/stop + protection logic support"
  - "Designed for VFD coordination and multi-signal interlocks"
  - "Integrates with main controllers, valve modules, and feedback sensors"

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

control_scope:
  pump_control: "Relay/DI/DO signals for pump start/stop and interlocks"
  vfd_coordination: "Supported (run/stop, fault feedback, protection interlocks)"
  # Note: keep this conservative; do not promise exact kW without your confirmation
  typical_use: "Irrigation pump stations, booster pumps, remote pump control"

feedback_sensors:
  - "Pressure sensor"
  - "Flow sensor"
  - "Tank level / low-water signal (optional)"
  - "Dry-run protection logic via feedback signals"

communication_options:
  - "RS485 (Modbus) integration (optional / system design dependent)"
  - "LoRa / 4G command integration via gateway or system modules (solution-level)"

enclosure:
  protection: "IP65"
  optional:
    - "Waterproof protective cover (optional)"

operating_environment:
  temperature: "-20°C to +50°C"

cta:
  text: "Contact us for pump/VFD integration advice, wiring references, or a project-level control proposal."
  button_label: "Chat on WhatsApp"
  button_url: "https://wa.me/8617395297329?text=Hi%20PKYDrip%2C%20I%27m%20interested%20in%20PKY-60W-PUMP%20(Pump%20Version).%20Page%3A%200801-2-02-PKY-60W-PUMP.%20Please%20advise%20pump%2FVFD%20integration%20and%20recommended%20signals."

aliases:
  - "/product/pky-60w-pump/"
---

## Role in the Irrigation System

PKY-60W (Pump Version) is a **pump controller**.  
It is designed to control **pump start/stop** and coordinate with **VFD (variable frequency drive)** logic and protection signals.

This module is used to make pump operation **safe, reliable, and automation-ready**, especially in projects where pump power, remote control, and protection requirements are critical.

---

## Where It Fits

In a complete modular irrigation system:

- **Main Controller (separate module)**  
  Handles irrigation zones, schedules, and automation decisions

- **PKY-60W Pump Version (Pump Controller)**  
  Executes pump/VFD start-stop and protection logic as an independent control block

- **Valve Controllers (wired or LoRa)**  
  Open/close irrigation zones

- **Sensors (pressure/flow/level)**  
  Provide feedback for protection and verification

Each block operates independently within an expandable irrigation control system.

---

## Typical Applications

- Irrigation pump stations (drip / sprinkler / mixed systems)
- Booster pump control for pressure stabilization
- Remote pump control projects (large fields, distributed zones)
- Systems requiring protection feedback (pressure/flow/level)
- Projects combining pump automation with fertigation or sensor-based irrigation

---

## Core Capabilities

- Pump start/stop control via relay / DI/DO signals
- Interlock logic using feedback signals (pressure/flow/level)
- Supports dry-run protection design (via feedback strategy)
- Works with main controllers and zone valve modules as part of a full system
- Suitable for automation projects where pump operation must be verified and protected

---

## VFD Integration (Expansion)

This pump version can be used as a dedicated module to coordinate with a **VFD**.

Typical VFD-related integration topics include:
- Run / stop control signals
- Fault feedback and alarm linkage
- Protection interlocks (e.g., low pressure, no flow, low level)
- Coordination with pressure control strategies (project dependent)

This section is intended for system-level integration planning. Actual VFD wiring and signal mapping follow the selected VFD brand/model.

---

## Solar Pump Projects (Technical Support)

PKYDrip can provide **system-level technical support** for solar pump irrigation projects, including:
- Control logic planning for pump + zones
- Protection signal strategy (pressure/flow/low-water)
- Hybrid operation considerations (solar + grid / solar + diesel, if used)
- Wiring reference and integration guidance (project dependent)

This support is focused on integration and control coordination, not hydraulic sizing or energy yield guarantees.

---

## Expandability & Upgrade Path

**Start Simple. Upgrade Anytime.**

Pump automation can start from basic start/stop control and be upgraded step-by-step:
- Add VFD coordination
- Add feedback sensors for protection
- Add remote command modules (via system gateways)
- Integrate with a main controller for full zone scheduling

---

## Integration Notes (For Engineers)

- Use relay/DI/DO signals for pump/VFD command and feedback
- Add pressure/flow/level feedback for protection and confirmation
- Remote command integration (LoRa/4G) is implemented at the system level via appropriate modules or gateways
- This module is designed to work as part of a modular, expandable control architecture

---

## Summary

- PKY-60W (Pump Version) is a dedicated **pump control module**
- Designed for safe start/stop and protection coordination
- VFD integration can be added as an expansion topic
- Solar pump projects are supported at the integration/design level
- Built for modular irrigation systems and upgradeable project growth
