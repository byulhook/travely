import { css } from '@emotion/react';
import UserTable from '@/components/manageMyTravel/UserTable';
import { ScheduleData } from '@/types/travelDataType';

interface OngoingTripProps {
  data: ScheduleData[];
}

const OngoingTrip = ({ data }: OngoingTripProps) => {
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

export default OngoingTrip;

const scheduleWrappeer = css`
  margin-bottom: 20px;
  & p {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
