import { motion } from 'framer-motion';

export default function ArtisticRibbonBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ribbon 1: Vermilion Orange (Cosecha Singular) */}
        <motion.path
          d="M -100 200 C 300 100, 500 450, 900 250 C 1200 100, 1400 350, 1600 200"
          stroke="#f2542d"
          strokeWidth="28"
          strokeLinecap="round"
          opacity="0.35"
          initial={{ pathLength: 0.2, y: 0 }}
          animate={{
            pathLength: [0.8, 1, 0.8],
            y: [-15, 15, -15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Ribbon 2: Cyan Blue (Zanahorias de Piel Amarilla & Medicina de Raíz) */}
        <motion.path
          d="M -100 650 C 200 450, 600 750, 1000 500 C 1300 350, 1500 600, 1600 550"
          stroke="#1a7b9b"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.30"
          initial={{ y: 0 }}
          animate={{
            y: [15, -15, 15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Ribbon 3: Anthocyanin Purple (Raíces de Juventud) */}
        <motion.path
          d="M 100 -50 C 400 300, 200 600, 700 800 C 1000 950, 1200 700, 1500 900"
          stroke="#7b2869"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.25"
          initial={{ y: 0 }}
          animate={{
            y: [-10, 20, -10]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Ribbon 4: Carotene Sun Gold (Medicina de Raíz) */}
        <motion.path
          d="M 800 -100 C 1000 200, 1200 100, 1400 400"
          stroke="#f4b41a"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.25"
          animate={{
            y: [10, -10, 10]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}
