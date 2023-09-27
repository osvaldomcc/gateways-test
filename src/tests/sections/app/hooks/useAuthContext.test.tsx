import { act } from '@testing-library/react';

import { useAuthContext } from '@/sections/app/hooks/useAuthContext';
import { renderHook } from '@/tests/utils/test-utils';
import { capitalize } from '@/sections/app/utils/capitalize';
import type { User } from '@/modules/user/domain/User';

describe('useAuthContext', () => {
  it('should be empty at the beginning', () => {
    const { result } = renderHook(useAuthContext);
    expect(result.current.user.name).toBeFalsy();
  });

  it('should set the user', () => {
    const user: User = { name: 'osvaldo' };
    const { result } = renderHook(useAuthContext);
    act(() => result.current.handleUser(user));
    const username = capitalize(user.name);
    expect(result.current.user.name).toBe(username);
  });

  it('should be set to empty string', () => {
    const user: User = { name: '' };
    const { result } = renderHook(useAuthContext);
    act(() => result.current.handleUser(user));
    expect(result.current.user.name).toBe('');
  });
});
