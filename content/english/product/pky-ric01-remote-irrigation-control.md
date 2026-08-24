---
title: "PKY-RIC01 Remote Irrigation Control System"
description: "A modular remote irrigation control system combining a LoRa gateway, solar valve controllers, pump control and optional tank, flow and pressure monitoring."
type: "product"
layout: "engineering-page"
draft: false
url: "/product/pky-ric01-remote-irrigation-control/"
product_code: "PKY-RIC01"
page_code: "PC-0801-2-02-PROD-PKY-RIC01-01"
categories:
  - irrigation-control
  - wireless-field-control

hero:
  eyebrow: "Remote Irrigation Control"
  title: "PKY-RIC01 Remote Irrigation Control System"
  subtitle: "Connect remote valves, pumps and field feedback through one repeatable LoRa control architecture — with solar field nodes, local automation and optional remote gateways."
  capabilities:
    - "Standard 8, 16 and 32-point reference packages"
    - "Solar valve and pump control nodes"
    - "Local automation with optional remote access"
  image: "images/system/system-wireless-layer.svg"
  image_alt: "PKY-RIC01 remote irrigation architecture — gateway, solar valve nodes, pump signal node and optional uplink"
  cta_primary:
    label: "Select a Reference Package"
    url: "https://wa.me/8617395297329?text=Hi%20PKYDrip%2C%20Product%3A%20PKY-RIC01%20Remote%20Irrigation%20Control%20System%20%7C%20System%3A%20PKY-RIC01%20%7C%20Page%3A%20pky-ric01-remote-irrigation-control%0A-%20Company%20/%20country%3A%20%0A-%20Customer%20type%20%28contractor%20/%20solar%20pump%20company%20/%20distributor%20/%20grower%29%3A%20%0A-%20Farm%20type%20and%20area%3A%20%0A-%20Number%20of%20valves%3A%20%0A-%20Number%20of%20pumps%3A%20%0A-%20Maximum%20distance%20and%20terrain%3A%20%0A-%20Power%20available%20at%20field%20nodes%20%28yes/no%29%3A%20%0A-%20Required%20tank%2C%20flow%20or%20pressure%20feedback%3A%20%0A-%20Reference%20package%20%28RIC01-08%20/%20RIC01-16%20/%20RIC01-32%29%3A%20%0A-%20Required%20delivery%20time%3A%20"
  cta_secondary:
    label: "View System Architecture"
    url: "#ric01-architecture"

product_identity:
  model_label: "System code"
  model: "PKY-RIC01"
  code_label: "Product code"
  product_code: "PKY-RIC01"
  family_label: "Product family"
  family: "Remote Irrigation Control"
  lifecycle_label: "Status"
  lifecycle: "Standard system package"

fit_summary:
  title: "Is this system a fit?"
  best_for:
    title: "Best for"
    items:
      - "Orchards"
      - "Open-field irrigation"
      - "Remote valve blocks"
      - "Pump and water-tank stations"
      - "Irrigation retrofit where trenching is difficult"
      - "Solar-powered field control"
  partner_fit:
    title: "Recommended buyer"
    items:
      - "Irrigation contractor"
      - "Solar pump company"
      - "Agricultural equipment distributor"
      - "Commercial farm with an installer"
      - "Land-development contractor"
  not_for:
    title: "Not designed for"
    items:
      - "Residential gardens"
      - "Single low-value international accessory orders"
      - "Sites where radio conditions have not been evaluated"
      - "Safety-critical pump switching without suitable protection"
      - "Guaranteed long-range claims without a site survey"

