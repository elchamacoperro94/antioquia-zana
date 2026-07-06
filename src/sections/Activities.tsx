import SectionHeader from '../components/SectionHeader';
import ActivityAccordion from '../components/ActivityAccordion';

export default function Activities() {
  return (
    <section id="actividades" className="px-6 py-20 md:py-28 max-w-5xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText="Actividades"
        title="14 Actividades en 4 Fases"
        badgeColor="purple"
        subtitle="Mapeo detallado de las actividades e hitos ejecutados a lo largo del cronograma de investigación."
      />

      {/* Accordion List */}
      <ActivityAccordion />
    </section>
  );
}
