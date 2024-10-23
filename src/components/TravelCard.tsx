import Price from '@/components/Price';
import Rating from '@/components/Rating';
import Tags from '@/components/Tags';
import { ITravelCard } from '@/types/travelCardType';
import { css } from '@emotion/react';
import { Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ICardDataProps {
  cardData: ITravelCard;
}

const TravelCard: React.FC<ICardDataProps> = ({ cardData }) => {
  const { thumbnail, travelTitle, createdBy, travelPrice, review, tag, bookmark } = cardData;
  return (
    <Link to="/travel-detail">
      <div css={card}>
        <div className="card-img">
          <img src={thumbnail} alt="" />
        </div>
        <div className="card-content">
          <p className="title">{travelTitle}</p>
          <div>
            <p className="user-name">{createdBy.userName}</p>
            <div className="price">
              <Price price={`${travelPrice}`} />
            </div>
            <div className="rating-tags">
              <Rating rating={`${review.travelScore}`} reviewCount={`${review.reviewCnt}`} />
              <Tags items={tag} textAlign="right" />
            </div>
          </div>
        </div>
        <p className="book-mark">
          <Bookmark
            size="23"
            stroke={bookmark ? '#4a95f2' : '#fff'}
            strokeWidth="1.5"
            fill={bookmark ? '#4a95f2' : 'none'}
          />
        </p>
      </div>
    </Link>
  );
};

export default TravelCard;

const card = () => css`
  width: 250px;
  height: 320px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition:
    box-shadow 0.3s ease,
    transform 0.1s ease;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  .card-img {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 0 0 4px 4px;
    border-top: 0;
    box-sizing: border-box;

    .title {
      font-size: 15px;
      font-weight: bold;
    }

    .user-name {
      margin-bottom: 6px;
      font-size: 12px;
      color: #666;
    }

    .price {
      margin-bottom: 6px;
    }

    .rating-tags {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .book-mark {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
