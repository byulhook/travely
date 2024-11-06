import GrayBack from '@/components/GrayBack';
import useImageStore from '@/stores/useImageStore';
import { css } from '@emotion/react';
import { ImagePlus } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

interface ThumbnailProps {
  type: 'thumbnail' | 'meetingSpace';
}

const Thumbnail = ({ type }: ThumbnailProps) => {
  const [errMessage, setErrMessage] = useState('');
  const thumbnail = useImageStore((state) => state.images.thumbnail);
  const setThumbnail = useImageStore((state) => state.setThumbnail);
  const setMeetingSpace = useImageStore((state) => state.setMeetingSpace);

  const handleThumbnailChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrMessage('파일 크기는 5MB 이하여야 합니다.');
        setTimeout(() => {
          setErrMessage('');
        }, 3000);
        return;
      }
      if (!file.type.startsWith('image/')) {
        setErrMessage('이미지 파일만 업로드 가능합니다.');
        setTimeout(() => {
          setErrMessage('');
        }, 3000);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageData = reader.result as string;
        if (type === 'thumbnail') {
          setThumbnail(imageData);
        } else {
          setMeetingSpace(imageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <GrayBack title={type === 'thumbnail' ? '대표 이미지' : '만나는장소'}>
        <div css={thumbnailSize(thumbnail)}>
          <button onClick={() => document.getElementById('thumbnailUpload')?.click()}>
            <ImagePlus size={100} css={{ color: '#fff' }} />
          </button>
          <input id="thumbnailUpload" type="file" onChange={(e) => handleThumbnailChange(e)} />
        </div>
      </GrayBack>
      <p css={{ fontSize: '14px', color: '#ff2020' }}>{errMessage}</p>
    </>
  );
};

export default Thumbnail;

const thumbnailSize = (thumbnail: string) => css`
  width: 100%;
  height: 400px;
  background-image: url(${thumbnail});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  & button {
    width: 100%;
    height: 100%;
  }
  & input {
    display: none;
  }
`;
