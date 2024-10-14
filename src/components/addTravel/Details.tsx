import GrayBack from '@/components/GrayBack';
import { CirclePlus } from 'lucide-react';
import { css } from '@emotion/react';

interface DetailsProps {
  title: string;
}

const Details = ({ title }: DetailsProps) => {
  return (
    <GrayBack title={title} padding={true}>
      <div css={{ display: 'flex' }}>
        {title === 'FAQ' ? (
          <input css={textBox} type="text" placeholder="30자 내외로 질문을 작성해주세요." />
        ) : (
          <input css={textBox} type="text" />
        )}
        <button css={plusBtn}>
          <CirclePlus size={24} />
        </button>
      </div>
      {title === 'FAQ' ? (
        <textarea css={textBox2} placeholder="150자 내외로 답변을 작성해주세요." />
      ) : null}
    </GrayBack>
  );
};

export default Details;

const textBox = css`
  border: 1px solid #dedede;
  border-radius: 8px;
  height: 30px;
  padding: 0 5px;
`;
const plusBtn = css`
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: #2467e3;
`;

const textBox2 = css`
  border: 1px solid #dedede;
  border-radius: 8px;
  height: 70px;
  padding: 0 5px;
  margin-top: 10px;
`;
