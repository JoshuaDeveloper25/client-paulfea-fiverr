import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { UserContext } from '../context';

export const PrivateRoutes = () => {
  const { state } = useContext(UserContext);

  return state.userInfo.token ? <Outlet /> : <Navigate to="/login" />;
};
