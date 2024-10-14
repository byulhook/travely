import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <h1 css={logo}>
      <Link to="/">
        <img src={`/src/assets/${light ? 'logo-white' : 'logo'}.png`} alt="" />
      </Link>
    </h1>
  );
};

export default Logo;

const logo = css`
  width: 100px;
  margin-right: 100px;
`;
