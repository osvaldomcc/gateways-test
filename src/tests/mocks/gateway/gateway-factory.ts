import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';

import type { Gateway } from '@/modules/gateway/domain/Gateway';

const GatewayFactory = Factory.define<Gateway>(() => ({
  id: faker.number.int(),
  ip: faker.internet.ipv4(),
  name: faker.company.name(),
}));

export const GatewayMother = {
  createList: (length = 5): Gateway[] => {
    return GatewayFactory.buildList(length);
  },
};
