/**
 * CustomCursor.tsx
 *
 * Custom trailing physics cursor inspired by dark botanical editorial aesthetics.
 * Uses Framer Motion's useSpring to create a smooth trailing physics effect
 * rendered in --color-bermellon (#DE5A30) with a magnifying lens glow.
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Trailing spring physics
  const springConfig = { damping: 24, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Outer ring spring (slower drag effect)
  const outerSpringConfig = { damping: 18, stiffness: 120, mass: 0.8 };
  const outerX = useSpring(mouseX, outerSpringConfig);
  const outerY = useSpring(mouseY, outerSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer physics trailing glow ring */}
      <motion.div
        aria-hidden
        style={{
          x: outerX,
          y: outerY,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          opacity: isHovered ? 0.7 : 0.4,
        }}
        transition={{ duration: 0.2 }}
        className="-translate-x-1/2 -translate-y-1/2 absolute w-9 h-9 rounded-full border border-[#DE5A30] shadow-[0_0_20px_rgba(222,90,48,0.5)] bg-[#DE5A30]/10 backdrop-blur-[1px]"
      />

      {/* Inner precise dot */}
      <motion.div
        aria-hidden
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        className="-translate-x-1/2 -translate-y-1/2 absolute w-2.5 h-2.5 rounded-full bg-[#DE5A30] shadow-[0_0_10px_#DE5A30]"
      />
    </div>
  );
}
