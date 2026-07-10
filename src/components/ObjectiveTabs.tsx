import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { objectives } from '../data/projectData';

const objectiveData = [
  {
    id: "OBJ-01",
    badge: "AVANZADO",
    badgeColor: "bg-secondary/20 text-secondary",
    title: "Determinación Nutricional",
    desc: "Evaluación integral de la composición fisicoquímica y perfiles nutricionales de la zanahoria regional."
  },
  {
    id: "OBJ-02",
    badge: "COMPLETADO",
    badgeColor: "bg-secondary-container/50 text-secondary-fixed text-green-400",
    title: "Eficiencia Productiva",
    desc: "Implementación de modelos de manejo agronómico para optimizar el rendimiento por hectárea."
  },
  {
    id: "OBJ-03",
    badge: "EN CURSO",
    badgeColor: "bg-primary/20 text-primary",
    title: "Desarrollo Agroindustrial",
    desc: "Creación de prototipos funcionales a partir de excedentes de cosecha (descartes)."
  },
  {
    id: "OBJ-04",
    badge: "EN CURSO",
    badgeColor: "bg-primary/20 text-primary",
    title: "Transferencia de Conocimiento",
    desc: "Fortalecimiento de las capacidades técnicas de los productores del Oriente Antioqueño."
  }
];

const colSpanMap: Record<string, string> = {
  "OBJ-01": "lg:col-span-4 md:col-span-6",
  "OBJ-02": "lg:col-span-8 md:col-span-6",
  "OBJ-03": "lg:col-span-7 md:col-span-6",
  "OBJ-04": "lg:col-span-5 md:col-span-6",
};

const progressData: Record<string, { percent: number; color: string; trackColor: string }> = {
  "OBJ-01": { percent: 100, color: "#10b981", trackColor: "rgba(16,185,129,0.1)" }, // Green
  "OBJ-02": { percent: 95, color: "#e67e22", trackColor: "rgba(230,126,34,0.1)" }, // Orange
  "OBJ-03": { percent: 55, color: "#f59e0b", trackColor: "rgba(245,158,11,0.1)" }, // Amber
  "OBJ-04": { percent: 40, color: "#3b82f6", trackColor: "rgba(59,130,246,0.1)" }, // Blue
};

export default function ObjectiveTabs() {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  const activeObj = objectives.find((obj) => obj.id === activeId);

  return (
    <div className="flex flex-col gap-6">
      {/* Asymmetric Bento Grid (12-Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {objectiveData.map((item) => {
          const isActive = activeId === item.id;
          const spanClass = colSpanMap[item.id] || "lg:col-span-3";
          const itemProgress = progressData[item.id] || { percent: 0, color: "#e67e22", trackColor: "rgba(230,126,34,0.1)" };
          
          const radius = 18;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (itemProgress.percent / 100) * circumference;

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(isActive ? null : item.id)}
              className={`text-left focus:outline-none w-full group transition-all duration-350 ${spanClass}`}
            >
              <div 
                className={`glass-card p-8 rounded-2xl relative h-full flex flex-col justify-between transition-all duration-350 border hover:-translate-y-1 ${
                  isActive 
                    ? 'border-carrot-orange bg-carrot-orange/5 ring-1 ring-carrot-orange/20 shadow-md shadow-carrot-orange/5' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Section with ID, Radial Progress and Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {/* Animated Radial SVG Progress Ring */}
                    <svg className="w-10 h-10 transform -rotate-90 shrink-0" viewBox="0 0 40 40">
                      <circle
                        cx="20"
                        cy="20"
                        r={radius}
                        fill="none"
                        stroke={itemProgress.trackColor}
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="20"
                        cy="20"
                        r={radius}
                        fill="none"
                        stroke={itemProgress.color}
                        strokeWidth="3"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                      <text
                        x="20"
                        y="23"
                        className="font-mono text-[8px] font-bold fill-white"
                        textAnchor="middle"
                        transform="rotate(90 20 20)"
                      >
                        {itemProgress.percent}%
                      </text>
                    </svg>
                    <span className="font-mono text-primary text-sm font-semibold tracking-wider block">{item.id}</span>
                  </div>
                  
                  <div className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider ${item.badgeColor}`}>
                    {item.badge}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-headline-md text-white text-xl font-bold leading-snug">{item.title}</h3>
                  <p className="font-body-md text-slate-400 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Interactive Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{isActive ? 'Ocultar detalles' : 'Ver entregables'}</span>
                  {isActive ? <ChevronUp className="h-4 w-4 text-primary" /> : <ChevronDown className="h-4 w-4 text-slate-600 group-hover:text-slate-400" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanding Detail Panel (Preservación de Hitos y Descargas) */}
      <AnimatePresence>
        {activeId && activeObj && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="glass-card p-8 rounded-2xl border border-primary-container/20 bg-obsidian-900/40 space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-primary text-xs uppercase tracking-widest font-bold">
                    Resultados Detallados — {activeObj.id}
                  </span>
                  <h3 className="font-headline-lg text-white text-2xl font-bold mt-1">
                    {activeObj.title}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded bg-secondary/10 border border-secondary/20 text-secondary font-mono text-xs">
                  Entregable Oficial
                </div>
              </div>

              {/* Achievements & Downloads Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Achievements List */}
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="font-label-caps text-xs text-slate-400 opacity-60">
                    Logros y Metodología Clave
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {activeObj.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="font-body-md text-sm text-slate-300 leading-relaxed font-light">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Downloads */}
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="font-label-caps text-xs text-slate-400 opacity-60">
                    Documentos y Entregables en PDF
                  </h4>
                  {activeObj.deliverables && activeObj.deliverables.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
                      {activeObj.deliverables.map((deliv, idx) => (
                        <a 
                          key={idx}
                          href={deliv.link}
                          download
                          className="group/item flex items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all cursor-pointer"
                        >
                          <FileText className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform" />
                          <div className="flex flex-col w-full min-w-0">
                            <span className="font-semibold text-slate-200 group-hover/item:text-emerald-400 transition-colors truncate block">
                              {deliv.name}
                            </span>
                            <span className="text-[10px] text-slate-400 mt-1 block font-mono">
                              Descargar archivo
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500 italic">No hay archivos adjuntos en este objetivo.</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
