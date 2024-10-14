import { css } from '@emotion/react';

const MoreBtn = () => {
  return <button css={moreBtn}>더보기</button>;
};

export default MoreBtn;

const moreBtn = css`
  width: 100%;
  height: 34px;
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  border: 1px solid #E2E2E2;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-top: auto;
`;
