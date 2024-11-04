import { create } from 'zustand';

export interface ImageStore {
  thumbnail: string;
  meetingSpace: string;
  introSrcs: string[];
}

interface State {
  images: ImageStore;
}

interface Action {
  setThumbnail: (thumbnail: string) => void;
  setIntroSrcs: (introSrcs: string[]) => void;
  setMeetingSpace: (meetingSpace: string) => void;
  resetImages: () => void;
}

const useImageStore = create<State & Action>((set) => ({
  images: {
    thumbnail: '',
    meetingSpace: '',
    introSrcs: [],
  },
  setThumbnail: (thumbnail: string) =>
    set((state) => {
      return { images: { ...state.images, thumbnail } };
    }),
  setMeetingSpace: (meetingSpace: string) =>
    set((state) => {
      return { images: { ...state.images, meetingSpace } };
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
        meetingSpace: '',
      },
    }),
}));

export default useImageStore;
