import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Calendar, MapPin, Tag } from 'lucide-react';
import type { PhotoEntry } from '../data/galleryPhotos';

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoEntry[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNavigate
}: GalleryLightboxProps) {
  const activePhoto = photos[currentIndex];

  // Disable background scrolling when lightbox is open
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

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + photos.length) % photos.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, photos, onClose, onNavigate]);

  if (!activePhoto) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm"
          />

          {/* Lightbox Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full h-full max-w-6xl bg-obsidian-950/40 md:bg-obsidian-900 border-none md:border md:border-white/10 rounded-none md:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
          >
            {/* Close button on desktop */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-30 text-slate-400 hover:text-white p-2 rounded-full bg-black/40 md:hover:bg-white/5 transition-colors focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left side: Image Viewport */}
            <div className="relative flex-grow md:w-3/5 h-2/3 md:h-full bg-black flex items-center justify-center group select-none">
              <img
                src={`/photos-proyecto/${activePhoto.filename}`}
                alt={activePhoto.title}
                className="max-w-full max-h-full object-contain"
                loading="eager"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((currentIndex - 1 + photos.length) % photos.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/5 transition-colors focus:outline-none"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((currentIndex + 1) % photos.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/5 transition-colors focus:outline-none"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 text-xs font-mono text-slate-300">
                {currentIndex + 1} / {photos.length}
              </div>
            </div>

            {/* Right side: Information Sidebar */}
            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-obsidian-900 border-t md:border-t-0 md:border-l border-white/10 h-1/3 md:h-full overflow-y-auto">
              <div className="flex flex-col gap-5">
                <div>
                  <span className="text-xs font-mono text-carrot-orange tracking-widest uppercase block">
                    {activePhoto.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1 leading-snug">
                    {activePhoto.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 border-y border-white/5 py-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Tag className="h-4 w-4 text-carrot-orange shrink-0" />
                    <span className="font-mono text-xs">{activePhoto.activity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{activePhoto.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Calendar className="h-4 w-4 text-amber-400 shrink-0" />
                    <span className="font-mono text-xs">{activePhoto.date}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 tracking-wider uppercase mb-1">
                    Descripción Técnica
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {activePhoto.description}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 md:mt-8 pt-4 border-t border-white/5">
                <a
                  href={`/photos-proyecto/${activePhoto.filename}`}
                  download={activePhoto.filename}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-carrot-orange hover:bg-carrot-orange-hover text-white transition-all flex items-center justify-center gap-2 focus:outline-none"
                >
                  <Download className="h-4 w-4" />
                  Descargar Fotografía
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
