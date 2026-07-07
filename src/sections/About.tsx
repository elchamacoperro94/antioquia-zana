import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, MapPin, CalendarRange, Landmark, X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { regionStats } from '../data/projectData';

const researchTeam = [
  { name: "Juan Camilo Henao Rojas", role: "Investigador Principal (Líder)", entity: "AGROSAVIA" },
  { name: "Jorge Eliecer Jaramillo", role: "Investigador Co-principal", entity: "AGROSAVIA" },
  { name: "Carolina Zuluaga", role: "Investigadora", entity: "AGROSAVIA" },
  { name: "Cristian Domínguez", role: "Investigador", entity: "AGROSAVIA" },
  { name: "Rocío Alexandra Ortíz-Paz", role: "Investigadora Fitosanitaria", entity: "AGROSAVIA" },
  { name: "Albeiro de Jesús Macías", role: "Investigador", entity: "AGROSAVIA" },
  { name: "Mario Alonso Mesa", role: "Investigador Colaborador", entity: "UdeA" },
  { name: "Rosa Helen Mira Herrera", role: "Investigadora", entity: "AGROSAVIA" },
  { name: "Karen Ballestas Álvarez", role: "Investigadora", entity: "AGROSAVIA" },
  { name: "Luz Mary Quintero", role: "Apoyo Técnico", entity: "AGROSAVIA" },
  { name: "German Franco", role: "Investigador Colaborador", entity: "UNal" },
  { name: "Jose Antonio Rubiano", role: "Investigador", entity: "AGROSAVIA" },
  { name: "Carolina Ortiz", role: "Investigadora Colaboradora", entity: "UdeA" },
  { name: "Jaison Martínez", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Yeraldine Bedoya", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Mateo Londoño", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Luis Salazar", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Edison Osorio", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Catalina Agudelo", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Karent Bravo", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Daniel Carvajal", role: "Investigador Colaborador", entity: "UCO" },
  { name: "Liliana Ceballos", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Claudia Lukau", role: "Investigadora Colaboradora", entity: "UCO" },
  { name: "Jenny Milena Moreno", role: "Investigadora Colaboradora", entity: "UCO" }
];

export default function About() {
  const [showTeamModal, setShowTeamModal] = useState(false);

  const infoCards = [
    { id: 'entidad', label: 'Entidad Ejecutora', value: 'AGROSAVIA — C.I. La Selva', icon: <Building2 className="h-5 w-5 text-carrot-orange" /> },
    { id: 'equipo', label: 'Equipo de Investigación', value: '24 Investigadores', icon: <Users className="h-5 w-5 text-emerald-400" />, clickable: true, subValue: 'Ver lista completa' },
    { id: 'zona', label: 'Zona de Impacto', value: 'Oriente Antioqueño', icon: <MapPin className="h-5 w-5 text-blue-400" /> },
    { id: 'periodo', label: 'Periodo de Ejecución', value: '2022 — 2026', icon: <CalendarRange className="h-5 w-5 text-amber-400" /> },
    { id: 'fondo', label: 'Fondo Financiador', value: 'SGR — Regalías CTI', icon: <Landmark className="h-5 w-5 text-purple-400" /> }
  ];

  return (
    <section id="sobre-el-proyecto" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12">
      {/* Section Header */}
      <SectionHeader
        badgeText="Sobre el Proyecto"
        title="Ciencia para transformar la cadena productiva"
        subtitle="Un esfuerzo articulado de investigación, desarrollo y transferencia tecnológica para valorizar la producción hortícola."
      />

      {/* Row of 5 Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoCards.map((card, i) => {
          if (card.clickable) {
            return (
              <div 
                key={i}
                onClick={() => setShowTeamModal(true)}
                className="cursor-pointer group flex flex-col justify-between"
              >
                <GlassCard className="h-full flex flex-col gap-3 p-5 border-emerald-500/10 bg-obsidian-900/50 hover:border-emerald-500/30 hover:bg-emerald-950/10 transition-all duration-300" hoverEffect={true}>
                  <div className="p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 w-fit group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">
                      {card.label}
                    </span>
                    <span className="text-sm font-semibold text-white mt-1 block leading-snug">
                      {card.value}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 mt-2 block underline group-hover:text-emerald-300 transition-colors">
                      {card.subValue}
                    </span>
                  </div>
                </GlassCard>
              </div>
            );
          }

          return (
            <GlassCard key={i} className="flex flex-col gap-3 p-5 border-white/5 bg-obsidian-900/50" hoverEffect={true}>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 w-fit">
                {card.icon}
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">
                  {card.label}
                </span>
                <span className="text-sm font-semibold text-white mt-1 block leading-snug">
                  {card.value}
                </span>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* BPIN Highlight & Context Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-4">
        {/* Left: Book Cover Image & BPIN Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <GlassCard
            hoverEffect={true}
            className="flex-grow p-6 border-white/10 bg-obsidian-900/40 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Book Cover Image Container */}
            <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-72 lg:h-80 rounded-xl overflow-hidden border border-white/10 shadow-lg group">
              <img 
                src="/libro-portada.jpg" 
                alt="Libro ¿Esta Zanahoria Pa' Qué?" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle glassmorphic BPIN badge inside the image top-left */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                <span className="text-[10px] font-mono text-slate-400 block tracking-wider uppercase">
                  BPIN 2020000100192
                </span>
              </div>
            </div>

            {/* Book Title & Description */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <h4 className="text-sm font-bold text-white font-mono leading-snug">
                ¿Esta zanahoria pa' qué?
              </h4>
              <p className="text-[11px] text-slate-400 font-light mt-1.5 leading-relaxed">
                Libro de divulgación de rutas de innovación para la zanahoria: Conexión entre bioeconomía y agroindustria, resultado oficial del proyecto.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Right: Context Paragraph and Regional Stats */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-8">
          {/* Paragraph explanation */}
          <div className="flex flex-col gap-4">
            <p className="text-slate-300 leading-relaxed font-light text-base md:text-lg">
              El Oriente Antioqueño, especialmente los municipios de <strong>El Santuario, Marinilla, Rionegro y San Pedro de los Milagros</strong>, representa uno de los núcleos hortícolas más importantes de Colombia. Sin embargo, los productores locales enfrentan retos históricos debido a la fluctuación de precios de mercado y pérdidas de cosecha que alcanzan del <strong>25% al 30%</strong> de excedentes no comercializables.
            </p>
            <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
              A través de la investigación científica, <strong>Antioquia Zana</strong> busca transformar esta problemática en una oportunidad de valorización. Mediante procesos tecnológicos limpios y de química verde, los excedentes de zanahoria son procesados para dar origen a nuevos productos de alto valor agregado, fomentando la sostenibilidad económica del sector y mitigando el impacto ambiental.
            </p>
          </div>

          {/* Region Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regionStats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-obsidian-900/40 p-4 rounded-xl border border-white/5"
              >
                <span className="text-xl md:text-2xl font-mono font-bold text-carrot-orange block">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-200 mt-1 block uppercase tracking-wide">
                  {stat.label}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5 block leading-normal font-light">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Research Team */}
      <AnimatePresence>
        {showTeamModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            {/* Backdrop click close */}
            <div className="absolute inset-0" onClick={() => setShowTeamModal(false)} />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="z-10 w-full max-w-2xl bg-obsidian-950/90 border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl relative max-h-[85vh] overflow-y-auto scrollbar-thin"
            >
              {/* Close button */}
              <button
                onClick={() => setShowTeamModal(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                    Equipo de Investigación
                  </h3>
                  <span className="text-xs font-mono text-emerald-400">Antioquia Zana — SGR Regalías</span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light mb-6">
                Personal científico, técnico, administrativo y de transferencia tecnológica de AGROSAVIA y entidades colaboradoras que participaron en la ejecución del proyecto:
              </p>

              {/* Research Team Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5 border-t border-white/5 pt-5 max-h-[45vh] overflow-y-auto pr-2 scrollbar-thin">
                {researchTeam.map((member: any, idx) => {
                  const isLead = member.role.includes("Investigador Principal");
                  return (
                    <div 
                      key={idx} 
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                        isLead 
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' 
                          : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      <div className={`h-2 w-2 rounded-full ${isLead ? 'bg-emerald-400 shrink-0' : 'bg-slate-500 shrink-0'}`} />
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs md:text-sm font-semibold leading-tight">
                            {member.name}
                          </span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                            member.entity === 'AGROSAVIA' 
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                              : member.entity === 'UCO'
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              : member.entity === 'UdeA'
                              ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          }`}>
                            {member.entity}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-light mt-0.5">
                          {member.role}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end border-t border-white/5 pt-5 mt-6">
                <button
                  onClick={() => setShowTeamModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-white text-obsidian-950 font-semibold text-xs hover:bg-slate-200 transition-colors"
                >
                  Cerrar Ventana
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
