import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuthContext } from '@/sections/app/hooks/useAuthContext';
import { routes } from '@/sections/app/routes';
const MainLayout = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const isDefaultOrLogin =
    pathname === routes.login || pathname === routes.default;

  return (
    <main>
      {!user.name && <Navigate to={routes.login} replace />}
      {user.name && isDefaultOrLogin && (
        <Navigate to={routes.dashboard} replace />
      )}
      <Outlet />
    </main>
  );
};

export default MainLayout;
