import { Outlet, createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/sections/app/layouts/MainLayout';
import AdminLayout from '@/sections/app/layouts/AdminLayout';
import LoginPage from '@/sections/app/pages/LoginPage';
import DashboardPage from '@/sections/app/pages/DashboardPage';
import GatewayPage from '@/sections/gateway/pages/GatewayPage';
import PeripheralPage from '@/sections/peripheral/pages/PeripheralPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },

        {
          path: 'admin',
          element: <AdminLayout />,
          children: [
            {
              index: true,
              element: <DashboardPage />,
            },
            {
              path: 'gateways',
              element: <Outlet />,
              children: [
                {
                  index: true,
                  element: <GatewayPage />,
                },
                {
                  path: 'create',
                  element: <GatewayPage />,
                },
                {
                  path: ':id/show',
                  element: <GatewayPage />,
                },
                {
                  path: ':id/edit',
                  element: <GatewayPage />,
                },
              ],
            },
            {
              path: 'peripherals',
              element: <Outlet />,
              children: [
                {
                  index: true,
                  element: <PeripheralPage />,
                },
                {
                  path: 'create',
                  element: <PeripheralPage />,
                },
                {
                  path: ':id/show',
                  element: <PeripheralPage />,
                },
                {
                  path: ':id/edit',
                  element: <PeripheralPage />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <div>Not Found Page</div>,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
