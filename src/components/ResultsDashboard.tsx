import { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  Legend
} from 'recharts';
import {
  BookOpen,
  Users,
  GraduationCap
} from 'lucide-react';

// 1. Data Definitions
// Physicochemical characterization results of raw residue
const muestrasData = [
  { name: 'Beta-caroteno (mg/100g)', shortName: 'Beta-caroteno', cantidad: 8.28, fill: '#e86a1f' },
  { name: 'Alfa-caroteno (mg/100g)', shortName: 'Alfa-caroteno', cantidad: 3.42, fill: '#f5a623' },
  { name: 'Fibra Insoluble (%)', shortName: 'Fibra Insol.', cantidad: 16.0, fill: '#2d6a30' },
  { name: 'Fibra Soluble (%)', shortName: 'Fibra Sol.', cantidad: 12.5, fill: '#10b981' },
  { name: 'Sólidos Solubles (°Brix)', shortName: 'Sólidos Sol. (°B)', cantidad: 7.20, fill: '#3b82f6' }
];

// Social appropriation and outreach data counts (number of people reached)
const apropiacionData = [
  { name: 'Productores Capacitados', value: 190, fill: '#10b981' },
  { name: 'Catadores en Cata Sensorial', value: 70, fill: '#e86a1f' },
  { name: 'Asistentes en Socialización', value: 59, fill: '#f5a623' },
  { name: 'Investigadores Vinculados', value: 24, fill: '#8b5cf6' }
];

// Percentages of upcycled carrot residues incorporated into the final formulations of prototypes
const formulaIngredienteData = [
  { name: 'ZanaPure (Compota)', uv: 27, fill: '#e86a1f' },
  { name: 'Extracto Apocarotenoide', uv: 85, fill: '#8b5cf6' },
  { name: 'Aurum Carota (Crema)', uv: 15, fill: '#ec4899' },
  { name: 'ZanaPet (Mascotas)', uv: 45, fill: '#10b981' },
  { name: 'Gomas Biofuncionales', uv: 18, fill: '#f5a623' }
];

interface StudentItem {
  name: string;
  type: 'Maestría' | 'Pregrado';
  degree: string;
  thesis?: string;
  distinction?: string;
  university: 'UNAL' | 'UdeA' | 'UCO';
  files: {
    name: string;
    link: string;
  }[];
}

