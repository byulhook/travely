import useHeaderWithVisual from '@/hooks/useHeaderWithVisual';
import Header from '@/layouts/Header';
import HeaderWithVisual from '@/layouts/HeaderWithVisual';
import { css, SerializedStyles } from '@emotion/react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {
  customStyle?: SerializedStyles;
}

const Main: React.FC<RootLayoutProps> = ({ customStyle }) => {
  const isHeaderWithVisual = useHeaderWithVisual();
  return (
    <>
      {isHeaderWithVisual ? <HeaderWithVisual /> : <Header />}
      <main css={[mainStyle, customStyle]}>
        <Outlet />
      </main>
    </>
  );
};

export const mainStyle = css`
  margin: 0 auto;
  max-width: 1080px;
  min-height: 100vh;
`;
export default Main;
