/**
 * App.tsx
 *
 * Dark Botanical Museum Landing Page Assembly for Antioquia Zana.
 * Includes:
 * — SporesBackground (3D canvas)
 * — CustomCursor (physics trailing cursor in #DE5A30)
 * — Museum Halo ambient orbs (divs with blur-[120px] in #4A2545 & #D4CF7D)
 * — Hero (parallax 100vh)
 * — Bento Grid section with MuseumCard components
 * — Seamless SPA Section View Switcher with Framer Motion AnimatePresence
 * — FloatingNav (app-like bottom navigation)
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SporesBackground from './components/SporesBackground';
import CustomCursor from './components/CustomCursor';
import MuseumCard from './components/MuseumCard';
import FloatingNav from './components/FloatingNav';

// Core Sections & Components
import Hero from './sections/Hero';
import About from './sections/About';
import Objectives from './sections/Objectives';
import Activities from './sections/Activities';
import Products from './sections/Products';
import Results from './sections/Results';
import StudentsPage from './components/StudentsPage';
import Gallery from './sections/Gallery';
import Partners from './sections/Partners';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import {
  Leaf,
  Beaker,
  Users,
  Award,
  BookOpen,
  ArrowUpRight,
  Flame,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (
        hash &&
        [
          'inicio',
          'proyecto',
          'objetivos',
          'actividades',
          'productos',
          'resultados',
          'estudiantes',
          'galeria',
          'aliados',
          'contacto',
        ].includes(hash)
      ) {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0F1A15] text-[#F0EDE1] font-inter overflow-x-hidden">
      {/* ── 1. 3D Spore Particles Canvas ── */}
      <SporesBackground />

      {/* ── 2. Physics Trailing Custom Cursor ── */}
      <CustomCursor />

      {/* ── 3. Museum Halo Ambient Orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Orb 1: Púrpura Ancestral (#4A2545) top-left */}
        <div className="absolute top-[10vh] -left-[10vw] w-[550px] h-[550px] rounded-full bg-[#4A2545]/30 blur-[130px]" />
        {/* Orb 2: Oro Lienzo (#D4CF7D) center-right */}
        <div className="absolute top-[45vh] -right-[10vw] w-[650px] h-[650px] rounded-full bg-[#D4CF7D]/15 blur-[140px]" />
        {/* Orb 3: Bermellón (#DE5A30) lower-left */}
        <div className="absolute top-[90vh] -left-[5vw] w-[600px] h-[600px] rounded-full bg-[#DE5A30]/15 blur-[130px]" />
        {/* Orb 4: Daucus Green (#5E824A) bottom-right */}
        <div className="absolute top-[140vh] right-[5vw] w-[550px] h-[550px] rounded-full bg-[#5E824A]/20 blur-[130px]" />
      </div>

      {/* ── 4. Main Viewport & Dynamic Section Renderer ── */}
      <AnimatePresence mode="wait">
        {activeTab === 'inicio' && (
          <motion.div
            key="tab-inicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Fullscreen Parallax Hero */}
            <Hero />

            {/* Bento Grid Museum Collection */}
            <main id="bento-grid" className="relative z-10 container mx-auto px-6 py-20 max-w-7xl space-y-24 pb-28">
              
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="font-geist text-xs uppercase tracking-[0.3em] text-[#D4CF7D]">
                  Colección Bioeconómica & Agroindustrial
                </span>
                <h2 className="font-sora text-3xl sm:text-5xl font-light text-[#F0EDE1] tracking-tight">
                  El arte de transformar la <span className="italic text-[#DE5A30]">materia rechazada</span>
                </h2>
                <p className="text-[#F0EDE1]/60 text-sm md:text-base font-light leading-relaxed">
                  Resultados del proyecto de investigación BPIN 2020000100192 ejecutado en el Oriente Antioqueño.
                </p>
              </div>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">

                {/* Card 1: Large Feature — Bioactivos & Apocarotenoides */}
                <MuseumCard
                  title="Extracción de Bioactivos & Apocarotenoides"
                  subtitle="Ruta A2 · Aprovechamiento Biotecnológico"
                  badge="35% Potencial"
                  glowColor="bermellon"
                  delay={0.1}
                  className="lg:col-span-8 min-h-[320px] flex flex-col justify-between"
                >
                  <div className="space-y-4 my-auto">
                    <p className="text-base text-[#F0EDE1]/90 font-light leading-relaxed">
                      Obtención de pigmentos carotenoides de alta pureza y flavonoides antioxidantes a partir de zanahorias descartadas por fuera de calibre (12%) o daño cosmético (5%).
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-2xl bg-[#0F1A15]/60 border border-[#5E824A]/20">
                        <p className="font-geist text-[10px] text-[#D4CF7D] uppercase">Rendimiento</p>
                        <p className="font-sora text-lg font-semibold text-[#DE5A30]">85.4%</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#0F1A15]/60 border border-[#5E824A]/20">
                        <p className="font-geist text-[10px] text-[#D4CF7D] uppercase">Pureza α-Caroteno</p>
                        <p className="font-sora text-lg font-semibold text-[#F0EDE1]">92.1%</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#0F1A15]/60 border border-[#5E824A]/20 col-span-2 sm:col-span-1">
                        <p className="font-geist text-[10px] text-[#D4CF7D] uppercase">Variedad 13FLA</p>
                        <p className="font-sora text-lg font-semibold text-[#4A2545]">Morada</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t border-[#5E824A]/20 text-xs font-geist text-[#D4CF7D]">
                    <span className="flex items-center gap-1.5"><Beaker className="w-4 h-4 text-[#DE5A30]" /> Ensayo de extracción supercrítica</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </MuseumCard>

                {/* Card 2: Side Feature — Alimentos Funcionales */}
                <MuseumCard
                  title="Ingredientes Funcionales"
                  subtitle="Ruta A1 · Harinas & Harinas Puré"
                  badge="30% Valor"
                  glowColor="oro"
                  delay={0.2}
                  className="lg:col-span-4 flex flex-col justify-between"
                >
                  <div className="space-y-3 my-auto">
                    <div className="w-10 h-10 rounded-2xl bg-[#D4CF7D]/10 flex items-center justify-center text-[#D4CF7D] mb-2">
                      <Flame className="w-5 h-5" />
                    </div>
                    <p className="text-xs text-[#F0EDE1]/80 leading-relaxed font-light">
                      Desarrollo de harinas deshidratadas ricas en fibra dietaria soluble e insoluble para la industria panificadora y de suplementos.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#5E824A]/20 flex justify-between items-center text-xs font-geist text-[#D4CF7D]">
                    <span>PROT-01 a PROT-05</span>
                    <span className="text-white font-semibold">5 Prototipos</span>
                  </div>
                </MuseumCard>

                {/* Card 3: Nutrición Animal */}
                <MuseumCard
                  title="Suplementación Animal"
                  subtitle="Ruta B1 · Silaje Digestivo"
                  badge="25% Volumen"
                  glowColor="daucus"
                  delay={0.3}
                  className="lg:col-span-4 flex flex-col justify-between"
                >
                  <div className="space-y-3 my-auto">
                    <div className="w-10 h-10 rounded-2xl bg-[#5E824A]/10 flex items-center justify-center text-[#5E824A] mb-2">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <p className="text-xs text-[#F0EDE1]/80 leading-relaxed font-light">
                      Aprovechamiento directo de mermas de campo para ensilaje pecuario enriquecido con probióticos.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#5E824A]/20 text-xs font-geist text-[#5E824A]">
                    <span>Asociación Ganaderos Maravilla</span>
                  </div>
                </MuseumCard>

                {/* Card 4: Impacto Social & ZanaFest */}
                <MuseumCard
                  title="Apropiación Social & ZanaFest"
                  subtitle="Transferencia de Conocimiento"
                  badge="800+ Asistentes"
                  glowColor="purpura"
                  delay={0.4}
                  className="lg:col-span-8 min-h-[260px] flex flex-col justify-between"
                >
                  <div className="space-y-4 my-auto">
                    <p className="text-sm text-[#F0EDE1]/90 font-light leading-relaxed">
                      Empoderamiento de 190 familias agricultoras en Marinilla, El Santuario y Rionegro mediante 3 Días de Campo y el Festival ZanaFest.
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs font-geist text-[#F0EDE1]/70">
                      <div className="flex items-center gap-2 bg-[#0F1A15]/70 px-3 py-1.5 rounded-full border border-[#5E824A]/20">
                        <Users className="w-3.5 h-3.5 text-[#D4CF7D]" />
                        <span>190 Agricultores Capacitados</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#0F1A15]/70 px-3 py-1.5 rounded-full border border-[#5E824A]/20">
                        <Award className="w-3.5 h-3.5 text-[#DE5A30]" />
                        <span>3 Días de Campo</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#0F1A15]/70 px-3 py-1.5 rounded-full border border-[#5E824A]/20">
                        <BookOpen className="w-3.5 h-3.5 text-[#5E824A]" />
                        <span>Catálogo de Excedentes</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#5E824A]/20 flex justify-between items-center text-xs font-geist text-[#D4CF7D]">
                    <span>Oriente Antioqueño · Vigencia 2022–2026</span>
                    <span className="text-[#DE5A30]">AGROSAVIA · UdeA · UCO · INTAL</span>
                  </div>
                </MuseumCard>

              </div>

              {/* Section Footer */}
              <Footer />
            </main>
          </motion.div>
        )}

        {/* Dynamic SPA View Sections */}
        {activeTab !== 'inicio' && (
          <motion.div
            key={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="relative z-10 container mx-auto px-6 py-28 max-w-7xl pb-32"
          >
            {activeTab === 'proyecto' && <About />}
            {activeTab === 'objetivos' && <Objectives />}
            {activeTab === 'actividades' && <Activities />}
            {activeTab === 'productos' && <Products />}
            {activeTab === 'resultados' && <Results />}
            {activeTab === 'estudiantes' && <StudentsPage />}
            {activeTab === 'galeria' && <Gallery />}
            {activeTab === 'aliados' && <Partners />}
            {activeTab === 'contacto' && <Contact />}

            {/* Footer */}
            <div className="mt-16">
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 5. Floating App-like Navigation Bar ── */}
      <FloatingNav activeTab={activeTab} onSelectTab={setActiveTab} />
    </div>
  );
}
