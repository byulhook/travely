import { css } from '@emotion/react';
import SideContainerHeader from '../components/travelDetail/SideContainerHeader';
import SideTravelTeam, { TeamInfo } from '../components/travelDetail/SideTravelTeam';
import Rating from '../components/Rating';
import image from '../assets/kt.jpg';

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
        <div css={titleContainer}>
          <h1>한국의 고궁 투어 ( 너무 너무 재밌어요 )</h1>
          <Rating rating="5.0" />
        </div>
        <div css={imageContainer}>
          <img src={image} alt="image" />
        </div>
        <p>
          #food #travel #korea #culture #history
        </p>
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
  margin-top: 40px;
`;

const mainContainer = css`
  width: 680px;
  height: 100%;
  margin-right: 60px;
`;

const sideContainer = css`
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const titleContainer = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 14px;
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }
`;

const imageContainer = css`
  width: 100%;
  height: 360px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 14px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
