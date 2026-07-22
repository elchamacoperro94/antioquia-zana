/**
 * GlassBentoCard.tsx
 *
 * Scroll-triggered bento grid card with:
 * — blur(20px) → blur(0) entrance
 * — scale(0.95) → scale(1) entrance
 * — spring physics (stiffness 80, damping 20) — weighty, premium feel
 * — hover: y -8, scale 1.01 with glow shadow
 * — Optional glowColor variant for per-card accent
 *
 * Used for bento-style data layouts throughout the site.
 */

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

type GlowColor = 'carrot' | 'purple' | 'gold' | 'sage';

interface GlassBentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: GlowColor;
  /** Disable entrance animation (e.g. already visible on load) */
  noAnimate?: boolean;
}

const glowShadowMap: Record<GlowColor, string> = {
  carrot: 'hover:shadow-[0_0_40px_-10px_rgba(242,84,45,0.40)] hover:border-carrot-orange/25',
  purple: 'hover:shadow-[0_0_40px_-10px_rgba(123,40,105,0.40)] hover:border-glow-purple/25',
  gold:   'hover:shadow-[0_0_40px_-10px_rgba(244,180,26,0.35)] hover:border-amber-gold/25',
  sage:   'hover:shadow-[0_0_40px_-10px_rgba(116,198,122,0.30)] hover:border-sage-green/25',
};

export default function GlassBentoCard({
  children,
  className = '',
  delay = 0,
  glowColor = 'carrot',
  noAnimate = false,
}: GlassBentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const initial = { opacity: 0, y: 50, filter: 'blur(20px)', scale: 0.95 };
  const animate = isInView
    ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={noAnimate ? false : initial}
      animate={noAnimate ? undefined : animate}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 20,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
        transition: { type: 'spring', stiffness: 200, damping: 22 },
      }}
      className={`relative rounded-3xl
        bg-obsidian-900/40 backdrop-blur-xl
        border border-white/6 p-6 md:p-8
        overflow-hidden transition-colors duration-300
        ${glowShadowMap[glowColor]} ${className}`}
    >
      {/* Subtle ambient corner glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl bg-white/3" />

      {/* Internal shimmer line (top edge) */}
      <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
