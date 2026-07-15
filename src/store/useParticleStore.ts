import { create } from 'zustand';

interface ParticleState {
  activeSection: string | null;
  interceptedParticleId: number | null;
  setActiveSection: (section: string) => void;
  clearActiveSection: () => void;
}

export const useParticleStore = create<ParticleState>((set) => ({
  activeSection: null,
  interceptedParticleId: null,
  setActiveSection: (section) => set({
    activeSection: section,
    // Elegimos una partícula al azar (del 0 al 30) para interceptar
    interceptedParticleId: Math.floor(Math.random() * 30)
  }),
  clearActiveSection: () => set({ activeSection: null, interceptedParticleId: null }),
}));