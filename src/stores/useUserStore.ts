import { User } from '@/types/userType';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUseUserStore {
  user: User | null;
  setUser: (newState: User | null) => void;
}

const useUserStore = create<IUseUserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (newState) => {
        if (newState === null) {
          set({ user: null });
        } else {
          set((state) => ({
            user: state.user ? { ...state.user, ...newState } : newState,
          }));
        }
      },
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ user: state.user }),
    },
  ),
);

export default useUserStore;
