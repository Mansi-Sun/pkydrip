---
############################### Banner ##############################
banner:
  enable: true
  bg_image: "images/home/global-agricultural-system-hero.svg"
  title: "Agricultural Automation Infrastructure for Global Farming Systems"
  content: "PKYDrip is a system-first platform — irrigation control, fertigation, and climate control configured by regional market and deployment scenario.<br><br>System defines product. Market defines system usage."
  button:
    enable: true
    label: "Explore Core Systems"
    link: "/system/irrigation-control-system/"
  button_secondary:
    enable: true
    label: "View Regional Markets"
    link: "#global-markets"

############################# Philosophy ############################
philosophy:
  enable: true
  title: "System-Level Agricultural Automation"
  content: "We design system-level agricultural automation, not standalone devices."
  subcontent: "Every project starts from infrastructure logic — how water, nutrients, and climate flow across farm regions — before any equipment selection. This keeps systems expandable, regionally adapted, and easier to manage over time."
  image: "images/home/agricultural-system-layers.svg"
  image_alt: "Agricultural system layer model — environment, control systems, and output"

############################# Systems #############################
systems:
  enable: true
  title: "Core Systems"
  content: "Three coordinated infrastructure layers — the main entry point for every global farm project."
  cta_label: "Discuss Your System Architecture"
  cta_url: "/contact/"
  items:
    - name: "Irrigation Control System"
      desc: "Regional zone flow, pump coordination, scheduling logic, and irrigation control across farm infrastructure."
      url: "/system/irrigation-control-system/"
      image: "images/system/system-irrigation-layer.svg"
    - name: "Fertigation System"
      desc: "Nutrient flow network with EC/pH logic integrated into irrigation regions and crop zones."
      url: "/system/fertigation-system/"
      image: "images/system/system-fertigation-layer.svg"
    - name: "Climate Control System"
      desc: "Greenhouse and nursery climate zones — ventilation, heating, cooling, and humidity layers."
      url: "/system/climate-control-system/"
      image: "images/system/system-climate-layer.svg"

############################# Global Logic ##########################
global_logic:
  enable: true
  title: "One System → Multiple Markets → Multiple Deployment Scenarios"
  content: "The same core systems adapt to different climate regions and farm types. Markets provide system context — not translations of the homepage."
  image: "images/home/global-system-logic.svg"
  image_alt: "Global system logic — core systems, regional markets, and deployment scenarios"
  markets:
    - label: "Russia"
      context: "Greenhouse irrigation + heating efficiency"
      systems: "Irrigation · Climate"
      url: "/ru/"
    - label: "UAE"
      context: "Precision fertigation + desert agriculture"
      systems: "Fertigation · Climate · Irrigation"
      url: "/uae/"
    - label: "Saudi Arabia"
      context: "Large-scale irrigation systems"
      systems: "Irrigation · Fertigation"
      url: "/sa/"
    - label: "South Africa"
      context: "Solar irrigation + off-grid systems"
      systems: "Irrigation · Climate"
      url: "/za/"
  scenarios:
    - label: "Open Field Farming"
      url: "/solution/open-field-irrigation/"
    - label: "Greenhouse Farming"
      url: "/solution/greenhouse-irrigation/"
    - label: "Orchard Systems"
      url: "/solution/orchard-irrigation/"
    - label: "Hydroponic Systems"
      url: "/solution/hydroponic-irrigation/"
    - label: "Retrofit Irrigation Systems"
      url: "/solution/irrigation-retrofit-upgrade/"

############################ call to action ###########################
cta:
  enable: true
  bg_image: "images/call-to-action-bg.jpg"
  title: "Discuss Your System Architecture"
  content: "Tell us your farm region, crop type, and deployment scenario. PKYDrip recommends an infrastructure model before detailed configuration."
  button:
    enable: true
    label: "Contact PKYDrip"
    link: "/contact/"

############################# Disabled legacy sections ##############
about:
  enable: false
platform:
  enable: false
portfolio:
  enable: false
service:
  enable: false
systems_value:
  enable: false
funfacts:
  enable: false
---
