import TagCardWrap from '@/components/TagCardWrap';
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
    imgSrc: '/src/assets/thumb.png',
    title: '대한민국 국밥 TOP 30',
    userName: '하루얌',
    tags: ['Food', 'Culture'],
    price: '49000',
    rating: '5.0',
    reviewCount: '23',
    people: '1',
    bookMark: false,
  },
  {
    imgSrc: '/src/assets/thumb.png',
    title: '서울 최고의 김치찌개 맛집',
    userName: '맛집탐방러',
    tags: ['Food', 'Festival'],
    price: '42000',
    rating: '4.8',
    reviewCount: '18',
    people: '1',
    bookMark: false,
  },
  {
    imgSrc: '/src/assets/thumb.png',
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
    imgSrc: '/src/assets/thumb.png',
    title: '부산의 밤을 즐기는 방법',
    userName: '밤하늘',
    tags: ['Culture', 'K-POP'],
    price: '55000',
    rating: '4.7',
    reviewCount: '12',
    people: '1',
    bookMark: false,
  },
  {
    imgSrc: '/src/assets/thumb.png',
    title: '부산의 밤을 즐기는 방법',
    userName: '밤하늘',
    tags: ['Culture', 'K-POP'],
    price: '55000',
    rating: '4.7',
    reviewCount: '12',
    people: '1',
    bookMark: false,
  },
  {
    imgSrc: '/src/assets/thumb.png',
    title: '부산의 밤을 즐기는 방법',
    userName: '밤하늘',
    tags: ['Culture', 'K-POP'],
    price: '55000',
    rating: '4.7',
    reviewCount: '12',
    people: '1',
    bookMark: false,
  },
  {
    imgSrc: '/src/assets/thumb.png',
    title: '부산의 밤을 즐기는 방법',
    userName: '밤하늘',
    tags: ['Culture', 'K-POP'],
    price: '55000',
    rating: '4.7',
    reviewCount: '12',
    people: '1',
    bookMark: false,
  },
  {
    imgSrc: '/src/assets/thumb.png',
    title: '부산의 밤을 즐기는 방법',
    userName: '밤하늘',
    tags: ['Culture', 'K-POP'],
    price: '55000',
    rating: '4.7',
    reviewCount: '12',
    people: '1',
    bookMark: false,
  },
];

const Home = () => {
  return (
    <div css={home}>
      <div>
        <TagCardWrap shape="square" />
      </div>

      <div className="card-wrap">
        <h3>🔥 함께 떠나요 NEW</h3>
        <div className="grid">
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
    </div>
  );
};

export default Home;

const home = css`
  h2 {
    margin: 30px 0;
  }
  .card-wrap {
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 250px);
      justify-content: space-between;
      gap: 20px 0;
    }
    h3 {
      margin: 20px 0;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
