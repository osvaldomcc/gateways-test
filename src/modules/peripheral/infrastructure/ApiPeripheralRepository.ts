import type { Http } from '@/modules/app/domain/Http';
import type {
  Peripheral,
  PeripheralBody,
} from '@/modules/peripheral/domain/Peripheral';
import type { PeripheralRepository } from '@/modules/peripheral/domain/PeripheralRepository';

const PeripheralApiUrl = `${import.meta.env.VITE_API_URL}/peripherals`;

export function createApiPeripheralRepository(
  _http: Http,
): PeripheralRepository {
  const get = async (id: number): Promise<Peripheral | null> => {
    const response = await _http.get<Peripheral>(`${PeripheralApiUrl}/${id}`);
    return response.data;
  };

  const getAll = async (): Promise<Peripheral[]> => {
    const response = await _http.get<Peripheral[]>(PeripheralApiUrl);
    return response.data;
  };

  const create = async (peripheral: PeripheralBody): Promise<Peripheral> => {
    const response = await _http.post<PeripheralBody, Peripheral>(
      PeripheralApiUrl,
      peripheral,
    );
    return response.data;
  };

  const update = async (
    id: number,
    peripheral: PeripheralBody,
  ): Promise<Peripheral> => {
    const response = await _http.put<PeripheralBody, Peripheral>(
      `${PeripheralApiUrl}/${id}`,
      peripheral,
    );
    return response.data;
  };

  const remove = async (id: number): Promise<void> => {
    const response = await _http.delete<void>(`${PeripheralApiUrl}/${id}`);
    return response.data;
  };

  return {
    get,
    getAll,
    create,
    update,
    delete: remove,
  };
}
