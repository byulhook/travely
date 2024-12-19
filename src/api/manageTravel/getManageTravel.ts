import { TravelData } from '@/types/travelDataType';
import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVER_URL;

const getManageTravel = async (travelId: string): Promise<TravelData | null> => {
  try {
    const response = await axios.get(`${SERVER}/api/v1/travels/manage-my-travel-teams/${travelId}`);
    return response.data.data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '여행데이터 가져오기 실패');
  }
};

export default getManageTravel;
