import { Fragment } from 'react';

import { IconPlug } from '@tabler/icons-react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Navigation.module.scss';

export interface NavItem {
  name: string;
  url: string;
}

interface Props {
  items: NavItem[];
  showNavigation?: boolean;
}

const Navigation = ({ items, showNavigation = true }: Props) => {
  const { pathname } = useLocation();

  return (
    <nav
      className={styles.navigation}
      style={{
        opacity: showNavigation ? 1 : 0,
        pointerEvents: showNavigation ? undefined : 'none',
      }}
    >
      {items.map(({ name, url }, index) => (
        <Fragment key={name}>
          <NavLink
            to={url}
            className={url === pathname ? styles.navigation__selected : ''}
          >
            {name}
          </NavLink>
          {index !== items.length - 1 && (
            <IconPlug size={20} className={styles.divider} />
          )}
        </Fragment>
      ))}
    </nav>
  );
};

export default Navigation;
