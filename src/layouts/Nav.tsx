import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav css={nav}>
      <ul>
        <li>
          <Link to="/travel-list">함께 떠나요</Link>
        </li>
        <li>
          <Link to="">가이드 찾아요</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

const nav = css`
  ul {
    display: flex;
    gap: 40px;

    li {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
