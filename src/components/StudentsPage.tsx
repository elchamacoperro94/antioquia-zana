import { Award, Download } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface ThesisStudent {
  name: string;
  level: string;
  program: string;
  distinction: string;
  title: string;
  directors: string;
  downloadLink: string;
}

const thesisList: ThesisStudent[] = [
  {
    name: "Ing. Mateo Londoño Valencia",
    level: "Maestría",
    program: "Maestría en Ciencia y Tecnología de Alimentos (INTAL / UdeA)",
    distinction: "Tesis Aprobada",
    title: "Generación de valor en la cadena productiva de zanahoria del oriente antioqueño mediante la conceptualización, formulación y prototipado de productos alimenticios",
    directors: "Director: PhD. Luis A. Salazar Hoyos | Co-director: MSc. Juan C. Henao Rojas | Asesores: PhD. Álvaro Arango Ruíz, PhD. Juan F. Montoya Carvajal",
    downloadLink: "/entregables objetivos/Objetivo 2/2.6 Tesista de Maestria 3 (Intal)/2.6.3 Tesis maestria- Mateo Londoño V.pdf"
  },
  {
    name: "Jaison Martínez Saldarriaga",
    level: "Maestría",
    program: "Maestría en Ciencia y Tecnología de Alimentos (Universidad Nacional de Colombia - Sede Medellín)",
    distinction: "Sí (Distinción Laureada - UNAL)",
    title: "Caracterización multidimensional y usos potenciales de los excedentes productivos de zanahoria (Daucus carota) en el oriente del departamento de Antioquia",
    directors: "Director: Prof. Juan Camilo Henao Rojas | Codirigida por: Prof. Diana Paola Yepes Betancur y Prof. Edith Marleny Cadena Chamorro",
    downloadLink: "/entregables objetivos/Objetivo 2/2.1 Tesista Maestria 1 (Agrosavia)/2.1.3 Distincion Laureada UNAL.jpg"
  },
  {
    name: "Paola Andrea Ospina Sánchez",
    level: "Maestría",
    program: "Maestría en Geomática (Universidad Nacional de Colombia - Sede Bogotá)",
    distinction: "Sí (Distinción Meritoria - Res. 323 de 2025)",
    title: "Modelación de la calidad multidimensional en zanahoria a partir de respuestas espectrales, imágenes y percepción del consumidor",
    directors: "Director: Joaquín Guillermo Ramírez Gil (UNAL Sede Bogotá) | Codirector: Juan Camilo Henao Rojas (AGROSAVIA)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.2 Tesista de Maestria 2 (UNal)/2.2.2 RESOLUCION 323 DE 2025 DISTINCION MERITORIA PAOLA _260327_095657.pdf"
  },
  {
    name: "Sergio González López",
    level: "Maestría",
    program: "Maestría en Ciencias Farmacéuticas y Alimentarias (Línea: Productos Naturales - Universidad de Antioquia)",
    distinction: "En Evaluación de Trabajo de Grado",
    title: "Study of the cytotoxic effect mediated by a pro-oxidant mechanism of carotenoids on gastric cancer cells",
    directors: "Facultad de Ciencias Farmacéuticas y Alimentarias (UdeA)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.8 Tesista de Maestria 4 (U de A) PENDIENTE SUSTENTACION/Certificado de entrega de tesis de maestría.pdf"
  },
  {
    name: "Daniela López Galeano",
    level: "Pregrado",
    program: "Comercio Exterior (Universidad Católica de Oriente - UCO)",
    distinction: "Grado Obtenido (Acta y Diploma)",
    title: "Estudiante Vinculada de Pregrado - Convenio de Investigación UCO",
    directors: "Universidad Católica de Oriente (UCO)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.11 Estudiante vinculado pregrado UCO 3/ACTA DE GRADO.pdf"
  },
  {
    name: "Yeslin Ochoa Marín",
    level: "Pregrado",
    program: "Comercio Exterior (Universidad Católica de Oriente - UCO)",
    distinction: "Grado Obtenido (Acta y Diploma)",
    title: "Estudiante Vinculada de Pregrado - Convenio de Investigación UCO",
    directors: "Universidad Católica de Oriente (UCO)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.10 Estudiante vinculado pregrado UCO 2/Acta de grado y Diploma - Comex.pdf"
  },
  {
    name: "María Alejandra Muñoz Moya",
    level: "Pregrado",
    program: "Doble Titulación: Admon. de Empresas y Comercio Exterior (Universidad Católica de Oriente - UCO)",
    distinction: "Estudiante Vinculada",
    title: "Estudiante Vinculada de Pregrado - Convenio de Investigación UCO",
    directors: "Universidad Católica de Oriente (UCO)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.9 Estudiante vinculado pregrado UCO 1/2.9.1 Estudiante con doble titulacion"
  }
];

export default function StudentsPage() {
  return (
    <div className="w-full space-y-10">
      <SectionHeader
        badgeText="Formación de Talento Humano"
        title="Tesis y Trabajos de Grado del Proyecto"
        subtitle="Repositorio oficial de tesis de Maestría y Pregrado vinculadas a la investigación Antioquia Zana (SGR BPIN 2020000100192)."
      />

      <div className="grid grid-cols-1 gap-4">
        {thesisList.map((st, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-[#0F1A15]/90 border border-[#5E824A]/30 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#5E824A]/60 transition-all shadow-lg"
          >
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#DE5A30]/20 border border-[#DE5A30]/40 text-[#DE5A30] text-xs font-sora font-extrabold">
                  {st.level}
                </span>
                {st.distinction.includes("Sí") && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-geist font-semibold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Distinción: {st.distinction}</span>
                  </span>
                )}
                <span className="text-xs font-geist text-[#D4CF7D]">
                  {st.program}
                </span>
              </div>

              <h4 className="font-sora text-base sm:text-lg font-bold text-[#F0EDE1] leading-snug">
                {st.name}
              </h4>

              <p className="text-xs sm:text-sm text-[#F0EDE1]/90 font-light italic leading-relaxed">
                "{st.title}"
              </p>

              <span className="text-[11px] font-geist text-[#F0EDE1]/60 block pt-1">
                {st.directors}
              </span>
            </div>

            {st.level !== 'Pregrado' && (
              <a
                href={st.downloadLink}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#5E824A]/20 border border-[#5E824A]/50 text-[#D4CF7D] font-sora text-xs font-semibold hover:bg-[#5E824A] hover:text-white transition-all shadow-md shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Tesis PDF</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
