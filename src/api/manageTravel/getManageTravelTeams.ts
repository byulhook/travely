import { TravelTeamData } from '@/types/travelDataType';
import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVER_URL;

const getManageTravelTeams = async (
  travelId: string,
  pageContainer: {
    paginationId: string;
    currentPage: number;
  }[],
  size: number,
): Promise<TravelTeamData[] | null> => {
  try {
    const responseAll = pageContainer.map(async (current) => {
      const response = await axios.get(
        `${SERVER}/api/v1/travels/manage-my-travel/${travelId}?page=${current.currentPage}&size=${size}&teamId=${current.paginationId}`,
      );
      return response.data.data;
    });
    return Promise.all(responseAll);
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '팀 데이터 가져오기 실패');
  }
};

export default getManageTravelTeams;
