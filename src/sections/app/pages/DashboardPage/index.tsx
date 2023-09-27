import Card from '@/sections/app/components/Card';
import styles from './DashboardPage.module.scss';
import SectionInfo from './SectionInfo';
import { routes } from '@/sections/app/routes';
import { useAuthContext } from '@/sections/app/hooks/useAuthContext';
import useDashboard from '@/sections/app/hooks/useDashboard';
import { useEffect } from 'react';
import Alert from '../../components/Alert';

export interface Section {
  category: string;
  amount: number;
  url: string;
}

const DashboardPage = () => {
  const { user } = useAuthContext();
  const {
    gatewaysQty,
    peripheralsQty,
    getGatewaysAndPeripherals,
    gatewayError,
    peripheralError,
  } = useDashboard();

  useEffect(() => {
    getGatewaysAndPeripherals();
  }, []);

  const sections: Section[] = [
    {
      category: 'Gateways',
      amount: gatewaysQty.length,
      url: routes.gateways,
    },
    {
      category: 'Peripherals',
      amount: peripheralsQty.length,
      url: routes.peripherals,
    },
  ];

  return (
    <div className={styles.dashboard}>
      {(peripheralError || gatewayError) && (
        <Alert>
          <h3>There was an error, please contact admin@gmail.com</h3>
        </Alert>
      )}
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
