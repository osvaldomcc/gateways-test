import { useNavigate } from 'react-router-dom';
import { IconPlugConnected, IconLogout } from '@tabler/icons-react';

import AvatarImg from '/images/welcome.svg';
import Avatar from '@/sections/app/components/Avatar';
import styles from './Header.module.scss';
import Menu from '@/sections/app/components/Menu';
import MenuItem from '@/sections/app/components/Menu/MenuItem';
import { routes } from '@/sections/app/routes';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.dashboard);
  };

  const handleLogout = () => {
    navigate(routes.login, { replace: true });
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <a onClick={handleClick}>
          <IconPlugConnected size={40} className={styles.logo} />
        </a>
        <Menu trigger={<Avatar img={AvatarImg} name="User" />}>
          <MenuItem
            action={handleLogout}
            name="Logout"
            icon={<IconLogout size={20} />}
          />
        </Menu>
      </div>
    </header>
  );
};

export default Header;
