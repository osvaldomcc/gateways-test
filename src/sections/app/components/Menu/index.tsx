import { useCallback, useState, useRef } from 'react';
import type { ReactNode } from 'react';

import useOnClickOutside from '@/sections/app/hooks/useOnClickOutside';
import styles from './Menu.module.scss';

interface Props {
  trigger: ReactNode;
  children: ReactNode;
}

const Menu = ({ trigger, children }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const handleMenuClick = () => setShowOptions(!showOptions);

  const hideMenuOptions = useCallback(() => {
    setShowOptions(false);
  }, []);

  useOnClickOutside(menuRef, hideMenuOptions);
  return (
    <div className={styles.menu} ref={menuRef}>
      <button type="button" onClick={handleMenuClick}>
        {trigger}
      </button>
      {showOptions && <div className={styles.menu__options}>{children}</div>}
    </div>
  );
};

export default Menu;
