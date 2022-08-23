// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import {
    initializeApp,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    // getFirestore,
    // collection,
    // addDoc,
    // onSnapshot,
    // deleteDoc,
    // doc,
    // getDoc,
    // query,
    // orderBy,
    // serverTimestamp,
  } from "./firebase.utils.js";

// Your web app's Firebase configuration




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE4DzYJ7zgw8TpThmzXM9s2_zbJn8hefQ",
  authDomain: "cargill-qrs.firebaseapp.com",
  projectId: "cargill-qrs",
  storageBucket: "cargill-qrs.appspot.com",
  messagingSenderId: "209922840115",
  appId: "1:209922840115:web:50b0e7aee46537a75bb546",
  measurementId: "G-QMY6KYQPY0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);
// const analytics = getAnalytics(app);


// Registrarse o iniciar sesión con google
export const signInGoogle = () => {
  const provider = new GoogleAuthProvider(); // crea proveedor de google
  // console.log(auth);
  signInWithPopup(auth, provider) // inicia sesion con google
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // obtiene credencial de google
      const token = credential.accessToken; // obtiene token de google
      const user = result.user; // obtiene usuario de google
      sessionStorage.setItem("token", token); // guarda token en sessionStorage
      sessionStorage.setItem("user", JSON.stringify(user)); // guarda usuario en sessionStorage
      window.location.hash = "quejas"; 
      console.log(credential, user);
    })
    .catch((error) => {
      const errorMessage = error.message; // obtiene el mensaje de error
      alert("Lo siento no concluiste tu acceso a tu perfil de google"); // muestra mensaje de error
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential); // muestra credencial de google en consola
      console.log(errorMessage); // muestra mensaje de error en consola
    });
};


// Iniciar sesión
export const logInEmail = async (email, password) => {
  // signInWithEmailAndPassword(auth, email, password) // inicia sesion con correo
  console.log('prueba', email, password)
  try {
    const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
    );
    const user = userCredential.user;
    console.log(user, 'dato')
    return true
    } catch (error) {
    return {error: error.message}
    }
    // .then((userCredential) => {
    //   const user = userCredential.user; // obtiene el usuario
    //   if (user.emailVerified) { // si el correo esta verificado
    //     sessionStorage.setItem('user', JSON.stringify(user)); // guarda usuario en sessionStorage
    //     // window.location.hash = 'post'; // redirecciona a post.
    //   } else {
    //     window.alert('Para iniciar sesión debes confirmar el link que enviamos a tu correo electrónico');
    //   }
    // })
    // .catch((error) => {
    //   const errorMessage = error.message;
      
    //   // window.alert('Usario y/o contraseña inválido');
    //   console.log(errorMessage);
    //   // throw error;
    // });
};