offer_scope:
  title: "Standard product, configurable where it matters"
  intro: "PKY-RIC01 is a standard system package built from existing PKYDrip modules. Package size is a commercial reference. Radio layout, node mix and power options are confirmed after site review."
  columns:
    - key: "standard"
      title: "Standard"
      badge: "Included"
      items:
        - "Central LoRa gateway architecture"
        - "Compatible solar valve-control nodes"
        - "Compatible pump-control node"
        - "Irrigation scheduling and grouping"
        - "Local operation"
        - "Standard node pairing process"
        - "Standard installation and troubleshooting documents"
        - "8, 16 and 32-point reference packages"
    - key: "configurable"
      title: "Configurable"
      badge: "Select when ordering"
      items:
        - "Number of control points"
        - "Valve and pump combination"
        - "Tank-level, flow and pressure feedback"
        - "Regional radio module"
        - "Ethernet, Wi-Fi or 4G gateway"
        - "Local SIM"
        - "Solar power package"
        - "Hosted, local or hybrid platform"
    - key: "engineering"
      title: "Engineering Review"
      badge: "Evaluated separately"
      items:
        - "Non-standard radio topology"
        - "Extreme distance or terrain"
        - "Third-party radio networks"
        - "New sensor protocols"
        - "Direct high-power pump switching"
        - "Critical water-supply applications"
        - "Custom gateway software"

system_architecture:
  id: "ric01-architecture"
  title: "One architecture. Existing modules."
  subtitle: "Local irrigation logic and HMI connect through the PKY-EG08 gateway to solar valve nodes, sensing nodes and pump-signal nodes. Optional Ethernet, Wi-Fi or local-SIM 4G uplinks support hosted, local or hybrid platforms without making the cloud a single point of failure for field control."
  image: "images/system/system-wireless-layer.svg"
  image_alt: "PKY-RIC01 architecture — local logic, EG08 gateway, IC05 valve nodes, IC05-Plus feedback nodes and IC06-PUMP pump signal node"

zone_flow:
  id: "ric01-radio"
  title: "Radio performance depends on the site"
  body: "Radio performance depends on regional frequency, antenna selection, mounting height, terrain, vegetation and interference. PKYDrip reviews the field layout before confirming the deployment architecture."
  bullets:
    - "LoRa frequency must match destination-market rules"
    - "Antenna mounting height and line of sight affect practical coverage"
    - "Vegetation, hills and interference can reduce range"
    - "Package size does not guarantee one gateway covers every node"
    - "A site survey is required before confirming topology"
  steps:
    - "Local Logic / HMI"
    - "PKY-EG08 Gateway"
    - "LoRa Field Nodes"
    - "Valves / Pump Panel"
    - "Optional Uplink"

system_controls:
  title: "Core modules in the package"
  intro: "PKY-RIC01 is assembled from existing PKYDrip modules. 8 / 16 / 32 are reference commercial packages, not three separate hardware platforms."
  items:
    - name: "PKY-EG08"
      desc: "LoRa gateway and central wireless coordination."
    - name: "PKY-IC05"
      desc: "Solar LoRa valve controller for field valve blocks."
    - name: "PKY-IC05-Plus"
      desc: "Wireless valve and field-feedback node with optional pressure, flow or environmental sensing."
    - name: "PKY-IC06-PUMP"
      desc: "Remote pump-control signal node with optional flow verification — not a direct high-power starter cabinet."

feature_blocks:
  - title: "Pump control stays a signal and permission layer"
    body: "PKY-IC06-PUMP provides remote pump start/stop signaling and can verify operation with flow feedback. Large pumps still need a suitable local starter, protection and power cabinet."
    bullets:
      - "Pump-control node outputs control signals or permission logic"
      - "Local pump panel handles contactors, protection and power switching"
      - "Flow feedback can confirm that the pump actually started"
      - "Safety-critical pump applications require engineering review"
    image: "images/scenes/scene-wireless-field.webp"
    image_right: true
    link:
      label: "PKY-IC06-PUMP details"
      url: "/product/pky-ic06-pump/"
  - title: "Local automation first, remote access when required"
    body: "Field irrigation logic continues locally. Ethernet, Wi-Fi and 4G are gateway options selected after network, carrier and maintenance responsibility are confirmed."
    bullets:
      - "LoRa field control does not require 4G between gateway and nodes"
      - "4G or other uplinks are optional for remote monitoring and management"
      - "The local customer or partner normally supplies the SIM and data plan"
      - "Cloud or hosted platforms are not a single point of failure for local control"

