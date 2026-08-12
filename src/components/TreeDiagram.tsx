import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Target, ArrowUp, Layers, Beaker, Apple, HeartPulse, TrendingUp } from 'lucide-react';

export default function TreeDiagram() {
  const [activeTree, setActiveTree] = useState<'problems' | 'objectives'>('objectives');

  return (
    <div className="w-full space-y-8 my-8">
      {/* ── Switcher Tab Bar ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl bg-[#0F1A15] border border-[#5E824A]/30">
        <div className="flex items-center gap-2 px-3 py-1 text-xs font-geist text-[#D4CF7D]">
          <Layers className="w-4 h-4 text-[#DE5A30]" />
          <span className="uppercase tracking-widest font-semibold">Diagrama Metodológico MGA</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTree('problems')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-geist transition-all cursor-pointer ${
              activeTree === 'problems'
                ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-lg'
                : 'text-[#F0EDE1]/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span>Árbol de Problemas</span>
          </button>

          <button
            onClick={() => setActiveTree('objectives')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-geist transition-all cursor-pointer ${
              activeTree === 'objectives'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg'
                : 'text-[#F0EDE1]/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Target className="w-4 h-4 text-emerald-400" />
            <span>Árbol de Objetivos</span>
          </button>
        </div>
      </div>

      {/* ── Tree View Content Renderer ── */}
      <AnimatePresence mode="wait">
        {activeTree === 'problems' ? (
          <motion.div
            key="tree-problems"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Niveles de Efectos (Ramas) */}
            <div className="space-y-3">
              <span className="text-[11px] font-geist text-red-400 uppercase tracking-widest block font-semibold">
                ▲ EFECTOS E IMPACTOS (Ramas del Árbol)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-red-500/30 space-y-1">
                  <span className="text-[10px] font-geist text-red-400 font-mono">Efecto 1</span>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Baja disponibilidad de alternativas de uso para excedentes y nuevos materiales de zanahoria.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-red-500/30 space-y-1">
                  <span className="text-[10px] font-geist text-red-400 font-mono">Efecto 2</span>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Baja oferta de productos biofuncionales para la industria alimentaria a base de zanahoria.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-red-500/30 space-y-1">
                  <span className="text-[10px] font-geist text-red-400 font-mono">Efecto 3</span>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Baja oferta de productos biofuncionales para la industria farmacéutica a base de zanahoria.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-red-500/30 space-y-1">
                  <span className="text-[10px] font-geist text-red-400 font-mono">Efecto 4</span>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Escasa diversidad de planes y modelos de negocios aplicados al sistema productivo de zanahoria.
                  </p>
                </div>
              </div>
            </div>

            {/* Tronco: Problema Central */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-red-950/40 via-red-900/20 to-red-950/40 border-2 border-red-500/50 text-center space-y-2 shadow-2xl relative">
              <span className="inline-block px-4 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-geist uppercase tracking-widest font-bold">
                PROBLEMA CENTRAL (Tronco)
              </span>
              <h3 className="font-sora text-xl sm:text-2xl font-extrabold text-[#F0EDE1]">
                Baja tecnificación agroindustrial del sistema de producción de zanahoria en el Oriente Antioqueño.
              </h3>
            </div>

            {/* Flecha Conectora */}
            <div className="flex justify-center my-2">
              <ArrowUp className="w-6 h-6 text-red-500/60 animate-pulse" />
            </div>

            {/* Niveles de Causas Raíz */}
            <div className="space-y-3">
              <span className="text-[11px] font-geist text-red-400 uppercase tracking-widest block font-semibold">
                ▼ CAUSAS RAÍZ (Fundamento del Problema)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#0F1A15]/80 border border-[#5E824A]/20 space-y-2">
                  <span className="text-[10px] font-geist text-[#D4CF7D] uppercase tracking-wider block">Causa 1 · Fisicoquímica</span>
                  <p className="text-xs text-[#F0EDE1]/80 font-light">
                    Desconocimiento de las propiedades físicas, químicas y funcionales de los excedentes y nuevos cultivares.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1A15]/80 border border-[#5E824A]/20 space-y-2">
                  <span className="text-[10px] font-geist text-[#D4CF7D] uppercase tracking-wider block">Causa 2 · Alimentaria</span>
                  <p className="text-xs text-[#F0EDE1]/80 font-light">
                    Limitadas investigaciones enfocadas a la generación de prototipos para la industria alimentaria.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1A15]/80 border border-[#5E824A]/20 space-y-2">
                  <span className="text-[10px] font-geist text-[#D4CF7D] uppercase tracking-wider block">Causa 3 · Cosmética</span>
                  <p className="text-xs text-[#F0EDE1]/80 font-light">
                    Limitadas investigaciones enfocadas a la generación de prototipos para la industria farmacéutica.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1A15]/80 border border-[#5E824A]/20 space-y-2">
                  <span className="text-[10px] font-geist text-[#D4CF7D] uppercase tracking-wider block">Causa 4 · Mercado</span>
                  <p className="text-xs text-[#F0EDE1]/80 font-light">
                    Escasa información respecto a la cadena de valor, mercados potenciales y modelos de negocio.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="tree-objectives"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Nivel de Beneficios e Impactos Superiores */}
            <div className="space-y-3">
              <span className="text-[11px] font-geist text-emerald-400 uppercase tracking-widest block font-semibold">
                ▲ BENEFICIOS E IMPACTOS (Fines Superiores)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-emerald-500/30 space-y-1">
                  <span className="text-[10px] font-geist text-emerald-400 font-mono">Beneficio 1</span>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Información disponible para toma de decisiones y transformación basada en ventajas competitivas.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-emerald-500/30 space-y-1">
                  <span className="text-[10px] font-geist text-emerald-400 font-mono">Beneficio 2</span>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Nuevos mercados y empresas de base tecnológica para la industria alimentaria.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-emerald-500/30 space-y-1">
                  <span className="text-[10px] font-geist text-emerald-400 font-mono">Beneficio 3</span>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Nuevos mercados y empresas de base tecnológica para la industria cosmética/farmacéutica.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-emerald-500/30 space-y-1">
                  <span className="text-[10px] font-geist text-emerald-400 font-mono">Beneficio 4</span>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Nuevos planes y modelos de negocio basados en la generación de productos biofuncionales.
                  </p>
                </div>
              </div>
            </div>

            {/* Nivel Central: Objetivo General */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-emerald-950/40 border-2 border-emerald-500/50 text-center space-y-2 shadow-2xl relative">
              <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-geist uppercase tracking-widest font-bold">
                OBJETIVO GENERAL
              </span>
              <h3 className="font-sora text-xl sm:text-2xl font-extrabold text-[#F0EDE1]">
                Aumentar la tecnificación agroindustrial del sistema de producción de zanahoria en el Oriente Antioqueño.
              </h3>
            </div>

            {/* Nivel de 4 Objetivos Específicos */}
            <div className="space-y-3">
              <span className="text-[11px] font-geist text-[#D4CF7D] uppercase tracking-widest block font-semibold">
                ■ OBJETIVOS ESPECÍFICOS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-[#5E824A]/40 space-y-2">
                  <div className="flex items-center gap-2 text-[#DE5A30] text-xs font-bold font-sora">
                    <Beaker className="w-4 h-4 shrink-0" />
                    <span>OE-01: Caracterización</span>
                  </div>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Caracterizar el potencial de excedentes agronómicos y nuevos cultivares como materia prima de valor agregado.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-[#5E824A]/40 space-y-2">
                  <div className="flex items-center gap-2 text-[#D4CF7D] text-xs font-bold font-sora">
                    <Apple className="w-4 h-4 shrink-0" />
                    <span>OE-02: Alimentarios</span>
                  </div>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Generar prototipos de productos funcionales para la industria alimentaria a partir de excedentes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-[#5E824A]/40 space-y-2">
                  <div className="flex items-center gap-2 text-[#5E824A] text-xs font-bold font-sora">
                    <HeartPulse className="w-4 h-4 shrink-0" />
                    <span>OE-03: Farmacéuticos</span>
                  </div>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Generar prototipos de productos funcionales para la industria farmacéutica/cosmética a partir de excedentes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F1A15]/90 border border-[#5E824A]/40 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-bold font-sora">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span>OE-04: Mercado</span>
                  </div>
                  <p className="text-xs text-[#F0EDE1]/90 font-light leading-snug">
                    Evaluar oportunidades de mercado y comercialización mediante modelos de negocio para productos prototipados.
                  </p>
                </div>
              </div>
            </div>

            {/* Medios para Alcanzar los Objetivos (Las 14 Actividades Desglosadas) */}
            <div className="space-y-3">
              <span className="text-[11px] font-geist text-[#F0EDE1]/70 uppercase tracking-widest block font-semibold">
                ▼ MEDIOS Y ACTIVIDADES OPERATIVAS (14 Actividades Oficiales MGA)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-light text-[#F0EDE1]/80">
                
                {/* Medios Obj 1 */}
                <div className="p-4 rounded-2xl bg-[#0F1A15]/60 border border-[#5E824A]/20 space-y-2">
                  <span className="font-geist text-[10px] text-[#DE5A30] font-semibold block">Actividades Obj 1:</span>
                  <ul className="space-y-1.5 list-disc list-inside text-[11px]">
                    <li>1. Estimación de volúmenes y cultivares.</li>
                    <li>2. Firmas espectrales NIRS.</li>
                    <li>3. Caracterización fisicoquímica.</li>
                  </ul>
                </div>

                {/* Medios Obj 2 */}
                <div className="p-4 rounded-2xl bg-[#0F1A15]/60 border border-[#5E824A]/20 space-y-2">
                  <span className="font-geist text-[10px] text-[#D4CF7D] font-semibold block">Actividades Obj 2:</span>
                  <ul className="space-y-1.5 list-disc list-inside text-[11px]">
                    <li>4. Priorización de tecnologías.</li>
                    <li>5. Prototipos ZanaPure, ZanaPet, Gomas.</li>
                    <li>6. Aspectos biofuncionales y vida útil.</li>
                  </ul>
                </div>

                {/* Medios Obj 3 */}
                <div className="p-4 rounded-2xl bg-[#0F1A15]/60 border border-[#5E824A]/20 space-y-2">
                  <span className="font-geist text-[10px] text-[#5E824A] font-semibold block">Actividades Obj 3:</span>
                  <ul className="space-y-1.5 list-disc list-inside text-[11px]">
                    <li>7. Extractos en apocarotenoides.</li>
                    <li>8. Fracciones en carotenoides.</li>
                    <li>9. Estabilidad y antienvejecimiento.</li>
                    <li>10. Escalado de bioingredientes NLC.</li>
                  </ul>
                </div>

                {/* Medios Obj 4 */}
                <div className="p-4 rounded-2xl bg-[#0F1A15]/60 border border-[#5E824A]/20 space-y-2">
                  <span className="font-geist text-[10px] text-purple-400 font-semibold block">Actividades Obj 4:</span>
                  <ul className="space-y-1.5 list-disc list-inside text-[11px]">
                    <li>11. Cadena de valor y mercados.</li>
                    <li>12. Modelos de negocios y Brief.</li>
                    <li>13. Desarrollo conceptual y ZanaFest.</li>
                    <li>14. Gobernanza de la cadena.</li>
                  </ul>
                </div>

              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
