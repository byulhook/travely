import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  // 여기에 스키마 필드를 정의합니다
  // 예: username: { type: String, required: true, unique: true },
  //     email: { type: String, required: true, unique: true },
  //     createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>('User', UserSchema);