product_modules:
  title: "Module pages"
  intro: "Open the existing product pages for module details. This system page does not duplicate every parameter."
  items:
    - name: "PKY-EG08"
      desc: "LoRa gateway and wireless coordination node."
      url: "/product/pky-eg08/"
    - name: "PKY-IC05"
      desc: "Solar LoRa valve controller."
      url: "/product/pky-ic05/"
    - name: "PKY-IC05-Plus"
      desc: "Wireless valve and optional field-feedback node."
      url: "/product/pky-ic05-plus/"
    - name: "PKY-IC06-PUMP"
      desc: "Remote pump-control signal node with optional flow verification."
      url: "/product/pky-ic06-pump/"
    - name: "Wireless Field Control System"
      desc: "Family overview for wireless field expansion."
      url: "/product/wireless-field-control-system/"

standard_configurations:
  title: "Choose a reference package"
  intro: "Package size is a configuration reference. Final gateway quantity, node type, sensors, radio layout and power package depend on the approved site layout."
  headers: ["Package", "Reference scope", "Typical fit"]
  rows:
    - ["PKY-RIC01-08", "Gateway architecture and up to 8 approved control points", "Small commercial blocks and pilot deployment"]
    - ["PKY-RIC01-16", "Gateway architecture and up to 16 approved control points", "Orchard or multi-block farm"]
    - ["PKY-RIC01-32", "Gateway architecture and up to 32 approved control points", "Larger distributed irrigation layout"]
  note: "A single gateway is not guaranteed to cover every node in a 32-point layout. Topology is confirmed after radio and site review."

regional_configuration:
  title: "Regional configuration"
  intro: "The same RIC01 architecture remains in use. Only approved radio modules, antennas and connectivity options change for the destination market."
  items:
    - name: "Radio"
      desc: "LoRa frequency and radio module selected to match destination-market rules"
    - name: "Antenna"
      desc: "Antenna type and mounting package selected with the site layout"
    - name: "Connectivity"
      desc: "Optional Ethernet, Wi-Fi or local-SIM 4G uplink after carrier and maintenance responsibility are confirmed"
    - name: "Power"
      desc: "Solar field-node packages and local pump-panel power remain project-specific"
    - name: "Compliance"
      desc: "Local partners confirm legal radio operation and installation responsibility"

supply_boundary:
  title: "Supply and responsibility boundary"
  included:
    title: "PKYDrip supply"
    items:
      - "Approved gateway and node package"
      - "Standard irrigation-control configuration"
      - "Pairing and installation documents"
      - "Standard local-control logic"
      - "Remote training"
  partner:
    title: "Local partner / customer"
    items:
      - "Hydraulic design"
      - "Pipes, valves and manifolds unless ordered"
      - "Pump starter, protection and power cabinet"
      - "Pole, enclosure and field mounting"
      - "Local SIM and mobile plan"
      - "Site radio survey and final installation"
      - "Local regulatory responsibility"
  optional:
    title: "Optional from PKYDrip"
    items:
      - "Sensors"
      - "Solar power package"
      - "Antennas and mounting accessories"
      - "Communication gateway"
      - "Platform deployment"
      - "Spare-node package"

applications:
  title: "Typical applications"
  cards:
    - title: "Orchard irrigation"
      desc: "Distributed valve blocks where trenching is costly or impractical."
      image: "images/scenes/scene-orchard.webp"
      tags: ["Orchard", "Valve blocks"]
      link: "/solution/orchard-irrigation/"
    - title: "Open-field blocks"
      desc: "Multi-block farms using solar valve nodes and optional pump signaling."
      image: "images/scenes/scene-open-field.webp"
      tags: ["Open field", "Solar nodes"]
      link: "/solution/open-field-irrigation/"
    - title: "Remote pump and tank"
      desc: "Remote wells or tanks with pump-signal control and optional flow verification."
      image: "images/scenes/scene-wireless-field.webp"
      tags: ["Pump signal", "Feedback"]
      link: "/landing/remote-irrigation/"

product_downloads:
  title: "Product documents"
  intro: "Request current package documents during site review. Empty PDF links are not published."
  items:
    - title: "System datasheet"
      format: "PDF"
      status: "request"
    - title: "Site survey checklist"
      format: "PDF"
      status: "request"
    - title: "Pairing / installation guide"
      format: "PDF"
      status: "request"

