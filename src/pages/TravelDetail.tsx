import { css } from '@emotion/react';
import SideContainerHeader from '../components/travelDetail/SideContainerHeader';
import SideTravelTeam, { TeamInfo } from '../components/travelDetail/SideTravelTeam';
import Rating from '../components/Rating';
import image from '../assets/kt.jpg';
import { MapPin } from 'lucide-react';
import MoreBtn from '../components/travelDetail/MoreBtn';
import Check from '../assets/check.png';
import Remove from '../assets/remove.png';
import Location from '../assets/map.png';

const TravelDetail = () => {
  const price = 123000;
  const bookmark = 27;

  const teams: TeamInfo[] = [
    { period: '25.01.25 ~ 25.02.25', maxMembers: 7, mbtiList: ['ENTJ', 'INFJ', 'ISFJ', 'INFP'] },
    { period: '25.03.01 ~ 25.03.10', maxMembers: 5, mbtiList: ['ESTP', 'INTJ', 'ESFP'] },
    { period: '25.04.15 ~ 25.04.20', maxMembers: 6, mbtiList: ['ENFJ', 'ISTP', 'ENFP', 'ISTJ'] },
    { period: '25.05.05 ~ 25.05.15', maxMembers: 4, mbtiList: ['INTP', 'ESFJ'] },
  ];

  const courses = [
    "경복궁 관람 및 역사 해설",
    "창덕궁과 비밀정원 탐방",
    "점심 국밥 5그릇 싹 조질 예정",
    "종묘 탐방과 제례 문화 이해"
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
        <div css={tagContainer}>
          <p>
            #food #travel #korea #culture #history
          </p>
        </div>
        <div css={descriptionContainer}>
          <h2>여행 소개</h2>
          <div css={descriptionContent}>
            <p>
              한국의 고궁 투어 ( 너무 너무 재밌어요 )
            </p>
            <MoreBtn />
          </div>
        </div>
        <div css={courseContainer}>
          <h2>여행 코스</h2>
          {courses.map((course, index) => (
            <div key={index} css={courseContent}>
              <MapPin size={20} />
              <p>{course}</p>
            </div>
          ))}
          <MoreBtn />
        </div>
        <div css={noticeContainer}>
          <h2>포함 · 미포함 사항</h2>
          <div css={noticeContent}>
            <img src={Check} alt="check" />
            <div>
              <p>포함되어 있어요</p>
            </div>
          </div>
          <div css={noticeContent}>
            <img src={Remove} alt="remove" />
            <p>미포함된 사항이에요. 주의 해주세요</p>
          </div>
        </div>
        <div css={infoContainer}>
          <h2>이용 안내</h2>
          <h3>만나는 시간</h3>
          <p>오전 9시30분
          늦으실시 기다려드리는것이 불가능합니다. 시간을 엄수해주세요.</p>
          <div css={infoLocation}>
            <h3>만나는 장소</h3>
            <img src={Location} alt="location" />
          </div>
        </div>
        <div css={reviewContainer}>afsasdfasdfasd</div>
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
  width: 680px;
  height: 360px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 14px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const tagContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;

  p {
    font-size: 14px;
    font-weight: 500;
    color: #555;
  }
`;

const descriptionContainer = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
`;

const descriptionContent = css`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  background-color: #F7F7F7;
  border-radius: 8px;

  p {
    font-size: 14px;
    font-weight: 500;
    color: #444;
  }

`;

const courseContainer = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
`;

const courseContent = css`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px;
  background-color: #F7F7F7;
  border-radius: 8px;
  gap: 12px;
  p {
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
`;

const noticeContainer = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
`;

const noticeContent = css`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }
`;

const infoContainer = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin-bottom: 14px;
  }
`;

const infoLocation = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  img {
    width: 680px;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
  }
`;


const reviewContainer = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

