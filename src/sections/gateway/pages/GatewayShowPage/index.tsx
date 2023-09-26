import { useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import { gatewayColumns } from '@/sections/gateway/types/column';
import useGateways from '@/sections/gateway/hooks/useGateways';
import { routes } from '@/sections/app/routes';
import styles from './GatewayShowPage.module.scss';

const GatewayShowPage = () => {
  const { id } = useParams();
  const {
    gatewayWithPeripherals: gateway,
    error,
    isLoading,
    getGatewayByIdAndPeripherals,
  } = useGateways();

  useEffect(() => {
    getGatewayByIdAndPeripherals(Number(id));
  }, [id]);

  return (
    <div className={styles.card}>
      <Card cssStyles={{ flex: 0.8 }}>
        <div className={styles.card__content}>
          <DynamicTable
            title={gateway?.name}
            columns={gatewayColumns}
            rows={gateway ? [gateway] : []}
            isLoading={isLoading}
            hasError={Boolean(error)}
            hideActions
            showBackButton
          />
        </div>
      </Card>
      <Card cssStyles={{ flex: 0.2 }}>
        <div className={styles.card__content}>
          <h2>Peripherals:</h2>
          <div className={styles.list}>
            {gateway?.peripherals.map((peripheral) => (
              <Link
                className={styles.link}
                to={routes.peripheralsShow(peripheral.id)}
                key={peripheral.id}
              >
                {peripheral.vendor}
              </Link>
            ))}
          </div>
          {gateway?.peripherals.length === 0 && <h4>No items to show</h4>}
        </div>
      </Card>
    </div>
  );
};

export default GatewayShowPage;
