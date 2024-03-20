// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoG-P9w7J-S-fQqGO3JO-ke7UcoMcHZ2s",
  authDomain: "chatapp-89046.firebaseapp.com",
  projectId: "chatapp-89046",
  storageBucket: "chatapp-89046.appspot.com",
  messagingSenderId: "434450832307",
  appId: "1:434450832307:web:99b0ad1a300f996a4c89c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider()