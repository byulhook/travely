import BorderBtn from '@/components/BorderBtn';
import { auth } from '@/firebase';
import useModalStore from '@/stores/useModalStore';
import useUserStore from '@/stores/useUserStore';
import { css } from '@emotion/react';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore((state) => state);
  const setModalName = useModalStore((state) => state.setModalName);
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('로그아웃에 실패했습니다 :', error);
    }
  };

  useEffect(() => {
    if (!user) {
      setModalName(null);
      navigate('/');
    }
  }, [user, navigate, setModalName]);

  return (
    <div css={myAccountWrap}>
      <h2>내 계정</h2>
      {user && (
        <BorderBtn color="#888" size="sm" className="btn-logout" onClick={logout}>
          로그아웃
        </BorderBtn>
      )}
    </div>
  );
};

export default MyAccount;

const myAccountWrap = css`
  .btn-logout {
    margin-top: 10px;
  }
`;
