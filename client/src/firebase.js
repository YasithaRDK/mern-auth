// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-43c46.firebaseapp.com",
  projectId: "mern-auth-43c46",
  storageBucket: "mern-auth-43c46.appspot.com",
  messagingSenderId: "24326740333",
  appId: "1:24326740333:web:714a16b2f7fe141109a264",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
