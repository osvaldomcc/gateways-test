import { rest } from 'msw';

import { GatewayMother } from './gateway-factory';
import type { Gateway } from '@/modules/gateway/domain/Gateway';

const GatewayApiUrl = `${import.meta.env.VITE_API_URL}/gateways`;

// Mocked Data
export const gateways: Gateway[] = GatewayMother.createList(10);

export const gatewaysHandlers = [
  rest.get(GatewayApiUrl, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(gateways));
  }),
];
