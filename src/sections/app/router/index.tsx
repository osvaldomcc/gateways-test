import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/sections/app/layouts/MainLayout';
import LoginPage from '@/sections/app/pages/LoginPage';
import DashboardPage from '@/sections/app/pages/DashboardPage';

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
          path: 'dashboard',
          element: <DashboardPage />,
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
