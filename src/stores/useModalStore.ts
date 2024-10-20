import { create } from 'zustand';

interface IUseModalStore {
  modalName: string | null;
  setModalName: (modalName: string | null) => void;
}

const useModalStore = create<IUseModalStore>((set) => ({
  modalName: null,
  setModalName: (targetModalName) => set({ modalName: targetModalName }),
}));

export default useModalStore;
