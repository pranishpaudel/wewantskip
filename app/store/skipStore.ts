// app/store/skipStore.ts
import { create } from 'zustand';
import { Skip } from '../types/Skip';



interface SkipState {
  selectedSkip: Skip | null;
  selectSkip: (skip: Skip) => void;
  clearSelection: () => void;
}

export const useSkipStore = create<SkipState>((set) => ({
  selectedSkip: null,
  selectSkip: (skip) => set({ selectedSkip: skip }),
  clearSelection: () => set({ selectedSkip: null }),
}));