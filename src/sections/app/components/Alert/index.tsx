import type { ReactNode } from 'react';

import styles from './Alert.module.scss';

interface Props {
  children: ReactNode;
  variant?: 'primary';
}

const Alert = ({ children, variant = 'primary' }: Props) => {
  const variantsMap = {
    primary: styles.alert__primary,
  };

  return (
    <div className={`${styles.alert} ${variantsMap[variant]}`}>{children}</div>
  );
};

export default Alert;
