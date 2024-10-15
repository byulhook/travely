import { css, SerializedStyles } from '@emotion/react';

import Main from '@/layouts/Main';
import ScrollToTop from '@/utils/ScrollToTop';

interface ContainerLayoutProps {
  customStyle?: SerializedStyles;
  mainCustomStyle?: SerializedStyles;
}

const ContainerLayout: React.FC = ({ customStyle, mainCustomStyle }: ContainerLayoutProps) => {
  return (
    <ScrollToTop>
      <div css={[containerStyle, customStyle]}>
        <Main customStyle={mainCustomStyle} />
      </div>
    </ScrollToTop>
  );
};

const containerStyle = css`
  min-width: 1080px;
`;

export default ContainerLayout;
