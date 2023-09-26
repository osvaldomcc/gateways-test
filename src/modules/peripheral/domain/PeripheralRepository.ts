import type { Peripheral, PeripheralBody } from './Peripheral';

export interface PeripheralRepository {
  get: (id: number) => Promise<Peripheral | null>;
  getAll: () => Promise<Peripheral[]>;
  create: (peripheral: PeripheralBody) => Promise<Peripheral>;
  update: (id: number, peripheral: PeripheralBody) => Promise<Peripheral>;
  delete: (id: number) => Promise<void>;
}
