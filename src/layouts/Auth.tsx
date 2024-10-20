import AlarmBadge from '@/components/AlarmBadge';
import FiledBtn from '@/components/FiledBtn';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User as FirebaseUser, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/firebase';
import useLoginStore from '@/stores/useLoginStore';

const Auth: React.FC<{ light?: boolean }> = ({ light = false }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const { isLogin, setIsLogin } = useLoginStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('구글 계정 로그인에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);

  if (isLogin) {
    if (!user) return;
    const userThumbnail = user.photoURL;

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
            <img src={userThumbnail || '/src/assets/basicProfile.png'} alt="" />
          </Link>
        </div>
      </div>
    );
  } else {
    return !isLoading && <FiledBtn children="로그인" color="#4a95f2" onClick={login} />;
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
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  }
`;
