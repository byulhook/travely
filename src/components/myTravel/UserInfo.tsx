/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import basicprofile from '../../assets/basicProfile.png';

interface IUserInfoProps {
  name: string;

  contact: string;
  profileImage?: string;
}

const UserInfo = ({ name, contact, profileImage = basicprofile }: IUserInfoProps) => {
  return (
    <div css={userInfoContainer}>
      <div css={userInfoProfileContainer}>
        <img src={profileImage} alt="Profile" />
      </div>
      <div css={userInfoContentContainer}>
        <div css={userInfoTitleContainer}>
          <p>{name}</p>
        </div>
        <span>{contact}</span>
      </div>
    </div>
  );
};

export default UserInfo;

// 스타일 정의
const userInfoContainer = css`
  display: flex;
  align-items: center;
  justify-content: row;
`;

const userInfoProfileContainer = css`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 10px;
`;

const userInfoContentContainer = css`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #888;
  }
`;

const userInfoTitleContainer = css`
  display: flex;
  align-items: center;
  justify-content: row;

  p {
    font-size: 14px;
    font-weight: 500;
    color: #444;
    margin-right: 4px;
  }
`;
