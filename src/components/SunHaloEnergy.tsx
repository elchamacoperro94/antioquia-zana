import { motion } from 'framer-motion';

interface SunHaloProps {
  className?: string;
  size?: number;
}

export default function SunHaloEnergy({ className = '', size = 500 }: SunHaloProps) {
  return (
    <div className={`relative flex items-center justify-center pointer-events-none ${className}`}>
      {/* Outer Sun Ring (Gold) */}
      <motion.div
        className="absolute rounded-full border border-amber-gold/30"
        style={{ width: size, height: size }}
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
      >
        {/* Rays Ticks */}
        <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-amber-gold/50 -translate-x-1/2" />
        <div className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-amber-gold/50 -translate-x-1/2" />
        <div className="absolute left-0 top-1/2 h-0.5 w-4 bg-amber-gold/50 -translate-y-1/2" />
        <div className="absolute right-0 top-1/2 h-0.5 w-4 bg-amber-gold/50 -translate-y-1/2" />
      </motion.div>

      {/* Middle Cyan Halo (Medicina de raíz sky ring) */}
      <motion.div
        className="absolute rounded-full border-2 border-cyan-atlas/25 border-dashed"
        style={{ width: size * 0.78, height: size * 0.78 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* Inner Glowing Sun Disc */}
      <motion.div
        className="absolute rounded-full blur-xl"
        style={{
          width: size * 0.65,
          height: size * 0.65,
          background: 'radial-gradient(circle, rgba(244,180,26,0.18) 0%, rgba(242,84,45,0.08) 55%, transparent 100%)',
        }}
        animate={{ opacity: [0.38, 0.68, 0.38] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
