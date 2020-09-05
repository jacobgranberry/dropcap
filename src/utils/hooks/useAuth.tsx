import { useContext } from 'react';
import { AuthContext } from '../auth/auth';

export const useAuth = () => {
  return useContext(AuthContext);
};
