import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "clone-5f3d1.firebaseapp.com",
  projectId: "clone-5f3d1",
  storageBucket: "clone-5f3d1.appspot.com",
  messagingSenderId: "696853903842",
  appId: "1:696853903842:web:0b8992bb24f890854f61bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
