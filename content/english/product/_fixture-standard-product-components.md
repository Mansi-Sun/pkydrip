---
title: "Standard Product Components Fixture"
description: "Internal draft fixture to verify shared product page components. Not for publication."
type: "product"
layout: "engineering-page"
draft: true
url: "/product/_fixture-standard-product-components/"
product_code: "FIXTURE-CODE"
page_code: "PC-FIXTURE-01"

hero:
  eyebrow: "Modular Greenhouse Automation"
  title: "Fixture Product Page"
  subtitle: "Verifies shared product components without publishing a real product page."
  capabilities:
    - "Local control independent of internet"
    - "Control and power cabinet separation"
    - "Configurable sensors and zones"
  cta_primary:
    label: "Request Standard Configuration"
    url: "https://wa.me/8617395297329?text=Fixture"
  cta_secondary:
    label: "View Open Integration"
    url: "/product/"

product_identity:
  model_label: "Model"
  model: "PKY-FIXTURE"
  code_label: "Product code"
  product_code: "FIXTURE-CODE"
  family_label: "Product family"
  family: "Fixture Family"
  lifecycle_label: "Status"
  lifecycle: "Standard product"

fit_summary:
  title: "Is this product a fit?"
  best_for:
    title: "Best for"
    items:
      - "Commercial greenhouse integrators"
      - "OEM control cabinet builders"
  partner_fit:
    title: "Recommended buyer"
    items:
      - "System integrators"
      - "Authorized distributors"
  not_for:
    title: "Not designed for"
    items:
      - "Hobby greenhouse kits"
      - "One-off unsupported custom firmware"

offer_scope:
  title: "Standard product, configurable where it matters"
  intro: "Clear boundaries between included, selectable, and engineering-reviewed work."
  columns:
    - key: "standard"
      title: "Standard"
      badge: "Included"
      items:
        - "Controller core"
        - "Base I/O mapping"
        - "Local HMI"
    - key: "configurable"
      title: "Configurable"
      badge: "Select when ordering"
      items:
        - "Language pack"
        - "Sensor set"
        - "Connectivity option"
    - key: "engineering"
      title: "Engineering Review"
      badge: "Evaluated separately"
      items:
        - "Non-standard protocols"
        - "Site-specific safety interlocks"

standard_configurations:
  title: "Choose a standard configuration"
  intro: "Reference packages only. No price, stock, or lead-time claims."
  headers: ["Configuration", "Standard scope", "Typical fit"]
  rows:
    - ["Control Core", "Controller + HMI", "Integrators with own sensors"]
    - ["Control + Sensors", "Core + indoor sensor pack", "Turnkey greenhouse bays"]
  note: "Final BOM is confirmed after configuration review."

regional_configuration:
  title: "Regional configuration"
  intro: "The core product remains the same. Power, radio, communications and language are selected for the destination market."
  items:
    - name: "Power"
      desc: "Market voltage and cabinet interface"
    - name: "Radio"
      desc: "Regional license-free band where used"
    - name: "Connectivity"
      desc: "Ethernet, Wi-Fi, or 4G gateway options"
    - name: "Language"
      desc: "HMI and document language pack"
    - name: "Compliance"
      desc: "Local electrical handover by partner"

supply_boundary:
  title: "Supply and responsibility boundary"
  included:
    title: "PKYDrip supply"
    items:
      - "Controller hardware"
      - "Standard software image"
      - "Integration checklist"
  partner:
    title: "Local partner / customer"
    items:
      - "High-power electrical cabinet"
      - "Field installation and commissioning"
  optional:
    title: "Optional from PKYDrip"
    items:
      - "Outdoor weather station module"
      - "Remote training package"

product_downloads:
  title: "Product documents"
  intro: "Only real files are linked as available."
  items:
    - title: "Datasheet"
      format: "PDF"
      status: "request"
    - title: "Internal roadmap note"
      format: "PDF"
      status: "coming_soon"

product_faq:
  title: "Frequently asked questions"
  items:
    - question: "Is this a published product page?"
      answer: "No. This draft fixture only validates shared components."
    - question: "Do empty fields render empty sections?"
      answer: "No. Missing component params are skipped entirely."

related_links:
  title: "Related pages"
  links:
    - label: "Products"
      url: "/product/"
    - label: "Climate Control System"
      url: "/product/climate-control-system/"

product_cta:
  title: "Request a fixture configuration"
  text: "This CTA proves product_cta takes priority over project_cta."
  button_label: "Send Configuration Requirements"
  button_url: "https://wa.me/8617395297329?text=Fixture%20CTA"
  reference: "PC-FIXTURE-01"

project_cta:
  title: "This project_cta must NOT render"
  text: "If you see this, CTA priority failed."
  button_label: "Wrong CTA"
  button_url: "https://example.com"
---
