import { db } from "./firebaseConfig";
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
  });
  return docRef;
}

export async function fetchPortfolioContent() {
  const querySnapshot = await getDocs(collection(db, "PortfolioContent"));
  return querySnapshot.docs.map((doc) => ({ ...doc.data }));
}
