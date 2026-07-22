/**
 * BotanicalBackground.tsx
 *
 * Global animated botanical background inspired by Yuliana Miranda Gómez's
 * "Zanahoria" (Óleo sobre tela, 2026) — the cover artwork of the Agrosavia catalog
 * "El valor de lo singular".
 *
 * Visual elements extracted from the painting:
 * — Branching carrot stems (Daucus carota) radiating from lower centre
 * — Compound pinnate leaves (feathery, dentate, characteristic of Apiaceae)
 * — Curving runners and secondary stems at the ground line
 * — Palette: deep botanical teal (#0A2E28), sage green (#74C67A),
 *   vermilion orange (#F2542D), carotene gold (#F4B41A), anthocyanin purple (#7B2869)
 */

import { motion } from 'framer-motion';

const floatVariant = (delay: number, yAmp: number, duration: number) => ({
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -yAmp, 0],
    rotate: [0, 1.5, 0],
    transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' as const }
  },
});

// ─── Colour tokens (from palette) ────────────────────────────────────────────

const C = {
  teal:    '#0A2E28',
  stemDk:  '#0d3b36',   // dark stem green
  stemMd:  '#1a5e46',   // mid-green stem
  leaf:    '#2a7a3b',   // leaf body
  leafHi:  '#74c67a',   // leaf highlight / sage
  leafLo:  '#1a4d28',   // leaf shadow
  orange:  '#F2542D',   // vermilion (mini carrots)
  gold:    '#F4B41A',   // carotene gold accent
  purple:  '#7B2869',   // anthocyanin
};

// ─── Leaf path helper ─────────────────────────────────────────────────────────
// Creates a small compound carrot leaf cluster SVG group at position (cx, cy),
// rotated by `rot` degrees, and scaled by `sc`.

function LeafCluster({
  cx, cy, rot = 0, sc = 1, opacity = 0.55, delay = 0
}: { cx: number; cy: number; rot?: number; sc?: number; opacity?: number; delay?: number }) {
  return (
    <motion.g
      transform={`translate(${cx},${cy}) rotate(${rot}) scale(${sc})`}
      variants={floatVariant(delay, 4 * sc, 7 + delay * 0.5)}
      initial="initial"
      animate="animate"
      style={{ opacity }}
    >
      {/* Central leaflet */}
      <path d="M0,0 C-2,-8 -4,-16 0,-22 C4,-16 2,-8 0,0" fill={C.leaf} />
      {/* Left leaflet */}
      <path d="M0,-6 C-5,-12 -10,-14 -12,-20 C-8,-15 -3,-12 0,-6" fill={C.leafLo} />
      {/* Right leaflet */}
      <path d="M0,-6 C5,-12 10,-14 12,-20 C8,-15 3,-12 0,-6" fill={C.leafLo} />
      {/* Far left */}
      <path d="M0,-10 C-7,-14 -12,-10 -16,-14 C-10,-10 -5,-12 0,-10" fill={C.leafHi} opacity={0.5} />
      {/* Far right */}
      <path d="M0,-10 C7,-14 12,-10 16,-14 C10,-10 5,-12 0,-10" fill={C.leafHi} opacity={0.5} />
    </motion.g>
  );
}

