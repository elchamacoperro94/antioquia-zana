import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowColor?: 'orange' | 'green' | 'purple' | 'none';
  className?: string;
  children: React.ReactNode;
}

export default function GlassCard({
  children,
  hoverEffect = true,
  glowColor = 'none',
  className = '',
  ...props
}: GlassCardProps) {
  const glowClasses = {
    orange: 'glow-orange',
    green: 'glow-green',
    purple: 'glow-purple',
    none: ''
  };

  return (
    <div
      className={`glass-panel rounded-2xl p-6 ${
        hoverEffect ? 'glass-panel-hover' : ''
      } ${glowClasses[glowColor]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
