export interface TravelData {
  id: string;
  title: string;
  postedData: string;
  lastUpdated: string;
  schedules: ScheduleData[];
}
export interface ScheduleData {
  travelDate: string;
  applicationUser: ApplicationUserData[];
}
export interface ApplicationUserData {
  state: string;
  name: string;
  profile: string;
  mbti: string;
  phone: string;
  email: string;
  applicationDate: string;
}
