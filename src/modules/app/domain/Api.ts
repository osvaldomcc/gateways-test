export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

export type ApiPaginate<T> = { data: T; hasNext: boolean };
