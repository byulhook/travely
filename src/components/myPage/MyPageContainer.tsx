import MyPageSideMenu from '@/components/myPage/MyPageSideMenu';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const MyPageContainerLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/my-page/') {
      navigate('/my-page/my-account');
    }
  }, [location.pathname]);

  return (
    <div css={myPageLayout}>
      <MyPageSideMenu />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

const myPageLayout = css`
  display: flex;
  gap: 30px;
  position: relative;
  top: 30px;
`;

export default MyPageContainerLayout;
