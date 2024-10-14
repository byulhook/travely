import { TagType } from '@/types/tagType';
import { css } from '@emotion/react';

type TextAlign = 'left' | 'right';

interface ITagsProps {
  items: TagType[];
  textAlign?: TextAlign;
}

function Tags({ items, textAlign = 'left' }: ITagsProps) {
  return (
    <div css={tags(textAlign)}>
      {items.map((item, i) => (
        <span key={i}>#{item}</span>
      ))}
    </div>
  );
}

export default Tags;

const tags = (textAlign: TextAlign) => css`
  flex: 1;
  display: flex;
  gap: 5px;
  justify-content: ${textAlign === 'left' ? 'flex-start' : 'flex-end'};
  font-size: 11px;
  color: #666;
`;
