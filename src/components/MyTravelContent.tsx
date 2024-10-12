import { useTabStore } from '@/stores/tabStore'; // Zustand 스토어를 가져옴

const MyTravelContent = () => {
  const { selectedTab } = useTabStore(); // Zustand에서 상태를 가져옴

  return (
    <div>
      {selectedTab === '참여한 여행' && (
        <div>
          <p>참여한 여행 리스트입니다.</p>
        </div>
      )}
      {selectedTab === '내가 만든 여행' && (
        <div>
          <p>내가 만든 여행 리스트입니다.</p>
        </div>
      )}
    </div>
  );
};

export default MyTravelContent;
