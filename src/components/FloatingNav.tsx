/**
 * FloatingNav.tsx
 *
 * App-like floating navigation menu fixed at the bottom center of the viewport.
 * Style:
 * — backdrop-blur-xl
 * — bg-[#0F1A15]/85
 * — rounded-full
 * — border border-[#5E824A]/35
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Target,
  ListTodo,
  Beaker,
  BarChart3,
  GraduationCap,
  ImageIcon,
  Handshake,
  Mail,
  Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function FloatingNav({
  activeTab = 'inicio',
  onSelectTab,
}: {
  activeTab?: string;
  onSelectTab?: (id: string) => void;
}) {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { id: 'inicio', label: t.nav_inicio, icon: Home },
    { id: 'objetivos', label: t.nav_objetivos, icon: Target },
    { id: 'actividades', label: t.nav_actividades, icon: ListTodo },
    { id: 'productos', label: t.nav_productos, icon: Beaker },
    { id: 'resultados', label: t.nav_resultados, icon: BarChart3 },
    { id: 'estudiantes', label: t.nav_estudiantes, icon: GraduationCap },
    { id: 'galeria', label: t.nav_galeria, icon: ImageIcon },
    { id: 'aliados', label: t.nav_aliados, icon: Handshake },
    { id: 'contacto', label: t.nav_contacto, icon: Mail },
  ];

  const handleSelect = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.location.hash = id;
    if (onSelectTab) {
      onSelectTab(id);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[96vw] px-2">
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        className="flex items-center gap-1 px-3 py-2 rounded-full
          backdrop-blur-xl bg-[#0F1A15]/90
          border border-[#5E824A]/40
          shadow-[0_12px_40px_rgba(0,0,0,0.7)] overflow-x-auto custom-scrollbar"
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <React.Fragment key={item.id}>
              <button
                onClick={() => handleSelect(item.id)}
                title={item.label}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-geist transition-all duration-300 cursor-pointer shrink-0 ${
                  isActive
                    ? 'text-[#F0EDE1] font-semibold'
                    : 'text-[#F0EDE1]/60 hover:text-[#F0EDE1] hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFloatingPill"
                    className="absolute inset-0 bg-[#DE5A30] rounded-full -z-10 shadow-[0_0_16px_rgba(222,90,48,0.6)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4 shrink-0" />
                <span className="text-[11px] whitespace-nowrap">{item.label}</span>
              </button>

              {/* Botón Selector de Idioma al lado del Inicio */}
              {index === 0 && (
                <button
                  onClick={toggleLanguage}
                  title={t.lang_switch_tooltip}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all duration-300 cursor-pointer shrink-0 border border-[#5E824A]/50 bg-[#5E824A]/20 hover:bg-[#5E824A]/40 hover:border-[#D4CF7D] text-[#D4CF7D] hover:scale-105 active:scale-95 shadow-sm"
                >
                  <Globe className="w-3.5 h-3.5 text-[#D4CF7D] animate-pulse" />
                  <span>{language === 'es' ? '🇪🇸 ES' : '🇬🇧 EN'}</span>
                </button>
              )}
            </React.Fragment>
          );
        })}
      </motion.nav>
    </div>
  );
}
