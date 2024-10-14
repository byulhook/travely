import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div css={headerWrap}>
      <header>
        <div className="header-inner">
          <h1>
            <Link to="/">
              <img src="/src/assets/logo.png" alt="" />
            </Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/travel-list">함께 떠나요</Link>
              </li>
              <li>
                <Link to="">가이드 찾아요</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

const headerWrap = css`
  header {
    height: 80px;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: border-box;
  }

  .header-inner {
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    h1 {
      width: 100px;
      margin-right: 100px;
    }
    nav {
      ul {
        display: flex;
        gap: 40px;

        li {
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
`;
