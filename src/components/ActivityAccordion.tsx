import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Mail, 
  ChevronDown, 
  Sparkles,
  Lock
} from 'lucide-react';
import { objectives } from '../data/projectData';

interface ActivityItem {
  id: string;
  num: number;
  objId: string;
  name: string;
  description: string;
  isSecret?: boolean; // Para Actividades 7, 9 y 10 del Objetivo 3
  hasArticle?: boolean; // Para Actividad 8
  deliverables: { name: string; link: string }[];
  photos: string[];
  contactName?: string;
  contactEmail?: string;
}

const activitiesList: ActivityItem[] = [
  // ── OBJETIVO ESPECÍFICO 1 ──
  {
    id: "ACT-01",
    num: 1,
    objId: "OBJ-01",
    name: "1. Estimación de los volúmenes de producción no utilizados y evaluación agronómica de cultivares promisorios de zanahoria.",
    description: "Establecimiento de un lote experimental en el Centro de Investigación La Selva para evaluar el desarrollo y velocidad de emisión foliar de cultivares como Bangor F1 y Deep Purple F1, junto con un diagnóstico fitosanitario de hongos (Alternaria spp., Sclerotium rolfsii, Ilyonectria radicicola) y nematodos (Meloidogyne spp., Pratylenchus spp.) en 24 fincas de Marinilla y El Santuario.",
    deliverables: [
      { name: "1.5 Informe de volúmenes de excedentes regionales", link: "https://drive.google.com/uc?export=download&id=1Vm1t89XYGUHmCk078ZbifhQwPB9tmYiy" },
      { name: "Artículo: Growth Dynamics and Ecophysiological Performance of Two Carrot Types (MDPI)", link: "https://www.mdpi.com/2311-7524/12/5/525" }
    ],
    photos: [
      "actividad 1/Figura 1. Problemas de drenaje superficial en el lote debido al alto régimen de lluvias..png",
      "actividad 1/Figura 3. Semillas de zanahoria iniciando proceso de germinación.png",
      "actividad 1/Figura 5. Proceso de siembra en replicas temporales de ensayo agronómico de zanahoria..png",
      "actividad 1/Figura 7. Daños por aves presentes en la réplica 4 del ensayo agronómico de zanahorias..png",
      "actividad 1/Figura 8. Siembra de cuarta replica 17 de diciembre de 2022.png",
      "actividad 1/Figura 9. Cosecha de materiales de zanahoria..png",
      "actividad 1/Figura 10. Lavado y clasificación de materiales de zanahoria.png",
      "actividad 1/Figura 14. Sistema de riego en funcionamiento.png",
      "actividad 1/Figura 15. Condiciones climáticas predominantes durante el periodo de estudio. Precipitación (PP), promedio día de temperatura (Temp) y humedad relativa (HR)..png",
      "actividad 1/Figura 91. Disposición de zanahorias en vasos para inducir daños por lepidópteros..png"
    ]
  },
  {
    id: "ACT-02",
    num: 2,
    objId: "OBJ-01",
    name: "2. Determinación de las huellas espectrales asociadas a potencialidades biofuncionales de los excedentes y nuevos materiales de zanahoria.",
    description: "Establecimiento de una parcela experimental a 2.600 msnm para monitoreo espacial mediante vuelos de dron con sensor multiespectral de cinco bandas (NDVI), complementado con la determinación no destructiva de firmas espectrales (350-1900 nm) en 240 raíces en laboratorio y calibración de modelos PLSR y RandomForest para predecir azúcares y β-caroteno.",
    deliverables: [
      { name: "1.7a Protocolo bandas espectrales zanahoria", link: "https://drive.google.com/uc?export=download&id=14xMMLjrqeoTjHXqENCqSHnONsJyGP-h-" },
      { name: "1.7b Protocolo detallado firma espectral", link: "https://drive.google.com/uc?export=download&id=1QfvBVOnkhLHErc1dM3pFrmrFuD__SbKr" },
      { name: "Artículo: Temporal Dynamics of Postharvest Quality (MDPI)", link: "https://www.mdpi.com/2311-7524/12/6/657" },
      { name: "Artículo: Temporal Dynamics of Postharvest Quality (PMC)", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13312970/" },
      { name: "Artículo: Multidimensional Quality in Carrots (Wiley)", link: "https://onlinelibrary.wiley.com/doi/full/10.1002/fsn3.70718" }
    ],
    photos: [
      "actividad 2/Figura 1. Esquema gráfico de ejecución de análisis de cifras y productos de exportaciones e importaciones..png",
      "actividad 2/Figura 2. Ubicación del área de estudio en el municipio de Bojacá Mapa de Colombia (arriba).png",
      "actividad 2/Figura 4. Muestras de zanahorias disponibles en supermercado.png",
      "actividad 2/Figura 8. Resultados del análisis de tendencias en wordcloud.png",
      "actividad 2/Figura 10. Búsqueda de términos a nivel departamental (Colombia).png",
      "actividad 2/Figura 17. Resultados geográficos (A) países donde se publicaron videos a la plataforma, (B) número de vídeos subidos por país..png"
    ],
    contactName: "Joaquin Guillermo Ramirez",
    contactEmail: "jgramireg@unal.edu.co"
  },
  {
    id: "ACT-03",
    num: 3,
    objId: "OBJ-01",
    name: "3. Caracterización física, química, fisicoquímica y sensorial de los excedentes y nuevos materiales de zanahoria.",
    description: "Caracterización fisicoquímica, bromatológica y biofuncional de 117 muestras (62 de excedentes y 55 de nuevos cultivares) midiendo pH, sólidos solubles y acidez, con análisis de varianza (ANOVA) multifactorial y estandarización del método de extracción hidroalcohólica asistida por ultrasonido para cuantificar fenoles totales y capacidad antioxidante (FRAP/ORAC-L).",
    deliverables: [
      { name: "1.1 Catálogo: El Valor de lo Singular (Editorial AGROSAVIA)", link: "https://editorial.agrosavia.co/index.php/publicaciones/catalog/book/538" },
      { name: "Artículo: Phytochemical Bioprospecting Framework (Heliyon)", link: "https://www.cell.com/heliyon/fulltext/S2405-8440(25)00202-6" },
      { name: "Artículo: Metabolomic Insights into Residual Carrot Biomass (Scientific Reports)", link: "https://www.nature.com/articles/s41598-026-36993-2" },
      { name: "Artículo: Desirability Index Framework for Bioprospecting (Frontiers in Plant Science)", link: "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1794157/full" }
    ],
    photos: [
      "actividad 3/Fig. 1. Mapa georreferenciado de las localidades de cosecha.png",
      "actividad 3/Figura 1. Tipologías de zanahoria[JM3.1], (a) Zanahoria regular o de categoría extra.png",
      "actividad 3/Figura 2. Mapa georeferencial de las localidades de cosecha. Elaboración propia..png",
      "actividad 3/Figura 3. Nubes de palabras.png",
      "actividad 3/Figura 4. [JM19.1][JM19.2][dp19.3]Análisis de componentes principales de los excedentes de producción de zanahoria.png",
      "actividad 3/Figura 5. Análisis de componentes principales de los excedentes de producción de zanahoria bajo tres esquemas.png"
    ]
  },

  // ── OBJETIVO ESPECÍFICO 2 ──
  {
    id: "ACT-04",
    num: 4,
    objId: "OBJ-02",
    name: "4. Priorización de las tecnologías para transformación de productos según normativas y adaptabilidad al entorno.",
    description: "Mapeo de tendencias internacionales sobre upcycling de zanahoria a partir de 80 patentes y tamizaje multicriterio (CapEx, OpEx, complejidad y normativa) de 6 tecnologías. Se priorizaron la Cavitación Hidrotermodinámica (CHTD) y la Hidrólisis Enzimática como procesos limpios sin solventes químicos.",
    deliverables: [
      { name: "Ficha de priorización de tecnologías", link: "https://drive.google.com/uc?export=download&id=1GeKjt4nJxpxYYQiV1D-UENm0lptJxz2F" }
    ],
    photos: [
      "actividad 4/Figura 1. Diagrama de proceso para la limpieza y desinfección de zanahoria.png",
      "actividad 4/Figura 2. Principales productos alimenticios elaborados con zanahoria..png",
      "actividad 4/Ilustración 2. Principales atributos y declaraciones de productos con zanahoria..png"
    ]
  },
  {
    id: "ACT-05",
    num: 5,
    objId: "OBJ-02",
    name: "5. Generación y prototipados de productos alimenticios sólidos, semisólidos y líquidos.",
    description: "Diseño y formulación a escala piloto de tres prototipos (compota ZanaPure con 27.4% de zanahoria, snack para mascotas ZanaPet con 45%, y gomas funcionales con 18%). Se procesaron lotes de hasta 63 kg en planta piloto del INTAL con pérdidas menores a 240g, y se validó su inocuidad microbiológica bajo la norma de la Resolución 1407 de 2022.",
    deliverables: [
      { name: "2.3 Ficha Puré biofuncional (ZanaPure) naranja.pdf", link: "https://drive.google.com/file/d/1rbCwkiWGz9-Zix8uVFSwa4-hvCtN8PMF/view?usp=sharing" },
      { name: "2.4 Ficha Gomitas de zanahoria.pdf", link: "https://drive.google.com/file/d/1wkfnJ-jFdlIgNPPJMhX98LUxreAeZqHK/view?usp=drive_link" },
      { name: "2.5 Ficha ZanaPet.pdf", link: "https://drive.google.com/file/d/1oTV8X3qRnPq9kHRTZk2Os1BevW5_5-Zn/view?usp=drive_link" },
      { name: "Ficha Puré biofuncional (ZanaPure) morada.pdf", link: "https://drive.google.com/file/d/1zCO2Ptaz-g-Z4tNJP2kq7X34TWVl60uh/view?usp=drive_link" }
    ],
    photos: [
      "actividad 5/Figura 16. Prototipos de zanahoria secada en horno de convección y deshidratador..jpeg",
      "actividad 5/Figura 21. Área de transformación de Multialoe S.A.S..jpeg",
      "actividad 5/Figura 24. Excedentes de producción de zanahoria..jpeg",
      "actividad 5/Figura 25. Recepción del material vegetal e ingreso al área de transformación..jpeg",
      "actividad 5/Figura 26. Lavado y desinfección del material vegetal..jpeg",
      "actividad 5/Figura 3. Response surface plots for key technological and functional variables as a function of mixture.jpeg"
    ]
  },
  {
    id: "ACT-06",
    num: 6,
    objId: "OBJ-02",
    name: "6. Estimar y comunicar los aspectos biofuncionales, sensoriales y de vida útil diferenciadores de los prototipos alimentarios generados.",
    description: "Para comercializar y distribuir los prototipos formulados sin necesidad de cadena de frío, se diseñaron empaques tipo doypack bilaminados y se realizaron estudios de estabilidad acelerada (40°C, 75% HR) evaluando la retención de β-caroteno (78% a las 12 semanas) e índice TBARS. Además, se realizaron paneles sensoriales con 50 consumidores usando una escala hedónica de 9 puntos.",
    deliverables: [
      { name: "Informe de Evaluación Sensorial, Biofuncional y Vida Útil", link: "https://drive.google.com/file/d/1RnytLJ83GC7bBiiblAM6EvjBqlmvMMvg/view?usp=sharing" },
      { name: "Memoria e Informe de Divulgación - ZanaFest", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 13/ACT 13 INFORME_Desarrollo conceptual (1).docx" }
    ],
    photos: [
      "act-13-apropiacion-social-001.jpg",
      "act-13-apropiacion-social-002.jpg",
      "act-13-apropiacion-social-003.jpg",
      "act-13-apropiacion-social-004.jpg"
    ]
  },

  // ── OBJETIVO ESPECÍFICO 3 (Cosmética / Farmacéutica con Secreto Empresarial) ──
  {
    id: "ACT-07",
    num: 7,
    objId: "OBJ-03",
    name: "7. Evaluación de tecnologías para obtención de un extracto rico en apocarotenos con perspectiva farmacéutica.",
    description: "Diseño de un proceso fotoquímico catalizado por Fenton (Fe²⁺/H₂O₂ y radiación UV-C de 254 nm) para la degradación controlada de β-caroteno hacia apocarotenoides y retinoides bioactivos a 35°C, estabilizado con 100 ppm de BHT y monitoreado mediante cromatografía líquida de alta resolución (HPLC-DAD).",
    isSecret: true,
    deliverables: [
      { name: "3.1.1 Ficha Técnica: Ingrediente enriquecido en apocarotenoides de zanahoria", link: "https://drive.google.com/uc?export=download&id=1egIoQVWBpLeIlXIEvjlHo5eXV0bBEaYS" },
      { name: "Artículo: Controlled carotenoid cleavage and nanoencapsulation for the production of photoprotective retinoids from Daucus carota (Food and Bioproducts Processing)", link: "https://www.sciencedirect.com/science/article/pii/S0960308526000738" }
    ],
    photos: []
  },
  {
    id: "ACT-08",
    num: 8,
    objId: "OBJ-03",
    name: "8. Desarrollo y caracterización de un ingrediente basado en fracciones ricas en carotenoides y apocarotenoides.",
    description: "Diseño de un sistema de estabilización coloidal para los apocarotenoides mediante portadores lipídicos nanoestructurados (NLC) a base de manteca de cacao y aceite de aguacate con 1.5% de Polisorbato 80, procesado en homogeneizador de alta presión (APV-2000) a 1.200 bar para lograr diámetros de partícula inferiores a 150 nm.",
    hasArticle: true,
    deliverables: [
      { name: "3.2 Ficha Técnica: Transportador Lipídico Nanoestructurado (NLC) para apocarotenoides", link: "https://drive.google.com/uc?export=download&id=1IJEDE__L0bNkAKjmsTkWvm2US0QsEyfo" },
      { name: "Artículo: Controlled carotenoid cleavage and nanoencapsulation for the production of photoprotective retinoids from Daucus carota (Food and Bioproducts Processing)", link: "https://www.sciencedirect.com/science/article/pii/S0960308526000738" }
    ],
    photos: [
      "actividad 8/Figura 13. Resultados de determinación de la capacidad antioxidante en muestras de cosechas de zanahoria.jpeg",
      "actividad 8/Figura 15. Estructura para la evaluación de optimización de rompimiento de carotenoides..jpeg",
      "actividad 8/Figura 5. Estabilidad de β-caroteno en muestras de zanahoria.jpeg"
    ]
  },
  {
    id: "ACT-09",
    num: 9,
    objId: "OBJ-03",
    name: "9. Determinación de las características de estabilidad, antienvejecimiento, penetrabilidad y seguridad del ingrediente diseñado.",
    description: "Evaluación in-vitro de citotoxicidad (ensayo MTT en fibroblastos dérmicos humanos HDF), fotoirritación (OCDE TG 432) e irritación/corrosión dérmica (OCDE TG 439 y TG 431 en epidermis humana reconstituida RhE), reportando viabilidad tisular >92% y eficacia antienvejecimiento mediante cuantificación de pro-colágeno I y colagenasa (MMP-1) por ELISA.",
    isSecret: true,
    deliverables: [
      { name: "2.7 Constancia de Secreto Empresarial - Proceso Zanahoria", link: "https://drive.google.com/file/d/1UbphwmfSolMoFyRb-TCFsgr4HP6Sgy5I/view?usp=drive_link" }
    ],
    photos: []
  },
  {
    id: "ACT-10",
    num: 10,
    objId: "OBJ-03",
    name: "10. Prototipado y escalado de la tecnología para fabricación del ingrediente diseñado.",
    description: "Escalamiento piloto del deshidratado de 60 kg de zanahoria Bangor (cortada en rodajas de 2 mm y secada a 40°C por 16 horas en secador de lecho fluidizado), molienda criogénica, tamizaje por malla número 40 (apertura de 420 micras) y envasado al vacío en atmósfera de nitrógeno para evitar la degradación oxidativa.",
    isSecret: true,
    deliverables: [
      { name: "2.7 Constancia de Secreto Empresarial - Proceso Zanahoria", link: "https://drive.google.com/file/d/1UbphwmfSolMoFyRb-TCFsgr4HP6Sgy5I/view?usp=drive_link" }
    ],
    photos: []
  },

  // ── OBJETIVO ESPECÍFICO 4 ──
  {
    id: "ACT-11",
    num: 11,
    objId: "OBJ-04",
    name: "11. Levantamiento de la cadena de valor y oportunidades de mercado.",
    description: "Diagnóstico socioeconómico de la cadena productiva y mapeo de actores (53 establecimientos comerciales, 43 fincas y 10 procesadoras), identificando cuellos de botella como las mermas agrícolas por fluctuación de precios de mercado, para diseñar redes de abastecimiento y proponer modelos de negocios asociativos.",
    deliverables: [
      { name: "ACT-11 Informe de Cadena de valor y mercados", link: "https://drive.google.com/uc?export=download&id=1xaiUlvwpmn6F1fawvSieHSnlms2BIvRZ" },
      { name: "Artículo: Oportunidades de modelos de negocio para la cadena de valor de la zanahoria (MDPI Horticulturae)", link: "https://www.mdpi.com/2311-7524/12/2/157" }
    ],
    photos: [
      "actividad 11/Figura 1. Distribución geográfica del municipio de Rionegro-Antioquia..jpeg",
      "actividad 11/Figura 2. Información poblacional y características del municipio Rionegro-Antioquia..jpeg",
      "actividad 11/Figura 27. Publicidad de algunos stands visitados en Expobelleza 2023.jpeg",
      "actividad 11/Figura 3. Pabellón principal de Alimentec.jpeg",
      "actividad 11/Figura 33. Publicidad de algunos stands visitados en Expobelleza 2025.jpeg",
      "actividad 11/Figura 34. Ingredientes utilizados en la preparación de productos cosméticos de Expobelleza 2025.jpeg",
      "actividad 11/Figura 39. Productos destacados en Alimentec 2024.jpeg",
      "actividad 11/Figura 4. Pasos para construir una cadena de valor.jpeg"
    ]
  },
  {
    id: "ACT-12",
    num: 12,
    objId: "OBJ-04",
    name: "12. Desarrollo de los modelos de negocios, Brief y planes de negocios.",
    description: "Estructuración de 5 lienzos Canvas de negocios y análisis de sensibilidad financiera a 5 años para los prototipos (ZanaPure, ZanaPet, gomas y Aurum Carota), evaluando costos de producción, margen comercial neto (entre 45% y 72%) y tasa interna de retorno (TIR global proyectada del 42%).",
    deliverables: [
      { name: "ACT-12 Informe consolidado de Planes de Negocios", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/ACT 12 INFORME_Plan de negocios.docx" },
      { name: "Anexo 12.8 Documento 'Una Zanahoria Para Emprender'", link: "https://universidadcatolicadeorienteuco.publica.la/library/publication/una-zanahoria-para-emprender-gomas-pet-plan-de-negocio-y-hoja-de-ruta-para-iniciativas-agroindustriales" }
    ],
    photos: ["foto-21.jpg"]
  },
  {
    id: "ACT-13",
    num: 13,
    objId: "OBJ-04",
    name: "13. Desarrollo conceptual de los productos y divulgación.",
    description: "Implementación del plan de Apropiación Social del Conocimiento (ASC) mediante tres días de campo interactivos en parcelas de El Santuario y Marinilla con agricultores locales, el dictado del curso de capacitación especializada 'Carota 360°' de 40 horas académicas para 42 técnicos locales y análisis de percepción comunitaria.",
    deliverables: [
      { name: "4.3 Memorias de Días de Campo y Capacitación (190 personas)", link: "/entregables objetivos/Objetivo 4/4.3 190 personas capacitadas en transformación para el sector hortícola/Segundo y tercer Día de Campo.docx" },
      { name: "Anexo 13.1 Manual completo 'Una Zanahoria Para Exportar'", link: "https://universidadcatolicadeorienteuco.publica.la/library/publication/una-zanahoria-para-exportar-gomas-funcionales-para-el-mercado-pet-con-destino-a-belgica" }
    ],
    photos: ["foto-22.jpg", "foto-23.jpg"]
  },
  {
    id: "ACT-14",
    num: 14,
    objId: "OBJ-04",
    name: "14. Fortalecimiento de gobernanza de las cadenas de valor de los productos generados.",
    description: "Consolidación del esquema de gobernanza del proyecto mediante 12 mesas técnicas mensuales de regalías con el SGR y la entrega de 15 informes trimestrales de cumplimiento físico y financiero, junto con la distribución de 500 ejemplares de la cartilla didáctica ilustrada 'Esta Zanahoria Pa' Qué' en escuelas rurales de la región.",
    deliverables: [
      { name: "ACT-14 Informe de Gobernanza y articulación final", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 14/ACT 14. INFORME TÉCNICO_FINAL.docx" },
      { name: "Anexo 14.1 Cartilla didáctica 'Esta Zanahoria Pa' Quién'", link: "https://universidadcatolicadeorienteuco.publica.la/library/publication/esta-zanahoria-pa-quien-gobernanza-transferencia-y-aprendizajes-en-la-red-de-valor-de-la-zanahoria" }
    ],
    photos: ["foto-24.jpg"]
  }
];

export default function ActivityAccordion() {
  const [activeObjFilter, setActiveObjFilter] = useState<string>("TODOS");
  const [expandedActId, setExpandedActId] = useState<string | null>("ACT-01");
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  const filteredActivities = activeObjFilter === "TODOS" 
    ? activitiesList 
    : activitiesList.filter(a => a.objId === activeObjFilter);

  return (
    <div className="w-full space-y-8">
      
      {/* ── Filtro por Objetivo Específico (Nomenclatura Literal Oficial) ── */}
      <div className="flex flex-wrap items-center gap-3 p-2 rounded-2xl bg-[#0F1A15] border border-[#5E824A]/30">
        <button
          onClick={() => setActiveObjFilter("TODOS")}
          className={`px-4 py-2 rounded-xl text-xs font-geist transition-all cursor-pointer ${
            activeObjFilter === "TODOS"
              ? "bg-[#DE5A30] text-white font-semibold shadow-lg"
              : "text-[#F0EDE1]/60 hover:text-white hover:bg-white/5"
          }`}
        >
          Todas las 14 Actividades
        </button>

        {objectives.map((obj) => {
          let badgeColor = "border-[#5E824A]/30 text-[#F0EDE1]/70";
          if (activeObjFilter === obj.id) {
            badgeColor = "bg-[#5E824A]/30 text-[#D4CF7D] border-[#5E824A] font-semibold";
          }
          return (
            <button
              key={obj.id}
              onClick={() => setActiveObjFilter(obj.id)}
              className={`px-4 py-2 rounded-xl text-xs font-geist border transition-all cursor-pointer ${badgeColor}`}
            >
              {obj.title}
            </button>
          );
        })}
      </div>

      {/* ── Lista Acordeón de Actividades ── */}
      <div className="space-y-4">
        {filteredActivities.map((act) => {
          const isExpanded = expandedActId === act.id;
          const parentObj = objectives.find(o => o.id === act.objId);

          return (
            <div
              key={act.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                isExpanded 
                  ? 'bg-[#15261F]/90 border-[#5E824A]/50 shadow-2xl' 
                  : 'bg-[#0F1A15]/80 border-[#5E824A]/20 hover:border-[#5E824A]/40'
              }`}
            >
              {/* Encabezado del Acordeón */}
              <div
                onClick={() => setExpandedActId(isExpanded ? null : act.id)}
                className="p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#F0EDE1]/60 font-geist">
                      {parentObj?.title}
                    </span>
                  </div>

                  <h3 className="font-sora text-sm sm:text-base md:text-lg font-semibold text-[#F0EDE1] leading-snug">
                    {act.name}
                  </h3>
                </div>

                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#D4CF7D] shrink-0 mt-1">
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#DE5A30]' : ''}`} />
                </div>
              </div>

              {/* Contenido Expandible */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[#5E824A]/20 p-5 sm:p-6 space-y-6 bg-[#0F1A15]/40"
                  >
                    {/* Descripción de la Actividad */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-geist text-[#D4CF7D] uppercase tracking-wider block font-semibold">
                        Resumen Metodológico:
                      </span>
                      <p className="text-xs sm:text-sm text-[#F0EDE1]/80 font-light leading-relaxed">
                        {act.description}
                      </p>
                    </div>

                    {/* Caso Especial: Secreto Empresarial (Objetivo 3: Act 7, 9 y 10) */}
                    {act.isSecret && (
                      <div className="p-5 rounded-2xl bg-[#0F1A15] border border-amber-500/40 space-y-2 shadow-lg">
                        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                          <Lock className="w-4 h-4 text-amber-400" />
                          <span>Aviso Legal de Secreto Empresarial (Protección Intelectual)</span>
                        </div>
                        <p className="text-xs text-[#F0EDE1]/80 font-light leading-relaxed">
                          Los resultados analíticos, formulaciones e ingredientes nanotecnológicos de esta actividad están protegidos bajo la figura de <strong>Secreto Empresarial</strong>. Para solicitar información adicional o convenios de transferencia tecnológica, por favor contactar a la <strong>OTRI Universidad de Antioquia</strong> (<code>otri@udea.co</code>) y al Grupo de Sustancias Bioactivas.
                        </p>
                      </div>
                    )}

                    {/* Caso Especial: Artículo Científico (Objetivo 3: Act 8) */}
                    {act.hasArticle && (
                      <div className="p-4 rounded-2xl bg-[#5E824A]/20 border border-[#5E824A]/40 flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-[#D4CF7D] shrink-0" />
                        <div className="text-xs text-[#F0EDE1]/90 font-light">
                          <span className="font-semibold text-[#D4CF7D] block">Artículo Científico Publicable Asociado</span>
                          Resultados estandarizados del bioingrediente disponibles para consulta y descarga pública.
                        </div>
                      </div>
                    )}

                    {/* Entregables y Soportes Oficiales */}
                    <div className="space-y-3">
                      <span className="text-[11px] font-geist text-[#D4CF7D] uppercase tracking-wider block font-semibold">
                        📁 Entregables & Productos Descargables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {act.deliverables.map((del, dIdx) => (
                          <a
                            key={dIdx}
                            href={del.link}
                            {...(del.link.startsWith('http') 
                              ? { target: "_blank", rel: "noopener noreferrer" } 
                              : { download: true }
                            )}
                            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0F1A15] border border-[#5E824A]/30 text-xs text-[#F0EDE1] hover:border-[#DE5A30] hover:bg-[#15261F] transition-colors group cursor-pointer"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <FileText className="w-4 h-4 text-[#DE5A30] shrink-0" />
                              <span className="truncate font-medium">{del.name}</span>
                            </div>
                            <Download className="w-4 h-4 text-[#D4CF7D] shrink-0 group-hover:scale-110 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Galería Fotográfica Específica por Actividad */}
                    {act.photos && act.photos.length > 0 && (
                      <div className="space-y-3">
                        <span className="text-[11px] font-geist text-[#D4CF7D] uppercase tracking-wider block font-semibold">
                          📸 Evidencias de Campo y Laboratorio:
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {act.photos.map((photo, pIdx) => (
                            <div
                              key={pIdx}
                              onClick={() => setLightboxPhoto(`/photos-proyecto/${photo}`)}
                              className="aspect-video rounded-xl overflow-hidden border border-[#5E824A]/20 cursor-pointer group hover:border-[#DE5A30] transition-colors relative bg-[#0F1A15]"
                            >
                              <img
                                src={`/photos-proyecto/${photo}`}
                                alt={`Evidencia ${act.id}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  // Fallback elegante si la foto de muestra aún no está en la carpeta
                                  (e.target as HTMLElement).style.opacity = '0.4';
                                }}
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-[10px] font-geist text-white font-semibold">Ampliar</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Leyenda Legal de Contacto Institucional (Para Actividades sin Secreto Empresarial) */}
                    {!act.isSecret && (
                      <div className="pt-4 border-t border-[#5E824A]/20 flex items-center gap-3 text-[11px] text-[#F0EDE1]/60 font-geist">
                        <Mail className="w-4 h-4 text-[#DE5A30] shrink-0" />
                        <span>
                          Si requieres conocer más sobre la <strong>{act.name}</strong>, contacta a {act.contactName ? (
                            <>
                              <strong>{act.contactName}</strong> (<code>{act.contactEmail}</code>).
                            </>
                          ) : (
                            <>
                              al Investigador Principal Juan Camilo Henao Rojas (<code>jhenao@agrosavia.co</code>) o Atención al Cliente AGROSAVIA (<code>atencionalcliente@agrosavia.co</code>).
                            </>
                          )}
                        </span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal para Fotografías */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#5E824A]/40">
              <img src={lightboxPhoto} alt="Evidencia ampliada" className="w-full h-auto max-h-[85vh] object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
