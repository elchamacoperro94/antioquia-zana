import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, MapPin, Calendar, Plus } from 'lucide-react';
import { galleryPhotos } from '../data/galleryPhotos';
import GalleryLightbox from './GalleryLightbox';
import { useLanguage } from '../context/LanguageContext';

export default function GalleryGrid() {
  const { language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState<number>(16);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Paginated photos
  const paginatedPhotos = useMemo(() => {
    return galleryPhotos.slice(0, visibleCount);
  }, [visibleCount]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, galleryPhotos.length));
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Stats Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-obsidian-850 border border-white/5 p-4 rounded-2xl gap-3 text-xs md:text-sm font-mono text-slate-400">
        <div>
          <span className="text-white font-bold">{galleryPhotos.length}</span> {language === 'en' ? 'Authentic photographs from the Antioquia Zana project' : 'Fotografías reales del proyecto Antioquia Zana'}
        </div>
        <div>
          {language === 'en' ? 'Showing ' : 'Mostrando '}
          <span className="text-carrot-orange font-bold">{paginatedPhotos.length}</span>
          {language === 'en' ? ' of ' : ' de '}
          <span className="text-white font-bold">{galleryPhotos.length}</span>
        </div>
      </div>

      {/* Masonry Image Grid */}
      <div className="relative">
        {galleryPhotos.length === 0 ? (
          <div className="text-center py-20 text-slate-500 flex flex-col items-center gap-3">
            <ImageIcon className="h-10 w-10 text-slate-600" />
            <p>{language === 'en' ? 'No photographic records found.' : 'No se encontraron registros fotográficos.'}</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {paginatedPhotos.map((photo, idx) => {
                const globalIndex = idx;
                return (
                  <motion.div
                    key={photo.filename}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="break-inside-avoid relative rounded-2xl overflow-hidden border border-white/5 bg-obsidian-800/40 cursor-pointer group shadow-sm"
                  >
                    {/* Image */}
                    <img
                      src={`/photos-proyecto/${photo.filename}`}
                      alt={photo.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end gap-2 rounded-2xl">
                      <span className="text-[10px] font-mono text-carrot-orange uppercase tracking-wider block">
                        {photo.category}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {photo.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 font-mono line-clamp-1">
                        {photo.activity}
                      </p>

                      <div className="flex justify-between items-center border-t border-white/10 pt-2 mt-1 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-emerald-400 shrink-0" />
                          {photo.location.split(',')[0]}
                        </span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="h-3 w-3 text-amber-400 shrink-0" />
                          {photo.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {galleryPhotos.length > visibleCount && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="py-3 px-6 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            <span>{language === 'en' ? `Load More Photos (${galleryPhotos.length - visibleCount} remaining)` : `Cargar más fotografías (${galleryPhotos.length - visibleCount} restantes)`}</span>
          </button>
        </div>
      )}

      {/* Lightbox Rendering */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          photos={galleryPhotos}
          currentIndex={lightboxIndex}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </div>
  );
}
