/* eslint-disable react-hooks/exhaustive-deps */
import { data } from '@/data/travelMockData';
import { useEffect, useState } from 'react';
import TravelTeam from '@/components/manageMyTravel/TravelTeam';
import TravelManageHeader from '@/components/manageMyTravel/TravelManageHeader';
import teamDataFilter from '@/utils/teamDataFilter';
import usePageStore from '@/stores/usePageStore';

const ManageMyTravel = () => {
  const [tab, setTab] = useState(true);
  const setMultiPagination = usePageStore((state) => state.setMultiPagination);

  useEffect(() => {
    const filterData = teamDataFilter(data, tab ? 'ongoing' : 'completed');
    setMultiPagination(filterData.length);
  }, [tab]);

  return (
    <section css={{ color: '#333' }}>
      <TravelManageHeader travelData={data} tab={tab} setTab={setTab} />
      {tab ? (
        <TravelTeam data={teamDataFilter(data, 'ongoing')} />
      ) : (
        <TravelTeam data={teamDataFilter(data, 'completed')} />
      )}
    </section>
  );
};

export default ManageMyTravel;
