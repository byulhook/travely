type Status = 'waiting' | 'approved' | 'rejected';
export interface TravelData {
  id: string;
  travelTitle: string;
  createAt: string;
  updateAt: string;
  travelTeams: travelTeamData[];
  travelActive: boolean;
}
export interface travelTeamData {
  travelStartDate: string;
  travelEndDate: string;
  personLimit: number;
  appliedUser: ApplicationUserData[];
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
