import { TagPath, TagType } from '@/types/tagType';
import tagFoodImg from '@/assets/tag-food.webp';
import tagCultureImg from '@/assets/tag-culture.webp';
import tagHealingImg from '@/assets/tag-healing.webp';
import tagNatureImg from '@/assets/tag-nature.webp';
import tagSportsImg from '@/assets/tag-sports.webp';
import tagFestivalImg from '@/assets/tag-festival.webp';
import tagKpopImg from '@/assets/tag-kpop.webp';
import tagKdramaImg from '@/assets/tag-kdrama.webp';
import tagJejuImg from '@/assets/tag-jeju.webp';
import tagEtcImg from '@/assets/tag-etc.webp';

interface ITagData {
  name: TagType;
  imgSrc: string;
  path: TagPath;
}

export const tagDatas: ITagData[] = [
  { name: 'Food', imgSrc: tagFoodImg, path: 'food' },
  { name: 'Culture', imgSrc: tagCultureImg, path: 'culture' },
  { name: 'Healing', imgSrc: tagHealingImg, path: 'healing' },
  { name: 'Nature', imgSrc: tagNatureImg, path: 'nature' },
  { name: 'Sports', imgSrc: tagSportsImg, path: 'sports' },
  { name: 'Festival', imgSrc: tagFestivalImg, path: 'festival' },
  { name: 'K-POP', imgSrc: tagKpopImg, path: 'kpop' },
  { name: 'K-DRAMA', imgSrc: tagKdramaImg, path: 'kdrama' },
  { name: 'JEJU', imgSrc: tagJejuImg, path: 'jeju' },
  { name: 'etc.', imgSrc: tagEtcImg, path: 'etc' },
];
