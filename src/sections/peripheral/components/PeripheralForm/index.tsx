import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import TextField from '@/sections/app/components/TextField';
import Button from '@/sections/app/components/Button';
import { PeripheralSchema } from '@/sections/peripheral/utils/PeripheralSchema';
import {
  Status,
  type PeripheralBody,
} from '@/modules/peripheral/domain/Peripheral';
import styles from './PeripheralForm.module.scss';
import Select from '@/sections/app/components/Select';
import { capitalize } from '@/sections/app/utils/capitalize';
import { Gateway } from '@/modules/gateway/domain/Gateway';

export type PeripheralFormType = PeripheralBody;

interface Props {
  initialValues: PeripheralFormType;
  onSubmit: (peripheral: PeripheralFormType) => void;
  isEdit?: boolean;
  gateways: Gateway[];
}

const PeripheralForm = ({
  initialValues,
  onSubmit,
  isEdit = false,
  gateways = [],
}: Props) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PeripheralSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form noValidate className={styles.form}>
        <TextField placeholder="mm/dd/yyyy" label="Date" name="date" />
        <TextField placeholder="Cisco" label="Vendor" name="vendor" />
        <Select name="gatewayId" label="Gateway">
          {gateways.map((gateway) => (
            <option value={gateway.id} key={gateway.id}>
              {capitalize(gateway.name)}
            </option>
          ))}
        </Select>
        <Select name="status" label="Status">
          {Object.values(Status).map((status) => (
            <option value={status} key={status}>
              {capitalize(status)}
            </option>
          ))}
        </Select>
        <div className={styles.buttons}>
          <Button type="submit">{isEdit ? 'Update' : 'Add'}</Button>
          <Button type="button" variant="secondary" onPress={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default PeripheralForm;
