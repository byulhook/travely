import formatCurrency from '@/utils/formatCurrency';
import { css } from '@emotion/react';

interface IPriceProps {
  price: string;
  people: string;
}
function Price({ price, people }: IPriceProps) {
  return (
    <p css={priceWrap}>
      {formatCurrency(price)} <span>/ {people}인</span>
    </p>
  );
}

export default Price;

const priceWrap = css`
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: bold;
  span {
    font-size: 12px;
    color: #666;
    font-weight: normal;
  }
`;
