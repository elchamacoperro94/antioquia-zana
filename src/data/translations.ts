export interface ActivityTranslation {
  id: string;
  num: number;
  objId: string;
  name: string;
  description: string;
  hasArticle?: boolean;
  isSecret?: boolean;
}

export interface ProblemObjectiveTranslation {
  num: string;
  cause: string;
  objective: string;
  activities: string[];
}

export interface MetricTranslation {
  title: string;
  value: string;
  subtext: string;
  desc: string;
}

export interface FeaturedDocTranslation {
  type: string;
  title: string;
  desc: string;
  link: string;
  badge: string;
  coverImage: string;
}

export interface TranslationSchema {
  // Navigation
  nav_inicio: string;
  nav_objetivos: string;
  nav_actividades: string;
  nav_productos: string;
  nav_resultados: string;
  nav_estudiantes: string;
  nav_galeria: string;
  nav_aliados: string;
  nav_contacto: string;
  lang_toggle: string;
  lang_switch_tooltip: string;

  // Hero
  hero_bpin: string;
  hero_title_accent: string;
  hero_project_title: string;
  hero_scroll_down: string;

  // About
  hdr_about_badge: string;
  hdr_about_title: string;
  hdr_about_subtitle: string;
  about_metrics_title: string;
  about_problems_title: string;
  about_problems_subtitle: string;
  about_cause_label: string;
  about_objective_label: string;
  about_activities_label: string;
  about_team_title: string;
  about_team_subtitle: string;
  about_tree_btn: string;

  // Objectives
  hdr_obj_badge: string;
  hdr_obj_title: string;
  hdr_obj_subtitle: string;
  hdr_obj_general_tag: string;
  hdr_obj_general_text: string;

  // Activities
  hdr_act_badge: string;
  hdr_act_title: string;
  hdr_act_subtitle: string;
  act_filter_all: string;
  act_method_summary: string;
  act_deliverables_title: string;
  act_photos_title: string;
  act_article_tag: string;
  act_article_desc: string;
  act_secret_notice_title: string;
  act_secret_notice_desc: string;

  // Products & Modal
  hdr_prod_badge: string;
  hdr_prod_title: string;
  hdr_prod_subtitle: string;
  prod_trl_banner_title: string;
  prod_trl_banner_desc: string;
  prod_btn_details: string;
  modal_proto_id: string;
  modal_process_tech: string;
  modal_scientific_formula: string;
  modal_proto_desc: string;
  modal_tech_specs: string;
  modal_btn_download: string;
  modal_btn_transfer: string;

  // Results
  hdr_res_badge: string;
  hdr_res_title: string;
  hdr_res_subtitle: string;

  // Students
  hdr_stu_badge: string;
  hdr_stu_title: string;
  hdr_stu_subtitle: string;

  // Gallery
  hdr_gal_badge: string;
  hdr_gal_title: string;
  hdr_gal_subtitle: string;

  // Partners
  hdr_part_badge: string;
  hdr_part_title: string;
  hdr_part_subtitle: string;

  // Publications
  hdr_pub_badge: string;
  hdr_pub_title: string;
  hdr_pub_subtitle: string;
  pub_btn_read: string;

  // Featured Docs (Contact)
  hdr_feat_badge: string;
  hdr_feat_title: string;
  hdr_feat_subtitle: string;

  // Contact
  hdr_con_badge: string;
  hdr_con_title: string;
  hdr_con_subtitle: string;
  con_bpin_title: string;
  con_btn_email: string;

  // Footer
  foot_desc: string;
  foot_bpin_label: string;
  foot_rights: string;
}

