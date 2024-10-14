import { create } from 'zustand';

interface IHeaderState {
  isHeaderWithVisual: boolean;
  setIsHeaderWithVisual: (value: boolean) => void;
}

export const useHeaderStore = create<IHeaderState>()((set) => ({
  isHeaderWithVisual: false,
  setIsHeaderWithVisual: (value) => set(() => ({ isHeaderWithVisual: value })),
}));
