/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import TravelTeam from '@/components/manageMyTravel/TravelTeam';
import TravelManageHeader from '@/components/manageMyTravel/TravelManageHeader';
import teamDataFilter from '@/utils/teamDataFilter';
import usePageStore from '@/stores/usePageStore';
import { useParams } from 'react-router-dom';
import useGetManageTravel from '@/hooks/query/useGetManageTravel';
import useGetManageTravelTeams from '@/hooks/query/useGetManageTravelTeams';
import { MANAGE_COUNT_PER_PAGE } from '@/constants/countPerPage';

const ManageMyTravel = () => {
  const [isOngoingTab, setIsOngoingTab] = useState(true);
  const pageContainer = usePageStore((state) => state.pageContainer);
  const setMultiPagination = usePageStore((state) => state.setMultiPagination);
  const { travelId } = useParams();
  const { data: travelData } = useGetManageTravel(travelId as string);
  const { data: teamData } = useGetManageTravelTeams(
    travelId as string,
    pageContainer,
    MANAGE_COUNT_PER_PAGE,
  );

  useEffect(() => {
    if (travelData && pageContainer?.length === 0) {
      if (teamData) {
        const filteredData = teamDataFilter(teamData, isOngoingTab ? 'ongoing' : 'completed');
        const filteredTeamIds = filteredData.map((team) => team.teamId);
        setMultiPagination(filteredTeamIds);
      } else {
        setMultiPagination(travelData.teamTeams);
      }
    }
  }, [isOngoingTab, travelData, teamData]);

  if (travelData?.travelId !== travelId) return;

  return (
    <div css={{ color: '#333' }}>
      {travelData && (
        <TravelManageHeader
          travelData={travelData}
          isOngoingTab={isOngoingTab}
          setIsOngoingTab={setIsOngoingTab}
        />
      )}
      {travelId && teamData && (
        <TravelTeam
          travelId={travelId}
          travelTeamData={teamDataFilter(teamData, isOngoingTab ? 'ongoing' : 'completed')}
          isOngoing={isOngoingTab}
        />
      )}
    </div>
  );
};

export default ManageMyTravel;
