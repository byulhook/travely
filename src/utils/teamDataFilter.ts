import { TravelData } from '@/types/travelDataType';

const teamDataFilter = (data: TravelData, type: string) => {
  const today = new Date();

  const filterData = data.travelTeams.filter((travelTeam) => {
    const endDate = new Date(`20${travelTeam.travelEndDate.replace('.', '-')}`);
    return type === 'ongoing' ? endDate >= today : endDate < today;
  });
  return filterData;
};

export default teamDataFilter;
