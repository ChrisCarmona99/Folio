import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa8Hm4MBjyq3t68Rl9rJG6bMFiLo-FoaM",
  authDomain: "freelancerio.firebaseapp.com",
  projectId: "freelancerio",
  storageBucket: "freelancerio.appspot.com",
  messagingSenderId: "862365469668",
  appId: "1:862365469668:web:81d0b8fe9007865cbe95f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
