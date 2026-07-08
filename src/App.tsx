import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Tractor } from 'lucide-react';

// Import Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Objectives from './sections/Objectives';
import Activities from './sections/Activities';
import Products from './sections/Products';
import Results from './sections/Results';
import Gallery from './sections/Gallery';
import Partners from './sections/Partners';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyecto', href: '#sobre-el-proyecto' },
    { label: 'Objetivos', href: '#objetivos' },
    { label: 'Actividades', href: '#actividades' },
    { label: 'Productos', href: '#prototipos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Registro Fotográfico', href: '#registro-fotografico' },
    { label: 'Aliados', href: '#aliados' },
    { label: 'Documentos', href: '#contacto' }
  ];

  // Initialize Lenis and GSAP ScrollTrigger
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Section Tracker for active navigation link
    const sections = navItems.map(item => item.href.substring(1));
    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 40%',
          end: 'bottom 40%',
          onEnter: () => setActiveSection(sectionId),
          onEnterBack: () => setActiveSection(sectionId),
        });
      }
    });



    // 3. GSAP Reveals on Scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-transparent text-slate-300">
      
      {/* Dynamic Navigation Bar (Sticky Top Nav Bar matching Google Stitch) */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-xl bg-surface/80 border-b border-b-white/10 h-20 flex items-center"
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 flex justify-between items-center">
          {/* Logo Oficial con Tractor (según Google Stitch) */}
          <a href="#inicio" className="font-headline-md text-primary flex items-center gap-2 group">
            <Tractor className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold text-white tracking-wider group-hover:text-primary transition-colors">
              Antioquia Zana
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              if (item.href === '#contacto') {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-5 py-2 bg-white/5 rounded-lg border border-white/10 text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-all font-label-caps text-xs tracking-wider"
                  >
                    {item.label}
                  </a>
                );
              }
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors relative py-1 font-label-caps text-xs tracking-wider ${
                    isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-on-surface p-1 rounded-lg focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        />
        
        {/* Menu drawer */}
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-obsidian-900 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
          <div className="flex flex-col gap-8 mt-16">
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Navegación
            </h4>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-semibold tracking-wide py-1.5 transition-colors ${
                      isActive ? 'text-carrot-orange' : 'text-slate-300 hover:text-carrot-orange'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
          
          <div className="border-t border-white/5 pt-4">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
              Proyecto BPIN
            </span>
            <span className="text-xs font-mono text-white font-bold">{2020000100192}</span>
          </div>
        </div>
      </div>

      {/* 10 Page Sections wrapped in scroll reveals */}
      <main className="flex-grow">
        <Hero />
        
        <div className="reveal-on-scroll">
          <About />
        </div>
        
        <div className="reveal-on-scroll">
          <Objectives />
        </div>
        
        <div className="reveal-on-scroll">
          <Activities />
        </div>
        
        <div className="reveal-on-scroll">
          <Products />
        </div>
        
        <div className="reveal-on-scroll">
          <Results />
        </div>
        
        <div className="reveal-on-scroll">
          <Gallery />
        </div>
        
        <div className="reveal-on-scroll">
          <Partners />
        </div>
        
        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
