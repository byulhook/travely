import { css } from '@emotion/react';
import UserTable from '@/components/manageMyTravel/UserTable';
import { travelTeamData } from '@/types/travelDataType';

interface CompletedTripProps {
  data: travelTeamData[];
}
const CompletedTrip = ({ data }: CompletedTripProps) => {
  return (
    <>
      {data.map((travelTeam) => (
        <div key={travelTeam.travelStartDate} css={teamWrappeer}>
          <p>{travelTeam.travelStartDate + ' ~ ' + travelTeam.travelEndDate}</p>
          <UserTable data={travelTeam.appliedUserId} />
        </div>
      ))}
    </>
  );
};

export default CompletedTrip;
const teamWrappeer = css`
  margin-bottom: 20px;
  & p {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
