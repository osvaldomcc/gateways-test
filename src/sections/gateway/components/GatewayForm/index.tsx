import { Form, Formik } from 'formik';

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
        <Button type="submit">{isEdit ? 'Update' : 'Add'}</Button>
      </Form>
    </Formik>
  );
};

export default GatewayForm;
