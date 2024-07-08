
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjT8mqGbJ7JUW6Ohl_EKDmUhfQNAlAjac",
  authDomain: "bookitnow-1959f.firebaseapp.com",
  projectId: "bookitnow-1959f",
  storageBucket: "bookitnow-1959f.appspot.com",
  messagingSenderId: "46651065918",
  appId: "1:46651065918:web:9f9aac45a84dc8c37cb36f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,database };