const studentsList: StudentItem[] = [
  {
    name: 'Jaison Martínez Saldarriaga',
    type: 'Maestría',
    degree: 'Magíster en Ciencia y Tecnología de Alimentos (UNAL Medellín)',
    thesis: 'Caracterización multidimensional y usos potenciales de los excedentes productivos de zanahoria (Daucus carota) en el Oriente del departamento de Antioquia',
    distinction: 'Distinción Laureada',
    university: 'UNAL',
    files: [
      { name: 'Diploma', link: '/entregables objetivos/Objetivo 2/2.1 Tesista Maestria 1 (Agrosavia)/2.1.1 Diploma.jpg' },
      { name: 'Acta de Grado', link: '/entregables objetivos/Objetivo 2/2.1 Tesista Maestria 1 (Agrosavia)/2.1.2 Acta de grado.jpg' },
      { name: 'Distinción Laureada', link: '/entregables objetivos/Objetivo 2/2.1 Tesista Maestria 1 (Agrosavia)/2.1.3 Distincion Laureada UNAL.jpg' }
    ]
  },
  {
    name: 'Paola Ospina',
    type: 'Maestría',
    degree: 'Magíster en Ciencia y Tecnología de Alimentos (UNAL)',
    thesis: 'Evaluación de la estabilidad y funcionalidad biológica de compuestos bioactivos en prototipos alimenticios',
    distinction: 'Distinción Meritoria',
    university: 'UNAL',
    files: [
      { name: 'Diploma', link: '/entregables objetivos/Objetivo 2/2.2 Tesista de Maestria 2 (UNal)/2.2.1 Diploma.pdf' },
      { name: 'Resolución Distinción', link: '/entregables objetivos/Objetivo 2/2.2 Tesista de Maestria 2 (UNal)/2.2.2 RESOLUCION 323 DE 2025 DISTINCION MERITORIA PAOLA _260327_095657.pdf' },
      { name: 'Tesis Final', link: '/entregables objetivos/Objetivo 2/2.2 Tesista de Maestria 2 (UNal)/2.2.3 TESIS FINAL PAOLA OSPINA.pdf' }
    ]
  },
  {
    name: 'Mateo Londoño V.',
    type: 'Maestría',
    degree: 'Magíster en Calidad de Alimentos (UNAL - Corporación Intal)',
    thesis: 'Efecto de la cavitación hidrotermodinámica en la bioaccesibilidad de carotenoides de zanahoria',
    university: 'UNAL',
    files: [
      { name: 'Diploma', link: '/entregables objetivos/Objetivo 2/2.6 Tesista de Maestria 3 (Intal)/2.6.2 Diploma De Grado Maestría En Calidad De Alimentos .pdf' },
      { name: 'Acta de Grado', link: '/entregables objetivos/Objetivo 2/2.6 Tesista de Maestria 3 (Intal)/2.6.1 Acta De Grado Maestría En Calidad De Alimentos.pdf' },
      { name: 'Tesis', link: '/entregables objetivos/Objetivo 2/2.6 Tesista de Maestria 3 (Intal)/2.6.3 Tesis maestria- Mateo Londoño V.pdf' }
    ]
  },
  {
    name: 'Sergio González López',
    type: 'Maestría',
    degree: 'Maestría en Ciencias Farmacéuticas y Alimentarias (UdeA)',
    thesis: 'Formulación de ingredientes y productos a base de apocarotenoides de zanahoria (Pendiente de sustentación)',
    distinction: 'Pendiente de Sustentación',
    university: 'UdeA',
    files: [
      { name: 'Certificado de Entrega', link: '/entregables objetivos/Objetivo 2/2.8 Tesista de Maestria 4 (U de A) PENDIENTE SUSTENTACION/Certificado de entrega de tesis de maestría.pdf' }
    ]
  },
  {
    name: 'María Alejandra Muñoz Moya',
    type: 'Pregrado',
    degree: 'Doble Titulación: Admón. de Empresas & Comercio Exterior (UCO)',
    distinction: 'Mención de Honor por Trabajo de Grado',
    university: 'UCO',
    files: [
      { name: 'Diploma Admón.', link: '/entregables objetivos/Objetivo 2/2.9 Estudiante vinculado pregrado UCO 1/2.9.1 Estudiante con doble titulacion/MARIA ALEJANDRA MUÑOZ MOYA ADMON EMPRE/1726-AA-003873_4861 DIPLOMA.pdf' },
      { name: 'Acta Admón.', link: '/entregables objetivos/Objetivo 2/2.9 Estudiante vinculado pregrado UCO 1/2.9.1 Estudiante con doble titulacion/MARIA ALEJANDRA MUÑOZ MOYA ADMON EMPRE/Acta_Grado_967_4861.pdf' },
      { name: 'Diploma Comex', link: '/entregables objetivos/Objetivo 2/2.9 Estudiante vinculado pregrado UCO 1/2.9.1 Estudiante con doble titulacion/MARIA ALEJANDRA MUÑOZ MOYA CEXTERIOR/1726-AA-003909_4885 DIPLOMA.pdf' },
      { name: 'Acta Comex', link: '/entregables objetivos/Objetivo 2/2.9 Estudiante vinculado pregrado UCO 1/2.9.1 Estudiante con doble titulacion/MARIA ALEJANDRA MUÑOZ MOYA CEXTERIOR/Acta_Grado_967_4885.pdf' },
      { name: 'Mención de Honor', link: '/entregables objetivos/Objetivo 2/2.9 Estudiante vinculado pregrado UCO 1/2.9.1 Estudiante con doble titulacion/MARIA ALEJANDRA MUÑOZ MOYA CEXTERIOR/Mención de honor 1.pdf' }
    ]
  },
  {
    name: 'Yeslin Ochoa Marín',
    type: 'Pregrado',
    degree: 'Comercio Exterior (UCO)',
    university: 'UCO',
    files: [
      { name: 'Diploma y Acta', link: '/entregables objetivos/Objetivo 2/2.10 Estudiante vinculado pregrado UCO 2/Acta de grado y Diploma - Comex.pdf' },
      { name: 'Contrato', link: '/entregables objetivos/Objetivo 2/2.10 Estudiante vinculado pregrado UCO 2/Contrato Yeslin Ochoa Marin.pdf' }
    ]
  },
  {
    name: 'Daniela López Galeano',
    type: 'Pregrado',
    degree: 'Comercio Exterior (UCO)',
    university: 'UCO',
    files: [
      { name: 'Diploma', link: '/entregables objetivos/Objetivo 2/2.11 Estudiante vinculado pregrado UCO 3/DIPLOMA.pdf' },
      { name: 'Acta de Grado', link: '/entregables objetivos/Objetivo 2/2.11 Estudiante vinculado pregrado UCO 3/ACTA DE GRADO.pdf' },
      { name: 'Contrato', link: '/entregables objetivos/Objetivo 2/2.11 Estudiante vinculado pregrado UCO 3/Contrato Daniela López Galeano.pdf' }
    ]
  }
];

