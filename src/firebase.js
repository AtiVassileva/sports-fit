/* eslint-disable import/no-anonymous-default-export */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCazVu2cDKkFDTiTWru_HA5x7oO0Jycj6w",
  authDomain: "sports-fit-2b337.firebaseapp.com",
  databaseURL: "https://sports-fit-2b337-default-rtdb.firebaseio.com",
  projectId: "sports-fit-2b337",
  storageBucket: "sports-fit-2b337.appspot.com",
  messagingSenderId: "904975218426",
  appId: "1:904975218426:web:14f42ee8fb72e6c0b57b43",
  measurementId: "G-BDYZXN05WY"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };