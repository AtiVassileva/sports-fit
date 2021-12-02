import { collection, addDoc } from "@firebase/firestore";
import db from '../firebase';

export const createNewDiet = async (name, imageUrl, description) => {
    const collectionRef = collection(db, "diets");
    let payload = { name, imageUrl, description };

    await addDoc(collectionRef, payload);
}