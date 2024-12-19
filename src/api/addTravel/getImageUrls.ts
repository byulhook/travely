import axios from 'axios';

const S3_URL = import.meta.env.VITE_S3_URL;

const getImageUrls = async (preparedImageData: FormData | null) => {
  if (preparedImageData) {
    try {
      const response = await axios.post(`${S3_URL}/api/images/upload`, preparedImageData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const imageUrls = response.data.imageUrls;
      if (!imageUrls) {
        throw new Error('이미지 URL을 받아오는데 실패했습니다.');
      }
      return imageUrls;
    } catch (err) {
      throw new Error(
        err instanceof Error
          ? `이미지 업로드 실패: ${err.message}`
          : '이미지 업로드 중 알 수 없는 오류가 발생했습니다.',
      );
    }
  }
};

export default getImageUrls;
