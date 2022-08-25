import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import {
    getFirestore, collection, addDoc, onSnapshot, doc, getDoc, 
    query, orderBy, serverTimestamp,
  } from 'firebase/firestore';

export {
    initializeApp,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    //deleteDoc,
    doc,
    getDoc,
    query,
    orderBy,
    serverTimestamp,
  };