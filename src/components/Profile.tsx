import { css } from '@emotion/react';
import basicProfile from '@/assets/basicProfile.png';
interface UserProfileProps {
  url?: string;
  size: string;
}

const Profile = ({ url, size }: UserProfileProps) => {
  return <div css={wrapper(url || basicProfile, size)}></div>;
};

export default Profile;

const wrapper = (url: string, size: string) => css`
  width: ${size};
  height: ${size};
  background-image: url(${url});
  background-size: cover;
  border-radius: 50%;
  margin-right: 10px;
`;
