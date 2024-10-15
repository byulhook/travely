import { css } from '@emotion/react';
import UserTable from '@/components/manageMyTravel/UserTable';
import { travelTeamData } from '@/types/travelDataType';

interface OngoingTripProps {
  data: travelTeamData[];
}

const OngoingTrip = ({ data }: OngoingTripProps) => {
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

export default OngoingTrip;

const teamWrappeer = css`
  margin-bottom: 20px;
  & p {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
