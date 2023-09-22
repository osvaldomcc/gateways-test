import { IconPlug } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

export interface NavItem {
  name: string;
  url: string;
}

interface Props {
  items: NavItem[];
}

const Navigation = ({ items }: Props) => {
  return (
    <nav className={styles.navigation}>
      {items.map(({ name, url }, index) => (
        <>
          <NavLink
            key={name}
            to={url}
            className={({ isActive }) =>
              isActive ? styles.navigation__selected : ''
            }
          >
            {name}
          </NavLink>
          {index !== items.length - 1 && (
            <IconPlug size={20} className={styles.divider} />
          )}
        </>
      ))}
    </nav>
  );
};

export default Navigation;
