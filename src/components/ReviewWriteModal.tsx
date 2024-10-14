import FiledBtn from '@/components/FiledBtn';
import Modal from '@/components/Modal';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState } from 'react';

const ReviewWriteModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        trigger={
          <FiledBtn
            color={theme.colors.primary}
            cutomStyle={css`
              width: 240px;
            `}
          >
            후기 작성
          </FiledBtn>
        }
        title="후기 작성"
        open={open}
        setOpen={setOpen}
        children={
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              <input type="text" placeholder="제목" />
              <textarea placeholder="내용" />
              <button type="submit">작성하기</button>
            </form>
          </div>
        }
      />
    </>
  );
};

export default ReviewWriteModal;
