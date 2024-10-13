import { css } from '@emotion/react';
import UserTable from '@/components/manageMyTravel/UserTable';
import { ScheduleData } from '@/types/travelDataType';

interface CompletedTripProps {
  data: ScheduleData[];
}
const CompletedTrip = ({ data }: CompletedTripProps) => {
  return (
    <>
      {data.map((schedule) => (
        <div key={schedule.travelDate} css={scheduleWrappeer}>
          <p>{schedule.travelDate}</p>
          <UserTable data={schedule.applicationUser} />
        </div>
      ))}
    </>
  );
};

export default CompletedTrip;
const scheduleWrappeer = css`
  margin-bottom: 20px;
  & p {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
