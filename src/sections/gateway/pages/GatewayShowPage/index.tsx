import Card from '@/sections/app/components/Card';
import { Gateway } from '@/modules/gateway/domain/Gateway';
import DynamicTable from '@/sections/app/components/DynamicTable';
import { gatewayColumns } from '@/sections/gateway/types/column';
import styles from './GatewayShowPage.module.scss';

const rows: Gateway[] = [
  {
    id: 1,
    name: 'Google',
    ip: '172.20.12.30',
  },
];

const GatewayShowPage = () => {
  return (
    <div className={styles.card}>
      <Card cssStyles={{ flex: 0.8 }}>
        <div className={styles.card__content}>
          <DynamicTable
            title={rows[0].name}
            columns={gatewayColumns}
            rows={rows}
            hideActions
          />
        </div>
      </Card>
      <Card cssStyles={{ flex: 0.2 }}>
        <div className={styles.card__content}>
          <h2>Peripherals:</h2>
          <h3>Mouse</h3>
          <h3>Keyboard</h3>
          <h3>Laptop</h3>
        </div>
      </Card>
    </div>
  );
};

export default GatewayShowPage;
