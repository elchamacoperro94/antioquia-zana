import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'
import { useParticleStore } from '../../store/useParticleStore'

// ─── Section metadata for modal content ──────────────────────────────────────

const SECTION_META: Record<string, { label: string; desc: string; emoji: string }> = {
  inicio: {
    label: 'Inicio',
    desc: 'Portal principal del proyecto Antioquia Zana — BPIN 2020000100192, financiado con recursos de regalías del Sistema General de Regalías.',
    emoji: '🏡',
  },
  proyecto: {
    label: 'El Proyecto',
    desc: 'Investigación agropecuaria sostenible para fortalecer la cadena productiva cafetera y las comunidades rurales de la región antioqueña.',
    emoji: '🌿',
  },
  objetivos: {
    label: 'Objetivos',
    desc: 'Metas estratégicas del proyecto: productividad, transferencia de tecnología e impacto socioeconómico medible en los territorios beneficiados.',
    emoji: '🎯',
  },
  actividades: {
    label: 'Actividades',
    desc: 'Ensayos de campo, análisis de laboratorio y ciclos de capacitación con productores locales en alianza con comunidades rurales.',
    emoji: '📋',
  },
  productos: {
    label: 'Productos',
    desc: 'Publicaciones científicas, variedades mejoradas de cultivos, herramientas tecnológicas y entregables técnicos generados por el equipo.',
    emoji: '⚗️',
  },
  resultados: {
    label: 'Resultados',
    desc: 'Indicadores de impacto cuantificados: hectáreas intervenidas, familias beneficiadas, artículos científicos y patentes en proceso.',
    emoji: '📊',
  },
  estudiantes: {
    label: 'Estudiantes',
    desc: 'Semillero de investigación: jóvenes investigadores que lideran el presente y el futuro agropecuario de Antioquia desde la ciencia.',
    emoji: '🎓',
  },
  galeria: {
    label: 'Galería',
    desc: 'Registro visual del trabajo investigativo en campo: cultivos experimentales, maquinaria, investigadores y comunidades rurales.',
    emoji: '🖼️',
  },
  aliados: {
    label: 'Aliados',
    desc: 'Red de socios estratégicos: universidades, gremios del sector, entidades gubernamentales e instituciones colaboradoras del proyecto.',
    emoji: '🤝',
  },
  contacto: {
    label: 'Contacto',
    desc: 'Comunícate con el equipo del proyecto Antioquia Zana en AGROSAVIA Centro La Selva, Región Oriente antioqueño.',
    emoji: '✉️',
  },
}

// ─── Shared pre-allocated Three.js objects ────────────────────────────────────
// These live outside component scope — created once, never mutated.
// useFrame reads from them as lerp targets, never writes to them. ✓

