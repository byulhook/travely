import GrayBack from '@/components/GrayBack';
import { css } from '@emotion/react';

const Thumbnail = () => {
  return (
    <GrayBack title={'대표 이미지'}>
      <div css={thumnailSize}></div>
    </GrayBack>
  );
};

export default Thumbnail;

const thumnailSize = css`
  width: 100%;
  height: 400px;
`;
