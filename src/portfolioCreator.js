import { db } from ".firebaseConfig";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    Timestamp,
} from "firebase/firestore";

//All functions below are for interacting with cloud services firebase 

const [text, setText] = useState("");

export async function portfolioCreator ({body}) {
    const data = {body};
    const docRef = await addDoc(collection(db, "projects")), {
        Body: projects,
    }
}

export async function fetchPortfolio() {
    const querySnapshot = await getDocs(collection(db, "projects"));
    return querySnapshot.docs.map ((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
}



