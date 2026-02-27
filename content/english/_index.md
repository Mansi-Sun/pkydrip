---
############################### Banner ##############################
banner:
  enable: true
  bg_image: "images/slider-bg.webp"
  bg_overlay: true
  title: "PKYDrip Engineering Lab <br/> Tools • Architecture • Experiments"
  content: "Experimental workspace for irrigation automation documentation and calculators."
  button:
    enable: true
    label: "Open Tools"
    link: "/tools/"

############################# About #################################
about:
  enable: true
  title: "What is Lab?"
  description: "Lab is the public engineering workspace of PKYDrip — focused on tools, system logic, integration notes, and test logs."
  content: |
    This site is used to publish engineering assets that help partners and engineers build irrigation projects faster:

    - Tools & calculators (pump sizing, solar irrigation sizing, pressure/flow quick charts)
    - System architecture (controller → gateway → valves, sensor integration)
    - Control logic (pump + valve sequencing, safety logic, alarms)
    - Experiments & changelog (range tests, demo rigs, iteration notes)

    For production-ready solution pages, use the main site (smart).
  image: "images/wrapper-img.webp"

######################### Portfolio ###############################
portfolio:
  enable: true
  bg_image: "images/feature-bg.webp"
  title: "ENGINEERING ASSETS YOU CAN REUSE"
  content: |
    Lab focuses on reusable engineering materials — not marketing pages.

    - Repeatable demo rigs (pump + valves + indicators + flow meter)
    - Wiring / cabinet logic blocks
    - Protocol mapping (RS485/Modbus, LoRa gateway, MQTT drafts)
    - Installation checklists and troubleshooting notes
  button:
    enable: true
    label: "View Architecture Notes"
    link: "/architecture/"

############################# Service ############################
service:
  enable: true
  # service content comes from "service.md" file

############################ call to action ###########################
cta:
  enable: true
  bg_image: "images/call-to-action-bg.jpg"
  title: "Start with one tool"
  content: |
    If you are sizing a system or validating feasibility, start here.

    We publish internal-grade calculators and reference tables so you can:
    - estimate pump power and pressure
    - plan zoning and sequencing
    - reduce trial-and-error on site
  button:
    enable: true
    label: "Go to Tools"
    link: "/tools/"

############################# Funfacts ###############################
funfacts:
  enable: true
  title: "Lab Status"
  description: "Lab is experimental. Sections may change frequently."
  funfact_item:
  - icon: "fas fa-flask"
    name: "Active Tools"
    count: "4"
  - icon: "fas fa-project-diagram"
    name: "Architecture Notes"
    count: "8"
  - icon: "fas fa-vial"
    name: "Experiments Logged"
    count: "12"
  - icon: "fas fa-code-branch"
    name: "Weekly Iterations"
    count: "1"

  testimonial_slider:
  - name: "Junfeng Qiu"
    image: "images/clients/avater-1.webp"
    designation: "Founder - PKYDrip"
    content: "Lab exists to make irrigation automation easier to deploy: clear logic, reusable modules, and field-tested notes."
---
