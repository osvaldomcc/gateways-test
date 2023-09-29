import { rest } from 'msw';

import { GatewayMother } from './gateway-factory';
import { PeripheralMother } from '@/tests/mocks/peripheral/peripheral-factory';
import type {
  Gateway,
  GatewayWithDependency,
} from '@/modules/gateway/domain/Gateway';

const GatewayApiUrl = `${import.meta.env.VITE_API_URL}/gateways`;

// Mocked Data
export const gateways: Gateway[] = GatewayMother.createList(10);
const gateway = GatewayMother.create();
const peripherals = PeripheralMother.createList(5);

export const gatewayWithPeripherals: GatewayWithDependency = {
  ...gateway,
  peripherals,
};

export const gatewaysHandlers = [
  rest.get(GatewayApiUrl, (req, res, ctx) => {
    let result: Gateway[] = gateways;
    const limit = req.url.searchParams.get('_limit');
    if (limit) {
      result = GatewayMother.createList(Number(limit));
    }
    return res(ctx.status(200), ctx.json(result));
  }),
  rest.get(`${GatewayApiUrl}/:id`, (req, res, ctx) => {
    const dependency = req.url.searchParams.get('_embed');
    if (dependency === 'peripherals') {
      return res(ctx.status(200), ctx.json(gatewayWithPeripherals));
    }
    return res(ctx.status(200), ctx.json(GatewayMother.create()));
  }),
];