product_faq:
  title: "Frequently asked questions"
  items:
    - question: "Does the system work without mobile coverage?"
      answer: "Yes for local LoRa field control. The gateway and field nodes communicate over LoRa. Mobile coverage is only needed if you select a 4G uplink for remote monitoring or management."
    - question: "Does every valve controller need grid power?"
      answer: "No. PKY-IC05 and related field nodes are designed for solar-powered valve control. Exact solar and battery packages are confirmed for the site duty cycle."
    - question: "Is 4G required for LoRa control?"
      answer: "No. 4G is an optional uplink. LoRa handles field-node communication with the gateway. Local irrigation logic continues without making the cloud a single point of failure."
    - question: "Can one gateway always control 32 points?"
      answer: "No. PKY-RIC01-32 is a reference package size. Final gateway quantity and radio topology depend on distance, terrain, antenna mounting and interference. A site survey is required."
    - question: "How is the correct LoRa frequency selected?"
      answer: "LoRa frequency and radio modules are selected to match destination-market rules. Local partners confirm legal operation. Country-specific frequency tables are not published as a universal promise on this page."
    - question: "Can the pump controller directly switch a large pump?"
      answer: "No. PKY-IC06-PUMP is a remote pump-control signal node. Large pumps still need a suitable local starter, protection and power cabinet. Direct high-power switching requires engineering review."
    - question: "Who supplies the SIM card?"
      answer: "The local customer or partner normally supplies the SIM and mobile plan when a 4G uplink is selected."
    - question: "What site information is required?"
      answer: "Company and country, farm type and area, valve count, pump count, maximum distance and terrain, whether field nodes have power, and whether tank, flow or pressure feedback is required."

related_links:
  title: "Related pages"
  links:
    - label: "PKY-EG08"
      url: "/product/pky-eg08/"
    - label: "PKY-IC05"
      url: "/product/pky-ic05/"
    - label: "PKY-IC05-Plus"
      url: "/product/pky-ic05-plus/"
    - label: "PKY-IC06-PUMP"
      url: "/product/pky-ic06-pump/"
    - label: "Open Platform"
      url: "/open-platform/"
    - label: "Open-field irrigation"
      url: "/solution/open-field-irrigation/"

product_cta:
  title: "Request a PKY-RIC01 reference package"
  text: "Share company and country, farm type, valve and pump counts, distance and terrain, field power conditions and feedback needs. PKYDrip will confirm an 08 / 16 / 32 reference package and radio layout."
  button_label: "Send Configuration Requirements"
  button_url: "https://wa.me/8617395297329?text=Hi%20PKYDrip%2C%20Product%3A%20PKY-RIC01%20Remote%20Irrigation%20Control%20System%20%7C%20System%3A%20PKY-RIC01%20%7C%20Page%3A%20pky-ric01-remote-irrigation-control%0A-%20Company%20/%20country%3A%20%0A-%20Customer%20type%20%28contractor%20/%20solar%20pump%20company%20/%20distributor%20/%20grower%29%3A%20%0A-%20Farm%20type%20and%20area%3A%20%0A-%20Number%20of%20valves%3A%20%0A-%20Number%20of%20pumps%3A%20%0A-%20Maximum%20distance%20and%20terrain%3A%20%0A-%20Power%20available%20at%20field%20nodes%20%28yes/no%29%3A%20%0A-%20Required%20tank%2C%20flow%20or%20pressure%20feedback%3A%20%0A-%20Reference%20package%20%28RIC01-08%20/%20RIC01-16%20/%20RIC01-32%29%3A%20%0A-%20Required%20delivery%20time%3A%20"
  reference: "PC-0801-2-02-PROD-PKY-RIC01-01"
---

PKY-RIC01 is a standard remote irrigation control package built from existing modules: [PKY-EG08](/product/pky-eg08/), [PKY-IC05](/product/pky-ic05/), [PKY-IC05-Plus](/product/pky-ic05-plus/) and [PKY-IC06-PUMP](/product/pky-ic06-pump/). The [Wireless Field Control System](/product/wireless-field-control-system/) family page remains published and is not redirected.
