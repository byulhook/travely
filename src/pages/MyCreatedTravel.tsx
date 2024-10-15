import MyTravelTab from '@/components/myTravel/MyTravelTab';
import { useTabStore } from '@/stores/usetabStore';

const MyCreatedTravel = () => {
  const { selectedTab } = useTabStore();

  return (
    <div>
      <MyTravelTab />
      {selectedTab === '내가 만든 여행' && <p>내가 만든 여행 목록을 여기에 표시합니다1.</p>}
    </div>
  );
};

export default MyCreatedTravel;
