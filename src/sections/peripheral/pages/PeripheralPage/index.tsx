import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import {
  Status,
  type Peripheral,
} from '@/modules/peripheral/domain/Peripheral';
import type { ButtonClickEvent } from '@/sections/app/components/DynamicTable';
import { routes } from '@/sections/app/routes';
import { peripheralColumns } from '@/sections/peripheral/types/column';
import { useNavigate } from 'react-router-dom';
import styles from './PeripheralPage.module.scss';

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
  const navigate = useNavigate();
  const handleOnButtonClick = ({ id, actionType }: ButtonClickEvent) => {
    if (actionType === 'show') navigate(routes.peripheralsShow(id));
    if (actionType === 'edit') navigate(routes.peripheralsEdit(id));
  };

  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <DynamicTable
            title="Peripheral List"
            columns={peripheralColumns}
            rows={rows}
            onButtonClick={handleOnButtonClick}
          />
        </div>
      </Card>
    </div>
  );
};

export default PeripheralPage;
