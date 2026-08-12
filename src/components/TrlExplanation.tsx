import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  FlaskConical, 
  Factory, 
  Rocket, 
  ShieldCheck, 
  Info,
  ArrowRight,
  Maximize2
} from 'lucide-react';

const trlStages = [
  {
    level: "TRL 1",
    phase: "Investigación Básica",
    title: "Principios Básicos Observados",
    desc: "Observación y reporte de propiedades fisicoquímicas iniciales de la zanahoria.",
    status: "completado",
    range: "1-3"
  },
  {
    level: "TRL 2",
    phase: "Investigación Básica",
    title: "Concepto Tecnológico Formulado",
    desc: "Formulación teórica del uso de excedentes para extracción de carotenoides y fibras.",
    status: "completado",
    range: "1-3"
  },
  {
    level: "TRL 3",
    phase: "Investigación Aplicada",
    title: "Prueba de Concepto en Laboratorio",
    desc: "Ensayos experimentales de cavitación (CHTD) y foto-oxidación con reactivo de Fenton.",
    status: "completado",
    range: "1-3"
  },
  {
    level: "TRL 4",
    phase: "Desarrollo Tecnológico",
    title: "Validación de Componentes en Lab",
    desc: "Formulación a escala matraz de ZanaPure, ZanaPet, Gomas y Nanocarriers NLC (<400nm).",
    status: "completado",
    range: "4-5"
  },
  {
    level: "TRL 5",
    phase: "Desarrollo Tecnológico",
    title: "Validación en Entorno Relevante",
    desc: "Ensayos in-vitro bajo 4 guías OCDE y pruebas de estabilidad acelerada (40°C / 75% HR).",
    status: "completado",
    range: "4-5"
  },
  {
    level: "TRL 6",
    phase: "Demostración Piloto",
    title: "Demostración de Prototipo en Planta Piloto",
    desc: "Escalamiento operacional por lotes en plantas piloto de Multialoe S.A.S. e INTAL.",
    status: "alcanzado",
    highlight: true,
    range: "6-7"
  },
  {
    level: "TRL 7",
    phase: "Demostración Operacional",
    title: "Demostración en Entorno Operacional Real",
    desc: "Validación sensorial con 70 panelistas, empaques doypack y pruebas con 190 agricultores.",
    status: "alcanzado",
    highlight: true,
    range: "6-7"
  },
  {
    level: "TRL 8",
    phase: "Comercialización",
    title: "Sistema Completo y Calificado",
    desc: "Certificaciones INVIMA completas y registro de marca comercial para venta masiva.",
    status: "futuro",
    range: "8-9"
  },
  {
    level: "TRL 9",
    phase: "Comercialización",
    title: "Despliegue Comercial Masivo",
    desc: "Comercialización recurrente en cadenas de supermercados, pet shops y farmacias.",
    status: "futuro",
    range: "8-9"
  }
];

const roadmapSteps = [
  {
    step: "01",
    title: "Fase 1: Caracterización y Ciencia Básica (TRL 1 - 3)",
    date: "2022 — 2023",
    items: [
      "Mapeo de pérdidas agrícolas en El Santuario y Marinilla (25-30% de merma).",
      "Análisis multicriterio de 117 muestras de zanahoria y modelos de firmas NIRS.",
      "Reacción fotoquímica UV + Fenton para obtener fracciones ricas en apocarotenoides."
    ]
  },
  {
    step: "02",
    title: "Fase 2: Formulación e Ingeniería de Procesos (TRL 4 - 5)",
    date: "2023 — 2024",
    items: [
      "Formulación de compota ZanaPure con cavitación hidrotermodinámica (CHTD).",
      "Diseño de snacks veterinarios ZanaPet y gomas funcionales enriquecidas.",
      "Encapsulación coloidal de apocarotenoides en Nanocarriers Lipídicos NLC (<400nm).",
      "Ensayos in-vitro de viabilidad celular (>92%) y foto-protección bajo normas OCDE."
    ]
  },
  {
    step: "03",
    title: "Fase 3: Escalamiento Piloto y Validación Operacional (TRL 6 - 7)",
    date: "2025 — 2026",
    items: [
      "Pruebas de producción a escala piloto con Multialoe S.A.S. e INTAL.",
      "Estudio de estabilidad acelerada de 12 semanas a 40°C y 75% HR en envases doypack.",
      "Paneles sensoriales descriptivos cuantitativos con 70 consumidores.",
      "Transferencia de tecnología en campo con más de 190 agricultores del Oriente Antioqueño."
    ]
  }
];

