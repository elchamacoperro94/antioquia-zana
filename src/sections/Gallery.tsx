import SectionHeader from '../components/SectionHeader';
import GalleryGrid from '../components/GalleryGrid';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="registro-fotografico" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText={t.hdr_gal_badge}
        badgeColor="orange"
        title={t.hdr_gal_title}
        subtitle={t.hdr_gal_subtitle}
      />

      {/* Interactive Masonry Gallery */}
      <GalleryGrid />
    </section>
  );
}
