import { css, SerializedStyles } from '@emotion/react';
import { Star } from 'lucide-react';

interface IRatingProps {
  rating: number;
  reviewCount?: number;
  customStyle?: SerializedStyles;
}

function Rating({ rating, reviewCount, customStyle }: IRatingProps) {
  return (
    <div css={[ratingWrap, customStyle]}>
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
