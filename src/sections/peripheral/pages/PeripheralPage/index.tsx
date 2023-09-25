import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import DynamicTable from '@/sections/app/components/DynamicTable';
import { Status } from '@/modules/peripheral/domain/Peripheral';
import type { Peripheral } from '@/modules/peripheral/domain/Peripheral';
import type { ButtonClickEvent } from '@/sections/app/components/DynamicTable';
import { routes } from '@/sections/app/routes';
import { peripheralColumns } from '@/sections/peripheral/types/column';
import Modal from '@/sections/app/components/Modal';
import Button from '@/sections/app/components/Button';
import styles from './PeripheralPage.module.scss';

const rows: Peripheral[] = [
  {
    id: 1,
    vendor: 'Cisco',
    status: Status.ONLINE,
    date: new Date().toISOString(),
  },
  {
    id: 2,
    vendor: 'Google',
    status: Status.OFFLINE,
    date: new Date().toISOString(),
  },
  {
    id: 3,
    vendor: 'Amazon',
    status: Status.OFFLINE,
    date: new Date().toISOString(),
  },
];

const PeripheralPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleCloseModal = () => setShowModal(false);

  const navigate = useNavigate();

  const handleOnButtonClick = ({ id, actionType }: ButtonClickEvent) => {
    if (actionType === 'show') navigate(routes.peripheralsShow(id));
    if (actionType === 'edit') navigate(routes.peripheralsEdit(id));
    if (actionType === 'delete') setShowModal(true);
  };

  const handleAddButtonClick = () => {
    navigate(routes.peripheralsCreate);
  };

  return (
    <div className={styles.card}>
      <Card>
        <div className={styles.card__content}>
          <DynamicTable
            title="Peripheral List"
            columns={peripheralColumns}
            rows={rows}
            onButtonClick={handleOnButtonClick}
            onAddButtonClick={handleAddButtonClick}
          />
        </div>
      </Card>
      <Modal
        showModal={showModal}
        onCloseModal={handleCloseModal}
        title="Remove Peripheral"
        bottom={
          <>
            <Button>Delete</Button>
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
