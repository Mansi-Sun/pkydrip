---
title: "PKY-GHC01 Greenhouse Automation Controller"
description: "A local-first greenhouse automation controller for ventilation, cooling, shading, irrigation and weather-responsive control, designed for integration with local power cabinets."
type: "product"
layout: "engineering-page"
draft: false
url: "/product/pky-ghc01-greenhouse-controller/"
product_code: "PKY-GHC01-CTRL-MOD"
page_code: "PC-0801-2-02-PROD-PKY-GHC01-01"
categories:
  - greenhouse-automation
  - climate-control
  - irrigation-control

hero:
  eyebrow: "Modular Greenhouse Automation"
  title: "PKY-GHC01 Modular Greenhouse Automation Controller"
  subtitle: "Coordinate ventilation, cooling, shading, irrigation and weather-responsive actions with a local-first controller designed to integrate with your own power cabinet and field equipment."
  capabilities:
    - "Local control independent of internet"
    - "Control and power cabinet separation"
    - "Configurable sensors, zones and equipment groups"
  image: "images/system/climate-control-architecture.webp"
  image_alt: "Greenhouse automation architecture — sensors and weather inputs feed PKY-GHC01 control logic, then local power cabinet and greenhouse equipment"
  cta_primary:
    label: "Request Standard Configuration"
    url: "https://wa.me/8617395297329?text=Hi%20PKYDrip%2C%20Product%3A%20PKY-GHC01%20Modular%20Greenhouse%20Automation%20Controller%20%7C%20Model%3A%20PKY-GHC01%20%7C%20Code%3A%20PKY-GHC01-CTRL-MOD%20%7C%20Page%3A%20pky-ghc01-greenhouse-controller%0A-%20Company%20/%20country%3A%20%0A-%20Customer%20type%20%28integrator%20/%20automation%20company%20/%20panel%20builder%20/%20grower%29%3A%20%0A-%20Greenhouse%20area%20and%20number%20of%20houses%3A%20%0A-%20Number%20of%20climate%20zones%3A%20%0A-%20Equipment%20list%3A%20%0A-%20Existing%20power%20cabinet%20%28yes/no%29%3A%20%0A-%20Required%20sensors%3A%20%0A-%20Required%20HMI%20language%3A%20%0A-%20Standard%20configuration%20%28Control%20Core%20/%20Control%20%2B%20Sensors%20/%20Integrator%20Package%29%3A%20%0A-%20Required%20delivery%20time%3A%20"
  cta_secondary:
    label: "View Open Integration"
    url: "/open-platform/"

product_identity:
  model_label: "Model"
  model: "PKY-GHC01"
  code_label: "Product code"
  product_code: "PKY-GHC01-CTRL-MOD"
  family_label: "Product family"
  family: "Modular Greenhouse Automation"
  lifecycle_label: "Status"
  lifecycle: "Standard product"

fit_summary:
  title: "Is this product a fit?"
  best_for:
    title: "Best for"
    items:
      - "Commercial greenhouse automation"
      - "Greenhouse builders adding a standard control layer"
      - "Control cabinet integrators"
      - "Nursery and propagation facilities"
      - "OEM partners deploying repeatable greenhouse packages"
  partner_fit:
    title: "Recommended buyer"
    items:
      - "Greenhouse integrator"
      - "Automation company"
      - "Control panel builder"
      - "Commercial grower with a qualified installer"
  not_for:
    title: "Not designed for"
    items:
      - "Residential hobby greenhouses"
      - "Direct high-power motor switching without a suitable power cabinet"
      - "Unlimited third-party protocol development"
      - "Projects without an electrical installer"

offer_scope:
  title: "Standard product, configurable where it matters"
  intro: "PKY-GHC01 is the control and logic layer for greenhouse automation. Zones, sensors, language and gateways are selected when ordering. New protocols or safety-critical changes are evaluated separately."
  columns:
    - key: "standard"
      title: "Standard"
      badge: "Included"
      items:
        - "Local HMI and automatic operation"
        - "Equipment group and climate-zone logic"
        - "Setpoints, hysteresis and start/stop delays"
        - "Minimum runtime and stop time"
        - "Staged outputs and priorities"
        - "Interlocks and manual override"
        - "Alarm handling and sensor-failure safe mode"
        - "Installation and wiring package"
    - key: "configurable"
      title: "Configurable"
      badge: "Select when ordering"
      items:
        - "Number of climate zones"
        - "Equipment names and groups"
        - "Indoor sensor combination"
        - "HMI language"
        - "Ethernet, Wi-Fi or 4G gateway"
        - "Hosted, local or hybrid management"
        - "PKY-GWS01 weather station"
        - "Fertigation and irrigation interlocks"
    - key: "engineering"
      title: "Engineering Review"
      badge: "Evaluated separately"
      items:
        - "New third-party protocols"
        - "Major changes to core control logic"
        - "Customer-specific cloud functions"
        - "Safety-critical control changes"
        - "Unverified motors or actuators"
        - "Country-specific complete cabinet certification"

