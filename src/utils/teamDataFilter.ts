import { TravelTeamData } from '@/types/travelDataType';

const teamDataFilter = (travelTeamsData: TravelTeamData[], type: string) => {
  const today = new Date();

  const filterData = travelTeamsData.filter((travelTeam) => {
    const endDate = new Date(`20${travelTeam.travelEndDate.replace('.', '-')}`);
    return type === 'ongoing' ? endDate >= today : endDate < today;
  });
  return filterData;
};

export default teamDataFilter;
