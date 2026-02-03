import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8VXWRdRrtt9HEW7Te_39YuxZB59uULSg",
  authDomain: "resume-3471b.firebaseapp.com",
  projectId: "resume-3471b",
  storageBucket: "resume-3471b.appspot.com",
  messagingSenderId: "947947705881",
  appId: "1:947947705881:web:3603801d650ad5ab5dfc88",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
