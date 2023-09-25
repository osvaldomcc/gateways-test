import Card from '@/sections/app/components/Card';
import PeripheralForm, {
  PeripheralFormType,
} from '@/sections/peripheral/components/PeripheralForm';
import { Status } from '@/modules/peripheral/domain/Peripheral';
import styles from './PeripheralCreatePage.module.scss';

const initialValues: PeripheralFormType = {
  date: '',
  status: Status.OFFLINE,
  vendor: '',
};

const PeripheralCreatePage = () => {
  const handleSubmit = (some: PeripheralFormType) => {
    console.log(some);
  };
  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <h1>Add Peripheral</h1>
          <PeripheralForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
          />
        </div>
      </Card>
    </div>
  );
};

export default PeripheralCreatePage;
