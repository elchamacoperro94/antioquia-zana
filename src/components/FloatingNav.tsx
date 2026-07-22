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

import { motion } from 'framer-motion';
import {
  Home,
  Info,
  Target,
  ListTodo,
  Beaker,
  BarChart3,
  GraduationCap,
  ImageIcon,
  Handshake,
  Mail,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'proyecto', label: 'Proyecto', icon: Info },
  { id: 'objetivos', label: 'Objetivos', icon: Target },
  { id: 'actividades', label: 'Actividades', icon: ListTodo },
  { id: 'productos', label: 'Productos', icon: Beaker },
  { id: 'resultados', label: 'Resultados', icon: BarChart3 },
  { id: 'estudiantes', label: 'Estudiantes', icon: GraduationCap },
  { id: 'galeria', label: 'Galería', icon: ImageIcon },
  { id: 'aliados', label: 'Aliados', icon: Handshake },
  { id: 'contacto', label: 'Contacto', icon: Mail },
];

export default function FloatingNav({
  activeTab = 'inicio',
  onSelectTab,
}: {
  activeTab?: string;
  onSelectTab?: (id: string) => void;
}) {
  const handleSelect = (id: string) => {
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
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
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
          );
        })}
      </motion.nav>
    </div>
  );
}
