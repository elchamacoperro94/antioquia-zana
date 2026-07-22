/**
 * ArtFrame.tsx
 *
 * Premium glassmorphism container inspired by the exhibition frames in the
 * Agrosavia catalog "El valor de lo singular" (2026).
 *
 * Features:
 * - Scroll-triggered entrance with spring physics (Framer Motion)
 * - Vermilion orange corner brackets (top-left / bottom-right)
 * - Orange top-accent bar
 * - Hover lift with glow shadow
 * - Supports optional badge label (mono pill) and title
 */

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ArtFrameProps {
  children: ReactNode;
  title?: string;
  badge?: string;
  delay?: number;
  className?: string;
  /** If true, the component renders as a static div — no scroll animation */
  static?: boolean;
}

export default function ArtFrame({
  children,
  title,
  badge,
  delay = 0,
  className = '',
  static: isStatic = false,
}: ArtFrameProps) {
  const inner = (
    <>
      {/* Orange top-accent bar */}
      <div className="absolute top-0 left-8 w-12 h-[3px] bg-carrot-orange rounded-b-sm" />

      {/* Badge + Title header row */}
      {(badge || title) && (
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/8 relative z-10">
          {badge && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-carrot-orange font-semibold bg-carrot-orange/10 px-2.5 py-0.5 rounded-full border border-carrot-orange/20">
              {badge}
            </span>
          )}
          {title && (
            <h4 className="font-sora text-sm font-semibold text-white tracking-wide">
              {title}
            </h4>
          )}
        </div>
      )}

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

      {/* Content */}
      <div className="relative z-10 text-gray-300 font-inter leading-relaxed">
        {children}
      </div>
    </>
  );

  if (isStatic) {
    return (
      <div className={`art-frame group relative overflow-hidden ${className}`}>
        {inner}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay,
      }}
      whileHover={{ y: -5 }}
      className={`art-frame group relative overflow-hidden cursor-default ${className}`}
    >
      {inner}
    </motion.div>
  );
}
