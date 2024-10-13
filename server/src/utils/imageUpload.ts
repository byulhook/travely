import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
});

export const uploadImage = async (file: Express.Multer.File): Promise<string> => {
  const fileExtension = file.originalname.split('.').pop();
  const fileName = `${uuidv4()}.${fileExtension}`;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: fileName,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    await s3Client.send(new PutObjectCommand(params));
    return `${process.env.CLOUDFRONT_URL}/${fileName}`;
  } catch (error) {
    console.error('S3 업로드 오류:', error);
    throw new Error('이미지 업로드 실패');
  }
};
// curl -X POST -H "Content-Type: multipart/form-data" -F "image=@server/src/1.jpeg" http://localhost:3000/api/images/upload