export const translations: Record<'es' | 'en', TranslationSchema> = {
  es: {
    nav_inicio: "Inicio",
    nav_objetivos: "Objetivos",
    nav_actividades: "Actividades",
    nav_productos: "Productos",
    nav_resultados: "Resultados",
    nav_estudiantes: "Estudiantes",
    nav_galeria: "Galería",
    nav_aliados: "Aliados",
    nav_contacto: "Contacto",
    lang_toggle: "ES",
    lang_switch_tooltip: "Cambiar idioma a Inglés",

    hero_bpin: "SGR BPIN 2020000100192",
    hero_title_accent: "ANTIOQUIA ZANA",
    hero_project_title: "Fortalecimiento de la cadena productiva de la zanahoria mediante la creación de prototipos de productos innovadores en el oriente del departamento de Antioquia",
    hero_scroll_down: "Conocer el Proyecto",

    hdr_about_badge: "Generalidades del Proyecto",
    hdr_about_title: "Contexto, Retos y Alianza Interinstitucional",
    hdr_about_subtitle: "Estrategia integral de investigación, ciencia aplicada y apropiación social del conocimiento para el desarrollo bioeconómico.",
    about_metrics_title: "Cifras de Impacto y Logros Consolidados",
    about_problems_title: "Los 4 Desafíos y Objetivos del Proyecto",
    about_problems_subtitle: "Matriz integral de causas identificadas, soluciones científicas y actividades de desarrollo.",
    about_cause_label: "Desafío / Causa Identificada:",
    about_objective_label: "Solución / Objetivo Específico:",
    about_activities_label: "Actividades de Desarrollo Vinculadas:",
    about_team_title: "Equipo de Investigación Interinstitucional",
    about_team_subtitle: "Científicos, docentes y tesistas que hicieron posible el desarrollo del proyecto.",
    about_tree_btn: "Ver Árbol de Problemas y Objetivos (Metodología MGA)",

    hdr_obj_badge: "Objetivos Oficiales MGA",
    hdr_obj_title: "Formulación Literal de Objetivos (BPIN 2020000100192)",
    hdr_obj_subtitle: "Formulación científica e institucional del documento técnico oficial del proyecto para el Oriente Antioqueño.",
    hdr_obj_general_tag: "Objetivo General",
    hdr_obj_general_text: "Aumentar la tecnificación agroindustrial del sistema de producción de zanahoria en el Oriente Antioqueño.",

    hdr_act_badge: "Ruta de Ejecución",
    hdr_act_title: "14 Actividades de Investigación & Desarrollo",
    hdr_act_subtitle: "Monitoreo detallado de entregables, transferencias de tecnología, artículos científicos y evidencias.",
    act_filter_all: "Todas las 14 Actividades",
    act_method_summary: "Resumen Metodológico:",
    act_deliverables_title: "📁 Entregables & Productos Descargables:",
    act_photos_title: "📸 Evidencias de Campo y Laboratorio:",
    act_article_tag: "Artículo Científico Publicable Asociado",
    act_article_desc: "Resultados estandarizados del bioingrediente disponibles para consulta y descarga pública.",
    act_secret_notice_title: "Aviso Legal de Secreto Empresarial (Protección Intelectual)",
    act_secret_notice_desc: "Los resultados analíticos, formulaciones e ingredientes nanotecnológicos de esta actividad están protegidos bajo la figura de Secreto Empresarial. Para solicitar información adicional o convenios de transferencia tecnológica, por favor contactar a la OTRI Universidad de Antioquia (otri@udea.co) y al Grupo de Sustancias Bioactivas.",

    hdr_prod_badge: "Prototipos Agroindustriales",
    hdr_prod_title: "5 Prototipos Desarrollados (TRL 6 - TRL 7)",
    hdr_prod_subtitle: "3 prototipos para la industria alimentaria y 2 bioingredientes para la industria farmacéutica y cosmética desarrollados mediante tecnologías limpias.",
    prod_trl_banner_title: "Nivel TRL 6 – 7",
    prod_trl_banner_desc: "Los 5 desarrollos tecnológicos alcanzaron un nivel de madurez TRL 6 a TRL 7 (Validación de prototipos en entorno operacional y escalamiento a nivel de planta piloto en el Oriente Antioqueño).",
    prod_btn_details: "Ver Ficha Técnica Completa",
    modal_proto_id: "ID PROTOTIPO",
    modal_process_tech: "Tecnología de Proceso",
    modal_scientific_formula: "Formulación Científica",
    modal_proto_desc: "Descripción del Prototipo",
    modal_tech_specs: "Especificaciones Técnicas",
    modal_btn_download: "Descargar Ficha Técnica Oficial (PDF)",
    modal_btn_transfer: "Solicitar Convenio de Transferencia Tecnológica",

    hdr_res_badge: "Indicadores de Impacto",
    hdr_res_title: "Resultados & Cifras Clave del Proyecto",
    hdr_res_subtitle: "Consolidado técnico de transferencias, publicaciones, caracterización varietal e impacto en la cadena de valor.",

    hdr_stu_badge: "Formación de Talento Humano",
    hdr_stu_title: "Tesis & Talento Científico Formado",
    hdr_stu_subtitle: "Jóvenes investigadores y tesistas de maestría y doctorado vinculados al desarrollo de la iniciativa.",

    hdr_gal_badge: "Evidencia Fotográfica",
    hdr_gal_title: "Galería del Proyecto",
    hdr_gal_subtitle: "Registros fotográficos de jornadas de campo, plantas piloto, caracterización en laboratorio y apropiación social.",

    hdr_part_badge: "Alianza Estratégica",
    hdr_part_title: "Entidades Ejecutoras y Coejecutoras",
    hdr_part_subtitle: "Alianza público-privada y académica para el fortalecimiento de la cadena de valor de la zanahoria.",

    hdr_pub_badge: "Publicaciones",
    hdr_pub_title: "Colección Antioquia Zana: Nuestras Obras Destacadas",
    hdr_pub_subtitle: "Publicaciones científicas, libros de investigación y manuales técnicos desarrollados en el marco del proyecto para el desarrollo agroindustrial del Oriente Antioqueño.",
    pub_btn_read: "Leer Publicación Oficial",

    hdr_feat_badge: "Divulgación & Material Destacado",
    hdr_feat_title: "Historieta Ilustrada y Recetario Agroindustrial",
    hdr_feat_subtitle: "Publicaciones principales de divulgación científica y gastronómica del proyecto Antioquia Zana.",

    hdr_con_badge: "Contacto Oficial",
    hdr_con_title: "Canales Institucionales de Contacto",
    hdr_con_subtitle: "Comuníquese directamente con la dirección del proyecto o la línea de atención oficial de AGROSAVIA.",
    con_bpin_title: "Resumen Ficha Técnica BPIN",
    con_btn_email: "Enviar Correo Electrónico Oficial",

    foot_desc: "Proyecto de Ciencia, Tecnología e Innovación para el fortalecimiento de la cadena agroindustrial de la zanahoria en el Oriente Antioqueño.",
    foot_bpin_label: "Fondo CTI · Sistema General de Regalías",
    foot_rights: "Todos los derechos reservados. AGROSAVIA & Entidades Coejecutoras."
  },
  en: {
    nav_inicio: "Home",
    nav_objetivos: "Objectives",
    nav_actividades: "Activities",
    nav_productos: "Products",
    nav_resultados: "Results",
    nav_estudiantes: "Students",
    nav_galeria: "Gallery",
    nav_aliados: "Partners",
    nav_contacto: "Contact",
    lang_toggle: "EN",
    lang_switch_tooltip: "Switch language to Spanish",

    hero_bpin: "SGR BPIN 2020000100192",
    hero_title_accent: "ANTIOQUIA ZANA",
    hero_project_title: "Strengthening the carrot production chain through the creation of innovative product prototypes in Eastern Antioquia",
    hero_scroll_down: "Explore Project",

    hdr_about_badge: "Project Overview",
    hdr_about_title: "Context, Challenges & Inter-institutional Alliance",
    hdr_about_subtitle: "Comprehensive strategy of research, applied science, and social knowledge appropriation for bioeconomic development.",
    about_metrics_title: "Impact Figures and Consolidated Achievements",
    about_problems_title: "The 4 Project Challenges & Objectives",
    about_problems_subtitle: "Comprehensive matrix of identified causes, scientific solutions, and development activities.",
    about_cause_label: "Identified Challenge / Cause:",
    about_objective_label: "Scientific Solution / Specific Objective:",
    about_activities_label: "Linked Development Activities:",
    about_team_title: "Inter-institutional Research Team",
    about_team_subtitle: "Scientists, faculty members, and thesis researchers who made this project possible.",
    about_tree_btn: "View Problem & Objective Tree (MGA Methodology)",

    hdr_obj_badge: "Official MGA Objectives",
    hdr_obj_title: "Literal Formulation of Objectives (BPIN 2020000100192)",
    hdr_obj_subtitle: "Scientific and institutional formulation of the official technical document for Eastern Antioquia.",
    hdr_obj_general_tag: "General Objective",
    hdr_obj_general_text: "Increase the agro-industrial technification of the carrot production system in Eastern Antioquia.",

    hdr_act_badge: "Execution Roadmap",
    hdr_act_title: "14 Research & Development Activities",
    hdr_act_subtitle: "Detailed monitoring of deliverables, technology transfers, scientific papers, and evidence.",
    act_filter_all: "All 14 Activities",
    act_method_summary: "Methodological Summary:",
    act_deliverables_title: "📁 Deliverables & Downloadable Documents:",
    act_photos_title: "📸 Field and Laboratory Evidence:",
    act_article_tag: "Associated Publishable Scientific Article",
    act_article_desc: "Standardized bio-ingredient results available for public consultation and download.",
    act_secret_notice_title: "Legal Notice: Trade Secret (Intellectual Property Protection)",
    act_secret_notice_desc: "Analytical results, formulations, and nanotechnological ingredients of this activity are protected under Trade Secret status. To request additional information or technology transfer agreements, please contact the UdeA Technology Transfer Office (OTRI Universidad de Antioquia, otri@udea.co) and the Bioactive Substances Research Group.",

    hdr_prod_badge: "Agro-Industrial Prototypes",
    hdr_prod_title: "5 Developed Prototypes (TRL 6 - TRL 7)",
    hdr_prod_subtitle: "3 prototypes for the food industry and 2 bio-ingredients for the pharmaceutical/cosmetic industry developed using clean technologies.",
    prod_trl_banner_title: "TRL Level 6 – 7",
    prod_trl_banner_desc: "All 5 technological developments reached a maturity level of TRL 6 to TRL 7 (Prototype validation in operational environment and pilot plant scale in Eastern Antioquia).",
    prod_btn_details: "View Full Technical Datasheet",
    modal_proto_id: "PROTOTYPE ID",
    modal_process_tech: "Process Technology",
    modal_scientific_formula: "Scientific Formulation",
    modal_proto_desc: "Prototype Description",
    modal_tech_specs: "Technical Specifications",
    modal_btn_download: "Download Official Technical Datasheet (PDF)",
    modal_btn_transfer: "Request Technology Transfer Agreement",

    hdr_res_badge: "Impact Indicators",
    hdr_res_title: "Key Project Results & Figures",
    hdr_res_subtitle: "Technical consolidation of transfers, publications, varietal characterization, and value chain impact.",

    hdr_stu_badge: "Human Talent Training",
    hdr_stu_title: "Theses & Formed Scientific Talent",
    hdr_stu_subtitle: "Young researchers and master's/doctoral students linked to the project's development.",

    hdr_gal_badge: "Photographic Evidence",
    hdr_gal_title: "Project Gallery",
    hdr_gal_subtitle: "Photographic records of field days, pilot plants, laboratory characterization, and social appropriation.",

    hdr_part_badge: "Strategic Alliance",
    hdr_part_title: "Executing and Co-executing Entities",
    hdr_part_subtitle: "Public-private and academic alliance for the strengthening of the carrot value chain.",

    hdr_pub_badge: "Publications",
    hdr_pub_title: "Antioquia Zana Collection: Featured Works",
    hdr_pub_subtitle: "Scientific publications, research books, and technical manuals developed within the project framework for Eastern Antioquia.",
    pub_btn_read: "Read Official Publication",

    hdr_feat_badge: "Outreach & Featured Material",
    hdr_feat_title: "Illustrated Comic Book & Agro-industrial Recipe Book",
    hdr_feat_subtitle: "Main scientific and gastronomic outreach publications of the Antioquia Zana project.",

    hdr_con_badge: "Official Contact",
    hdr_con_title: "Institutional Contact Channels",
    hdr_con_subtitle: "Contact project leadership directly or through AGROSAVIA's official customer service channel.",
    con_bpin_title: "BPIN Technical Datasheet Summary",
    con_btn_email: "Send Official Email",

    foot_desc: "Science, Technology, and Innovation project for strengthening the carrot agro-industrial chain in Eastern Antioquia.",
    foot_bpin_label: "CTI Fund · General Royalty System (SGR)",
    foot_rights: "All rights reserved. AGROSAVIA & Co-executing Entities."
  }
};

