import { createBrowserRouter } from 'react-router-dom';
import ContainerLayout from '@/layouts/ContainerLayout';
import ManageMyTravel from '@/pages/ManageMyTravel';
import MyTravelListPage from '@/pages/MyTravelList';
import Home from '@/pages/Home';
import TravelList from '@/pages/TravelList';
import { tagDatas } from '@/data/tagDatas';
import AddTravel from '@/pages/AddTravel';
import MyPageContainerLayout from '@/components/myPage/MyPageContainer';
import MyReviews from '@/pages/MyReviews';

import TravelDetail from '@/pages/TravelDetail';
const PATH = {
  HOME: '/',
} as const;

const tagPathList = tagDatas.map((data) => ({
  path: data.path,
  element: null,
}));

const router = createBrowserRouter([
  {
    element: <ContainerLayout />,
    children: [
      {
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: 'travel-list',
            element: <TravelList />,
            children: tagPathList,
          },
          {
            path: 'travel-detail',
            element: <TravelDetail />,
          },
          {
            path: 'my-page',
            element: <MyPageContainerLayout />,
            children: [
              {
                index: true,
                path: 'my-account',
                element: (
                  <div>
                    <h1>마이페이지-계정</h1>
                  </div>
                ),
              },
              {
                path: 'my-travel-list',
                element: (
                  <div>
                    <MyTravelListPage />
                  </div>
                ),
              },
              {
                path: 'my-reviews',
                element: <MyReviews />,
              },
              {
                path: 'my-inquiries',
                element: (
                  <div>
                    <h1>마이페이지-작성한 문의</h1>
                  </div>
                ),
              },
              {
                path: 'received-inquiries',
                element: (
                  <div>
                    <h1>마이페이지-받은 문의</h1>
                  </div>
                ),
              },
            ],
          },
          {
            path: 'manage-my-travel',
            element: <ManageMyTravel />,
          },
          {
            path: 'add-travel',
            element: <AddTravel />,
          },
        ],
      },
    ],
  },
]);

export { router, PATH };
