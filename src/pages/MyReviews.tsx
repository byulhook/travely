import reviewImage from '@/assets/reviewImg.png';
import ReviewCard from '@/components/ReviewCard';
import { Review } from '@/types/reviewType';

import FiledBtn from '@/components/FiledBtn';
import Modal from '@/components/Modal';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState, ChangeEvent } from 'react';
import BorderBtn from '@/components/BorderBtn';
import styled from '@emotion/styled';

import { Star, Camera } from 'lucide-react';

import { textEllipsis } from '@/styles/GlobalStyles';
import UserProfile from '@/components/UserProfile';

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: medium;
  cursor: pointer;
`;

interface StarIconProps {
  filled: boolean;
}

const StarIcon = styled(Star)<StarIconProps>`
  cursor: pointer;
  fill: ${(props) => (props.filled ? '#FFD700' : 'none')};
  stroke: #ffd700;
`;

interface StarRatingProps {
  rating: number;
  setRating: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          size={24}
          filled={index < rating}
          onClick={() => {
            setRating(index + 1);
          }}
        />
      ))}
    </div>
  );
};

export interface FileUploadProps {
  files: File[];
  handleFileUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const FileUpload = ({ files, handleFileUpload, setFiles }: FileUploadProps) => {
  return (
    <>
      <Button
        type="button"
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-top: 0.5rem;
          border: 2px dotted #afafaf;
          font-weight: bold;
        `}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <Camera
          css={css`
            margin-right: 0.5rem;
          `}
          size={20}
        />
        사진/동영상 첨부하기
      </Button>
      <input
        id="fileInput"
        type="file"
        multiple
        onChange={handleFileUpload}
        css={css`
          display: none;
        `}
      />
      {files.map((file, index) => (
        <div
          key={index}
          css={css`
            display: flex;
            align-items: center;
            font-size: 13px;
            justify-content: flex-start;
            padding: 0.5rem;
            width: 100px;
            color: #afafaf;

            button {
              margin-left: 0.5rem;
              cursor: pointer;
              color: #afafaf;
              font-size: 16px;
            }
          `}
        >
          <span css={textEllipsis(1)}>{file.name}</span>
          <button type="button" onClick={() => setFiles(files.filter((_, i) => i !== index))}>
            x
          </button>
        </div>
      ))}
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
      width: 100px;
      height: 120px;
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
    font-weight: 700;
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

const ReviewWriteModal = () => {
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
                <img src={reviewImage} alt="" />
              </div>
              <div className="reviewTitleContainer">
                <h3 className="reviewTitle">한국의 고궁 투어(너무너무 재밌어요)</h3>
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
                <p className="userName">손성오</p>
                <textarea placeholder="리뷰를 작성해주세요" />
              </div>
              <FileUpload files={files} handleFileUpload={handleFileUpload} setFiles={setFiles} />

              <div css={guideReviewContainer}>
                <div className="advice">함께한 가이드가 훌륭했다면 별점을 남겨주세요</div>
                <div className="guideInfo">
                  <UserProfile name="손성오" userEmailId="sonjeongwo" hideRating hideUserId />
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
              />
              <BorderBtn
                children="닫기"
                color="#b8bbbe"
                customStyle={css`
                  width: 120px;
                `}
              />
            </div>
          </div>
        }
      />
    </>
  );
};

const MyReviews = () => {
  return (
    <div>
      <ReviewWriteModal />
      <div>
        {data.reviews.map((review: Review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;

const data = {
  reviews: [
    {
      id: 1,
      title: '대한 고궁 투어',
      content:
        '경복궁은 한국의 역사와 전통을 온전히 느낄 수 있는 곳이었어요. 정문인 광화문을 지나 들어서면 웅장한 근정전과 경회루가 시선을 사로잡고, 조용한 연못과 정원은 마치 옛 시대로 돌아간 듯한 기분을 주었답니다. 주변의 한복 대여점에서 한복을 입고 방문하니 더욱 특별한 추억으로 남았어요. 고즈넉한 분위기 속에서 시간을 보내며 한국의 멋과 아름다움을 새삼 느낄 수 있었던 시간이었어요.',
      imgSrc: reviewImage,
      createdAt: new Date('2024-10-25'),
    },
    {
      id: 2,
      title: '대한 고궁 투어',
      content:
        '경복궁은 한국의 역사와 전통을 온전히 느낄 수 있는 곳이었어요. 정문인 광화문을 지나 들어서면 웅장한 근정전과 경회루가 시선을 사로잡고, 조용한 연못과 정원은 마치 옛 시대로 돌아간 듯한 기분을 주었답니다. 주변의 한복 대여점에서 한복을 입고 방문하니 더욱 특별한 추억으로 남았어요. 고즈넉한 분위기 속에서 시간을 보내며 한국의 멋과 아름다움을 새삼 느낄 수 있었던 시간이었어요.',
      imgSrc: reviewImage,
      createdAt: new Date('2024-10-25'),
    },
    {
      id: 3,
      title: '대한 고궁 투어',
      content:
        '경복궁은 한국의 역사와 전통을 온전히 느낄 수 있는 곳이었어요. 정문인 광화문을 지나 들어서면 웅장한 근정전과 경회루가 시선을 사로잡고, 조용한 연못과 정원은 마치 옛 시대로 돌아간 듯한 기분을 주었답니다. 주변의 한복 대여점에서 한복을 입고 방문하니 더욱 특별한 추억으로 남았어요. 고즈넉한 분위기 속에서 시간을 보내며 한국의 멋과 아름다움을 새삼 느낄 수 있었던 시간이었어요.',
      imgSrc: reviewImage,
      createdAt: new Date('2024-10-25'),
    },
  ],
};
