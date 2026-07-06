import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Calendar } from 'lucide-react';
import { activities } from '../data/projectData';
import GlassCard from './GlassCard';
import Badge from './Badge';

interface PhaseConfig {
  number: number;
  title: string;
  accent: 'blue' | 'orange' | 'purple' | 'green';
  colorClass: string;
  borderClass: string;
  badgeBg: string;
  textClass: string;
}

const phases: PhaseConfig[] = [
  {
    number: 1,
    title: 'Fase 1: Caracterización y Selección de Cultivares',
    accent: 'blue',
    colorClass: 'from-blue-500/20 to-blue-600/5',
    borderClass: 'border-blue-500/30',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    textClass: 'text-blue-400'
  },
  {
    number: 2,
    title: 'Fase 2: Prototipos e Innovación Alimentaria',
    accent: 'orange',
    colorClass: 'from-carrot-orange/20 to-carrot-orange/5',
    borderClass: 'border-carrot-orange/30',
    badgeBg: 'bg-carrot-orange/10 text-carrot-orange border-carrot-orange/20',
    textClass: 'text-carrot-orange'
  },
  {
    number: 3,
    title: 'Fase 3: Prototipos e Ingredientes Cosmecéuticos',
    accent: 'purple',
    colorClass: 'from-purple-500/20 to-purple-600/5',
    borderClass: 'border-purple-500/30',
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    textClass: 'text-purple-400'
  },
  {
    number: 4,
    title: 'Fase 4: Modelos de Negocio, Gobernanza y Transferencia',
    accent: 'green',
    colorClass: 'from-emerald-500/20 to-emerald-600/5',
    borderClass: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    textClass: 'text-emerald-400'
  }
];

export default function ActivityAccordion() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  const togglePhase = (phaseNum: number) => {
    setExpandedPhase(expandedPhase === phaseNum ? null : phaseNum);
    setExpandedActivity(null); // Reset active activity detail when phase changes
  };

  const toggleActivity = (actId: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Avoid triggering phase toggle
    setExpandedActivity(expandedActivity === actId ? null : actId);
  };

  const getDiscipline = (actId: string) => {
    const map: Record<string, { label: string; color: 'green' | 'blue' | 'orange' | 'amber' }> = {
      'ACT-01': { label: 'Agronomía', color: 'green' },
      'ACT-02': { label: 'Modelado NIRS', color: 'blue' },
      'ACT-03': { label: 'Fisicoquímica', color: 'blue' },
      'ACT-04': { label: 'Tecnología Limpia', color: 'orange' },
      'ACT-05': { label: 'Biotecnología', color: 'green' },
      'ACT-06': { label: 'Análisis Sensorial', color: 'green' },
      'ACT-07': { label: 'Fitoquímica', color: 'blue' },
      'ACT-08': { label: 'Nanoencapsulación', color: 'blue' },
      'ACT-09': { label: 'Seguridad Clínica', color: 'blue' },
      'ACT-10': { label: 'Planta Piloto', color: 'orange' },
      'ACT-11': { label: 'Economía Agraria', color: 'amber' },
      'ACT-12': { label: 'Planes de Negocio', color: 'amber' },
      'ACT-13': { label: 'Apropiación Social', color: 'amber' },
      'ACT-14': { label: 'Gobernanza', color: 'amber' }
    };
    return map[actId] || { label: 'Investigación', color: 'blue' };
  };

  const getPhaseStats = (phaseNum: number) => {
    const phaseActs = activities.filter((act) => act.phase === phaseNum);
    return `${phaseActs.length} Hitos Científicos`;
  };

  return (
    <div className="flex flex-col gap-6">
      {phases.map((phase) => {
        const isOpen = expandedPhase === phase.number;
        const phaseActs = activities.filter((act) => act.phase === phase.number);

        return (
          <GlassCard
            key={phase.number}
            hoverEffect={false}
            className={`border transition-all duration-300 p-0 overflow-hidden ${
              isOpen ? `border-white/15 bg-obsidian-800/60` : 'border-white/5 bg-obsidian-800/20'
            }`}
          >
            {/* Phase Accordion Header */}
            <button
              onClick={() => togglePhase(phase.number)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg bg-white/5 border border-white/10 shrink-0 ${phase.textClass}`}
                >
                  0{phase.number}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-carrot-orange transition-colors">
                    {phase.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-mono border ${phase.badgeBg}`}>
                      {getPhaseStats(phase.number)}
                    </span>
                  </div>
                </div>
              </div>
              <ChevronDown
                className={`h-6 w-6 text-slate-400 transition-transform duration-300 shrink-0 ${
                  isOpen ? 'transform rotate-180 text-carrot-orange' : ''
                }`}
              />
            </button>

            {/* Accordion Expandable Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="border-t border-white/5"
                >
                  <div className="p-6 flex flex-col gap-4">
                    {phaseActs.map((act) => {
                      const isActExpanded = expandedActivity === act.id;
                      
                      return (
                        <div
                          key={act.id}
                          onClick={(e) => toggleActivity(act.id, e)}
                          className={`transition-all duration-200 rounded-xl border border-white/5 cursor-pointer overflow-hidden ${
                            isActExpanded 
                              ? 'bg-obsidian-900 border-white/10 shadow-md' 
                              : 'bg-obsidian-900/40 hover:bg-obsidian-900/70'
                          }`}
                        >
                          {/* Activity Row */}
                          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono text-slate-500">{act.id}</span>
                                  <h4 className="font-semibold text-white text-sm md:text-base">
                                    {act.name}
                                  </h4>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{act.detail}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                              <Badge text={getDiscipline(act.id).label} color={getDiscipline(act.id).color} />
                              <ChevronDown
                                className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                                  isActExpanded ? 'transform rotate-180 text-carrot-orange' : ''
                                }`}
                              />
                            </div>
                          </div>

                          {/* Activity Detail Description */}
                          <AnimatePresence initial={false}>
                            {isActExpanded && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="border-t border-white/5"
                              >
                                <div className="p-4 bg-obsidian-950/50 flex gap-4">
                                  {/* Left accent border */}
                                  <div
                                    className={`w-1 rounded-full shrink-0 ${
                                      phase.accent === 'blue'
                                        ? 'bg-blue-500'
                                        : phase.accent === 'orange'
                                        ? 'bg-carrot-orange'
                                        : phase.accent === 'purple'
                                        ? 'bg-purple-500'
                                        : 'bg-emerald-500'
                                    }`}
                                  />
                                  <div className="flex flex-col gap-2 w-full">
                                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                                      {act.description}
                                    </p>
                                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mt-2">
                                      <Calendar className="h-3.5 w-3.5" />
                                      <span>Cronograma: Trimestres 2022-2026</span>
                                    </div>

                                    {/* Key Findings Section */}
                                    {act.keyFindings && act.keyFindings.length > 0 && (
                                      <div className="mt-4 pt-4 border-t border-white/5">
                                        <h5 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                                          Hallazgos y Resultados Clave
                                        </h5>
                                        <ul className="flex flex-col gap-2.5">
                                          {act.keyFindings.map((finding, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                                              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                                              <span className="font-light leading-relaxed">{finding}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        );
      })}
    </div>
  );
}
