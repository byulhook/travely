import { css, SerializedStyles } from '@emotion/react';

import Main from '@/layouts/Main';

interface ContainerLayoutProps {
  customStyle?: SerializedStyles;
  mainCustomStyle?: SerializedStyles;
}

const Header = () => (
  // 테스트용 헤더 컴포넌트
  <header
    css={css`
      position: fixed;
      top: 0;
      left: 0;
      background-color: black; /* 테스트용 헤더 배경색 */
      height: 70px; /* 테스트용 헤더 높이 */
      width: 100%;
      color: white;
    `}
  >
    <h1>테스트용 헤더</h1>
  </header>
);

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
