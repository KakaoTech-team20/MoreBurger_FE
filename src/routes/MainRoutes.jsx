import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// import DetailPage from 'views/detail-page';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// sample page routing
const DetailPage = Loadable(lazy(() => import('views/detail-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'detail-page',
      element: <DetailPage />
    }
  ]
};

export default MainRoutes;
