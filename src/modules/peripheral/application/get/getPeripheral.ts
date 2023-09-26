import type { PeripheralRepository } from '@/modules/peripheral/domain/PeripheralRepository';
import type { Peripheral } from '@/modules/peripheral/domain/Peripheral';

export function getPeripheral(_repository: PeripheralRepository) {
  return async function (id: number): Promise<Peripheral | null> {
    return await _repository.get(id);
  };
}
