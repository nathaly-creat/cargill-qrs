import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NotAccess} from '../components/Shared/NotAccess.jsx'
import { Home } from '../components/Home/Home.jsx';


// ROUTER PRINCIPAL
export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NotAccess />} data-testid='change-views-NotFound'/>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }