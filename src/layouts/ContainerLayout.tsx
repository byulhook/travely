import { css, SerializedStyles } from '@emotion/react';

import RootLayout from '@/layouts/RootLayout';

interface ContainerLayoutProps {
  customStyle?: SerializedStyles;
}

const ContainerLayout: React.FC = ({ customStyle }: ContainerLayoutProps) => {
  return (
    <div css={[containerStyle, customStyle]}>
      <header>header</header>
      <RootLayout />
      <footer>footer</footer>
    </div>
  );
};

const containerStyle = css`
  width: 100%;
  max-width: 1740px;
  margin: 0 auto;
  padding-left: 200px;
  padding-top: 70px;
  background-color: #f5f5f5;
  box-sizing: border-box;
`;

export default ContainerLayout;
