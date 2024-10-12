import { useTabStore } from '@/stores/tabStore';
import styled from '@emotion/styled';

const MyTravelTab = () => {
  const { selectedTab, setSelectedTab } = useTabStore();

  return (
    <TabContainer>
      <TabButton
        selected={selectedTab === '참여한 여행'}
        onClick={() => setSelectedTab('참여한 여행')}
      >
        참여한 여행
      </TabButton>
      <TabButton
        selected={selectedTab === '내가 만든 여행'}
        onClick={() => setSelectedTab('내가 만든 여행')}
      >
        내가 만든 여행
      </TabButton>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  display: flex;
  width: 270px;
  margin-bottom: 20px;
`;

const TabButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.selected ? '#2467E3' : '#888888')};
`;

export default MyTravelTab;
