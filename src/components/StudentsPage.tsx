import { useState } from 'react';
import { Award, Download, Landmark } from 'lucide-react';

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

export default function StudentsPage() {
  const [filter, setFilter] = useState<'All' | 'Maestría' | 'Pregrado'>('All');

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-6">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">
          Formación de Capital Humano
        </div>
        <h2 className="text-3xl font-extrabold text-white">Estudiantes y Graduados del Proyecto</h2>
        <p className="text-slate-400 font-light max-w-2xl text-sm leading-relaxed">
          Conoce al talento académico de maestría y pregrado que formuló sus trabajos de grado y proyectos de investigación en el marco de la alianza Antioquia Zana.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-white/5 pb-4">
        {['All', 'Maestría', 'Pregrado'].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item as any)}
            className={`px-4 py-2 rounded-full font-mono text-xs border transition-all ${
              filter === item
                ? 'bg-carrot-orange/20 text-carrot-orange border-carrot-orange/30 font-bold shadow-md shadow-carrot-orange/5'
                : 'bg-white/5 text-slate-400 border-transparent hover:border-white/10 hover:text-white'
            }`}
          >
            {item === 'All' ? 'Todos los Estudiantes' : item}
          </button>
        ))}
      </div>

      {/* Grid of Student Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentsList
          .filter((student) => filter === 'All' || student.type === filter)
          .map((student, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-6 hover:border-white/10 transition-all bg-obsidian-950/20"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono font-semibold border ${
                    student.type === 'Maestría'
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}>
                    {student.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Landmark className="h-3.5 w-3.5" />
                    {student.university}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">{student.name}</h3>
                  <p className="text-xs text-carrot-orange font-light mt-1 font-mono">{student.degree}</p>
                </div>

                {student.thesis && (
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Proyecto de Tesis</span>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {student.thesis}
                    </p>
                  </div>
                )}

                {student.distinction && (
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
                    <Award className="h-4 w-4 shrink-0" />
                    {student.distinction}
                  </div>
                )}
              </div>

              {/* Downloads list */}
              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Documentos Académicos</span>
                <div className="flex flex-wrap gap-2">
                  {student.files.map((file, fileIdx) => (
                    <a
                      key={fileIdx}
                      href={file.link}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                    >
                      <Download className="h-3 w-3" />
                      {file.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
