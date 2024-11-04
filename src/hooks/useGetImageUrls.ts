import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface UseImageUploadPM {
  formData: FormData;
  enabled: boolean;
}

const useGetImageUrls = ({ formData, enabled }: UseImageUploadPM) => {
  return useQuery({
    queryKey: ['imageUpload', formData],
    queryFn: async () => {
      try {
        const response = await axios.post('http://3.37.101.147:3000/api/images/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return response.data.imageUrls;
      } catch (error) {
        console.error('업로드 오류:', error);
      }
    },
    enabled,
  });
};
export default useGetImageUrls;
