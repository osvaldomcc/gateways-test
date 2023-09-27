import type { GatewayRepository } from '@/modules/gateway/domain/GatewayRepository';
import type { Gateway } from '@/modules/gateway/domain/Gateway';
import { ApiPaginate } from '@/modules/app/domain/Api';

export function getAllGateway(_repository: GatewayRepository) {
  return async function (
    page?: number,
    limit?: number,
  ): Promise<ApiPaginate<Gateway[]>> {
    return await _repository.getAll(page, limit);
  };
}
