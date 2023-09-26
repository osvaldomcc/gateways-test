import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import PeripheralForm, {
  PeripheralFormType,
} from '@/sections/peripheral/components/PeripheralForm';
import styles from './PeripheralEditPage.module.scss';
import { Status } from '@/modules/peripheral/domain/Peripheral';
import useGateways from '@/sections/gateway/hooks/useGateways';
import usePeripherals from '@/sections/peripheral/hooks/usePeripherals';
import Alert from '@/sections/app/components/Alert';

const PeripheralEditPage = () => {
  const { id } = useParams();
  const { gateways, getAllGateways, error: gatewayError } = useGateways();
  const { updatePeripheralById, error, getPeripheralById, peripheral } =
    usePeripherals();

  const initialValues: PeripheralFormType = peripheral
    ? {
        date: peripheral.date,
        gatewayId: peripheral.gatewayId,
        status: peripheral.status,
        vendor: peripheral.vendor,
      }
    : { date: '', gatewayId: 1, status: Status.OFFLINE, vendor: '' };

  const handleSubmit = (newPeripheral: PeripheralFormType) => {
    const { gatewayId, ...props } = newPeripheral;

    updatePeripheralById(Number(id), {
      ...props,
      gatewayId: Number(gatewayId),
    });
  };

  useEffect(() => {
    getAllGateways();
  }, []);

  useEffect(() => {
    getPeripheralById(Number(id));
  }, [id]);

  return (
    <div className={styles.card}>
      {error && <Alert>{error}</Alert>}
      {gatewayError && <Alert>{gatewayError}</Alert>}
      <Card>
        <div className={styles.card__content}>
          <h1>Edit Peripheral</h1>
          <PeripheralForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            gateways={gateways}
            isEdit
          />
        </div>
      </Card>
    </div>
  );
};

export default PeripheralEditPage;
