import { ApiPaginate } from '@/modules/app/domain/Api';
import type { Gateway, GatewayBody, GatewayWithDependency } from './Gateway';

export interface GatewayRepository {
  get: (id: number) => Promise<Gateway | null>;
  getWithDependency: (id: number) => Promise<GatewayWithDependency | null>;
  getAll: (page?: number, limit?: number) => Promise<ApiPaginate<Gateway[]>>;
  create: (gateway: GatewayBody) => Promise<Gateway>;
  update: (id: number, gateway: GatewayBody) => Promise<Gateway>;
  delete: (id: number) => Promise<void>;
}
