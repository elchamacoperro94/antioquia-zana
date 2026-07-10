import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronRight, X } from 'lucide-react';
import { objectives } from '../data/projectData';
import { objectiveResults } from '../data/objectiveResults';
import type { ObjectiveChart } from '../data/objectiveResults';

const objectiveData = [
  {
    id: "OBJ-01",
    title: "Caracterización de Materias Primas",
    desc: "Evaluación integral de la composición fisicoquímica, perfiles funcionales y calibración espectral NIRS de la zanahoria regional."
  },
  {
    id: "OBJ-02",
    title: "Prototipos Alimentarios",
    desc: "Desarrollo de compotas ZanaPure, snacks deshidratados caninos ZanaPet y gomas funcionales mediante cavitación e hidrólisis."
  },
  {
    id: "OBJ-03",
    title: "Prototipos Farmacéuticos/Cosméticos",
    desc: "Ingrediente cosmético a base de apocarotenoides degradados catalíticamente y encapsulación en transportadores lipídicos NLC."
  },
  {
    id: "OBJ-04",
    title: "Oportunidades de Mercado",
    desc: "Estudio de cadena de valor de 53 actores, modelos Canvas con TIR del 42% y plan de apropiación pedagógica Carota 360°."
  }
];

const colSpanMap: Record<string, string> = {
  "OBJ-01": "lg:col-span-4 md:col-span-6",
  "OBJ-02": "lg:col-span-8 md:col-span-6",
  "OBJ-03": "lg:col-span-7 md:col-span-6",
  "OBJ-04": "lg:col-span-5 md:col-span-6",
};

