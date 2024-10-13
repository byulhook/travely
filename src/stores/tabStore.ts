import { create } from 'zustand';

type TabOption = '참여한 여행' | '내가 만든 여행';

interface ITabState {
  selectedTab: TabOption;
  setSelectedTab: (tab: TabOption) => void;
}

export const useTabStore = create<ITabState>((set) => ({
  selectedTab: '참여한 여행',
  setSelectedTab: (tab) => set({ selectedTab: tab }),
}));
