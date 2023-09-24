import type { Peripheral } from '@/modules/peripheral/domain/Peripheral';
import type { ColumnDefinition } from '@/sections/app/components/DynamicTable';

export const peripheralColumns: ColumnDefinition<Peripheral>[] = [
  {
    name: 'Id',
    key: 'id',
  },
  {
    name: 'Vendor',
    key: 'vendor',
  },
  {
    name: 'Status',
    key: 'status',
  },
  {
    name: 'Date',
    key: 'date',
  },
];
