import type { GatewayRepository } from '@/modules/gateway/domain/GatewayRepository';
import type { Gateway } from '@/modules/gateway/domain/Gateway';

export function getAllGateway(_repository: GatewayRepository) {
  return async function (): Promise<Gateway[]> {
    return await _repository.getAll();
  };
}
