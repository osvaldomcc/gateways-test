import { act, screen } from '@testing-library/react';

import { User } from '@/modules/user/domain/User';
import { useAuthContext } from '@/sections/app/hooks/useAuthContext';
import DashboardPage from '@/sections/app/pages/DashboardPage';
import { render, renderHook } from '@/tests/utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { capitalize } from '@/sections/app/utils/capitalize';

describe('DashboardPage', () => {
  it('should show Hi message with the name of the logged user', () => {
    const user: User = { name: 'jhon' };
    const { result } = renderHook(useAuthContext);
    act(() => result.current.handleUser(user));
    render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>,
    );
    const welcomeMessage = screen.getByRole('heading', {
      name: `Hello ${capitalize(user.name)}!`,
    });
    expect(welcomeMessage).toBeTruthy();
  });

  it('should render the welcome image', () => {
    render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>,
    );
    const welcomeImage = screen.getByRole('img', {
      name: /welcome-image/i,
    });
    expect(welcomeImage).toBeTruthy();
  });

  it('should render welcome paragraph', () => {
    render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>,
    );
    const welcomeParagraph = screen.getByTitle('dashboard welcome');
    expect(welcomeParagraph).toBeTruthy();
  });
});
