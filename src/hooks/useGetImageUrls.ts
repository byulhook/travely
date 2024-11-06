import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface UseImageUploadPM {
  preparedImageData: FormData | null;
  enabled: boolean;
}

const useGetImageUrls = ({ preparedImageData, enabled }: UseImageUploadPM) => {
  return useQuery({
    queryKey: ['imageUpload', preparedImageData],
    queryFn: async () => {
      if (preparedImageData) {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_S3_URL}/api/images/upload`,
            preparedImageData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          );
          return response.data.imageUrls;
        } catch (error) {
          console.error('업로드 오류:', error);
        }
      }
    },
    enabled,
  });
};
export default useGetImageUrls;
