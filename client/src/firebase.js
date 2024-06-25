// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "igniteestate-94981.firebaseapp.com",
  projectId: "igniteestate-94981",
  storageBucket: "igniteestate-94981.appspot.com",
  messagingSenderId: "746042404242",
  appId: "1:746042404242:web:3f7b540a143c328dd4e54b",
  measurementId: "G-1H5K680YKD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
