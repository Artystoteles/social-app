// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtK7SFd1FQ0HWTGppvQRXTW4JlKM1W2pA",
  authDomain: "social-app-292de.firebaseapp.com",
  projectId: "social-app-292de",
  storageBucket: "social-app-292de.appspot.com",
  messagingSenderId: "959038585208",
  appId: "1:959038585208:web:2fe272dce54a28a52a708d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
