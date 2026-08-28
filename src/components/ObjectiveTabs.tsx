import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { objectives } from '../data/projectData';
import { objectiveResults } from '../data/objectiveResults';
import { useLanguage } from '../context/LanguageContext';

const objectiveDataMap: Record<'es' | 'en', Array<{ id: string; title: string; desc: string }>> = {
  es: [
    {
      id: "OBJ-01",
      title: "Objetivo Específico 1",
      desc: "Caracterizar el potencial de los excedentes agronómicos y nuevos cultivares de zanahoria como materia prima para la generación de productos con valor agregado en el Oriente Antioqueño."
    },
    {
      id: "OBJ-02",
      title: "Objetivo Específico 2",
      desc: "Generar prototipos de productos funcionales para la industria alimentaria a partir de los excedentes o nuevos cultivares del sistema productivo de zanahoria para el Oriente Antioqueño."
    },
    {
      id: "OBJ-03",
      title: "Objetivo Específico 3",
      desc: "Generar prototipos de productos funcionales para la industria farmacéutica/cosmética a partir de los excedentes o nuevos cultivares en el sistema productivo de zanahoria del Oriente Antioqueño."
    },
    {
      id: "OBJ-04",
      title: "Objetivo Específico 4",
      desc: "Evaluar las oportunidades de mercado y comercialización de nuevos productos a partir de la zanahoria para el Oriente antioqueño mediante un modelo de negocios para productos prototipados."
    }
  ],
  en: [
    {
      id: "OBJ-01",
      title: "Specific Objective 1",
      desc: "Characterize the potential of agronomic surpluses and new carrot cultivars as raw material for value-added product generation in Eastern Antioquia."
    },
    {
      id: "OBJ-02",
      title: "Specific Objective 2",
      desc: "Generate functional product prototypes for the food industry from surpluses or new cultivars in the carrot production system of Eastern Antioquia."
    },
    {
      id: "OBJ-03",
      title: "Specific Objective 3",
      desc: "Generate functional product prototypes for the pharmaceutical/cosmetics industry from surpluses or new cultivars in the carrot production system of Eastern Antioquia."
    },
    {
      id: "OBJ-04",
      title: "Specific Objective 4",
      desc: "Evaluate market opportunities and commercialization of new carrot products for Eastern Antioquia through tailored business models for prototyped products."
    }
  ]
};

const colSpanMap: Record<string, string> = {
  "OBJ-01": "lg:col-span-4 md:col-span-6",
  "OBJ-02": "lg:col-span-8 md:col-span-6",
  "OBJ-03": "lg:col-span-7 md:col-span-6",
  "OBJ-04": "lg:col-span-5 md:col-span-6",
};

export default function ObjectiveTabs() {
  const { language } = useLanguage();
  const objectiveData = objectiveDataMap[language];
  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string | null>(null);
  
  const activeObj = objectives.find((obj) => obj.id === selectedObjectiveId);
  const activeItem = objectiveData.find((o) => o.id === selectedObjectiveId);
  const activeResult = selectedObjectiveId ? objectiveResults[selectedObjectiveId] : null;

  return (
    <div className="flex flex-col gap-6">
      {/* Asymmetric Bento Grid (12-Columns, clean layout without circles or statuses) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {objectiveData.map((item) => {
          const spanClass = colSpanMap[item.id] || "lg:col-span-3";

          return (
            <button
              key={item.id}
              onClick={() => setSelectedObjectiveId(item.id)}
              className={`text-left focus:outline-none w-full group transition-all duration-350 ${spanClass}`}
            >
              <div 
                className="glass-card p-8 rounded-2xl relative h-full flex flex-col justify-between transition-all duration-350 border border-white/10 hover:border-white/20 hover:-translate-y-1 hover:bg-white/[0.02]"
              >
                <div className="space-y-3">
                  <h3 className="font-headline-md text-white text-xl font-bold leading-snug">{item.title}</h3>
                  <p className="font-body-md text-slate-400 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Interactive Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Ver resultados consolidados</span>
                  <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Full-Screen Drawer / Slide-in Panel for Results (otra pantalla) */}
      <AnimatePresence>
        {selectedObjectiveId && activeObj && activeResult && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedObjectiveId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
            />
            
            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-4xl bg-obsidian-950/98 border-l border-white/10 z-50 shadow-2xl p-8 overflow-y-auto flex flex-col justify-between"
            >
              <div className="flex flex-col gap-6 h-full justify-between">
                
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0 pr-4">
                    <h2 className="text-base md:text-lg font-bold text-white leading-snug">{activeItem?.desc}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedObjectiveId(null)}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Scrollable Body */}
                <div className="flex-grow overflow-y-auto py-4 space-y-6 pr-2 custom-scrollbar">
                  
                  {/* Global impact banner */}
                  <div className="p-5 rounded-2xl border border-carrot-orange/30 bg-carrot-orange/5 text-xs text-slate-300 leading-relaxed font-light flex gap-3 items-start">
                    <span className="text-lg">💡</span>
                    <div>
                      <span className="font-semibold text-carrot-orange block mb-1">Impacto Global de Resultados:</span>
                      {activeResult.globalImpact}
                    </div>
                  </div>

                  {/* Detailed paragraphs */}
                  <div className="space-y-4">
                    {activeResult.paragraphs.map((para, idx) => (
                      <p key={idx} className="text-slate-300 text-sm font-light leading-relaxed text-justify">
                        {para}
                      </p>
                    ))}
                  </div>



                </div>

                {/* Footer Controls */}
                <div className="pt-4 border-t border-white/5 flex justify-end">
                  <button
                    onClick={() => setSelectedObjectiveId(null)}
                    className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  >
                    Volver a Objetivos
                  </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
