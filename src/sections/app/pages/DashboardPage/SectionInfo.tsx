import Card from '@/sections/app/components/Card';
import { Section } from './index';

import styles from './SectionInfo.module.scss';

interface Props {
  sections: Section[];
}

const SectionInfo = ({ sections }: Props) => {
  return (
    <div className={styles.sections}>
      {sections.map(({ category, amount }) => (
        <a className={styles.sections__item}>
          <Card key={category}>
            <div className={styles.card__content}>
              <h2>{category}</h2>
              <p>{amount}</p>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default SectionInfo;
