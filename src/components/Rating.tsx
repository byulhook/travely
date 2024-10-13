import { css } from '@emotion/react';
import { Star } from 'lucide-react';

interface IRatingProps {
  rating: string;
  reviewCount?: string;
}

function Rating({ rating, reviewCount }: IRatingProps) {
  return (
    <div css={ratingWrap}>
      <Star size="13" fill="#FFBF00" stroke="#FFBF00" />
      <p className="score">
        {rating}
        {reviewCount && <span>({reviewCount})</span>}
      </p>
    </div>
  );
}

export default Rating;

const ratingWrap = css`
  display: flex;
  align-items: center;
  svg {
    margin-top: -2px;
  }
  .score {
    font-size: 13px;
    margin-left: 3px;
    span {
      margin-left: 4px;
      font-size: 12px;
      color: #666;
    }
  }
`;
