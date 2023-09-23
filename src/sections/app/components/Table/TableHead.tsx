import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TableHead = ({ children }: Props) => {
  return <thead>{children}</thead>;
};

export default TableHead;
