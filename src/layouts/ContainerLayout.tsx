import { css, SerializedStyles } from '@emotion/react';

import Main from '@/layouts/Main';

interface ContainerLayoutProps {
  customStyle?: SerializedStyles;
  mainCustomStyle?: SerializedStyles;
}

const ContainerLayout: React.FC = ({ customStyle, mainCustomStyle }: ContainerLayoutProps) => {
  return (
    <div css={[containerStyle, customStyle]}>
      <Main customStyle={mainCustomStyle} />
    </div>
  );
};

const containerStyle = css`
  min-width: 1080px;
`;

export default ContainerLayout;
