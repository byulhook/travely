import useGetImageUrls from '@/hooks/useGetImageUrls';
import { ImageStore } from '@/stores/useImageStore';
import prepareImageUpload from '@/utils/prepareImageUpload';
import { useRef } from 'react';

const useHandleImageUpload = (images: ImageStore) => {
  const preparedImageData = useRef<FormData | null>(null);
  const { data: uploadedImageUrls } = useGetImageUrls({
    preparedImageData: preparedImageData.current,
    enabled: !!preparedImageData.current,
  });

  const uploadImages = () => {
    if (images.thumbnail === '') return;
    try {
      preparedImageData.current = prepareImageUpload(images);
      if (uploadedImageUrls) {
        preparedImageData.current = null;
        // console.log(uploadedImageUrls);
        return uploadedImageUrls;
      }
    } catch (error) {
      preparedImageData.current = null;
      console.warn(error);
    }
  };

  return { uploadImages };
};
export default useHandleImageUpload;
