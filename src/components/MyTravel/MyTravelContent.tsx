import { useState } from 'react';
import styled from '@emotion/styled';
import TripCard from './MyTravelCard';

const MyTravelContent = () => {
  const [trips, setTrips] = useState([
    {
      title: '대한민국 고궁 투어',
      rating: '5.0',
      reviews: 23,
      price: '123,000원',
      badgeCount: 16,
      updateDate: '2024.01.05',
      isDisabled: true,
    },
    {
      title: '부산 국밥 투어',
      rating: '4.1',
      reviews: 28,
      price: '50,000원',
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
    {
      title: '대한민국 고궁 투어',
      rating: '5.0',
      reviews: 23,
      price: '123,000원',
      badgeCount: 16,
      updateDate: '2024.01.05',
      isDisabled: true,
    },
  ]);

  const handleEnableCard = (index: number) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip, i) => (i === index ? { ...trip, isDisabled: false } : trip)),
    );
  };

  return (
    <ScrollableContainer>
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
            onEnable={() => handleEnableCard(index)}
          />
        ))}
      </MyMadeTripsContainer>
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
