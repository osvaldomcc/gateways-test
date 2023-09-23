import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import type { Gateway } from '@/modules/gateway/domain/Gateway';
import type {
  ButtonClickEvent,
  ColumnDefinition,
} from '@/sections/app/components/DynamicTable';
import styles from './GatewayPage.module.scss';

const columns: ColumnDefinition<Gateway>[] = [
  {
    name: 'Id',
    key: 'id',
  },
  {
    name: 'Name',
    key: 'name',
  },
  {
    name: 'IP',
    key: 'ip',
  },
];

const rows: Gateway[] = [
  {
    id: 1,
    name: 'Google',
    ip: '172.20.12.30',
  },
  {
    id: 2,
    name: 'Cisco',
    ip: '172.20.12.30',
  },
  {
    id: 3,
    name: 'Amazon',
    ip: '172.20.12.30',
  },
  {
    id: 4,
    name: 'Apple',
    ip: '172.20.12.30',
  },
];

const GatewayPage = () => {
  const handleOnButtonClick = (ev: ButtonClickEvent) => {
    console.log(ev);
  };

  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <DynamicTable
            title="Gateway List"
            columns={columns}
            rows={rows}
            onButtonClick={handleOnButtonClick}
          />
        </div>
      </Card>
    </div>
  );
};

export default GatewayPage;
