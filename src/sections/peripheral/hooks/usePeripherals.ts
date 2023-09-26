import { useState } from 'react';

import { getAllPeripheral } from '@/modules/peripheral/application/get-all/getAllPeripheral';
import { createApiPeripheralRepository } from '@/modules/peripheral/infrastructure/ApiPeripheralRepository';
import { HttpInstance } from '@/sections/app/utils/HttpInstance';
import {
  Peripheral,
  PeripheralBody,
} from '@/modules/peripheral/domain/Peripheral';
import { getPeripheral } from '@/modules/peripheral/application/get/getPeripheral';
import { createPeripheral } from '@/modules/peripheral/application/create/createPeripheral';
import { updatePeripheral } from '@/modules/peripheral/application/update/updatePeripheral';
import { deletePeripheral } from '@/modules/peripheral/application/delete/deletePeripheral';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/sections/app/routes';
import { Notify } from '@/sections/app/utils/Notification';

const usePeripherals = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [peripherals, setPeripherals] = useState<Peripheral[]>([]);
  const [peripheral, setPeripheral] = useState<Peripheral | null>(null);

  const navigate = useNavigate();

  const peripheralRepository = createApiPeripheralRepository(HttpInstance);
  const getAll = getAllPeripheral(peripheralRepository);
  const get = getPeripheral(peripheralRepository);
  const create = createPeripheral(peripheralRepository);
  const update = updatePeripheral(peripheralRepository);
  const remove = deletePeripheral(peripheralRepository);

  const reset = () => {
    setIsLoading(true);
    setError(false);
  };

  const getAllPeripherals = async () => {
    try {
      reset();
      const response = await getAll();
      setPeripherals(response);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getPeripheralById = async (id: number) => {
    try {
      reset();
      const response = await get(id);
      setPeripheral(response);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const addPeripheral = async (newPeripheral: PeripheralBody) => {
    try {
      reset();
      await create(newPeripheral);
      navigate(routes.peripherals, { replace: true });
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const updatePeripheralById = async (
    id: number,
    newPeripheral: PeripheralBody,
  ) => {
    try {
      reset();
      await update(id, newPeripheral);
      navigate(routes.peripherals, { replace: true });
      Notify.success('The peripheral was updated successfully');
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const deletePeripheralById = async (id: number) => {
    try {
      reset();
      await remove(id);
      setPeripherals(peripherals.filter((item) => item.id !== id));
      Notify.success('The peripheral was deleted successfully');
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    peripheral,
    peripherals,
    isLoading,
    addPeripheral,
    getPeripheralById,
    getAllPeripherals,
    updatePeripheralById,
    deletePeripheralById,
  };
};

export default usePeripherals;
