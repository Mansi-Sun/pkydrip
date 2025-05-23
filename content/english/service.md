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
  description : "We offer a one-stop solution for smart and customizable automated irrigation products. <br> Our systems are designed to serve a wide range of applications, including greenhouses, orchards, farms, and urban landscaping projects."
  service_item:
    # service item loop
    - icon : fas fa-hand-holding-water #https://fontawesome.com/v5.15/icons
      name: Fertigation System
      content: "Automated systems that combine irrigation and fertilization to deliver nutrients efficiently and precisely to crops."

    # service item loop
    - icon : fas fa-water #https://fontawesome.com/v5.15/icons
      name: Irrigation Controller
      content: "Smart controllers that schedule and manage irrigation based on time, zones, or sensor data to optimize water use."

    # service item loop
    - icon : fas fa-cloud-sun #https://fontawesome.com/v5.15/icons
      name: Weather Station
      content: "Collects real-time environmental data (temperature, humidity, rainfall, wind) to support intelligent irrigation decisions."

    # service item loop
    - icon : fas fa-thermometer-half #https://fontawesome.com/v5.15/icons
      name: Smart Sensor
      content: "Soil moisture, temperature, and other sensors that provide accurate field data for automatic and informed irrigation control."

    # service item loop
    - icon : fas fa-wifi #https://fontawesome.com/v5.15/icons
      name: Solenoid Valve
      content: "Electrically controlled valves used for automated opening and closing of water flow in irrigation systems"

    # service item loop
    - icon : fas fa-seedling #https://fontawesome.com/v5.15/icons
      name: Sprinkler
      content: "Reliable and efficient sprinklers for even water distribution in lawns, fields, or greenhouses"

    # service item loop
    - icon : fas fa-ring #https://fontawesome.com/v5.15/icons
      name: Pipes & Fittings
      content: "High-quality pipes and connectors that ensure a durable, leak-free irrigation infrastructure"

    # service item loop
    - icon : fas fa-cogs #https://fontawesome.com/v5.15/icons
      name: OEM
      content: "We offer customized product design, branding, and development to meet your specific market and technical needs."

############################# call to action #################################
cta:
  enable : true
  # call to action content comes from "_index.md"
---
