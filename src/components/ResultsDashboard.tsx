import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  FileText, 
  BookOpen, 
  Award, 
  Download, 
  Beaker,
  Sparkles,
  ChevronDown
} from 'lucide-react';

interface ThesisStudent {
  name: string;
  level: string; // "Maestría" | "Pregrado"
  program: string;
  distinction: string; // "Sí (Meritoria)" | "No"
  title: string;
  directors: string;
  downloadLink: string;
}

const thesisList: ThesisStudent[] = [
  {
    name: "Ing. Mateo Londoño Valencia",
    level: "Maestría",
    program: "Maestría en Ciencia y Tecnología de Alimentos (INTAL / UdeA)",
    distinction: "Tesis Aprobada",
    title: "Desarrollo y caracterización de un prototipo alimentario tipo papilla a partir de excedentes de zanahoria (Daucus carota) procesados mediante cavitación hidrotermodinámica",
    directors: "Director: PhD. Luis A. Salazar Hoyos | Co-director: MSc. Juan C. Henao Rojas | Asesores: PhD. Álvaro Arango Ruíz, PhD. Juan F. Montoya Carvajal",
    downloadLink: "/entregables objetivos/Objetivo 2/2.6 Tesista de Maestria 3 (Intal)/2.6.3 Tesis maestria- Mateo Londoño V.pdf"
  },
  {
    name: "Jaison Martínez Saldarriaga",
    level: "Maestría",
    program: "Maestría en Ciencia y Tecnología de Alimentos (Universidad Nacional de Colombia - Sede Medellín)",
    distinction: "Sí (Distinción Laureada - UNAL)",
    title: "Caracterización multidimensional y usos potenciales de los excedentes productivos de zanahoria (Daucus carota) en el oriente del departamento de Antioquia",
    directors: "Director: Prof. Juan Camilo Henao Rojas | Codirigida por: Prof. Diana Paola Yepes Betancur y Prof. Edith Marleny Cadena Chamorro",
    downloadLink: "/entregables objetivos/Objetivo 2/2.1 Tesista Maestria 1 (Agrosavia)/2.1.3 Distincion Laureada UNAL.jpg"
  },
  {
    name: "Paola Andrea Ospina Sánchez",
    level: "Maestría",
    program: "Maestría en Geomática (Universidad Nacional de Colombia - Sede Bogotá)",
    distinction: "Sí (Distinción Meritoria - Res. 323 de 2025)",
    title: "Modelación de la calidad multidimensional en zanahoria a partir de respuestas espectrales, imágenes y percepción del consumidor",
    directors: "Director: Joaquín Guillermo Ramírez Gil (UNAL Sede Bogotá) | Codirector: Juan Camilo Henao Rojas (AGROSAVIA)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.2 Tesista de Maestria 2 (UNal)/2.2.2 RESOLUCION 323 DE 2025 DISTINCION MERITORIA PAOLA _260327_095657.pdf"
  },
  {
    name: "Sergio González López",
    level: "Maestría",
    program: "Maestría en Ciencias Farmacéuticas y Alimentarias (Línea: Productos Naturales - Universidad de Antioquia)",
    distinction: "En Evaluación de Trabajo de Grado",
    title: "Study of the cytotoxic effect mediated by a pro-oxidant mechanism of carotenoids on gastric cancer cells",
    directors: "Facultad de Ciencias Farmacéuticas y Alimentarias (UdeA)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.8 Tesista de Maestria 4 (U de A) PENDIENTE SUSTENTACION/Certificado de entrega de tesis de maestría.pdf"
  },
  {
    name: "Daniela López Galeano",
    level: "Pregrado",
    program: "Comercio Exterior (Universidad Católica de Oriente - UCO)",
    distinction: "Grado Obtenido (Acta y Diploma)",
    title: "Estudiante Vinculada de Pregrado - Convenio de Investigación UCO",
    directors: "Universidad Católica de Oriente (UCO)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.11 Estudiante vinculado pregrado UCO 3/ACTA DE GRADO.pdf"
  },
  {
    name: "Yeslin Ochoa Marín",
    level: "Pregrado",
    program: "Comercio Exterior (Universidad Católica de Oriente - UCO)",
    distinction: "Grado Obtenido (Acta y Diploma)",
    title: "Estudiante Vinculada de Pregrado - Convenio de Investigación UCO",
    directors: "Universidad Católica de Oriente (UCO)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.10 Estudiante vinculado pregrado UCO 2/Acta de grado y Diploma - Comex.pdf"
  },
  {
    name: "María Alejandra Muñoz Moya",
    level: "Pregrado",
    program: "Doble Titulación: Admon. de Empresas y Comercio Exterior (Universidad Católica de Oriente - UCO)",
    distinction: "Estudiante Vinculada",
    title: "Estudiante Vinculada de Pregrado - Convenio de Investigación UCO",
    directors: "Universidad Católica de Oriente (UCO)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.9 Estudiante vinculado pregrado UCO 1/2.9.1 Estudiante con doble titulacion"
  }
];

