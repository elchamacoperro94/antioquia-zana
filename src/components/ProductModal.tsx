import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Beaker, Apple, Award, ShieldAlert, Sparkles, FileText } from 'lucide-react';
import type { ProductEntry } from '../data/projectData';
import Badge from './Badge';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductEntry | null;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!product) return null;

  const accentColorMap = {
    orange: 'from-carrot-orange/20 via-carrot-orange/5 to-transparent border-carrot-orange/30 text-carrot-orange',
    purple: 'from-purple-500/20 via-purple-500/5 to-transparent border-purple-500/30 text-purple-400',
    green: 'from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-400',
  };

  const getProductIcon = () => {
    switch (product.accent) {
      case 'orange':
        return <Apple className="h-12 w-12" />;
      case 'purple':
        return <Beaker className="h-12 w-12" />;
      case 'green':
        return <Sparkles className="h-12 w-12" />;
      default:
        return <Award className="h-12 w-12" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-4xl bg-obsidian-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
          >
            {/* Left side: Visual Area & Category */}
            <div className={`w-full md:w-2/5 p-8 flex flex-col justify-between relative bg-gradient-to-b ${accentColorMap[product.accent]}`}>
              {/* Scientific grid mesh */}
              <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
              
              <button 
                onClick={onClose}
                className="absolute top-4 left-4 md:hidden text-slate-400 hover:text-white p-1 rounded-full bg-white/5"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center justify-center flex-grow py-12 md:py-0">
                <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 mb-4 shadow-inner flex items-center justify-center`}>
                  {getProductIcon()}
                </div>
                <Badge text={product.tag} color={product.accent === 'green' ? 'green' : product.accent === 'purple' ? 'purple' : 'orange'} />
                <span className="text-xs font-mono text-slate-400 tracking-wider mt-2 uppercase">
                  {product.type}
                </span>
              </div>

              <div className="text-center md:text-left border-t border-white/5 pt-4">
                <span className="text-xs font-mono text-slate-500 block">ID PROTOTIPO</span>
                <span className="text-sm font-mono text-white font-bold">{product.id.toUpperCase()}</span>
              </div>
            </div>

            {/* Right side: Product Metadata details */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-between bg-obsidian-900">
              <button
                onClick={onClose}
                className="hidden md:flex absolute top-6 right-6 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/5 transition-colors focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-3xl font-extrabold text-white leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{product.status}</p>
                </div>

                <div className="flex flex-col gap-1 border-l-2 border-carrot-orange pl-4 py-1">
                  <span className="text-xs font-mono tracking-wider text-slate-500 uppercase">
                    Tecnología de Proceso
                  </span>
                  <p className="text-sm text-white font-medium">{product.process}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 tracking-wider uppercase mb-2">
                    Formulación Científica
                  </h4>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm leading-relaxed text-slate-300 font-light">
                    {product.formulation}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 tracking-wider uppercase mb-2">
                    Descripción del Prototipo
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 tracking-wider uppercase mb-3">
                    Especificaciones Técnicas
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <ShieldAlert className="h-4 w-4 text-carrot-orange mt-0.5 shrink-0" />
                        <span className="font-light leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-white/5">
                <a
                  href={`mailto:jhenao@agrosavia.co?subject=Consulta sobre Prototipo Antioquia Zana: ${product.name}`}
                  className="flex-grow py-3 px-6 rounded-xl font-semibold text-center text-sm bg-carrot-orange hover:bg-carrot-orange-hover text-white transition-all shadow-md shadow-carrot-orange/10 focus:outline-none"
                >
                  Solicitar Información
                </a>
                <button
                  onClick={() => alert(`Descargando Ficha Técnica de ${product.name}...`)}
                  className="py-3 px-4 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Ficha Técnica</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
