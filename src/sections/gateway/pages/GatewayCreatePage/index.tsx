import Card from '@/sections/app/components/Card';
import GatewayForm, {
  GatewayFormType,
} from '@/sections/gateway/components/GatewayForm';
import useGateways from '@/sections/gateway/hooks/useGateways';
import styles from './GatewayCreatePage.module.scss';

const initialValues: GatewayFormType = {
  name: '',
  ip: '',
};

const GatewayCreatePage = () => {
  const { addGateway } = useGateways();

  const handleSubmit = (gateway: GatewayFormType) => {
    addGateway(gateway);
  };

  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <h1>Add Gateway</h1>
          <GatewayForm initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
      </Card>
    </div>
  );
};

export default GatewayCreatePage;
