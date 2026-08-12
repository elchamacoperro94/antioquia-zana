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
  ArrowRight,
  BookOpen,
  Sparkles,
  FileText
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ArtFrame from '../components/ArtFrame';
import TreeDiagram from '../components/TreeDiagram';
import { regionStats } from '../data/projectData';

const researchTeam = [
  { name: "Juan Camilo Henao Rojas", role: "Investigador Principal (Líder)", entity: "AGROSAVIA" },
  { name: "Jorge Eliecer Jaramillo", role: "Investigador Co-principal", entity: "AGROSAVIA" },
  { name: "Carolina Zuluaga", role: "Investigadora", entity: "AGROSAVIA" },
  { name: "Cristian Domínguez", role: "Investigador", entity: "AGROSAVIA" },
  { name: "Rocío Alexandra Ortíz-Paz", role: "Investigadora Fitosanitaria", entity: "AGROSAVIA" },
  { name: "Albeiro de Jesús Macías", role: "Investigador", entity: "AGROSAVIA" },
  { name: "Mario Alonso Mesa", role: "Investigador Colaborador", entity: "UdeA" },
  { name: "Rosa Helen Mira Herrera", role: "Investigadora", entity: "AGROSAVIA" },
  { name: "Karen Ballestas Álvarez", role: "Investigadora", entity: "AGROSAVIA" },
  { name: "Luz Mary Quintero", role: "Apoyo Técnico", entity: "AGROSAVIA" },
  { name: "German Franco", role: "Investigador Colaborador", entity: "UNal" },
  { name: "Jose Antonio Rubiano", role: "Investigador", entity: "AGROSAVIA" },
  { name: "Carolina Ortiz", role: "Investigadora Colaboradora", entity: "UdeA" },
  { name: "Jaison Martínez", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Yeraldine Bedoya", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Mateo Londoño", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Luis Salazar", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Edison Osorio", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Catalina Agudelo", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Karent Bravo", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Daniel Carvajal", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Liliana Ceballos", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Claudia Lukau", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Jenny Milena Moreno", role: "Investigadora Colaboradora", entity: "UCO" }
];

