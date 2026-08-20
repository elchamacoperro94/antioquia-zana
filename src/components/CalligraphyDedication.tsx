import { motion } from 'framer-motion';
import { Sparkles, Heart, Award } from 'lucide-react';

const paragraphs = [
  "El proyecto Antioquia Zana fue posible gracias al apoyo del Fondo de Ciencia, Tecnología e Innovación del Sistema General de Regalías (SGR) de Colombia y del Ministerio de Ciencia, Tecnología e Innovación de la República de Colombia, en su calidad de Secretaría Técnica del OCAD – FCTeI.",
  "Expresamos nuestro especial agradecimiento a los miembros de la Alianza Antioquia Zana, conformada por la Fundación INTAL, el Grupo de Sustancias Bioactivas de la Universidad de Antioquia, la Universidad Nacional de Colombia – sede Bogotá, la Universidad Católica de Oriente, Kavitec S.A.S. y la Corporación Colombiana de Investigación Agropecuaria – AGROSAVIA.",
  "Asimismo, reconocemos y agradecemos la participación de las asociaciones de productores, campesinos y actores territoriales, así como el acompañamiento de la Alcaldía de El Santuario, la Alcaldía de Marinilla y la Gobernación de Antioquia, cuyos aportes, saberes, capacidades y compromiso fueron fundamentales para el desarrollo del proyecto.",
  "A todos ellos, nuestro profundo reconocimiento por contribuir a una iniciativa que une ciencia, territorio, innovación y bioeconomía, y que busca transformar la cadena de valor de la zanahoria en el Oriente antioqueño desde una visión colaborativa, sostenible y orientada al bienestar de las comunidades."
];

export default function CalligraphyDedication() {
  return (
    <div className="w-full relative my-16">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#DE5A30]/10 via-[#D4CF7D]/15 to-[#5E824A]/10 rounded-3xl blur-2xl -z-10" />

      {/* Main Luxury Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-[#0A1410]/95 border border-[#D4CF7D]/30 shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Decorative Corner Ornaments */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4CF7D]/50 rounded-tl-xl pointer-events-none" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4CF7D]/50 rounded-tr-xl pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D4CF7D]/50 rounded-bl-xl pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4CF7D]/50 rounded-br-xl pointer-events-none" />

        {/* Floating Calligraphy Header */}
        <div className="text-center space-y-4 mb-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#D4CF7D]/10 border border-[#D4CF7D]/30 text-[#D4CF7D] shadow-inner mb-2"
          >
            <Sparkles className="w-7 h-7 text-[#D4CF7D] animate-pulse" />
          </motion.div>

          <span className="text-xs font-mono text-[#D4CF7D] uppercase tracking-[0.3em] block">
            Homenaje & Reconocimiento Institucional
          </span>

          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#F0EDE1] via-[#D4CF7D] to-[#F0EDE1] font-bold tracking-tight">
            Agradecimientos del Proyecto
          </h2>

          <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#D4CF7D]/60 to-transparent my-4" />
        </div>

        {/* Calligraphy Animated Text Body */}
        <div className="space-y-6 max-w-4xl mx-auto text-[#F0EDE1]/90 font-serif text-base sm:text-lg md:text-xl leading-relaxed text-justify sm:text-center italic font-light">
          {paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.2 }}
              className="relative py-2 border-b border-white/5 last:border-0"
            >
              "{p}"
            </motion.p>
          ))}
        </div>

        {/* Footer Seal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-12 pt-8 border-t border-[#D4CF7D]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D4CF7D]/80"
        >
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#DE5A30]" />
            <span>Alianza Antioquia Zana — Regalías SGR & Minciencias</span>
          </div>

          <div className="flex items-center gap-2 text-[#F0EDE1]/60">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400/20" />
            <span>Con gratitud al Oriente Antioqueño</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
