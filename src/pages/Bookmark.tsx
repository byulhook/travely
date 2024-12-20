import TravelCard from '@/components/traveList/TravelCard';
import { css } from '@emotion/react';
import travelCardMockData from '@/data/travelCardMockData';

const bookmarkMockDatas = travelCardMockData;

const Bookmark = () => {
  return (
    <div css={bookmarkWrap}>
      <div className="page-title">
        <h2>북마크</h2>
      </div>

      <div className="card-wrap">
        {bookmarkMockDatas.map((data, i) => (
          <TravelCard cardData={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Bookmark;

const bookmarkWrap = css`
  .page-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 30px 0;
  }
  .card-wrap {
    display: grid;
    grid-template-columns: repeat(4, 250px);
    justify-content: space-between;
    gap: 20px 0;
  }
`;
