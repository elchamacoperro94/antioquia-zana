import { Mail, ShieldCheck, User, Building2, BookOpen, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import CalligraphyDedication from '../components/CalligraphyDedication';

export default function Contact() {
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
      title: "Cartilla Didáctica: 'Esta Zanahoria Pa' Quién'",
      desc: 'Herramienta pedagógica e ilustrada sobre gobernanza, transferencia tecnológica y aprendizajes en la red de valor de la zanahoria.',
      link: 'https://universidadcatolicadeorienteuco.publica.la/library/publication/esta-zanahoria-pa-quien-gobernanza-transferencia-y-aprendizajes-en-la-red-de-valor-de-la-zanahoria',
      badge: 'Publicación UCO'
    },
    {
      type: 'Manual Agroindustrial & Recetario',
      title: "Manual de Emprendimiento: 'Una Zanahoria Para Emprender'",
      desc: 'Hoja de ruta comercial, planes de negocio y desarrollo conceptual para productos y derivados de la agroindustria hortícola.',
      link: 'https://universidadcatolicadeorienteuco.publica.la/library/publication/una-zanahoria-para-emprender-gomas-pet-plan-de-negocio-y-hoja-de-ruta-para-iniciativas-agroindustriales',
      badge: 'Publicación UCO'
    }
  ];

  return (
    <section id="contacto" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-16 border-t border-white/5">
      
      {/* ── Publicaciones Destacadas: Historieta y Recetario (Slide 25) ── */}
      <div className="space-y-8">
        <SectionHeader
          badgeText="Divulgación & Documentos Destacados"
          badgeColor="orange"
          title="Historieta Didáctica y Manual de Emprendimiento"
          subtitle="Publicaciones clave de divulgación para productores, emprendedores y la comunidad del Oriente Antioqueño."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredDocs.map((doc, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-[#5E824A]/30 bg-[#0F1A15]/90 hover:border-[#DE5A30] transition-all duration-300 shadow-xl flex flex-col justify-between gap-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#D4CF7D] uppercase tracking-widest block font-semibold">
                    {doc.type}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#DE5A30]/20 text-[#DE5A30] border border-[#DE5A30]/40">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="font-sora text-xl font-bold text-[#F0EDE1] group-hover:text-[#DE5A30] transition-colors leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs text-[#F0EDE1]/70 font-light leading-relaxed">
                  {doc.desc}
                </p>
              </div>

              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#5E824A]/20 hover:bg-[#DE5A30] border border-[#5E824A]/40 hover:border-[#DE5A30] text-[#D4CF7D] hover:text-white text-xs font-sora font-semibold transition-all duration-300 shadow-md group-hover:shadow-[#DE5A30]/20"
              >
                <BookOpen className="w-4 h-4" />
                <span>Leer Publicación Oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ── Canales Institucionales de Contacto & Ficha BPIN ── */}
      <div className="space-y-8">
        <SectionHeader
          badgeText="Contacto Oficial"
          badgeColor="orange"
          title="Canales Institucionales de Contacto"
          subtitle="Comuníquese directamente con la dirección del proyecto o la línea de atención oficial de AGROSAVIA."
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
                  Resumen Ficha Técnica BPIN
                </h3>

                <div className="flex flex-col gap-3 font-geist text-xs">
                  {[
                    { key: 'Proyecto BPIN', val: '2020000100192' },
                    { key: 'NIT AGROSAVIA', val: '800.194.600-3' },
                    { key: 'Fondo de Financiación', val: 'Regalías SGR — Fondo CTI' },
                    { key: 'Vigencia del Proyecto', val: '2022 — 2026' },
                    { key: 'Ejecutor Principal', val: 'AGROSAVIA Centro de Investigación La Selva' },
                    { key: 'Territorio de Cobertura', val: 'El Santuario, Marinilla, Rionegro y San Pedro de los Milagros' }
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
                  Enviar Correo Electrónico Oficial
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