const INTERCEPT_TARGET = new THREE.Vector3(0, 0, 4.8)
const SCALE_IDLE       = new THREE.Vector3(1, 1, 1)
const SCALE_ACTIVE     = new THREE.Vector3(1.3, 1.3, 1.3)

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ParticleData {
  id: number
  basePosition: [number, number, number]
  phase: [number, number, number]
  speed: number
  color: string
  size: number
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function InteractiveParticle({
  id,
  basePosition,
  phase,
  speed,
  color,
  size,
}: ParticleData) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const matRef  = useRef<THREE.MeshBasicMaterial>(null!)

  // ── Store subscription ────────────────────────────────────────────────────
  const interceptedParticleId = useParticleStore((s) => s.interceptedParticleId)
  const activeSection         = useParticleStore((s) => s.activeSection)
  const clearActiveSection    = useParticleStore((s) => s.clearActiveSection)

  const isIntercepted = interceptedParticleId === id
  const meta = activeSection ? (SECTION_META[activeSection] ?? null) : null

  // ── Delayed Html unmount (keeps AnimatePresence exit alive for ~600 ms) ───
  const [showHtml, setShowHtml]   = useState(false)
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    if (isIntercepted) {
      clearTimeout(hideTimeout.current)
      setShowHtml(true)
    } else {
      hideTimeout.current = setTimeout(() => setShowHtml(false), 620)
    }
    return () => clearTimeout(hideTimeout.current)
  }, [isIntercepted])

  // ── Per-frame animation loop (zero React re-renders here) ─────────────────
  useFrame((_state, delta) => {
    if (!meshRef.current || !matRef.current) return

    const mesh = meshRef.current
    const mat  = matRef.current
    const time = _state.clock.getElapsedTime()
    // Clamp delta to avoid huge jumps on tab restore
    const dt = Math.min(delta, 0.05)

    if (!isIntercepted) {
      // ── Organic floating idle motion ──────────────────────────────────────
      mesh.position.x = basePosition[0] + Math.sin(time * speed + phase[0]) * 0.9
      mesh.position.y = basePosition[1] + Math.cos(time * speed * 0.7 + phase[1]) * 0.65
      mesh.position.z = basePosition[2] + Math.sin(time * speed * 0.5 + phase[2]) * 0.45

      // Gentle tumbling rotation
      mesh.rotation.x = Math.sin(time * speed * 0.4 + phase[0]) * 0.5
      mesh.rotation.y = time * speed * 0.1
      mesh.rotation.z = Math.cos(time * speed * 0.3 + phase[2]) * 0.3

      // Ease back to idle scale & opacity
      mesh.scale.lerp(SCALE_IDLE, Math.min(dt * 4, 1))
      mat.opacity += (0.18 - mat.opacity) * Math.min(dt * 2.5, 1)
    } else {
      // ── Intercept: lerp toward camera center ──────────────────────────────
      mesh.position.lerp(INTERCEPT_TARGET, Math.min(dt * 3.2, 1))

      // Smooth rotation reset to face camera
      mesh.rotation.x += (0 - mesh.rotation.x) * Math.min(dt * 4, 1)
      mesh.rotation.y += (0 - mesh.rotation.y) * Math.min(dt * 4, 1)
      mesh.rotation.z += (0 - mesh.rotation.z) * Math.min(dt * 4, 1)

      // Scale up & brighten
      mesh.scale.lerp(SCALE_ACTIVE, Math.min(dt * 3, 1))
      mat.opacity += (0.6 - mat.opacity) * Math.min(dt * 2.5, 1)
    }
  })

  // ── Modal close SVG icon ─────────────────────────────────────────────────
  const CloseIcon = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial
        ref={matRef}
        color={color}
        transparent
        opacity={0.18}
        side={THREE.DoubleSide}
        depthWrite={false}
      />

      {/* Html portal — only mounted during intercept + exit window */}
      {showHtml && (
        <Html
          center
          zIndexRange={[9999, 9998]}
          style={{ pointerEvents: isIntercepted ? 'auto' : 'none' }}
        >
          <AnimatePresence>
            {isIntercepted && meta && (
              <motion.div
                key={`particle-modal-${id}`}
                initial={{ scale: 0.45, opacity: 0, y: 24 }}
                animate={{ scale: 1,    opacity: 1, y: 0  }}
                exit={{   scale: 0.4,  opacity: 0, y: -12 }}
                transition={{ type: 'spring', damping: 22, stiffness: 280, mass: 0.75 }}
                style={{
                  position: 'relative',
                  width: '380px',
                  background: 'rgba(7, 8, 13, 0.78)',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  boxShadow: [
                    '0 32px 80px -20px rgba(0, 0, 0, 0.85)',
                    '0 0 0 1px rgba(255, 255, 255, 0.04)',
                    'inset 0 1px 0 rgba(255, 255, 255, 0.09)',
                    `0 0 50px -15px ${color}55`,
                  ].join(', '),
                  padding: '28px 28px 24px',
                  color: '#e2e1f2',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  userSelect: 'none',
                }}
              >
                {/* ── Corner pulse dot ── */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: color,
                    boxShadow: `0 0 10px 2px ${color}88`,
                    animation: 'particleDotPulse 2s ease-in-out infinite',
                  }}
                />

                {/* ── Header ── */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '18px' }}>
                  <div
                    style={{
                      fontSize: '30px',
                      lineHeight: 1,
                      flexShrink: 0,
                      filter: `drop-shadow(0 0 10px ${color}66)`,
                    }}
                  >
                    {meta.emoji}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: color,
                        margin: '0 0 5px 0',
                        fontFamily: "'Geist Mono', 'Courier New', monospace",
                        opacity: 0.9,
                      }}
                    >
                      Antioquia Zana — AGROSAVIA
                    </p>
                    <h2
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#ffffff',
                        margin: 0,
                        letterSpacing: '-0.01em',
                        fontFamily: "'Sora', 'Inter', sans-serif",
                        lineHeight: 1.2,
                      }}
                    >
                      {meta.label}
                    </h2>
                  </div>
                </div>

                {/* ── Gradient rule ── */}
                <div
                  style={{
                    height: '1px',
                    background: `linear-gradient(90deg, ${color}, transparent 75%)`,
                    marginBottom: '16px',
                    opacity: 0.55,
                  }}
                />

                {/* ── Description ── */}
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.68,
                    color: '#a8a5c2',
                    margin: '0 0 22px 0',
                  }}
                >
                  {meta.desc}
                </p>

                {/* ── Footer ── */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span
                      style={{
                        fontSize: '8px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.22)',
                        fontFamily: "'Geist Mono', monospace",
                        display: 'block',
                        marginBottom: '2px',
                      }}
                    >
                      Proyecto SGR
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.05em',
                        color: 'rgba(255,255,255,0.38)',
                        fontFamily: "'Geist Mono', monospace",
                      }}
                    >
                      BPIN 2020000100192
                    </span>
                  </div>

                  <button
                    id={`particle-modal-close-${id}`}
                    onClick={(e) => { e.stopPropagation(); clearActiveSection() }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      background: 'rgba(234, 107, 32, 0.1)',
                      border: '1px solid rgba(234, 107, 32, 0.32)',
                      borderRadius: '10px',
                      color: '#ea6b20',
                      padding: '8px 16px',
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontFamily: "'Geist Mono', monospace",
                      transition: 'background 0.18s ease, border-color 0.18s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background    = 'rgba(234, 107, 32, 0.22)'
                      e.currentTarget.style.borderColor   = 'rgba(234, 107, 32, 0.6)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background    = 'rgba(234, 107, 32, 0.1)'
                      e.currentTarget.style.borderColor   = 'rgba(234, 107, 32, 0.32)'
                    }}
                  >
                    <span>Cerrar</span>
                    <CloseIcon />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Html>
      )}
    </mesh>
  )
}
