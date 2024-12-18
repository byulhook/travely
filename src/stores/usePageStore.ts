import { create } from 'zustand';

interface Page {
  paginationId: string;
  currentPage: number;
}

interface State {
  pageContainer: Page[];
}
interface Action {
  setMultiPagination: (teamIds: string[]) => void;
  setCurrentPage: (paginationId: string, currentPage: number) => void;
}
const usePageStore = create<State & Action>((set) => ({
  pageContainer: [],
  setMultiPagination: (teamIds: string[]) =>
    set(() => {
      const pages = teamIds.map((id) => ({ paginationId: id, currentPage: 1 }));
      return { pageContainer: pages };
    }),
  setCurrentPage: (paginationId: string, currentPage: number) =>
    set((state) => {
      const updatedPageContainer = state.pageContainer.map((page) =>
        page.paginationId === paginationId ? { ...page, currentPage } : page,
      );
      return { pageContainer: updatedPageContainer };
    }),
}));

export default usePageStore;
