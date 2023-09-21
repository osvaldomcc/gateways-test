export enum Status {
  ONLINE = 'online',
  OFFLINE = 'offline',
}

export interface Peripheral {
  readonly uuid: string;
  vendor: string;
  date: string;
  status: Status;
}
