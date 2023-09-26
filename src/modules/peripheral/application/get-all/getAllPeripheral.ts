import type { PeripheralRepository } from '@/modules/peripheral/domain/PeripheralRepository';
import type { Peripheral } from '@/modules/peripheral/domain/Peripheral';

export function getAllPeripheral(_repository: PeripheralRepository) {
  return async function (): Promise<Peripheral[]> {
    return await _repository.getAll();
  };
}
