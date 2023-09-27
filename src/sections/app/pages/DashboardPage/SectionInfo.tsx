import { useNavigate } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import { Section } from './index';

import styles from './SectionInfo.module.scss';

interface Props {
  sections: Section[];
}

const MAX_LIMIT = 10;

const SectionInfo = ({ sections }: Props) => {
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <div className={styles.sections}>
      {sections.map(({ category, amount, url }) => (
        <a
          className={styles.sections__item}
          key={category}
          onClick={() => handleClick(url)}
        >
          <Card>
            <div className={styles.card__content}>
              <h2>{category}</h2>
              <p>{amount > MAX_LIMIT ? `${MAX_LIMIT}+` : amount}</p>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default SectionInfo;
