import ChoiceTags from '@/components/addTravel/ChoiceTags';
import Details from '@/components/addTravel/Details';
import Introduction from '@/components/addTravel/Introduction';
import Thumbnail from '@/components/addTravel/Thumbnail';
import GrayBack from '@/components/GrayBack';
import { css } from '@emotion/react';

const AddTravel = () => {
  return (
    <div css={addTravelWrapper}>
      <h1>새로운 여행 계획하기</h1>
      <GrayBack title={'제목'} padding={true}>
        <input css={noneStyleInput} type="text" placeholder="30자 내외로 작성해주세요." />
      </GrayBack>
      <Thumbnail />
      <Introduction />
      <ChoiceTags />
      <GrayBack title={'가격'} price={true} padding={true}>
        <input css={noneStyleInput} type="number" placeholder="0" />
        <span css={{ marginRight: '5px' }}>원</span>
        <span css={{ fontSize: '14px' }}>/ 1인</span>
      </GrayBack>
      <Details title={'포함내용'} />
      <Details title={'미포함내용'} />
      <Details title={'FAQ'} />
    </div>
  );
};

export default AddTravel;

const addTravelWrapper = css`
  width: 680px;
  & h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  & p {
    font-size: 18px;
    margin-top: 15px;
  }
`;

const noneStyleInput = css`
  width: 100%;
  background-color: transparent;
  border: none;
`;
