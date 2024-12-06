import useHeaderWithVisual from '@/hooks/custom/useHeaderWithVisual';
import BreadCrumb from '@/layouts/Breadcrumb';
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
        <BreadCrumb />
        <Outlet />
      </main>
    </>
  );
};

export const mainStyle = css`
  margin: 0 auto 50px;
  max-width: 1080px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;
export default Main;
