/* eslint-disable react-hooks/exhaustive-deps */
import { data } from '@/data/travelMockData';
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
    const filterData = teamDataFilter(data, tab ? 'ongoing' : 'completed');
    setMultiPagination(filterData.length);
  }, [tab]);

  if (data.id !== travelId) {
    return;
  }

  return (
    <div css={{ color: '#333' }}>
      <TravelManageHeader travelData={data} tab={tab} setTab={setTab} />
      {tab ? (
        <TravelTeam data={teamDataFilter(data, 'ongoing')} />
      ) : (
        <TravelTeam data={teamDataFilter(data, 'completed')} />
      )}
    </div>
  );
};

export default ManageMyTravel;
