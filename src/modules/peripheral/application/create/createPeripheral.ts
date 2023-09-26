import type { PeripheralRepository } from '@/modules/peripheral/domain/PeripheralRepository';
import type {
  Peripheral,
  PeripheralBody,
} from '@/modules/peripheral/domain/Peripheral';

export function createPeripheral(_repository: PeripheralRepository) {
  return async function (peripheral: PeripheralBody): Promise<Peripheral> {
    return await _repository.create(peripheral);
  };
}
