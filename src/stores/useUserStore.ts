import { User } from '@/types/userType';
import { create } from 'zustand';

interface IUseUserStore {
  user: User | null;
  setUser: (newState: User | null) => void;
}
const useUserStore = create<IUseUserStore>((set) => ({
  user: null,
  setUser: (newState) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...newState } : newState,
    })),
}));

export default useUserStore;
