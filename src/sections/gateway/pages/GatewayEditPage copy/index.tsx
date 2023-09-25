import Card from '@/sections/app/components/Card';
import GatewayForm, {
  GatewayFormType,
} from '@/sections/gateway/components/GatewayForm';
import styles from './GatewayEditPage.module.scss';

const initialValues: GatewayFormType = {
  name: 'Cisco',
  ip: '14.5.21.1',
};

const GatewayEditPage = () => {
  const handleSubmit = (some: GatewayFormType) => {
    console.log(some);
  };
  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <h1>Add Gateway</h1>
          <GatewayForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            isEdit
          />
        </div>
      </Card>
    </div>
  );
};

export default GatewayEditPage;
