import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const Row = ({ children, className = '' }: Props) => {
  return <tr className={className}>{children}</tr>;
};

export default Row;
