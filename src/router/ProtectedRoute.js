import React from 'react';
import { Navigate } from 'react-router-dom';
import { ServiceView } from '../views/ServiceView.js';
import { ComplainView } from '../views/ComplainView.js';

// ROUTER SEGUN USUARIO ACTIVO
export const ProtectedRoute = ({ userData, children }) => {
  if (userData?.rol === 'distribuidor') {
    return <ComplainView />;
  } else if (userData?.rol === 'servicios') {
    return <ServiceView />;
  } else {
    console.log('entra');
    return <Navigate to='/' />;
  }
};
