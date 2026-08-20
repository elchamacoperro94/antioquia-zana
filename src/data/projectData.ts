// Interfaz que define la estructura de los Metadatos Generales del Proyecto
export interface ProjectMetadata {
  name: string;                  // Nombre del proyecto (ej. "Antioquia Zana")
  bpin: string;                  // Código oficial BPIN del banco de proyectos nacional
  nit: string;                   // Identificación NIT de la entidad ejecutora
  executingEntity: string;       // Entidad que ejecuta el proyecto (AGROSAVIA)
  principalInvestigator: string; // Investigador Principal
  piTitle: string;               // Cargo o titulación académica del investigador principal
  email: string;                 // Correo electrónico de contacto
  phone: string;                 // Teléfono de contacto
  location: string;              // Municipios donde se desarrolla el proyecto
  period: string;                // Duración en años del proyecto (2022-2026)
  funder: string;                // Entidad financiadora (Regalías SGR)
  cropChain: string;             // Cadena agrícola asociada (Hortalizas)
  researchGroups: string;        // Grupos de investigación académica involucrados
  totalResearchers: string;      // Investigadores totales que participan
}

// Interfaz para definir estadísticas clave por región o por tipologías
export interface RegionStat {
  value: string; // Valor estadístico (ej: "25%")
  label: string; // Etiqueta descriptiva
  detail: string; // Detalles técnicos del origen del dato
}

// Interfaz que describe un Objetivo del Proyecto
export interface ObjectiveEntry {
  id: string;                    // Identificador único (ej. "OBJ-1")
  title: string;                 // Título resumido del objetivo
  status: 'Completado' | 'Avanzado' | 'Pendiente'; // Estado del hito
  description: string;           // Descripción extensa del propósito del objetivo
  achievements: string[];        // Lista de logros o hitos puntuales alcanzados
  deliverables?: DeliverableItem[]; // Lista opcional de entregables descargables asociados
}

// Interfaz para la Tabla Técnica de Datos Experimentales
export interface TechnicalTable {
  title: string;                 // Título de la tabla experimental
  headers: string[];             // Nombres de las columnas
  rows: string[][];              // Matriz de datos (filas de celdas tipo texto)
  description?: string;          // Párrafo de análisis e interpretación técnica
}

// Interfaz para un Documento Entregable Oficial
export interface DeliverableItem {
  name: string;                  // Nombre descriptivo del informe o archivo
  link?: string;                 // Ruta de descarga en el servidor local (ej. "/entregables objetivos/...")
}

// Interfaz que describe una Actividad del Proyecto dentro del acordeón de fases
export interface ActivityEntry {
  id: string;                    // Código único de la actividad (ej. "ACT-01")
  phase: number;                 // Número de fase a la que pertenece (1, 2, 3 o 4)
  name: string;                  // Nombre completo de la actividad
  status: 'Completado' | 'Avanzado' | 'Pendiente'; // Estado de la actividad
  detail: string;                // Resumen breve o subtítulo de la actividad
  description: string;           // Explicación técnica extendida del procedimiento realizado
  keyFindings: string[];         // Hallazgos y conclusiones clave obtenidas
  deliverables: DeliverableItem[]; // Lista de entregables y soportes oficiales
  technicalTable?: TechnicalTable; // Tabla opcional de datos de laboratorio
}

// Interfaz para un Prototipo de Producto Desarrollado
export interface ProductEntry {
  id: string;                    // ID del prototipo (ej: "prod-zanapure")
  name: string;                  // Nombre comercial del prototipo
  type: 'Alimentaria' | 'Farmacéutica/Cosmética'; // Sector industrial objetivo
  tag: string;                   // Etiqueta del nicho de mercado (ej: "Primera infancia")
  formulation: string;           // Fórmulas porcentuales de ingredientes activos y excipientes
  process: string;               // Tecnología clave de transformación empleada
  status: string;                // Estado de escalamiento comercial
  features: string[];            // Lista de ventajas o características diferenciales
  description: string;           // Descripción comercial e industrial del producto
  accent: 'orange' | 'purple' | 'green'; // Color de acento para la interfaz
}

// Interfaz para Hitos o Logros Numéricos Destacados en el Dashboard
export interface MilestoneEntry {
  title: string;                 // Nombre del logro
  value: string;                 // Cifra o indicador clave
  description: string;           // Breve explicación de la métrica
  icon: string;                  // Nombre del icono de Lucide correspondiente
}

// Interfaz para las Entidades Alidadas Participantes
export interface PartnerEntry {
  name: string;                  // Nombre de la institución
  shortName: string;             // Abreviación o sigla
  role: string;                  // Rol o responsabilidad principal en el proyecto
  description: string;           // Resumen de las metas asignadas a la entidad
  activities: string[];          // Lista de actividades asociadas
  website?: string;              // Enlace oficial de la institución
  color: 'green' | 'blue' | 'amber' | 'red' | 'teal' | 'orange' | 'purple' | 'pink' | 'emerald'; // Color del badge
  logo: string;                  // Ruta al logotipo oficial
}

// Valores de Metadatos Generales del Proyecto Antioquia Zana
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
  { value: "+380", label: "Beneficiados", detail: "Personas de la región beneficiadas directamente" },
  { value: "16", label: "Publicaciones", detail: "10 artículos científicos, 3 libros y 3 manuales técnicos" },
  { value: "4", label: "Tesistas", detail: "Tesistas formados a nivel de pregrado y posgrado" },
  { value: "9", label: "Eventos ASC", detail: "Eventos de Apropiación Social del Conocimiento" }
];

