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

export default function ObjectiveTabs() {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  const activeObj = objectives.find((obj) => obj.id === activeId);

  return (
    <div className="flex flex-col gap-6">
      {/* 4-Column Objectives Grid (Estilo Google Stitch) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {objectiveData.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(isActive ? null : item.id)}
              className="text-left focus:outline-none w-full group"
            >
              <div 
                className={`glass-card p-8 rounded-2xl relative h-full flex flex-col justify-between transition-all duration-300 border hover:-translate-y-1 ${
                  isActive 
                    ? 'border-primary-container bg-primary-container/5 ring-1 ring-primary-container/20 shadow-md shadow-primary-container/5' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Badge top-right */}
                <div className={`absolute top-4 right-4 ${item.badgeColor} text-[10px] px-2 py-0.5 rounded font-mono`}>
                  {item.badge}
                </div>

                <div className="space-y-4">
                  <span className="font-mono text-primary text-sm font-semibold tracking-wider block">{item.id}</span>
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
                          className="group/item flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-100 text-xs text-slate-700 hover:bg-emerald-50/50 hover:border-emerald-500/30 shadow-sm hover:shadow-md transition-all cursor-pointer"
                        >
                          <FileText className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div className="flex flex-col w-full min-w-0">
                            <span className="font-semibold text-slate-800 group-hover/item:text-emerald-700 transition-colors truncate block">
                              {deliv.name}
                            </span>
                            <span className="text-[10px] text-slate-500 mt-1 block font-mono">
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
