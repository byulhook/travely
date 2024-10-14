import { css } from '@emotion/react';

const Visual = () => {
  return (
    <div css={visual}>
      <div className="black-cover"></div>
      <h2>JEJU</h2>
    </div>
  );
};

export default Visual;

const visual = css`
  width: 100%;
  height: 330px;
  position: absolute;
  background: url('/src/assets/jeju.png') center center no-repeat;
  background-size: cover;
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    font-size: 82px;
    font-weight: bold;
    color: #fff;
  }
  .black-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;
