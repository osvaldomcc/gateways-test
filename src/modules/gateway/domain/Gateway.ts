export interface Gateway {
  readonly id: number;
  name: string;
  ip: string;
}

export type GatewayBody = Omit<Gateway, 'id'>;
