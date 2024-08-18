import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCq2NOOzoavxIkvNOAsPmqdPK5eWThZ38M",
  authDomain: "react-netflix-clone-4ece5.firebaseapp.com",
  projectId: "react-netflix-clone-4ece5",
  storageBucket: "react-netflix-clone-4ece5.appspot.com",
  messagingSenderId: "725794232814",
  appId: "1:725794232814:web:f190c4038bef1376af56ff",
  measurementId: "G-85ECBGXCYJ"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);