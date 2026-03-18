---
title: "Irrigation Design Wizard for New Farms and Projects"
description: "Plan your irrigation system based on farm size, crop type, water source, irrigation method, and automation goals. A practical irrigation design wizard for new farm planning and early project estimation."
layout: "tools"
url: "/tools/irrigation-design-wizard/"
draft: false
---

## Irrigation Design Wizard for New Farms and Projects

Use this tool to organize your irrigation project and generate a basic planning summary.

It is designed for:

- new farms
- new irrigation projects
- early-stage planning
- contractors collecting project information
- customers who are not yet sure about pump size, zoning, or irrigation method

If your farm already has a **well, pump, main pipeline, or manual irrigation system**, you may also want to review the retrofit page:

[Upgrade Existing Irrigation Systems Without Rebuilding Everything](/solution/irrigation-retrofit-upgrade/)

---

<div id="wizard-tool" style="max-width:980px;margin:30px auto 0 auto;">

  <div style="background:#f7f9fb;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin-bottom:24px;">
    <h2 style="margin-top:0;">Project Input</h2>
    <p style="color:#666;margin-bottom:20px;">
      Fill in what you know. You do not need to complete everything.
    </p>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;">

      <div>
        <label for="projectType"><strong>Project Type</strong></label><br>
        <select id="projectType" style="width:100%;padding:10px;margin-top:6px;">
          <option value="">Select</option>
          <option value="orchard">Orchard</option>
          <option value="open field">Open Field Crops</option>
          <option value="greenhouse">Greenhouse</option>
          <option value="hydroponics">Hydroponics</option>
          <option value="landscape irrigation">Landscape Irrigation</option>
        </select>
      </div>

      <div>
        <label for="cropType"><strong>Crop Type</strong></label><br>
        <input id="cropType" type="text" placeholder="e.g. citrus, vegetables, berries"
          style="width:100%;padding:10px;margin-top:6px;">
      </div>

      <div>
        <label for="farmSize"><strong>Farm Size</strong></label><br>
        <input id="farmSize" type="text" placeholder="e.g. 50"
          style="width:100%;padding:10px;margin-top:6px;">
      </div>

      <div>
        <label for="sizeUnit"><strong>Size Unit</strong></label><br>
        <select id="sizeUnit" style="width:100%;padding:10px;margin-top:6px;">
          <option value="acres">Acres</option>
          <option value="hectares">Hectares</option>
          <option value="square meters">Square Meters</option>
        </select>
      </div>

      <div>
        <label for="irrigationMethod"><strong>Irrigation Method</strong></label><br>
        <select id="irrigationMethod" style="width:100%;padding:10px;margin-top:6px;">
          <option value="">Not sure yet</option>
          <option value="drip irrigation">Drip Irrigation</option>
          <option value="micro sprinkler">Micro Sprinkler</option>
          <option value="sprinkler system">Sprinkler System</option>
          <option value="pivot irrigation">Pivot Irrigation</option>
        </select>
      </div>

      <div>
        <label for="waterSource"><strong>Water Source</strong></label><br>
        <select id="waterSource" style="width:100%;padding:10px;margin-top:6px;">
          <option value="">Not confirmed</option>
          <option value="borehole / well">Borehole / Well</option>
          <option value="reservoir / tank">Reservoir / Tank</option>
          <option value="river / canal">River / Canal</option>
          <option value="municipal water">Municipal Water</option>
          <option value="existing pump + water source">Existing Pump + Water Source</option>
        </select>
      </div>

      <div>
        <label for="pumpInfo"><strong>Pump Info (Optional)</strong></label><br>
        <input id="pumpInfo" type="text" placeholder="e.g. 5.5kW, 10HP, unknown"
          style="width:100%;padding:10px;margin-top:6px;">
      </div>

      <div>
        <label for="flowInfo"><strong>Flow / Water Capacity (Optional)</strong></label><br>
        <input id="flowInfo" type="text" placeholder="e.g. 20 m³/h"
          style="width:100%;padding:10px;margin-top:6px;">
      </div>

      <div>
        <label for="irrigationHours"><strong>Available Irrigation Time</strong></label><br>
        <select id="irrigationHours" style="width:100%;padding:10px;margin-top:6px;">
          <option value="">Not sure</option>
          <option value="4 hours/day">4 hours/day</option>
          <option value="6 hours/day">6 hours/day</option>
          <option value="8 hours/day">8 hours/day</option>
          <option value="12 hours/day">12 hours/day</option>
          <option value="flexible irrigation window">Flexible</option>
        </select>
      </div>

      <div>
        <label for="automationLevel"><strong>Automation Goal</strong></label><br>
        <select id="automationLevel" style="width:100%;padding:10px;margin-top:6px;">
          <option value="">Not sure yet</option>
          <option value="manual valves">Manual Valves</option>
          <option value="timer-based irrigation">Timer-Based Irrigation</option>
          <option value="multi-zone controller">Multi-Zone Controller</option>
          <option value="remote control via LoRa or 4G">Remote Control via LoRa or 4G</option>
          <option value="fertigation integration">Fertigation Integration</option>
        </select>
      </div>

      <div>
        <label for="existingSystem"><strong>Existing System Status</strong></label><br>
        <select id="existingSystem" style="width:100%;padding:10px;margin-top:6px;">
          <option value="">New project / not built yet</option>
          <option value="existing pump">Existing Pump</option>
          <option value="existing well and manual valves">Existing Well and Manual Valves</option>
          <option value="existing pump and pipeline">Existing Pump and Pipeline</option>
          <option value="existing irrigation network needing upgrade">Existing Irrigation Network Needing Upgrade</option>
        </select>
      </div>

      <div style="grid-column:1 / -1;">
        <label for="notes"><strong>Additional Notes (Optional)</strong></label><br>
        <textarea id="notes" rows="4" placeholder="e.g. new orchard project, want remote control, water supply not confirmed yet"
          style="width:100%;padding:10px;margin-top:6px;"></textarea>
      </div>

    </div>

    <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:12px;">
      <button type="button" onclick="generateWizardSummary()"
        style="padding:12px 18px;border:none;border-radius:8px;cursor:pointer;">
        Generate Project Summary
      </button>

      <button type="button" onclick="copyWizardSummary()"
        style="padding:12px 18px;border:1px solid #ccc;border-radius:8px;cursor:pointer;background:#fff;">
        Copy Summary
      </button>

      <a id="waButton" href="https://wa.me/8617395297329" target="_blank" rel="noopener"
        style="padding:12px 18px;border:1px solid #ccc;border-radius:8px;text-decoration:none;background:#fff;display:inline-block;">
        Send to WhatsApp
      </a>
    </div>
  </div>

  <div id="wizard-result" style="display:none;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin-bottom:24px;">
    <h2 style="margin-top:0;">Project Summary</h2>
    <div id="summaryText" style="line-height:1.8;"></div>

    <hr style="margin:24px 0;">

    <h3>Suggested Direction</h3>
    <div id="directionText" style="line-height:1.8;"></div>

    <h3 style="margin-top:24px;">Recommended Next Step</h3>
    <div id="nextStepText" style="line-height:1.8;"></div>

    <h3 style="margin-top:24px;">Important Note</h3>
    <p style="line-height:1.8;color:#666;">
      This summary is a practical planning reference for early discussion.
      It is not a final engineering design and should be reviewed based on actual pipe length, elevation, pressure, flow, and field conditions.
    </p>
  </div>

  <div style="background:#f7f9fb;border:1px solid #e5e7eb;border-radius:12px;padding:24px;">
    <h2 style="margin-top:0;">Related Pages</h2>
    <ul style="line-height:1.9;margin-bottom:0;">
      <li><a href="/solution/open-field-irrigation/">Open-Field Irrigation Solution</a></li>
      <li><a href="/solution/irrigation-retrofit-upgrade/">Irrigation Retrofit Upgrade</a></li>
    </ul>
  </div>

