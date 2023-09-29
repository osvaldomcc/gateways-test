import { render, screen } from '@testing-library/react';

import { userEvent } from '@/tests/utils/test-utils';
import Modal from '@/sections/app/components/Modal';

describe('Modal', () => {
  const user = userEvent.setup();
  const title = 'Remove item';
  const children = <h1>Children</h1>;
  const bottom = <button>Cancel</button>;
  const handleCloseModal = vi.fn();

  it('should not display the modal', () => {
    render(
      <Modal title={title} bottom={bottom} onCloseModal={handleCloseModal}>
        {children}
      </Modal>,
    );
    const alert = screen.queryByRole('dialog');
    expect(alert).toBeFalsy();
  });

  it('should not display the modal', () => {
    render(
      <Modal
        title={title}
        bottom={bottom}
        onCloseModal={handleCloseModal}
        showModal
      >
        {children}
      </Modal>,
    );
    const alert = screen.queryByRole('dialog');
    expect(alert).toBeTruthy();
  });

  it('should render the given title', () => {
    render(
      <Modal
        title={title}
        bottom={bottom}
        onCloseModal={handleCloseModal}
        showModal
      >
        {children}
      </Modal>,
    );
    const titleElement = screen.getByRole('heading', {
      name: title,
    });
    expect(titleElement).toBeTruthy();
  });

  it('should render the given children', () => {
    render(
      <Modal
        title={title}
        bottom={bottom}
        onCloseModal={handleCloseModal}
        showModal
      >
        {children}
      </Modal>,
    );
    const childrenElement = screen.getByRole('heading', {
      name: /children/i,
    });
    expect(childrenElement).toBeTruthy();
  });

  it('should render the given bottom', () => {
    render(
      <Modal
        title={title}
        bottom={bottom}
        onCloseModal={handleCloseModal}
        showModal
      >
        {children}
      </Modal>,
    );
    const bottomElement = screen.getByRole('button', {
      name: /cancel/i,
    });
    expect(bottomElement).toBeTruthy();
  });

  it('should trigger handleCloseModal', async () => {
    render(
      <Modal
        title={title}
        bottom={bottom}
        onCloseModal={handleCloseModal}
        showModal
      >
        {children}
      </Modal>,
    );
    const alert = screen.getByRole('dialog');
    await user.click(alert);
    expect(handleCloseModal).toBeCalledTimes(1);
  });
});
