import Price from '@/components/Price';
import Rating from '@/components/Rating';
import Tags from '@/components/Tags';
import { TagType } from '@/types/tagType';
import { css } from '@emotion/react';
import { Bookmark } from 'lucide-react';

interface ICardProps {
  imgSrc: string;
  title: string;
  userName: string;
  tags: TagType[];
  price: string;
  rating: string;
  reviewCount: string;
  people: string;
  bookMark: boolean;
}

function Card({
  imgSrc,
  title,
  userName,
  tags,
  price,
  rating,
  reviewCount,
  people,
  bookMark,
}: ICardProps) {
  return (
    <div css={card}>
      <div className="card-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="card-content">
        <p className="title">{title}</p>
        <div>
          <p className="user-name">{userName}</p>
          <Price price={price} people={people} />
          <div className="rating-tags">
            <Rating rating={rating} reviewCount={reviewCount} />
            <Tags items={tags} textAlign="right" />
          </div>
        </div>
      </div>
      <p className="book-mark">
        <Bookmark size="23" stroke="#fff" strokeWidth="1.5" fill={bookMark ? '#fff' : 'none'} />
      </p>
    </div>
  );
}

export default Card;

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