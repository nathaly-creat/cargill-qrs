import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../components/Login/Login.jsx';
import { Home } from '../components/Home/Home.jsx';
import { auth, db } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  query,
  where,
  collection,
  getDocs,
} from '../firebase/firebase.utils.js';


/*Importación de Vistas*/
import {SuggestionsView} from "../views/Suggestion/SuggestionView.js"
import {ComplainView} from "../views/Complain/ComplainView.js"
import { TracingView } from '../views/Tracing/TracingView';
import { TracingViewSolicitud} from '../views/Tracing/TracingViewSolicitud';
import { TracingCalificacionView} from '../views/Tracing/TracingCalificacionView.js';

// ROUTER PRINCIPAL
export default function AppRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userRef = query(
        collection(db, 'user'),
        where('email', '==', user.email)
      );
      const res = await getDocs(userRef);
      res.forEach((usr) => {
        if (!userData) setUserData({ ...usr.data(), id: usr.id });
      });
    }
  });

  useEffect(() => {
    if (userData && location.pathname !== '/handler') navigate('/') ; //Este path router define el return vista reload**
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <Routes>
      <Route path='/' element={<Home setUserData={setUserData} />} />

      <Route path='/login' element={<Login setUserData={setUserData} />} />
      <Route path='/handler' element={<ProtectedRoute userData={userData} />} />
      <Route path="/handler/sugerencias" element={<SuggestionsView/>}/>
      <Route path="/handler/quejas" element={<ComplainView/>}/>
      <Route path="/handler/seguimiento" element={<TracingView/>}/>

      <Route path="/handler/seguimiento/solicitud" element={<TracingViewSolicitud/>}/>
      <Route path="/handler/seguimiento/solicitud/calificacion" element={<TracingCalificacionView/>}/>

    </Routes>
  );
}



































