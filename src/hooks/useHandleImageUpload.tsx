import useGetImageUrls from '@/hooks/useGetImageUrls';
import { ImageStore } from '@/stores/useImageStore';
import prepareImageUpload from '@/utils/prepareImageUpload';
import { useState } from 'react';

const useHandleImageUpload = (images: ImageStore) => {
  const [enabled, setEnabled] = useState(false);
  const formData = new FormData();
  const { data: uploadedImages } = useGetImageUrls({ formData, enabled });

  const uploadImages = () => {
    if (images.thumbnail === '') return;

    setEnabled(true);
    prepareImageUpload(images, formData);
    if (uploadedImages) {
      setEnabled(false);
      console.log(uploadedImages);
    }
  };

  return { uploadImages };
};
export default useHandleImageUpload;
