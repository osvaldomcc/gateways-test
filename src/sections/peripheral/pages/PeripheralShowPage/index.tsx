import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import { Peripheral, Status } from '@/modules/peripheral/domain/Peripheral';
import { peripheralColumns } from '@/sections/peripheral/types/column';
import styles from './PeripheralShowPage.module.scss';

const rows: Peripheral[] = [
  {
    id: 1,
    vendor: 'Cisco',
    status: Status.ONLINE,
    date: new Date().toISOString(),
  },
];

const PeripheralShowPage = () => {
  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <DynamicTable
            title={rows[0].vendor}
            columns={peripheralColumns}
            rows={rows}
            hideActions
          />
        </div>
      </Card>
    </div>
  );
};

export default PeripheralShowPage;
