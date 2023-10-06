// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgqtUXNePYRVvS1j1BlYIqqeoF0i0AUnw",
  authDomain: "laundry-app-4d98e.firebaseapp.com",
  projectId: "laundry-app-4d98e",
  storageBucket: "laundry-app-4d98e.appspot.com",
  messagingSenderId: "313882860037",
  appId: "1:313882860037:web:4add9755cd0e8987521a6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export {auth,db};

