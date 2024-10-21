import TravelCard from '@/components/TravelCard';
import { TagType } from '@/types/tagType';
import { css } from '@emotion/react';

interface IDatas {
  imgSrc: string;
  title: string;
  userName: string;
  tags: TagType[];
  price: string;
  rating: string;
  reviewCount: string;
  people: string;
  bookMark: boolean;
}

const datas: IDatas[] = [
  {
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/b7d509dc-0002-4a39-a515-038aa2d62561.png',
    title: '대한민국 국밥 TOP 30',
    userName: '하루얌',
    tags: ['Food', 'Culture'],
    price: '49000',
    rating: '5.0',
    reviewCount: '23',
    people: '1',
    bookMark: true,
  },
  {
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/b7d509dc-0002-4a39-a515-038aa2d62561.png',
    title: '서울 최고의 김치찌개 맛집',
    userName: '맛집탐방러',
    tags: ['Food', 'Festival'],
    price: '42000',
    rating: '4.8',
    reviewCount: '18',
    people: '1',
    bookMark: true,
  },
  {
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/b7d509dc-0002-4a39-a515-038aa2d62561.png',
    title: '강릉 해변에서 즐기는 바비큐',
    userName: '여행러버',
    tags: ['Nature', 'Food'],
    price: '60000',
    rating: '4.9',
    reviewCount: '35',
    people: '1',
    bookMark: true,
  },
  {
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/b7d509dc-0002-4a39-a515-038aa2d62561.png',
    title: '부산의 밤을 즐기는 방법',
    userName: '밤하늘',
    tags: ['Culture', 'K-POP'],
    price: '55000',
    rating: '4.7',
    reviewCount: '12',
    people: '1',
    bookMark: true,
  },
  {
    imgSrc: 'https://d25zqr3uop6qu8.cloudfront.net/b7d509dc-0002-4a39-a515-038aa2d62561.png',
    title: '전주 한옥마을 힐링 투어',
    userName: '힐링러버',
    tags: ['Culture', 'Healing'],
    price: '50000',
    rating: '5.0',
    reviewCount: '27',
    people: '1',
    bookMark: true,
  },
];

const Bookmark = () => {
  return (
    <div css={bookmarkWrap}>
      <div className="page-title">
        <h2>북마크</h2>
      </div>

      <div className="card-wrap">
        {datas.map((data, i) => (
          <TravelCard
            key={i}
            imgSrc={data.imgSrc}
            title={data.title}
            userName={data.userName}
            tags={data.tags}
            price={data.price}
            rating={data.rating}
            reviewCount={data.reviewCount}
            people={data.people}
            bookMark={data.bookMark}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookmark;

const bookmarkWrap = css`
  .page-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 30px 0;
  }
  .card-wrap {
    display: grid;
    grid-template-columns: repeat(4, 250px);
    justify-content: space-between;
    gap: 20px 0;
  }
`;
