import { auth, db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";

export async function createPortfolioContent(text) {
  const data = { text };
  const docRef = await addDoc(collection(db, "PortfolioContent"), {
    Body: text,
    user: auth.currentUser.uid,
  });
  return docRef;
}
