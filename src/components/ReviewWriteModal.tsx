import reviewImage from '@/assets/reviewImg.png';

import FiledBtn from '@/components/FiledBtn';
import Modal from '@/components/Modal';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState, ChangeEvent } from 'react';
import BorderBtn from '@/components/BorderBtn';

import UserProfile from '@/components/UserProfile';
import StarRating from '@/components/StarRating';
import FileUpload from '@/components/FileUpload';

export interface ReviewWriteModalProps {
  reviewTitle: string;
  userName: string;
  guideName: string;
  imgURL?: string;
}

const ReviewWriteModal = ({ reviewTitle, userName, guideName, imgURL }: ReviewWriteModalProps) => {
  const [open, setOpen] = useState(false);
  const [travelRating, setTravelRating] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

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
        open={open}
        setOpen={setOpen}
        children={
          <div css={ReviewWriteModalStyle}>
            <div>
              <h2>후기 작성</h2>
            </div>
            <div className="imgSection">
              <div className="imgContainer">
                <img src={imgURL || reviewImage} alt="" />
              </div>
              <div className="reviewTitleContainer">
                <h3 className="reviewTitle">{reviewTitle}</h3>
                <StarRating rating={travelRating} setRating={setTravelRating} />
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              <div css={textAreaContiner}>
                <p className="userName">{userName}</p>
                <textarea placeholder="리뷰를 작성해주세요" />
              </div>
              <FileUpload files={files} handleFileUpload={handleFileUpload} setFiles={setFiles} />
              <div css={guideReviewContainer}>
                <div className="advice">함께한 가이드가 훌륭했다면 별점을 남겨주세요</div>
                <div className="guideInfo">
                  <UserProfile name={guideName} userEmailId="sonjeongwo" hideRating hideUserId />
                  <StarRating rating={userRating} setRating={setUserRating} />
                  {/* <UserProfile name="손정오" userEmailId="sonjeongwo" rating="5.0" /> */}
                </div>
              </div>
            </form>

            <div css={buttonContainer}>
              <FiledBtn
                children="작성"
                color={theme.colors.primary}
                cutomStyle={css`
                  width: 120px;
                `}
                onClick={() => setOpen(false)}
                type="submit"
              />
              <BorderBtn
                children="닫기"
                color="#b8bbbe"
                customStyle={css`
                  width: 120px;
                `}
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
        }
      />
    </>
  );
};

const ReviewWriteModalStyle = css`
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .imgSection {
    display: flex;

    .imgContainer {
      border-radius: 10px;
      margin-bottom: 10px;
      overflow: hidden;
      width: 150px;
      height: 170px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .reviewTitle {
      font-size: 18px;
      font-weight: 700;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .reviewTitleContainer {
      margin-left: 20px;
    }
  }
`;

const textAreaContiner = css`
  border: 2px solid #e4e4e4;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 10px;

  .userName {
    font-size: 16px;
    font-weight: 500;
    color: #4b5568;
    margin-bottom: 0.5rem;
  }

  textarea {
    width: 100%;
    margin-bottom: 0.5rem;

    &::placeholder {
      color: #b7bcc2;
    }
  }
`;

const guideReviewContainer = css`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .advice {
    font-size: 15px;
    font-weight: 700;
    color: #4b5568;
    margin-bottom: 0.5rem;
  }

  .guideInfo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

export default ReviewWriteModal;