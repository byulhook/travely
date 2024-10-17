import { css } from '@emotion/react';
import Skeleton from '@mui/material/Skeleton';

interface ISkeletonTravelCardProps {
  cnt?: number;
}

const SkeletonTravelCard: React.FC<ISkeletonTravelCardProps> = ({ cnt = 4 }) => {
  return (
    <>
      {Array.from({ length: cnt }, (_, i) => (
        <div css={card} key={i}>
          <div className="card-img">
            <Skeleton animation="wave" variant="rectangular" height="100%" />
          </div>
          <div className="card-content">
            <p className="title">
              <Skeleton
                animation="wave"
                variant="rectangular"
                height="10px"
                sx={{ borderRadius: '4px' }}
              />
            </p>

            <div>
              <p className="user-name">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="150px"
                  height="6px"
                  sx={{ borderRadius: '4px' }}
                />
              </p>

              <div className="price">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="100px"
                  height="6px"
                  sx={{ borderRadius: '4px' }}
                />
              </div>

              <div className="rating-tags">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="50px"
                  height="6px"
                  sx={{ borderRadius: '4px' }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonTravelCard;

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
