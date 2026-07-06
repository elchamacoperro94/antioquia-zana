import SectionHeader from '../components/SectionHeader';
import ObjectiveTabs from '../components/ObjectiveTabs';
import GlassCard from '../components/GlassCard';
import { Target } from 'lucide-react';

export default function Objectives() {
  return (
    <section id="objetivos" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText="Objetivos"
        title="4 Objetivos Específicos"
        subtitle="Estructura científica del proyecto orientada a la caracterización, formulación agroindustrial y la transferencia comercial."
      />

      {/* General Objective Banner */}
      <GlassCard 
        hoverEffect={false} 
        className="p-6 md:p-8 border-emerald-500/20 bg-gradient-to-r from-emerald-950/20 via-obsidian-900/50 to-obsidian-900 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
          <Target className="h-8 w-8" />
        </div>
        <div>
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase block">
            Objetivo General
          </span>
          <p className="text-lg md:text-xl text-white font-medium mt-1 leading-snug">
            Fortalecer la cadena productiva de la zanahoria mediante la creación de prototipos de productos alimenticios, cosmecéuticos e ingredientes funcionales innovadores, a partir de excedentes y nuevos materiales de zanahoria en el Oriente de Antioquia.
          </p>
        </div>
      </GlassCard>

      {/* Interactive Tabs */}
      <ObjectiveTabs />
    </section>
  );
}
