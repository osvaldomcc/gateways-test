import { screen } from '@testing-library/react';

import { render, renderHook, userEvent } from '@/tests/utils/test-utils';
import LoginPage from '@/sections/app/pages/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import { NAME_MIN_LENGTH } from '@/modules/peripheral/domain/Peripheral';
import { useAuthContext } from '@/sections/app/hooks/useAuthContext';
import { capitalize } from '@/sections/app/utils/capitalize';

describe('LoginPage', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>,
    );
  });

  it('should show the login form', () => {
    expect(
      screen.getByRole('heading', {
        name: /Login/i,
      }),
    ).toBeTruthy();
  });

  it('should show show error name message', async () => {
    const errorMessage = `name must be at least ${NAME_MIN_LENGTH} characters`;
    const user = userEvent.setup();
    await user.type(screen.getByRole('textbox', { name: /name/i }), 'j');
    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });
    await user.click(loginButton);
    const errorNameMessage = await screen.findByRole('alert');
    expect(errorNameMessage.textContent).toBe(errorMessage);
  });

  it('should login successfully', async () => {
    const name = 'jhon';
    const user = userEvent.setup();
    await user.type(screen.getByRole('textbox', { name: /name/i }), name);
    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });
    await user.click(loginButton);
    const { result } = renderHook(useAuthContext);
    expect(result.current.user.name).toBe(capitalize(name));
  });
});
