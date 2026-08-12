import { BookOpen, Sparkles, Download, FileText, Palette, Utensils } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface ComplementaryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  icon: JSX.Element;
  downloadLink: string;
  accent: string;
}

const complementaryList: ComplementaryItem[] = [
  {
    id: "COMP-01",
    title: "Cartilla Ilustrada & Historieta 'Esta Zanahoria Pa' Quién'",
    category: "Divulgación Cómica y Apropiación Social",
    description: "Historieta ilustrada que relata mediante un lenguaje ameno y caricaturesco la cadena de valor de la zanahoria y los modelos de gobernanza participativa en el Oriente Antioqueño.",
    badge: "Historieta & Cartilla",
    icon: <Palette className="w-6 h-6 text-[#DE5A30]" />,
    downloadLink: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 14/Anexo 14.1 Esta Zanahoria pa quien.pdf",
    accent: "border-[#DE5A30]"
  },
  {
    id: "COMP-02",
    title: "Manual Agroindustrial 'Una Zanahoria Para Emprender'",
    category: "Manual Técnico UCO",
    description: "Guía práctica de emprendimiento agroindustrial desarrollada en alianza con la Universidad Católica de Oriente (UCO) para apoyar el montaje de nuevos modelos de negocio locales.",
    badge: "Manual Académico UCO",
    icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
    downloadLink: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/Anexo 12.8 Una zanahoria para emprender.pdf",
    accent: "border-emerald-400"
  },
  {
    id: "COMP-03",
    title: "Manual de Mercado 'Una Zanahoria Para Exportar'",
    category: "Guía Exportadora UCO",
    description: "Manual metodológico enfocado en los estándares internacionales de calidad, requisitos fitosanitarios y empaques para exportar zanahoria y sus derivados.",
    badge: "Manual Académico UCO",
    icon: <FileText className="w-6 h-6 text-sky-400" />,
    downloadLink: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 13/Anexo 13.1 Una zanahoria para exportar.pdf",
    accent: "border-sky-400"
  },
  {
    id: "COMP-04",
    title: "Libro & Recetario Agroindustrial '¿Esta Zanahoria Pa' Qué?'",
    category: "Libro de Divulgación & Recetas",
    description: "Libro institucional que documenta la ruta de innovación de la zanahoria en Antioquia e incluye recetas culinarias y preparaciones agroindustriales con pulpa y excedentes.",
    badge: "Libro & Recetario",
    icon: <Utensils className="w-6 h-6 text-[#D4CF7D]" />,
    downloadLink: "/entregables objetivos/Objetivo 4/4.4 Documento técnico con las características de la cadena de valor, mercado y planes de negocio específicos para los prototipos de productos entregados/4.4.1 DOCUMENTO TECNICO objetivo 4/ACTIVIDAD 12/Anexo 12.8 Una zanahoria para emprender.pdf",
    accent: "border-[#D4CF7D]"
  }
];

export default function ComplementaryProducts() {
  return (
    <section id="productos-complementarios" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Encabezado de la Sección */}
      <SectionHeader
        badgeText="Valor Agregado"
        badgeColor="orange"
        title="Productos Complementarios y Materiales de Divulgación"
        subtitle="Publicaciones, historietas, recetarios y manuales técnicos desarrollados como entregables de impacto social y pedagógico."
      />

      {/* Rejilla de los 4 Productos Complementarios (Observación 14) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {complementaryList.map((item) => (
          <div
            key={item.id}
            className={`p-6 sm:p-8 rounded-3xl bg-[#0F1A15]/90 border ${item.accent}/40 backdrop-blur-md flex flex-col justify-between space-y-6 shadow-xl hover:border-white/40 transition-all`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4CF7D] font-geist text-xs font-semibold">
                  {item.badge}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#DE5A30] uppercase tracking-wider block font-bold">
                  {item.category}
                </span>
                <h3 className="font-sora text-lg sm:text-xl font-bold text-[#F0EDE1] leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#F0EDE1]/80 font-light leading-relaxed">
                {item.description}
              </p>
            </div>

            <a
              href={item.downloadLink}
              download
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl bg-[#5E824A]/20 border border-[#5E824A]/50 text-[#D4CF7D] font-sora text-xs font-semibold hover:bg-[#DE5A30] hover:text-white hover:border-[#DE5A30] transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Documento PDF</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
