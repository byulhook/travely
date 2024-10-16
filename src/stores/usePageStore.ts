import { create } from 'zustand';

interface Page {
  paginationId: number;
  currentPage: number;
}

interface State {
  initialPage: Page[];
}
interface Action {
  setMultiPagination: (length: number) => void;
}
const usePageStore = create<State & Action>((set) => ({
  initialPage: [],
  setMultiPagination: (length: number) =>
    set(() => {
      const pages = [];
      for (let i = 0; i < length; i++) {
        pages.push({ paginationId: i, currentPage: 1 });
      }
      return { initialPage: pages };
    }),
}));

export default usePageStore;
