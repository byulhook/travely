import { TagType } from '@/types/tagType';

export interface ITravelCard {
  thumbnail: string; // 이미지 경로
  travelTitle: string; // 카드의 제목
  createdBy: {
    // 작성자
    userId: string;
    userName: string;
  };
  travelPrice: number; //가격
  review: {
    //리뷰
    travelScore: number;
    reviewCnt: number;
  };
  tag: TagType[]; // 태그 목록
  bookmark: boolean; // 북마크 여부
}
