import type { Gateway } from '@/modules/gateway/domain/Gateway';
import type { ColumnDefinition } from '@/sections/app/components/DynamicTable';

export const gatewayColumns: ColumnDefinition<Gateway>[] = [
  {
    name: 'Id',
    key: 'id',
  },
  {
    name: 'Name',
    key: 'name',
  },
  {
    name: 'IP',
    key: 'ip',
  },
];
