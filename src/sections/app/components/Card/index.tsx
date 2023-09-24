import type { CSSProperties, ReactNode } from 'react';

import styles from './Card.module.scss';

interface Props {
  children: ReactNode;
  cssStyles?: CSSProperties;
}

const Card = ({ children, cssStyles }: Props) => {
  return (
    <div className={styles.card} style={cssStyles}>
      {children}
    </div>
  );
};

export default Card;
