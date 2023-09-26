import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
  colSpan?: number;
}

const Cell = ({
  children,
  ariaLabel = 'column',
  className = '',
  colSpan = 0,
}: Props) => {
  return (
    <td
      scope="row"
      aria-label={ariaLabel}
      className={className}
      colSpan={colSpan}
    >
      {children}
    </td>
  );
};

export default Cell;
