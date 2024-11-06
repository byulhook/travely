import { ImageStore } from '@/stores/useImageStore';

const addImageToFormData = (formData: FormData, type: string, base64String: string) => {
  base64String = base64String || '';
  if (!base64String) return;

  const [mimeString, base64Data] = base64String.split(',');
  const byteString = atob(base64Data);
  const ab = new Uint8Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    ab[i] = byteString.charCodeAt(i);
  }

  const file = new Blob([ab], { type: mimeString.split(':')[1].split(';')[0] });
  formData.append(type, file, `${type}-${Math.random()}.jpg`);
};

const prepareImageUpload = (images: ImageStore) => {
  const formData = new FormData();
  if (images.thumbnail) {
    addImageToFormData(formData, 'thumbnail', images.thumbnail);
  }
  if (images.meetingSpace) {
    addImageToFormData(formData, 'meetingSpace', images.meetingSpace);
  }
  images.introSrcs.forEach((src, index) => {
    if (src) {
      addImageToFormData(formData, `introSrcs[${index}]`, src);
    }
  });

  return formData;
};

export default prepareImageUpload;
