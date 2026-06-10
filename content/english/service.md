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
  title : "Core Systems"
  description : "PKYDrip systems are organized around irrigation engineering logic first: pump and valve control, fertigation, wireless field devices, monitoring, and automation. Solar pump irrigation is handled as a project configuration inside the irrigation control system."
  service_item:
    # service item loop
    - icon : fas fa-hand-holding-water
      name: Irrigation Control System
      content: "Pump control, valve control, zone scheduling, HMI operation, sequential irrigation logic, control cabinet integration, and solar pump irrigation configurations."
      url: "/product/irrigation-control-system/"

    # service item loop
    - icon : fas fa-water
      name: Fertigation System
      content: "Fertilizer injection, EC/pH monitoring, dosing pump control, recipe management, and irrigation-linked fertigation logic."
      url: "/product/fertigation-system/"

    # service item loop
    - icon : fas fa-broadcast-tower
      name: Wireless Field Control System
      content: "LoRa gateway, solar valve controllers, remote pump control, and wireless expansion for farms without field wiring."
      url: "/product/wireless-field-control-system/"

    # service item loop
    - icon : fas fa-chart-line
      name: Monitoring & Sensor System
      content: "Flow, pressure, soil moisture, weather, EC/pH, and irrigation operation records for monitoring and system optimization."
      url: "/product/monitoring-sensor-system/"

############################# call to action #################################
cta:
  enable : true
  # call to action content comes from "_index.md"
---
