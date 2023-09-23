import { ReactNode } from 'react';

import styles from './Table.module.scss';

interface Props {
  children: ReactNode;
  title?: string;
}

const Table = ({ children, title }: Props) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        {title && <caption>{title}:</caption>}
        {children}
      </table>
    </div>
  );
};

export default Table;
