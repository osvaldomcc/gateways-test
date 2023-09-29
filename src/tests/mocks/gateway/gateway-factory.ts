import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';

import type { Gateway } from '@/modules/gateway/domain/Gateway';
import { NAME_MIN_LENGTH } from '@/modules/peripheral/domain/Peripheral';

const GatewayFactory = Factory.define<Gateway>(() => ({
  id: faker.number.int(),
  ip: faker.internet.ipv4(),
  name: faker.company.name(),
}));

export const GatewayMother = {
  create: (params?: Partial<Gateway>): Gateway => {
    return GatewayFactory.build(params);
  },
  createList: (length = 5): Gateway[] => {
    return GatewayFactory.buildList(length);
  },
  createWithShortName: (): Gateway => {
    return GatewayFactory.build({
      name: faker.lorem.word(NAME_MIN_LENGTH - 1),
    });
  },
  createWithInvalidIp: (): Gateway => {
    return GatewayFactory.build({
      ip: faker.lorem.word(4),
    });
  },
};
