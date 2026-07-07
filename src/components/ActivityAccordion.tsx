import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Calendar, FileText } from 'lucide-react';
import { activities } from '../data/projectData';
import { galleryPhotos } from '../data/galleryPhotos'; // Importamos la base de datos de fotos del proyecto
import GlassCard from './GlassCard';
import Badge from './Badge';

// Interface que define la configuración visual de cada una de las 4 fases del proyecto
interface PhaseConfig {
  number: number;
  title: string;
  accent: 'blue' | 'orange' | 'purple' | 'green';
  colorClass: string;
  borderClass: string;
  badgeBg: string;
  textClass: string;
}

// Configuración de estilos y acentos visuales específicos para cada fase del proyecto
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
  // Estado local para rastrear qué fase está expandida actualmente (por defecto la Fase 1)
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);
  // Estado local para saber qué actividad específica está expandida (nulo al inicio)
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);
  // Estado local para recordar qué fila de la tabla técnica está seleccionada en cada actividad (clave: actId, valor: nombre del material/fila)
  const [selectedRows, setSelectedRows] = useState<Record<string, string | null>>({});
  // Estado local para controlar qué foto se está visualizando en pantalla completa (lightbox)
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  // Alterna la expansión de una fase
  const togglePhase = (phaseNum: number) => {
    setExpandedPhase(expandedPhase === phaseNum ? null : phaseNum);
    setExpandedActivity(null); // Reseteamos la actividad expandida al cambiar de fase para evitar conflictos
  };

  // Alterna la expansión de una actividad específica (evitando propagar el clic al botón de la fase)
  const toggleActivity = (actId: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Detiene la propagación del evento hacia arriba en el DOM
    setExpandedActivity(expandedActivity === actId ? null : actId);
  };

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

  return (
    <div className="flex flex-col gap-6">
      {phases.map((phase) => {
        const isPhaseExpanded = expandedPhase === phase.number;
        // Filtramos las actividades que corresponden únicamente a la fase actual
        const phaseActivities = activities.filter((act) => act.phase === phase.number);

        return (
          <GlassCard
            key={phase.number}
            hoverEffect={false}
            className={`transition-all duration-300 ${
              isPhaseExpanded ? phase.borderClass + ' bg-obsidian-850/90 shadow-2xl' : 'border-white/5 bg-obsidian-900/20'
            }`}
          >
            {/* Cabecera de la Fase (Botón principal del acordeón) */}
            <button
              onClick={() => togglePhase(phase.number)}
              className="w-full flex items-center justify-between text-left p-6 focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg bg-gradient-to-br ${phase.colorClass} border border-white/10`}
                >
                  <span className={phase.textClass}>{phase.number}</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                    {phase.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 mt-1 block">
                    {phaseActivities.length} Actividades de Investigación
                  </span>
                </div>
              </div>
              <ChevronDown
                className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${
                  isPhaseExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Listado animado de actividades dentro de la fase */}
            <AnimatePresence initial={false}>
              {isPhaseExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden border-t border-white/5"
                >
                  <div className="p-6 flex flex-col gap-4">
                    {phaseActivities.map((act) => {
                      const isActExpanded = expandedActivity === act.id;
                      // Filtramos las fotos de galleryPhotos correspondientes a esta actividad específica
                      const actPhotos = galleryPhotos.filter((photo) => {
                        const actPart = photo.activity.split(':')[0].trim(); // ej: "ACT-01" de "ACT-01: Investigación..."
                        return actPart === act.id;
                      });

                      return (
                        <div
                          key={act.id}
                          className={`rounded-xl border transition-all duration-200 ${
                            isActExpanded
                              ? 'bg-obsidian-950/60 border-white/10 shadow-inner'
                              : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.02] hover:border-white/10'
                          }`}
                        >
                          {/* Botón de la Actividad Individual */}
                          <div
                            onClick={(e) => toggleActivity(act.id, e)}
                            className="flex items-center justify-between p-4 cursor-pointer focus:outline-none"
                          >
                            <div className="flex items-center gap-3 w-full min-w-0">
                              {/* Identificador corto de la actividad (ej. ACT-01) */}
                              <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-md shrink-0">
                                {act.id}
                              </span>
                              <div className="min-w-0">
                                <h4 className="text-sm font-semibold text-white truncate">
                                  {act.name}
                                </h4>
                                <p className="text-xs text-slate-400 mt-0.5 truncate font-light">
                                  {act.detail}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 shrink-0 ml-4">
                              {/* Insignia de estado (Completado, Avanzado, etc.) */}
                              <Badge
                                text={act.status}
                                color={act.status === 'Completado' ? 'green' : 'amber'}
                              />
                              <ChevronDown
                                className={`h-4 w-4 text-slate-500 transition-transform duration-205 ${
                                  isActExpanded ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </div>

                          {/* Detalles internos de la actividad al expandirla */}
                          <AnimatePresence initial={false}>
                            {isActExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="p-4 pt-0 border-t border-white/5 flex gap-4">
                                  {/* Línea lateral de color con el acento de la fase */}
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
                                  <div className="flex flex-col gap-2 w-full min-w-0">
                                    {/* Descripción técnica extendida */}
                                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                                      {act.description}
                                    </p>
                                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mt-2">
                                      <Calendar className="h-3.5 w-3.5" />
                                      <span>Cronograma: Trimestres 2022-2026</span>
                                    </div>

                                    {/* Listado de Hallazgos y Resultados clave */}
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

                                    {/* Sección de Documentos Entregables Oficiales vinculados */}
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
                                                <span className="font-light leading-snug truncate block pr-2">{deliv.name}</span>
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

                                    {/* Renderizado de la Tabla Técnica Interactiva si existe */}
                                    {act.technicalTable && (
                                      <div className="mt-4 pt-4 border-t border-white/5">
                                        <h5 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                                          {act.technicalTable.title}
                                        </h5>
                                        {/* Contenedor de la tabla con scroll horizontal para móviles */}
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
                                                const rowName = row[0]; // Clave única por nombre del material
                                                const isSelected = selectedRows[act.id] === rowName;
                                                const isCriticalRow = rowName.includes('Control') || rowName.includes('Material 1');
                                                const isGoodRow = rowName.includes('Material 8') || rowName.includes('Material 9') || rowName.includes('Material 10') || rowName.includes('Material 14');
                                                
                                                // Asignamos clases CSS según si la fila está seleccionada o tiene datos clave
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
                                                    onClick={() => handleRowClick(act.id, rowName)}
                                                  >
                                                    {row.map((cell, cIdx) => (
                                                      <td key={cIdx} className="px-4 py-3 font-mono text-xs text-slate-300 whitespace-nowrap">
                                                        {renderTableCell(cell, act.technicalTable!.headers[cIdx])}
                                                      </td>
                                                    ))}
                                                  </tr>
                                                );
                                              })}
                                            </tbody>
                                          </table>
                                        </div>

                                        {/* Descripción general e interpretación del análisis técnico */}
                                        {act.technicalTable.description && (
                                          <p className="mt-3 text-xs text-slate-400 font-light leading-relaxed bg-white/[0.02] border border-white/5 p-3 rounded-lg">
                                            <span className="font-semibold text-slate-300 font-mono text-[10px] uppercase block mb-1">Análisis e Interpretación:</span>
                                            {act.technicalTable.description}
                                          </p>
                                        )}

                                        {/* Caja interactiva de recomendaciones por fila específica */}
                                        {selectedRows[act.id] && getRowDetailMessage(act.id, selectedRows[act.id]!) && (
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

                                    {/* Galería Visual de Fotos Reales de la Actividad */}
                                    {actPhotos.length > 0 && (
                                      <div className="mt-6 pt-4 border-t border-white/5">
                                        <h5 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                                          Registro Visual del Proyecto
                                        </h5>
                                        {/* Carrusel de fotos miniaturas con scroll horizontal */}
                                        <div className="flex gap-4 overflow-x-auto pb-3 pr-2 scrollbar-thin">
                                          {actPhotos.map((photo, pIdx) => (
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
                                              {/* Overlay degradado con datos de la foto */}
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

      {/* Modal Lightbox para visualización de fotos en pantalla completa */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-obsidian-950/80 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic sobre la foto misma
            >
              <img 
                src={lightboxPhoto} 
                alt="Visualización ampliada" 
                className="w-full h-full max-h-[80vh] object-contain"
              />
              {/* Botón cerrar */}
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
