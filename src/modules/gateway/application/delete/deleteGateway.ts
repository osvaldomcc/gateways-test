import type { GatewayRepository } from '@/modules/gateway/domain/GatewayRepository';

export function deleteGateway(_repository: GatewayRepository) {
  return async function (id: number): Promise<void> {
    await _repository.delete(id);
  };
}
