import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NotAccess} from '../components/Shared/NotAccess.jsx'


// ROUTER PRINCIPAL
export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NotAccess />} data-testid='change-views-NotFound'/>
        </Routes>
      </BrowserRouter>
    );
  }