import { create } from 'zustand';

interface IUseLoginStore {
  isLogin: boolean;
  setIsLogin: (newState: boolean) => void;
}
const useLoginStore = create<IUseLoginStore>((set) => ({
  isLogin: false,
  setIsLogin: (newState) => set({ isLogin: newState }),
}));

export default useLoginStore;
