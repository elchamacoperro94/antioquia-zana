import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, FileText, Landmark, Users, Download, ArrowRight } from 'lucide-react';
import { activities } from '../data/projectData';
import { activityReports } from '../data/activityReports'; // Importamos los reportes detallados
import type { ReportPage } from '../data/activityReports';

export default function ActivityAccordion() {
  // Estado local para la actividad seleccionada que abrirá el reporte interactivo
  const [selectedReportActivity, setSelectedReportActivity] = useState<string | null>(null);
  // Estado local para la página activa del reporte (0, 1 o 2)
  const [currentReportPage, setCurrentReportPage] = useState<number>(0);
  // Estado local para recordar qué fila de la tabla técnica está seleccionada en cada actividad
  const [selectedRows, setSelectedRows] = useState<Record<string, string | null>>({});
  // Estado local para controlar qué foto se está visualizando en pantalla completa (lightbox)
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  // Gestiona el clic en una fila de la tabla técnica para mostrar/ocultar recomendaciones
  const handleRowClick = (actId: string, rowName: string) => {
    setSelectedRows(prev => ({
      ...prev,
      [actId]: prev[actId] === rowName ? null : rowName
    }));
  };

  // Retorna recomendaciones específicas para las filas de las tablas
  const getRowDetailMessage = (actId: string, rowName: string) => {
    const nameClean = rowName.trim();
    if (actId === 'ACT-01') {
      const messages: Record<string, string> = {
        "Material 14": "Material 14: Variedad de comportamiento intermedio (72.88 g) con severidad de Alternaria media y baja propensión a rajaduras (2.81%). Recomendado para consumo fresco.",
        "Material 10": "Material 10: Variedad de óptimo peso promedio (117.14 g) con baja severidad de Alternaria y 0.00% de agrietamiento en campo. Gran potencial industrial.",
        "Material 9": "Material 9: Cultivar destacado con 0.00% de rajaduras y ausencia total de nematodos. Presenta el comportamiento fitosanitario más estable y resistente del ensayo.",
        "Material 8": "Material 8: Variedad de alto rendimiento (117.07 g) y excelente comportamiento frente a Alternaria. Recomendado para el procesamiento y deshidratado industrial.",
        "Material 1 (Control)": "Material 1 (Testigo): Alta vulnerabilidad fitosanitaria (33.33% de rajaduras, pudriciones severas y bifurcaciones por nematodos). No apto para procesamiento industrial."
      };
      return messages[nameClean] || null;
    }
    if (actId === 'ACT-02') {
      const messages: Record<string, string> = {
        "β-caroteno (Provitamina A)": "Calibración de β-caroteno: Coeficiente r² de 0.9997 con un error estándar (Sy.x) de 0.0778, validando la precisión del escaneo NIRS como método de control de calidad ultrarrápido sin reactivos.",
        "Capacidad Antioxidante (DPPH)": "Capacidad Antioxidante (DPPH): Calibración con r² de 0.9974. Permite la estimación instantánea de la retención de compuestos funcionales durante el procesamiento térmico.",
        "Sólidos Solubles (°Brix)": "Sólidos Solubles (°Brix): Modelo RandomForest con r² de 0.9850. Facilita la medición rápida del grado de madurez óptimo de la zanahoria previo al proceso de secado."
      };
      return messages[nameClean] || null;
    }
    return null;
  };

  const renderTableCell = (cell: string, header: string) => {
    const headerLower = header.toLowerCase();
    const cellLower = cell.toLowerCase();

    if (headerLower.includes('alternaria')) {
      if (cellLower.includes('muy baja')) {
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{cell}</span>;
      }
      if (cellLower.includes('baja')) {
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-green-500/10 text-green-400 border border-green-500/20">{cell}</span>;
      }
      if (cellLower.includes('media')) {
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">{cell}</span>;
      }
      if (cellLower.includes('alta')) {
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-red-500/10 text-red-400 border border-red-500/20">{cell}</span>;
      }
    }

    if (headerLower.includes('nematodos') || headerLower.includes('agallas')) {
      if (cellLower.includes('ausente') || cellLower.includes('no detectado')) {
        return <span className="text-emerald-400 font-semibold flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{cell}</span>;
      }
      if (cellLower.includes('presente')) {
        return <span className="text-red-400 font-semibold flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />{cell}</span>;
      }
    }

    return cell;
  };

  // Genera dinámicamente un reporte de 3 páginas para las actividades que no tienen uno personalizado
  const getReportForActivity = (actId: string): { id: string; responsibleEntity: string; researchTeam: string[]; pages: ReportPage[] } => {
    const act = activities.find(a => a.id === actId);
    if (!act) return { id: actId, responsibleEntity: "AGROSAVIA", researchTeam: ["Equipo Técnico"], pages: [] };

    // Si ya existe un reporte completo en la base de datos (como ACT-01), lo retornamos
    if (activityReports[actId]) {
      return activityReports[actId];
    }

    // De lo contrario, ensamblamos un reporte dinámico de 3 hojas consistente
    return {
      id: act.id,
      responsibleEntity: "AGROSAVIA",
      researchTeam: ["Juan Camilo Henao Rojas", "Jorge Eliecer Jaramillo", "Carolina Zuluaga"],
      pages: [
        {
          title: "Hoja 1: Resumen y Propósito Técnico",
          paragraphs: [
            act.description || "Descripción detallada del procedimiento en desarrollo en el Oriente Antioqueño.",
            "Esta actividad se centra en el cumplimiento de los estándares científicos del proyecto Antioquia Zana para transferir resultados al eslabón primario de productores."
          ],
          stats: [
            { label: "Estado", value: act.status },
            { label: "Fase de Proyecto", value: `Fase ${act.phase}` }
          ],
          photos: []
        },
        {
          title: "Hoja 2: Resultados y Análisis de Campo",
          paragraphs: [
            "Durante las fases de experimentación y caracterización se obtuvieron hallazgos significativos que sustentan el avance de la cadena productiva.",
            ...act.keyFindings
          ],
          stats: [],
          table: act.technicalTable ? {
            title: act.technicalTable.title,
            headers: act.technicalTable.headers,
            rows: act.technicalTable.rows,
            description: act.technicalTable.description
          } : undefined,
          photos: []
        },
        {
          title: "Hoja 3: Soportes y Documentación Oficial",
          paragraphs: [
            "Se han cargado y consolidado los informes técnicos de supervisión y manuales relacionados con esta actividad, aprobados por la supervisión de regalías SGR.",
            "Puedes acceder a las descargas directas de los documentos oficiales a continuación."
          ],
          stats: [],
          photos: []
        }
      ]
    } as any;
  };

  const phaseData = [
    {
      number: 1,
      tag: "FASE I",
      title: "Diagnóstico Técnico",
      borderClass: "border-t-2 border-carrot-orange pt-6",
      labelColor: "text-carrot-orange",
      accent: "orange",
      actIds: ["ACT-01", "ACT-02", "ACT-03", "ACT-04"]
    },
    {
      number: 2,
      tag: "FASE II",
      title: "Desarrollo Industrial",
      borderClass: "border-t-2 border-purple-400 pt-6",
      labelColor: "text-purple-400",
      accent: "purple",
      actIds: ["ACT-05", "ACT-06"]
    },
    {
      number: 3,
      tag: "FASE III",
      title: "Ingredientes Activos",
      borderClass: "border-t-2 border-blue-400 pt-6",
      labelColor: "text-blue-400",
      accent: "blue",
      actIds: ["ACT-07", "ACT-08", "ACT-09", "ACT-10"]
    },
    {
      number: 4,
      tag: "FASE IV",
      title: "Escalamiento",
      borderClass: "border-t-2 border-secondary pt-6",
      labelColor: "text-secondary",
      accent: "green",
      actIds: ["ACT-11", "ACT-12", "ACT-13", "ACT-14"]
    }
  ];

  const activeReport = selectedReportActivity ? getReportForActivity(selectedReportActivity) : null;

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1440px] mx-auto py-6">
      
      {/* 1. SECTION TITLE & BADGE */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-carrot-orange/10 border border-carrot-orange/20 text-carrot-orange text-xs font-mono w-fit">
          Cronograma y Actividades
        </div>
        <h2 className="text-3xl font-extrabold text-white">Cronograma de Ejecución Física</h2>
        <p className="text-slate-400 font-light max-w-2xl text-sm leading-relaxed">
          Haz clic en cualquier actividad para abrir su **Reporte Científico Interactivo de 3 Hojas** y consultar los datos experimentales, estadísticas y descargas oficiales.
        </p>
      </div>

      {/* 2. 4-PHASE GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {phaseData.map((phase) => {
          const phaseActivities = activities.filter((act) => phase.actIds.includes(act.id));
          return (
            <div key={phase.number} className={`space-y-4 ${phase.borderClass}`}>
              <span className={`font-label-caps text-xs tracking-wider font-semibold block ${phase.labelColor}`}>
                {phase.tag}
              </span>
              <h4 className="font-headline-md text-white text-lg font-bold leading-tight">
                {phase.title}
              </h4>
              <ul className="space-y-3">
                {phaseActivities.map((act) => {
                  const isSelected = selectedReportActivity === act.id;
                  const isCompleted = act.status === "Completado";

                  return (
                    <li 
                      key={act.id} 
                      onClick={() => {
                        setSelectedReportActivity(act.id);
                        setCurrentReportPage(0);
                      }}
                      className={`flex items-start gap-3 p-4 glass-card rounded-2xl border transition-all select-none cursor-pointer group ${
                        isSelected 
                          ? 'border-carrot-orange bg-carrot-orange/5 ring-1 ring-carrot-orange/10'
                          : 'border-white/5 hover:border-white/15 hover:bg-white/[0.02]'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="text-secondary h-4.5 w-4.5 shrink-0 mt-0.5" />
                      ) : (
                        <Calendar className="text-primary h-4.5 w-4.5 shrink-0 mt-0.5" />
                      )}
                      <div className="flex flex-col min-w-0">
                        <span className="font-mono-data text-xs text-slate-300 font-semibold block group-hover:text-primary transition-colors">
                          {act.id}
                        </span>
                        <span className="font-body-md text-xs text-slate-400 leading-normal mt-0.5">
                          {act.name}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* 3. INTERACTIVE SLIDE-OUT DRAWER FOR DETAILED REPORTS */}
      <AnimatePresence>
        {selectedReportActivity && activeReport && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReportActivity(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full md:w-[850px] lg:w-[1000px] bg-obsidian-950/95 border-l border-white/10 z-50 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              {/* LEFT DRAWER PANEL: Navigation Index & Metadata */}
              <div className="w-full md:w-64 lg:w-72 border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col justify-between shrink-0 bg-surface-container-low">
                <div className="space-y-6">
                  {/* Title and ID */}
                  <div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-carrot-orange/15 border border-carrot-orange/20 text-carrot-orange font-bold">
                      {activeReport.id}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2.5 leading-snug">
                      {activities.find(a => a.id === selectedReportActivity)?.name}
                    </h3>
                  </div>

                  {/* Responsible details */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex gap-2.5 items-start text-xs">
                      <Landmark className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-[9px] text-slate-500 uppercase block">Ejecutor Responsable</span>
                        <span className="text-slate-300 font-light">{activeReport.responsibleEntity}</span>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start text-xs">
                      <Users className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-[9px] text-slate-500 uppercase block">Equipo de Investigación</span>
                        <div className="max-h-[160px] overflow-y-auto pr-1 scrollbar-thin text-slate-400 font-light space-y-1">
                          {activeReport.researchTeam.map((member, mIdx) => (
                            <span key={mIdx} className="block text-[11px]">{member}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Hoja Index Buttons */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2 px-1">Hojas del Reporte</span>
                    <nav className="flex flex-col gap-1.5">
                      {activeReport.pages.map((page, pIdx) => {
                        const isPageActive = currentReportPage === pIdx;
                        return (
                          <button
                            key={pIdx}
                            onClick={() => setCurrentReportPage(pIdx)}
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs font-mono transition-all border ${
                              isPageActive
                                ? 'bg-primary-container/10 border-primary text-primary font-bold'
                                : 'bg-white/5 border-transparent text-slate-400 hover:border-white/10 hover:text-white'
                            }`}
                          >
                            <span className="truncate max-w-[180px]">{page.title}</span>
                            <ArrowRight className={`h-3 w-3 transition-transform ${isPageActive ? 'translate-x-0.5' : 'opacity-0'}`} />
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                </div>

                {/* Close Drawer Button */}
                <button
                  onClick={() => setSelectedReportActivity(null)}
                  className="w-full mt-6 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-xs text-slate-300 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  ✕ Cerrar Reporte
                </button>
              </div>

              {/* RIGHT DRAWER PANEL: Active Page Content View */}
              <div className="flex-grow overflow-y-auto p-6 md:p-10 relative flex flex-col justify-between">
                
                {/* Close Button Top Right */}
                <button
                  onClick={() => setSelectedReportActivity(null)}
                  className="absolute top-6 right-6 h-8 w-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center focus:outline-none transition-colors cursor-pointer"
                >
                  ✕
                </button>

                {/* Main page content scroll area */}
                <div className="space-y-8 pb-12">
                  
                  {/* Header Title of Page */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-carrot-orange uppercase block tracking-wider">
                      Reporte de Avance Científico
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      {activeReport.pages[currentReportPage]?.title}
                    </h2>
                  </div>

                  {/* Page Paragraphs (Scientific detailed texts) */}
                  <div className="space-y-4">
                    {activeReport.pages[currentReportPage]?.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-slate-300 text-sm font-light leading-relaxed text-justify">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Stats Row (Cifras Fuerza) */}
                  {activeReport.pages[currentReportPage]?.stats.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      {activeReport.pages[currentReportPage].stats.map((stat, sIdx) => (
                        <div key={sIdx} className="glass-card p-4 rounded-xl border border-white/5 bg-obsidian-950/20 flex flex-col justify-between">
                          <h4 className="text-xl font-bold text-carrot-orange font-mono">{stat.value}</h4>
                          <span className="text-[10px] font-semibold text-slate-400 mt-1 uppercase block">{stat.label}</span>
                          {stat.detail && <span className="text-[8px] font-mono text-slate-500 mt-0.5">{stat.detail}</span>}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technical Table (if available on page) */}
                  {activeReport.pages[currentReportPage]?.table && (
                    <div className="pt-4 space-y-3">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                        📊 {activeReport.pages[currentReportPage].table!.title}
                      </span>
                      <div className="overflow-x-auto rounded-xl border border-white/10 bg-obsidian-950/40 custom-scrollbar">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-white/10 bg-white/[0.02]">
                              {activeReport.pages[currentReportPage].table!.headers.map((head, hIdx) => (
                                <th key={hIdx} className="px-4 py-3 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                                  {head}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {activeReport.pages[currentReportPage].table!.rows.map((row, rIdx) => {
                              const rowName = row[0];
                              const isSelectedRow = selectedRows[selectedReportActivity] === rowName;
                              const isCriticalRow = rowName.includes('Control') || rowName.includes('Testigo') || rowName.includes('Material 1');
                              const isGoodRow = rowName.includes('Material 9') || rowName.includes('Material 10') || rowName.includes('Material 8');

                              const rowClass = isSelectedRow
                                ? 'bg-primary-container/10 border-l-2 border-primary-container cursor-pointer transition-all'
                                : isCriticalRow
                                ? 'hover:bg-red-500/5 hover:border-l-2 hover:border-red-500/30 cursor-pointer transition-all'
                                : isGoodRow
                                ? 'hover:bg-emerald-500/5 hover:border-l-2 hover:border-emerald-500/30 cursor-pointer transition-all'
                                : 'hover:bg-white/[0.02] cursor-pointer transition-all';

                              return (
                                <tr
                                  key={rIdx}
                                  className={rowClass}
                                  onClick={() => handleRowClick(selectedReportActivity, rowName)}
                                >
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="px-4 py-3 font-mono text-xs text-slate-300 whitespace-nowrap">
                                      {renderTableCell(cell, activeReport.pages[currentReportPage].table!.headers[cIdx])}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Description of table */}
                      {activeReport.pages[currentReportPage].table!.description && (
                        <p className="text-xs text-slate-400 font-light leading-relaxed bg-white/[0.01] border border-white/5 p-3 rounded-lg">
                          <span className="font-semibold text-slate-300 font-mono text-[9px] uppercase block mb-1">Análisis e Interpretación:</span>
                          {activeReport.pages[currentReportPage].table!.description}
                        </p>
                      )}

                      {/* Row Click Recommendation Details */}
                      {selectedRows[selectedReportActivity] && getRowDetailMessage(selectedReportActivity, selectedRows[selectedReportActivity]!) && (
                        <div className="p-3 rounded-lg bg-carrot-orange/10 border border-carrot-orange/20 text-xs text-slate-300 leading-relaxed font-light flex gap-2.5 items-start">
                          <span className="mt-0.5 shrink-0 text-carrot-orange font-bold font-mono">💡</span>
                          <div>
                            <span className="font-semibold text-carrot-orange block mb-0.5">Recomendación Técnica:</span>
                            {getRowDetailMessage(selectedReportActivity, selectedRows[selectedReportActivity]!)}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Image Gallery (Hoja 3 or specific page with photos) */}
                  {currentReportPage === 0 && activeReport.pages[0].photos.length > 0 && (
                    <div className="pt-4 space-y-3">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                        📸 Registro Fotográfico de Lote y Laboratorios
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        {activeReport.pages[0].photos.map((photo, pIdx) => (
                          <div 
                            key={pIdx}
                            onClick={() => setLightboxPhoto(`/photos-proyecto/${photo}`)}
                            className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-carrot-orange/40 transition-all duration-300 shadow-md"
                          >
                            <img src={`/photos-proyecto/${photo}`} alt="Foto reporte" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentReportPage === 1 && activeReport.pages[1].photos.length > 0 && (
                    <div className="pt-4 space-y-3">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                        📸 Síntomas de Patógenos Identificados
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        {activeReport.pages[1].photos.map((photo, pIdx) => (
                          <div 
                            key={pIdx}
                            onClick={() => setLightboxPhoto(`/photos-proyecto/${photo}`)}
                            className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-carrot-orange/40 transition-all duration-300 shadow-md"
                          >
                            <img src={`/photos-proyecto/${photo}`} alt="Foto patógeno" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deliverables Download Links (Show only on Hoja 3) */}
                  {currentReportPage === 2 && (
                    <div className="pt-6 border-t border-white/5 space-y-4">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                        📁 Entregables y Reportes de Avance
                      </span>
                      <div className="flex flex-col gap-2">
                        {activities.find(a => a.id === selectedReportActivity)?.deliverables.map((deliv, idx) => (
                          <a
                            key={idx}
                            href={deliv.link}
                            download
                            className="group/item flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 hover:bg-carrot-orange/10 hover:border-carrot-orange/20 hover:text-white transition-all cursor-pointer"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <FileText className="h-5 w-5 text-carrot-orange shrink-0" />
                              <span className="font-semibold truncate block">
                                {deliv.name}
                              </span>
                            </div>
                            <Download className="h-4 w-4 text-slate-400 group-hover/item:text-carrot-orange group-hover/item:translate-x-0.5 transition-all" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Navigation Buttons for pages */}
                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono">
                  <button
                    disabled={currentReportPage === 0}
                    onClick={() => setCurrentReportPage(prev => prev - 1)}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
                  >
                    ← Anterior
                  </button>
                  <span className="text-slate-500">Hoja {currentReportPage + 1} de 3</span>
                  <button
                    disabled={currentReportPage === 2}
                    onClick={() => setCurrentReportPage(prev => prev + 1)}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
                  >
                    Siguiente →
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 4. MODAL LIGHTBOX FOR IMAGES */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-obsidian-950/80 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxPhoto} 
                alt="Visualización ampliada" 
                className="w-full h-full max-h-[80vh] object-contain"
              />
              <button 
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white flex items-center justify-center text-lg focus:outline-none cursor-pointer transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