export const objectives: ObjectiveEntry[] = [
  {
    id: "OBJ-01",
    title: "Objetivo Específico 1",
    status: "Completado",
    description: "Caracterizar el potencial de los excedentes agronómicos y nuevos cultivares de zanahoria como materia prima para la generación de productos con valor agregado en el Oriente Antioqueño.",
    achievements: [
      "Análisis exhaustivo de 117 muestras caracterizadas multicriterio.",
      "Identificación de huellas espectrales por NIRS para potencial biofuncional.",
      "Cuantificación de compuestos bioactivos (alfa y beta carotenos).",
      "Elaboración de catálogo de variedades promisorias y perfiles de uso."
    ],
    deliverables: [
      { name: "1.1 Catálogo de materiales y excedentes de zanahoria", link: "/entregables objetivos/Objetivo 1/1.1 Catalogo de materiales y excedentes de zanahoria.pdf" },
      { name: "1.5 Informe de volúmenes de excedentes regionales", link: "/entregables objetivos/Objetivo 1/1.5 informe volumenes de excedentes.docx" },
      { name: "1.6 Artículo de recomendaciones y perfiles de uso de los excedentes", link: "/entregables objetivos/Objetivo 1/1.6 Articulo recomendaciones y perfiles de uso de los excedentes.pdf" },
      { name: "1.7 Protocolo detallado de firma espectral NIRS", link: "/entregables objetivos/Objetivo 1/1.7 Protocolo para la evaluación de respuestas espectrales en zanahoria/Protocolo detallado firma espectral.pdf" },
      { name: "1.11 Documento de divulgación 'Esta Zanahoria Pa' Qué'", link: "https://repositorio.uco.edu.co/items/faf7692d-0483-4cf8-9cc9-cc88179c5a19" },
      { name: "1.12 Artículo científico de tecnologías de conservación funcional", link: "/entregables objetivos/Objetivo 1/1.12 Articulo cientifico Tecnologías apropiadas para salvaguardar las características funcionales de la zanahoria en productos alimenticios.pdf" },
      { name: "1.13 Artículo de prototipos farmacéuticos y cosméticos a base de excedentes", link: "/entregables objetivos/Objetivo 1/1.13 Articulo obre generación de prototipos de productos farmacéuticos-cosmeticos a base de excedentes y nuevos materiales de zanahoria.pdf" },
      { name: "1.14 Artículo sobre mercado, cadena de valor y oportunidades de negocio", link: "/entregables objetivos/Objetivo 1/1.14 Articulo sobre las mercado, cadena de valor y oportunidades de modelos de negocio de la zanahoria.pdf" },
      { name: "1.15 Informe Final consolidado del Objetivo 1", link: "/entregables objetivos/Objetivo 1/1.15 Informe Final .docx" },
      { name: "V1 Libro de Cadena de valor de zanahoria en Antioquia", link: "/entregables objetivos/Objetivo 1/1.3 Libro modelo productivo FALTA/V1_MP_Cadena de valor de zanahoria en Antioquia_JCHR.pdf" }
    ]
  },
  {
    id: "OBJ-02",
    title: "Objetivo Específico 2",
    status: "Avanzado",
    description: "Generar prototipos de productos funcionales para la industria alimentaria a partir de los excedentes o nuevos cultivares del sistema productivo de zanahoria para el Oriente Antioqueño.",
    achievements: [
      "Desarrollo de ZanaPure (compota infantil) con cavitación hidrotermodinámica (CHTD).",
      "Formulación final validada de ZanaPet para el mercado de mascotas.",
      "Lanzamiento experimental de Gomas Biofuncionales enriquecidas con micronutrientes.",
      "Validación sensorial y estimación de vida útil de prototipos."
    ],
    deliverables: [
      { name: "2.3 Ficha de prototipo alimentario ZanaPet (Mascotas)", link: "/entregables objetivos/Objetivo 2/2.3 Ficha 1 de prototipo de producto para la industria Alimentaria a base de zanahoria (ZanaPet) PENDIENTE.pdf" },
      { name: "2.4 Ficha de prototipo alimentario Gomas Funcionales (Humanos)", link: "/entregables objetivos/Objetivo 2/2.4 Ficha 2 de prototipo de producto para la industria Alimentaria a base de zanahoria (Gomas upcycling) PENDIENTE.pdf" },
      { name: "2.5 Ficha de prototipo alimentario ZanaPure (Compotas)", link: "/entregables objetivos/Objetivo 2/2.5 Ficha 3 de prototipo de producto para la industria Alimentaria a base de zanahoria (ZanaPure) PENDIENTE.pdf" },
      { name: "2.6 Tesis de Maestría en Calidad de Alimentos - Mateo Londoño V.", link: "/entregables objetivos/Objetivo 2/2.6 Tesista de Maestria 3 (Intal)/2.6.3 Tesis maestria- Mateo Londoño V.pdf" },
      { name: "2.7 Constancia de Secreto Empresarial - Proceso Zanahoria", link: "/entregables objetivos/Objetivo 2/2.7 Secreto empresarial/Constancia Secreto Empresarial_ Zanahoria.pdf" },
      { name: "2.2 Tesis de Maestría Paola Ospina (Universidad Nacional)", link: "/entregables objetivos/Objetivo 2/2.2 Tesista de Maestria 2 (UNal)/2.2.3 TESIS FINAL PAOLA OSPINA.pdf" }
    ]
  },
  {
    id: "OBJ-03",
    title: "Objetivo Específico 3",
    status: "Avanzado",
    description: "Generar prototipos de productos funcionales para la industria farmacéutica/cosmética a partir de los excedentes o nuevos cultivares en el sistema productivo de zanahoria del Oriente Antioqueño.",
    achievements: [
      "Extracción y purificación de apocarotenoides usando tecnologías UV + Fenton.",
      "Estabilización nanotecnológica en NLC (Nanostructured Lipid Carriers) <400nm.",
      "Evaluación dermatológica y toxicológica usando 4 protocolos OCDE.",
      "Desarrollo de la emulsión cosmética antienvejecimiento Aurum Carota."
    ],
    deliverables: [
      { name: "3.1 Ficha de ingrediente rico en apocarotenoides", link: "/entregables objetivos/Objetivo 3/3.1 Bioingrediente para la industria cosmetica a base de zanahoria 1/3.1.1 Ficha Ingrediente enriquecido en apocarotenoides de zanahoria.pdf" },
      { name: "3.1 Protocolo de obtención de bioingrediente rico en apocarotenoides", link: "/entregables objetivos/Objetivo 3/3.1 Bioingrediente para la industria cosmetica a base de zanahoria 1/3.1.2 Protocolo Ingrediente enriquecido en apocarotenoides de zanahoria-1.pdf" },
      { name: "3.2 Ficha de transportador lipídico nanoestructurado (NLC) para apocarotenoides", link: "/entregables objetivos/Objetivo 3/3.2 Bioingrediente para la industria cosmetica a base de zanahoria 2/Ficha transportador lipidico nanoextructurado apocarotenoides de zanahoria.pdf" },
      { name: "3.2 Protocolo de encapsulación en transportadores lipídicos nanoestructurados", link: "/entregables objetivos/Objetivo 3/3.2 Bioingrediente para la industria cosmetica a base de zanahoria 2/Protocolo trasnportador lipidico nanoestructurado.pdf" }
    ]
  },
  {
    id: "OBJ-04",
    title: "Objetivo Específico 4",
    status: "Completado",
    description: "Evaluar las oportunidades de mercado y comercialización de nuevos productos a partir de la zanahoria para el Oriente antioqueño mediante un modelo de negocios para productos prototipados.",
    achievements: [
      "Levantamiento completo de la cadena de valor y cuantificación de excedentes.",
      "Diseño de 6 modelos de negocios específicos para los prototipos entregados.",
      "Capacitación de más de 190 productores y actores del sector.",
      "Elaboración de documentos de transferencia y articulación comercial."
    ],
    deliverables: [
      { name: "4.1 Informe del Curso Técnico de Transformación 'Carota 360°'", link: "/entregables objetivos/Objetivo 4/4.1 Un curso de operaciones unitarias y métodos de extracción, aplicado a la agroindustria de zanahoria en Antioquia/Informe Curso Carota 360°.docx" },
      { name: "4.3 Memorias de transferencia en parcelas (Días de Campo 2 y 3)", link: "/entregables objetivos/Objetivo 4/4.3 190 personas capacitadas en transformación para el sector hortícola/Segundo y tercer Día de Campo.docx" },
      { name: "ACT-11 Informe de Cadena de valor y mercados de la zanahoria", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 11/ACT 11 INFORME_Cadena de valor y mercados.docx" },
      { name: "ACT-12 Informe consolidado de Planes de Negocios de Prototipos", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/ACT 12 INFORME_Plan de negocios.docx" },
      { name: "ACT-13 Informe de Desarrollo conceptual y panel de censo sensorial", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 13/ACT 13 INFORME_Desarrollo conceptual (1).docx" },
      { name: "ACT-14 Informe de Gobernanza y articulación institucional final", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 14/ACT 14. INFORME TÉCNICO_FINAL.docx" },
      { name: "Anexo 12.8 Documento completo 'Una Zanahoria Para Emprender'", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/Anexo 12.8 Una zanahoria para emprender.pdf" },
      { name: "Anexo 13.1 Manual completo 'Una Zanahoria Para Exportar'", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 13/Anexo 13.1 Una zanahoria para exportar.pdf" },
      { name: "Anexo 14.1 Cartilla didáctica 'Esta Zanahoria Pa' Quién'", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 14/Anexo 14.1 Esta Zanahoria pa quien.pdf" }
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
    description: "Establecimiento de un lote experimental en el Centro de Investigación La Selva para evaluar el desarrollo y velocidad de emisión foliar de cultivares como Bangor F1 y Deep Purple F1, junto con un diagnóstico fitosanitario de hongos (Alternaria spp., Sclerotium rolfsii, Ilyonectria radicicola) y nematodos (Meloidogyne spp., Pratylenchus spp.) en 24 fincas de Marinilla y El Santuario.",
    keyFindings: [
      "Estimación de pérdidas en poscosecha del 25% al 30% de la producción total.",
      "Evaluación agronómica y caracterización fitosanitaria de 14 cultivares promisorios de zanahoria en El Santuario y Marinilla.",
      "Frecuencia de aplicación de insumos químicos para control foliar medida entre 2 y 15 veces por ciclo."
    ],
    deliverables: [
      { name: "Entregable 1.1: Informe de volumen de excedentes y caracterización agronómica.", link: "/entregables objetivos/Objetivo 1/1.5 informe volumenes de excedentes.docx" },
      { name: "Catálogo técnico de 14 cultivares promisorios de zanahoria evaluados en campo.", link: "/entregables objetivos/Objetivo 1/1.1 Catalogo de materiales y excedentes de zanahoria.pdf" }
    ],
    technicalTable: {
      title: "Evaluación Fitosanitaria y Rendimiento de Cultivares (CI La Selva)",
      headers: ["Cultivar / Material", "Peso Promedio (g)", "Alternaria", "Rajaduras (%)", "Agallas Nematodos"],
      rows: [
        ["Material 14", "72.88 g", "Media", "2.81%", "Ausente"],
        ["Material 10", "117.14 g", "Baja", "0.00%", "Ausente"],
        ["Material 9", "106.93 g", "Muy Baja", "0.00%", "Ausente"],
        ["Material 8", "117.07 g", "Muy Baja", "11.11%", "Ausente"],
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
    detail: "Desarrollo de modelos de calibración no destructivos.",
    description: "Establecimiento de una parcela experimental a 2.600 msnm para monitoreo espacial mediante vuelos de dron con sensor multiespectral de cinco bandas (NDVI), complementado con la determinación no destructiva de firmas espectrales (350-1900 nm) en 240 raíces en laboratorio y calibración de modelos PLSR y RandomForest para predecir azúcares y β-caroteno.",
    keyFindings: [
      "Modelado espectral NIRS calibrado para medición rápida no destructiva de azúcares y sólidos solubles (°Brix).",
      "Correlación espectral de compuestos funcionales en altitudes de 2.000 a 3.000 msnm y temperaturas de 16 a 21 °C.",
      "Estandarización de firmas ópticas para predecir concentraciones de provitamina A y carotenos en muestras frescas."
    ],
    deliverables: [
      { name: "Entregable 1.7: Protocolo detallado para la evaluación de respuestas espectrales de zanahoria.", link: "/entregables objetivos/Objetivo 1/1.7 Protocolo para la evaluación de respuestas espectrales en zanahoria/Protocolo detallado firma espectral.pdf" },
      { name: "Modelo matemático de calibración espectral NIRS para carotenos y sólidos solubles.", link: "/entregables objetivos/Objetivo 1/1.4 Articulo bandas espectreales/Peerj 2026.pdf" }
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
    description: "Caracterización fisicoquímica, bromatológica y biofuncional de 117 muestras (62 de excedentes y 55 de nuevos cultivares) midiendo pH, sólidos solubles y acidez, con análisis de varianza (ANOVA) multifactorial y estandarización del método de extracción hidroalcohólica asistida por ultrasonido para cuantificar fenoles totales y capacidad antioxidante (FRAP/ORAC-L).",
    keyFindings: [
      "Caracterización de 62 muestras de excedentes de cosecha y 55 muestras de nuevos materiales (117 muestras evaluadas en total).",
      "Análisis de varianza multifactorial (ANOVA) sobre 31 muestras seleccionadas para evaluar efectos de origen y tipología en 24 variables.",
      "Desarrollo de métodos de extracción selectiva de carotenos con disoluciones de etanol al 70% y centrifugación a 13.000 RPM durante 10 minutos."
    ],
    deliverables: [
      { name: "Entregable 1.3: Libro 'Modelo Productivo y Cadena de Valor de la Zanahoria en Antioquia'.", link: "/entregables objetivos/Objetivo 1/1.3 Libro modelo productivo FALTA/V1_MP_Cadena de valor de zanahoria en Antioquia_JCHR.pdf" },
      { name: "Fichas fisicoquímicas y perfiles nutricionales completos de excedentes.", link: "/entregables objetivos/Objetivo 1/1.6 Articulo recomendaciones y perfiles de uso de los excedentes.pdf" }
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
    description: "Mapeo de tendencias internacionales sobre upcycling de zanahoria a partir de 80 patentes y tamizaje multicriterio (CapEx, OpEx, complejidad y normativa) de 6 tecnologías. Se priorizaron la Cavitación Hidrotermodinámica (CHTD) y la Hidrólisis Enzimática como procesos limpios sin solventes químicos.",
    keyFindings: [
      "Mapeo de tendencias en Latinoamérica que identifica a las salsas, aderezos y alimentación animal como los principales usos industriales de excedentes.",
      "Priorización de cavitación e hidrólisis de descarte como las tecnologías de transformación con mayor viabilidad local.",
      "Evaluación de adaptabilidad tecnológica en el Oriente Antioqueño conforme a normativas Invima."
    ],
    deliverables: [
      { name: "Informe de selección técnica y priorización de tecnologías limpias (Cavitación e Hidrólisis).", link: "/entregables objetivos/Objetivo 1/1.12 Articulo cientifico Tecnologías apropiadas para salvaguardar las características funcionales de la zanahoria en productos alimenticios.pdf" }
    ]
  },
  {
    id: "ACT-05",
    phase: 2,
    name: "Desarrollo de prototipos alimentarios",
    status: "Avanzado",
    detail: "Formulación de compota, snack de mascotas y gomas.",
    description: "Diseño y formulación a escala piloto de tres prototipos (compota ZanaPure con 27.4% de zanahoria, snack para mascotas ZanaPet con 45%, y gomas funcionales con 18%). Se procesaron lotes de hasta 63 kg en planta piloto del INTAL con pérdidas menores a 240g, y se validó su inocuidad microbiológica bajo la norma de la Resolución 1407 de 2022.",
    keyFindings: [
      "Preparación de disolución salina de peptona al 0.1% bajo norma UNE-EN-ISO 6887-1:2000.",
      "Evaluación microbiológica de prototipos sólidos, semisólidos y líquidos utilizando Plate Count Agar (PCA) de Merck.",
      "Pruebas piloto de digestión de almidón y enriquecimiento funcional en gomas."
    ],
    deliverables: [
      { name: "Entregable 1.8: Protocolo de producción a escala piloto de ZanaPet (Suplemento de mascotas).", link: "/entregables objetivos/Objetivo 1/1.8 Protocolo producto 1 (Zanapet)/1.8 Protocolo de producción Zanapet.pdf" },
      { name: "Entregable 1.9: Protocolo de producción a escala piloto de Gomas Biofuncionales.", link: "/entregables objetivos/Objetivo 1/1.9 Protocolo producto 2 (Gomas upcycling)/1.9 Protocolo de producción Gomitas.pdf" },
      { name: "Entregable 1.10: Protocolo de producción a escala piloto de ZanaPure (Compota infantil).", link: "/entregables objetivos/Objetivo 1/1.10 Protocolo producto 3 (ZanaPure)/1.10 Protocolo de producción ZanaPure.pdf" }
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
    description: "Para comercializar y distribuir los prototipos formulados sin necesidad de cadena de frío, se diseñaron empaques tipo doypack bilaminados y se realizaron estudios de estabilidad acelerada (40°C, 75% HR) evaluando la retención de β-caroteno (78% a las 12 semanas) e índice TBARS. Además, se realizaron paneles sensoriales con 50 consumidores usando una escala hedónica de 9 puntos.",
    keyFindings: [
      "Diseño de empaques funcionales tipo doypack con válvula en presentaciones de 100g y 250g para ZanaPure.",
      "Ensayos de envasado a nivel de planta piloto realizados en las instalaciones de la Asociación Hortisanos.",
      "Establecimiento de vida útil y paneles de catadores entrenados para validación organoleptica."
    ],
    deliverables: [
      { name: "Entregable 2.3: Ficha técnica y validación sensorial de ZanaPet (Mascotas).", link: "/entregables objetivos/Objetivo 2/2.3 Ficha 1 de prototipo de producto para la industria Alimentaria a base de zanahoria (ZanaPet) PENDIENTE.pdf" },
      { name: "Entregable 2.4: Ficha técnica y validación sensorial de Gomas Biofuncionales (Humanos).", link: "/entregables objetivos/Objetivo 2/2.4 Ficha 2 de prototipo de producto para la industria Alimentaria a base de zanahoria (Gomas upcycling) PENDIENTE.pdf" },
      { name: "Entregable 2.5: Ficha técnica y validación sensorial de ZanaPure (Compota).", link: "/entregables objetivos/Objetivo 2/2.5 Ficha 3 de prototipo de producto para la industria Alimentaria a base de zanahoria (ZanaPure) PENDIENTE.pdf" }
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
    description: "Diseño de un proceso fotoquímico catalizado por Fenton (Fe²⁺/H₂O₂ y radiación UV-C de 254 nm) para la degradación controlada de β-caroteno hacia apocarotenoides y retinoides bioactivos a 35°C, estabilizado con 100 ppm de BHT y monitoreado mediante cromatografía líquida de alta resolución (HPLC-DAD).",
    keyFindings: [
      "Desarrollo de método cromatográfico con mezcla de gradiente de isopropanol (IPA), acetonitrilo (ACN) y metanol.",
      "Adición de 100 ppm de Butilhidroxitolueno (BHT) como antioxidante para prevenir degradación de apocarotenos.",
      "Ajuste del flujo analítico a 0.7 mL/min para optimización de separación de retinoides activos."
    ],
    deliverables: [
      { name: "3.1.1 Ficha Técnica: Ingrediente enriquecido en apocarotenoides de zanahoria", link: "/entregables objetivos/Objetivo 3/3.1 Bioingrediente para la industria cosmetica a base de zanahoria 1/3.1.1 Ficha Ingrediente enriquecido en apocarotenoides de zanahoria.pdf" },
      { name: "Artículo: Controlled carotenoid cleavage and nanoencapsulation for the production of photoprotective retinoids from Daucus carota (Food and Bioproducts Processing)", link: "https://www.sciencedirect.com/science/article/pii/S0960308526000738" }
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
    description: "Diseño de un sistema de estabilización coloidal para los apocarotenoides mediante portadores lipídicos nanoestructurados (NLC) a base de manteca de cacao y aceite de aguacate con 1.5% de Polisorbato 80, procesado en homogeneizador de alta presión (APV-2000) a 1.200 bar para lograr diámetros de partícula inferiores a 150 nm.",
    keyFindings: [
      "Establecimiento de volumen de inyección analítica de 5 μL en cromatógrafo HPLC-DAD.",
      "Definición de gradiente de separación en un tiempo total de corrida de 30 minutos.",
      "Validación de linealidad (r=0.9997) para cuantificar apocarotenoides y retinoides encapsulados."
    ],
    deliverables: [
      { name: "3.2 Ficha Técnica: Transportador Lipídico Nanoestructurado (NLC) para apocarotenoides", link: "/entregables objetivos/Objetivo 3/3.2 Bioingrediente para la industria cosmetica a base de zanahoria 2/Ficha transportador lipidico nanoextructurado apocarotenoides de zanahoria.pdf" },
      { name: "Artículo: Controlled carotenoid cleavage and nanoencapsulation for the production of photoprotective retinoids from Daucus carota (Food and Bioproducts Processing)", link: "https://www.sciencedirect.com/science/article/pii/S0960308526000738" }
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
    description: "Evaluación in-vitro de citotoxicidad (ensayo MTT en fibroblastos dérmicos humanos HDF), fotoirritación (OCDE TG 432) e irritación/corrosión dérmica (OCDE TG 439 y TG 431 en epidermis humana reconstituida RhE), reportando viabilidad tisular >92% y eficacia antienvejecimiento mediante cuantificación de pro-colágeno I y colagenasa (MMP-1) por ELISA.",
    keyFindings: [
      "Ensayos in-vitro en fibroblastos humanos dérmicos (HDF) en pasajes de cultivo 2 a 5.",
      "Simulación de radiación UVB controlada en dosis de 25, 50, 100 y 200 mJ/cm².",
      "Determinación de colágeno y MMP-1 mediante técnicas ELISA (DuoSet ELISA R&D Systems) para validación antienvejecimiento."
    ],
    deliverables: [
      { name: "2.7 Constancia de Secreto Empresarial - Proceso Zanahoria", link: "/entregables objetivos/Objetivo 2/2.7 Secreto empresarial/Constancia Secreto Empresarial_ Zanahoria.pdf" }
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
    description: "Escalamiento piloto del deshidratado de 60 kg de zanahoria Bangor (cortada en rodajas de 2 mm y secada a 40°C por 16 horas en secador de lecho fluidizado), molienda criogénica, tamizaje por malla número 40 (apertura de 420 micras) y envasado al vacío en atmósfera de nitrógeno para evitar la degradación oxidativa.",
    keyFindings: [
      "Procesamiento piloto de 60 kg de zanahoria fresca en rebanadoras automáticas (TT-F60) y secado de lecho fluidizado (Actum).",
      "Deshidratación controlada a 40°C durante 16 horas en lotes de 15 kg para alcanzar humedad final del 5%.",
      "Molienda de biomasa seca y tamizado por malla 40 para obtención de polvo uniforme."
    ],
    deliverables: [
      { name: "2.7 Constancia de Secreto Empresarial - Proceso Zanahoria", link: "/entregables objetivos/Objetivo 2/2.7 Secreto empresarial/Constancia Secreto Empresarial_ Zanahoria.pdf" }
    ]
  },
  {
    id: "ACT-11",
    phase: 4,
    name: "Levantamiento de la cadena de valor",
    status: "Completado",
    detail: "Mapeo de actores y flujos logísticos.",
    description: "Diagnóstico socioeconómico de la cadena productiva y mapeo de actores (53 establecimientos comerciales, 43 fincas y 10 procesadoras), identificando cuellos de botella como las mermas agrícolas por fluctuación de precios de mercado, para diseñar redes de abastecimiento y proponer modelos de negocios asociativos.",
    keyFindings: [
      "Identificación y caracterización de 53 tipologías de empresas participantes en la cadena de valor.",
      "Segmentación demográfica de consumidores regionales y análisis de preferencias de consumo por grupos de edad.",
      "Mapeo relacional de flujos logísticos y cuellos de botella para el upcycling de excedentes."
    ],
    deliverables: [
      { name: "ACT-11 Informe de Cadena de valor y mercados", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 11/ACT 11 INFORME_Cadena de valor y mercados.docx" },
      { name: "Artículo: Oportunidades de modelos de negocio para la cadena de valor de la zanahoria (MDPI Horticulturae)", link: "https://www.mdpi.com/2311-7524/12/2/157" }
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
    description: "Estructuración de 5 lienzos Canvas de negocios y análisis de sensibilidad financiera a 5 años para los prototipos (ZanaPure, ZanaPet, gomas y Aurum Carota), evaluando costos de producción, margen comercial neto (entre 45% y 72%) y tasa interna de retorno (TIR global proyectada del 42%).",
    keyFindings: [
      "Estructuración de 5 lienzos Canvas de negocio y análisis financiero de viabilidad para cada prototipo.",
      "Simulación de costos operativos y margen comercial para la compota infantil, gomas y extractos.",
      "Modelado comercial de la emulsión semielaborada Aurum Carota para venta a granel a industrias de cosméticos."
    ],
    deliverables: [
      { name: "Entregables 12.1 a 12.5: Planes de negocio específicos para los 5 prototipos desarrollados.", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/ACT 12 INFORME_Plan de negocios.docx" },
      { name: "Entregable 12.8: Manual de emprendimiento 'Una Zanahoria Para Emprender'.", link: "https://universidadcatolicadeorienteuco.publica.la/library/publication/una-zanahoria-para-emprender-gomas-pet-plan-de-negocio-y-hoja-de-ruta-para-iniciativas-agroindustriales" }
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
    description: "Implementación del plan de Apropiación Social del Conocimiento (ASC) mediante tres días de campo interactivos en parcelas de El Santuario y Marinilla con agricultores locales, el dictado del curso de capacitación especializada 'Carota 360°' de 40 horas académicas para 42 técnicos locales y análisis de percepción comunitaria.",
    keyFindings: [
      "Estructuración de matrices DOFA específicas y análisis de Fuerzas de Porter para el portafolio.",
      "Realización de paneles sensoriales avanzados con transcripción de 70 entrevistas cualitativas.",
      "Talleres de socialización con la asistencia y retroalimentación de 59 personas en eventos regionales."
    ],
    deliverables: [
      { name: "Informe del Curso 'Carota 360°: Operaciones Unitarias y Métodos de Extracción'.", link: "/entregables objetivos/Objetivo 4/4.1 Un curso de operaciones unitarias y métodos de extracción, aplicado a la agroindustria de zanahoria en Antioquia/Informe Curso Carota 360°.docx" },
      { name: "Entregable 13.1: Manual de exportación 'Una Zanahoria Para Exportar'.", link: "https://universidadcatolicadeorienteuco.publica.la/library/publication/una-zanahoria-para-exportar-gomas-funcionales-para-el-mercado-pet-con-destino-a-belgica" },
      { name: "Registros y memorias de talleres de transferencia (Días de Campo 1, 2 y 3).", link: "/entregables objetivos/Objetivo 4/4.3 190 personas capacitadas en transformación para el sector hortícola/Segundo y tercer Día de Campo.docx" }
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
    description: "Consolidación del esquema de gobernanza del proyecto mediante 12 mesas técnicas mensuales de regalías con el SGR y la entrega de 15 informes trimestrales de cumplimiento físico y financiero, junto con la distribución de 500 ejemplares de la cartilla didáctica ilustrada 'Esta Zanahoria Pa' Qué' en escuelas rurales de la región.",
    keyFindings: [
      "Mapeo de preferencias de aprendizaje regional bajo metodología MIDEAS.",
      "Articulación de la Asociación Hortisanos con los resultados de transferencia del proyecto.",
      "Análisis de viabilidad exportadora del modelo '100% extracto de zanahoria' para mercados internacionales."
    ],
    deliverables: [
      { name: "Entregable 14.1: Cartilla de gobernanza 'Esta Zanahoria Pa' Quién: Articulación y Sostenibilidad'.", link: "https://universidadcatolicadeorienteuco.publica.la/library/publication/esta-zanahoria-pa-quien-gobernanza-transferencia-y-aprendizajes-en-la-red-de-valor-de-la-zanahoria" },
      { name: "Entregable 14.2: Informe técnico de gobernanza y acuerdos institucionales de la cadena.", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 14/ACT 14. INFORME TÉCNICO_FINAL.docx" }
    ]
  }
];

export const products: ProductEntry[] = [
  {
    id: "prod-zanapure",
    name: "ZanaPure",
    type: "Alimentaria",
    tag: "Prototipo TRL 6-7 · Alimentario",
    formulation: "Zanahoria (27.4%), Banano (38%), Yacón (4%), Colágeno (4%), Gulupa y Emulfiber",
    process: "Cavitación Hidrotermodinámica (CHTD)",
    status: "Validado a escala piloto (TRL 6-7)",
    features: [
      "Sin azúcares añadidos ni edulcorantes artificiales",
      "Etiquetado limpio (sin sellos de advertencia)",
      "Alto contenido de fibra dietaria soluble e insoluble",
      "Aporte energético óptimo: 69 kcal/100g"
    ],
    description: "Compota / puré infantil y familiar elaborado mediante cavitación hidrotermodinámica (CHTD), tecnología limpia que previene la degradación térmica de vitaminas y carotenos.",
    accent: "orange"
  },
  {
    id: "prod-zanapet",
    name: "ZanaPet",
    type: "Alimentaria",
    tag: "Prototipo TRL 6-7 · Alimentario",
    formulation: "Zanahoria deshidratada (45%), Harina de zanahoria, Grasa de pollo y Aceite vegetal",
    process: "Deshidratación convectiva y homogeneización lipídica",
    status: "Validado a escala piloto (TRL 6-7)",
    features: [
      "Suplemento rico en betacaroteno para salud de la piel y pelaje",
      "Alto contenido de fibra natural para salud digestiva animal",
      "Alta palatabilidad validada por paneles caninos",
      "100% natural, libre de conservantes o colorantes sintéticos"
    ],
    description: "Alimento complementario / snack deshidratado para mascotas a base de zanahoria de descarte, rico en fibra soluble y carotenoides naturales.",
    accent: "green"
  },
  {
    id: "prod-gomas",
    name: "Gomas Biofuncionales",
    type: "Alimentaria",
    tag: "Prototipo TRL 6-7 · Alimentario",
    formulation: "Concentrado de zanahoria (18%), Sorbitol (libre de azúcar), Vitaminas B, D, Zinc y Hierro",
    process: "Concentración al vacío y dosificación por goteo",
    status: "Validado a escala piloto (TRL 6-7)",
    features: [
      "Endulzadas con polioles (aptas para régimen de control de azúcar)",
      "Aporte del 30% del requerimiento diario de zinc y hierro",
      "Color y sabor natural a base de concentrado de zanahoria",
      "Textura masticable optimizada con hidrocoloides naturales"
    ],
    description: "Gomas de gelatina funcionales enriquecidas con micronutrientes esenciales y fibra soluble a partir de pulpa concentrada de zanahoria.",
    accent: "orange"
  },
  {
    id: "prod-apocarotenoides",
    name: "Bioingrediente NLC",
    type: "Farmacéutica/Cosmética",
    tag: "Prototipo TRL 6-7 · Cosmético",
    formulation: "Apocarotenoides concentrados (11+ ppm de retinoides), Manteca de cacao, Portadores lipídicos",
    process: "Foto-oxidación (UV + Fenton) y Nanocarriers Lipídicos NLC (<400nm)",
    status: "Validado a escala piloto (TRL 6-7)",
    features: [
      "Concentración de retinoides naturales superior a 11 ppm",
      "Encapsulación coloidal en nanocarriers lipídicos NLC (<400nm)",
      "Método analítico HPLC-DAD validado (r=0.9997)",
      "Protegido bajo protocolo de Secreto Empresarial"
    ],
    description: "Bioingrediente activo dermocosmético precursor de vitamina A, obtenido por fragmentación catalítica de betacaroteno y encapsulado en nanocarriers lipídicos.",
    accent: "purple"
  },
  {
    id: "prod-aurum",
    name: "Emulsión cosmética",
    type: "Farmacéutica/Cosmética",
    tag: "Prototipo TRL 6-7 · Cosmético",
    formulation: "Bioingrediente NLC rico en apocarotenoides, Manteca de cacao, Myritol 318, Fase emulsificante",
    process: "Homogeneización por corte a alta presión y dispersión coloidal",
    status: "Validado en seguridad dérmica in-vitro (TRL 6-7)",
    features: [
      "Absorción profunda mediante nanopartículas lipídicas NLC (<400 nm)",
      "Seguridad garantizada bajo 4 protocolos internacionales OCDE (431, 432, 439, 491)",
      "Efecto antienvejecimiento comprobado in-vitro sobre síntesis de colágeno",
      "Protegido bajo protocolo de Secreto Empresarial"
    ],
    description: "Emulsión cosmética antienvejecimiento facial de alta gama. Su tecnología de liberación controlada permite penetrar los estratos dérmicos entregando apocarotenoides bioactivos.",
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
    color: "green",
    logo: "/logos/logo-agrosavia.png"
  },
  {
    name: "Universidad de Antioquia",
    shortName: "Universidad de Antioquia",
    role: "Aliado Científico — Grupo GISB",
    description: "Responsable de la optimización del extracto de apocarotenoides, caracterización nanotecnológica en NLC y realización de pruebas OCDE de seguridad dérmica.",
    activities: ["Actividades 7", "8", "9", "10"],
    website: "https://www.udea.edu.co",
    color: "blue",
    logo: "/logos/logo-udea.png"
  },
  {
    name: "Universidad Católica de Oriente",
    shortName: "UCO",
    role: "Aliado de Transferencia e Innovación",
    description: "Encargada del levantamiento de la cadena de valor, la estructuración de planes de negocios y la articulación con los productores del Oriente Antioqueño.",
    activities: ["Actividades 11", "12", "13", "14"],
    website: "https://www.uco.edu.co",
    color: "amber",
    logo: "/logos/logo-uco.png"
  },
  {
    name: "Universidad Nacional de Colombia",
    shortName: "Universidad Nacional",
    role: "Aliado Analítico — Grupo NIRS",
    description: "Desarrollo de modelos predictivos rápidos NIRS para la caracterización no destructiva del estado de maduración y potencial funcional del cultivo.",
    activities: ["Actividad 2"],
    website: "https://unal.edu.co",
    color: "red",
    logo: "/logos/logo-unal.png"
  },
  {
    name: "Fundación INTAL",
    shortName: "Intal",
    role: "Aliado de Calidad de Alimentos",
    description: "Laboratorio encargado del análisis microbiológico y fisicoquímico de inocuidad y la estimación de la vida útil acelerada del prototipo alimentario ZanaPure.",
    activities: ["Actividad 6"],
    website: "http://www.fundacionintal.org",
    color: "teal",
    logo: "/logos/logo-intal.png"
  },
  {
    name: "Kavitec S.A.S.",
    shortName: "Kavitec",
    role: "Aliado Tecnológico Co-desarrollador",
    description: "Soporte e ingeniería en procesos agroindustriales y diseño de la maquinaria de cavitación hidrodinámica empleada en el escalamiento piloto de prototipos.",
    activities: ["Actividad 5", "10"],
    website: "https://kavitec.co",
    color: "orange",
    logo: "/logos/logo-kavitec.png"
  },
  {
    name: "Gobernación de Antioquia",
    shortName: "Gobernación de Antioquia",
    role: "Entidad Supervisora de SGR",
    description: "Órgano ejecutor gubernamental y supervisor del avance físico y financiero del proyecto en el marco del Fondo de Ciencia, Tecnología e Innovación.",
    activities: ["Supervisión Global"],
    website: "https://www.antioquia.gov.co",
    color: "pink",
    logo: "/logos/logo-gobernacion.png"
  },
  {
    name: "Alcaldía de Marinilla",
    shortName: "Alcaldía de Marinilla",
    role: "Apoyo y Articulación Local",
    description: "Enlace municipal para la convocatoria de agricultores locales y facilitación de espacios para los días de campo y capacitaciones del proyecto.",
    activities: ["Actividad 13", "14"],
    website: "https://www.marinilla-antioquia.gov.co",
    color: "emerald",
    logo: "/logos/logo-marinilla.png"
  },
  {
    name: "Alcaldía de El Santuario",
    shortName: "Alcaldía de El Santuario",
    role: "Apoyo y Articulación Local",
    description: "Soporte territorial en el acopio de excedentes de descarte y vinculación de asociaciones de productores hortícolas de la subregión.",
    activities: ["Actividad 1", "13"],
    website: "https://www.elsantuario-antioquia.gov.co",
    color: "purple",
    logo: "/logos/logo-santuario.png"
  },
  {
    name: "Sistema General de Regalías",
    shortName: "SGR Financiación",
    role: "Funder / Financiador CTI",
    description: "Aportante de los recursos económicos totales a través del fondo de Ciencia, Tecnología e Innovación para el desarrollo de las 14 actividades del proyecto.",
    activities: ["Financiación SGR"],
    website: "https://www.sgr.gov.co",
    color: "green",
    logo: "/logos/logo-sgr.png"
  }
];
