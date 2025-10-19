// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ZQOlltOuInpk4tS1HKNSWH6S37rGERA",
  authDomain: "netflix-9366e.firebaseapp.com",
  projectId: "netflix-9366e",
  storageBucket: "netflix-9366e.firebasestorage.app",
  messagingSenderId: "42151927278",
  appId: "1:42151927278:web:b021e25556f72b169c82ff",
  measurementId: "G-NQ47Y2QMK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();