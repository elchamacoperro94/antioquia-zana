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

  // Section Headers
  hdr_about_badge: string;
  hdr_about_title: string;
  hdr_about_subtitle: string;

  hdr_obj_badge: string;
  hdr_obj_title: string;
  hdr_obj_subtitle: string;
  hdr_obj_general_tag: string;
  hdr_obj_general_text: string;

  hdr_act_badge: string;
  hdr_act_title: string;
  hdr_act_subtitle: string;
  act_filter_all: string;
  act_deliverables_title: string;
  act_photos_title: string;
  act_article_tag: string;
  act_article_desc: string;

  hdr_prod_badge: string;
  hdr_prod_title: string;
  hdr_prod_subtitle: string;
  prod_trl_banner_title: string;
  prod_trl_banner_desc: string;
  prod_btn_details: string;

  hdr_res_badge: string;
  hdr_res_title: string;
  hdr_res_subtitle: string;

  hdr_stu_badge: string;
  hdr_stu_title: string;
  hdr_stu_subtitle: string;

  hdr_gal_badge: string;
  hdr_gal_title: string;
  hdr_gal_subtitle: string;

  hdr_part_badge: string;
  hdr_part_title: string;
  hdr_part_subtitle: string;

  hdr_pub_badge: string;
  hdr_pub_title: string;
  hdr_pub_subtitle: string;
  pub_btn_read: string;

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
    // Navigation
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

    // Hero
    hero_bpin: "SGR BPIN 2020000100192",
    hero_title_accent: "ANTIOQUIA ZANA",
    hero_project_title: "Fortalecimiento de la cadena productiva de la zanahoria mediante la creación de prototipos de productos innovadores en el oriente del departamento de Antioquia",
    hero_scroll_down: "Conocer el Proyecto",

    // About
    hdr_about_badge: "Generalidades del Proyecto",
    hdr_about_title: "Contexto, Retos y Alianza Interinstitucional",
    hdr_about_subtitle: "Estrategia integral de investigación, ciencia aplicada y apropiación social del conocimiento para el desarrollo bioeconómico.",

    // Objectives
    hdr_obj_badge: "Objetivos Oficiales MGA",
    hdr_obj_title: "Formulación Literal de Objetivos (BPIN 2020000100192)",
    hdr_obj_subtitle: "Formulación científica e institucional del documento técnico oficial del proyecto para el Oriente Antioqueño.",
    hdr_obj_general_tag: "Objetivo General",
    hdr_obj_general_text: "Aumentar la tecnificación agroindustrial del sistema de producción de zanahoria en el Oriente Antioqueño.",

    // Activities
    hdr_act_badge: "Ruta de Ejecución",
    hdr_act_title: "14 Actividades de Investigación & Desarrollo",
    hdr_act_subtitle: "Monitoreo detallado de entregables, transferencias de tecnología, artículos científicos y evidencias.",
    act_filter_all: "Todas las 14 Actividades",
    act_deliverables_title: "📁 Entregables & Productos Descargables:",
    act_photos_title: "📸 Evidencias de Campo y Laboratorio:",
    act_article_tag: "Artículo Científico Publicable Asociado",
    act_article_desc: "Resultados estandarizados del bioingrediente disponibles para consulta y descarga pública.",

    // Products
    hdr_prod_badge: "Prototipos Agroindustriales",
    hdr_prod_title: "5 Prototipos Desarrollados (TRL 6 - TRL 7)",
    hdr_prod_subtitle: "3 prototipos para la industria alimentaria y 2 bioingredientes para la industria farmacéutica y cosmética desarrollados mediante tecnologías limpias.",
    prod_trl_banner_title: "Nivel TRL 6 – 7",
    prod_trl_banner_desc: "Los 5 desarrollos tecnológicos alcanzaron un nivel de madurez TRL 6 a TRL 7 (Validación de prototipos en entorno operacional y escalamiento a nivel de planta piloto en el Oriente Antioqueño).",
    prod_btn_details: "Ver Ficha Técnica Completa",

    // Results
    hdr_res_badge: "Indicadores de Impacto",
    hdr_res_title: "Resultados & Cifras Clave del Proyecto",
    hdr_res_subtitle: "Consolidado técnico de transferencias, publicaciones, caracterización varietal e impacto en la cadena de valor.",

    // Students
    hdr_stu_badge: "Formación de Talento Humano",
    hdr_stu_title: "Tesis & Talento Científico Formado",
    hdr_stu_subtitle: "Jóvenes investigadores y tesistas de maestría y doctorado vinculados al desarrollo de la iniciativa.",

    // Gallery
    hdr_gal_badge: "Evidencia Fotográfica",
    hdr_gal_title: "Galería del Proyecto",
    hdr_gal_subtitle: "Registros fotográficos de jornadas de campo, plantas piloto, caracterización en laboratorio y apropiación social.",

    // Partners
    hdr_part_badge: "Alianza Estratégica",
    hdr_part_title: "Entidades Ejecutoras y Coejecutoras",
    hdr_part_subtitle: "Alianza público-privada y académica para el fortalecimiento de la cadena de valor de la zanahoria.",

    // Publications
    hdr_pub_badge: "Publicaciones",
    hdr_pub_title: "Colección Antioquia Zana: Nuestras Obras Destacadas",
    hdr_pub_subtitle: "Publicaciones científicas, libros de investigación y manuales técnicos desarrollados en el marco del proyecto para el desarrollo agroindustrial del Oriente Antioqueño.",
    pub_btn_read: "Leer Publicación Oficial",

    // Contact
    hdr_con_badge: "Contacto Oficial",
    hdr_con_title: "Canales Institucionales de Contacto",
    hdr_con_subtitle: "Comuníquese directamente con la dirección del proyecto o la línea de atención oficial de AGROSAVIA.",
    con_bpin_title: "Resumen Ficha Técnica BPIN",
    con_btn_email: "Enviar Correo Electrónico Oficial",

    // Footer
    foot_desc: "Proyecto de Ciencia, Tecnología e Innovación para el fortalecimiento de la cadena agroindustrial de la zanahoria en el Oriente Antioqueño.",
    foot_bpin_label: "Fondo CTI · Sistema General de Regalías",
    foot_rights: "Todos los derechos reservados. AGROSAVIA & Entidades Coejecutoras."
  },
  en: {
    // Navigation
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

    // Hero
    hero_bpin: "SGR BPIN 2020000100192",
    hero_title_accent: "ANTIOQUIA ZANA",
    hero_project_title: "Strengthening the carrot production chain through the creation of innovative product prototypes in Eastern Antioquia",
    hero_scroll_down: "Explore Project",

    // About
    hdr_about_badge: "Project Overview",
    hdr_about_title: "Context, Challenges & Inter-institutional Alliance",
    hdr_about_subtitle: "Comprehensive strategy of research, applied science, and social knowledge appropriation for bioeconomic development.",

    // Objectives
    hdr_obj_badge: "Official MGA Objectives",
    hdr_obj_title: "Literal Formulation of Objectives (BPIN 2020000100192)",
    hdr_obj_subtitle: "Scientific and institutional formulation of the official technical document for Eastern Antioquia.",
    hdr_obj_general_tag: "General Objective",
    hdr_obj_general_text: "Increase the agro-industrial technification of the carrot production system in Eastern Antioquia.",

    // Activities
    hdr_act_badge: "Execution Roadmap",
    hdr_act_title: "14 Research & Development Activities",
    hdr_act_subtitle: "Detailed monitoring of deliverables, technology transfers, scientific papers, and evidence.",
    act_filter_all: "All 14 Activities",
    act_deliverables_title: "📁 Deliverables & Downloadable Documents:",
    act_photos_title: "📸 Field and Laboratory Evidence:",
    act_article_tag: "Associated Publishable Scientific Article",
    act_article_desc: "Standardized bio-ingredient results available for public consultation and download.",

    // Products
    hdr_prod_badge: "Agro-Industrial Prototypes",
    hdr_prod_title: "5 Developed Prototypes (TRL 6 - TRL 7)",
    hdr_prod_subtitle: "3 prototypes for the food industry and 2 bio-ingredients for the pharmaceutical/cosmetic industry developed using clean technologies.",
    prod_trl_banner_title: "TRL Level 6 – 7",
    prod_trl_banner_desc: "All 5 technological developments reached a maturity level of TRL 6 to TRL 7 (Prototype validation in operational environment and pilot plant scale in Eastern Antioquia).",
    prod_btn_details: "View Full Technical Datasheet",

    // Results
    hdr_res_badge: "Impact Indicators",
    hdr_res_title: "Key Project Results & Figures",
    hdr_res_subtitle: "Technical consolidation of transfers, publications, varietal characterization, and value chain impact.",

    // Students
    hdr_stu_badge: "Human Talent Training",
    hdr_stu_title: "Theses & Formed Scientific Talent",
    hdr_stu_subtitle: "Young researchers and master's/doctoral students linked to the project's development.",

    // Gallery
    hdr_gal_badge: "Photographic Evidence",
    hdr_gal_title: "Project Gallery",
    hdr_gal_subtitle: "Photographic records of field days, pilot plants, laboratory characterization, and social appropriation.",

    // Partners
    hdr_part_badge: "Strategic Alliance",
    hdr_part_title: "Executing and Co-executing Entities",
    hdr_part_subtitle: "Public-private and academic alliance for the strengthening of the carrot value chain.",

    // Publications
    hdr_pub_badge: "Publications",
    hdr_pub_title: "Antioquia Zana Collection: Featured Works",
    hdr_pub_subtitle: "Scientific publications, research books, and technical manuals developed within the project framework for Eastern Antioquia.",
    pub_btn_read: "Read Official Publication",

    // Contact
    hdr_con_badge: "Official Contact",
    hdr_con_title: "Institutional Contact Channels",
    hdr_con_subtitle: "Contact project leadership directly or through AGROSAVIA's official customer service channel.",
    con_bpin_title: "BPIN Technical Datasheet Summary",
    con_btn_email: "Send Official Email",

    // Footer
    foot_desc: "Science, Technology, and Innovation project for strengthening the carrot agro-industrial chain in Eastern Antioquia.",
    foot_bpin_label: "CTI Fund · General Royalty System (SGR)",
    foot_rights: "All rights reserved. AGROSAVIA & Co-executing Entities."
  }
};
