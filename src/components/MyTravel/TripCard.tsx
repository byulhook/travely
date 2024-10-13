import React from 'react';
import styled from '@emotion/styled';
import Rating from '../Rating';

interface ITripCardProps {
  title: string;
  rating: string;
  reviews: number;
  price: string;
  badgeCount: number;
  updateDate: string;
}

const TripCard: React.FC<ITripCardProps> = ({
  title,
  rating,
  reviews,
  price,
  badgeCount,
  updateDate,
}) => {
  return (
    <TripCardContainer>
      <TripInfo>
        <TitleContainer>
          <Title>{title}</Title>
          <Rating rating={rating} reviewCount={String(reviews)} />
        </TitleContainer>
        <Price>
          {price} <PricePerPerson>/ 1인</PricePerPerson>
        </Price>
        <Buttons>
          <ManageButtonContainer>
            <ManageButton>관리</ManageButton>
            <ManageBadge>{badgeCount}</ManageBadge>
          </ManageButtonContainer>
          <EditButton>수정</EditButton>
        </Buttons>
        <UpdateDate>업데이트: {updateDate}</UpdateDate>
      </TripInfo>
    </TripCardContainer>
  );
};

// 스타일 정의
const TripCardContainer = styled.div`
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

export default TripCard;
