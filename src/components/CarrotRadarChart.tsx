/**
 * CarrotRadarChart.tsx
 *
 * Scientific sensory profile radar chart inspired by the Agrosavia catalog.
 * The book shows sensory data overlaid on cross-sections of carrot varieties.
 *
 * Design:
 * — Recharts RadarChart with custom neón fill colors (per variety)
 * — Entrance animation: radar points expand from center (scale 0 → 1)
 * — Background: circular carrot cross-section silhouette (CSS radial)
 * — Variety selector pills at the bottom
 * — Data: real sensory attributes from the catalog (Dulzor, Acidez, etc.)
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

/* ─── Sensory data per variety ───────────────────────────────────── */
interface VarietyData {
  label: string;
  color: string;
  fillOpacity: number;
  code: string;
  profile: { attribute: string; value: number }[];
}

const VARIETIES: VarietyData[] = [
  {
    label: 'Zanahoria Naranja',
    code: '1NAN',
    color: '#F2542D',
    fillOpacity: 0.28,
    profile: [
      { attribute: 'Dulzor',    value: 82 },
      { attribute: 'Firmeza',   value: 74 },
      { attribute: 'Acidez',    value: 38 },
      { attribute: 'Aroma',     value: 66 },
      { attribute: 'Color',     value: 90 },
      { attribute: 'Jugosidad', value: 71 },
    ],
  },
  {
    label: 'Variedad Morada',
    code: '13FLA',
    color: '#7B2869',
    fillOpacity: 0.28,
    profile: [
      { attribute: 'Dulzor',    value: 70 },
      { attribute: 'Firmeza',   value: 80 },
      { attribute: 'Acidez',    value: 55 },
      { attribute: 'Aroma',     value: 78 },
      { attribute: 'Color',     value: 95 },
      { attribute: 'Jugosidad', value: 62 },
    ],
  },
  {
    label: 'Variedad Amarilla',
    code: '12NAN',
    color: '#F4B41A',
    fillOpacity: 0.28,
    profile: [
      { attribute: 'Dulzor',    value: 88 },
      { attribute: 'Firmeza',   value: 65 },
      { attribute: 'Acidez',    value: 30 },
      { attribute: 'Aroma',     value: 72 },
      { attribute: 'Color',     value: 85 },
      { attribute: 'Jugosidad', value: 80 },
    ],
  },
  {
    label: 'Variedad Blanca',
    code: '11NAN',
    color: '#F4F1E1',
    fillOpacity: 0.20,
    profile: [
      { attribute: 'Dulzor',    value: 75 },
      { attribute: 'Firmeza',   value: 78 },
      { attribute: 'Acidez',    value: 42 },
      { attribute: 'Aroma',     value: 60 },
      { attribute: 'Color',     value: 55 },
      { attribute: 'Jugosidad', value: 68 },
    ],
  },
];

/* ─── Custom Tooltip ─────────────────────────────────────────────── */
function CustomTooltip({ active, payload }: { active?: boolean; payload?: { value: number; name: string }[] }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl bg-obsidian-900/90 backdrop-blur-md border border-white/10 px-3 py-2 shadow-xl">
      <p className="font-geist text-[11px] text-white/90">
        {payload[0]?.name}: <span className="font-bold">{payload[0]?.value}</span>
      </p>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function CarrotRadarChart() {
  const [activeIdx, setActiveIdx] = useState(0);
  const variety = VARIETIES[activeIdx];

  return (
    <div className="relative flex flex-col items-center gap-6">

      {/* Cross-section background — concentric rings imitating a carrot slice */}
      <div className="relative w-full max-w-sm mx-auto">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[200, 160, 120, 80].map((size, i) => (
            <div
              key={size}
              className="absolute rounded-full border border-white/4"
              style={{
                width: size,
                height: size,
                opacity: 0.6 - i * 0.12,
              }}
            />
          ))}
          {/* Innermost colour dot (carrot core) */}
          <div
            className="absolute w-5 h-5 rounded-full blur-sm transition-colors duration-700"
            style={{ background: variety.color, opacity: 0.5 }}
          />
        </div>

        {/* Radar chart */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={variety.profile} margin={{ top: 16, right: 24, bottom: 16, left: 24 }}>
                <PolarGrid
                  stroke="rgba(255,255,255,0.06)"
                  radialLines={false}
                />
                <PolarAngleAxis
                  dataKey="attribute"
                  tick={{
                    fill: 'rgba(255,255,255,0.55)',
                    fontSize: 11,
                    fontFamily: 'Geist Mono, monospace',
                    fontWeight: 500,
                  }}
                />
                <Radar
                  name={variety.label}
                  dataKey="value"
                  stroke={variety.color}
                  fill={variety.color}
                  fillOpacity={variety.fillOpacity}
                  strokeWidth={2}
                  dot={{
                    fill: variety.color,
                    r: 4,
                    strokeWidth: 0,
                  } as { fill: string; r: number; strokeWidth: number }}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Active variety label */}
      <motion.div
        key={`label-${activeIdx}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        className="text-center"
      >
        <p className="font-sora text-lg font-light text-white">{variety.label}</p>
        <p className="font-geist text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
          Var. {variety.code} · Perfil Sensorial
        </p>
      </motion.div>

      {/* Variety selector pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {VARIETIES.map((v, i) => (
          <button
            key={v.code}
            onClick={() => setActiveIdx(i)}
            className={`relative px-4 py-1.5 rounded-full font-geist text-[10px] uppercase tracking-widest
              border transition-all duration-300 cursor-pointer
              ${i === activeIdx
                ? 'border-transparent text-obsidian-950 font-semibold'
                : 'border-white/10 text-white/50 hover:text-white/80 bg-transparent hover:bg-white/4'
              }`}
            style={i === activeIdx ? { background: v.color } : {}}
          >
            {v.label.split(' ')[1] || v.label}
            {i === activeIdx && (
              <motion.div
                layoutId="varietyPill"
                className="absolute inset-0 rounded-full -z-10"
                style={{ background: v.color }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
