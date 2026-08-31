---
title: "Systèmes d'automatisation d'irrigation PKYDrip | Infrastructure agricole intelligente"
description: "PKYDrip fournit des systèmes d'automatisation d'irrigation pour fermes, serres, vergers et projets de modernisation : contrôle d'irrigation, fertigation, vannes sans fil et solutions de ferme intelligente."
translationKey: "home"
############################### Banner ##############################
banner:
  enable: true
  bg_image: "images/home/global-farmland-atmosphere-v2.webp"
  bg_overlay: true
  title: "Plateforme d'automatisation agricole PKYDrip"
  content: "L'agriculture fondée sur les données commence par une automatisation connectée — contrôle de l'irrigation, fertigation, coordination climatique et systèmes de terrain sans fil, réunis sur une seule plateforme.<br><br>Nous aidons à définir et concevoir des systèmes d'automatisation agricole pour les fermes, serres, vergers et déploiements de grande superficie."
  button:
    enable: true
    label: "Découvrir l'architecture de la plateforme"
    link: "/system-architecture/"
  button_secondary:
    enable: true
    label: "Démarrer le plan de projet"
    link: "/tools/irrigation-design-wizard/"

############################# Entry Paths ###########################
entry_paths:
  enable: true
  title: "Choisissez votre point d'entrée"
  content: "Chaque projet a une logique d'entrée différente. Ces parcours mènent de l'idée à un plan d'automatisation — plus vite que de parcourir seul un catalogue produits."
  items:
    - icon: "🌱"
      title: "Démarrer un nouveau projet d'irrigation"
      desc: "Pour les fermes, vergers, serres et installations neuves qui ont besoin d'une irrigation automatisée, d'une fertigation et d'une coordination climatique dès la conception."
      button_label: "Ouvrir l'assistant de conception"
      button_link: "/tools/irrigation-design-wizard/"
    - icon: "🔧"
      title: "Moderniser un système existant"
      desc: "Pour les sites qui ont déjà pompes, canalisations ou infrastructure de terrain — passer à un meilleur contrôle, à la fertigation et au suivi IoT."
      button_label: "Voir les solutions de modernisation"
      button_link: "/solution/irrigation-retrofit-upgrade/"
    - icon: "📡"
      title: "Irrigation distante / sans fil"
      desc: "Pour les parcelles éloignées et les zones d'extension où le câblage est difficile — étendre la plateforme avec des vannes LoRa, des capteurs et un suivi prêt pour le cloud."
      button_label: "Voir la solution sans fil"
      button_link: "/landing/remote-irrigation/"

############################# Platform ##############################
platform:
  enable: true
  title: "Un système d'exploitation agricole ouvert"
  description: "PKYDrip organise l'automatisation en séries de sous-systèmes et en couches IoT — les produits s'intègrent comme des modules, pas comme un catalogue d'équipements collé."
  content: "Les données de terrain vont des capteurs à la logique de décision, puis à l'exécution. Quatre séries de sous-systèmes — irrigation, fertigation, climat et sans fil — partagent la même structure de plateforme. Les produits s'y raccordent lors de la configuration du projet."
  image: "images/home/platform-subsystems-series.webp"
  image_alt: "Paysage de ferme intelligente — irrigation pivot, rangs de verger, serre, vigne et connectivité sans fil entre zones agricoles coordonnées"
  caption: "Irrigation, fertigation, climat et automatisation sans fil tissés dans les champs, vergers, serres et îlots agricoles distants"
  cta_label: "Découvrir l'architecture de la plateforme"

############################# About (disabled) ######################
about:
  enable: false

############################# Systems ###############################
systems:
  enable: true
  title: "Sous-systèmes de la plateforme"
  content: "Quatre sous-systèmes centraux du système d'exploitation agricole PKYDrip. Chacun définit comment une partie de la ferme fonctionne — produits et contrôleurs s'intègrent dans ces couches."
  cta_label: "Discuter de l'intégration plateforme"
  cta_url: "/contact/"
  items:
    - name: "Système de contrôle d'irrigation"
      desc: "Pompes, vannes et programmation par zones — la colonne d'exécution pour l'irrigation de plein champ, de verger et de ferme."
      url: "/system/irrigation-control-system/"
    - name: "Système de fertigation"
      desc: "Apport d'éléments nutritifs coordonné avec les zones d'irrigation — logique EC/pH dans la même structure d'automatisation."
      url: "/system/fertigation-system/"
    - name: "Système de contrôle climatique"
      desc: "Coordination environnementale des serres et pépinières — ventilation, refroidissement, chauffage et humidité comme couche connectée."
      url: "/system/climate-control-system/"
    - name: "Système d'irrigation sans fil"
      desc: "Extension LoRa pour le contrôle des vannes et pompes — là où le câblage n'est pas pratique."
      url: "/system/wireless-irrigation-system/"

systems_value:
  enable: true
  title: "Principes de la plateforme ouverte"
  image: "images/home/open-platform-principles.webp"
  image_alt: "Ferme intelligente connectée au lever du soleil — nœuds capteurs, maillage de terrain, intégration cloud entre serre, irrigation et verger"
  items:
    - "Couches capteur, exécution et décision — connectées ouvertement à travers la ferme"
    - "Intégration cloud possible, avec un contrôle local indépendant"
    - "Les produits s'intègrent comme modules dans les sous-systèmes — pas comme des appareils isolés"
    - "Conçu pour producteurs, intégrateurs, distributeurs et partenaires de recherche"
  cta:
    label: "Voir la plateforme ouverte"
    url: "/open-platform/"

######################### Deployment ################################
portfolio:
  enable: true
  image: "images/home/deployment-scenarios.webp"
  image_alt: "Panorama de déploiement agricole au coucher du soleil — capteurs de verger, serre, irrigation pivot et infrastructure de pompage"
  title: "De la logique plateforme au déploiement terrain"
  content: "Une fois la structure de plateforme claire, choisissez comment elle se pose au champ. Serre, verger, plein champ et modernisation configurent les mêmes sous-systèmes autrement — chaque scénario est un chemin du plan à la ferme réelle."
  button:
    enable: true
    label: "Parcourir les scénarios de déploiement"
    link: "/solution/"

############################# Service ###############################
service:
  enable: false

############################ call to action ###########################
cta:
  enable: true
  bg_image: "images/call-to-action-bg.jpg"
  title: "Vous planifiez une automatisation agricole ?"
  content: "Utilisez l'outil de conception d'irrigation pour cartographier la structure de la ferme, la source d'eau et les couches de contrôle avant de choisir sous-systèmes et produits."
  button:
    enable: true
    label: "Ouvrir l'assistant de conception"
    link: "/tools/irrigation-design-wizard/"

############################# Funfacts ###############################
funfacts:
  enable: false
---
