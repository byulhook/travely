import { tagDatas } from '@/data/tagDatas';
import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';

const Visual = () => {
  const location = useLocation();
  const path = location.pathname.split('/').filter((item) => item !== '')[1];
  if (!path) return null;
  const pageTitle = tagDatas.filter((data) => data.path === path)[0].name;
  const imgSrc = tagDatas.filter((data) => data.path === path)[0].imgSrc;

  return (
    <div css={visual(imgSrc)}>
      <div className="black-cover"></div>
      <h2>{pageTitle}</h2>
    </div>
  );
};

export default Visual;

const visual = (imgSrc: string) => css`
  width: 100%;
  height: 330px;
  position: absolute;
  background: url(${imgSrc}) center center no-repeat;
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
