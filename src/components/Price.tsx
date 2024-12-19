import { formatCurrency } from '@/utils/format';
import { css } from '@emotion/react';

interface IPriceProps {
  price: number;
}
const Price: React.FC<IPriceProps> = ({ price }) => {
  return (
    <p css={priceWrap}>
      {formatCurrency(price)} <span>/ 1인</span>
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
