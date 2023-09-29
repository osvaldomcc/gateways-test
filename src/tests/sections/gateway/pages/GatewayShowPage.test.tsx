import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GatewayShowPage from '@/sections/gateway/pages/GatewayShowPage';
import { gatewayWithPeripherals } from '@/tests/mocks/gateway/gateway-handlers';

describe('GatewayShowPage', () => {
  const { name, peripherals } = gatewayWithPeripherals;
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/gateways/1/show']}>
        <Routes>
          <Route path="/gateways/:id/show" element={<GatewayShowPage />} />
        </Routes>
      </MemoryRouter>,
    );
  });
  it('should render the right name', async () => {
    const nameElement = await screen.findByText(name);
    expect(nameElement).toBeTruthy();
  });

  it('should render all its peripherals', async () => {
    const linkElements = await screen.findAllByRole('link');
    expect(linkElements).toHaveLength(peripherals.length);
  });
});
