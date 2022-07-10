// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfvXWnf2FNsITaUFJYUvjrIj7hk4TQ1Pg",
  authDomain: "netflix-cl-c98e7.firebaseapp.com",
  projectId: "netflix-cl-c98e7",
  storageBucket: "netflix-cl-c98e7.appspot.com",
  messagingSenderId: "581405989452",
  appId: "1:581405989452:web:d36ebdd67be2a7864972e9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
