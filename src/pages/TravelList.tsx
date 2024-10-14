import CardWrap from '@/components/home/CardWrap';
import TagCardWrap from '@/components/travelList/TagCardWrap';
import { Outlet } from 'react-router-dom';

const TravelList = () => {
  return (
    <div>
      <TagCardWrap />
      <CardWrap />
      {/* <h2>전체</h2>
      <button>여행 만들기 +</button> */}
    </div>
  );
};

export default TravelList;