system_controls:
  title: "What it controls"
  intro: "PKY-GHC01 provides control logic and control outputs. Motor power switching, protection and field wiring are handled through a suitable local power cabinet."
  items:
    - name: "Exhaust fans"
      desc: "Staged ventilation for temperature and humidity control."
    - name: "Circulation fans"
      desc: "Air movement strategies inside the greenhouse."
    - name: "Cooling-pad pumps"
      desc: "Cooling coordination with ventilation stages."
    - name: "Roof and side vents"
      desc: "Vent opening strategies with wind and rain interlocks."
    - name: "Internal and external shading"
      desc: "Shade responses linked to radiation and temperature."
    - name: "Fogging / misting"
      desc: "Optional cooling or humidity support actions."
    - name: "Heating"
      desc: "Heating equipment where seasonal or night control is required."
    - name: "Irrigation pumps and valves"
      desc: "Irrigation coordination and interlocks with climate logic."
    - name: "Lighting and alarms"
      desc: "Supplemental lighting outputs and alarm signaling."

system_architecture:
  title: "Control logic separated from the power cabinet"
  subtitle: "Indoor sensors, outdoor weather inputs, schedules and HMI feed PKY-GHC01. The controller issues control outputs to a local power cabinet, which switches greenhouse equipment. An optional gateway can connect to hosted, local or hybrid platforms without blocking local automation."
  image: "images/system/climate-control-architecture.webp"
  image_alt: "Indoor sensors and outdoor weather feed PKY-GHC01 control logic, then local power cabinet and greenhouse equipment, with optional gateway"

zone_flow:
  id: "open-integration"
  title: "How the control chain works"
  body: "Local control logic remains available without internet. The gateway is optional. The weather station is an input module for control actions, not a standalone display product."
  bullets:
    - "Indoor sensors and outdoor weather provide process inputs"
    - "Schedules and HMI set operating intent"
    - "PKY-GHC01 runs setpoints, delays, stages, priorities and interlocks"
    - "Control outputs go to the local power cabinet"
    - "The cabinet handles contactors, breakers, VFDs and motor protection"
    - "Optional gateway supports remote monitoring and management"
  steps:
    - "Sensors / Weather"
    - "PKY-GHC01 Logic"
    - "Control Outputs"
    - "Local Power Cabinet"
    - "Greenhouse Equipment"

feature_blocks:
  - title: "Weather data should trigger controlled actions"
    body: "PKY-GWS01 outdoor weather inputs are intended to drive configured control strategies. Strategies require configuration and site validation. The controller does not automatically make every agronomic decision."
    bullets:
      - "High temperature can stage fans, cooling-pad pumps or fogging"
      - "Strong wind can restrict roof and side vents"
      - "Rain can close vents or activate a defined safety state"
      - "Solar radiation can adjust internal or external shading"
      - "Indoor and outdoor conditions can be evaluated together before ventilation or cooling actions"
    image: "images/scenes/scene-climate-greenhouse.webp"
    image_right: true
  - title: "Built for integrators and panel builders"
    body: "Use your own electrical cabinet or request a PKYDrip cabinet option after configuration review. PKY-GHC01 stays the logic layer — not a substitute for qualified electrical installation."
    bullets:
      - "Documented integration for OEM and repeatable greenhouse packages"
      - "Equipment names, zones and language packs are configurable"
      - "Fertigation and irrigation interlocks can be selected when ordering"
      - "Source-code access is not included with every product"

