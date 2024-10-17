import UserInfo from '@/components/myTravel/UserInfo';
import Team from '@/components/Team';
import styled from '@emotion/styled';
import { travelMyJoinedData } from '@/data/travelMyJoinedMockData';

// 남은 일수 계산 함수
const calculateDaysRemaining = (endDateString: string) => {
  const today = new Date();
  const endDate = new Date(endDateString);
  const timeDiff = endDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysRemaining;
};

const MyCreatedContent = () => {
  return (
    <GridContainer>
      {travelMyJoinedData.map((travelData, index) => {
        const currentUser = travelData.currentUserStatus; // 현재 사용자 정보
        const guide = travelData.guideInfo; // 가이드 정보
        const daysRemaining = calculateDaysRemaining(travelData.travelTeam.travelEndDate); // 남은 일수 계산

        return (
          <TripCardContainer key={index}>
            <Header>
              <Title>{travelData.travelTitle}</Title>
              <DaysRemaining>{`D-${daysRemaining}`}</DaysRemaining> {/* 남은 일수 표시 */}
            </Header>

            <UserInfoContainer>
              <UserInfo
                name={guide.userName}
                contact={guide.userEmail}
                profileImage={guide.userProfileImg}
              />
            </UserInfoContainer>

            <DateInfo>
              {`${travelData.travelTeam.travelStartDate} ~ ${travelData.travelTeam.travelEndDate}`}
            </DateInfo>

            <Team
              max={travelData.travelTeam.personLimit}
              mbtiList={travelData.travelTeam.approvedMembersMbti.mbti}
            />

            <CurrentUserStatus>
              {currentUser.status === 'approved' && <p>승인됨</p>}
              {currentUser.status === 'waiting' && <p>대기 중</p>}
              {currentUser.status === 'refused' && <p>거절됨</p>}
            </CurrentUserStatus>

            <ReviewWritten reviewWritten={travelData.reviewWritten}>
              {travelData.reviewWritten ? '리뷰 작성 완료' : '리뷰 미작성'}
            </ReviewWritten>

            <Confirmation>예약확정</Confirmation>
          </TripCardContainer>
        );
      })}
    </GridContainer>
  );
};

export default MyCreatedContent;

// 스타일 정의는 그대로 유지
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

const TripCardContainer = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 18px;
  background-color: #fff;
  width: 344px;
  height: 233px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const DaysRemaining = styled.span`
  font-size: 16px;
  color: #888;
`;

const UserInfoContainer = styled.div`
  margin-bottom: 18px;
`;

const DateInfo = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #555555;
  margin-bottom: 10px;
`;

const CurrentUserStatus = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #444;
`;

interface ReviewWrittenProps {
  reviewWritten: boolean;
}

const ReviewWritten = styled.div<ReviewWrittenProps>`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.reviewWritten ? '#4CAF50' : '#FF5252')};
`;

const Confirmation = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  text-align: right;
  padding-top: 4px;
`;
