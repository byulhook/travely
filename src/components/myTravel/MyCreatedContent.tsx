import UserInfo from '@/components/myTravel/UserInfo';
import Team from '@/components/Team';
import styled from '@emotion/styled';
import { data } from '@/data/travelMockData';
// 남은 일수 계산 함수
const calculateDaysRemaining = (endDateString: string) => {
  const today = new Date();

  // '25.01.28' 형식을 '2025-01-28' 형식으로 변환
  const formattedEndDateString = `20${endDateString.split('.').join('-')}`; // '25.01.28' -> '2025-01-28'
  const endDate = new Date(formattedEndDateString);

  // 날짜 차이를 밀리초 단위로 계산한 후 일 단위로 변환
  const timeDiff = endDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24)); // 하루 단위로 계산

  return daysRemaining;
};

const MyCreatedContent = () => {
  const userName = '손성오';
  const userId = 'seong5@gmail.com';

  // userName과 userId가 모두 일치하는 여행 필터링
  const filteredTeams = data.travelTeams.filter((team) =>
    team.appliedUser.some((user) => user.userName === userName && user.userId === userId),
  );

  return (
    <GridContainer>
      {filteredTeams.length > 0 ? (
        filteredTeams.map((team, index) => {
          const appliedUsers = team.appliedUser.filter((user) => user.status === 'approved');
          const currentUser = team.appliedUser.find(
            (user) => user.userName === userName && user.userId === userId,
          ); // 현재 유저 데이터

          // 여행 종료일로부터 남은 일 계산
          const daysRemaining = calculateDaysRemaining(team.travelEndDate);

          return (
            <TripCardContainer key={index}>
              <Header>
                <Title>{data.travelTitle}</Title>
                <DaysRemaining>{`D-${daysRemaining}`}</DaysRemaining> {/* 남은 일수 표시 */}
              </Header>
              {currentUser && (
                <>
                  <UserInfoContainer>
                    <UserInfo
                      name={currentUser.userName}
                      contact={`kakao: ${currentUser.userId}`}
                      profileImage={currentUser.userProfileImage}
                    />
                  </UserInfoContainer>
                  <DateInfo>{`${team.travelStartDate} ~ ${team.travelEndDate}`}</DateInfo>
                  <Team max={team.personLimit} mbtiList={appliedUsers.map((user) => user.mbti)} />
                </>
              )}
              <Confirmation>예약확정</Confirmation>
            </TripCardContainer>
          );
        })
      ) : (
        <p>손성오님이 참여한 여행이 없습니다.</p>
      )}
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

const Confirmation = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  text-align: right;
  padding-top: 4px;
`;
