import { css } from '@emotion/react';
import UserTable from '@/components/manageMyTravel/UserTable';
import { travelTeamData } from '@/types/travelDataType';

interface CompletedTravelProps {
  data: travelTeamData[];
}
const CompletedTravel = ({ data }: CompletedTravelProps) => {
  return (
    <>
      {data.map((travelTeam) => (
        <div key={travelTeam.travelStartDate} css={teamWrappeer}>
          <p>{travelTeam.travelStartDate + ' ~ ' + travelTeam.travelEndDate}</p>
          <UserTable data={travelTeam.appliedUser} />
        </div>
      ))}
    </>
  );
};

export default CompletedTravel;
const teamWrappeer = css`
  margin-bottom: 20px;
  & p {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
