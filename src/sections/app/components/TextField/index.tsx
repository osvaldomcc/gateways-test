import type { TextFieldProps } from 'react-aria-components';
import {
  Text,
  Label,
  Input,
  TextField as DefaultTextField,
} from 'react-aria-components';

import styles from './TextField.module.scss';
interface Props extends TextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  placeholder?: string;
}

const TextField = ({ label, description, errorMessage, ...props }: Props) => {
  return (
    <DefaultTextField {...props} className={styles.form__input}>
      <Label>{label}</Label>
      <Input />
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </DefaultTextField>
  );
};

export default TextField;
