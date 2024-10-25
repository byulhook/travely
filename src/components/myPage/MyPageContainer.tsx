import MyPageSideMenu from '@/components/myPage/MyPageSideMenu';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

const MyPageContainerLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const managePage = location.pathname.startsWith('/my-page/my-created-travel/manage-my-travel/');

  useEffect(() => {
    if (location.pathname === '/my-page/') {
      navigate('/my-page/my-account');
    }
  }, [location.pathname, navigate]);

  return (
    <div css={myPageLayout(managePage)}>
      {managePage ? null : <MyPageSideMenu />}
      <Outlet />
    </div>
  );
};

const myPageLayout = (managePage: boolean) => css`
  display: ${managePage ? 'block' : 'flex'};
  gap: 60px;
  position: relative;
`;

export default MyPageContainerLayout;
