import { rest } from 'msw';

import { PeripheralMother } from './peripheral-factory';
import type { Peripheral } from '@/modules/peripheral/domain/Peripheral';

const PeripheralApiUrl = `${import.meta.env.VITE_API_URL}/peripherals`;

// Mocked Data
export const peripherals: Peripheral[] = PeripheralMother.createList(10);

export const peripheralsHandlers = [
  rest.get(PeripheralApiUrl, (req, res, ctx) => {
    let result: Peripheral[] = peripherals;
    const limit = req.url.searchParams.get('_limit');
    if (limit) {
      result = PeripheralMother.createList(Number(limit));
    }
    return res(ctx.status(200), ctx.json(result));
  }),
  rest.get(`${PeripheralApiUrl}/:id`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(PeripheralMother.create()));
  }),
];
