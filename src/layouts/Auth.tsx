import AlarmBadge from '@/components/AlarmBadge';
import FiledBtn from '@/components/FiledBtn';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const isLogin = true;

const Auth: React.FC<{ light?: boolean }> = ({ light = false }) => {
  if (isLogin) {
    return (
      <div css={logined(light)}>
        <ul>
          <li>
            <Link to="/my-page/my-travel-list">내 여행</Link>
            <AlarmBadge cnt={3} top={-11} right={-17} />
          </li>
          <li>
            <Link to="/bookmark">북마크</Link>
          </li>
        </ul>
        <div className="user-profile">
          <Link to="/my-page/my-account">
            <img src="/src/assets/basicProfile.png" alt="" />
          </Link>
        </div>
      </div>
    );
  } else {
    return <FiledBtn children="로그인" color="#4a95f2" />;
  }
};

export default Auth;

const logined = (light: boolean) => css`
  display: flex;
  gap: 25px;
  align-items: center;
  ul {
    display: flex;
    gap: 20px;
    li {
      position: relative;
      font-size: 16px;
      color: ${light ? '#fff' : '#666'};
      transition: 0.2s ease-in-out;
      &:hover {
        font-weight: bold;
      }
    }
  }

  .user-profile {
    width: 40px;
  }
`;
