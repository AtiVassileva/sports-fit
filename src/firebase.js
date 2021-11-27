import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCazVu2cDKkFDTiTWru_HA5x7oO0Jycj6w",
    authDomain: "sports-fit-2b337.firebaseapp.com",
    projectId: "sports-fit-2b337",
    storageBucket: "sports-fit-2b337.appspot.com",
    messagingSenderId: "904975218426",
    appId: "1:904975218426:web:14f42ee8fb72e6c0b57b43",
    measurementId: "G-BDYZXN05WY"
};

firebase.initializeApp(firebaseConfig);

export default firebase;