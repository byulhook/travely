import { css, SerializedStyles } from '@emotion/react';
interface BorderBtnProps {
  children: React.ReactNode;
  color: string;
  size?: string;
  onClick?: () => void;
  customStyle?: SerializedStyles;
}

const BorderBtn = ({ children, color, size, onClick, customStyle }: BorderBtnProps) => {
  return (
    <button css={[borderBtn(color, size), customStyle]} onClick={onClick}>
      {children}
    </button>
  );
};

export default BorderBtn;

const borderBtn = (color: string, size: string | undefined) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color};
  border: 1px solid ${color};
  border-radius: 8px;
  width: 100px;
  height: 30px;
  font-size: 14px;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  ${size === 'sm' &&
  `
    width: 80px;
  `}
  ${size === 'lg' &&
  `
    width: 140px;
  `}
`;
