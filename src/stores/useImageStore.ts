import { create } from 'zustand';

interface ImageStore {
  thumbnail: string;
  introSrcs: string[];
}

interface State {
  images: ImageStore;
}

interface Action {
  setThumbnail: (thumbnail: string) => void;
  setIntroSrcs: (introSrcs: string[]) => void;
  resetImages: () => void;
}

const useImageStore = create<State & Action>((set) => ({
  images: {
    thumbnail: '',
    introSrcs: [],
  },
  setThumbnail: (thumbnail: string) =>
    set((state) => {
      return { images: { ...state.images, thumbnail } };
    }),
  setIntroSrcs: (introSrcs: string[]) =>
    set((state) => {
      return { images: { ...state.images, introSrcs } };
    }),
  resetImages: () =>
    set({
      images: {
        thumbnail: '',
        introSrcs: [],
      },
    }),
}));

export default useImageStore;
