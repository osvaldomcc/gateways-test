import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { userEvent } from '@/tests/utils/test-utils';
import { NAME_MIN_LENGTH } from '@/modules/gateway/domain/Gateway';
import type { GatewayBody } from '@/modules/gateway/domain/Gateway';
import { ErrorMessages } from '@/sections/app/utils/errors';
import GatewayForm from '@/sections/gateway/components/GatewayForm';
import { GatewayMother } from '@/tests/mocks/gateway/gateway-factory';

describe('GatewayForm', () => {
  const user = userEvent.setup();

  it('should trigger all form errors', async () => {
    const handleSubmit = vi.fn();
    const gateway: GatewayBody = { ip: '', name: '' };
    render(
      <BrowserRouter>
        <GatewayForm
          initialValues={gateway}
          onSubmit={handleSubmit}
          isEdit={false}
        />
      </BrowserRouter>,
    );
    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    await user.click(addButton);
    const allErrors = screen.getAllByRole('alert');
    const fields = Object.keys(gateway).length;
    expect(allErrors).toHaveLength(fields);
  });

  it('should show name error', async () => {
    const handleSubmit = vi.fn();
    const badGateway = GatewayMother.createWithShortName();
    const errorMessage = ErrorMessages.minLength('name', NAME_MIN_LENGTH);
    render(
      <BrowserRouter>
        <GatewayForm
          initialValues={badGateway}
          onSubmit={handleSubmit}
          isEdit={false}
        />
      </BrowserRouter>,
    );
    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    await user.click(addButton);
    const nameErrorMessage = screen.getByRole('alert');
    expect(nameErrorMessage.textContent).toBe(errorMessage);
  });

  it('should show ip error', async () => {
    const handleSubmit = vi.fn();
    const badGateway = GatewayMother.createWithInvalidIp();
    const errorMessage = ErrorMessages.ip;
    render(
      <BrowserRouter>
        <GatewayForm
          initialValues={badGateway}
          onSubmit={handleSubmit}
          isEdit={false}
        />
      </BrowserRouter>,
    );
    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    await user.click(addButton);
    const ipErrorMessage = screen.getByRole('alert');
    expect(ipErrorMessage.textContent).toBe(errorMessage);
  });

  it('should call handleSubmit successfully', async () => {
    const handleSubmit = vi.fn();
    const gateway = GatewayMother.create();
    render(
      <BrowserRouter>
        <GatewayForm
          initialValues={gateway}
          onSubmit={handleSubmit}
          isEdit={false}
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
    const gateway = GatewayMother.create();
    render(
      <BrowserRouter>
        <GatewayForm initialValues={gateway} onSubmit={handleSubmit} isEdit />
      </BrowserRouter>,
    );
    const updateButton = screen.getByRole('button', {
      name: /update/i,
    });
    expect(updateButton).toBeTruthy();
  });
});
