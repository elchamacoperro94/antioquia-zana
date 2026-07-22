/**
 * GlassCard.tsx
 *
 * Interactive glassmorphism card with mouse-tracking radial glow.
 * Inspired by Mubadala / ADFD fund-portal card aesthetics.
 *
 * Key mechanics:
 * — useMotionValue tracks raw mouse XY inside the card
 * — useMotionTemplate builds a CSS radial-gradient that follows the cursor
 * — Entrance via scroll with spring physics (blur 20px → 0px, y 50 → 0)
 * — whileHover: scale 1.02, y -8 (spring stiffness 200 for snappy feel)
 * — Inner image zooms on hover via CSS group-hover:scale-110
 */

import { useRef, ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

type AccentColor = 'orange' | 'purple' | 'yellow' | 'green';

interface GlassCardProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  accentColor?: AccentColor;
  badge?: string;
  delay?: number;
  className?: string;
  children?: ReactNode;
}

const accentGlowMap: Record<AccentColor, string> = {
  orange: 'rgba(242, 84, 45, 0.18)',
  purple: 'rgba(123, 40, 105, 0.18)',
  yellow: 'rgba(244, 180, 26, 0.18)',
  green:  'rgba(116, 198, 122, 0.18)',
};

const accentBorderMap: Record<AccentColor, string> = {
  orange: 'hover:border-carrot-orange/35',
  purple: 'hover:border-glow-purple/35',
  yellow: 'hover:border-amber-gold/35',
  green:  'hover:border-sage-green/35',
};

const accentTextMap: Record<AccentColor, string> = {
  orange: 'text-carrot-orange',
  purple: 'text-glow-purple',
  yellow: 'text-amber-gold',
  green:  'text-sage-green',
};

const accentDotMap: Record<AccentColor, string> = {
  orange: 'bg-carrot-orange shadow-[0_0_8px_2px_rgba(242,84,45,0.6)]',
  purple: 'bg-glow-purple shadow-[0_0_8px_2px_rgba(123,40,105,0.6)]',
  yellow: 'bg-amber-gold shadow-[0_0_8px_2px_rgba(244,180,26,0.6)]',
  green:  'bg-sage-green shadow-[0_0_8px_2px_rgba(116,198,122,0.6)]',
};

export default function GlassCard({
  title,
  subtitle,
  imageUrl,
  accentColor = 'orange',
  badge,
  delay = 0,
  className = '',
  children,
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  /* The radial glow follows the cursor — 400px radius so it's visible but not overwhelming */
  const bgGlow = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${accentGlowMap[accentColor]}, transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50, filter: 'blur(20px)', scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        type: 'spring',
        stiffness: 80,   // slower entry — feels weighty & premium
        damping: 20,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
        // stiffness 200: snappy hover response without rubber-band overdamping
        transition: { type: 'spring', stiffness: 200, damping: 22 },
      }}
      className={`group relative flex flex-col gap-5 rounded-3xl
        bg-obsidian-900/40 backdrop-blur-2xl
        border border-white/6 p-7 overflow-hidden
        cursor-pointer transition-colors duration-300
        ${accentBorderMap[accentColor]} ${className}`}
    >
      {/* Mouse-tracking radial glow overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-3xl"
        style={{ background: bgGlow }}
      />

      {/* Corner highlight (top-right ambient bokeh) */}
      <div className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl bg-white/4" />

      {/* Top accent bar + badge row */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        {/* Orange/accent bar on left */}
        <div className={`h-[2px] w-10 rounded-full ${accentDotMap[accentColor].replace('bg-', 'bg-')
          .split(' ')[0]}`} />

        {badge && (
          <span className={`font-geist text-[10px] uppercase tracking-widest px-2.5 py-0.5
            rounded-full border border-white/10 bg-white/4 ${accentTextMap[accentColor]}`}>
            {badge}
          </span>
        )}

        {/* Accent dot pulse indicator */}
        <div className={`w-2 h-2 rounded-full shrink-0 ${accentDotMap[accentColor]}`} />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <span className="relative z-10 font-geist text-xs text-white/45 uppercase tracking-[0.15em]">
          {subtitle}
        </span>
      )}

      {/* Title */}
      <h3 className={`relative z-10 font-sora text-2xl md:text-3xl font-light text-white
        tracking-tight leading-tight group-hover:${accentTextMap[accentColor]}
        transition-colors duration-500`}>
        {title}
      </h3>

      {/* Children */}
      {children && (
        <div className="relative z-10 text-white/60 font-inter text-sm leading-relaxed">
          {children}
        </div>
      )}

      {/* Image with zoom on hover + blur-to-focus parallax */}
      {imageUrl && (
        <div className="relative z-10 mt-auto h-52 w-full rounded-2xl overflow-hidden">
          {/* Gradient overlay so image doesn't compete with text */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/90 via-obsidian-900/30 to-transparent z-10" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover
              scale-110 group-hover:scale-100
              filter blur-[2px] group-hover:blur-0
              transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </div>
      )}
    </motion.div>
  );
}
