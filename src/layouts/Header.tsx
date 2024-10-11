import theme from '@/styles/theme';
import { css } from '@emotion/react';

const Header = () => {
  // 테스트용 헤더 컴포넌트
  return (
    <header css={headerStyle}>
      <h1>테스트용 헤더</h1>
    </header>
  );
};
const headerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black; /* 테스트용 헤더 배경색 */
  height: ${theme.height.header}; /* 테스트용 헤더 높이 */
  width: 100%;
  color: white;
`;

export default Header;
