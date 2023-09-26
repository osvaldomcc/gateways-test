import { useState } from 'react';

import { getAllGateway } from '@/modules/gateway/application/get-all/getAllGateway';
import { createApiGatewayRepository } from '@/modules/gateway/infrastructure/ApiGatewayRepository';
import { HttpInstance } from '@/sections/app/utils/HttpInstance';
import {
  Gateway,
  GatewayBody,
  GatewayWithDependency,
} from '@/modules/gateway/domain/Gateway';
import { getGateway } from '@/modules/gateway/application/get/getGateway';
import { createGateway } from '@/modules/gateway/application/create/createGateway';
import { updateGateway } from '@/modules/gateway/application/update/updateGateway';
import { deleteGateway } from '@/modules/gateway/application/delete/deleteGateway';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/sections/app/routes';
import { Notify } from '@/sections/app/utils/Notification';
import { getWithDependency } from '@/modules/gateway/application/get-with-dependency/getWithDependency';

type Error = { message: string };

const useGateways = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [gateways, setGateways] = useState<Gateway[]>([]);
  const [gateway, setGateway] = useState<Gateway | null>(null);
  const [gatewayWithPeripherals, setGatewayWithPeripherals] =
    useState<GatewayWithDependency | null>(null);

  const navigate = useNavigate();

  const gatewayRepository = createApiGatewayRepository(HttpInstance);
  const getAll = getAllGateway(gatewayRepository);
  const get = getGateway(gatewayRepository);
  const create = createGateway(gatewayRepository);
  const update = updateGateway(gatewayRepository);
  const remove = deleteGateway(gatewayRepository);
  const getWithRelation = getWithDependency(gatewayRepository);

  const reset = () => {
    setIsLoading(true);
    setError('');
  };

  const handleError = (err: Error) => {
    setError(err.message);
  };

  const getAllGateways = async () => {
    try {
      reset();
      const response = await getAll();
      setGateways(response);
    } catch (err) {
      handleError(err as Error);
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
      handleError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const addGateway = async (newGateway: GatewayBody) => {
    try {
      reset();
      await create(newGateway);
      navigate(routes.gateways, { replace: true });
      Notify.success('The gateway was created successfully');
    } catch (err) {
      handleError(err as Error);
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
      handleError(err as Error);
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
      handleError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const getGatewayByIdAndPeripherals = async (id: number) => {
    try {
      reset();
      const response = await getWithRelation(id);
      setGatewayWithPeripherals(response);
    } catch (err) {
      handleError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    gateway,
    gateways,
    isLoading,
    gatewayWithPeripherals,
    addGateway,
    getGatewayById,
    getAllGateways,
    updateGatewayById,
    deleteGatewayById,
    getGatewayByIdAndPeripherals,
  };
};

export default useGateways;
