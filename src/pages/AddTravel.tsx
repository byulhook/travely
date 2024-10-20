import ChoiceTags from '@/components/addTravel/ChoiceTags';
import Course from '@/components/addTravel/Course';
import ScheduleTeam from '@/components/addTravel/ScheduleTeam';
import Details from '@/components/addTravel/Details';
import { FloatingMenu } from '@/components/addTravel/FloatingMenu';
import Introduction from '@/components/addTravel/Introduction';
import Thumbnail from '@/components/addTravel/Thumbnail';
import GrayBack from '@/components/GrayBack';
import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import useImageStore from '@/stores/useImageStore';
import useImageUpload from '@/hooks/useImageUpload';

const AddTravel = () => {
  const [enabled, setEnabled] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const images = useImageStore((state) => state.images);
  const formData = new FormData();
  const { data: uploadedImages } = useImageUpload({ formData, enabled });

  const handleUpload = () => {
    if (images.thumbnail === '') return;
    setEnabled(true);
    const uploadSrc = [images.thumbnail].concat(images.introSrcs); // 0번째는 무조건 썸네일url입니다
    uploadSrc.forEach((src) => {
      const [mimeString, base64Data] = src.split(',');
      const byteString = atob(base64Data);
      const ab = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        ab[i] = byteString.charCodeAt(i);
      }
      const file = new Blob([ab], { type: mimeString.split(':')[1].split(';')[0] });
      formData.append('images', file, `image-${Math.random()}.jpg`);
    });
    if (uploadedImages) {
      // uploadedImages 이미지 배포된 링크들 (0번째 썸네일, 1번째부터는 intro에 삽입한 이미지)
      setEnabled(false);
      console.log(uploadedImages);
    }
  };

  return (
    <div css={pageLayoutWrapper}>
      <div css={addTravelWrapper}>
        <h1>새로운 여행 계획하기</h1>
        <GrayBack title={'제목'} padding={true}>
          <input
            ref={titleRef}
            css={noneStyleInput}
            type="text"
            placeholder="30자 내외로 작성해주세요."
          />
        </GrayBack>
        <Thumbnail />
        <Introduction />
        <Course />
        <ChoiceTags />
        <ScheduleTeam />
        <GrayBack title={'가격'} price={true} padding={true}>
          <input ref={priceRef} css={noneStyleInput} type="number" placeholder="0" />
          <span css={{ marginRight: '5px' }}>원</span>
          <span css={{ fontSize: '14px' }}>/ 1인</span>
        </GrayBack>
        <Details title={'포함내용'} />
        <Details title={'미포함내용'} />
        <Details title={'이용안내'} />
        <Details title={'FAQ'} />
      </div>
      <FloatingMenu onClick={handleUpload} />
    </div>
  );
};

export default AddTravel;

const addTravelWrapper = css`
  position: relative;
  width: 680px;
  margin-right: 200px;
  & h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const noneStyleInput = css`
  width: 100%;
  background-color: transparent;
  border: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

const pageLayoutWrapper = css`
  display: flex;
  position: relative;
`;
