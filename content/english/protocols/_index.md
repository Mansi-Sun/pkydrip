---
title: "Protocols"
description: "Integration notes: RS485/Modbus, LoRa topology, MQTT drafts, and interoperability checklists."
---

# Protocols & Integration

This section is about **how modules talk to each other** in real projects:

- RS485 / Modbus device mapping (sensors, meters, VFDs, etc.)
- LoRa gateway + node topology (range and antenna planning)
- MQTT topic/payload drafts for cloud integration
- Practical interoperability checklists

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:14px;">
  <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
    <div style="font-weight:700;margin-bottom:6px;">RS485 / Modbus Notes</div>
    <div style="font-size:14px;opacity:.85;margin-bottom:10px;">Wiring, addressing, and typical integration pitfalls.</div>
    <a href="/protocols/rs485-modbus/" style="text-decoration:underline;">Open →</a>
  </div>

  <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
    <div style="font-weight:700;margin-bottom:6px;">LoRa Topology</div>
    <div style="font-size:14px;opacity:.85;margin-bottom:10px;">Gateway placement, antenna height, and range notes.</div>
    <a href="/protocols/lora-topology/" style="text-decoration:underline;">Open →</a>
  </div>

  <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
    <div style="font-weight:700;margin-bottom:6px;">MQTT Draft</div>
    <div style="font-size:14px;opacity:.85;margin-bottom:10px;">Topic naming and payload conventions for cloud integration.</div>
    <a href="/protocols/mqtt-draft/" style="text-decoration:underline;">Open →</a>
  </div>
</div>

**Feedback / collaboration:** <a href="mailto:junfeng@pky-dripirrigation.com?subject=PKYDrip%20Lab%20Protocol%20Feedback">junfeng@pky-dripirrigation.com</a>
