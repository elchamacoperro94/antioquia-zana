import ParticleHeroBackground from '../components/ParticleHeroBackground';

export default function Hero() {
  return (
    <header 
      id="inicio" 
      className="relative min-h-[921px] flex flex-col items-center justify-center overflow-hidden px-6 text-center select-none"
    >
      {/* 3D Particle Background & Noise Overlay */}
      <ParticleHeroBackground />
      <div className="noise-overlay" />
      
      {/* Luminous Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-carrot-orange/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl space-y-6 my-auto flex flex-col items-center">
        {/* Logo Oficial en Gran Formato (Preservado a petición de diseño de marca) */}
        <div className="mb-2 max-w-[150px] md:max-w-[185px] animate-pulse-dot" style={{ animationDuration: '3s' }}>
          <img 
            src="/logos/logo-principal.png" 
            alt="Antioquia Zana Logo" 
            className="w-full h-auto object-contain drop-shadow-sm"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-secondary/20 bg-white/5">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-label-caps text-secondary text-xs uppercase tracking-wider">Proyecto de Regalías SGR — Fondo CTI</span>
        </div>

        <h1 className="font-display-lg text-display-lg leading-tight tracking-tight text-white font-extrabold max-w-4xl">
          Fortalecimiento de la <br />
          <span className="text-primary-container">Cadena Productiva</span> de la <br />
          <span className="text-secondary">Zanahoria</span>
        </h1>

        <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Proyecto BPIN 2020000100192 | Sistema General de Regalías — Fondo CTI | <span className="font-bold text-on-surface">AGROSAVIA</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 w-full sm:w-auto">
          <a
            href="#sobre-el-proyecto"
            className="px-8 py-4 bg-primary-container text-on-primary-container font-headline-md rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary-container/20 text-center font-bold"
          >
            Explorar el Proyecto
          </a>
          <a
            href="#prototipos"
            className="px-8 py-4 border border-outline-variant text-on-surface font-headline-md rounded-xl hover:bg-white/5 transition-all text-center font-bold"
          >
            Ver Prototipos
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator (Desplazar) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
        <span className="font-label-caps text-[10px] tracking-wider text-slate-400">Desplazar</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-container to-transparent"></div>
      </div>
    </header>
  );
}
