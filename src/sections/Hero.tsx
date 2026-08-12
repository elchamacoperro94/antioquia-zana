/**
 * Hero.tsx — Full-Screen Botanical Parallax Hero
 *
 * Background: Artwork image placeholder with scroll parallax (useScroll + useTransform).
 * Overlay: Gradient blending seamlessly into --color-base-oscuro (#0F1A15) at the bottom.
 * Content: Elegant typography fading & moving gradually upward with Framer Motion.
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  // Parallax transformations
  const imageY = useTransform(smoothProgress, [0, 1], ['0%', '25%']);
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(smoothProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden select-none py-20"
    >
      {/* ── Background Parallax Image / Ambient Emblem ── */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-45 filter drop-shadow-[0_10px_30px_rgba(222,90,48,0.2)] pointer-events-none"
      >
        <img
          src="/logos/logo-principal.png"
          alt="Antioquia Zana Logo Fondo"
          className="max-h-[75vh] max-w-[85vw] object-contain filter brightness-110 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A15]/80 via-[#0F1A15]/60 to-[#0F1A15]" />
      </motion.div>

      {/* ── Film Grain & Radial Vignette ── */}
      <div className="noise-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_45%,transparent_15%,#0F1A15_100%)] pointer-events-none z-0" />

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center max-w-5xl"
      >
        {/* Logo Prominente en Primer Plano */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#DE5A30]/30 to-[#5E824A]/30 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
          <img
            src="/logos/logo-principal.png"
            alt="Logo Antioquia Zana"
            className="relative h-24 sm:h-28 md:h-36 w-auto object-contain filter drop-shadow-lg"
          />
        </motion.div>

        {/* Pill Badge con BPIN */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full
            border border-[#5E824A]/50 bg-[#0F1A15]/90 backdrop-blur-md shadow-lg shadow-[#0F1A15]/50"
        >
          <Sparkles className="w-4 h-4 text-[#D4CF7D]" />
          <span className="font-geist text-xs sm:text-sm text-[#D4CF7D] uppercase tracking-[0.2em] font-semibold">
            SGR BPIN 2020000100192
          </span>
        </motion.div>

        {/* Título en Letras Grandes: ANTIOQUIA ZANA */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 70, damping: 22 }}
          className="font-sora text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black
            text-[#F0EDE1] tracking-tighter leading-none mb-4 uppercase drop-shadow-md"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F0EDE1] via-[#DE5A30] to-[#F0EDE1]">
            ANTIOQUIA ZANA
          </span>
        </motion.h1>

        {/* Título Completo del Proyecto */}
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          className="font-sora text-base sm:text-xl md:text-2xl text-[#D4CF7D] font-medium tracking-tight max-w-4xl leading-relaxed mb-6 px-4"
        >
          Fortalecimiento de la cadena productiva de la zanahoria mediante la creación de prototipos de productos innovadores en el oriente del departamento de Antioquia
        </motion.h2>

        {/* Scroll Indicator */}
        <motion.a
          href="#bento-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="inline-flex items-center gap-2 text-xs font-geist text-[#D4CF7D]/90 uppercase tracking-widest hover:text-[#DE5A30] transition-colors mt-2"
        >
          <span>Conocer el Proyecto</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#DE5A30]" />
        </motion.a>
      </motion.div>
    </section>
  );
}
