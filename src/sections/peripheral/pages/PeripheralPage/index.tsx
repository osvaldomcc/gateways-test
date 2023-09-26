import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import type { ButtonClickEvent } from '@/sections/app/components/DynamicTable';
import { routes } from '@/sections/app/routes';
import { peripheralColumns } from '@/sections/peripheral/types/column';
import Modal from '@/sections/app/components/Modal';
import Button from '@/sections/app/components/Button';
import styles from './PeripheralPage.module.scss';
import usePeripherals from '@/sections/peripheral/hooks/usePeripherals';

const PeripheralPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleCloseModal = () => setShowModal(false);
  const {
    peripherals,
    getAllPeripherals,
    deletePeripheralById,
    isLoading,
    error,
  } = usePeripherals();
  const [selectedPeripheral, setSelectedPeripheral] = useState<number>(0);

  const navigate = useNavigate();

  const handleOnButtonClick = ({ id, actionType }: ButtonClickEvent) => {
    if (actionType === 'show') navigate(routes.peripheralsShow(id));
    if (actionType === 'edit') navigate(routes.peripheralsEdit(id));
    if (actionType === 'delete') {
      setSelectedPeripheral(id);
      setShowModal(true);
    }
  };

  const handleAddButtonClick = () => {
    navigate(routes.peripheralsCreate);
  };

  const handleDelete = () => {
    deletePeripheralById(selectedPeripheral);
    setShowModal(false);
  };

  useEffect(() => {
    getAllPeripherals();
  }, []);

  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <DynamicTable
            title="Peripheral List"
            columns={peripheralColumns}
            rows={peripherals}
            onButtonClick={handleOnButtonClick}
            onAddButtonClick={handleAddButtonClick}
            hasError={Boolean(error)}
            isLoading={isLoading}
          />
        </div>
      </Card>
      <Modal
        showModal={showModal}
        onCloseModal={handleCloseModal}
        title="Remove Peripheral"
        bottom={
          <>
            <Button onPress={handleDelete}>Delete</Button>
            <Button variant="secondary" onPress={handleCloseModal}>
              Cancel
            </Button>
          </>
        }
      >
        <h3>Are you sure you want to delete the item?</h3>
      </Modal>
    </div>
  );
};

export default PeripheralPage;
