
interface BadgeProps {
  text: string;
  pulsing?: boolean;
  color?: 'orange' | 'green' | 'purple' | 'amber' | 'blue';
}

export default function Badge({ text, pulsing = false, color = 'orange' }: BadgeProps) {
  const colorMap = {
    orange: 'bg-carrot-orange/10 text-carrot-orange border-carrot-orange/30',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    purple: 'bg-glow-purple/10 text-glow-purple border-glow-purple/30',
    amber: 'bg-amber-gold/10 text-amber-gold border-amber-gold/30',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  };

  const dotColorMap = {
    orange: 'bg-carrot-orange',
    green: 'bg-emerald-400',
    purple: 'bg-glow-purple',
    amber: 'bg-amber-gold',
    blue: 'bg-blue-400',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium tracking-wider uppercase rounded-full border ${colorMap[color]}`}>
      {pulsing && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColorMap[color]} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColorMap[color]} animate-pulse-dot`}></span>
        </span>
      )}
      {text}
    </span>
  );
}
