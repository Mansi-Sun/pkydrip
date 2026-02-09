---
title: "Irrigation Quick Guide (ACT01)"
description: "30-second irrigation system quick guide. Get zone & controller suggestions and send summary via WhatsApp."
type: "page"
url: "/guide/guide-act01/"
---

<div class="guide-act01">
  <h1>Quick Irrigation Guide (ACT01)</h1>
  <p style="max-width:760px;">
    Answer a few questions to get an instant recommendation.  
    Then you can send the summary to our WhatsApp for a faster quotation.
  </p>

  <!-- Netlify Forms: MVP (no database needed) -->
  <form name="guide-act01" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" id="guideForm">
    <!-- Required hidden field for Netlify -->
    <input type="hidden" name="form-name" value="guide-act01" />
    <!-- Honeypot -->
    <p style="display:none;">
      <label>Don’t fill this out: <input name="bot-field" /></label>
    </p>

    <!-- ===== STEP 1 (30s) ===== -->
    <div class="card" id="step1">
      <h2>Step 1 (30 seconds)</h2>

      <div class="grid">
        <label>
          Country / Region
          <input type="text" name="country" id="country" placeholder="e.g., Saudi Arabia / Australia" required />
        </label>

        <label>
          Application
          <select name="application" id="application" required>
            <option value="" selected disabled>Select...</option>
            <option value="Agriculture - Drip">Agriculture - Drip</option>
            <option value="Agriculture - Sprinkler">Agriculture - Sprinkler</option>
            <option value="Landscape / Turf">Landscape / Turf</option>
            <option value="Greenhouse / Hydroponic">Greenhouse / Hydroponic</option>
          </select>
        </label>

        <label>
          Power Condition
          <select name="power" id="power" required>
            <option value="" selected disabled>Select...</option>
            <option value="Grid power available">Grid power available</option>
            <option value="Solar (no grid)">Solar (no grid)</option>
            <option value="No electricity (need solar/battery)">No electricity (need solar/battery)</option>
          </select>
        </label>

        <label>
          Estimated Zones Needed
          <select name="zones_range" id="zonesRange" required>
            <option value="" selected disabled>Select...</option>
            <option value="1-8">1–8</option>
            <option value="8-16">8–16</option>
            <option value="16-32">16–32</option>
            <option value="32-64">32–64</option>
            <option value="Not sure">Not sure</option>
          </select>
        </label>
      </div>

      <div class="area-row">
        <label style="flex:1;">
          Area Value
          <input type="number" step="0.01" min="0" name="area_value" id="areaValue" placeholder="e.g., 100" required />
        </label>

        <label style="width:220px;">
          Unit
          <select name="area_unit" id="areaUnit" required>
            <option value="" selected disabled>Select...</option>
            <option value="mu">mu (亩)</option>
            <option value="acre">acre</option>
            <option value="hectare">hectare (ha)</option>
          </select>
        </label>
      </div>

      <div class="btn-row">
        <button type="button" id="btnPreview">Preview Recommendation</button>
        <button type="button" id="btnToStep2" disabled>Continue →</button>
      </div>

      <div class="result" id="previewBox" style="display:none;"></div>
    </div>

    <!-- ===== STEP 2 (optional) ===== -->
    <div class="card" id="step2" style="display:none;">
      <h2>Step 2 (Optional details)</h2>
      <p style="margin-top:-6px;color:#555;">
        Add a bit more info to improve accuracy (optional).
      </p>

      <div class="grid">
        <label>
          Water Source
          <select name="water_source" id="waterSource">
            <option value="" selected>Select...</option>
            <option value="Well">Well</option>
            <option value="River/Canal">River/Canal</option>
            <option value="Reservoir/Tank">Reservoir/Tank</option>
            <option value="Municipal">Municipal</option>
          </select>
        </label>

        <label>
          Main Pipe Size (optional)
          <input type="text" name="pipe_size" id="pipeSize" placeholder='e.g., 2", 3", DN50' />
        </label>

        <label>
          Pump Power (optional)
          <input type="text" name="pump_power" id="pumpPower" placeholder="e.g., 2HP / 1.5kW / unknown" />
        </label>

        <label>
          Notes (optional)
          <input type="text" name="notes" id="notes" placeholder="Crop, layout, any constraints..." />
        </label>
      </div>

      <!-- Hidden computed fields (important for your follow-up) -->
      <input type="hidden" name="area_acre" id="areaAcre" />
      <input type="hidden" name="area_hectare" id="areaHectare" />
      <input type="hidden" name="recommended_controller" id="recommendedController" />
      <input type="hidden" name="recommended_zone_plan" id="recommendedZonePlan" />
      <input type="hidden" name="summary_text" id="summaryText" />

      <div class="btn-row">
        <button type="button" id="btnBack">← Back</button>

        <!-- WhatsApp CTA (works even if you don't submit form) -->
        <a class="btn-secondary" id="btnWhatsApp" href="#" target="_blank" rel="noopener">
          Send Summary to WhatsApp
        </a>

        <!-- Submit to Netlify Forms -->
        <button type="submit" id="btnSubmit">Submit</button>
      </div>

      <p class="tiny">
        Tip: After clicking “Submit”, your info will be stored in Netlify Forms.  
        WhatsApp summary helps us reply faster.
      </p>
    </div>
  </form>
</div>

<style>
  .guide-act01{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; padding: 10px 0 30px;}
  .card{border:1px solid #e6e6e6; border-radius:14px; padding:18px 16px; margin:16px 0; background:#fff;}
  .grid{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px;}
  label{display:flex; flex-direction:column; font-size:14px; gap:6px;}
  input,select{padding:10px 10px; border:1px solid #d9d9d9; border-radius:10px; font-size:14px;}
  .area-row{display:flex; gap:12px; margin-top:12px; align-items:flex-end;}
  .btn-row{display:flex; gap:10px; margin-top:14px; flex-wrap:wrap;}
  button,.btn-secondary{padding:10px 14px; border-radius:10px; border:1px solid #111; background:#111; color:#fff; cursor:pointer; text-decoration:none; font-size:14px;}
  .btn-secondary{background:#fff; color:#111;}
  button:disabled{opacity:.5; cursor:not-allowed;}
  .result{margin-top:12px; padding:12px; border-radius:12px; background:#f7f7f7; border:1px solid #e5e5e5;}
  .tiny{color:#666; font-size:12px; margin-top:10px;}
  @media (max-width:720px){ .grid{grid-template-columns:1fr;} .area-row{flex-direction:column; align-items:stretch;} }
</style>

<script>
(function(){
  // ====== constants & helpers ======
  const MU_TO_HECTARE = 1 / 15;        // 1 hectare = 15 mu
  const HECTARE_TO_ACRE = 2.47105381;

  const $ = (id) => document.getElementById(id);

  function toHectare(areaValue, unit){
    const v = Number(areaValue || 0);
    if (!isFinite(v) || v <= 0) return 0;
    if (unit === "hectare") return v;
    if (unit === "acre") return v / HECTARE_TO_ACRE;
    if (unit === "mu") return v * MU_TO_HECTARE;
    return 0;
  }

  function format2(n){ return (Math.round(n * 100) / 100).toFixed(2); }

  // Simple recommendation logic (MVP)
  function recommendController(app, power, zonesRange){
    // Very lightweight logic: you can refine later
    const wantsRemote = true; // assume most international leads want remote

    if (power.includes("No electricity") || power.includes("Solar")){
      // off-grid -> solar + low power wireless usually
      if (app.includes("Landscape")) return "Solar + Wireless (LoRa) valve control + optional gateway";
      if (app.includes("Hydroponic")) return "Solar + 4G controller (site dependent) + sensors (optional)";
      return "Solar + 4G controller OR Solar + LoRa (depending on distances)";
    }

    // grid available
    if (zonesRange === "1-8" || zonesRange === "8-16"){
      if (app.includes("Landscape")) return "WiFi/4G controller (project dependent) + 8–16 zones";
      return "4G controller (recommended for farms) or WiFi for small sites";
    }
    if (zonesRange === "16-32" || zonesRange === "32-64"){
      return "Wired master controller + expansion (16→60/64) + optional 4G/Cloud";
    }
    return "Controller depends on zones, distance, and power. 4G is the safest default for international projects.";
  }

  function recommendZonePlan(ha, app, zonesRange){
    // MVP guidance: encourage zoning for pressure stability
    let base = "Zoning is mainly limited by pressure/flow (hydraulics), not the controller.";
    if (ha >= 5) base += " For larger areas, use rotation groups to reduce pump size and maintain stable pressure.";
    if (app.includes("Sprinkler")) base += " Sprinklers are more pressure-sensitive, so fewer zones run simultaneously.";
    if (app.includes("Drip")) base += " Drip is more flexible, but still needs proper filtering and pressure regulation.";
    if (zonesRange === "Not sure") base += " Start with 8–16 zones for small farms, 16–32 for medium, 32–64 for large projects.";
    return base;
  }

  function buildSummary(){
    const country = $("country").value.trim();
    const app = $("application").value;
    const power = $("power").value;
    const zonesRange = $("zonesRange").value;
    const areaValue = $("areaValue").value;
    const areaUnit = $("areaUnit").value;

    const ha = toHectare(areaValue, areaUnit);
    const acre = ha * HECTARE_TO_ACRE;

    const controller = recommendController(app, power, zonesRange);
    const zonePlan = recommendZonePlan(ha, app, zonesRange);

    // Optional fields
    const waterSource = $("waterSource").value;
    const pipeSize = $("pipeSize").value.trim();
    const pumpPower = $("pumpPower").value.trim();
    const notes = $("notes").value.trim();

    // Build a WhatsApp-friendly plain text (short, readable)
    const lines = [
      "PKYDrip Guide (ACT01) – Project Summary",
      `Country: ${country || "-"}`,
      `Application: ${app || "-"}`,
      `Power: ${power || "-"}`,
      `Area: ${areaValue || "-"} ${areaUnit || ""}  (~${format2(acre)} acres / ${format2(ha)} ha)`,
      `Estimated Zones: ${zonesRange || "-"}`,
      "",
      `Recommended Controller: ${controller}`,
      `Zone / Design Note: ${zonePlan}`,
    ];

    if (waterSource) lines.push(`Water Source: ${waterSource}`);
    if (pipeSize) lines.push(`Main Pipe: ${pipeSize}`);
    if (pumpPower) lines.push(`Pump Power: ${pumpPower}`);
    if (notes) lines.push(`Notes: ${notes}`);

    lines.push("");
    lines.push("Next: Please share 1) pump nameplate photo (if any) 2) pipe layout/photo 3) valve size requirement.");

    const summary = lines.join("\n");

    // Store computed fields for Netlify submission
    $("areaAcre").value = format2(acre);
    $("areaHectare").value = format2(ha);
    $("recommendedController").value = controller;
    $("recommendedZonePlan").value = zonePlan;
    $("summaryText").value = summary;

    return { summary, ha, acre, controller, zonePlan };
  }

  // ====== UI events ======
  $("btnPreview").addEventListener("click", function(){
    const { summary, ha, acre, controller, zonePlan } = buildSummary();

    // Show a compact preview (not the full WhatsApp text)
    const preview = `
      <b>Instant Recommendation</b><br/>
      <ul style="margin:8px 0 0 18px;">
        <li><b>Area:</b> ~${format2(acre)} acres / ${format2(ha)} ha</li>
        <li><b>Recommended Controller:</b> ${controller}</li>
        <li><b>Note:</b> ${zonePlan}</li>
      </ul>
      <div style="margin-top:10px;color:#444;font-size:13px;">
        You can continue to optional details, then send the summary to WhatsApp.
      </div>
    `;
    $("previewBox").innerHTML = preview;
    $("previewBox").style.display = "block";
    $("btnToStep2").disabled = false;
  });

  $("btnToStep2").addEventListener("click", function(){
    buildSummary(); // ensure hidden fields are ready
    $("step1").style.display = "none";
    $("step2").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("btnBack").addEventListener("click", function(){
    $("step2").style.display = "none";
    $("step1").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Update WhatsApp link whenever user changes optional fields in step2
  ["waterSource","pipeSize","pumpPower","notes"].forEach(id=>{
    $(id).addEventListener("input", function(){
      const { summary } = buildSummary();
      const wa = makeWhatsAppLink(summary);
      $("btnWhatsApp").href = wa;
    });
  });

  // Also update WhatsApp link on entering step2
  function makeWhatsAppLink(text){
    // Put your WhatsApp number here in international format WITHOUT + or spaces.
    // Example: "8617395297329" for +86 173 9529 7329
    const phone = "8617395297329"; // TODO: replace if you prefer another number
    return "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
  }

  // On submit, ensure latest computed summary is stored (Netlify will store it)
  $("guideForm").addEventListener("submit", function(){
    const { summary } = buildSummary();
    $("btnWhatsApp").href = makeWhatsAppLink(summary);
  });

  // Initialize WA link (empty but safe)
  $("btnWhatsApp").href = makeWhatsAppLink("Hi, I just used PKYDrip Guide (ACT01).");
})();
</script>
