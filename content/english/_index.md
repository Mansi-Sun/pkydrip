---
title: "Irrigation Controllers & Fertigation Machines | PKYDrip"
description: "PKYDrip manufactures irrigation controllers and fertigation machines for greenhouses, orchards and open fields, with local control, remote connectivity and project integration options."
translationKey: "home"
############################### Banner ##############################
banner:
  enable: true
  bg_image: "images/home/pkydrip-workshop-engineering-hero.jpg"
  bg_overlay: true
  eyebrow: "Developed, assembled and tested by PKYDrip"
  title: "Irrigation Controllers and Fertigation Machines"
  content: "Industrial irrigation and fertigation equipment developed, assembled and tested for greenhouses, orchards and open fields.<br><br>Choose standalone local control or connected solutions with remote access and project integration."
  button:
    enable: true
    label: "View Irrigation Controllers"
    link: "/product/irrigation-control-system/"
  button_secondary:
    enable: true
    label: "View Fertigation Machines"
    link: "/product/fertigation-system/"

############################# Entry Paths ###########################
entry_paths:
  enable: true
  title: "Choose Products, Review Documentation, Get a Quote"
  content: "Start with standard equipment, compare the available control options, and contact us for project pricing or distributor terms."
  items:
    - icon: "🛒"
      title: "View Irrigation Controllers and Fertigation Machines"
      desc: "Browse the core equipment lines for greenhouse, orchard and open-field projects, then shortlist the control options that fit the site."
      button_label: "Open Product Directory"
      button_link: "/product/"
    - icon: "📄"
      title: "Review Installation, Technical and Project Documentation"
      desc: "Use the available manuals, integration notes and project materials to compare how the equipment is installed and commissioned."
      button_label: "View Docs & Cases"
      button_link: "/docs/"
    - icon: "🤝"
      title: "Get Product Quotes, MOQ or Distributor Terms"
      desc: "Contact us for project pricing, minimum order quantities and distributor terms. Final commercial terms are confirmed after technical review."
      button_label: "Become a Distributor"
      button_link: "/become-a-distributor/"

########################## Product Lines ############################
primary_product_lines:
  enable: true
  eyebrow: "Core Product Lines"
  title: "Start with the Equipment You Need"
  content: "PKYDrip focuses on two core equipment lines. Each product can work as a standalone machine, with connectivity and integration options available when the project requires them."
  items:
    - title: "Irrigation Controllers"
      image: "images/product/pkydrip-irrigation-controller-family.png"
      image_alt: "PKYDrip irrigation controller main unit and industrial touchscreen control cabinet"
      image_contain: true
      description: "Industrial controllers for pumps, valves and irrigation zones, available for standalone local operation or connected project control."
      features:
        - "Local and connected control options"
        - "Multiple valve-zone configurations"
        - "Ethernet, 4G or project communication options"
        - "Modbus integration for field devices"
      primary_label: "View Irrigation Controllers"
      primary_url: "/product/irrigation-control-system/"
      secondary_label: "Request a Quote"
      secondary_url: "/contact/"
    - title: "Fertigation Machines"
      image: "images/product/pky-three-fertilizer-one-acid-peristaltic-system.png"
      image_alt: "PKYDrip three-fertilizer and one-acid peristaltic fertigation system with mixing tank"
      image_caption: "Shown: three-fertilizer + one-acid peristaltic dosing configuration"
      description: "Fertigation equipment for open fields, greenhouses and controlled nutrient dosing applications."
      features:
        - "Large-flow fertigation for field projects"
        - "Peristaltic dosing for small greenhouses"
        - "EC and pH monitoring or closed-loop control options"
        - "Recipe and mixing functions on selected configurations"
      primary_label: "View Fertigation Machines"
      primary_url: "/product/fertigation-system/"
      secondary_label: "Request a Quote"
      secondary_url: "/contact/"

########################## Selection Guide ##########################
selection_guide:
  enable: true
  title: "Which Product Line Fits Your Project?"
  content: "Start with the application. Final configuration depends on flow, pressure, irrigation zones, dosing channels and control requirements."
  columns:
    application: "Application"
    direction: "Recommended Direction"
    requirement: "Typical Requirement"
    next: "Next Step"
  rows:
    - application: "Orchard or multi-zone irrigation"
      direction: "Irrigation Controller"
      requirement: "Pump, valve and zone scheduling"
      next_label: "Compare controllers"
      next_url: "/product/irrigation-control-system/"
    - application: "Open-field, large-flow fertigation"
      direction: "Large-flow Fertigation"
      requirement: "Higher flow and field-scale nutrient injection"
      next_label: "Discuss project flow"
      next_url: "/contact/"
    - application: "Laboratory or small greenhouse"
      direction: "Peristaltic Fertigation"
      requirement: "Precise, low-flow multi-channel dosing"
      next_label: "Select dosing channels"
      next_url: "/product/fertigation-system/"
    - application: "Controlled greenhouse production"
      direction: "EC/pH Fertigation"
      requirement: "Feedback control, recipes and mixing options"
      next_label: "Define control targets"
      next_url: "/product/fertigation-system/"

