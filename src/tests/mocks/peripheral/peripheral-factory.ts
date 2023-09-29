import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';

import { Status } from '@/modules/peripheral/domain/Peripheral';
import type { Peripheral } from '@/modules/peripheral/domain/Peripheral';

const PeripheralFactory = Factory.define<Peripheral>(() => {
  const date = new Intl.DateTimeFormat('en').format();

  return {
    id: faker.number.int(),
    date,
    status: faker.helpers.enumValue(Status),
    gatewayId: faker.number.int(),
    vendor: faker.company.name(),
  };
});

export const PeripheralMother = {
  create: (params?: Partial<Peripheral>): Peripheral => {
    return PeripheralFactory.build(params);
  },
  createList: (length = 5): Peripheral[] => {
    return PeripheralFactory.buildList(length);
  },
  createWithInvalidDateFormat: (): Peripheral => {
    return PeripheralFactory.build({
      date: '1956/24/12',
    });
  },
  createWithInvalidVendor: (): Peripheral => {
    return PeripheralFactory.build({
      vendor: `${faker.lorem.word(4)}${faker.number.int(100)}`,
    });
  },
};
