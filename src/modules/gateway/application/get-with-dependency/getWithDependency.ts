import type { GatewayRepository } from '@/modules/gateway/domain/GatewayRepository';
import type { GatewayWithDependency } from '@/modules/gateway/domain/Gateway';

export function getWithDependency(_repository: GatewayRepository) {
  return async function (id: number): Promise<GatewayWithDependency | null> {
    return await _repository.getWithDependency(id);
  };
}
