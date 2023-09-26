import type { Http } from '@/modules/app/domain/Http';
import type { ApiResponse } from '@/modules/app/domain/Api';

const createMethod = async <T>(
  url: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  const { headers, status, statusText } = response;
  const data = (await response.json()) as T;

  return { data, status, statusText, headers };
};

const get = <T>(url: string, options?: RequestInit) =>
  createMethod<T>(url, options);

const post = <T, D>(url: string, data?: T, options?: RequestInit) => {
  const newOptions = { ...options };
  if (data) newOptions.body = JSON.stringify(data);
  newOptions.method = 'POST';

  return createMethod<D>(url, newOptions);
};

const put = <T, D>(url: string, data?: T, options?: RequestInit) => {
  const newOptions = { ...options };
  if (data) newOptions.body = JSON.stringify(data);
  newOptions.method = 'PUT';

  return createMethod<D>(url, newOptions);
};

const patch = <T, D>(url: string, data?: T, options?: RequestInit) => {
  const newOptions = { ...options };
  if (data) newOptions.body = JSON.stringify(data);
  newOptions.method = 'PUT';

  return createMethod<D>(url, newOptions);
};

const remove = <T>(url: string, options?: RequestInit) => {
  const newOptions = { ...options };
  newOptions.method = 'DELETE';

  return createMethod<T>(url, newOptions);
};

export const HttpInstance: Http = {
  get,
  post,
  put,
  patch,
  delete: remove,
};
