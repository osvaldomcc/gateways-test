import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
}

const Cell = ({ children, ariaLabel = 'column', className = '' }: Props) => {
  return (
    <td scope="row" aria-label={ariaLabel} className={className}>
      {children}
    </td>
  );
};

export default Cell;