export const featuredDocsData: Record<'es' | 'en', FeaturedDocTranslation[]> = {
  es: [
    {
      type: 'Historieta & Cartilla Ilustrada',
      title: 'La Huerta del Saber: El superpoder de la diferencia',
      desc: 'Cartilla didáctica e ilustrada (N° 3) sobre la ruta de innovación, agrobiodiversidad y aprendizajes territoriales en la cadena de valor de la zanahoria.',
      link: 'https://editorial.agrosavia.co/index.php/publicaciones/catalog/book/541',
      badge: 'Editorial AGROSAVIA',
      coverImage: '/la-huerta-del-saber-portada.png'
    },
    {
      type: 'Libro de Investigación & Bioeconomía',
      title: '¿Esta Zanahoria Pa\' qué? Rutas de innovación para la zanahoria',
      desc: 'Obra científica que profundiza en las rutas de innovación para la zanahoria y la conexión entre la bioeconomía y la agroindustria en el Oriente antioqueño.',
      link: 'https://repositorio.uco.edu.co/items/faf7692d-0483-4cf8-9cc9-cc88179c5a19',
      badge: 'Repositorio UCO',
      coverImage: '/esta-zanahoria-pa-que-portada.jpg'
    }
  ],
  en: [
    {
      type: 'Illustrated Comic & Booklet',
      title: 'The Orchard of Knowledge: The Superpower of Difference',
      desc: 'Educational illustrated booklet (No. 3) on the innovation route, agrobiodiversity, and territorial learning in the carrot value chain.',
      link: 'https://editorial.agrosavia.co/index.php/publicaciones/catalog/book/541',
      badge: 'AGROSAVIA Editorial',
      coverImage: '/la-huerta-del-saber-portada.png'
    },
    {
      type: 'Research & Bioeconomy Book',
      title: 'This Carrot For What? Innovation routes for carrots',
      desc: 'Scientific work exploring innovation paths for carrots and the connection between bioeconomy and agro-industry in Eastern Antioquia.',
      link: 'https://repositorio.uco.edu.co/items/faf7692d-0483-4cf8-9cc9-cc88179c5a19',
      badge: 'UCO Repository',
      coverImage: '/esta-zanahoria-pa-que-portada.jpg'
    }
  ]
};