const metricsOverview = [
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

export default function ResultsDashboard() {
  const [activeTab, setActiveTab] = useState<'metrics' | 'thesis'>('metrics');

  return (
    <div className="w-full space-y-12">
      
      {/* ── Switcher de Pestañas en Resultados ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl bg-[#0F1A15] border border-[#5E824A]/30">
        <div className="flex items-center gap-2 px-3 py-1 text-xs font-geist text-[#D4CF7D]">
          <Sparkles className="w-4 h-4 text-[#DE5A30]" />
          <span className="uppercase tracking-widest font-semibold">Indicadores MGA BPIN 2020000100192</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-geist transition-all cursor-pointer ${
              activeTab === 'metrics'
                ? 'bg-[#DE5A30] text-white font-semibold shadow-lg'
                : 'text-[#F0EDE1]/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Métricas Principales</span>
          </button>

          <button
            onClick={() => setActiveTab('thesis')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-geist transition-all cursor-pointer ${
              activeTab === 'thesis'
                ? 'bg-[#5E824A]/30 text-[#D4CF7D] font-semibold border border-[#5E824A] shadow-lg'
                : 'text-[#F0EDE1]/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-[#D4CF7D]" />
            <span>Formación de Estudiantes & Tesis (7)</span>
          </button>
        </div>
      </div>

      {/* ── Renderizado de Pestaña 1: Métricas Principales (Observación 10) ── */}
      <AnimatePresence mode="wait">
        {activeTab === 'metrics' ? (
          <motion.div
            key="results-metrics"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Rejilla de las 6 Métricas Principales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {metricsOverview.map((item, idx) => (
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

            {/* Acceso Directo a las Tesis desde la misma Landing (Observación 10) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F1A15] via-[#15261F] to-[#0F1A15] border border-[#5E824A]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#D4CF7D] text-xs font-geist uppercase tracking-widest font-semibold">
                  <GraduationCap className="w-4 h-4 text-[#DE5A30]" />
                  <span>Repositorio de Tesis Académicas</span>
                </div>
                <h4 className="font-sora text-xl font-bold text-[#F0EDE1]">
                  Consulta las Tesis de Maestría y Pregrado del Proyecto
                </h4>
                <p className="text-xs text-[#F0EDE1]/70 font-light max-w-2xl">
                  Accede a los documentos finales completos desarrollados por los 7 estudiantes formados en AGROSAVIA, UdeA, UCO, INTAL y UNAL.
                </p>
              </div>

              <button
                onClick={() => setActiveTab('thesis')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#DE5A30] text-white font-sora font-semibold text-xs hover:bg-[#DE5A30]/90 transition-colors shadow-lg shrink-0 cursor-pointer"
              >
                <span>Ver Tesis para Descargar</span>
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* ── Renderizado de Pestaña 2: Sección de Tesis (Observación 11) ── */
          <motion.div
            key="results-thesis"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="border-b border-[#5E824A]/20 pb-4">
              <span className="font-geist text-xs uppercase tracking-widest text-[#D4CF7D]">Formación de Talento Humano</span>
              <h3 className="font-sora text-2xl font-bold text-[#F0EDE1] mt-1">
                Tesis y Trabajos de Grado (7 Estudiantes Formados)
              </h3>
              <p className="text-xs text-[#F0EDE1]/70 font-light mt-1">
                Información oficial verificada del equipo científico (Nombre, Programa, Distinción, Título, Directores y enlace directo PDF).
              </p>
            </div>

            {/* Listado de las 7 Tesis (Formato Estricto Observación 11) */}
            <div className="grid grid-cols-1 gap-4">
              {thesisList.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#0F1A15]/90 border border-[#5E824A]/30 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#5E824A]/60 transition-all shadow-lg"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#DE5A30]/20 border border-[#DE5A30]/40 text-[#DE5A30] text-xs font-sora font-extrabold">
                        {st.level}
                      </span>
                      {st.distinction.includes("Sí") && (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-geist font-semibold flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          <span>Distinción: {st.distinction}</span>
                        </span>
                      )}
                      <span className="text-xs font-geist text-[#D4CF7D]">
                        {st.program}
                      </span>
                    </div>

                    <h4 className="font-sora text-base sm:text-lg font-bold text-[#F0EDE1] leading-snug">
                      {st.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#F0EDE1]/90 font-light italic leading-relaxed">
                      "{st.title}"
                    </p>

                    <span className="text-[11px] font-geist text-[#F0EDE1]/60 block pt-1">
                      {st.directors}
                    </span>
                  </div>

                  {/* Enlace de Descargar Tesis PDF */}
                  <a
                    href={st.downloadLink}
                    download
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#5E824A]/20 border border-[#5E824A]/50 text-[#D4CF7D] font-sora text-xs font-semibold hover:bg-[#5E824A] hover:text-white transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar Tesis PDF</span>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
