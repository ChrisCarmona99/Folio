// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDa8Hm4MBjyq3t68Rl9rJG6bMFiLo-FoaM",
  authDomain: "freelancerio.firebaseapp.com",
  projectId: "freelancerio",
  storageBucket: "freelancerio.appspot.com",
  messagingSenderId: "862365469668",
  appId: "1:862365469668:web:81d0b8fe9007865cbe95f1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
