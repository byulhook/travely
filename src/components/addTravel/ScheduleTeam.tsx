import { css } from '@emotion/react';
import useFieldStore from '@/stores/useFieldStore';
import { CirclePlus, X } from 'lucide-react';
import { useRef, useState } from 'react';
import Team from '@/components/Team';

const ScheduleTeam = () => {
  const [isComposing, setIsComposing] = useState(false);
  const fields = useFieldStore((state) => state.fields);
  const addField = useFieldStore((state) => state.addField);
  const removeField = useFieldStore((state) => state.removeField);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const membersRef = useRef<HTMLSelectElement>(null);

  const handleAddSchedule = () => {
    if (fields.scheduleList.length >= 4) {
      alert('일정은 최대 4개까지 추가할 수 있습니다.');
      return;
    }
    if (startDateRef.current && endDateRef.current && membersRef.current) {
      const newSchedule = {
        date: `${startDateRef.current.value} ~ ${endDateRef.current.value}`,
        members: membersRef.current.value,
      };
      addField('scheduleList', newSchedule);
      startDateRef.current.value = '';
      endDateRef.current.value = '';
      membersRef.current.value = '';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isComposing) {
      handleAddSchedule();
    }
  };

  return (
    <div css={scheduleWrapper}>
      <p>일정 및 팀 추가</p>
      <ul>
        {fields.scheduleList.map((schedule, index) => (
          <li key={index}>
            <div css={scheduleList}>
              <div>
                <span>{`${schedule.date} / ${schedule.members}인`}</span>
                <button onClick={() => removeField('scheduleList', index)}>
                  <X size={20} />
                </button>
              </div>
              <Team max={Number(schedule.members)} />
            </div>
          </li>
        ))}
      </ul>
      <div css={scheduleAddWrapper}>
        <div css={inputRowWrapper}>
          <label css={labelStyle}>일정</label>
          <input
            css={smallTextBox}
            ref={startDateRef}
            type="date"
            placeholder="시작 날짜"
            onKeyDown={(e) => handleKeyDown(e)}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
          <span css={tilde}>~</span>
          <input
            css={smallTextBox}
            ref={endDateRef}
            type="date"
            placeholder="종료 날짜"
            onKeyDown={(e) => handleKeyDown(e)}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
        </div>
        <div css={inputRowWithButtonWrapper}>
          <div css={inputRowWrapper}>
            <label css={labelStyle}>모집인원</label>
            <select
              css={smallTextBox}
              ref={membersRef}
              defaultValue=""
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={() => setIsComposing(false)}
            >
              <option value="" disabled>
                본인제외
              </option>
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <option key={num} value={num}>
                  {num}명
                </option>
              ))}
            </select>
          </div>
          <button css={plusBtn} onClick={handleAddSchedule}>
            <CirclePlus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTeam;

const scheduleWrapper = css`
  width: 100%;
  & p {
    margin: 15px 0 5px;
    font-size: 18px;
  }
`;

const scheduleList = css`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  border-radius: 8px;
  background-color: #f8f8f8;
  margin-bottom: 10px;
  padding: 10px 20px;
  & button {
    color: #888;
    margin-left: 10px;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const scheduleAddWrapper = css`
  border-radius: 8px;
  background-color: #f8f8f8;
  padding: 10px 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const inputRowWrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const inputRowWithButtonWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const smallTextBox = css`
  width: 140px;
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const tilde = css`
  margin: 0 10px;
  font-size: 18px;
`;

const plusBtn = css`
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: #2467e3;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`;

const labelStyle = css`
  font-size: 16px;
  margin-right: 14px;
`;