reference_table:
  title: "Capability parameters"
  intro: "I/O counts, enclosure ratings, supply details and maximum zone counts are confirmed from the project equipment schedule. Fixed unpublished hardware figures are not listed here."
  headers: ["Item", "Specification"]
  rows:
    - ["Operation", "Local automatic and manual control"]
    - ["Control structure", "Equipment groups and configurable climate zones"]
    - ["Logic", "Setpoint, hysteresis, delays, minimum run/stop, stages, priorities and interlocks"]
    - ["Sensor inputs", "Configured according to selected indoor and outdoor sensors"]
    - ["Equipment outputs", "Configured according to approved equipment schedule"]
    - ["Remote connection", "Optional Ethernet, Wi-Fi or 4G gateway"]
    - ["Platform", "Optional hosted, local or hybrid deployment"]
    - ["Language", "English standard; additional languages by configuration"]
    - ["Power cabinet", "Separate local cabinet or PKYDrip cabinet option"]

standard_configurations:
  title: "Choose a standard configuration"
  intro: "These are commercial configuration names. I/O quantities and pricing are confirmed after the equipment schedule is reviewed."
  headers: ["Configuration", "Standard scope", "Typical fit"]
  rows:
    - ["Control Core", "Controller, local logic, HMI, standard I/O configuration and documentation", "Control panel builders and OEMs"]
    - ["Control + Sensors", "Control Core plus selected indoor sensors", "Greenhouse integrators"]
    - ["Integrator Package", "Control + Sensors, optional weather station, gateway and partner documentation", "Repeatable commercial greenhouse deployments"]
  note: "Final BOM is confirmed after configuration review. This table does not state price, stock or lead time."

regional_configuration:
  title: "Regional configuration"
  intro: "The core controller remains the same. Power interface, radio options, communications, language and compliance handoff are selected for the destination market."
  items:
    - name: "Power"
      desc: "Controller supply version or adaptation through the local control cabinet"
    - name: "Radio"
      desc: "Selected only when wireless functions are required for the destination market"
    - name: "Connectivity"
      desc: "Customer network, local SIM or industrial gateway after site conditions are confirmed"
    - name: "Language"
      desc: "English standard; additional languages by configuration"
    - name: "Compliance"
      desc: "Evaluated by delivery scope, importer and destination-market electrical rules"

supply_boundary:
  title: "Supply and responsibility boundary"
  included:
    title: "PKYDrip supply"
    items:
      - "Controller and standard control software"
      - "HMI configuration"
      - "Approved I/O configuration"
      - "Wiring and installation documentation"
      - "Standard parameter template"
      - "Remote training"
  partner:
    title: "Local partner / customer"
    items:
      - "Power cabinet and motor protection unless separately ordered"
      - "Contactors, breakers and VFDs"
      - "Field motors and actuators"
      - "High-power wiring"
      - "Local electrical compliance"
      - "Installation and commissioning labor"
  optional:
    title: "Optional from PKYDrip"
    items:
      - "Indoor sensors"
      - "PKY-GWS01 weather station"
      - "I/O expansion"
      - "Communication gateway"
      - "Complete cabinet subject to configuration review"
      - "Local or private platform deployment"

applications:
  title: "Typical applications"
  cards:
    - title: "Commercial greenhouse"
      desc: "Multi-zone ventilation, cooling, shading and monitoring for production houses."
      image: "images/scenes/scene-climate-greenhouse.webp"
      tags: ["Multi-zone", "Local-first"]
      link: "/solution/commercial-greenhouse-climate-control/"
    - title: "Nursery and propagation"
      desc: "Repeatable climate packages for nursery and young-plant facilities."
      image: "images/scenes/scene-climate-greenhouse.webp"
      tags: ["Nursery", "OEM packages"]
      link: "/solution/greenhouse-irrigation/"
    - title: "Greenhouse + fertigation"
      desc: "Climate logic with optional fertigation and irrigation interlocks."
      image: "images/scenes/scene-fertigation.webp"
      tags: ["Interlock", "FG501"]
      link: "/product/pky-fg501-premix-fertigation/"

product_downloads:
  title: "Product documents"
  intro: "Request current integration documents during configuration review. Empty PDF links are not published."
  items:
    - title: "Datasheet"
      format: "PDF"
      status: "request"
    - title: "Integration checklist"
      format: "PDF"
      status: "request"
    - title: "Wiring / installation guide"
      format: "PDF"
      status: "request"

