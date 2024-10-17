import { css } from '@emotion/react';
import { travelTeamData } from '@/types/travelDataType';
import Pagination from '@mui/material/Pagination';
import usePageStore from '@/stores/usePageStore';

interface MultiPaginationProps {
  travelTeam: travelTeamData;
  id: number;
}

const MultiPagination = ({ travelTeam, id }: MultiPaginationProps) => {
  const pageContainer = usePageStore((state) => state.pageContainer);
  const setCurrentPage = usePageStore((state) => state.setCurrentPage);
  const matchPageId = pageContainer.filter((p) => p.paginationId === id);

  return (
    <div css={paginationWrapper}>
      <Pagination
        count={Math.ceil(travelTeam.appliedUser.length / 7)}
        page={matchPageId[0]?.currentPage || 1}
        onClick={(e) => setCurrentPage(id, Number((e.target as HTMLButtonElement).innerText))}
        color="primary"
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default MultiPagination;

const paginationWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
