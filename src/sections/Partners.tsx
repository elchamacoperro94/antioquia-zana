import { ExternalLink, Handshake } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { partners } from '../data/projectData';

// Configuración de los logotipos oficiales agrupados por rol en la alianza
const ejecutores = [
  { name: "Universidad de Antioquia", logo: "/logos/logo-udea.png", url: "https://www.udea.edu.co" },
  { name: "Intal", logo: "/logos/logo-intal.png", url: "http://www.fundacionintal.org" },
  { name: "Kavitec", logo: "/logos/logo-kavitec.png", url: "https://kavitec.co" },
  { name: "Gobernación de Antioquia", logo: "/logos/logo-gobernacion.png", url: "https://www.antioquia.gov.co" },
  { name: "Universidad Nacional de Colombia", logo: "/logos/logo-unal.png", url: "https://unal.edu.co" },
  { name: "Universidad Católica de Oriente", logo: "/logos/logo-uco.png", url: "https://www.uco.edu.co" },
  { name: "AGROSAVIA", logo: "/logos/logo-agrosavia.png", url: "https://www.agrosavia.co" }
];

const apoyan = [
  { name: "Alcaldía de Marinilla", logo: "/logos/logo-marinilla.png", url: "https://www.marinilla-antioquia.gov.co" },
  { name: "Alcaldía de El Santuario", logo: "/logos/logo-santuario.png", url: "https://www.elsantuario-antioquia.gov.co" }
];

const financia = [
  { name: "Sistema General de Regalías (SGR)", logo: "/logos/logo-sgr.png", url: "https://www.sgr.gov.co" }
];

export default function Partners() {
  // Mapa de colores para las tarjetas detalladas de aliados
  const colorMap = {
    green: 'border-emerald-500/25 bg-emerald-500/5 text-emerald-400',
    blue: 'border-blue-500/25 bg-blue-500/5 text-blue-400',
    amber: 'border-amber-500/25 bg-amber-500/5 text-amber-400',
    red: 'border-rose-500/25 bg-rose-500/5 text-rose-400',
    teal: 'border-teal-500/25 bg-teal-500/5 text-teal-400',
    orange: 'border-carrot-orange/25 bg-carrot-orange/5 text-carrot-orange'
  };

  return (
    <section id="aliados" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-16 border-t border-white/5">
      {/* Cabecera de la Sección */}
      <SectionHeader
        badgeText="Aliados"
        badgeColor="blue"
        title="Alianza Antioquia Zana"
        subtitle="Una red colaborativa integrada por centros de investigación, universidades de excelencia, asociaciones rurales e industrias aliadas."
      />

      {/* ========================================================
         1. MURO DE LOGOS OFICIALES (EJECUTAN, APOYAN Y FINANCIA)
         ======================================================== */}
      <div className="flex flex-col gap-12 bg-white/50 border border-slate-100 p-8 rounded-3xl shadow-sm">
        
        {/* Fila 1: Ejecutan (Socios del Proyecto) */}
        <div className="flex flex-col items-center gap-6">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest text-center">
            Ejecutan
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 w-full max-w-4xl">
            {ejecutores.map((p, idx) => (
              <a 
                key={idx} 
                href={p.url} 
                target="_blank" 
                rel="noopener noreferrer"
                title={p.name}
                className="h-24 w-36 md:w-44 bg-white border border-slate-100 rounded-2xl p-2 flex items-center justify-center shadow-sm hover:shadow-md hover:border-carrot-orange/25 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Separador sutil */}
        <div className="w-full h-px bg-slate-100" />

        {/* Fila 2: Apoyan & Financia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
          
          {/* Apoyan (Alcaldías Territoriales) */}
          <div className="flex flex-col items-center gap-5 border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0 pr-0 md:pr-6">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest text-center">
              Apoyan
            </h4>
            <div className="flex justify-center items-center gap-6">
              {apoyan.map((p, idx) => (
                <a 
                  key={idx} 
                  href={p.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={p.name}
                  className="h-16 w-28 md:w-32 bg-white border border-slate-100 rounded-xl p-3 flex items-center justify-center shadow-sm hover:shadow-md hover:border-carrot-orange/25 hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Financia (Sistema General de Regalías) */}
          <div className="flex flex-col items-center gap-5">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest text-center">
              Financia
            </h4>
            <div className="flex justify-center items-center">
              {financia.map((p, idx) => (
                <a 
                  key={idx} 
                  href={p.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={p.name}
                  className="h-16 w-36 bg-white border border-slate-100 rounded-xl p-3 flex items-center justify-center shadow-sm hover:shadow-md hover:border-carrot-orange/25 hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================
         2. DETALLE DE RESPONSABILIDADES Y LOGROS EN EL PROYECTO
         ======================================================== */}
      <div className="flex flex-col gap-6">
        <h4 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest text-center mb-2">
          Detalle de Responsabilidades en el Proyecto
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) => {
            const hasWebsite = !!partner.website;
            const CardContent = (
              <div className="h-full flex flex-col justify-between p-6">
                <div className="flex flex-col gap-4">
                  {/* Icono y enlace externo */}
                  <div className="flex items-start justify-between gap-4">
                    <div className={`p-3 rounded-xl border flex items-center justify-center ${colorMap[partner.color]} shrink-0 h-11 w-11`}>
                      <Handshake className="h-5 w-5" />
                    </div>
                    {hasWebsite && (
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-carrot-orange transition-colors mt-1" />
                    )}
                  </div>

                  {/* Nombre y Rol */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-carrot-orange transition-colors leading-tight">
                      {partner.shortName}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase mt-1 leading-none">
                      {partner.role}
                    </span>
                  </div>

                  {/* Descripción técnica */}
                  <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                {/* Listado de actividades bajo su responsabilidad */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2 leading-none">
                    Responsabilidad en Proyecto
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.activities.map((act, i) => (
                      <span 
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-100 text-[10px] font-mono text-slate-500"
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
                    className="h-full p-0 border-slate-100 bg-white/70 overflow-hidden"
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
                className="h-full p-0 border-slate-100 bg-white/70 overflow-hidden"
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
