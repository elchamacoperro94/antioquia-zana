import { useState } from 'react';
import BackgroundParticles from './components/canvas/BackgroundParticles';
import { useParticleStore } from './store/useParticleStore';
import { 
  Menu, 
  X, 
  Tractor, 
  Home, 
  Info, 
  Target, 
  ListTodo, 
  Beaker, 
  BarChart3, 
  GraduationCap, 
  Image as ImageIcon, 
  Handshake, 
  Mail,
  BookOpen
} from 'lucide-react';

// Import Sections & Components
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

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 3D particle store
  const { setActiveSection, clearActiveSection } = useParticleStore();

  const navItems = [
    { label: 'Inicio', id: 'inicio', icon: <Home className="h-4 w-4" /> },
    { label: 'Proyecto', id: 'proyecto', icon: <Info className="h-4 w-4" /> },
    { label: 'Objetivos', id: 'objetivos', icon: <Target className="h-4 w-4" /> },
    { label: 'Actividades', id: 'actividades', icon: <ListTodo className="h-4 w-4" /> },
    { label: 'Productos', id: 'productos', icon: <Beaker className="h-4 w-4" /> },
    { label: 'Resultados', id: 'resultados', icon: <BarChart3 className="h-4 w-4" /> },
    { label: 'Estudiantes', id: 'estudiantes', icon: <GraduationCap className="h-4 w-4" /> },
    { label: 'Galería', id: 'galeria', icon: <ImageIcon className="h-4 w-4" /> },
    { label: 'Aliados', id: 'aliados', icon: <Handshake className="h-4 w-4" /> },
    { label: 'Contacto', id: 'contacto', icon: <Mail className="h-4 w-4" /> }
  ];

  const getSectionTitle = () => {
    const activeItem = navItems.find(item => item.id === activeTab);
    return activeItem ? activeItem.label : 'Inicio';
  };

  return (
    <>
      {/* ─── Fixed 3D canvas background — z-0, pointer-events-none ─── */}
      <BackgroundParticles />

    <div className="flex h-screen overflow-hidden bg-transparent text-slate-300">
      
      {/* 1. DESKTOP SIDEBAR NAVIGATION */}
      <aside className="hidden md:flex w-64 lg:w-72 flex-col h-full border-r border-white/5 bg-surface-container-low shrink-0">
        {/* Header/Logo */}
        <div className="p-6 border-b border-white/5">
          <div
            className="font-headline-md text-xl font-bold text-primary flex items-center gap-2 group cursor-pointer"
            onClick={() => { setActiveTab('inicio'); setActiveSection('inicio'); }}
          >
            <Tractor className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white tracking-wider font-semibold">Antioquia Zana</span>
          </div>
          <p className="text-[9px] font-label-caps text-on-surface-variant mt-2 tracking-widest opacity-60">
            BPIN 2020000100192
          </p>
        </div>

        {/* Navigation list */}
        <nav className="flex-grow overflow-y-auto custom-scrollbar py-4">
          <div className="px-6 mb-3">
            <span className="text-[10px] font-label-caps text-slate-500 uppercase tracking-wider block">
              Navegación
            </span>
          </div>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => { setActiveTab(item.id); setActiveSection(item.id); }}
                    className={`w-full flex items-center gap-3 px-6 py-3.5 text-left font-label-caps text-xs tracking-wider transition-all border-r-4 ${
                      isActive
                        ? 'bg-primary-container/10 text-primary border-primary font-bold'
                        : 'text-slate-400 border-transparent hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer in Sidebar */}
        <div className="p-6 border-t border-white/5 flex flex-col gap-2">
          <div className="flex items-center gap-3 opacity-40">
            <Tractor className="h-5 w-5" />
            <BookOpen className="h-5 w-5" />
          </div>
          <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
            Agrosavia © 2024
          </p>
        </div>
      </aside>

      {/* 2. MAIN VIEWPORT AREA */}
      <main className="flex-grow h-screen flex flex-col overflow-hidden relative">
        
        {/* Sticky Context Banner at the top of the main container */}
        <header className="sticky top-0 z-40 w-full bg-surface/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] font-label-caps text-secondary uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> 
              Proyecto de Regalías SGR
            </span>
            <h2 className="text-xl font-bold text-white mt-0.5 tracking-wide">
              {getSectionTitle()}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-slate-500">
              <span>AGROSAVIA Centro La Selva</span>
              <span className="w-px h-3 bg-white/10"></span>
              <span>Región Oriente</span>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {/* Scrollable SPA View wrapper */}
        <div className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-10 bg-obsidian-950/10">
          <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-140px)] flex flex-col justify-between">
            
            {/* Conditional Page Rendering */}
            <div className="flex-grow pb-12">
              {activeTab === 'inicio' && <Hero />}
              {activeTab === 'proyecto' && <About />}
              {activeTab === 'objetivos' && <Objectives />}
              {activeTab === 'actividades' && <Activities />}
              {activeTab === 'productos' && <Products />}
              {activeTab === 'resultados' && <Results />}
              {activeTab === 'estudiantes' && <StudentsPage />}
              {activeTab === 'galeria' && <Gallery />}
              {activeTab === 'aliados' && <Partners />}
              {activeTab === 'contacto' && <Contact />}
            </div>

            {/* Section Footer */}
            <Footer />
          </div>
        </div>
      </main>

      {/* 3. MOBILE SIDEBAR DRAWER OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm" 
          />
          
          {/* Drawer menu */}
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-obsidian-900 border-r border-white/10 p-6 flex flex-col justify-between shadow-2xl z-10">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Tractor className="h-5 w-5" />
                  <span className="text-white text-sm">Antioquia Zana</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-label-caps text-slate-500 uppercase tracking-widest block mb-2 px-2">
                  Navegación
                </span>
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setActiveSection(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-xs font-mono transition-all ${
                          isActive
                            ? 'bg-primary-container/10 text-primary font-bold'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-4">
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider block">
                Proyecto BPIN
              </span>
              <span className="text-xs font-mono text-white font-bold">2020000100192</span>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