</div>

<script>
function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function generateWizardSummary() {
  const projectType = getValue("projectType");
  const cropType = getValue("cropType");
  const farmSize = getValue("farmSize");
  const sizeUnit = getValue("sizeUnit");
  const irrigationMethod = getValue("irrigationMethod");
  const waterSource = getValue("waterSource");
  const pumpInfo = getValue("pumpInfo");
  const flowInfo = getValue("flowInfo");
  const irrigationHours = getValue("irrigationHours");
  const automationLevel = getValue("automationLevel");
  const existingSystem = getValue("existingSystem");
  const notes = getValue("notes");

  const parts = [];

  if (farmSize) {
    parts.push(farmSize + " " + sizeUnit);
  }

  if (projectType) {
    parts.push(projectType + " project");
  } else {
    parts.push("irrigation project");
  }

  if (cropType) {
    parts.push("for " + cropType);
  }

  if (irrigationMethod) {
    parts.push("using or considering " + irrigationMethod);
  }

  if (waterSource) {
    parts.push("with water from " + waterSource);
  }

  if (irrigationHours) {
    parts.push("and an irrigation window of " + irrigationHours);
  }

  let summary = parts.join(", ");
  if (summary) {
    summary += ".";
  } else {
    summary = "Early-stage irrigation project. More project details are needed.";
  }

  if (pumpInfo) {
    summary += " Pump reference: " + pumpInfo + ".";
  }

  if (flowInfo) {
    summary += " Known water capacity: " + flowInfo + ".";
  }

  if (automationLevel) {
    summary += " Automation target: " + automationLevel + ".";
  }

  if (existingSystem) {
    summary += " Existing system status: " + existingSystem + ".";
  }

  if (notes) {
    summary += " Notes: " + notes + ".";
  }

  let direction = "";
  const isExisting = existingSystem && existingSystem !== "New project / not built yet";
  const hasExistingWater = waterSource === "existing pump + water source";

  if (isExisting || hasExistingWater) {
    direction += "<p>This project appears to include existing infrastructure. The planning direction should start from available water supply, current pump condition, and zoning logic.</p>";
    direction += "<ul>";
    direction += "<li>Review whether the existing pump and water source can support the target irrigation method.</li>";
    direction += "<li>Consider dividing the system into multiple irrigation zones.</li>";
    direction += "<li>Evaluate whether retrofit control, remote operation, or staged automation is more suitable than complete rebuilding.</li>";
    direction += "</ul>";
  } else {
    direction += "<p>This project appears to be a new farm or new irrigation planning case.</p>";
    direction += "<ul>";
    direction += "<li>Choose the irrigation method based on crop type, field condition, and water availability.</li>";
    direction += "<li>Estimate pump flow and irrigation time based on zoning, not full-area irrigation at once.</li>";
    direction += "<li>Plan control structure early if multi-zone irrigation, fertigation, or remote management may be added later.</li>";
    direction += "</ul>";
  }

  if (!irrigationMethod) {
    direction += "<p><strong>Note:</strong> Irrigation method is not confirmed yet. This should be one of the first items reviewed before final pump sizing.</p>";
  }

  if (!waterSource && !flowInfo && !pumpInfo) {
    direction += "<p><strong>Note:</strong> Water capacity is still unclear. Pump flow, available pressure, and water supply condition should be confirmed before final equipment recommendation.</p>";
  }

  let nextStep = "";
  if (isExisting || hasExistingWater) {
    nextStep += '<p>Recommended next step: review the retrofit logic page and send your current system details for a more accurate upgrade suggestion.</p>';
    nextStep += '<p><a href="/solution/irrigation-retrofit-upgrade/">View Irrigation Retrofit Upgrade</a></p>';
  } else if (projectType === "open field" || projectType === "orchard" || projectType === "greenhouse") {
    nextStep += '<p>Recommended next step: review a typical system structure and then send this summary for project discussion.</p>';
    nextStep += '<p><a href="/solution/open-field-irrigation/">View Open-Field Irrigation Solution</a></p>';
  } else {
    nextStep += '<p>Recommended next step: send this summary by WhatsApp so the project can be reviewed based on your site condition, water source, and automation target.</p>';
  }

  document.getElementById("summaryText").innerHTML = "<p>" + summary + "</p>";
  document.getElementById("directionText").innerHTML = direction;
  document.getElementById("nextStepText").innerHTML = nextStep;
  document.getElementById("wizard-result").style.display = "block";

  const waText = "Hello, I completed the PKYDrip Irrigation Design Wizard. Here is my project summary:%0A%0A" + encodeURIComponent(summary);
  document.getElementById("waButton").href = "https://wa.me/8617395297329?text=" + waText;
}

function copyWizardSummary() {
  const summaryEl = document.getElementById("summaryText");
  if (!summaryEl || !summaryEl.innerText.trim()) {
    alert("Please generate the project summary first.");
    return;
  }

  navigator.clipboard.writeText(summaryEl.innerText.trim())
    .then(() => alert("Project summary copied."))
    .catch(() => alert("Copy failed. Please copy manually."));
}
</script>
