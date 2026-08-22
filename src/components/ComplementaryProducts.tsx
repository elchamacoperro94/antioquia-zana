import React from 'react';
import { BookOpen, ExternalLink, Bookmark, FileSpreadsheet, Newspaper, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface WorkItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  coverImage?: string;
  gradient: string;
  editorialLink: string;
  accentColor: string;
}

const worksList: WorkItem[] = [
  {
    id: "WORK-01",
    title: "Libro Carota 360°: Modelo Productivo de la Zanahoria",
    shortTitle: "Libro Carota 360°",
    category: "Obra de Investigación AGROSAVIA",
    description: "Sistematización integral del modelo productivo, recomendaciones técnicas de cultivo, manejo integrado de plagas y perfiles de uso para el Oriente Antioqueño.",
    badge: "Libro Científico",
    icon: <Award className="w-5 h-5 text-[#DE5A30]" />,
    gradient: "from-[#DE5A30] to-[#5C2310]",
    editorialLink: "https://editorial.agrosavia.co/",
    accentColor: "border-[#DE5A30]"
  },
  {
    id: "WORK-02",
    title: "Catálogo: El Valor de lo Singular (Daucus carota L.)",
    shortTitle: "El Valor de lo Singular",
    category: "Catálogo de Variedades AGROSAVIA",
    description: "Catálogo de cultivares promisorios y excedentes de zanahoria con calidad diferencial y aptitud agroindustrial para la bioeconomía del Oriente.",
    badge: "Catálogo Técnico",
    icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
    coverImage: "/catalogo-el-valor-de-lo-singular.png",
    gradient: "from-[#5E824A] to-[#1F2F18]",
    editorialLink: "https://editorial.agrosavia.co/index.php/publicaciones/catalog/book/538",
    accentColor: "border-emerald-400"
  },
  {
    id: "WORK-03",
    title: "Libro & Recetario Agroindustrial: ¿Esta Zanahoria Pa' Qué?",
    shortTitle: "¿Esta Zanahoria Pa' Qué?",
    category: "Libro de Divulgación & Cocina",
    description: "Publicación que recopila la ruta de innovación de la zanahoria e incluye recetas gastronómicas y aplicaciones culinarias desarrolladas con excedentes.",
    badge: "Libro & Recetario",
    icon: <BookOpen className="w-5 h-5 text-[#D4CF7D]" />,
    coverImage: "/libro-portada.jpg",
    gradient: "from-[#D4CF7D] to-[#42401C]",
    editorialLink: "https://repositorio.uco.edu.co/items/faf7692d-0483-4cf8-9cc9-cc88179c5a19",
    accentColor: "border-[#D4CF7D]"
  },
  {
    id: "WORK-04",
    title: "Manual Agroindustrial: Una Zanahoria para Emprender",
    shortTitle: "Una Zanahoria para Emprender",
    category: "Manual Técnico UCO",
    description: "Guía práctica de emprendimiento, plan de negocio y hoja de ruta metodológica para iniciativas agroindustriales y de gomas pet funcionales.",
    badge: "Manual Académico UCO",
    icon: <Bookmark className="w-5 h-5 text-purple-400" />,
    coverImage: "/manual-una-zanahoria-para-emprender.png",
    gradient: "from-[#4A2545] to-[#251022]",
    editorialLink: "https://universidadcatolicadeorienteuco.publica.la/library/publication/una-zanahoria-para-emprender-gomas-pet-plan-de-negocio-y-hoja-de-ruta-para-iniciativas-agroindustriales",
    accentColor: "border-[#4A2545]"
  },
  {
    id: "WORK-05",
    title: "Manual de Mercados: Una Zanahoria para Exportar",
    shortTitle: "Una Zanahoria para Exportar",
    category: "Manual Técnico UCO",
    description: "Manual enfocado en estándares internacionales de calidad, requisitos fitosanitarios y canal de exportación de gomas funcionales para el mercado de mascotas.",
    badge: "Manual Académico UCO",
    icon: <Newspaper className="w-5 h-5 text-sky-400" />,
    coverImage: "/manual-una-zanahoria-para-exportar.png",
    gradient: "from-sky-600 to-sky-950",
    editorialLink: "https://universidadcatolicadeorienteuco.publica.la/library/publication/una-zanahoria-para-exportar-gomas-funcionales-para-el-mercado-pet-con-destino-a-belgica",
    accentColor: "border-sky-400"
  },
  {
    id: "WORK-06",
    title: "Manual de Red de Valor: Esta Zanahoria Pa' Quién?",
    shortTitle: "Esta Zanahoria Pa' Quién?",
    category: "Manual Técnico UCO",
    description: "Investigación sobre la gobernanza de la red de valor, esquemas asociativos y aprendizajes territoriales de transferencia tecnológica.",
    badge: "Manual Académico UCO",
    icon: <BookOpen className="w-5 h-5 text-teal-400" />,
    gradient: "from-teal-600 to-teal-950",
    editorialLink: "https://universidadcatolicadeorienteuco.publica.la/library/publication/esta-zanahoria-pa-quien-gobernanza-transferencia-y-aprendizajes-en-la-red-de-valor-de-la-zanahoria",
    accentColor: "border-teal-400"
  }
];

