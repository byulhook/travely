import BorderBtn from '@/components/BorderBtn';
import TagCardWrap from '@/components/TagCardWrap';
import TravelCard from '@/components/traveList/TravelCard';
import { tagDatas } from '@/data/tagDatas';
import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import SkeletonTravelCard from '@/components/SkeletonTravelCard';
import scrollToTop from '@/utils/scrollToTop';
import { ITravelCard } from '@/types/travelCardType';
import travelCardMockData from '@/data/travelCardMockData';

const TravelList = () => {
  const location = useLocation();
  const path = location.pathname.split('/').filter((item) => item !== '')[1] || '전체';
  const pageTitle = path === '전체' ? path : tagDatas.filter((data) => data.path === path)[0].name;
  const [myData, setMyData] = useState<null | ITravelCard[]>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['my-data'],
    queryFn: ({ pageParam = 1 }) => fetchCardData(pageParam, 8),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 1,
  });
  const { ref, inView } = useInView({
    threshold: 1,
    skip: !hasNextPage,
  });

  const fetchCardData = async (pageParam: number, pageSize: number = 8) => {
    const CARDDATAS = travelCardMockData;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const startIndex = (pageParam - 1) * pageSize;
    const endIndex = pageSize * pageParam;
    const hasMore = endIndex < CARDDATAS.length;
    const nextCursor = hasMore ? pageParam + 1 : null;
    const items = CARDDATAS.slice(startIndex, endIndex);
    return {
      items,
      nextCursor,
    };
  };

  useEffect(() => {
    if (data) {
      const newItems = data.pages.flatMap((page) => page.items);
      setMyData(newItems);
    }
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (!myData) {
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
          <TravelCard cardData={data} key={i} />
        ))}
        {isFetchingNextPage && <SkeletonTravelCard />}
      </div>

      {!hasNextPage && (
        <BorderBtn
          className="scroll-top"
          color="#4a95f2"
          size="full"
          hover="filled"
          onClick={() => scrollToTop()}
        >
          처음으로
        </BorderBtn>
      )}
      <div className="inView-target" ref={ref}></div>
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
  .inView-target {
    height: 1px;
  }
  .scroll-top {
    margin-top: 30px;
  }
`;
