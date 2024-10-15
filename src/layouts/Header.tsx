import Auth from '@/layouts/\bAuth';
import Logo from '@/layouts/Logo';
import Nav from '@/layouts/Nav';
import { css } from '@emotion/react';

const Header = () => {
  return (
    <div css={headerWrap}>
      <header>
        <div className="header-inner">
          <div className="header-left">
            <Logo />
            <Nav />
          </div>
          <Auth />
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
    justify-content: space-between;
    .header-left {
      display: flex;
      align-items: center;
    }
  }
`;
