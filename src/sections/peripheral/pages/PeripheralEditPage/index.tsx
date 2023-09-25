import Card from '@/sections/app/components/Card';
import PeripheralForm, {
  PeripheralFormType,
} from '@/sections/peripheral/components/PeripheralForm';
import styles from './PeripheralEditPage.module.scss';
import { Status } from '@/modules/peripheral/domain/Peripheral';

const initialValues: PeripheralFormType = {
  date: '14/08/2023',
  vendor: 'Cisco',
  status: Status.ONLINE,
};

const PeripheralEditPage = () => {
  const handleSubmit = (some: PeripheralFormType) => {
    console.log(some);
  };
  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <h1>Edit Peripheral</h1>
          <PeripheralForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            isEdit
          />
        </div>
      </Card>
    </div>
  );
};

export default PeripheralEditPage;
