import { create } from 'zustand';

export type Options = 'inclusionList' | 'notInclusionList' | 'faqs';
interface Faqs {
  question: string;
  answer: string;
}
interface Fields {
  inclusionList: string[];
  notInclusionList: string[];
  faqs: Faqs[];
}

interface State {
  fields: Fields;
}
interface Action {
  addField: (option: Options, newField: string, answer?: string) => void;
  removeField: (option: Options, index: number) => void;
  resetField: () => void;
}

const useFieldStore = create<State & Action>((set) => ({
  fields: {
    inclusionList: [],
    notInclusionList: [],
    faqs: [],
  },
  addField: (option: Options, newField: string, answer?: string) =>
    set((state) =>
      option === 'faqs'
        ? {
            fields: {
              ...state.fields,
              faqs: [...state.fields.faqs, { question: newField, answer: answer || '' }],
            },
          }
        : {
            fields: {
              ...state.fields,
              [option]: [...state.fields[option], newField],
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
      },
    }),
}));

export default useFieldStore;
