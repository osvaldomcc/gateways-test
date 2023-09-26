import type { GatewayRepository } from '@/modules/gateway/domain/GatewayRepository';
import type { Gateway, GatewayBody } from '@/modules/gateway/domain/Gateway';

export function updateGateway(_repository: GatewayRepository) {
  return async function (id: number, gateway: GatewayBody): Promise<Gateway> {
    return await _repository.update(id, gateway);
  };
}
