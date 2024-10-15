import FiledBtn from '@/components/FiledBtn';
import GrayBack from '@/components/GrayBack';
import { TagsType } from '@/types/tagType';
import { css } from '@emotion/react';
import { useState } from 'react';

const ChoiceTags = () => {
  const [choicedTag, setChoicedTag] = useState<TagsType[]>([]);
  const tags: TagsType[] = [
    'FOOD',
    'CULTURE',
    'HEALING',
    'NATURE',
    'SPORTS',
    'FESTIVAL',
    'K-POP',
    'K-DRAMA',
    'JEJU',
    'ETC',
  ];
  const handleTag = (tag: TagsType) => {
    if (choicedTag.includes(tag)) {
      setChoicedTag(choicedTag.filter((t) => t !== tag));
    } else {
      setChoicedTag([...choicedTag, tag]);
    }
  };
  return (
    <GrayBack title={'태그'} padding={true}>
      <div css={tagsWrapper}>
        {tags.map((tag) => (
          <FiledBtn
            color={choicedTag.includes(tag) ? '#4A95F2' : '#d6d6d6'}
            size={'mdHeight'}
            onClick={() => handleTag(tag)}
            key={tag}
          >
            # {tag}
          </FiledBtn>
        ))}
      </div>
    </GrayBack>
  );
};

export default ChoiceTags;

const tagsWrapper = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
`;
