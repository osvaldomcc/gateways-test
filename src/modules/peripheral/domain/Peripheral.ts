export enum Status {
  ONLINE = 'online',
  OFFLINE = 'offline',
}

export interface Peripheral {
  readonly id: number;
  vendor: string;
  date: string;
  status: Status;
}
