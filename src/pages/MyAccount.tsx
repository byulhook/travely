import BorderBtn from '@/components/BorderBtn';
import { auth } from '@/firebase';
import useLoginStore from '@/stores/useLoginStore';
import useModalStore from '@/stores/useModalStore';
import { css } from '@emotion/react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useLoginStore((state) => state);
  const setModalName = useModalStore((state) => state.setModalName);

  const logout = async () => {
    try {
      await signOut(auth);
      setIsLogin(false);
      setModalName(null);
      navigate('/');
    } catch (error) {
      console.error('로그아웃에 실패했습니다 :', error);
    }
  };

  return (
    <div css={myAccountWrap}>
      <h2>내 계정</h2>
      {isLogin && (
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
