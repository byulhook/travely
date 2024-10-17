import MyTravelContent from '@/components/myTravel/MyTravelContent';
import MyTravelTab from '@/components/myTravel/MyTravelTab';
import { useTabStore } from '@/stores/useTabStore';

const MyCreatedTravel = () => {
  const { selectedTab } = useTabStore();

  return (
    <div>
      <MyTravelTab />
      {selectedTab === '내가 만든 여행' && <MyTravelContent />}
    </div>
  );
};

export default MyCreatedTravel;
