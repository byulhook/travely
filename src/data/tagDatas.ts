import { TagPath, TagType } from '@/types/tagType';

interface ITagData {
  name: TagType;
  imgSrc: string;
  path: TagPath;
}

export const tagDatas: ITagData[] = [
  {
    name: 'Food',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/0afdca61-98f7-482d-9829-88ba0132d9cb.webp',
    path: 'food',
  },
  {
    name: 'Culture',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/82df2253-f635-4319-bad7-877ca474272e.webp',
    path: 'culture',
  },
  {
    name: 'Healing',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/1e48dd15-5c40-4dd6-9724-b3028564c4b0.webp',
    path: 'healing',
  },
  {
    name: 'Nature',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/523b83d9-d10f-4083-b44d-1bcf02269a55.webp',
    path: 'nature',
  },
  {
    name: 'Sports',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/1c65b042-0387-40dd-9b97-609b8b29a4cf.webp',
    path: 'sports',
  },
  {
    name: 'Festival',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/5b969f3f-3407-4e03-afa3-09f6efc82603.webp',
    path: 'festival',
  },
  {
    name: 'K-POP',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/862d2967-ce2a-44c9-8c6a-f73d006c37a4.webp',
    path: 'kpop',
  },
  {
    name: 'K-DRAMA',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/8ad2f10c-82b2-42b5-82b9-a9ecfd2b1371.webp',
    path: 'kdrama',
  },
  {
    name: 'JEJU',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/e4d782c5-9d19-4ab3-98e7-9193a617a5e3.webp',
    path: 'jeju',
  },
  {
    name: 'etc.',
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/507cbe6a-019c-44ce-921d-2d3ef4394d30.webp',
    path: 'etc',
  },
];
