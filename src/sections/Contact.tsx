import { Mail, Phone, MapPin, Globe, User, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

export default function Contact() {
  const contactCards = [
    {
      label: 'Correo Electrónico',
      value: 'jhenao@agrosavia.co',
      href: 'mailto:jhenao@agrosavia.co?subject=Contacto%20Proyecto%20Antioquia%20Zana',
      icon: <Mail className="h-5 w-5 text-carrot-orange" />
    },
    {
      label: 'Teléfono de Contacto',
      value: '+57 316 290 3251',
      href: 'tel:+573162903251',
      icon: <Phone className="h-5 w-5 text-emerald-400" />
    },
    {
      label: 'Ubicación Centro de Control',
      value: 'El Santuario, Marinilla, Rionegro, Antioquia',
      href: 'https://maps.app.goo.gl/uX3QEq26xDr5tL8B8', // Placeholder Google Maps link
      icon: <MapPin className="h-5 w-5 text-blue-400" />
    },
    {
      label: 'Sitio Web Corporativo',
      value: 'www.agrosavia.co',
      href: 'https://www.agrosavia.co',
      icon: <Globe className="h-5 w-5 text-amber-400" />
    }
  ];

  return (
    <section id="contacto" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText="Contacto"
        badgeColor="orange"
        title="Información de Contacto del Proyecto"
        subtitle="Comuníquese con el equipo de investigación o solicite información sobre licenciamientos y transferencia tecnológica."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Panel: Contact Links & IP Credentials */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* 4 Clickable Contact Rows */}
          <div className="flex flex-col gap-4">
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block group"
              >
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-obsidian-900/30 hover:bg-obsidian-900/60 hover:border-white/10 transition-all duration-300">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                      {card.label}
                    </span>
                    <span className="text-sm font-semibold text-white mt-0.5 block group-hover:text-carrot-orange transition-colors">
                      {card.value}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Principal Investigator Card */}
          <GlassCard hoverEffect={true} className="border-white/10 bg-gradient-to-br from-white/5 to-transparent flex gap-4 p-5">
            <div className="h-12 w-12 rounded-xl bg-carrot-orange/10 border border-carrot-orange/30 text-carrot-orange flex items-center justify-center shrink-0">
              <User className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-carrot-orange tracking-widest uppercase block">
                Investigador Principal
              </span>
              <h4 className="text-lg font-bold text-white mt-1 leading-snug">
                Juan Camilo Henao Rojas
              </h4>
              <p className="text-xs text-slate-400 mt-1 font-light leading-normal">
                M.Sc. Food Engineering, Biotechnology emphasis <br />
                Centro de Investigación La Selva
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Right Panel: Project Summary Table & CTA */}
        <div className="lg:col-span-7">
          <GlassCard hoverEffect={false} className="h-full flex flex-col justify-between p-8 border-white/10 relative">
            <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
            
            <div className="z-10">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-4 mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                Resumen de Ficha Técnica
              </h3>

              {/* Data Table */}
              <div className="flex flex-col gap-3 font-mono text-xs md:text-sm">
                {[
                  { key: 'BPIN', val: '2020000100192' },
                  { key: 'NIT', val: '8001946003' },
                  { key: 'Cadena Productiva', val: 'Hortalizas (Vegetales)' },
                  { key: 'Fondo de Financiación', val: 'Regalías SGR — Fondo CTI' },
                  { key: 'Vigencia de Proyecto', val: '2022 — 2026' },
                  { key: 'Ejecutor Técnico', val: 'AGROSAVIA Centro La Selva' },
                  { key: 'Área del Cultivo', val: 'Oriente Antioqueño' }
                ].map((row, idx) => (
                  <div 
                    key={idx}
                    className="flex justify-between items-center py-2.5 border-b border-white/5 gap-4"
                  >
                    <span className="text-slate-500">{row.key}</span>
                    <span className="text-white text-right font-medium">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="z-10 mt-8">
              <a
                href="mailto:jhenao@agrosavia.co?subject=Consulta%20Proyecto%20Antioquia%20Zana"
                className="w-full py-4 px-6 rounded-xl font-bold text-center text-sm bg-gradient-to-r from-carrot-orange to-amber-gold hover:from-carrot-orange-hover hover:to-amber-gold/90 text-white transition-all duration-300 shadow-lg shadow-carrot-orange/10 block focus:outline-none"
              >
                Contactar al Proyecto
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
