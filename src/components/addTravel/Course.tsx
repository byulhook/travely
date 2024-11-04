import { plusBtn, textBox } from '@/components/addTravel/Details';
import useFieldStore from '@/stores/useFieldStore';
import { css } from '@emotion/react';
import { CirclePlus, MapPin, X } from 'lucide-react';
import { useRef, useState } from 'react';

const Course = () => {
  const [isComposing, setIsComposing] = useState(false);
  const fields = useFieldStore((state) => state.fields);
  const addField = useFieldStore((state) => state.addField);
  const removeField = useFieldStore((state) => state.removeField);
  const courseRef = useRef<HTMLInputElement>(null);

  const handleAddCourse = () => {
    if (courseRef.current) {
      if (courseRef.current.value.trim() !== '') {
        addField('courseList', courseRef.current.value);
        courseRef.current.value = '';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isComposing) {
      handleAddCourse();
    }
  };

  return (
    <div css={courseWrapper}>
      <p>여행 코스</p>
      <ul>
        {fields.courseList.map((course, index) => (
          <li key={index}>
            <div css={courseList}>
              <MapPin css={{ marginRight: '10px' }} />
              <span>{course}</span>
              <button onClick={() => removeField('courseList', index)}>
                <X size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div css={courseAddWrapper}>
        <MapPin css={{ marginRight: '10px' }} />
        <input
          css={textBox}
          ref={courseRef}
          type="text"
          onKeyDown={(e) => handleKeyDown(e)}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder="40자 내외로 여행 코스를 추가해주세요."
        />
        <button css={plusBtn} onClick={handleAddCourse}>
          <CirclePlus size={24} />
        </button>
      </div>
    </div>
  );
};

export default Course;

const courseWrapper = css`
  width: 100%;
  & p {
    margin: 15px 0 5px;
    font-size: 18px;
  }
`;
const courseList = css`
  display: flex;
  align-items: center;
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
const courseAddWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f8f8f8;
  padding: 10px 20px;
`;
