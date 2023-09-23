import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  ariaLabel?: string;
  tabIndex?: number;
}

const Column = ({ children, tabIndex = 0, ariaLabel = 'column' }: Props) => {
  return (
    <th scope="col" aria-label={ariaLabel} tabIndex={tabIndex}>
      {children}
    </th>
  );
};

export default Column;
