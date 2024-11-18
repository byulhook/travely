import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface useManageTravelDataPM {
  travelId: string;
  enabled: boolean;
}

const useManageTravelData = ({ travelId, enabled }: useManageTravelDataPM) => {
  return useQuery({
    queryKey: ['manageTravel', travelId],
    queryFn: async () => {
      try {
        const res = await axios.get(`/api/v1/travels/manage-my-travel/${travelId}`);
        return res.data;
      } catch (error) {
        console.error('관리할 여행 데이터 로드 실패:', error);
      }
    },
    enabled,
  });
};
export default useManageTravelData;
