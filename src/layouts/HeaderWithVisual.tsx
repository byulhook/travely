import Visual from '@/layouts/Visual';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const HeaderWithVisual = () => {
  return (
    <div css={headerWrap}>
      <Visual />
      <header>
        <div className="header-inner">
          <h1>
            <Link to="/">
              <img src="/src/assets/logo-white.png" alt="" />
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

export default HeaderWithVisual;

const headerWrap = css`
  position: relative;
  height: 330px;
  header {
    position: absolute;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    color: #fff;
  }

  .header-inner {
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    h1 {
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
