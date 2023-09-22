import { useButton, AriaButtonProps } from 'react-aria';
import { useRef } from 'react';

import styles from './Button.module.scss';

interface Props extends AriaButtonProps {
  variant: 'primary';
}

function Button(props: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const { variant, ...restProps } = props;
  const { buttonProps } = useButton(restProps, ref);
  const { children } = restProps;

  const variantsMap = {
    primary: styles.button__primary,
  };

  return (
    <button {...buttonProps} ref={ref} className={variantsMap[variant]}>
      {children}
    </button>
  );
}

export default Button;