---
############################### Banner ##############################
banner:
  enable: true
  bg_image: "images/lab/lab-hero-placeholder.webp" # TODO: Replace with engineering-style image
  bg_overlay: true
  title: "PKYDrip Engineering Lab <br/> System Logic · Architecture · Experiments"
  content: "A structured workspace for irrigation automation engineering documentation."
  button:
    enable: true
    label: "Explore Tools"
    link: "/tools/"

############################# About #################################
about:
  enable: true
  title: "Purpose of the Lab"
  description: "This section documents irrigation automation logic and reusable system structures."
  content: |
    The Engineering Lab is dedicated to technical documentation and system logic validation.

    It focuses on:

    - Pump and valve sequencing strategies
    - Zoning logic for large-scale irrigation
    - Communication topology (RS485 / LoRa / MQTT)
    - Sensor integration frameworks
    - Field experiment documentation
    - System safety and redundancy concepts

    This is not a marketing section. It is an engineering reference layer.
  image: "images/lab/lab-diagram-placeholder.webp" # TODO: Replace with architecture diagram

######################### Portfolio ###############################
portfolio:
  enable: true
  bg_image: "images/lab/lab-feature-placeholder.webp" # TODO: Replace with neutral blueprint background
  title: "Structured Engineering Assets"
  content: |
    Lab organizes technical materials into reusable modules:

    - Control cabinet block logic
    - Field wiring structure
    - Safety mechanisms (pressure / flow monitoring)
    - Communication mapping
    - Deployment validation checklist

    These materials support consistent system design and implementation.
  button:
    enable: true
    label: "View Architecture Notes"
    link: "/architecture/"

############################# Service ############################
service:
  enable: false  # Disable marketing-style service section

############################ call to action ###########################
cta:
  enable: true
  bg_image: "images/lab/lab-cta-placeholder.webp" # TODO: Replace with lab-themed image
  title: "Engineering Before Deployment"
  content: |
    Structured planning reduces system failure risk.

    Use the lab tools and documentation to validate:

    - Pump power assumptions
    - Irrigation zone design
    - Communication distance planning
    - System sequencing logic

    Proper architecture ensures stable field performance.
  button:
    enable: true
    label: "Open Engineering Tools"
    link: "/tools/"

############################# Funfacts ###############################
funfacts:
  enable: true
  title: "Lab Overview"
  description: "Continuously evolving engineering documentation."
  funfact_item:
  - icon: "fas fa-project-diagram"
    name: "Architecture Modules"
    count: "10"

  - icon: "fas fa-vial"
    name: "Field Experiments"
    count: "6"

  - icon: "fas fa-tools"
    name: "Engineering Tools"
    count: "4"

  - icon: "fas fa-sync-alt"
    name: "Ongoing Iterations"
    count: "1"

  testimonial_slider:
  - name: "Engineering Principle"
    image: "images/clients/avater-1.webp"
    designation: "Internal Documentation"
    content: "A reliable irrigation system is built from structured logic blocks, not improvisation."
---
