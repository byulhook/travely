import { createTheme } from '@mui/material/styles';

const colors = {
  primary: '#4A95F2', // 주 색상
  borderColor: '#e0e0e0', // 테두리 색상styles/theme
  red: '#FF5757',
};

const fontSizes = {};

const fontWeights = {};

const width = {};
const height = {
  header: '100px',
};

const zIndex = {
  base: 1,
  videoPlayer: 10,
  header: 100,
  modal: 1000,
  toast: 10000,
};

const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', // 작은 그림자
  md: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)', // 중간 그림자
  lg: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)', // 큰 그림자
};

export type ColorsType = typeof colors;
export type FontSizeType = typeof fontSizes;
export type WidthType = typeof width;
export type HeightType = typeof height;
export type ZIndexType = typeof zIndex;
export type FontWeightType = typeof fontWeights;
export type ShadowsType = typeof shadows;

interface Theme {
  colors: ColorsType;
  fontSizes: FontSizeType;
  fontWeights: FontWeightType;
  width: WidthType;
  height: HeightType;
  zIndex: ZIndexType;
  shadows: ShadowsType;
}

const theme: Theme = {
  colors,
  fontSizes,
  fontWeights,
  width,
  height,
  zIndex,
  shadows,
};

const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
  typography: {
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});
export { theme, muiTheme };
