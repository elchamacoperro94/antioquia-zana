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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden select-none"
    >
      {/* ── Background Parallax Image ── */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/logos/logo-principal.png"
          alt="Obra Zanahoria"
          className="w-full h-full object-cover filter blur-[1px] opacity-25 scale-105"
          onError={(e) => {
            // Fallback gradient pattern if placeholder image is missing
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A15]/60 via-[#0F1A15]/40 to-[#0F1A15]" />
      </motion.div>

      {/* ── Film Grain & Radial Vignette ── */}
      <div className="noise-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,transparent_20%,#0F1A15_100%)] pointer-events-none z-0" />

      {/* ── Hero Content (drifts upward gradually) ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center max-w-5xl"
      >
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full
            border border-[#5E824A]/40 bg-[#0F1A15]/80 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4CF7D]" />
          <span className="font-geist text-xs text-[#D4CF7D] uppercase tracking-[0.25em]">
            Catálogo Bioeconómico · SGR BPIN 2020000100192
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring', stiffness: 70, damping: 22 }}
          className="font-sora text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold
            text-[#F0EDE1] tracking-tighter leading-none mb-6"
        >
          El valor de lo <br />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#DE5A30] via-[#D4CF7D] to-[#DE5A30]">
            singular
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="font-inter text-base sm:text-lg md:text-xl text-[#F0EDE1]/70 max-w-2xl
            font-light leading-relaxed mb-10"
        >
          Reimaginando los excedentes de <span className="italic text-[#F0EDE1]">Daucus carota</span> mediante la ciencia agronómica y el arte botánico en el Oriente Antioqueño.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.a
          href="#bento-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="inline-flex items-center gap-2 text-xs font-geist text-[#D4CF7D]/60 uppercase tracking-widest hover:text-[#D4CF7D] transition-colors"
        >
          <span>Descubrir la colección</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </motion.div>
    </section>
  );
}
