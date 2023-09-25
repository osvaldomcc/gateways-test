import Card from '@/sections/app/components/Card';
import styles from './DashboardPage.module.scss';
import SectionInfo from './SectionInfo';
import { routes } from '@/sections/app/routes';
import { useAuthContext } from '@/sections/app/hooks/useAuthContext';

export interface Section {
  category: string;
  amount: number;
  url: string;
}

const sections: Section[] = [
  {
    category: 'Gateways',
    amount: 11,
    url: routes.gateways,
  },
  {
    category: 'Peripherals',
    amount: 8,
    url: routes.peripherals,
  },
];

const DashboardPage = () => {
  const { user } = useAuthContext();
  return (
    <div className={styles.dashboard}>
      <div className={styles.wrapper}>
        <Card>
          <div className={styles.card}>
            <div className={styles.card__content}>
              <h1>
                Hello <span>{user.name}!</span>
              </h1>
              <p>
                It is great to have you here. To start interacting, you can
                select one of the sections below.
              </p>
            </div>
            <img
              src="/images/welcome.svg"
              alt="welcome-image"
              width="175"
              height="191"
              loading="lazy"
            />
          </div>
        </Card>
        <h2 className={styles.title}>Sections</h2>
        <SectionInfo sections={sections} />
      </div>
    </div>
  );
};

export default DashboardPage;
