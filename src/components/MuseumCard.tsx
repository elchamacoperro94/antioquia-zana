/**
 * MuseumCard.tsx
 *
 * Glassmorphism Bento Card component for the dark botanical museum layout.
 * Style:
 * — backdrop-blur-xl
 * — bg-[#F0EDE1]/5 (5% opacity of marfil/blanco hueso)
 * — border 1px solid #5E824A at 30% opacity (border-[#5E824A]/30)
 * Animation:
 * — Sliced scroll entrance with Framer Motion spring (stiffness: 80, damping: 20)
 */

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MuseumCardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  badge?: string;
  delay?: number;
  className?: string;
  glowColor?: 'bermellon' | 'purpura' | 'oro' | 'daucus';
}

const glowColorMap = {
  bermellon: 'hover:shadow-[0_0_35px_-5px_rgba(222,90,48,0.35)] hover:border-[#DE5A30]/50',
  purpura:   'hover:shadow-[0_0_35px_-5px_rgba(74,37,69,0.50)] hover:border-[#4A2545]/70',
  oro:       'hover:shadow-[0_0_35px_-5px_rgba(212,207,125,0.35)] hover:border-[#D4CF7D]/50',
  daucus:    'hover:shadow-[0_0_35px_-5px_rgba(94,130,74,0.40)] hover:border-[#5E824A]/60',
};

const badgeColorMap = {
  bermellon: 'text-[#DE5A30] bg-[#DE5A30]/10 border-[#DE5A30]/30',
  purpura:   'text-[#D4CF7D] bg-[#4A2545]/40 border-[#4A2545]',
  oro:       'text-[#D4CF7D] bg-[#D4CF7D]/10 border-[#D4CF7D]/30',
  daucus:    'text-[#5E824A] bg-[#5E824A]/10 border-[#5E824A]/30',
};

export default function MuseumCard({
  children,
  title,
  subtitle,
  badge,
  delay = 0,
  className = '',
  glowColor = 'daucus',
}: MuseumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, clipPath: 'inset(10% 0% 0% 0%)' }}
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 20,
        delay,
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { type: 'spring', stiffness: 200, damping: 22 },
      }}
      className={`group relative rounded-3xl
        backdrop-blur-xl bg-[#F0EDE1]/5
        border border-[#5E824A]/30 p-7 md:p-8
        overflow-hidden transition-all duration-300
        ${glowColorMap[glowColor]} ${className}`}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-8 w-12 h-[3px] bg-[#5E824A] rounded-b-sm group-hover:bg-[#DE5A30] transition-colors duration-300" />

      {/* Header info */}
      {(badge || subtitle || title) && (
        <div className="relative z-10 mb-4 space-y-2">
          {badge && (
            <span className={`inline-block font-geist text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${badgeColorMap[glowColor]}`}>
              {badge}
            </span>
          )}
          {subtitle && (
            <p className="font-geist text-xs text-[#D4CF7D]/70 uppercase tracking-[0.15em]">
              {subtitle}
            </p>
          )}
          {title && (
            <h3 className="font-sora text-xl md:text-2xl font-light text-[#F0EDE1] tracking-tight group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 font-inter text-[#F0EDE1]/80 text-sm leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
