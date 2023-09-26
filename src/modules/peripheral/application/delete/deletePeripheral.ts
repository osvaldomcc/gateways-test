import type { PeripheralRepository } from '@/modules/peripheral/domain/PeripheralRepository';

export function deletePeripheral(_repository: PeripheralRepository) {
  return async function (id: number): Promise<void> {
    await _repository.delete(id);
  };
}
