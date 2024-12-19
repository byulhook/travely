import { TravelTeamData } from '@/types/travelDataType';

const teamDataFilter = (travelTeamsData: TravelTeamData[], type: string) => {
  const today = new Date();

  const filterData = travelTeamsData.filter((travelTeam) => {
    const endDate = new Date(travelTeam.travelEndDate);
    return type === 'ongoing' ? endDate >= today : endDate < today;
  });

  return filterData;
};

export default teamDataFilter;
