import { create } from 'zustand';

export type Options =
  | 'inclusionList'
  | 'notInclusionList'
  | 'faqs'
  | 'userGuide'
  | 'courseList'
  | 'scheduleList';

interface Faqs {
  question: string;
  answer: string;
}

export interface Schedule {
  date: string;
  members: string;
}

interface Fields {
  inclusionList: string[];
  notInclusionList: string[];
  faqs: Faqs[];
  userGuide: string[];
  courseList: string[];
  scheduleList: Schedule[];
}

interface State {
  fields: Fields;
}
interface Action {
  addField: (option: Options, newField: string | Schedule, answer?: string) => void;
  removeField: (option: Options, index: number) => void;
  resetField: () => void;
}

const useFieldStore = create<State & Action>((set) => ({
  fields: {
    inclusionList: [],
    notInclusionList: [],
    faqs: [],
    userGuide: [],
    courseList: [],
    scheduleList: [],
  },
  addField: (option: Options, newField: string | Schedule, answer?: string) =>
    set((state) => {
      if (option === 'faqs') {
        return {
          fields: {
            ...state.fields,
            faqs: [...state.fields.faqs, { question: newField as string, answer: answer || '' }],
          },
        };
      } else if (option === 'scheduleList') {
        return {
          fields: {
            ...state.fields,
            scheduleList: [...state.fields.scheduleList, newField as Schedule],
          },
        };
      } else {
        return {
          fields: {
            ...state.fields,
            [option]: [...(state.fields[option] as string[]), newField as string],
          },
        };
      }
    }),
  removeField: (option: Options, index: number) =>
    set((state) => {
      if (option === 'faqs') {
        return {
          fields: {
            ...state.fields,
            faqs: state.fields.faqs.filter((_, i) => i !== index),
          },
        };
      } else if (option === 'scheduleList') {
        return {
          fields: {
            ...state.fields,
            scheduleList: state.fields.scheduleList.filter((_, i) => i !== index),
          },
        };
      } else {
        return {
          fields: {
            ...state.fields,
            [option]: (state.fields[option] as string[]).filter((_, i) => i !== index),
          },
        };
      }
    }),
  resetField: () =>
    set({
      fields: {
        inclusionList: [],
        notInclusionList: [],
        faqs: [],
        userGuide: [],
        courseList: [],
        scheduleList: [],
      },
    }),
}));

export default useFieldStore;
