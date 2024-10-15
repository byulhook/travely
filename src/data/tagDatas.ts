import { TagPath, TagType } from '@/types/tagType';

interface ITagData {
  name: TagType;
  imgSrc: string;
  path: TagPath;
}

export const tagDatas: ITagData[] = [
  { name: 'Food', imgSrc: '/src/assets/tag-food.webp', path: 'food' },
  { name: 'Culture', imgSrc: '/src/assets/tag-culture.webp', path: 'culture' },
  { name: 'Healing', imgSrc: '/src/assets/tag-healing.webp', path: 'healing' },
  { name: 'Nature', imgSrc: '/src/assets/tag-nature.webp', path: 'nature' },
  { name: 'Sports', imgSrc: '/src/assets/tag-sports.webp', path: 'sports' },
  { name: 'Festival', imgSrc: '/src/assets/tag-festival.webp', path: 'festival' },
  { name: 'K-POP', imgSrc: '/src/assets/tag-kpop.webp', path: 'kpop' },
  { name: 'K-DRAMA', imgSrc: '/src/assets/tag-kdrama.webp', path: 'kdrama' },
  { name: 'JEJU', imgSrc: '/src/assets/tag-jeju.webp', path: 'jeju' },
  { name: 'etc.', imgSrc: '/src/assets/tag-etc.webp', path: 'etc' },
];