product_faq:
  title: "Frequently asked questions"
  items:
    - question: "Can PKY-GHC01 work without internet?"
      answer: "Yes. Local automatic and manual control continue without internet. Ethernet, Wi-Fi and 4G are optional gateways and do not replace local logic."
    - question: "Can we use our own electrical power cabinet?"
      answer: "Yes. PKY-GHC01 is designed to integrate with a suitable local power cabinet. PKYDrip can also supply a complete cabinet option after configuration review."
    - question: "Does the controller directly power greenhouse motors?"
      answer: "No. PKY-GHC01 provides control logic and control outputs. Motor power switching, protection and high-power wiring are handled through a suitable local power cabinet."
    - question: "Can the weather station control vents and shading?"
      answer: "Weather inputs such as wind, rain, radiation and outdoor temperature/humidity can trigger configured actions. Strategies must be configured and validated on site. The weather station is an input module, not a standalone display product."
    - question: "Can the HMI use our language and equipment names?"
      answer: "Yes. English is the standard base. Additional languages, equipment names and groups are configurable when ordering. Deeper OEM branding changes are subject to project evaluation."
    - question: "Can it connect to fertigation and irrigation control?"
      answer: "Yes. Fertigation and irrigation interlocks are configurable options. PKY-FG501 and related irrigation modules can be coordinated as part of a confirmed package."
    - question: "Is the source code open?"
      answer: "PKYDrip is open for documented integration and controlled OEM configuration. Source-code access is not included with every product and depends on the software scope and partner agreement."
    - question: "What information is required for configuration?"
      answer: "Company and country, greenhouse area and number of houses, climate zones, equipment list, whether a power cabinet already exists, required sensors, required HMI language, and preferred configuration package."

product_modules:
  title: "Related modules"
  intro: "PKY-GHC01 sits in the Modular Greenhouse Automation family. The Climate Control System family page remains available for broader system context."
  items:
    - name: "Climate Control System family"
      desc: "Product-family entry for greenhouse climate automation architecture."
      url: "/product/climate-control-system/"
    - name: "PKY-FG501 Premix"
      desc: "Five-channel premix fertigation unit for nutrient preparation and zone expansion."
      url: "/product/pky-fg501-premix-fertigation/"
    - name: "Temperature & humidity sensor"
      desc: "Indoor environmental sensing for climate feedback."
      url: "/product/tem-hum-lux/"
    - name: "CO₂ sensor"
      desc: "Optional CO₂ monitoring for enriched growing environments."
      url: "/product/co2-sensor/"
    - name: "Open Platform"
      desc: "Local-first control, open integration and partner boundaries."
      url: "/open-platform/"

related_links:
  title: "Related pages"
  links:
    - label: "PKY-FG501 Premix"
      url: "/product/pky-fg501-premix-fertigation/"
    - label: "PKY-RIC01 Remote Irrigation"
      url: "/product/pky-ric01-remote-irrigation-control/"
    - label: "Open Platform"
      url: "/open-platform/"
    - label: "Climate Control System"
      url: "/product/climate-control-system/"
    - label: "Greenhouse irrigation"
      url: "/solution/greenhouse-irrigation/"
    - label: "Sensors & monitoring"
      url: "/product/sensors-monitoring/"

product_cta:
  title: "Request a PKY-GHC01 configuration"
  text: "Share company and country, greenhouse area, climate zones, equipment list, cabinet status, sensors and HMI language. PKYDrip will confirm a Control Core, Control + Sensors or Integrator Package BOM."
  button_label: "Send Configuration Requirements"
  button_url: "https://wa.me/8617395297329?text=Hi%20PKYDrip%2C%20Product%3A%20PKY-GHC01%20Modular%20Greenhouse%20Automation%20Controller%20%7C%20Model%3A%20PKY-GHC01%20%7C%20Code%3A%20PKY-GHC01-CTRL-MOD%20%7C%20Page%3A%20pky-ghc01-greenhouse-controller%0A-%20Company%20/%20country%3A%20%0A-%20Customer%20type%20%28integrator%20/%20automation%20company%20/%20panel%20builder%20/%20grower%29%3A%20%0A-%20Greenhouse%20area%20and%20number%20of%20houses%3A%20%0A-%20Number%20of%20climate%20zones%3A%20%0A-%20Equipment%20list%3A%20%0A-%20Existing%20power%20cabinet%20%28yes/no%29%3A%20%0A-%20Required%20sensors%3A%20%0A-%20Required%20HMI%20language%3A%20%0A-%20Standard%20configuration%20%28Control%20Core%20/%20Control%20%2B%20Sensors%20/%20Integrator%20Package%29%3A%20%0A-%20Required%20delivery%20time%3A%20"
  reference: "PC-0801-2-02-PROD-PKY-GHC01-01"
---

PKY-GHC01 is the global-standard modular greenhouse automation controller. The existing [Climate Control System](/product/climate-control-system/) family page remains published and is not redirected.
