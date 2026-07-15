import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Users, Award, Landmark } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyBpin = () => {
    navigator.clipboard.writeText("2020000100192");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header 
      id="inicio" 
      className="relative min-h-[100vh] py-20 flex flex-col items-center justify-center overflow-hidden px-6 text-center select-none"
    >
      {/* 3D Particle Background & Noise Overlay */}
      
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-carrot-orange via-amber-400 to-glow-purple">Zanahoria</span>
        </h1>

        <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Sistema General de Regalías — Fondo CTI | <span className="font-bold text-on-surface text-white">AGROSAVIA</span>
        </p>

        {/* Floating Glassmorphic Cards (Estilo Obsidian UI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 pb-4 w-full max-w-4xl">
          {/* Card 1: BPIN */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-between items-center text-center shadow-lg relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-carrot-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Landmark className="h-6 w-6 text-carrot-orange mb-3" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">Código Oficial</span>
            <span className="font-mono text-base font-bold text-white mt-1">BPIN 2020000100192</span>
            
            <button
              onClick={handleCopyBpin}
              className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-carrot-orange/15 hover:border-carrot-orange/30 text-[10px] font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-bold">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 text-carrot-orange" />
                  <span>Copiar Código</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Card 2: Beneficiarios */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-between items-center text-center shadow-lg relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Users className="h-6 w-6 text-emerald-400 mb-3" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">Población Impactada</span>
            <span className="font-headline text-lg font-extrabold text-white mt-1">900+ Familias</span>
            <span className="text-[10px] text-slate-400 mt-2 font-mono">Productores del Oriente</span>
          </motion.div>

          {/* Card 3: Aliados */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-between items-center text-center shadow-lg relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-glow-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Award className="h-6 w-6 text-glow-purple mb-3" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">Alianza Científica</span>
            <span className="font-headline text-xs font-semibold text-white mt-2 leading-relaxed">
              AGROSAVIA · UdeA <br /> UCO · INTAL
            </span>
            <span className="text-[9px] text-slate-500 mt-2 font-mono">Convenio Multiactor</span>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 w-full sm:w-auto">
          <a
            href="#sobre-el-proyecto"
            className="px-8 py-4 bg-primary-container text-on-primary-container font-headline-md rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary-container/20 text-center font-bold"
          >
            Explorar el Proyecto
          </a>
          <a
            href="#prototipos"
            className="px-8 py-4 border border-outline-variant text-on-surface font-headline-md rounded-xl hover:bg-white/5 transition-all text-center font-bold text-slate-200"
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
