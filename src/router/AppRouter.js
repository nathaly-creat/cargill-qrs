import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NotAccess} from '../components/Shared/NotAccess.jsx'
// import { HomePrueba } from '../components/Home/HomePrueba.jsx';
import {Suggestions}  from '../components/Suggestions/Admin'

// ROUTER PRINCIPAL
export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NotAccess />} data-testid='change-views-NotFound'/>
          {/* <Route path='/' element={<HomePrueba />} /> */}
          <Route path='/' element={<Suggestions/>} />
        </Routes>
      </BrowserRouter>
    );
  }