export default function TrlExplanation() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(5); // TRL 6 por defecto
  const [showDiagramModal, setShowDiagramModal] = useState(false);

  return (
    <div className="w-full space-y-12 my-12 p-6 sm:p-10 rounded-3xl bg-[#0F1A15]/90 border border-[#5E824A]/40 shadow-2xl backdrop-blur-md relative overflow-hidden">
      
      {/* Glow de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#DE5A30]/10 blur-[120px] pointer-events-none" />

      {/* ── Header Explicativo TRL ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#5E824A]/20 pb-8">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DE5A30]/20 border border-[#DE5A30]/40 text-[#DE5A30] text-xs font-geist uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Madurez Tecnológica MGA & MinCiencias</span>
          </div>
          <h3 className="font-sora text-2xl sm:text-4xl font-extrabold text-[#F0EDE1] leading-tight">
            ¿Qué es la Escala TRL y cómo alcanzamos TRL 6 – TRL 7?
          </h3>
          <p className="text-sm text-[#F0EDE1]/80 font-light leading-relaxed">
            La escala <strong>TRL (Technology Readiness Level)</strong> es el estándar internacional (creado por la NASA y adoptado en Colombia por el Ministerio de Ciencia, Tecnología e Innovación) que mide el nivel de madurez de una tecnología desde el concepto teórico hasta su comercialización.
          </p>
        </div>

        {/* Botón para ver infografía completa */}
        <button
          onClick={() => setShowDiagramModal(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#5E824A]/20 border border-[#5E824A]/50 text-[#D4CF7D] text-xs font-geist hover:bg-[#5E824A]/40 hover:text-white transition-all shadow-lg shrink-0 cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>Ver Infografía TRL Oficial</span>
        </button>
      </div>

      {/* ── Diagrama Interactivo de las 9 Etapas TRL ── */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-geist uppercase tracking-widest text-[#D4CF7D] font-semibold">
            Escala de Madurez de TRL 1 a TRL 9 (Haz clic en cada nivel)
          </span>
          <span className="text-xs font-geist text-[#DE5A30] font-bold">
            Antioquia Zana: Nivel TRL 6 y 7 Alcanzado
          </span>
        </div>

        {/* Barra de Progreso Interactiva */}
        <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
          {trlStages.map((stage, idx) => {
            const isSelected = activeStageIndex === idx;
            const isAchieved = stage.status === 'alcanzado';
            const isCompleted = stage.status === 'completado';

            let btnBg = "bg-[#0F1A15] border-[#5E824A]/20 text-[#F0EDE1]/50";
            if (isAchieved) {
              btnBg = "bg-gradient-to-t from-[#DE5A30]/30 to-[#0F1A15] border-[#DE5A30] text-[#DE5A30] font-bold shadow-lg shadow-[#DE5A30]/20 animate-pulse";
            } else if (isCompleted) {
              btnBg = "bg-[#5E824A]/20 border-[#5E824A]/50 text-[#D4CF7D]";
            }

            if (isSelected) {
              btnBg += " ring-2 ring-white scale-105";
            }

            return (
              <button
                key={stage.level}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[90px] ${btnBg}`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider block opacity-70">
                  {stage.range}
                </span>
                <span className="font-sora text-sm sm:text-base font-black my-1">
                  {stage.level}
                </span>
                <span className="text-[9px] font-geist leading-none truncate w-full">
                  {isAchieved ? "★ Alcanzado" : isCompleted ? "✓ Hecho" : "Pendiente"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detalle de la Etapa Seleccionada */}
        <AnimatePresence mode="wait">
          {activeStageIndex !== null && (
            <motion.div
              key={activeStageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-3xl border ${
                trlStages[activeStageIndex].highlight
                  ? 'bg-gradient-to-r from-[#DE5A30]/20 via-[#15261F] to-[#0F1A15] border-[#DE5A30]'
                  : 'bg-[#0F1A15] border-[#5E824A]/30'
              } space-y-3 shadow-xl`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#DE5A30] text-white font-sora font-extrabold text-xs">
                    {trlStages[activeStageIndex].level}
                  </span>
                  <span className="text-xs font-geist text-[#D4CF7D] uppercase tracking-wider">
                    {trlStages[activeStageIndex].phase}
                  </span>
                </div>

                {trlStages[activeStageIndex].highlight && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#DE5A30] font-bold font-geist uppercase tracking-wider bg-[#DE5A30]/10 px-3 py-1 rounded-full border border-[#DE5A30]/30">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Estado Entregado del Proyecto
                  </span>
                )}
              </div>

              <h4 className="font-sora text-lg font-bold text-[#F0EDE1]">
                {trlStages[activeStageIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#F0EDE1]/80 font-light leading-relaxed">
                {trlStages[activeStageIndex].desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Infografía Integrada & Diagrama Visual ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#5E824A]/20 pt-8">
        
        {/* Imagen del Diagrama TRL */}
        <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setShowDiagramModal(true)}>
          <div className="absolute -inset-2 bg-gradient-to-r from-[#DE5A30]/30 to-[#5E824A]/30 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500" />
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#5E824A]/40 bg-[#0F1A15] shadow-2xl">
            <img
              src="/photos-proyecto/trl_scale_diagram.png"
              alt="Diagrama de la Escala TRL Antioquia Zana"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <span className="px-4 py-2 rounded-xl bg-[#DE5A30] text-white text-xs font-geist font-bold flex items-center gap-2 shadow-lg">
                <Maximize2 className="w-4 h-4" /> Ampliar Diagrama Infográfico
              </span>
            </div>
          </div>
        </div>

        {/* Explicación de las 3 Fases de Avance de Antioquia Zana */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-geist uppercase tracking-widest text-[#D4CF7D]">Ruta de Escalamiento</span>
            <h4 className="font-sora text-xl font-bold text-[#F0EDE1]">
              ¿Cómo llegamos a TRL 6 y TRL 7 en Antioquia Zana?
            </h4>
          </div>

          <div className="space-y-4">
            {roadmapSteps.map((step) => (
              <div key={step.step} className="p-4 rounded-2xl bg-[#0F1A15] border border-[#5E824A]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-sora text-xs font-bold text-[#DE5A30]">
                    {step.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#D4CF7D] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {step.date}
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-[#F0EDE1]/80 font-light list-disc list-inside">
                  {step.items.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Modal de Infografía en Pantalla Completa ── */}
      <AnimatePresence>
        {showDiagramModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDiagramModal(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[70] flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden border border-[#5E824A]/50 bg-[#0F1A15] p-4 shadow-2xl"
            >
              <img
                src="/photos-proyecto/trl_scale_diagram.png"
                alt="Infografía Escala TRL"
                className="w-full h-auto max-h-[82vh] object-contain rounded-2xl"
              />
              <div className="p-3 text-center">
                <p className="text-xs font-geist text-[#D4CF7D]">
                  Escala de Madurez Tecnológica TRL (1 a 9) — Proyecto Antioquia Zana SGR BPIN 2020000100192 (Clic para cerrar)
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
