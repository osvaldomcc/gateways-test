import { gatewaysHandlers } from '@/tests/mocks/gateway/gateway-handlers';
import { peripheralsHandlers } from '@/tests/mocks/peripheral/peripheral-handlers';

export const handlers = [...gatewaysHandlers, ...peripheralsHandlers];
