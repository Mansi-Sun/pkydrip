---
############################### Banner ##############################
banner:
  enable: true
  bg_image: "images/lab/lab-hero-placeholder.webp" # TODO: Replace with engineering-style image (cabinet wiring / blueprint tone)
  bg_overlay: true
  title: "PKYDrip Engineering Lab <br/> Architecture · Tools · Experiments"
  content: "Technical workspace for irrigation automation logic, reusable engineering assets, and system validation tools."
  button:
    enable: true
    label: "Open Engineering Tools"
    link: "/tools/"

############################# About #################################
about:
  enable: true
  title: "Engineering Workspace"
  description: "Lab is the structured technical layer of PKYDrip."
  content: |
    The Engineering Lab is where we document reusable system logic, 
    control flow design, and field validation notes for irrigation automation.

    Instead of marketing descriptions, this section focuses on:

    - Pump + valve sequencing logic
    - Zoning strategies for large farms
    - RS485 / Modbus integration notes
    - LoRa topology and range considerations
    - Solar irrigation sizing principles
    - Demo rack design documentation

    Lab content may evolve frequently and includes working drafts used internally.
  image: "images/lab/lab-diagram-placeholder.webp" # TODO: Replace with architecture diagram or cabinet internal image

######################### Portfolio ###############################
portfolio:
  enable: true
  bg_image: "images/lab/lab-feature-placeholder.webp" # TODO: Replace with dark blueprint-style background
  title: "Reusable Engineering Assets"
  content: |
    Lab publishes structured technical materials that can be reused in real projects.

    These materials include:

    - Control cabinet block logic
    - Pump protection and safety sequencing
    - Sensor integration framework (soil moisture, EC/pH, flow, pressure)
    - Communication protocol mapping (RS485 / LoRa / MQTT)
    - Installation and troubleshooting notes

    The goal is to reduce trial-and-error during field deployment.
  button:
    enable: true
    label: "View Architecture Notes"
    link: "/architecture/"

############################# Service ############################
service:
  enable: true
  # Service content still loads from "service.md"
  # Can be adapted later for engineering documentation links

############################ call to action ###########################
cta:
  enable: true
  bg_image: "images/lab/lab-cta-placeholder.webp" # TODO: Replace with lab-themed image (tools / testing board)
  title: "Start With One Tool"
  content: |
    If you are designing or upgrading an irrigation system,
    begin with structured tools and reference tables.

    Our engineering tools help you:

    - Estimate pump power and pressure
    - Plan irrigation zoning strategy
    - Validate flow and head assumptions
    - Reduce hardware oversizing

    Engineering first. Deployment second.
  button:
    enable: true
    label: "Go to Tools"
    link: "/tools/"

############################# Funfacts ###############################
funfacts:
  enable: true
  title: "Lab Status"
  description: "This section is continuously updated as new technical modules are developed."
  funfact_item:
  - icon: "fas fa-tools"
    name: "Engineering Tools"
    count: "5"

  - icon: "fas fa-project-diagram"
    name: "Architecture Notes"
    count: "12"

  - icon: "fas fa-vial"
    name: "Field Experiments"
    count: "8"

  - icon: "fas fa-code-branch"
    name: "Weekly Iterations"
    count: "1"

  testimonial_slider:
  - name: "Junfeng Qiu"
    image: "images/clients/avater-1.webp"
    designation: "Founder - PKYDrip"
    content: "Lab exists to make irrigation automation modular, repeatable, and easier to deploy globally."

  - name: "Engineering Note"
    image: "images/clients/avater-1.webp"
    designation: "Internal Principle"
    content: "Every irrigation project should be built from structured logic blocks, not guesswork."
---