// ─── Mini carrot helper ───────────────────────────────────────────────────────
function MiniCarrot({
  cx, cy, rot = 0, sc = 1, color = C.orange, delay = 0
}: { cx: number; cy: number; rot?: number; sc?: number; color?: string; delay?: number }) {
  return (
    <motion.g
      transform={`translate(${cx},${cy}) rotate(${rot}) scale(${sc})`}
      variants={floatVariant(delay, 5, 8)}
      initial="initial"
      animate="animate"
      style={{ opacity: 0.7 }}
    >
      {/* Carrot body */}
      <path d="M0,0 C-3,0 -4,6 -2,14 L0,20 L2,14 C4,6 3,0 0,0" fill={color} />
      {/* Shoulder leaves */}
      <path d="M0,0 C-2,-4 -5,-5 -5,-8" stroke={C.leafHi} strokeWidth="1.2" fill="none" />
      <path d="M0,0 C2,-4 5,-5 5,-8" stroke={C.leafHi} strokeWidth="1.2" fill="none" />
      <path d="M0,0 C0,-5 0,-9 0,-11" stroke={C.leafHi} strokeWidth="1.5" fill="none" />
    </motion.g>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BotanicalBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Canvas texture filter — replicates the oil-on-canvas look */}
          <filter id="canvas-texture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blend" />
            <feComponentTransfer in="blend">
              <feFuncA type="linear" slope="0.07" />
            </feComponentTransfer>
          </filter>

          {/* Radial gradient: matches the painting's warm-centre / cool-edge glow */}
          <radialGradient id="bgGradient" cx="50%" cy="55%" r="65%">
            <stop offset="0%"   stopColor="#1a4a36" stopOpacity="0.18" />
            <stop offset="40%"  stopColor="#0d3b2e" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#081a17" stopOpacity="0.00" />
          </radialGradient>

          {/* Stem gradient */}
          <linearGradient id="stemGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={C.stemMd} />
            <stop offset="100%" stopColor={C.stemDk} />
          </linearGradient>
        </defs>

        {/* ── Background ambient glow ── */}
        <ellipse cx="720" cy="520" rx="600" ry="420" fill="url(#bgGradient)" />

        {/* ════════════════════════════════════════════════
            GROUND RUNNERS — horizontal base stems
            (like the bottom of Yuliana's painting where
            roots and runners intertwine across the ground)
        ════════════════════════════════════════════════ */}

        {/* Left runner */}
        <motion.path
          d="M -60,820 C 100,800 250,840 400,810 C 500,790 560,830 680,820"
          stroke={C.stemDk} strokeWidth="3.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.2 }}
        />
        {/* Right runner */}
        <motion.path
          d="M 760,820 C 900,835 1050,800 1200,820 C 1310,832 1380,810 1500,825"
          stroke={C.stemDk} strokeWidth="3.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.45 }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.4 }}
        />
        {/* Far lower ground line with secondary roots */}
        <motion.path
          d="M 0,870 C 200,858 400,875 600,862 C 800,850 1000,868 1200,858 C 1350,852 1420,865 1500,860"
          stroke={C.stemDk} strokeWidth="2" fill="none" strokeLinecap="round" opacity={0.3}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3.0, ease: 'easeOut', delay: 0.6 }}
        />

        {/* ════════════════════════════════════════════════
            MAIN CENTRAL STEM — the principal vertical axis
            from which all branches radiate (centre of painting)
        ════════════════════════════════════════════════ */}
        <motion.path
          d="M 720,870 C 718,740 715,620 720,500 C 722,420 716,330 718,220"
          stroke="url(#stemGrad)" strokeWidth="5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 2.8, ease: 'easeOut', delay: 0.3 }}
        />

        {/* ════════════════════════════════════════════════
            LEFT MAJOR BRANCH — wide arc to upper left
        ════════════════════════════════════════════════ */}
        <motion.path
          d="M 720,600 C 640,540 520,470 380,390 C 280,330 160,280 80,220"
          stroke={C.stemMd} strokeWidth="4" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.50 }}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 0.5 }}
        />
        {/* Left sub-branch 1 */}
        <motion.path
          d="M 580,480 C 510,430 440,400 360,380 C 300,365 230,370 180,340"
          stroke={C.stemMd} strokeWidth="2.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.42 }}
          transition={{ duration: 2.0, ease: 'easeOut', delay: 0.8 }}
        />
        {/* Left sub-branch 2 */}
        <motion.path
          d="M 460,420 C 380,370 300,330 220,300 C 160,278 90,280 30,260"
          stroke={C.stemMd} strokeWidth="2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.38 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 1.0 }}
        />
        {/* Left thin tendrils */}
        <motion.path
          d="M 350,370 C 290,330 230,310 180,280"
          stroke={C.leafHi} strokeWidth="1.2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.30 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1.2 }}
        />

        {/* ════════════════════════════════════════════════
            RIGHT MAJOR BRANCH — wide arc to upper right
        ════════════════════════════════════════════════ */}
        <motion.path
          d="M 720,600 C 810,540 930,480 1060,400 C 1160,338 1280,290 1370,230"
          stroke={C.stemMd} strokeWidth="4" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.48 }}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 0.6 }}
        />
        {/* Right sub-branch 1 */}
        <motion.path
          d="M 850,500 C 940,450 1020,420 1110,400 C 1180,384 1260,388 1320,360"
          stroke={C.stemMd} strokeWidth="2.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.40 }}
          transition={{ duration: 2.0, ease: 'easeOut', delay: 0.9 }}
        />
        {/* Right sub-branch 2 */}
        <motion.path
          d="M 980,440 C 1060,390 1140,360 1240,330 C 1320,308 1400,310 1460,290"
          stroke={C.stemMd} strokeWidth="2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.36 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 1.1 }}
        />
        {/* Right thin tendril */}
        <motion.path
          d="M 1090,400 C 1160,350 1240,330 1300,300"
          stroke={C.leafHi} strokeWidth="1.2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.28 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1.3 }}
        />

        {/* ════════════════════════════════════════════════
            UPPER LEFT FINE BRANCHES — smaller secondary offshoots
            (mirrors the upper-left canopy of leaves in the painting)
        ════════════════════════════════════════════════ */}
        <motion.path
          d="M 720,480 C 680,420 630,380 560,340 C 500,305 440,295 380,270"
          stroke={C.stemMd} strokeWidth="2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.38 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.9 }}
        />
        <motion.path
          d="M 640,380 C 580,330 510,300 450,270 C 400,248 340,245 290,220"
          stroke={C.stemMd} strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.32 }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 1.1 }}
        />
        {/* Very fine left top tendrils */}
        <motion.path
          d="M 480,290 C 420,250 360,230 300,210"
          stroke={C.leafHi} strokeWidth="1" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 1.4 }}
        />
        <motion.path
          d="M 380,250 C 330,215 280,200 240,185"
          stroke={C.leafHi} strokeWidth="1" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.20 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1.6 }}
        />

        {/* ════════════════════════════════════════════════
            UPPER RIGHT FINE BRANCHES
        ════════════════════════════════════════════════ */}
        <motion.path
          d="M 720,480 C 770,420 820,380 890,340 C 950,305 1010,295 1070,270"
          stroke={C.stemMd} strokeWidth="2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.38 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 1.0 }}
        />
        <motion.path
          d="M 820,370 C 880,318 950,288 1010,260 C 1070,237 1130,232 1180,210"
          stroke={C.stemMd} strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.30 }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 1.2 }}
        />
        {/* Very fine right top tendrils */}
        <motion.path
          d="M 960,280 C 1020,245 1080,230 1140,210"
          stroke={C.leafHi} strokeWidth="1" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.22 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1.5 }}
        />
        <motion.path
          d="M 1060,255 C 1110,220 1160,205 1200,190"
          stroke={C.leafHi} strokeWidth="1" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.18 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 1.7 }}
        />

        {/* ════════════════════════════════════════════════
            LOWER SIDE BRANCHES — like the runners at the
            bottom of the painting spreading left and right
        ════════════════════════════════════════════════ */}
        {/* Lower left spread */}
        <motion.path
          d="M 720,750 C 620,740 510,760 400,748 C 310,738 200,755 100,740"
          stroke={C.stemDk} strokeWidth="2.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.42 }}
          transition={{ duration: 2.0, ease: 'easeOut', delay: 0.7 }}
        />
        {/* Lower right spread */}
        <motion.path
          d="M 720,750 C 830,740 940,758 1060,745 C 1160,735 1280,752 1400,738"
          stroke={C.stemDk} strokeWidth="2.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.40 }}
          transition={{ duration: 2.0, ease: 'easeOut', delay: 0.8 }}
        />

        {/* ════════════════════════════════════════════════
            LEAF CLUSTERS — placed at branch endpoints
            and junctions (imitating the painting's foliage)
        ════════════════════════════════════════════════ */}

        {/* Upper central canopy */}
        <LeafCluster cx={718} cy={220} rot={0}   sc={2.2} opacity={0.40} delay={1.2} />
        <LeafCluster cx={690} cy={260} rot={-25} sc={1.6} opacity={0.32} delay={1.4} />
        <LeafCluster cx={748} cy={255} rot={20}  sc={1.5} opacity={0.30} delay={1.5} />

        {/* Left branch leaf nodes */}
        <LeafCluster cx={380} cy={390} rot={-40} sc={1.8} opacity={0.35} delay={1.0} />
        <LeafCluster cx={240} cy={320} rot={-55} sc={1.5} opacity={0.30} delay={1.3} />
        <LeafCluster cx={80}  cy={220} rot={-70} sc={1.4} opacity={0.28} delay={1.6} />
        <LeafCluster cx={290} cy={270} rot={-45} sc={1.2} opacity={0.25} delay={1.5} />
        <LeafCluster cx={170} cy={290} rot={-60} sc={1.0} opacity={0.22} delay={1.7} />

        {/* Right branch leaf nodes */}
        <LeafCluster cx={1060} cy={400} rot={40}  sc={1.8} opacity={0.34} delay={1.1} />
        <LeafCluster cx={1210} cy={340} rot={55}  sc={1.5} opacity={0.30} delay={1.4} />
        <LeafCluster cx={1375} cy={230} rot={65}  sc={1.4} opacity={0.28} delay={1.6} />
        <LeafCluster cx={1175} cy={265} rot={48}  sc={1.2} opacity={0.24} delay={1.5} />

        {/* Mid-level leaves on left */}
        <LeafCluster cx={450} cy={265} rot={-35} sc={1.1} opacity={0.22} delay={1.4} />
        <LeafCluster cx={310} cy={245} rot={-50} sc={1.0} opacity={0.20} delay={1.6} />

        {/* Mid-level leaves on right */}
        <LeafCluster cx={990} cy={270} rot={38}  sc={1.1} opacity={0.22} delay={1.5} />
        <LeafCluster cx={1150} cy={215} rot={52} sc={1.0} opacity={0.20} delay={1.7} />

        {/* Lower side leaves on runners */}
        <LeafCluster cx={300} cy={755} rot={5}   sc={1.3} opacity={0.28} delay={1.0} />
        <LeafCluster cx={100} cy={745} rot={-10} sc={1.1} opacity={0.22} delay={1.2} />
        <LeafCluster cx={1140} cy={750} rot={-5} sc={1.3} opacity={0.28} delay={1.1} />
        <LeafCluster cx={1360} cy={742} rot={10} sc={1.1} opacity={0.22} delay={1.3} />

        {/* ════════════════════════════════════════════════
            MINI CARROTS — hanging from branch tips
            (like in the original painting where small carrots
            dangle from branch ends)
        ════════════════════════════════════════════════ */}
        <MiniCarrot cx={78}  cy={230} rot={-5}  sc={0.9} color={C.orange} delay={1.5} />
        <MiniCarrot cx={175} cy={305} rot={8}   sc={0.7} color={C.gold}   delay={1.8} />
        <MiniCarrot cx={385} cy={408} rot={-12} sc={0.8} color={C.orange} delay={1.6} />
        <MiniCarrot cx={1065} cy={415} rot={10} sc={0.8} color={C.gold}   delay={1.7} />
        <MiniCarrot cx={1378} cy={248} rot={5}  sc={0.9} color={C.orange} delay={1.5} />
        <MiniCarrot cx={295}  cy={765} rot={0}  sc={0.6} color={C.purple} delay={1.4} />
        <MiniCarrot cx={1148} cy={762} rot={0}  sc={0.6} color={C.orange} delay={1.4} />

        {/* ════════════════════════════════════════════════
            CANVAS TEXTURE OVERLAY — subtle noise to mimic
            the oil-on-canvas texture of the original painting
        ════════════════════════════════════════════════ */}
        <rect
          x="0" y="0" width="1440" height="900"
          fill="transparent"
          filter="url(#canvas-texture)"
          opacity={0.06}
        />
      </svg>
    </div>
  );
}
