import type { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
}

const Row = ({ children, className = '' }: Props) => {
  return <tr className={className}>{children}</tr>;
};

export default Row;
