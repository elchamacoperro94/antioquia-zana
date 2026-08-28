import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Users, 
  MapPin, 
  CalendarRange, 
  X, 
  AlertTriangle, 
  Target, 
  CheckCircle2, 
  Sparkles,
  GraduationCap,
  FileText,
  BookOpen,
  Beaker,
  Calendar
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ArtFrame from '../components/ArtFrame';
import TreeDiagram from '../components/TreeDiagram';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const mainMetricsEs = [
  {
    title: "Formación de Estudiantes",
    value: "7",
    subtext: "4 Maestrías + 3 Pregrados",
    desc: "Tesistas vinculados y graduados en la alianza interinstitucional.",
    icon: <GraduationCap className="w-6 h-6 text-[#DE5A30]" />,
    accent: "border-[#DE5A30]"
  },
  {
    title: "Personas Beneficiadas",
    value: "+380",
    subtext: "Productores y Beneficiados",
    desc: "Personas de la región beneficiadas directamente en parcelas, días de campo y capacitaciones.",
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    accent: "border-emerald-400"
  },
  {
    title: "Eventos de Apropiación",
    value: "9",
    subtext: "Días de Campo, Ferias y ZanaFest",
    desc: "Eventos de transferencia tecnológica y divulgación científica.",
    icon: <Calendar className="w-6 h-6 text-[#D4CF7D]" />,
    accent: "border-[#D4CF7D]"
  },
  {
    title: "Artículos Científicos",
    value: "10",
    subtext: "Artículos Indexados Publicados",
    desc: "Publicaciones científicas en revistas de alto impacto (Heliyon, PeerJ, MDPI).",
    icon: <FileText className="w-6 h-6 text-sky-400" />,
    accent: "border-sky-400"
  },
  {
    title: "Libros y Manuales",
    value: "6",
    subtext: "3 Libros + 3 Manuales UCO",
    desc: "Obras editoriales: 'Esta Zanahoria Pa' Qué', 'Pa' Quién', Emprender, Exportar y Catálogo.",
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    accent: "border-purple-400"
  },
  {
    title: "Prototipos Diseñados",
    value: "5",
    subtext: "Prototipos TRL 6 - TRL 7",
    desc: "3 Alimentarios + 2 Bioingredientes Cosméticos/Farmacéuticos.",
    icon: <Beaker className="w-6 h-6 text-amber-400" />,
    accent: "border-amber-400"
  }
];

const mainMetricsEn = [
  {
    title: "Student Training & Theses",
    value: "7",
    subtext: "4 Master's + 3 Undergraduates",
    desc: "Thesis researchers enrolled and graduated within the inter-institutional alliance.",
    icon: <GraduationCap className="w-6 h-6 text-[#DE5A30]" />,
    accent: "border-[#DE5A30]"
  },
  {
    title: "Benefited People",
    value: "+380",
    subtext: "Producers & Stakeholders",
    desc: "Regional stakeholders benefited directly through field plots, farm days, and training sessions.",
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    accent: "border-emerald-400"
  },
  {
    title: "Appropriation Events",
    value: "9",
    subtext: "Field Days, Fairs & ZanaFest",
    desc: "Technology transfer, agricultural field days, and scientific dissemination events.",
    icon: <Calendar className="w-6 h-6 text-[#D4CF7D]" />,
    accent: "border-[#D4CF7D]"
  },
  {
    title: "Scientific Articles",
    value: "10",
    subtext: "Indexed Articles Published",
    desc: "Scientific publications in high-impact indexed journals (Heliyon, PeerJ, MDPI, Wiley).",
    icon: <FileText className="w-6 h-6 text-sky-400" />,
    accent: "border-sky-400"
  },
  {
    title: "Books & Manuals",
    value: "6",
    subtext: "3 Books + 3 UCO Manuals",
    desc: "Editorial works: 'This Carrot For What?', 'For Whom?', Undertake, Export, and Variety Catalog.",
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    accent: "border-purple-400"
  },
  {
    title: "Designed Prototypes",
    value: "5",
    subtext: "Prototypes TRL 6 - TRL 7",
    desc: "3 Food Prototypes + 2 Cosmetic/Pharmaceutical Bio-ingredients.",
    icon: <Beaker className="w-6 h-6 text-amber-400" />,
    accent: "border-amber-400"
  }
];

