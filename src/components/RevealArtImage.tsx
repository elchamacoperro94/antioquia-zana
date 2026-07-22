/**
 * RevealArtImage.tsx
 *
 * Scroll-driven blur → focus + parallax scale effect for artwork images.
 * Used to display the Agrosavia catalog paintings (Yuliana Miranda Gómez,
 * Alejandro Rendón Molina, etc.).
 *
 * Mechanics:
 * — useScroll tracks how far the element has scrolled into view
 * — useTransform maps scroll progress → blur (10px → 0px) and scale (1.12 → 1.0)
 * — At rest (not yet scrolled to): image is slightly zoomed + blurred → cinematic depth
 * — hover: +scale(1.05) added on top via whileHover
 * — Caption fades in from bottom after image is revealed
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface RevealArtImageProps {
  src: string;
  alt: string;
  caption?: string;
  artist?: string;
  technique?: string;
  accentColor?: 'orange' | 'purple' | 'gold' | 'green';
  className?: string;
  aspectRatio?: string; // e.g. 'aspect-square' | 'aspect-[4/3]' | 'aspect-[3/4]'
}

const accentLineMap = {
  orange: 'bg-carrot-orange',
  purple: 'bg-glow-purple',
  gold:   'bg-amber-gold',
  green:  'bg-sage-green',
};

const accentTextMap = {
  orange: 'text-carrot-orange',
  purple: 'text-glow-purple',
  gold:   'text-amber-gold',
  green:  'text-sage-green',
};

export default function RevealArtImage({
  src,
  alt,
  caption,
  artist,
  technique,
  accentColor = 'orange',
  className = '',
  aspectRatio = 'aspect-[4/3]',
}: RevealArtImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  /*
   * offset: ["start end", "end center"]
   * — "start end":    element top hits viewport bottom → progress = 0
   * — "end center":   element bottom hits viewport center → progress = 1
   * This gives a generous scroll range for a smooth transition.
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  });

  /*
   * Spring-smooth the raw scroll progress for organic, physics-based feel.
   * stiffness: 50 / damping: 20 → lazy, trailing response (not jumpy).
   */
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  /* blur: 10px when not in view → 0px when fully revealed */
  const blur = useTransform(smoothProgress, [0, 0.6], [10, 0]);
  /* scale: 1.12 when not in view → 1.0 when revealed (zoom-out reveal) */
  const scale = useTransform(smoothProgress, [0, 0.7], [1.12, 1.0]);
  /* opacity: 0 → 1 in first 40% of scroll range */
  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  /* caption slides up */
  const captionY = useTransform(smoothProgress, [0.5, 1], [20, 0]);
  const captionOpacity = useTransform(smoothProgress, [0.5, 0.85], [0, 1]);

  /* Convert motion values to CSS filter string */
  const filterValue = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <div ref={ref} className={`group relative ${className}`}>

      {/* Image container */}
      <div className={`relative overflow-hidden rounded-2xl ${aspectRatio}`}>

        {/* Canvas-texture overlay (replicates oil-on-canvas feel) */}
        <div className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Vignette gradient */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-obsidian-950/60" />

        {/* The art image itself */}
        <motion.img
          src={src}
          alt={alt}
          style={{ scale, filter: filterValue, opacity }}
          whileHover={{
            scale: 1.05,
            // stiffness 150: responsive hover without overshoot
            transition: { type: 'spring', stiffness: 150, damping: 20 },
          }}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Accent corner bracket (top-left) — echoes ArtFrame style */}
        <div className={`absolute top-2 left-2 z-30 w-5 h-5 border-t-2 border-l-2 ${accentLineMap[accentColor]} rounded-tl-sm pointer-events-none`} />
        <div className={`absolute bottom-2 right-2 z-30 w-5 h-5 border-b-2 border-r-2 ${accentLineMap[accentColor]} rounded-br-sm pointer-events-none`} />
      </div>

      {/* Caption block — reveals after image */}
      {(caption || artist || technique) && (
        <motion.div
          style={{ y: captionY, opacity: captionOpacity }}
          className="mt-4 px-1 border-l-2 border-white/10 pl-3 space-y-0.5"
        >
          {caption && (
            <p className="font-sora text-sm font-medium text-white/90">{caption}</p>
          )}
          {artist && (
            <p className={`font-geist text-[10px] uppercase tracking-widest ${accentTextMap[accentColor]}`}>
              {artist}
            </p>
          )}
          {technique && (
            <p className="font-geist text-[10px] text-white/35 uppercase tracking-wider">
              {technique}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}
