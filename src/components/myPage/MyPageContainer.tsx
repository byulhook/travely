import MyPageSideMenu from '@/components/myPage/MyPageSideMenu';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

const MyPageContainerLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/my-page/') {
      navigate('/my-page/my-account');
    }
  }, [location.pathname, navigate]);

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
  gap: 80px;
  position: relative;
  top: 60px;
`;

export default MyPageContainerLayout;
