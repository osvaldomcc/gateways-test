import { Outlet, createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/sections/app/layouts/MainLayout';
import AdminLayout from '@/sections/app/layouts/AdminLayout';
import LoginPage from '@/sections/app/pages/LoginPage';
import DashboardPage from '@/sections/app/pages/DashboardPage';
import GatewayPage from '@/sections/gateway/pages/GatewayPage';
import GatewayShowPage from '@/sections/gateway/pages/GatewayShowPage';
import GatewayCreatePage from '@/sections/gateway/pages/GatewayCreatePage';
import GatewayEditPage from '@/sections/gateway/pages/GatewayEditPage';
import PeripheralPage from '@/sections/peripheral/pages/PeripheralPage';
import PeripheralShowPage from '@/sections/peripheral/pages/PeripheralShowPage';
import PeripheralCreatePage from '@/sections/peripheral/pages/PeripheralCreatePage';
import PeripheralEditPage from '@/sections/peripheral/pages/PeripheralEditPage';

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
                  element: <GatewayCreatePage />,
                },
                {
                  path: ':id/show',
                  element: <GatewayShowPage />,
                },
                {
                  path: ':id/edit',
                  element: <GatewayEditPage />,
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
                  element: <PeripheralCreatePage />,
                },
                {
                  path: ':id/show',
                  element: <PeripheralShowPage />,
                },
                {
                  path: ':id/edit',
                  element: <PeripheralEditPage />,
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
