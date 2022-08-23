import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NotAccess} from '../components/Shared/NotAccess.jsx'
import { HomePrueba } from '../components/Login/loginPrueba.jsx';


// ROUTER PRINCIPAL
export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NotAccess />} data-testid='change-views-NotFound'/>
          <Route path='/' element={<HomePrueba />} />
        </Routes>
      </BrowserRouter>
    );
  }