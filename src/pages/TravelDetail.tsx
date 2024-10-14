import { css } from '@emotion/react';
import SideContainerHeader from '../components/travelDetail/SideContainerHeader';
import SideTravelTeam, { TeamInfo } from '../components/travelDetail/SideTravelTeam';

const TravelDetail = () => {
  const price = 123000;
  const bookmark = 27;

  const teams: TeamInfo[] = [
    { period: '25.01.25 ~ 25.02.25', maxMembers: 7, mbtiList: ['ENTJ', 'INFJ', 'ISFJ', 'INFP'] },
    { period: '25.03.01 ~ 25.03.10', maxMembers: 5, mbtiList: ['ESTP', 'INTJ', 'ESFP'] },
    { period: '25.04.15 ~ 25.04.20', maxMembers: 6, mbtiList: ['ENFJ', 'ISTP', 'ENFP', 'ISTJ'] },
    { period: '25.05.05 ~ 25.05.15', maxMembers: 4, mbtiList: ['INTP', 'ESFJ'] },
  ];

  return (
    <div css={travelDetailContainer}>
      <div css={mainContainer}>
        fsadfasd
      </div>

      <div css={sideContainer}>
        <SideContainerHeader price={price} bookmark={bookmark} />
        <SideTravelTeam teams={teams} />
      </div>
    </div>
  );
};

export default TravelDetail;

const travelDetailContainer = css`
  display: flex;
  flex-direction: space-between;
`;

const mainContainer = css`
  width: 680px;
  height: 100%;
  background: red;
  margin-right: 60px;
`;

const sideContainer = css`
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
