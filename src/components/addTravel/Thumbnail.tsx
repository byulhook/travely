import GrayBack from '@/components/GrayBack';
import { css } from '@emotion/react';
import { ImagePlus } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

const Thumbnail = () => {
  const [image, setImage] = useState('');

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <GrayBack title={'대표 이미지'}>
      <div css={thumnailSize(image)}>
        <button onClick={() => document.getElementById('thumbnailUpload')?.click()}>
          <ImagePlus size={100} css={{ color: '#fff' }} />
        </button>
        <input id="thumbnailUpload" type="file" onChange={(e) => handleThumbnailChange(e)} />
      </div>
    </GrayBack>
  );
};

export default Thumbnail;

const thumnailSize = (image: string) => css`
  width: 100%;
  height: 400px;
  background-image: url(${image});
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