############################# OEM Strip #############################
oem_strip:
  enable: true
  title: "Need OEM or Engineering Support?"
  content: "Standard products are the starting point. Private labeling, packaging, firmware changes, hardware changes and third-party integration are available subject to technical review, MOQ and commercial terms."
  button_label: "Discuss OEM Requirements"
  button_url: "/oem/"

######################### Integration Note ##########################
integration_note:
  enable: true
  title: "Standalone Control with Integration Options"
  content: "PKYDrip controllers and fertigation machines are designed to perform their primary control functions locally. Remote access, cloud connectivity, Modbus, MQTT and third-party integration can be added when required by the project."
  button_label: "View Integration Options"
  button_url: "/api-integration/"

############################# Platform ##############################
platform:
  enable: false
  title: "An Open Agricultural Operating System"
  description: "PKYDrip organizes automation as subsystem series and IoT layers — products integrate as modules, not as a pasted equipment catalog."
  content: "Field data flows from sensors through decision logic to execution. Four subsystem series — irrigation, fertigation, climate, and wireless — share the same platform structure. Products bridge into these series when a project is configured."
  image: "images/home/platform-subsystems-series.webp"
  image_alt: "Smart farm landscape — center-pivot irrigation, orchard rows, greenhouse, vineyard, and wireless field connectivity across coordinated agricultural zones"
  caption: "Irrigation, fertigation, climate, and wireless automation woven into open fields, orchards, greenhouses, and remote farm blocks"
  cta_label: "Explore Platform Architecture"

############################# About (disabled) ######################
about:
  enable: false

############################# Systems ###############################
systems:
  enable: false
  title: "Platform Subsystems"
  content: "Four core subsystems within the PKYDrip agricultural OS. Each subsystem defines how a part of the farm operates — products and controllers integrate inside these layers."
  cta_label: "Ask About Integration Support"
  cta_url: "/api-integration/"
  items:
    - name: "Irrigation Control System"
      desc: "Pump, valve, and zone scheduling — the execution backbone for open field, orchard, and farm irrigation automation."
      url: "/system/irrigation-control-system/"
    - name: "Fertigation System"
      desc: "Nutrient delivery coordinated with irrigation zones — EC/pH logic integrated into the same automation structure."
      url: "/system/fertigation-system/"
    - name: "Climate Control System"
      desc: "Greenhouse and nursery environmental coordination — ventilation, cooling, heating, and humidity as a connected layer."
      url: "/system/climate-control-system/"
    - name: "Wireless Irrigation System"
      desc: "LoRa field expansion for valve and pump control — extending the platform where cabling is impractical."
      url: "/system/wireless-irrigation-system/"

systems_value:
  enable: false
  title: "Open Platform Principles"
  image: "images/home/open-platform-principles.webp"
  image_alt: "Connected smart farm at sunrise — sensor nodes, field mesh network, cloud integration across greenhouse, irrigation, and orchard zones"
  items:
    - "Sensor, execution, and decision layers — openly connected across the farm"
    - "Cloud-ready integration with local-first control independence"
    - "Products integrate as modules within subsystems — not isolated device sales"
    - "Designed for growers, integrators, dealers, and research partners"
  cta:
    label: "View Open Platform"
    url: "/open-platform/"

######################### Deployment ################################
portfolio:
  enable: false
  image: "images/home/deployment-scenarios.webp"
  image_alt: "Farm deployment panorama at sunset — orchard sensors, greenhouse, center-pivot irrigation, and pump infrastructure connected across field scenarios"
  title: "From Platform Logic to Field Deployment"
  content: "Once the platform structure is clear, choose how it lands in the field. Greenhouse, orchard, open field, and retrofit projects configure the same subsystems differently — each scenario is a path from planning to real farm deployment."
  button:
    enable: true
    label: "Browse Deployment Scenarios"
    link: "/solution/"

############################# Service ###############################
service:
  enable: false

############################ call to action ###########################
cta:
  enable: true
  bg_image: "images/call-to-action-bg.jpg"
  title: "Ready to Sell PKYDrip in Your Region?"
  content: "Get the distributor price list, MOQ terms and a live platform demo — and put shipping fertigation machines and controllers into your local market."
  button:
    enable: true
    label: "Become a Distributor"
    link: "/become-a-distributor/"

############################# Funfacts ###############################
funfacts:
  enable: false
---
