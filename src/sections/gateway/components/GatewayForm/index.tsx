import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import TextField from '@/sections/app/components/TextField';
import Button from '@/sections/app/components/Button';
import { GatewaySchema } from '@/sections/gateway/utils/GatewaySchema';
import type { GatewayBody } from '@/modules/gateway/domain/Gateway';
import styles from './GatewayForm.module.scss';

export type GatewayFormType = GatewayBody;

interface Props {
  initialValues: GatewayFormType;
  onSubmit: (gateway: GatewayFormType) => void;
  isEdit?: boolean;
}

const GatewayForm = ({ initialValues, onSubmit, isEdit = false }: Props) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={GatewaySchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form noValidate className={styles.form}>
        <TextField placeholder="Cisco..." label="Name" name="name" />
        <TextField placeholder="120.4.2.10" label="Ip" name="ip" />
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

export default GatewayForm;
