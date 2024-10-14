import { css } from '@emotion/react';
import { Smile } from 'lucide-react';

interface ITeamProps {
  max?: number;
  mbtiList?: string[];
}

const Team = ({ max = 1, mbtiList = [] }: ITeamProps) => {
  const items = Array(max)
    .fill(0)
    .map((_, i) => mbtiList[i] || null);

  return (
    <ul css={teamWrap}>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <div className={`team-item${item !== null ? ' fill' : ''}`}>
              <Smile color="#fff" size={21} />
            </div>
            {item !== null && <p>{item}</p>}
          </li>
        );
      })}
    </ul>
  );
};

export default Team;

const teamWrap = css`
  display: flex;
  gap: 10px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    .team-item {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ecebeb;
      border-radius: 10px;

      &.fill {
        background-color: #4a95f2;
      }
    }
    p {
      font-size: 8px;
    }
  }
`;
