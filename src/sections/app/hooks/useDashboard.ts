import useGateways from '@/sections/gateway/hooks/useGateways';
import usePeripherals from '@/sections/peripheral/hooks/usePeripherals';

const LIMIT = 11;

const useDashboard = () => {
  const { gateways, getAllGateways, error: gatewayError } = useGateways();
  const {
    peripherals,
    getAllPeripherals,
    error: peripheralError,
  } = usePeripherals();

  const getGatewaysAndPeripherals = async () => {
    await Promise.all([
      getAllGateways(undefined, LIMIT),
      getAllPeripherals(undefined, LIMIT),
    ]);
  };

  return {
    gatewayError,
    peripheralError,
    gatewaysQty: gateways.data,
    peripheralsQty: peripherals.data,
    getGatewaysAndPeripherals,
  };
};

export default useDashboard;
