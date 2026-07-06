import { Building2, UserCircle, MapPin, CalendarRange, Landmark } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { regionStats } from '../data/projectData';

export default function About() {
  const infoCards = [
    { label: 'Entidad Ejecutora', value: 'AGROSAVIA — C.I. La Selva', icon: <Building2 className="h-5 w-5 text-carrot-orange" /> },
    { label: 'Investigador Principal', value: 'Juan C. Henao R., M.Sc.', icon: <UserCircle className="h-5 w-5 text-emerald-400" /> },
    { label: 'Zona de Impacto', value: 'Oriente Antioqueño', icon: <MapPin className="h-5 w-5 text-blue-400" /> },
    { label: 'Periodo de Ejecución', value: '2022 — 2026', icon: <CalendarRange className="h-5 w-5 text-amber-400" /> },
    { label: 'Presupuesto Financiado', value: '$6.301M COP SGR', icon: <Landmark className="h-5 w-5 text-purple-400" /> }
  ];

  return (
    <section id="sobre-el-proyecto" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12">
      {/* Section Header */}
      <SectionHeader
        badgeText="Sobre el Proyecto"
        title="Ciencia para transformar la cadena productiva"
        subtitle="Un esfuerzo articulado de investigación, desarrollo y transferencia tecnológica para valorizar la producción hortícola."
      />

      {/* Row of 5 Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoCards.map((card, i) => (
          <GlassCard key={i} className="flex flex-col gap-3 p-5 border-white/5 bg-obsidian-900/50" hoverEffect={true}>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 w-fit">
              {card.icon}
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">
                {card.label}
              </span>
              <span className="text-sm font-semibold text-white mt-1 block leading-snug">
                {card.value}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* BPIN Highlight & Context Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-4">
        {/* Left: BPIN Highlight Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <GlassCard
            hoverEffect={true}
            className="flex-grow flex flex-col justify-between p-8 border-carrot-orange/20 bg-gradient-to-br from-carrot-orange/15 to-transparent relative overflow-hidden"
          >
            {/* Structural mesh in background */}
            <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
            <div className="z-10">
              <span className="text-xs font-mono text-carrot-orange tracking-widest uppercase block">
                Código BPIN Oficial
              </span>
              <h3 className="text-4xl md:text-5xl font-mono font-bold text-white mt-4 tracking-wider">
                2020000100192
              </h3>
            </div>
            <div className="z-10 border-t border-white/10 pt-4 mt-8">
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Registrado bajo el Sistema General de Regalías (SGR) de Colombia, adscrito al Fondo de Ciencia, Tecnología e Innovación (CTI).
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Right: Context Paragraph and Regional Stats */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-8">
          {/* Paragraph explanation */}
          <div className="flex flex-col gap-4">
            <p className="text-slate-300 leading-relaxed font-light text-base md:text-lg">
              El Oriente Antioqueño, especialmente los municipios de <strong>El Santuario, Marinilla, Rionegro y San Pedro de los Milagros</strong>, representa uno de los núcleos hortícolas más importantes de Colombia. Sin embargo, los productores locales enfrentan retos históricos debido a la fluctuación de precios de mercado y pérdidas de cosecha que alcanzan del <strong>25% al 30%</strong> de excedentes no comercializables.
            </p>
            <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
              A través de la investigación científica, <strong>Antioquia Zana</strong> busca transformar esta problemática en una oportunidad de valorización. Mediante procesos tecnológicos limpios y de química verde, los excedentes de zanahoria son procesados para dar origen a nuevos productos de alto valor agregado, fomentando la sostenibilidad económica del sector y mitigando el impacto ambiental.
            </p>
          </div>

          {/* Region Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regionStats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-obsidian-900/40 p-4 rounded-xl border border-white/5"
              >
                <span className="text-xl md:text-2xl font-mono font-bold text-carrot-orange block">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-200 mt-1 block uppercase tracking-wide">
                  {stat.label}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5 block leading-normal font-light">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
