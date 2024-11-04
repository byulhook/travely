import useGetImageUrls from '@/hooks/useGetImageUrls';
import { ImageStore } from '@/stores/useImageStore';
import prepareImageUpload from '@/utils/prepareImageUpload';
import { useEffect, useState } from 'react';

const useHandleImageUpload = (images: ImageStore) => {
  const [enabled, setEnabled] = useState(false);
  const formData = new FormData();
  const { data: uploadedImages } = useGetImageUrls({ formData, enabled });

  useEffect(() => {
    return () => {
      setEnabled(false);
    };
  }, []);

  const uploadImages = () => {
    if (images.thumbnail === '') return;
    try {
      setEnabled(true);
      prepareImageUpload(images, formData);
      if (uploadedImages) {
        setEnabled(false);
        console.log(uploadedImages);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return { uploadImages };
};
export default useHandleImageUpload;
