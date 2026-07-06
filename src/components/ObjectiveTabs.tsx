import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, PlayCircle, HelpCircle } from 'lucide-react';
import { objectives } from '../data/projectData';
import type { ObjectiveEntry } from '../data/projectData';
import GlassCard from './GlassCard';
import Badge from './Badge';

export default function ObjectiveTabs() {
  const [activeId, setActiveId] = useState<string>(objectives[0].id);
  const activeObj = objectives.find((obj) => obj.id === activeId) || objectives[0];

  const getStatusIcon = (status: ObjectiveEntry['status']) => {
    switch (status) {
      case 'Completado':
        return <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />;
      case 'Avanzado':
        return <PlayCircle className="h-5 w-5 text-amber-400 shrink-0 animate-pulse" />;
      default:
        return <HelpCircle className="h-5 w-5 text-slate-500 shrink-0" />;
    }
  };

  const getStatusBadgeColor = (status: ObjectiveEntry['status']) => {
    switch (status) {
      case 'Completado':
        return 'green';
      case 'Avanzado':
        return 'amber';
      default:
        return 'orange';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left panel: Clickable Tab Cards */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        {objectives.map((obj) => {
          const isActive = obj.id === activeId;
          return (
            <button
              key={obj.id}
              onClick={() => setActiveId(obj.id)}
              className="text-left w-full focus:outline-none group"
            >
              <div
                className={`transition-all duration-300 rounded-2xl p-5 border ${
                  isActive
                    ? 'bg-obsidian-800/80 border-carrot-orange/40 shadow-lg shadow-carrot-orange/5 translate-x-2'
                    : 'bg-obsidian-800/40 border-white/5 hover:bg-obsidian-800/60 hover:border-white/10'
                } flex items-center justify-between gap-4`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm ${
                      isActive
                        ? 'bg-carrot-orange/10 text-carrot-orange border border-carrot-orange/20'
                        : 'bg-white/5 text-slate-400 group-hover:text-white border border-white/5'
                    }`}
                  >
                    {obj.id.split('-')[1]}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {obj.title}
                    </h4>
                    <div className="mt-1 flex items-center gap-1.5">
                      {getStatusIcon(obj.status)}
                      <span className="text-xs font-mono text-slate-500">{obj.status}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight
                  className={`h-5 w-5 transition-all ${
                    isActive ? 'text-carrot-orange translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Right panel: Animated detail panel */}
      <div className="lg:col-span-7 h-full min-h-[350px]">
        <GlassCard hoverEffect={false} className="h-full flex flex-col justify-between border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-carrot-orange tracking-widest uppercase">
                    {activeObj.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{activeObj.title}</h3>
                </div>
                <Badge text={activeObj.status} color={getStatusBadgeColor(activeObj.status)} pulsing={activeObj.status === 'Avanzado'} />
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed font-light mb-6 text-lg">
                {activeObj.description}
              </p>

              {/* Achievements Bullet List */}
              <div className="flex-grow">
                <h4 className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-4">
                  Logros Clave
                </h4>
                <ul className="flex flex-col gap-3">
                  {activeObj.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-carrot-orange mt-2.5 shrink-0" />
                      <span className="font-light">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </GlassCard>
      </div>
    </div>
  );
}
