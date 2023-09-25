import { Form, Formik } from 'formik';

import TextField from '@/sections/app/components/TextField';
import Button from '@/sections/app/components/Button';
import { PeripheralSchema } from '@/sections/peripheral/utils/PeripheralSchema';
import {
  Status,
  type Peripheral,
} from '@/modules/peripheral/domain/Peripheral';
import styles from './PeripheralForm.module.scss';
import Select from '@/sections/app/components/Select';
import { capitalize } from '@/sections/app/utils/capitalize';

export type PeripheralFormType = Omit<Peripheral, 'id'>;

interface Props {
  initialValues: PeripheralFormType;
  onSubmit: (peripheral: PeripheralFormType) => void;
  isEdit?: boolean;
}

const PeripheralForm = ({ initialValues, onSubmit, isEdit = false }: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PeripheralSchema}
      onSubmit={onSubmit}
    >
      <Form noValidate className={styles.form}>
        <TextField placeholder="mm/dd/yyyy" label="Date" name="date" />
        <TextField placeholder="Cisco" label="Vendor" name="vendor" />
        <Select name="status" label="Status">
          {Object.values(Status).map((status) => (
            <option value={status} key={status}>
              {capitalize(status)}
            </option>
          ))}
        </Select>
        <Button type="submit">{isEdit ? 'Update' : 'Add'}</Button>
      </Form>
    </Formik>
  );
};

export default PeripheralForm;
