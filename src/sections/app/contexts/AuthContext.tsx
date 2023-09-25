import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import type { User } from '@/modules/user/domain/User';
import { capitalize } from '@/sections/app/utils/capitalize';

interface AuthProvider {
  user: User;
  handleUser: (user: User) => void;
}

export const AuthContext = createContext<AuthProvider>({
  user: { name: '' },
  handleUser: () => {},
});

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({ name: '' });
  const handleUser = (user: User) => {
    const newUser =
      user.name !== '' ? { ...user, name: capitalize(user.name) } : user;
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
