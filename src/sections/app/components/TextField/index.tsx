import type { TextFieldProps } from 'react-aria-components';
import {
  Text,
  Label,
  Input,
  TextField as DefaultTextField,
} from 'react-aria-components';
import { useField } from 'formik';

import styles from './TextField.module.scss';
interface Props extends TextFieldProps {
  label?: string;
  description?: string;
  placeholder?: string;
  name: string;
}

const TextField = ({ label, description, ...props }: Props) => {
  const [field, meta] = useField(props.name);
  const hasError = meta.touched && meta.error;
  return (
    <DefaultTextField {...props} className={styles.form__input}>
      <Label>{label}</Label>
      <Input {...field} />
      {description && <Text slot="description">{description}</Text>}
      {hasError && (
        <Text slot="errorMessage" className={styles.error} role="alert">
          {meta.error}
        </Text>
      )}
    </DefaultTextField>
  );
};

export default TextField;
