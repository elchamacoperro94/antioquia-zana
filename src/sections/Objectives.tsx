import SectionHeader from '../components/SectionHeader';
import ObjectiveTabs from '../components/ObjectiveTabs';
import GlassCard from '../components/GlassCard';
import { Target } from 'lucide-react';

export default function Objectives() {
  return (
    <section id="objetivos" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Encabezado de la Sección */}
      <SectionHeader
        badgeText="Objetivos Oficiales MGA"
        title="Formulación Literal de Objetivos (BPIN 2020000100192)"
        subtitle="Formulación científica e institucional del documento técnico oficial del proyecto para el Oriente Antioqueño."
      />

      {/* Banner del Objetivo General (100% Literal según Sección 12.1 del Documento Técnico) */}
      <GlassCard 
        hoverEffect={false} 
        className="p-6 sm:p-8 border-[#5E824A]/40 bg-[#0F1A15]/90 backdrop-blur-md flex flex-col md:flex-row items-center gap-6 shadow-2xl"
      >
        <div className="px-4 py-3 rounded-2xl bg-[#DE5A30]/20 border border-[#DE5A30]/40 text-[#DE5A30] shrink-0 flex items-center gap-3">
          <Target className="h-6 w-6" />
          <span className="text-xs font-mono text-[#DE5A30] uppercase tracking-widest font-semibold whitespace-nowrap">
            Objetivo General
          </span>
        </div>
        <div className="space-y-2">
          <p className="font-sora text-xl sm:text-2xl font-bold text-[#F0EDE1] leading-snug">
            Aumentar la tecnificación agroindustrial del sistema de producción de zanahoria en el Oriente Antioqueño.
          </p>
        </div>
      </GlassCard>

      {/* Tabs / Tarjetas de los 4 Objetivos Específicos (100% Literales según Sección 12.2) */}
      <ObjectiveTabs />
    </section>
  );
}
