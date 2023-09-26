import type { Gateway, GatewayBody } from './Gateway';

export interface GatewayRepository {
  get: (id: number) => Promise<Gateway | null>;
  getAll: () => Promise<Gateway[]>;
  create: (gateway: GatewayBody) => Promise<Gateway>;
  update: (id: number, gateway: GatewayBody) => Promise<Gateway>;
  delete: (id: number) => Promise<void>;
}
