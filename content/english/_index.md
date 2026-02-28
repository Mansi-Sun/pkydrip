---
page_code: "LAB-INDEX-EN-01"

############################### Banner ##############################
banner:
  enable: true
  bg_image: "images/lab/lab-hero-placeholder.webp" # TODO: Replace with engineering-style image (cabinet wiring / blueprint tone)
  bg_overlay: true
  title: "PKYDrip Engineering Lab <br/> Tools · Architecture · Experiments"
  content: "A public engineering workspace for irrigation automation — free calculators, reference tables, and system logic notes."
  button:
    enable: true
    label: "Explore Tools"
    link: "/tools/"

############################# About #################################
about:
  enable: true
  title: "What is this Lab?"
  description: "A lightweight engineering hub — not a product catalog."
  content: |
    **PKYDrip Engineering Lab** provides free technical tools and documentation for **landscape irrigation** and **agricultural irrigation**.

    - Free calculators and quick reference tables (continuously expanding)
    - System logic notes (pump + valve sequencing, zoning strategy, safety concepts)
    - Integration notes (RS485/Modbus, LoRa topology, MQTT drafts)
    - Field experiments and demo-rack design logs

    We welcome engineers, contractors, and system integrators to share improvements and feedback.

    **Feedback & cooperation:** <a href="mailto:junfeng@pky-dripirrigation.com">junfeng@pky-dripirrigation.com</a>
  image: "images/lab/lab-diagram-placeholder.webp" # TODO: Replace with architecture diagram / wiring schematic

######################### Portfolio (Tools Cards) ###############################
portfolio:
  enable: true
  bg_image: "images/lab/lab-feature-placeholder.webp" # TODO: Replace with neutral blueprint background
  title: "Free Tools (Quick Access)"
  content: |
    <!-- Tool Cards (Homepage). TODO: update links to match your actual tool paths -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:12px;">
      
      <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
        <div style="font-weight:700;margin-bottom:6px;">Pump Sizing Calculator</div>
        <div style="font-size:14px;opacity:.85;margin-bottom:10px;">
          Estimate pump head, flow, and power for irrigation retrofits and zoning plans.
        </div>
        <a href="/tools/pump-sizing/" style="text-decoration:underline;">Open tool →</a>
      </div>

      <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
        <div style="font-weight:700;margin-bottom:6px;">Pump Quick Chart (HP · Flow · Head)</div>
        <div style="font-size:14px;opacity:.85;margin-bottom:10px;">
          Fast lookup table for field discussions and early-stage feasibility checks.
        </div>
        <a href="/tools/pump-quick-chart/" style="text-decoration:underline;">View chart →</a>
      </div>

      <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
        <div style="font-weight:700;margin-bottom:6px;">Solar Irrigation Sizing</div>
        <div style="font-size:14px;opacity:.85;margin-bottom:10px;">
          Size basic solar pumping assumptions (water/day, head, runtime, PV capacity).
        </div>
        <a href="/tools/solar-irrigation-sizing/" style="text-decoration:underline;">Open tool →</a>
      </div>

      <div style="border:1px solid rgba(0,0,0,.12);border-radius:12px;padding:14px;background:#fff;">
        <div style="font-weight:700;margin-bottom:6px;">Zoning & Sequencing Template</div>
        <div style="font-size:14px;opacity:.85;margin-bottom:10px;">
          Practical template for pump-first, valves-one-by-one sequencing to keep pressure stable.
        </div>
        <a href="/architecture/zoning-sequencing/" style="text-decoration:underline;">Open note →</a>
      </div>

    </div>

    <div style="margin-top:14px;font-size:14px;opacity:.85;">
      These tools are provided by PKYDrip for free and will be expanded over time.  
      If you have suggestions or want to share improvements, email us:
      <a href="mailto:junfeng@pky-dripirrigation.com">junfeng@pky-dripirrigation.com</a>
    </div>

  button:
    enable: true
    label: "Browse All Tools"
    link: "/tools/"

############################# Service ############################
service:
  enable: false  # Lab is not a service/product page

############################ call to action ###########################
cta:
  enable: true
  bg_image: "images/lab/lab-cta-placeholder.webp" # TODO: Replace with lab-themed image (demo rack / wiring / testing board)
  title: "Need an engineer to review your project?"
  content: |
    **Page Code:** LAB-INDEX-EN-01  
    If you want help validating pump sizing, zoning design, or control logic, contact us on WhatsApp.

    Please include:
    - farm/landscape size
    - water source & pump info (nameplate photo is best)
    - irrigation method (drip / sprinkler / gun sprinkler)
    - power supply (grid / solar)

    **Feedback & cooperation:** <a href="mailto:junfeng@pky-dripirrigation.com">junfeng@pky-dripirrigation.com</a>

    <!-- Social sharing -->
    <hr/>
    <div style="font-weight:700;margin-bottom:8px;">Share this Lab</div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;font-size:14px;">
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flab.pky-dripirrigation.com%2F" target="_blank" rel="noopener">Share on Facebook</a>
      <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flab.pky-dripirrigation.com%2F&text=PKYDrip%20Engineering%20Lab%20-%20Free%20irrigation%20tools%20and%20system%20logic%20notes" target="_blank" rel="noopener">Share on X (Twitter)</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Flab.pky-dripirrigation.com%2F" target="_blank" rel="noopener">Share on LinkedIn</a>
      <span style="opacity:.75;">Instagram: no universal web-share link — use your official profile link here →</span>
      <a href="https://instagram.com/your_instagram_here" target="_blank" rel="noopener">Instagram Profile</a>
    </div>
  button:
    enable: true
    label: "WhatsApp an Engineer"
    link: "https://wa.me/8617395297329?text=Hi%20PKYDrip%2C%20I%20need%20an%20engineering%20review.%0APage%20Code%3A%20LAB-INDEX-EN-01%0ASource%3A%20https%3A%2F%2Flab.pky-dripirrigation.com%2F%0ARequest%3A%20Please%20help%20validate%20pump%20sizing%2C%20zoning%2C%20and%20control%20logic.%0AProject%3A%20%5Bfarm%2Flandscape%5D%20%7C%20Area%3A%20%5B%5D%20%7C%20Water%20source%3A%20%5B%5D%20%7C%20Power%3A%20%5Bgrid%2Fsolar%5D"

############################# Funfacts ###############################
funfacts:
  enable: true
  title: "Lab Focus"
  description: "Engineering-oriented content — tools, logic, and experiments (updated continuously)."
  funfact_item:
  - icon: "fas fa-tools"
    name: "Free Tools"
    count: "4"

  - icon: "fas fa-project-diagram"
    name: "Logic Blocks"
    count: "10"

  - icon: "fas fa-vial"
    name: "Experiments Logged"
    count: "6"

  - icon: "fas fa-sync-alt"
    name: "Ongoing Iterations"
    count: "1"

  testimonial_slider:
  - name: "Engineering Principle"
    image: "images/clients/avater-1.webp"
    designation: "PKYDrip Lab"
    content: "Build irrigation projects from structured logic blocks — validate first, deploy faster."
---
