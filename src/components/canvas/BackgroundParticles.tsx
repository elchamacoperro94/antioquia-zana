import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import InteractiveParticle, { type ParticleData } from './InteractiveParticle'
import { PARTICLE_COUNT } from '../../store/useParticleStore'

// ─── Color palette (brand: orange-heavy, green accent, amber highlight) ───────

const COLORS: readonly string[] = [
  '#ea6b20', // carrot orange  — brand primary
  '#ea6b20', // (weighted ×2 for visual dominance)
  '#95d690', // sage green     — brand secondary
  '#ffb955', // amber gold     — accent
  '#ea6b20', // carrot orange
  '#95d690', // sage green
]

// ─── Inner scene (must live inside Canvas context) ───────────────────────────

function ParticleScene() {
  const particles = useMemo<ParticleData[]>(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      basePosition: [
        THREE.MathUtils.randFloatSpread(16),   // x: ±8  — wide horizontal spread
        THREE.MathUtils.randFloatSpread(10),   // y: ±5  — full vertical coverage
        THREE.MathUtils.randFloat(-6, 0.5),    // z: mostly behind canvas center
      ] as [number, number, number],
      phase: [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ] as [number, number, number],
      speed: THREE.MathUtils.randFloat(0.12, 0.42),
      color: COLORS[i % COLORS.length],
      size: THREE.MathUtils.randFloat(0.18, 0.72),
    }))
  }, []) // stable — no deps, generated once per mount

  return (
    <>
      {particles.map((p) => (
        <InteractiveParticle key={p.id} {...p} />
      ))}
    </>
  )
}

// ─── Canvas wrapper (fixed, transparent, behind all UI) ──────────────────────

export default function BackgroundParticles() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none', // passes mouse events through to the UI below
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{
          alpha: true,        // transparent background so body color shows through
          antialias: false,   // perf: planes are simple enough without AA
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}        // cap DPR for smooth 60fps on HiDPI screens
        frameloop="always"    // continuous loop needed for organic motion
        style={{ background: 'transparent' }}
      >
        <ParticleScene />
      </Canvas>
    </div>
  )
}
