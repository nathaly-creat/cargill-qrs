import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { NotAccess } from '../components/Shared/NotAccess';
import {
  getAuth,
  query,
  where,
  getDocs,
  collection,
} from '../firebase/firebase.utils.js';
import { db } from '../firebase/firebase.js';

// ROUTER SEGUN USUARIO ACTIVO
export const ProtectedRoute = ({ role, path, children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (auth.currentUser) {
          const userRef = query(
            collection(db, 'user'),
            where('email', '==', auth.currentUser.email)
          );
          const res = await getDocs(userRef);

          res.forEach((user) => {
            if (user === null) setUser({ ...user.data, id: user.id });
          });
        }
      } catch (err) {
        console.error(err);
      }
    })();
    // eslint-disable-next-line
  }, []);

  // petcion para traer inf del usuario
  if (user?.rol === role) {
    return <Route path={path} element={children} />;
  } else {
    return <Route path='/*' element={<NotAccess />} />;
  }
};
