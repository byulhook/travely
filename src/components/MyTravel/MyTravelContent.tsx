import React from 'react';
import { useTabStore } from '@/stores/tabStore'; // Zustand에서 상태를 가져옴
import styled from '@emotion/styled';

const MyTravelContent = () => {
  const { selectedTab } = useTabStore(); // Zustand에서 상태를 가져옴

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
          {[1, 2, 3, 4, 5, 6].map((trip, index) => (
            <TripCard key={index}>
              <TripInfo>
                <TitleContainer>
                  <Title>대한민국 고궁 투어</Title>
                  <RatingContainer>
                    <Star>★</Star>
                    <RatingScore>5.0</RatingScore>
                    <RatingCount>(23)</RatingCount>
                  </RatingContainer>
                </TitleContainer>
                <Price>
                  123,000원 <PricePerPerson>/ 1인</PricePerPerson>
                </Price>
                <Buttons>
                  <ManageButtonContainer>
                    <ManageButton>관리</ManageButton>
                    <ManageBadge>16</ManageBadge>
                  </ManageButtonContainer>
                  <EditButton>수정</EditButton>
                </Buttons>
                <UpdateDate>업데이트: 2024.01.05</UpdateDate>
              </TripInfo>
            </TripCard>
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

const TripCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 18px;
  background-color: #fff;
  width: 344px;
  height: 190px;
  gap: 40px;
`;

const TripInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: #ffbf00;
  font-size: 14px;
`;

const RatingScore = styled.span`
  color: black;
  font-size: 14px;
  margin-left: 5px;
`;

const RatingCount = styled.span`
  color: #888;
  font-size: 14px;
  margin-left: 5px;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 26px;
`;

const PricePerPerson = styled.span`
  font-size: 20px;
  color: #888; /* 회색 */
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  gap: 30px;
  width: 100%;
`;

const ManageButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const ManageButton = styled.button`
  background-color: #4a95f2;
  color: white;
  border: none;
  padding: 8px;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ManageBadge = styled.span`
  background-color: #ff5757;
  color: white;
  padding: 2px 8px;
  border-radius: 24px;
  font-size: 12px;
  position: absolute;
  top: -8px;
  right: -10px;
`;

const EditButton = styled.button`
  background-color: #e0e0e0;
  color: #888;
  border: none;
  padding: 8px;
  border-radius: 8px;
  margin-left: 10px;
  height: 30px;
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpdateDate = styled.p`
  font-size: 12px;
  color: #999;
  margin-left: auto;
  text-align: right;
`;

export default MyTravelContent;
