import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import { peripheralColumns } from '@/sections/peripheral/types/column';
import usePeripherals from '@/sections/peripheral/hooks/usePeripherals';
import styles from './PeripheralShowPage.module.scss';

const PeripheralShowPage = () => {
  const { id } = useParams();
  const { peripheral, error, isLoading, getPeripheralById } = usePeripherals();

  useEffect(() => {
    getPeripheralById(Number(id));
  }, [id]);

  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <DynamicTable
            title={peripheral?.vendor}
            columns={peripheralColumns}
            rows={peripheral ? [peripheral] : []}
            hideActions
            isLoading={isLoading}
            hasError={Boolean(error)}
            showBackButton
          />
        </div>
      </Card>
    </div>
  );
};

export default PeripheralShowPage;
