import type { PeripheralRepository } from '@/modules/peripheral/domain/PeripheralRepository';
import type {
  Peripheral,
  PeripheralBody,
} from '@/modules/peripheral/domain/Peripheral';

export function updatePeripheral(_repository: PeripheralRepository) {
  return async function (
    id: number,
    peripheral: PeripheralBody,
  ): Promise<Peripheral> {
    return await _repository.update(id, peripheral);
  };
}
