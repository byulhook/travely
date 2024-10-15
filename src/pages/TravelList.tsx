import BorderBtn from '@/components/BorderBtn';
import TagCardWrap from '@/components/TagCardWrap';
import TravelCard from '@/components/TravelCard';
import { tagDatas } from '@/data/tagDatas';
import useHeaderWithVisual from '@/hooks/useHeaderWithVisual';
import { TagType } from '@/types/tagType';
import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';

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

const TravelList = () => {
  const location = useLocation();
  const path = location.pathname.split('/').filter((item) => item !== '')[1] || '전체';
  const pageTitle = path === '전체' ? path : tagDatas.filter((data) => data.path === path)[0].name;
  const isHeaderWithVisual = useHeaderWithVisual();

  if (path !== '전체' && !isHeaderWithVisual) return null;

  return (
    <div css={travelListWrap}>
      <TagCardWrap />
      <div className="page-title">
        <h2>{pageTitle}</h2>
        <BorderBtn color="#4a95f2">
          <Link to="/add-travel">여행 만들기 +</Link>
        </BorderBtn>
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

export default TravelList;

const travelListWrap = css`
  .page-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
  }
  .card-wrap {
    display: grid;
    grid-template-columns: repeat(4, 250px);
    justify-content: space-between;
    gap: 20px 0;
  }
`;
