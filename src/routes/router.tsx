import { createBrowserRouter } from 'react-router-dom';
import ContainerLayout from '@/layouts/ContainerLayout';
import ManageMyTravel from '@/pages/ManageMyTravel';
import MyTravelListPage from '@/pages/MyTravelList';

const PATH = {
  HOME: '/',
} as const;

const router = createBrowserRouter([
  {
    element: <ContainerLayout />,
    children: [
      {
        children: [
          {
            path: '/',
            element: (
              <div>
                <h1>home</h1>
              </div>
            ),
          },
          {
            path: 'travel-list',
            element: (
              <div>
                <h1>여행리스트</h1>
              </div>
            ),
          },
          {
            path: 'travel-detail',
            element: (
              <div>
                <h1>여행 상세 페이지</h1>
              </div>
            ),
          },
          {
            path: 'my-page',
            children: [
              {
                path: 'profile',
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
                element: (
                  <div>
                    <h1>마이페이지-작성한 후기</h1>
                  </div>
                ),
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
        ],
      },
    ],
  },
]);

export { router, PATH };