export default function ComplementaryProducts() {
  return (
    <section id="coleccion-obras" className="px-6 py-20 md:py-28 max-w-7xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Encabezado de la Sección */}
      <SectionHeader
        badgeText="Publicaciones"
        badgeColor="orange"
        title="Colección Antioquia Zana: Nuestras Obras Destacadas"
        subtitle="Publicaciones científicas, libros de investigación y manuales técnicos desarrollados en el marco del proyecto para el desarrollo agroindustrial del Oriente Antioqueño."
      />

      {/* Rejilla de Obras */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {worksList.map((work) => (
          <div
            key={work.id}
            className={`group p-6 rounded-3xl bg-[#0F1A15]/85 border ${work.accentColor}/30 backdrop-blur-md flex flex-col sm:flex-row gap-6 shadow-2xl hover:border-white/20 transition-all duration-300 relative overflow-hidden`}
          >
            {/* Lado Izquierdo: Representación 3D del Libro */}
            <div className="flex-shrink-0 flex items-center justify-center sm:justify-start">
              <a
                href={work.editorialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-28 h-40 group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                {/* Lomo / Spine shadow */}
                <div className="absolute top-0 bottom-0 left-0 w-3 bg-black/30 z-20 rounded-l-sm" />
                
                {work.coverImage ? (
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover rounded-r-md shadow-2xl transition-transform duration-500 origin-left group-hover:rotate-y-[-15deg] group-hover:translate-x-[-4px]"
                  />
                ) : (
                  <div className={`w-full h-full rounded-r-md bg-gradient-to-br ${work.gradient} p-2 flex flex-col justify-between border-l border-white/10 shadow-2xl transition-transform duration-500 origin-left group-hover:rotate-y-[-15deg] group-hover:translate-x-[-4px] text-white`}>
                    <div className="space-y-1">
                      <span className="text-[7px] uppercase tracking-wider font-semibold font-geist text-white/70 block">{work.category}</span>
                      <h4 className="font-sora text-[10px] leading-tight font-black mt-1 line-clamp-4">{work.shortTitle}</h4>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-1.5 mt-auto">
                      <span className="text-[6px] uppercase tracking-widest text-[#D4CF7D] font-bold font-geist">Zana Alianza</span>
                      <span className="text-[7px] font-bold">2026</span>
                    </div>
                  </div>
                )}
                {/* 3D Book Page Edge */}
                <div className="absolute top-[2px] bottom-[2px] right-[-3px] w-[5px] bg-[#EBE7D8] z-0 rounded-r-sm shadow-inner transition-transform duration-500 origin-left group-hover:rotate-y-[-15deg] group-hover:translate-x-[-3px]" />
              </a>
            </div>

            {/* Lado Derecho: Metadatos y Botones */}
            <div className="flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {work.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#D4CF7D] font-geist text-[10px] font-semibold">
                    {work.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#DE5A30] uppercase tracking-wider block font-bold">
                    {work.category}
                  </span>
                  <h3 className="font-sora text-base font-bold text-[#F0EDE1] leading-snug group-hover:text-emerald-300 transition-colors">
                    {work.title}
                  </h3>
                </div>

                <p className="text-xs text-[#F0EDE1]/75 font-light leading-relaxed line-clamp-3">
                  {work.description}
                </p>
              </div>

              <a
                href={work.editorialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#5E824A]/20 border border-[#5E824A]/40 text-[#D4CF7D] font-sora text-xs font-semibold hover:bg-[#DE5A30] hover:text-white hover:border-[#DE5A30] transition-all duration-300 shadow-md cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Ver en Editorial / Repositorio</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
