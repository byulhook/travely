import { useTabStore } from '@/stores/tabStore'; // Zustand 스토어를 가져옴
import styled from '@emotion/styled';

const MyTravelTab = () => {
  const { selectedTab, setSelectedTab } = useTabStore(); // Zustand에서 상태와 상태 변경 함수를 가져옴

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

// 스타일 정의
const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

const TabButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: ${(props) => (props.selected ? '#007bff' : '#555')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  border-bottom: ${(props) => (props.selected ? '2px solid #007bff' : 'none')};
`;

export default MyTravelTab;
