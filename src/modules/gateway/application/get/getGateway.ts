import type { GatewayRepository } from '@/modules/gateway/domain/GatewayRepository';
import type { Gateway } from '@/modules/gateway/domain/Gateway';

export function getGateway(_repository: GatewayRepository) {
  return async function (id: number): Promise<Gateway | null> {
    return await _repository.get(id);
  };
}
