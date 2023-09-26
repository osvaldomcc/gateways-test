import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import type { ButtonClickEvent } from '@/sections/app/components/DynamicTable';
import { routes } from '@/sections/app/routes';
import { gatewayColumns } from '@/sections/gateway/types/column';
import Modal from '@/sections/app/components/Modal';
import Button from '@/sections/app/components/Button';
import styles from './GatewayPage.module.scss';
import useGateways from '@/sections/gateway/hooks/useGateways';

const GatewayPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleCloseModal = () => setShowModal(false);
  const { gateways, getAllGateways, deleteGatewayById } = useGateways();
  const [selectedGateway, setSelectedGateway] = useState<number>(0);

  const navigate = useNavigate();

  const handleOnButtonClick = ({ id, actionType }: ButtonClickEvent) => {
    if (actionType === 'show') navigate(routes.gatewaysShow(id));
    if (actionType === 'edit') navigate(routes.gatewaysEdit(id));
    if (actionType === 'delete') {
      setSelectedGateway(id);
      setShowModal(true);
    }
  };

  const handleAddButtonClick = () => {
    navigate(routes.gatewaysCreate);
  };

  const handleDelete = () => {
    deleteGatewayById(selectedGateway);
    setShowModal(false);
  };

  useEffect(() => {
    getAllGateways();
  }, []);

  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <DynamicTable
            title="Gateway List"
            columns={gatewayColumns}
            rows={gateways}
            onButtonClick={handleOnButtonClick}
            onAddButtonClick={handleAddButtonClick}
          />
        </div>
      </Card>
      <Modal
        showModal={showModal}
        onCloseModal={handleCloseModal}
        title="Remove Gateway"
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

export default GatewayPage;
