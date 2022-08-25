import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {NotAccess} from '../components/Shared/NotAccess.jsx'

// import {NotAccess} from '../components/Shared/NotAccess.jsx'
import {UserRoutes} from './UserRoutes'
import { Login } from '../components/Login/loginPrueba.jsx'
import {ComplainView} from '../views/ComplainView'
import {ServiceView} from '../views/ServiceView'
import { Home } from '../components/Home/Home.jsx'



// ROUTER PRINCIPAL
export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />



          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<UserRoutes />} data-testid='change-views-user'/>
          <Route path='/quejas' element={<ComplainView />} />
          <Route path='/servicios' element={<ServiceView />} />
        </Routes>
      </BrowserRouter>
    );
  }