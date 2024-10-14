import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const sideMeunItems = [
  {
    name: '계정',
    to: 'my-account',
  },
  {
    name: '내 여행',
    to: 'my-travel-list',
  },
  {
    name: '작성 후기',
    to: 'my-reviews',
  },
];

const MyPageSideMenu = () => {
  return (
    <nav css={sideMenuStyle}>
      <ul>
        {sideMeunItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MyPageSideMenu;

const sideMenuStyle = css`
  height: 100%;
  border: 1px solid ${theme.colors.borderColor};
  border-radius: 5px;
  padding: 10px;

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    border-radius: 5px;
    width: 230px;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }

  a {
    display: block;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }

  a.active {
    background-color: #e9effc;
    color: ${theme.colors.primary};
  }
`;
