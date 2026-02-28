---
title: "Architecture"
description: "System structure, logic blocks, and design patterns for irrigation automation."
---

# Architecture

This section documents **reusable system structures** for irrigation automation:  
pump control, valve sequencing, zoning strategy, safety design, and cabinet logic.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:14px;">
  <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
    <div style="font-weight:700;margin-bottom:6px;">Zoning & Sequencing</div>
    <div style="font-size:14px;opacity:.85;margin-bottom:10px;">Pump first → valves one-by-one → pump off (stable pressure).</div>
    <a href="/architecture/zoning-sequencing/" style="text-decoration:underline;">Open →</a>
  </div>

  <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
    <div style="font-weight:700;margin-bottom:6px;">Safety Logic</div>
    <div style="font-size:14px;opacity:.85;margin-bottom:10px;">Pressure relief, air valves, flow/pressure monitoring concepts.</div>
    <a href="/architecture/safety-logic/" style="text-decoration:underline;">Open →</a>
  </div>

  <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
    <div style="font-weight:700;margin-bottom:6px;">Demo Rack (Showroom Rig)</div>
    <div style="font-size:14px;opacity:.85;margin-bottom:10px;">A compact live demo setup for exhibitions and local showrooms.</div>
    <a href="/experiments/demo-rack/" style="text-decoration:underline;">Open →</a>
  </div>
</div>

**Feedback:** <a href="mailto:junfeng@pky-dripirrigation.com?subject=PKYDrip%20Lab%20Architecture%20Feedback">junfeng@pky-dripirrigation.com</a>
