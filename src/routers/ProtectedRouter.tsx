import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

type ProtectedRouterProps = {
  isAuth: boolean;
};

export const ProtectedRouter = ({ isAuth }: ProtectedRouterProps) => {
  return <>{isAuth ? <Outlet /> : <Navigate to="/" />}</>;
};
