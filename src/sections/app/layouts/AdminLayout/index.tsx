import Header from '@/sections/app/components/Header';
import Navigation, { NavItem } from '@/sections/app/components/Navigation';

import styles from './AdminLayout.module.scss';
import { Outlet } from 'react-router-dom';

const items: NavItem[] = [
  {
    name: 'Gateways',
    url: '/gateways',
  },
  {
    name: 'Peripherals',
    url: '/peripherals',
  },
];

const AdminLayout = () => {
  return (
    <div className={styles.admin}>
      <Header />
      <div className={styles.wraper}>
        <Navigation items={items} />
        <Outlet />
      </div>
      <div className={styles.addorn}></div>
    </div>
  );
};

export default AdminLayout;
