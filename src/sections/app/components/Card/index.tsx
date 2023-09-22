import { ReactNode } from 'react';

import styles from './Card.module.scss';

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
