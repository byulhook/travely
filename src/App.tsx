import CardWrap from '@/components/home/CardWrap';
import TagCardWrap from '@/components/sub/TagCardWrap';
import { css } from '@emotion/react';

function App() {
  return (
    <div css={sample}>
      <TagCardWrap />
      <CardWrap />
    </div>
  );
}

export default App;

const sample = css`
  width: 1080px;
  margin: 0 auto;
`;
