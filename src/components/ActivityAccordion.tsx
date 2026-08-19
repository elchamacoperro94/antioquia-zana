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
}

const activitiesList: ActivityItem[] = [
  // ── OBJETIVO ESPECÍFICO 1 ──
  {
    id: "ACT-01",
    num: 1,
    objId: "OBJ-01",
    name: "1. Estimación de los volúmenes de producción no utilizados y evaluación agronómica de cultivares promisorios de zanahoria.",
    description: "Cuantificación de pérdidas y excedentes agronómicos en fincas de El Santuario y Marinilla, evaluando parámetros de rendimiento y comportamiento fitosanitario en campo.",
    deliverables: [
      { name: "1.5 Informe de volúmenes de excedentes regionales", link: "https://drive.google.com/uc?export=download&id=1Vm1t89XYGUHmCk078ZbifhQwPB9tmYiy" },
      { name: "1.1 Catálogo de materiales y excedentes de zanahoria", link: "https://drive.google.com/uc?export=download&id=1a0Z7snW-d1hm19llLFVqh2sQnsumbc5g" }
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
    description: "Desarrollo de modelos de calibración NIRS de alta precisión para la estimación ultrarrápida no destructiva de humedad, sólido solubles (°Brix) y carotenos.",
    deliverables: [
      { name: "1.7a Protocolo bandas espectrales zanahoria", link: "https://drive.google.com/uc?export=download&id=14xMMLjrqeoTjHXqENCqSHnONsJyGP-h-" },
      { name: "1.7b Protocolo detallado firma espectral", link: "https://drive.google.com/uc?export=download&id=1QfvBVOnkhLHErc1dM3pFrmrFuD__SbKr" }
    ],
    photos: [
      "actividad 2/Figura 1. Esquema gráfico de ejecución de análisis de cifras y productos de exportaciones e importaciones..png",
      "actividad 2/Figura 2. Ubicación del área de estudio en el municipio de Bojacá Mapa de Colombia (arriba).png",
      "actividad 2/Figura 4. Muestras de zanahorias disponibles en supermercado.png",
      "actividad 2/Figura 8. Resultados del análisis de tendencias en wordcloud.png",
      "actividad 2/Figura 10. Búsqueda de términos a nivel departamental (Colombia).png",
      "actividad 2/Figura 17. Resultados geográficos (A) países donde se publicaron videos a la plataforma, (B) número de vídeos subidos por país..png"
    ]
  },
  {
    id: "ACT-03",
    num: 3,
    objId: "OBJ-01",
    name: "3. Caracterización física, química, fisicoquímica y sensorial de los excedentes y nuevos materiales de zanahoria.",
    description: "Evaluación bromatológica completa y caracterización multicriterio de aptitud agroindustrial de materias primas para transformación alimentaria y cosmética.",
    deliverables: [
      { name: "1.6 Artículo de perfiles de uso agroindustrial de excedentes", link: "https://drive.google.com/uc?export=download&id=1ioVaWAp23WWR85kAlL_BlFYEoNxtcwso" },
      { name: "1.12 Artículo de tecnologías de conservación funcional", link: "https://drive.google.com/uc?export=download&id=19eYDvqOI5lc9BKlIaCwObHkUit7ruIg0" }
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
    description: "Selección de tecnologías de química verde y procesamiento limpio (cavitación hidrotermodinámica CHTD y deshidratación) para la agroindustria hortícola.",
    deliverables: [
      { name: "4.1 Informe del Curso Técnico de Transformación 'Carota 360°'", link: "https://drive.google.com/uc?export=download&id=1O79ZX5oBgd-18ieqebKsGLs2bsnsLVrn" }
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
    description: "Formulación a escala piloto de prototipos alimentarios: compota infantil ZanaPure, snack veterinario ZanaPet y gomas biofuncionales enriquecidas.",
    deliverables: [
      { name: "2.3 Ficha de prototipo alimentario ZanaPet (Mascotas)", link: "https://drive.google.com/uc?export=download&id=1DV993dzZJgZU64p9plcYDSRZhG7FkHVK" },
      { name: "2.4 Ficha de prototipo alimentario Gomas Funcionales", link: "https://drive.google.com/uc?export=download&id=1O4XV3jmjeia7-ADzruUOkDq3nECKhfur" },
      { name: "2.5 Ficha de prototipo alimentario ZanaPure (Compotas)", link: "https://drive.google.com/uc?export=download&id=10VZyEk3omEqIX9oDFTs7Zena2TSMWFIE" }
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
    description: "Paneles de censo sensorial con consumidores y estudios microbiológicos y fisicoquímicos de vida útil para validación de mercado.",
    deliverables: [
      { name: "2.6 Tesis de Maestría en Calidad de Alimentos - Mateo Londoño (INTAL)", link: "https://drive.google.com/uc?export=download&id=1N45coqBEeJxluikZC2GaYuHFTwsyI28A" },
      { name: "2.2 Tesis de Maestría Paola Ospina (Universidad Nacional)", link: "https://drive.google.com/uc?export=download&id=1QUNKIotaW4xFqFYxy8kkLnsWLenB0ogS" }
    ],
    photos: [
      "actividad 6/Figura 2a. Recuento total en placa de carga microbiana en gomas Medio Sabouraud (Mesófilos) para las temperaturas 40, 45, 55ºC, en diluciones de 10-2 a 10-4 respectivamente, puntos de muestreo con baja carga microbiana..jpeg",
      "actividad 6/Figura 3.  UFCmL en matriz de compota de zanahoria procesada en marmita en los tiempos Tiempo 0 (T0-25ºC, T1 36ºC, T2 45ºC, T3 70ºC y T4 85ºC cada uno de los medios de cultivo..jpeg",
      "actividad 6/Figura 4a. Recuento total en placa de carga microbiana en compota Medio PCA (Mesófilos) para las T0 y T1, en diluciones de 10-3 a 10-5 respectivamente..jpeg",
      "actividad 6/Figura 4b. Recuento total en placa de carga microbiana en compota Medio EMB (coliformes) para las T0 y T1, en diluciones de 10-3 a 10-5 respectivamente..jpeg"
    ]
  },

  // ── OBJETIVO ESPECÍFICO 3 (Cosmética / Farmacéutica con Secreto Empresarial) ──
  {
    id: "ACT-07",
    num: 7,
    objId: "OBJ-03",
    name: "7. Evaluación de tecnologías para obtención de un extracto rico en apocarotenos con perspectiva farmacéutica.",
    description: "Investigación sobre rutas catalíticas y fotoquímicas para la degradación selectiva de carotenoides hacia apocarotenoides bioactivos.",
    isSecret: true,
    deliverables: [
      { name: "3.1.2 Protocolo Ingrediente enriquecido en apocarotenoides de zanahoria-1.pdf", link: "https://drive.google.com/uc?export=download&id=1BF1a5hzy9Vs8zfMIix6yDk1mEdKPMQ45" }
    ],
    photos: []
  },
  {
    id: "ACT-08",
    num: 8,
    objId: "OBJ-03",
    name: "8. Desarrollo y caracterización de un ingrediente basado en fracciones ricas en carotenoides y apocarotenoides.",
    description: "Publicación científica y estandarización del ingrediente dermocosmético con actividad antioxidante y fotoprotectora comprobada.",
    hasArticle: true,
    deliverables: [
      { name: "1.13 Artículo Científico de Prototipos Cosméticos y Farmacéuticos", link: "https://drive.google.com/uc?export=download&id=1m9DtxcZUpur36YnLOWYd3abzI1Bg-xtp" },
      { name: "3.1.1 Ficha Ingrediente enriquecido en apocarotenoides de zanahoria.pdf", link: "https://drive.google.com/uc?export=download&id=1egIoQVWBpLeIlXIEvjlHo5eXV0bBEaYS" }
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
    description: "Ensayos in vitro e in vivo de estabilidad acelerada, citotoxicidad y penetrabilidad dérmica según normativas internacionales.",
    isSecret: true,
    deliverables: [
      { name: "3.2 Ficha de Nanocarriers Lipídicos (NLC)", link: "/entregables objetivos/Objetivo 3/3.2 Bioingrediente para la industria cosmetica a base de zanahoria 2/Ficha transportador lipidico nanoextructurado apocarotenoides de zanahoria.pdf" }
    ],
    photos: ["foto-17.jpg"]
  },
  {
    id: "ACT-10",
    num: 10,
    objId: "OBJ-03",
    name: "10. Prototipado y escalado de la tecnología para fabricación del ingrediente diseñado.",
    description: "Desarrollo de la emulsión dermocosmética antienvejecimiento Aurum Carota y transferencia bajo protocolo confidencial.",
    isSecret: true,
    deliverables: [
      { name: "3.2 Protocolo de encapsulación en Nanocarriers NLC", link: "/entregables objetivos/Objetivo 3/3.2 Bioingrediente para la industria cosmetica a base de zanahoria 2/Protocolo trasnportador lipidico nanoestructurado.pdf" }
    ],
    photos: ["foto-18.jpg"]
  },

  // ── OBJETIVO ESPECÍFICO 4 ──
  {
    id: "ACT-11",
    num: 11,
    objId: "OBJ-04",
    name: "11. Levantamiento de la cadena de valor y oportunidades de mercado.",
    description: "Diagnóstico socioeconómico de la cadena de la zanahoria en Antioquia y caracterización del circuito de comercialización regional.",
    deliverables: [
      { name: "ACT-11 Informe de Cadena de valor y mercados", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 11/ACT 11 INFORME_Cadena de valor y mercados.docx" },
      { name: "1.14 Artículo de oportunidades de modelos de negocio", link: "/entregables objetivos/Objetivo 1/1.14 Articulo sobre las mercado, cadena de valor y oportunidades de modelos de negocio de la zanahoria.pdf" }
    ],
    photos: ["foto-19.jpg", "foto-20.jpg"]
  },
  {
    id: "ACT-12",
    num: 12,
    objId: "OBJ-04",
    name: "12. Desarrollo de los modelos de negocios, Brief y planes de negocios.",
    description: "Estructuración de 6 modelos Canvas y evaluación de rentabilidad económica para la producción industrial de prototipos.",
    deliverables: [
      { name: "ACT-12 Informe consolidado de Planes de Negocios", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/ACT 12 INFORME_Plan de negocios.docx" },
      { name: "Anexo 12.8 Documento 'Una Zanahoria Para Emprender'", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/Anexo 12.8 Una zanahoria para emprender.pdf" }
    ],
    photos: ["foto-21.jpg"]
  },
  {
    id: "ACT-13",
    num: 13,
    objId: "OBJ-04",
    name: "13. Desarrollo conceptual de los productos y divulgación.",
    description: "Estrategias de apropiación social de la ciencia, Festival ZanaFest y capacitación de 190 productores y agroindustriales del territorio.",
    deliverables: [
      { name: "4.3 Memorias de Días de Campo y Capacitación (190 personas)", link: "/entregables objetivos/Objetivo 4/4.3 190 personas capacitadas en transformación para el sector hortícola/Segundo y tercer Día de Campo.docx" },
      { name: "Anexo 13.1 Manual completo 'Una Zanahoria Para Exportar'", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 13/Anexo 13.1 Una zanahoria para exportar.pdf" }
    ],
    photos: ["foto-22.jpg", "foto-23.jpg"]
  },
  {
    id: "ACT-14",
    num: 14,
    objId: "OBJ-04",
    name: "14. Fortalecimiento de gobernanza de las cadenas de valor de los productos generados.",
    description: "Modelos de gobernanza interinstitucional y acuerdos de articulación para la sostenibilidad comercial y social de los desarrollos.",
    deliverables: [
      { name: "ACT-14 Informe de Gobernanza y articulación final", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 14/ACT 14. INFORME TÉCNICO_FINAL.docx" },
      { name: "Anexo 14.1 Cartilla didáctica 'Esta Zanahoria Pa' Quién'", link: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 14/Anexo 14.1 Esta Zanahoria pa quien.pdf" }
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
                          Si requieres conocer más sobre la <strong>{act.name}</strong>, contacta al Investigador Principal Juan Camilo Henao Rojas (<code>jhenao@agrosavia.co</code>) o Atención al Cliente AGROSAVIA (<code>atencionalcliente@agrosavia.co</code>).
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
