import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, FileText } from 'lucide-react';
import { activities } from '../data/projectData';
import { galleryPhotos } from '../data/galleryPhotos'; // Importamos la base de datos de fotos del proyecto

export default function ActivityAccordion() {
  // Estado local para saber qué actividad específica está expandida (nulo al inicio)
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);
  // Estado local para recordar qué fila de la tabla técnica está seleccionada en cada actividad (clave: actId, valor: nombre del material/fila)
  const [selectedRows, setSelectedRows] = useState<Record<string, string | null>>({});
  // Estado local para controlar qué foto se está visualizando en pantalla completa (lightbox)
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  // Gestiona el clic en una fila de la tabla técnica de una actividad para mostrar/ocultar recomendaciones
  const handleRowClick = (actId: string, rowName: string) => {
    setSelectedRows(prev => ({
      ...prev,
      [actId]: prev[actId] === rowName ? null : rowName
    }));
  };

  // Retorna el mensaje explicativo e interpretación técnica al hacer clic sobre una fila específica
  const getRowDetailMessage = (actId: string, rowName: string) => {
    const nameClean = rowName.trim();

    // Recomendaciones para la Actividad 1 (Investigación Agronómica)
    if (actId === 'ACT-01') {
      const messages: Record<string, string> = {
        "Material 14": "Material 14: Variedad de comportamiento intermedio (72.88 g) con severidad media de Alternaria y baja propensión a rajaduras (2.81%). Recomendado para consumo fresco.",
        "Material 10": "Material 10: Variedad de óptimo peso promedio (117.14 g) con baja severidad de Alternaria y 0.00% de agrietamiento en campo. Gran potencial industrial.",
        "Material 9": "Material 9: Cultivar destacado con 0.00% de rajaduras y ausencia total de nematodos. Presenta el comportamiento fitosanitario más estable y resistente del ensayo.",
        "Material 8": "Material 8: Variedad de alto rendimiento (117.07 g) y excelente comportamiento frente a Alternaria. Recomendado para el procesamiento y deshidratado industrial.",
        "Material 1 (Control)": "Material 1 (Testigo): Alta vulnerabilidad fitosanitaria (33.33% de rajaduras, pudriciones severas y bifurcaciones por nematodos). No apto para procesamiento industrial."
      };
      return messages[nameClean] || null;
    }

    // Interpretación de calibraciones NIRS para la Actividad 2
    if (actId === 'ACT-02') {
      const messages: Record<string, string> = {
        "β-caroteno (Provitamina A)": "Calibración de β-caroteno: Coeficiente r² de 0.9997 con un error estándar (Sy.x) de 0.0778, validando la precisión del escaneo NIRS como método de control de calidad ultrarrápido sin reactivos.",
        "Capacidad Antioxidante (DPPH)": "Capacidad Antioxidante (DPPH): Calibración con r² de 0.9974. Permite la estimación instantánea de la retención de compuestos funcionales durante el procesamiento térmico.",
        "Sólidos Solubles (°Brix)": "Sólidos Solubles (°Brix): Modelo RandomForest con r² de 0.9850. Facilita la medición rápida del grado de madurez óptimo de la zanahoria previo al proceso de secado."
      };
      return messages[nameClean] || null;
    }

    // Rendimiento de extracción en muestras liofilizadas de la Actividad 3
    if (actId === 'ACT-03') {
      const messages: Record<string, string> = {
        "Ultrasonido Convencional": "Ultrasonido Convencional (Metanol 99%): Logra una extracción de polifenoles de 85.38 mg EAG/100g. Eficiente, pero requiere solventes orgánicos puros difíciles de escalar de forma limpia.",
        "Ultrasonido Sonotrodo": "Ultrasonido Sonotrodo (Etanol 70%): Rendimiento máximo de actividad antioxidante ORAC-L (6028.94 µmol ET/100g). Combina el uso de química verde con alta transferencia física de energía.",
        "Maceración en Baño": "Maceración en Baño (Acetona 70%): Logra 60.79 mg EAG/100g de polifenoles. Proceso clásico de menor consumo energético pero con tiempos de extracción significativamente mayores."
      };
      return messages[nameClean] || null;
    }

    // Fórmulas de prototipos para la Actividad 5
    if (actId === 'ACT-05') {
      const messages: Record<string, string> = {
        "ZanaPure": "ZanaPure: Compota infantil y para el adulto mayor con 27% de zanahoria de descarte procesada mediante cavitación (CHTD) para conservar su valor vitamínico sin agregar azúcares.",
        "ZanaPet": "ZanaPet: Suplemento húmedo para mascotas con un 60% de zanahoria deshidratada. Formulación balanceada con grasa de pollo para una óptima palatabilidad del animal.",
        "Gomas Biofuncionales": "Gomas Biofuncionales: Prototipo masticable que incorpora un 35% de concentrado funcional de zanahoria, enriquecido con Zinc y Hierro para combatir deficiencias de micronutrientes."
      };
      return messages[nameClean] || null;
    }

    // Ensayos de Vida Útil para la Actividad 6
    if (actId === 'ACT-06') {
      const messages: Record<string, string> = {
        "ZanaPure": "Estabilidad de ZanaPure: Vida útil estimada en 12 meses a temperatura ambiente. La variable crítica de control es la degradación térmica del betacaroteno por luz y oxígeno.",
        "ZanaPet": "Estabilidad de ZanaPet: Vida útil de 6 meses bajo refrigeración (4-8°C) debido a la susceptibilidad a la oxidación de grasas y lípidos (TBARS) de la grasa de pollo.",
        "Gomas Biofuncionales": "Estabilidad de Gomas: Vida útil de 18 meses a temperatura ambiente controlada gracias al uso de sorbitol como humectante de baja actividad de agua (Aw).",
        "Extracto Cosmético NLC": "Estabilidad del NLC: Estabilidad coloidal excepcional por 24 meses. La variable crítica es mantener el índice de polidispersidad (PDI) por debajo de 0.2."
      };
      return messages[nameClean] || null;
    }

    // Ruptura Fotoquímica de betacaroteno para la Actividad 7
    if (actId === 'ACT-07') {
      const messages: Record<string, string> = {
        "Dosis UV": "Dosis UV: 25 mJ/cm² representa la dosis energética óptima para maximizar la ruptura controlada de la molécula de betacaroteno sin sobre-oxidar los retinoides.",
        "Concentración H₂O₂ (Fenton)": "Reactivo Fenton: La dosificación de Fenton acelera el proceso, requiriendo 100 ppm de BHT como estabilizador antioxidante para proteger los apocarotenos resultantes.",
        "Tiempo de reacción": "Tiempo de Reacción: 30 minutos es el punto óptimo del proceso continuo; superar este límite genera la degradación de los apocarotenoides de interés.",
        "Temperatura de proceso": "Temperatura de Proceso: Controlada a 25°C para evitar la degradación térmica de los retinoides y compuestos volátiles bioactivos."
      };
      return messages[nameClean] || null;
    }

    // Parámetros analíticos HPLC para la Actividad 8
    if (actId === 'ACT-08') {
      const messages: Record<string, string> = {
        "Coeficiente de correlación (r)": "Linealidad (r = 0.9997): Supera el criterio de aceptación estándar (r ≥ 0.995), garantizando una respuesta analítica proporcional en todo el rango dinámico.",
        "Límite de detección (LOD)": "Límite de Detección (0.125 µg/mL): Extremadamente sensible, permitiendo cuantificar trazas microscópicas del ingrediente en formulaciones complejas.",
        "Volumen de inyección": "Volumen de Inyección (5 µL): Volumen optimizado para evitar la saturación de la columna analítica C18 manteniendo la simetría de picos.",
        "Tiempo de corrida": "Tiempo de corrida (30 min): Tiempo analítico estandarizado que permite separar y cuantificar con nitidez todos los retinoides y carotenoides.",
        "Tamaño de partícula NLC": "Tamaño de Partícula (< 400 nm): Dimensiones ideales para garantizar la estabilidad coloidal del ingrediente y favorecer la penetración cutánea."
      };
      return messages[nameClean] || null;
    }

    // Ensayos in-vitro OCDE para la Actividad 9
    if (actId === 'ACT-09') {
      const messages: Record<string, string> = {
        "OCDE 432": "Fototoxicidad 3T3 (OCDE 432): Demuestra un factor de fotoirritación (PIF) menor a 1, clasificando el ingrediente como NO FOTOTÓXICO bajo radiación solar.",
        "OCDE 491": "Citotoxicidad HDF (OCDE 491): Mantiene una viabilidad celular de fibroblastos superior al 70% en dosis terapéuticas, confirmando su seguridad ocular y dérmica.",
        "OCDE 431": "Corrosión (OCDE 431): El tejido equivalente de epidermis humana reconstituida (RhE) mantuvo el 100% de viabilidad, confirmando que NO ES CORROSIVO.",
        "OCDE 439": "Irritación (OCDE 439): El ensayo RhE arrojó un score de irritación por debajo del límite de peligro, clasificando el ingrediente como NO IRRITANTE."
      };
      return messages[nameClean] || null;
    }

    // Mapeo de actores para la Actividad 11
    if (actId === 'ACT-11') {
      const messages: Record<string, string> = {
        "Productores primarios": "Productores Primarios: Representan la base de la cadena (53 tipologías mapeadas). Su principal reto logístico es el aprovechamiento de excedentes en origen.",
        "Empresas transformadoras": "Empresas Transformadoras: 12 unidades identificadas en el Oriente. Poseen la capacidad técnica básica para la industrialización de polvos y extractos.",
        "Distribuidores y comercializadores": "Distribuidores: 18 actores mapeados. Claves para conectar la producción rural del Oriente con las centrales de abastos y retail de Medellín.",
        "Aliados institucionales y académicos": "Aliados Institucionales: 6 entidades que articulan la I+D (AGROSAVIA, UdeA, UCO, UNal). Coordinan la gobernanza del modelo bioeconómico."
      };
      return messages[nameClean] || null;
    }

    // Viabilidad económica para la Actividad 12
    if (actId === 'ACT-12') {
      const messages: Record<string, string> = {
        "ZanaPure (100g)": "ZanaPure: Precio objetivo de $8.500 COP enfocado a alimentación infantil premium. Requiere un punto de equilibrio de 2.400 unidades mensuales.",
        "ZanaPet (250g)": "ZanaPet: Suplemento veterinario con un precio sugerido de $12.000 COP. Punto de equilibrio estimado en 1.800 unidades al mes.",
        "Gomas (30 ud)": "Gomas Funcionales: Precio de $6.500 COP. Tiene el menor costo unitario pero requiere un alto volumen de ventas (5.000 unidades/mes) para alcanzar el punto de equilibrio.",
        "Aurum Carota (30ml)": "Crema Aurum Carota: Producto de alta gama con precio estimado de $85.000 COP. Logra una TIR proyectada del 42% por su alto valor agregado."
      };
      return messages[nameClean] || null;
    }

    // Eventos y socializaciones para la Actividad 13
    if (actId === 'ACT-13') {
      const messages: Record<string, string> = {
        "Día de Campo 1": "Día de Campo 1: 87 participantes en El Santuario. Registró un 92% de aceptación del modelo de transferencia tecnológica de cultivares.",
        "Día de Campo 2 y 3": "Día de Campo 2 y 3: 103 productores capacitados en Marinilla con un 88% de intención de adopción de prácticas de upcycling.",
        "Curso Carota 360°": "Curso Carota 360°: Formación especializada para 42 técnicos locales con un índice de aprobación y satisfacción académica del 95%.",
        "Talleres regionales": "Talleres regionales: 59 personas de grupos focales y actores de la cadena. Se transcribieron 70 entrevistas cualitativas detalladas."
      };
      return messages[nameClean] || null;
    }

    return null;
  };

  // Renderiza celdas especiales con insignias de color (badges) según el contenido técnico de la tabla
  const renderTableCell = (cell: string, header: string) => {
    const headerLower = header.toLowerCase();
    const cellLower = cell.toLowerCase();

    // 1. Columna de severidad de Alternaria (Enfermedad foliar)
    if (headerLower.includes('alternaria')) {
      if (cellLower.includes('muy baja')) {
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {cell}
          </span>
        );
      }
      if (cellLower.includes('baja')) {
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
            {cell}
          </span>
        );
      }
      if (cellLower.includes('media')) {
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            {cell}
          </span>
        );
      }
      if (cellLower.includes('alta')) {
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
            {cell}
          </span>
        );
      }
    }

    // 2. Columna de Nematodos (Plaga del suelo)
    if (headerLower.includes('nematodos') || headerLower.includes('agallas')) {
      if (cellLower.includes('ausente') || cellLower.includes('no detectado')) {
        return (
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {cell}
          </span>
        );
      }
      if (cellLower.includes('presente')) {
        return (
          <span className="text-red-400 font-semibold flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
            {cell}
          </span>
        );
      }
    }

    // 3. Columna de Estado cromatográfico o validación analítica
    if (headerLower.includes('estado') || headerLower.includes('calificación')) {
      if (cellLower.includes('aprobado') || cellLower.includes('seguro') || cellLower.includes('no corrosivo') || cellLower.includes('no irritante')) {
        return (
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            {cell}
          </span>
        );
      }
    }

    // 4. Valores de correlación lineal r² (cercanos a 1 son excelentes)
    if (headerLower.includes('coeficiente') || headerLower.includes('r²') || headerLower.includes('correlación')) {
      if (parseFloat(cell) >= 0.99) {
        return (
          <span className="text-emerald-400 font-mono font-bold">
            {cell}
          </span>
        );
      }
      if (parseFloat(cell) >= 0.95) {
        return (
          <span className="text-amber-400 font-mono font-bold">
            {cell}
          </span>
        );
      }
    }

    // 5. Celdas de Testigo / Control (punto de comparación experimental)
    if (cellLower.includes('control') || cellLower.includes('testigo') || cellLower.includes('no apto')) {
      return (
        <span className="text-red-400/90 font-semibold">
          {cell}
        </span>
      );
    }

    // 6. Celdas de materiales sobresalientes
    if (cellLower.includes('material 8') || cellLower.includes('material 9') || cellLower.includes('material 10') || cellLower.includes('material 14')) {
      return (
        <span className="text-emerald-400 font-semibold">
          {cell}
        </span>
      );
    }

    // Por defecto, renderiza el texto plano normal
    return cell;
  };

  const phaseData = [
    {
      number: 1,
      tag: "FASE I",
      title: "Diagnóstico Técnico",
      borderClass: "border-t-2 border-blue-500 pt-6",
      labelColor: "text-blue-400",
      accent: "blue",
      actIds: ["ACT-01", "ACT-02", "ACT-03", "ACT-04"]
    },
    {
      number: 2,
      tag: "FASE II",
      title: "I+D Lab",
      borderClass: "border-t-2 border-primary-container pt-6",
      labelColor: "text-primary",
      accent: "orange",
      actIds: ["ACT-05", "ACT-06", "ACT-07", "ACT-08"]
    },
    {
      number: 3,
      tag: "FASE III",
      title: "Escalamiento",
      borderClass: "border-t-2 border-purple-500 pt-6",
      labelColor: "text-purple-400",
      accent: "purple",
      actIds: ["ACT-09", "ACT-10"]
    },
    {
      number: 4,
      tag: "FASE IV",
      title: "Apropiación Social",
      borderClass: "border-t-2 border-secondary pt-6",
      labelColor: "text-secondary",
      accent: "green",
      actIds: ["ACT-11", "ACT-12", "ACT-13", "ACT-14"]
    }
  ];

  const activeAct = activities.find(a => a.id === expandedActivity);
  const activePhase = activeAct ? phaseData.find(p => p.number === activeAct.phase) : null;
  const activePhotos = activeAct ? galleryPhotos.filter(photo => photo.activity.split(':')[0].trim() === activeAct.id) : [];

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1440px] mx-auto">
      {/* 4-Phase Grid Layout (Google Stitch style) */}
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
                  const isSelected = expandedActivity === act.id;
                  const isCompleted = act.status === "Completado";

                  return (
                    <li 
                      key={act.id} 
                      onClick={() => setExpandedActivity(isSelected ? null : act.id)}
                      className={`flex items-start gap-3 p-3 glass-card rounded-lg border transition-all select-none cursor-pointer group ${
                        isSelected 
                          ? 'border-primary-container bg-primary-container/5 ring-1 ring-primary-container/10'
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

      {/* Expanding Detail Panel below the grid (Preserves description, key findings, deliverables and tables) */}
      <AnimatePresence>
        {expandedActivity && activeAct && activePhase && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden w-full mt-4"
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-primary-container/20 bg-obsidian-900/40 space-y-6 relative">
              <div className="absolute inset-0 technical-grid opacity-[0.02] pointer-events-none" />
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400`}>
                    {activeAct.id}
                  </span>
                  <div>
                    <h3 className="font-headline-lg text-white text-xl md:text-2xl font-bold">
                      {activeAct.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-light mt-0.5">{activeAct.detail}</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded bg-primary-container/10 border border-primary-container/20 text-primary-container font-mono text-xs">
                  {activeAct.status}
                </div>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Description & Key Findings */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-3">
                    <h5 className="font-label-caps text-xs text-slate-400 opacity-60">Descripción de Actividad</h5>
                    <p className="font-body-md text-sm text-slate-300 leading-relaxed font-light">
                      {activeAct.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-label-caps text-xs text-slate-400 opacity-60">Resultados y Hallazgos</h5>
                    <ul className="flex flex-col gap-2.5">
                      {activeAct.keyFindings.map((finding, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 font-light leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Deliverables downloads */}
                <div className="lg:col-span-5 space-y-4">
                  <h5 className="font-label-caps text-xs text-slate-400 opacity-60">Entregables y Reportes</h5>
                  {activeAct.deliverables && activeAct.deliverables.length > 0 ? (
                    <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
                      {activeAct.deliverables.map((deliv, idx) => (
                        <a 
                          key={idx}
                          href={deliv.link}
                          download
                          className="group/item flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 text-xs text-slate-700 hover:bg-emerald-50/50 hover:border-emerald-500/30 shadow-sm hover:shadow-md transition-all cursor-pointer"
                        >
                          <FileText className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                          <div className="flex flex-col w-full min-w-0">
                            <span className="font-semibold text-slate-800 group-hover/item:text-emerald-700 transition-colors truncate block">
                              {deliv.name}
                            </span>
                            <span className="text-[10px] text-slate-400 mt-1 block font-mono">
                              Haga clic para descargar
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 italic">No hay archivos descargables adjuntos.</p>
                  )}
                </div>
              </div>

              {/* Technical Table (if present) */}
              {activeAct.technicalTable && (
                <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                  <h5 className="font-label-caps text-xs text-slate-400 opacity-60">
                    {activeAct.technicalTable.title}
                  </h5>
                  <div className="overflow-x-auto rounded-xl border border-white/10 bg-obsidian-950/40 custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.02]">
                          {activeAct.technicalTable.headers.map((head, hIdx) => (
                            <th key={hIdx} className="px-4 py-3 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                              {head}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {activeAct.technicalTable.rows.map((row, rIdx) => {
                          const rowName = row[0];
                          const isSelectedRow = selectedRows[activeAct.id] === rowName;
                          
                          // Evaluamos el color de alerta o éxito para la fila
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
                              onClick={() => handleRowClick(activeAct.id, rowName)}
                            >
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-3 font-mono text-xs text-slate-300 whitespace-nowrap">
                                  {renderTableCell(cell, activeAct.technicalTable!.headers[cIdx])}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {activeAct.technicalTable.description && (
                    <p className="text-xs text-slate-400 font-light leading-relaxed bg-white/[0.01] border border-white/5 p-3 rounded-lg">
                      <span className="font-semibold text-slate-300 font-mono text-[10px] uppercase block mb-1">Análisis e Interpretación:</span>
                      {activeAct.technicalTable.description}
                    </p>
                  )}

                  {selectedRows[activeAct.id] && getRowDetailMessage(activeAct.id, selectedRows[activeAct.id]!) && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-lg bg-carrot-orange/10 border border-carrot-orange/20 text-xs text-slate-300 leading-relaxed font-light flex gap-2.5 items-start"
                    >
                      <span className="mt-0.5 shrink-0 text-carrot-orange font-bold font-mono">💡</span>
                      <div>
                        <span className="font-semibold text-carrot-orange block mb-0.5">Recomendación / Ficha Técnica:</span>
                        {getRowDetailMessage(activeAct.id, selectedRows[activeAct.id]!)}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Photo Gallery (if present) */}
              {activePhotos.length > 0 && (
                <div className="mt-6 pt-4 border-t border-white/5">
                  <h5 className="font-label-caps text-xs text-slate-400 opacity-60 mb-3">
                    Registro Visual del Proyecto
                  </h5>
                  <div className="flex gap-4 overflow-x-auto pb-3 pr-2 scrollbar-thin">
                    {activePhotos.map((photo, pIdx) => (
                      <div 
                        key={pIdx} 
                        onClick={() => setLightboxPhoto(`/photos-proyecto/${photo.filename}`)}
                        className="relative min-w-[180px] w-[180px] h-[135px] rounded-xl overflow-hidden border border-white/10 group cursor-pointer shrink-0 shadow-lg shadow-black/40 hover:border-carrot-orange/40 transition-all duration-300"
                      >
                        <img 
                          src={`/photos-proyecto/${photo.filename}`} 
                          alt={photo.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-2">
                          <span className="text-[9px] font-semibold text-white leading-tight truncate">
                            {photo.title}
                          </span>
                          <span className="text-[8px] font-mono text-slate-400 mt-0.5">
                            📍 {photo.location}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Lightbox for images */}
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
