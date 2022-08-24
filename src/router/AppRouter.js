import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {NotAccess} from '../components/Shared/NotAccess.jsx'
import {UserRoutes} from './UserRoutes'
import { LoginPrueba } from '../components/Login/loginPrueba.jsx'
import {ComplainView} from '../views/ComplainView'
import {ServiceView} from '../views/ServiceView'


// ROUTER PRINCIPAL
export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPrueba />} />
          <Route path='/*' element={<UserRoutes />} data-testid='change-views-user'/>
          <Route path='/quejas' element={<ComplainView />} />
          <Route path='/servicios' element={<ServiceView />} />
        </Routes>
      </BrowserRouter>
    );
  }