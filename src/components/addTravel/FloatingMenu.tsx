import styled from '@emotion/styled';
import { CircleMinus, CirclePlus } from 'lucide-react';
import { useState } from 'react';

const FloatingMenu = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section) ? prev.filter((item) => item !== section) : [...prev, section],
    );
  };

  return (
    <MenuContainer>
      <MenuItem>
        <span>제목</span>
      </MenuItem>
      <MenuItem>
        <span>대표 이미지</span>
      </MenuItem>
      <MenuItem>
        <span>상품소개</span>
      </MenuItem>
      <MenuItem>
        <span>코스</span>
      </MenuItem>
      <MenuItem>
        <span>태그</span>
      </MenuItem>
      <MenuItem>
        <span>예약 생성</span>
      </MenuItem>
      <MenuItem>
        <span>가격</span>
      </MenuItem>

      <MenuItem isOpen={openSections.includes('포함내용')}>
        <span>포함내용</span>
        <ToggleIcon
          onClick={() => toggleSection('포함내용')}
          isOpen={openSections.includes('포함내용')}
        >
          {openSections.includes('포함내용') ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
        </ToggleIcon>
      </MenuItem>
      <MenuItem isOpen={openSections.includes('미포함내용')}>
        <span>미포함내용</span>
        <ToggleIcon
          onClick={() => toggleSection('미포함내용')}
          isOpen={openSections.includes('미포함내용')}
        >
          {openSections.includes('미포함내용') ? (
            <CircleMinus size={20} />
          ) : (
            <CirclePlus size={20} />
          )}
        </ToggleIcon>
      </MenuItem>
      <MenuItem isOpen={openSections.includes('이용안내')}>
        <span>이용안내</span>
        <ToggleIcon
          onClick={() => toggleSection('이용안내')}
          isOpen={openSections.includes('이용안내')}
        >
          {openSections.includes('이용안내') ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
        </ToggleIcon>
      </MenuItem>
      <MenuItem isOpen={openSections.includes('FAQ')}>
        <span>FAQ</span>
        <ToggleIcon onClick={() => toggleSection('FAQ')} isOpen={openSections.includes('FAQ')}>
          {openSections.includes('FAQ') ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
        </ToggleIcon>
      </MenuItem>

      <BottomButtons>
        <TempSaveButton>임시저장</TempSaveButton>
        <CompleteButton>작성완료</CompleteButton>
      </BottomButtons>
    </MenuContainer>
  );
};

// 스타일 정의
const MenuContainer = styled.div`
  position: absolute;
  top: 60px;
  right: -340px;
  width: 220px;
  padding: 16px;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  z-index: 1000;
`;

const MenuItem = styled.div<{ isOpen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin-bottom: 12px;
  color: ${(props) => (props.isOpen ? '#000' : props.isOpen === undefined ? '#000' : '#898989')};
`;

const ToggleIcon = styled.div<{ isOpen?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isOpen ? '#000' : '#898989')};
`;

const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 10px;
`;

const TempSaveButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: #4a95f2;
`;

const CompleteButton = styled.button`
  padding: 8px 16px;
  background-color: #4a95f2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default FloatingMenu;
