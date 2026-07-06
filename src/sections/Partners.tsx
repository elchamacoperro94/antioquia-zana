import { ExternalLink, Handshake } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { partners } from '../data/projectData';

export default function Partners() {
  const colorMap = {
    green: 'border-emerald-500/25 bg-emerald-500/5 text-emerald-400',
    blue: 'border-blue-500/25 bg-blue-500/5 text-blue-400',
    amber: 'border-amber-500/25 bg-amber-500/5 text-amber-400',
    red: 'border-rose-500/25 bg-rose-500/5 text-rose-400',
    teal: 'border-teal-500/25 bg-teal-500/5 text-teal-400',
    orange: 'border-carrot-orange/25 bg-carrot-orange/5 text-carrot-orange'
  };

  return (
    <section id="aliados" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText="Aliados"
        badgeColor="blue"
        title="Alianza Antioquia Zana"
        subtitle="Una red colaborativa integrada por centros de investigación, universidades de excelencia, asociaciones rurales e industrias aliadas."
      />

      {/* Grid of 6 Partner Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, idx) => {
          const hasWebsite = !!partner.website;
          const CardContent = (
            <div className="h-full flex flex-col justify-between p-6">
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className={`p-3 rounded-xl border flex items-center justify-center ${colorMap[partner.color]} shrink-0 h-11 w-11`}>
                    <Handshake className="h-5 w-5" />
                  </div>
                  {hasWebsite && (
                    <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors mt-1" />
                  )}
                </div>

                {/* Names */}
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-carrot-orange transition-colors">
                    {partner.shortName}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 block uppercase mt-0.5">
                    {partner.role}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {/* Activities list */}
              <div className="mt-6 border-t border-white/5 pt-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                  Responsabilidad en Proyecto
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {partner.activities.map((act, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );

          if (hasWebsite) {
            return (
              <a
                key={idx}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <GlassCard
                  hoverEffect={true}
                  className="h-full p-0 border-white/5 bg-obsidian-900/40 overflow-hidden"
                >
                  {CardContent}
                </GlassCard>
              </a>
            );
          }

          return (
            <GlassCard
              key={idx}
              hoverEffect={true}
              className="h-full p-0 border-white/5 bg-obsidian-900/40 overflow-hidden"
            >
              {CardContent}
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
