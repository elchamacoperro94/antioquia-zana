import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count: number;
}

function Particles({ count }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions and colors based on the requested ratios:
  // 40% burnt orange (#e86a1f), 30% forest green (#2d6a30), 30% amber gold (#f5a623)
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const orange = new THREE.Color('#e86a1f');
    const green = new THREE.Color('#2d6a30');
    const amber = new THREE.Color('#f5a623');

    for (let i = 0; i < count; i++) {
      // Distributed in a spherical pattern around the center
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const radius = THREE.MathUtils.randFloat(1.5, 6.5);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Color distribution: 40% orange, 30% green, 30% amber
      const rand = Math.random();
      let selectedColor;
      if (rand < 0.40) {
        selectedColor = orange;
      } else if (rand < 0.70) {
        selectedColor = green;
      } else {
        selectedColor = amber;
      }

      col[i * 3] = selectedColor.r;
      col[i * 3 + 1] = selectedColor.g;
      col[i * 3 + 2] = selectedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();

      // Rotation settings: Y-axis at 0.02 speed, X-axis with sinusoidal movement
      pointsRef.current.rotation.y = time * 0.02;
      pointsRef.current.rotation.x = Math.sin(time * 0.4) * 0.15;
    }
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
      {/* AdditiveBlending for a glowing luminous effect, size adjusted to look like 1-3 pixels */}
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

interface FloatingOrbProps {
  radius: number;
  color: string;
  speed: number;
  offset: number;
  position: [number, number, number];
}

function FloatingOrb({ radius, color, speed, offset, position }: FloatingOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * speed + offset;

      // Slow floating animation with sine wave drift on X and Y axes
      meshRef.current.position.x = position[0] + Math.sin(time * 0.8) * 1.5;
      meshRef.current.position.y = position[1] + Math.cos(time * 1.1) * 1.2;

      // Continuous rotation on both X and Y axes
      meshRef.current.rotation.x = time * 0.25;
      meshRef.current.rotation.y = time * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function ParticleHeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0a0a0f]">
      {/* 1. Canvas with specific camera, alpha transparent, responsive DPR [1, 2] */}
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        className="absolute inset-0"
      >
        {/* Ambient light at intensity 0.3 */}
        <ambientLight intensity={0.3} />

        {/* Orange point light at position [10,10,10] with intensity 0.5 */}
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#e86a1f" />

        {/* Green point light at position [-10,-10,-5] with intensity 0.3 */}
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#2d6a30" />

        {/* 2000 small luminous particles */}
        <Particles count={2000} />

        {/* 3 wireframe spheres floating in the background */}
        <FloatingOrb radius={1.5} color="#e86a1f" speed={0.3} offset={0.0} position={[-3, 2, -1]} />
        <FloatingOrb radius={1.2} color="#2d6a30" speed={0.25} offset={2.5} position={[3, -2, -2]} />
        <FloatingOrb radius={0.9} color="#f5a623" speed={0.2} offset={5.0} position={[0, 1, -3]} />
      </Canvas>

      {/* OVERLAY EFFECTS ON TOP OF CANVAS */}

      {/* Overlay 1: Radial Glow Gradients (Orange at 30% center, green at 70% edge) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(232,106,31,0.12)_30%,rgba(45,106,48,0.12)_70%)]" />

      {/* Overlay 2: Subtle 60px grid lines with radial fade (scientific precision look) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle,white_45%,transparent_80%)]" />

      {/* Overlay 3: Noise texture overlay at 3% opacity for film grain quality */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-noise" />
    </div>
  );
}
