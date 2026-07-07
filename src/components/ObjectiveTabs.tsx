import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, FileText } from 'lucide-react';
import { objectives } from '../data/projectData';
import GlassCard from './GlassCard';
import Badge from './Badge';

// Componente interactivo para mostrar los Objetivos de Investigación con sus respectivos entregables oficiales
export default function ObjectiveTabs() {
  // Estado local para rastrear qué Objetivo está seleccionado actualmente (por defecto el primero)
  const [activeId, setActiveId] = useState<string>(objectives[0].id);
  
  // Buscamos los datos completos del objetivo seleccionado activo
  const activeObj = objectives.find((obj) => obj.id === activeId) || objectives[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Panel Izquierdo: Botones de Pestaña para cada Objetivo */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        {objectives.map((obj) => {
          const isActive = obj.id === activeId;
          return (
            <button
              key={obj.id}
              onClick={() => setActiveId(obj.id)} // Al hacer clic actualiza el objetivo activo
              className="text-left w-full focus:outline-none group"
            >
              {/* Tarjeta de la pestaña, cambia de borde y fondo si está activa */}
              <div
                className={`transition-all duration-300 rounded-2xl p-5 border ${
                  isActive
                    ? 'bg-obsidian-800/80 border-carrot-orange/40 shadow-lg shadow-carrot-orange/5 translate-x-2'
                    : 'bg-obsidian-800/40 border-white/5 hover:bg-obsidian-800/60 hover:border-white/10'
                } flex items-center justify-between gap-4`}
              >
                <div className="flex items-center gap-4">
                  {/* Número del objetivo (ej. 1, 2, 3, 4) */}
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
                    {/* Título de la Pestaña */}
                    <h4
                      className={`font-semibold transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {obj.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 mt-1 block">Hito de Investigación</span>
                  </div>
                </div>
                {/* Flecha indicadora de navegación */}
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

      {/* Panel Derecho: Contenedor con detalles animados del Objetivo Activo */}
      <div className="lg:col-span-7 h-full min-h-[350px]">
        <GlassCard hoverEffect={false} className="h-full flex flex-col justify-between border-white/10">
          {/* AnimatePresence gestiona la animación de salida cuando el objetivo activo cambia */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 15 }} // Estado inicial de animación
              animate={{ opacity: 1, y: 0 }}   // Animación al entrar
              exit={{ opacity: 0, y: -15 }}   // Animación al salir
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex flex-col h-full"
            >
              {/* Cabecera del Detalle del Objetivo */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-carrot-orange tracking-widest uppercase">
                    {activeObj.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{activeObj.title}</h3>
                </div>
                <Badge text="Objetivo Consolidado" color="green" />
              </div>

              {/* Descripción Textual */}
              <p className="text-slate-300 leading-relaxed font-light mb-6 text-lg">
                {activeObj.description}
              </p>

              {/* Listado de Logros Clave alcanzados */}
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

              {/* Sección de Entregables Oficiales Descargables */}
              {activeObj.deliverables && activeObj.deliverables.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-4">
                    Entregables Oficiales del Objetivo
                  </h4>
                  {/* Cuadrícula con scroll interno para acomodar los archivos del objetivo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
                    {activeObj.deliverables.map((deliv, idx) => (
                      <a 
                        key={idx}
                        href={deliv.link} // Enlace directo que sirve el archivo
                        download           // Fuerza la descarga del documento
                        className="group/item flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all cursor-pointer"
                      >
                        {/* Icono de Archivo de Lucide */}
                        <FileText className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="flex flex-col w-full min-w-0">
                          {/* Nombre del archivo */}
                          <span className="font-medium text-white group-hover/item:text-emerald-300 transition-colors truncate block">
                            {deliv.name}
                          </span>
                          <span className="text-[10px] text-slate-500 mt-1 block font-mono">
                            Haga clic para descargar
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </GlassCard>
      </div>
    </div>
  );
}
