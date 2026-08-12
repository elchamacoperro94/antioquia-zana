import { ExternalLink } from 'lucide-react';
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
    orange: 'border-carrot-orange/25 bg-carrot-orange/5 text-carrot-orange',
    purple: 'border-purple-500/25 bg-purple-500/5 text-purple-400',
    pink: 'border-pink-500/25 bg-pink-500/5 text-pink-400',
    emerald: 'border-emerald-500/25 bg-emerald-500/5 text-emerald-400'
  };

  return (
    <section id="aliados" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Cabecera de la Sección */}
      <SectionHeader
        badgeText="Alianza Institucional"
        badgeColor="blue"
        title="Entidades Aliadas"
        subtitle="Alianza estratégica interinstitucional para el fortalecimiento de la cadena productiva de la zanahoria en el Oriente Antioqueño."
      />

      {/* Rejilla Simplificada de Aliados (Alineado con Observación 13) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, idx) => {
          const hasWebsite = !!partner.website;
          const CardContent = (
            <div className="h-full flex flex-col justify-between p-6 space-y-4">
              <div className="flex flex-col gap-4">
                {/* Logo institucional de la entidad */}
                <div className="flex items-start justify-between gap-4">
                  <div className="h-14 w-32 bg-white border border-white/10 rounded-2xl p-2 flex items-center justify-center shadow-inner shrink-0 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  {hasWebsite && (
                    <div className={`p-2 rounded-xl border ${colorMap[partner.color]} shrink-0 h-8 w-8 flex items-center justify-center`}>
                      <ExternalLink className="h-3.5 w-3.5 text-[#F0EDE1]/60 group-hover:text-[#DE5A30] transition-colors" />
                    </div>
                  )}
                </div>

                {/* Nombre y Rol General (Sin listar actividades específicas) */}
                <div className="space-y-1">
                  <h4 className="font-sora text-lg font-bold text-[#F0EDE1] group-hover:text-[#DE5A30] transition-colors leading-tight">
                    {partner.shortName}
                  </h4>
                  <span className="text-xs font-mono text-[#D4CF7D] block uppercase font-semibold">
                    {partner.role}
                  </span>
                </div>

                {/* Descripción General Breve */}
                <p className="text-xs text-[#F0EDE1]/70 font-light leading-relaxed">
                  {partner.description}
                </p>
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
                  className="h-full p-0 border-[#5E824A]/20 bg-[#0F1A15]/90 backdrop-blur-md overflow-hidden hover:border-[#5E824A]/50 transition-all duration-300 shadow-lg"
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
              className="h-full p-0 border-[#5E824A]/20 bg-[#0F1A15]/90 backdrop-blur-md overflow-hidden hover:border-[#5E824A]/50 transition-all duration-300 group shadow-lg"
            >
              {CardContent}
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
