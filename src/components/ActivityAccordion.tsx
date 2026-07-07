import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Calendar, FileText } from 'lucide-react';
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
  const [selectedRows, setSelectedRows] = useState<Record<string, number | null>>({});

  const togglePhase = (phaseNum: number) => {
    setExpandedPhase(expandedPhase === phaseNum ? null : phaseNum);
    setExpandedActivity(null); // Reset active activity detail when phase changes
  };

  const toggleActivity = (actId: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Avoid triggering phase toggle
    setExpandedActivity(expandedActivity === actId ? null : actId);
  };

  const handleRowClick = (actId: string, rowIndex: number) => {
    setSelectedRows(prev => ({
      ...prev,
      [actId]: prev[actId] === rowIndex ? null : rowIndex
    }));
  };

  const getRowDetailMessage = (actId: string, rowIndex: number) => {
    if (actId === 'ACT-01') {
      const messages = [
        "Material 10: Variedad de óptimo peso promedio (117.14 g) con baja severidad de Alternaria y 0.00% de agrietamiento en campo.",
        "Material 8: Variedad de alto rendimiento (117.07 g) y excelente comportamiento frente a Alternaria. Recomendado para el procesamiento y deshidratado industrial.",
        "Material 9: Cultivar destacado con 0.00% de rajaduras y ausencia total de nematodos. Presenta el comportamiento fitosanitario más estable y resistente del ensayo.",
        "Material 14: Variedad de comportamiento intermedio (72.88 g) con severidad media de Alternaria y baja propensión a rajaduras (2.81%).",
        "Material 1 (Testigo): Alta vulnerabilidad fitosanitaria (33.33% de rajaduras, pudriciones severas y bifurcaciones por nematodos). No apto para procesamiento industrial."
      ];
      return messages[rowIndex] || null;
    }
    return null;
  };

  const renderTableCell = (cell: string, header: string, accent: 'blue' | 'orange' | 'purple' | 'green') => {
    const headerLower = header.toLowerCase();
    const cellLower = cell.toLowerCase();

    // 1. Column Alternaria
    if (headerLower.includes('alternaria')) {
      if (cellLower.includes('muy baja')) {
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
            Muy Baja
          </span>
        );
      }
      if (cellLower.includes('baja')) {
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium font-mono bg-green-500/10 text-green-400 border border-green-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
            Baja
          </span>
        );
      }
      if (cellLower.includes('media')) {
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
            Media
          </span>
        );
      }
      if (cellLower.includes('alta')) {
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium font-mono bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
            {cell}
          </span>
        );
      }
    }

    // 2. Column Agallas / Nematodos
    if (headerLower.includes('agallas') || headerLower.includes('nematodos')) {
      if (cellLower.includes('ausente')) {
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-mono text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
            Ausente
          </span>
        );
      }
      if (cellLower.includes('presente')) {
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-mono text-rose-400">
            <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0 animate-ping mr-1" />
            {cell}
          </span>
        );
      }
    }

    // 3. Column Peso Promedio
    if (headerLower.includes('peso promedio') || headerLower.includes('peso (g)')) {
      if (cellLower.includes('no apto')) {
        return (
          <span className="text-slate-500 line-through font-mono text-xs">
            No apto
          </span>
        );
      }
      const numMatch = cell.match(/[\d.]+/);
      if (numMatch) {
        const val = parseFloat(numMatch[0]);
        const percent = Math.min(100, Math.round((val / 130) * 100));
        return (
          <div className="flex items-center gap-2">
            <span className="font-mono">{cell}</span>
            <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden shrink-0 hidden sm:block">
              <div
                className={`h-full rounded-full ${
                  accent === 'blue'
                    ? 'bg-blue-500'
                    : accent === 'orange'
                    ? 'bg-carrot-orange'
                    : accent === 'purple'
                    ? 'bg-purple-500'
                    : 'bg-emerald-500'
                }`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      }
    }

    // 4. Percentage columns
    const isPercentage = cell.endsWith('%') && !isNaN(parseFloat(cell));
    if (isPercentage) {
      return (
        <div className="flex items-center gap-2">
          <span>{cell}</span>
          <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden shrink-0">
            <div
              className={`h-full rounded-full ${
                accent === 'blue'
                  ? 'bg-blue-500'
                  : accent === 'orange'
                  ? 'bg-carrot-orange'
                  : accent === 'purple'
                  ? 'bg-purple-500'
                  : 'bg-emerald-500'
              }`}
              style={{ width: cell }}
            />
          </div>
        </div>
      );
    }

    return cell;
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
                          className={`transition-all duration-200 rounded-xl border border-white/5 overflow-hidden ${
                            isActExpanded 
                              ? 'bg-obsidian-900 border-white/10 shadow-md' 
                              : 'bg-obsidian-900/40 hover:bg-obsidian-900/70'
                          }`}
                        >
                          {/* Activity Row */}
                          <div 
                            onClick={(e) => toggleActivity(act.id, e)}
                            className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                          >
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

                                    {/* Deliverables Section */}
                                    {act.deliverables && act.deliverables.length > 0 && (
                                      <div className="mt-4 pt-4 border-t border-white/5">
                                        <h5 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                                          Entregables Oficiales y Soporte Técnico
                                        </h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                          {act.deliverables.map((deliv, idx) => {
                                            const hasLink = !!deliv.link;
                                            const content = (
                                              <>
                                                <FileText className={`h-4 w-4 shrink-0 mt-0.5 ${hasLink ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-carrot-orange'}`} />
                                                <span className="font-light leading-snug">{deliv.name}</span>
                                                {hasLink && (
                                                  <span className="ml-auto text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all shrink-0">
                                                    Descargar
                                                  </span>
                                                )}
                                              </>
                                            );

                                            if (hasLink) {
                                              return (
                                                <a 
                                                  key={idx} 
                                                  href={deliv.link} 
                                                  download
                                                  className="group flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all cursor-pointer"
                                                >
                                                  {content}
                                                </a>
                                              );
                                            }

                                            return (
                                              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                                                {content}
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    )}

                                    {/* Technical Table Section */}
                                    {act.technicalTable && (
                                      <div className="mt-4 pt-4 border-t border-white/5">
                                        <h5 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                                          {act.technicalTable.title}
                                        </h5>
                                        <div className="overflow-x-auto rounded-xl border border-white/5 bg-obsidian-950/40 scrollbar-thin">
                                          <table className="min-w-full divide-y divide-white/5 text-left text-xs text-slate-300">
                                            <thead className="bg-white/5 text-[10px] uppercase font-mono tracking-wider text-slate-400">
                                              <tr>
                                                {act.technicalTable.headers.map((h, i) => (
                                                  <th key={i} className="px-4 py-2.5 font-bold">
                                                    {h}
                                                  </th>
                                                ))}
                                              </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5 font-light">
                                              {act.technicalTable.rows.map((row, rIdx) => {
                                                const isSelected = selectedRows[act.id] === rIdx;
                                                const isCriticalRow = row[0].includes('Control') || row[0].includes('Material 1');
                                                const isGoodRow = row[0].includes('Material 8') || row[0].includes('Material 9') || row[0].includes('Material 10');
                                                const rowClass = isSelected
                                                  ? 'bg-carrot-orange/10 border-l-2 border-carrot-orange transition-all'
                                                  : isCriticalRow
                                                  ? 'hover:bg-red-500/5 hover:border-l-2 hover:border-red-500/30 cursor-pointer transition-all'
                                                  : isGoodRow
                                                  ? 'hover:bg-emerald-500/5 hover:border-l-2 hover:border-emerald-500/30 cursor-pointer transition-all'
                                                  : 'hover:bg-white/[0.02] cursor-pointer transition-all';
                                                
                                                return (
                                                  <tr 
                                                    key={rIdx} 
                                                    className={rowClass}
                                                    onClick={() => handleRowClick(act.id, rIdx)}
                                                  >
                                                    {row.map((cell, cIdx) => (
                                                      <td key={cIdx} className="px-4 py-3 font-mono text-xs text-slate-300 whitespace-nowrap">
                                                        {renderTableCell(cell, act.technicalTable!.headers[cIdx], phase.accent)}
                                                      </td>
                                                    ))}
                                                  </tr>
                                                );
                                              })}
                                            </tbody>
                                          </table>
                                        </div>
                                        {act.technicalTable.description && (
                                          <p className="mt-3 text-xs text-slate-400 font-light leading-relaxed bg-white/[0.02] border border-white/5 p-3 rounded-lg">
                                            <span className="font-semibold text-slate-300 font-mono text-[10px] uppercase block mb-1">Análisis e Interpretación:</span>
                                            {act.technicalTable.description}
                                          </p>
                                        )}
                                        {selectedRows[act.id] !== undefined && selectedRows[act.id] !== null && getRowDetailMessage(act.id, selectedRows[act.id]!) && (
                                          <motion.div 
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-3 p-3 rounded-lg bg-carrot-orange/10 border border-carrot-orange/20 text-xs text-slate-300 leading-relaxed font-light flex gap-2.5 items-start"
                                          >
                                            <span className="mt-0.5 shrink-0 text-carrot-orange font-bold font-mono">💡</span>
                                            <div>
                                              <span className="font-semibold text-carrot-orange block mb-0.5">Recomendación / Ficha Técnica:</span>
                                              {getRowDetailMessage(act.id, selectedRows[act.id]!)}
                                            </div>
                                          </motion.div>
                                        )}
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
