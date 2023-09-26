import type { Gateway, GatewayBody, GatewayWithDependency } from './Gateway';

export interface GatewayRepository {
  get: (id: number) => Promise<Gateway | null>;
  getWithDependency: (id: number) => Promise<GatewayWithDependency | null>;
  getAll: () => Promise<Gateway[]>;
  create: (gateway: GatewayBody) => Promise<Gateway>;
  update: (id: number, gateway: GatewayBody) => Promise<Gateway>;
  delete: (id: number) => Promise<void>;
}
