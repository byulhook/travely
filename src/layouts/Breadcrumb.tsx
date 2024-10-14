import { css } from '@emotion/react';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbsMap: { [key: string]: string } = {
  'travel-list': '함께 떠나요',
  food: 'Food',
  culture: 'Culture',
  healing: 'Healing',
  nature: 'Nature',
  sports: 'Sports',
  festival: 'Festival',
  kpop: 'K-POP',
  kdrama: 'K-DRAMA',
  jeju: 'JEJU',
  etc: 'etc.',
  'add-travel': '새로운 여행 계획하기',
  bookmark: '북마크',
  'my-page': '마이페이지',
  'my-reviews': '작성한 후기',
  'my-travel-list': '내 여행',
};
// 홈, 마이페이지, 내여행, 참여한 여행 (/my-page/my-travel-list)
// 홈, 마이페이지, 내여행, 내가 만든 여행(/my-page/my-travel-list)
// 홈, 가이드 찾아요

const BreadCrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((item) => item !== '');
  if (paths.length === 0) return null;
  let link = '/';

  return (
    <ol css={breadcrumbWrap}>
      <li key="0">
        <Link to="/">
          홈 <ChevronRight size="10" />
        </Link>
      </li>
      {paths.map((path, i) => {
        link += `${path}/`;
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
