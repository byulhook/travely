import FiledBtn from '@/components/FiledBtn';
import GrayBack from '@/components/GrayBack';
import { css } from '@emotion/react';

const ChoiceTags = () => {
  const tags = [
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
  return (
    <GrayBack title={'태그'} padding={true}>
      <div css={tagsWrapper}>
        {tags.map((tag) => (
          <FiledBtn color={'#d6d6d6'} size={'mdHeight'} key={tag}>
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
