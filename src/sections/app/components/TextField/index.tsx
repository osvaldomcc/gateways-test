import { useRef } from 'react';
import type { AriaTextFieldProps } from 'react-aria';
import { useTextField } from 'react-aria';

import styles from './TextField.module.scss';

function TextField(props: AriaTextFieldProps) {
  const { label } = props;
  const ref = useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div className={styles.form__input}>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
      {props.description && (
        <div {...descriptionProps}>{props.description}</div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps}>{props.errorMessage}</div>
      )}
    </div>
  );
}

export default TextField;
