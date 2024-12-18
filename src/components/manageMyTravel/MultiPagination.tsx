import { css } from '@emotion/react';
import { PageData } from '@/types/travelDataType';
import Pagination from '@mui/material/Pagination';
import usePageStore from '@/stores/usePageStore';

interface MultiPaginationProps {
  pageData: PageData;
  teamId: string;
}

const MultiPagination = ({ pageData, teamId }: MultiPaginationProps) => {
  const pageContainer = usePageStore((state) => state.pageContainer);
  const setCurrentPage = usePageStore((state) => state.setCurrentPage);
  const matchPageId = pageContainer.find((p) => p.paginationId === teamId);

  const handleCurrentPage = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(teamId, page);
  };

  return (
    <div css={paginationWrapper}>
      <Pagination
        count={pageData.totalPages}
        page={matchPageId?.currentPage || 1}
        onChange={handleCurrentPage}
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
