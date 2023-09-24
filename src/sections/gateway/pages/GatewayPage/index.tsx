import { useNavigate } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import type { Gateway } from '@/modules/gateway/domain/Gateway';
import type { ButtonClickEvent } from '@/sections/app/components/DynamicTable';
import { routes } from '@/sections/app/routes';
import { gatewayColumns } from '@/sections/gateway/types/column';
import styles from './GatewayPage.module.scss';

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
  const navigate = useNavigate();
  const handleOnButtonClick = ({ id, actionType }: ButtonClickEvent) => {
    if (actionType === 'show') navigate(routes.gatewaysShow(id));
    if (actionType === 'edit') navigate(routes.gatewaysEdit(id));
  };

  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <DynamicTable
            title="Gateway List"
            columns={gatewayColumns}
            rows={rows}
            onButtonClick={handleOnButtonClick}
          />
        </div>
      </Card>
    </div>
  );
};

export default GatewayPage;
