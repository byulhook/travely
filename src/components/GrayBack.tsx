import { css } from '@emotion/react';

interface GrayBackProps {
  children: React.ReactNode;
  title: string;
  price?: boolean;
  padding?: boolean;
}

const GrayBack = ({ children, title, price, padding }: GrayBackProps) => {
  return (
    <>
      <p>{title}</p>
      <div css={GrayBackWrapper(price, padding)}>{children}</div>
    </>
  );
};

export default GrayBack;

const GrayBackWrapper = (price?: boolean, padding?: boolean) => css`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 8px;
  margin: 5px 0;
  ${price &&
  `
    max-width: 210px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    & input {
      color:#666;
    }
  `}
  ${padding &&
  `
      padding: 10px 20px;
  `}
`;
