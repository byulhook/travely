import GrayBack from '@/components/GrayBack';
import useImageStore from '@/stores/useImageStore';
import { css } from '@emotion/react';
import axios from 'axios';
import { ImagePlus } from 'lucide-react';
import { ChangeEvent } from 'react';

const Thumbnail = () => {
  const thumbnail = useImageStore((state) => state.images.thumbnail);
  const setThumbnail = useImageStore((state) => state.setThumbnail);

  const handleThumbnailChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const imageData = reader.result as string;
        setThumbnail(imageData);

        //
        const [mimePart, base64Data] = imageData.split(',');
        const byteString = atob(base64Data);

        const arrayBuffer = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
          arrayBuffer[i] = byteString.charCodeAt(i);
        }

        const blobFile = new Blob([arrayBuffer], { type: mimePart.split(':')[1].split(';')[0] });
        const formData = new FormData();
        formData.append('images', blobFile);

        try {
          const response = await axios.post(
            'http://3.37.101.147:3000/api/images/upload',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          );
          console.log('업로드 성공:', response.data.imageUrls[0]);
        } catch (error) {
          console.error('업로드 오류:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <GrayBack title={'대표 이미지'}>
      <div css={thumnailSize(thumbnail)}>
        <button onClick={() => document.getElementById('thumbnailUpload')?.click()}>
          <ImagePlus size={100} css={{ color: '#fff' }} />
        </button>
        <input id="thumbnailUpload" type="file" onChange={(e) => handleThumbnailChange(e)} />
      </div>
    </GrayBack>
  );
};

export default Thumbnail;

const thumnailSize = (thumbnail: string) => css`
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
