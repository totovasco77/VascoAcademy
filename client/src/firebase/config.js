// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPdoFBZyHSR4-FtXQ-MkoTmmdFURwWUNs",
  authDomain: "vasco-academy.firebaseapp.com",
  projectId: "vasco-academy",
  storageBucket: "vasco-academy.appspot.com",
  messagingSenderId: "269237534256",
  appId: "1:269237534256:web:e43c405883b2dd0842b7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); 
const auth = getAuth(app);

export {db};
export {auth};
export {googleProvider};




