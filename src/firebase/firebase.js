// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import {
    initializeApp,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    getFirestore,
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
export const db = getFirestore(app);
// const analytics = getAnalytics(app);


