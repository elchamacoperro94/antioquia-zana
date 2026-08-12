import SectionHeader from '../components/SectionHeader';
import ActivityAccordion from '../components/ActivityAccordion';

export default function Activities() {
  return (
    <section id="actividades" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header alineado con la Observación 6 (Sin mención a fases ni cronograma) */}
      <SectionHeader
        badgeText="Metodología Operativa"
        title="14 Actividades por Objetivo Específico"
        badgeColor="purple"
        subtitle="Rutas tecnológicas del documento técnico oficial BPIN 2020000100192 ejecutadas por AGROSAVIA y la alianza institucional."
      />

      {/* Acordeón de Actividades por Objetivo */}
      <ActivityAccordion />
    </section>
  );
}
