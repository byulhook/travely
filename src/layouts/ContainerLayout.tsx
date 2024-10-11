import { css, SerializedStyles } from '@emotion/react';

import Main from '@/layouts/Main';
import Header from '@/layouts/Header';

interface ContainerLayoutProps {
  customStyle?: SerializedStyles;
  mainCustomStyle?: SerializedStyles;
}

const ContainerLayout: React.FC = ({ customStyle, mainCustomStyle }: ContainerLayoutProps) => {
  return (
    <div css={[containerStyle, customStyle]}>
      <Header />
      <Main customStyle={mainCustomStyle} />
    </div>
  );
};

const containerStyle = css`
  margin: 0 auto;
  max-width: 1080px;
  box-sizing: border-box;
  background-color: aliceblue; /* 테스트용 컨테이너 배경색 */
`;

export default ContainerLayout;
