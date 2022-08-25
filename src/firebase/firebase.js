import {
  initializeApp,
  getAuth,
  signInWithEmailAndPassword,
  getFirestore,
  collection,
  // addDoc,
  // onSnapshot,
  // deleteDoc,
  // doc,
  getDocs,
  query,
  where,
  // orderBy,
  // serverTimestamp,
} from "./firebase.utils.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCE4DzYJ7zgw8TpThmzXM9s2_zbJn8hefQ',
  authDomain: 'cargill-qrs.firebaseapp.com',
  projectId: 'cargill-qrs',
  storageBucket: 'cargill-qrs.appspot.com',
  messagingSenderId: '209922840115',
  appId: '1:209922840115:web:50b0e7aee46537a75bb546',
  measurementId: 'G-QMY6KYQPY0',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Iniciar sesión Cliente
export const logInEmailClient = async (email, password, setUserData) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const userRef = query(
      collection(db, 'user'),
      where('email', '==', user.email)
    );
    const res = await getDocs(userRef);

    res.forEach((usr) => {
      setUserData({ ...usr.data(), id: usr.id });
    });

    sessionStorage.setItem('user', JSON.stringify(user)); // guarda usuario en sessionStorage

  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};