export const activitiesDataMap: Record<'es' | 'en', ActivityTranslation[]> = {
  es: [
    {
      id: "ACT-01",
      num: 1,
      objId: "OBJ-01",
      name: "1. Estimación de los volúmenes de producción no utilizados y evaluación agronómica de cultivares promisorios de zanahoria.",
      description: "Establecimiento de un lote experimental en el Centro de Investigación La Selva para evaluar el desarrollo y velocidad de emisión foliar de cultivares como Bangor F1 y Deep Purple F1, junto con un diagnóstico fitosanitario de hongos (Alternaria spp., Sclerotium rolfsii, Ilyonectria radicicola) y nematodos (Meloidogyne spp., Pratylenchus spp.) en 24 fincas de Marinilla y El Santuario."
    },
    {
      id: "ACT-02",
      num: 2,
      objId: "OBJ-01",
      name: "2. Determinación de las huellas espectrales asociadas a potencialidades biofuncionales de los excedentes y nuevos materiales de zanahoria.",
      description: "Establecimiento de una parcela experimental a 2.600 msnm para monitoreo espacial mediante vuelos de dron con sensor multiespectral de cinco bandas (NDVI), complementado con la determinación no destructiva de firmas espectrales (350-1900 nm) en 240 raíces en laboratorio y calibración de modelos PLSR y RandomForest para predecir azúcares y β-caroteno."
    },
    {
      id: "ACT-03",
      num: 3,
      objId: "OBJ-01",
      name: "3. Caracterización física, química, fisicoquímica y sensorial de los excedentes y nuevos materiales de zanahoria.",
      description: "Evaluación en laboratorio de parámetros biométricos (longitud, diámetro), fisicoquímicos (°Brix, acidez titulable, pH, materia seca) y biofuncionales (fenoles totales, capacidad antioxidante DPPH/FRAP y HPLC-DAD de β-carotenos y luteína) en cultivares morados y anaranjados, junto con un perfil sensorial descriptivo cuantitativo con panel entrenado."
    },
    {
      id: "ACT-04",
      num: 4,
      objId: "OBJ-02",
      name: "4. Priorización de las tecnologías para transformación de productos según normativas y adaptabilidad al entorno.",
      description: "Mapeo tecnológico y normativo (resoluciones INVIMA y Codex Alimentarius) para seleccionar tecnologías limpias no térmicas aplicables a la transformación de zanahoria de descarte, priorizando cavitación hidrotermodinámica (CHTD), concentración al vacío y deshidratación convectiva con control de actividad de agua (aw)."
    },
    {
      id: "ACT-05",
      num: 5,
      objId: "OBJ-02",
      name: "5. Generación y prototipados de productos alimenticios sólidos, semisólidos y líquidos.",
      description: "Formulación, optimización y manufactura a escala piloto de tres matrices alimentarias con zanahoria: 1) Puré biofuncional cavitado sin azúcar añadida (ZanaPure), 2) Gomas masticables fortificadas con vitaminas y minerales, y 3) Suplemento deshidratado de alta palatabilidad para mascotas caninas (ZanaPet)."
    },
    {
      id: "ACT-06",
      num: 6,
      objId: "OBJ-02",
      name: "6. Estimar y comunicar los aspectos biofuncionales, sensoriales y de vida útil diferenciadores de los prototipos alimentarios generados.",
      description: "Estudios de estabilidad acelerada (temperatura y humedad relativa controladas), retención de carotenoides, evolución microbiológica y cinética de degradación en almacenamiento, complementados con pruebas de aceptabilidad con consumidores y paneles de palatabilidad canina para certificar vida útil superior a 6 meses."
    },
    {
      id: "ACT-07",
      num: 7,
      objId: "OBJ-03",
      name: "7. Evaluación de tecnologías para obtención de un extracto rico en apocarotenos con perspectiva farmacéutica.",
      description: "Optimización de procesos de foto-oxidación catalizada (radiación UV combinada con reactivo Fenton H₂O₂/Fe²⁺) para la escisión controlada del betacaroteno de zanahoria hacia apocarotenoides de bajo peso molecular precursores de retinoides, operando bajo protocolo de Secreto Empresarial.",
      isSecret: true
    },
    {
      id: "ACT-08",
      num: 8,
      objId: "OBJ-03",
      name: "8. Desarrollo y caracterización de un ingrediente basado en fracciones ricas en carotenoides y apocarotenoides.",
      description: "Diseño y síntesis de nanotransportadores lipídicos estructurados (NLC, Nanostructured Lipid Carriers) con tamaño de partícula submicrónico (<400 nm) y potencial Z optimizado para encapsular, proteger de la luz y estabilizar los extractos bioactivos de zanahoria para uso tópico.",
      hasArticle: true
    },
    {
      id: "ACT-09",
      num: 9,
      objId: "OBJ-03",
      name: "9. Determinación de las características de estabilidad, antienvejecimiento, penetrabilidad y seguridad del ingrediente diseñado.",
      description: "Batería de ensayos preclínicos de bioseguridad in-vitro siguiendo guías OCDE (citotoxicidad 3T3, fototoxicidad 3T3 NRU OCDE 432, irritación dérmica OCDE 439 y permeación en celdas de Franz), además de cuantificación de actividad antioxidante intracelular frente a especies reactivas de oxígeno (ROS).",
      isSecret: true
    },
    {
      id: "ACT-10",
      num: 10,
      objId: "OBJ-03",
      name: "10. Prototipado y escalado de la tecnología para fabricación del ingrediente diseñado.",
      description: "Desarrollo y manufactura de una emulsión dermocosmética antienvejecimiento (Aurum Carota) formulada con el bioingrediente NLC a nivel de planta piloto semi-industrial, con validación de reología, textura, compatibilidad de envases y protocolo de manufactura reproducible.",
      isSecret: true
    },
    {
      id: "ACT-11",
      num: 11,
      objId: "OBJ-04",
      name: "11. Levantamiento de la cadena de valor y oportunidades de mercado.",
      description: "Caracterización socioeconómica y agronómica de los actores de la cadena de zanahoria en Marinilla, El Santuario y Bojacá; análisis de costos de producción, canales de comercialización mayorista/minorista y cuantificación económica del impacto del descarte en finca."
    },
    {
      id: "ACT-12",
      num: 12,
      objId: "OBJ-04",
      name: "12. Desarrollo de los modelos de negocios, Brief y planes de negocios.",
      description: "Estructuración de modelos de negocio Canvas, matrices de costeo, análisis de viabilidad financiera (VAN, TIR) y planes de internacionalización para los productos desarrollados, incluyendo el plan de exportación de gomas funcionales para mascotas con destino a Bélgica."
    },
    {
      id: "ACT-13",
      num: 13,
      objId: "OBJ-04",
      name: "13. Desarrollo conceptual de los productos y divulgación.",
      description: "Diseño de identidad de marca, empaques, etiquetado normativo y conceptualización comercial de ZanaPure, ZanaPet y Aurum Carota; publicación del libro 'Esta Zanahoria Pa' Qué' y manuales didácticos de emprendimiento agroindustrial."
    },
    {
      id: "ACT-14",
      num: 14,
      objId: "OBJ-04",
      name: "14. Fortalecimiento de gobernanza de las cadenas de valor de los productos generados.",
      description: "Talleres participativos de gobernanza con productores, asociaciones campesinas y comités locales; articulación institucional para la creación de la red de valor de la zanahoria y realización del festival gastronómico y científico 'ZanaFest'."
    }
  ],
  en: [
    {
      id: "ACT-01",
      num: 1,
      objId: "OBJ-01",
      name: "1. Estimation of unused production volumes and agronomic evaluation of promising carrot cultivars.",
      description: "Establishment of an experimental field plot at La Selva Research Center to evaluate leaf emission and growth dynamics of cultivars such as Bangor F1 and Deep Purple F1, alongside phytosanitary diagnosis of fungi (Alternaria spp., Sclerotium rolfsii, Ilyonectria radicicola) and nematodes (Meloidogyne spp., Pratylenchus spp.) across 24 farms in Marinilla and El Santuario."
    },
    {
      id: "ACT-02",
      num: 2,
      objId: "OBJ-01",
      name: "2. Determination of spectral signatures associated with biofunctional potentials of carrot surpluses and new materials.",
      description: "Establishment of an experimental plot at 2,600 m.a.s.l. for spatial monitoring via drone flights equipped with a five-band multispectral sensor (NDVI), complemented by non-destructive determination of spectral signatures (350-1900 nm) on 240 roots in laboratory and calibration of PLSR and RandomForest models to predict sugars and β-carotene."
    },
    {
      id: "ACT-03",
      num: 3,
      objId: "OBJ-01",
      name: "3. Physical, chemical, physicochemical, and sensory characterization of carrot surpluses and new materials.",
      description: "Laboratory evaluation of biometric (length, diameter), physicochemical (°Brix, titratable acidity, pH, dry matter), and biofunctional parameters (total phenols, DPPH/FRAP antioxidant capacity, and HPLC-DAD for β-carotenes and lutein) in purple and orange cultivars, alongside a quantitative descriptive sensory profile conducted by a trained panel."
    },
    {
      id: "ACT-04",
      num: 4,
      objId: "OBJ-02",
      name: "4. Technology prioritization for product transformation according to regulations and environmental adaptability.",
      description: "Technological and regulatory mapping (INVIMA and Codex Alimentarius standards) to select clean non-thermal technologies applicable to discard carrot transformation, prioritizing hydrothermodynamic cavitation (CHTD), vacuum concentration, and convective dehydration with water activity (aw) control."
    },
    {
      id: "ACT-05",
      num: 5,
      objId: "OBJ-02",
      name: "5. Generation and prototyping of solid, semi-solid, and liquid food products.",
      description: "Formulation, optimization, and pilot-scale manufacturing of three carrot food matrices: 1) Cavitated biofunctional puree with no added sugar (ZanaPure), 2) Vitamin- and mineral-fortified chewable gummies, and 3) Highly palatable dehydrated dietary supplement for canine pets (ZanaPet)."
    },
    {
      id: "ACT-06",
      num: 6,
      objId: "OBJ-02",
      name: "6. Estimation and dissemination of distinguishing biofunctional, sensory, and shelf-life aspects of generated food prototypes.",
      description: "Accelerated stability studies (controlled temperature and relative humidity), carotenoid retention, microbiological evolution, and storage degradation kinetics, complemented by consumer acceptability tests and canine palatability trials certifying a shelf life exceeding 6 months."
    },
    {
      id: "ACT-07",
      num: 7,
      objId: "OBJ-03",
      name: "7. Technology evaluation for obtaining an apocarotenoid-rich extract with pharmaceutical potential.",
      description: "Optimization of catalyzed photo-oxidation processes (UV radiation combined with Fenton's reagent H₂O₂/Fe²⁺) for controlled cleavage of carrot beta-carotene into low molecular weight apocarotenoids and retinoid precursors, operating under Trade Secret protocol.",
      isSecret: true
    },
    {
      id: "ACT-08",
      num: 8,
      objId: "OBJ-03",
      name: "8. Development and characterization of an active ingredient based on carotenoid and apocarotenoid fractions.",
      description: "Design and synthesis of nanostructured lipid carriers (NLC) with submicron particle size (<400 nm) and optimized zeta potential to encapsulate, photoprotect, and stabilize bioactive carrot extracts for topical dermocosmetic use.",
      hasArticle: true
    },
    {
      id: "ACT-09",
      num: 9,
      objId: "OBJ-03",
      name: "9. Determination of stability, anti-aging, penetrability, and safety profiles of the designed ingredient.",
      description: "Battery of preclinical in-vitro biosafety tests following OECD guidelines (3T3 cytotoxicity, 3T3 NRU phototoxicity OECD 432, dermal irritation OECD 439, and Franz cell permeation assays), along with intracellular antioxidant activity quantification against reactive oxygen species (ROS).",
      isSecret: true
    },
    {
      id: "ACT-10",
      num: 10,
      objId: "OBJ-03",
      name: "10. Prototyping and technology scaling for manufacturing the designed cosmetic ingredient.",
      description: "Development and semi-industrial pilot plant manufacturing of an anti-aging facial cosmetic emulsion (Aurum Carota) formulated with the NLC bio-ingredient, validating rheology, texture, packaging compatibility, and reproducible manufacturing protocols.",
      isSecret: true
    },
    {
      id: "ACT-11",
      num: 11,
      objId: "OBJ-04",
      name: "11. Value chain mapping and identification of market opportunities.",
      description: "Socioeconomic and agronomic characterization of carrot value chain stakeholders in Marinilla, El Santuario, and Bojacá; production cost analysis, wholesale/retail distribution channels, and economic quantification of on-farm discard impact."
    },
    {
      id: "ACT-12",
      num: 12,
      objId: "OBJ-04",
      name: "12. Development of business models, product briefs, and commercialization plans.",
      description: "Structuring of Canvas business models, cost matrices, financial feasibility studies (NPV, IRR), and internationalization plans for the developed products, including the export plan for functional pet gummies to Belgium."
    },
    {
      id: "ACT-13",
      num: 13,
      objId: "OBJ-04",
      name: "13. Conceptual product development and scientific/commercial dissemination.",
      description: "Brand identity design, packaging, regulatory labeling, and commercial conceptualization of ZanaPure, ZanaPet, and Aurum Carota; publication of the book 'This Carrot For What?' and educational agro-industrial entrepreneurship manuals."
    },
    {
      id: "ACT-14",
      num: 14,
      objId: "OBJ-04",
      name: "14. Strengthening value chain governance for the developed agro-industrial products.",
      description: "Participatory governance workshops with farmers, agricultural associations, and local committees; institutional articulation for the carrot value network and realization of the 'ZanaFest' scientific and gastronomic festival."
    }
  ]
};
