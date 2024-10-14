import { css } from '@emotion/react';

const AlarmBadge: React.FC<{ cnt: number; top: number; right: number }> = ({ cnt, top, right }) => {
  if (cnt === 0) return null;
  return <span css={alarmBadge(top, right)}>{cnt}</span>;
};

export default AlarmBadge;

const alarmBadge = (top: number, right: number) => css`
  position: absolute;
  top: ${top}px;
  right: ${right}px;
  display: block;
  width: 30px;
  padding: 1px 0;
  text-align: center;
  background-color: #ff5757;
  color: white;
  border-radius: 15px;
  font-size: 12px;
  border: 2px solid #fff;
`;