const problemsAndObjectives = [
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

export default function About() {
  const [showTeamModal, setShowTeamModal] = useState(false);

  const infoCards = [
    { id: 'entidad', label: 'Entidad Ejecutora', value: 'AGROSAVIA', subValue: 'Centro C.I. La Selva', icon: <Building2 className="h-5 w-5 text-[#DE5A30]" /> },
    { id: 'equipo', label: 'Equipo Investigador', value: '24 Investigadores', subValue: 'Ver equipo científico completo', icon: <Users className="h-5 w-5 text-emerald-400" />, clickable: true },
    { id: 'zona', label: 'Región de Impacto', value: 'Oriente Antioqueño', subValue: 'El Santuario, Marinilla, Rionegro', icon: <MapPin className="h-5 w-5 text-sky-400" /> },
    { id: 'periodo', label: 'Vigencia del Proyecto', value: '2022 — 2026', subValue: 'Financiación Regalías SGR', icon: <CalendarRange className="h-5 w-5 text-[#D4CF7D]" /> },
  ];

  return (
    <section id="sobre-el-proyecto" className="px-6 py-16 md:py-24 max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
      
      {/* ── Encabezado Principal de la Sección ── */}
      <SectionHeader
        badgeText="Arquitectura del Proyecto"
        title="El Proyecto Antioquia Zana"
        subtitle="De la problemática territorial a la investigación aplicada: 4 problemas clave resueltos mediante 4 objetivos y 14 actividades científicas."
      />

      {/* ── Resumen Ejecutivo Corto de Contexto ── */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#0F1A15] via-[#15261F] to-[#0F1A15] border border-[#5E824A]/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Sparkles className="w-32 h-32 text-[#D4CF7D]" />
        </div>
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5E824A]/20 border border-[#5E824A]/40 text-[#D4CF7D] text-xs font-geist uppercase tracking-widest">
            <span>Síntesis Ejecutiva</span>
          </div>
          <h3 className="font-sora text-xl sm:text-2xl font-semibold text-[#F0EDE1] leading-snug">
            Transformación integral de la cadena productiva de la zanahoria (2022–2026)
          </h3>
          <p className="text-sm md:text-base text-[#F0EDE1]/80 font-light leading-relaxed">
            Financiado por el Sistema General de Regalías (SGR) con el código <strong>BPIN 2020000100192</strong>, el proyecto reúne a <strong>AGROSAVIA, Universidad de Antioquia, Universidad Católica de Oriente, INTAL y Universidad Nacional</strong>. A lo largo de 4 años, se abordaron las pérdidas poscosecha que afectan a más de 1.000 familias en El Santuario y Marinilla, convirtiendo mermas agrícolas en prototipos de valor bioeconómico.
          </p>
        </div>
      </div>

      {/* ── SECCIÓN 1 & 2: LOS 4 PROBLEMAS & LOS 4 OBJETIVOS CON SUS ACTIVIDADES ── */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#5E824A]/20 pb-4">
          <div>
            <span className="font-geist text-xs uppercase tracking-[0.25em] text-[#D4CF7D]">Matriz Estratégica</span>
            <h3 className="font-sora text-2xl sm:text-3xl font-semibold text-[#F0EDE1] mt-1">
              4 Problemas Territoriales & 4 Objetivos de Solución
            </h3>
          </div>
          <p className="text-xs text-[#F0EDE1]/60 font-geist max-w-md">
            Cada objetivo científico responde directamente a un nudo crítico identificado en la cadena productiva hortícola del Oriente Antioqueño.
          </p>
        </div>

        {/* Diagrama Interactivo del Árbol de Problemas (5.3) y Árbol de Objetivos (12.4) */}
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
                    Causa Raíz → Objetivo Específico
                  </span>
                </div>

                {/* Caja de Causa Raíz (5.3 Árbol de Problemas) */}
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-red-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-semibold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Causa Raíz (5.3 Árbol de Problemas):</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F0EDE1]/90 font-light leading-relaxed">
                    {item.cause}
                  </p>
                </div>

                {/* Caja de Objetivo Específico (12.4 Árbol de Objetivos) */}
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-[#5E824A]/40 space-y-2">
                  <div className="flex items-center gap-2 text-[#D4CF7D] text-xs font-semibold uppercase tracking-wider">
                    <Target className="w-4 h-4 shrink-0 text-[#DE5A30]" />
                    <span>Objetivo Específico Literal (12.4 Árbol de Objetivos):</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F0EDE1] font-medium leading-snug">
                    {item.objective}
                  </p>
                </div>
              </div>

              {/* Lista de Actividades que componen el Objetivo */}
              <div className="border-t border-[#5E824A]/20 pt-4 space-y-2.5">
                <span className="text-[11px] font-geist text-[#D4CF7D] uppercase tracking-wider block font-semibold">
                  Actividades Integrantes:
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
            <span className="font-geist text-xs uppercase tracking-[0.25em] text-[#D4CF7D]">Estructura Institucional</span>
            <h3 className="font-sora text-2xl sm:text-3xl font-semibold text-[#F0EDE1] mt-1">
              Generalidades, Entidades Aliadas & Equipo Científico
            </h3>
          </div>
          <p className="text-xs text-[#F0EDE1]/60 font-geist max-w-md">
            Gobernanza multisectorial y talento investigador de 5 instituciones aliadas.
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

        {/* Rejilla Multimedia: Video y Libro de Divulgación + Indicadores Regionales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Panel Izquierdo: Video e Informe Libro */}
          <div className="lg:col-span-1 flex flex-col gap-6 justify-between">
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[#5E824A]/30 shadow-lg bg-[#0F1A15]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_f6V2en_rGM"
                title="Antioquia Zana Video de Divulgación"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Tarjeta del Libro Descargable */}
            <div className="glass-card p-5 rounded-2xl border border-[#5E824A]/30 flex flex-col justify-between bg-[#0F1A15]/60">
              <a
                href="/entregables objetivos/Objetivo 1/1.11. Documento sobre la importancia de la transformación en el sector hortícola colombiano/1.11 documento Esta Zanahoria Pa que.pdf"
                download
                title="Descargar libro completo"
                className="relative w-full h-36 rounded-xl overflow-hidden border border-white/10 shadow-md group block cursor-pointer"
              >
                <img
                  src="/libro-portada.jpg"
                  alt="Libro ¿Esta Zanahoria Pa' Qué?"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/90 text-white font-mono text-xs font-semibold flex items-center gap-2 border border-emerald-400/30 shadow-lg">
                    <BookOpen className="w-4 h-4" />
                    <span>Descargar Libro PDF</span>
                  </div>
                </div>
              </a>
              <div className="mt-3 border-t border-[#5E824A]/20 pt-2 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-[#F0EDE1] font-mono">
                    ¿Esta zanahoria pa' qué?
                  </h4>
                  <p className="text-[10px] text-[#F0EDE1]/60 font-light mt-0.5">
                    Libro oficial de divulgación de rutas de innovación.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Panel Derecho: Estadísticas del Territorio y Descripción Extensa */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-between">
            {/* Fila de Estadísticas */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#0F1A15]/80 border border-[#5E824A]/30 rounded-3xl">
              {regionStats.map((stat, idx) => {
                let cleanValue = stat.value;
                let cleanLabel = stat.label;

                if (cleanValue.includes(" ha")) {
                  cleanValue = "600";
                  cleanLabel = "Hectáreas Sembradas";
                } else if (cleanValue.includes(" t/año")) {
                  cleanValue = "46.8k";
                  cleanLabel = "Tons / Año";
                } else if (cleanValue.includes("25–30%")) {
                  cleanValue = "30%";
                  cleanLabel = "Merma No Comercial";
                }

                return (
                  <div
                    key={idx}
                    className="text-center space-y-1 border-r border-[#5E824A]/20 last:border-0 pr-2"
                  >
                    <h3 className="font-sora text-3xl sm:text-4xl text-[#DE5A30] font-black">{cleanValue}</h3>
                    <p className="font-geist text-[11px] text-[#F0EDE1]/60 uppercase tracking-wider">{cleanLabel}</p>
                  </div>
                );
              })}
            </div>

            {/* Texto Descriptivo Extenso del Proyecto */}
            <div className="space-y-4 p-6 rounded-3xl bg-[#0F1A15]/60 border border-[#5E824A]/20 text-[#F0EDE1]/80 font-light text-sm sm:text-base leading-relaxed">
              <p>
                El Oriente Antioqueño (especialmente los municipios de <strong>El Santuario, Marinilla, Rionegro y San Pedro de los Milagros</strong>) constituye la despensa hortícola principal del departamento de Antioquia. No obstante, los agricultores enfrentan pérdidas poscosecha constantes asociadas a criterios estéticos de mercado y sobreoferta estacional.
              </p>
              <p>
                A través de metodologías de química verde, biotecnología y diseño agroindustrial, <strong>Antioquia Zana</strong> demostró la viabilidad de transformar excedentes en ingredientes de valor agregado para las industrias alimentaria, cosmética y veterinaria, consolidando una red interinstitucional de transferencia tecnológica directa con el territorio.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowTeamModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5E824A]/20 border border-[#5E824A]/40 text-[#D4CF7D] text-xs font-geist hover:bg-[#5E824A]/40 transition-colors"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Conocer el Equipo de Investigación</span>
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
                    Equipo de Investigación & Colaboradores
                  </h3>
                  <span className="text-xs font-geist text-[#D4CF7D]">Proyecto Antioquia Zana · SGR Regalías BPIN 2020000100192</span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-[#F0EDE1]/70 leading-relaxed font-light mb-6">
                Investigadores, personal científico, técnico y tesistas de AGROSAVIA, UdeA, UCO, INTAL y UNal que hicieron posible el desarrollo del proyecto:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 border-t border-[#5E824A]/20 pt-5 max-h-[45vh] overflow-y-auto pr-2">
                {researchTeam.map((member: any, idx) => {
                  const isLead = member.role.includes("Investigador Principal");
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
                          {member.role}
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
                  Cerrar Ventana
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
