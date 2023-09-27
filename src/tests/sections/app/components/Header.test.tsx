import { act, screen } from '@testing-library/react';

import Header from '@/sections/app/components/Header';
import type { User } from '@/modules/user/domain/User';
import { useAuthContext } from '@/sections/app/hooks/useAuthContext';
import { render, renderHook, userEvent } from '@/tests/utils/test-utils';
import { capitalize } from '@/sections/app/utils/capitalize';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('should render logged user name', () => {
    const user: User = { name: 'jhon' };
    const { result } = renderHook(useAuthContext);
    act(() => result.current.handleUser(user));
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const userNameElement = screen.getByRole('heading', {
      name: capitalize(user.name),
    });
    expect(userNameElement).toBeTruthy();
  });

  it('should logout successfully', async () => {
    const user = userEvent.setup();
    const newUser: User = { name: 'jhon' };
    const { result } = renderHook(useAuthContext);
    act(() => result.current.handleUser(newUser));
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const avatarButton = screen.getByRole('button');
    await user.click(avatarButton);
    const logoutButton = screen.getByRole('button', {
      name: /logout/i,
    });
    await user.click(logoutButton);
    const { result: newResult } = renderHook(useAuthContext);
    expect(newResult.current.user.name).toBe('');
  });
});
