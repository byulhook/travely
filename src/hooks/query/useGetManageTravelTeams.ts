import getManageTravelTeams from '@/api/manageTravel/getManageTravelTeams';
import { MANAGE_TRAVEL_TEAMS } from '@/constants/queyKey';
import { useQuery } from '@tanstack/react-query';

const useGetManageTravelTeams = (
  travelId: string,
  pageContainer: {
    paginationId: string;
    currentPage: number;
  }[],
  size: number,
) => {
  return useQuery({
    queryKey: [MANAGE_TRAVEL_TEAMS, travelId],
    queryFn: () => getManageTravelTeams(travelId, pageContainer, size),
  });
};

export default useGetManageTravelTeams;
