import { ArrowUpCircle, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre el Proyecto', href: '#sobre-el-proyecto' },
    { label: 'Objetivos', href: '#objetivos' },
    { label: 'Actividades', href: '#actividades' },
    { label: 'Prototipos', href: '#prototipos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Registro Fotográfico', href: '#registro-fotografico' },
    { label: 'Aliados', href: '#aliados' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const entityLinks = [
    { label: 'AGROSAVIA', href: 'https://www.agrosavia.co' },
    { label: 'Universidad de Antioquia', href: 'https://www.udea.edu.co' },
    { label: 'Universidad Católica de Oriente', href: 'https://www.uco.edu.co' },
    { label: 'Universidad Nacional de Colombia', href: 'https://unal.edu.co' }
  ];

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 px-6 py-12 md:py-16 text-slate-400 font-light mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Logo */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-carrot-orange to-amber-gold flex items-center justify-center text-white font-extrabold text-sm shadow-md">
              Z
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
              Antioquia Zana
            </span>
          </div>
          <span className="text-[10px] font-mono text-carrot-orange uppercase tracking-wider block">
            Proyecto BPIN {2020000100192}
          </span>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light mt-2">
            Fortaleciendo la cadena productiva de la zanahoria mediante el desarrollo de prototipos agroindustriales y cosmecéuticos, y la valorización de excedentes en el Oriente Antioqueño.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-mono text-white uppercase tracking-widest font-bold">
            Navegación
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
            Entidades Alianza
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
            Soporte y Financiación
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Financiado por el Fondo de Ciencia, Tecnología e Innovación (CTI) del Sistema General de Regalías (SGR) de la República de Colombia.
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
          <span>&copy; {2026} Antioquia Zana. Todos los derechos reservados.</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
          <span>Hecho con</span>
          <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
          <span>para el Oriente Antioqueño</span>
        </div>
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-carrot-orange transition-colors focus:outline-none"
          >
            <span>Volver al inicio</span>
            <ArrowUpCircle className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
