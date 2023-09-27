import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';

import { Status } from '@/modules/peripheral/domain/Peripheral';
import type { Peripheral } from '@/modules/peripheral/domain/Peripheral';

const PeripheralFactory = Factory.define<Peripheral>(() => ({
  id: faker.number.int(),
  date: faker.date.anytime().toString(),
  status: faker.helpers.enumValue(Status),
  gatewayId: faker.number.int(),
  vendor: faker.company.name(),
}));

export const PeripheralMother = {
  create: (params?: Partial<Peripheral>): Peripheral => {
    return PeripheralFactory.build(params);
  },
  createList: (length = 5): Peripheral[] => {
    return PeripheralFactory.buildList(length);
  },
};
