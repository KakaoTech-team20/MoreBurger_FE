import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { element } from 'prop-types';
import DetailPage from 'views/detail-page';
// import { element } from 'prop-types';
// import DetailPage from 'views/detail-page';

// dashboard routing
const HomeDefault = Loadable(lazy(() => import('views/home')));

// sample page routing
// const DetailPage = Loadable(lazy(() => import('views/detail-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <HomeDefault />
    },
    {
      path: 'home',
      element: <HomeDefault />
      /* children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ] */
    },
    {
      path: 'home/detail',
      element: <DetailPage />
    },
    {
      path: 'home/detail-seller',
      element: <DetailPage />
    }
  ]
};

export default MainRoutes;
