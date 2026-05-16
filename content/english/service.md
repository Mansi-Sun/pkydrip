---
title: "Service"
description: "this is meta description"
bg_image: "images/feature-bg.jpg"
layout: "service"
draft: false

########################### about service #############################
about:
  enable : true
  title : "Creative UX/UI Design Agency"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate soluta corporis odit, optio
          cum! Accusantium numquam ab, natus excepturi architecto earum ipsa aliquam, illum, omnis rerum, eveniet
          officia nihil. Eum quod iure nulla, soluta architecto distinctio. Nesciunt odio ullam expedita, neque fugit
          maiores sunt perferendis placeat autem animi, nihil quis suscipit quibusdam ut reiciendis doloribus natus nemo
          id quod illum aut culpa perspiciatis consequuntur tempore? Facilis nam vitae iure quisquam eius harum
          consequatur sapiente assumenda, officia voluptas quas numquam placeat, alias molestias nisi laudantium
          nesciunt perspiciatis suscipit hic voluptate corporis id distinctio earum. Dolor reprehenderit fuga dolore
          officia adipisci neque!"
  image : "images/company/company-group-pic.jpg"


########################## featured service ############################
featured_service:
  enable : true
  service_item:
    # featured service item loop
    - name : "Interface Design"
      icon : "fas fa-flask"
      color : "primary"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim impedit repudiandae omnis est temporibus."

    # featured service item loop
    - name : "Product Branding"
      icon : "fas fa-leaf"
      color : "primary-dark"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim impedit repudiandae omnis est temporibus."

    # featured service item loop
    - name : "Game Development"
      icon : "fas fa-lightbulb"
      color : "primary-darker"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim impedit repudiandae omnis est temporibus."


############################# Service ###############################
service:
  enable : true
  title : "Our Products"
  description : "PKYDrip products are designed for irrigation automation, pump control, valve management, fertigation, and remote field operation.<br><br>We provide scalable control systems for farms, orchards, greenhouses, and landscape irrigation projects."
  service_item:
    # service item loop
    - icon : fas fa-hand-holding-water #https://fontawesome.com/v5.15/icons
      name: Irrigation Control Cabinet
      content: "Integrated control cabinet for pump start/stop, valve sequencing, scheduling, touchscreen operation, and project-level irrigation automation."

    # service item loop
    - icon : fas fa-water #https://fontawesome.com/v5.15/icons
      name: Fertigation System
      content: "Automated fertigation systems for fertilizer injection, mixing, EC/pH monitoring, and irrigation-linked nutrient delivery."

    # service item loop
    - icon : fas fa-cloud-sun #https://fontawesome.com/v5.15/icons
      name: Irrigation Controller
      content: "Smart controllers for zone scheduling, valve operation, sensor-based irrigation, and remote irrigation management."

    # service item loop
    - icon : fas fa-thermometer-half #https://fontawesome.com/v5.15/icons
      name: LoRa / Wireless Valve Control
      content: "Wireless valve control solutions for remote fields, retrofit projects, and locations where cable trenching is difficult."

    # service item loop
    - icon : fas fa-wifi #https://fontawesome.com/v5.15/icons
      name: Sensors & Weather Monitoring
      content: "Soil, water, and weather sensors for monitoring moisture, pressure, flow, rainfall, temperature, and other field conditions."

    # service item loop
    - icon : fas fa-seedling #https://fontawesome.com/v5.15/icons
      name: Solenoid Valves & Actuators
      content: "Electric valves and actuator control options for automated zone-by-zone irrigation management."

    # service item loop
    - icon : fas fa-ring #https://fontawesome.com/v5.15/icons
      name: Field Components & System Integration
      content: "Supporting components including valves, filters, pipes, fittings, and irrigation accessories supplied as part of complete irrigation system projects and export delivery."

    # service item loop
    - icon : fas fa-cogs #https://fontawesome.com/v5.15/icons
      name: OEM / Custom Control System Development
      content: "Custom irrigation automation solutions including control cabinets, touchscreen operation, remote management, and project-specific system integration."

############################# call to action #################################
cta:
  enable : true
  # call to action content comes from "_index.md"
---
