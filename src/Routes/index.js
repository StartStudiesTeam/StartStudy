import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { AuthStore } from '../stores/Auth/store';


function Routes() {
  const signedUser = AuthStore((state) => state.signedUser);
  const signedGuest = AuthStore((state) => state.signedGuest);

  return (
    (signedUser || signedGuest) ? <AppRoutes /> : <AuthRoutes />
  )
}

export default Routes;
