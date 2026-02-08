---
title: "PKY-IC03 vs LoRa Solar Valve Controller (PKY-IC05): What’s the Difference?"
description: "This guide explains the key differences between PKY-IC03 and PKY-IC05, helping users choose the right wireless valve control device for their irrigation project based on power supply, functionality, and deployment scenarios."
type: "guide"

page_code: "PC-0801-2-02-GUIDE-IC03-IC05-01"
---

## Introduction

PKY-IC03 and PKY-IC05 are both wireless field devices used in PKYDrip irrigation systems.  
However, they are designed for **different purposes** and **different deployment conditions**.

This guide explains:
- What each device is designed to do
- How their roles differ in an irrigation system
- Which one should be selected for typical project scenarios

---

## Core Design Difference

The fundamental difference between the two products is **design intention**.

- **PKY-IC03** is a **wireless execution controller** designed for flexibility.
- **PKY-IC05 (LoRa Solar Valve Controller)** is a **dedicated solar-powered valve actuator** designed for simplicity and ultra-low power operation.

They are not interchangeable, and neither one is an upgrade of the other.

---

## Functional Scope Comparison

| Aspect | PKY-IC03 | PKY-IC05 |
|------|---------|----------|
| Primary role | Wireless field controller | Solar valve actuator |
| Main function | Execute commands + support field I/O | Open / close valve only |
| Power supply | Battery / DC power (larger capacity possible) | Integrated solar panel + battery |
| Sensor support | Yes (pressure, soil moisture, etc.) | No (valve control only) |
| Local logic | Timer, sensor-triggered actions | Simple execution |
| Typical installation | Engineering projects | Fast field deployment |
| Maintenance | Periodic battery management | Minimal (solar self-powered) |

---

## When to Use PKY-IC03

Choose **PKY-IC03** when:

- Field power supply is available or larger batteries can be used
- Additional field sensors are required
  - Pipeline pressure sensor
  - Soil moisture sensor
  - Other monitoring devices
- Valve operation depends on local feedback or conditions
- The project is engineered and supervised by technical staff

**Typical examples:**
- Greenhouses with pressure monitoring
- Main or sub-main pipeline zones
- Mixed systems requiring feedback before valve operation

---

## When to Use PKY-IC05

Choose **PKY-IC05 (LoRa Solar Valve Controller)** when:

- The site has **no electricity**
- Only **valve open/close** control is required
- Long-term unattended operation is expected
- Fast installation and low maintenance are priorities

**Typical examples:**
- Orchards and vineyards with distributed zones
- Open-field agriculture with long distances
- Projects where trenching cables is impractical

---

## System Architecture Perspective

In a modular PKYDrip system, both devices may coexist:

- PKY-IC03 handles zones requiring sensors or flexible control
- PKY-IC05 handles simple valve-only zones powered by solar energy

This separation improves system reliability and reduces unnecessary complexity.

---

## Summary

- **PKY-IC03** is a flexible wireless execution controller suitable for sensor-integrated zones
- **PKY-IC05** is a dedicated solar-powered valve controller optimized for simple, reliable valve control
- Selection depends on **power availability**, **functional requirements**, and **maintenance expectations**

If you are unsure which device fits your project, reviewing field conditions and control requirements is the best starting point.
