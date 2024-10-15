import Visual from '@/layouts/Visual';
import Logo from '@/layouts/Logo';
import { css } from '@emotion/react';
import Nav from '@/layouts/Nav';
import Auth from '@/layouts/\bAuth';

const HeaderWithVisual = () => {
  return (
    <div css={headerWrap}>
      <Visual />
      <header>
        <div className="header-inner">
          <div className="header-left">
            <Logo light={true} />
            <Nav light={true} />
          </div>
          <Auth light={true} />
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
    justify-content: space-between;
    .header-left {
      display: flex;
      align-items: center;
    }
  }
`;
