// // import mongoose from 'mongoose';

// // 여행 테이블
// export interface ITravel {
//   id: string;
//   userId: string;
//   thumbnail: string;
//   travelTitle: string;
//   travelContent: object;
//   tag: string[];
//   travelCourse: string[];
//   includedItems?: string[];
//   excludedItems?: string[];
//   meetingTime?: string[];
//   meetingLocation?: object;
//   travelPrice: number;
//   travelFAQ?: object[];
//   reviews?: string[];
//   bookmark?: string[];
//   createAt: Date;
//   updateAt: Date;
//   teamId?: string[];
//   travelTotalScore?: number;
//   travelActive: boolean;
// }

// // 리뷰 테이블
// export interface IReview {
//   id: string;
//   userId: string;
//   travelId: string;
//   reviewImg?: string[];
//   createdDate: Date;
//   content: string;
//   travelScore: number;
// }

// // 신청한 유저 테이블
// export interface IAppliedUser {
//   userId: string;
//   appliedAt: Date;
//   status: 'waiting' | 'approved' | 'rejected';
// }

// // 팀 테이블
// export interface ITeam {
//   id: string;
//   travelId: string;
//   personLimit: number;
//   appliedUsers: IAppliedUser[];
//   travelStartDate: Date;
//   travelEndDate: Date;
// }

// // 유저 테이블
// export interface IUser {
//   id: string;
//   userProfileImage: string;
//   userName: string;
//   userId: string;
//   userEmail: string;
//   phoneNumber: string;
//   mbti: string;
//   myCreatedTravel: string[];
//   myPassedTravel: string[];
//   myReviews: string[];
//   myBookmark: mongoose.Types.ObjectId[];
// }
