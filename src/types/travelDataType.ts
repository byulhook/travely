type Status = 'waiting' | 'approved' | 'rejected';

export interface PageData {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
export interface TravelData {
  travelId: string;
  travelTitle: string;
  createAt: string;
  updateAt: string;
  travelTeams: string[];
  travelActive: boolean;
}
export interface TravelTeamData {
  teamId: string;
  travelStartDate: string;
  travelEndDate: string;
  personLimit: number;
  appliedUser: ApplicationUserData[];
  pagination: PageData;
}
export interface ApplicationUserData {
  status: Status;
  userName: string;
  userProfileImage: string;
  mbti: string;
  phoneNumber: string;
  userId: string;
  appliedAt: string;
}
