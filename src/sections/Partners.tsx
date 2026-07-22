import { ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { partners } from '../data/projectData';

export default function Partners() {
  // Mapa de color de acentos para las tarjetas detalladas de aliados
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
        badgeText="Aliados"
        badgeColor="blue"
        title="Alianza Antioquia Zana"
        subtitle="Una red colaborativa integrada por centros de investigación, universidades de excelencia, asociaciones rurales e industrias aliadas."
      />

      {/* ========================================================
         DETALLE DE RESPONSABILIDADES Y LOGOS EN EL PROYECTO
         ======================================================== */}
      <div className="flex flex-col gap-6">
        <h4 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest text-center mb-4">
          Detalle de Responsabilidades en el Proyecto
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) => {
            const hasWebsite = !!partner.website;
            const CardContent = (
              <div className="h-full flex flex-col justify-between p-6">
                <div className="flex flex-col gap-4">
                  {/* Fila superior: Logo de la entidad y enlace externo */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Logotipo embebido con fondo blanco y control de escala */}
                    <div className="h-12 w-28 bg-white border border-white/10 rounded-xl p-1.5 flex items-center justify-center shadow-inner shrink-0 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    {hasWebsite && (
                      <div className={`p-2 rounded-lg border ${colorMap[partner.color]} shrink-0 h-8 w-8 flex items-center justify-center`}>
                        <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-carrot-orange transition-colors" />
                      </div>
                    )}
                  </div>

                  {/* Nombre y Rol */}
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-carrot-orange transition-colors leading-tight">
                      {partner.shortName}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase mt-1 leading-none">
                      {partner.role}
                    </span>
                  </div>

                  {/* Descripción técnica */}
                  <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                {/* Listado de actividades bajo su responsabilidad */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2 leading-none">
                    Responsabilidad en Proyecto
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.activities.map((act, i) => (
                      <span 
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
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
                    className="h-full p-0 border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
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
                className="h-full p-0 border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                {CardContent}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
