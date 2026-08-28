import SectionHeader from '../components/SectionHeader';
import ResultsDashboard from '../components/ResultsDashboard';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Results() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="resultados" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText={t.hdr_res_badge}
        badgeColor="green"
        title={t.hdr_res_title}
        subtitle={t.hdr_res_subtitle}
      />

      {/* Results Dashboard */}
      <ResultsDashboard />
    </section>
  );
}
