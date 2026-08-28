/**
 * App.tsx
 *
 * Dark Botanical Museum Landing Page Assembly for Antioquia Zana.
 * Includes:
 * — BotanicalBackground (SVG animated botanical roots)
 * — CustomCursor (physics trailing cursor in #DE5A30)
 * — Museum Halo ambient orbs (divs with blur-[120px] in #4A2545 & #D4CF7D)
 * — Hero (parallax 100vh)
 * — Bento Grid section with MuseumCard components
 * — Seamless SPA Section View Switcher with Framer Motion AnimatePresence
 * — FloatingNav (app-like bottom navigation)
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BotanicalBackground from './components/BotanicalBackground';
import CustomCursor from './components/CustomCursor';
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
import ComplementaryProducts from './components/ComplementaryProducts';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (
        hash &&
        [
          'inicio',
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
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#0F1A15] text-[#F0EDE1] font-inter overflow-x-hidden">
        {/* ── 1. Botanical Roots & Stems Animated Background ── */}
        <BotanicalBackground />

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

              {/* Sección Explicativa del Proyecto (4 Problemas, 4 Objetivos, Actividades, Generalidades, Equipo y Aliados) */}
              <About />

              {/* Colección de Obras Destacadas en lugar del Bento Grid */}
              <ComplementaryProducts />

              {/* Section Footer */}
              <Footer />
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
    </LanguageProvider>
  );
}
