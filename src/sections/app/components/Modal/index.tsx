import { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface Props {
  title: string;
  children: ReactNode;
  bottom: ReactNode;
  showModal?: boolean;
  onCloseModal: () => void;
}

const Modal = ({
  title,
  onCloseModal,
  children,
  bottom,
  showModal = false,
}: Props) => {
  return (
    <>
      {showModal && (
        <>
          <div className={styles.dark__bg} onClick={onCloseModal} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modal__header}>
                <h5 className={styles.heading}>{title}</h5>
              </div>
              <button className={styles.close__btn} onClick={onCloseModal}>
                X
              </button>
              <div className={styles.modal__content}>{children}</div>
              <div className={styles.modal__actions}>
                <div className={styles.actions__container}>{bottom}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
