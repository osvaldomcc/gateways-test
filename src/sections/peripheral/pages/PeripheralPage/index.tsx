import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import {
  Status,
  type Peripheral,
} from '@/modules/peripheral/domain/Peripheral';
import type {
  ButtonClickEvent,
  ColumnDefinition,
} from '@/sections/app/components/DynamicTable';
import styles from './PeripheralPage.module.scss';

const columns: ColumnDefinition<Peripheral>[] = [
  {
    name: 'Id',
    key: 'id',
  },
  {
    name: 'Vendor',
    key: 'vendor',
  },
  {
    name: 'Status',
    key: 'status',
  },
  {
    name: 'Date',
    key: 'date',
  },
];

const rows: Peripheral[] = [
  {
    id: 1,
    vendor: 'Cisco',
    status: Status.ONLINE,
    date: new Date().toISOString(),
  },
  {
    id: 2,
    vendor: 'Google',
    status: Status.OFFLINE,
    date: new Date().toISOString(),
  },
  {
    id: 3,
    vendor: 'Amazon',
    status: Status.OFFLINE,
    date: new Date().toISOString(),
  },
];

const PeripheralPage = () => {
  const handleOnButtonClick = (ev: ButtonClickEvent) => {
    console.log(ev);
  };

  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <DynamicTable
            title="Peripheral List"
            columns={columns}
            rows={rows}
            onButtonClick={handleOnButtonClick}
          />
        </div>
      </Card>
    </div>
  );
};

export default PeripheralPage;
