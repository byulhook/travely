import { tagDatas } from '@/data/tagDatas';
import { TagPath } from '@/types/tagType';
import { css } from '@emotion/react';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbsMap: { [key: string]: string } = {
  'travel-list': '함께 떠나요',
  'add-travel': '새로운 여행 계획하기',
  bookmark: '북마크',
  'my-page': '마이페이지',
  'my-reviews': '작성한 후기',
  'my-travel-list': '참여한 여행',
  'my-account': '계정',
  'my-created-travel': '내가 만든 여행',
  'manage-my-travel': '내 여행 관리',
  'my-travel': '내 여행',
  'travel-detail': '여행 상세',
  'find-guide': '가이드 찾아요',
};

const tagPath = tagDatas.map((tagData) => tagData.path);

const BreadCrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((item) => item !== '');
  if (paths.length === 0) return null;
  console.log(paths);
  paths.forEach((path, _, arr) => {
    console.log(path);
    if (path === 'add-travel' || path === 'travel-detail') {
      arr.unshift('travel-list');
    }
    if (path === 'my-travel-list' || path === 'my-created-travel') {
      if (arr.includes('manage-my-travel')) {
        arr.pop();
      } else {
        arr.splice(1, 0, 'my-travel');
      }
    }
    if (tagPath.includes(path as TagPath)) {
      arr.pop();
    }
  });

  return (
    <ol css={breadcrumbWrap}>
      <li key="0">
        <Link to="/">
          홈 <ChevronRight size="10" />
        </Link>
      </li>
      {paths.map((path, i) => {
        let link = '/';
        link += `${path}/`;
        if (path === 'add-travel') {
          link = '/add-travel';
        }
        if (path === 'my-travel') {
          link = '/my-page/my-travel-list';
        }
        if (path === 'my-travel-list') {
          link = '/my-page/my-travel-list';
        }
        if (path === 'my-created-travel') {
          link = '/my-page/my-created-travel';
        }
        if (path === 'manage-my-travel') {
          link = window.location.pathname;
        }
        return (
          <li key={i + 1}>
            <Link to={link}>{breadcrumbsMap[path]}</Link>
            {i !== paths.length - 1 && <ChevronRight size="10" />}
          </li>
        );
      })}
    </ol>
  );
};

export default BreadCrumb;

const breadcrumbWrap = css`
  padding: 25px 0;
  display: flex;
  gap: 5px;
  li {
    font-size: 13px;
    color: #888;
  }
`;
