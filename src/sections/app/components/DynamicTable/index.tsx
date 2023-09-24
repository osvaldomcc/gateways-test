import { IconEdit, IconFileInfo, IconTrash } from '@tabler/icons-react';

import Cell from '@/sections/app/components/Table/Cell';
import Column from '@/sections/app/components/Table/Column';
import Row from '@/sections/app/components/Table/Row';
import Table from '@/sections/app/components/Table';
import TableBody from '@/sections/app/components/Table/TableBody';
import TableHead from '@/sections/app/components/Table/TableHead';
import Button from '@/sections/app/components/Button';
import styles from './DynamicTable.module.scss';

export interface ColumnDefinition<T> {
  name: string;
  key: keyof T;
}

type ActionType = 'show' | 'edit' | 'delete';
const actions: { title: string; action: ActionType; icon: JSX.Element }[] = [
  {
    title: 'Show',
    action: 'show',
    icon: <IconFileInfo size={15} />,
  },
  {
    title: 'Edit',
    action: 'edit',
    icon: <IconEdit size={15} />,
  },
  {
    title: 'Delete',
    action: 'delete',
    icon: <IconTrash size={15} />,
  },
];

export type ButtonClickEvent = { id: number; actionType: ActionType };

interface Props<T> {
  title?: string;
  columns: ColumnDefinition<T>[];
  rows: T[];
  hideActions?: boolean;
  onButtonClick?: (ev: ButtonClickEvent) => void;
}

const DynamicTable = <T extends { id: number }>({
  columns,
  rows,
  onButtonClick,
  title = '',
  hideActions = false,
}: Props<T>) => {
  const handleButtonClick = (ev: ButtonClickEvent) => {
    if (onButtonClick) onButtonClick(ev);
  };

  return (
    <Table title={title}>
      <TableHead>
        <Row>
          {columns.map(({ name }, index) => (
            <Column ariaLabel="id" key={index}>
              {name}
            </Column>
          ))}
          {!hideActions && <Column ariaLabel="actions">Actions</Column>}
        </Row>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <Row key={row.id}>
            {columns.map(({ key }, index) => (
              <Cell key={index}>{row[key]}</Cell>
            ))}
            {!hideActions && (
              <Cell className={styles.buttons}>
                {actions.map(({ title, action, icon }, index) => (
                  <Button
                    key={index}
                    onPress={() =>
                      handleButtonClick({ id: row.id, actionType: action })
                    }
                  >
                    <div className={styles.button__content}>
                      {icon} {title}
                    </div>
                  </Button>
                ))}
              </Cell>
            )}
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

export default DynamicTable;
