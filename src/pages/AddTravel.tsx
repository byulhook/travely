import ChoiceTags from '@/components/addTravel/ChoiceTags';
import Course from '@/components/addTravel/Course';
import ScheduleTeam from '@/components/addTravel/ScheduleTeam';
import Details from '@/components/addTravel/Details';
import { FloatingMenu } from '@/components/addTravel/FloatingMenu';
import Introduction from '@/components/addTravel/Introduction';
import Thumbnail from '@/components/addTravel/Thumbnail';
import GrayBack from '@/components/GrayBack';
import { css } from '@emotion/react';
import { useRef } from 'react';

const AddTravel = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  return (
    <div css={pageLayoutWrapper}>
      <div css={addTravelWrapper}>
        <h1>새로운 여행 계획하기</h1>
        <GrayBack title={'제목'} padding={true}>
          <input
            ref={titleRef}
            css={noneStyleInput}
            type="text"
            placeholder="30자 내외로 작성해주세요."
          />
        </GrayBack>
        <Thumbnail />
        <Introduction />
        <Course />
        <ChoiceTags />
        <ScheduleTeam />
        <GrayBack title={'가격'} price={true} padding={true}>
          <input ref={priceRef} css={noneStyleInput} type="number" placeholder="0" />
          <span css={{ marginRight: '5px' }}>원</span>
          <span css={{ fontSize: '14px' }}>/ 1인</span>
        </GrayBack>
        <Details title={'포함내용'} />
        <Details title={'미포함내용'} />
        <Details title={'이용안내'} />
        <Details title={'FAQ'} />
      </div>
      <FloatingMenu />
    </div>
  );
};

export default AddTravel;

const addTravelWrapper = css`
  position: relative;
  width: 680px;
  margin-right: 200px;
  & h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const noneStyleInput = css`
  width: 100%;
  background-color: transparent;
  border: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

const pageLayoutWrapper = css`
  display: flex;
  position: relative;
`;
