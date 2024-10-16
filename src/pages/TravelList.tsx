import BorderBtn from '@/components/BorderBtn';
import TagCardWrap from '@/components/TagCardWrap';
import TravelCard from '@/components/TravelCard';
import { tagDatas } from '@/data/tagDatas';
import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import cardDatas, { CardData } from '@/api/cardData';

const TravelList = () => {
  const location = useLocation();
  const path = location.pathname.split('/').filter((item) => item !== '')[1] || '전체';
  const pageTitle = path === '전체' ? path : tagDatas.filter((data) => data.path === path)[0].name;
  const [myData, setMyData] = useState<null | CardData[]>(null);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const fetchCardData = async (pageParam: number, pageSize: number = 8) => {
    const CARDDATAS = cardDatas;
    const startIndex = (pageParam - 1) * pageSize;
    const endIndex = pageSize * pageParam;
    const hasMore = endIndex < cardDatas.length;
    const nextCursor = hasMore ? pageParam + 1 : null;
    const items = CARDDATAS.slice(startIndex, endIndex);
    return {
      items,
      nextCursor,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['my-data'],
    queryFn: ({ pageParam = 1 }) => fetchCardData(pageParam, 8),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 1,
  });

  useEffect(() => {
    if (data) {
      const newItems = data.pages.flatMap((page) => page.items);
      setMyData(newItems);
    }
  }, [data]);

  useEffect(() => {
    if (inView) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  }, [inView]);

  if (isFetchingNextPage || !myData) {
    return <p>loaidng</p>;
  }

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
        {myData.map((data, i) => (
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
        <p ref={ref}>target</p>
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

    p {
      position: fixed;
      bottom: 0;
      right: 0;
    }
  }
  .card-wrap {
    display: grid;
    grid-template-columns: repeat(4, 250px);
    justify-content: space-between;
    gap: 20px 0;
  }
`;