const researchTeam = [
  { name: "Juan Camilo Henao Rojas", roleEs: "Investigador Principal (Líder)", roleEn: "Principal Investigator (Lead)", entity: "AGROSAVIA" },
  { name: "Jorge Eliecer Jaramillo", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Carolina Zuluaga", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Cristian Domínguez", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Angela Maria Castaño", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Lucas Esteban Cano", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Luis Felipe Lopez", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Paola Andrea Hormaza", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Tatiana Alejandra Rodriguez", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Gleyder Yeraldin Bedoya", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Melissa Andrea Castañeda", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Robert Julio Ardila", roleEs: "Operario de Campo", roleEn: "Field Operator", entity: "AGROSAVIA" },
  { name: "Rocío Alexandra Ortíz", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Albeiro de Jesús Macías", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Mario Alonso Mesa", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Rosa Helen Mira Herrera", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Karen Ballestas Álvarez", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Luz Mary Quintero", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "German Franco", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Jose Antonio Rubiano", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Carolina Ortiz", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "AGROSAVIA" },
  { name: "Jaison Martínez", roleEs: "Tesista de Maestría", roleEn: "Master's Thesis Student", entity: "AGROSAVIA" },
  { name: "Mateo Londoño", roleEs: "Tesista de Maestría", roleEn: "Master's Thesis Student", entity: "INTAL" },
  { name: "Luis Salazar", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "INTAL" },
  { name: "Edison Osorio", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "UdeA" },
  { name: "Catalina Agudelo", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "UdeA" },
  { name: "Karent Bravo", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "UdeA" },
  { name: "Daniel Carvajal", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "UdeA" },
  { name: "Sergio Gonzales Lopez", roleEs: "Tesista de Maestría", roleEn: "Master's Thesis Student", entity: "UdeA" },
  { name: "Liliana Ceballos", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "UCO" },
  { name: "Claudia Lukau", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "UCO" },
  { name: "Jenny Milena Moreno", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "UCO" },
  { name: "Joaquin Guillermo Ramirez", roleEs: "Co-Investigador", roleEn: "Co-Investigator", entity: "UNal" },
  { name: "Paola Andrea Ospina", roleEs: "Tesista de Maestría", roleEn: "Master's Thesis Student", entity: "UNal" }
];

const problemsAndObjectivesEs = [
  {
    num: "01",
    cause: "Desconocimiento de las propiedades físicas, químicas y funcionales de los excedentes y nuevos cultivares en el sistema productivo de zanahoria. (Escasos paquetes tecnológicos basados en las características de los excedentes y nuevos materiales).",
    objective: "Caracterizar el potencial de los excedentes agronómicos y nuevos cultivares de zanahoria como materia prima para la generación de productos con valor agregado en el Oriente antioqueño.",
    activities: [
      "1. Estimación de los volúmenes de producción no utilizados y evaluación agronómica de cultivares promisorios de zanahoria.",
      "2. Determinación de las huellas espectrales asociadas a potencialidades biofuncionales de los excedentes y nuevos materiales de zanahoria.",
      "3. Caracterización física, química, fisicoquímica y sensorial de los excedentes y nuevos materiales de zanahoria."
    ],
    color: "from-[#DE5A30]/20 to-[#0F1A15]",
    accent: "text-[#DE5A30]"
  },
  {
    num: "02",
    cause: "Limitadas investigaciones enfocadas a la generación de prototipos de productos para la industria alimentaria. (Escasos prototipos de productos funcionales para la industria alimentaria para el sistema productivo de zanahoria en el oriente antioqueño).",
    objective: "Generar prototipos de productos funcionales para la industria alimentaria a partir de los excedentes o nuevos cultivares del sistema productivo de zanahoria para el Oriente Antioqueño.",
    activities: [
      "4. Priorización de las tecnologías para transformación de productos según normativas y adaptabilidad al entorno.",
      "5. Generación y prototipados de productos alimenticios sólidos, semisólidos y líquidos.",
      "6. Estimar y comunicar los aspectos biofuncionales, sensoriales y de vida útil diferenciadores de los prototipos alimentarios generados."
    ],
    color: "from-[#D4CF7D]/20 to-[#0F1A15]",
    accent: "text-[#D4CF7D]"
  },
  {
    num: "03",
    cause: "Limitadas investigaciones enfocadas a la generación de prototipos de productos para la industria farmacéutica. (Escasos prototipos de productos funcionales para la industria farmacéutica para el sistema productivo de zanahoria en el oriente antioqueño).",
    objective: "Generar prototipos de productos funcionales para la industria farmacéutica/cosmética a partir de los excedentes o nuevos cultivares en el sistema productivo de zanahoria del Oriente antioqueño.",
    activities: [
      "7. Evaluación de tecnologías para obtención de un extracto rico en apocarotenos con perspectiva farmacéutica.",
      "8. Desarrollo y caracterización de un ingrediente basado en fracciones ricas en carotenoides y apocarotenoides.",
      "9. Determinación de las características de estabilidad, antienvejecimiento, penetrabilidad y seguridad del ingrediente diseñado.",
      "10. Prototipado y escalado de la tecnología para fabricación del ingrediente diseñado."
    ],
    color: "from-[#5E824A]/20 to-[#0F1A15]",
    accent: "text-[#5E824A]"
  },
  {
    num: "04",
    cause: "Escasa información respecto a la cadena de valor, mercados potenciales y planes de negocio para la transformación de productos a base de zanahoria. (Desconocimiento de mercados potenciales).",
    objective: "Evaluar las oportunidades de mercado y comercialización de nuevos productos a partir de la zanahoria para el Oriente antioqueño mediante un modelo de negocios para productos prototipados.",
    activities: [
      "11. Levantamiento de la cadena de valor y oportunidades de mercado.",
      "12. Desarrollo de los modelos de negocios, Brief y planes de negocios.",
      "13. Desarrollo conceptual de los productos y divulgación.",
      "14. Fortalecimiento de gobernanza de las cadenas de valor de los productos generados."
    ],
    color: "from-[#4A2545]/30 to-[#0F1A15]",
    accent: "text-purple-400"
  }
];

const problemsAndObjectivesEn = [
  {
    num: "01",
    cause: "Lack of knowledge regarding physical, chemical, and functional properties of carrot surpluses and new cultivars in the production system. (Scarce technological packages based on surplus characteristics).",
    objective: "Characterize the potential of agronomic surpluses and new carrot cultivars as raw materials for the generation of value-added products in Eastern Antioquia.",
    activities: [
      "1. Estimation of unused production volumes and agronomic evaluation of promising carrot cultivars.",
      "2. Determination of spectral signatures associated with biofunctional potentials of carrot surpluses and new materials.",
      "3. Physical, chemical, physicochemical, and sensory characterization of carrot surpluses and new materials."
    ],
    color: "from-[#DE5A30]/20 to-[#0F1A15]",
    accent: "text-[#DE5A30]"
  },
  {
    num: "02",
    cause: "Limited research focused on generating product prototypes for the food industry. (Scarce functional food product prototypes derived from the carrot production system in Eastern Antioquia).",
    objective: "Generate functional product prototypes for the food industry from surpluses or new cultivars in the carrot production system of Eastern Antioquia.",
    activities: [
      "4. Technology prioritization for product transformation according to regulations and environmental adaptability.",
      "5. Generation and prototyping of solid, semi-solid, and liquid food products.",
      "6. Estimation and dissemination of distinguishing biofunctional, sensory, and shelf-life aspects of generated food prototypes."
    ],
    color: "from-[#D4CF7D]/20 to-[#0F1A15]",
    accent: "text-[#D4CF7D]"
  },
  {
    num: "03",
    cause: "Limited research focused on generating product prototypes for the pharmaceutical industry. (Scarce functional prototypes for cosmetic/pharma sectors derived from carrot crops).",
    objective: "Generate functional product prototypes for the pharmaceutical/cosmetics industry from surpluses or new cultivars in the carrot production system of Eastern Antioquia.",
    activities: [
      "7. Technology evaluation for obtaining an apocarotenoid-rich extract with pharmaceutical potential.",
      "8. Development and characterization of an active ingredient based on carotenoid and apocarotenoid fractions.",
      "9. Determination of stability, anti-aging, penetrability, and safety profiles of the designed ingredient.",
      "10. Prototyping and technology scaling for manufacturing the designed cosmetic ingredient."
    ],
    color: "from-[#5E824A]/20 to-[#0F1A15]",
    accent: "text-[#5E824A]"
  },
  {
    num: "04",
    cause: "Scarce information regarding the value chain, potential markets, and business plans for carrot-based product transformation. (Unawareness of potential markets).",
    objective: "Evaluate market opportunities and commercialization of new carrot products for Eastern Antioquia through tailored business models for prototyped products.",
    activities: [
      "11. Value chain mapping and identification of market opportunities.",
      "12. Development of business models, product briefs, and commercialization plans.",
      "13. Conceptual product development and scientific/commercial dissemination.",
      "14. Strengthening value chain governance for the developed agro-industrial products."
    ],
    color: "from-[#4A2545]/30 to-[#0F1A15]",
    accent: "text-purple-400"
  }
];

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const [showTeamModal, setShowTeamModal] = useState(false);

  const mainMetrics = language === 'en' ? mainMetricsEn : mainMetricsEs;
  const problemsAndObjectives = language === 'en' ? problemsAndObjectivesEn : problemsAndObjectivesEs;

  const infoCards = [
    { id: 'entidad', label: language === 'en' ? 'Executing Entity' : 'Entidad Ejecutora', value: 'AGROSAVIA', subValue: language === 'en' ? 'La Selva Research Center' : 'Centro C.I. La Selva', icon: <Building2 className="h-5 w-5 text-[#DE5A30]" /> },
    { id: 'equipo', label: language === 'en' ? 'Research Team' : 'Equipo Investigador', value: language === 'en' ? '34 Researchers' : '34 Investigadores', subValue: language === 'en' ? 'View full scientific team' : 'Ver equipo científico completo', icon: <Users className="h-5 w-5 text-emerald-400" />, clickable: true },
    { id: 'zona', label: language === 'en' ? 'Impact Region' : 'Región de Impacto', value: language === 'en' ? 'Eastern Antioquia' : 'Oriente Antioqueño', subValue: 'El Santuario, Marinilla, Rionegro', icon: <MapPin className="h-5 w-5 text-sky-400" /> },
    { id: 'periodo', label: language === 'en' ? 'Project Term' : 'Vigencia del Proyecto', value: '2022 — 2026', subValue: language === 'en' ? 'Royalties SGR Funding' : 'Financiación Regalías SGR', icon: <CalendarRange className="h-5 w-5 text-[#D4CF7D]" /> },
  ];

  return (
    <section id="sobre-el-proyecto" className="px-6 py-16 md:py-24 max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
      
      {/* ── Encabezado Principal de la Sección ── */}
      <SectionHeader
        badgeText={t.hdr_about_badge}
        title={t.hdr_about_title}
        subtitle={t.hdr_about_subtitle}
      />

      {/* ── Resumen Ejecutivo Corto de Contexto ── */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#0F1A15] via-[#15261F] to-[#0F1A15] border border-[#5E824A]/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Sparkles className="w-32 h-32 text-[#D4CF7D]" />
        </div>
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5E824A]/20 border border-[#5E824A]/40 text-[#D4CF7D] text-xs font-geist uppercase tracking-widest">
            <span>{language === 'en' ? 'Executive Synthesis' : 'Síntesis Ejecutiva'}</span>
          </div>
          <h3 className="font-sora text-xl sm:text-2xl font-semibold text-[#F0EDE1] leading-snug">
            {language === 'en' 
              ? 'Comprehensive transformation of the carrot production chain (2022–2026)' 
              : 'Transformación integral de la cadena productiva de la zanahoria (2022–2026)'
            }
          </h3>
          <p className="text-sm md:text-base text-[#F0EDE1]/80 font-light leading-relaxed">
            {language === 'en'
              ? 'Funded by the General Royalty System (SGR) under code BPIN 2020000100192, the project brings together AGROSAVIA, Universidad de Antioquia, Universidad Católica de Oriente, INTAL, Universidad Nacional, and Kavitec S.A.S. Over 4 years, postharvest losses affecting more than 380 regional producers were addressed, transforming agricultural discards into high-value bioeconomic prototypes.'
              : 'Financiado por el Sistema General de Regalías (SGR) con el código BPIN 2020000100192, el proyecto reúne a AGROSAVIA, Universidad de Antioquia, Universidad Católica de Oriente, INTAL, Universidad Nacional y Kavitec S.A.S. A lo largo de 4 años, se abordaron las pérdidas poscosecha que afectan a más de 380 productores de la región, convirtiendo mermas agrícolas en prototipos de valor bioeconómico.'
            }
          </p>

          <div className="mt-6 pt-6 border-t border-[#5E824A]/25 space-y-4">
            <h4 className="font-sora text-[#D4CF7D] text-sm font-semibold uppercase tracking-wider">
              {language === 'en' ? 'Project Specific Objectives:' : 'Objetivos Específicos del Proyecto:'}
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#F0EDE1]/70 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#D4CF7D] font-semibold mt-0.5 font-geist">1.</span>
                <span>{language === 'en' ? 'Characterize the potential of agronomic surpluses and new carrot cultivars as raw material for value-added products in Eastern Antioquia.' : 'Caracterizar el potencial de los excedentes agronómicos y nuevos cultivares de zanahoria como materia prima para la generación de productos con valor agregado en el Oriente Antioqueño.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4CF7D] font-semibold mt-0.5 font-geist">2.</span>
                <span>{language === 'en' ? 'Generate functional product prototypes for the food industry from surpluses or new cultivars in Eastern Antioquia.' : 'Generar prototipos de productos funcionales para la industria alimentaria a partir de los excedentes o nuevos cultivares del sistema productivo de zanahoria para el Oriente Antioqueño.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4CF7D] font-semibold mt-0.5 font-geist">3.</span>
                <span>{language === 'en' ? 'Generate functional product prototypes for the pharmaceutical/cosmetics industry from surpluses or new cultivars in Eastern Antioquia.' : 'Generar prototipos de productos funcionales para la industria farmacéutica/cosmética a partir de los excedentes o nuevos cultivares en el sistema productivo de zanahoria del Oriente Antioqueño.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4CF7D] font-semibold mt-0.5 font-geist">4.</span>
                <span>{language === 'en' ? 'Evaluate market opportunities and commercialization of new products through tailored business models for prototyped products.' : 'Evaluar las oportunidades de mercado y comercialización de nuevos productos a partir de la zanahoria para el Oriente antioqueño mediante un modelo de negocios para productos prototipados.'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── SECCIÓN 1 & 2: LOS 4 PROBLEMAS & LOS 4 OBJETIVOS CON SUS ACTIVIDADES ── */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#5E824A]/20 pb-4">
          <div>
            <span className="font-geist text-xs uppercase tracking-[0.25em] text-[#D4CF7D]">
              {language === 'en' ? 'Strategic Matrix' : 'Matriz Estratégica'}
            </span>
            <h3 className="font-sora text-2xl sm:text-3xl font-semibold text-[#F0EDE1] mt-1">
              {language === 'en' 
                ? '4 Territorial Challenges & 4 Solution Objectives' 
                : '4 Problemas Territoriales & 4 Objetivos de Solución'
              }
            </h3>
          </div>
          <p className="text-xs text-[#F0EDE1]/60 font-geist max-w-md">
            {language === 'en'
              ? 'Each scientific objective directly addresses a critical bottleneck identified in the horticultural production chain of Eastern Antioquia.'
              : 'Cada objetivo científico responde directamente a un nudo crítico identificado en la cadena productiva hortícola del Oriente Antioqueño.'
            }
          </p>
        </div>

        {/* Diagrama Interactivo del Árbol de Problemas y Árbol de Objetivos */}
        <TreeDiagram />

        {/* Rejilla de las 4 Causas Raíz vs 4 Objetivos Específicos Literales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemsAndObjectives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-8 rounded-3xl border border-[#5E824A]/20 bg-gradient-to-b ${item.color} backdrop-blur-md flex flex-col justify-between space-y-6 shadow-xl hover:border-[#5E824A]/40 transition-colors`}
            >
              {/* Encabezado: Número y Problema */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`font-sora text-3xl font-black ${item.accent}`}>
                    {item.num}
                  </span>
                  <span className="text-[10px] font-geist uppercase tracking-widest px-3 py-1 rounded-full bg-[#0F1A15]/80 border border-[#5E824A]/30 text-[#F0EDE1]/70">
                    {language === 'en' ? 'Root Cause → Specific Objective' : 'Causa Raíz → Objetivo Específico'}
                  </span>
                </div>

                {/* Caja de Causa Raíz */}
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-red-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-semibold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{language === 'en' ? 'Root Cause (5.3 Problem Tree):' : 'Causa Raíz (5.3 Árbol de Problemas):'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F0EDE1]/90 font-light leading-relaxed">
                    {item.cause}
                  </p>
                </div>

                {/* Caja de Objetivo Específico */}
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-[#5E824A]/40 space-y-2">
                  <div className="flex items-center gap-2 text-[#D4CF7D] text-xs font-semibold uppercase tracking-wider">
                    <Target className="w-4 h-4 shrink-0 text-[#DE5A30]" />
                    <span>{language === 'en' ? 'Specific Objective (12.4 Objective Tree):' : 'Objetivo Específico Literal (12.4 Árbol de Objetivos):'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F0EDE1] font-medium leading-snug">
                    {item.objective}
                  </p>
                </div>
              </div>

              {/* Lista de Actividades que componen el Objetivo */}
              <div className="border-t border-[#5E824A]/20 pt-4 space-y-2.5">
                <span className="text-[11px] font-geist text-[#D4CF7D] uppercase tracking-wider block font-semibold">
                  {language === 'en' ? 'Component Activities:' : 'Actividades Integrantes:'}
                </span>
                <ul className="space-y-2">
                  {item.activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs text-[#F0EDE1]/80 font-light leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5E824A] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── SECCIÓN 3: GENERALIDADES DEL PROYECTO, ENTIDADES Y EQUIPO ── */}
      <div className="space-y-8 border-t border-[#5E824A]/20 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-geist text-xs uppercase tracking-[0.25em] text-[#D4CF7D]">
              {language === 'en' ? 'Institutional Structure' : 'Estructura Institucional'}
            </span>
            <h3 className="font-sora text-2xl sm:text-3xl font-semibold text-[#F0EDE1] mt-1">
              {language === 'en' 
                ? 'Overview, Partner Entities & Scientific Team' 
                : 'Generalidades, Entidades Aliadas & Equipo Científico'
              }
            </h3>
          </div>
          <p className="text-xs text-[#F0EDE1]/60 font-geist max-w-md">
            {language === 'en' 
              ? 'Multisectoral governance and research talent across 5 allied institutions.' 
              : 'Gobernanza multisectorial y talento investigador de 5 instituciones aliadas.'
            }
          </p>
        </div>

        {/* Tarjetas de Información General (Generalidades) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, i) => {
            if (card.clickable) {
              return (
                <div
                  key={i}
                  onClick={() => setShowTeamModal(true)}
                  className="cursor-pointer group flex flex-col justify-between"
                >
                  <ArtFrame badge={card.label} className="h-full flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                    <div className="space-y-1">
                      <h4 className="font-headline-md text-[#F0EDE1] text-lg font-bold leading-snug">{card.value}</h4>
                      <p className="font-mono-data text-emerald-400 text-xs underline group-hover:text-emerald-300 transition-colors">{card.subValue}</p>
                    </div>
                  </ArtFrame>
                </div>
              );
            }
            return (
              <ArtFrame key={i} badge={card.label} className="h-full flex flex-col justify-between">
                <div className="space-y-1">
                  <h4 className="font-headline-md text-[#F0EDE1] text-lg font-bold leading-snug">{card.value}</h4>
                  <p className="font-mono-data text-[#F0EDE1]/60 text-xs">{card.subValue}</p>
                </div>
              </ArtFrame>
            );
          })}
        </div>

        {/* ── Rejilla de Indicadores MGA BPIN 2020000100192 (Las 6 Métricas Principales) ── */}
        <div className="space-y-4 pt-4 border-t border-[#5E824A]/20">
          <div className="flex items-center gap-2 px-3 py-1 text-xs font-geist text-[#D4CF7D]">
            <Sparkles className="w-4 h-4 text-[#DE5A30]" />
            <span className="uppercase tracking-widest font-semibold">
              {language === 'en' ? 'MGA BPIN 2020000100192 Indicators' : 'Indicadores MGA BPIN 2020000100192'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainMetrics.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-[#0F1A15]/90 border ${item.accent}/40 backdrop-blur-md flex flex-col justify-between space-y-4 shadow-xl hover:border-white/40 transition-all group`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <span className="font-sora text-4xl sm:text-5xl font-black text-[#F0EDE1] tracking-tight group-hover:scale-105 transition-transform">
                    {item.value}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-sora text-lg font-bold text-[#F0EDE1]">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-[#D4CF7D] block font-semibold">
                    {item.subtext}
                  </span>
                  <p className="text-xs text-[#F0EDE1]/70 font-light leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rejilla Multimedia: Video y Libro de Divulgación + Indicadores Regionales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Panel Izquierdo: Videos de Parche del Agro */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4CF7D] font-semibold font-geist">
                {language === 'en' ? 'Learn about the project:' : 'Conoce el proyecto:'}
              </span>
              <h4 className="font-sora text-base font-semibold text-[#F0EDE1]">El Parche del Agro</h4>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[#5E824A]/30 shadow-lg bg-[#0F1A15]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6WUb2SOZTMw"
                  title="El Parche del Agro - Capítulo 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[#5E824A]/30 shadow-lg bg-[#0F1A15]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/okU0LUBh7no"
                  title="El Parche del Agro - Capítulo 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[#5E824A]/30 shadow-lg bg-[#0F1A15]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2RAqNHrmPX8"
                  title="El Parche del Agro - Capítulo 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Panel Derecho: Descripción Extensa */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-between">

            {/* Texto Descriptivo Extenso del Proyecto */}
            <div className="space-y-4 p-6 rounded-3xl bg-[#0F1A15]/60 border border-[#5E824A]/20 text-[#F0EDE1]/80 font-light text-sm sm:text-base leading-relaxed">
              <p>
                {language === 'en'
                  ? 'The "Antioquia Zana" project emerges as a strategic initiative to strengthen the carrot value chain in Eastern Antioquia, one of the most important horticultural zones in the department. Through an unprecedented inter-institutional alliance, this effort gathers academia, research centers, private industry, and local communities to generate sustainable and innovative solutions against agricultural discard and seasonal oversupply.'
                  : 'El proyecto "Antioquia Zana" surge como una iniciativa estratégica para fortalecer la cadena de valor de la zanahoria en el Oriente Antioqueño, una de las zonas hortícolas más importantes del departamento. A través de una alianza interinstitucional sin precedentes, este esfuerzo reúne a la academia, centros de investigación, la empresa privada y las comunidades locales con el propósito de generar soluciones innovadoras y sostenibles frente a las problemáticas del descarte agrícola y la sobreoferta estacional.'
                }
              </p>
              <p>
                {language === 'en'
                  ? 'Under an applied research and technological development framework, the initiative seeks to transform harvest surpluses into high value-added prototypes, fostering a transition towards a solid regional bioeconomy. This collaborative model integrates cutting-edge scientific methodology while respecting traditional agrarian knowledge, enabling continuous dialogue between laboratory and field.'
                  : 'Bajo un enfoque de investigación aplicada y desarrollo tecnológico, la iniciativa busca transformar los excedentes de las cosechas en nuevos productos de alto valor agregado, fomentando la transición hacia una bioeconomía regional más sólida. Este modelo de trabajo colaborativo no solo integra el conocimiento científico de última generación, sino que también rescata y respeta los saberes tradicionales de los agricultores de la región, propiciando un diálogo constante entre el laboratorio y el campo.'
                }
              </p>
              <p>
                {language === 'en'
                  ? 'The project outcomes materialize across complementary impact areas: developing clean preservation and processing alternatives for functional food and animal nutrition, while researching cosmeceutical and skin care bio-ingredients from natural active compounds, alongside comprehensive business feasibility studies ensuring commercial viability.'
                  : 'Los esfuerzos del proyecto se materializan en múltiples áreas de impacto complementarias. Por un lado, se desarrollan alternativas para el procesamiento y conservación de alimentos funcionales y de nutrición animal. Por otro lado, se investigan aplicaciones en el sector cosmético y del cuidado de la piel mediante el aprovechamiento de compuestos activos naturales. De manera simultánea, se estructuran estudios de viabilidad y modelos de negocio que aseguren la rentabilidad y sostenibilidad de estas innovaciones.'
                }
              </p>
              <p>
                {language === 'en'
                  ? 'The ultimate impact of Antioquia Zana transcends technical outputs to focus on economic and social empowerment, training producer associations to diversify income streams and optimize commercialization channels for a more competitive and sustainable countryside.'
                  : 'El impacto final de Antioquia Zana trasciende los resultados técnicos y se enfoca en el desarrollo social y económico. A través de talleres prácticos, capacitaciones y eventos de apropiación del conocimiento, se busca empoderar a las asociaciones de productores locales para que puedan diversificar sus ingresos y mejorar sus circuitos de comercialización, sembrando las bases para un campo más competitivo, sostenible y orientado al bienestar de sus comunidades.'
                }
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowTeamModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5E824A]/20 border border-[#5E824A]/40 text-[#D4CF7D] text-xs font-geist hover:bg-[#5E824A]/40 transition-colors"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Meet the Research Team' : 'Conocer el Equipo de Investigación'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Modal del Equipo Investigador ── */}
      <AnimatePresence>
        {showTeamModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => setShowTeamModal(false)} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="z-10 w-full max-w-2xl bg-[#0F1A15] border border-[#5E824A]/40 p-6 md:p-8 rounded-3xl shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowTeamModal(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#5E824A]/20 border border-[#5E824A]/40 text-[#D4CF7D]">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#F0EDE1] leading-tight font-sora">
                    {language === 'en' ? 'Research Team & Collaborators' : 'Equipo de Investigación & Colaboradores'}
                  </h3>
                  <span className="text-xs font-geist text-[#D4CF7D]">Proyecto Antioquia Zana · SGR Regalías BPIN 2020000100192</span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-[#F0EDE1]/70 leading-relaxed font-light mb-6">
                {language === 'en'
                  ? 'Researchers, faculty, scientific personnel, and thesis students from AGROSAVIA, UdeA, UCO, INTAL, and UNAL:'
                  : 'Investigadores, personal científico, técnico y tesistas de AGROSAVIA, UdeA, UCO, INTAL y UNal que hicieron posible el desarrollo del proyecto:'
                }
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 border-t border-[#5E824A]/20 pt-5 max-h-[45vh] overflow-y-auto pr-2">
                {researchTeam.map((member: any, idx) => {
                  const role = language === 'en' ? member.roleEn : member.roleEs;
                  const isLead = member.roleEs.includes("Investigador Principal");
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${isLead
                        ? 'bg-[#5E824A]/20 border-[#5E824A]/50 text-[#F0EDE1]'
                        : 'bg-[#0F1A15]/80 border-[#5E824A]/20 text-[#F0EDE1]/80 hover:bg-[#15261F]'
                        }`}
                    >
                      <div className={`h-2 w-2 rounded-full ${isLead ? 'bg-[#DE5A30] shrink-0' : 'bg-[#5E824A] shrink-0'}`} />
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs md:text-sm font-semibold leading-tight font-sora">
                            {member.name}
                          </span>
                          <span className="text-[9px] font-geist px-2 py-0.5 rounded-full bg-[#0F1A15] border border-[#5E824A]/30 text-[#D4CF7D]">
                            {member.entity}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#F0EDE1]/60 font-light mt-0.5">
                          {role}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end border-t border-[#5E824A]/20 pt-5 mt-6">
                <button
                  onClick={() => setShowTeamModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#DE5A30] text-white font-semibold text-xs hover:bg-[#DE5A30]/90 transition-colors shadow-lg"
                >
                  {language === 'en' ? 'Close Window' : 'Cerrar Ventana'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
