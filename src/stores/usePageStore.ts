import { create } from 'zustand';

interface Page {
  paginationId: number;
  currentPage: number;
}

interface State {
  pageContainer: Page[];
}
interface Action {
  setMultiPagination: (length: number) => void;
  setCurrentPage: (paginationId: number, currentPage: number) => void;
}
const usePageStore = create<State & Action>((set) => ({
  pageContainer: [],
  setMultiPagination: (length: number) =>
    set(() => {
      const pages = [];
      for (let i = 0; i < length; i++) {
        pages.push({ paginationId: i, currentPage: 1 });
      }
      return { pageContainer: pages };
    }),
  setCurrentPage: (paginationId: number, currentPage: number) =>
    set((state) => {
      const updatedPageContainer = state.pageContainer.map((page) =>
        page.paginationId === paginationId ? { ...page, currentPage } : page,
      );
      return { pageContainer: updatedPageContainer };
    }),
}));

export default usePageStore;