export default function ResultsDashboard() {
  const [activeChart, setActiveChart] = useState<'muestras' | 'apropiacion' | 'innovacion' | 'talento'>('muestras');
  const [studentFilter, setStudentFilter] = useState<'All' | 'Maestría' | 'Pregrado'>('All');

  // Custom tooltips
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const name = payload[0].name;
      let unit = '';
      if (activeChart === 'muestras') {
        unit = name.includes('mg') ? ' mg/100g' : name.includes('Brix') ? ' °Brix' : ' %';
      } else if (activeChart === 'innovacion') {
        unit = ' %';
      } else {
        unit = ' Personas';
      }
      return (
        <div className="bg-obsidian-900/90 border border-white/10 p-3 rounded-lg shadow-xl backdrop-blur-md">
          <p className="text-xs font-mono text-slate-400">{name}</p>
          <p className="text-sm font-bold text-white mt-1">
            {value}{unit}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-12 w-full">
      {/* 1. Google Stitch Style Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column: Stats & Description */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-secondary/20 bg-white/5">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-caps text-secondary text-xs uppercase tracking-wider">Impacto Basado en Evidencia</span>
          </div>
          <h2 className="font-display-lg text-white text-3xl md:text-4xl font-bold">Resultados Científicos y del Proyecto</h2>
          <p className="font-body-lg text-slate-400 leading-relaxed font-light">
            Métricas consolidadas de análisis fisicoquímicos, prototipos y transferencia de conocimiento logrados por la alianza.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
              <h3 className="font-display-lg text-white text-3xl font-extrabold">117</h3>
              <p className="font-label-caps text-slate-400 opacity-60 text-xs">Muestras Caracterizadas</p>
            </div>
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-secondary">
              <h3 className="font-display-lg text-white text-3xl font-extrabold">05</h3>
              <p className="font-label-caps text-slate-400 opacity-60 text-xs">Prototipos Creados</p>
            </div>
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-blue-500">
              <h3 className="font-display-lg text-white text-3xl font-extrabold">06</h3>
              <p className="font-label-caps text-slate-400 opacity-60 text-xs">Modelos de Negocio</p>
            </div>
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-purple-500">
              <h3 className="font-display-lg text-white text-3xl font-extrabold">02</h3>
              <p className="font-label-caps text-slate-400 opacity-60 text-xs">Documentos Oficiales</p>
            </div>
          </div>
        </div>

        {/* Right Column: Milestones (MIT-01 to MIT-04) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-xl space-y-3 border border-white/5">
            <span className="font-mono text-primary text-xs uppercase tracking-wider block">MIT-01</span>
            <h4 className="font-headline-md text-white text-base font-bold leading-tight">Publicación Científica</h4>
            <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light">
              Publicación del libro de divulgación científica "¿Esta Zanahoria Pa' Qué?" en colaboración institucional.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl space-y-3 border border-white/5">
            <span className="font-mono text-primary text-xs uppercase tracking-wider block">MIT-02</span>
            <h4 className="font-headline-md text-white text-base font-bold leading-tight">Censo Hortícola</h4>
            <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light">
              Levantamiento cartográfico y socioeconómico de 53 tipologías de productores en Marinilla, Santuario y Rionegro.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl space-y-3 border border-white/5">
            <span className="font-mono text-primary text-xs uppercase tracking-wider block">MIT-03</span>
            <h4 className="font-headline-md text-white text-base font-bold leading-tight">Rutas de Bioeconomía</h4>
            <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light">
              Diseño e implementación de 6 planes comerciales para derivados y excedentes hortícolas.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl space-y-3 border border-white/5">
            <span className="font-mono text-primary text-xs uppercase tracking-wider block">MIT-04</span>
            <h4 className="font-headline-md text-white text-base font-bold leading-tight">Transferencia Tecnológica</h4>
            <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light">
              Capacitación directa de 190 agricultores y realización de 3 días de campo y censo sensorial de gomas.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Interactive Charts Panel (Preserved local data explorer) */}
      <div className="border-t border-white/5 pt-12 space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-primary text-xs uppercase tracking-widest block">Explorador Científico</span>
          <h3 className="font-headline-md text-white text-xl font-bold">Datos Cuantitativos del Proyecto</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              { id: 'muestras', title: 'Caracterización Fisicoquímica', desc: 'Valores promedio de compuestos funcionales y fibra identificados en excedentes.' },
              { id: 'apropiacion', title: 'Apropiación Social', desc: 'Personas e investigadores vinculados en talleres y paneles.' },
              { id: 'innovacion', title: 'Ingrediente Valorizado (%)', desc: 'Porcentaje de excedente de zanahoria incorporado en la formulación final.' },
              { id: 'talento', title: 'Talento Humano Formado', desc: 'Detalle de los 7 estudiantes de Maestría y Pregrado graduados y vinculados.' }
            ].map((chart) => (
              <button
                key={chart.id}
                onClick={() => setActiveChart(chart.id as any)}
                className={`text-left w-full focus:outline-none p-5 rounded-2xl border transition-all duration-300 ${
                  activeChart === chart.id
                    ? 'bg-obsidian-800 border-primary-container/40 shadow-md shadow-primary-container/5 translate-x-2'
                    : 'bg-obsidian-800/30 border-white/5 hover:bg-obsidian-800/60 hover:border-white/10'
                }`}
              >
                <h4 className={`font-bold text-sm ${activeChart === chart.id ? 'text-white' : 'text-slate-300'}`}>
                  {chart.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-light">{chart.desc}</p>
              </button>
            ))}
          </div>

          {/* Chart Area */}
          <div className="lg:col-span-8">
            <div className="glass-card h-full flex flex-col justify-start border border-white/10 relative p-6 rounded-2xl bg-obsidian-900/20 min-h-[380px]">
              <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
              
              {activeChart !== 'talento' ? (
                <div className="w-full h-80 z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    {activeChart === 'muestras' ? (
                      <BarChart data={muestrasData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                        <XAxis dataKey="shortName" stroke="#6b7280" fontSize={11} tickLine={false} />
                        <YAxis stroke="#6b7280" fontSize={11} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                        <Bar dataKey="cantidad" radius={[8, 8, 0, 0]}>
                          {muestrasData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    ) : activeChart === 'apropiacion' ? (
                      <PieChart>
                        <Tooltip content={<CustomTooltip />} />
                        <Pie
                          data={apropiacionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {apropiacionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Legend 
                          verticalAlign="bottom" 
                          height={36} 
                          formatter={(value, entry: any) => (
                            <span className="text-xs text-slate-400 font-mono">
                              {value} ({entry.payload.value} personas)
                            </span>
                          )}
                        />
                      </PieChart>
                    ) : (
                      <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="30%"
                        outerRadius="95%"
                        barSize={12}
                        data={formulaIngredienteData}
                      >
                        <RadialBar
                          label={{ position: 'insideStart', fill: '#fff', fontSize: 9, fontFamily: 'monospace' }}
                          background={{ fill: 'rgba(255,255,255,0.05)' }}
                          dataKey="uv"
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                          iconSize={8}
                          layout="vertical"
                          verticalAlign="middle"
                          align="right"
                          formatter={(value, entry: any) => (
                            <span className="text-xs text-slate-400 font-mono">
                              {value} ({entry.payload.uv}%)
                            </span>
                          )}
                        />
                      </RadialBarChart>
                    )}
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="z-10 w-full space-y-4">
                  {/* Filter tabs */}
                  <div className="flex gap-2 border-b border-white/5 pb-3">
                    {['All', 'Maestría', 'Pregrado'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setStudentFilter(filter as any)}
                        className={`px-3 py-1 text-xs rounded-full font-mono transition-all border ${
                          studentFilter === filter
                            ? 'bg-primary-container/20 text-primary-container border-primary-container/30'
                            : 'bg-white/5 text-slate-400 border-transparent hover:border-white/10 hover:text-white'
                        }`}
                      >
                        {filter === 'All' ? 'Todos' : filter}
                      </button>
                    ))}
                  </div>

                  {/* Students grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                    {studentsList
                      .filter((s) => studentFilter === 'All' || s.type === studentFilter)
                      .map((student, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-obsidian-950/50 border border-white/5 flex flex-col justify-between space-y-3 hover:border-white/10 transition-all">
                          <div>
                            <div className="flex justify-between items-start">
                              <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono ${
                                student.type === 'Maestría'
                                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              }`}>
                                {student.type}
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">{student.university}</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mt-2">{student.name}</h4>
                            <p className="text-[11px] text-primary-container font-light">{student.degree}</p>
                            {student.thesis && (
                              <p className="text-[10px] text-slate-400 font-light mt-1.5 line-clamp-2" title={student.thesis}>
                                <strong className="font-mono text-[9px] text-slate-500">TESIS:</strong> {student.thesis}
                              </p>
                            )}
                            {student.distinction && (
                              <div className="mt-1 flex items-center gap-1 text-[10px] text-amber-400 font-mono">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                                {student.distinction}
                              </div>
                            )}
                          </div>

                          {/* Action links */}
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                            {student.files.map((file, fIdx) => (
                              <a
                                key={fIdx}
                                href={file.link}
                                download
                                className="text-[9px] px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all font-mono"
                              >
                                {file.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Social Appropriation Academic Stats Panel */}
      <div className="glass-card border border-emerald-500/20 bg-gradient-to-r from-emerald-950/10 via-obsidian-900/40 to-obsidian-900 p-8 rounded-2xl">
        <div className="absolute inset-0 technical-grid opacity-5 pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              Apropiación Social
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-4 leading-snug">
              Transferencia Tecnológica e Impacto Académico
            </h3>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed font-light">
              El proyecto no solo genera prototipos de productos, sino que consolida las capacidades locales del Oriente Antioqueño mediante programas formativos y publicaciones científicas.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {[
              { val: '190+', desc: 'Individuos Capacitados', icon: <Users className="h-5 w-5 text-emerald-400" /> },
              { val: '2', desc: 'Tesis de Maestría', icon: <GraduationCap className="h-5 w-5 text-blue-400" /> },
              { val: '3', desc: 'Tesis de Pregrado', icon: <GraduationCap className="h-5 w-5 text-amber-400" /> },
              { val: '4', desc: 'Artículos Científicos', icon: <BookOpen className="h-5 w-5 text-purple-400" /> }
            ].map((item, i) => (
              <div key={i} className="bg-obsidian-950/40 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-mono font-bold text-white block">
                    {item.val}
                  </span>
                  <span className="text-xs text-slate-400 font-light block">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
