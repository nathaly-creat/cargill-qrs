import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {UserRoutes} from './UserRoutes'
import { Login } from '../components/Login/loginPrueba.jsx'
import {ComplainView} from '../views/ComplainView'
import {ServiceView} from '../views/ServiceView'


// ROUTER PRINCIPAL
export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/*' element={<UserRoutes />} data-testid='change-views-user'/>
          <Route path='/quejas' element={<ComplainView />} />
          <Route path='/servicios' element={<ServiceView />} />
        </Routes>
      </BrowserRouter>
    );
  }