import { Peripheral } from '@/modules/peripheral/domain/Peripheral';

export interface Gateway {
  readonly id: number;
  name: string;
  ip: string;
}

export interface GatewayWithDependency extends Gateway {
  peripherals: Peripheral[];
}

export type GatewayBody = Omit<Gateway, 'id'>;

export const NAME_MIN_LENGTH = 2;
