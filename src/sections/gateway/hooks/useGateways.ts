import { useState } from 'react';

import { getAllGateway } from '@/modules/gateway/application/get-all/getAllGateway';
import { createApiGatewayRepository } from '@/modules/gateway/infrastructure/ApiGatewayRepository';
import { HttpInstance } from '@/sections/app/utils/HttpInstance';
import { Gateway, GatewayBody } from '@/modules/gateway/domain/Gateway';
import { getGateway } from '@/modules/gateway/application/get/getGateway';
import { createGateway } from '@/modules/gateway/application/create/createGateway';
import { updateGateway } from '@/modules/gateway/application/update/updateGateway';
import { deleteGateway } from '@/modules/gateway/application/delete/deleteGateway';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/sections/app/routes';
import { Notify } from '@/sections/app/utils/Notification';

const useGateways = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [gateways, setGateways] = useState<Gateway[]>([]);
  const [gateway, setGateway] = useState<Gateway | null>(null);

  const navigate = useNavigate();

  const gatewayRepository = createApiGatewayRepository(HttpInstance);
  const getAll = getAllGateway(gatewayRepository);
  const get = getGateway(gatewayRepository);
  const create = createGateway(gatewayRepository);
  const update = updateGateway(gatewayRepository);
  const remove = deleteGateway(gatewayRepository);

  const reset = () => {
    setIsLoading(true);
    setError(false);
  };

  const getAllGateways = async () => {
    try {
      reset();
      const response = await getAll();
      setGateways(response);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getGatewayById = async (id: number) => {
    try {
      reset();
      const response = await get(id);
      setGateway(response);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const addGateway = async (newGateway: GatewayBody) => {
    try {
      reset();
      await create(newGateway);
      navigate(routes.gateways, { replace: true });
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const updateGatewayById = async (id: number, newGateway: GatewayBody) => {
    try {
      reset();
      await update(id, newGateway);
      navigate(routes.gateways, { replace: true });
      Notify.success('The gateway was updated successfully');
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteGatewayById = async (id: number) => {
    try {
      reset();
      await remove(id);
      setGateways(gateways.filter((item) => item.id !== id));
      Notify.success('The gateway was deleted successfully');
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    gateway,
    gateways,
    isLoading,
    addGateway,
    getGatewayById,
    getAllGateways,
    updateGatewayById,
    deleteGatewayById,
  };
};

export default useGateways;
