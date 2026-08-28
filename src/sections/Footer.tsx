import { ArrowUpCircle, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav_inicio, href: '#inicio' },
    { label: language === 'en' ? 'Project' : 'Proyecto', href: '#sobre-el-proyecto' },
    { label: t.nav_objetivos, href: '#objetivos' },
    { label: t.nav_actividades, href: '#actividades' },
    { label: t.nav_productos, href: '#prototipos' },
    { label: t.nav_resultados, href: '#resultados' },
    { label: t.nav_galeria, href: '#registro-fotografico' },
    { label: t.nav_aliados, href: '#aliados' },
    { label: t.nav_contacto, href: '#contacto' }
  ];

  const entityLinks = [
    { label: 'AGROSAVIA', href: 'https://www.agrosavia.co' },
    { label: 'Fundación INTAL', href: 'http://www.fundacionintal.org' },
    { label: 'Universidad de Antioquia', href: 'https://www.udea.edu.co' },
    { label: 'Universidad Católica de Oriente', href: 'https://www.uco.edu.co' },
    { label: 'Universidad Nacional de Colombia', href: 'https://unal.edu.co' },
    { label: 'Kavitec S.A.S.', href: 'https://kavitec.co' },
    { label: 'Gobernación de Antioquia', href: 'https://www.antioquia.gov.co' },
    { label: 'Alcaldía de Marinilla', href: 'https://www.marinilla-antioquia.gov.co' },
    { label: 'Alcaldía de El Santuario', href: 'https://www.elsantuario-antioquia.gov.co' }
  ];

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 px-6 pt-12 pb-24 md:pt-16 md:pb-32 text-slate-400 font-light mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Logo */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/logos/logo-principal.png" 
              alt="Antioquia Zana" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <span className="text-[10px] font-mono text-carrot-orange uppercase tracking-wider block">
            {language === 'en' ? 'BPIN Project 2020000100192' : 'Proyecto BPIN 2020000100192'}
          </span>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light mt-2">
            {t.foot_desc}
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-mono text-white uppercase tracking-widest font-bold">
            {language === 'en' ? 'Navigation' : 'Navegación'}
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs md:text-sm">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-carrot-orange hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Partner Entities */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-mono text-white uppercase tracking-widest font-bold">
            {language === 'en' ? 'Alliance Entities' : 'Entidades Alianza'}
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
            {entityLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-carrot-orange hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: SGR / CTI Badges display */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-mono text-white uppercase tracking-widest font-bold">
            {language === 'en' ? 'Support & Funding' : 'Soporte y Financiación'}
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            {language === 'en' 
              ? 'Funded by the Science, Technology, and Innovation (CTI) Fund of the General Royalty System (SGR) of the Republic of Colombia.'
              : 'Financiado por el Fondo de Ciencia, Tecnología e Innovación (CTI) del Sistema General de Regalías (SGR) de la República de Colombia.'
            }
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2.5 py-1 rounded border border-white/5 bg-white/5 text-[9px] font-mono text-slate-300">
              Regalías SGR
            </span>
            <span className="px-2.5 py-1 rounded border border-white/5 bg-white/5 text-[9px] font-mono text-slate-300">
              Minciencias
            </span>
            <span className="px-2.5 py-1 rounded border border-white/5 bg-white/5 text-[9px] font-mono text-slate-300">
              Fondo CTI
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <div>
          <span>&copy; {2026} Antioquia Zana. {t.foot_rights}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
          <span>{language === 'en' ? 'Made with' : 'Hecho con'}</span>
          <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
          <span>{language === 'en' ? 'for Eastern Antioquia' : 'para el Oriente Antioqueño'}</span>
        </div>
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-carrot-orange transition-colors focus:outline-none"
          >
            <span>{language === 'en' ? 'Back to top' : 'Volver al inicio'}</span>
            <ArrowUpCircle className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
