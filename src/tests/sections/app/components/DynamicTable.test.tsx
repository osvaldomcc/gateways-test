import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import DynamicTable from '@/sections/app/components/DynamicTable';
import { gatewayColumns } from '@/sections/gateway/types/column';
import { GatewayMother } from '@/tests/mocks/gateway/gateway-factory';
import { userEvent } from '@/tests/utils/test-utils';
import { ButtonClickEvent } from '../../../../sections/app/components/DynamicTable/index';

describe('DynamicTable', () => {
  const user = userEvent.setup();
  const ROW_HEADER = 1;
  const title = 'Table title';
  const actionButtonsTitle = ['Show', 'Edit', 'Delete'];
  const gateways = GatewayMother.createList(1);

  const disconnect = vi.fn();
  const observe = vi.fn();

  beforeAll(() => {
    const IntersectionObserverMock = vi.fn((callback) => {
      callback([{ isIntersecting: true }]);
      return {
        disconnect,
        observe,
      };
    });
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
  });

  afterAll(() => {
    vi.unstubAllGlobals();
    disconnect.mockReset();
    observe.mockReset();
  });

  it('should render loading and table text', () => {
    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={false}
          isLoading={true}
          rows={gateways}
        />
      </BrowserRouter>,
    );
    const tableTitle = screen.getByText(`${title}:`);
    expect(tableTitle).toBeTruthy();

    const loadingText = screen.getByText(/loading/i);
    expect(loadingText).toBeTruthy();
  });

  it('should render error message', () => {
    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={true}
          isLoading={false}
          rows={gateways}
        />
      </BrowserRouter>,
    );

    const loadingText = screen.getByText(/there was an error/i);
    expect(loadingText).toBeTruthy();
  });

  it('should render all items', () => {
    const gateways = GatewayMother.createList(10);

    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={false}
          isLoading={false}
          rows={gateways}
        />
      </BrowserRouter>,
    );
    const allRows = screen.getAllByRole('row');
    expect(allRows.length - ROW_HEADER).toBe(gateways.length);
  });

  it('should render all action buttons', () => {
    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={false}
          isLoading={false}
          rows={gateways}
        />
      </BrowserRouter>,
    );
    actionButtonsTitle.forEach((name) => {
      const buttonElement = screen.getByRole('button', {
        name,
      });
      expect(buttonElement).toBeTruthy();
    });
  });

  it('should render add button', () => {
    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={false}
          isLoading={true}
          rows={gateways}
        />
      </BrowserRouter>,
    );
    const buttonElement = screen.getByRole('button', {
      name: /add/i,
    });
    expect(buttonElement).toBeTruthy();
  });

  it('should not render action buttons', () => {
    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={false}
          isLoading={false}
          rows={gateways}
          hideActions
        />
      </BrowserRouter>,
    );
    actionButtonsTitle.forEach((name) => {
      const buttonElement = screen.queryByRole('button', {
        name,
      });
      expect(buttonElement).toBeFalsy();
    });
  });

  it('should trigger add button', async () => {
    const handleAddButtonEvent = vi.fn();
    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={false}
          isLoading={true}
          rows={gateways}
          onAddButtonClick={handleAddButtonEvent}
        />
      </BrowserRouter>,
    );
    const buttonElement = screen.getByRole('button', {
      name: /add/i,
    });
    await user.click(buttonElement);
    expect(handleAddButtonEvent).toBeCalledTimes(1);
  });

  it('should trigger handleButtonClick with the right parameters', async () => {
    const handleButtonClick = vi.fn<ButtonClickEvent[]>();
    const [gateway] = gateways;
    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={false}
          isLoading={false}
          rows={gateways}
          onButtonClick={handleButtonClick}
        />
      </BrowserRouter>,
    );
    const allButtons = actionButtonsTitle.map((name) => {
      return screen.getByRole('button', {
        name,
      });
    });
    const buttonsClick = allButtons.map((button) => user.click(button));
    await Promise.all(buttonsClick);
    actionButtonsTitle.forEach((action) => {
      expect(handleButtonClick).toHaveBeenCalledWith({
        id: gateway.id,
        actionType: action.toLowerCase(),
      });
    });
  });

  it('should render back button', async () => {
    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={false}
          isLoading={true}
          rows={gateways}
          showBackButton
        />
      </BrowserRouter>,
    );
    const buttonElement = screen.getByTestId('backButton');
    expect(buttonElement).toBeTruthy();
  });

  it('should render infinity scroll spinner and trigger reach end function', async () => {
    const handleReachEnd = vi.fn();
    render(
      <BrowserRouter>
        <DynamicTable
          title={title}
          columns={gatewayColumns}
          hasError={false}
          isLoading={true}
          rows={gateways}
          onReachEnd={handleReachEnd}
          hasNext
        />
      </BrowserRouter>,
    );
    const buttonElement = screen.getByRole('spinbutton');
    expect(buttonElement).toBeTruthy();
    expect(handleReachEnd).toBeCalledTimes(1);
  });
});
