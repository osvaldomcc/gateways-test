import { ApiResponse } from './Api';

export interface Http {
  get: <T>(url: string, options?: RequestInit) => Promise<ApiResponse<T>>;
  post: <T, D>(
    url: string,
    data?: T,
    options?: RequestInit,
  ) => Promise<ApiResponse<D>>;
  put: <T, D>(
    url: string,
    data?: T,
    options?: RequestInit,
  ) => Promise<ApiResponse<D>>;
  patch: <T, D>(
    url: string,
    data?: T,
    options?: RequestInit,
  ) => Promise<ApiResponse<D>>;
  delete: <T>(url: string, options?: RequestInit) => Promise<ApiResponse<T>>;
}
