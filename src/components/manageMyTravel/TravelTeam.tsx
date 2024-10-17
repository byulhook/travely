import { css } from '@emotion/react';
import UserTable from '@/components/manageMyTravel/UserTable';
import { travelTeamData } from '@/types/travelDataType';
import Team from '@/components/Team';
import MultiPagination from '@/components/manageMyTravel/MultiPagination';

interface TravelTeamProps {
  data: travelTeamData[];
}

const TravelTeam = ({ data }: TravelTeamProps) => {
  const userMBTIList: string[][] = [];
  data.forEach((d) => {
    const approvalUserMBTIList = d.appliedUser.filter((u) => u.status === 'approved');
    userMBTIList.push([...approvalUserMBTIList.map((u) => u.mbti)]);
  });

  return (
    <>
      {data.map((travelTeam, i) => (
        <div key={travelTeam.travelStartDate} css={teamWrappeer}>
          <p>{travelTeam.travelStartDate + ' ~ ' + travelTeam.travelEndDate}</p>
          <Team max={travelTeam.personLimit} mbtiList={userMBTIList[i]} />
          <UserTable data={travelTeam.appliedUser} id={i} />
          <MultiPagination travelTeam={travelTeam} id={i} />
        </div>
      ))}
    </>
  );
};

export default TravelTeam;

const teamWrappeer = css`
  margin-bottom: 20px;
  & p {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
