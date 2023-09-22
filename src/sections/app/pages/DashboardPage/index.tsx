import Card from '@/sections/app/components/Card';
import styles from './DashboardPage.module.scss';
import SectionInfo from './SectionInfo';

export interface Section {
  category: string;
  amount: number;
}

const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.wrapper}>
        <Card>
          <div className={styles.card}>
            <div className={styles.card__content}>
              <h1>
                Hello <span>Jhon!</span>
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
            />
          </div>
        </Card>
        <h2 className={styles.title}>Sections</h2>
        <SectionInfo
          sections={[
            {
              category: 'Gateways',
              amount: 11,
            },
            {
              category: 'Peripherals',
              amount: 8,
            },
          ]}
        />
      </div>
      <div className={styles.addorn__one}>C</div>
      <div className={styles.addorn__two}></div>
    </div>
  );
};

export default DashboardPage;
