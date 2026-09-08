---
title: "Open Platform — Integrate PKYDrip with Your Systems (ThingsBoard & More)"
description: "PKYDrip devices and cloud platform integrate with third-party systems. See how controllers connect to ThingsBoard, what documentation is public, and how integrators evaluate the platform."
keywords: ["irrigation controller integration", "ThingsBoard irrigation", "open platform agriculture", "fertigation system API", "smart agriculture integration"]
draft: false
image : ""
bg_image: "images/call-to-action-bg.jpg"
layout: "service"
category: [ "Integrations" ]
url: "/api-integration/"
---
<div>
  <section class="custom-section">
    <h3>An Open Platform, Not a Closed Box</h3>
    <p class="lead mb-4">
      PKYDrip is built for integrators. Our controllers and fertigation machines are designed to plug into
      <strong>your</strong> stack — whether that is the PKYDrip cloud, a self-hosted instance, or a third-party platform like <strong>ThingsBoard</strong>.
      Field protocols and platform integration paths are documented and publicly available.
    </p>
  </section>

  <section class="custom-section">
    <h3>Integration Paths</h3>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr><th>Path</th><th>What It Gives You</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>PKYDrip Cloud Platform</strong></td><td>Ready-made dashboards, scheduling, alarms, multi-tenant roles</td><td>Shipping</td></tr>
          <tr><td><strong>ThingsBoard connection</strong></td><td>Bridge device telemetry and control into your own ThingsBoard instance — device data flows in as standard telemetry attributes</td><td>Documented example</td></tr>
          <tr><td><strong>Field bus (Modbus RTU)</strong></td><td>Direct integration with PLCs and third-party controllers on site</td><td>Documented</td></tr>
          <tr><td><strong>Platform message bridge</strong></td><td>Device-to-cloud transport for custom back ends and OEM builds</td><td>Documented</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="custom-section">
    <h3>Example: Connecting PKYDrip to ThingsBoard</h3>
    <p>
      A common integration for smart-agriculture companies: keep PKYDrip controllers running irrigation and fertigation locally,
      while ThingsBoard consumes device telemetry for fleet-wide dashboards and rule chains.
    </p>
    <ul>
      <li><p><strong>Device layer:</strong> controllers publish telemetry (zone status, flow, EC/pH, sensor values) over the platform message bridge.</p></li>
      <li><p><strong>Bridge layer:</strong> a lightweight connector maps PKYDrip device topics/registers to ThingsBoard device profiles.</p></li>
      <li><p><strong>ThingsBoard layer:</strong> standard dashboards, rule chains and alarms — your existing team manages it like any other ThingsBoard device.</p></li>
    </ul>
    <p>
      The step-by-step guide (device profile JSON, bridge configuration, topic map) lives in our public documentation site.
    </p>
  </section>

  <section class="custom-section">
    <h3>Public Documentation</h3>
    <ul>
      <li><p>Installation &amp; wiring guides for irrigation controllers, 3/5-channel fertigation machines, EC/pH controllers and wireless valve controllers</p></li>
      <li><p>Platform integration guide — including the ThingsBoard connection example</p></li>
      <li><p>Real deployment case notes (watermelon, 1 ha strawberry, and other projects)</p></li>
    </ul>
    <!-- TODO: docs.pky-dripirrigation.com (Docusaurus) 上线后替换为真实文档链接 -->
    <p class="text-muted"><small>Full documentation site: <strong>docs.pky-dripirrigation.com</strong> (launching). Until then, request the current documentation package directly.</small></p>
  </section>

  <div class="text-center mt-5">
    <a class="btn btn-success btn-lg"
       href="https://wa.me/8617395297329?text=Hi%20PKYDRIP%2C%20I%27m%20evaluating%20integration%20with%20PKYDRIP%20devices.%20Please%20send%20the%20documentation%20package."
       target="_blank" rel="noopener">
      💬 Request the Documentation Package
    </a>
    &nbsp;
    <a class="btn btn-outline-success btn-lg" href="/book-a-demo/">See It in a Live Demo</a>
  </div>
</div>
