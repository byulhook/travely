import { css, SerializedStyles } from '@emotion/react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {
  customStyle?: SerializedStyles;
}

const RootLayout: React.FC<RootLayoutProps> = ({ customStyle }) => {
  return (
    <>
      <main css={[mainStyle, customStyle]}>
        <Outlet />
      </main>
    </>
  );
};

export const mainStyle = css`
  height: 100vh;
  width: 100%;
`;
export default RootLayout;
