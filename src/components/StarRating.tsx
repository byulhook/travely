import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { Star } from 'lucide-react';

interface StarIconProps {
  filled: string;
}

interface StarRatingProps {
  rating: number;
  setRating: (value: number) => void;
  customStyle?: SerializedStyles;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating, customStyle }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          size={24}
          filled={index < rating ? 'filled' : 'none'}
          onClick={() => {
            setRating(index + 1);
          }}
          css={customStyle}
        />
      ))}
    </div>
  );
};

const StarIcon = styled(Star)<StarIconProps>`
  cursor: pointer;
  fill: ${({ filled }) => (filled === 'filled' ? '#ffd700' : 'none')};
  stroke: #ffd700;
`;

export default StarRating;
