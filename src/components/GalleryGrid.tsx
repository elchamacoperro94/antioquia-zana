import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, MapPin, Calendar, Plus } from 'lucide-react';
import { galleryPhotos } from '../data/galleryPhotos';
import GalleryLightbox from './GalleryLightbox';

const categories = [
  'Todas',
  'ACT-01: Investigación Agronómica',
  'ACT-05: Prototipado Alimentario',
  'ACT-06: Pruebas Sensoriales',
  'ACT-10: Escalamiento Cosmético',
  'ACT-13: Apropiación Social'
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter photos based on category
  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'Todas') return galleryPhotos;
    return galleryPhotos.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Paginated photos
  const paginatedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(12); // Reset page count on filter change
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filteredPhotos.length));
  };

  const getUIName = (cat: string) => {
    return cat;
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-carrot-orange text-white shadow-md shadow-carrot-orange/10'
                : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            {getUIName(cat)}
          </button>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-obsidian-850 border border-white/5 p-4 rounded-2xl gap-3 text-xs md:text-sm font-mono text-slate-400">
        <div>
          <span className="text-white font-bold">{galleryPhotos.length}</span> Fotografías reales | Organizadas por <span className="text-white font-bold">5</span> Actividades clave de resultados
        </div>
        <div>
          Mostrando <span className="text-carrot-orange font-bold">{filteredPhotos.length}</span> resultados
        </div>
      </div>

      {/* Masonry Image Grid */}
      <div className="relative">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 text-slate-500 flex flex-col items-center gap-3">
            <ImageIcon className="h-10 w-10 text-slate-600" />
            <p>No se encontraron registros fotográficos en esta categoría.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {paginatedPhotos.map((photo, idx) => {
                // Find global index in filtered list for lightbox
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
      {filteredPhotos.length > visibleCount && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="py-3 px-6 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Cargar Más Fotografías
          </button>
        </div>
      )}

      {/* Lightbox Rendering */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          photos={filteredPhotos}
          currentIndex={lightboxIndex}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </div>
  );
}
