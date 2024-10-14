import GrayBack from '@/components/GrayBack';
import { css } from '@emotion/react';

const Introduction = () => {
  return (
    <GrayBack title={'상품 소개'} padding={true}>
      <textarea css={textbox} placeholder="1,000자 내외로 작성해주세요." />
    </GrayBack>
  );
};

export default Introduction;

const textbox = css`
  width: 100%;
  background-color: transparent;
  border: none;
`;
