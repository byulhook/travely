import { createBrowserRouter } from 'react-router-dom';
import ContainerLayout from '@/layouts/ContainerLayout';
import ManageMyTravel from '@/pages/ManageMyTravel';
import MyTravelListPage from '@/pages/MyTravelList';
import Home from '@/pages/Home';
import TravelList from '@/pages/TravelList';
import AddTravel from '@/pages/AddTravel';
import MyPageContainerLayout from '@/components/myPage/MyPageContainer';
import AddTravel from '@/pages/AddTravel';

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
            element: <Home />,
          },
          {
            path: 'travel-list',
            element: <TravelList />,
            children: [
              // {
              //   path: '',
              //   element: (
              //     <div>
              //       <h2>전체</h2>
              //     </div>
              //   ),
              // },
              {
                path: 'food',
                // element: (
                //   <div>
                //     <h2>Food</h2>
                //   </div>
                // ),
              },
            ],
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
