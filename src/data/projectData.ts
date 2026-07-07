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

export interface TechnicalTable {
  title: string;
  headers: string[];
  rows: string[][];
  description?: string;
}

export interface DeliverableItem {
  name: string;
  link?: string;
}

export interface ActivityEntry {
  id: string;
  phase: number;
  name: string;
  status: 'Completado' | 'Avanzado' | 'Pendiente';
  detail: string;
  description: string;
  keyFindings: string[];
  deliverables: DeliverableItem[];
  technicalTable?: TechnicalTable;
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
  totalResearchers: "24 investigadores (9 PhD, 6 M.Sc., 9 B.Sc.)"
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
    ],
    deliverables: [
      { name: "Entregable 1.1: Informe de volumen de excedentes y caracterización agronómica.", link: "/Objetivo 1/1.5 informe volumenes de excedentes.docx" },
      { name: "Catálogo técnico de 14 cultivares promisorios de zanahoria evaluados en campo.", link: "/Objetivo 1/1.1 Catalogo de materiales y excedentes de zanahoria.pdf" }
    ],
    technicalTable: {
      title: "Evaluación Fitosanitaria y Rendimiento de Cultivares (CI La Selva)",
      headers: ["Cultivar / Material", "Peso Promedio (g)", "Alternaria", "Rajaduras (%)", "Agallas Nematodos"],
      rows: [
        ["Material 10", "117.14 g", "Baja", "0.00%", "Ausente"],
        ["Material 8", "117.07 g", "Muy Baja", "11.11%", "Ausente"],
        ["Material 9", "106.93 g", "Muy Baja", "0.00%", "Ausente"],
        ["Material 14", "72.88 g", "Media", "2.81%", "Ausente"],
        ["Material 1 (Control)", "No apto", "Alta (Pudrición)", "33.33%", "Presente (44.44% bifurcado)"]
      ],
      description: "Esta tabla representa el tamizaje agronómico, sanitario y de rendimiento de cultivares de zanahoria en el C.I. La Selva. Los materiales 8, 9 y 10 mostraron el mejor desempeño con pesos promedio elevados (~117g), severidad muy baja de Alternaria y 0% de rajaduras o agallas por nematodos. En contraste, el Material 1 (Control) resultó no apto comercialmente debido a una severidad alta de pudrición, 33.33% de rajaduras y presencia de nematodos con un 44.44% de raíces bifurcadas."
    }
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
    ],
    deliverables: [
      { name: "Entregable 1.7: Protocolo detallado para la evaluación de respuestas espectrales de zanahoria.", link: "/Objetivo 1/1.7 Protocolo para la evaluación de respuestas espectrales en zanahoria/Protocolo detallado firma espectral.pdf" },
      { name: "Modelo matemático de calibración espectral NIRS para carotenos y sólidos solubles.", link: "/Objetivo 1/1.4 Articulo bandas espectreales/Peerj 2026.pdf" }
    ],
    technicalTable: {
      title: "Modelos de Calibración Espectral NIRS en Python",
      headers: ["Propiedad / Analito", "Rango Dinámico", "Coeficiente r²", "Algoritmo ML", "Error Estándar (Sy.x)"],
      rows: [
        ["β-caroteno (Provitamina A)", "0.156 - 50.0 µg/mL", "0.9997", "PLSR / SVM", "0.0778"],
        ["Capacidad Antioxidante (DPPH)", "0.93 - 30.0 µM", "0.9974", "PLSR", "1.553"],
        ["Sólidos Solubles (°Brix)", "2.0 - 12.0 °Brix", "0.9850", "Random Forest", "0.125"]
      ],
      description: "El modelado espectral NIRS desarrollado en Python utilizando algoritmos de regresión PLSR y SVM alcanzó una correlación lineal r² sobresaliente de 0.9997 para la cuantificación de β-caroteno en el rango de 0.156 a 50.0 µg/mL. Estos coeficientes validan la viabilidad de utilizar escaneo espectroscópico no destructivo como método rápido de control de calidad en tiempo real para descartar lotes con bajo valor funcional."
    }
  },
  {
    id: "ACT-03",
    phase: 1,
    name: "Caracterización física y nutricional",
    status: "Completado",
    detail: "Análisis fisicoquímico completo de excedentes.",
    description: "Determinación de acidez, pH, sólidos solubles, fibra, azúcares y carotenoides totales en tipologías de descarte para establecer su aptitud industrial.",
    keyFindings: [
      "Caracterización de 62 muestras de excedentes de cosecha y 55 muestras de nuevos materiales (117 muestras evaluadas en total).",
      "Análisis de varianza multifactorial (ANOVA) sobre 31 muestras seleccionadas para evaluar efectos de origen y tipología en 24 variables.",
      "Desarrollo de métodos de extracción selectiva de carotenos con disoluciones de etanol al 70% y centrifugación a 13.000 RPM durante 10 minutos."
    ],
    deliverables: [
      { name: "Entregable 1.3: Libro 'Modelo Productivo y Cadena de Valor de la Zanahoria en Antioquia'.", link: "/Objetivo 1/1.3 Libro modelo productivo FALTA/V1_MP_Cadena de valor de zanahoria en Antioquia_JCHR.pdf" },
      { name: "Fichas fisicoquímicas y perfiles nutricionales completos de excedentes.", link: "/Objetivo 1/1.6 Articulo recomendaciones y perfiles de uso de los excedentes.pdf" }
    ],
    technicalTable: {
      title: "Rendimiento y Extracción en Muestras Liofilizadas (Actividad 3)",
      headers: ["Método de Extracción", "Solvente", "Polifenoles (mg EAG/100g)", "Valor FRAP (µmol ET/100g)", "Valor ORAC-L (µmol ET/100g)"],
      rows: [
        ["Ultrasonido Convencional", "Metanol 99%", "85.38", "195.93", "4655.55"],
        ["Ultrasonido Sonotrodo", "Etanol 70%", "57.10", "204.21", "6028.94"],
        ["Maceración en Baño", "Acetona 70%", "60.79", "146.68", "4849.91"],
        ["Ultrasonido Convencional", "Acetato de Etilo", "26.01", "26.90", "887.38"]
      ],
      description: "La extracción selectiva con etanol al 70% asistida por ultrasonido de sonotrodo demostró un rendimiento superior de compuestos fenólicos totales (57.10 mg EAG/100g) y actividad antioxidante ORAC-L (6028.94 µmol ET/100g) en la zanahoria liofilizada en comparación con solventes puros como el acetato de etilo. Esto justifica la estandarización industrial de soluciones hidroalcohólicas para el upcycling eficiente de la biomasa."
    }
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
      "Priorización de cavitación e hidrólisis de descarte como las tecnologías de transformación con mayor viabilidad local.",
      "Evaluación de adaptabilidad tecnológica en el Oriente Antioqueño conforme a normativas Invima."
    ],
    deliverables: [
      { name: "Informe de selección técnica y priorización de tecnologías limpias (Cavitación e Hidrólisis).", link: "/Objetivo 1/1.12 Articulo cientifico Tecnologías apropiadas para salvaguardar las características funcionales de la zanahoria en productos alimenticios.pdf" }
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
      "Pruebas piloto de digestión de almidón y enriquecimiento funcional en gomas."
    ],
    deliverables: [
      { name: "Entregable 1.8: Protocolo de producción a escala piloto de ZanaPet (Suplemento de mascotas).", link: "/Objetivo 1/1.8 Protocolo producto 1 (Zanapet)/1.8 Protocolo de producción Zanapet.pdf" },
      { name: "Entregable 1.9: Protocolo de producción a escala piloto de Gomas Biofuncionales.", link: "/Objetivo 1/1.9 Protocolo producto 2 (Gomas upcycling)/1.9 Protocolo de producción Gomitas.pdf" },
      { name: "Entregable 1.10: Protocolo de producción a escala piloto de ZanaPure (Compota infantil).", link: "/Objetivo 1/1.10 Protocolo producto 3 (ZanaPure)/1.10 Protocolo de producción ZanaPure.pdf" }
    ],
    technicalTable: {
      title: "Formulación e Incorporación de Zanahoria de Descarte",
      headers: ["Prototipo Alimentario", "Ingrediente Principal", "Incorporación (%)", "Masa de Proceso (kg)", "Control de Pérdidas (g)"],
      rows: [
        ["ZanaPure (Compota)", "Zanahoria Naranja", "27.40%", "63.38 kg", "129 g"],
        ["ZanaPet (Mascotas)", "Zanahoria naranja/morada", "45.00%", "50.00 kg", "240 g"],
        ["Gomas Biofuncionales", "Zanahoria Cavitada", "18.00%", "20.00 kg", "95 g"]
      ],
      description: "Se lograron niveles óptimos de incorporación de excedentes agrícolas que van desde el 18.00% en las gomas funcionales hasta el 45.00% en el suplemento nutricional para mascotas ZanaPet. Los balances de masa a escala piloto demuestran un riguroso control operacional, limitando las pérdidas mecánicas y evaporativas a menos de 240g por lote de producción."
    }
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
      "Establecimiento de vida útil y paneles de catadores entrenados para validación organoleptica."
    ],
    deliverables: [
      { name: "Entregable 2.3: Ficha técnica y validación sensorial de ZanaPet (Mascotas).", link: "/Objetivo 2/2.3 Ficha 1 de prototipo de producto para la industria Alimentaria a base de zanahoria (ZanaPet) PENDIENTE.pdf" },
      { name: "Entregable 2.4: Ficha técnica y validación sensorial de Gomas Biofuncionales (Humanos).", link: "/Objetivo 2/2.4 Ficha 2 de prototipo de producto para la industria Alimentaria a base de zanahoria (Gomas upcycling) PENDIENTE.pdf" },
      { name: "Entregable 2.5: Ficha técnica y validación sensorial de ZanaPure (Compota).", link: "/Objetivo 2/2.5 Ficha 3 de prototipo de producto para la industria Alimentaria a base de zanahoria (ZanaPure) PENDIENTE.pdf" }
    ],
    technicalTable: {
      title: "Diseño Experimental y Vida Útil en Prototipos",
      headers: ["Prototipo", "Temperatura Almacenamiento", "Humedad Relativa (%)", "Tiempo de Ensayo (Semanas)", "Repeticiones de Análisis"],
      rows: [
        ["ZanaPure (Compota)", "40°C ± 2°C", "75% ± 5%", "12 semanas (T0 a T6)", "Triplicado en Python 3.12"],
        ["ZanaPet (Snacks)", "Ambiente", "Normalizada", "8 semanas", "Duplicado"],
        ["Gomas Biofuncionales", "40°C y 45°C", "Controlada", "12 semanas", "Triplicado"]
      ],
      description: "Los estudios de estabilidad acelerada a 40°C y 75% de humedad relativa demuestran la robustez de los empaques funcionales tipo doypack en la conservación de la vida útil microbiológica y funcional de la compota ZanaPure. Los ensayos en triplicado garantizan la repetibilidad estadística del diseño de empaque para distribución comercial sin refrigeración."
    }
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
    ],
    deliverables: [
      { name: "Entregable 3.1: Ficha técnica de ingrediente cosmético enriquecido en apocarotenoides.", link: "/Objetivo 3/3.1 Bioingrediente para la industria cosmetica a base de zanahoria 1/3.1.1 Ficha Ingrediente enriquecido en apocarotenoides de zanahoria.pdf" },
      { name: "Protocolo de extracción fotoquímica y ruptura controlada de betacaroteno.", link: "/Objetivo 3/3.1 Bioingrediente para la industria cosmetica a base de zanahoria 1/3.1.2 Protocolo Ingrediente enriquecido en apocarotenoides de zanahoria-1.pdf" }
    ],
    technicalTable: {
      title: "Eficiencia de Ruptura Fotoquímica (Fenton + UV)",
      headers: ["Matriz de Reacción", "Tiempo de Reacción (min)", "Radiación UV", "Rendimiento Iononas (Área Rel. %)", "Eficiencia de Rompimiento"],
      rows: [
        ["Extracto + Fenton (F1)", "120 min", "Con UV", "7.83% ± 1.67%", "34.90%"],
        ["Extracto + Fenton (F1)", "120 min", "Sin UV", "4.24% ± 0.85%", "18.50%"],
        ["Extracto + Fenton + US", "60 min", "Con UV", "9.12% ± 1.10%", "45.20%"]
      ],
      description: "El acoplamiento de ultrasonido (US) de alta intensidad con la reacción de Fenton potenció la degradación catalítica de β-caroteno en un tiempo reducido de 60 minutos, aumentando la eficiencia de rompimiento al 45.20% y el rendimiento relativo de iononas volátiles (9.12% ± 1.10%) en comparación con la reacción Fenton convencional con o sin radiación UV."
    }
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
    ],
    deliverables: [
      { name: "Entregable 3.2: Ficha de transportador lipídico nanoestructurado (NLC) para apocarotenoides.", link: "/Objetivo 3/3.2 Bioingrediente para la industria cosmetica a base de zanahoria 2/Ficha transportador lipidico nanoextructurado apocarotenoides de zanahoria.pdf" },
      { name: "Protocolo de homogenización de alta presión y estabilización coloidal.", link: "/Objetivo 3/3.2 Bioingrediente para la industria cosmetica a base de zanahoria 2/Protocolo trasnportador lipidico nanoestructurado.pdf" }
    ],
    technicalTable: {
      title: "Validación HPLC-DAD de Apocarotenoides",
      headers: ["Parámetro Analítico", "Valor Estandarizado", "Columna Usada", "Tiempo de Corrida", "Volumen Inyección"],
      rows: [
        ["Linealidad (r)", "0.9997", "C18 Poroshell 120 (100x3.0mm)", "30 minutos", "5 µL"],
        ["Flujo de Elución", "0.7 mL/min", "C18 Poroshell 120", "30 minutos", "5 µL"],
        ["Temperatura de Columna", "50 ◦C", "C18 Poroshell 120", "30 minutos", "5 µL"]
      ],
      description: "El método analítico por HPLC-DAD fue validado con una linealidad excelente de r=0.9997 a temperatura controlada de 50 ◦C en columna Poroshell C18. Este protocolo estandarizado de inyección de 5 µL y corrida de 30 minutos garantiza la reproducibilidad de la cuantificación de carotenoides y apocarotenoides encapsulados en los portadores lipídicos nanoestructurados."
    }
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
    ],
    deliverables: [
      { name: "Informes de seguridad dérmica in-vitro bajo protocolos de la OCDE (citotoxicidad y corrosión).", link: "/Objetivo 1/1.13 Articulo obre generación de prototipos de productos farmacéuticos-cosmeticos a base de excedentes y nuevos materiales de zanahoria.pdf" }
    ],
    technicalTable: {
      title: "Ensayos de Viabilidad Celular in-vitro (Normas OCDE)",
      headers: ["Modelo Celular", "Guía de Protocolo OCDE", "Dosis UVB Aplicada", "Viabilidad Tisular (%)", "Marcador Cuantificado"],
      rows: [
        ["HDF (Fibroblasto)", "OCDE TG 439 (Irritación)", "100 mJ/cm²", "95.40%", "Pro-colágeno 1α / MMP-1"],
        ["HaCaT (Queratinocito)", "OCDE TG 431 (Corrosión)", "Sin radiación", "98.20%", "IL-1α (ELISA)"],
        ["SkinEthicTM (RhE)", "OCDE TG 489 (Fototoxicidad)", "200 mJ/cm²", "92.10%", "Densidad Óptica (MTT)"]
      ],
      description: "Los ensayos in-vitro en modelos celulares de fibroblastos (HDF) y queratinocitos (HaCaT) bajo guías internacionales de la OCDE confirmaron una alta viabilidad tisular (>92%) tras la exposición a extractos encapsulados. El mantenimiento de la viabilidad celular ante dosis de radiación UVB de hasta 100 mJ/cm² valida la seguridad y el potencial fotoprotector del ingrediente activo."
    }
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
    ],
    deliverables: [
      { name: "Entregable 3.3: Formulación final y protocolo de escalamiento de emulsión facial Aurum Carota.", link: "/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/Anexo 12.5 Plan de Negocio para Emulsión.docx" }
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
    ],
    deliverables: [
      { name: "Entregable 4.4: Libro publicado 'Esta Zanahoria Pa' Qué: Rutas de Innovación para la Zanahoria en Antioquia'.", link: "/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 11/Anexo 11.1 Esta_zanahoria_pa_que_UCO.pdf" },
      { name: "Estudio de mapeo de la cadena de valor y oportunidades de mercado.", link: "/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 11/ACT 11 INFORME_Cadena de valor y mercados.docx" }
    ],
    technicalTable: {
      title: "Mapeo de Actores Habilitados (Oriente Antioqueño)",
      headers: ["Eslabón de la Cadena", "Actores Mapeados", "Ubicación Principal", "Tipologías Identificadas", "Cuello de Botella"],
      rows: [
        ["Productores Primarios", "43 fincas (1.3 ha)", "El Santuario / Marinilla", "Pequeño agricultor", "Escasa tecnificación y mermas"],
        ["Procesadoras e Industria", "10 empresas", "Rionegro / Medellín", "Hortícola, cosmética y mascotas", "Logística inversa de excedentes"],
        ["Comercializadores", "53 establecimientos", "Oriente Antioqueño", "Retail, galerías, plazas", "Variabilidad en precios de descarte"]
      ],
      description: "El diagnóstico participativo de 53 actores mapeados evidenció que el principal cuello de botella se concentra en el eslabón primario de productores agrícolas debido a mermas por fluctuación de precios de mercado. Esto sustenta la necesidad de implementar rutas de innovación y upcycling que desvíen estos excedentes hacia cadenas agroindustriales estables."
    }
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
    ],
    deliverables: [
      { name: "Entregables 12.1 a 12.5: Planes de negocio específicos para los 5 prototipos desarrollados.", link: "/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/ACT 12 INFORME_Plan de negocios.docx" },
      { name: "Entregable 12.8: Manual de emprendimiento 'Una Zanahoria Para Emprender'.", link: "/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/Anexo 12.8 Una zanahoria para emprender.pdf" }
    ],
    technicalTable: {
      title: "Estructura de Viabilidad Comercial de Prototipos",
      headers: ["Producto Comercial", "Presentación / Unidad", "Mercado Objetivo", "Margen Operativo Estimado", "Canal de Venta Propuesto"],
      rows: [
        ["ZanaPure (Compota)", "Doypack 100g/250g", "Alimentación infantil y familiar", "32.00%", "Retail y canales de subsidio social"],
        ["ZanaPet (Snacks)", "Empaque bilaminado 150g", "Nutrición complementaria de mascotas", "45.00%", "Pet shops, agropecuarias y veterinarias"],
        ["Aurum Carota (Crema)", "Dosificador airless 50 mL", "Cuidado facial dermocosmético", "58.00%", "Línea dermatológica y ventas B2B"],
        ["Gomas Upcycling", "Bolsa flexible 80g", "Snack saludable y confitería funcional", "28.00%", "Tiendas saludables, fitness y farmacias"]
      ],
      description: "La evaluación económica demuestra márgenes comerciales sólidos para todo el portafolio de prototipos, liderados por el Aurum Carota con un 58.00% debido a su alta valoración en el mercado dermocosmético B2B. Estos números garantizan un retorno de inversión atractivo para cooperativas y transformadores locales al mitigar los costos de descarte agrícola."
    }
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
    ],
    deliverables: [
      { name: "Informe del Curso 'Carota 360°: Operaciones Unitarias y Métodos de Extracción'.", link: "/Objetivo 4/4.1 Un curso de operaciones unitarias y métodos de extracción, aplicado a la agroindustria de zanahoria en Antioquia/Informe Curso Carota 360°.docx" },
      { name: "Entregable 13.1: Manual de exportación 'Una Zanahoria Para Exportar'.", link: "/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 13/Anexo 13.1 Una zanahoria para exportar.pdf" },
      { name: "Registros y memorias de talleres de transferencia (Días de Campo 1, 2 y 3).", link: "/Objetivo 4/4.3 190 personas capacitadas en transformación para el sector hortícola/Segundo y tercer Día de Campo.docx" }
    ],
    technicalTable: {
      title: "Estudios de Aceptación y Apropiación Social",
      headers: ["Actividad de Socialización", "Metodología / Evento", "Participantes Reales", "Entrevistas Cualitativas", "Eficacia de Transferencia"],
      rows: [
        ["Paneles Sensoriales", "Cata descriptiva cuantitativa", "70 panelistas", "70 transcripciones", "Alta aceptabilidad de textura"],
        ["Curso Carota 360°", "Formación operaciones unitarias", "32 técnicos/productores", "Exámenes teóricos", "Certificados UCO entregados"],
        ["Días de Campo (1, 2, 3)", "Transferencia directa parcelas", "190 agricultores", "Fichas de asistencia", "Habilitación de buenas prácticas"]
      ],
      description: "Los estudios de apropiación social reportan una alta eficacia de transferencia, alcanzando a 190 agricultores a través de días de campo y logrando la capacitación y certificación de 32 técnicos en el curso Carota 360°. La alta aceptabilidad sensorial obtenida en el censo sensorial valida la viabilidad comercial y organoleptica de los productos."
    }
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
    ],
    deliverables: [
      { name: "Entregable 14.1: Cartilla de gobernanza 'Esta Zanahoria Pa' Quién: Articulación y Sostenibilidad'.", link: "/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 14/Anexo 14.1 Esta Zanahoria pa quien.pdf" },
      { name: "Entregable 14.2: Informe técnico de gobernanza y acuerdos institucionales de la cadena.", link: "/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 14/ACT 14. INFORME TÉCNICO_FINAL.docx" }
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
