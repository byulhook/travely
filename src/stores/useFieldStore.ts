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
interface Schedule {
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
  addField: (option: Options, newField: string | Schedule, answer?: string) => void; // Schedule 타입 추가
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
    set((state) =>
      option === 'faqs'
        ? {
            fields: {
              ...state.fields,
              faqs: [...state.fields.faqs, { question: newField as string, answer: answer || '' }],
            },
          }
        : option === 'scheduleList'
          ? {
              fields: {
                ...state.fields,
                scheduleList: [...state.fields.scheduleList, newField as Schedule],
              },
            }
          : {
              fields: {
                ...state.fields,
                [option]: [...state.fields[option], newField as string],
              },
            },
    ),
  removeField: (option: Options, index: number) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [option]: state.fields[option].filter((_, i) => i !== index),
      },
    })),
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
