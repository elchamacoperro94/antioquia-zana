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
// Causes and breakdown of discard / excedentes (25-30% of total harvest in Oriente Antioqueño)
const causasExcedentesData = [
  { name: 'Fuera de calibre / tamaño no estándar', shortName: 'Fuera de Calibre', valor: 12, fill: '#f2542d' },
  { name: 'Imperfecciones estéticas / rajaduras de campo', shortName: 'Imperfecciones', valor: 9, fill: '#f5a623' },
  { name: 'Manchas / daño cosmético', shortName: 'Daño Cosmético', valor: 5, fill: '#3b82f6' },
  { name: 'Sobreoferta y fluctuación de precios', shortName: 'Sobreoferta', valor: 4, fill: '#10b981' }
];

// Potential for upcycling and valorization of surpluses (%)
const potencialValorizacionData = [
  { name: 'Extracción de Bioactivos / Apocarotenoides', uv: 35, fill: '#8b5cf6' },
  { name: 'Alimentos e Ingredientes Funcionales', uv: 30, fill: '#f2542d' },
  { name: 'Nutrición Animal / Suplementos', uv: 25, fill: '#10b981' },
  { name: 'Uso Agrícola / Biomasa directa', uv: 10, fill: '#f5a623' }
];

// Social appropriation and outreach data counts (number of people reached)
const apropiacionData = [
  { name: 'Asistentes a ZanaFest', value: 800, fill: '#ec4899' },
  { name: 'Productores Capacitados', value: 190, fill: '#10b981' },
  { name: 'Catadores en Cata Sensorial', value: 70, fill: '#f2542d' },
  { name: 'Asistentes en Socialización', value: 59, fill: '#f5a623' },
  { name: 'Investigadores Vinculados', value: 24, fill: '#8b5cf6' }
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

import ArtFrame from './ArtFrame';

export default function ResultsDashboard() {
  const [activeChart, setActiveChart] = useState<'causas' | 'potencial' | 'apropiacion' | 'talento'>('causas');
  const [studentFilter, setStudentFilter] = useState<'All' | 'Maestría' | 'Pregrado'>('All');

  // Custom tooltips
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const name = payload[0].name;
      let unit = '';
      if (activeChart === 'causas' || activeChart === 'potencial') {
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
          <ArtFrame badge="MIT-01" title="Publicación Científica">
            <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light mt-2">
              Publicación del libro de divulgación científica "¿Esta Zanahoria Pa' Qué?" en colaboración institucional.
            </p>
          </ArtFrame>
          <ArtFrame badge="MIT-02" title="Censo Hortícola">
            <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light mt-2">
              Levantamiento cartográfico y socioeconómico de 53 tipologías de productores en Marinilla, Santuario y Rionegro.
            </p>
          </ArtFrame>
          <ArtFrame badge="MIT-03" title="Rutas de Bioeconomía">
            <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light mt-2">
              Diseño e implementación de 6 planes comerciales para derivados y excedentes hortícolas.
            </p>
          </ArtFrame>
          <ArtFrame badge="MIT-04" title="Transferencia Tecnológica">
            <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light mt-2">
              Capacitación directa de 190 agricultores y realización de 3 días de campo y censo sensorial de gomas.
            </p>
          </ArtFrame>
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
              { id: 'causas', title: 'Causas de Excedentes (%)', desc: 'Causas y descarte basado en el 25–30% de mermas del Oriente Antioqueño.' },
              { id: 'potencial', title: 'Potencial de Valorización (%)', desc: 'Rutas de aprovechamiento agroindustrial e ingredientes funcionales.' },
              { id: 'apropiacion', title: 'Apropiación Social', desc: 'Personas, productores y 800+ asistentes al ZanaFest vinculados.' }
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
              
              <div className="w-full h-80 z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    {activeChart === 'causas' ? (
                      <BarChart data={causasExcedentesData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                        <XAxis dataKey="shortName" stroke="#6b7280" fontSize={11} tickLine={false} />
                        <YAxis stroke="#6b7280" fontSize={11} tickLine={false} unit="%" />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                        <Bar dataKey="valor" radius={[8, 8, 0, 0]}>
                          {causasExcedentesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    ) : activeChart === 'potencial' ? (
                      <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="30%"
                        outerRadius="95%"
                        barSize={12}
                        data={potencialValorizacionData}
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
                    ) : (
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
                          height={48} 
                          formatter={(value, entry: any) => (
                            <span className="text-xs text-slate-400 font-mono">
                              {value} ({entry.payload.value} personas)
                            </span>
                          )}
                        />
                      </PieChart>
                    )}
                  </ResponsiveContainer>
                </div>
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
