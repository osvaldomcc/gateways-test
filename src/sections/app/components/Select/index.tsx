import { HTMLAttributes } from 'react';
import { useField } from 'formik';

import styles from './Select.module.scss';

interface Props extends HTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
}

const Select = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  return (
    <>
      <label htmlFor={props.id || props.name} className={styles.label}>
        {label}
      </label>
      <select {...field} {...props} className={styles.form__input} />
      {hasError && <span className={styles.error}>{meta.error}</span>}
    </>
  );
};

export default Select;
