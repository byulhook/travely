import { css } from '@emotion/react';
import UserTable from '@/components/manageMyTravel/UserTable';
import { TravelTeamData } from '@/types/travelDataType';
import Team from '@/components/Team';
import MultiPagination from '@/components/manageMyTravel/MultiPagination';

interface TravelTeamProps {
  travelTeamData: TravelTeamData[];
}

const TravelTeam = ({ travelTeamData }: TravelTeamProps) => {
  const userMBTIList = travelTeamData.map((team) =>
    team.appliedUser.filter((user) => user.status === 'approved').map((user) => user.mbti),
  );

  return (
    <>
      {travelTeamData.map((team, i) => (
        <div key={team.teamId} css={teamWrapper}>
          <p>{team.travelStartDate + ' ~ ' + team.travelEndDate}</p>
          <Team max={team.personLimit} mbtiList={userMBTIList[i]} />
          <UserTable data={team.appliedUser} teamId={team.teamId} />
          <MultiPagination pageData={team.pagination} teamId={team.teamId} />
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
