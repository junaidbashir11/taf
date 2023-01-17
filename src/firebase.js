// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserPopupRedirectResolver, browserSessionPersistence, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqIQvGk2JYtDsKSyPaSMGV_ktqZ7xWQXc",
    authDomain: "foodapp-d170b.firebaseapp.com",
    projectId: "foodapp-d170b",
    storageBucket: "foodapp-d170b.appspot.com",
    messagingSenderId: "455478360233",
    appId: "1:455478360233:web:94f81847319d0e0dbb91b8",
    measurementId: "G-H99MN3FJVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore();

