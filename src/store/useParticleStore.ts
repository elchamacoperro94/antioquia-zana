import { create } from 'zustand';

export const PARTICLE_COUNT = 30;

interface ParticleState {
  activeSection: string | null;
  interceptedParticleId: number | null;
  activeTab: string; // <-- Nuevo: pestaña activa global
  setActiveTab: (tab: string) => void; // <-- Nuevo: acción para cambiar pestaña
  setActiveSection: (section: string) => void;
  clearActiveSection: () => void;
}

export const useParticleStore = create<ParticleState>((set) => ({
  activeSection: null,
  interceptedParticleId: null,
  activeTab: 'inicio', // <-- Iniciamos en el inicio
  setActiveTab: (tab) => set({ activeTab: tab }),
  setActiveSection: (section) => set({ 
    activeSection: section, 
    interceptedParticleId: Math.floor(Math.random() * PARTICLE_COUNT) 
  }),
  clearActiveSection: () => set({ activeSection: null, interceptedParticleId: null }),
}));