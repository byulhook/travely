import TagCardWrap from '@/components/TagCardWrap';
import TravelCard from '@/components/TravelCard';
import tarvelCardMockData from '@/data/travelCardMockData';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const mockDatas = tarvelCardMockData;

const Home = () => {
  const userId = 'user001';
  const [cardDatas, setCardDatas] = useState(null);
  const { data, isLoading } = useQuery({
    queryKey: ['home-travl-list'],
    queryFn: () => fetchHomeTravelList(userId),
  });
  const fetchHomeTravelList = async (userId: string) => {
    try {
      const res = await axios.post('http://3.37.101.147:3000/api/v1/travels/home-travel-list', {
        userId,
      });
      return res.data.data.travels;
    } catch (error) {
      console.error('여행 목록을 조회하는데 실패했습니다: ' + error);
      return null;
    }
  };
  useEffect(() => {
    if (data) {
      setCardDatas(data);
    }
  }, [data]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  console.log(cardDatas);
  return (
    <div css={home}>
      <TagCardWrap shape="square" />

      <div className="card-wrap">
        <h3>
          <Link to="/travel-list">🔥 함께 떠나요 NEW</Link>
        </h3>
        <div className="grid">
          {mockDatas.map((data, i) => (
            <TravelCard cardData={data} key={i} />
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
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
