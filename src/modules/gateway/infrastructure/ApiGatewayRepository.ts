import type { Http } from '@/modules/app/domain/Http';
import type { Gateway, GatewayBody } from '@/modules/gateway/domain/Gateway';
import type { GatewayRepository } from '@/modules/gateway/domain/GatewayRepository';

const GatewayApiUrl = `${import.meta.env.VITE_API_URL}/gateways`;

export function createApiGatewayRepository(_http: Http): GatewayRepository {
  const get = async (id: number): Promise<Gateway | null> => {
    const response = await _http.get<Gateway>(`${GatewayApiUrl}/${id}`);
    return response.data;
  };

  const getAll = async (): Promise<Gateway[]> => {
    const response = await _http.get<Gateway[]>(GatewayApiUrl);
    return response.data;
  };

  const create = async (gateway: GatewayBody): Promise<Gateway> => {
    const response = await _http.post<GatewayBody, Gateway>(
      GatewayApiUrl,
      gateway,
    );
    return response.data;
  };

  const update = async (id: number, gateway: GatewayBody): Promise<Gateway> => {
    const response = await _http.put<GatewayBody, Gateway>(
      `${GatewayApiUrl}/${id}`,
      gateway,
    );
    return response.data;
  };

  const remove = async (id: number): Promise<void> => {
    const response = await _http.delete<void>(`${GatewayApiUrl}/${id}`);
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
