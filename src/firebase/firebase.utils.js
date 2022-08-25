import { initializeApp } from 'firebase/app';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  where,
} from 'firebase/firestore';

export {
  initializeApp,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged, 
  signOut,
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  where,
  };
