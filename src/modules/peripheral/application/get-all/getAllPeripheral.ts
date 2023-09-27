import type { PeripheralRepository } from '@/modules/peripheral/domain/PeripheralRepository';
import type { Peripheral } from '@/modules/peripheral/domain/Peripheral';
import { ApiPaginate } from '@/modules/app/domain/Api';

export function getAllPeripheral(_repository: PeripheralRepository) {
  return async function (
    page?: number,
    limit?: number,
  ): Promise<ApiPaginate<Peripheral[]>> {
    return await _repository.getAll(page, limit);
  };
}
