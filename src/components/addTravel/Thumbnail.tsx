import GrayBack from '@/components/GrayBack';
import useImageStore from '@/stores/useImageStore';
import { css } from '@emotion/react';
import { ImagePlus } from 'lucide-react';
import { ChangeEvent } from 'react';

interface ThumbnailProps {
  type: 'thumbnail' | 'meetingSpace';
}

const Thumbnail = ({ type }: ThumbnailProps) => {
  const thumbnail = useImageStore((state) => state.images.thumbnail);
  const setThumbnail = useImageStore((state) => state.setThumbnail);
  const setMeetingSpace = useImageStore((state) => state.setMeetingSpace);

  const handleThumbnailChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
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
    <GrayBack title={type === 'thumbnail' ? '대표 이미지' : '만나는장소'}>
      <div css={thumbnailSize(thumbnail)}>
        <button onClick={() => document.getElementById('thumbnailUpload')?.click()}>
          <ImagePlus size={100} css={{ color: '#fff' }} />
        </button>
        <input id="thumbnailUpload" type="file" onChange={(e) => handleThumbnailChange(e)} />
      </div>
    </GrayBack>
  );
};

export default Thumbnail;

const thumbnailSize = (thumbnail: string) => css`
  width: 100%;
  height: 400px;
  background-image: url(${thumbnail});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  & button {
    width: 100%;
    height: 100%;
  }
  & input {
    display: none;
  }
`;