export default function ObjectiveTabs() {
  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);
  
  const activeObj = objectives.find((obj) => obj.id === selectedObjectiveId);
  const activeResult = selectedObjectiveId ? objectiveResults[selectedObjectiveId] : null;

  const renderObjectiveChart = (chart: ObjectiveChart) => {
    if (chart.type === 'bar') {
      const dataPoints = chart.datasets[0].data;
      const maxVal = Math.max(...dataPoints, 1);
      
      return (
        <div className="w-full max-w-[600px] flex flex-col items-center">
          <div className="w-full flex items-end gap-6 md:gap-10 border-b border-white/20 pb-2 px-4 h-[200px]">
            {dataPoints.map((val, idx) => {
              const heightPercent = (val / maxVal) * 100;
              return (
                <div key={idx} className="flex-grow flex flex-col items-center h-full justify-end group/bar relative">
                  <div className="absolute -top-8 px-2 py-0.5 rounded bg-black border border-white/15 text-[10px] font-mono text-white opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none z-10">
                    {val} {chart.datasets[0].label.includes('%') || chart.title.includes('%') ? '%' : ''}
                  </div>
                  <div 
                    style={{ height: `${heightPercent}%` }}
                    className="w-full max-w-[40px] rounded-t bg-gradient-to-t from-carrot-orange/40 to-carrot-orange border-t border-x border-carrot-orange/60 hover:brightness-110 transition-all duration-500"
                  />
                  <span className="text-[9px] font-mono text-slate-400 mt-2 text-center truncate w-full max-w-[80px]">
                    {chart.labels[idx]}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-4 mt-3">
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-300">
              <span className="h-2 w-2 rounded-full bg-carrot-orange" />
              <span>{chart.datasets[0].label}</span>
            </div>
          </div>
        </div>
      );
    }
    
    if (chart.type === 'line') {
      const dataPoints0 = chart.datasets[0].data;
      const maxVal = Math.max(
        ...dataPoints0,
        ...(chart.datasets[1] ? chart.datasets[1].data : [])
      );
      
      return (
        <div className="w-full max-w-[600px] flex flex-col">
          <div className="w-full border-b border-white/20 pb-2 px-4 h-[200px] relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
              {chart.datasets.map((dataset, dIdx) => {
                const points = dataset.data.map((val, idx) => {
                  const x = (idx / (dataset.data.length - 1)) * 100;
                  const y = 100 - (val / maxVal) * 100;
                  return `${x},${y}`;
                }).join(" ");
                
                return (
                  <polyline
                    key={dIdx}
                    fill="none"
                    stroke={dataset.color || "#e67e22"}
                    strokeWidth="2"
                    points={points}
                  />
                );
              })}
              {chart.datasets.map((dataset, dIdx) => (
                <g key={`dots-${dIdx}`}>
                  {dataset.data.map((val, idx) => {
                    const x = (idx / (dataset.data.length - 1)) * 100;
                    const y = 100 - (val / maxVal) * 100;
                    return (
                      <circle
                        key={idx}
                        cx={x}
                        cy={y}
                        r="2.5"
                        fill={dataset.color || "#e67e22"}
                        stroke="#000"
                        strokeWidth="0.5"
                      />
                    );
                  })}
                </g>
              ))}
            </svg>
          </div>
          <div className="flex justify-between px-4 mt-2">
            {chart.labels.map((label, idx) => (
              <span key={idx} className="text-[9px] font-mono text-slate-400">
                {label}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-3">
            {chart.datasets.map((dataset, dIdx) => (
              <div key={dIdx} className="flex items-center gap-1.5 text-[9px] font-mono text-slate-300">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dataset.color }} />
                <span>{dataset.label}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (chart.type === 'donut') {
      const dataPoints = chart.datasets[0].data;
      const total = dataPoints.reduce((a, b) => a + b, 0);
      let accumulatedPercent = 0;
      const colors = ["#d35400", "#e67e22", "#f1c40f", "#34495e"];
      
      return (
        <div className="w-full max-w-[500px] flex flex-col md:flex-row items-center justify-center gap-6">
          <svg className="w-32 h-32 overflow-visible shrink-0" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#222" strokeWidth="4" />
            {dataPoints.map((val, idx) => {
              const percent = (val / total) * 100;
              const strokeDasharray = `${percent} ${100 - percent}`;
              const strokeDashoffset = 100 - accumulatedPercent + 25;
              accumulatedPercent += percent;
              const color = colors[idx] || "#7f8c8d";
              
              return (
                <circle
                  key={idx}
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke={color}
                  strokeWidth="4"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                />
              );
            })}
          </svg>
          <div className="flex flex-col gap-2">
            {chart.labels.map((label, idx) => {
              const color = colors[idx] || "#7f8c8d";
              const val = dataPoints[idx];
              return (
                <div key={idx} className="flex items-center gap-2 text-[10px] font-mono text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-sm shrink-0" style={{ backgroundColor: color }} />
                  <span className="text-slate-400">{label}:</span>
                  <span className="font-bold text-white">{val}%</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    
    return null;
  };

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
                  <span className="font-mono text-primary text-sm font-semibold tracking-wider block">{item.id}</span>
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
                
                {/* Header */}
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-primary text-sm font-semibold tracking-wider">{activeResult.id}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-white">{activeResult.title}</h2>
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

                  {/* Cifras fuerza en Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {activeResult.stats.map((stat, idx) => (
                      <div key={idx} className="glass-card p-4 rounded-xl border border-white/5 bg-obsidian-950/20 flex flex-col justify-between">
                        <h4 className="text-xl font-bold text-carrot-orange font-mono">{stat.value}</h4>
                        <span className="text-[10px] font-semibold text-slate-400 mt-1 uppercase block">{stat.label}</span>
                        {stat.detail && <span className="text-[8px] font-mono text-slate-500 mt-0.5">{stat.detail}</span>}
                      </div>
                    ))}
                  </div>

                  {/* Chart section */}
                  {activeResult.chart && (
                    <div className="pt-4 space-y-3">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                        📈 {activeResult.chart.title}
                      </span>
                      <div className="p-6 rounded-xl border border-white/10 bg-obsidian-950/40 flex flex-col items-center">
                        {renderObjectiveChart(activeResult.chart)}
                      </div>
                    </div>
                  )}

                  {/* Technical table */}
                  {activeResult.table && (
                    <div className="pt-4 space-y-3">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                        📊 {activeResult.table.title}
                      </span>
                      <div className="overflow-x-auto rounded-xl border border-white/10 bg-obsidian-950/40 custom-scrollbar">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-white/10 bg-white/[0.02]">
                              {activeResult.table.headers.map((head, idx) => (
                                <th key={idx} className="px-4 py-3 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                                  {head}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {activeResult.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="px-4 py-3 font-mono text-xs text-slate-300 whitespace-nowrap">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Photo gallery */}
                  {activeResult.photos.length > 0 && (
                    <div className="pt-4 space-y-3">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                        📸 Evidencias de Campo y Laboratorios
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {activeResult.photos.map((photo, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => setLightboxPhoto(`/photos-proyecto/${photo}`)}
                            className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-carrot-orange/40 transition-all duration-300 shadow-md"
                          >
                            <img src={`/photos-proyecto/${photo}`} alt="Evidencia objetivo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deliverables Downloads */}
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                      📁 Entregables y Soportes del Objetivo
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeObj.deliverables?.map((deliv, idx) => (
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
                              Descargar entregable
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/10"
            >
              <img src={lightboxPhoto} alt="Evidencia ampliada" className="w-full h-auto max-h-[85vh] object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
