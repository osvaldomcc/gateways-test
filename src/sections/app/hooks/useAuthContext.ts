import { useContext } from 'react';
import { AuthContext } from '@/sections/app/contexts/AuthContext';

export const useAuthContext = () => {
  return useContext(AuthContext);
};
