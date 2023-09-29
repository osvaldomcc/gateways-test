import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import type { PeripheralBody } from '@/modules/peripheral/domain/Peripheral';
import { Status } from '@/modules/peripheral/domain/Peripheral';
import PeripheralForm from '@/sections/peripheral/components/PeripheralForm';
import { GatewayMother } from '@/tests/mocks/gateway/gateway-factory';
import { userEvent } from '@/tests/utils/test-utils';
import { PeripheralMother } from '@/tests/mocks/peripheral/peripheral-factory';
import { ErrorMessages } from '@/sections/app/utils/errors';

describe('PeripheralForm', () => {
  const user = userEvent.setup();
  const gateways = GatewayMother.createList(5);

  it('should trigger all form errors', async () => {
    const FIELDS_WITH_ERRORS = 2;
    const handleSubmit = vi.fn();
    const peripheral: PeripheralBody = {
      date: '',
      gatewayId: 1,
      status: Status.OFFLINE,
      vendor: '',
    };

    render(
      <BrowserRouter>
        <PeripheralForm
          onSubmit={handleSubmit}
          gateways={gateways}
          initialValues={peripheral}
        />
      </BrowserRouter>,
    );
    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    await user.click(addButton);
    const allErrors = screen.getAllByRole('alert');
    expect(allErrors).toHaveLength(FIELDS_WITH_ERRORS);
  });

  it('should show date error', async () => {
    const handleSubmit = vi.fn();
    const peripheral = PeripheralMother.createWithInvalidDateFormat();

    const errorMessage = ErrorMessages.date('date');
    render(
      <BrowserRouter>
        <PeripheralForm
          onSubmit={handleSubmit}
          gateways={gateways}
          initialValues={peripheral}
        />
      </BrowserRouter>,
    );
    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    await user.click(addButton);
    const dateErrorMessage = screen.getByRole('alert');
    expect(dateErrorMessage.textContent).toBe(errorMessage);
  });

  it('should show vendor error', async () => {
    const handleSubmit = vi.fn();
    const peripheral = PeripheralMother.createWithInvalidVendor();

    const errorMessage = ErrorMessages.letters('vendor');
    render(
      <BrowserRouter>
        <PeripheralForm
          onSubmit={handleSubmit}
          gateways={gateways}
          initialValues={peripheral}
        />
      </BrowserRouter>,
    );
    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    await user.click(addButton);
    const dateErrorMessage = screen.getByRole('alert');
    expect(dateErrorMessage.textContent).toBe(errorMessage);
  });

  it('should render the select values', async () => {
    const NUMBER_OF_SELECTS = 2;
    const handleSubmit = vi.fn();
    const peripheral = PeripheralMother.create();

    render(
      <BrowserRouter>
        <PeripheralForm
          onSubmit={handleSubmit}
          gateways={gateways}
          initialValues={peripheral}
        />
      </BrowserRouter>,
    );

    const selects = screen.getAllByRole('combobox');
    expect(selects).toHaveLength(NUMBER_OF_SELECTS);

    const selectsOptions = screen.getAllByRole('option');
    const totalOfPossibleOptions =
      Object.values(Status).length + gateways.length;
    expect(selectsOptions).toHaveLength(totalOfPossibleOptions);
  });

  it('should call handleSubmit successfully', async () => {
    const handleSubmit = vi.fn();
    const peripheral = PeripheralMother.create();
    render(
      <BrowserRouter>
        <PeripheralForm
          onSubmit={handleSubmit}
          gateways={gateways}
          initialValues={peripheral}
        />
      </BrowserRouter>,
    );
    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    await user.click(addButton);

    await waitFor(() => expect(handleSubmit).toBeCalled());
  });

  it('should show update button if isEdit is true', async () => {
    const handleSubmit = vi.fn();
    const peripheral = PeripheralMother.create();

    render(
      <BrowserRouter>
        <PeripheralForm
          onSubmit={handleSubmit}
          gateways={gateways}
          initialValues={peripheral}
          isEdit
        />
      </BrowserRouter>,
    );
    const updateButton = screen.getByRole('button', {
      name: /update/i,
    });
    expect(updateButton).toBeTruthy();
  });
});
