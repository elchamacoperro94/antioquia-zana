import { Mail, ShieldCheck, User, Building2, BookOpen, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import CalligraphyDedication from '../components/CalligraphyDedication';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const officialEmails = [
    {
      label: 'Investigador Principal del Proyecto',
      name: 'Juan Camilo Henao Rojas',
      role: 'Investigador M.Sc. AGROSAVIA Centro de Investigación La Selva',
      email: 'jhenao@agrosavia.co',
      href: 'mailto:jhenao@agrosavia.co?subject=Consulta%20Proyecto%20Antioquia%20Zana',
      icon: <User className="h-6 w-6 text-[#DE5A30]" />
    },
    {
      label: 'Atención al Cliente e Información Institucional',
      name: 'AGROSAVIA Atención al Cliente',
      role: 'Corporación Colombiana de Investigación Agropecuaria',
      email: 'atencionalcliente@agrosavia.co',
      href: 'mailto:atencionalcliente@agrosavia.co?subject=Consulta%20Proyecto%20Antioquia%20Zana',
      icon: <Building2 className="h-6 w-6 text-emerald-400" />
    }
  ];

  const featuredDocs = [
    {
      type: 'Historieta & Cartilla Ilustrada',
      title: 'La Huerta del Saber: El superpoder de la diferencia',
      desc: 'Cartilla didáctica e ilustrada (N° 3) sobre la ruta de innovación, agrobiodiversidad y aprendizajes territoriales en la cadena de valor de la zanahoria.',
      link: 'https://editorial.agrosavia.co/index.php/publicaciones/catalog/book/541',
      badge: 'Editorial AGROSAVIA',
      coverImage: '/la-huerta-del-saber-portada.png'
    },
    {
      type: 'Libro de Investigación & Bioeconomía',
      title: '¿Esta Zanahoria Pa\' qué? Rutas de innovación para la zanahoria',
      desc: 'Obra científica que profundiza en las rutas de innovación para la zanahoria y la conexión entre la bioeconomía y la agroindustria en el Oriente antioqueño.',
      link: 'https://repositorio.uco.edu.co/items/faf7692d-0483-4cf8-9cc9-cc88179c5a19',
      badge: 'Repositorio UCO',
      coverImage: '/esta-zanahoria-pa-que-portada.jpg'
    }
  ];

  return (
    <section id="contacto" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-16 border-t border-white/5">
      
      {/* ── Publicaciones Destacadas: Historieta y Recetario (Slide 25) ── */}
      <div className="space-y-8">
        <SectionHeader
          badgeText="Divulgación & Material Destacado"
          badgeColor="orange"
          title="Historieta Ilustrada y Recetario Agroindustrial"
          subtitle="Publicaciones principales de divulgación científica y gastronómica del proyecto Antioquia Zana."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredDocs.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-[#5E824A]/30 bg-[#0F1A15]/90 hover:border-[#DE5A30] transition-all duration-300 shadow-xl flex flex-col sm:flex-row gap-6 group relative overflow-hidden"
            >
              {/* Lado Izquierdo: Representación 3D de la Carátula */}
              <div className="flex-shrink-0 flex items-center justify-center sm:justify-start">
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-28 h-40 group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  style={{ perspective: '1000px' }}
                >
                  <div className="absolute top-0 bottom-0 left-0 w-3 bg-black/30 z-20 rounded-l-sm" />
                  <img
                    src={doc.coverImage}
                    alt={doc.title}
                    className="w-full h-full object-cover rounded-r-md shadow-2xl transition-transform duration-500 origin-left group-hover:rotate-y-[-15deg] group-hover:translate-x-[-4px]"
                  />
                  <div className="absolute top-[2px] bottom-[2px] right-[-3px] w-[5px] bg-[#EBE7D8] z-0 rounded-r-sm shadow-inner transition-transform duration-500 origin-left group-hover:rotate-y-[-15deg] group-hover:translate-x-[-3px]" />
                </a>
              </div>

              {/* Lado Derecho: Metadatos y Botón */}
              <div className="flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[#D4CF7D] uppercase tracking-widest block font-semibold">
                      {doc.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#DE5A30]/20 text-[#DE5A30] border border-[#DE5A30]/40">
                      {doc.badge}
                    </span>
                  </div>

                  <h3 className="font-sora text-sm sm:text-base font-bold text-[#F0EDE1] group-hover:text-[#DE5A30] transition-colors leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-[#F0EDE1]/70 font-light leading-relaxed line-clamp-3">
                    {doc.desc}
                  </p>
                </div>

                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#5E824A]/20 hover:bg-[#DE5A30] border border-[#5E824A]/40 hover:border-[#DE5A30] text-[#D4CF7D] hover:text-white text-xs font-sora font-semibold transition-all duration-300 shadow-md group-hover:shadow-[#DE5A30]/20 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Leer Publicación Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Canales Institucionales de Contacto & Ficha BPIN ── */}
      <div className="space-y-8">
        <SectionHeader
          badgeText={t.hdr_con_badge}
          badgeColor="orange"
          title={t.hdr_con_title}
          subtitle={t.hdr_con_subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Panel Izquierdo: Correos Oficiales */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {officialEmails.map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="block group"
              >
                <div className="p-6 rounded-3xl border border-[#5E824A]/30 bg-[#0F1A15]/90 hover:bg-[#15261F] hover:border-[#DE5A30] transition-all duration-300 shadow-xl flex items-start gap-5">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <span className="text-[10px] font-mono text-[#D4CF7D] uppercase tracking-widest block font-semibold">
                      {card.label}
                    </span>
                    <h4 className="font-sora text-lg font-bold text-[#F0EDE1] group-hover:text-[#DE5A30] transition-colors leading-snug">
                      {card.name}
                    </h4>
                    <p className="text-xs text-[#F0EDE1]/70 font-light">
                      {card.role}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#DE5A30] font-bold">
                      <Mail className="w-3.5 h-3.5" />
                      <span className="underline decoration-[#DE5A30]/40 underline-offset-4">{card.email}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Panel Derecho: Ficha Técnica Oficial del Proyecto */}
          <div className="lg:col-span-6">
            <GlassCard hoverEffect={false} className="h-full flex flex-col justify-between p-8 border-[#5E824A]/30 bg-[#0F1A15]/90 relative shadow-2xl">
              <div>
                <h3 className="font-sora text-lg font-bold text-[#F0EDE1] border-b border-[#5E824A]/20 pb-4 mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  {t.con_bpin_title}
                </h3>

                <div className="flex flex-col gap-3 font-geist text-xs">
                  {[
                    { key: language === 'en' ? 'BPIN Project' : 'Proyecto BPIN', val: '2020000100192' },
                    { key: language === 'en' ? 'AGROSAVIA Tax ID' : 'NIT AGROSAVIA', val: '800.194.600-3' },
                    { key: language === 'en' ? 'Funding Fund' : 'Fondo de Financiación', val: language === 'en' ? 'Royalties SGR — CTI Fund' : 'Regalías SGR — Fondo CTI' },
                    { key: language === 'en' ? 'Project Term' : 'Vigencia del Proyecto', val: '2022 — 2026' },
                    { key: language === 'en' ? 'Main Executor' : 'Ejecutor Principal', val: 'AGROSAVIA Centro de Investigación La Selva' },
                    { key: language === 'en' ? 'Coverage Area' : 'Territorio de Cobertura', val: 'El Santuario, Marinilla, Rionegro y San Pedro de los Milagros' }
                  ].map((row, idx) => (
                    <div 
                      key={idx}
                      className="flex justify-between items-center py-2 border-b border-[#5E824A]/10 gap-4"
                    >
                      <span className="text-[#F0EDE1]/60 font-light">{row.key}</span>
                      <span className="text-[#F0EDE1] font-semibold text-right">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="mailto:jhenao@agrosavia.co?subject=Consulta%20Proyecto%20Antioquia%20Zana"
                  className="w-full py-4 px-6 rounded-2xl font-sora font-semibold text-center text-xs bg-[#DE5A30] hover:bg-[#DE5A30]/90 text-white transition-all duration-300 shadow-lg shadow-[#DE5A30]/20 block cursor-pointer"
                >
                  {t.con_btn_email}
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* ── Animación Caligráfica de Agradecimientos (Slide 25) ── */}
      <CalligraphyDedication />

    </section>
  );
}
