import { GraduationCap, Award, Download, FileText } from 'lucide-react';
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
    name: "Mateo Londoño V.",
    level: "Maestría",
    program: "Maestría en Ciencia y Tecnología de Alimentos (INTAL / UdeA)",
    distinction: "Sí (Mención Meritoria)",
    title: "Desarrollo y caracterización de un prototipo alimentario tipo papilla a partir de excedentes de zanahoria (Daucus carota) procesados mediante cavitación hidrotermodinámica",
    directors: "Directores: Juan Camilo Henao Rojas (AGROSAVIA) | Codirector: Jaison Martínez (INTAL)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.6 Tesista de Maestria 3 (Intal)/2.6.3 Tesis maestria- Mateo Londoño V.pdf"
  },
  {
    name: "Paola Ospina",
    level: "Maestría",
    program: "Maestría en Ciencias Agrarias (Universidad Nacional de Colombia Sede Bogotá)",
    distinction: "No",
    title: "Modelación y calibración de firmas espectrales NIRS para la estimación no destructiva de compuestos bioactivos y sólidos solubles en excedentes de zanahoria",
    directors: "Director: Guillermo Ramírez (UNAL) | Codirector: German Franco (AGROSAVIA)",
    downloadLink: "/entregables objetivos/Objetivo 2/2.2 Tesista de Maestria 2 (UNal)/2.2.3 TESIS FINAL PAOLA OSPINA.pdf"
  },
  {
    name: "Jaison Martínez",
    level: "Maestría",
    program: "Maestría en Ciencias Farmacéuticas (Universidad de Antioquia)",
    distinction: "Sí (Mención Meritoria)",
    title: "Aprovechamiento de excedentes de cultivo de zanahoria para la formulación de prototipos alimentarios y nutracéuticos de alta estabilidad",
    directors: "Directora: Edith Marleny Cadena (UdeA) | Codirector: Juan Camilo Henao Rojas (AGROSAVIA)",
    downloadLink: "/entregables objetivos/Objetivo 1/1.12 Articulo cientifico Tecnologías apropiadas para salvaguardar las características funcionales de la zanahoria en productos alimenticios.pdf"
  },
  {
    name: "Sergio Londoño",
    level: "Maestría",
    program: "Maestría en Ciencias Farmacéuticas (Universidad de Antioquia)",
    distinction: "No (Tesis Aprobada)",
    title: "Obtención y nanoencapsulación de bioingredientes ricos en apocarotenoides para la industria dermocosmética antienvejecimiento",
    directors: "Director: Edison Osorio (UdeA) | Codirectora: Carolina Ortiz (UdeA)",
    downloadLink: "/entregables objetivos/Objetivo 3/3.1 Bioingrediente para la industria cosmetica a base de zanahoria 1/3.1.2 Protocolo Ingrediente enriquecido en apocarotenoides de zanahoria-1.pdf"
  },
  {
    name: "Daniela López Galeano",
    level: "Pregrado",
    program: "Ingeniería Agroindustrial (Universidad Católica de Oriente - UCO)",
    distinction: "No (Tesis Aprobada)",
    title: "Evaluación del rendimiento agroindustrial y perfil sensorial de prototipos alimentarios enriquecidos con harina de excedentes de zanahoria",
    directors: "Directora: Liliana Ceballos (UCO) | Codirectora: Claudia Lukau (UCO)",
    downloadLink: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 13/ACT 13 INFORME_Desarrollo conceptual (1).docx"
  },
  {
    name: "Mateo Salazar",
    level: "Pregrado",
    program: "Ingeniería Agroindustrial (Universidad Católica de Oriente - UCO)",
    distinction: "No (Tesis Aprobada)",
    title: "Análisis de la cadena de valor y factibilidad económica de prototipos de transformación de zanahoria en el Oriente Antioqueño",
    directors: "Directora: Liliana Ceballos (UCO) | Codirector: Edison Osorio (UdeA)",
    downloadLink: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/Anexo 12.8 Una zanahoria para emprender.pdf"
  },
  {
    name: "Yeraldine Bedoya",
    level: "Pregrado",
    program: "Ingeniería Agroindustrial (Universidad Católica de Oriente - UCO)",
    distinction: "No (Tesis Aprobada)",
    title: "Evaluación de metodologías de secado y conservación funcional en excedentes agrícolas de zanahoria",
    directors: "Directora: Claudia Lukau (UCO) | Codirector: Juan Camilo Henao Rojas (AGROSAVIA)",
    downloadLink: "/entregables objetivos/Objetivo 1/1.6 Articulo recomendaciones y perfiles de uso de los excedentes.pdf"
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

            <a
              href={st.downloadLink}
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#5E824A]/20 border border-[#5E824A]/50 text-[#D4CF7D] font-sora text-xs font-semibold hover:bg-[#5E824A] hover:text-white transition-all shadow-md shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Tesis PDF</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
