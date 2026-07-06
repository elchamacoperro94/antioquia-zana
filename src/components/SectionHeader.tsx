import Badge from './Badge';

interface SectionHeaderProps {
  badgeText: string;
  badgeColor?: 'orange' | 'green' | 'purple' | 'amber' | 'blue';
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  badgeText,
  badgeColor = 'orange',
  title,
  subtitle,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 flex flex-col items-center text-center ${className}`}>
      <div className="mb-4">
        <Badge text={badgeText} color={badgeColor} pulsing={false} />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl font-light">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-gradient-to-r from-carrot-orange to-amber-gold mt-6 rounded-full"></div>
    </div>
  );
}
