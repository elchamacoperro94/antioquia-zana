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
  Database,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  FileSpreadsheet,
  CheckCircle,
  FlaskConical,
  Activity,
  Layers
} from 'lucide-react';
import GlassCard from './GlassCard';
import Badge from './Badge';

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

export default function ResultsDashboard() {
  const [activeChart, setActiveChart] = useState<'muestras' | 'apropiacion' | 'innovacion'>('muestras');

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
    <div className="flex flex-col gap-10">
      {/* 1. Main Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Muestras Caracterizadas', value: '117', desc: '62 excedentes | 55 cultivares', icon: <Database className="h-6 w-6 text-carrot-orange" /> },
          { label: 'Prototipos Creados', value: '5', desc: 'Alimentos & Cosméticos', icon: <Layers className="h-6 w-6 text-emerald-400" /> },
          { label: 'Modelos de Negocio', value: '6', desc: 'Planes Comerciales Habilitados', icon: <FileSpreadsheet className="h-6 w-6 text-amber-400" /> },
          { label: 'Docs Técnicos', value: '2', desc: 'Soporte Científico', icon: <BookOpen className="h-6 w-6 text-purple-400" /> }
        ].map((stat, i) => (
          <GlassCard key={i} className="flex flex-col justify-between items-center text-center p-6 border-white/10" hoverEffect={true}>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-3">
              {stat.icon}
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-mono font-bold text-white block">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-2 block">{stat.label}</span>
              <span className="text-xs text-slate-500 mt-1 block font-light">{stat.desc}</span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 2. Interactive Charts Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Chart Selector list */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {[
            { id: 'muestras', title: 'Caracterización Fisicoquímica', desc: 'Valores promedio de compuestos funcionales y fibra identificados en excedentes.' },
            { id: 'apropiacion', title: 'Apropiación Social', desc: 'Personas e investigadores vinculados en talleres y paneles.' },
            { id: 'innovacion', title: 'Ingrediente Valorizado (%)', desc: 'Porcentaje de excedente de zanahoria incorporado en la formulación final.' }
          ].map((chart) => (
            <button
              key={chart.id}
              onClick={() => setActiveChart(chart.id as any)}
              className={`text-left w-full focus:outline-none p-5 rounded-2xl border transition-all duration-300 ${
                activeChart === chart.id
                  ? 'bg-obsidian-800 border-carrot-orange/40 shadow-md shadow-carrot-orange/5 translate-x-2'
                  : 'bg-obsidian-800/30 border-white/5 hover:bg-obsidian-800/60 hover:border-white/10'
              }`}
            >
              <h4 className={`font-bold ${activeChart === chart.id ? 'text-white' : 'text-slate-300'}`}>
                {chart.title}
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">{chart.desc}</p>
            </button>
          ))}
        </div>

        {/* Visual Chart Area */}
        <div className="lg:col-span-8">
          <GlassCard hoverEffect={false} className="h-full flex flex-col justify-center min-h-[350px] border-white/10 relative p-6">
            <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
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
                        <span className="text-xs text-slate-300 font-mono">
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
                        <span className="text-xs text-slate-300 font-mono">
                          {value} ({entry.payload.uv}%)
                        </span>
                      )}
                    />
                  </RadialBarChart>
                )}
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* 3. Milestone Cards */}
      <div>
        <h3 className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-6 text-center">
          Hitos de Rigor Científico
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Caracterización Exhaustiva', value: '117 muestras', desc: '62 de excedentes y 55 de nuevos cultivares.', icon: <CheckCircle className="h-5 w-5 text-carrot-orange" /> },
            { title: 'HPLC Validado', value: 'r = 0.9997', desc: 'Curva de calibración cromatográfica certificada.', icon: <Activity className="h-5 w-5 text-purple-400" /> },
            { title: 'Escalamiento Piloto', value: '16 Litros', desc: 'Procesamiento en reactores BSP-1200.', icon: <FlaskConical className="h-5 w-5 text-blue-400" /> },
            { title: 'Seguridad Cosmética', value: '4 Protocolos', desc: 'OCDE in-vitro cumplidos sin testeo animal.', icon: <Award className="h-5 w-5 text-emerald-400" /> }
          ].map((milestone, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-obsidian-800/30">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0 h-fit">
                {milestone.icon}
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase">
                  {milestone.title}
                </span>
                <span className="text-lg font-bold text-white block mt-0.5">
                  {milestone.value}
                </span>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Social Appropriation / Tech Transfer Panel */}
      <GlassCard hoverEffect={false} className="border-emerald-500/20 bg-gradient-to-r from-emerald-950/10 via-obsidian-900/40 to-obsidian-900">
        <div className="absolute inset-0 technical-grid opacity-5 pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-4">
          <div className="lg:col-span-5">
            <Badge text="Apropiación Social" color="green" />
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
      </GlassCard>
    </div>
  );
}
