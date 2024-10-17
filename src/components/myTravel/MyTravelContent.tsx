import { useState } from 'react';
import styled from '@emotion/styled';
import TripCard from './MyTravelCard';
import { travelMyCreateMockData } from '@/data/travelMyCreateMockData';

const MyTravelContent = () => {
  const [trips, setTrips] = useState(travelMyCreateMockData);

  const handleEnableCard = (index: number) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip, i) => (i === index ? { ...trip, travelActive: true } : trip)),
    );
  };

  return (
    <ScrollableContainer>
      <MyMadeTripsContainer>
        {trips.map((trip, index) => (
          <TripCard
            key={index}
            title={trip.travelInfo.travelTitle}
            rating={trip.travelInfo.travelTotalScore}
            reviews={trip.travelInfo.travelReviewCount}
            price={trip.travelInfo.travelPrice}
            badgeCount={trip.approveWaitingCount}
            updateDate={trip.travelInfo.updateAt}
            isDisabled={!trip.travelActive}
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
