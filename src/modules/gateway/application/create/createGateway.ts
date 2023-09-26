import type { GatewayRepository } from '@/modules/gateway/domain/GatewayRepository';
import type { Gateway, GatewayBody } from '@/modules/gateway/domain/Gateway';

export function createGateway(_repository: GatewayRepository) {
  return async function (gateway: GatewayBody): Promise<Gateway> {
    return await _repository.create(gateway);
  };
}
