import { css, SerializedStyles } from '@emotion/react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {
  customStyle?: SerializedStyles;
}

const Main: React.FC<RootLayoutProps> = ({ customStyle }) => {
  return (
    <>
      <main css={[mainStyle, customStyle]}>
        <Outlet />
      </main>
    </>
  );
};

export const mainStyle = css`
  min-height: 100vh;
  padding-top: 70px; /* 테스트용 헤더 높이만큼 여백 추가 */
  background-color: #f5f5f5;
`;
export default Main;
