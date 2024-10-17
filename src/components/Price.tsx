import formatCurrency from '@/utils/formatCurrency';
import { css } from '@emotion/react';

interface IPriceProps {
  price: string;
  people: string;
}
const Price: React.FC<IPriceProps> = ({ price, people }) => {
  return (
    <p css={priceWrap}>
      {formatCurrency(price)} <span>/ {people}인</span>
    </p>
  );
};

export default Price;

const priceWrap = css`
  font-size: 14px;
  font-weight: bold;
  span {
    font-size: 12px;
    color: #666;
    font-weight: normal;
  }
`;
