import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import Header from '@/sections/app/components/Header';
import Navigation, { NavItem } from '@/sections/app/components/Navigation';
import { useLocation } from 'react-router-dom';
import { routes } from '@/sections/app/routes';

import styles from './AdminLayout.module.scss';

const items: NavItem[] = [
  {
    name: 'Gateways',
    url: routes.gateways,
  },
  {
    name: 'Peripherals',
    url: routes.peripherals,
  },
];

const AdminLayout = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowNavigation(pathname === routes.dashboard);
  }, [pathname]);

  return (
    <div className={styles.admin}>
      <Header />
      <div className={styles.wraper}>
        <Navigation items={items} showNavigation={!showNavigation} />
        <Outlet />
      </div>
      <div className={styles.addorn}></div>
    </div>
  );
};

export default AdminLayout;
