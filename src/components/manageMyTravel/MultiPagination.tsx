import { css } from '@emotion/react';
import { travelTeamData } from '@/types/travelDataType';
import { Pagination } from '@mui/material';

interface MultiPaginationProps {
  travelTeam: travelTeamData;
}

const MultiPagination = ({ travelTeam }: MultiPaginationProps) => {
  return (
    <div css={paginationWrapper}>
      <Pagination
        count={Math.ceil(travelTeam.appliedUser.length / 7)}
        page={1}
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
