import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import GatewayForm, {
  GatewayFormType,
} from '@/sections/gateway/components/GatewayForm';
import styles from './GatewayEditPage.module.scss';
import useGateways from '@/sections/gateway/hooks/useGateways';
import Alert from '@/sections/app/components/Alert';

const GatewayEditPage = () => {
  const { id } = useParams();
  const { gateway, getGatewayById, updateGatewayById, error } = useGateways();

  const initialvalues: GatewayFormType = gateway
    ? { name: gateway.name, ip: gateway.ip }
    : { name: '', ip: '' };

  const handleSubmit = (newGateway: GatewayFormType) => {
    updateGatewayById(Number(id), newGateway);
  };

  useEffect(() => {
    getGatewayById(Number(id));
  }, [id]);

  return (
    <div className={styles.card}>
      {error && <Alert>{error}</Alert>}
      <Card>
        <div className={styles.card__content}>
          <h1>Edit Gateway</h1>
          <GatewayForm
            initialValues={initialvalues}
            onSubmit={handleSubmit}
            isEdit
          />
        </div>
      </Card>
    </div>
  );
};

export default GatewayEditPage;
