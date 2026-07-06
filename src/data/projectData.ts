export interface ProjectMetadata {
  name: string;
  bpin: string;
  nit: string;
  executingEntity: string;
  principalInvestigator: string;
  piTitle: string;
  email: string;
  phone: string;
  location: string;
  period: string;
  funder: string;
  cropChain: string;
  researchGroups: string;
  totalResearchers: string;
  budgetTotal: string;
}

export interface RegionStat {
  value: string;
  label: string;
  detail: string;
}

export interface ObjectiveEntry {
  id: string;
  title: string;
  status: 'Completado' | 'Avanzado' | 'Pendiente';
  description: string;
  achievements: string[];
}

export interface ActivityEntry {
  id: string;
  phase: number;
  name: string;
  status: 'Completado' | 'Avanzado' | 'Pendiente';
  detail: string;
  description: string;
  keyFindings: string[];
}

export interface ProductEntry {
  id: string;
  name: string;
  type: 'Alimentaria' | 'Farmacéutica/Cosmética';
  tag: string;
  formulation: string;
  process: string;
  status: string;
  features: string[];
  description: string;
  accent: 'orange' | 'purple' | 'green';
}

export interface MilestoneEntry {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface PartnerEntry {
  name: string;
  shortName: string;
  role: string;
  description: string;
  activities: string[];
  website?: string;
  color: 'green' | 'blue' | 'amber' | 'red' | 'teal' | 'orange';
}

export const projectMetadata: ProjectMetadata = {
  name: "Antioquia Zana",
  bpin: "2020000100192",
  nit: "8001946003",
  executingEntity: "AGROSAVIA — Centro de Investigación La Selva, Rionegro",
  principalInvestigator: "Juan Camilo Henao Rojas",
  piTitle: "M.Sc. Food Engineering, Biotechnology emphasis",
  email: "jhenao@agrosavia.co",
  phone: "316 290 3251",
  location: "El Santuario, Marinilla, Rionegro, San Pedro de los Milagros, Antioquia, Colombia",
  period: "2022 — 2026",
  funder: "Regalías SGR — Fondo de Ciencia, Tecnología e Innovación (CTI)",
  cropChain: "Hortalizas (Vegetables)",
  researchGroups: "12 grupos reconocidos por Colciencias (5 A1, 2 A, 3 B, 3 C)",
  totalResearchers: "24 investigadores (9 PhD, 6 M.Sc., 9 B.Sc.)",
  budgetTotal: "$6.301 Millones COP"
};

export const regionStats: RegionStat[] = [
  { value: "600 ha", label: "Área Sembrada", detail: "Área productiva en el Oriente Antioqueño" },
  { value: "500+", label: "Productores", detail: "Pequeños agricultores beneficiados directamente" },
  { value: "46.827 t/año", label: "Volumen Anual", detail: "Producción promedio de zanahoria en la región" },
  { value: "25–30%", label: "Excedentes", detail: "Porcentaje de merma o descarte no comercializable" }
];

export const objectives: ObjectiveEntry[] = [
  {
    id: "OBJ-01",
    title: "Caracterización de Materias Primas",
    status: "Completado",
    description: "Establecer las propiedades fisicoquímicas, nutricionales y sensoriales de los excedentes y de los nuevos cultivares evaluados en la región.",
    achievements: [
      "Análisis exhaustivo de 117 muestras caracterizadas multicriterio.",
      "Identificación de huellas espectrales por NIRS para potencial biofuncional.",
      "Cuantificación de compuestos bioactivos (alfa y beta carotenos).",
      "Elaboración de catálogo de variedades promisorias y perfiles de uso."
    ]
  },
  {
    id: "OBJ-02",
    title: "Prototipos Alimentarios",
    status: "Avanzado",
    description: "Desarrollar prototipos de productos alimenticios sólidos, semisólidos y líquidos dirigidos a diferentes segmentos de mercado mediante tecnologías limpias.",
    achievements: [
      "Desarrollo de ZanaPure (compota infantil) con cavitación hidrotermodinámica (CHTD).",
      "Formulación final validada de ZanaPet para el mercado de mascotas.",
      "Lanzamiento experimental de Gomas Biofuncionales enriquecidas con micronutrientes.",
      "Validación sensorial y estimación de vida útil de prototipos."
    ]
  },
  {
    id: "OBJ-03",
    title: "Prototipos Farmacéuticos/Cosméticos",
    status: "Avanzado",
    description: "Diseñar y formular ingredientes ricos en carotenoides y apocarotenoides para la elaboración de productos cosméticos y fitoterapéuticos.",
    achievements: [
      "Extracción y purificación de apocarotenoides usando tecnologías UV + Fenton.",
      "Estabilización nanotecnológica en NLC (Nanostructured Lipid Carriers) <400nm.",
      "Evaluación dermatológica y toxicológica usando 4 protocolos OCDE.",
      "Desarrollo de la emulsión facial antienvejecimiento Aurum Carota."
    ]
  },
  {
    id: "OBJ-04",
    title: "Oportunidades de Mercado",
    status: "Completado",
    description: "Estructurar planes de negocio, encadenamientos productivos y estrategias de gobernanza para garantizar la transferencia de los prototipos desarrollados.",
    achievements: [
      "Levantamiento completo de la cadena de valor y cuantificación de excedentes.",
      "Diseño de 6 modelos de negocios específicos para los prototipos entregados.",
      "Capacitación de más de 190 productores y actores del sector.",
      "Elaboración de documentos de transferencia y articulación comercial."
    ]
  }
];

export const activities: ActivityEntry[] = [
  {
    id: "ACT-01",
    phase: 1,
    name: "Estimación de volúmenes e investigación agronómica",
    status: "Completado",
    detail: "Cuantificación de excedentes en campo y evaluación de cultivares.",
    description: "Realización de censos agrícolas en El Santuario y Marinilla para estimar las pérdidas poscosecha y evaluación del comportamiento agronómico de 14 cultivares promisorios.",
    keyFindings: [
      "Estimación de pérdidas en poscosecha del 25% al 30% de la producción total.",
      "Evaluación agronómica y caracterización fitosanitaria de 14 cultivares promisorios de zanahoria en El Santuario y Marinilla.",
      "Frecuencia de aplicación de insumos químicos para control foliar medida entre 2 y 15 veces por ciclo."
    ]
  },
  {
    id: "ACT-02",
    phase: 1,
    name: "Huellas espectrales y biofuncionales NIRS",
    status: "Completado",
    detail: "Desarrollo de modelos predictivos no destructivos.",
    description: "Determinación de las firmas espectrales de zanahorias frescas y procesadas para predecir concentraciones de carotenos de forma rápida y sin reactivos.",
    keyFindings: [
      "Modelado espectral NIRS calibrado para medición rápida no destructiva de azúcares y sólidos solubles (°Brix).",
      "Correlación espectral de compuestos funcionales en altitudes de 2.000 a 3.000 msnm y temperaturas de 16 a 21 °C.",
      "Estandarización de firmas ópticas para predecir concentraciones de provitamina A y carotenos en muestras frescas."
    ]
  },
  {
    id: "ACT-03",
    phase: 1,
    name: "Caracterización física y nutricional",
    status: "Completado",
    detail: "Análisis fisicoquímico completo de excedentes.",
    description: "Determinación de acidez, pH, sólidos solubles, fibra, azúcares y carotenoides totales en tipologías de descarte para establecer su aptitud industrial.",
    keyFindings: [
      "Caracterización de acidez, pH y azúcares de descarte realizada mediante centrifugación a 13.000 RPM durante 10 minutos.",
      "Desarrollo de métodos de extracción selectiva de carotenos usando disoluciones de etanol al 70%.",
      "Determinación de perfiles nutricionales completos (fibra soluble y compuestos bioactivos) de biomasa descartada."
    ]
  },
  {
    id: "ACT-04",
    phase: 1,
    name: "Priorización de tecnologías limpias",
    status: "Completado",
    detail: "Selección de cavitación e hidrólisis de descarte.",
    description: "Evaluación de tecnologías de transformación de bajo impacto ambiental con potencial de adaptación en el Oriente Antioqueño.",
    keyFindings: [
      "Mapeo de tendencias en Latinoamérica que identifica a las salsas, aderezos y alimentación animal como los principales usos industriales de excedentes.",
      "Priorización de cavitación e hidrólisis enzimática como las tecnologías de transformación con mayor viabilidad local.",
      "Evaluación de adaptabilidad tecnológica en el Oriente Antioqueño conforme a normativas Invima."
    ]
  },
  {
    id: "ACT-05",
    phase: 2,
    name: "Desarrollo de prototipos alimentarios",
    status: "Avanzado",
    detail: "Formulación de compota, snack de mascotas y gomas.",
    description: "Ensayos a escala piloto para definir fórmulas óptimas, balanceando sabor, valor nutricional y estabilidad microbiológica.",
    keyFindings: [
      "Preparación de disolución salina de peptona al 0.1% bajo norma UNE-EN-ISO 6887-1:2000.",
      "Evaluación microbiológica de prototipos sólidos, semisólidos y líquidos utilizando Plate Count Agar (PCA) de Merck.",
      "Pruebas piloto de digestión enzimática de caseína para enriquecimiento de nitrógeno en compotas y gomas."
    ]
  },
  {
    id: "ACT-06",
    phase: 2,
    name: "Evaluación biofuncional y sensorial",
    status: "Avanzado",
    detail: "Pruebas de vida útil y paneles de catadores.",
    description: "Caracterización sensorial con paneles entrenados y estudios de degradación de compuestos funcionales bajo diferentes condiciones de almacenamiento.",
    keyFindings: [
      "Diseño de empaques funcionales tipo doypack con válvula en presentaciones de 100g y 250g para ZanaPure.",
      "Ensayos de envasado a nivel de planta piloto realizados en las instalaciones de la Asociación Hortisanos.",
      "Establecimiento de vida útil y paneles de catadores entrenados para validación organoléptica."
    ]
  },
  {
    id: "ACT-07",
    phase: 3,
    name: "Obtención de extracto rico en apocarotenos",
    status: "Avanzado",
    detail: "Degradación controlada de betacaroteno.",
    description: "Diseño de un proceso foto-químico catalizado por Fenton para romper la molécula de betacaroteno y generar retinoides activos.",
    keyFindings: [
      "Desarrollo de método cromatográfico con mezcla de gradiente de isopropanol (IPA), acetonitrilo (ACN) y metanol.",
      "Adición de 100 ppm de Butilhidroxitolueno (BHT) como antioxidante para prevenir degradación de apocarotenos.",
      "Ajuste del flujo analítico a 0.7 mL/min para optimización de separación de retinoides activos."
    ]
  },
  {
    id: "ACT-08",
    phase: 3,
    name: "Formulación de ingrediente estabilizado",
    status: "Avanzado",
    detail: "Encapsulación lipídica del extracto activo.",
    description: "Uso de homogenización de alta presión para dispersar el extracto en portadores lipídicos nanoestructurados (NLC) con manteca de cacao.",
    keyFindings: [
      "Establecimiento de volumen de inyección analítica de 5 μL en cromatógrafo HPLC-DAD.",
      "Definición de gradiente de separación en un tiempo total de corrida de 30 minutos.",
      "Validación de linealidad (r=0.9997) para cuantificar apocarotenoides y retinoides encapsulados."
    ]
  },
  {
    id: "ACT-09",
    phase: 3,
    name: "Seguridad y estabilidad del cosmético",
    status: "Avanzado",
    detail: "Protocolos OCDE in-vitro sobre seguridad dérmica.",
    description: "Evaluación de citotoxicidad, fotoirritación y corrosión dérmica para garantizar la seguridad clínica del ingrediente en aplicaciones faciales.",
    keyFindings: [
      "Ensayos in-vitro en fibroblastos humanos dérmicos (HDF) en pasajes de cultivo 2 a 5.",
      "Simulación de radiación UVB controlada en dosis de 25, 50, 100 y 200 mJ/cm².",
      "Determinación de colágeno y MMP-1 mediante técnicas ELISA (DuoSet ELISA R&D Systems) para validación antienvejecimiento."
    ]
  },
  {
    id: "ACT-10",
    phase: 3,
    name: "Escalamiento piloto del ingrediente",
    status: "Avanzado",
    detail: "Procesamiento de lotes medianos en laboratorio.",
    description: "Ajuste de parámetros operacionales para la producción piloto de emulsión Aurum Carota a partir de excedentes agrícolas regionales.",
    keyFindings: [
      "Procesamiento piloto de 60 kg de zanahoria fresca en rebanadoras automáticas (TT-F60) y secado de lecho fluidizado (Actum).",
      "Deshidratación controlada a 40°C durante 16 horas en lotes de 15 kg para alcanzar humedad final del 5%.",
      "Molienda de biomasa seca y tamizado por malla 40 para obtención de polvo uniforme."
    ]
  },
  {
    id: "ACT-11",
    phase: 4,
    name: "Levantamiento de la cadena de valor",
    status: "Completado",
    detail: "Mapeo de actores y flujos logísticos.",
    description: "Identificación de cuellos de botella y diseño de redes de abastecimiento que vinculen a los productores locales con empresas procesadoras.",
    keyFindings: [
      "Identificación y caracterización de 53 tipologías de empresas participantes en la cadena de valor.",
      "Segmentación demográfica de consumidores regionales y análisis de preferencias de consumo por grupos de edad.",
      "Mapeo relacional de flujos logísticos y cuellos de botella para el upcycling de excedentes."
    ]
  },
  {
    id: "ACT-12",
    phase: 4,
    name: "Modelos y planes de negocios",
    status: "Completado",
    detail: "Diseño de viabilidad financiera y operativa.",
    description: "Simulación de costos de producción, rentabilidad y precios de mercado para los 5 prototipos desarrollados.",
    keyFindings: [
      "Estructuración de 5 lienzos Canvas de negocio y análisis financiero de viabilidad para cada prototipo.",
      "Simulación de costos operativos y margen comercial para la compota infantil, gomas y extractos.",
      "Modelado comercial de la emulsión semielaborada Aurum Carota para venta a granel a industrias de cosméticos."
    ]
  },
  {
    id: "ACT-13",
    phase: 4,
    name: "Desarrollo conceptual y divulgación",
    status: "Completado",
    detail: "Socialización de resultados y apropiación.",
    description: "Eventos públicos, demostraciones culinarias, talleres con agricultores e informes divulgativos para transferir el conocimiento.",
    keyFindings: [
      "Estructuración de matrices DOFA específicas y análisis de Fuerzas de Porter para el portafolio.",
      "Realización de paneles sensoriales avanzados con transcripción de 70 entrevistas cualitativas.",
      "Talleres de socialización con la asistencia y retroalimentación de 59 personas en eventos regionales."
    ]
  },
  {
    id: "ACT-14",
    phase: 4,
    name: "Gobernanza y política de la cadena",
    status: "Completado",
    detail: "Acuerdos de cooperación y articulación.",
    description: "Establecimiento de mesas de trabajo y convenios institucionales para impulsar la cadena productiva de la zanahoria en Antioquia.",
    keyFindings: [
      "Mapeo de preferencias de aprendizaje regional bajo metodología MIDEAS.",
      "Articulación de la Asociación Hortisanos con los resultados de transferencia del proyecto.",
      "Análisis de viabilidad exportadora del modelo '100% extracto de zanahoria' para mercados internacionales."
    ]
  }
];

export const products: ProductEntry[] = [
  {
    id: "prod-zanapure",
    name: "ZanaPure",
    type: "Alimentaria",
    tag: "Primera Infancia",
    formulation: "Zanahoria 27%, banano 38%, yacón 4%, colágeno 4%, remolacha 3%, gulupa 4%, Emulfiber 1.5%",
    process: "Cavitación Hidrotermodinámica (CHTD)",
    status: "Escalamiento piloto en alianza con Multialoe S.A.S.",
    features: [
      "Sin azúcares añadidos ni edulcorantes artificiales",
      "Etiquetado limpio (sin sellos de advertencia)",
      "Alto contenido de fibra dietaria soluble",
      "Aporte energético óptimo: 69 kcal/100g"
    ],
    description: "Una papilla / compota funcional orientada a la nutrición infantil y del adulto mayor, desarrollada con tecnología de cavitación de alta eficiencia para preservar vitaminas y evitar la degradación térmica de nutrientes.",
    accent: "orange"
  },
  {
    id: "prod-zanapet",
    name: "ZanaPet",
    type: "Alimentaria",
    tag: "Industria de Mascotas",
    formulation: "Zanahoria deshidratada, grasa de pollo (fuente de omega), aceite de soya",
    process: "Deshidratación convectiva y homogeneización lipídica",
    status: "Formulación final validada en estabilidad y palatabilidad",
    features: [
      "Suplemento nutricional rico en betacaroteno para el pelaje",
      "Alto contenido de fibra natural para la digestión",
      "Gran palatabilidad validada por paneles caninos",
      "100% natural, libre de colorantes y conservantes sintéticos"
    ],
    description: "Suplemento alimenticio húmedo para perros y gatos que aprovecha las tipologías de zanahoria descartadas por tamaño, proporcionando un excelente aporte de antioxidantes y fibra soluble.",
    accent: "green"
  },
  {
    id: "prod-gomas",
    name: "Gomas Biofuncionales",
    type: "Alimentaria",
    tag: "Consumo Masivo Funcional",
    formulation: "Zanahoria concentrada, sorbitol (libre de azúcar), micronutrientes esenciales (Vitaminas B, D, Zinc, Hierro, Calcio)",
    process: "Concentración al vacío y dosificación por goteo",
    status: "Producción piloto por lotes y caracterización sensorial",
    features: [
      "Endulzadas con polioles (aptas para diabéticos)",
      "Aporte del 30% del requerimiento diario de zinc y hierro",
      "Sabor natural a base de concentrado de zanahoria",
      "Textura masticable optimizada con hidrocoloides naturales"
    ],
    description: "Gomas de gelatina funcionales dirigidas al público infantil y juvenil, diseñadas como vehículo para combatir deficiencias nutricionales mediante el aprovechamiento de zanahorias locales.",
    accent: "orange"
  },
  {
    id: "prod-apocarotenoides",
    name: "Extracto de Apocarotenoides",
    type: "Farmacéutica/Cosmética",
    tag: "Ingrediente Activo Cosmecéutico",
    formulation: "Apocarotenoides concentrados (11+ ppm de retinoides y metabolitos activos)",
    process: "Fotólisis ultravioleta asistida con Fenton (UV + Fenton) sobre biomasa seca",
    status: "Escalamiento en reactor piloto (60 kg zanahoria fresca → 4.6 kg seca → 16L extracto vía BSP-1200)",
    features: [
      "Concentración de retinoides naturales superior a 11 ppm",
      "Método analítico HPLC-DAD validado (r=0.9997, límite de detección 0.125 μg/mL)",
      "Estabilidad térmica probada a temperatura ambiente",
      "Libre de solventes orgánicos tóxicos (química verde)"
    ],
    description: "Ingrediente activo precursor de la vitamina A obtenido por la fragmentación controlada de carotenoides, diseñado para su incorporación en formulaciones cosméticas regeneradoras.",
    accent: "purple"
  },
  {
    id: "prod-aurum",
    name: "Emulsión Aurum Carota",
    type: "Farmacéutica/Cosmética",
    tag: "Cosmético Terminado",
    formulation: "Extracto de apocarotenoides encapsulado en NLC (<400nm), manteca de cacao, Myritol 318",
    process: "Homogeneización por corte a alta presión y dispersión en portadores lipídicos nanoestructurados (NLC)",
    status: "Evaluación clínica de seguridad y estabilidad completada",
    features: [
      "Absorción profunda mediante nanopartículas lipídicas de tamaño inferior a 400 nm",
      "Seguridad garantizada bajo 4 protocolos internacionales OCDE (432, 491, 431, 439)",
      "Efecto comprobado in-vitro sobre síntesis de colágeno y elastina",
      "Textura ultraligera y libre de sensación grasosa"
    ],
    description: "Crema facial regeneradora antienvejecimiento de alta gama. Su tecnología de liberación controlada permite penetrar los estratos superficiales de la piel para entregar retinoides bioactivos.",
    accent: "purple"
  }
];

export const milestones: MilestoneEntry[] = [
  {
    title: "Caracterización Exhaustiva",
    value: "117 muestras",
    description: "Estudiadas fisicoquímicamente bajo estándares de laboratorio rigurosos.",
    icon: "database"
  },
  {
    title: "HPLC Validado",
    value: "r = 0.9997",
    description: "Curva de calibración lineal validada para la medición de carotenoides.",
    icon: "activity"
  },
  {
    title: "Escalamiento Piloto",
    value: "16 Litros",
    description: "De extracto activo producidos en lotes industriales en reactores BSP-1200.",
    icon: "flask"
  },
  {
    title: "Seguridad Cosmética",
    value: "4 Protocolos",
    description: "Ensayos OCDE in-vitro superados exitosamente sin pruebas en animales.",
    icon: "shield"
  }
];

export const partners: PartnerEntry[] = [
  {
    name: "Corporación Colombiana de Investigación Agropecuaria",
    shortName: "AGROSAVIA",
    role: "Entidad Ejecutora Principal",
    description: "Líder del proyecto a través del C.I. La Selva. Responsable de la caracterización agronómica, desarrollo de prototipos alimentarios, procesos farmacéuticos primarios y gobernanza territorial.",
    activities: ["Actividades 1", "3", "4", "5", "6", "10", "13"],
    website: "https://www.agrosavia.co",
    color: "green"
  },
  {
    name: "Universidad de Antioquia",
    shortName: "Universidad de Antioquia",
    role: "Aliado Científico — Grupo GISB",
    description: "Responsable de la optimización del extracto de apocarotenoides, caracterización nanotecnológica en NLC y realización de pruebas OCDE de seguridad dérmica.",
    activities: ["Actividades 7", "8", "9", "10"],
    website: "https://www.udea.edu.co",
    color: "blue"
  },
  {
    name: "Universidad Católica de Oriente",
    shortName: "UCO",
    role: "Aliado de Transferencia e Innovación",
    description: "Encargada del levantamiento de la cadena de valor, la estructuración de planes de negocios y la articulación con los productores del Oriente Antioqueño.",
    activities: ["Actividades 11", "12", "13", "14"],
    website: "https://www.uco.edu.co",
    color: "amber"
  },
  {
    name: "Universidad Nacional de Colombia",
    shortName: "Universidad Nacional",
    role: "Aliado Analítico — Grupo NIRS",
    description: "Desarrollo de modelos predictivos rápidos NIRS para la caracterización no destructiva del estado de maduración y potencial funcional del cultivo.",
    activities: ["Actividad 2"],
    website: "https://unal.edu.co",
    color: "red"
  },
  {
    name: "Asociación Hortisanos",
    shortName: "Hortisanos",
    role: "Asociación de Productores Regional",
    description: "Red de productores de El Santuario y Marinilla que suministraron los excedentes agrícolas y participaron activamente en los talleres de transferencia tecnológica.",
    activities: ["Actividad 1", "13", "14"],
    color: "teal"
  },
  {
    name: "Multialoe S.A.S.",
    shortName: "Multialoe",
    role: "Aliado Industrial Co-desarrollador",
    description: "Empresa del sector agroindustrial que apoyó el escalamiento piloto de la compota ZanaPure aportando infraestructura de cavitación a nivel de planta.",
    activities: ["Actividad 5", "10", "12"],
    color: "orange"
  }
];
