import GrayBack from '@/components/GrayBack';
import { css } from '@emotion/react';
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Introduction = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [
          {
            color: [],
          },
          { background: [] },
        ],
        ['image'],
      ],
    },
  };

  return (
    <GrayBack title={'상품 소개'}>
      <ReactQuill value={value} onChange={setValue} modules={modules} css={textbox} />
    </GrayBack>
  );
};

export default Introduction;

const textbox = css`
  width: 100%;
  height: 300px;
  background-color: transparent;
  padding-bottom: 40px;
  font-size: 16px;
  & .ql-toolbar.ql-snow {
    border: none !important;
  }
  & .ql-snow {
    border: none !important;
    & * {
      font-size: 16px;
    }
  }
`;
