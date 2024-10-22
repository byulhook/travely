import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import logoBlack from '@/assets/logo-black.png';
import logoWhite from '@/assets/logo-white.png';

const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <h1 css={logo}>
      <Link to="/">
        <img src={light ? logoWhite : logoBlack} alt="" />
      </Link>
    </h1>
  );
};

export default Logo;

const logo = css`
  width: 100px;
  margin-right: 100px;
`;
