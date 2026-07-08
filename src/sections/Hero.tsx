import ParticleHeroBackground from '../components/ParticleHeroBackground';
import GlassCard from '../components/GlassCard';
import Badge from '../components/Badge';

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex flex-col justify-between items-center px-6 py-12 md:py-16 overflow-hidden select-none"
    >
      {/* 1. 3D Particle Background & Noise Overlay */}
      <ParticleHeroBackground />
      <div className="noise-overlay" />
      
      {/* Luminous Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-carrot-orange/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Header Spacer */}
      <div className="h-16 md:h-20" />

      {/* 2. Hero Content Container */}
      <div className="max-w-5xl text-center flex flex-col items-center gap-6 z-10 my-auto">
        {/* Logo Oficial en Gran Formato */}
        <div className="mb-2 max-w-[180px] md:max-w-[250px] animate-pulse-dot" style={{ animationDuration: '3s' }}>
          <img 
            src="/logos/logo-principal.png" 
            alt="Antioquia Zana Logo" 
            className="w-full h-auto object-contain drop-shadow-sm"
          />
        </div>

        <Badge text="Proyecto de Regalías SGR — Fondo CTI" pulsing={true} color="green" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl">
          Fortalecimiento de la <br />
          <span className="text-gradient-orange">Cadena Productiva</span> de la <br />
          <span className="text-gradient-green">Zanahoria</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-mono text-slate-400 max-w-2xl leading-relaxed mt-2 uppercase tracking-wide">
          Proyecto BPIN {2020000100192} <span className="text-slate-600">|</span> Regalías SGR — Fondo CTI <span className="text-slate-600">|</span> AGROSAVIA
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <a
            href="#sobre-el-proyecto"
            className="px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-carrot-orange to-amber-gold hover:from-carrot-orange-hover hover:to-amber-gold/90 transition-all duration-300 shadow-lg shadow-carrot-orange/10 text-center active:scale-95"
          >
            Explorar el Proyecto
          </a>
          <a
            href="#prototipos"
            className="px-8 py-4 rounded-xl text-sm font-semibold text-slate-300 hover:text-white glass-panel-light hover:bg-white/10 transition-all duration-300 text-center border border-white/10"
          >
            Ver Prototipos
          </a>
        </div>
      </div>

      {/* 3. Stat Cards & Scroll Indicator */}
      <div className="w-full max-w-5xl z-10 flex flex-col gap-8 mt-12 md:mt-0">
        {/* Stat Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: '5', label: 'Prototipos Desarrollados' },
            { value: '14', label: 'Actividades Ejecutadas' },
            { value: '6', label: 'Instituciones Aliadas' },
            { value: '117', label: 'Muestras Caracterizadas' }
          ].map((stat, i) => (
            <GlassCard 
              key={i} 
              className="text-center py-5 px-4 border-white/5 bg-obsidian-900/40"
              hoverEffect={true}
            >
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white block">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 mt-1 block uppercase tracking-wider font-light">
                {stat.label}
              </span>
            </GlassCard>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#sobre-el-proyecto"
          className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-white transition-colors w-fit mx-auto cursor-pointer focus:outline-none"
        >
          <span className="tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-slate-700 flex justify-center p-1">
            <div className="h-1.5 w-1 rounded-full bg-carrot-orange animate-scroll-wheel" />
          </div>
        </a>
      </div>
    </section>
  );
}
