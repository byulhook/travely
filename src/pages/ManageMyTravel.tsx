/* eslint-disable react-hooks/exhaustive-deps */
import { teamData, travelData } from '@/data/travelMockData';
import { useEffect, useState } from 'react';
import TravelTeam from '@/components/manageMyTravel/TravelTeam';
import TravelManageHeader from '@/components/manageMyTravel/TravelManageHeader';
import teamDataFilter from '@/utils/teamDataFilter';
import usePageStore from '@/stores/usePageStore';
import { useParams } from 'react-router-dom';

const ManageMyTravel = () => {
  const [tab, setTab] = useState(true);
  const setMultiPagination = usePageStore((state) => state.setMultiPagination);
  const { travelId } = useParams();

  useEffect(() => {
    const filteredData = teamDataFilter(teamData, tab ? 'ongoing' : 'completed');
    const filteredTeamIds = filteredData.map((team) => team.teamId);
    setMultiPagination(filteredTeamIds);
  }, [tab]);

  if (travelData.travelId !== travelId) {
    return;
  }

  return (
    <div css={{ color: '#333' }}>
      <TravelManageHeader travelData={travelData} tab={tab} setTab={setTab} />
      <TravelTeam travelTeamData={teamDataFilter(teamData, tab ? 'ongoing' : 'completed')} />
    </div>
  );
};

export default ManageMyTravel;
