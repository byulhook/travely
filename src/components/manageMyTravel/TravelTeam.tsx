import { css } from '@emotion/react';
import UserTable from '@/components/manageMyTravel/UserTable';
import { TravelTeamData } from '@/types/travelDataType';
import Team from '@/components/Team';
import MultiPagination from '@/components/manageMyTravel/MultiPagination';
import { formatDate } from '@/utils/format';

interface TravelTeamProps {
  travelId: string;
  travelTeamData: TravelTeamData[];
  isOngoing: boolean;
}

const TravelTeam = ({ travelId, travelTeamData, isOngoing }: TravelTeamProps) => {
  if (travelTeamData?.length < 1)
    return <div css={noData}>{isOngoing ? '진행중인' : '완료된'} 여행이 없습니다.</div>;

  const userMBTIList = travelTeamData.map((team) => team.approvedUsers?.map((user) => user.mbti));

  return (
    <>
      {travelTeamData.map((team, i) => (
        <div key={team.teamId} css={teamWrapper}>
          <p>{formatDate(team.travelStartDate) + ' ~ ' + formatDate(team.travelEndDate)}</p>
          <Team max={team.personLimit} mbtiList={userMBTIList[i]} />
          {team.appliedUsers?.length > 0 ? (
            <>
              <UserTable data={team.appliedUsers} />
              <MultiPagination
                travelId={travelId}
                pageData={team.pagination}
                teamId={team.teamId}
              />
            </>
          ) : (
            <div css={noData}>신청한 유저가 없습니다.</div>
          )}
        </div>
      ))}
    </>
  );
};

export default TravelTeam;

const teamWrapper = css`
  margin-bottom: 20px;
  & p {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const noData = css`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  color: #888;
  margin: 100px;
`;
