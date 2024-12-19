import getImageUrls from '@/api/addTravel/getImageUrls';
import { IMAGE_UPLOAD } from '@/constants/queyKey';
import { useQuery } from '@tanstack/react-query';

interface UseImageUploadPM {
  preparedImageData: FormData | null;
  enabled: boolean;
}

const useGetImageUrls = ({ preparedImageData, enabled }: UseImageUploadPM) => {
  return useQuery({
    queryKey: [IMAGE_UPLOAD, preparedImageData],
    queryFn: () => getImageUrls(preparedImageData),
    enabled,
  });
};
export default useGetImageUrls;
