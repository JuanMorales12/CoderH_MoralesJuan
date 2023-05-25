// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,//"AIzaSyA0HowS5MNUO5vwu2sxLpLQ73jQi9JoY8E",
  authDomain: import.meta.env.VITE_authDomain,//"coderhouse-tiendamorales.firebaseapp.com",
  projectId: import.meta.env.VITE_projectId,//"coderhouse-tiendamorales",
  storageBucket: import.meta.env.VITE_storageBucket,//"coderhouse-tiendamorales.appspot.com",
  messagingSenderId: import.meta.env.VITE_messagingSenderId,//"311829988926",
  appId: import.meta.env.VITE_appId,//"1:311829988926:web:b7fa276ca63b0d456a736f",
  measurementId: import.meta.env.VITE_measurementId//"G-WLS2T1TS1Y"
};

initializeApp(firebaseConfig);
// Initialize Firebase
export const db = getFirestore();