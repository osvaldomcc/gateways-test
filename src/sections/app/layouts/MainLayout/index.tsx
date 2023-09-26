import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/sections/app/hooks/useAuthContext';
import { routes } from '@/sections/app/routes';
import { useEffect } from 'react';

const MainLayout = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isDefaultOrLogin =
    pathname === routes.login || pathname === routes.default;

  useEffect(() => {
    if (!isDefaultOrLogin) localStorage.setItem('LAST_URL', pathname);
  }, [pathname, isDefaultOrLogin]);

  useEffect(() => {
    if (!user.name) {
      navigate(routes.login, { replace: true });
      return;
    }
    if (user.name && isDefaultOrLogin) {
      const LAST_URL = localStorage.getItem('LAST_URL');
      navigate(LAST_URL ?? routes.dashboard, { replace: true });
      return;
    }
  }, [user, isDefaultOrLogin, navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default MainLayout;
