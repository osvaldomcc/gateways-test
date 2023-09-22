import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/sections/app/layouts/MainLayout';
import LoginPage from '@/sections/app/pages/LoginPage';

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
