import { css } from '@emotion/react';
import UserTable from '@/components/manageMyTravel/UserTable';
import { travelTeamData } from '@/types/travelDataType';
import Team from '@/components/Team';
import MultiPagination from '@/components/manageMyTravel/MultiPagination';

interface OngoingTravelProps {
  data: travelTeamData[];
}

const OngoingTravel = ({ data }: OngoingTravelProps) => {
  const userMBTIList: string[][] = [];
  data.forEach((d) => {
    const approvalUserMBTIList = d.appliedUser.filter((u) => u.status === 'approval');
    userMBTIList.push([...approvalUserMBTIList.map((u) => u.mbti)]);
  });

  return (
    <>
      {data.map((travelTeam, i) => (
        <div key={travelTeam.travelStartDate} css={teamWrappeer}>
          <p>{travelTeam.travelStartDate + ' ~ ' + travelTeam.travelEndDate}</p>
          <Team max={travelTeam.personLimit} mbtiList={userMBTIList[i]} />
          <UserTable data={travelTeam.appliedUser} />
          <MultiPagination travelTeam={travelTeam} />
        </div>
      ))}
    </>
  );
};

export default OngoingTravel;

const teamWrappeer = css`
  margin-bottom: 20px;
  & p {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
