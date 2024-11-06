import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface UseImageUploadPM {
  preparedImageData: FormData | null;
  enabled: boolean;
}

const S3_URL = import.meta.env.VITE_S3_URL;
if (!S3_URL) {
  throw new Error('VITE_S3_URL 환경 변수가 설정되지 않았습니다.');
}
const useGetImageUrls = ({ preparedImageData, enabled }: UseImageUploadPM) => {
  return useQuery({
    queryKey: ['imageUpload', preparedImageData],
    queryFn: async () => {
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
        } catch (error) {
          throw new Error(
            error instanceof Error
              ? `이미지 업로드 실패: ${error.message}`
              : '이미지 업로드 중 알 수 없는 오류가 발생했습니다.',
          );
        }
      }
    },
    enabled,
  });
};
export default useGetImageUrls;
