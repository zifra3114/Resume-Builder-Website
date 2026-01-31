// Firebase core
import { initializeApp } from "firebase/app";

// Firebase services
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config — corrected
const firebaseConfig = {
  apiKey: "AIzaSyA8VXWRdRrtt9HEW7Te_39YuxZB59uULSg",
  authDomain: "resume-3471b.firebaseapp.com",
  projectId: "resume-3471b",
  storageBucket: "resume-3471b.appspot.com", // ✅ Corrected
  messagingSenderId: "947947705881",
  appId: "1:947947705881:web:3603801d650ad5ab5dfc88",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore for Signup/Login
export const auth = getAuth(app);
export const db = getFirestore(app);
