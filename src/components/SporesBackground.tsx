/**
 * SporesBackground.tsx
 *
 * 3D Spore particles canvas powered by @react-three/fiber.
 * Renders floating botanical spores in space with materials using
 * --color-oro-lienzo (#D4CF7D) and --color-bermellon (#DE5A30).
 */

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SporeParticles({ count = 120 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate spore positions and colors (#D4CF7D oro-lienzo & #DE5A30 bermellón)
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const oro = new THREE.Color('#D4CF7D');
    const bermellon = new THREE.Color('#DE5A30');
    const daucus = new THREE.Color('#5E824A');

    for (let i = 0; i < count; i++) {
      // Spread across a 3D volume
      pos[i * 3]     = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // 60% oro-lienzo, 30% bermellón, 10% daucus green
      const rand = Math.random();
      let color = oro;
      if (rand > 0.6 && rand <= 0.9) {
        color = bermellon;
      } else if (rand > 0.9) {
        color = daucus;
      }

      col[i * 3]     = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, [count]);

  // Frame animation: continuous slow orbital drift and floating movement
  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime() * 0.15;
    pointsRef.current.rotation.y = t * 0.4;
    pointsRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;

    // Subtle breathing displacement
    const posAttr = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = posAttr.getY(i);
      posAttr.setY(i, y + Math.sin(t + i) * 0.002);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.18}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function SporesBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <SporeParticles count={140} />
      </Canvas>
    </div>
  );
}
