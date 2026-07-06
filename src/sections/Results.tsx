import SectionHeader from '../components/SectionHeader';
import ResultsDashboard from '../components/ResultsDashboard';

export default function Results() {
  return (
    <section id="resultados" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText="Resultados"
        badgeColor="green"
        title="Principales Resultados Científicos"
        subtitle="Métricas consolidadas de análisis fisicoquímicos, publicaciones e impacto académico logrados por la alianza."
      />

      {/* Results Dashboard */}
      <ResultsDashboard />
    </section>
  );
}
