import SectionHeader from '../components/SectionHeader';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <section id="registro-fotografico" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText="Registro Fotográfico"
        badgeColor="orange"
        title="Apropiación Social del Conocimiento"
        subtitle="Galería fotográfica interactiva del trabajo de campo, socialización con productores y ensayos de laboratorio."
      />

      {/* Interactive Masonry Gallery */}
      <GalleryGrid />
    </section>
  );
}
