import { css } from '@emotion/react';
import BorderBtn from '@/components/BorderBtn';
import { TravelData } from '@/types/travelDataType';
import { formatDate } from '@/utils/format';
import { theme } from '@/styles/theme';

interface ManageHeaderProps {
  travelData: TravelData;
  isOngoingTab: boolean;
  setIsOngoingTab: (tab: boolean) => void;
}

const TravelManageHeader = ({ travelData, isOngoingTab, setIsOngoingTab }: ManageHeaderProps) => {
  return (
    <div>
      <div css={titleWrapper}>
        <h1>{travelData.travelTitle}</h1>
        <div css={btnWrapper}>
          <BorderBtn color={theme.colors.primary}>비활성화</BorderBtn>
          <BorderBtn color={theme.colors.red} size={'sm'}>
            삭제
          </BorderBtn>
        </div>
      </div>
      <div css={dateWrapper}>
        <p>게시일: {travelData.createAt}</p>
        <p>마지막 업데이트: {formatDate(travelData.updateAt)}</p>
      </div>
      <div css={{ display: 'flex', marginBottom: '15px' }}>
        <button css={tab(isOngoingTab === true)} onClick={() => setIsOngoingTab(!isOngoingTab)}>
          진행중인 여행
        </button>
        <button css={tab(isOngoingTab === false)} onClick={() => setIsOngoingTab(!isOngoingTab)}>
          완료된 여행
        </button>
      </div>
    </div>
  );
};

export default TravelManageHeader;
const titleWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    font-size: 24px;
  }
`;

const btnWrapper = css`
  display: flex;
  & * {
    margin-right: 10px;
  }
`;

const dateWrapper = css`
  display: flex;
  margin: 10px 0 40px;
  & p {
    margin-right: 10px;
    font-size: 14px;
    color: #888;
  }
`;
const tab = (tab: boolean) => css`
  margin: 0 10px;
  font-weight: 700;
  color: #888;
  ${tab &&
  `
    color: #2467E3;
  `}
`;
