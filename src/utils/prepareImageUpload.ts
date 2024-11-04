import { ImageStore } from '@/stores/useImageStore';

const prepareImageUpload = (images: ImageStore, formData: FormData) => {
  const uploadSrc = [images.thumbnail].concat(images.introSrcs);

  uploadSrc.forEach((src) => {
    const [mimeString, base64Data] = src.split(',');
    const byteString = atob(base64Data);
    const ab = new Uint8Array(byteString.length);

    for (let i = 0; i < byteString.length; i++) {
      ab[i] = byteString.charCodeAt(i);
    }

    const file = new Blob([ab], { type: mimeString.split(':')[1].split(';')[0] });
    formData.append('images', file, `image-${Math.random()}.jpg`);
  });
};

export default prepareImageUpload;
