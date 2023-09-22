import { useNavigate } from 'react-router-dom';
import { IconPlugConnected, IconLogout } from '@tabler/icons-react';

import AvatarImg from '/images/welcome.svg';
import Avatar from '@/sections/app/components/Avatar';
import styles from './Header.module.scss';
import Menu from '@/sections/app/components/Menu';
import MenuItem from '../Menu/MenuItem';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    navigate('/login', { replace: true });
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
