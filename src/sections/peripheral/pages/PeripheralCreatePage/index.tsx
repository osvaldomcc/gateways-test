import { useEffect } from 'react';

import Card from '@/sections/app/components/Card';
import PeripheralForm, {
  PeripheralFormType,
} from '@/sections/peripheral/components/PeripheralForm';
import { Status } from '@/modules/peripheral/domain/Peripheral';
import styles from './PeripheralCreatePage.module.scss';
import Alert from '@/sections/app/components/Alert';
import useGateways from '@/sections/gateway/hooks/useGateways';
import usePeripherals from '@/sections/peripheral/hooks/usePeripherals';

const initialValues: PeripheralFormType = {
  date: '',
  status: Status.OFFLINE,
  vendor: '',
  gatewayId: 1,
};

const PeripheralCreatePage = () => {
  const { gateways, getAllGateways, error: gatewayError } = useGateways();
  const { addPeripheral, error } = usePeripherals();

  const handleSubmit = (newPeripheral: PeripheralFormType) => {
    const { gatewayId, ...props } = newPeripheral;
    addPeripheral({ ...props, gatewayId: Number(gatewayId) });
  };

  useEffect(() => {
    getAllGateways();
  }, []);

  return (
    <div className={styles.card}>
      {error && <Alert>{error}</Alert>}
      {gatewayError && <Alert>{gatewayError}</Alert>}
      <Card>
        <div className={styles.card__content}>
          <h1>Add Peripheral</h1>
          <PeripheralForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            gateways={gateways.data}
          />
        </div>
      </Card>
    </div>
  );
};

export default PeripheralCreatePage;
