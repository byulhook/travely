import { useTabStore } from '@/stores/tabStore';
import styled from '@emotion/styled';
import TripCard from './TripCard';

const MyTravelContent = () => {
  const { selectedTab } = useTabStore();

  const trips = [
    {
      title: '대한민국 고궁 투어',
      rating: '5.0',
      reviews: 23,
      price: '123,000원',
      badgeCount: 16,
      updateDate: '2024.01.05',
      isDisabled: true, // 첫 번째 카드는 비활성화
    },
    {
      title: '부산 국밥 투어',
      rating: '4.1',
      reviews: 28,
      price: '50,000원',
      badgeCount: 16,
      updateDate: '2024.01.05',
      isDisabled: false, // 이 카드는 활성화 상태
    },
    {
      title: '대한민국 고궁 투어',
      rating: '5.0',
      reviews: 23,
      price: '123,000원',
      badgeCount: 16,
      updateDate: '2024.01.05',
      isDisabled: false,
    },
    {
      title: '대한민국 고궁 투어',
      rating: '5.0',
      reviews: 23,
      price: '123,000원',
      badgeCount: 16,
      updateDate: '2024.01.05',
      isDisabled: false,
    },
  ];

  return (
    <ScrollableContainer>
      {selectedTab === '참여한 여행' && (
        <div>
          <p>참여한 여행 리스트입니다.</p>
          {/* 참여한 여행 리스트 내용 */}
        </div>
      )}

      {selectedTab === '내가 만든 여행' && (
        <MyMadeTripsContainer>
          {trips.map((trip, index) => (
            <TripCard
              key={index}
              title={trip.title}
              rating={trip.rating}
              reviews={trip.reviews}
              price={trip.price}
              badgeCount={trip.badgeCount}
              updateDate={trip.updateDate}
              isDisabled={trip.isDisabled}
            />
          ))}
        </MyMadeTripsContainer>
      )}
    </ScrollableContainer>
  );
};

// 스타일 정의
const ScrollableContainer = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

const MyMadeTripsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

export default MyTravelContent;
