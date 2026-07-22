import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [smoothPos, setSmoothPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateSmoothPos = () => {
      setSmoothPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
          return prev;
        }
        return {
          x: prev.x + dx * 0.12,
          y: prev.y + dy * 0.12
        };
      });
      animationFrameId = requestAnimationFrame(updateSmoothPos);
    };

    animationFrameId = requestAnimationFrame(updateSmoothPos);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      {/* Primary Warm Glow Following Mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-80"
        style={{
          background: `radial-gradient(550px circle at ${smoothPos.x}px ${smoothPos.y}px, rgba(242, 84, 45, 0.08), rgba(11, 43, 38, 0.04) 45%, transparent 70%)`
        }}
      />
      {/* Secondary Soft Botanical Halo */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 opacity-60"
        style={{
          background: `radial-gradient(250px circle at ${smoothPos.x}px ${smoothPos.y}px, rgba(116, 198, 122, 0.06), transparent 80%)`
        }}
      />
    </>
  );
}
