// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa8Hm4MBjyq3t68Rl9rJG6bMFiLo-FoaM",
  authDomain: "freelancerio.firebaseapp.com",
  projectId: "freelancerio",
  storageBucket: "freelancerio.appspot.com",
  messagingSenderId: "862365469668",
  appId: "1:862365469668:web:81d0b8fe9007865cbe95f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
export const auth = getAuth(app);
export const database = getFirestore(app);

=======
export const auth = getAuth(); 
export const database = getFirestore();
>>>>>>> 563a6ecc2e10583f249146e1a06236e3b59d2439
